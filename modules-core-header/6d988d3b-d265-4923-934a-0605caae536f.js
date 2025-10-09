try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6d988d3b-d265-4923-934a-0605caae536f", e._sentryDebugIdIdentifier = "sentry-dbid-6d988d3b-d265-4923-934a-0605caae536f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3383], {
    20027: (e, t, r) => {
      r.d(t, {
        N: () => l
      });
      var n = r(71127),
        o = r(85426),
        i = r(95362),
        a = r(21222),
        s = r(42295);

      function l(e) {
        const t = e + "CollectionProvider",
          [r, l] = (0, o.A)(t),
          [u, c] = r(t, {
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
            return (0, s.jsx)(u, {
              scope: t,
              itemMap: i,
              collectionRef: o,
              children: r
            })
          };
        d.displayName = t;
        const f = e + "CollectionSlot",
          h = (0, a.createSlot)(f),
          p = n.forwardRef(((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = c(f, r), a = (0, i.s)(t, o.collectionRef);
            return (0, s.jsx)(h, {
              ref: a,
              children: n
            })
          }));
        p.displayName = f;
        const m = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          y = (0, a.createSlot)(m),
          g = n.forwardRef(((e, t) => {
            const {
              scope: r,
              children: o,
              ...a
            } = e, l = n.useRef(null), u = (0, i.s)(t, l), d = c(m, r);
            return n.useEffect((() => (d.itemMap.set(l, {
              ref: l,
              ...a
            }), () => {
              d.itemMap.delete(l)
            }))), (0, s.jsx)(y, {
              [v]: "",
              ref: u,
              children: o
            })
          }));
        return g.displayName = m, [{
          Provider: d,
          Slot: p,
          ItemSlot: g
        }, function(t) {
          const r = c(e + "CollectionConsumer", t);
          return n.useCallback((() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${v}]`));
            return Array.from(r.itemMap.values()).sort(((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)))
          }), [r.collectionRef, r.itemMap])
        }, l]
      }
      Map
    },
    29044: (e, t, r) => {
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
    33383: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => f,
        AlertBanner: () => h,
        Body: () => cd,
        Breadcrumbs: () => m,
        Button: () => it,
        Checkbox: () => s,
        Code: () => Uf,
        Display: () => jf,
        Divider: () => Nf,
        Dropdown: () => o,
        Heading: () => N,
        IconButton: () => nd,
        Label: () => Mf,
        Lightbox: () => Ef,
        Loader: () => th,
        RadioGroup: () => c,
        Spinner: () => We,
        Switch: () => i,
        Tag: () => p,
        Text: () => M,
        TextArea: () => l,
        TextField: () => d,
        TextSemantics: () => A,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => af,
        Content: () => of,
        Portal: () => sf,
        Root: () => rf,
        Trigger: () => nf,
        useTooltipContext: () => tf
      });
      var o = {};
      r.r(o), r.d(o, {
        Content: () => Sv,
        Description: () => jv,
        Hint: () => Iv,
        Label: () => Nv,
        Option: () => kv,
        OptionIcon: () => Dv,
        OptionText: () => Rv,
        Portal: () => Lv,
        Root: () => Pv,
        ScrollArea: () => Cv,
        StatusIcon: () => Mv,
        StatusRoot: () => Av,
        StatusText: () => Hv,
        Trigger: () => xv,
        TriggerIcon: () => Tv,
        TriggerText: () => Ov,
        useDropdownContext: () => Ev
      });
      var i = {};
      r.r(i), r.d(i, {
        Description: () => cy,
        Input: () => ly,
        Label: () => uy,
        Root: () => sy,
        useSwitchContext: () => ay
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => Cy,
        CheckMD: () => Sy,
        CheckXL: () => xy,
        DashLG: () => Ty,
        DashMD: () => Oy,
        DashXL: () => Ny
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => Gy,
        ErrorText: () => Xy,
        Input: () => qy,
        Label: () => Uy,
        Root: () => Fy
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => lg,
        Hint: () => ug,
        Input: () => sg,
        Label: () => ag,
        Root: () => ig,
        RootContext: () => ng,
        StatusIcon: () => dg,
        StatusRoot: () => cg,
        StatusText: () => fg,
        useTextAreaContext: () => og
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => db,
        DotMD: () => cb,
        DotXL: () => fb
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => rb,
        Input: () => pb,
        Label: () => tb,
        Option: () => hb,
        OptionDescription: () => vb,
        OptionLabel: () => mb,
        Options: () => eb,
        Root: () => Jg,
        StatusIcon: () => ob,
        StatusRoot: () => nb,
        StatusText: () => ib,
        useRadioGroupContext: () => Qg
      });
      var d = {};
      r.r(d), r.d(d, {
        Button: () => b_,
        Control: () => v_,
        Description: () => w_,
        Hint: () => m_,
        Icon: () => g_,
        Input: () => y_,
        Label: () => p_,
        PasswordButton: () => __,
        Root: () => h_,
        StatusIcon: () => P_,
        StatusRoot: () => E_,
        StatusText: () => S_
      });
      var f = {};
      r.r(f), r.d(f, {
        Body: () => z_,
        CloseButton: () => Y_,
        Description: () => G_,
        ErrorText: () => W_,
        Footer: () => K_,
        Header: () => V_,
        Icon: () => q_,
        Link: () => X_,
        Root: () => B_,
        RootContext: () => M_,
        Title: () => U_,
        iconStatusMap: () => F_,
        useAlertContext: () => H_
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => Qw,
        CloseButton: () => tE,
        Description: () => $w,
        Icon: () => Zw,
        Link: () => eE,
        PaginationCounter: () => iE,
        PaginationNav: () => rE,
        PaginationNextButton: () => nE,
        PaginationPrevButton: () => oE,
        PaginationViewport: () => Jw,
        Root: () => Ww,
        RootContext: () => Xw,
        iconStatusMap: () => Yw,
        useAlertBannerContext: () => Kw
      });
      var p = {};
      r.r(p), r.d(p, {
        CloseButton: () => EE,
        Icon: () => wE,
        Label: () => _E,
        Root: () => bE,
        RootContext: () => yE,
        useTagContext: () => gE
      });
      var m = {};
      r.r(m), r.d(m, {
        Icon: () => HE,
        Item: () => ME,
        OverflowMenu: () => BE,
        OverflowMenuItem: () => VE,
        Root: () => AE,
        RootContext: () => LE,
        useBreadcrumbsContext: () => DE
      });
      var v = r(42295),
        y = r(43467),
        g = r(71127),
        b = r.n(g),
        _ = r(32067);

      function w(e) {
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

      function E(e, t) {
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
          t % 2 ? E(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = w(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(t) {
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
      var C, x, O = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        T = (C = {
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
        }, x = e => {
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
          for (var [l, u] of C.compoundVariants) O(l, r, C.defaultVariants) && (t += " " + u);
          return t
        }, x.variants = () => Object.keys(C.variantClassNames), x.classNames = {
          get base() {
            return C.defaultClassName.split(" ")[0]
          },
          get variants() {
            return S(C.variantClassNames, (e => S(e, (e => e.split(" ")[0]))))
          }
        }, x);
      const N = (0, g.forwardRef)((({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? _.DX : `h${t}`,
          a = (0, y.mergeProps)(n, {
            className: T({
              level: t
            })
          });
        return (0, v.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...a
        })
      }));

      function j(e) {
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

      function I(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? I(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = j(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function R(e, t) {
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
        L = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = k(k({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) D(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return R(e.variantClassNames, (e => R(e, (e => e.split(" ")[0]))))
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
      const A = {
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
        M = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? _.DX : A[r] || "span",
            a = (0, y.mergeProps)(n, {
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

      function H(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class B extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var V = B;

      function z(e) {
        if ("string" != typeof e) throw new V(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = Y.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = q[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new V(e);
          return `#${r}`
        }(e) : e;
        const r = G.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(U(e, 2), 16))), parseInt(U(e[3] || "f", 2), 16) / 255]
        }
        const n = X.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 16))), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = K.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 10))), parseFloat(e[3] || "1")]
        }
        const i = W.exec(t);
        if (i) {
          const [t, r, n, o] = Array.from(i).slice(1).map(parseFloat);
          if (H(0, 100, r) !== r) throw new V(e);
          if (H(0, 100, n) !== n) throw new V(e);
          return [...$(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new V(e)
      }
      const F = e => parseInt(e.replace(/_/g, ""), 36),
        q = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce(((e, t) => {
          const r = F(t.substring(0, 3)),
            n = F(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }), {}),
        U = (e, t) => Array.from(Array(t)).map((() => e)).join(""),
        G = new RegExp(`^#${U("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        X = new RegExp(`^#${U("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        K = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${U(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        W = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        Y = /^[a-z]+$/i,
        Z = e => Math.round(255 * e),
        $ = (e, t, r) => {
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

      function Q(e, t) {
        const [r, n, o, i] = function(e) {
          const [t, r, n, o] = z(e).map(((e, t) => 3 === t ? e : e / 255)), i = Math.max(t, r, n), a = Math.min(t, r, n), s = (i + a) / 2;
          if (i === a) return [0, 0, s, o];
          const l = i - a;
          return [60 * (t === i ? (r - n) / l + (r < n ? 6 : 0) : r === i ? (n - t) / l + 2 : (t - r) / l + 4), s > .5 ? l / (2 - i - a) : l / (i + a), s, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${H(0,100,100*t).toFixed()}%, ${H(0,100,100*r).toFixed()}%, ${parseFloat(H(0,1,n).toFixed(3))})`
        }(r, n, o - t, i)
      }

      function J(e, t) {
        return Q(e, -t)
      }
      var ee = r(23644);

      function te(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          (0, ee.Bx)(t, ((e, t) => {
            if (null != e) {
              var o = (0, ee.Jt)(n, t);
              r[(0, ee.Tm)(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (r[(0, ee.Tm)(i)] = a)
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
      var re = {
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
      const ne = e => {
        const t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      };

      function oe(e) {
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

      function ie(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ie(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = oe(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ie(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function se(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var le = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ue = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ae(ae({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) le(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return se(e.variantClassNames, (e => se(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        ce = "var(--foundry_1qqcnua0)",
        de = "var(--foundry_1qqcnua1)",
        fe = "var(--foundry_1qqcnua2)",
        he = "var(--foundry_1qqcnua3)",
        pe = "var(--foundry_1qqcnua4)",
        me = "var(--foundry_1qqcnua5)",
        ve = "var(--foundry_1qqcnua6)",
        ye = "var(--foundry_1qqcnua7)",
        ge = "var(--foundry_1qqcnua8)",
        be = "var(--foundry_1qqcnua9)",
        _e = "var(--foundry_1qqcnuaa)",
        we = "var(--foundry_1qqcnuab)",
        Ee = "var(--foundry_1qqcnuac)",
        Pe = "var(--foundry_1qqcnuad)",
        Se = "var(--foundry_1qqcnuae)",
        Ce = "var(--foundry_1qqcnuaf)",
        xe = "var(--foundry_1qqcnuag)",
        Oe = "var(--foundry_1qqcnuah)",
        Te = "var(--foundry_1qqcnuai)",
        Ne = "var(--foundry_1qqcnuaj)",
        je = "var(--foundry_1qqcnuak)",
        Ie = "var(--foundry_1qqcnual)",
        ke = "var(--foundry_1qqcnuam)",
        Re = "var(--foundry_1qqcnuan)";
      ue({
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
      }), ue({
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
      }), ue({
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
      }), ue({
        defaultClassName: "foundry_tdsdcd1b foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcd1d",
            bold: "foundry_tdsdcd1e"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), ue({
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
      }), ue({
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
      }), ue({
        defaultClassName: "foundry_tdsdcdq foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcds",
            bold: "foundry_tdsdcdt"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), ue({
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
      }), ue({
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
      const De = {
          enabled: {
            background: ne(ce),
            border: ne(de),
            text: ne(fe),
            outline: ne(he)
          },
          hover: {
            background: ne(pe),
            border: ne(me),
            text: ne(ve),
            outline: ne(ye)
          },
          focus: {
            background: ne(ge),
            border: ne(be),
            text: ne(_e),
            outline: ne(we)
          },
          pressed: {
            background: ne(Ee),
            border: ne(Pe),
            text: ne(Se),
            outline: ne(Ce)
          },
          disabled: {
            background: ne(xe),
            border: ne(Oe),
            text: ne(Te),
            outline: ne(Ne)
          },
          loading: {
            background: ne(je),
            border: ne(Ie),
            text: ne(ke),
            outline: ne(Re)
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
              } = (0, y.getOrSet)(c, (() => {
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
                  text: l || (e > t ? re.black.static[100] : re.white.static[100]),
                  hover: a || (e >= r ? Q(i, n) : J(i, n)),
                  pressed: s || (e >= r ? Q(i, o) : J(i, o))
                }
              }));
            return e.current.style.setProperty(De.enabled.background, i), e.current.style.setProperty(De.enabled.border, i), e.current.style.setProperty(De.enabled.text, d), e.current.style.setProperty(De.hover.background, f), e.current.style.setProperty(De.hover.border, f), e.current.style.setProperty(De.hover.text, d), e.current.style.setProperty(De.focus.background, f), e.current.style.setProperty(De.focus.border, f), e.current.style.setProperty(De.focus.text, d), e.current.style.setProperty(De.pressed.background, h), e.current.style.setProperty(De.pressed.border, h), e.current.style.setProperty(De.pressed.text, d), e.current.style.setProperty(De.loading.background, f), e.current.style.setProperty(De.loading.border, f), e.current.style.setProperty(De.loading.text, d), () => {
              e.current?.style.removeProperty(De.enabled.background), e.current?.style.removeProperty(De.enabled.border), e.current?.style.removeProperty(De.enabled.text), e.current?.style.removeProperty(De.hover.background), e.current?.style.removeProperty(De.hover.border), e.current?.style.removeProperty(De.hover.text), e.current?.style.removeProperty(De.focus.background), e.current?.style.removeProperty(De.focus.border), e.current?.style.removeProperty(De.focus.text), e.current?.style.removeProperty(De.pressed.background), e.current?.style.removeProperty(De.pressed.border), e.current?.style.removeProperty(De.pressed.text), e.current?.style.removeProperty(De.loading.background), e.current?.style.removeProperty(De.loading.border), e.current?.style.removeProperty(De.loading.text)
            }
          }), [e.current, t, r, n, o, i, a, s, l, u])
        };
      var Ae = r(95628),
        Me = r(50078),
        He = r(7492),
        Be = ({
          children: e,
          label: t
        }) => {
          const r = g.Children.only(e);
          return (0, v.jsxs)(v.Fragment, {
            children: [g.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, v.jsx)(He.Root, {
              children: t
            })]
          })
        };
      Be.displayName = "AccessibleIcon";
      var Ve = Be;

      function ze(e) {
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

      function Fe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fe(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ze(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fe(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Ue(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ge = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xe = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qe(qe({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Ge(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ue(e.variantClassNames, (e => Ue(e, (e => e.split(" ")[0]))))
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
      const Ke = "pageMD",
        We = (0, g.forwardRef)((({
          label: e,
          hideTrack: t = !1,
          size: r = Ke,
          testId: n,
          ...o
        }, i) => {
          const a = (0, Me.zQ)(),
            s = "string" == typeof r ? r : r?.[a] ?? r.default ?? Ke,
            l = (0, y.mergeProps)({
              className: Xe({
                size: s
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, v.jsx)(Ve, {
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
      var Ye = r(88401),
        Ze = r.t(Ye, 2);

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

      function Qe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qe(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = $e(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qe(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function et(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var tt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        rt = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Je(Je({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) tt(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return et(e.variantClassNames, (e => et(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        nt = rt({
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
      rt({
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
      var ot = rt({
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
      const it = (0, g.forwardRef)((({
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
        override_hoverColor: w,
        override_pressedColor: E,
        override_textColor: P,
        ...S
      }, C) => {
        const x = (0, g.useRef)(null),
          O = (0, Ae.UP)(x, C),
          T = (0, Me.zQ)(),
          N = "string" == typeof l ? l : l?.[T] ?? l.default ?? "MD",
          {
            buttonProps: j
          } = (0, Ae.sL)((0, y.mergeProps)(S, {
            isLoading: c
          }), x);
        Le({
          refs: {
            buttonRef: x
          },
          config: {
            textLuminance: h,
            darkenLuminance: f,
            hoverLuminance: p,
            pressedLuminance: m
          },
          overrides: {
            backgroundColor: b,
            hoverColor: w,
            pressedColor: E,
            textColor: P
          },
          enabled: "accent" === s
        });
        const I = (0, y.mergeProps)({
            className: nt({
              appearance: s,
              size: N,
              fullWidth: u,
              iconLeft: !!n,
              iconRight: !!i,
              isLoading: c
            }),
            "data-testid": e
          }, j),
          k = n && Ze[n],
          R = i && Ze[i],
          D = t ? _.DX : "button",
          L = u && (R || R && k);
        return (0, v.jsxs)(D, {
          ref: O,
          ...I,
          children: [L && (0, v.jsx)("div", {
            className: "foundry_17pcofyx"
          }), k && (0, v.jsx)(k, {
            label: o || "",
            size: N,
            className: "foundry_17pcofyt"
          }), (0, v.jsx)(_.xV, {
            children: r
          }), R && (0, v.jsx)(R, {
            label: a || "",
            size: N,
            className: ot({
              fullWidth: u
            })
          }), c && (0, v.jsx)("div", {
            className: "foundry_17pcofyy",
            children: (0, v.jsx)(We, {
              label: d || "",
              size: "inline" + ("LG" === N ? "LG" : "MD"),
              hideTrack: !0
            })
          })]
        })
      }));
      var at = r(4572),
        st = r(99372);
      const lt = {
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

      function ut(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function ct(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -ut(t - e, r - t, n) + t : e > r ? +ut(e - r, r - t, n) + r : e
      }

      function dt(e, t, r) {
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

      function ft(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ht(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ft(Object(r), !0).forEach((function(t) {
            dt(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ft(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      const pt = {
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

      function mt(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const vt = ["enter", "leave"];
      const yt = ["gotpointercapture", "lostpointercapture"];

      function gt(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = yt.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function bt(e) {
        return "touches" in e
      }

      function _t(e) {
        return bt(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function wt(e) {
        return bt(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Et(e, t) {
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

      function Pt(e, t) {
        const [r, n] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return Et(r, n)
      }

      function St(e) {
        const t = wt(e);
        return bt(e) ? t.identifier : t.pointerId
      }

      function Ct(e) {
        const t = wt(e);
        return [t.clientX, t.clientY]
      }

      function xt(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function Ot(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Tt() {}

      function Nt(...e) {
        return 0 === e.length ? Tt : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function jt(e, t) {
        return Object.assign({}, t, e || {})
      }
      class It {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Ot(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            lt.addTo(t._distance, e)
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
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Ot(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
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
              return [ct(t, i, a, n), ct(r, s, l, o)]
            }(t._bounds, t.offset, _), t.delta = lt.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = lt.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            lt.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(ht(ht(ht({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class kt extends It {
        constructor(...e) {
          super(...e), dt(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = lt.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = lt.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[_t(e)] : r.axisThreshold;
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
      const Rt = e => e,
        Dt = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => ht(ht({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return lt.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? lt.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Rt
          },
          threshold: e => lt.toVector(e, 0)
        },
        Lt = ht(ht({}, Dt), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Lt.bounds(e(t));
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
        At = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Mt = "undefined" != typeof window && window.document && window.document.createElement;

      function Ht() {
        return Mt && "ontouchstart" in window
      }
      const Bt = {
          isBrowser: Mt,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Ht(),
          touchscreen: Ht() || Mt && window.navigator.maxTouchPoints > 1,
          pointer: Mt && "onpointerdown" in window,
          pointerLock: Mt && "exitPointerLock" in window.document
        },
        Vt = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        zt = ht(ht({}, Lt), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Bt.pointerLock, Bt.touch && r ? "touch" : this.pointerLock ? "mouse" : Bt.pointer && !o ? "pointer" : Bt.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Bt.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const i = lt.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(lt.toVector(e)),
              distance: this.transform(lt.toVector(t)),
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
          axisThreshold: e => e ? ht(ht({}, Vt), e) : Vt,
          keyboardDisplacement: (e = 10) => e
        });

      function Ft(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, a] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && a < 0 || r > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const qt = ht(ht({}, Dt), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Bt.touch && Bt.gesture) return "gesture";
            if (Bt.touch && n) return "touch";
            if (Bt.touchscreen) {
              if (Bt.pointer) return "pointer";
              if (Bt.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = jt(Ot(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = jt(Ot(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, lt.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Ut = ht(ht({}, Lt), {}, {
          mouseOnly: (e = !0) => e
        }),
        Gt = Lt,
        Xt = Lt,
        Kt = ht(ht({}, Lt), {}, {
          mouseOnly: (e = !0) => e
        }),
        Wt = new Map,
        Yt = new Map;

      function Zt(e) {
        Wt.set(e.key, e.engine), Yt.set(e.key, e.resolver)
      }
      const $t = {
          key: "drag",
          engine: class extends kt {
            constructor(...e) {
              super(...e), dt(this, "ingKey", "dragging")
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
                e._bounds = Lt.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = St(e), r._pointerActive = !0, this.computeValues(Ct(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== _t(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = St(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Ct(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = lt.sub(o, t._values), this.computeValues(o)), lt.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = St(e);
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
              const t = At[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, lt.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in At && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: zt
        },
        Qt = {
          key: "hover",
          engine: class extends kt {
            constructor(...e) {
              super(...e), dt(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Ct(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Ct(e);
              t._movement = t._delta = lt.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Kt
        },
        Jt = {
          key: "move",
          engine: class extends kt {
            constructor(...e) {
              super(...e), dt(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Ct(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Ct(e),
                r = this.state;
              r._delta = lt.sub(t, r._values), lt.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Ut
        },
        er = {
          key: "pinch",
          engine: class extends It {
            constructor(...e) {
              super(...e), dt(this, "ingKey", "pinching"), dt(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? lt.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = Pt(e, t._touchIds);
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
              const o = Et(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Pt(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = Et(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = lt.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-xt(e)[1] / 100 * t.offset[0], 0], lt.addTo(t._movement, t._delta), Ft(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: qt
        },
        tr = {
          key: "scroll",
          engine: class extends kt {
            constructor(...e) {
              super(...e), dt(this, "ingKey", "scrolling")
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
              t._delta = lt.sub(r, t._values), lt.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Gt
        },
        rr = {
          key: "wheel",
          engine: class extends kt {
            constructor(...e) {
              super(...e), dt(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = xt(e), lt.addTo(t._movement, t._delta), Ft(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Xt
        };
      const nr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Bt.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        or = ["target", "eventOptions", "window", "enabled", "transform"];

      function ir(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = ir(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class ar {
        constructor(e, t) {
          dt(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            a = function(e, t = "") {
              const r = pt[e];
              return e + (r && r[t] || t)
            }(t, r),
            s = ht(ht({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class sr {
        constructor() {
          dt(this, "_timeouts", new Map)
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
      class lr {
        constructor(e) {
          var t, r;
          dt(this, "gestures", new Set), dt(this, "_targetEventStore", new ar(this)), dt(this, "gestureEventStores", {}), dt(this, "gestureTimeoutStores", {}), dt(this, "handlers", {}), dt(this, "config", {}), dt(this, "pointerIds", new Set), dt(this, "touchIds", new Set), dt(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && ur(t, "drag"), r.wheel && ur(t, "wheel"), r.scroll && ur(t, "scroll"), r.move && ur(t, "move"), r.pinch && ur(t, "pinch"), r.hover && ur(t, "hover")
        }
        setEventIds(e) {
          return bt(e) ? (this.touchIds = new Set(function(e) {
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
              }(n, or);
            if (r.shared = ir({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, nr), t) {
              const e = Yt.get(t);
              r[t] = ir(ht({
                shared: r.shared
              }, u), e)
            } else
              for (const e in u) {
                const t = Yt.get(e);
                t && (r[e] = ir(ht({
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
                  i = cr(r, o.eventOptions, !!n);
                o.enabled && new(Wt.get(t))(this, e, t).bind(i)
              }
              const o = cr(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", (r => this.nativeHandlers[t](ht(ht({}, this.state.shared), {}, {
                event: r,
                args: e
              }))), void 0, !0)
            }
            for (const e in r) r[e] = Nt(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: i
              } = gt(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function ur(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new ar(e, t), e.gestureTimeoutStores[t] = new sr
      }
      const cr = (e, t, r) => (n, o, i, a = {}, s = !1) => {
          var l, u;
          const c = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (u = a.passive) && void 0 !== u ? u : t.passive;
          let f = s ? n : function(e, t = "", r = !1) {
            const n = pt[e],
              o = n && n[t] || t;
            return "on" + mt(e) + mt(o) + (function(e = !1, t) {
              return e && !vt.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        dr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function fr(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!Wt.has(n)) return;
        const a = r + "Start",
          s = r + "End";
        o[n] = e => {
          let n;
          return e.first && a in t && t[a](e), r in t && (n = t[r](e)), e.last && s in t && t[s](e), n
        }, i[n] = i[n] || {}
      }

      function hr(e, t) {
        const r = ([$t, er, tr, rr, Jt, Qt].forEach(Zt), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) dr.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return fr(o, r, "onDrag", "drag", i, t), fr(o, r, "onWheel", "wheel", i, t), fr(o, r, "onScroll", "scroll", i, t), fr(o, r, "onPinch", "pinch", i, t), fr(o, r, "onMove", "move", i, t), fr(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return function(e, t = {}, r, n) {
            const o = b().useMemo((() => new lr(e)), []);
            if (o.applyHandlers(e, n), o.applyConfig(t, r), b().useEffect(o.effect.bind(o)), b().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      var pr = jr(),
        mr = e => xr(e, pr),
        vr = jr();
      mr.write = e => xr(e, vr);
      var yr = jr();
      mr.onStart = e => xr(e, yr);
      var gr = jr();
      mr.onFrame = e => xr(e, gr);
      var br = jr();
      mr.onFinish = e => xr(e, br);
      var _r = [];
      mr.setTimeout = (e, t) => {
        const r = mr.now() + t,
          n = () => {
            const e = _r.findIndex((e => e.cancel == n));
            ~e && _r.splice(e, 1), Sr -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return _r.splice(wr(r), 0, o), Sr += 1, Or(), o
      };
      var wr = e => ~(~_r.findIndex((t => t.time > e)) || ~_r.length);
      mr.cancel = e => {
        yr.delete(e), gr.delete(e), br.delete(e), pr.delete(e), vr.delete(e)
      }, mr.sync = e => {
        Cr = !0, mr.batchedUpdates(e), Cr = !1
      }, mr.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, mr.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          yr.delete(r), t = null
        }, n
      };
      var Er = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      mr.use = e => Er = e, mr.now = "undefined" != typeof performance ? () => performance.now() : Date.now, mr.batchedUpdates = e => e(), mr.catch = console.error, mr.frameLoop = "always", mr.advance = () => {
        "demand" !== mr.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Nr()
      };
      var Pr = -1,
        Sr = 0,
        Cr = !1;

      function xr(e, t) {
        Cr ? (t.delete(e), e(0)) : (t.add(e), Or())
      }

      function Or() {
        Pr < 0 && (Pr = 0, "demand" !== mr.frameLoop && Er(Tr))
      }

      function Tr() {
        ~Pr && (Er(Tr), mr.batchedUpdates(Nr))
      }

      function Nr() {
        const e = Pr;
        Pr = mr.now();
        const t = wr(Pr);
        t && (Ir(_r.splice(0, t), (e => e.handler())), Sr -= t), Sr ? (yr.flush(), pr.flush(e ? Math.min(64, Pr - e) : 16.667), gr.flush(), vr.flush(), br.flush()) : Pr = -1
      }

      function jr() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Sr += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Sr -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Sr -= t.size, Ir(t, (t => t(r) && e.add(t))), Sr += e.size, t = e)
          }
        }
      }

      function Ir(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            mr.catch(e)
          }
        }))
      }
      var kr = Object.defineProperty,
        Rr = {};

      function Dr() {}((e, t) => {
        for (var r in t) kr(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Rr, {
        assign: () => Wr,
        colors: () => Gr,
        createStringInterpolator: () => zr,
        skipAnimation: () => Xr,
        to: () => Fr,
        willAdvance: () => Kr
      });
      var Lr = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Ar(e, t) {
        if (Lr.arr(e)) {
          if (!Lr.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var Mr = (e, t) => e.forEach(t);

      function Hr(e, t, r) {
        if (Lr.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Br = e => Lr.und(e) ? [] : Lr.arr(e) ? e : [e];

      function Vr(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Mr(r, t)
        }
      }
      var zr, Fr, qr = (e, ...t) => Vr(e, (e => e(...t))),
        Ur = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Gr = null,
        Xr = !1,
        Kr = Dr,
        Wr = e => {
          e.to && (Fr = e.to), e.now && (mr.now = e.now), void 0 !== e.colors && (Gr = e.colors), null != e.skipAnimation && (Xr = e.skipAnimation), e.createStringInterpolator && (zr = e.createStringInterpolator), e.requestAnimationFrame && mr.use(e.requestAnimationFrame), e.batchedUpdates && (mr.batchedUpdates = e.batchedUpdates), e.willAdvance && (Kr = e.willAdvance), e.frameLoop && (mr.frameLoop = e.frameLoop)
        },
        Yr = new Set,
        Zr = [],
        $r = [],
        Qr = 0,
        Jr = {
          get idle() {
            return !Yr.size && !Zr.length
          },
          start(e) {
            Qr > e.priority ? (Yr.add(e), mr.onStart(en)) : (tn(e), mr(nn))
          },
          advance: nn,
          sort(e) {
            if (Qr) mr.onFrame((() => Jr.sort(e)));
            else {
              const t = Zr.indexOf(e);
              ~t && (Zr.splice(t, 1), rn(e))
            }
          },
          clear() {
            Zr = [], Yr.clear()
          }
        };

      function en() {
        Yr.forEach(tn), Yr.clear(), mr(nn)
      }

      function tn(e) {
        Zr.includes(e) || rn(e)
      }

      function rn(e) {
        Zr.splice(function(t) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(Zr), 0, e)
      }

      function nn(e) {
        const t = $r;
        for (let r = 0; r < Zr.length; r++) {
          const n = Zr[r];
          Qr = n.priority, n.idle || (Kr(n), n.advance(e), n.idle || t.push(n))
        }
        return Qr = 0, ($r = Zr).length = 0, (Zr = t).length > 0
      }
      var on = "[-+]?\\d*\\.?\\d+",
        an = on + "%";

      function sn(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var ln = new RegExp("rgb" + sn(on, on, on)),
        un = new RegExp("rgba" + sn(on, on, on, on)),
        cn = new RegExp("hsl" + sn(on, an, an)),
        dn = new RegExp("hsla" + sn(on, an, an, on)),
        fn = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hn = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        pn = /^#([0-9a-fA-F]{6})$/,
        mn = /^#([0-9a-fA-F]{8})$/;

      function vn(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function yn(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = vn(o, n, e + 1 / 3),
          a = vn(o, n, e),
          s = vn(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function gn(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function bn(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function _n(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function wn(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function En(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = pn.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Gr && void 0 !== Gr[e] ? Gr[e] : (t = ln.exec(e)) ? (gn(t[1]) << 24 | gn(t[2]) << 16 | gn(t[3]) << 8 | 255) >>> 0 : (t = un.exec(e)) ? (gn(t[1]) << 24 | gn(t[2]) << 16 | gn(t[3]) << 8 | _n(t[4])) >>> 0 : (t = fn.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = mn.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = hn.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = cn.exec(e)) ? (255 | yn(bn(t[1]), wn(t[2]), wn(t[3]))) >>> 0 : (t = dn.exec(e)) ? (yn(bn(t[1]), wn(t[2]), wn(t[3])) | _n(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Pn = (e, t, r) => {
          if (Lr.fun(e)) return e;
          if (Lr.arr(e)) return Pn({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Lr.str(e.output[0])) return zr(e);
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
        Sn = 1.70158,
        Cn = 1.525 * Sn,
        xn = Sn + 1,
        On = 2 * Math.PI / 3,
        Tn = 2 * Math.PI / 4.5,
        Nn = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        jn = {
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
          easeInBack: e => xn * e * e * e - Sn * e * e,
          easeOutBack: e => 1 + xn * Math.pow(e - 1, 3) + Sn * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Cn) / 2 : (Math.pow(2 * e - 2, 2) * ((Cn + 1) * (2 * e - 2) + Cn) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * On),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * On) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Tn) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Tn) / 2 + 1,
          easeInBounce: e => 1 - Nn(1 - e),
          easeOutBounce: Nn,
          easeInOutBounce: e => e < .5 ? (1 - Nn(1 - 2 * e)) / 2 : (1 + Nn(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        In = Symbol.for("FluidValue.get"),
        kn = Symbol.for("FluidValue.observers"),
        Rn = e => Boolean(e && e[In]),
        Dn = e => e && e[In] ? e[In]() : e,
        Ln = e => e[kn] || null;

      function An(e, t) {
        const r = e[kn];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Mn = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Hn(this, e)
          }
        },
        Hn = (e, t) => Fn(e, In, t);

      function Bn(e, t) {
        if (e[In]) {
          let r = e[kn];
          r || Fn(e, kn, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Vn(e, t) {
        const r = e[kn];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[kn] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var zn, Fn = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        qn = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Un = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Gn = new RegExp(`(${qn.source})(%|[a-z]+)`, "i"),
        Xn = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Kn = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Wn = e => {
          const [t, r] = Yn(e);
          if (!t || Ur()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && Kn.test(r) ? Wn(r) : r || e
        },
        Yn = e => {
          const t = Kn.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        Zn = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        $n = e => {
          zn || (zn = Gr ? new RegExp(`(${Object.keys(Gr).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Dn(e).replace(Kn, Wn).replace(Un, En).replace(zn, En))),
            r = t.map((e => e.match(qn).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = n.map((t => Pn({
              ...e,
              output: t
            })));
          return e => {
            const r = !Gn.test(t[0]) && t.find((e => Gn.test(e)))?.replace(qn, "");
            let n = 0;
            return t[0].replace(qn, (() => `${o[n++](e)}${r||""}`)).replace(Xn, Zn)
          }
        },
        Qn = "react-spring: ",
        Jn = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${Qn}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        eo = Jn(console.warn),
        to = Jn(console.warn);

      function ro(e) {
        return Lr.str(e) && ("#" == e[0] || /\d/.test(e) || !Ur() && Kn.test(e) || e in (Gr || {}))
      }
      var no = Ur() ? g.useEffect : g.useLayoutEffect;

      function oo() {
        const e = (0, g.useState)()[1],
          t = (() => {
            const e = (0, g.useRef)(!1);
            return no((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var io = e => (0, g.useEffect)(e, ao),
        ao = [];

      function so(e) {
        const t = (0, g.useRef)();
        return (0, g.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var lo = Symbol.for("Animated:node"),
        uo = e => e && e[lo],
        co = (e, t) => {
          return r = e, n = lo, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        fo = e => e && e[lo] && e[lo].getPayload(),
        ho = class {
          constructor() {
            co(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        po = class extends ho {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Lr.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new po(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Lr.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Lr.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        mo = class extends po {
          constructor(e) {
            super(0), this._string = null, this._toString = Pn({
              output: [e, e]
            })
          }
          static create(e) {
            return new mo(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Lr.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Pn({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        vo = {
          dependencies: null
        },
        yo = class extends ho {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Hr(this.source, ((r, n) => {
              var o;
              (o = r) && o[lo] === o ? t[n] = r.getValue(e) : Rn(r) ? t[n] = Dn(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Mr(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Hr(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            vo.dependencies && Rn(e) && vo.dependencies.add(e);
            const t = fo(e);
            t && Mr(t, (e => this.add(e)))
          }
        },
        go = class extends yo {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new go(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(bo)), !0)
          }
        };

      function bo(e) {
        return (ro(e) ? mo : po).create(e)
      }

      function _o(e) {
        const t = uo(e);
        return t ? t.constructor : Lr.arr(e) ? go : ro(e) ? mo : po
      }
      var wo = (e, t) => {
          const r = !Lr.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, g.forwardRef)(((n, o) => {
            const i = (0, g.useRef)(null),
              a = r && (0, g.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (Lr.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return vo.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new yo(e), vo.dependencies = null, [e, r]
              }(n, t),
              u = oo(),
              c = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && u()
              },
              d = new Eo(c, l),
              f = (0, g.useRef)();
            no((() => (f.current = d, Mr(l, (e => Bn(e, d))), () => {
              f.current && (Mr(f.current.deps, (e => Vn(e, f.current))), mr.cancel(f.current.update))
            }))), (0, g.useEffect)(c, []), io((() => () => {
              const e = f.current;
              Mr(e.deps, (t => Vn(t, e)))
            }));
            const h = t.getComponentProps(s.getValue());
            return g.createElement(e, {
              ...h,
              ref: a
            })
          }))
        },
        Eo = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && mr.write(this.update)
          }
        },
        Po = Symbol.for("AnimatedComponent"),
        So = e => Lr.str(e) ? e : e && Lr.str(e.displayName) ? e.displayName : Lr.fun(e) && e.name || null;

      function Co(e, ...t) {
        return Lr.fun(e) ? e(...t) : e
      }
      var xo = (e, t) => !0 === e || !!(t && e && (Lr.fun(e) ? e(t) : Br(e).includes(t))),
        Oo = (e, t) => Lr.obj(e) ? t && e[t] : e,
        To = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        No = e => e,
        jo = (e, t = No) => {
          let r = Io;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Lr.und(r) || (n[o] = r)
          }
          return n
        },
        Io = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        ko = {
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

      function Ro(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Hr(e, ((e, n) => {
              ko[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Hr(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function Do(e) {
        return e = Dn(e), Lr.arr(e) ? e.map(Do) : ro(e) ? Rr.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Lo(e) {
        for (const t in e) return !0;
        return !1
      }

      function Ao(e) {
        return Lr.fun(e) || Lr.arr(e) && Lr.obj(e[0])
      }

      function Mo(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Ho(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var Bo = {
          tension: 170,
          friction: 26
        },
        Vo = {
          ...Bo,
          mass: 1,
          damping: 1,
          easing: jn.linear,
          clamp: !1
        },
        zo = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Vo)
          }
        };

      function Fo(e, t) {
        if (Lr.und(t.decay)) {
          const r = !Lr.und(t.tension) || !Lr.und(t.friction);
          !r && Lr.und(t.frequency) && Lr.und(t.damping) && Lr.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var qo = [],
        Uo = class {
          constructor() {
            this.changed = !1, this.values = qo, this.toValues = null, this.fromValues = qo, this.config = new zo, this.immediate = !1
          }
        };

      function Go(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, u, c = xo(r.cancel ?? n?.cancel, t);
          if (c) h();
          else {
            Lr.und(r.pause) || (o.paused = xo(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || xo(e, t)), l = Co(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - mr.now()
          }

          function f() {
            l > 0 && !Rr.skipAnimation ? (o.delayed = !0, u = mr.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(u)) : h()
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
      var Xo = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Yo(e.get()) : t.every((e => e.noop)) ? Ko(e.get()) : Wo(e.get(), t.every((e => e.finished))),
        Ko = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Wo = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        Yo = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Zo(e, t, r, n) {
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
          const u = jo(t, ((e, t) => "onRest" === t ? void 0 : e));
          let c, d;
          const f = new Promise(((e, t) => (c = e, d = t))),
            h = e => {
              const t = o <= (r.cancelId || 0) && Yo(n) || o !== r.asyncId && Wo(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new Qo,
                a = new Jo;
              return (async () => {
                if (Rr.skipAnimation) throw $o(r), a.result = Wo(n, !1), d(a), a;
                h(i);
                const s = Lr.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Hr(u, ((e, t) => {
                  Lr.und(s[t]) && (s[t] = e)
                }));
                const l = await n.start(s);
                return h(i), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (Rr.skipAnimation) return $o(r), Wo(n, !1);
          try {
            let t;
            t = Lr.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(c), f]), m = Wo(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof Qo) m = e.result;
            else {
              if (!(e instanceof Jo)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? s : void 0, r.promise = i ? l : void 0)
          }
          return Lr.fun(a) && mr.batchedUpdates((() => {
            a(m, n, n.item)
          })), m
        })() : l
      }

      function $o(e, t) {
        Vr(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Qo = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Jo = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        ei = e => e instanceof ri,
        ti = 1,
        ri = class extends Mn {
          constructor() {
            super(...arguments), this.id = ti++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = uo(this);
            return e && e.getValue()
          }
          to(...e) {
            return Rr.to(this, e)
          }
          interpolate(...e) {
            return eo(`${Qn}The "interpolate" function is deprecated in v9 (use "to" instead)`), Rr.to(this, e)
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
            An(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Jr.sort(this), An(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        ni = Symbol.for("SpringPhase"),
        oi = e => (1 & e[ni]) > 0,
        ii = e => (2 & e[ni]) > 0,
        ai = e => (4 & e[ni]) > 0,
        si = (e, t) => t ? e[ni] |= 3 : e[ni] &= -3,
        li = (e, t) => t ? e[ni] |= 4 : e[ni] &= -5,
        ui = class extends ri {
          constructor(e, t) {
            if (super(), this.animation = new Uo, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Lr.und(e) || !Lr.und(t)) {
              const r = Lr.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Lr.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(ii(this) || this._state.asyncTo) || ai(this)
          }
          get goal() {
            return Dn(this.animation.to)
          }
          get velocity() {
            const e = uo(this);
            return e instanceof po ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return oi(this)
          }
          get isAnimating() {
            return ii(this)
          }
          get isPaused() {
            return ai(this)
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
            } = n, a = fo(n.to);
            !a && Rn(n.to) && (o = Br(Dn(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              const u = s.constructor == mo ? 1 : a ? a[l].lastPosition : o[l];
              let c = n.immediate,
                d = u;
              if (!c) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Lr.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (r == u ? .005 : Math.min(1, .001 * Math.abs(u - r)));
                if (Lr.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), c = Math.abs(s.lastPosition - d) <= f, a = o * n
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !Lr.und(n),
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
            const s = uo(this),
              l = s.getValue();
            if (t) {
              const e = Dn(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return mr.batchedUpdates((() => {
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
            if (ii(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              mr.batchedUpdates((() => {
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
            return Lr.und(e) ? (r = this.queue || [], this.queue = []) : r = [Lr.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => Xo(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), $o(this._state, e && this._lastCallId), mr.batchedUpdates((() => this._stop(t, e))), this
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
            r = Lr.obj(r) ? r[t] : r, (null == r || Ao(r)) && (r = void 0), n = Lr.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return oi(this) || (e.reverse && ([r, n] = [n, r]), n = Dn(n), Lr.und(n) ? uo(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, jo(e, ((e, t) => /^on/.test(t) ? Oo(e, r) : e))), vi(this, e, "onProps"), yi(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Go(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  ai(this) || (li(this, !0), qr(i.pauseQueue), yi(this, "onPause", Wo(this, ci(this, this.animation.to)), this))
                },
                resume: () => {
                  ai(this) && (li(this, !1), ii(this) && this._resume(), qr(i.resumeQueue), yi(this, "onResume", Wo(this, ci(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = di(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(Yo(this));
            const n = !Lr.und(e.to),
              o = !Lr.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(Yo(this));
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
            !o || n || t.default && !Lr.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
            const f = !Ar(d, u);
            f && (s.from = d), d = Dn(d);
            const h = !Ar(c, l);
            h && this._focus(c);
            const p = Ao(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (Fo(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Fo(e, t), Object.assign(e, t);
              for (const t in Vo) null == e[t] && (e[t] = Vo[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Lr.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, Co(t.config, i), t.config !== a.config ? Co(a.config, i) : void 0);
            let g = uo(this);
            if (!g || Lr.und(c)) return r(Wo(this, !0));
            const b = Lr.und(t.reset) ? o && !t.default : !Lr.und(d) && xo(t.reset, i),
              _ = b ? d : this.get(),
              w = Do(c),
              E = Lr.num(w) || Lr.arr(w) || ro(w),
              P = !p && (!E || xo(a.immediate || t.immediate, i));
            if (h) {
              const e = _o(c);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const S = g.constructor;
            let C = Rn(c),
              x = !1;
            if (!C) {
              const e = b || !oi(this) && f;
              (h || e) && (x = Ar(Do(_), w), C = !x), (Ar(s.immediate, P) || P) && Ar(m.decay, v) && Ar(m.velocity, y) || (C = !0)
            }
            if (x && ii(this) && (s.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || Rn(l)) && (s.values = g.getPayload(), s.toValues = Rn(c) ? null : S == mo ? [1] : Br(w)), s.immediate != P && (s.immediate = P, P || b || this._set(l)), C)) {
              const {
                onRest: e
              } = s;
              Mr(mi, (e => vi(this, t, e)));
              const n = Wo(this, ci(this, l));
              qr(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && mr.batchedUpdates((() => {
                s.changed = !b, e?.(n, this), b ? Co(a.onRest, n) : s.onStart?.(n, this)
              }))
            }
            b && this._set(_), p ? r(Zo(t.to, t, this._state, this)) : C ? this._start() : ii(this) && !h ? this._pendingCalls.add(r) : r(Ko(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Ln(this) && this._detach(), t.to = e, Ln(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Rn(t) && (Bn(t, this), ei(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Rn(e) && Vn(e, this)
          }
          _set(e, t = !0) {
            const r = Dn(e);
            if (!Lr.und(r)) {
              const e = uo(this);
              if (!e || !Ar(r, e.getValue())) {
                const n = _o(r);
                e && e.constructor == n ? e.setValue(r) : co(this, n.create(r)), e && mr.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return uo(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, yi(this, "onStart", Wo(this, ci(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Co(this.animation.onChange, e, this)), Co(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            uo(this).reset(Dn(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), ii(this) || (si(this, !0), ai(this) || this._resume())
          }
          _resume() {
            Rr.skipAnimation ? this.finish() : Jr.start(this)
          }
          _stop(e, t) {
            if (ii(this)) {
              si(this, !1);
              const r = this.animation;
              Mr(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), An(this, {
                type: "idle",
                parent: this
              });
              const n = t ? Yo(this.get()) : Wo(this.get(), ci(this, e ?? r.to));
              qr(this._pendingCalls, n), r.changed && (r.changed = !1, yi(this, "onRest", n, this))
            }
          }
        };

      function ci(e, t) {
        const r = Do(t);
        return Ar(Do(e.get()), r)
      }

      function di(e, t = e.loop, r = e.to) {
        const n = Co(t);
        if (n) {
          const o = !0 !== n && Ro(n),
            i = (o || e).reverse,
            a = !o || o.reset;
          return fi({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Ao(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function fi(e) {
        const {
          to: t,
          from: r
        } = e = Ro(e), n = new Set;
        return Lr.obj(t) && pi(t, n), Lr.obj(r) && pi(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function hi(e) {
        const t = fi(e);
        return Lr.und(t.default) && (t.default = jo(t)), t
      }

      function pi(e, t) {
        Hr(e, ((e, r) => null != e && t.add(r)))
      }
      var mi = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function vi(e, t, r) {
        e.animation[r] = t[r] !== To(t, r) ? Oo(t[r], e.key) : void 0
      }

      function yi(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var gi = ["onStart", "onChange", "onRest"],
        bi = 1,
        _i = class {
          constructor(e, t) {
            this.id = bi++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              Lr.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(fi(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Br(e).map(fi) : this.queue = [], this._flush ? this._flush(this, t) : (Oi(this, t), wi(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              Mr(Br(t), (t => r[t].stop(!!e)))
            } else $o(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (Lr.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Mr(Br(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (Lr.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Mr(Br(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            Hr(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, Vr(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !n && this._started,
              a = o || i && r.size ? this.get() : null;
            o && t.size && Vr(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, Vr(r, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            mr.onFrame(this._onFrame)
          }
        };

      function wi(e, t) {
        return Promise.all(t.map((t => Ei(e, t)))).then((t => Xo(e, t)))
      }
      async function Ei(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, u = Lr.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const c = Lr.arr(o) || Lr.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : Mr(gi, (r => {
          const n = t[r];
          if (Lr.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, qr(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          h = !0 === t.cancel || !0 === To(t, "cancel");
        (c || h && d.asyncId) && f.push(Go(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Dr,
            resume: Dr,
            start(t, r) {
              h ? ($o(d, e._lastAsyncId), r(Yo(e))) : (t.onRest = s, r(Zo(c, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = Xo(e, await Promise.all(f));
        if (a && p.finished && (!r || !p.noop)) {
          const r = di(t, a, o);
          if (r) return Oi(e, [r]), Ei(e, r, !0)
        }
        return l && mr.batchedUpdates((() => l(p, e, e.item))), p
      }

      function Pi(e, t) {
        const r = {
          ...e.springs
        };
        return t && Mr(Br(t), (e => {
          Lr.und(e.keys) && (e = fi(e)), Lr.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), xi(r, e, (e => Ci(e)))
        })), Si(e, r), r
      }

      function Si(e, t) {
        Hr(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, Bn(t, e))
        }))
      }

      function Ci(e, t) {
        const r = new ui;
        return r.key = e, t && Bn(r, t), r
      }

      function xi(e, t, r) {
        t.keys && Mr(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function Oi(e, t) {
        Mr(t, (t => {
          xi(e.springs, t, (t => Ci(t, e)))
        }))
      }
      var Ti, Ni, ji = ({
          children: e,
          ...t
        }) => {
          const r = (0, g.useContext)(Ii),
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
          } = Ii;
          return g.createElement(i, {
            value: t
          }, e)
        },
        Ii = (Ti = ji, Ni = {}, Object.assign(Ti, g.createContext(Ni)), Ti.Provider._context = Ti, Ti.Consumer._context = Ti, Ti);
      ji.Provider = Ii.Provider, ji.Consumer = Ii.Consumer;
      var ki = () => {
        const e = [],
          t = function(t) {
            to(`${Qn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return Mr(e, ((e, o) => {
              if (Lr.und(t)) n.push(e.start());
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
          return Mr(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Mr(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Mr(e, ((e, r) => {
            const n = Lr.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          const r = [];
          return Mr(e, ((e, n) => {
            if (Lr.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          })), r
        }, t.stop = function() {
          return Mr(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Mr(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        const r = function(e, t, r) {
          return Lr.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function Ri(e, t) {
        const r = Lr.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = Lr.fun(t) && t;
            n && !r && (r = []);
            const o = (0, g.useMemo)((() => n || 3 == arguments.length ? ki() : void 0), []),
              i = (0, g.useRef)(0),
              a = oo(),
              s = (0, g.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = Pi(e, t);
                  return i.current > 0 && !s.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? wi(e, t) : new Promise((n => {
                    Si(e, r), s.queue.push((() => {
                      n(wi(e, t))
                    })), a()
                  }))
                }
              })), []),
              l = (0, g.useRef)([...s.ctrls]),
              u = [],
              c = so(e) || 0;

            function d(e, r) {
              for (let o = e; o < r; o++) {
                const e = l.current[o] || (l.current[o] = new _i(null, s.flush)),
                  r = n ? n(o, e) : t[o];
                r && (u[o] = hi(r))
              }
            }(0, g.useMemo)((() => {
              Mr(l.current.slice(e, c), (e => {
                Mo(e, o), e.stop(!0)
              })), l.current.length = e, d(c, e)
            }), [e]), (0, g.useMemo)((() => {
              d(0, Math.min(c, e))
            }), r);
            const f = l.current.map(((e, t) => Pi(e, u[t]))),
              h = (0, g.useContext)(ji),
              p = so(h),
              m = h !== p && Lo(h);
            no((() => {
              i.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], Mr(e, (e => e()))), Mr(l.current, ((e, t) => {
                o?.add(e), m && e.start({
                  default: h
                });
                const r = u[t];
                r && (Ho(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              }))
            })), io((() => () => {
              Mr(s.ctrls, (e => e.stop(!0)))
            }));
            const v = f.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var Di = () => ki(),
        Li = () => (0, g.useState)(Di)[0];
      var Ai = 1,
        Mi = class extends ri {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Pn(...t);
            const r = this._get(),
              n = _o(r);
            co(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            Ar(t, this.get()) || (uo(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Bi(this._active) && Vi(this)
          }
          _get() {
            const e = Lr.arr(this.source) ? this.source.map(Dn) : Br(Dn(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Bi(this._active) && (this.idle = !1, Mr(fo(this), (e => {
              e.done = !1
            })), Rr.skipAnimation ? (mr.batchedUpdates((() => this.advance())), Vi(this)) : Jr.start(this))
          }
          _attach() {
            let e = 1;
            Mr(Br(this.source), (t => {
              Rn(t) && Bn(t, this), ei(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            Mr(Br(this.source), (e => {
              Rn(e) && Vn(e, this)
            })), this._active.clear(), Vi(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Br(this.source).reduce(((e, t) => Math.max(e, (ei(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function Hi(e) {
        return !1 !== e.idle
      }

      function Bi(e) {
        return !e.size || Array.from(e).every(Hi)
      }

      function Vi(e) {
        e.idle || (e.idle = !0, Mr(fo(e), (e => {
          e.done = !0
        })), An(e, {
          type: "idle",
          parent: e
        }))
      }
      Rr.assign({
        createStringInterpolator: $n,
        to: (e, t) => new Mi(e, t)
      }), Jr.advance;
      var zi = r(18429),
        Fi = /^--/;

      function qi(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Fi.test(e) || Gi.hasOwnProperty(e) && Gi[e] ? ("" + t).trim() : t + "px"
      }
      var Ui = {},
        Gi = {
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
        Xi = ["Webkit", "Ms", "Moz", "O"];
      Gi = Object.keys(Gi).reduce(((e, t) => (Xi.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), Gi);
      var Ki = /^(matrix|translate|scale|rotate|skew)/,
        Wi = /^(translate)/,
        Yi = /^(rotate|skew)/,
        Zi = (e, t) => Lr.num(e) && 0 !== e ? e + t : e,
        $i = (e, t) => Lr.arr(e) ? e.every((e => $i(e, t))) : Lr.num(e) ? e === t : parseFloat(e) === t,
        Qi = class extends yo {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push((e => [`translate3d(${e.map((e=>Zi(e,"px"))).join(",")})`, $i(e, 0)]))), Hr(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Ki.test(t)) {
                if (delete n[t], Lr.und(e)) return;
                const r = Wi.test(t) ? "px" : Yi.test(t) ? "deg" : "";
                o.push(Br(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${Zi(o,r)})`, $i(o, 0)] : e => [`${t}(${e.map((e=>Zi(e,r))).join(",")})`, $i(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new Ji(o, i)), super(n)
          }
        },
        Ji = class extends Mn {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Mr(this.inputs, ((r, n) => {
              const o = Dn(r[0]),
                [i, a] = this.transforms[n](Lr.arr(o) ? o : r.map(Dn));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Mr(this.inputs, (e => Mr(e, (e => Rn(e) && Bn(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Mr(this.inputs, (e => Mr(e, (e => Rn(e) && Vn(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), An(this, e)
          }
        };
      Rr.assign({
        batchedUpdates: zi.unstable_batchedUpdates,
        createStringInterpolator: $n,
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
      var ea = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new yo(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = So(e) || "Anonymous";
              return (e = Lr.str(e) ? i[e] || (i[e] = wo(e, o)) : e[Po] || (e[Po] = wo(e, o))).displayName = `Animated(${t})`, e
            };
          return Hr(e, ((t, r) => {
            Lr.arr(e) && (r = So(t)), i[r] = i(t)
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
              d = Object.keys(u).map((t => r || e.hasAttribute(t) ? t : Ui[t] || (Ui[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = qi(t, o[t]);
                Fi.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, c[r])
            })), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new Qi(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        ta = ea.animated;
      const ra = (e, t, r) => {
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
        na = e => {
          const t = (e, t, r) => {
            r(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, r) => {
            const n = r.getBoundingClientRect();
            return e ? (t(e.top, n.top, ((e, t) => e < t)), t(e.bottom, n.bottom, ((e, t) => e > t)), t(e.left, n.left, ((e, t) => e < t)), t(e.right, n.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), n) : n
          }), null)
        },
        oa = ([e, t], r) => {
          const {
            a: n
          } = new DOMMatrix(r.style.transform), o = na(r), i = o.width / n, a = 100 * aa(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / n;
          return {
            x: a,
            y: 100 * aa(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        ia = (e, t, r, n) => {
          let o = r[0],
            i = r[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = n / 100, l = na(e), u = t.getBoundingClientRect(), c = l.width / a / 2, d = u.width / 2, f = c * s > d ? c * s - d : 0, h = l.height / a / 2, p = u.height / 2, m = h * s > p ? h * s - p : 0, v = -o > f, y = o > f, g = i > m, b = -i > m;
          return v && !y ? o = -f : y && !v && (o = f), g && !b ? i = m : b && !g && (i = -m), {
            xy: [o, i],
            horizontalOffset: f,
            verticalOffset: m
          }
        },
        aa = (e, t, r) => Math.min(Math.max(e, t), r),
        sa = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        la = Bo,
        ua = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        ca = ({
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
          }), hr({
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
            children: (0, v.jsx)(ta.div, {
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
      var da = r(78322);

      function fa(e, t) {
        var r = t && t.cache ? t.cache : Pa,
          n = t && t.serializer ? t.serializer : ya;
        return (t && t.strategy ? t.strategy : va)(e, {
          cache: r,
          serializer: n
        })
      }

      function ha(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function pa(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function ma(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function va(e, t) {
        return ma(e, this, 1 === e.length ? ha : pa, t.cache.create(), t.serializer)
      }
      var ya = function() {
        return JSON.stringify(arguments)
      };

      function ga() {
        this.cache = Object.create(null)
      }
      ga.prototype.get = function(e) {
        return this.cache[e]
      }, ga.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var ba, _a, wa, Ea, Pa = {
          create: function() {
            return new ga
          }
        },
        Sa = {
          variadic: function(e, t) {
            return ma(e, this, pa, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return ma(e, this, ha, t.cache.create(), t.serializer)
          }
        };

      function Ca(e) {
        return e.type === _a.literal
      }

      function xa(e) {
        return e.type === _a.argument
      }

      function Oa(e) {
        return e.type === _a.number
      }

      function Ta(e) {
        return e.type === _a.date
      }

      function Na(e) {
        return e.type === _a.time
      }

      function ja(e) {
        return e.type === _a.select
      }

      function Ia(e) {
        return e.type === _a.plural
      }

      function ka(e) {
        return e.type === _a.pound
      }

      function Ra(e) {
        return e.type === _a.tag
      }

      function Da(e) {
        return !(!e || "object" != typeof e || e.type !== wa.number)
      }

      function La(e) {
        return !(!e || "object" != typeof e || e.type !== wa.dateTime)
      }(Ea = ba || (ba = {}))[Ea.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Ea[Ea.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Ea[Ea.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Ea[Ea.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Ea[Ea.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Ea[Ea.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Ea[Ea.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Ea[Ea.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Ea[Ea.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Ea[Ea.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Ea[Ea.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Ea[Ea.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Ea[Ea.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Ea[Ea.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Ea[Ea.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Ea[Ea.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Ea[Ea.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Ea[Ea.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Ea[Ea.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Ea[Ea.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Ea[Ea.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Ea[Ea.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Ea[Ea.INVALID_TAG = 23] = "INVALID_TAG", Ea[Ea.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Ea[Ea.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Ea[Ea.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(_a || (_a = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(wa || (wa = {}));
      var Aa = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Ma = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Ha(e) {
        var t = {};
        return e.replace(Ma, (function(e) {
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
      var Ba = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function Va(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, n = e.split(Ba).filter((function(e) {
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
      var za = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Fa = /^(@+)?(\+|#+)?[rs]?$/g,
        qa = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Ua = /^(0+)$/;

      function Ga(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Fa, (function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        })), t
      }

      function Xa(e) {
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

      function Ka(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ua.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Wa(e) {
        return Xa(e) || {}
      }

      function Ya(e) {
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
              t = (0, da.__assign)((0, da.__assign)((0, da.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, da.__assign)((0, da.__assign)({}, e), Wa(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, da.__assign)((0, da.__assign)((0, da.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, da.__assign)((0, da.__assign)({}, e), Wa(t))
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
              o.options[0].replace(qa, (function(e, r, n, o, i, a) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Ua.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (za.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(za, (function(e, r, n, o, i, a) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, da.__assign)((0, da.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, da.__assign)((0, da.__assign)({}, t), Ga(i)))
          } else if (Fa.test(o.stem)) t = (0, da.__assign)((0, da.__assign)({}, t), Ga(o.stem));
          else {
            var a = Xa(o.stem);
            a && (t = (0, da.__assign)((0, da.__assign)({}, t), a));
            var s = Ka(o.stem);
            s && (t = (0, da.__assign)((0, da.__assign)({}, t), s))
          }
        }
        return t
      }
      var Za, $a = {
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

      function Qa(e) {
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
        return "root" !== n && (r = e.maximize().region), ($a[r || ""] || $a[n || ""] || $a["".concat(n, "-001")] || $a["001"])[0]
      }
      var Ja = new RegExp("^".concat(Aa.source, "*")),
        es = new RegExp("".concat(Aa.source, "*$"));

      function ts(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var rs = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        ns = !!String.fromCodePoint,
        os = !!Object.fromEntries,
        is = !!String.prototype.codePointAt,
        as = !!String.prototype.trimStart,
        ss = !!String.prototype.trimEnd,
        ls = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        us = !0;
      try {
        us = "a" === (null === (Za = ys("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Za ? void 0 : Za[0])
      } catch (e) {
        us = !1
      }
      var cs, ds = rs ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        fs = ns ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        hs = os ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        ps = is ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        ms = as ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Ja, "")
        },
        vs = ss ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(es, "")
        };

      function ys(e, t) {
        return new RegExp(e, t)
      }
      if (us) {
        var gs = ys("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        cs = function(e, t) {
          var r;
          return gs.lastIndex = t, null !== (r = gs.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else cs = function(e, t) {
        for (var r = [];;) {
          var n = ps(e, t);
          if (void 0 === n || Ps(n) || Ss(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return fs.apply(void 0, r)
      };
      var bs, _s, ws = function() {
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
                  return this.error(ba.UNMATCHED_CLOSING_TAG, ts(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Es(this.peek() || 0)) {
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
                  type: _a.pound,
                  location: ts(a, this.clonePosition())
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
              type: _a.literal,
              value: "<".concat(n, "/>"),
              location: ts(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Es(this.char())) return this.error(ba.INVALID_TAG, ts(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(ba.UNMATCHED_CLOSING_TAG, ts(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: _a.tag,
                  value: n,
                  children: i,
                  location: ts(r, this.clonePosition())
                },
                err: null
              } : this.error(ba.INVALID_TAG, ts(a, this.clonePosition())))
            }
            return this.error(ba.UNCLOSED_TAG, ts(r, this.clonePosition()))
          }
          return this.error(ba.INVALID_TAG, ts(r, this.clonePosition()))
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
          var s = ts(r, this.clonePosition());
          return {
            val: {
              type: _a.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Es(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return fs.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), fs(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(ba.EXPECT_ARGUMENT_CLOSING_BRACE, ts(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(ba.EMPTY_ARGUMENT, ts(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(ba.MALFORMED_ARGUMENT, ts(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(ba.EXPECT_ARGUMENT_CLOSING_BRACE, ts(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: _a.argument,
                  value: n,
                  location: ts(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ba.EXPECT_ARGUMENT_CLOSING_BRACE, ts(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(ba.MALFORMED_ARGUMENT, ts(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = cs(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: ts(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(ba.EXPECT_ARGUMENT_TYPE, ts(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = vs(y.val)).length) return this.error(ba.EXPECT_ARGUMENT_STYLE, ts(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: ts(u, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var c = ts(n, this.clonePosition());
              if (l && ds(null == l ? void 0 : l.style, "::", 0)) {
                var d = ms(l.style.slice(2));
                if ("number" === a) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: _a.number,
                    value: r,
                    location: c,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(ba.EXPECT_DATE_TIME_SKELETON, c);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Qa(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: wa.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Ha(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? _a.date : _a.time,
                    value: r,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? _a.number : "date" === a ? _a.date : _a.time,
                  value: r,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(ba.EXPECT_SELECT_ARGUMENT_OPTIONS, ts(p, (0, da.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(ba.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ts(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(ba.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ba.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = ts(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: _a.select,
                  value: r,
                  options: hs(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: _a.plural,
                  value: r,
                  options: hs(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(ba.INVALID_ARGUMENT_TYPE, ts(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(ba.EXPECT_ARGUMENT_CLOSING_BRACE, ts(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(ba.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ts(r, this.clonePosition()));
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
            r = Va(e)
          } catch (e) {
            return this.error(ba.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: wa.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Ya(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, u = n.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(ba.EXPECT_PLURAL_ARGUMENT_SELECTOR, ba.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = ts(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? ba.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ba.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? ba.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ba.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ts(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: ts(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === a.length ? this.error("select" === t ? ba.EXPECT_SELECT_ARGUMENT_SELECTOR : ba.EXPECT_PLURAL_ARGUMENT_SELECTOR, ts(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(ba.MISSING_OTHER_CLAUSE, ts(this.clonePosition(), this.clonePosition())) : {
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
          var s = ts(n, this.clonePosition());
          return o ? ls(i *= r) ? {
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
          var t = ps(this.message, e);
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
          if (ds(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Ps(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function Es(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Ps(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Ss(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Cs(e) {
        e.forEach((function(e) {
          if (delete e.location, ja(e) || Ia(e))
            for (var t in e.options) delete e.options[t].location, Cs(e.options[t].value);
          else Oa(e) && Da(e.style) || (Ta(e) || Na(e)) && La(e.style) ? delete e.style.location : Ra(e) && Cs(e.children)
        }))
      }

      function xs(e, t) {
        void 0 === t && (t = {}), t = (0, da.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new ws(e, t).parse();
        if (r.err) {
          var n = SyntaxError(ba[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || Cs(r.val), r.val
      }(_s = bs || (bs = {})).MISSING_VALUE = "MISSING_VALUE", _s.INVALID_VALUE = "INVALID_VALUE", _s.MISSING_INTL_API = "MISSING_INTL_API";
      var Os, Ts = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, da.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Ns = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), bs.INVALID_VALUE, o) || this
          }
          return (0, da.__extends)(t, e), t
        }(Ts),
        js = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), bs.INVALID_VALUE, n) || this
          }
          return (0, da.__extends)(t, e), t
        }(Ts),
        Is = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), bs.MISSING_VALUE, r) || this
          }
          return (0, da.__extends)(t, e), t
        }(Ts);

      function ks(e) {
        return "function" == typeof e
      }

      function Rs(e, t, r, n, o, i, a) {
        if (1 === e.length && Ca(e[0])) return [{
          type: Os.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, u = e; l < u.length; l++) {
          var c = u[l];
          if (Ca(c)) s.push({
            type: Os.literal,
            value: c.value
          });
          else if (ka(c)) "number" == typeof i && s.push({
            type: Os.literal,
            value: r.getNumberFormat(t).format(i)
          });
          else {
            var d = c.value;
            if (!o || !(d in o)) throw new Is(d, a);
            var f = o[d];
            if (xa(c)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? Os.literal : Os.object,
              value: f
            });
            else if (Ta(c)) {
              var h = "string" == typeof c.style ? n.date[c.style] : La(c.style) ? c.style.parsedOptions : void 0;
              s.push({
                type: Os.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (Na(c)) h = "string" == typeof c.style ? n.time[c.style] : La(c.style) ? c.style.parsedOptions : n.time.medium, s.push({
              type: Os.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (Oa(c))(h = "string" == typeof c.style ? n.number[c.style] : Da(c.style) ? c.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: Os.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (Ra(c)) {
                var p = c.children,
                  m = c.value,
                  v = o[m];
                if (!ks(v)) throw new js(m, "function", a);
                var y = v(Rs(p, t, r, n, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(y) || (y = [y]), s.push.apply(s, y.map((function(e) {
                  return {
                    type: "string" == typeof e ? Os.literal : Os.object,
                    value: e
                  }
                })))
              }
              if (ja(c)) {
                if (!(g = c.options[f] || c.options.other)) throw new Ns(c.value, f, Object.keys(c.options), a);
                s.push.apply(s, Rs(g.value, t, r, n, o))
              } else if (Ia(c)) {
                var g;
                if (!(g = c.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new Ts('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', bs.MISSING_INTL_API, a);
                  var b = r.getPluralRules(t, {
                    type: c.pluralType
                  }).select(f - (c.offset || 0));
                  g = c.options[b] || c.options.other
                }
                if (!g) throw new Ns(c.value, f, Object.keys(c.options), a);
                s.push.apply(s, Rs(g.value, t, r, n, o, f - (c.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce((function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === Os.literal && t.type === Os.literal ? r.value += t.value : e.push(t), e
        }), []);
        var _
      }

      function Ds(e) {
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
      }(Os || (Os = {}));
      var Ls, As = function() {
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
                return e.length && t.type === Os.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return Rs(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
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
              c = (u.formatters, (0, da.__rest)(u, ["formatters"]));
            this.ast = e.__parse(t, (0, da.__assign)((0, da.__assign)({}, c), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = n) ? Object.keys(a).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, da.__assign)((0, da.__assign)((0, da.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(r, n) {
                return r[n] = (0, da.__assign)((0, da.__assign)({}, e[n]), t[n] || {}), r
              }), {})) : e
            }(a[t], s[t]), e
          }), (0, da.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: fa((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Ds(i.number),
              strategy: Sa.variadic
            }),
            getDateTimeFormat: fa((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Ds(i.dateTime),
              strategy: Sa.variadic
            }),
            getPluralRules: fa((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Ds(i.pluralRules),
              strategy: Sa.variadic
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
        }, e.__parse = xs, e.formats = {
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
      }(Ls || (Ls = {}));
      var Ms = function(e) {
          function t(r, n, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, da.__extends)(t, e), t
        }(Error),
        Hs = function(e) {
          function t(t, r) {
            return e.call(this, Ls.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, da.__extends)(t, e), t
        }(Ms),
        Bs = function(e) {
          function t(t, r) {
            return e.call(this, Ls.INVALID_CONFIG, t, r) || this
          }
          return (0, da.__extends)(t, e), t
        }(Ms),
        Vs = function(e) {
          function t(t, r) {
            return e.call(this, Ls.MISSING_DATA, t, r) || this
          }
          return (0, da.__extends)(t, e), t
        }(Ms),
        zs = function(e) {
          function t(t, r, n) {
            var o = e.call(this, Ls.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, da.__extends)(t, e), t
        }(Ms),
        Fs = function(e) {
          function t(t, r, n, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return i.descriptor = n, i.locale = r, i
          }
          return (0, da.__extends)(t, e), t
        }(zs),
        qs = function(e) {
          function t(t, r) {
            var n = e.call(this, Ls.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, da.__extends)(t, e), t
        }(Ms);

      function Us(e, t, r) {
        return void 0 === r && (r = {}), t.reduce((function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }), {})
      }
      var Gs = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Xs(e) {
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

      function Ks(e, t, r, n) {
        var o, i = e && e[t];
        if (i && (o = i[r]), o) return o;
        n(new Hs("No ".concat(t, " format named: ").concat(r)))
      }

      function Ws(e, t) {
        var r = t && t.cache ? t.cache : tl,
          n = t && t.serializer ? t.serializer : Js;
        return (t && t.strategy ? t.strategy : Qs)(e, {
          cache: r,
          serializer: n
        })
      }

      function Ys(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function Zs(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function $s(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function Qs(e, t) {
        return $s(e, this, 1 === e.length ? Ys : Zs, t.cache.create(), t.serializer)
      }
      var Js = function() {
        return JSON.stringify(arguments)
      };

      function el() {
        this.cache = Object.create(null)
      }
      el.prototype.get = function(e) {
        return this.cache[e]
      }, el.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var tl = {
          create: function() {
            return new el
          }
        },
        rl = {
          variadic: function(e, t) {
            return $s(e, this, Zs, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return $s(e, this, Ys, t.cache.create(), t.serializer)
          }
        };

      function nl(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      Ws((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: rl.variadic
      }), Ws((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: rl.variadic
      }), Ws((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: rl.variadic
      }), Ws((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: rl.variadic
      }), Ws((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: rl.variadic
      });
      var ol = (0, da.__assign)((0, da.__assign)({}, Gs), {
        textComponent: g.Fragment
      });
      r(35255);
      var il = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? g.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = g.createContext(null)),
        al = (il.Consumer, il.Provider),
        sl = il;

      function ll(e, t) {
        return Object.keys(e).reduce((function(r, n) {
          return r[n] = (0, da.__assign)({
            timeZone: t
          }, e[n]), r
        }), {})
      }

      function ul(e, t) {
        return Object.keys((0, da.__assign)((0, da.__assign)({}, e), t)).reduce((function(r, n) {
          return r[n] = (0, da.__assign)((0, da.__assign)({}, e[n] || {}), t[n] || {}), r
        }), {})
      }

      function cl(e, t) {
        if (!t) return e;
        var r = As.formats;
        return (0, da.__assign)((0, da.__assign)((0, da.__assign)({}, r), e), {
          date: ul(ll(r.date, t), ll(e.date || {}, t)),
          time: ul(ll(r.time, t), ll(e.time || {}, t))
        })
      }
      fa((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Sa.variadic
      }), fa((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Sa.variadic
      }), fa((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Sa.variadic
      }), fa((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Sa.variadic
      }), fa((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Sa.variadic
      });
      var dl = function(e, t, r, n, o) {
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
          if (Array.isArray(y) && 1 === y.length && y[0].type === _a.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, da.__assign)((0, da.__assign)({}, h), n || {}), a = cl(a, f), u = cl(u, f), !y) {
            if (!1 === c && "" === y) return y;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new qs(r, i)), m) try {
              return t.getMessageFormat(m, l, u, o).format(n)
            } catch (e) {
              return d(new Fs('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, i, a, (0, da.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new Fs('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, u, o).format(n)
          } catch (e) {
            d(new Fs('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        fl = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function hl(e, t, r) {
        var n = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === r && (r = {});
        var a = r.format,
          s = a && Ks(o, "number", a, i) || {};
        return t(n, Us(r, fl, s))
      }

      function pl(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return hl(e, t, n).format(r)
        } catch (t) {
          e.onError(new zs("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function ml(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return hl(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new zs("Error formatting number.", e.locale, t))
        }
        return []
      }
      var vl = ["numeric", "style"];

      function yl(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new Ts('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', bs.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === r && (r = {});
            var a = r.format,
              s = !!a && Ks(o, "relative", a, i) || {};
            return t(n, Us(r, vl, s))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new zs("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var gl = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function bl(e, t, r, n) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          u = (0, da.__assign)((0, da.__assign)({}, s && {
            timeZone: s
          }), l && Ks(i, t, l, a)),
          c = Us(n, gl, u);
        return "time" !== t || c.hour || c.minute || c.second || c.timeStyle || c.dateStyle || (c = (0, da.__assign)((0, da.__assign)({}, c), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, c)
      }

      function _l(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return bl(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new zs("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function wl(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return bl(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new zs("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function El(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = r[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          u = e.locale,
          c = e.onError,
          d = Us(s, gl, l ? {
            timeZone: l
          } : {});
        try {
          return t(u, d).formatRange(o, i)
        } catch (t) {
          c(new zs("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Pl(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return bl(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new zs("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Sl(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return bl(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new zs("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Cl = ["type"];

      function xl(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new Ts('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', bs.MISSING_INTL_API));
        var a = Us(n, Cl);
        try {
          return t(o, a).select(r)
        } catch (e) {
          i(new zs("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Ol = ["type", "style"],
        Tl = Date.now();

      function Nl(e, t, r, n) {
        void 0 === n && (n = {});
        var o = jl(e, t, r, n).reduce((function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function jl(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || i(new Ts('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', bs.MISSING_INTL_API));
        var a = Us(n, Ol);
        try {
          var s = {},
            l = r.map((function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(Tl, "_").concat(e, "_").concat(Tl)
                }(t);
                return s[r] = e, r
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, da.__assign)((0, da.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new zs("Error formatting list.", o, e))
        }
        return r
      }
      var Il, kl, Rl, Dl = ["style", "type", "fallback", "languageDisplay"];

      function Ll(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Ts('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', bs.MISSING_INTL_API));
        var a = Us(n, Dl);
        try {
          return t(o, a).of(r)
        } catch (e) {
          i(new zs("Error formatting display name.", o, e))
        }
      }

      function Al(e, t) {
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
              o = fa((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Xs(e.dateTime),
                strategy: Sa.variadic
              }),
              i = fa((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Xs(e.number),
                strategy: Sa.variadic
              }),
              a = fa((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, da.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Xs(e.pluralRules),
                strategy: Sa.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: fa((function(e, t, r, n) {
                return new As(e, t, r, (0, da.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, n || {}))
              }), {
                cache: Xs(e.message),
                strategy: Sa.variadic
              }),
              getRelativeTimeFormat: fa((function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, da.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Xs(e.relativeTime),
                strategy: Sa.variadic
              }),
              getPluralRules: a,
              getListFormat: fa((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, da.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Xs(e.list),
                strategy: Sa.variadic
              }),
              getDisplayNames: fa((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, da.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Xs(e.displayNames),
                strategy: Sa.variadic
              })
            }
          }(t),
          n = (0, da.__assign)((0, da.__assign)({}, Gs), e),
          o = n.locale,
          i = n.defaultLocale,
          a = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new Vs('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new Vs('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new Bs('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, da.__assign)((0, da.__assign)({}, n), {
            formatters: r,
            formatNumber: pl.bind(null, n, r.getNumberFormat),
            formatNumberToParts: ml.bind(null, n, r.getNumberFormat),
            formatRelativeTime: yl.bind(null, n, r.getRelativeTimeFormat),
            formatDate: _l.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: Pl.bind(null, n, r.getDateTimeFormat),
            formatTime: wl.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: El.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: Sl.bind(null, n, r.getDateTimeFormat),
            formatPlural: xl.bind(null, n, r.getPluralRules),
            formatMessage: dl.bind(null, n, r),
            $t: dl.bind(null, n, r),
            formatList: Nl.bind(null, n, r.getListFormat),
            formatListToParts: jl.bind(null, n, r.getListFormat),
            formatDisplayName: Ll.bind(null, n, r.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Il || (Il = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(kl || (kl = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Rl || (Rl = {}));
      var Ml, Hl = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Bl = {
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

      function Vl(e) {
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
        return "root" !== n && (r = e.maximize().region), (Bl[r || ""] || Bl[n || ""] || Bl["".concat(n, "-001")] || Bl["001"])[0]
      }
      var zl = new RegExp("^".concat(Hl.source, "*")),
        Fl = new RegExp("".concat(Hl.source, "*$"));

      function ql(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Ul = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Gl = !!String.fromCodePoint,
        Xl = !!Object.fromEntries,
        Kl = !!String.prototype.codePointAt,
        Wl = !!String.prototype.trimStart,
        Yl = !!String.prototype.trimEnd,
        Zl = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        $l = !0;
      try {
        $l = "a" === (null === (Ml = au("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Ml ? void 0 : Ml[0])
      } catch (e) {
        $l = !1
      }
      var Ql, Jl, eu = Ul ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        tu = Gl ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        ru = Xl ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        nu = Kl ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        ou = Wl ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(zl, "")
        },
        iu = Yl ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Fl, "")
        };

      function au(e, t) {
        return new RegExp(e, t)
      }
      if ($l) {
        var su = au("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Ql = function(e, t) {
          var r;
          return su.lastIndex = t, null !== (r = su.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Ql = function(e, t) {
        for (var r = [];;) {
          var n = nu(e, t);
          if (void 0 === n || uu(n) || cu(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return tu.apply(void 0, r)
      };

      function lu(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function uu(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function cu(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function du(e) {
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
                  return this.error(Il.UNMATCHED_CLOSING_TAG, ql(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && lu(this.peek() || 0)) {
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
                  type: kl.pound,
                  location: ql(a, this.clonePosition())
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
              type: kl.literal,
              value: "<".concat(n, "/>"),
              location: ql(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !lu(this.char())) return this.error(Il.INVALID_TAG, ql(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Il.UNMATCHED_CLOSING_TAG, ql(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: kl.tag,
                  value: n,
                  children: i,
                  location: ql(r, this.clonePosition())
                },
                err: null
              } : this.error(Il.INVALID_TAG, ql(a, this.clonePosition())))
            }
            return this.error(Il.UNCLOSED_TAG, ql(r, this.clonePosition()))
          }
          return this.error(Il.INVALID_TAG, ql(r, this.clonePosition()))
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
          var s = ql(r, this.clonePosition());
          return {
            val: {
              type: kl.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (lu(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return tu.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), tu(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Il.EXPECT_ARGUMENT_CLOSING_BRACE, ql(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Il.EMPTY_ARGUMENT, ql(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Il.MALFORMED_ARGUMENT, ql(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Il.EXPECT_ARGUMENT_CLOSING_BRACE, ql(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: kl.argument,
                  value: n,
                  location: ql(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Il.EXPECT_ARGUMENT_CLOSING_BRACE, ql(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Il.MALFORMED_ARGUMENT, ql(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Ql(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: ql(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Il.EXPECT_ARGUMENT_TYPE, ql(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = iu(y.val)).length) return this.error(Il.EXPECT_ARGUMENT_STYLE, ql(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: ql(u, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var c = ql(n, this.clonePosition());
              if (l && eu(null == l ? void 0 : l.style, "::", 0)) {
                var d = ou(l.style.slice(2));
                if ("number" === a) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: kl.number,
                    value: r,
                    location: c,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Il.EXPECT_DATE_TIME_SKELETON, c);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Vl(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: Rl.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Ha(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? kl.date : kl.time,
                    value: r,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? kl.number : "date" === a ? kl.date : kl.time,
                  value: r,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Il.EXPECT_SELECT_ARGUMENT_OPTIONS, ql(p, (0, da.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Il.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ql(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Il.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Il.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = ql(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: kl.select,
                  value: r,
                  options: ru(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: kl.plural,
                  value: r,
                  options: ru(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Il.INVALID_ARGUMENT_TYPE, ql(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Il.EXPECT_ARGUMENT_CLOSING_BRACE, ql(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Il.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ql(r, this.clonePosition()));
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
            r = Va(e)
          } catch (e) {
            return this.error(Il.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Rl.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Ya(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, u = n.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Il.EXPECT_PLURAL_ARGUMENT_SELECTOR, Il.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = ql(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Il.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Il.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Il.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Il.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ql(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: ql(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Il.EXPECT_SELECT_ARGUMENT_SELECTOR : Il.EXPECT_PLURAL_ARGUMENT_SELECTOR, ql(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Il.MISSING_OTHER_CLAUSE, ql(this.clonePosition(), this.clonePosition())) : {
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
          var s = ql(n, this.clonePosition());
          return o ? Zl(i *= r) ? {
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
          var t = nu(this.message, e);
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
          if (eu(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && uu(this.char());) this.bump()
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
      }(Jl || (Jl = {}));
      var fu = function(e, t, r, n) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = du(n),
            s = dl.apply(void 0, (0, da.__spreadArray)([e, t, r, a], o, !1));
          return Array.isArray(s) ? g.Children.toArray(s) : s
        },
        hu = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, da.__rest)(e, ["defaultRichTextElements"]),
            o = du(r),
            i = Al((0, da.__assign)((0, da.__assign)((0, da.__assign)({}, ol), n), {
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
          return (0, da.__assign)((0, da.__assign)({}, i), {
            formatMessage: fu.bind(null, a, i.formatters),
            $t: fu.bind(null, a, i.formatters)
          })
        };

      function pu(e) {
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
      var mu = function(e) {
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
            intl: hu(pu(t.props), t.cache),
            prevConfig: pu(t.props)
          }, t
        }
        return (0, da.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = pu(e);
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
            intl: hu(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return nl(this.state.intl), g.createElement(al, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = ol, t
      }(g.PureComponent);
      const vu = mu;

      function yu() {
        var e = g.useContext(sl);
        return nl(e), e
      }
      var gu, bu;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(gu || (gu = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(bu || (bu = {}));
      var _u = function(e) {
        var t = yu(),
          r = e.value,
          n = e.children,
          o = (0, da.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function wu(e) {
        var t = function(t) {
          var r = yu(),
            n = t.value,
            o = t.children,
            i = (0, da.__rest)(t, ["value", "children"]),
            a = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(a, i) : r.formatTimeToParts(a, i))
        };
        return t.displayName = bu[e], t
      }

      function Eu(e) {
        var t = function(t) {
          var r = yu(),
            n = t.value,
            o = t.children,
            i = (0, da.__rest)(t, ["value", "children"]),
            a = r[e](n, i);
          if ("function" == typeof o) return o(a);
          var s = r.textComponent || g.Fragment;
          return g.createElement(s, null, a)
        };
        return t.displayName = gu[e], t
      }
      _u.displayName = "FormattedNumberParts", _u.displayName = "FormattedNumberParts", Eu("formatDate"), Eu("formatTime"), Eu("formatNumber"), Eu("formatList"), Eu("formatDisplayName"), wu("formatDate"), wu("formatTime");
      const Pu = ({
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
          }), [r]), o ? (0, v.jsx)(vu, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        Su = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "Open image in lightbox"
        },
        Cu = {
          id: "Lightbox_Dialog_Title",
          description: "Visually hidden text used for the lightbox dialog title",
          defaultMessage: "Image lightbox"
        },
        xu = {
          id: "Lightbox_Dialog_Description",
          description: "Visually hidden text used for the lightbox dialog description",
          defaultMessage: "Alt text: {alt}"
        },
        Ou = {
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
      var Tu = r(4218);
      const Nu = (e, t) => {
        const r = "more" === t ? Tu.xW.lightHc : Tu.xW.light,
          n = "more" === t ? Tu.xW.darkHc : Tu.xW.dark;
        return "dark" === e ? n : r
      };

      function ju(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var Iu = r(94118),
        ku = r(95362),
        Ru = r(85426),
        Du = r(79158),
        Lu = r(77768),
        Au = r(29044),
        Mu = r(60528),
        Hu = r(78004),
        Bu = r(20027),
        Vu = ["PageUp", "PageDown"],
        zu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Fu = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        qu = "Slider",
        [Uu, Gu, Xu] = (0, Bu.N)(qu),
        [Ku, Wu] = (0, Ru.A)(qu, [Xu]),
        [Yu, Zu] = Ku(qu),
        $u = g.forwardRef(((e, t) => {
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
          } = e, y = g.useRef(new Set), b = g.useRef(0), _ = "horizontal" === a ? ec : tc, [w = [], E] = (0, Du.useControllableState)({
            prop: c,
            defaultProp: u,
            onChange: e => {
              const t = [...y.current];
              t[b.current]?.focus(), d(e)
            }
          }), P = g.useRef(w);

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
              u = ju(s, [n, o]);
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
          return (0, v.jsx)(Yu, {
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
            children: (0, v.jsx)(Uu.Provider, {
              scope: e.__scopeSlider,
              children: (0, v.jsx)(Uu.Slot, {
                scope: e.__scopeSlider,
                children: (0, v.jsx)(_, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, Iu.m)(m.onPointerDown, (() => {
                    s || (P.current = w)
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
                    S(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    S(e, b.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = P.current[b.current];
                    w[b.current] !== e && f(w)
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
                      const r = Vu.includes(e.key) || e.shiftKey && zu.includes(e.key) ? 10 : 1,
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
      $u.displayName = qu;
      var [Qu, Ju] = Ku(qu, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), ec = g.forwardRef(((e, t) => {
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
        } = e, [d, f] = g.useState(null), h = (0, ku.s)(t, (e => f(e))), p = g.useRef(void 0), m = (0, Lu.jH)(o), y = "ltr" === m, b = y && !i || !y && i;

        function _(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = fc([0, t.width], b ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, v.jsx)(Qu, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, v.jsx)(rc, {
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
              const t = Fu[b ? "from-left" : "from-right"].includes(e.key);
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), tc = g.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...u
        } = e, c = g.useRef(null), d = (0, ku.s)(t, c), f = g.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = fc([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, v.jsx)(Qu, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, v.jsx)(rc, {
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
              const t = Fu[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), rc = g.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...u
        } = e, c = Zu(qu, r);
        return (0, v.jsx)(Hu.sG.span, {
          ...u,
          ref: t,
          onKeyDown: (0, Iu.m)(e.onKeyDown, (e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Vu.concat(zu).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: (0, Iu.m)(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          })),
          onPointerMove: (0, Iu.m)(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: (0, Iu.m)(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), nc = "SliderTrack", oc = g.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Zu(nc, r);
        return (0, v.jsx)(Hu.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      }));
      oc.displayName = nc;
      var ic = "SliderRange",
        ac = g.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Zu(ic, r), i = Ju(ic, r), a = g.useRef(null), s = (0, ku.s)(t, a), l = o.values.length, u = o.values.map((e => dc(e, o.min, o.max))), c = l > 1 ? Math.min(...u) : 0, d = 100 - Math.max(...u);
          return (0, v.jsx)(Hu.sG.span, {
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
      ac.displayName = ic;
      var sc = "SliderThumb",
        lc = g.forwardRef(((e, t) => {
          const r = Gu(e.__scopeSlider),
            [n, o] = g.useState(null),
            i = (0, ku.s)(t, (e => o(e))),
            a = g.useMemo((() => n ? r().findIndex((e => e.ref.current === n)) : -1), [r, n]);
          return (0, v.jsx)(uc, {
            ...e,
            ref: i,
            index: a
          })
        })),
        uc = g.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, a = Zu(sc, r), s = Ju(sc, r), [l, u] = g.useState(null), c = (0, ku.s)(t, (e => u(e))), d = !l || a.form || !!l.closest("form"), f = (0, Mu.X)(l), h = a.values[n], p = void 0 === h ? 0 : dc(h, a.min, a.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, a.values.length), y = f?.[s.size], b = y ? function(e, t, r) {
            const n = e / 2;
            return (n - fc([0, 50], [0, n])(t) * r) * r
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
            children: [(0, v.jsx)(Uu.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, v.jsx)(Hu.sG.span, {
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
                onFocus: (0, Iu.m)(e.onFocus, (() => {
                  a.valueIndexToChangeRef.current = n
                }))
              })
            }), d && (0, v.jsx)(cc, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: h
            }, n)]
          })
        }));
      lc.displayName = sc;
      var cc = g.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = g.useRef(null),
          i = (0, ku.s)(o, n),
          a = (0, Au.Z)(t);
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
        }), [a, t]), (0, v.jsx)(Hu.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      }));

      function dc(e, t, r) {
        return ju(100 / (r - t) * (e - t), [0, 100])
      }

      function fc(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      cc.displayName = "RadioBubbleInput";
      var hc = $u,
        pc = oc,
        mc = ac,
        vc = lc;
      const yc = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close lightbox"
        },
        gc = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        bc = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        _c = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        wc = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        Ec = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        Pc = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        Sc = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        Cc = {
          id: "Lightbox_Zoom_Slider_Label",
          description: "Aria-label for the lightbox zoom slider",
          defaultMessage: "Zoom level"
        },
        xc = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Oc = {
          id: "Lightbox_Download_Button_Label",
          description: "Aria-label for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        Tc = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };

      function Nc() {
        return Nc = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Nc.apply(null, arguments)
      }
      var jc = ["shift", "alt", "meta", "mod", "ctrl"],
        Ic = {
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

      function kc(e) {
        return (e && Ic[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Rc(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Dc(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map((function(e) {
          return kc(e)
        }));
        return Nc({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter((function(e) {
            return !jc.includes(e)
          })),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && Mc([kc(e.key), kc(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && Hc([kc(e.key), kc(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        Lc.clear()
      }));
      var Lc = new Set;

      function Ac(e) {
        return Array.isArray(e)
      }

      function Mc(e) {
        var t = Array.isArray(e) ? e : [e];
        Lc.has("meta") && Lc.forEach((function(e) {
          return ! function(e) {
            return jc.includes(e)
          }(e) && Lc.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return Lc.add(e.toLowerCase())
        }))
      }

      function Hc(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Lc.clear() : t.forEach((function(e) {
          return Lc.delete(e.toLowerCase())
        }))
      }

      function Bc(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Ac(t) ? Boolean(n && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        }))) : Boolean(n && t && t)
      }
      var Vc = (0, g.createContext)(void 0);

      function zc(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, v.jsx)(Vc.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Fc(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(r, n) {
          return r && Fc(e[n], t[n])
        }), !0) : e === t
      }
      var qc = (0, g.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Uc = function(e) {
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
                  return !Fc(t, e)
                }))
              }))
            }), []);
          return (0, v.jsx)(qc.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: c,
              disableScope: d,
              toggleScope: f
            },
            children: (0, v.jsx)(zc, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        Gc = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Xc = "undefined" != typeof window ? g.useLayoutEffect : g.useEffect;

      function Kc(e, t, r, n) {
        var o = (0, g.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, g.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          u = Ac(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, g.useCallback)(t, null != c ? c : []),
          f = (0, g.useRef)(d);
        f.current = c ? d : t;
        var h = function(e) {
            var t = (0, g.useRef)(void 0);
            return Fc(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, g.useContext)(qc).enabledScopes,
          m = (0, g.useContext)(Vc);
        return Xc((function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Bc(e, ["input", "textarea", "select"]) || Bc(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void Gc(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && Rc(u, null == h ? void 0 : h.splitKey).forEach((function(r) {
                    var n, o = Dc(r, null == h ? void 0 : h.combinationKey);
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
                          y = kc(f),
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
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (Ac(n = c) ? n : n.split(o)).every((function(e) {
                          return Lc.has(e.trim().toLowerCase())
                        }))) : !c)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void Gc(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              n = function(e) {
                void 0 !== e.key && (Mc(kc(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Hc(kc(e.code)), s.current = !1, null != h && h.keyup && r(e, !0))
              },
              a = i || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Rc(u, null == h ? void 0 : h.splitKey).forEach((function(e) {
                return m.addHotkey(Dc(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Rc(u, null == h ? void 0 : h.splitKey).forEach((function(e) {
                  return m.removeHotkey(Dc(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                }))
              }
          }
        }), [i, u, h, p]), a
      }

      function Wc(e) {
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

      function Yc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Zc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yc(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Wc(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yc(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function $c(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Zc(Zc({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Qc(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $c(e.variantClassNames, (e => $c(e, (e => e.split(" ")[0]))))
            }
          }, t
        };
      Jc({
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
      var ed = Jc({
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
        td = r(79099),
        rd = r.t(td, 2);
      const nd = (0, g.forwardRef)((({
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
        override_textColor: w,
        ...E
      }, P) => {
        const S = (0, g.useRef)(null),
          C = (0, Ae.UP)(S, P),
          x = (0, Me.zQ)(),
          O = "string" == typeof a ? a : a?.[x] ?? a.default ?? "LG",
          {
            buttonProps: T
          } = (0, Ae.sL)((0, y.mergeProps)(E, {
            isLoading: l
          }), S);
        Le({
          refs: {
            buttonRef: S
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
            textColor: w
          },
          enabled: "accent" === o
        });
        const N = (0, y.mergeProps)({
            className: ed({
              appearance: o,
              size: O,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, T),
          j = rd[r],
          I = t ? _.DX : "button";
        return (0, v.jsxs)(I, {
          ref: C,
          ...N,
          children: [j && (0, v.jsx)(j, {
            label: n || "",
            size: O
          }), (0, v.jsx)(_.xV, {
            children: s
          }), l && (0, v.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, v.jsx)(We, {
              label: u || "",
              size: O && "SM" !== O ? `inline${O}` : "inlineMD",
              hideTrack: !0
            })
          })]
        })
      }));

      function od(e) {
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

      function id(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ad(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? id(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = od(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : id(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function sd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ld = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ud = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ad(ad({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ld(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sd(e.variantClassNames, (e => sd(e, (e => e.split(" ")[0]))))
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
      const cd = (0, g.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? _.DX : "p",
          s = (0, y.mergeProps)({
            className: ud({
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
      var dd = "foundry_bc732x1";
      const fd = (0, g.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Kc(e, (e => r?.(e)), [r]), (0, v.jsx)(cd, {
        size: "XS",
        className: (0, at.clsx)("foundry_bc732x0", {
          [dd]: t
        }),
        asChild: !0,
        children: (0, v.jsx)("kbd", {
          ref: n,
          children: e
        })
      }))));
      var hd = r(1573),
        pd = r(74406),
        md = r(96077),
        vd = r(34902),
        yd = r(53146),
        gd = r(21222),
        bd = r(63694),
        [_d, wd] = (0, Ru.A)("Tooltip", [md.Bk]),
        Ed = (0, md.Bk)(),
        Pd = "TooltipProvider",
        Sd = 700,
        Cd = "tooltip.open",
        [xd, Od] = _d(Pd),
        Td = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Sd,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = g.useRef(!0), s = g.useRef(!1), l = g.useRef(0);
          return g.useEffect((() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }), []), (0, v.jsx)(xd, {
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
      Td.displayName = Pd;
      var Nd = "Tooltip",
        [jd, Id] = _d(Nd),
        kd = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = Od(Nd, e.__scopeTooltip), u = Ed(t), [c, d] = g.useState(null), f = (0, pd.useId)(), h = g.useRef(0), p = a ?? l.disableHoverableContent, m = s ?? l.delayDuration, y = g.useRef(!1), [b, _] = (0, Du.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Cd))) : l.onClose(), i?.(e)
            },
            caller: Nd
          }), w = g.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), E = g.useCallback((() => {
            window.clearTimeout(h.current), h.current = 0, y.current = !1, _(!0)
          }), [_]), P = g.useCallback((() => {
            window.clearTimeout(h.current), h.current = 0, _(!1)
          }), [_]), S = g.useCallback((() => {
            window.clearTimeout(h.current), h.current = window.setTimeout((() => {
              y.current = !0, _(!0), h.current = 0
            }), m)
          }), [m, _]);
          return g.useEffect((() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }), []), (0, v.jsx)(md.bL, {
            ...u,
            children: (0, v.jsx)(jd, {
              scope: t,
              contentId: f,
              open: b,
              stateAttribute: w,
              trigger: c,
              onTriggerChange: d,
              onTriggerEnter: g.useCallback((() => {
                l.isOpenDelayedRef.current ? S() : E()
              }), [l.isOpenDelayedRef, S, E]),
              onTriggerLeave: g.useCallback((() => {
                p ? P() : (window.clearTimeout(h.current), h.current = 0)
              }), [P, p]),
              onOpen: E,
              onClose: P,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      kd.displayName = Nd;
      var Rd = "TooltipTrigger",
        Dd = g.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Id(Rd, r), i = Od(Rd, r), a = Ed(r), s = g.useRef(null), l = (0, ku.s)(t, s, o.onTriggerChange), u = g.useRef(!1), c = g.useRef(!1), d = g.useCallback((() => u.current = !1), []);
          return g.useEffect((() => () => document.removeEventListener("pointerup", d)), [d]), (0, v.jsx)(md.Mz, {
            asChild: !0,
            ...a,
            children: (0, v.jsx)(Hu.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, Iu.m)(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (c.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              })),
              onPointerLeave: (0, Iu.m)(e.onPointerLeave, (() => {
                o.onTriggerLeave(), c.current = !1
              })),
              onPointerDown: (0, Iu.m)(e.onPointerDown, (() => {
                o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              })),
              onFocus: (0, Iu.m)(e.onFocus, (() => {
                u.current || o.onOpen()
              })),
              onBlur: (0, Iu.m)(e.onBlur, o.onClose),
              onClick: (0, Iu.m)(e.onClick, o.onClose)
            })
          })
        }));
      Dd.displayName = Rd;
      var Ld = "TooltipPortal",
        [Ad, Md] = _d(Ld, {
          forceMount: void 0
        }),
        Hd = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = Id(Ld, t);
          return (0, v.jsx)(Ad, {
            scope: t,
            forceMount: r,
            children: (0, v.jsx)(yd.C, {
              present: r || i.open,
              children: (0, v.jsx)(vd.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Hd.displayName = Ld;
      var Bd = "TooltipContent",
        Vd = g.forwardRef(((e, t) => {
          const r = Md(Bd, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = Id(Bd, e.__scopeTooltip);
          return (0, v.jsx)(yd.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, v.jsx)(Gd, {
              side: o,
              ...i,
              ref: t
            }) : (0, v.jsx)(zd, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        zd = g.forwardRef(((e, t) => {
          const r = Id(Bd, e.__scopeTooltip),
            n = Od(Bd, e.__scopeTooltip),
            o = g.useRef(null),
            i = (0, ku.s)(t, o),
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
          }), [l, c, a, u, f]), (0, v.jsx)(Gd, {
            ...e,
            ref: i
          })
        })),
        [Fd, qd] = _d(Nd, {
          isInside: !1
        }),
        Ud = (0, gd.createSlottable)("TooltipContent"),
        Gd = g.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = Id(Bd, r), u = Ed(r), {
            onClose: c
          } = l;
          return g.useEffect((() => (document.addEventListener(Cd, c), () => document.removeEventListener(Cd, c))), [c]), g.useEffect((() => {
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
          }), [l.trigger, c]), (0, v.jsx)(hd.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, v.jsxs)(md.UC, {
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
              children: [(0, v.jsx)(Ud, {
                children: n
              }), (0, v.jsx)(Fd, {
                scope: r,
                isInside: !0,
                children: (0, v.jsx)(bd.Root, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        }));
      Vd.displayName = Bd;
      var Xd = "TooltipArrow",
        Kd = g.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Ed(r);
          return qd(Xd, r).isInside ? null : (0, v.jsx)(md.i3, {
            ...o,
            ...n,
            ref: t
          })
        }));
      Kd.displayName = Xd;
      var Wd = Td,
        Yd = kd,
        Zd = Dd,
        $d = Hd,
        Qd = Vd,
        Jd = Kd;
      const ef = (0, g.createContext)(null);

      function tf() {
        const e = (0, g.useContext)(ef);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const rf = ({
          children: e,
          delayDuration: t,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [i = !1, a] = (0, Ae.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, v.jsx)(Wd, {
            delayDuration: t,
            children: (0, v.jsx)(ef.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, v.jsx)(Yd, {
                open: i,
                onOpenChange: a,
                children: e
              })
            })
          })
        },
        nf = (0, g.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => (0, v.jsx)(Zd, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        }))),
        of = (0, g.forwardRef)((({
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
          } = tf(), m = (0, Ae.ZC)(p), g = Ri({
            opacity: p ? 1 : 0,
            immediate: p && !m
          }), b = (0, y.mergeProps)({
            className: "foundry_h3lgaa0 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy"
          }, f);
          return (0, v.jsx)(Qd, {
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
            children: (0, v.jsx)(ta.div, {
              style: g,
              ...b,
              ref: h,
              children: t
            })
          })
        })),
        af = (0, g.forwardRef)((({
          testId: e
        }, t) => {
          const r = (0, y.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, v.jsx)(Jd, {
            ...r,
            ref: t
          })
        })),
        sf = $d;
      var lf = "foundry_bwy1ds1",
        uf = "foundry_bwy1dsg",
        cf = "foundry_bwy1dsf";
      const df = e => {
          e.preventDefault?.()
        },
        ff = e => {
          const {
            delayDuration: t,
            content: r,
            children: n,
            ...o
          } = e;
          return (0, v.jsxs)(rf, {
            delayDuration: t,
            children: [(0, v.jsx)(nf, {
              children: n
            }), (0, v.jsxs)(of, {
              ...o,
              children: [r, (0, v.jsx)(af, {})]
            })]
          })
        },
        hf = (0, g.forwardRef)((({
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
          const y = yu(),
            g = (0, Ae.Ub)("screen and (max-width: 1024px)"),
            b = r !== h,
            _ = g ? "MD" : "XL",
            w = Ri({
              opacity: b ? 1 : 0,
              immediate: (0, Ae.jt)()
            });
          Kc(["+", "=", "add", "plus"], (() => n?.()), {
            preventDefault: !0,
            enabled: p
          }), Kc(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: p
          }), Kc("r", (() => c?.()), {
            preventDefault: !0,
            enabled: p
          });
          const E = (0, Ae.rl)() && g;
          return (0, v.jsx)(Uc, {
            children: (0, v.jsxs)("div", {
              className: "foundry_bwy1ds0",
              ref: m,
              children: [(0, v.jsx)(ff, {
                side: "right",
                delayDuration: 0,
                onPointerDownOutside: df,
                content: (0, v.jsxs)("div", {
                  className: cf,
                  children: [y.formatMessage(yc), (0, v.jsx)(cd, {
                    size: "XS",
                    className: uf,
                    children: y.formatMessage(gc, {
                      shortcut: (0, v.jsx)(fd, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, v.jsx)(nd, {
                  size: _,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: y.formatMessage(yc),
                  className: (0, at.clsx)(lf, "foundry_bwy1ds2"),
                  onPress: e
                })
              }), (0, v.jsxs)("div", {
                className: "foundry_bwy1ds3",
                children: [!E && p && (0, v.jsxs)(v.Fragment, {
                  children: [(0, v.jsxs)("div", {
                    className: "foundry_bwy1ds4",
                    children: [(0, v.jsx)(ff, {
                      side: "left",
                      delayDuration: 0,
                      onPointerDownOutside: df,
                      content: (0, v.jsxs)("div", {
                        className: cf,
                        children: [y.formatMessage(bc), (0, v.jsx)(cd, {
                          size: "XS",
                          className: uf,
                          children: y.formatMessage(_c, {
                            shortcut: (0, v.jsx)(fd, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, v.jsx)(nd, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: y.formatMessage(bc),
                        className: (0, at.clsx)(lf, "foundry_bwy1ds5"),
                        onPress: () => n(),
                        isDisabled: !l
                      })
                    }), (0, v.jsxs)(hc, {
                      className: "foundry_bwy1dsa",
                      value: [r],
                      max: s,
                      min: a,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => i?.(e[0]),
                      children: [(0, v.jsx)(pc, {
                        className: "foundry_bwy1dsb",
                        children: (0, v.jsx)(mc, {
                          className: "foundry_bwy1dsc"
                        })
                      }), (0, v.jsx)(ff, {
                        side: "left",
                        delayDuration: 0,
                        onPointerDownOutside: df,
                        content: y.formatMessage(xc, {
                          zoom: r.toFixed(0)
                        }),
                        children: (0, v.jsx)(vc, {
                          className: "foundry_bwy1dsd",
                          "aria-label": y.formatMessage(Cc),
                          children: (0, v.jsx)("span", {
                            className: "foundry_bwy1dse"
                          })
                        })
                      })]
                    }), (0, v.jsx)(ff, {
                      side: "left",
                      delayDuration: 0,
                      onPointerDownOutside: df,
                      content: (0, v.jsxs)("div", {
                        className: cf,
                        children: [y.formatMessage(wc), (0, v.jsx)(cd, {
                          size: "XS",
                          className: uf,
                          children: y.formatMessage(Ec, {
                            shortcut: (0, v.jsx)(fd, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, v.jsx)(nd, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: y.formatMessage(wc),
                        className: (0, at.clsx)(lf, "foundry_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !u
                      })
                    })]
                  }), (0, v.jsx)(ta.div, {
                    style: w,
                    children: (0, v.jsx)(ff, {
                      side: "left",
                      delayDuration: 0,
                      onPointerDownOutside: df,
                      content: (0, v.jsxs)("div", {
                        className: cf,
                        children: [y.formatMessage(Pc), (0, v.jsx)(cd, {
                          size: "XS",
                          className: uf,
                          children: y.formatMessage(Sc, {
                            shortcut: (0, v.jsx)(fd, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, v.jsx)(nd, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Undo",
                        label: y.formatMessage(Pc),
                        className: (0, at.clsx)(lf, "foundry_bwy1ds7"),
                        onPress: c,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), f && E && (0, v.jsx)(ff, {
                  side: "left",
                  delayDuration: 0,
                  onPointerDownOutside: df,
                  content: y.formatMessage(Tc),
                  children: (0, v.jsx)(nd, {
                    size: _,
                    appearance: "tertiary",
                    icon: "Download",
                    label: y.formatMessage(Oc),
                    className: lf,
                    onPress: e
                  })
                })]
              }), (0, v.jsxs)("div", {
                className: "foundry_bwy1ds8",
                children: [d && (0, v.jsxs)(v.Fragment, {
                  children: [(0, v.jsx)("div", {
                    className: "foundry_bwy1dsh"
                  }), (0, v.jsx)(cd, {
                    size: "SM",
                    "aria-hidden": !0,
                    asChild: "string" != typeof d,
                    children: d
                  })]
                }), f && !E && (0, v.jsx)("div", {
                  className: "foundry_bwy1ds9",
                  children: (0, v.jsx)(ff, {
                    side: "left",
                    delayDuration: 0,
                    onPointerDownOutside: df,
                    content: y.formatMessage(Tc),
                    children: (0, v.jsx)(nd, {
                      size: _,
                      appearance: "tertiary",
                      icon: "Download",
                      label: y.formatMessage(Oc),
                      className: lf,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var pf = "foundry_1a74xwb4",
        mf = r(24780);
      const vf = ta(mf.Overlay),
        yf = ta(mf.Content),
        gf = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        bf = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        _f = (0, y.cubicBezier)(.77, 0, .175, 1),
        wf = ({
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
          defaultZoomLevel: w = 100,
          minZoomLevel: E = 100,
          maxZoomLevel: P = 300,
          zoomLevelStep: S = 100,
          onZoomLevelChange: C,
          gestureSettings: x,
          testId: O,
          showZoomControls: T = !0,
          disableGesturesOn: N,
          asChild: j,
          children: I,
          className: k,
          usePortal: R = !0,
          enabled: D = !0
        }) => {
          const L = (0, g.useRef)(null),
            A = (0, g.useRef)(null),
            M = (0, g.useRef)(null),
            H = (0, g.useRef)(null),
            B = Li(),
            V = Li(),
            z = Li(),
            F = (0, g.useRef)(!1),
            q = yu(),
            U = (0, Ae.Ub)("screen and (max-width: 1024px)"),
            G = (0, Ae.rl)() && U,
            X = (0, Ae.jt)(),
            K = "pointer-devices" !== N || G,
            [W, Y] = (0, g.useState)(!0),
            [Z, $] = (0, g.useState)(!1),
            [Q = !1, J] = (0, Ae.ic)({
              prop: h,
              defaultProp: f,
              onChange: p
            }),
            [ee, te] = (0, g.useState)(!1),
            [re, ne] = (0, g.useState)(null),
            oe = (0, g.useDeferredValue)(ee),
            ie = d || X || f && !F.current;
          (0, g.useEffect)((() => {
            o?.()
          }), []), (0, g.useEffect)((() => {
            (f || h) && te(Q)
          }), []), (0, Ae.qn)((() => {
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
              e ? z.start({
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
                    scale: w / 100,
                    immediate: ie,
                    config: {
                      duration: 550,
                      easing: _f
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
                  }), "vertical" === g ? L.current?.style.setProperty("width", "100%") : "horizontal" === g && L.current?.style.setProperty("height", "100%"), t?.()
                }
              }) : z.start({
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
                      easing: _f
                    }
                  }), M.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), r?.()
                }
              })
            }(ee, {
              onClose: () => J(!1)
            }), F.current = !0)
          }), [ee]), (0, Ae.qn)((() => {
            Q ? Promise.resolve().then((() => async function() {
              const e = M.current.querySelector("img");
              if (H.current) {
                let t = gf;
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
            } = (0, Ae.gr)({
              enabled: oe
            }),
            {
              isHovered: ue
            } = (0, Ae.Mk)({
              ref: A,
              enabled: oe
            }),
            {
              isFocused: ce
            } = (0, Ae.iQ)({
              ref: A,
              enabled: oe
            }),
            {
              isIdle: de
            } = (0, Ae.UQ)({
              leave: 300,
              activity: 3e3,
              enabled: oe && !ue && !ce && !G
            }),
            fe = function(e, t, r) {
              const n = Lr.fun(t) && t,
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
                f = (0, g.useMemo)((() => n || 3 == arguments.length ? ki() : void 0), []),
                h = Br(e),
                p = [],
                m = (0, g.useRef)(null),
                v = o ? null : m.current;
              no((() => {
                m.current = p
              })), io((() => (Mr(p, (e => {
                f?.add(e.ctrl), e.ctrl.ref = f
              })), () => {
                Mr(m.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Mo(e.ctrl, f), e.ctrl.stop(!0)
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
                      return r ? (t.add(r), r.key) : Ai++
                    }))
                  }
                  return Lr.und(r) ? e : Lr.fun(r) ? e.map(r) : Br(r)
                }(h, n ? n() : t, v),
                b = o && m.current || [];
              no((() => Mr(b, (({
                ctrl: e,
                item: t,
                key: r
              }) => {
                Mo(e, f), Co(u, t, r)
              }))));
              const _ = [];
              if (v && Mr(v, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = _[t] = y.indexOf(e.key)) && (p[t] = e)
                })), Mr(h, ((e, t) => {
                  p[t] || (p[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new _i
                  }, p[t].ctrl.item = e)
                })), _.length) {
                let e = -1;
                const {
                  leave: r
                } = n ? n() : t;
                Mr(_, ((t, n) => {
                  const o = v[n];
                  ~t ? (e = p.indexOf(o), p[e] = {
                    ...o,
                    item: h[t]
                  }) : r && p.splice(++e, 0, o)
                }))
              }
              Lr.fun(i) && p.sort(((e, t) => i(e.item, t.item)));
              let w = -a;
              const E = oo(),
                P = jo(t),
                S = new Map,
                C = (0, g.useRef)(new Map),
                x = (0, g.useRef)(!1);
              Mr(p, ((e, r) => {
                const o = e.key,
                  i = e.phase,
                  u = n ? n() : t;
                let f, h;
                const p = Co(u.delay || 0, o);
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
                if (f = Co(f, e.item, r), f = Lr.obj(f) ? Ro(f) : {
                    to: f
                  }, !f.config) {
                  const t = d || P.config;
                  f.config = Co(t, e.item, r, h)
                }
                w += a;
                const g = {
                  ...P,
                  delay: p + w,
                  ref: c,
                  immediate: u.immediate,
                  reset: !1,
                  ...f
                };
                if ("enter" == h && Lr.und(g.from)) {
                  const o = n ? n() : t,
                    i = Lr.und(o.initial) || v ? o.from : o.initial;
                  g.from = Co(i, e.item, r)
                }
                const {
                  onResolve: b
                } = g;
                g.onResolve = e => {
                  Co(b, e);
                  const t = m.current,
                    r = t.find((e => e.key === o));
                  if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == r.phase) {
                      const t = Co(s, r.item);
                      if (!1 !== t) {
                        const n = !0 === t ? 0 : t;
                        if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(E, n)))
                      }
                    }
                    e && t.some((e => e.expired)) && (C.current.delete(r), l && (x.current = !0), E())
                  }
                };
                const _ = Pi(e.ctrl, g);
                "leave" === h && l ? C.current.set(e, {
                  phase: h,
                  springs: _,
                  payload: g
                }) : S.set(e, {
                  phase: h,
                  springs: _,
                  payload: g
                })
              }));
              const O = (0, g.useContext)(ji),
                T = so(O),
                N = O !== T && Lo(O);
              no((() => {
                N && Mr(p, (e => {
                  e.ctrl.start({
                    default: O
                  })
                }))
              }), [O]), Mr(S, ((e, t) => {
                if (C.current.size) {
                  const e = p.findIndex((e => e.key === t.key));
                  p.splice(e, 1)
                }
              })), no((() => {
                Mr(C.current.size ? C.current : S, (({
                  phase: e,
                  payload: t
                }, r) => {
                  const {
                    ctrl: n
                  } = r;
                  r.phase = e, f?.add(n), N && "enter" == e && n.start({
                    default: O
                  }), t && (Ho(n, t.ref), !n.ref && !f || x.current ? (n.start(t), x.current && (x.current = !1)) : n.update(t))
                }))
              }), o ? void 0 : r);
              const j = e => g.createElement(g.Fragment, null, p.map(((t, r) => {
                const {
                  springs: n
                } = S.get(t) || t.ctrl, o = e({
                  ...n
                }, t.item, t, r);
                return o && o.type ? g.createElement(o.type, {
                  ...o.props,
                  key: Lr.str(t.key) || Lr.num(t.key) ? t.key : t.ctrl.id,
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
            [he] = Ri((() => ({
              ref: V,
              opacity: oe && !de && se && W ? 1 : 0,
              immediate: ie
            })), [oe, de, se, W]),
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
              gestureSettings: h = ua,
              enabled: p
            }) => {
              const m = (0, Ae.jt)(),
                [v = t, y] = (0, Ae.ic)({
                  prop: e,
                  defaultProp: t,
                  onChange: r
                }),
                [b = s, _] = (0, Ae.ic)({
                  prop: a,
                  defaultProp: s,
                  onChange: l
                }),
                w = (0, g.useRef)(null),
                E = (0, g.useRef)(null),
                [P, S] = (0, g.useState)(!1),
                C = b > n,
                x = b < o,
                O = b > n,
                T = b === n,
                [N, j] = Ri((() => ({
                  x: v[0],
                  y: v[1],
                  scale: b / 100,
                  from: {
                    scale: n / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: m,
                  config: sa
                }))),
                I = (e, {
                  origin: r,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (w.current && E.current) {
                    r || (r = [E.current.clientWidth / 2, E.current.clientHeight / 2]);
                    const s = aa(e, n, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || sa,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: m
                    };
                    if (s <= n) y(t);
                    else {
                      const e = ia(w.current, E.current, (({
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
                k = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: R
                } = (0, Ae.Rv)({
                  onDoubleClick: e => {
                    if (w.current) {
                      const t = na(w.current),
                        r = k(e, t) ? "overlay" : "content";
                      f?.({
                        target: r,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (w.current && 0 === e.button) {
                      const t = na(w.current),
                        r = k(e, t) ? "overlay" : "content";
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
                canPan: C,
                isPanning: P,
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
                    config: la,
                    x: t[0],
                    y: t[1],
                    scale: s / 100,
                    immediate: m
                  };
                  j(e)
                },
                canZoomIn: x,
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
                    if (s) return void R(u);
                    if (o && i && !P && S(!0), l > 1) return;
                    if (a || b < n) return;
                    if (e) return v;
                    const {
                      horizontalOffset: d,
                      verticalOffset: f
                    } = ia(w.current, E.current, v, b), p = o * h.dragFactor, g = i * h.dragFactor, _ = {
                      config: sa,
                      x: t[0],
                      y: t[1],
                      immediate: m
                    };
                    if (b === n) {
                      const e = [r[0], r[1] + g],
                        {
                          y: t
                        } = oa(e, w.current),
                        n = aa(100 * Math.abs(t) / h.closePc, 0, 100);
                      _.config = la, _.x = e[0], _.y = e[1], y(e), c?.(n)
                    } else {
                      const e = [ra(r[0] + p, -d, d), ra(r[1] + g, -f, f)];
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
                        } = oa(v, w.current);
                        if (aa(100 * Math.abs(e) / h.closePc, 0, 100) >= 100) u?.();
                        else {
                          const e = {
                            config: la,
                            x: t[0],
                            y: t[1],
                            immediate: m
                          };
                          j(e), y(t), c?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = ia(w.current, E.current, v, b),
                        t = {
                          config: sa,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: m
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
                    if (w.current && E.current) {
                      if (i && S(!0), t) return void e();
                      I(100 * r, {
                        origin: [n, o],
                        delta: r - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    E.current && w.current && S(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: r
                  }) => {
                    if (w.current && E.current) {
                      const n = -1 * r[1];
                      if (n && P && S(!0), e) return;
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
                    E.current && w.current && S(!1)
                  }
                },
                getCursor: () => T && !p ? "zoom-out" : T && x ? "zoom-in" : C ? P ? "grabbing" : "grab" : "pointer",
                enabled: p,
                animation: N
              }
            })({
              enabled: K && oe,
              onClick: function() {
                U ? Y(!W) : ae()
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
                      animationConfig: la
                    })
                  }
              },
              onRequestedClose: ae,
              onRequestingClose: e => {
                if (ee) {
                  const t = 1,
                    r = .25,
                    n = aa(t - e * (t - r) / 100, r, t);
                  B.start({
                    opacity: n
                  });
                  const o = aa(1 - e / 100, 0, 1);
                  V.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: b,
              defaultZoomLevel: w,
              minZoomLevel: E,
              maxZoomLevel: P,
              zoomLevelStep: S,
              onZoomLevelChange: C,
              defaultPosition: [0, 0],
              gestureSettings: x
            }),
            me = Ri({
              ref: z,
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
                oe || $(!1)
              },
              onRest: async () => {
                oe ? $(!0) : (pe.resetZoom(), Y(!0))
              }
            }),
            ve = Ri({
              opacity: oe && se && Z ? 1 : 0,
              immediate: !0,
              onRest: () => {
                oe && ee && se && z.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            ye = [
              [z, B, V],
              [0, 0, .1]
            ];
          async function ge(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, r) => {
              e.onload = () => t(e), e.onerror = r
            }))
          }! function(e, t, r = 1e3) {
            no((() => {
              if (t) {
                let n = 0;
                Mr(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = r * t[o];
                    isNaN(a) ? a = n : n = a, Mr(i, (e => {
                      Mr(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + Co(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                Mr(e, (e => {
                  const r = e.current;
                  if (r.length) {
                    const n = r.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (Mr(r, ((e, t) => Mr(n[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(oe ? ye[0] : ye[0].reverse(), ye[1]);
          const be = j ? (0, v.jsx)(_.DX, {
            className: pf,
            ref: null,
            children: I
          }) : (0, v.jsx)("img", {
            alt: "",
            src: s,
            "aria-hidden": !0,
            loading: i,
            className: pf,
            crossOrigin: n,
            referrerPolicy: a
          });
          (0, g.useEffect)((() => {
            Y(!G)
          }), [G]);
          const {
            contrastMode: _e
          } = (0, Me.DP)(), we = ((e, t) => [Tu.xW.tokens, Nu("dark", t)].join(" "))(0, _e);
          return (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)(mf.Root, {
              open: Q,
              children: (0, v.jsxs)("div", {
                className: (0, at.clsx)("foundry_1a74xwb0", k),
                children: [(0, v.jsx)(mf.Trigger, {
                  asChild: !0,
                  children: (0, v.jsxs)(ta.button, {
                    className: "foundry_1a74xwb3 foundry_1d5mo5m0 foundry_1a74xwb1",
                    onClick: async () => {
                      D && J(!Q)
                    },
                    ref: M,
                    "data-idle": !ee,
                    style: {
                      aspectRatio: l,
                      objectPosition: u,
                      objectFit: c
                    },
                    children: [(0, v.jsx)(_.s6, {
                      children: q.formatMessage(Su)
                    }), be, fe(((e, t) => m && !t && (0, v.jsx)(ta.span, {
                      className: "foundry_1a74xwb5",
                      style: e,
                      children: (0, v.jsx)(st.Plus, {
                        label: "",
                        size: "SM"
                      })
                    })))]
                  })
                }), (0, v.jsxs)(mf.Portal, {
                  ...!R && {
                    container: re
                  },
                  children: [(0, v.jsx)(ta.img, {
                    "aria-hidden": !0,
                    src: gf,
                    ref: H,
                    className: "foundry_1a74xwb2 foundry_1a74xwb1",
                    style: {
                      aspectRatio: l,
                      backgroundPosition: u,
                      backgroundSize: c,
                      ...me
                    }
                  }), fe(((o, s) => s && (0, v.jsxs)(v.Fragment, {
                    children: [(0, v.jsx)(vf, {
                      className: "foundry_1a74xwb8",
                      style: o
                    }), (0, v.jsxs)(yf, {
                      "data-testid": O,
                      onEscapeKeyDown: ae,
                      onOpenAutoFocus: bf,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, M),
                      className: we,
                      children: [(0, v.jsx)(_.s6, {
                        children: (0, v.jsx)(mf.Title, {
                          children: q.formatMessage(Cu)
                        })
                      }), (0, v.jsx)(_.s6, {
                        children: (0, v.jsx)(mf.Description, {
                          children: r || q.formatMessage(xu, {
                            alt: t
                          })
                        })
                      }), (0, v.jsx)(ta.div, {
                        className: "foundry_1a74xwb6",
                        style: ve,
                        children: (0, v.jsx)(ca, {
                          ...pe,
                          children: (0, v.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: L,
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
                      }), (0, v.jsx)(ta.div, {
                        className: "foundry_1a74xwb9",
                        style: he,
                        children: (0, v.jsx)(hf, {
                          ...pe,
                          ref: A,
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
            }), !R && (0, v.jsx)("div", {
              ref: ne
            })]
          })
        },
        Ef = e => {
          const t = (0, Me.Ym)();
          return (0, v.jsx)(Pu, {
            messages: Ou,
            locale: t,
            children: (0, v.jsx)(wf, {
              ...e
            })
          })
        };

      function Pf(e) {
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

      function Sf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Cf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sf(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Pf(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sf(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function xf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Of = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Cf(Cf({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Of(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xf(e.variantClassNames, (e => xf(e, (e => e.split(" ")[0]))))
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
      const Nf = (0, g.forwardRef)((({
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
            c = o ? _.DX : l;
          return (0, v.jsx)(c, {
            ref: s,
            className: (0, at.clsx)(Tf({
              thickness: r,
              orientation: t
            }), e),
            role: u,
            "aria-orientation": t,
            "data-testid": i,
            ...a
          })
        })),
        jf = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? _.DX : "h1",
            i = (0, y.mergeProps)({
              className: "foundry_1pi1yv40 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }));

      function If(e) {
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

      function kf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Rf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? kf(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = If(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kf(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Df(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Lf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Af = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Rf(Rf({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Lf(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Df(e.variantClassNames, (e => Df(e, (e => e.split(" ")[0]))))
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
      const Mf = (0, g.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? _.DX : "p",
          s = (0, y.mergeProps)({
            className: Af({
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

      function Hf(e) {
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

      function Bf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Vf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bf(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Hf(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bf(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function zf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ff = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vf(Vf({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Ff(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zf(e.variantClassNames, (e => zf(e, (e => e.split(" ")[0]))))
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
      const Uf = (0, g.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const i = e ? _.DX : "p",
          a = (0, y.mergeProps)({
            className: qf({
              appearance: r
            })
          }, n);
        return (0, v.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...a
        })
      }));

      function Gf(e) {
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

      function Xf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Kf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xf(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Gf(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xf(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Wf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Yf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Zf = "var(--foundry_9dxgbc2)",
        $f = "var(--foundry_9dxgbc3)",
        Qf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Kf(Kf({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Yf(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wf(e.variantClassNames, (e => Wf(e, (e => e.split(" ")[0]))))
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
        Jf = "var(--foundry_9dxgbc0)",
        eh = "var(--foundry_9dxgbc1)";
      const th = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          children: r,
          colorOverride: n,
          label: o,
          size: i = "MD",
          ...a
        }, s) => {
          const l = (0, Me.zQ)(),
            u = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
            c = (0, y.mergeProps)({
              className: Qf({
                size: u
              }),
              "data-testid": t,
              style: te({
                [Jf]: n?.pulseColorBackground,
                [eh]: n?.pulseColorForeground,
                [Zf]: n?.gradientColorBackground,
                [$f]: n?.gradientColorForeground
              }),
              role: "status",
              "aria-atomic": !0,
              "aria-label": o
            }, a),
            d = e ? _.DX : "div";
          return (0, v.jsx)(d, {
            ref: s,
            ...c,
            children: e ? (0, v.jsx)(_.xV, {
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
        rh = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        nh = rh.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      rh.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), rh.join(':not([hidden]):not([tabindex="-1"]),');
      const oh = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        ih = e => e && "window" in e && e.window === e ? e : oh(e).defaultView || window;

      function ah(e) {
        if (function() {
            if (null == sh) {
              sh = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return sh = !0, !0
                  }
                })
              } catch {}
            }
            return sh
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
      let sh = null;
      let lh = !1;

      function uh(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function ch(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function dh(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const fh = dh((function() {
          return ch(/^Mac/i)
        })),
        hh = dh((function() {
          return ch(/^iPhone/i)
        })),
        ph = dh((function() {
          return ch(/^iPad/i) || fh() && navigator.maxTouchPoints > 1
        })),
        mh = dh((function() {
          return hh() || ph()
        })),
        vh = (dh((function() {
          return fh() || mh()
        })), dh((function() {
          return uh(/AppleWebKit/i) && !yh()
        }))),
        yh = dh((function() {
          return uh(/Chrome/i)
        })),
        gh = dh((function() {
          return uh(/Android/i)
        })),
        bh = dh((function() {
          return uh(/Firefox/i)
        }));
      let _h = new Map,
        wh = new Set;

      function Eh() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = _h.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), _h.delete(r.target)), 0 === _h.size)) {
            for (let e of wh) e();
            wh.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = _h.get(r.target);
          n || (n = new Set, _h.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Eh() : document.addEventListener("DOMContentLoaded", Eh));
      let Ph = "default",
        Sh = "",
        Ch = new WeakMap;

      function xh(e) {
        if (mh()) {
          if ("disabled" !== Ph) return;
          Ph = "restoring", setTimeout((() => {
            var t;
            t = () => {
              if ("restoring" === Ph) {
                const t = oh(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Sh || ""), Sh = "", Ph = "default"
              }
            }, requestAnimationFrame((() => {
              ! function() {
                for (const [e] of _h) "isConnected" in e && !e.isConnected && _h.delete(e)
              }(), 0 === _h.size ? t() : wh.add(t)
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Ch.has(e)) {
          let t = Ch.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Ch.delete(e)
        }
      }
      const Oh = g.createContext({
        register: () => {}
      });
      Oh.displayName = "PressResponderContext";
      var Th = r(66461),
        Nh = r(57178),
        jh = r(72562);

      function Ih(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let kh, Rh = new Map;

      function Dh(e, t) {
        if (e === t) return e;
        let r = Rh.get(e);
        if (r) return r.forEach((e => e.current = t)), t;
        let n = Rh.get(t);
        return n ? (n.forEach((t => t.current = e)), e) : t
      }

      function Lh(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Ih(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Dh(r, o) : t[e] = void 0 !== o ? o : r : t[e] = at(r, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (kh = new FinalizationRegistry((e => {
        Rh.delete(e)
      })));
      const Ah = "undefined" != typeof document ? g.useLayoutEffect : () => {};

      function Mh(e) {
        const t = (0, g.useRef)(null);
        return Ah((() => {
          t.current = e
        }), [e]), (0, g.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }

      function Hh(e, t) {
        return !(!t || !e) && e.contains(t)
      }

      function Bh(e) {
        return e.target
      }

      function Vh(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        bh() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (fh() ? i = !0 : a = !0);
        let u = vh() && fh() && !ph() ? new KeyboardEvent("keydown", {
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
        Vh.isOpening = r, ah(e), e.dispatchEvent(u), Vh.isOpening = !1
      }

      function zh(e) {
        let t = (0, g.useContext)(Oh);
        if (t) {
          let {
            register: r,
            ...n
          } = t;
          e = Lh(n, e), r()
        }
        return function(e, t) {
          Ah((() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          }))
        }(t, e.ref), e
      }
      Vh.isOpening = !1;
      var Fh = new WeakMap;
      class qh {
        continuePropagation() {
          (0, jh._)(this, Fh, !1)
        }
        get shouldStopPropagation() {
          return (0, Th._)(this, Fh)
        }
        constructor(e, t, r, n) {
          var o;
          (0, Nh._)(this, Fh, {
            writable: !0,
            value: void 0
          }), (0, jh._)(this, Fh, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, u = 0,
            c = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, c = r.clientY), a && (null != l && null != c ? (s = l - a.left, u = c - a.top) : (s = a.width / 2, u = a.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = u
        }
      }
      const Uh = Symbol("linkClicked"),
        Gh = "react-aria-pressable-style",
        Xh = "data-react-aria-pressable";

      function Kh(e) {
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
        } = zh(e), [p, m] = (0, g.useState)(!1), v = (0, g.useRef)({
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
        }(), _ = Mh(((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new qh("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), w = Mh(((e, n, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new qh("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !s) {
            let r = new qh("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), E = Mh(((e, t) => {
          let r = v.current;
          if (s) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new qh("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), P = Mh((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(Zh(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), d || xh(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), S = Mh((e => {
          c && P(e)
        })), C = Mh((e => {
          null == a || a(e)
        })), x = Mh(((e, t) => {
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
                if (Yh(t.nativeEvent, t.currentTarget) && Hh(t.currentTarget, Bh(t.nativeEvent))) {
                  var n;
                  $h(Bh(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = _(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        Yh(t, n) && !t.repeat && Hh(n, Bh(t)) && e.target && E(Zh(e.target, t), "keyboard")
                      };
                    y(oh(t.currentTarget), "keyup", Ih(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && fh() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var r;
                if ((!t || Hh(t.currentTarget, Bh(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Vh.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (r = t.nativeEvent).mozInputSource || !r.isTrusted) && (gh() && r.pointerType ? "click" !== r.type || 1 !== r.buttons : 0 !== r.detail || r.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = E(Zh(t.currentTarget, t), r),
                        i = w(Zh(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, C(t), P(t)
                    }
                  } else {
                    let e = _(t, "virtual"),
                      r = E(t, "virtual"),
                      o = w(t, "virtual");
                    C(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && Yh(t, e.target)) {
                var n;
                $h(Bh(t), t.key) && t.preventDefault();
                let r = Bh(t),
                  o = Hh(e.target, Bh(t));
                w(Zh(e.target, t), "keyboard", o), o && x(t, e.target), b(), "Enter" !== t.key && Wh(e.target) && Hh(e.target, r) && !t[Uh] && (t[Uh] = !0, Vh(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !Hh(t.currentTarget, Bh(t.nativeEvent))) return;
              if (o = t.nativeEvent, !gh() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (mh()) {
                    if ("default" === Ph) {
                      const t = oh(e);
                      Sh = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Ph = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Ch.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = _(t, e.pointerType);
                let o = Bh(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(oh(t.currentTarget), "pointerup", r, !1), y(oh(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (Hh(t.currentTarget, Bh(t.nativeEvent)) && 0 === t.button) {
                if (u) {
                  let r = function(e) {
                    for (; e && !e.matches(nh);) e = e.parentElement;
                    let t = ih(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    lh = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, ah(r), l()))
                      },
                      a = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, ah(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), lh = !1, n = !1
                      },
                      u = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              Hh(t.currentTarget, Bh(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || E(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(Zh(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Zh(e.target, t), e.pointerType, !1), S(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (Hh(e.target, Bh(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? P(t) : (ah(e.target), e.target.click()))
                      }), 80);
                    y(t.currentTarget, "click", (() => r = !0), !0), e.disposables.push((() => clearTimeout(n)))
                  } else P(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                P(e)
              };
            t.onDragStart = e => {
              Hh(e.currentTarget, Bh(e.nativeEvent)) && P(e)
            }
          }
          return t
        }), [y, s, u, b, d, P, S, w, _, E, C, x]);
        return (0, g.useEffect)((() => {
          if (!f) return;
          const e = oh(f.current);
          if (!e || !e.head || e.getElementById(Gh)) return;
          const t = e.createElement("style");
          t.id = Gh, t.textContent = `\n@layer {\n  [${Xh}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }), [f]), (0, g.useEffect)((() => {
          let e = v.current;
          return () => {
            var t;
            d || xh(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: l || p,
          pressProps: Lh(h, O, {
            [Xh]: !0
          })
        }
      }

      function Wh(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Yh(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof ih(o).HTMLInputElement && !Jh(o, r) || o instanceof ih(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Wh(o)) && "Enter" !== r)
      }

      function Zh(e, t) {
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

      function $h(e, t) {
        return e instanceof HTMLInputElement ? !Jh(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Wh(e)))
        }(e)
      }
      const Qh = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Jh(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Qh.has(e.type)
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
            for (var [u, c] of e.compoundVariants) op(u, n, e.defaultVariants) && (r += " " + c);
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
        ap = r(57365);
      const sp = (0, g.createContext)(null);

      function lp() {
        const e = (0, g.useContext)(sp);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const up = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: i = "neutral",
          ...a
        }, s) => {
          const l = (0, y.mergeProps)({
              className: ip({
                status: i
              }),
              "data-testid": t
            }, a),
            u = r ? _.DX : "div";
          return (0, v.jsx)(sp.Provider, {
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
        cp = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = lp(), i = (0, y.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: ap.Check,
            invalid: ap.X,
            neutral: ap.TriangleAlert
          }, s = t ? _.DX : a[o];
          return (0, v.jsx)(s, {
            ref: n,
            ...i
          })
        })),
        dp = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            errorId: a
          } = lp(), s = (0, y.mergeProps)({
            "data-testid": t,
            id: a || i
          }, n), l = r ? _.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }));
      var fp = r(76286),
        hp = r(63155),
        pp = "ScrollArea",
        [mp, vp] = (0, Ru.A)(pp),
        [yp, gp] = mp(pp),
        bp = g.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = g.useState(null), [u, c] = g.useState(null), [d, f] = g.useState(null), [h, p] = g.useState(null), [m, y] = g.useState(null), [b, _] = g.useState(0), [w, E] = g.useState(0), [P, S] = g.useState(!1), [C, x] = g.useState(!1), O = (0, ku.s)(t, (e => l(e))), T = (0, Lu.jH)(o);
          return (0, v.jsx)(yp, {
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
            scrollbarXEnabled: P,
            onScrollbarXEnabledChange: S,
            scrollbarY: m,
            onScrollbarYChange: y,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: x,
            onCornerWidthChange: _,
            onCornerHeightChange: E,
            children: (0, v.jsx)(Hu.sG.div, {
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
      bp.displayName = pp;
      var _p = "ScrollAreaViewport",
        wp = g.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, a = gp(_p, r), s = g.useRef(null), l = (0, ku.s)(t, s, a.onViewportChange);
          return (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, v.jsx)(Hu.sG.div, {
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
      wp.displayName = _p;
      var Ep = "ScrollAreaScrollbar",
        Pp = g.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = gp(Ep, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return g.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, v.jsx)(Sp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, v.jsx)(Cp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, v.jsx)(xp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, v.jsx)(Op, {
            ...n,
            ref: t
          }) : null
        }));
      Pp.displayName = Ep;
      var Sp = g.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = gp(Ep, e.__scopeScrollArea), [i, a] = g.useState(!1);
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, v.jsx)(yd.C, {
            present: r || i,
            children: (0, v.jsx)(xp, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        Cp = g.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = gp(Ep, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = Gp((() => l("SCROLL_END")), 100), [s, l] = (u = {
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
          }), [o.viewport, i, l, a]), (0, v.jsx)(yd.C, {
            present: r || "hidden" !== s,
            children: (0, v.jsx)(Op, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, Iu.m)(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: (0, Iu.m)(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        xp = g.forwardRef(((e, t) => {
          const r = gp(Ep, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, a] = g.useState(!1),
            s = "horizontal" === e.orientation,
            l = Gp((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return Xp(r.viewport, l), Xp(r.content, l), (0, v.jsx)(yd.C, {
            present: n || i,
            children: (0, v.jsx)(Op, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        Op = g.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = gp(Ep, e.__scopeScrollArea), i = g.useRef(null), a = g.useRef(0), [s, l] = g.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), u = Bp(s.viewport, s.content), c = {
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
              const o = Vp(r),
                i = t || o / 2,
                a = o - i,
                s = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                u = r.content - r.viewport;
              return Fp([s, l], "ltr" === n ? [0, u] : [-1 * u, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === r ? (0, v.jsx)(Tp, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = zp(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, v.jsx)(Np, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = zp(o.viewport.scrollTop, s);
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
        Tp = g.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = gp(Ep, e.__scopeScrollArea), [a, s] = g.useState(), l = g.useRef(null), u = (0, ku.s)(t, l, i.onScrollbarXChange);
          return g.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, v.jsx)(kp, {
            "data-orientation": "horizontal",
            ...o,
            ref: u,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Vp(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), qp(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Hp(a.paddingLeft),
                  paddingEnd: Hp(a.paddingRight)
                }
              })
            }
          })
        })),
        Np = g.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = gp(Ep, e.__scopeScrollArea), [a, s] = g.useState(), l = g.useRef(null), u = (0, ku.s)(t, l, i.onScrollbarYChange);
          return g.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, v.jsx)(kp, {
            "data-orientation": "vertical",
            ...o,
            ref: u,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Vp(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), qp(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Hp(a.paddingTop),
                  paddingEnd: Hp(a.paddingBottom)
                }
              })
            }
          })
        })),
        [jp, Ip] = mp(Ep),
        kp = g.forwardRef(((e, t) => {
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
          } = e, h = gp(Ep, r), [p, m] = g.useState(null), y = (0, ku.s)(t, (e => m(e))), b = g.useRef(null), _ = g.useRef(""), w = h.viewport, E = n.content - n.viewport, P = (0, fp.c)(c), S = (0, fp.c)(l), C = Gp(d, 10);

          function x(e) {
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
              r && P(e, E)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [w, p, E, P]), g.useEffect(S, [n, S]), Xp(p, C), Xp(h.content, C), (0, v.jsx)(jp, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, fp.c)(i),
            onThumbPointerUp: (0, fp.c)(a),
            onThumbPositionChange: S,
            onThumbPointerDown: (0, fp.c)(s),
            children: (0, v.jsx)(Hu.sG.div, {
              ...f,
              ref: y,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Iu.m)(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = p.getBoundingClientRect(), _.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), x(e))
              })),
              onPointerMove: (0, Iu.m)(e.onPointerMove, x),
              onPointerUp: (0, Iu.m)(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = _.current, h.viewport && (h.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        Rp = "ScrollAreaThumb",
        Dp = g.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ip(Rp, e.__scopeScrollArea);
          return (0, v.jsx)(yd.C, {
            present: r || o.hasThumb,
            children: (0, v.jsx)(Lp, {
              ref: t,
              ...n
            })
          })
        })),
        Lp = g.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = gp(Rp, r), a = Ip(Rp, r), {
            onThumbPositionChange: s
          } = a, l = (0, ku.s)(t, (e => a.onThumbChange(e))), u = g.useRef(void 0), c = Gp((() => {
            u.current && (u.current(), u.current = void 0)
          }), 100);
          return g.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (c(), !u.current) {
                  const t = Up(e, s);
                  u.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, c, s]), (0, v.jsx)(Hu.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, Iu.m)(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: (0, Iu.m)(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      Dp.displayName = Rp;
      var Ap = "ScrollAreaCorner";
      g.forwardRef(((e, t) => {
        const r = gp(Ap, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, v.jsx)(Mp, {
          ...e,
          ref: t
        }) : null
      })).displayName = Ap;
      var Mp = g.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = gp(Ap, r), [i, a] = g.useState(0), [s, l] = g.useState(0), u = Boolean(i && s);
        return Xp(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), Xp(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), u ? (0, v.jsx)(Hu.sG.div, {
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

      function Hp(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Bp(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Vp(e) {
        const t = Bp(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function zp(e, t, r = "ltr") {
        const n = Vp(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - n,
          l = ju(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return Fp([0, a], [0, s])(l)
      }

      function Fp(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function qp(e, t) {
        return e > 0 && e < t
      }
      var Up = (e, t = () => {}) => {
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

      function Gp(e, t) {
        const r = (0, fp.c)(e),
          n = g.useRef(0);
        return g.useEffect((() => () => window.clearTimeout(n.current)), []), g.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function Xp(e, t) {
        const r = (0, fp.c)(t);
        (0, hp.N)((() => {
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
      var Kp = bp,
        Wp = wp,
        Yp = Pp,
        Zp = Dp,
        $p = r(15234),
        Qp = r(25656),
        Jp = r(94926),
        em = r(19690),
        tm = [" ", "Enter", "ArrowUp", "ArrowDown"],
        rm = [" ", "Enter"],
        nm = "Select",
        [om, im, am] = (0, Bu.N)(nm),
        [sm, lm] = (0, Ru.A)(nm, [am, md.Bk]),
        um = (0, md.Bk)(),
        [cm, dm] = sm(nm),
        [fm, hm] = sm(nm),
        pm = e => {
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
          } = e, m = um(t), [y, b] = g.useState(null), [_, w] = g.useState(null), [E, P] = g.useState(!1), S = (0, Lu.jH)(u), [C, x] = (0, Du.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: nm
          }), [O, T] = (0, Du.useControllableState)({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: nm
          }), N = g.useRef(null), j = !y || p || !!y.closest("form"), [I, k] = g.useState(new Set), R = Array.from(I).map((e => e.props.value)).join(";");
          return (0, v.jsx)(md.bL, {
            ...m,
            children: (0, v.jsxs)(cm, {
              required: h,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: _,
              onValueNodeChange: w,
              valueNodeHasChildren: E,
              onValueNodeHasChildrenChange: P,
              contentId: (0, pd.useId)(),
              value: O,
              onValueChange: T,
              open: C,
              onOpenChange: x,
              dir: S,
              triggerPointerDownPosRef: N,
              disabled: f,
              children: [(0, v.jsx)(om.Provider, {
                scope: t,
                children: (0, v.jsx)(fm, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: g.useCallback((e => {
                    k((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: g.useCallback((e => {
                    k((t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    }))
                  }), []),
                  children: r
                })
              }), j ? (0, v.jsxs)(Ym, {
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
              }, R) : null]
            })
          })
        };
      pm.displayName = nm;
      var mm = "SelectTrigger",
        vm = g.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = um(r), a = dm(mm, r), s = a.disabled || n, l = (0, ku.s)(t, a.onTriggerChange), u = im(r), c = g.useRef("touch"), [d, f, h] = $m((e => {
            const t = u().filter((e => !e.disabled)),
              r = t.find((e => e.value === a.value)),
              n = Qm(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          })), p = e => {
            s || (a.onOpenChange(!0), h()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, v.jsx)(md.Mz, {
            asChild: !0,
            ...i,
            children: (0, v.jsx)(Hu.sG.button, {
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
              "data-placeholder": Zm(a.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, Iu.m)(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== c.current && p(e)
              })),
              onPointerDown: (0, Iu.m)(o.onPointerDown, (e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              })),
              onKeyDown: (0, Iu.m)(o.onKeyDown, (e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || tm.includes(e.key) && (p(), e.preventDefault())
              }))
            })
          })
        }));
      vm.displayName = mm;
      var ym = "SelectValue",
        gm = g.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = dm(ym, r), {
            onValueNodeHasChildrenChange: u
          } = l, c = void 0 !== i, d = (0, ku.s)(t, l.onValueNodeChange);
          return (0, hp.N)((() => {
            u(c)
          }), [u, c]), (0, v.jsx)(Hu.sG.span, {
            ...s,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: Zm(l.value) ? (0, v.jsx)(v.Fragment, {
              children: a
            }) : i
          })
        }));
      gm.displayName = ym;
      var bm = g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, v.jsx)(Hu.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      }));
      bm.displayName = "SelectIcon";
      var _m = e => (0, v.jsx)(vd.Portal, {
        asChild: !0,
        ...e
      });
      _m.displayName = "SelectPortal";
      var wm = "SelectContent",
        Em = g.forwardRef(((e, t) => {
          const r = dm(wm, e.__scopeSelect),
            [n, o] = g.useState();
          if ((0, hp.N)((() => {
              o(new DocumentFragment)
            }), []), !r.open) {
            const t = n;
            return t ? zi.createPortal((0, v.jsx)(Sm, {
              scope: e.__scopeSelect,
              children: (0, v.jsx)(om.Slot, {
                scope: e.__scopeSelect,
                children: (0, v.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, v.jsx)(Om, {
            ...e,
            ref: t
          })
        }));
      Em.displayName = wm;
      var Pm = 10,
        [Sm, Cm] = sm(wm),
        xm = (0, gd.createSlot)("SelectContent.RemoveScroll"),
        Om = g.forwardRef(((e, t) => {
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
          } = e, _ = dm(wm, r), [w, E] = g.useState(null), [P, S] = g.useState(null), C = (0, ku.s)(t, (e => E(e))), [x, O] = g.useState(null), [T, N] = g.useState(null), j = im(r), [I, k] = g.useState(!1), R = g.useRef(!1);
          g.useEffect((() => {
            if (w) return (0, Jp.Eq)(w)
          }), [w]), (0, $p.Oh)();
          const D = g.useCallback((e => {
              const [t, ...r] = j().map((e => e.ref.current)), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && P && (P.scrollTop = 0), r === n && P && (P.scrollTop = P.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }), [j, P]),
            L = g.useCallback((() => D([x, w])), [D, x, w]);
          g.useEffect((() => {
            I && L()
          }), [I, L]);
          const {
            onOpenChange: A,
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : w.contains(r.target) || A(!1), document.removeEventListener("pointermove", t), M.current = null
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
          }), [w, A, M]), g.useEffect((() => {
            const e = () => A(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [A]);
          const [H, B] = $m((e => {
            const t = j().filter((e => !e.disabled)),
              r = t.find((e => e.ref.current === document.activeElement)),
              n = Qm(t, e, r);
            n && setTimeout((() => n.ref.current.focus()))
          })), V = g.useCallback(((e, t, r) => {
            const n = !R.current && !r;
            (void 0 !== _.value && _.value === t || n) && (O(e), n && (R.current = !0))
          }), [_.value]), z = g.useCallback((() => w?.focus()), [w]), F = g.useCallback(((e, t, r) => {
            const n = !R.current && !r;
            (void 0 !== _.value && _.value === t || n) && N(e)
          }), [_.value]), q = "popper" === n ? Nm : Tm, U = q === Nm ? {
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
          return (0, v.jsx)(Sm, {
            scope: r,
            content: w,
            viewport: P,
            onViewportChange: S,
            itemRefCallback: V,
            selectedItem: x,
            onItemLeave: z,
            itemTextRefCallback: F,
            focusSelectedItem: L,
            selectedItemText: T,
            position: n,
            isPositioned: I,
            searchRef: H,
            children: (0, v.jsx)(em.RemoveScroll, {
              as: xm,
              allowPinchZoom: !0,
              children: (0, v.jsx)(Qp.n, {
                asChild: !0,
                trapped: _.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Iu.m)(o, (e => {
                  _.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, v.jsx)(hd.qW, {
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
                    onPlaced: () => k(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: (0, Iu.m)(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = j().filter((e => !e.disabled));
                        let r = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout((() => D(r))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      Om.displayName = "SelectContentImpl";
      var Tm = g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = dm(wm, r), a = Cm(wm, r), [s, l] = g.useState(null), [u, c] = g.useState(null), d = (0, ku.s)(t, (e => c(e))), f = im(r), h = g.useRef(!1), p = g.useRef(!0), {
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
                c = window.innerWidth - Pm,
                d = ju(i, [Pm, Math.max(Pm, c - u)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                u = Math.max(l, t.width),
                c = window.innerWidth - Pm,
                d = ju(i, [Pm, Math.max(Pm, c - u)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const a = f(),
              l = window.innerHeight - 2 * Pm,
              c = m.scrollHeight,
              d = window.getComputedStyle(u),
              p = parseInt(d.borderTopWidth, 10),
              v = parseInt(d.paddingTop, 10),
              g = parseInt(d.borderBottomWidth, 10),
              _ = p + v + c + parseInt(d.paddingBottom, 10) + g,
              w = Math.min(5 * y.offsetHeight, _),
              E = window.getComputedStyle(m),
              P = parseInt(E.paddingTop, 10),
              S = parseInt(E.paddingBottom, 10),
              C = e.top + e.height / 2 - Pm,
              x = l - C,
              O = y.offsetHeight / 2,
              T = p + v + (y.offsetTop + O),
              N = _ - T;
            if (T <= C) {
              const e = a.length > 0 && y === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = u.clientHeight - m.offsetTop - m.offsetHeight,
                r = T + Math.max(x, O + (e ? S : 0) + t + g);
              s.style.height = r + "px"
            } else {
              const e = a.length > 0 && y === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(C, p + m.offsetTop + (e ? P : 0) + O) + N;
              s.style.height = t + "px", m.scrollTop = T - C + m.offsetTop
            }
            s.style.margin = `${Pm}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = l + "px", n?.(), requestAnimationFrame((() => h.current = !0))
          }
        }), [f, i.trigger, i.valueNode, s, u, m, y, b, i.dir, n]);
        (0, hp.N)((() => w()), [w]);
        const [E, P] = g.useState();
        (0, hp.N)((() => {
          u && P(window.getComputedStyle(u).zIndex)
        }), [u]);
        const S = g.useCallback((e => {
          e && !0 === p.current && (w(), _?.(), p.current = !1)
        }), [w, _]);
        return (0, v.jsx)(jm, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: S,
          children: (0, v.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: E
            },
            children: (0, v.jsx)(Hu.sG.div, {
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
      Tm.displayName = "SelectItemAlignedPosition";
      var Nm = g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Pm,
          ...i
        } = e, a = um(r);
        return (0, v.jsx)(md.UC, {
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
      Nm.displayName = "SelectPopperPosition";
      var [jm, Im] = sm(wm, {}), km = "SelectViewport", Rm = g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = Cm(km, r), a = Im(km, r), s = (0, ku.s)(t, i.onViewportChange), l = g.useRef(0);
        return (0, v.jsxs)(v.Fragment, {
          children: [(0, v.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, v.jsx)(om.Slot, {
            scope: r,
            children: (0, v.jsx)(Hu.sG.div, {
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
              onScroll: (0, Iu.m)(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * Pm,
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
      Rm.displayName = km;
      var Dm = "SelectGroup",
        [Lm, Am] = sm(Dm);
      g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, pd.useId)();
        return (0, v.jsx)(Lm, {
          scope: r,
          id: o,
          children: (0, v.jsx)(Hu.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      })).displayName = Dm;
      var Mm = "SelectLabel";
      g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Am(Mm, r);
        return (0, v.jsx)(Hu.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      })).displayName = Mm;
      var Hm = "SelectItem",
        [Bm, Vm] = sm(Hm),
        zm = g.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = dm(Hm, r), l = Cm(Hm, r), u = s.value === n, [c, d] = g.useState(i ?? ""), [f, h] = g.useState(!1), p = (0, ku.s)(t, (e => l.itemRefCallback?.(e, n, o))), m = (0, pd.useId)(), y = g.useRef("touch"), b = () => {
            o || (s.onValueChange(n), s.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, v.jsx)(Bm, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: u,
            onItemTextChange: g.useCallback((e => {
              d((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, v.jsx)(om.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, v.jsx)(Hu.sG.div, {
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
                onFocus: (0, Iu.m)(a.onFocus, (() => h(!0))),
                onBlur: (0, Iu.m)(a.onBlur, (() => h(!1))),
                onClick: (0, Iu.m)(a.onClick, (() => {
                  "mouse" !== y.current && b()
                })),
                onPointerUp: (0, Iu.m)(a.onPointerUp, (() => {
                  "mouse" === y.current && b()
                })),
                onPointerDown: (0, Iu.m)(a.onPointerDown, (e => {
                  y.current = e.pointerType
                })),
                onPointerMove: (0, Iu.m)(a.onPointerMove, (e => {
                  y.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: (0, Iu.m)(a.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                })),
                onKeyDown: (0, Iu.m)(a.onKeyDown, (e => {
                  "" !== l.searchRef?.current && " " === e.key || (rm.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      zm.displayName = Hm;
      var Fm = "SelectItemText",
        qm = g.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, a = dm(Fm, r), s = Cm(Fm, r), l = Vm(Fm, r), u = hm(Fm, r), [c, d] = g.useState(null), f = (0, ku.s)(t, (e => d(e)), l.onItemTextChange, (e => s.itemTextRefCallback?.(e, l.value, l.disabled))), h = c?.textContent, p = g.useMemo((() => (0, v.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value)), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: y
          } = u;
          return (0, hp.N)((() => (m(p), () => y(p))), [m, y, p]), (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)(Hu.sG.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? zi.createPortal(i.children, a.valueNode) : null]
          })
        }));
      qm.displayName = Fm;
      var Um = "SelectItemIndicator";
      g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Vm(Um, r).isSelected ? (0, v.jsx)(Hu.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      })).displayName = Um;
      var Gm = "SelectScrollUpButton";
      g.forwardRef(((e, t) => {
        const r = Cm(Gm, e.__scopeSelect),
          n = Im(Gm, e.__scopeSelect),
          [o, i] = g.useState(!1),
          a = (0, ku.s)(t, n.onScrollButtonChange);
        return (0, hp.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, v.jsx)(Km, {
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
      })).displayName = Gm;
      var Xm = "SelectScrollDownButton";
      g.forwardRef(((e, t) => {
        const r = Cm(Xm, e.__scopeSelect),
          n = Im(Xm, e.__scopeSelect),
          [o, i] = g.useState(!1),
          a = (0, ku.s)(t, n.onScrollButtonChange);
        return (0, hp.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, v.jsx)(Km, {
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
      })).displayName = Xm;
      var Km = g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = Cm("SelectScrollButton", r), a = g.useRef(null), s = im(r), l = g.useCallback((() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }), []);
        return g.useEffect((() => () => l()), [l]), (0, hp.N)((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, v.jsx)(Hu.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, Iu.m)(o.onPointerDown, (() => {
            null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerMove: (0, Iu.m)(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerLeave: (0, Iu.m)(o.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, v.jsx)(Hu.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var Wm = "SelectArrow";
      g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = um(r), i = dm(Wm, r), a = Cm(Wm, r);
        return i.open && "popper" === a.position ? (0, v.jsx)(md.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      })).displayName = Wm;
      var Ym = g.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = g.useRef(null),
          i = (0, ku.s)(n, o),
          a = (0, Au.Z)(t);
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
        }), [a, t]), (0, v.jsx)(Hu.sG.select, {
          ...r,
          style: {
            ...bd.VISUALLY_HIDDEN_STYLES,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      }));

      function Zm(e) {
        return "" === e || void 0 === e
      }

      function $m(e) {
        const t = (0, fp.c)(e),
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

      function Qm(e, t, r) {
        const n = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === n.length && (i = i.filter((e => e !== r)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(n.toLowerCase())));
        return l !== r ? l : void 0
      }
      Ym.displayName = "SelectBubbleInput";
      var Jm = pm,
        ev = vm,
        tv = gm,
        rv = bm,
        nv = _m,
        ov = Em,
        iv = Rm,
        av = zm,
        sv = qm,
        lv = r(73028);

      function uv(e) {
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

      function cv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function dv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? cv(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = uv(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cv(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function fv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = dv(dv({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) hv(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fv(e.variantClassNames, (e => fv(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        mv = pv({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vv = pv({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yv = pv({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gv = pv({
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
        bv = pv({
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
        _v = pv({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const wv = (0, g.createContext)(null);

      function Ev() {
        const e = (0, g.useContext)(wv);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Pv = (0, g.forwardRef)((({
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
            _ = (0, Ae.UP)(b, m),
            w = (0, g.useId)(),
            E = (0, g.useId)(),
            P = (0, g.useId)(),
            S = (0, g.useId)(),
            C = (0, g.useId)(),
            x = (0, g.useId)(),
            [O = !1, T] = (0, Ae.ic)({
              prop: d,
              defaultProp: u,
              onChange: c
            }),
            N = (0, y.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, v.jsx)(wv.Provider, {
            value: {
              labelId: w,
              errorId: E,
              descriptionId: P,
              triggerId: x,
              hintId: S,
              popoverId: C,
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
            children: (0, v.jsx)(Jm, {
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
        Sv = (0, g.forwardRef)((({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: i
          } = Ev(), a = (0, y.mergeProps)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: mv({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, v.jsx)(ov, {
            ...a,
            ref: o,
            children: (0, v.jsx)(iv, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        })),
        Cv = (0, g.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, y.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, v.jsxs)(Kp, {
            ...o,
            ref: n,
            children: [(0, v.jsx)(Wp, {
              className: "foundry_uaq1gwu",
              style: {
                overflowY: void 0
              },
              children: e
            }), (0, v.jsx)(Yp, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, v.jsx)(Zp, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        })),
        xv = (0, g.forwardRef)((({
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
          } = Ev(), {
            isPressed: w,
            pressProps: E
          } = Kh({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), P = (0, y.mergeProps)({
            id: f,
            className: bv({
              size: b,
              isReadOnly: !!s,
              isInvalid: "invalid" === l,
              isPressed: !!w,
              isDisabled: !!u
            }),
            "aria-labelledby": (0, y.joinStrings)(r, c, d),
            "aria-describedby": (0, y.joinStrings)(n, p),
            "aria-activedescendant": g,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!w
          }, (0, y.omit)(E, "onKeyDown"), i), S = o ? _.DX : ev;
          return (0, v.jsx)(S, {
            ...P,
            ref: a,
            children: e
          })
        })),
        Ov = (0, g.forwardRef)((({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: i
          } = Ev(), a = (0, y.mergeProps)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), s = t ? _.DX : "span";
          return (0, v.jsx)(s, {
            ...a,
            ref: o,
            children: (0, v.jsx)(tv, {
              placeholder: e,
              "aria-label": i
            })
          })
        })),
        Tv = (0, g.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: a
          } = Ev(), s = a ? lv.ChevronUp : lv.ChevronDown, l = (0, y.mergeProps)({
            asChild: !0,
            className: _v({
              isDisabled: i || o
            }),
            "data-testid": t
          }, r);
          return (0, v.jsx)(rv, {
            ...l,
            ref: n,
            children: e || (0, v.jsx)(s, {
              size: "LG",
              label: ""
            })
          })
        })),
        Nv = (0, g.forwardRef)((({
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
          } = Ev(), d = s && !o, f = (0, y.mergeProps)({
            id: i.id || u,
            htmlFor: c,
            "data-testid": e,
            className: gv({
              showAsterisk: d,
              isDisabled: l
            })
          }, i), h = t ? _.DX : "label";
          return (0, v.jsx)(_.s6, {
            enabled: n,
            children: (0, v.jsx)(h, {
              ...f,
              ref: a,
              children: r
            })
          })
        })),
        jv = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = Ev(), s = (0, y.mergeProps)({
            className: vv({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? _.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Iv = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: a
          } = Ev(), s = (0, y.mergeProps)({
            className: yv({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? _.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        kv = (0, g.forwardRef)((({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, i) => {
          const a = (0, g.useRef)(null),
            s = (0, Ae.UP)(a, i),
            l = (0, y.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd10",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, v.jsx)(av, {
            ref: s,
            ...l,
            children: e
          })
        })),
        Rv = (0, g.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, y.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, v.jsx)(sv, {
            ref: n,
            asChild: !0,
            children: (0, v.jsx)("span", {
              ...o,
              children: e
            })
          })
        })),
        Dv = (0, g.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, y.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, v.jsx)(rv, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        })),
        Lv = nv,
        Av = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = Ev(), s = (0, y.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? _.DX : up;
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Mv = cp,
        Hv = dp;
      var Bv = r(36768),
        Vv = r(99098),
        zv = r(79888);

      function Fv(e, t, r) {
        let n = (0, g.useRef)(t),
          o = (0, zv.J)((() => {
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
      var qv = r(41149),
        Uv = r(52061);

      function Gv(e, t, r) {
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
        } = (0, qv.d)({
          isDisabled: n
        }), {
          pressProps: p,
          isPressed: m
        } = (0, qv.d)({
          onPress() {
            var e;
            t.toggle(), null === (e = r.current) || void 0 === e || e.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: v
        } = (0, Uv.Wc)(e, r), y = (0, Bv.v)(f, v), g = (0, Vv.$)(e, {
          labelable: !0
        });
        return Fv(r, t.isSelected, t.setSelected), {
          labelProps: (0, Bv.v)(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, Bv.v)(g, {
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

      function Xv(e, t, r) {
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

      function Kv(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = Xv(e.isSelected, e.defaultSelected || !1, e.onChange);
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

      function Wv(e) {
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
            n = e, o = t, i = r[t], (o = Wv(o)) in n ? Object.defineProperty(n, o, {
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

      function $v(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jv = e => {
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
            for (var [u, c] of e.compoundVariants) Qv(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $v(e.variantClassNames, (e => $v(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        ey = Jv({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz foundry_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ty = Jv({
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
        ry = Jv({
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
        ny = Jv({
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
        oy = Jv({
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
      const iy = (0, g.createContext)(null);

      function ay() {
        const e = (0, g.useContext)(iy);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const sy = (0, g.forwardRef)((({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: i = !1,
          isReadOnly: a = !1,
          ...s
        }, l) => {
          const u = (0, y.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, s),
            c = n ? _.DX : "div",
            d = (0, g.useId)(),
            f = (0, g.useId)(),
            h = (0, g.useId)();
          return (0, v.jsx)(iy.Provider, {
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
        ly = (0, g.forwardRef)((({
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
            p = (0, Ae.UP)(h, f),
            {
              size: m,
              appearance: b,
              inputId: w,
              labelId: E,
              descriptionId: P,
              isDisabled: S,
              isReadOnly: C
            } = ay(),
            x = Kv({
              isDisabled: S,
              isReadOnly: C,
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
              } = Gv(e, t, r);
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
              id: i || w,
              "aria-labelledby": (0, y.joinStrings)(n, E),
              "aria-describedby": (0, y.joinStrings)(o, P),
              name: u,
              value: c,
              isDisabled: S,
              isReadOnly: C
            }, x, h),
            T = (0, y.mergeProps)({
              className: oy({
                appearance: b
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": S || C,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || S || C || x.toggle()
              }
            }, d);
          return (0, v.jsxs)("div", {
            ...T,
            children: [(0, v.jsx)(_.s6, {
              children: (0, v.jsx)("input", {
                ...O,
                ref: p
              })
            }), (0, v.jsx)("div", {
              className: ny({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, v.jsx)("div", {
                className: ty({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        })),
        uy = (0, g.forwardRef)((({
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
          } = ay(), c = (0, y.mergeProps)({
            id: o.id || s,
            htmlFor: l,
            "data-testid": e,
            className: ry({
              isDisabled: a,
              size: u
            })
          }, o), d = t ? _.DX : "label";
          return (0, v.jsx)(_.s6, {
            enabled: n,
            children: (0, v.jsx)(d, {
              ...c,
              ref: i,
              children: r
            })
          })
        })),
        cy = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = ay(), s = n.id || a, l = (0, y.mergeProps)({
            className: ey({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), u = t ? _.DX : "div";
          return (0, v.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        })),
        dy = {
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
        fy = {
          ...dy,
          customError: !0,
          valid: !1
        },
        hy = {
          isInvalid: !1,
          validationDetails: dy,
          validationErrors: []
        },
        py = (0, g.createContext)({}),
        my = "__formValidationState" + Date.now();

      function vy(e) {
        if (e[my]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[my];
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
              validationDetails: fy
            } : null,
            u = (0, g.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return yy(r)
                }
                return []
              }(a, o);
              return gy(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let c = (0, g.useContext)(py),
            d = (0, g.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => yy(c[e]))) : yy(c[n]) : []), [c, n]),
            [f, h] = (0, g.useState)(c),
            [p, m] = (0, g.useState)(!1);
          c !== f && (h(c), m(!1));
          let v = (0, g.useMemo)((() => gy(p ? [] : d)), [p, d]),
            y = (0, g.useRef)(hy),
            [b, _] = (0, g.useState)(hy),
            w = (0, g.useRef)(hy),
            [E, P] = (0, g.useState)(!1);
          return (0, g.useEffect)((() => {
            if (!E) return;
            P(!1);
            let e = u || i || y.current;
            by(e, w.current) || (w.current = e, _(e))
          })), {
            realtimeValidation: l || v || u || i || hy,
            displayValidation: "native" === s ? l || v || b : l || v || u || i || b,
            updateValidation(e) {
              "aria" !== s || by(b, e) ? y.current = e : _(e)
            },
            resetValidation() {
              let e = hy;
              by(e, w.current) || (w.current = e, _(e)), "native" === s && P(!1), m(!0)
            },
            commitValidation() {
              "native" === s && P(!0), m(!0)
            }
          }
        }(e)
      }

      function yy(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function gy(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: fy
        } : null
      }

      function by(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }
      var _y = r(38223),
        wy = r(28830);

      function Ey(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, wy.N)((() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: Py(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = (0, zv.J)((() => {
            t.resetValidation()
          })),
          a = (0, zv.J)((e => {
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
            }(i) === r.current && (o ? o() : null === (a = r.current) || void 0 === a || a.focus(), (0, _y.Cl)("keyboard")), e.preventDefault()
          })),
          s = (0, zv.J)((() => {
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

      function Py(e) {
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
      const Sy = ({
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
        Cy = ({
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
        xy = ({
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
        Oy = ({
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
        Ty = ({
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
        Ny = ({
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

      function jy(e) {
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

      function Iy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ky(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Iy(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = jy(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iy(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Ry(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Dy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ly = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ky(ky({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Dy(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ry(e.variantClassNames, (e => Ry(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Ay = Ly({
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
        My = Ly({
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
        Hy = Ly({
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
        By = Ly({
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
      const Vy = (0, g.createContext)(null);

      function zy() {
        const e = (0, g.useContext)(Vy);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Fy = (0, g.forwardRef)((({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...i
        }, a) => {
          const s = (0, y.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, y.omit)(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? _.DX : "div",
            u = (0, g.useId)(),
            c = (0, g.useId)(),
            d = (0, g.useId)();
          return (0, v.jsx)(Vy.Provider, {
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
        qy = (0, g.forwardRef)((({
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
            descriptionId: w,
            labelId: E,
            inputId: P,
            ...S
          } = zy(), C = (0, g.useRef)(null), x = d.id || P, {
            isPressed: O,
            pressProps: T
          } = Kh({
            ref: C
          }), {
            setSelected: N,
            toggle: j,
            ...I
          } = Kv({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: k,
            isSelected: R,
            isDisabled: D,
            isReadOnly: L
          } = function(e, t, r) {
            let n = vy({
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
              } = Gv({
                ...e,
                isInvalid: o
              }, t, r);
            Ey(e, n, r);
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
            } = (0, qv.d)({
              isDisabled: d || f,
              onPress() {
                let {
                  [my]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: (0, Bv.v)(s, v),
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
            id: x,
            name: o,
            ...S
          }, {
            ...I,
            toggle: j,
            setSelected: S.isReadOnly ? () => !1 : N
          }, C), A = (0, y.mergeProps)({
            className: My({
              size: h
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || D || L || j()
            }
          }, T, d), M = (0, y.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, y.joinStrings)(c, E),
            "aria-describedby": (0, y.joinStrings)(l, w),
            "aria-errormessage": (0, y.joinStrings)(u, S.isInvalid ? w : void 0),
            "aria-required": b,
            required: b
          }, k), H = m ? a[`Dash${h}`] : a[`Check${h}`];
          return (0, v.jsxs)("div", {
            ...A,
            children: [(0, v.jsx)(_.s6, {
              children: (0, v.jsx)("input", {
                ...M,
                ref: f
              })
            }), (0, v.jsx)("div", {
              className: Ay({
                size: h,
                appearance: p
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : R ? "checked" : "unchecked",
              "data-disabled": D || L,
              "data-testid": e,
              "data-pressed": O,
              children: (0, v.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (R || m) && (0, v.jsx)(H, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        })),
        Uy = (0, g.forwardRef)((({
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
          } = zy(), d = i.id || l, f = c && !o, h = (0, y.mergeProps)({
            className: By({
              size: s,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: i.htmlFor || u
          }, i), p = t ? _.DX : "label";
          return (0, v.jsx)(_.s6, {
            enabled: n,
            children: (0, v.jsx)(p, {
              ...h,
              ref: a,
              children: e
            })
          })
        })),
        Gy = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = zy(), s = n.id || a, l = (0, y.mergeProps)({
            className: Hy({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), u = t ? _.DX : "div";
          return (0, v.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        })),
        Xy = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = zy(), a = n.id || i, s = (0, y.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz foundry_tdsdcd10",
            "data-testid": r,
            id: a
          }, n), l = t ? _.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }));

      function Ky(e) {
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

      function Wy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Yy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Wy(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ky(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wy(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Zy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var $y = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Qy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Yy(Yy({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) $y(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zy(e.variantClassNames, (e => Zy(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Jy = Qy({
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
        eg = Qy({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        tg = Qy({
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
        rg = Qy({
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
      const ng = (0, g.createContext)(null);

      function og() {
        const e = (0, g.useContext)(ng);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const ig = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: a = "neutral",
          ...s
        }, l) => {
          const u = (0, y.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, s),
            c = e ? _.DX : "div",
            d = (0, g.useId)(),
            f = (0, g.useId)(),
            h = (0, g.useId)(),
            p = (0, g.useId)();
          return (0, v.jsx)(ng.Provider, {
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
        ag = (0, g.forwardRef)((({
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
          } = og(), d = (0, y.mergeProps)({
            className: tg({
              isDisabled: u,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: s,
            htmlFor: l
          }, i), f = t ? _.DX : "label";
          return (0, v.jsx)(_.s6, {
            enabled: n,
            children: (0, v.jsx)(f, {
              ...d,
              ref: a,
              children: e
            })
          })
        })),
        sg = (0, g.forwardRef)((({
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
            isReadOnly: w,
            status: E
          } = og(), P = (0, g.useRef)(null), S = (0, Ae.UP)(P, c), {
            isPressed: C,
            pressProps: x
          } = Kh({}), O = (0, y.mergeProps)({
            className: rg({
              isInvalid: "invalid" === E,
              isDisabled: m,
              isReadOnly: w,
              isPressed: C,
              isSuccess: "success" === E
            }),
            name: i,
            id: u.id || h,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: b,
            readOnly: w,
            placeholder: a,
            "aria-labelledby": (0, y.joinStrings)(u.id, f, p, s),
            "aria-describedby": (0, y.joinStrings)(d, l),
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
          }, x, u), T = e ? _.DX : "textarea";
          return (0, v.jsx)(T, {
            ref: S,
            ...O,
            children: t
          })
        })),
        lg = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = og(), s = (0, y.mergeProps)({
            className: Jy({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? _.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        ug = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: a
          } = og(), s = (0, y.mergeProps)({
            className: eg({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? _.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        cg = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = og(), s = (0, y.mergeProps)({
            className: "foundry_vq8c3jm",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? _.DX : up;
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        dg = cp,
        fg = dp;
      let hg = Math.round(1e10 * Math.random()),
        pg = 0;
      const mg = new WeakMap;
      var vg = r(49652),
        yg = r(62993);

      function gg(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = (0, yg.mD)(e);
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
        }(e, t) && (!e.parentElement || gg(e.parentElement, e))
      }
      var bg = r(5606),
        _g = r(13569),
        wg = r(35412);
      class Eg {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, _g.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, _g.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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

      function Pg(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function Sg(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? bg.A : bg.t,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = (0, yg.TW)(o),
          a = function(e, t, r, n) {
            return (0, wg.Nf)() ? new Eg(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !n(e) || !gg(e) || r && !Pg(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class Cg {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new xg({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Pg(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach((e => r && r.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Cg;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new xg({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class xg {
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

      function Og(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, vg.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Tg(e) {
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
          t = (0, vg.Bi)(t);
          let a = (0, vg.Bi)(),
            s = {};
          return r && (n = n ? `${a} ${n}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: Og({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = (0, vg.X1)([Boolean(t), Boolean(r), n, o]), l = (0, vg.X1)([Boolean(t), Boolean(r), n, o]);
        return a = (0, Bv.v)(a, {
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
      new Cg;
      var Ng = r(89839),
        jg = r(73581);
      const Ig = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        kg = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Rg(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return Ig.has(t.script)
        }
        let t = e.split("-")[0];
        return kg.has(t)
      }
      var Dg = r(50336);
      const Lg = Symbol.for("react-aria.i18n.locale");

      function Ag() {
        let e = "undefined" != typeof window && window[Lg] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Rg(e) ? "rtl" : "ltr"
        }
      }
      let Mg = Ag(),
        Hg = new Set;

      function Bg() {
        Mg = Ag();
        for (let e of Hg) e(Mg)
      }
      const Vg = g.createContext(null);

      function zg() {
        let e = function() {
          let e = (0, Dg.wR)(),
            [t, r] = (0, g.useState)(Mg);
          return (0, g.useEffect)((() => (0 === Hg.size && window.addEventListener("languagechange", Bg), Hg.add(r), () => {
            Hg.delete(r), 0 === Hg.size && window.removeEventListener("languagechange", Bg)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, g.useContext)(Vg) || e
      }

      function Fg(e, t) {
        let {
          name: r,
          isReadOnly: n,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: l
        } = zg(), {
          isInvalid: u,
          validationErrors: c,
          validationDetails: d
        } = t.displayValidation, {
          labelProps: f,
          fieldProps: h,
          descriptionProps: p,
          errorMessageProps: m
        } = Tg({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || c
        }), v = (0, Vv.$)(e, {
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
          } = (0, jg.A)(), l = (0, g.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, s(), r && r(e), o && o(!1))
          }), [r, o, i, s]), u = (0, Ng.yB)(l), c = (0, g.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = (0, yg.TW)(e.target),
              r = (0, _g.bq)(t);
            if (!i.current.isFocusWithin && r === (0, _g.wt)(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, u(e);
              let r = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !(0, _g.sD)(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  (0, Ng.o1)(n, r);
                  let o = (0, Ng.eg)(n);
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
        }), b = (0, vg.Bi)(r);
        return mg.set(t, {
          name: b,
          descriptionId: p.id,
          errorMessageId: m.id,
          validationBehavior: s
        }), {
          radioGroupProps: (0, Bv.v)(v, {
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
              let n, o = Sg(e.currentTarget, {
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

      function qg(e) {
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
            n = e, o = t, i = r[t], (o = qg(o)) in n ? Object.defineProperty(n, o, {
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

      function Xg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Kg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wg = e => {
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
            for (var [u, c] of e.compoundVariants) Kg(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xg(e.variantClassNames, (e => Xg(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Yg = Wg({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd11",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zg = Wg({
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
      const $g = (0, g.createContext)(null);

      function Qg() {
        const e = (0, g.useContext)($g);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Jg = (0, g.forwardRef)((({
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
            h = (0, Ae.UP)(f, d),
            p = (0, g.useId)(),
            m = (0, g.useId)(),
            b = (0, g.useId)(),
            w = function(e) {
              let t = (0, g.useMemo)((() => e.name || `radio-group-${hg}-${++pg}`), [e.name]);
              var r;
              let [n, o] = Xv(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i, a] = (0, g.useState)(null), s = vy({
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
            } = Fg({
              ...c,
              orientation: r,
              "aria-labelledby": (0, y.joinStrings)(p, a),
              "aria-describedby": (0, y.joinStrings)(m, b, s),
              "aria-errormessage": (0, y.joinStrings)(b, l)
            }, w),
            P = (0, y.mergeProps)({
              className: "foundry_njguqn0"
            }, E, (0, y.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            S = i ? _.DX : "div";
          return (0, v.jsx)($g.Provider, {
            value: {
              state: w,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: m,
              labelId: p,
              errorId: b,
              status: u,
              ...c
            },
            children: (0, v.jsx)(S, {
              ref: h,
              "data-testid": o,
              ...P,
              children: n
            })
          })
        })),
        eb = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: i,
            orientation: a
          } = Qg(), s = (0, y.mergeProps)({
            "data-testid": e,
            className: Zg({
              size: i,
              orientation: a
            })
          }, n), l = t ? _.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: r
          })
        })),
        tb = (0, g.forwardRef)((({
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
          } = Qg(), u = s && !o, c = (0, y.mergeProps)({
            id: i.id || l,
            "data-testid": e,
            className: Yg({
              showAsterisk: u
            })
          }, i), d = t ? _.DX : "div";
          return (0, v.jsx)(_.s6, {
            enabled: n,
            children: (0, v.jsx)(d, {
              ...c,
              ref: a,
              children: r
            })
          })
        })),
        rb = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = Qg(), a = (0, y.mergeProps)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz foundry_tdsdcd10"
          }, n), s = t ? _.DX : "div";
          return (0, v.jsx)(s, {
            ...a,
            ref: o,
            children: r
          })
        })),
        nb = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: i,
            status: a
          } = Qg(), s = (0, y.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: a
          }, n), l = r ? _.DX : up;
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        ob = cp,
        ib = dp;
      var ab = Wg({
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
        sb = Wg({
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
        lb = Wg({
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
        ub = Wg({
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
      const cb = ({
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
        db = ({
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
        fb = ({
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
        hb = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, y.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? _.DX : "label";
          return (0, v.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        pb = (0, g.forwardRef)((({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, g.useRef)(null),
            i = (0, Ae.UP)(o, n),
            a = (0, g.useId)(),
            {
              state: s,
              appearance: l,
              size: c,
              isReadOnly: d,
              isRequired: f
            } = Qg(),
            {
              isPressed: h,
              pressProps: p
            } = Kh({}),
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
                } = (0, qv.d)({
                  isDisabled: s
                }),
                {
                  pressProps: d,
                  isPressed: f
                } = (0, qv.d)({
                  isDisabled: s,
                  onPress() {
                    var e;
                    t.setSelectedValue(n), null === (e = r.current) || void 0 === e || e.focus()
                  }
                }),
                {
                  focusableProps: h
                } = (0, Uv.Wc)((0, Bv.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                p = (0, Bv.v)(u, h),
                m = (0, Vv.$)(e, {
                  labelable: !0
                }),
                v = -1;
              null != t.selectedValue ? t.selectedValue === n && (v = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (v = 0), s && (v = void 0);
              let {
                name: y,
                descriptionId: g,
                errorMessageId: b,
                validationBehavior: _
              } = mg.get(t);
              return Fv(r, t.selectedValue, t.setSelectedValue), Ey({
                validationBehavior: _
              }, t, r), {
                labelProps: (0, Bv.v)(d, {
                  onClick: e => e.preventDefault()
                }),
                inputProps: (0, Bv.v)(m, {
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
            w = m.disabled || s?.isReadOnly,
            E = (0, y.mergeProps)(m, {
              disabled: w,
              readOnly: d,
              required: f,
              "data-testid": e,
              ...w && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, r),
            P = u[`Dot${c}`];
          return (0, v.jsxs)("div", {
            className: ub({
              size: c
            }),
            children: [(0, v.jsx)(_.s6, {
              children: (0, v.jsx)("input", {
                type: "radio",
                ...E,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, v.jsx)("div", {
              className: lb({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": w,
              "data-pressed": h,
              ...p,
              children: (0, v.jsx)("span", {
                className: "foundry_1pfduet9",
                children: b && (0, v.jsx)(P, {})
              })
            })]
          })
        })),
        mb = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            size: a,
            state: s
          } = Qg(), l = (0, g.useId)(), u = (0, y.mergeProps)({
            id: l,
            "data-testid": e,
            className: sb({
              size: a,
              isDisabled: s?.isDisabled
            })
          }, o), c = t ? _.DX : "div";
          return (0, v.jsx)(_.s6, {
            enabled: n,
            children: (0, v.jsx)(c, {
              ...u,
              ref: i,
              children: r
            })
          })
        })),
        vb = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = Qg(), a = (0, y.mergeProps)({
            "data-testid": e,
            className: ab({
              isDisabled: i
            })
          }, n), s = t ? _.DX : "span";
          return (0, v.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        }));

      function yb(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function gb(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return yb(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? yb(e, t) : void 0
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

      function bb(e, t, r) {
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

      function _b(e) {
        return _b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, _b(e)
      }

      function wb() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (wb = function() {
          return !!e
        })()
      }

      function Eb(e, t) {
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
          t % 2 ? Eb(Object(r), !0).forEach((function(t) {
            bb(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eb(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Sb(e, t) {
        return Sb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Sb(e, t)
      }

      function Cb(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = n,
          s = "",
          l = gb(e);
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

      function xb(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          u = gb(n);
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

      function Ob(e, t) {
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

      function Tb(e) {
        return e.length > 0 ? bb({}, e, /./) : {}
      }

      function Nb(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(n, o), u = i.slice(n, o), c = "", d = 0; d < u.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(a, u[d]);
          f && void 0 !== l[d] && l[d] !== u[d] ? c += l[d] : f && s && (c += u[d])
        }
        return c
      }

      function jb(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? Tb(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return xb(Cb(e, {
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
      var Ib = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function kb(e) {
        return Ib.includes(e) ? "\\".concat(e) : e
      }

      function Rb(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Db(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Lb(e, t, r) {
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

      function Ab(e) {
        return Ab = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Ab(e)
      }

      function Mb() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (Mb = function() {
          return !!e
        })()
      }

      function Hb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Bb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hb(Object(r), !0).forEach((function(t) {
            Lb(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hb(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Vb(e, t) {
        return Vb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Vb(e, t)
      }

      function zb(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return zb = function(e) {
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
              if (Mb()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && Vb(o, r.prototype), o
            }(e, arguments, Ab(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Vb(r, e)
        }, zb(e)
      }
      var Fb, qb = function(e) {
          function t(e) {
            var r;
            return Rb(this, t), (r = function(e, t, r) {
              return t = Ab(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, Mb() ? Reflect.construct(t, r || [], Ab(e).constructor) : t.apply(e, r))
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
            }), t && Vb(e, t)
          }(t, e), Db(t)
        }(zb(Error)),
        Ub = ["options"],
        Gb = ["text", "email", "tel", "search", "url"],
        Xb = Db((function e(t) {
          var r = t.init,
            n = t.tracking;
          Rb(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Gb.includes(e.type)) {
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
              Object.defineProperty(e, "value", Bb(Bb({}, v), {}, {
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
                    if (p.cachedId === p.id) throw new qb("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new qb("The selection attributes have not been initialized.");
                    var l, u = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = u.length), a > m.selectionStart ? l = "insert" : a <= m.selectionStart && a < m.selectionEnd ? l = "deleteBackward" : a === m.selectionEnd && i.length < u.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > u.length) throw new qb("Input type detection error.");
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
                      }(g, Ub);
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
      Fb = Xb, Object.defineProperty(Fb.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Kb, Wb = ["track", "modify"];

      function Yb(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? Tb(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Zb = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = _b(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, wb() ? Reflect.construct(t, r || [], _b(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = Yb(r),
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
                l = Yb(r),
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
                }(l, Wb),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = Pb(Pb({}, "insert" === t ? {
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
              if (!1 === y) throw new qb("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == c ? void 0 : c(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? Tb(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = Nb(n, Pb({
                  end: a
                }, o)),
                _ = Nb(n, Pb({
                  start: s
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                E = f.replace(w, "");
              if (b && (b = Cb(b, {
                  replacementChars: E,
                  replacement: h,
                  separate: m
                }), E = E.slice(b.length)), i && (i = Cb(i, {
                  replacementChars: E,
                  replacement: h,
                  separate: !1
                }), E = E.slice(i.length)), "insert" === t && "" === i) throw new qb("The character does not match the key value of the `replacement` object.");
              if (m) {
                var P = f.slice(a, s).replace(w, ""),
                  S = P.length - i.length;
                S < 0 ? _ = _.slice(-S) : S > 0 && (_ = P.slice(-S) + _)
              }
              _ && (_ = Cb(_, {
                replacementChars: E,
                replacement: h,
                separate: m
              }));
              var C = xb(b + i + _, {
                  mask: f,
                  replacement: h,
                  separate: m,
                  showMask: p
                }),
                x = function(e) {
                  var t, r, n, o = e.inputType,
                    i = e.value,
                    a = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    u = e.separate,
                    c = Ob(i, {
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
                  value: C,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: h,
                  separate: m
                });
              return {
                value: C,
                selectionStart: x,
                selectionEnd: x,
                options: {
                  mask: f,
                  replacement: h,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return jb(e, Yb(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Tb(n) : n;
              return Ob(jb(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, Yb(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Tb(n) : n,
                i = Nb(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return Cb(i, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, Yb(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? Tb(n) : n, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < r.length; l++) {
                var u = r[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, u) ? "".concat(a ? "(?!".concat(kb(u), ")") : "", "(").concat(o[u].source, ")") : kb(u), l === r.length - 1 && (i && (s += ")?".repeat(r.length)), s += "$")
              }
              return s
            }(e, Yb(r))
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
            }), t && Sb(e, t)
          }(e, Xb),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function $b(e) {
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
            n = e, o = t, i = r[t], (o = $b(o)) in n ? Object.defineProperty(n, o, {
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
      Kb = Zb, Object.defineProperty(Kb.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
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
            for (var [u, c] of e.compoundVariants) t_(u, n, e.defaultVariants) && (r += " " + c);
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
        o_ = r_({
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
        i_ = r_({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        a_ = r_({
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
        s_ = r_({
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
        l_ = r_({
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
        u_ = r(86895),
        c_ = r.t(u_, 2);
      const d_ = (0, g.createContext)(null);

      function f_() {
        const e = (0, g.useContext)(d_);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const h_ = (0, g.forwardRef)((({
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
          } = Kh({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !0
          }), b = (0, y.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, s), w = e ? _.DX : "div";
          return (0, v.jsx)(d_.Provider, {
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
            children: (0, v.jsx)(w, {
              ref: l,
              ...b,
              children: t
            })
          })
        })),
        p_ = (0, g.forwardRef)((({
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
          } = f_(), d = l && !o, f = (0, y.mergeProps)({
            id: i.id || c,
            htmlFor: i.htmlFor || u,
            "data-testid": e,
            className: l_({
              showAsterisk: d,
              isDisabled: s
            })
          }, i), h = t ? _.DX : "label";
          return (0, v.jsx)(_.s6, {
            enabled: n,
            children: (0, v.jsx)(h, {
              ref: a,
              ...f,
              children: r
            })
          })
        })),
        m_ = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = f_(), a = (0, y.mergeProps)({
            "data-testid": e,
            className: i_({
              isDisabled: i
            })
          }, n), s = t ? _.DX : "span";
          return (0, v.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        })),
        v_ = (0, g.forwardRef)((({
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
          } = f_(), c = (0, y.mergeProps)({
            "data-testid": e,
            "data-pressed": s,
            className: (0, at.clsx)(n_({
              isDisabled: i,
              isReadOnly: a,
              isInvalid: "invalid" === u,
              isPressed: s,
              isSuccess: "success" === u
            }), "foundry_8oytzo1")
          }, l, n), d = t ? _.DX : "div";
          return (0, v.jsx)(d, {
            ref: o,
            ...c,
            children: r
          })
        })),
        y_ = (0, g.forwardRef)((({
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
            inputId: w,
            descriptionId: E,
            setType: P,
            type: S
          } = f_();
          (0, g.useEffect)((() => P(u)), []);
          const C = "invalid" === m,
            x = (0, y.mergeProps)({
              disabled: f,
              readOnly: h,
              required: p,
              id: w,
              type: S,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, y.joinStrings)(b, s),
              "aria-describedby": (0, y.joinStrings)(E, l),
              "data-testid": e,
              className: (0, at.clsx)(s_({
                isDisabled: f,
                isReadOnly: h
              }), "foundry_8oytzo2"),
              ...C && {
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
                }(s, new Zb(l.current))
              }), [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: i
            }),
            T = (0, Ae.UP)(r && n ? O : null, d),
            N = t ? _.DX : "input";
          return (0, v.jsx)(N, {
            ref: T,
            ...x
          })
        })),
        g_ = (0, g.forwardRef)((({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = f_(), s = (0, y.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, at.clsx)(a_({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), l = t ? _.DX : c_[e];
          return (0, v.jsx)(l, {
            ref: i,
            ...s
          })
        })),
        b_ = (0, g.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = f_(), n = (0, y.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzo10"
          }, e);
          return (0, v.jsx)(nd, {
            ref: t,
            ...n
          })
        })),
        __ = (0, g.forwardRef)((({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: i
          } = f_(), a = "password" === o, s = a ? e : t, l = (0, y.mergeProps)({
            label: s,
            icon: a ? "Eye" : "EyeOff",
            onPress: () => {
              i(a ? "text" : "password")
            }
          }, r);
          return (0, v.jsxs)(rf, {
            children: [(0, v.jsx)(nf, {
              children: (0, v.jsx)(b_, {
                ref: n,
                ...l
              })
            }), (0, v.jsxs)(of, {
              side: "bottom",
              align: "end",
              children: [s, (0, v.jsx)(af, {})]
            })]
          })
        })),
        w_ = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = f_(), s = (0, y.mergeProps)({
            className: o_({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? _.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        E_ = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = f_(), s = (0, y.mergeProps)({
            className: "foundry_8oytzo16",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? _.DX : up;
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        P_ = cp,
        S_ = dp;
      var C_ = r(36566);

      function x_(e, t) {
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
        } = (0, Uv.Wc)(e, t), {
          pressProps: d,
          isPressed: f
        } = (0, qv.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), h = (0, Vv.$)(l, {
          labelable: !0
        }), p = (0, Bv.v)(c, d), m = (0, C_.rd)(), v = (0, C_._h)(e);
        return {
          isPressed: f,
          linkProps: (0, Bv.v)(h, v, {
            ...p,
            ...u,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), !m.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && (0, C_.sU)(t.currentTarget, t) && e.href && (t.preventDefault(), m.open(t.currentTarget, t, e.href, e.routerOptions))
            }
          })
        }
      }
      var O_ = r(68545);

      function T_(e) {
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

      function N_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function j_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? N_(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = T_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N_(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function I_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var k_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        R_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = j_(j_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) k_(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return I_(e.variantClassNames, (e => I_(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        D_ = R_({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        L_ = R_({
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
        A_ = R_({
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
      const M_ = (0, g.createContext)(null);

      function H_() {
        const e = (0, g.useContext)(M_);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const B_ = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const a = e ? _.DX : "div",
            s = (0, y.mergeProps)({
              className: A_({
                status: r,
                background: n
              })
            }, o);
          return (0, v.jsx)(M_.Provider, {
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
        V_ = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? _.DX : "div",
            i = (0, y.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        z_ = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? _.DX : "div",
            i = (0, y.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        F_ = {
          danger: O_.CircleX,
          information: O_.Info,
          success: O_.CircleCheck,
          warning: O_.TriangleAlert
        },
        q_ = (0, g.forwardRef)((({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = H_(), i = e ? _.DX : F_[o], a = (0, y.mergeProps)({
            className: L_({
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
        U_ = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? _.DX : "div",
            i = (0, y.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        G_ = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? _.DX : "div",
            i = (0, y.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        X_ = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, g.useRef)(null),
            a = (0, Ae.UP)(i, o),
            s = e ? _.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = x_(n, i),
            c = (0, y.mergeProps)({
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
        K_ = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? _.DX : "div",
            a = (0, y.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, v.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        })),
        W_ = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? _.DX : "div";
          return (0, v.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, at.clsx)(r, "foundry_1m368qhp foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy"),
            ...n
          })
        })),
        Y_ = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n
          } = H_(), o = (0, y.mergeProps)({
            className: D_({
              hasBackground: "none" !== n
            })
          }, t);
          return (0, v.jsx)(nd, {
            ref: r,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...o
          })
        }));

      function Z_(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function $_(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every((r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : Z_(n) && Z_(o) ? $_(n, o) : n === o
        })))
      }

      function Q_(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function J_(e) {
        return "number" == typeof e
      }

      function ew(e) {
        return "string" == typeof e
      }

      function tw(e) {
        return "boolean" == typeof e
      }

      function rw(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function nw(e) {
        return Math.abs(e)
      }

      function ow(e) {
        return Math.sign(e)
      }

      function iw(e, t) {
        return nw(e - t)
      }

      function aw(e) {
        return dw(e).map(Number)
      }

      function sw(e) {
        return e[lw(e)]
      }

      function lw(e) {
        return Math.max(0, e.length - 1)
      }

      function uw(e, t) {
        return t === lw(e)
      }

      function cw(e, t = 0) {
        return Array.from(Array(e), ((e, r) => t + r))
      }

      function dw(e) {
        return Object.keys(e)
      }

      function fw(e, t) {
        return [e, t].reduce(((e, t) => (dw(t).forEach((r => {
          const n = e[r],
            o = t[r],
            i = rw(n) && rw(o);
          e[r] = i ? fw(n, o) : o
        })), e)), {})
      }

      function hw(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function pw() {
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

      function mw(e = 0, t = 0) {
        const r = nw(e - t);

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

      function vw(e, t, r) {
        const {
          constrain: n
        } = mw(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return r ? nw((o + e) % o) : n(e)
        }

        function s() {
          return i
        }

        function l() {
          return vw(e, s(), r)
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

      function yw(e, t, r, n, o, i, a, s, l, u, c, d, f, h, p, m, v, y, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], E = {
          passive: !1
        }, P = pw(), S = pw(), C = mw(50, 225).constrain(h.measure(20)), x = {
          mouse: 300,
          touch: 400
        }, O = {
          mouse: 500,
          touch: 600
        }, T = p ? 43 : 25;
        let N = !1,
          j = 0,
          I = 0,
          k = !1,
          R = !1,
          D = !1,
          L = !1;

        function A(e) {
          if (!hw(e, n) && e.touches.length >= 2) return M(e);
          const t = i.readPoint(e),
            r = i.readPoint(e, b),
            a = iw(t, j),
            l = iw(r, I);
          if (!R && !L) {
            if (!e.cancelable) return M(e);
            if (R = a > l, !R) return M(e)
          }
          const c = i.pointerMove(e);
          a > m && (D = !0), u.useFriction(.3).useDuration(.75), s.start(), o.add(_(c)), e.preventDefault()
        }

        function M(e) {
          const t = c.byDistance(0, !1).index !== d.get(),
            r = i.pointerUp(e) * (p ? O : x)[L ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * ow(e)),
                n = c.byDistance(e, !p).distance;
              return p || nw(e) < C ? n : v && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (nw(e) <= nw(t)) return 0;
              const r = iw(nw(e), nw(t));
              return nw(r / e)
            }(r, n),
            a = T - 10 * o,
            s = y + o / 50;
          R = !1, k = !1, S.clear(), u.useDuration(a).useFriction(s), l.distance(n, !p), L = !1, f.emit("pointerUp")
        }

        function H(e) {
          D && (e.stopPropagation(), e.preventDefault(), D = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function s(s) {
              (tw(g) || g(e, s)) && function(e) {
                const s = hw(e, n);
                L = s, D = p && s && !e.buttons && N, N = iw(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (k = !0, i.pointerDown(e), u.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = L ? r : t;
                  S.add(e, "touchmove", A, E).add(e, "touchend", M).add(e, "mousemove", A, E).add(e, "mouseup", M)
                }(), j = i.readPoint(e), I = i.readPoint(e, b), f.emit("pointerDown"))
              }(s)
            }
            const l = t;
            P.add(l, "dragstart", (e => e.preventDefault()), E).add(l, "touchmove", (() => {}), E).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", H, !0)
          },
          destroy: function() {
            P.clear(), S.clear()
          },
          pointerDown: function() {
            return k
          }
        }
      }

      function gw(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function i(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (hw(r, t) ? r : r.touches[0])[o]
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
            return a && !s && nw(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function bw(e, t, r, n, o, i, a) {
        const s = [e].concat(n);
        let l, u, c = [],
          d = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (u = f(e), c = n.map(f), l = new ResizeObserver((r => {
              (tw(i) || i(o, r)) && function(r) {
                for (const i of r) {
                  if (d) return;
                  const r = i.target === e,
                    a = n.indexOf(i.target),
                    s = r ? u : c[a];
                  if (nw(f(r ? e : n[a]) - s) >= .5) {
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

      function _w(e, t, r, n, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = mw(.1, .99);
        let l = !1;

        function u() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: u,
          constrain: function(o) {
            if (!u()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = nw(e[l] - t.get()),
              d = r.get() - t.get(),
              f = s.constrain(c / a);
            r.subtract(d * f), !o && nw(d) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function ww(e, t, r, n) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = mw(o, i),
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

      function Ew(e) {
        let t = e;

        function r(e) {
          return J_(e) ? e : e.get()
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

      function Pw(e, t) {
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

      function Sw(e, t, r, n, o, i, a, s, l) {
        const u = aw(o),
          c = aw(o).reverse(),
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
              slideLocation: Ew(-1),
              translate: Pw(e, l[t]),
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

      function Cw(e, t, r) {
        let n, o = !1;
        return {
          init: function(i) {
            r && (n = new MutationObserver((e => {
              o || (tw(r) || r(i, e)) && function(e) {
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

      function xw(e, t, r, n, o, i, a) {
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
        } = i, P = {
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
        }, S = P.measure(t), C = r.map(P.measure), x = function(e, t) {
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
        }(l, u), O = x.measureSize(S), T = function(e) {
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
              return ew(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(s, O), j = !d && !!g, I = d || !!g, {
          slideSizes: k,
          slideSizesWithGaps: R,
          startGap: D,
          endGap: L
        } = function(e, t, r, n, o, i) {
          const {
            measureSize: a,
            startEdge: s,
            endEdge: l
          } = e, u = r[0] && o, c = function() {
            if (!u) return 0;
            const e = r[0];
            return nw(t[s] - e[s])
          }(), d = function() {
            if (!u) return 0;
            const e = i.getComputedStyle(sw(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(a), h = r.map(((e, t, r) => {
            const n = !t,
              o = uw(r, t);
            return n ? f[t] + c : o ? f[t] + d : r[t + 1][s] - e[s]
          })).map(nw);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: c,
            endGap: d
          }
        }(x, S, C, r, I, o), A = function(e, t, r, n, o, i, a, s, l) {
          const {
            startEdge: u,
            endEdge: c,
            direction: d
          } = e, f = J_(r), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return aw(e).filter((e => e % t == 0)).map((r => e.slice(r, r + t)))
              }(e, r) : function(e) {
                return e.length ? aw(e).reduce(((r, f, h) => {
                  const p = sw(r) || 0,
                    m = 0 === p,
                    v = f === lw(e),
                    y = o[u] - i[p][u],
                    g = o[u] - i[f][c],
                    b = !n && m ? d(a) : 0,
                    _ = nw(g - (!n && v ? d(s) : 0) - (y + b));
                  return h && _ > t + l && r.push(f), v && r.push(e.length), r
                }), []).map(((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return h
        }(x, O, v, d, S, C, D, L, 2), {
          snaps: M,
          snapsAligned: H
        } = function(e, t, r, n, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(n).map((e => sw(e)[a] - e[0][i])).map(nw).map(t.measure), u = n.map((e => r[i] - e[i])).map((e => -nw(e))), c = s(u).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: u,
            snapsAligned: c
          }
        }(x, N, S, C, A), B = -sw(M) + sw(R), {
          snapsContained: V,
          scrollContainLimit: z
        } = function(e, t, r, n) {
          const o = mw(-t + e, 0),
            i = r.map(((e, t) => {
              const {
                min: n,
                max: i
              } = o, a = o.constrain(e), l = !t, u = uw(r, t);
              return l ? i : u || s(n, a) ? n : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = sw(i);
              return mw(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return iw(e, t) <= 1
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
        }(O, B, H, g), F = j ? V : H, {
          limit: q
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: mw(r ? n - e : sw(t), n)
          }
        }(B, F, d), U = vw(lw(F), c, d), G = U.clone(), X = aw(r), K = function(e, t, r, n) {
          const o = pw(),
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
        })(se, e))), W = F[U.get()], Y = Ew(W), Z = Ew(W), $ = Ew(W), Q = Ew(W), J = function(e, t, r, n, o) {
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
              return s ? (r.set(e), i += t / s, i *= l, u += i, e.add(i), o = u - c) : (i = 0, r.set(n), e.set(n), o = t), a = ow(o), c = u, h
            },
            settled: function() {
              return nw(n.get() - t.get()) < .001
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
        }(Y, $, Z, Q, f), ee = function(e, t, r, n, o) {
          const {
            reachedAny: i,
            removeOffset: a,
            constrain: s
          } = n;

          function l(e) {
            return e.concat().sort(((e, t) => nw(e) - nw(t)))[0]
          }

          function u(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const i = o.filter((e => ow(e) === n));
            return i.length ? l(i) : sw(o) - r
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
                    }))).sort(((e, t) => nw(e.diff) - nw(t.diff))),
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
        }(d, F, B, q, Q), te = function(e, t, r, n, o, i, a) {
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
        }(K, U, G, J, ee, Q, a), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(q), ne = pw(), oe = function(e, t, r, n) {
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
                return dw(o).reduce(((t, r) => {
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
                  o = uw(r, t);
                return n ? cw(sw(r[0]) + 1) : o ? cw(lw(i) - sw(r)[0] + 1, sw(r)[0]) : e
              }))
            }()
          }
        }(j, g, F, z, A, X), ae = function(e, t, r, n, o, i, a, s) {
          const l = {
            passive: !0,
            capture: !0
          };
          let u = 0;

          function c(e) {
            "Tab" === e.code && (u = (new Date).getTime())
          }
          return {
            init: function(d) {
              s && (i.add(document, "keydown", c, !1), t.forEach(((t, c) => {
                i.add(t, "focus", (t => {
                  (tw(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - u > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = r.findIndex((e => e.includes(t)));
                    J_(i) && (o.useDuration(0), n.index(i, 0), a.emit("slideFocus"))
                  }(c)
                }), l)
              })))
            }
          }
        }(e, r, ie, te, J, ne, a, E), se = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: a,
          containerRect: S,
          slideRects: C,
          animation: K,
          axis: x,
          dragHandler: yw(x, e, n, o, Q, gw(x, o), Y, K, te, J, ee, U, a, T, h, p, y, .68, w),
          eventStore: ne,
          percentOfView: T,
          index: U,
          indexPrevious: G,
          limit: q,
          location: Y,
          offsetLocation: $,
          previousLocation: Z,
          options: i,
          resizeHandler: bw(t, a, o, r, x, b, P),
          scrollBody: J,
          scrollBounds: _w(q, $, Q, J, T),
          scrollLooper: ww(B, q, $, [Y, $, Z, Q]),
          scrollProgress: re,
          scrollSnapList: F.map(re.get),
          scrollSnaps: F,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: Sw(x, O, B, k, R, M, F, $, r),
          slideFocus: ae,
          slidesHandler: Cw(t, a, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ie,
          slidesToScroll: A,
          target: Q,
          translate: Pw(x, t)
        };
        return se
      }
      const Ow = {
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

      function Tw(e) {
        function t(e, t) {
          return fw(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = dw(n).filter((t => e.matchMedia(t).matches)).map((e => n[e])).reduce(((e, r) => t(e, r)), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => dw(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return r
      }

      function Nw(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          i = Tw(o),
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
          s = pw(),
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
          m = x;
        let v, y, g, b, _ = !1,
          w = u(Ow, Nw.globalOptions),
          E = u(w),
          P = [];

        function S(t) {
          const r = xw(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? S(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function C(t, r) {
          _ || (w = u(w, t), E = c(w), P = r || P, function() {
            const {
              container: t,
              slides: r
            } = E, n = ew(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = ew(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = S(E), d([w, ...P.map((({
            options: e
          }) => e))]).forEach((e => s.add(e, "change", x))), E.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(j), v.eventHandler.init(j), v.resizeHandler.init(j), v.slidesHandler.init(j), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(j), y = a.init(j, P)))
        }

        function x(e, t) {
          const r = N();
          O(), C(u({
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
        return C(t, r), setTimeout((() => l.emit("init")), 0), j
      }

      function jw(e = {}, t = []) {
        const r = (0, g.useRef)(e),
          n = (0, g.useRef)(t),
          [o, i] = (0, g.useState)(),
          [a, s] = (0, g.useState)(),
          l = (0, g.useCallback)((() => {
            o && o.reInit(r.current, n.current)
          }), [o]);
        return (0, g.useEffect)((() => {
          $_(r.current, e) || (r.current = e, l())
        }), [e, l]), (0, g.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = Q_(e),
              n = Q_(t);
            return r.every(((e, t) => $_(e, n[t])))
          })(n.current, t) || (n.current = t, l())
        }), [t, l]), (0, g.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            Nw.globalOptions = jw.globalOptions;
            const e = Nw(a, r.current, n.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [s, o]
      }

      function Iw(e = {}) {
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
      Nw.globalOptions = void 0, jw.globalOptions = void 0, Iw.globalOptions = void 0;
      const kw = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function Rw(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function Dw(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Lw(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Aw(e = {}) {
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
          ("pointerDown" === t ? Lw : Dw)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map((e => o[e])),
            i = e.map((e => o[e]));
          return n.forEach((e => Dw(e, r))), i.forEach((e => Lw(e, r))), e
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
            } = a, v = f(kw, Aw.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (c.loop = Rw(t.loop), Lw(n, c.loop)), t.draggable && _ && (c.draggable = Rw(t.draggable), Lw(n, c.draggable)), t.dragging && (c.dragging = Rw(t.dragging), l.forEach((e => r.on(e, d)))), t.snapped && (c.snapped = Rw(t.snapped), s.forEach((e => r.on(e, h))), h()), t.inView && (c.inView = Rw(t.inView), u.forEach((e => r.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => r.off(e, d))), s.forEach((e => r.off(e, h))), u.forEach((e => r.off(e, p))), Dw(n, c.loop), Dw(n, c.draggable), Dw(n, c.dragging), f([], i, c.snapped), f([], a, c.inView), Object.keys(c).forEach((e => {
              c[e] = []
            }))
          }
        };
        return m
      }
      Aw.globalOptions = void 0;
      var Mw = r(46106),
        Hw = r.t(Mw, 2);

      function Bw(e) {
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

      function Vw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function zw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vw(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Bw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vw(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Fw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Uw = "foundry_qmpv6yt",
        Gw = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = zw(zw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) qw(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fw(e.variantClassNames, (e => Fw(e, (e => e.split(" ")[0]))))
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
      const Xw = (0, g.createContext)(null);

      function Kw() {
        const e = (0, g.useContext)(Xw);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Ww = (0, g.forwardRef)((({
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
              const t = (0, Ae.rl)(),
                r = (0, Ae.jt)(),
                [n, o] = (0, g.useState)([]),
                i = n.length,
                [a, s] = (0, g.useState)(0),
                [l, u] = jw({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [Iw(), Aw()]),
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
            m = (0, y.mergeProps)({
              className: Gw(c)
            }, p, s),
            b = e ? _.DX : "div";
          return (0, v.jsx)(Xw.Provider, {
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
        Yw = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Zw = (0, g.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Kw();
          if (!e && !n || !n?.status) return null;
          const o = e || Yw[n.status],
            i = Hw[o],
            a = (0, y.mergeProps)({
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
        $w = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? _.DX : "div",
            i = (0, y.mergeProps)({
              className: "foundry_qmpv6yo foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        Qw = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, a) => {
          const s = e ? _.DX : "div",
            l = (0, y.mergeProps)({
              className: "foundry_qmpv6yk"
            }, i);
          return (0, v.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...l
          })
        })),
        Jw = (0, g.forwardRef)((({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = Kw(), a = (0, y.mergeProps)({
            className: "foundry_qmpv6yl"
          }, r), s = (0, Ae.UP)(i, n), l = g.Children.map(t, (e => {
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
        eE = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, g.useRef)(null),
            a = (0, Ae.UP)(i, o),
            s = e ? _.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = x_(n, i),
            c = (0, y.mergeProps)({
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
        tE = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const n = (0, y.mergeProps)({
            className: "foundry_qmpv6yq"
          }, t);
          return (0, v.jsx)(nd, {
            ref: r,
            "data-close-btn": !0,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...n
          })
        })),
        rE = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? _.DX : "div",
            a = (0, y.mergeProps)({
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
        nE = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Kw(), i = (0, y.mergeProps)({
            className: Uw
          }, t);
          return (0, v.jsx)(nd, {
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
        oE = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Kw(), i = (0, y.mergeProps)({
            className: Uw
          }, t);
          return (0, v.jsx)(nd, {
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
        iE = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Kw(), i = (0, y.mergeProps)({
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
      var aE = r(54423),
        sE = r.t(aE, 2);

      function lE(e) {
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

      function uE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function cE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? uE(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = lE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uE(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function dE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var fE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        hE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = cE(cE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) fE(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dE(e.variantClassNames, (e => dE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        pE = hE({
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
        mE = hE({
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
        vE = hE({
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
      const yE = (0, g.createContext)(null);

      function gE() {
        const e = (0, g.useContext)(yE);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const bE = (0, g.forwardRef)((({
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
            d = (0, y.mergeProps)({
              className: mE(c)
            }, l),
            f = e ? _.DX : "div";
          return (0, v.jsx)(yE.Provider, {
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
        _E = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = gE(), a = e ? _.DX : "div", s = (0, y.mergeProps)({
            className: vE({
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
        wE = (0, g.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = sE[e],
            o = (0, y.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, v.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        })),
        EE = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = gE(), i = (0, y.mergeProps)({
            className: pE({
              background: n
            })
          }, t);
          return (0, v.jsx)(nd, {
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
      var PE = r(25757),
        SE = r.t(PE, 2);

      function CE(e) {
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

      function xE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function OE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xE(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = CE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xE(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function TE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var NE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = OE(OE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) NE(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return TE(e.variantClassNames, (e => TE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        IE = jE({
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
        kE = jE({
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
        RE = jE({
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

      function DE() {
        const e = (0, g.useContext)(LE);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const LE = (0, g.createContext)(null),
        AE = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const a = (0, y.mergeProps)({
              className: RE({
                size: n
              })
            }, o),
            s = r ? _.DX : "ol";
          return (0, v.jsx)(LE.Provider, {
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
        ME = (0, g.forwardRef)((({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const a = (0, g.useRef)(null),
            {
              size: s
            } = DE(),
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
              } = x_({
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
            u = r ? _.DX : "a",
            c = (0, y.mergeProps)({
              className: (0, at.clsx)(IE({
                size: s
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, v.jsx)("li", {
            className: kE({
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
        HE = (0, g.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = SE[e];
          return (0, v.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        })),
        BE = (0, g.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, i) => {
          const [a, s] = (0, g.useState)(r), {
            size: l
          } = DE(), u = (0, y.mergeProps)({
            className: kE({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, v.jsx)("li", {
            ref: i,
            ...u,
            children: (0, v.jsxs)(Jm, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, v.jsx)(ev, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd11",
                "aria-label": n,
                children: "..."
              }), (0, v.jsx)(nv, {
                children: (0, v.jsx)(ov, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, v.jsx)(iv, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        VE = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? _.DX : av,
            a = (0, y.mergeProps)({
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
    77768: (e, t, r) => {
      r.d(t, {
        jH: () => i
      });
      var n = r(71127),
        o = (r(42295), n.createContext(void 0));

      function i(e) {
        const t = n.useContext(o);
        return e || t || "ltr"
      }
    }
  }
]);