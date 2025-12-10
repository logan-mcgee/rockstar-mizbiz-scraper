try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0c067eb4-23b9-4fc9-832e-97d2752ae770", e._sentryDebugIdIdentifier = "sentry-dbid-0c067eb4-23b9-4fc9-832e-97d2752ae770")
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
  [6707], {
    20027: (e, t, r) => {
      r.d(t, {
        N: () => l
      });
      var n = r(71127),
        o = r(85426),
        a = r(95362),
        i = r(21222),
        s = r(42295);

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
            } = e, o = n.useRef(null), a = n.useRef(new Map).current;
            return (0, s.jsx)(c, {
              scope: t,
              itemMap: a,
              collectionRef: o,
              children: r
            })
          };
        d.displayName = t;
        const f = e + "CollectionSlot",
          h = (0, i.createSlot)(f),
          p = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = u(f, r), i = (0, a.s)(t, o.collectionRef);
            return (0, s.jsx)(h, {
              ref: i,
              children: n
            })
          });
        p.displayName = f;
        const m = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          y = (0, i.createSlot)(m),
          g = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: o,
              ...i
            } = e, l = n.useRef(null), c = (0, a.s)(t, l), d = u(m, r);
            return n.useEffect(() => (d.itemMap.set(l, {
              ref: l,
              ...i
            }), () => {
              d.itemMap.delete(l)
            })), (0, s.jsx)(y, {
              [v]: "",
              ref: c,
              children: o
            })
          });
        return g.displayName = m, [{
          Provider: d,
          Slot: p,
          ItemSlot: g
        }, function(t) {
          const r = u(e + "CollectionConsumer", t);
          return n.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${v}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }, l]
      }
      Map
    },
    26707: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => h,
        AlertBanner: () => p,
        Badge: () => g,
        Body: () => jt,
        Breadcrumbs: () => y,
        Button: () => Ze,
        Checkbox: () => l,
        Code: () => kt,
        Dialog: () => b,
        Display: () => Lt,
        Divider: () => ft,
        Dropdown: () => a,
        Heading: () => At,
        IconButton: () => at,
        Label: () => Ht,
        Lightbox: () => o,
        Loader: () => Et,
        RadioGroup: () => d,
        Spinner: () => De,
        Switch: () => i,
        Tag: () => m,
        Text: () => Vt,
        TextArea: () => c,
        TextField: () => f,
        TextSemantics: () => zt,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => tf,
        Content: () => ef,
        Portal: () => rf,
        Root: () => Qd,
        Trigger: () => Jd,
        useTooltipContext: () => Yd
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => th,
        Close: () => ih,
        Content: () => $f,
        Controls: () => rh,
        CssVars: () => ch,
        Download: () => lh,
        Image: () => eh,
        Keyboard: () => oh,
        LightboxContext: () => Vf,
        OpenIcon: () => Kf,
        Overlay: () => Zf,
        Portal: () => Wf,
        Reset: () => sh,
        Root: () => Ff,
        RootImplContext: () => qf,
        Thumbnail: () => Xf,
        Trigger: () => Gf,
        Zoom: () => ah,
        ZoomPan: () => Yf
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => kv,
        Description: () => Bv,
        Hint: () => zv,
        Label: () => Hv,
        Option: () => Vv,
        OptionIcon: () => qv,
        OptionText: () => Fv,
        Portal: () => Uv,
        Root: () => Iv,
        ScrollArea: () => Lv,
        StatusIcon: () => Xv,
        StatusRoot: () => Gv,
        StatusText: () => Kv,
        Trigger: () => Dv,
        TriggerIcon: () => Mv,
        TriggerText: () => Av,
        useDropdownContext: () => jv
      });
      var i = {};
      r.r(i), r.d(i, {
        Description: () => by,
        Input: () => yy,
        Label: () => gy,
        Root: () => vy,
        useSwitchContext: () => my
      });
      var s = {};
      r.r(s), r.d(s, {
        CheckLG: () => Ly,
        CheckMD: () => ky,
        CheckXL: () => Dy,
        DashLG: () => My,
        DashMD: () => Ay,
        DashXL: () => Hy
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => eg,
        ErrorText: () => tg,
        Input: () => Qy,
        Label: () => Jy,
        Root: () => Yy
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => yg,
        Hint: () => gg,
        Input: () => vg,
        Label: () => mg,
        Root: () => pg,
        RootContext: () => fg,
        StatusIcon: () => _g,
        StatusRoot: () => bg,
        StatusText: () => wg,
        useTextAreaContext: () => hg
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => gb,
        DotMD: () => yb,
        DotXL: () => bb
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => cb,
        Input: () => wb,
        Label: () => lb,
        Option: () => _b,
        OptionDescription: () => Eb,
        OptionLabel: () => Pb,
        Options: () => sb,
        Root: () => ib,
        StatusIcon: () => db,
        StatusRoot: () => ub,
        StatusText: () => fb,
        useRadioGroupContext: () => ab
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => x_,
        Control: () => w_,
        Description: () => S_,
        Hint: () => __,
        Icon: () => E_,
        Input: () => P_,
        Label: () => b_,
        PasswordButton: () => C_,
        Root: () => g_,
        StatusIcon: () => O_,
        StatusRoot: () => T_,
        StatusText: () => R_
      });
      var h = {};
      r.r(h), r.d(h, {
        Body: () => Q_,
        CloseButton: () => iw,
        Description: () => rw,
        ErrorText: () => aw,
        Footer: () => ow,
        Header: () => Y_,
        Icon: () => ew,
        Link: () => nw,
        Root: () => $_,
        RootContext: () => W_,
        Title: () => tw,
        iconStatusMap: () => J_,
        useAlertContext: () => Z_
      });
      var p = {};
      r.r(p), r.d(p, {
        Alert: () => sP,
        CloseButton: () => uP,
        Description: () => iP,
        Icon: () => aP,
        Link: () => cP,
        PaginationCounter: () => pP,
        PaginationNav: () => dP,
        PaginationNextButton: () => fP,
        PaginationPrevButton: () => hP,
        PaginationViewport: () => lP,
        Root: () => nP,
        RootContext: () => tP,
        iconStatusMap: () => oP,
        useAlertBannerContext: () => rP
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => RP,
        Icon: () => OP,
        Label: () => TP,
        Root: () => SP,
        RootContext: () => xP,
        useTagContext: () => CP
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => IE,
        CloseButton: () => kE,
        Description: () => RE,
        Icon: () => jE,
        Provider: () => xE,
        Root: () => OE,
        RootContext: () => SE,
        Viewport: () => CE,
        iconAppearanceMap: () => NE,
        useToastContext: () => TE
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => KE,
        Item: () => XE,
        OverflowMenu: () => WE,
        OverflowMenuItem: () => ZE,
        Root: () => GE,
        RootContext: () => UE,
        useBreadcrumbsContext: () => qE
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => ox,
        Label: () => nx,
        Root: () => rx
      });
      var b = {};
      r.r(b), r.d(b, {
        ActionArea: () => rO,
        Button: () => lO,
        CloseButton: () => iO,
        Content: () => $T,
        Description: () => JT,
        Footer: () => oO,
        Header: () => nO,
        HeaderButton: () => sO,
        HeaderTitle: () => aO,
        Layout: () => tO,
        Overlay: () => ZT,
        Portal: () => YT,
        Root: () => WT,
        ScrollArea: () => eO,
        Title: () => QT,
        Trigger: () => cO,
        useDialogContext: () => KT
      });
      var _ = r(42295);

      function w(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class P extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var E = P;

      function x(e) {
        if ("string" != typeof e) throw new E(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = I.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = S[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new E(e);
          return `#${r}`
        }(e) : e;
        const r = O.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(T(e, 2), 16)), parseInt(T(e[3] || "f", 2), 16) / 255]
        }
        const n = R.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = N.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const a = j.exec(t);
        if (a) {
          const [t, r, n, o] = Array.from(a).slice(1).map(parseFloat);
          if (w(0, 100, r) !== r) throw new E(e);
          if (w(0, 100, n) !== n) throw new E(e);
          return [...L(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new E(e)
      }
      const C = e => parseInt(e.replace(/_/g, ""), 36),
        S = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = C(t.substring(0, 3)),
            n = C(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        T = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        O = new RegExp(`^#${T("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        R = new RegExp(`^#${T("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        N = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${T(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        j = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        I = /^[a-z]+$/i,
        k = e => Math.round(255 * e),
        L = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(k);
          const o = (e % 360 + 360) % 360 / 60,
            a = (1 - Math.abs(2 * n - 1)) * (t / 100),
            i = a * (1 - Math.abs(o % 2 - 1));
          let s = 0,
            l = 0,
            c = 0;
          o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, c = i) : o >= 3 && o < 4 ? (l = i, c = a) : o >= 4 && o < 5 ? (s = i, c = a) : o >= 5 && o < 6 && (s = a, c = i);
          const u = n - a / 2;
          return [s + u, l + u, c + u].map(k)
        };

      function D(e, t) {
        const [r, n, o, a] = function(e) {
          const [t, r, n, o] = x(e).map((e, t) => 3 === t ? e : e / 255), a = Math.max(t, r, n), i = Math.min(t, r, n), s = (a + i) / 2;
          if (a === i) return [0, 0, s, o];
          const l = a - i;
          return [60 * (t === a ? (r - n) / l + (r < n ? 6 : 0) : r === a ? (n - t) / l + 2 : (t - r) / l + 4), s > .5 ? l / (2 - a - i) : l / (a + i), s, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${w(0,100,100*t).toFixed()}%, ${w(0,100,100*r).toFixed()}%, ${parseFloat(w(0,1,n).toFixed(3))})`
        }(r, n, o - t, a)
      }

      function A(e, t) {
        return D(e, -t)
      }
      var M = r(71127),
        H = r.n(M),
        B = r(23644);

      function z(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          (0, B.Bx)(t, (e, t) => {
            if (null != e) {
              var o = (0, B.Jt)(n, t);
              r[(0, B.Tm)(o)] = String(e)
            }
          })
        } else {
          var o = e;
          for (var a in o) {
            var i = o[a];
            null != i && (r[(0, B.Tm)(a)] = i)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
          },
          writable: !1
        }), r
      }
      r(10131);
      var V = {
          grey: {
            static: {
              25: "var(--foundry-global-color-grey-static-25-05dae190)",
              50: "var(--foundry-global-color-grey-static-50-767699a7)",
              75: "var(--foundry-global-color-grey-static-75-a2172132)",
              100: "var(--foundry-global-color-grey-static-100-01811cdb)",
              200: "var(--foundry-global-color-grey-static-200-8230761c)",
              300: "var(--foundry-global-color-grey-static-300-60d2d1b8)",
              400: "var(--foundry-global-color-grey-static-400-b9847fcb)",
              500: "var(--foundry-global-color-grey-static-500-c92b4dd8)",
              600: "var(--foundry-global-color-grey-static-600-048e9067)",
              700: "var(--foundry-global-color-grey-static-700-6ebcd800)",
              800: "var(--foundry-global-color-grey-static-800-35f77231)",
              900: "var(--foundry-global-color-grey-static-900-a85ec23d)"
            },
            adaptive: {
              25: "var(--foundry-global-color-grey-adaptive-25-4181979c)",
              50: "var(--foundry-global-color-grey-adaptive-50-2026f5f9)",
              75: "var(--foundry-global-color-grey-adaptive-75-e832421c)",
              100: "var(--foundry-global-color-grey-adaptive-100-ed36bf65)",
              200: "var(--foundry-global-color-grey-adaptive-200-fb12d031)",
              300: "var(--foundry-global-color-grey-adaptive-300-02700b85)",
              400: "var(--foundry-global-color-grey-adaptive-400-54ccd69e)",
              500: "var(--foundry-global-color-grey-adaptive-500-ddc3fb78)",
              600: "var(--foundry-global-color-grey-adaptive-600-e8d9db01)",
              700: "var(--foundry-global-color-grey-adaptive-700-e3418aa4)",
              800: "var(--foundry-global-color-grey-adaptive-800-59c03dd7)",
              900: "var(--foundry-global-color-grey-adaptive-900-bbecd7df)",
              1e3: "var(--foundry-global-color-grey-adaptive-1000-020dfb1f)"
            }
          },
          red: {
            static: {
              100: "var(--foundry-global-color-red-static-100-5234bf51)",
              200: "var(--foundry-global-color-red-static-200-9b555022)",
              300: "var(--foundry-global-color-red-static-300-6ef42061)",
              400: "var(--foundry-global-color-red-static-400-bd31684b)",
              500: "var(--foundry-global-color-red-static-500-b89c22c5)",
              600: "var(--foundry-global-color-red-static-600-ed4f7808)",
              700: "var(--foundry-global-color-red-static-700-20c326c5)",
              800: "var(--foundry-global-color-red-static-800-60c90a7b)",
              900: "var(--foundry-global-color-red-static-900-55f69265)",
              1e3: "var(--foundry-global-color-red-static-1000-12c1e6bb)",
              1100: "var(--foundry-global-color-red-static-1100-284ef4c0)",
              1200: "var(--foundry-global-color-red-static-1200-5d3f7911)",
              1300: "var(--foundry-global-color-red-static-1300-43fd11f8)",
              1400: "var(--foundry-global-color-red-static-1400-dff9f9a5)"
            },
            adaptive: {
              100: "var(--foundry-global-color-red-adaptive-100-9f218b31)",
              200: "var(--foundry-global-color-red-adaptive-200-b287e195)",
              300: "var(--foundry-global-color-red-adaptive-300-3513afa6)",
              400: "var(--foundry-global-color-red-adaptive-400-2e43b523)",
              500: "var(--foundry-global-color-red-adaptive-500-d198b061)",
              600: "var(--foundry-global-color-red-adaptive-600-7da276f6)",
              700: "var(--foundry-global-color-red-adaptive-700-6f634812)",
              800: "var(--foundry-global-color-red-adaptive-800-7f423e03)",
              900: "var(--foundry-global-color-red-adaptive-900-43f71e11)",
              1e3: "var(--foundry-global-color-red-adaptive-1000-9f5e2924)",
              1100: "var(--foundry-global-color-red-adaptive-1100-f2f72614)",
              1200: "var(--foundry-global-color-red-adaptive-1200-aef5078c)",
              1300: "var(--foundry-global-color-red-adaptive-1300-3c79c39b)",
              1400: "var(--foundry-global-color-red-adaptive-1400-918ac2c6)"
            }
          },
          yellow: {
            static: {
              100: "var(--foundry-global-color-yellow-static-100-2887d8ce)",
              200: "var(--foundry-global-color-yellow-static-200-1dceac31)",
              300: "var(--foundry-global-color-yellow-static-300-bda8dae5)",
              400: "var(--foundry-global-color-yellow-static-400-e603ca1c)",
              500: "var(--foundry-global-color-yellow-static-500-b9703bbc)",
              600: "var(--foundry-global-color-yellow-static-600-828a39a0)",
              700: "var(--foundry-global-color-yellow-static-700-cb059cba)",
              800: "var(--foundry-global-color-yellow-static-800-e49b6916)",
              900: "var(--foundry-global-color-yellow-static-900-ff35761e)",
              1e3: "var(--foundry-global-color-yellow-static-1000-7c6c4551)",
              1100: "var(--foundry-global-color-yellow-static-1100-2e821a8c)",
              1200: "var(--foundry-global-color-yellow-static-1200-aea00231)",
              1300: "var(--foundry-global-color-yellow-static-1300-7eec7bd0)",
              1400: "var(--foundry-global-color-yellow-static-1400-0ff6b89d)"
            },
            adaptive: {
              100: "var(--foundry-global-color-yellow-adaptive-100-8f09820e)",
              200: "var(--foundry-global-color-yellow-adaptive-200-63c3f5ee)",
              300: "var(--foundry-global-color-yellow-adaptive-300-4deab2f6)",
              400: "var(--foundry-global-color-yellow-adaptive-400-78286ac3)",
              500: "var(--foundry-global-color-yellow-adaptive-500-f0427a70)",
              600: "var(--foundry-global-color-yellow-adaptive-600-3f6d60dc)",
              700: "var(--foundry-global-color-yellow-adaptive-700-959c799c)",
              800: "var(--foundry-global-color-yellow-adaptive-800-099fea86)",
              900: "var(--foundry-global-color-yellow-adaptive-900-9443df02)",
              1e3: "var(--foundry-global-color-yellow-adaptive-1000-abbedd59)",
              1100: "var(--foundry-global-color-yellow-adaptive-1100-ff18d083)",
              1200: "var(--foundry-global-color-yellow-adaptive-1200-4bc40f51)",
              1300: "var(--foundry-global-color-yellow-adaptive-1300-b3a4b5b4)",
              1400: "var(--foundry-global-color-yellow-adaptive-1400-3048335a)"
            }
          },
          green: {
            static: {
              100: "var(--foundry-global-color-green-static-100-753f09df)",
              200: "var(--foundry-global-color-green-static-200-b1b43708)",
              300: "var(--foundry-global-color-green-static-300-d66b3241)",
              400: "var(--foundry-global-color-green-static-400-a93942e5)",
              500: "var(--foundry-global-color-green-static-500-2888e254)",
              600: "var(--foundry-global-color-green-static-600-aebbfb3a)",
              700: "var(--foundry-global-color-green-static-700-89b4ffdc)",
              800: "var(--foundry-global-color-green-static-800-87b9bb4f)",
              900: "var(--foundry-global-color-green-static-900-b42b84da)",
              1e3: "var(--foundry-global-color-green-static-1000-43ecb25e)",
              1100: "var(--foundry-global-color-green-static-1100-d4597796)",
              1200: "var(--foundry-global-color-green-static-1200-a4dad299)",
              1300: "var(--foundry-global-color-green-static-1300-7861b376)",
              1400: "var(--foundry-global-color-green-static-1400-4d463023)"
            },
            adaptive: {
              100: "var(--foundry-global-color-green-adaptive-100-e36f5da3)",
              200: "var(--foundry-global-color-green-adaptive-200-e50d247c)",
              300: "var(--foundry-global-color-green-adaptive-300-e74a73b3)",
              400: "var(--foundry-global-color-green-adaptive-400-3e375ae0)",
              500: "var(--foundry-global-color-green-adaptive-500-5eb32af8)",
              600: "var(--foundry-global-color-green-adaptive-600-67db0104)",
              700: "var(--foundry-global-color-green-adaptive-700-b46c5b6e)",
              800: "var(--foundry-global-color-green-adaptive-800-62f4ea41)",
              900: "var(--foundry-global-color-green-adaptive-900-456c793d)",
              1e3: "var(--foundry-global-color-green-adaptive-1000-ebe84050)",
              1100: "var(--foundry-global-color-green-adaptive-1100-7d1a8857)",
              1200: "var(--foundry-global-color-green-adaptive-1200-f5a760b2)",
              1300: "var(--foundry-global-color-green-adaptive-1300-98111c27)",
              1400: "var(--foundry-global-color-green-adaptive-1400-c7a2c7e4)"
            }
          },
          blue: {
            static: {
              100: "var(--foundry-global-color-blue-static-100-e67c243c)",
              200: "var(--foundry-global-color-blue-static-200-d053fe98)",
              300: "var(--foundry-global-color-blue-static-300-564f6a4f)",
              400: "var(--foundry-global-color-blue-static-400-803833dc)",
              500: "var(--foundry-global-color-blue-static-500-029df7ec)",
              600: "var(--foundry-global-color-blue-static-600-55155611)",
              700: "var(--foundry-global-color-blue-static-700-f0d799e8)",
              800: "var(--foundry-global-color-blue-static-800-6d071594)",
              900: "var(--foundry-global-color-blue-static-900-92d3b7cc)",
              1e3: "var(--foundry-global-color-blue-static-1000-cc0c4d91)",
              1100: "var(--foundry-global-color-blue-static-1100-674881c3)",
              1200: "var(--foundry-global-color-blue-static-1200-81ade28f)",
              1300: "var(--foundry-global-color-blue-static-1300-92c235c9)",
              1400: "var(--foundry-global-color-blue-static-1400-1b5feb14)"
            },
            adaptive: {
              100: "var(--foundry-global-color-blue-adaptive-100-b6c46a86)",
              200: "var(--foundry-global-color-blue-adaptive-200-0ccc0c81)",
              300: "var(--foundry-global-color-blue-adaptive-300-e5d80c0e)",
              400: "var(--foundry-global-color-blue-adaptive-400-44a2af0b)",
              500: "var(--foundry-global-color-blue-adaptive-500-64093fc7)",
              600: "var(--foundry-global-color-blue-adaptive-600-41bcc0d5)",
              700: "var(--foundry-global-color-blue-adaptive-700-6f985a0d)",
              800: "var(--foundry-global-color-blue-adaptive-800-c66fae2b)",
              900: "var(--foundry-global-color-blue-adaptive-900-f87fb7ab)",
              1e3: "var(--foundry-global-color-blue-adaptive-1000-129c45a7)",
              1100: "var(--foundry-global-color-blue-adaptive-1100-579d2d7f)",
              1200: "var(--foundry-global-color-blue-adaptive-1200-5b826b61)",
              1300: "var(--foundry-global-color-blue-adaptive-1300-5864a192)",
              1400: "var(--foundry-global-color-blue-adaptive-1400-b9e5f8ab)"
            }
          },
          seafoam: {
            static: {
              100: "var(--foundry-global-color-seafoam-static-100-a401f55d)",
              200: "var(--foundry-global-color-seafoam-static-200-157f98a6)",
              300: "var(--foundry-global-color-seafoam-static-300-f057cb2a)",
              400: "var(--foundry-global-color-seafoam-static-400-5c314058)",
              500: "var(--foundry-global-color-seafoam-static-500-4eba9472)",
              600: "var(--foundry-global-color-seafoam-static-600-bb39e74b)",
              700: "var(--foundry-global-color-seafoam-static-700-97a0e42c)",
              800: "var(--foundry-global-color-seafoam-static-800-c898779d)",
              900: "var(--foundry-global-color-seafoam-static-900-ca1e00fd)",
              1e3: "var(--foundry-global-color-seafoam-static-1000-97b36592)",
              1100: "var(--foundry-global-color-seafoam-static-1100-7a540639)",
              1200: "var(--foundry-global-color-seafoam-static-1200-9d613b2f)",
              1300: "var(--foundry-global-color-seafoam-static-1300-5d82dc91)",
              1400: "var(--foundry-global-color-seafoam-static-1400-c9f1799c)"
            },
            adaptive: {
              100: "var(--foundry-global-color-seafoam-adaptive-100-9fd7898d)",
              200: "var(--foundry-global-color-seafoam-adaptive-200-ad5ea160)",
              300: "var(--foundry-global-color-seafoam-adaptive-300-339db442)",
              400: "var(--foundry-global-color-seafoam-adaptive-400-bacc52ab)",
              500: "var(--foundry-global-color-seafoam-adaptive-500-24d9f0ae)",
              600: "var(--foundry-global-color-seafoam-adaptive-600-28f1d217)",
              700: "var(--foundry-global-color-seafoam-adaptive-700-f8862c98)",
              800: "var(--foundry-global-color-seafoam-adaptive-800-240ff22d)",
              900: "var(--foundry-global-color-seafoam-adaptive-900-30744fa2)",
              1e3: "var(--foundry-global-color-seafoam-adaptive-1000-cecc3b2f)",
              1100: "var(--foundry-global-color-seafoam-adaptive-1100-307fe74e)",
              1200: "var(--foundry-global-color-seafoam-adaptive-1200-1d61b617)",
              1300: "var(--foundry-global-color-seafoam-adaptive-1300-26c82681)",
              1400: "var(--foundry-global-color-seafoam-adaptive-1400-6cf3df35)"
            }
          },
          white: {
            static: {
              5: "var(--foundry-global-color-white-static-5-c4aa496e)",
              10: "var(--foundry-global-color-white-static-10-fc74444e)",
              15: "var(--foundry-global-color-white-static-15-e98f967d)",
              20: "var(--foundry-global-color-white-static-20-6326998e)",
              35: "var(--foundry-global-color-white-static-35-fdd05d92)",
              40: "var(--foundry-global-color-white-static-40-a06b4074)",
              50: "var(--foundry-global-color-white-static-50-195bb728)",
              65: "var(--foundry-global-color-white-static-65-c30f2d6e)",
              80: "var(--foundry-global-color-white-static-80-1525ba22)",
              85: "var(--foundry-global-color-white-static-85-79c7cc6b)",
              90: "var(--foundry-global-color-white-static-90-5959c519)",
              95: "var(--foundry-global-color-white-static-95-becabaec)",
              100: "var(--foundry-global-color-white-static-100-d44db539)"
            }
          },
          black: {
            static: {
              5: "var(--foundry-global-color-black-static-5-5a16f697)",
              10: "var(--foundry-global-color-black-static-10-16a76e5e)",
              15: "var(--foundry-global-color-black-static-15-d198b2a6)",
              20: "var(--foundry-global-color-black-static-20-3ae064df)",
              35: "var(--foundry-global-color-black-static-35-1523cb80)",
              40: "var(--foundry-global-color-black-static-40-32fa6bf3)",
              50: "var(--foundry-global-color-black-static-50-e761096d)",
              65: "var(--foundry-global-color-black-static-65-1c288c8d)",
              80: "var(--foundry-global-color-black-static-80-ceca67af)",
              85: "var(--foundry-global-color-black-static-85-3cb71ba6)",
              90: "var(--foundry-global-color-black-static-90-45219d0a)",
              95: "var(--foundry-global-color-black-static-95-4042e3bb)",
              100: "var(--foundry-global-color-black-static-100-43aea341)"
            }
          },
          alpha: {
            adaptive: {
              5: "var(--foundry-global-color-alpha-adaptive-5-b141acdd)",
              10: "var(--foundry-global-color-alpha-adaptive-10-2f911b2f)",
              15: "var(--foundry-global-color-alpha-adaptive-15-695b3a30)",
              20: "var(--foundry-global-color-alpha-adaptive-20-8e38b04d)",
              35: "var(--foundry-global-color-alpha-adaptive-35-f9b0b74d)",
              40: "var(--foundry-global-color-alpha-adaptive-40-29c77778)",
              50: "var(--foundry-global-color-alpha-adaptive-50-f61afb4a)",
              65: "var(--foundry-global-color-alpha-adaptive-65-5c75d572)",
              80: "var(--foundry-global-color-alpha-adaptive-80-6e56c3f3)",
              85: "var(--foundry-global-color-alpha-adaptive-85-130819b2)",
              90: "var(--foundry-global-color-alpha-adaptive-90-a416f5ef)",
              95: "var(--foundry-global-color-alpha-adaptive-95-68274c65)"
            }
          }
        },
        F = r(64836);
      const q = e => {
        const t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      };

      function U(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function G(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? G(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = U(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function K(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var W = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Z = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = X(X({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) W(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return K(e.variantClassNames, e => K(e, e => e.split(" ")[0]))
            }
          }, t
        },
        $ = "var(--foundry_1qqcnua0)",
        Y = "var(--foundry_1qqcnua1)",
        Q = "var(--foundry_1qqcnua2)",
        J = "var(--foundry_1qqcnua3)",
        ee = "var(--foundry_1qqcnua4)",
        te = "var(--foundry_1qqcnua5)",
        re = "var(--foundry_1qqcnua6)",
        ne = "var(--foundry_1qqcnua7)",
        oe = "var(--foundry_1qqcnua8)",
        ae = "var(--foundry_1qqcnua9)",
        ie = "var(--foundry_1qqcnuaa)",
        se = "var(--foundry_1qqcnuab)",
        le = "var(--foundry_1qqcnuac)",
        ce = "var(--foundry_1qqcnuad)",
        ue = "var(--foundry_1qqcnuae)",
        de = "var(--foundry_1qqcnuaf)",
        fe = "var(--foundry_1qqcnuag)",
        he = "var(--foundry_1qqcnuah)",
        pe = "var(--foundry_1qqcnuai)",
        me = "var(--foundry_1qqcnuaj)",
        ve = "var(--foundry_1qqcnuak)",
        ye = "var(--foundry_1qqcnual)",
        ge = "var(--foundry_1qqcnuam)",
        be = "var(--foundry_1qqcnuan)";
      Z({
        defaultClassName: "foundry_1qqcnuao",
        variantClassNames: {
          appearance: {
            primary: "foundry_1qqcnuap",
            secondary: "foundry_1qqcnuaq",
            tertiary: "foundry_1qqcnuar",
            ghost: "foundry_1qqcnuas",
            information: "foundry_1qqcnuat",
            danger: "foundry_1qqcnuau",
            accent: "foundry_1qqcnuav",
            link: "foundry_1qqcnuaw"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), Z({
        defaultClassName: "foundry_tdsdcda foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdc",
            MD: "foundry_tdsdcdd",
            SM: "foundry_tdsdcde",
            XS: "foundry_tdsdcdf"
          },
          appearance: {
            default: "foundry_tdsdcdg",
            bold: "foundry_tdsdcdh",
            hyperlink: "foundry_tdsdcdi"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), Z({
        defaultClassName: "foundry_tdsdcdr foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdt",
            bold: "foundry_tdsdcdu"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), Z({
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
      }), Z({
        defaultClassName: "foundry_tdsdcdj foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdl",
            MD: "foundry_tdsdcdm",
            SM: "foundry_tdsdcdn",
            XS: "foundry_tdsdcdo"
          },
          appearance: {
            default: "foundry_tdsdcdp",
            bold: "foundry_tdsdcdq"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const _e = {
          enabled: {
            background: q($),
            border: q(Y),
            text: q(Q),
            outline: q(J)
          },
          hover: {
            background: q(ee),
            border: q(te),
            text: q(re),
            outline: q(ne)
          },
          focus: {
            background: q(oe),
            border: q(ae),
            text: q(ie),
            outline: q(se)
          },
          pressed: {
            background: q(le),
            border: q(ce),
            text: q(ue),
            outline: q(de)
          },
          disabled: {
            background: q(fe),
            border: q(he),
            text: q(pe),
            outline: q(me)
          },
          loading: {
            background: q(ve),
            border: q(ye),
            text: q(ge),
            outline: q(be)
          }
        },
        we = ({
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
            backgroundColor: a,
            hoverColor: i,
            pressedColor: s,
            textColor: l
          },
          enabled: c = !1
        }, u = []) => {
          (0, M.useEffect)(() => {
            if (!e.current || !a || !c) return;
            const u = `${a}:${t}:${r}`,
              {
                text: d,
                hover: f,
                pressed: h
              } = (0, F.getOrSet)(u, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = x(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(a);
                return {
                  text: l || (e > t ? V.black.static[100] : V.white.static[100]),
                  hover: i || (e >= r ? D(a, n) : A(a, n)),
                  pressed: s || (e >= r ? D(a, o) : A(a, o))
                }
              });
            return e.current.style.setProperty(_e.enabled.background, a), e.current.style.setProperty(_e.enabled.border, a), e.current.style.setProperty(_e.enabled.text, d), e.current.style.setProperty(_e.hover.background, f), e.current.style.setProperty(_e.hover.border, f), e.current.style.setProperty(_e.hover.text, d), e.current.style.setProperty(_e.focus.background, f), e.current.style.setProperty(_e.focus.border, f), e.current.style.setProperty(_e.focus.text, d), e.current.style.setProperty(_e.pressed.background, h), e.current.style.setProperty(_e.pressed.border, h), e.current.style.setProperty(_e.pressed.text, d), e.current.style.setProperty(_e.loading.background, f), e.current.style.setProperty(_e.loading.border, f), e.current.style.setProperty(_e.loading.text, d), () => {
              e.current?.style.removeProperty(_e.enabled.background), e.current?.style.removeProperty(_e.enabled.border), e.current?.style.removeProperty(_e.enabled.text), e.current?.style.removeProperty(_e.hover.background), e.current?.style.removeProperty(_e.hover.border), e.current?.style.removeProperty(_e.hover.text), e.current?.style.removeProperty(_e.focus.background), e.current?.style.removeProperty(_e.focus.border), e.current?.style.removeProperty(_e.focus.text), e.current?.style.removeProperty(_e.pressed.background), e.current?.style.removeProperty(_e.pressed.border), e.current?.style.removeProperty(_e.pressed.text), e.current?.style.removeProperty(_e.loading.background), e.current?.style.removeProperty(_e.loading.border), e.current?.style.removeProperty(_e.loading.text)
            }
          }, [e.current, t, r, n, o, a, i, s, l, c, ...u])
        };
      var Pe = r(95628),
        Ee = r(32067),
        xe = r(50078),
        Ce = r(71753);

      function Se(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Te(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Te(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Se(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Te(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Re(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ne, je, Ie = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ke = (Ne = {
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
        }, je = e => {
          var t = Ne.defaultClassName,
            r = Oe(Oe({}, Ne.defaultVariants), e);
          for (var n in r) {
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : Ne.defaultVariants[n];
            if (null != a) {
              var i = a;
              "boolean" == typeof i && (i = !0 === i ? "true" : "false");
              var s = Ne.variantClassNames[n][i];
              s && (t += " " + s)
            }
          }
          for (var [l, c] of Ne.compoundVariants) Ie(l, r, Ne.defaultVariants) && (t += " " + c);
          return t
        }, je.variants = () => Object.keys(Ne.variantClassNames), je.classNames = {
          get base() {
            return Ne.defaultClassName.split(" ")[0]
          },
          get variants() {
            return Re(Ne.variantClassNames, e => Re(e, e => e.split(" ")[0]))
          }
        }, je);
      const Le = "pageMD",
        De = (0, M.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = Le,
          testId: n,
          ...o
        }, a) => {
          const i = (0, xe.zQ)(),
            s = "string" == typeof r ? r : r?.[i] ?? r.default ?? Le,
            l = (0, F.mergeProps)({
              className: ke({
                size: s
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, _.jsx)(Ce.b, {
            label: e,
            children: (0, _.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: a,
              viewBox: "0 0 16 16",
              children: [!t && (0, _.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, _.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var Ae = r(4572),
        Me = r(90058),
        He = r.t(Me, 2);

      function Be(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ze(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ze(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Be(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ze(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fe(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ue = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ve(Ve({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) qe(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fe(e.variantClassNames, e => Fe(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ge = Ue({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnuao foundry_1qqcnuap",
              secondary: "foundry_1qqcnuao foundry_1qqcnuaq",
              tertiary: "foundry_1qqcnuao foundry_1qqcnuar",
              ghost: "foundry_1qqcnuao foundry_1qqcnuas",
              danger: "foundry_1qqcnuao foundry_1qqcnuau",
              information: "foundry_1qqcnuao foundry_1qqcnuat",
              accent: "foundry_1qqcnuao foundry_1qqcnuav",
              link: "foundry_1qqcnuao foundry_1qqcnuaw"
            },
            size: {
              SM: "foundry_17pcofya foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdh",
              MD: "foundry_17pcofyb foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
              LG: "foundry_17pcofyc foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            },
            fullWidth: {
              true: "foundry_17pcofyd",
              false: "foundry_17pcofye"
            },
            iconLeft: {
              true: "foundry_17pcofyf",
              false: "foundry_17pcofyg"
            },
            iconRight: {
              true: "foundry_17pcofyh",
              false: "foundry_17pcofyi"
            },
            isLoading: {
              true: "foundry_17pcofyj"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "SM",
              iconLeft: !0
            }, "foundry_17pcofyk"],
            [{
              size: "SM",
              iconRight: !0
            }, "foundry_17pcofyl"],
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_17pcofym"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_17pcofyn"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_17pcofyo"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_17pcofyp"],
            [{
              size: "SM",
              appearance: "link"
            }, "foundry_17pcofyq"],
            [{
              size: "MD",
              appearance: "link"
            }, "foundry_17pcofyr"],
            [{
              size: "LG",
              appearance: "link"
            }, "foundry_17pcofys"]
          ]
        });
      Ue({
        defaultClassName: "foundry_17pcofyt",
        variantClassNames: {
          isLoading: {
            true: "foundry_17pcofyu"
          },
          fullWidth: {
            true: "foundry_17pcofyv",
            false: "foundry_17pcofyw"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var Xe = Ue({
          defaultClassName: "foundry_17pcofyx",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofyy",
              MD: "foundry_17pcofyz",
              LG: "foundry_17pcofy10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ke = Ue({
          defaultClassName: "foundry_17pcofy12",
          variantClassNames: {
            fullWidth: {
              true: "foundry_17pcofy13",
              false: "foundry_17pcofy14"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        We = Ue({
          defaultClassName: "foundry_17pcofy17",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofy18",
              MD: "foundry_17pcofy19",
              LG: "foundry_17pcofy1a"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ze = (0, M.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: a,
        iconRightLabel: i,
        appearance: s,
        size: l = "MD",
        fullWidth: c = !1,
        isLoading: u = !1,
        spinnerLabel: d,
        override_darkenLuminance: f = .035,
        override_textLuminance: h = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: m = .15,
        override_backgroundColor: v,
        override_hoverColor: y,
        override_pressedColor: g,
        override_textColor: b,
        ...w
      }, P) => {
        const E = (0, M.useRef)(null),
          x = (0, Pe.UP)(E, P),
          C = (0, xe.zQ)(),
          S = "string" == typeof l ? l : l?.[C] ?? l.default ?? "MD",
          {
            buttonProps: T
          } = (0, Pe.sL)((0, F.mergeProps)(w, {
            isLoading: u
          }), E);
        we({
          refs: {
            buttonRef: E
          },
          config: {
            textLuminance: h,
            darkenLuminance: f,
            hoverLuminance: p,
            pressedLuminance: m
          },
          overrides: {
            backgroundColor: v,
            hoverColor: y,
            pressedColor: g,
            textColor: b
          },
          enabled: "accent" === s
        }, [t]);
        const O = (0, F.mergeProps)({
            className: Ge({
              appearance: s,
              size: S,
              fullWidth: c,
              iconLeft: !!n,
              iconRight: !!a,
              isLoading: u
            }),
            "data-testid": e
          }, T),
          R = n && He[n],
          N = a && He[a],
          j = t ? Ee.DX : "button",
          I = c && (N || N && R);
        return (0, _.jsxs)(j, {
          ref: x,
          ...O,
          children: [I && (0, _.jsx)("div", {
            className: "foundry_17pcofy15"
          }), R && (0, _.jsx)(R, {
            label: o || "",
            size: S,
            className: (0, Ae.clsx)(Xe({
              size: S
            }), "foundry_17pcofy11")
          }), (0, _.jsx)(Ee.xV, {
            children: r
          }), N && (0, _.jsx)(N, {
            label: i || "",
            size: S,
            className: (0, Ae.clsx)(Xe({
              size: S
            }), Ke({
              fullWidth: c
            }))
          }), u && (0, _.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, _.jsx)(De, {
              label: d || "",
              size: "inline" + ("LG" === S ? "LG" : "MD"),
              hideTrack: !0,
              className: We({
                size: S
              })
            })
          })]
        })
      });

      function $e(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ye(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ye(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = $e(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ye(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Je(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var et = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tt = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qe(Qe({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) et(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Je(e.variantClassNames, e => Je(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rt = tt({
          defaultClassName: "foundry_a5x3khg",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khh",
              MD: "foundry_a5x3khi",
              LG: "foundry_a5x3khj",
              XL: "foundry_a5x3khk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nt = tt({
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
        ot = tt({
          defaultClassName: "foundry_a5x3khm",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khn",
              MD: "foundry_a5x3kho",
              LG: "foundry_a5x3khp",
              XL: "foundry_a5x3khq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const at = (0, M.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: a = !1,
        size: i = "LG",
        children: s,
        isLoading: l = !1,
        spinnerLabel: c,
        override_darkenLuminance: u = .035,
        override_textLuminance: d = .179,
        override_hoverLuminance: f = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: p,
        override_hoverColor: m,
        override_pressedColor: v,
        override_textColor: y,
        ...g
      }, b) => {
        const w = (0, M.useRef)(null),
          P = (0, Pe.UP)(w, b),
          E = (0, xe.zQ)(),
          x = "string" == typeof i ? i : i?.[E] ?? i.default ?? "LG",
          {
            buttonProps: C
          } = (0, Pe.sL)((0, F.mergeProps)(g, {
            isLoading: l
          }), w);
        we({
          refs: {
            buttonRef: w
          },
          config: {
            textLuminance: d,
            darkenLuminance: u,
            hoverLuminance: f,
            pressedLuminance: h
          },
          overrides: {
            backgroundColor: p,
            hoverColor: m,
            pressedColor: v,
            textColor: y
          },
          enabled: "accent" === o
        }, [t]);
        const S = (0, F.mergeProps)({
            className: nt({
              appearance: o,
              size: x,
              fullWidth: a,
              isLoading: l
            }),
            "data-testid": e
          }, C),
          T = He[r],
          O = t ? Ee.DX : "button";
        return (0, _.jsxs)(O, {
          ref: P,
          ...S,
          children: [T && (0, _.jsx)(T, {
            label: n || "",
            size: x,
            className: rt({
              size: x
            })
          }), (0, _.jsx)(Ee.xV, {
            children: s
          }), l && (0, _.jsx)("div", {
            className: "foundry_a5x3khl",
            children: (0, _.jsx)(De, {
              label: c || "",
              size: x && "SM" !== x ? `inline${x}` : "inlineMD",
              hideTrack: !0,
              className: ot({
                size: x
              })
            })
          })]
        })
      });

      function it(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function st(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? st(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = it(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : st(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ct(e, t) {
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
        dt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lt(lt({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ut(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ct(e.variantClassNames, e => ct(e, e => e.split(" ")[0]))
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
      const ft = (0, M.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: a,
        ...i
      }, s) => {
        const l = "horizontal" !== t || n ? "div" : "hr",
          c = n || "hr" === l ? void 0 : "separator",
          u = o ? Ee.DX : l;
        return (0, _.jsx)(u, {
          ref: s,
          className: (0, Ae.clsx)(dt({
            thickness: r,
            orientation: t
          }), e),
          role: c,
          "aria-orientation": t,
          "data-testid": a,
          ...i
        })
      });

      function ht(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function pt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pt(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ht(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var yt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gt = "var(--foundry_9dxgbc2)",
        bt = "var(--foundry_9dxgbc3)",
        _t = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mt(mt({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yt(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vt(e.variantClassNames, e => vt(e, e => e.split(" ")[0]))
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
        wt = "var(--foundry_9dxgbc0)",
        Pt = "var(--foundry_9dxgbc1)";
      const Et = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...i
      }, s) => {
        const l = (0, xe.zQ)(),
          c = "string" == typeof a ? a : a?.[l] ?? a.default ?? "MD",
          u = (0, F.mergeProps)({
            className: _t({
              size: c
            }),
            "data-testid": t,
            style: z({
              [wt]: n?.pulseColorBackground,
              [Pt]: n?.pulseColorForeground,
              [gt]: n?.gradientColorBackground,
              [bt]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, i),
          d = e ? Ee.DX : "div";
        return (0, _.jsx)(d, {
          ref: s,
          ...u,
          children: e ? (0, _.jsx)(Ee.xV, {
            children: r
          }) : (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, _.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function xt(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ct(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function St(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ct(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = xt(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ct(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Tt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ot = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rt = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = St(St({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ot(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tt(e.variantClassNames, e => Tt(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Nt = Rt({
          defaultClassName: "foundry_1gea4150",
          variantClassNames: {
            size: {
              LG: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc",
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd",
              SM: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde",
              XS: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf"
            },
            appearance: {
              default: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              bold: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
              hyperlink: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const jt = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const i = e ? Ee.DX : "p",
          s = (0, F.mergeProps)({
            className: Nt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, _.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      });
      var It = Rt({
        defaultClassName: "foundry_ujgffp0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdr foundry_tdsdcd0 foundry_tdsdcdt",
            bold: "foundry_tdsdcdr foundry_tdsdcd0 foundry_tdsdcdu"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const kt = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const a = e ? Ee.DX : "p",
            i = (0, F.mergeProps)({
              className: It({
                appearance: r
              })
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...i
          })
        }),
        Lt = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Ee.DX : "h1",
            a = (0, F.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        });
      var Dt = Rt({
        defaultClassName: "foundry_11wb5e70",
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
      });
      const At = (0, M.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? Ee.DX : `h${t}`,
          i = (0, F.mergeProps)(n, {
            className: Dt({
              level: t
            })
          });
        return (0, _.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...i
        })
      });
      var Mt = Rt({
        defaultClassName: "foundry_370tab0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
            MD: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm",
            SM: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn",
            XS: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdo"
          },
          appearance: {
            default: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdp",
            bold: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Ht = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const i = e ? Ee.DX : "p",
          s = (0, F.mergeProps)({
            className: Mt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, _.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      });
      var Bt = Rt({
        defaultClassName: "foundry_yzsp790",
        variantClassNames: {
          semantic: {
            abbr: "foundry_yzsp791",
            cite: "foundry_yzsp792",
            emphasis: "foundry_yzsp793",
            idiomatic: "foundry_yzsp794",
            mark: "foundry_yzsp795",
            "strike-through": "foundry_yzsp796",
            strong: "foundry_yzsp797",
            sub: "foundry_yzsp798",
            sup: "foundry_yzsp799",
            underline: "foundry_yzsp79a",
            default: "foundry_yzsp79b"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const zt = {
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
        Vt = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const a = e ? Ee.DX : zt[r] || "span",
            i = (0, F.mergeProps)(n, {
              className: Bt({
                semantic: r
              })
            });
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...i
          })
        });
      var Ft = r(42828),
        qt = r.n(Ft);
      let Ut = "undefined" != typeof document ? M.useLayoutEffect : M.useEffect,
        Gt = e => e && !Array.isArray(e) && "object" == typeof e,
        Xt = [],
        Kt = {},
        Wt = qt();
      const Zt = (e, t = Xt) => {
        let r = Kt;
        Gt(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : Xt) : Gt(t) && (r = t, t = "dependencies" in r ? r.dependencies : Xt), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, a = (0, M.useRef)(!1), i = (0, M.useRef)(Wt.context(() => {}, n)), s = (0, M.useRef)(e => i.current.add(null, e)), l = t && t.length && !o;
        return l && Ut(() => (a.current = !0, () => i.current.revert()), Xt), Ut(() => {
          if (e && i.current.add(e, n), !l || !a.current) return () => i.current.revert()
        }, t), {
          context: i.current,
          contextSafe: s.current
        }
      };
      Zt.register = e => {
        Wt = e
      }, Zt.headless = !0;
      const $t = {
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

      function Yt(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function Qt(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -Yt(t - e, r - t, n) + t : e > r ? +Yt(e - r, r - t, n) + r : e
      }

      function Jt(e, t, r) {
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

      function er(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? er(Object(r), !0).forEach(function(t) {
            Jt(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const rr = {
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

      function nr(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const or = ["enter", "leave"];
      const ar = ["gotpointercapture", "lostpointercapture"];

      function ir(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = ar.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function sr(e) {
        return "touches" in e
      }

      function lr(e) {
        return sr(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function cr(e) {
        return sr(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function ur(e, t) {
        try {
          const r = t.clientX - e.clientX,
            n = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            a = (t.clientY + e.clientY) / 2,
            i = Math.hypot(r, n);
          return {
            angle: -180 * Math.atan2(r, n) / Math.PI,
            distance: i,
            origin: [o, a]
          }
        } catch (e) {}
        return null
      }

      function dr(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return ur(r, n)
      }

      function fr(e) {
        const t = cr(e);
        return sr(e) ? t.identifier : t.pointerId
      }

      function hr(e) {
        const t = cr(e);
        return [t.clientX, t.clientY]
      }

      function pr(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function mr(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function vr() {}

      function yr(...e) {
        return 0 === e.length ? vr : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function gr(e, t) {
        return Object.assign({}, t, e || {})
      }
      class br {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? mr(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
                  ctrlKey: a
                } = e;
                Object.assign(t, {
                  shiftKey: r,
                  altKey: n,
                  metaKey: o,
                  ctrlKey: a
                })
              }
              return t
            }(e)), n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            $t.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [a, i] = t._movement, [s, l] = r.threshold, {
            _step: c,
            values: u
          } = t;
          if (r.hasCustomTransform ? (!1 === c[0] && (c[0] = Math.abs(a) >= s && u[0]), !1 === c[1] && (c[1] = Math.abs(i) >= l && u[1])) : (!1 === c[0] && (c[0] = Math.abs(a) >= s && Math.sign(a) * s), !1 === c[1] && (c[1] = Math.abs(i) >= l && Math.sign(i) * l)), t.intentional = !1 !== c[0] || !1 !== c[1], !t.intentional) return;
          const d = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== c[0] ? e - c[0] : 0, d[1] = !1 !== c[1] ? t - c[1] : 0
          } else d[0] = !1 !== c[0] ? a - c[0] : 0, d[1] = !1 !== c[1] ? i - c[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = mr(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [p < v ? -1 : p > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [a, i],
                [s, l]
              ] = e;
              return [Qt(t, a, i, n), Qt(r, s, l, o)]
            }(t._bounds, t.offset, _), t.delta = $t.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = $t.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            $t.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(tr(tr(tr({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class _r extends br {
        constructor(...e) {
          super(...e), Jt(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = $t.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = $t.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[lr(e)] : r.axisThreshold;
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
      const wr = e => e,
        Pr = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => tr(tr({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return $t.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? $t.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || wr
          },
          threshold: e => $t.toVector(e, 0)
        },
        Er = tr(tr({}, Pr), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Er.bounds(e(t));
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
        xr = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Cr = "undefined" != typeof window && window.document && window.document.createElement;

      function Sr() {
        return Cr && "ontouchstart" in window
      }
      const Tr = {
          isBrowser: Cr,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Sr(),
          touchscreen: Sr() || Cr && window.navigator.maxTouchPoints > 1,
          pointer: Cr && "onpointerdown" in window,
          pointerLock: Cr && "exitPointerLock" in window.document
        },
        Or = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Rr = tr(tr({}, Er), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Tr.pointerLock, Tr.touch && r ? "touch" : this.pointerLock ? "mouse" : Tr.pointer && !o ? "pointer" : Tr.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Tr.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const a = $t.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, a
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform($t.toVector(e)),
              distance: this.transform($t.toVector(t)),
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
          axisThreshold: e => e ? tr(tr({}, Or), e) : Or,
          keyboardDisplacement: (e = 10) => e
        });

      function Nr(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [a, i] = e._direction;
        (t < 0 && n > 0 && a < 0 || t > 0 && n < 0 && a > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && i < 0 || r > 0 && o < 0 && i > 0) && (e._movement[1] = e._movementBound[1])
      }
      const jr = tr(tr({}, Pr), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Tr.touch && Tr.gesture) return "gesture";
            if (Tr.touch && n) return "touch";
            if (Tr.touchscreen) {
              if (Tr.pointer) return "pointer";
              if (Tr.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = gr(mr(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = gr(mr(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), a()] : e => [o(e), a(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, $t.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Ir = tr(tr({}, Er), {}, {
          mouseOnly: (e = !0) => e
        }),
        kr = Er,
        Lr = Er,
        Dr = tr(tr({}, Er), {}, {
          mouseOnly: (e = !0) => e
        }),
        Ar = new Map,
        Mr = new Map;

      function Hr(e) {
        Ar.set(e.key, e.engine), Mr.set(e.key, e.resolver)
      }
      const Br = {
          key: "drag",
          engine: class extends _r {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "dragging")
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
                e._bounds = Er.bounds(n)
              }
            }
            cancel() {
              const e = this.state;
              e.canceled || (e.canceled = !0, e._active = !1, setTimeout(() => {
                this.compute(), this.emit()
              }, 0))
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = fr(e), r._pointerActive = !0, this.computeValues(hr(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== lr(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = fr(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = hr(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = $t.sub(o, t._values), this.computeValues(o)), $t.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = fr(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, a] = t._distance;
              if (t.tap = o <= r.tapsThreshold && a <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, a] = t._movement, [i, s] = r.swipe.velocity, [l, c] = r.swipe.distance, u = r.swipe.duration;
                if (t.elapsedTime < u) {
                  const r = Math.abs(e / t.timeDelta),
                    u = Math.abs(n / t.timeDelta);
                  r > i && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > s && Math.abs(a) > c && (t.swipe[1] = Math.sign(n))
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
              this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
                this.state._step = [0, 0], this.startPointerDrag(e)
              }, this.config.delay)
            }
            keyDown(e) {
              const t = xr[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, $t.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in xr && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Rr
        },
        zr = {
          key: "hover",
          engine: class extends _r {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(hr(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = hr(e);
              t._movement = t._delta = $t.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Dr
        },
        Vr = {
          key: "move",
          engine: class extends _r {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(hr(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = hr(e),
                r = this.state;
              r._delta = $t.sub(t, r._values), $t.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Ir
        },
        Fr = {
          key: "pinch",
          engine: class extends br {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "pinching"), Jt(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? $t.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              e.canceled || setTimeout(() => {
                e.canceled = !0, e._active = !1, this.compute(), this.emit()
              }, 0)
            }
            touchStart(e) {
              this.ctrl.setEventIds(e);
              const t = this.state,
                r = this.ctrl.touchIds;
              if (t._active && t._touchIds.every(e => r.has(e))) return;
              if (r.size < 2) return;
              this.start(e), t._touchIds = Array.from(r).slice(0, 2);
              const n = dr(e, t._touchIds);
              n && this.pinchStart(e, n)
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              const t = this.state,
                r = t._pointerEvents,
                n = this.ctrl.pointerIds;
              if (t._active && Array.from(r.keys()).every(e => n.has(e))) return;
              if (r.size < 2 && r.set(e.pointerId, e), t._pointerEvents.size < 2) return;
              this.start(e);
              const o = ur(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = dr(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = ur(...Array.from(t.values()));
              r && this.pinchMove(e, r)
            }
            pinchMove(e, t) {
              const r = this.state,
                n = r._values[1],
                o = t.angle - n;
              let a = 0;
              Math.abs(o) > 270 && (a += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * a]), r.origin = t.origin, r.turns = a, r._movement = [r._values[0] / r._initial[0] - 1, r._values[1] - r._initial[1]], this.compute(e), this.emit()
            }
            touchEnd(e) {
              this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some(e => !this.ctrl.touchIds.has(e)) && (this.state._active = !1, this.compute(e), this.emit())
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
              t._movement = [e.scale - 1, e.rotation], t._delta = $t.sub(t._movement, r), this.compute(e), this.emit()
            }
            gestureEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            wheel(e) {
              const t = this.config.modifierKey;
              t && !(Array.isArray(t) ? t.find(t => e[t]) : e[t]) || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)))
            }
            wheelStart(e) {
              this.start(e), this.wheelChange(e)
            }
            wheelChange(e) {
              "uv" in e || e.cancelable && e.preventDefault();
              const t = this.state;
              t._delta = [-pr(e)[1] / 100 * t.offset[0], 0], $t.addTo(t._movement, t._delta), Nr(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: jr
        },
        qr = {
          key: "scroll",
          engine: class extends _r {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "scrolling")
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
                    scrollLeft: a,
                    scrollTop: i
                  } = e.currentTarget;
                  return [null !== (t = null != n ? n : a) && void 0 !== t ? t : 0, null !== (r = null != o ? o : i) && void 0 !== r ? r : 0]
                }(e);
              t._delta = $t.sub(r, t._values), $t.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: kr
        },
        Ur = {
          key: "wheel",
          engine: class extends _r {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = pr(e), $t.addTo(t._movement, t._delta), Nr(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Lr
        };
      const Gr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Tr.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Xr = ["target", "eventOptions", "window", "enabled", "transform"];

      function Kr(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = Kr(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class Wr {
        constructor(e, t) {
          Jt(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const a = this._listeners,
            i = function(e, t = "") {
              const r = rr[e];
              return e + (r && r[t] || t)
            }(t, r),
            s = tr(tr({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(i, n, s);
          const l = () => {
            e.removeEventListener(i, n, s), a.delete(l)
          };
          return a.add(l), l
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class Zr {
        constructor() {
          Jt(this, "_timeouts", new Map)
        }
        add(e, t, r = 140, ...n) {
          this.remove(e), this._timeouts.set(e, window.setTimeout(t, r, ...n))
        }
        remove(e) {
          const t = this._timeouts.get(e);
          t && window.clearTimeout(t)
        }
        clean() {
          this._timeouts.forEach(e => {
            window.clearTimeout(e)
          }), this._timeouts.clear()
        }
      }
      class $r {
        constructor(e) {
          var t, r;
          Jt(this, "gestures", new Set), Jt(this, "_targetEventStore", new Wr(this)), Jt(this, "gestureEventStores", {}), Jt(this, "gestureTimeoutStores", {}), Jt(this, "handlers", {}), Jt(this, "config", {}), Jt(this, "pointerIds", new Set), Jt(this, "touchIds", new Set), Jt(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && Yr(t, "drag"), r.wheel && Yr(t, "wheel"), r.scroll && Yr(t, "scroll"), r.move && Yr(t, "move"), r.pinch && Yr(t, "pinch"), r.hover && Yr(t, "hover")
        }
        setEventIds(e) {
          return sr(e) ? (this.touchIds = new Set(function(e) {
            return function(e) {
              return Array.from(e.touches).filter(t => {
                var r, n;
                return t.target === e.currentTarget || (null === (r = e.currentTarget) || void 0 === r || null === (n = r.contains) || void 0 === n ? void 0 : n.call(r, t.target))
              })
            }(e).map(e => e.identifier)
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
                eventOptions: a,
                window: i,
                enabled: s,
                transform: l
              } = n,
              c = function(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                  if (null == e) return {};
                  var r, n, o = {},
                    a = Object.keys(e);
                  for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
              }(n, Xr);
            if (r.shared = Kr({
                target: o,
                eventOptions: a,
                window: i,
                enabled: s,
                transform: l
              }, Gr), t) {
              const e = Mr.get(t);
              r[t] = Kr(tr({
                shared: r.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = Mr.get(e);
                t && (r[e] = Kr(tr({
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
                  a = Qr(r, o.eventOptions, !!n);
                o.enabled && new(Ar.get(t))(this, e, t).bind(a)
              }
              const o = Qr(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](tr(tr({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = yr(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: a
              } = ir(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: a
              })
            }
          }
        }
      }

      function Yr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Wr(e, t), e.gestureTimeoutStores[t] = new Zr
      }
      const Qr = (e, t, r) => (n, o, a, i = {}, s = !1) => {
          var l, c;
          const u = null !== (l = i.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = i.passive) && void 0 !== c ? c : t.passive;
          let f = s ? n : function(e, t = "", r = !1) {
            const n = rr[e],
              o = n && n[t] || t;
            return "on" + nr(e) + nr(o) + (function(e = !1, t) {
              return e && !or.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(a)
        },
        Jr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function en(e, t, r, n, o, a) {
        if (!e.has(r)) return;
        if (!Ar.has(n)) return;
        const i = r + "Start",
          s = r + "End";
        o[n] = e => {
          let n;
          return e.first && i in t && t[i](e), r in t && (n = t[r](e)), e.last && s in t && t[s](e), n
        }, a[n] = a[n] || {}
      }

      function tn(e, t = {}, r, n) {
        const o = H().useMemo(() => new $r(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), H().useEffect(o.effect.bind(o)), H().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function rn(e, t) {
        const r = ([Br, Fr, qr, Ur, Vr, zr].forEach(Hr), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) Jr.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), a = {};
            return en(o, r, "onDrag", "drag", a, t), en(o, r, "onWheel", "wheel", a, t), en(o, r, "onScroll", "scroll", a, t), en(o, r, "onPinch", "pinch", a, t), en(o, r, "onMove", "move", a, t), en(o, r, "onHover", "hover", a, t), {
              handlers: a,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return tn(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const nn = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), on = ([e, t]) => ({
        x: e,
        y: t
      }), an = (e, t) => (e.x = t.x, e.y = t.y, e), sn = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, ln = (e, t, r) => Math.min(Math.max(e, t), r);

      function cn() {
        return cn = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, cn.apply(null, arguments)
      }
      var un = ["shift", "alt", "meta", "mod", "ctrl"],
        dn = {
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

      function fn(e) {
        return (e && dn[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function hn(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function pn(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return fn(e)
        });
        return cn({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !un.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && yn([fn(e.key), fn(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && gn([fn(e.key), fn(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        mn.clear()
      });
      var mn = new Set;

      function vn(e) {
        return Array.isArray(e)
      }

      function yn(e) {
        var t = Array.isArray(e) ? e : [e];
        mn.has("meta") && mn.forEach(function(e) {
          return ! function(e) {
            return un.includes(e)
          }(e) && mn.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return mn.add(e.toLowerCase())
        })
      }

      function gn(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? mn.clear() : t.forEach(function(e) {
          return mn.delete(e.toLowerCase())
        })
      }

      function bn(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          a = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && a ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, vn(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var _n = (0, M.createContext)(void 0);

      function wn(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, _.jsx)(_n.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Pn(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Pn(e[n], t[n])
        }, !0) : e === t
      }
      var En = (0, M.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        xn = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, M.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            a = o[0],
            i = o[1],
            s = (0, M.useState)([]),
            l = s[0],
            c = s[1],
            u = (0, M.useCallback)(function(e) {
              i(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            d = (0, M.useCallback)(function(e) {
              i(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, M.useCallback)(function(e) {
              i(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            h = (0, M.useCallback)(function(e) {
              c(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            p = (0, M.useCallback)(function(e) {
              c(function(t) {
                return t.filter(function(t) {
                  return !Pn(t, e)
                })
              })
            }, []);
          return (0, _.jsx)(En.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: l,
              enableScope: u,
              disableScope: d,
              toggleScope: f
            },
            children: (0, _.jsx)(wn, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        Cn = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Sn = "undefined" != typeof window ? M.useLayoutEffect : M.useEffect;

      function Tn(e, t, r, n) {
        var o = (0, M.useState)(null),
          a = o[0],
          i = o[1],
          s = (0, M.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          c = vn(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, M.useCallback)(t, null != u ? u : []),
          f = (0, M.useRef)(d);
        f.current = u ? d : t;
        var h = function(e) {
            var t = (0, M.useRef)(void 0);
            return Pn(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, M.useContext)(En).enabledScopes,
          m = (0, M.useContext)(_n);
        return Sn(function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !bn(e, ["input", "textarea", "select"]) || bn(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== a) {
                    var n = a.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== a && !a.contains(n.activeElement)) return void Cn(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && hn(c, null == h ? void 0 : h.splitKey).forEach(function(r) {
                    var n, o = pn(r, null == h ? void 0 : h.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, a = t.alt,
                          i = t.meta,
                          s = t.mod,
                          l = t.shift,
                          c = t.ctrl,
                          u = t.keys,
                          d = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = fn(f),
                          g = d.toLowerCase();
                        if (!(null != u && u.includes(y) || null != u && u.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (a === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (s) {
                            if (!p && !h) return !1
                          } else {
                            if (i === !p && "meta" !== g && "os" !== g) return !1;
                            if (c === !h && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (vn(n = u) ? n : n.split(o)).every(function(e) {
                          return mn.has(e.trim().toLowerCase())
                        })) : !u)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void Cn(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (yn(fn(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (gn(fn(e.code)), s.current = !1, null != h && h.keyup && r(e, !0))
              },
              i = a || (null == l ? void 0 : l.document) || document;
            return i.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), i.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && hn(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                return m.addHotkey(pn(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              }),
              function() {
                i.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), i.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && hn(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                  return m.removeHotkey(pn(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                })
              }
          }
        }, [a, c, h, p]), i
      }

      function On(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Rn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Nn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rn(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = On(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var In = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kn = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Nn(Nn({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) In(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jn(e.variantClassNames, e => jn(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1a74xwbo foundry_1a74xwbi",
          variantClassNames: {
            position: {
              top: "foundry_1a74xwbp",
              bottom: "foundry_1a74xwbq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      Ft.gsap.registerPlugin(Zt);
      const Ln = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Dn = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        An = q("var(--foundry_1a74xwb0)");
      var Mn = r(78322);

      function Hn(e, t) {
        var r = t && t.cache ? t.cache : Zn,
          n = t && t.serializer ? t.serializer : qn;
        return (t && t.strategy ? t.strategy : Fn)(e, {
          cache: r,
          serializer: n
        })
      }

      function Bn(e, t, r, n) {
        var o, a = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          i = t.get(a);
        return void 0 === i && (i = e.call(this, n), t.set(a, i)), i
      }

      function zn(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          a = t.get(o);
        return void 0 === a && (a = e.apply(this, n), t.set(o, a)), a
      }

      function Vn(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function Fn(e, t) {
        return Vn(e, this, 1 === e.length ? Bn : zn, t.cache.create(), t.serializer)
      }
      var qn = function() {
        return JSON.stringify(arguments)
      };

      function Un() {
        this.cache = Object.create(null)
      }
      Un.prototype.get = function(e) {
        return this.cache[e]
      }, Un.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Gn, Xn, Kn, Wn, Zn = {
          create: function() {
            return new Un
          }
        },
        $n = {
          variadic: function(e, t) {
            return Vn(e, this, zn, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Vn(e, this, Bn, t.cache.create(), t.serializer)
          }
        };

      function Yn(e) {
        return e.type === Xn.literal
      }

      function Qn(e) {
        return e.type === Xn.argument
      }

      function Jn(e) {
        return e.type === Xn.number
      }

      function eo(e) {
        return e.type === Xn.date
      }

      function to(e) {
        return e.type === Xn.time
      }

      function ro(e) {
        return e.type === Xn.select
      }

      function no(e) {
        return e.type === Xn.plural
      }

      function oo(e) {
        return e.type === Xn.pound
      }

      function ao(e) {
        return e.type === Xn.tag
      }

      function io(e) {
        return !(!e || "object" != typeof e || e.type !== Kn.number)
      }

      function so(e) {
        return !(!e || "object" != typeof e || e.type !== Kn.dateTime)
      }(Wn = Gn || (Gn = {}))[Wn.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Wn[Wn.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Wn[Wn.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Wn[Wn.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Wn[Wn.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Wn[Wn.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Wn[Wn.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Wn[Wn.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Wn[Wn.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Wn[Wn.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Wn[Wn.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Wn[Wn.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Wn[Wn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Wn[Wn.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Wn[Wn.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Wn[Wn.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Wn[Wn.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Wn[Wn.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Wn[Wn.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Wn[Wn.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Wn[Wn.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Wn[Wn.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Wn[Wn.INVALID_TAG = 23] = "INVALID_TAG", Wn[Wn.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Wn[Wn.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Wn[Wn.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(Xn || (Xn = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Kn || (Kn = {}));
      var lo = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        co = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function uo(e) {
        var t = {};
        return e.replace(co, function(e) {
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
        }), t
      }
      var fo = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function ho(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, n = e.split(fo).filter(function(e) {
            return e.length > 0
          }); r < n.length; r++) {
          var o = n[r].split("/");
          if (0 === o.length) throw new Error("Invalid number skeleton");
          for (var a = o[0], i = o.slice(1), s = 0, l = i; s < l.length; s++)
            if (0 === l[s].length) throw new Error("Invalid number skeleton");
          t.push({
            stem: a,
            options: i
          })
        }
        return t
      }

      function po(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var mo = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        vo = /^(@+)?(\+|#+)?[rs]?$/g,
        yo = /(\*)(0+)|(#+)(0+)|(0+)/g,
        go = /^(0+)$/;

      function bo(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(vo, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function _o(e) {
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

      function wo(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !go.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Po(e) {
        return _o(e) || {}
      }

      function Eo(e) {
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
              t.style = "unit", t.unit = po(o.options[0]);
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
              t = (0, Mn.__assign)((0, Mn.__assign)((0, Mn.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, Mn.__assign)((0, Mn.__assign)({}, e), Po(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, Mn.__assign)((0, Mn.__assign)((0, Mn.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, Mn.__assign)((0, Mn.__assign)({}, e), Po(t))
              }, {}));
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
              o.options[0].replace(yo, function(e, r, n, o, a, i) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && a) throw new Error("We currently do not support maximum integer digits");
                  if (i) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (go.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (mo.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(mo, function(e, r, n, o, a, i) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : a && i ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + i.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var a = o.options[0];
            "w" === a ? t = (0, Mn.__assign)((0, Mn.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : a && (t = (0, Mn.__assign)((0, Mn.__assign)({}, t), bo(a)))
          } else if (vo.test(o.stem)) t = (0, Mn.__assign)((0, Mn.__assign)({}, t), bo(o.stem));
          else {
            var i = _o(o.stem);
            i && (t = (0, Mn.__assign)((0, Mn.__assign)({}, t), i));
            var s = wo(o.stem);
            s && (t = (0, Mn.__assign)((0, Mn.__assign)({}, t), s))
          }
        }
        return t
      }
      var xo, Co = {
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

      function So(e) {
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
        return "root" !== n && (r = e.maximize().region), (Co[r || ""] || Co[n || ""] || Co["".concat(n, "-001")] || Co["001"])[0]
      }
      var To = new RegExp("^".concat(lo.source, "*")),
        Oo = new RegExp("".concat(lo.source, "*$"));

      function Ro(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var No = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        jo = !!String.fromCodePoint,
        Io = !!Object.fromEntries,
        ko = !!String.prototype.codePointAt,
        Lo = !!String.prototype.trimStart,
        Do = !!String.prototype.trimEnd,
        Ao = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Mo = !0;
      try {
        Mo = "a" === (null === (xo = Go("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === xo ? void 0 : xo[0])
      } catch (e) {
        Mo = !1
      }
      var Ho, Bo = No ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        zo = jo ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, a = 0; o > a;) {
            if ((r = e[a++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        Vo = Io ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              a = o[0],
              i = o[1];
            t[a] = i
          }
          return t
        },
        Fo = ko ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        qo = Lo ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(To, "")
        },
        Uo = Do ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Oo, "")
        };

      function Go(e, t) {
        return new RegExp(e, t)
      }
      if (Mo) {
        var Xo = Go("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Ho = function(e, t) {
          var r;
          return Xo.lastIndex = t, null !== (r = Xo.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Ho = function(e, t) {
        for (var r = [];;) {
          var n = Fo(e, t);
          if (void 0 === n || Qo(n) || Jo(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return zo.apply(void 0, r)
      };
      var Ko, Wo, Zo = function() {
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
              if ((a = this.parseArgument(e, r)).err) return a;
              n.push(a.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(Gn.UNMATCHED_CLOSING_TAG, Ro(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && $o(this.peek() || 0)) {
                  if ((a = this.parseTag(e, t)).err) return a;
                  n.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(e, t)).err) return a;
                  n.push(a.val)
                }
              } else {
                var i = this.clonePosition();
                this.bump(), n.push({
                  type: Xn.pound,
                  location: Ro(i, this.clonePosition())
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
              type: Xn.literal,
              value: "<".concat(n, "/>"),
              location: Ro(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var a = o.val,
              i = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !$o(this.char())) return this.error(Gn.INVALID_TAG, Ro(i, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Gn.UNMATCHED_CLOSING_TAG, Ro(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Xn.tag,
                  value: n,
                  children: a,
                  location: Ro(r, this.clonePosition())
                },
                err: null
              } : this.error(Gn.INVALID_TAG, Ro(i, this.clonePosition())))
            }
            return this.error(Gn.UNCLOSED_TAG, Ro(r, this.clonePosition()))
          }
          return this.error(Gn.INVALID_TAG, Ro(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && Yo(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) n += a;
              else {
                var i = this.tryParseLeftAngleBracket();
                if (!i) break;
                n += i
              }
            }
          }
          var s = Ro(r, this.clonePosition());
          return {
            val: {
              type: Xn.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && ($o(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return zo.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), zo(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Gn.EXPECT_ARGUMENT_CLOSING_BRACE, Ro(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Gn.EMPTY_ARGUMENT, Ro(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Gn.MALFORMED_ARGUMENT, Ro(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Gn.EXPECT_ARGUMENT_CLOSING_BRACE, Ro(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Xn.argument,
                  value: n,
                  location: Ro(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Gn.EXPECT_ARGUMENT_CLOSING_BRACE, Ro(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Gn.MALFORMED_ARGUMENT, Ro(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Ho(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Ro(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, a = this.clonePosition(),
            i = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (i) {
            case "":
              return this.error(Gn.EXPECT_ARGUMENT_TYPE, Ro(a, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Uo(y.val)).length) return this.error(Gn.EXPECT_ARGUMENT_STYLE, Ro(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Ro(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = Ro(n, this.clonePosition());
              if (l && Bo(null == l ? void 0 : l.style, "::", 0)) {
                var d = qo(l.style.slice(2));
                if ("number" === i) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: Xn.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Gn.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === o;) a++, n++;
                      var i = 1 + (1 & a),
                        s = a < 2 ? 1 : 3 + (a >> 1),
                        l = So(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; i-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: Kn.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? uo(f) : {}
                };
                return {
                  val: {
                    type: "date" === i ? Xn.date : Xn.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === i ? Xn.number : "date" === i ? Xn.date : Xn.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Gn.EXPECT_SELECT_ARGUMENT_OPTIONS, Ro(p, (0, Mn.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== i && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Gn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ro(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Gn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Gn.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, i, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = Ro(n, this.clonePosition());
              return "select" === i ? {
                val: {
                  type: Xn.select,
                  value: r,
                  options: Vo(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Xn.plural,
                  value: r,
                  options: Vo(b.val),
                  offset: v,
                  pluralType: "plural" === i ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Gn.INVALID_ARGUMENT_TYPE, Ro(a, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Gn.EXPECT_ARGUMENT_CLOSING_BRACE, Ro(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Gn.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ro(r, this.clonePosition()));
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
            r = ho(e)
          } catch (e) {
            return this.error(Gn.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Kn.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Eo(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, a = !1, i = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Gn.EXPECT_PLURAL_ARGUMENT_SELECTOR, Gn.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Ro(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Gn.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Gn.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (a = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Gn.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Gn.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ro(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            i.push([l, {
              value: h.val,
              location: Ro(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === i.length ? this.error("select" === t ? Gn.EXPECT_SELECT_ARGUMENT_SELECTOR : Gn.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ro(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(Gn.MISSING_OTHER_CLAUSE, Ro(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, a = 0; !this.isEOF();) {
            var i = this.char();
            if (!(i >= 48 && i <= 57)) break;
            o = !0, a = 10 * a + (i - 48), this.bump()
          }
          var s = Ro(n, this.clonePosition());
          return o ? Ao(a *= r) ? {
            val: a,
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
          var t = Fo(this.message, e);
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
          if (Bo(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Qo(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function $o(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Yo(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function Qo(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Jo(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function ea(e) {
        e.forEach(function(e) {
          if (delete e.location, ro(e) || no(e))
            for (var t in e.options) delete e.options[t].location, ea(e.options[t].value);
          else Jn(e) && io(e.style) || (eo(e) || to(e)) && so(e.style) ? delete e.style.location : ao(e) && ea(e.children)
        })
      }

      function ta(e, t) {
        void 0 === t && (t = {}), t = (0, Mn.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new Zo(e, t).parse();
        if (r.err) {
          var n = SyntaxError(Gn[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || ea(r.val), r.val
      }(Wo = Ko || (Ko = {})).MISSING_VALUE = "MISSING_VALUE", Wo.INVALID_VALUE = "INVALID_VALUE", Wo.MISSING_INTL_API = "MISSING_INTL_API";
      var ra, na = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, Mn.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        oa = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), Ko.INVALID_VALUE, o) || this
          }
          return (0, Mn.__extends)(t, e), t
        }(na),
        aa = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), Ko.INVALID_VALUE, n) || this
          }
          return (0, Mn.__extends)(t, e), t
        }(na),
        ia = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), Ko.MISSING_VALUE, r) || this
          }
          return (0, Mn.__extends)(t, e), t
        }(na);

      function sa(e) {
        return "function" == typeof e
      }

      function la(e, t, r, n, o, a, i) {
        if (1 === e.length && Yn(e[0])) return [{
          type: ra.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (Yn(u)) s.push({
            type: ra.literal,
            value: u.value
          });
          else if (oo(u)) "number" == typeof a && s.push({
            type: ra.literal,
            value: r.getNumberFormat(t).format(a)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new ia(d, i);
            var f = o[d];
            if (Qn(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? ra.literal : ra.object,
              value: f
            });
            else if (eo(u)) {
              var h = "string" == typeof u.style ? n.date[u.style] : so(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: ra.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (to(u)) h = "string" == typeof u.style ? n.time[u.style] : so(u.style) ? u.style.parsedOptions : n.time.medium, s.push({
              type: ra.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (Jn(u))(h = "string" == typeof u.style ? n.number[u.style] : io(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: ra.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (ao(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!sa(v)) throw new aa(m, "function", i);
                var y = v(la(p, t, r, n, o, a).map(function(e) {
                  return e.value
                }));
                Array.isArray(y) || (y = [y]), s.push.apply(s, y.map(function(e) {
                  return {
                    type: "string" == typeof e ? ra.literal : ra.object,
                    value: e
                  }
                }))
              }
              if (ro(u)) {
                if (!(g = u.options[f] || u.options.other)) throw new oa(u.value, f, Object.keys(u.options), i);
                s.push.apply(s, la(g.value, t, r, n, o))
              } else if (no(u)) {
                var g;
                if (!(g = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new na('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Ko.MISSING_INTL_API, i);
                  var b = r.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  g = u.options[b] || u.options.other
                }
                if (!g) throw new oa(u.value, f, Object.keys(u.options), i);
                s.push.apply(s, la(g.value, t, r, n, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce(function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === ra.literal && t.type === ra.literal ? r.value += t.value : e.push(t), e
        }, []);
        var _
      }

      function ca(e) {
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
      }(ra || (ra = {}));
      var ua, da = function() {
        function e(t, r, n, o) {
          void 0 === r && (r = e.defaultLocale);
          var a, i = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = i.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce(function(e, t) {
                return e.length && t.type === ra.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }, []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return la(i.ast, i.locales, i.formatters, i.formats, e, void 0, i.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = i.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(i.locales)[0]
              }
            }, this.getAst = function() {
              return i.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var s = o || {},
              l = (s.formatters, (0, Mn.__rest)(s, ["formatters"]));
            this.ast = e.__parse(t, (0, Mn.__assign)((0, Mn.__assign)({}, l), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = function(e, t) {
            return t ? Object.keys(e).reduce(function(r, n) {
              return r[n] = function(e, t) {
                return t ? (0, Mn.__assign)((0, Mn.__assign)((0, Mn.__assign)({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
                  return r[n] = (0, Mn.__assign)((0, Mn.__assign)({}, e[n]), t[n] || {}), r
                }, {})) : e
              }(e[n], t[n]), r
            }, (0, Mn.__assign)({}, e)) : e
          }(e.formats, n), this.formatters = o && o.formatters || (void 0 === (a = this.formatterCache) && (a = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: Hn(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
            }, {
              cache: ca(a.number),
              strategy: $n.variadic
            }),
            getDateTimeFormat: Hn(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
            }, {
              cache: ca(a.dateTime),
              strategy: $n.variadic
            }),
            getPluralRules: Hn(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
            }, {
              cache: ca(a.pluralRules),
              strategy: $n.variadic
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
        }, e.__parse = ta, e.formats = {
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
      }(ua || (ua = {}));
      var fa = function(e) {
          function t(r, n, o) {
            var a = this,
              i = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (a = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(i ? "\n".concat(i.message, "\n").concat(i.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(a, t), a
          }
          return (0, Mn.__extends)(t, e), t
        }(Error),
        ha = function(e) {
          function t(t, r) {
            return e.call(this, ua.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, Mn.__extends)(t, e), t
        }(fa),
        pa = function(e) {
          function t(t, r) {
            return e.call(this, ua.INVALID_CONFIG, t, r) || this
          }
          return (0, Mn.__extends)(t, e), t
        }(fa),
        ma = function(e) {
          function t(t, r) {
            return e.call(this, ua.MISSING_DATA, t, r) || this
          }
          return (0, Mn.__extends)(t, e), t
        }(fa),
        va = function(e) {
          function t(t, r, n) {
            var o = e.call(this, ua.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, Mn.__extends)(t, e), t
        }(fa),
        ya = function(e) {
          function t(t, r, n, o) {
            var a = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return a.descriptor = n, a.locale = r, a
          }
          return (0, Mn.__extends)(t, e), t
        }(va),
        ga = function(e) {
          function t(t, r) {
            var n = e.call(this, ua.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            }).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, Mn.__extends)(t, e), t
        }(fa);

      function ba(e, t, r) {
        return void 0 === r && (r = {}), t.reduce(function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }, {})
      }
      var _a = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function wa(e) {
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

      function Pa(e, t, r, n) {
        var o, a = e && e[t];
        if (a && (o = a[r]), o) return o;
        n(new ha("No ".concat(t, " format named: ").concat(r)))
      }

      function Ea(e, t) {
        var r = t && t.cache ? t.cache : Na,
          n = t && t.serializer ? t.serializer : Oa;
        return (t && t.strategy ? t.strategy : Ta)(e, {
          cache: r,
          serializer: n
        })
      }

      function xa(e, t, r, n) {
        var o, a = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          i = t.get(a);
        return void 0 === i && (i = e.call(this, n), t.set(a, i)), i
      }

      function Ca(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          a = t.get(o);
        return void 0 === a && (a = e.apply(this, n), t.set(o, a)), a
      }

      function Sa(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function Ta(e, t) {
        return Sa(e, this, 1 === e.length ? xa : Ca, t.cache.create(), t.serializer)
      }
      var Oa = function() {
        return JSON.stringify(arguments)
      };

      function Ra() {
        this.cache = Object.create(null)
      }
      Ra.prototype.get = function(e) {
        return this.cache[e]
      }, Ra.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Na = {
          create: function() {
            return new Ra
          }
        },
        ja = {
          variadic: function(e, t) {
            return Sa(e, this, Ca, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Sa(e, this, xa, t.cache.create(), t.serializer)
          }
        };

      function Ia(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      Ea(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ja.variadic
      }), Ea(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ja.variadic
      }), Ea(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ja.variadic
      }), Ea(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ja.variadic
      }), Ea(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ja.variadic
      });
      var ka = (0, Mn.__assign)((0, Mn.__assign)({}, _a), {
        textComponent: M.Fragment
      });
      r(35255);
      var La = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? M.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = M.createContext(null)),
        Da = (La.Consumer, La.Provider),
        Aa = La;

      function Ma(e, t) {
        return Object.keys(e).reduce(function(r, n) {
          return r[n] = (0, Mn.__assign)({
            timeZone: t
          }, e[n]), r
        }, {})
      }

      function Ha(e, t) {
        return Object.keys((0, Mn.__assign)((0, Mn.__assign)({}, e), t)).reduce(function(r, n) {
          return r[n] = (0, Mn.__assign)((0, Mn.__assign)({}, e[n] || {}), t[n] || {}), r
        }, {})
      }

      function Ba(e, t) {
        if (!t) return e;
        var r = da.formats;
        return (0, Mn.__assign)((0, Mn.__assign)((0, Mn.__assign)({}, r), e), {
          date: Ha(Ma(r.date, t), Ma(e.date || {}, t)),
          time: Ha(Ma(r.time, t), Ma(e.time || {}, t))
        })
      }
      Hn(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: $n.variadic
      }), Hn(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: $n.variadic
      }), Hn(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: $n.variadic
      }), Hn(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: $n.variadic
      }), Hn(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: $n.variadic
      });
      var za = function(e, t, r, n, o) {
          var a = e.locale,
            i = e.formats,
            s = e.messages,
            l = e.defaultLocale,
            c = e.defaultFormats,
            u = e.fallbackOnEmptyString,
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
          if (Array.isArray(y) && 1 === y.length && y[0].type === Xn.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, Mn.__assign)((0, Mn.__assign)({}, h), n || {}), i = Ba(i, f), c = Ba(c, f), !y) {
            if (!1 === u && "" === y) return y;
            if ((!m || a && a.toLowerCase() !== l.toLowerCase()) && d(new ga(r, a)), m) try {
              return t.getMessageFormat(m, l, c, o).format(n)
            } catch (e) {
              return d(new ya('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), a, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, a, i, (0, Mn.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new ya('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), a, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(n)
          } catch (e) {
            d(new ya('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), a, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        Va = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function Fa(e, t, r) {
        var n = e.locale,
          o = e.formats,
          a = e.onError;
        void 0 === r && (r = {});
        var i = r.format,
          s = i && Pa(o, "number", i, a) || {};
        return t(n, ba(r, Va, s))
      }

      function qa(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return Fa(e, t, n).format(r)
        } catch (t) {
          e.onError(new va("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function Ua(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return Fa(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new va("Error formatting number.", e.locale, t))
        }
        return []
      }
      var Ga = ["numeric", "style"];

      function Xa(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new na('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Ko.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              a = e.onError;
            void 0 === r && (r = {});
            var i = r.format,
              s = !!i && Pa(o, "relative", i, a) || {};
            return t(n, ba(r, Ga, s))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new va("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var Ka = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Wa(e, t, r, n) {
        var o = e.locale,
          a = e.formats,
          i = e.onError,
          s = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          c = (0, Mn.__assign)((0, Mn.__assign)({}, s && {
            timeZone: s
          }), l && Pa(a, t, l, i)),
          u = ba(n, Ka, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, Mn.__assign)((0, Mn.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, u)
      }

      function Za(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Wa(e, "date", t, i).format(s)
        } catch (t) {
          e.onError(new va("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function $a(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Wa(e, "time", t, i).format(s)
        } catch (t) {
          e.onError(new va("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function Ya(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          i = r[2],
          s = void 0 === i ? {} : i,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = ba(s, Ka, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, a)
        } catch (t) {
          u(new va("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Qa(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Wa(e, "date", t, i).formatToParts(s)
        } catch (t) {
          e.onError(new va("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Ja(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Wa(e, "time", t, i).formatToParts(s)
        } catch (t) {
          e.onError(new va("Error formatting time.", e.locale, t))
        }
        return []
      }
      var ei = ["type"];

      function ti(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || a(new na('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Ko.MISSING_INTL_API));
        var i = ba(n, ei);
        try {
          return t(o, i).select(r)
        } catch (e) {
          a(new va("Error formatting plural.", o, e))
        }
        return "other"
      }
      var ri = ["type", "style"],
        ni = Date.now();

      function oi(e, t, r, n) {
        void 0 === n && (n = {});
        var o = ai(e, t, r, n).reduce(function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function ai(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || a(new na('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Ko.MISSING_INTL_API));
        var i = ba(n, ri);
        try {
          var s = {},
            l = r.map(function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(ni, "_").concat(e, "_").concat(ni)
                }(t);
                return s[r] = e, r
              }
              return String(e)
            });
          return t(o, i).formatToParts(l).map(function(e) {
            return "literal" === e.type ? e : (0, Mn.__assign)((0, Mn.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          })
        } catch (e) {
          a(new va("Error formatting list.", o, e))
        }
        return r
      }
      var ii, si, li, ci = ["style", "type", "fallback", "languageDisplay"];

      function ui(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        Intl.DisplayNames || a(new na('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Ko.MISSING_INTL_API));
        var i = ba(n, ci);
        try {
          return t(o, i).of(r)
        } catch (e) {
          a(new va("Error formatting display name.", o, e))
        }
      }

      function di(e, t) {
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
              o = Hn(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
              }, {
                cache: wa(e.dateTime),
                strategy: $n.variadic
              }),
              a = Hn(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
              }, {
                cache: wa(e.number),
                strategy: $n.variadic
              }),
              i = Hn(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, Mn.__spreadArray)([void 0], t, !1)))
              }, {
                cache: wa(e.pluralRules),
                strategy: $n.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: a,
              getMessageFormat: Hn(function(e, t, r, n) {
                return new da(e, t, r, (0, Mn.__assign)({
                  formatters: {
                    getNumberFormat: a,
                    getDateTimeFormat: o,
                    getPluralRules: i
                  }
                }, n || {}))
              }, {
                cache: wa(e.message),
                strategy: $n.variadic
              }),
              getRelativeTimeFormat: Hn(function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, Mn.__spreadArray)([void 0], e, !1)))
              }, {
                cache: wa(e.relativeTime),
                strategy: $n.variadic
              }),
              getPluralRules: i,
              getListFormat: Hn(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, Mn.__spreadArray)([void 0], e, !1)))
              }, {
                cache: wa(e.list),
                strategy: $n.variadic
              }),
              getDisplayNames: Hn(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, Mn.__spreadArray)([void 0], e, !1)))
              }, {
                cache: wa(e.displayNames),
                strategy: $n.variadic
              })
            }
          }(t),
          n = (0, Mn.__assign)((0, Mn.__assign)({}, _a), e),
          o = n.locale,
          a = n.defaultLocale,
          i = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && i ? i(new ma('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && i && i(new ma('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (i && i(new pa('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, Mn.__assign)((0, Mn.__assign)({}, n), {
            formatters: r,
            formatNumber: qa.bind(null, n, r.getNumberFormat),
            formatNumberToParts: Ua.bind(null, n, r.getNumberFormat),
            formatRelativeTime: Xa.bind(null, n, r.getRelativeTimeFormat),
            formatDate: Za.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: Qa.bind(null, n, r.getDateTimeFormat),
            formatTime: $a.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: Ya.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: Ja.bind(null, n, r.getDateTimeFormat),
            formatPlural: ti.bind(null, n, r.getPluralRules),
            formatMessage: za.bind(null, n, r),
            $t: za.bind(null, n, r),
            formatList: oi.bind(null, n, r.getListFormat),
            formatListToParts: ai.bind(null, n, r.getListFormat),
            formatDisplayName: ui.bind(null, n, r.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(ii || (ii = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(si || (si = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(li || (li = {}));
      var fi, hi = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        pi = {
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

      function mi(e) {
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
        return "root" !== n && (r = e.maximize().region), (pi[r || ""] || pi[n || ""] || pi["".concat(n, "-001")] || pi["001"])[0]
      }
      var vi = new RegExp("^".concat(hi.source, "*")),
        yi = new RegExp("".concat(hi.source, "*$"));

      function gi(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var bi = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        _i = !!String.fromCodePoint,
        wi = !!Object.fromEntries,
        Pi = !!String.prototype.codePointAt,
        Ei = !!String.prototype.trimStart,
        xi = !!String.prototype.trimEnd,
        Ci = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Si = !0;
      try {
        Si = "a" === (null === (fi = Di("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === fi ? void 0 : fi[0])
      } catch (e) {
        Si = !1
      }
      var Ti, Oi, Ri = bi ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Ni = _i ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, a = 0; o > a;) {
            if ((r = e[a++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        ji = wi ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              a = o[0],
              i = o[1];
            t[a] = i
          }
          return t
        },
        Ii = Pi ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        ki = Ei ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(vi, "")
        },
        Li = xi ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(yi, "")
        };

      function Di(e, t) {
        return new RegExp(e, t)
      }
      if (Si) {
        var Ai = Di("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Ti = function(e, t) {
          var r;
          return Ai.lastIndex = t, null !== (r = Ai.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Ti = function(e, t) {
        for (var r = [];;) {
          var n = Ii(e, t);
          if (void 0 === n || Bi(n) || zi(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Ni.apply(void 0, r)
      };

      function Mi(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Hi(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function Bi(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function zi(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Vi(e) {
        return e ? Object.keys(e).reduce(function(t, r) {
          var n, o = e[r];
          return t[r] = "function" == typeof o ? (n = o, function(e) {
            return n(M.Children.toArray(e))
          }) : o, t
        }, {}) : e
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
              if ((a = this.parseArgument(e, r)).err) return a;
              n.push(a.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(ii.UNMATCHED_CLOSING_TAG, gi(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Mi(this.peek() || 0)) {
                  if ((a = this.parseTag(e, t)).err) return a;
                  n.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(e, t)).err) return a;
                  n.push(a.val)
                }
              } else {
                var i = this.clonePosition();
                this.bump(), n.push({
                  type: si.pound,
                  location: gi(i, this.clonePosition())
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
              type: si.literal,
              value: "<".concat(n, "/>"),
              location: gi(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var a = o.val,
              i = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Mi(this.char())) return this.error(ii.INVALID_TAG, gi(i, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(ii.UNMATCHED_CLOSING_TAG, gi(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: si.tag,
                  value: n,
                  children: a,
                  location: gi(r, this.clonePosition())
                },
                err: null
              } : this.error(ii.INVALID_TAG, gi(i, this.clonePosition())))
            }
            return this.error(ii.UNCLOSED_TAG, gi(r, this.clonePosition()))
          }
          return this.error(ii.INVALID_TAG, gi(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && Hi(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) n += a;
              else {
                var i = this.tryParseLeftAngleBracket();
                if (!i) break;
                n += i
              }
            }
          }
          var s = gi(r, this.clonePosition());
          return {
            val: {
              type: si.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Mi(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Ni.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Ni(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(ii.EXPECT_ARGUMENT_CLOSING_BRACE, gi(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(ii.EMPTY_ARGUMENT, gi(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(ii.MALFORMED_ARGUMENT, gi(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(ii.EXPECT_ARGUMENT_CLOSING_BRACE, gi(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: si.argument,
                  value: n,
                  location: gi(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ii.EXPECT_ARGUMENT_CLOSING_BRACE, gi(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(ii.MALFORMED_ARGUMENT, gi(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Ti(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: gi(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, a = this.clonePosition(),
            i = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (i) {
            case "":
              return this.error(ii.EXPECT_ARGUMENT_TYPE, gi(a, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Li(y.val)).length) return this.error(ii.EXPECT_ARGUMENT_STYLE, gi(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: gi(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = gi(n, this.clonePosition());
              if (l && Ri(null == l ? void 0 : l.style, "::", 0)) {
                var d = ki(l.style.slice(2));
                if ("number" === i) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: si.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(ii.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === o;) a++, n++;
                      var i = 1 + (1 & a),
                        s = a < 2 ? 1 : 3 + (a >> 1),
                        l = mi(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; i-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: li.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? uo(f) : {}
                };
                return {
                  val: {
                    type: "date" === i ? si.date : si.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === i ? si.number : "date" === i ? si.date : si.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(ii.EXPECT_SELECT_ARGUMENT_OPTIONS, gi(p, (0, Mn.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== i && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(ii.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, gi(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(ii.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ii.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, i, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = gi(n, this.clonePosition());
              return "select" === i ? {
                val: {
                  type: si.select,
                  value: r,
                  options: ji(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: si.plural,
                  value: r,
                  options: ji(b.val),
                  offset: v,
                  pluralType: "plural" === i ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(ii.INVALID_ARGUMENT_TYPE, gi(a, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(ii.EXPECT_ARGUMENT_CLOSING_BRACE, gi(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(ii.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, gi(r, this.clonePosition()));
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
            r = ho(e)
          } catch (e) {
            return this.error(ii.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: li.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Eo(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, a = !1, i = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(ii.EXPECT_PLURAL_ARGUMENT_SELECTOR, ii.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = gi(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? ii.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ii.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (a = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? ii.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ii.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, gi(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            i.push([l, {
              value: h.val,
              location: gi(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === i.length ? this.error("select" === t ? ii.EXPECT_SELECT_ARGUMENT_SELECTOR : ii.EXPECT_PLURAL_ARGUMENT_SELECTOR, gi(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(ii.MISSING_OTHER_CLAUSE, gi(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, a = 0; !this.isEOF();) {
            var i = this.char();
            if (!(i >= 48 && i <= 57)) break;
            o = !0, a = 10 * a + (i - 48), this.bump()
          }
          var s = gi(n, this.clonePosition());
          return o ? Ci(a *= r) ? {
            val: a,
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
          var t = Ii(this.message, e);
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
          if (Ri(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Bi(this.char());) this.bump()
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
      }(Oi || (Oi = {}));
      var Fi = function(e, t, r, n) {
          for (var o = [], a = 4; a < arguments.length; a++) o[a - 4] = arguments[a];
          var i = Vi(n),
            s = za.apply(void 0, (0, Mn.__spreadArray)([e, t, r, i], o, !1));
          return Array.isArray(s) ? M.Children.toArray(s) : s
        },
        qi = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, Mn.__rest)(e, ["defaultRichTextElements"]),
            o = Vi(r),
            a = di((0, Mn.__assign)((0, Mn.__assign)((0, Mn.__assign)({}, ka), n), {
              defaultRichTextElements: o
            }), t),
            i = {
              locale: a.locale,
              timeZone: a.timeZone,
              fallbackOnEmptyString: a.fallbackOnEmptyString,
              formats: a.formats,
              defaultLocale: a.defaultLocale,
              defaultFormats: a.defaultFormats,
              messages: a.messages,
              onError: a.onError,
              defaultRichTextElements: o
            };
          return (0, Mn.__assign)((0, Mn.__assign)({}, a), {
            formatMessage: Fi.bind(null, i, a.formatters),
            $t: Fi.bind(null, i, a.formatters)
          })
        };

      function Ui(e) {
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
      var Gi = function(e) {
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
            intl: qi(Ui(t.props), t.cache),
            prevConfig: Ui(t.props)
          }, t
        }
        return (0, Mn.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = Ui(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var r = Object.keys(e),
              n = Object.keys(t),
              o = r.length;
            if (n.length !== o) return !1;
            for (var a = 0; a < o; a++) {
              var i = r[a];
              if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i)) return !1
            }
            return !0
          }(r, o) ? null : {
            intl: qi(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return Ia(this.state.intl), M.createElement(Da, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = ka, t
      }(M.PureComponent);
      const Xi = Gi;

      function Ki() {
        var e = M.useContext(Aa);
        return Ia(e), e
      }
      var Wi, Zi;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Wi || (Wi = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(Zi || (Zi = {}));
      var $i = function(e) {
        var t = Ki(),
          r = e.value,
          n = e.children,
          o = (0, Mn.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function Yi(e) {
        var t = function(t) {
          var r = Ki(),
            n = t.value,
            o = t.children,
            a = (0, Mn.__rest)(t, ["value", "children"]),
            i = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(i, a) : r.formatTimeToParts(i, a))
        };
        return t.displayName = Zi[e], t
      }

      function Qi(e) {
        var t = function(t) {
          var r = Ki(),
            n = t.value,
            o = t.children,
            a = (0, Mn.__rest)(t, ["value", "children"]),
            i = r[e](n, a);
          if ("function" == typeof o) return o(i);
          var s = r.textComponent || M.Fragment;
          return M.createElement(s, null, i)
        };
        return t.displayName = Wi[e], t
      }
      $i.displayName = "FormattedNumberParts", $i.displayName = "FormattedNumberParts", Qi("formatDate"), Qi("formatTime"), Qi("formatNumber"), Qi("formatList"), Qi("formatDisplayName"), Yi("formatDate"), Yi("formatTime");
      const Ji = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, a] = (0, M.useState)(null);
          return (0, M.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              a(e.default)
            })
          }, [r]), o ? (0, _.jsx)(Xi, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        es = {
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
      var ts = r(25778);
      class rs {
        slide;
        currZoomLevel = 1;
        center = {
          x: 0,
          y: 0
        };
        max = {
          x: 0,
          y: 0
        };
        min = {
          x: 0,
          y: 0
        };
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        update(e) {
          this.currZoomLevel = e, this.slide.width ? (this.updateAxis("x"), this.updateAxis("y")) : this.reset()
        }
        updateAxis(e) {
          const t = this.slide["x" === e ? "width" : "height"] * this.currZoomLevel,
            r = this.slide.panAreaSize[e];
          this.center[e] = Math.round((r - t) / 2), this.max[e] = t > r ? Math.round(r - t) : this.center[e], this.min[e] = t > r ? 0 : this.center[e]
        }
        reset() {
          this.center = {
            x: 0,
            y: 0
          }, this.max = {
            x: 0,
            y: 0
          }, this.min = {
            x: 0,
            y: 0
          }
        }
        correctPan(e, t, r = !1) {
          return r ? t : ln(t, this.max[e], this.min[e])
        }
      }
      class ns {
        panAreaSize = {
          x: 0,
          y: 0
        };
        elementSize = {
          x: 0,
          y: 0
        };
        fit = 1;
        fill = 1;
        vFill = 1;
        initial = 1;
        max = 1;
        min = 1;
        step = 1;
        options;
        constructor({
          options: e
        }) {
          this.options = e
        }
        update(e, t) {
          this.elementSize = e, this.panAreaSize = t;
          const r = t.x / this.elementSize.x,
            n = t.y / this.elementSize.y;
          this.fit = Math.min(1, r < n ? r : n), this.fill = Math.min(1, r > n ? r : n), this.vFill = Math.min(1, n), this.initial = this.getInitial(), this.max = Math.max(this.fit, this.initial, this.getMax()), this.min = Math.min(this.fit, this.initial, this.getMin()), this.step = this.fit * (this.options.step / 100)
        }
        getInitial() {
          return this.fit
        }
        getMin() {
          return Math.min(1, this.fit * (this.options.min / 100))
        }
        getMax() {
          return Math.max(1, this.fit * (this.options.max / 100))
        }
      }
      class os {
        eventCallbacks = new Map;
        addEventListener(e, t) {
          this.eventCallbacks.has(e) || this.eventCallbacks.set(e, new Set), this.eventCallbacks.get(e)?.add(t)
        }
        removeEventListener(e, t) {
          this.eventCallbacks.has(e) && this.eventCallbacks.get(e)?.delete(t)
        }
        dispatch(e, t) {
          const r = t || new Event(e);
          return this.eventCallbacks.get(e)?.forEach(e => e(r)), r
        }
      }
      class as {
        slide;
        startPan = {
          x: 0,
          y: 0
        };
        dragAxis = null;
        tapTimer;
        prevTap = {
          x: 0,
          y: 0
        };
        animate = !0;
        dragging = !1;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        setup() {
          this.animate = !0, this.slide.updateOverlayOpacity(1)
        }
        handleDrag(e) {
          e.tap ? this.handleTap(e) : e.first ? (this.dragging = !0, this.start(e)) : e.last ? (this.end(e), this.dragging = !1) : this.change(e)
        }
        start({
          movement: [e, t]
        }) {
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", an(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [r, n]
          } = e, o = t > 1, a = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && a && !o ? (this.setPanWithFriction("y", this.slide.pan.y + n, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && a ? this.setPanWithFriction("x", this.slide.pan.x + r, .35) : (this.setPanWithFriction("x", this.slide.pan.x + r), this.setPanWithFriction("y", this.slide.pan.y + n))
        }
        end(e) {
          const t = e.touches > 1;
          this.slide && this.slide.currZoomLevel > this.slide.zoomLevels.max || t || (this.finishPanGestureForAxis("x", e), this.finishPanGestureForAxis("y", e))
        }
        handleTap({
          event: e,
          xy: [t, r]
        }) {
          const n = {
              x: t,
              y: r
            },
            o = e;
          if (o.type.includes("cancel")) return;
          const a = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const r = Math.abs(e.x - t.x),
              n = Math.abs(e.y - t.y);
            return Math.sqrt(r * r + n * n)
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (an(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(n, o), this.clearTapTimer()
          }, a))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, n]
          } = t, o = "x" === e ? r : n, a = this.slide.pan[e], i = a + o;
          if (this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(a),
              t = this.getVerticalDragRatio(i);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const s = this.slide.bounds.correctPan(e, i);
          a !== s && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = s)
        }
        setPanWithFriction(e, t, r) {
          if (this.slide.bounds.correctPan(e, t) !== t || r) {
            const n = Math.round(t - this.slide.pan[e]);
            this.slide.pan[e] += n * (r || .35)
          } else this.slide.pan[e] = t
        }
        getVerticalDragRatio(e) {
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.y / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class is {
        slide;
        trigger = null;
        thumbnail = null;
        containerOpacity = "1";
        containerBounds = null;
        placeholderFit = "";
        placeholderPosition = "";
        placeholderScale = "";
        placeholderTransform = "";
        width = 0;
        height = 0;
        initialZoom = 0;
        initialPan = {
          x: 0,
          y: 0
        };
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        setup(e, t) {
          this.trigger = e, this.thumbnail = t, this.correctImageSize(), this.setTriggerBounds(), this.setTriggerStyles(), this.setThumbStyles()
        }
        resize() {
          this.setTriggerBounds(), this.correctImageSize(), this.setThumbStyles()
        }
        async loadPlaceholder(e) {
          e.src = this.thumbnail.currentSrc ?? "", await nn(e)
        }
        setTriggerBounds() {
          this.containerBounds = (() => {
            const e = this.trigger.getBoundingClientRect();
            return {
              x: e.x,
              y: e.y,
              w: e.width,
              h: e.height
            }
          })()
        }
        setThumbStyles() {
          const e = getComputedStyle(this.thumbnail);
          this.placeholderFit = e.objectFit, this.placeholderPosition = e.objectPosition, this.placeholderScale = "none" === e.scale ? void 0 : e.scale, this.placeholderTransform = e.transform
        }
        setTriggerStyles() {
          const e = getComputedStyle(this.trigger);
          this.containerOpacity = e.opacity
        }
        correctImageSize() {
          const e = this.thumbnail.naturalWidth,
            t = this.thumbnail.naturalHeight,
            r = this.slide.panAreaSize.x / e,
            n = this.slide.panAreaSize.y / t;
          this.width = n > r ? this.slide.panAreaSize.x : e * n, this.height = r > n ? this.slide.panAreaSize.y : t * r
        }
      }
      class ss {
        slide;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleWheel({
          ctrlKey: e,
          event: t,
          delta: [r, n]
        }) {
          if (e) {
            let e = -n;
            1 === t.deltaMode ? e *= .05 : e *= t.deltaMode ? 1 : .002, e = 2 ** e;
            const r = this.slide.currZoomLevel * e;
            this.slide.zoomTo(r, {
              x: t.x,
              y: t.y
            })
          } else 1 === t.deltaMode && (r *= 18, n *= 18), this.slide.panTo(this.slide.pan.x - r, this.slide.pan.y - n)
        }
      }
      class ls extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class cs extends os {
        slide;
        options;
        constructor({
          slide: e,
          options: t
        }) {
          super(), this.slide = e, this.options = t
        }
        click(e, t) {
          const r = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("click", r, e, t)
        }
        tap(e, t) {
          const r = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("tap", r, e, t)
        }
        doubleTap(e, t) {
          const r = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("doubleTap", r, e, t)
        }
        doClickOrTapAction(e, t, r, n) {
          if (!this.dispatch(e, new ls(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
            case "none":
              break;
            case "close":
              this.slide.dispatch("close");
              break;
            case "zoom":
              this.slide.toggleZoom(r), this.slide.dispatch("animate");
              break;
            case "toggle-controls":
              this.slide.dispatch("toggle-controls");
              break;
            case "zoom-or-close":
              this.slide.currZoomLevel === this.slide.zoomLevels.initial ? this.slide.dispatch("close") : (this.slide.toggleZoom(r), this.slide.dispatch("animate"))
          }
        }
      }
      class us {
        animate = !0;
        pinching = !1;
        slide;
        startPan = {
          x: 0,
          y: 0
        };
        zoomPoint = {
          x: 0,
          y: 0
        };
        startZoomPoint = {
          x: 0,
          y: 0
        };
        startZoomDistance = 0;
        startZoomLevel = 1;
        wasOverFitZoomLevel = !1;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleZoom(e) {
          e.first ? (this.pinching = !0, this.start(e)) : e.last ? (this.end(), this.pinching = !1) : this.change(e)
        }
        start({
          origin: e,
          da: [t]
        }) {
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = on(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, an(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = on(e);
          let o = 1 / this.startZoomDistance * t * this.startZoomLevel;
          o > this.slide.zoomLevels.initial + this.slide.zoomLevels.initial / 15 && (this.wasOverFitZoomLevel = !0), o < r ? this.slide.pinchToClose && !this.wasOverFitZoomLevel && this.startZoomLevel <= this.slide.zoomLevels.initial ? this.slide.updateOverlayOpacity(1 - (r - o) / (r / 1.2)) : o = r - .15 * (r - o) : o > n && (o = n + .05 * (o - n)), this.slide.pan.x = this.calculatePanForZoomLevel("x", o), this.slide.pan.y = this.calculatePanForZoomLevel("y", o), this.slide.setZoomLevel(o, o >= this.slide.zoomLevels.initial)
        }
        end() {
          this.slide.currZoomLevel < this.slide.zoomLevels.initial && !this.wasOverFitZoomLevel && this.slide.pinchToClose ? (this.animate = !1, this.slide.dispatch("close")) : this.correctZoomPan()
        }
        calculatePanForZoomLevel(e, t) {
          const r = t / this.startZoomLevel;
          return this.zoomPoint[e] - (this.startZoomPoint[e] - this.startPan[e]) * r
        }
        correctZoomPan(e) {
          0 === this.zoomPoint.x && (e = !0);
          const t = this.slide.currZoomLevel;
          let r, n = !0;
          t < this.slide.zoomLevels.initial ? r = this.slide.zoomLevels.initial : t > this.slide.zoomLevels.max ? r = this.slide.zoomLevels.max : (n = !1, r = t), this.slide.getControlsOpacity();
          const o = this.slide.getControlsOpacity() < 1,
            a = an({
              x: 0,
              y: 0
            }, this.slide.pan);
          let i = an({
            x: 0,
            y: 0
          }, a);
          var s, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, an(this.startPan, a)), n && (i = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), i = {
            x: this.slide.bounds.correctPan("x", i.x),
            y: this.slide.bounds.correctPan("y", i.y)
          }, this.slide.setZoomLevel(t, !1), l = a, ((s = i).x !== l.x || s.y !== l.y || n || o) && (an(this.slide.pan, i), this.slide.setZoomLevel(r))
        }
      }
      class ds extends os {
        overlayOpacity = 1;
        controlsOpacity = 1;
        width;
        height;
        closing = !1;
        opening = !1;
        pan = {
          x: 0,
          y: 0
        };
        currZoomLevel = 1;
        opener;
        bounds;
        zoomLevels;
        dragHandler;
        zoomHandler;
        scrollWheel;
        tapHandler;
        pinchToClose = !1;
        controlsVisible = !0;
        panAreaSize = {
          get x() {
            return window.innerWidth
          },
          get y() {
            return window.innerHeight
          }
        };
        constructor({
          width: e,
          height: t,
          zoomLevelOptions: r,
          actionOptions: n
        }) {
          super(), this.width = e, this.height = t, this.opener = new is({
            slide: this
          }), this.bounds = new rs({
            slide: this
          }), this.dragHandler = new as({
            slide: this
          }), this.scrollWheel = new ss({
            slide: this
          }), this.zoomHandler = new us({
            slide: this
          }), this.zoomLevels = new ns({
            options: r
          }), this.tapHandler = new cs({
            options: n,
            slide: this
          })
        }
        setup(e, t) {
          this.opener.setup(e, t), this.dragHandler.setup(), this.closing = !1, this.width = this.opener.width, this.height = this.opener.height, this.controlsVisible = !0, this.controlsOpacity = 1, this.calculateSize(), this.bounds.update(this.currZoomLevel)
        }
        resize() {
          this.opener.resize(), this.width = this.opener.width, this.height = this.opener.height, this.currZoomLevel === this.zoomLevels.initial ? (this.calculateSize(), this.zoomAndPanToInitial(), this.getUpdatedContentSize()) : (this.calculateSize(), this.bounds.update(this.currZoomLevel), this.panTo(this.pan.x, this.pan.y))
        }
        close() {
          this.closing = !0, this.opener.resize()
        }
        panTo(e, t, r) {
          this.pan.x = this.bounds.correctPan("x", e, r), this.pan.y = this.bounds.correctPan("y", t, r)
        }
        zoomTo(e, t, r) {
          const n = this.currZoomLevel;
          r || (e = ln(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), sn(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), sn(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), an(this.pan, this.bounds.center)
        }
        toggleControls() {
          this.controlsVisible = !this.controlsVisible, this.controlsOpacity = this.controlsVisible ? 1 : 0
        }
        getControlsOpacity() {
          return this.controlsOpacity
        }
        updateControlsOpacity(e = 1) {
          this.controlsVisible && (this.controlsOpacity = e)
        }
        getOverlayOpacity() {
          return this.overlayOpacity
        }
        updateOverlayOpacity(e = 1) {
          this.overlayOpacity = e, this.updateControlsOpacity(e < 1 ? e - .4 : e)
        }
        setZoomLevel(e, t = !0) {
          this.currZoomLevel = e, this.bounds.update(this.currZoomLevel), t && this.dispatch("zoom")
        }
        calculateSize() {
          this.zoomLevels.update({
            x: this.width,
            y: this.height
          }, this.panAreaSize)
        }
        calculateZoomToPanOffset(e, t, r) {
          if (0 === this.bounds.max[e] - this.bounds.min[e]) return this.bounds.center[e];
          t || (t = this.getPanAreaCenterPoint()), r || (r = this.zoomLevels.initial);
          const n = this.currZoomLevel / r;
          return this.bounds.correctPan(e, (this.pan[e] - t[e]) * n + t[e])
        }
        getCurrentScale() {
          return this.currZoomLevel / this.zoomLevels.initial
        }
        getCurrentTransform() {
          const e = this.getCurrentScale();
          return {
            x: this.pan.x,
            y: this.pan.y,
            scale: e
          }
        }
        getUpdatedContentSize() {
          const e = this.zoomLevels.initial;
          return {
            width: Math.round(this.width * e) || this.panAreaSize.x,
            height: Math.round(this.height * e) || this.panAreaSize.y
          }
        }
        getPanAreaCenterPoint() {
          return {
            x: this.panAreaSize.x / 2,
            y: this.panAreaSize.y / 2
          }
        }
        getCursor() {
          if (!this.opening && !this.closing) switch (this.tapHandler.options.tap) {
            case "zoom":
              return this.currZoomLevel > this.zoomLevels.initial ? "zoom-out" : "zoom-in";
            case "zoom-or-close":
            case "close":
              return "zoom-out"
          }
        }
      }
      const fs = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        hs = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        ps = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        ms = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        vs = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        ys = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        gs = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        bs = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        _s = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        ws = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Ps = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };
      var Es = "foundry_bc732x1";
      const xs = (0, M.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Tn(e, e => r?.(e), [r]), (0, _.jsx)(jt, {
        size: "XS",
        className: (0, Ae.clsx)("foundry_bc732x0", {
          [Es]: t
        }),
        asChild: !0,
        children: (0, _.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Cs = Vs(),
        Ss = e => Ms(e, Cs),
        Ts = Vs();
      Ss.write = e => Ms(e, Ts);
      var Os = Vs();
      Ss.onStart = e => Ms(e, Os);
      var Rs = Vs();
      Ss.onFrame = e => Ms(e, Rs);
      var Ns = Vs();
      Ss.onFinish = e => Ms(e, Ns);
      var js = [];
      Ss.setTimeout = (e, t) => {
        const r = Ss.now() + t,
          n = () => {
            const e = js.findIndex(e => e.cancel == n);
            ~e && js.splice(e, 1), Ds -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return js.splice(Is(r), 0, o), Ds += 1, Hs(), o
      };
      var Is = e => ~(~js.findIndex(t => t.time > e) || ~js.length);
      Ss.cancel = e => {
        Os.delete(e), Rs.delete(e), Ns.delete(e), Cs.delete(e), Ts.delete(e)
      }, Ss.sync = e => {
        As = !0, Ss.batchedUpdates(e), As = !1
      }, Ss.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Ss.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Os.delete(r), t = null
        }, n
      };
      var ks = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Ss.use = e => ks = e, Ss.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Ss.batchedUpdates = e => e(), Ss.catch = console.error, Ss.frameLoop = "always", Ss.advance = () => {
        "demand" !== Ss.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : zs()
      };
      var Ls = -1,
        Ds = 0,
        As = !1;

      function Ms(e, t) {
        As ? (t.delete(e), e(0)) : (t.add(e), Hs())
      }

      function Hs() {
        Ls < 0 && (Ls = 0, "demand" !== Ss.frameLoop && ks(Bs))
      }

      function Bs() {
        ~Ls && (ks(Bs), Ss.batchedUpdates(zs))
      }

      function zs() {
        const e = Ls;
        Ls = Ss.now();
        const t = Is(Ls);
        t && (Fs(js.splice(0, t), e => e.handler()), Ds -= t), Ds ? (Os.flush(), Cs.flush(e ? Math.min(64, Ls - e) : 16.667), Rs.flush(), Ts.flush(), Ns.flush()) : Ls = -1
      }

      function Vs() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Ds += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Ds -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Ds -= t.size, Fs(t, t => t(r) && e.add(t)), Ds += e.size, t = e)
          }
        }
      }

      function Fs(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Ss.catch(e)
          }
        })
      }
      var qs = Object.defineProperty,
        Us = {};

      function Gs() {}((e, t) => {
        for (var r in t) qs(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Us, {
        assign: () => al,
        colors: () => rl,
        createStringInterpolator: () => Qs,
        skipAnimation: () => nl,
        to: () => Js,
        willAdvance: () => ol
      });
      var Xs = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Ks(e, t) {
        if (Xs.arr(e)) {
          if (!Xs.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var Ws = (e, t) => e.forEach(t);

      function Zs(e, t, r) {
        if (Xs.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var $s = e => Xs.und(e) ? [] : Xs.arr(e) ? e : [e];

      function Ys(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Ws(r, t)
        }
      }
      var Qs, Js, el = (e, ...t) => Ys(e, e => e(...t)),
        tl = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        rl = null,
        nl = !1,
        ol = Gs,
        al = e => {
          e.to && (Js = e.to), e.now && (Ss.now = e.now), void 0 !== e.colors && (rl = e.colors), null != e.skipAnimation && (nl = e.skipAnimation), e.createStringInterpolator && (Qs = e.createStringInterpolator), e.requestAnimationFrame && Ss.use(e.requestAnimationFrame), e.batchedUpdates && (Ss.batchedUpdates = e.batchedUpdates), e.willAdvance && (ol = e.willAdvance), e.frameLoop && (Ss.frameLoop = e.frameLoop)
        },
        il = new Set,
        sl = [],
        ll = [],
        cl = 0,
        ul = {
          get idle() {
            return !il.size && !sl.length
          },
          start(e) {
            cl > e.priority ? (il.add(e), Ss.onStart(dl)) : (fl(e), Ss(pl))
          },
          advance: pl,
          sort(e) {
            if (cl) Ss.onFrame(() => ul.sort(e));
            else {
              const t = sl.indexOf(e);
              ~t && (sl.splice(t, 1), hl(e))
            }
          },
          clear() {
            sl = [], il.clear()
          }
        };

      function dl() {
        il.forEach(fl), il.clear(), Ss(pl)
      }

      function fl(e) {
        sl.includes(e) || hl(e)
      }

      function hl(e) {
        sl.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(sl), 0, e)
      }

      function pl(e) {
        const t = ll;
        for (let r = 0; r < sl.length; r++) {
          const n = sl[r];
          cl = n.priority, n.idle || (ol(n), n.advance(e), n.idle || t.push(n))
        }
        return cl = 0, (ll = sl).length = 0, (sl = t).length > 0
      }
      var ml = "[-+]?\\d*\\.?\\d+",
        vl = ml + "%";

      function yl(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var gl = new RegExp("rgb" + yl(ml, ml, ml)),
        bl = new RegExp("rgba" + yl(ml, ml, ml, ml)),
        _l = new RegExp("hsl" + yl(ml, vl, vl)),
        wl = new RegExp("hsla" + yl(ml, vl, vl, ml)),
        Pl = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        El = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        xl = /^#([0-9a-fA-F]{6})$/,
        Cl = /^#([0-9a-fA-F]{8})$/;

      function Sl(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Tl(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          a = Sl(o, n, e + 1 / 3),
          i = Sl(o, n, e),
          s = Sl(o, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * i) << 16 | Math.round(255 * s) << 8
      }

      function Ol(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Rl(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Nl(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function jl(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Il(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = xl.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : rl && void 0 !== rl[e] ? rl[e] : (t = gl.exec(e)) ? (Ol(t[1]) << 24 | Ol(t[2]) << 16 | Ol(t[3]) << 8 | 255) >>> 0 : (t = bl.exec(e)) ? (Ol(t[1]) << 24 | Ol(t[2]) << 16 | Ol(t[3]) << 8 | Nl(t[4])) >>> 0 : (t = Pl.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Cl.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = El.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = _l.exec(e)) ? (255 | Tl(Rl(t[1]), jl(t[2]), jl(t[3]))) >>> 0 : (t = wl.exec(e)) ? (Tl(Rl(t[1]), jl(t[2]), jl(t[3])) | Nl(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var kl = (e, t, r) => {
          if (Xs.fun(e)) return e;
          if (Xs.arr(e)) return kl({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Xs.str(e.output[0])) return Qs(e);
          const n = e,
            o = n.output,
            a = n.range || [0, 1],
            i = n.extrapolateLeft || n.extrapolate || "extend",
            s = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, a);
            return function(e, t, r, n, o, a, i, s, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === i) return c;
                "clamp" === i && (c = t)
              }
              if (c > r) {
                if ("identity" === s) return c;
                "clamp" === s && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = a(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, a[t], a[t + 1], o[t], o[t + 1], l, i, s, n.map)
          }
        },
        Ll = 1.70158,
        Dl = 1.525 * Ll,
        Al = Ll + 1,
        Ml = 2 * Math.PI / 3,
        Hl = 2 * Math.PI / 4.5,
        Bl = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        zl = {
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
          easeInBack: e => Al * e * e * e - Ll * e * e,
          easeOutBack: e => 1 + Al * Math.pow(e - 1, 3) + Ll * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Dl) / 2 : (Math.pow(2 * e - 2, 2) * ((Dl + 1) * (2 * e - 2) + Dl) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Ml),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Ml) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Hl) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Hl) / 2 + 1,
          easeInBounce: e => 1 - Bl(1 - e),
          easeOutBounce: Bl,
          easeInOutBounce: e => e < .5 ? (1 - Bl(1 - 2 * e)) / 2 : (1 + Bl(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Vl = Symbol.for("FluidValue.get"),
        Fl = Symbol.for("FluidValue.observers"),
        ql = e => Boolean(e && e[Vl]),
        Ul = e => e && e[Vl] ? e[Vl]() : e,
        Gl = e => e[Fl] || null;

      function Xl(e, t) {
        const r = e[Fl];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var Kl = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Wl(this, e)
          }
        },
        Wl = (e, t) => Ql(e, Vl, t);

      function Zl(e, t) {
        if (e[Vl]) {
          let r = e[Fl];
          r || Ql(e, Fl, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function $l(e, t) {
        const r = e[Fl];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Fl] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var Yl, Ql = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Jl = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ec = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        tc = new RegExp(`(${Jl.source})(%|[a-z]+)`, "i"),
        rc = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        nc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        oc = e => {
          const [t, r] = ac(e);
          if (!t || tl()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && nc.test(r) ? oc(r) : r || e
        },
        ac = e => {
          const t = nc.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        ic = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        sc = e => {
          Yl || (Yl = rl ? new RegExp(`(${Object.keys(rl).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => Ul(e).replace(nc, oc).replace(ec, Il).replace(Yl, Il)),
            r = t.map(e => e.match(Jl).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => kl({
              ...e,
              output: t
            }));
          return e => {
            const r = !tc.test(t[0]) && t.find(e => tc.test(e))?.replace(Jl, "");
            let n = 0;
            return t[0].replace(Jl, () => `${o[n++](e)}${r||""}`).replace(rc, ic)
          }
        },
        lc = "react-spring: ",
        cc = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${lc}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        uc = cc(console.warn),
        dc = cc(console.warn);

      function fc(e) {
        return Xs.str(e) && ("#" == e[0] || /\d/.test(e) || !tl() && nc.test(e) || e in (rl || {}))
      }
      var hc = tl() ? M.useEffect : M.useLayoutEffect;

      function pc() {
        const e = (0, M.useState)()[1],
          t = (() => {
            const e = (0, M.useRef)(!1);
            return hc(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var mc = e => (0, M.useEffect)(e, vc),
        vc = [];

      function yc(e) {
        const t = (0, M.useRef)();
        return (0, M.useEffect)(() => {
          t.current = e
        }), t.current
      }
      var gc = Symbol.for("Animated:node"),
        bc = e => e && e[gc],
        _c = (e, t) => {
          return r = e, n = gc, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        wc = e => e && e[gc] && e[gc].getPayload(),
        Pc = class {
          constructor() {
            _c(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Ec = class extends Pc {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Xs.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Ec(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Xs.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Xs.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        xc = class extends Ec {
          constructor(e) {
            super(0), this._string = null, this._toString = kl({
              output: [e, e]
            })
          }
          static create(e) {
            return new xc(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Xs.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = kl({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Cc = {
          dependencies: null
        },
        Sc = class extends Pc {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Zs(this.source, (r, n) => {
              var o;
              (o = r) && o[gc] === o ? t[n] = r.getValue(e) : ql(r) ? t[n] = Ul(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Ws(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Zs(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Cc.dependencies && ql(e) && Cc.dependencies.add(e);
            const t = wc(e);
            t && Ws(t, e => this.add(e))
          }
        },
        Tc = class extends Sc {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Tc(e)
          }
          getValue() {
            return this.source.map(e => e.getValue())
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Oc)), !0)
          }
        };

      function Oc(e) {
        return (fc(e) ? xc : Ec).create(e)
      }

      function Rc(e) {
        const t = bc(e);
        return t ? t.constructor : Xs.arr(e) ? Tc : fc(e) ? xc : Ec
      }
      var Nc = (e, t) => {
          const r = !Xs.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, M.forwardRef)((n, o) => {
            const a = (0, M.useRef)(null),
              i = r && (0, M.useCallback)(e => {
                a.current = function(e, t) {
                  return e && (Xs.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return Cc.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Sc(e), Cc.dependencies = null, [e, r]
              }(n, t),
              c = pc(),
              u = () => {
                const e = a.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new jc(u, l),
              f = (0, M.useRef)();
            hc(() => (f.current = d, Ws(l, e => Zl(e, d)), () => {
              f.current && (Ws(f.current.deps, e => $l(e, f.current)), Ss.cancel(f.current.update))
            })), (0, M.useEffect)(u, []), mc(() => () => {
              const e = f.current;
              Ws(e.deps, t => $l(t, e))
            });
            const h = t.getComponentProps(s.getValue());
            return M.createElement(e, {
              ...h,
              ref: i
            })
          })
        },
        jc = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Ss.write(this.update)
          }
        },
        Ic = Symbol.for("AnimatedComponent"),
        kc = e => Xs.str(e) ? e : e && Xs.str(e.displayName) ? e.displayName : Xs.fun(e) && e.name || null;

      function Lc(e, ...t) {
        return Xs.fun(e) ? e(...t) : e
      }
      var Dc = (e, t) => !0 === e || !!(t && e && (Xs.fun(e) ? e(t) : $s(e).includes(t))),
        Ac = (e, t) => Xs.obj(e) ? t && e[t] : e,
        Mc = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Hc = e => e,
        Bc = (e, t = Hc) => {
          let r = zc;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Xs.und(r) || (n[o] = r)
          }
          return n
        },
        zc = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Vc = {
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

      function Fc(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Zs(e, (e, n) => {
              Vc[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Zs(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function qc(e) {
        return e = Ul(e), Xs.arr(e) ? e.map(qc) : fc(e) ? Us.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Uc(e) {
        return Xs.fun(e) || Xs.arr(e) && Xs.obj(e[0])
      }
      var Gc = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: zl.linear,
          clamp: !1
        },
        Xc = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Gc)
          }
        };

      function Kc(e, t) {
        if (Xs.und(t.decay)) {
          const r = !Xs.und(t.tension) || !Xs.und(t.friction);
          !r && Xs.und(t.frequency) && Xs.und(t.damping) && Xs.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Wc = [],
        Zc = class {
          constructor() {
            this.changed = !1, this.values = Wc, this.toValues = null, this.fromValues = Wc, this.config = new Xc, this.immediate = !1
          }
        };

      function $c(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: a
      }) {
        return new Promise((i, s) => {
          let l, c, u = Dc(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            Xs.und(r.pause) || (o.paused = Dc(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Dc(e, t)), l = Lc(r.delay || 0, t), e ? (o.resumeQueue.add(f), a.pause()) : (a.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - Ss.now()
          }

          function f() {
            l > 0 && !Us.skipAnimation ? (o.delayed = !0, c = Ss.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              a.start({
                ...r,
                callId: e,
                cancel: u
              }, i)
            } catch (e) {
              s(e)
            }
          }
        })
      }
      var Yc = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? eu(e.get()) : t.every(e => e.noop) ? Qc(e.get()) : Jc(e.get(), t.every(e => e.finished)),
        Qc = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Jc = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        eu = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function tu(e, t, r, n) {
        const {
          callId: o,
          parentId: a,
          onRest: i
        } = t, {
          asyncTo: s,
          promise: l
        } = r;
        return a || e !== s || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const c = Bc(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && eu(n) || o !== r.asyncId && Jc(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const a = new nu,
                i = new ou;
              return (async () => {
                if (Us.skipAnimation) throw ru(r), i.result = Jc(n, !1), d(i), i;
                h(a);
                const s = Xs.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Zs(c, (e, t) => {
                  Xs.und(s[t]) && (s[t] = e)
                });
                const l = await n.start(s);
                return h(a), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (Us.skipAnimation) return ru(r), Jc(n, !1);
          try {
            let t;
            t = Xs.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = Jc(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof nu) m = e.result;
            else {
              if (!(e instanceof ou)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = a, r.asyncTo = a ? s : void 0, r.promise = a ? l : void 0)
          }
          return Xs.fun(i) && Ss.batchedUpdates(() => {
            i(m, n, n.item)
          }), m
        })() : l
      }

      function ru(e, t) {
        Ys(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var nu = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        ou = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        au = e => e instanceof su,
        iu = 1,
        su = class extends Kl {
          constructor() {
            super(...arguments), this.id = iu++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = bc(this);
            return e && e.getValue()
          }
          to(...e) {
            return Us.to(this, e)
          }
          interpolate(...e) {
            return uc(`${lc}The "interpolate" function is deprecated in v9 (use "to" instead)`), Us.to(this, e)
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
            Xl(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || ul.sort(this), Xl(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        lu = Symbol.for("SpringPhase"),
        cu = e => (1 & e[lu]) > 0,
        uu = e => (2 & e[lu]) > 0,
        du = e => (4 & e[lu]) > 0,
        fu = (e, t) => t ? e[lu] |= 3 : e[lu] &= -3,
        hu = (e, t) => t ? e[lu] |= 4 : e[lu] &= -5,
        pu = class extends su {
          constructor(e, t) {
            if (super(), this.animation = new Zc, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Xs.und(e) || !Xs.und(t)) {
              const r = Xs.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Xs.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(uu(this) || this._state.asyncTo) || du(this)
          }
          get goal() {
            return Ul(this.animation.to)
          }
          get velocity() {
            const e = bc(this);
            return e instanceof Ec ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return cu(this)
          }
          get isAnimating() {
            return uu(this)
          }
          get isPaused() {
            return du(this)
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
              config: a
            } = n, i = wc(n.to);
            !i && ql(n.to) && (o = $s(Ul(n.to))), n.values.forEach((s, l) => {
              if (s.done) return;
              const c = s.constructor == xc ? 1 : i ? i[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, a.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Xs.arr(a.velocity) ? a.velocity[l] : a.velocity;
                let i;
                const f = a.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (Xs.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(s.lastPosition - d) <= f, i = o * n
                  } else {
                    i = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = a.restVelocity || f / 10,
                      n = a.clamp ? 0 : a.bounce,
                      l = !Xs.und(n),
                      h = r == c ? s.v0 > 0 : r < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(i) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (i = -i * n, d = c)), i += (1e-6 * -a.tension * (d - c) + .001 * -a.friction * i) / a.mass * v, d += i * v
                  }
                else {
                  let n = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, s.durationProgress > 0 && (s.elapsedTime = a.duration * s.durationProgress, t = s.elapsedTime += e)), n = (a.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), d = r + a.easing(n) * (c - r), i = (d - s.lastPosition) / e, u = 1 == n
                }
                s.lastVelocity = i, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              i && !i[l].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(d, a.round) && (r = !0)
            });
            const s = bc(this),
              l = s.getValue();
            if (t) {
              const e = Ul(n.to);
              l === e && !r || a.decay ? r && a.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Ss.batchedUpdates(() => {
              this._stop(), this._focus(e), this._set(e)
            }), this
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
            if (uu(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Ss.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              })
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let r;
            return Xs.und(e) ? (r = this.queue || [], this.queue = []) : r = [Xs.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => Yc(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), ru(this._state, e && this._lastCallId), Ss.batchedUpdates(() => this._stop(t, e)), this
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
            r = Xs.obj(r) ? r[t] : r, (null == r || Uc(r)) && (r = void 0), n = Xs.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return cu(this) || (e.reverse && ([r, n] = [n, r]), n = Ul(n), Xs.und(n) ? bc(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, Bc(e, (e, t) => /^on/.test(t) ? Ac(e, r) : e)), wu(this, e, "onProps"), Pu(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return $c(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: a,
              actions: {
                pause: () => {
                  du(this) || (hu(this, !0), el(a.pauseQueue), Pu(this, "onPause", Jc(this, mu(this, this.animation.to)), this))
                },
                resume: () => {
                  du(this) && (hu(this, !1), uu(this) && this._resume(), el(a.resumeQueue), Pu(this, "onResume", Jc(this, mu(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = vu(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(eu(this));
            const n = !Xs.und(e.to),
              o = !Xs.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(eu(this));
              this._lastToId = t.callId
            }
            const {
              key: a,
              defaultProps: i,
              animation: s
            } = this, {
              to: l,
              from: c
            } = s;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || n || t.default && !Xs.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !Ks(d, c);
            f && (s.from = d), d = Ul(d);
            const h = !Ks(u, l);
            h && this._focus(u);
            const p = Uc(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (Kc(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Kc(e, t), Object.assign(e, t);
              for (const t in Gc) null == e[t] && (e[t] = Gc[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: a
              } = e;
              Xs.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * a, e.friction = 4 * Math.PI * o * a / n)
            }(m, Lc(t.config, a), t.config !== i.config ? Lc(i.config, a) : void 0);
            let g = bc(this);
            if (!g || Xs.und(u)) return r(Jc(this, !0));
            const b = Xs.und(t.reset) ? o && !t.default : !Xs.und(d) && Dc(t.reset, a),
              _ = b ? d : this.get(),
              w = qc(u),
              P = Xs.num(w) || Xs.arr(w) || fc(w),
              E = !p && (!P || Dc(i.immediate || t.immediate, a));
            if (h) {
              const e = Rc(u);
              if (e !== g.constructor) {
                if (!E) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const x = g.constructor;
            let C = ql(u),
              S = !1;
            if (!C) {
              const e = b || !cu(this) && f;
              (h || e) && (S = Ks(qc(_), w), C = !S), (Ks(s.immediate, E) || E) && Ks(m.decay, v) && Ks(m.velocity, y) || (C = !0)
            }
            if (S && uu(this) && (s.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || ql(l)) && (s.values = g.getPayload(), s.toValues = ql(u) ? null : x == xc ? [1] : $s(w)), s.immediate != E && (s.immediate = E, E || b || this._set(l)), C)) {
              const {
                onRest: e
              } = s;
              Ws(_u, e => wu(this, t, e));
              const n = Jc(this, mu(this, l));
              el(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && Ss.batchedUpdates(() => {
                s.changed = !b, e?.(n, this), b ? Lc(i.onRest, n) : s.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(tu(t.to, t, this._state, this)) : C ? this._start() : uu(this) && !h ? this._pendingCalls.add(r) : r(Qc(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Gl(this) && this._detach(), t.to = e, Gl(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ql(t) && (Zl(t, this), au(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ql(e) && $l(e, this)
          }
          _set(e, t = !0) {
            const r = Ul(e);
            if (!Xs.und(r)) {
              const e = bc(this);
              if (!e || !Ks(r, e.getValue())) {
                const n = Rc(r);
                e && e.constructor == n ? e.setValue(r) : _c(this, n.create(r)), e && Ss.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return bc(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Pu(this, "onStart", Jc(this, mu(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Lc(this.animation.onChange, e, this)), Lc(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            bc(this).reset(Ul(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), uu(this) || (fu(this, !0), du(this) || this._resume())
          }
          _resume() {
            Us.skipAnimation ? this.finish() : ul.start(this)
          }
          _stop(e, t) {
            if (uu(this)) {
              fu(this, !1);
              const r = this.animation;
              Ws(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Xl(this, {
                type: "idle",
                parent: this
              });
              const n = t ? eu(this.get()) : Jc(this.get(), mu(this, e ?? r.to));
              el(this._pendingCalls, n), r.changed && (r.changed = !1, Pu(this, "onRest", n, this))
            }
          }
        };

      function mu(e, t) {
        const r = qc(t);
        return Ks(qc(e.get()), r)
      }

      function vu(e, t = e.loop, r = e.to) {
        const n = Lc(t);
        if (n) {
          const o = !0 !== n && Fc(n),
            a = (o || e).reverse,
            i = !o || o.reset;
          return yu({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || Uc(r) ? r : void 0,
            from: i ? e.from : void 0,
            reset: i,
            ...o
          })
        }
      }

      function yu(e) {
        const {
          to: t,
          from: r
        } = e = Fc(e), n = new Set;
        return Xs.obj(t) && bu(t, n), Xs.obj(r) && bu(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function gu(e) {
        const t = yu(e);
        return Xs.und(t.default) && (t.default = Bc(t)), t
      }

      function bu(e, t) {
        Zs(e, (e, r) => null != e && t.add(r))
      }
      var _u = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function wu(e, t, r) {
        e.animation[r] = t[r] !== Mc(t, r) ? Ac(t[r], e.key) : void 0
      }

      function Pu(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Eu = ["onStart", "onChange", "onRest"],
        xu = 1,
        Cu = class {
          constructor(e, t) {
            this.id = xu++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused)
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each((t, r) => e[r] = t.get()), e
          }
          set(e) {
            for (const t in e) {
              const r = e[t];
              Xs.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(yu(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = $s(e).map(yu) : this.queue = [], this._flush ? this._flush(this, t) : (Iu(this, t), Su(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              Ws($s(t), t => r[t].stop(!!e))
            } else ru(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (Xs.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Ws($s(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (Xs.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Ws($s(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            Zs(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, Ys(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const a = !n && this._started,
              i = o || a && r.size ? this.get() : null;
            o && t.size && Ys(t, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }), a && (this._started = !1, Ys(r, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Ss.onFrame(this._onFrame)
          }
        };

      function Su(e, t) {
        return Promise.all(t.map(t => Tu(e, t))).then(t => Yc(e, t))
      }
      async function Tu(e, t, r) {
        const {
          keys: n,
          to: o,
          from: a,
          loop: i,
          onRest: s,
          onResolve: l
        } = t, c = Xs.obj(t.default) && t.default;
        i && (t.loop = !1), !1 === o && (t.to = null), !1 === a && (t.from = null);
        const u = Xs.arr(o) || Xs.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Ws(Eu, r => {
          const n = t[r];
          if (Xs.fun(n)) {
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
        });
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, el(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === Mc(t, "cancel");
        (u || h && d.asyncId) && f.push($c(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Gs,
            resume: Gs,
            start(t, r) {
              h ? (ru(d, e._lastAsyncId), r(eu(e))) : (t.onRest = s, r(tu(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = Yc(e, await Promise.all(f));
        if (i && p.finished && (!r || !p.noop)) {
          const r = vu(t, i, o);
          if (r) return Iu(e, [r]), Tu(e, r, !0)
        }
        return l && Ss.batchedUpdates(() => l(p, e, e.item)), p
      }

      function Ou(e, t) {
        const r = {
          ...e.springs
        };
        return t && Ws($s(t), e => {
          Xs.und(e.keys) && (e = yu(e)), Xs.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), ju(r, e, e => Nu(e))
        }), Ru(e, r), r
      }

      function Ru(e, t) {
        Zs(t, (t, r) => {
          e.springs[r] || (e.springs[r] = t, Zl(t, e))
        })
      }

      function Nu(e, t) {
        const r = new pu;
        return r.key = e, t && Zl(r, t), r
      }

      function ju(e, t, r) {
        t.keys && Ws(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Iu(e, t) {
        Ws(t, t => {
          ju(e.springs, t, t => Nu(t, e))
        })
      }
      var ku, Lu, Du = ({
          children: e,
          ...t
        }) => {
          const r = (0, M.useContext)(Au),
            n = t.pause || !!r.pause,
            o = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, M.useState)(() => ({
              inputs: t,
              result: e()
            })), n = (0, M.useRef)(), o = n.current;
            let a = o;
            if (a) {
              const r = Boolean(t && a.inputs && function(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                  if (e[r] !== t[r]) return !1;
                return !0
              }(t, a.inputs));
              r || (a = {
                inputs: t,
                result: e()
              })
            } else a = r;
            return (0, M.useEffect)(() => {
              n.current = a, o == r && (r.inputs = r.result = void 0)
            }, [a]), a.result
          }(() => ({
            pause: n,
            immediate: o
          }), [n, o]);
          const {
            Provider: a
          } = Au;
          return M.createElement(a, {
            value: t
          }, e)
        },
        Au = (ku = Du, Lu = {}, Object.assign(ku, M.createContext(Lu)), ku.Provider._context = ku, ku.Consumer._context = ku, ku);
      Du.Provider = Au.Provider, Du.Consumer = Au.Consumer;
      var Mu = () => {
        const e = [],
          t = function(t) {
            dc(`${lc}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return Ws(e, (e, o) => {
              if (Xs.und(t)) n.push(e.start());
              else {
                const a = r(t, e, o);
                a && n.push(e.start(a))
              }
            }), n
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const r = e.indexOf(t);
          ~r && e.splice(r, 1)
        }, t.pause = function() {
          return Ws(e, e => e.pause(...arguments)), this
        }, t.resume = function() {
          return Ws(e, e => e.resume(...arguments)), this
        }, t.set = function(t) {
          Ws(e, (e, r) => {
            const n = Xs.fun(t) ? t(r, e) : t;
            n && e.set(n)
          })
        }, t.start = function(t) {
          const r = [];
          return Ws(e, (e, n) => {
            if (Xs.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          }), r
        }, t.stop = function() {
          return Ws(e, e => e.stop(...arguments)), this
        }, t.update = function(t) {
          return Ws(e, (e, r) => e.update(this._getProps(t, e, r))), this
        };
        const r = function(e, t, r) {
          return Xs.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function Hu(e, t) {
        const r = Xs.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = Xs.fun(t) && t;
            n && !r && (r = []);
            const o = (0, M.useMemo)(() => n || 3 == arguments.length ? Mu() : void 0, []),
              a = (0, M.useRef)(0),
              i = pc(),
              s = (0, M.useMemo)(() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = Ou(e, t);
                  return a.current > 0 && !s.queue.length && !Object.keys(r).some(t => !e.springs[t]) ? Su(e, t) : new Promise(n => {
                    Ru(e, r), s.queue.push(() => {
                      n(Su(e, t))
                    }), i()
                  })
                }
              }), []),
              l = (0, M.useRef)([...s.ctrls]),
              c = [],
              u = yc(e) || 0;

            function d(e, r) {
              for (let o = e; o < r; o++) {
                const e = l.current[o] || (l.current[o] = new Cu(null, s.flush)),
                  r = n ? n(o, e) : t[o];
                r && (c[o] = gu(r))
              }
            }(0, M.useMemo)(() => {
              Ws(l.current.slice(e, u), e => {
                (function(e, t) {
                  e.ref?.delete(e), t?.delete(e)
                })(e, o), e.stop(!0)
              }), l.current.length = e, d(u, e)
            }, [e]), (0, M.useMemo)(() => {
              d(0, Math.min(u, e))
            }, r);
            const f = l.current.map((e, t) => Ou(e, c[t])),
              h = (0, M.useContext)(Du),
              p = yc(h),
              m = h !== p && function(e) {
                for (const t in e) return !0;
                return !1
              }(h);
            hc(() => {
              a.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], Ws(e, e => e())), Ws(l.current, (e, t) => {
                o?.add(e), m && e.start({
                  default: h
                });
                const r = c[t];
                r && (function(e, t) {
                  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
                }(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              })
            }), mc(() => () => {
              Ws(s.ctrls, e => e.stop(!0))
            });
            const v = f.map(e => ({
              ...e
            }));
            return o ? [v, o] : v
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var Bu = class extends su {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = kl(...t);
          const r = this._get(),
            n = Rc(r);
          _c(this, n.create(r))
        }
        advance(e) {
          const t = this._get();
          Ks(t, this.get()) || (bc(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Vu(this._active) && Fu(this)
        }
        _get() {
          const e = Xs.arr(this.source) ? this.source.map(Ul) : $s(Ul(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !Vu(this._active) && (this.idle = !1, Ws(wc(this), e => {
            e.done = !1
          }), Us.skipAnimation ? (Ss.batchedUpdates(() => this.advance()), Fu(this)) : ul.start(this))
        }
        _attach() {
          let e = 1;
          Ws($s(this.source), t => {
            ql(t) && Zl(t, this), au(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          }), this.priority = e, this._start()
        }
        _detach() {
          Ws($s(this.source), e => {
            ql(e) && $l(e, this)
          }), this._active.clear(), Fu(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = $s(this.source).reduce((e, t) => Math.max(e, (au(t) ? t.priority : 0) + 1), 0))
        }
      };

      function zu(e) {
        return !1 !== e.idle
      }

      function Vu(e) {
        return !e.size || Array.from(e).every(zu)
      }

      function Fu(e) {
        e.idle || (e.idle = !0, Ws(wc(e), e => {
          e.done = !0
        }), Xl(e, {
          type: "idle",
          parent: e
        }))
      }
      Us.assign({
        createStringInterpolator: sc,
        to: (e, t) => new Bu(e, t)
      }), ul.advance;
      var qu = r(18429),
        Uu = /^--/;

      function Gu(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Uu.test(e) || Ku.hasOwnProperty(e) && Ku[e] ? ("" + t).trim() : t + "px"
      }
      var Xu = {},
        Ku = {
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
        Wu = ["Webkit", "Ms", "Moz", "O"];
      Ku = Object.keys(Ku).reduce((e, t) => (Wu.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), Ku);
      var Zu = /^(matrix|translate|scale|rotate|skew)/,
        $u = /^(translate)/,
        Yu = /^(rotate|skew)/,
        Qu = (e, t) => Xs.num(e) && 0 !== e ? e + t : e,
        Ju = (e, t) => Xs.arr(e) ? e.every(e => Ju(e, t)) : Xs.num(e) ? e === t : parseFloat(e) === t,
        ed = class extends Sc {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push(e => [`translate3d(${e.map(e=>Qu(e,"px")).join(",")})`, Ju(e, 0)])), Zs(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push(e => [e, "" === e]);
              else if (Zu.test(t)) {
                if (delete n[t], Xs.und(e)) return;
                const r = $u.test(t) ? "px" : Yu.test(t) ? "deg" : "";
                o.push($s(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${Qu(o,r)})`, Ju(o, 0)] : e => [`${t}(${e.map(e=>Qu(e,r)).join(",")})`, Ju(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new td(o, a)), super(n)
          }
        },
        td = class extends Kl {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Ws(this.inputs, (r, n) => {
              const o = Ul(r[0]),
                [a, i] = this.transforms[n](Xs.arr(o) ? o : r.map(Ul));
              e += " " + a, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Ws(this.inputs, e => Ws(e, e => ql(e) && Zl(e, this)))
          }
          observerRemoved(e) {
            0 == e && Ws(this.inputs, e => Ws(e, e => ql(e) && $l(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Xl(this, e)
          }
        };
      Us.assign({
        batchedUpdates: qu.unstable_batchedUpdates,
        createStringInterpolator: sc,
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
      var rd = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Sc(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            a = e => {
              const t = kc(e) || "Anonymous";
              return (e = Xs.str(e) ? a[e] || (a[e] = Nc(e, o)) : e[Ic] || (e[Ic] = Nc(e, o))).displayName = `Animated(${t})`, e
            };
          return Zs(e, (t, r) => {
            Xs.arr(e) && (r = kc(t)), a[r] = a(t)
          }), {
            animated: a
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: a,
                scrollTop: i,
                scrollLeft: s,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : Xu[t] || (Xu[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = Gu(t, o[t]);
                Uu.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new ed(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        nd = rd.animated,
        od = r(94118),
        ad = r(95362),
        id = r(85426),
        sd = r(89749),
        ld = r(74406),
        cd = r(96077),
        ud = r(34902),
        dd = r(53146),
        fd = r(78004),
        hd = r(21222),
        pd = r(79158),
        md = r(63694),
        [vd, yd] = (0, id.A)("Tooltip", [cd.Bk]),
        gd = (0, cd.Bk)(),
        bd = "TooltipProvider",
        _d = 700,
        wd = "tooltip.open",
        [Pd, Ed] = vd(bd),
        xd = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = _d,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, i = M.useRef(!0), s = M.useRef(!1), l = M.useRef(0);
          return M.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, _.jsx)(Pd, {
            scope: t,
            isOpenDelayedRef: i,
            delayDuration: r,
            onOpen: M.useCallback(() => {
              window.clearTimeout(l.current), i.current = !1
            }, []),
            onClose: M.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => i.current = !0, n)
            }, [n]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: M.useCallback(e => {
              s.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      xd.displayName = bd;
      var Cd = "Tooltip",
        [Sd, Td] = vd(Cd),
        Od = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: i,
            delayDuration: s
          } = e, l = Ed(Cd, e.__scopeTooltip), c = gd(t), [u, d] = M.useState(null), f = (0, ld.useId)(), h = M.useRef(0), p = i ?? l.disableHoverableContent, m = s ?? l.delayDuration, v = M.useRef(!1), [y, g] = (0, pd.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(wd))) : l.onClose(), a?.(e)
            },
            caller: Cd
          }), b = M.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), w = M.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, v.current = !1, g(!0)
          }, [g]), P = M.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, g(!1)
          }, [g]), E = M.useCallback(() => {
            window.clearTimeout(h.current), h.current = window.setTimeout(() => {
              v.current = !0, g(!0), h.current = 0
            }, m)
          }, [m, g]);
          return M.useEffect(() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }, []), (0, _.jsx)(cd.bL, {
            ...c,
            children: (0, _.jsx)(Sd, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: d,
              onTriggerEnter: M.useCallback(() => {
                l.isOpenDelayedRef.current ? E() : w()
              }, [l.isOpenDelayedRef, E, w]),
              onTriggerLeave: M.useCallback(() => {
                p ? P() : (window.clearTimeout(h.current), h.current = 0)
              }, [P, p]),
              onOpen: w,
              onClose: P,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      Od.displayName = Cd;
      var Rd = "TooltipTrigger",
        Nd = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Td(Rd, r), a = Ed(Rd, r), i = gd(r), s = M.useRef(null), l = (0, ad.s)(t, s, o.onTriggerChange), c = M.useRef(!1), u = M.useRef(!1), d = M.useCallback(() => c.current = !1, []);
          return M.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, _.jsx)(cd.Mz, {
            asChild: !0,
            ...i,
            children: (0, _.jsx)(fd.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, od.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (u.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              }),
              onPointerLeave: (0, od.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), u.current = !1
              }),
              onPointerDown: (0, od.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              }),
              onFocus: (0, od.mK)(e.onFocus, () => {
                c.current || o.onOpen()
              }),
              onBlur: (0, od.mK)(e.onBlur, o.onClose),
              onClick: (0, od.mK)(e.onClick, o.onClose)
            })
          })
        });
      Nd.displayName = Rd;
      var jd = "TooltipPortal",
        [Id, kd] = vd(jd, {
          forceMount: void 0
        }),
        Ld = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Td(jd, t);
          return (0, _.jsx)(Id, {
            scope: t,
            forceMount: r,
            children: (0, _.jsx)(dd.C, {
              present: r || a.open,
              children: (0, _.jsx)(ud.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Ld.displayName = jd;
      var Dd = "TooltipContent",
        Ad = M.forwardRef((e, t) => {
          const r = kd(Dd, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            i = Td(Dd, e.__scopeTooltip);
          return (0, _.jsx)(dd.C, {
            present: n || i.open,
            children: i.disableHoverableContent ? (0, _.jsx)(Vd, {
              side: o,
              ...a,
              ref: t
            }) : (0, _.jsx)(Md, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        Md = M.forwardRef((e, t) => {
          const r = Td(Dd, e.__scopeTooltip),
            n = Ed(Dd, e.__scopeTooltip),
            o = M.useRef(null),
            a = (0, ad.s)(t, o),
            [i, s] = M.useState(null),
            {
              trigger: l,
              onClose: c
            } = r,
            u = o.current,
            {
              onPointerInTransitChange: d
            } = n,
            f = M.useCallback(() => {
              s(null), d(!1)
            }, [d]),
            h = M.useCallback((e, t) => {
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
                    a = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, o, a)) {
                    case a:
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
                a = function(e) {
                  const t = e.slice();
                  return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
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
              s(a), d(!0)
            }, [d]);
          return M.useEffect(() => () => f(), [f]), M.useEffect(() => {
            if (l && u) {
              const e = e => h(e, u),
                t = e => h(e, l);
              return l.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t)
              }
            }
          }, [l, u, h, f]), M.useEffect(() => {
            if (i) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = l?.contains(t) || u?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: r,
                      y: n
                    } = e;
                    let o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const i = t[e],
                        s = t[a],
                        l = i.x,
                        c = i.y,
                        u = s.x,
                        d = s.y;
                      c > n != d > n && r < (u - l) * (n - c) / (d - c) + l && (o = !o)
                    }
                    return o
                  }(r, i);
                n ? f() : o && (f(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, u, i, c, f]), (0, _.jsx)(Vd, {
            ...e,
            ref: a
          })
        }),
        [Hd, Bd] = vd(Cd, {
          isInside: !1
        }),
        zd = (0, hd.createSlottable)("TooltipContent"),
        Vd = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            ...s
          } = e, l = Td(Dd, r), c = gd(r), {
            onClose: u
          } = l;
          return M.useEffect(() => (document.addEventListener(wd, u), () => document.removeEventListener(wd, u)), [u]), M.useEffect(() => {
            if (l.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(l.trigger) && u()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [l.trigger, u]), (0, _.jsx)(sd.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, _.jsxs)(cd.UC, {
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
              children: [(0, _.jsx)(zd, {
                children: n
              }), (0, _.jsx)(Hd, {
                scope: r,
                isInside: !0,
                children: (0, _.jsx)(md.Root, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Ad.displayName = Dd;
      var Fd = "TooltipArrow",
        qd = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = gd(r);
          return Bd(Fd, r).isInside ? null : (0, _.jsx)(cd.i3, {
            ...o,
            ...n,
            ref: t
          })
        });
      qd.displayName = Fd;
      var Ud = xd,
        Gd = Od,
        Xd = Nd,
        Kd = Ld,
        Wd = Ad,
        Zd = qd;
      const $d = (0, M.createContext)(null);

      function Yd() {
        const e = (0, M.useContext)($d);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Qd = ({
          children: e,
          delayDuration: t,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [a = !1, i] = (0, Pe.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, _.jsx)(Ud, {
            delayDuration: t,
            children: (0, _.jsx)($d.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, _.jsx)(Gd, {
                open: a,
                onOpenChange: i,
                children: e
              })
            })
          })
        },
        Jd = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, _.jsx)(Xd, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        ef = (0, M.forwardRef)(({
          testId: e,
          children: t,
          collisionBoundary: r,
          collisionPadding: n,
          onEscapeKeyDown: o,
          onPointerDownOutside: a,
          side: i = "top",
          sideOffset: s = 8,
          align: l = "center",
          alignOffset: c = 0,
          avoidCollisions: u = !0,
          sticky: d = "partial",
          ...f
        }, h) => {
          const {
            isOpen: p
          } = Yd(), m = (0, Pe.ZC)(p), v = Hu({
            opacity: p ? 1 : 0,
            immediate: p && !m
          }), y = (0, F.mergeProps)({
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, f);
          return (0, _.jsx)(Wd, {
            forceMount: !0,
            "data-testid": e,
            side: i,
            align: l,
            sticky: d,
            sideOffset: s,
            alignOffset: c,
            avoidCollisions: u,
            collisionPadding: n,
            collisionBoundary: r,
            onEscapeKeyDown: o,
            onPointerDownOutside: a,
            asChild: !0,
            children: (0, _.jsx)(nd.div, {
              style: v,
              ...y,
              ref: h,
              children: t
            })
          })
        }),
        tf = (0, M.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, F.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, _.jsx)(Zd, {
            ...r,
            ref: t
          })
        }),
        rf = Kd;

      function nf(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var of = r(77768), af = r(29044), sf = r(60528), lf = r(20027), cf = ["PageUp", "PageDown"], uf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], df = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
      }, ff = "Slider", [hf, pf, mf] = (0, lf.N)(ff), [vf, yf] = (0, id.A)(ff, [mf]), [gf, bf] = vf(ff), _f = M.forwardRef((e, t) => {
        const {
          name: r,
          min: n = 0,
          max: o = 100,
          step: a = 1,
          orientation: i = "horizontal",
          disabled: s = !1,
          minStepsBetweenThumbs: l = 0,
          defaultValue: c = [n],
          value: u,
          onValueChange: d = () => {},
          onValueCommit: f = () => {},
          inverted: h = !1,
          form: p,
          ...m
        } = e, v = M.useRef(new Set), y = M.useRef(0), g = "horizontal" === i ? Ef : xf, [b = [], w] = (0, pd.useControllableState)({
          prop: u,
          defaultProp: c,
          onChange: e => {
            const t = [...v.current];
            t[y.current]?.focus(), d(e)
          }
        }), P = M.useRef(b);

        function E(e, t, {
          commit: r
        } = {
          commit: !1
        }) {
          const i = function(e) {
              return (String(e).split(".")[1] || "").length
            }(a),
            s = function(e, t) {
              const r = Math.pow(10, t);
              return Math.round(e * r) / r
            }(Math.round((e - n) / a) * a + n, i),
            c = nf(s, [n, o]);
          w((e = []) => {
            const n = function(e = [], t, r) {
              const n = [...e];
              return n[r] = t, n.sort((e, t) => e - t)
            }(e, c, t);
            if (function(e, t) {
                if (t > 0) {
                  const r = function(e) {
                    return e.slice(0, -1).map((t, r) => e[r + 1] - t)
                  }(e);
                  return Math.min(...r) >= t
                }
                return !0
              }(n, l * a)) {
              y.current = n.indexOf(c);
              const t = String(n) !== String(e);
              return t && r && f(n), t ? n : e
            }
            return e
          })
        }
        return (0, _.jsx)(gf, {
          scope: e.__scopeSlider,
          name: r,
          disabled: s,
          min: n,
          max: o,
          valueIndexToChangeRef: y,
          thumbs: v.current,
          values: b,
          orientation: i,
          form: p,
          children: (0, _.jsx)(hf.Provider, {
            scope: e.__scopeSlider,
            children: (0, _.jsx)(hf.Slot, {
              scope: e.__scopeSlider,
              children: (0, _.jsx)(g, {
                "aria-disabled": s,
                "data-disabled": s ? "" : void 0,
                ...m,
                ref: t,
                onPointerDown: (0, od.mK)(m.onPointerDown, () => {
                  s || (P.current = b)
                }),
                min: n,
                max: o,
                inverted: h,
                onSlideStart: s ? void 0 : function(e) {
                  const t = function(e, t) {
                    if (1 === e.length) return 0;
                    const r = e.map(e => Math.abs(e - t)),
                      n = Math.min(...r);
                    return r.indexOf(n)
                  }(b, e);
                  E(e, t)
                },
                onSlideMove: s ? void 0 : function(e) {
                  E(e, y.current)
                },
                onSlideEnd: s ? void 0 : function() {
                  const e = P.current[y.current];
                  b[y.current] !== e && f(b)
                },
                onHomeKeyDown: () => !s && E(n, 0, {
                  commit: !0
                }),
                onEndKeyDown: () => !s && E(o, b.length - 1, {
                  commit: !0
                }),
                onStepKeyDown: ({
                  event: e,
                  direction: t
                }) => {
                  if (!s) {
                    const r = cf.includes(e.key) || e.shiftKey && uf.includes(e.key) ? 10 : 1,
                      n = y.current;
                    E(b[n] + a * r * t, n, {
                      commit: !0
                    })
                  }
                }
              })
            })
          })
        })
      });
      _f.displayName = ff;
      var [wf, Pf] = vf(ff, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Ef = M.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: a,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: l,
          onStepKeyDown: c,
          ...u
        } = e, [d, f] = M.useState(null), h = (0, ad.s)(t, e => f(e)), p = M.useRef(void 0), m = (0, of.jH)(o), v = "ltr" === m, y = v && !a || !v && a;

        function g(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = Df([0, t.width], y ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, _.jsx)(wf, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, _.jsx)(Cf, {
            dir: m,
            "data-orientation": "horizontal",
            ...u,
            ref: h,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = g(e.clientX);
              i?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientX);
              s?.(t)
            },
            onSlideEnd: () => {
              p.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = df[y ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), xf = M.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: i,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...c
        } = e, u = M.useRef(null), d = (0, ad.s)(t, u), f = M.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = Df([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, _.jsx)(wf, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, _.jsx)(Cf, {
            "data-orientation": "vertical",
            ...c,
            ref: d,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = p(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = p(e.clientY);
              i?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, s?.()
            },
            onStepKeyDown: e => {
              const t = df[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Cf = M.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: i,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...c
        } = e, u = bf(ff, r);
        return (0, _.jsx)(fd.sG.span, {
          ...c,
          ref: t,
          onKeyDown: (0, od.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (i(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : cf.concat(uf).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, od.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, od.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, od.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), Sf = "SliderTrack", Tf = M.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = bf(Sf, r);
        return (0, _.jsx)(fd.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Tf.displayName = Sf;
      var Of = "SliderRange",
        Rf = M.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = bf(Of, r), a = Pf(Of, r), i = M.useRef(null), s = (0, ad.s)(t, i), l = o.values.length, c = o.values.map(e => Lf(e, o.min, o.max)), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
          return (0, _.jsx)(fd.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: s,
            style: {
              ...e.style,
              [a.startEdge]: u + "%",
              [a.endEdge]: d + "%"
            }
          })
        });
      Rf.displayName = Of;
      var Nf = "SliderThumb",
        jf = M.forwardRef((e, t) => {
          const r = pf(e.__scopeSlider),
            [n, o] = M.useState(null),
            a = (0, ad.s)(t, e => o(e)),
            i = M.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, _.jsx)(If, {
            ...e,
            ref: a,
            index: i
          })
        }),
        If = M.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...a
          } = e, i = bf(Nf, r), s = Pf(Nf, r), [l, c] = M.useState(null), u = (0, ad.s)(t, e => c(e)), d = !l || i.form || !!l.closest("form"), f = (0, sf.X)(l), h = i.values[n], p = void 0 === h ? 0 : Lf(h, i.min, i.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, i.values.length), v = f?.[s.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - Df([0, 50], [0, n])(t) * r) * r
          }(v, p, s.direction) : 0;
          return M.useEffect(() => {
            if (l) return i.thumbs.add(l), () => {
              i.thumbs.delete(l)
            }
          }, [l, i.thumbs]), (0, _.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${p}% + ${y}px)`
            },
            children: [(0, _.jsx)(hf.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, _.jsx)(fd.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": i.min,
                "aria-valuenow": h,
                "aria-valuemax": i.max,
                "aria-orientation": i.orientation,
                "data-orientation": i.orientation,
                "data-disabled": i.disabled ? "" : void 0,
                tabIndex: i.disabled ? void 0 : 0,
                ...a,
                ref: u,
                style: void 0 === h ? {
                  display: "none"
                } : e.style,
                onFocus: (0, od.mK)(e.onFocus, () => {
                  i.valueIndexToChangeRef.current = n
                })
              })
            }), d && (0, _.jsx)(kf, {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: h
            }, n)]
          })
        });
      jf.displayName = Nf;
      var kf = M.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = M.useRef(null),
          a = (0, ad.s)(o, n),
          i = (0, af.Z)(t);
        return M.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (i !== t && n) {
            const r = new Event("input", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [i, t]), (0, _.jsx)(fd.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: a,
          defaultValue: t
        })
      });

      function Lf(e, t, r) {
        return nf(100 / (r - t) * (e - t), [0, 100])
      }

      function Df(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      kf.displayName = "RadioBubbleInput";
      var Af = _f,
        Mf = Tf,
        Hf = Rf,
        Bf = jf,
        zf = r(24780);
      const Vf = (0, M.createContext)({
          triggerRef: (0, M.createRef)(),
          triggerBorderRef: (0, M.createRef)(),
          thumbnailRef: (0, M.createRef)(),
          openIconRef: (0, M.createRef)(),
          overlayRef: (0, M.createRef)(),
          contentRef: (0, M.createRef)(),
          containerRef: (0, M.createRef)(),
          imageRef: (0, M.createRef)(),
          placeholderRef: (0, M.createRef)(),
          zoomPanRef: (0, M.createRef)(),
          captionRef: (0, M.createRef)(),
          controlsRef: (0, M.createRef)(),
          closeRef: (0, M.createRef)(),
          zoomRef: (0, M.createRef)(),
          zoomInRef: (0, M.createRef)(),
          zoomSliderRef: (0, M.createRef)(),
          zoomOutRef: (0, M.createRef)(),
          resetRef: (0, M.createRef)(),
          downloadRef: (0, M.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        Ff = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: a = 300,
          zoomLevelStep: i = 100,
          clickAction: s = "close",
          doubleTapAction: l,
          tapAction: c,
          hideTrigger: u = !0,
          ...d
        }) => {
          const f = (0, xe.Ym)(),
            h = (0, Pe.rl)(),
            p = (0, M.useRef)(null),
            m = (0, M.useRef)(null),
            v = (0, M.useRef)(null),
            y = (0, M.useRef)(null),
            g = (0, M.useRef)(null),
            b = (0, M.useRef)(null),
            w = (0, M.useRef)(null),
            P = (0, M.useRef)(null),
            E = (0, M.useRef)(null),
            x = (0, M.useRef)(null),
            C = (0, M.useRef)(null),
            S = (0, M.useRef)(null),
            T = (0, M.useRef)(null),
            O = (0, M.useRef)(null),
            R = (0, M.useRef)(null),
            N = (0, M.useRef)(null),
            j = (0, M.useRef)(null),
            I = (0, M.useRef)(null),
            k = (0, M.useRef)(null),
            [L = !1, D] = (0, Pe.ic)({
              prop: t || n,
              onChange: r
            }),
            A = (0, M.useRef)(null);
          return A.current || (A.current = new ds({
            width: 0,
            height: 0,
            zoomLevelOptions: {
              max: a,
              min: o,
              step: i
            },
            actionOptions: {
              click: s,
              tap: c || h ? "toggle-controls" : "close",
              doubleTap: l || h ? "zoom" : "none"
            }
          })), (0, _.jsx)(Ji, {
            messages: es,
            locale: f,
            children: (0, _.jsx)(Vf.Provider, {
              value: {
                triggerRef: p,
                triggerBorderRef: m,
                thumbnailRef: v,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: P,
                imageRef: E,
                placeholderRef: x,
                captionRef: C,
                controlsRef: S,
                closeRef: T,
                zoomRef: O,
                zoomInRef: R,
                zoomSliderRef: N,
                zoomOutRef: j,
                resetRef: I,
                downloadRef: k,
                open: L,
                setOpen: D,
                altText: e,
                hideTrigger: u,
                slide: A.current
              },
              children: (0, _.jsx)(Uf, {
                ...d
              })
            })
          })
        },
        qf = (0, M.createContext)({
          openAnim: () => Promise.resolve(),
          update: () => Promise.resolve(),
          close: () => Promise.resolve(),
          zoomIn: () => Promise.resolve(),
          zoomOut: () => Promise.resolve(),
          zoomTo: () => Promise.resolve(),
          resetZoom: () => Promise.resolve(),
          toggleControls: () => Promise.resolve(),
          onOpenChange: () => Promise.resolve()
        }),
        Uf = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, M.useContext)(Vf), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = Zt(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: a,
              triggerRef: i,
              triggerBorderRef: s,
              thumbnailRef: l,
              containerRef: c,
              zoomPanRef: u,
              placeholderRef: d,
              imageRef: f
            } = (0, M.useContext)(Vf), h = (0, M.useRef)(null);
            h.current || (h.current = Ft.gsap.timeline({
              defaults: Ln
            }));
            const p = (0, M.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const t = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of t)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              m = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), l.current && s.current && (t.opening = !0, t.setup(s.current, l.current), t.zoomAndPanToInitial(), Ft.gsap.set([d.current, f.current], {
                  position: "absolute",
                  border: "0px",
                  width: "1px",
                  height: "1px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  overflowWrap: "normal",
                  opacity: .003
                }), Ft.gsap.set([f.current], {
                  visibility: "hidden"
                }), await t.opener.loadPlaceholder(d.current), h.current.clear(), d.current && (h.current.to([d.current, f.current], {
                  border: "initial",
                  padding: "initial",
                  margin: "initial",
                  overflow: "hidden",
                  clip: "initial",
                  whiteSpace: "initial",
                  overflowWrap: "initial",
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  objectFit: t.opener.placeholderFit,
                  objectPosition: t.opener.placeholderPosition,
                  scale: t.opener.placeholderScale,
                  transform: t.opener.placeholderTransform,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), h.current.to([u.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), h.current.to([c.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), n && h.current.to([i.current, s.current], {
                  opacity: 0,
                  duration: 0
                }), h.current.to([d.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  duration: 0
                }), h.current.fromTo([c.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h
                }, {
                  width: () => t.panAreaSize.x,
                  height: () => t.panAreaSize.y,
                  x: 0,
                  y: 0,
                  data: {
                    invalidate: !0
                  }
                }, 0), h.current.fromTo([d.current, f.current], {
                  border: "initial",
                  padding: "initial",
                  margin: "initial",
                  overflow: "hidden",
                  clip: "initial",
                  whiteSpace: "initial",
                  overflowWrap: "initial",
                  scale: () => t.opener.placeholderScale,
                  transform: () => t.opener.placeholderTransform,
                  objectPosition: () => t.opener.placeholderPosition,
                  objectFit: () => t.opener.placeholderFit,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  opacity: t.opener.containerOpacity
                }, {
                  opacity: 1,
                  width: () => t.opener.width,
                  height: () => t.opener.height,
                  transform: "translate(0, 0) scale(1)",
                  data: {
                    invalidate: !0
                  }
                }, 0), h.current.fromTo([u.current], {
                  x: () => 0,
                  y: () => 0,
                  scale: () => 1
                }, {
                  x: () => t.pan.x ?? 0,
                  y: () => t.pan.y ?? 0,
                  scale: () => t.getCurrentScale() ?? 1,
                  transformOrigin: "0px 0px",
                  data: {
                    invalidate: !0
                  }
                }, 0), h.current.fromTo([o.current], {
                  opacity: 0
                }, {
                  opacity: () => t.getOverlayOpacity(),
                  data: {
                    invalidate: !0
                  }
                }, 0), h.current.fromTo([a.current], {
                  opacity: 0,
                  [An]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [An]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (h.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await nn(f.current), t.closing || (Ft.gsap.set([f.current], {
                  visibility: "visible",
                  ...Dn
                }), Ft.gsap.set([d.current], {
                  visibility: "hidden",
                  ...Dn
                }))))
              }),
              v = e(async () => {
                t.close(), h.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await h.current.reverse()
              }),
              y = (0, M.useCallback)(async e => {
                e || (window.addEventListener("click", p), await v(), window.removeEventListener("click", p)), r(e)
              }, [r]),
              g = (0, M.useCallback)(() => y(!1), [y]);
            return {
              onOpenChange: y,
              openAnim: m,
              close: g
            }
          })(), {
            update: a,
            zoomIn: i,
            zoomOut: s,
            zoomTo: l,
            resetZoom: c,
            toggleControls: u
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = Zt(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: i,
              placeholderRef: s
            } = (0, M.useContext)(Vf), l = t(async e => {
              r.zoomTo(e), Ft.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Dn
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), Ft.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Dn
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), Ft.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Dn
              })
            }), d = t(async () => {
              r.zoomAndPanToInitial(), Ft.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Dn
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              Ft.gsap.to([a.current], {
                opacity: e,
                [An]: t,
                ...Dn
              })
            }), h = t(async () => {
              Ft.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Dn
              })
            }), p = (0, M.useCallback)(() => {
              n.current && o.current && (r.resize(), Ft.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Dn
              }), Ft.gsap.set([n.current, s.current], {
                ...r.getUpdatedContentSize(),
                ...Dn
              }), Ft.gsap.set([i.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }, []);
            return (0, M.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", h), r.addEventListener("toggle-controls", f), window.addEventListener("resize", p), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", h), r.removeEventListener("toggle-controls", f), window.removeEventListener("resize", p)
            }), []), {
              zoomIn: c,
              zoomOut: u,
              zoomTo: l,
              resetZoom: d,
              toggleControls: f,
              update: h
            }
          })({
            close: o
          }), d = (0, F.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, _.jsx)(qf.Provider, {
            value: {
              update: a,
              openAnim: n,
              close: o,
              zoomIn: i,
              zoomOut: s,
              zoomTo: l,
              resetZoom: c,
              toggleControls: u,
              onOpenChange: r
            },
            children: (0, _.jsx)(zf.Root, {
              ...d
            })
          })
        },
        Gf = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = Ki(),
            {
              triggerRef: a,
              triggerBorderRef: i,
              altText: s
            } = (0, M.useContext)(Vf),
            l = (0, Pe.UP)(a, n),
            c = (0, F.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(fs, {
                description: s
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, _.jsx)(zf.Trigger, {
            ref: l,
            ...c,
            children: (0, _.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: i,
              children: (0, _.jsx)(Ee.xV, {
                children: t
              })
            })
          })
        }),
        Xf = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, M.useContext)(Vf), a = (0, Pe.UP)(o, n), i = (0, F.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), s = t ? Ee.DX : "img";
          return (0, _.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        Kf = (0, M.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, M.useContext)(Vf), o = (0, Pe.UP)(n, r), a = (0, F.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), i = e ? Ee.DX : Me.Maximize2;
          return (0, _.jsx)(i, {
            ref: o,
            ...a
          })
        }),
        Wf = ({
          ...e
        }) => (0, _.jsx)(zf.Portal, {
          ...e
        }),
        Zf = (0, M.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, M.useContext)(Vf), o = (0, Pe.UP)(n, r), a = (0, F.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, _.jsx)(zf.Overlay, {
            ref: o,
            ...a
          })
        }),
        $f = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, M.useContext)(qf), {
            contrastMode: a
          } = (0, xe.DP)(), {
            contentRef: i,
            altText: s,
            triggerRef: l
          } = (0, M.useContext)(Vf), {
            cursor: c
          } = (() => {
            const {
              slide: e
            } = (0, M.useContext)(Vf), [t, r] = (0, M.useState)(e.getCursor()), n = (0, M.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, M.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), u = (0, ts.m)("dark", a), d = (0, Pe.UP)(i, n), f = (0, F.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, l),
            className: (0, Ae.clsx)("foundry_1a74xwb9", u),
            style: {
              cursor: c
            }
          });
          return (0, _.jsxs)(zf.Content, {
            ref: d,
            ...f,
            children: [(0, _.jsx)(Ee.s6, {
              children: (0, _.jsx)(zf.Title, {
                children: s
              })
            }), t]
          })
        }),
        Yf = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, M.useContext)(Vf);
          (() => {
            const {
              contextSafe: e
            } = Zt(), {
              toggleControls: t
            } = (0, M.useContext)(qf), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: i
            } = (0, M.useContext)(Vf), s = e(e => {
              e.pinching || i.zoomHandler.pinching || (i.dragHandler.handleDrag(e), i.dragHandler.animate && !i.closing && (Ft.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...Dn
              }), Ft.gsap.to([o.current], {
                opacity: i.getOverlayOpacity(),
                ...Dn
              }), Ft.gsap.to([a.current], {
                opacity: i.getControlsOpacity(),
                ...Dn
              })))
            }), l = e(e => {
              e.pinching || i.zoomHandler.pinching || (i.scrollWheel.handleWheel(e), i.closing || Ft.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...Dn
              }))
            }), c = e(e => {
              !e.pinching && !i.zoomHandler.pinching || i.dragHandler.dragging || (i.zoomHandler.handleZoom(e), i.zoomHandler.animate && !i.closing && (Ft.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...Dn
              }), Ft.gsap.to([o.current], {
                opacity: i.getOverlayOpacity(),
                ...Dn
              }), Ft.gsap.to([a.current], {
                opacity: i.getControlsOpacity(),
                ...Dn
              })))
            }), u = (0, M.useCallback)(() => {
              i.controlsVisible || t()
            }, [, t]);
            (0, Pe.iQ)({
              ref: a,
              onFocusIn: u
            }), rn({
              onWheel: l,
              onDrag: s,
              onPinch: c
            }, {
              target: r,
              drag: {
                filterTaps: !0
              },
              pinch: {
                pinchOnWheel: !1
              }
            })
          })();
          const a = (0, Pe.UP)(o, n),
            i = (0, F.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, _.jsx)("div", {
            ref: a,
            ...i,
            children: (0, _.jsxs)(Qf, {
              children: [(0, _.jsx)(Jf, {}), t]
            })
          })
        }),
        Qf = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, M.useContext)(Vf), a = (0, Pe.UP)(o, n), i = (0, F.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), s = t ? Ee.DX : "div";
          return (0, _.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        Jf = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, M.useContext)(Vf), a = (0, Pe.UP)(o, n), i = (0, F.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), s = t ? Ee.DX : "img";
          return (0, _.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        eh = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, M.useContext)(Vf), a = (0, Pe.UP)(o, n), i = (0, F.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), s = t ? Ee.DX : "img";
          return (0, _.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        th = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, M.useContext)(Vf), a = (0, Pe.UP)(o, n), i = (0, F.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), s = t ? Ee.DX : "p";
          return (0, _.jsx)(zf.Description, {
            asChild: !0,
            children: (0, _.jsx)(s, {
              ref: a,
              ...i
            })
          })
        }),
        rh = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, M.useContext)(Vf);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, M.useContext)(qf);
            Tn(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), Tn(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), Tn("r", n, {
              enabled: e,
              preventDefault: !0
            }), Tn("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, Pe.UP)(o, n),
            i = (0, F.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            s = t ? Ee.DX : "div";
          return (0, _.jsx)(xn, {
            children: (0, _.jsx)(s, {
              ref: a,
              ...i
            })
          })
        }),
        nh = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, _.jsx)(_.Fragment, {
            children: n
          });
          const a = (0, F.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, _.jsxs)(Qd, {
            delayDuration: 0,
            children: [(0, _.jsx)(Jd, {
              children: n
            }), (0, _.jsxs)(ef, {
              ...a,
              children: [(0, _.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, _.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, _.jsx)(tf, {})]
            })]
          })
        },
        oh = (0, M.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, F.mergeProps)(e, {
            isInline: !0
          });
          return (0, _.jsx)(xs, {
            ref: t,
            ...r
          })
        }),
        ah = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const i = Ki(),
            {
              zoomRef: s
            } = (0, M.useContext)(Vf),
            {
              canZoomIn: l,
              zoomIn: c,
              canZoomOut: u,
              zoomOut: d,
              zoomProgress: f,
              minZoomLevel: h,
              maxZoomLevel: p,
              zoomTo: m
            } = (() => {
              const {
                slide: e
              } = (0, M.useContext)(Vf), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, M.useContext)(qf), [o, a] = (0, M.useState)(!1), [i, s] = (0, M.useState)(!1), [l, c] = (0, M.useState)(0), [u, d] = (0, M.useState)(0), [f, h] = (0, M.useState)(0), p = (0, M.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), s(e.currZoomLevel > e.zoomLevels.min), c(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), h(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, M.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, M.useEffect)(() => (e.addEventListener("zoom", p), () => {
                e.removeEventListener("zoom", p)
              }), [p]), {
                zoomTo: m,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: i,
                zoomProgress: l,
                minZoomLevel: u,
                maxZoomLevel: f
              }
            })(),
            v = (0, Pe.UP)(s, a),
            y = (0, F.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbn"
            }),
            g = t ? Ee.DX : "div";
          return (0, _.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, _.jsx)(nh, {
              side: "left",
              enabled: r,
              content: i.formatMessage(ms),
              metadata: i.formatMessage(vs, {
                shortcut: (0, _.jsx)(oh, {
                  shortcut: "+"
                })
              }),
              children: (0, _.jsx)(at, {
                label: i.formatMessage(ms),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: kn({
                  position: "top"
                }),
                onPress: c,
                isDisabled: !l
              })
            }), (0, _.jsxs)(Af, {
              className: "foundry_1a74xwbr",
              max: p,
              min: h,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, _.jsx)(Mf, {
                className: "foundry_1a74xwbs",
                children: (0, _.jsx)(Hf, {
                  className: "foundry_1a74xwbt"
                })
              }), (0, _.jsx)(nh, {
                side: "left",
                enabled: r,
                content: i.formatMessage(ws, {
                  zoom: f.toFixed(0)
                }),
                children: (0, _.jsx)(Bf, {
                  className: "foundry_1a74xwbu",
                  children: (0, _.jsx)("span", {
                    className: "foundry_1a74xwbv"
                  })
                })
              })]
            }), (0, _.jsx)(nh, {
              side: "left",
              enabled: r,
              content: i.formatMessage(ys),
              metadata: i.formatMessage(gs, {
                shortcut: (0, _.jsx)(oh, {
                  shortcut: "-"
                })
              }),
              children: (0, _.jsx)(at, {
                label: i.formatMessage(ys),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: kn({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !u
              })
            }), (0, _.jsx)(Ee.xV, {
              children: n
            })]
          })
        }),
        ih = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = Ki(),
            {
              closeRef: i
            } = (0, M.useContext)(Vf),
            s = (0, Pe.UP)(i, o),
            l = (0, F.mergeProps)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbk foundry_1a74xwbj"
            }),
            c = t ? (0, _.jsx)(Ee.DX, {
              ref: s,
              ...l
            }) : (0, _.jsx)(at, {
              ref: s,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(hs)
            });
          return (0, _.jsx)(nh, {
            side: "right",
            enabled: r,
            content: a.formatMessage(hs),
            metadata: a.formatMessage(ps, {
              shortcut: (0, _.jsx)(oh, {
                shortcut: "Esc"
              })
            }),
            children: (0, _.jsx)(zf.Close, {
              asChild: !0,
              children: c
            })
          })
        }),
        sh = (0, M.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = Ki(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, M.useContext)(Vf), {
                contextSafe: r
              } = Zt(), {
                resetZoom: n
              } = (0, M.useContext)(qf), [o, a] = (0, M.useState)(e.currZoomLevel !== e.zoomLevels.initial), i = r(e => {
                Ft.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Dn
                })
              }), s = (0, M.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), i(t)
              }, [a]);
              return (0, M.useEffect)(() => (e.addEventListener("zoom", s), () => {
                e.removeEventListener("zoom", s)
              }), [s]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: i
            } = (0, M.useContext)(Vf),
            s = (0, Pe.UP)(i, n),
            l = (0, F.mergeProps)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbl foundry_1a74xwbj"
            });
          return (0, _.jsx)(nh, {
            side: "left",
            enabled: t,
            content: o.formatMessage(bs),
            metadata: o.formatMessage(_s, {
              shortcut: (0, _.jsx)(oh, {
                shortcut: "R"
              })
            }),
            children: (0, _.jsx)(at, {
              ref: s,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(bs)
            })
          })
        }),
        lh = (0, M.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = Ki(),
            {
              downloadRef: a,
              imageRef: i
            } = (0, M.useContext)(Vf),
            s = (0, Pe.UP)(a, n),
            l = (0, F.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbm foundry_1a74xwbj"
            });
          return (0, _.jsx)(nh, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Ps),
            children: (0, _.jsx)(at, {
              ref: s,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Ps),
              onPress: () => (async e => {
                if (!e) return;
                const t = e.currentSrc,
                  r = t.split("\\").pop()?.split("/").pop() || "";
                fetch(t, {
                  headers: {
                    origin: location.origin
                  }
                }).then(e => e.blob()).then(e => {
                  ((e, t) => {
                    const r = document.createElement("a");
                    r.href = e, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r)
                  })(window.URL.createObjectURL(e), r)
                }).catch(e => console.error(e))
              })(i.current)
            })
          })
        }),
        ch = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        },
        uh = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        dh = uh.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function fh(e) {
        return e.matches(dh)
      }
      uh.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), uh.join(':not([hidden]):not([tabindex="-1"]),');
      const hh = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        ph = e => e && "window" in e && e.window === e ? e : hh(e).defaultView || window;

      function mh(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }

      function vh(e) {
        if (function() {
            if (null == yh) {
              yh = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return yh = !0, !0
                  }
                })
              } catch {}
            }
            return yh
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
      let yh = null;
      let gh = !1;

      function bh(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
      }

      function _h(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function wh(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Ph = wh(function() {
          return _h(/^Mac/i)
        }),
        Eh = wh(function() {
          return _h(/^iPhone/i)
        }),
        xh = wh(function() {
          return _h(/^iPad/i) || Ph() && navigator.maxTouchPoints > 1
        }),
        Ch = wh(function() {
          return Eh() || xh()
        }),
        Sh = (wh(function() {
          return Ph() || Ch()
        }), wh(function() {
          return bh(/AppleWebKit/i) && !Th()
        })),
        Th = wh(function() {
          return bh(/Chrome/i)
        }),
        Oh = wh(function() {
          return bh(/Android/i)
        }),
        Rh = wh(function() {
          return bh(/Firefox/i)
        });
      let Nh = new Map,
        jh = new Set;

      function Ih() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = Nh.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), Nh.delete(r.target)), 0 === Nh.size)) {
            for (let e of jh) e();
            jh.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = Nh.get(r.target);
          n || (n = new Set, Nh.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Ih() : document.addEventListener("DOMContentLoaded", Ih));
      let kh = "default",
        Lh = "",
        Dh = new WeakMap;

      function Ah(e) {
        if (Ch()) {
          if ("disabled" !== kh) return;
          kh = "restoring", setTimeout(() => {
            var t;
            t = () => {
              if ("restoring" === kh) {
                const t = hh(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Lh || ""), Lh = "", kh = "default"
              }
            }, requestAnimationFrame(() => {
              ! function() {
                for (const [e] of Nh) "isConnected" in e && !e.isConnected && Nh.delete(e)
              }(), 0 === Nh.size ? t() : jh.add(t)
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Dh.has(e)) {
          let t = Dh.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Dh.delete(e)
        }
      }
      const Mh = M.createContext({
        register: () => {}
      });
      Mh.displayName = "PressResponderContext";
      var Hh = r(88842),
        Bh = r(57178),
        zh = r(72562);

      function Vh(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Fh, qh = new Map;

      function Uh(e, t) {
        if (e === t) return e;
        let r = qh.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = qh.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function Gh(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Vh(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Uh(r, o) : t[e] = void 0 !== o ? o : r : t[e] = Ae(r, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (Fh = new FinalizationRegistry(e => {
        qh.delete(e)
      }));
      const Xh = "undefined" != typeof document ? M.useLayoutEffect : () => {};

      function Kh(e) {
        const t = (0, M.useRef)(null);
        return Xh(() => {
          t.current = e
        }, [e]), (0, M.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      var Wh = r(35412);

      function Zh(e, t) {
        if (!(0, Wh.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let r = t;
        for (; null !== r;) {
          if (r === e) return !0;
          r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : mh(r) ? r.host : r.parentNode
        }
        return !1
      }

      function $h(e) {
        return (0, Wh.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }

      function Yh(e, t, r = !0) {
        var n, o;
        let {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        } = t;
        Rh() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Ph() ? a = !0 : i = !0);
        let c = Sh() && Ph() && !xh() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        Yh.isOpening = r, vh(e), e.dispatchEvent(c), Yh.isOpening = !1
      }

      function Qh(e) {
        let t = (0, M.useContext)(Mh);
        if (t) {
          let {
            register: r,
            ...n
          } = t;
          e = Gh(n, e), r()
        }
        return function(e, t) {
          Xh(() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          })
        }(t, e.ref), e
      }
      Yh.isOpening = !1;
      var Jh = new WeakMap;
      class ep {
        continuePropagation() {
          (0, zh._)(this, Jh, !1)
        }
        get shouldStopPropagation() {
          return (0, Hh._)(this, Jh)
        }
        constructor(e, t, r, n) {
          var o;
          (0, Bh._)(this, Jh, {
            writable: !0,
            value: void 0
          }), (0, zh._)(this, Jh, !0);
          let a = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const i = null == a ? void 0 : a.getBoundingClientRect();
          let s, l, c = 0,
            u = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, u = r.clientY), i && (null != l && null != u ? (s = l - i.left, c = u - i.top) : (s = i.width / 2, c = i.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = c
        }
      }
      const tp = Symbol("linkClicked"),
        rp = "react-aria-pressable-style",
        np = "data-react-aria-pressable";

      function op(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: a,
          onClick: i,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: u,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = Qh(e), [p, m] = (0, M.useState)(!1), v = (0, M.useRef)({
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
          removeAllGlobalListeners: g
        } = function() {
          let e = (0, M.useRef)(new Map),
            t = (0, M.useCallback)((t, r, n, o) => {
              let a = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(n), n(...t)
              } : n;
              e.current.set(n, {
                type: r,
                eventTarget: t,
                fn: a,
                options: o
              }), t.addEventListener(r, a, o)
            }, []),
            r = (0, M.useCallback)((t, r, n, o) => {
              var a;
              let i = (null === (a = e.current.get(n)) || void 0 === a ? void 0 : a.fn) || n;
              t.removeEventListener(r, i, o), e.current.delete(n)
            }, []),
            n = (0, M.useCallback)(() => {
              e.current.forEach((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              })
            }, [r]);
          return (0, M.useEffect)(() => n, [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), b = Kh((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new ep("pressstart", t, e);
            n(r), a = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), a
        }), _ = Kh((e, n, a = !0) => {
          let i = v.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new ep("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && a && !s) {
            let r = new ep("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, l
        }), w = Kh((e, t) => {
          let r = v.current;
          if (s) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let n = new ep("pressup", t, e);
            return a(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }), P = Kh(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(sp(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || Ah(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), E = Kh(e => {
          u && P(e)
        }), x = Kh(e => {
          null == i || i(e)
        }), C = Kh((e, t) => {
          if (i) {
            let r = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(r, t), i(function(e) {
              let t = e;
              return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
            }(r))
          }
        }), S = (0, M.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (ip(t.nativeEvent, t.currentTarget) && Zh(t.currentTarget, $h(t.nativeEvent))) {
                  var n;
                  lp($h(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      a = t => {
                        ip(t, n) && !t.repeat && Zh(n, $h(t)) && e.target && w(sp(e.target, t), "keyboard")
                      };
                    y(hh(t.currentTarget), "keyup", Vh(a, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Ph() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var r;
                if ((!t || Zh(t.currentTarget, $h(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Yh.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (r = t.nativeEvent).mozInputSource || !r.isTrusted) && (Oh() && r.pointerType ? "click" !== r.type || 1 !== r.buttons : 0 !== r.detail || r.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = w(sp(t.currentTarget, t), r),
                        a = _(sp(t.currentTarget, t), r, !0);
                      n = o && a, e.isOverTarget = !1, x(t), P(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      r = w(t, "virtual"),
                      o = _(t, "virtual");
                    x(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && ip(t, e.target)) {
                var n;
                lp($h(t), t.key) && t.preventDefault();
                let r = $h(t),
                  o = Zh(e.target, $h(t));
                _(sp(e.target, t), "keyboard", o), o && C(t, e.target), g(), "Enter" !== t.key && ap(e.target) && Zh(e.target, r) && !t[tp] && (t[tp] = !0, Yh(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !Zh(t.currentTarget, $h(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Oh() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let a = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (Ch()) {
                    if ("default" === kh) {
                      const t = hh(e);
                      Lh = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    kh = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Dh.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), a = b(t, e.pointerType);
                let o = $h(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(hh(t.currentTarget), "pointerup", r, !1), y(hh(t.currentTarget), "pointercancel", n, !1)
              }
              a && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (Zh(t.currentTarget, $h(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let r = function(e) {
                    for (; e && !fh(e);) e = e.parentElement;
                    let t = ph(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    gh = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, vh(r), l()))
                      },
                      i = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, vh(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", i, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", i, !0), gh = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              Zh(t.currentTarget, $h(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || w(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(sp(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(sp(e.target, t), e.pointerType, !1), E(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (Zh(e.target, $h(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? P(t) : (vh(e.target), e.target.click()))
                      }, 80);
                    y(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else P(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                P(e)
              };
            t.onDragStart = e => {
              Zh(e.currentTarget, $h(e.nativeEvent)) && P(e)
            }
          }
          return t
        }, [y, s, c, g, d, P, E, _, b, w, x, C]);
        return (0, M.useEffect)(() => {
          if (!f) return;
          const e = hh(f.current);
          if (!e || !e.head || e.getElementById(rp)) return;
          const t = e.createElement("style");
          t.id = rp, t.textContent = `\n@layer {\n  [${np}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, M.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            d || Ah(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: l || p,
          pressProps: Gh(h, S, {
            [np]: !0
          })
        }
      }

      function ap(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function ip(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof ph(o).HTMLInputElement && !up(o, r) || o instanceof ph(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && ap(o)) && "Enter" !== r)
      }

      function sp(e, t) {
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

      function lp(e, t) {
        return e instanceof HTMLInputElement ? !up(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : ap(e)))
        }(e)
      }
      const cp = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function up(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : cp.has(e.type)
      }

      function dp(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function fp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fp(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = dp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function pp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var mp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hp(hp({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) mp(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pp(e.variantClassNames, e => pp(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_i6k0ds0 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
          variantClassNames: {
            status: {
              neutral: "foundry_i6k0ds1",
              success: "foundry_i6k0ds2",
              invalid: "foundry_i6k0ds3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const yp = (0, M.createContext)(null);

      function gp() {
        const e = (0, M.useContext)(yp);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const bp = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...i
        }, s) => {
          const l = (0, F.mergeProps)({
              className: vp({
                status: a
              }),
              "data-testid": t
            }, i),
            c = r ? Ee.DX : "div";
          return (0, _.jsx)(yp.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: a,
              ...i
            },
            children: (0, _.jsx)(c, {
              ...l,
              ref: s,
              children: e
            })
          })
        }),
        _p = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = gp(), a = (0, F.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), i = {
            success: Me.Check,
            invalid: Me.X,
            neutral: Me.TriangleAlert
          }, s = t ? Ee.DX : i[o];
          return (0, _.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        wp = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: i
          } = gp(), s = (0, F.mergeProps)({
            "data-testid": t,
            id: i || a
          }, n), l = r ? Ee.DX : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        });
      var Pp = r(76286),
        Ep = r(63155),
        xp = "ScrollArea",
        [Cp, Sp] = (0, id.A)(xp),
        [Tp, Op] = Cp(xp),
        Rp = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...i
          } = e, [s, l] = M.useState(null), [c, u] = M.useState(null), [d, f] = M.useState(null), [h, p] = M.useState(null), [m, v] = M.useState(null), [y, g] = M.useState(0), [b, w] = M.useState(0), [P, E] = M.useState(!1), [x, C] = M.useState(!1), S = (0, ad.s)(t, e => l(e)), T = (0, of.jH)(o);
          return (0, _.jsx)(Tp, {
            scope: r,
            type: n,
            dir: T,
            scrollHideDelay: a,
            scrollArea: s,
            viewport: c,
            onViewportChange: u,
            content: d,
            onContentChange: f,
            scrollbarX: h,
            onScrollbarXChange: p,
            scrollbarXEnabled: P,
            onScrollbarXEnabledChange: E,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: x,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, _.jsx)(fd.sG.div, {
              dir: T,
              ...i,
              ref: S,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        });
      Rp.displayName = xp;
      var Np = "ScrollAreaViewport",
        jp = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, i = Op(Np, r), s = M.useRef(null), l = (0, ad.s)(t, s, i.onViewportChange);
          return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, _.jsx)(fd.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: l,
              style: {
                overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, _.jsx)("div", {
                ref: i.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        });
      jp.displayName = Np;
      var Ip = "ScrollAreaScrollbar",
        kp = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Op(Ip, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: i
          } = o, s = "horizontal" === e.orientation;
          return M.useEffect(() => (s ? a(!0) : i(!0), () => {
            s ? a(!1) : i(!1)
          }), [s, a, i]), "hover" === o.type ? (0, _.jsx)(Lp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, _.jsx)(Dp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, _.jsx)(Ap, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, _.jsx)(Mp, {
            ...n,
            ref: t
          }) : null
        });
      kp.displayName = Ip;
      var Lp = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Op(Ip, e.__scopeScrollArea), [a, i] = M.useState(!1);
          return M.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), i(!0)
                },
                n = () => {
                  t = window.setTimeout(() => i(!1), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, _.jsx)(dd.C, {
            present: r || a,
            children: (0, _.jsx)(Ap, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Dp = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Op(Ip, e.__scopeScrollArea), a = "horizontal" === e.orientation, i = tm(() => l("SCROLL_END"), 100), [s, l] = (c = {
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
          }, M.useReducer((e, t) => c[e][t] ?? e, "hidden"));
          var c;
          return M.useEffect(() => {
            if ("idle" === s) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [s, o.scrollHideDelay, l]), M.useEffect(() => {
            const e = o.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (l("SCROLL"), i()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, a, l, i]), (0, _.jsx)(dd.C, {
            present: r || "hidden" !== s,
            children: (0, _.jsx)(Mp, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, od.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, od.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        Ap = M.forwardRef((e, t) => {
          const r = Op(Ip, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, i] = M.useState(!1),
            s = "horizontal" === e.orientation,
            l = tm(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                i(s ? e : t)
              }
            }, 10);
          return rm(r.viewport, l), rm(r.content, l), (0, _.jsx)(dd.C, {
            present: n || a,
            children: (0, _.jsx)(Mp, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Mp = M.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Op(Ip, e.__scopeScrollArea), a = M.useRef(null), i = M.useRef(0), [s, l] = M.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = Zp(s.viewport, s.content), u = {
            ...n,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => i.current = 0,
            onThumbPointerDown: e => i.current = e
          };

          function d(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = $p(r),
                a = t || o / 2,
                i = o - a,
                s = r.scrollbar.paddingStart + a,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - i,
                c = r.content - r.viewport;
              return Qp([s, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, i.current, s, t)
          }
          return "horizontal" === r ? (0, _.jsx)(Hp, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Yp(o.viewport.scrollLeft, s, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, _.jsx)(Bp, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Yp(o.viewport.scrollTop, s);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = d(e))
            }
          }) : null
        }),
        Hp = M.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Op(Ip, e.__scopeScrollArea), [i, s] = M.useState(), l = M.useRef(null), c = (0, ad.s)(t, l, a.onScrollbarXChange);
          return M.useEffect(() => {
            l.current && s(getComputedStyle(l.current))
          }, [l]), (0, _.jsx)(Fp, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": $p(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Jp(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && i && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Wp(i.paddingLeft),
                  paddingEnd: Wp(i.paddingRight)
                }
              })
            }
          })
        }),
        Bp = M.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Op(Ip, e.__scopeScrollArea), [i, s] = M.useState(), l = M.useRef(null), c = (0, ad.s)(t, l, a.onScrollbarYChange);
          return M.useEffect(() => {
            l.current && s(getComputedStyle(l.current))
          }, [l]), (0, _.jsx)(Fp, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": $p(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Jp(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && i && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Wp(i.paddingTop),
                  paddingEnd: Wp(i.paddingBottom)
                }
              })
            }
          })
        }),
        [zp, Vp] = Cp(Ip),
        Fp = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: i,
            onThumbPointerDown: s,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: u,
            onResize: d,
            ...f
          } = e, h = Op(Ip, r), [p, m] = M.useState(null), v = (0, ad.s)(t, e => m(e)), y = M.useRef(null), g = M.useRef(""), b = h.viewport, w = n.content - n.viewport, P = (0, Pp.c)(u), E = (0, Pp.c)(l), x = tm(d, 10);

          function C(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              c({
                x: t,
                y: r
              })
            }
          }
          return M.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && P(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, p, w, P]), M.useEffect(E, [n, E]), rm(p, x), rm(h.content, x), (0, _.jsx)(zp, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, Pp.c)(a),
            onThumbPointerUp: (0, Pp.c)(i),
            onThumbPositionChange: E,
            onThumbPointerDown: (0, Pp.c)(s),
            children: (0, _.jsx)(fd.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, od.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, od.mK)(e.onPointerMove, C),
              onPointerUp: (0, od.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        qp = "ScrollAreaThumb",
        Up = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Vp(qp, e.__scopeScrollArea);
          return (0, _.jsx)(dd.C, {
            present: r || o.hasThumb,
            children: (0, _.jsx)(Gp, {
              ref: t,
              ...n
            })
          })
        }),
        Gp = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = Op(qp, r), i = Vp(qp, r), {
            onThumbPositionChange: s
          } = i, l = (0, ad.s)(t, e => i.onThumbChange(e)), c = M.useRef(void 0), u = tm(() => {
            c.current && (c.current(), c.current = void 0)
          }, 100);
          return M.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = em(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, u, s]), (0, _.jsx)(fd.sG.div, {
            "data-state": i.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, od.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              i.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, od.mK)(e.onPointerUp, i.onThumbPointerUp)
          })
        });
      Up.displayName = qp;
      var Xp = "ScrollAreaCorner";
      M.forwardRef((e, t) => {
        const r = Op(Xp, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, _.jsx)(Kp, {
          ...e,
          ref: t
        }) : null
      }).displayName = Xp;
      var Kp = M.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Op(Xp, r), [a, i] = M.useState(0), [s, l] = M.useState(0), c = Boolean(a && s);
        return rm(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), rm(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), i(e)
        }), c ? (0, _.jsx)(fd.sG.div, {
          ...n,
          ref: t,
          style: {
            width: a,
            height: s,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function Wp(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Zp(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function $p(e) {
        const t = Zp(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Yp(e, t, r = "ltr") {
        const n = $p(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          i = t.content - t.viewport,
          s = a - n,
          l = nf(e, "ltr" === r ? [0, i] : [-1 * i, 0]);
        return Qp([0, i], [0, s])(l)
      }

      function Qp(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Jp(e, t) {
        return e > 0 && e < t
      }
      var em = (e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function o() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            i = r.left !== a.left,
            s = r.top !== a.top;
          (i || s) && t(), r = a, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function tm(e, t) {
        const r = (0, Pp.c)(e),
          n = M.useRef(0);
        return M.useEffect(() => () => window.clearTimeout(n.current), []), M.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function rm(e, t) {
        const r = (0, Pp.c)(t);
        (0, Ep.N)(() => {
          let t = 0;
          if (e) {
            const n = new ResizeObserver(() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
            });
            return n.observe(e), () => {
              window.cancelAnimationFrame(t), n.unobserve(e)
            }
          }
        }, [e, r])
      }
      var nm = Rp,
        om = jp,
        am = kp,
        im = Up,
        sm = r(15234),
        lm = r(86683),
        cm = r(94926),
        um = r(19690),
        dm = [" ", "Enter", "ArrowUp", "ArrowDown"],
        fm = [" ", "Enter"],
        hm = "Select",
        [pm, mm, vm] = (0, lf.N)(hm),
        [ym, gm] = (0, id.A)(hm, [vm, cd.Bk]),
        bm = (0, cd.Bk)(),
        [_m, wm] = ym(hm),
        [Pm, Em] = ym(hm),
        xm = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            value: i,
            defaultValue: s,
            onValueChange: l,
            dir: c,
            name: u,
            autoComplete: d,
            disabled: f,
            required: h,
            form: p
          } = e, m = bm(t), [v, y] = M.useState(null), [g, b] = M.useState(null), [w, P] = M.useState(!1), E = (0, of.jH)(c), [x, C] = (0, pd.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: hm
          }), [S, T] = (0, pd.useControllableState)({
            prop: i,
            defaultProp: s,
            onChange: l,
            caller: hm
          }), O = M.useRef(null), R = !v || p || !!v.closest("form"), [N, j] = M.useState(new Set), I = Array.from(N).map(e => e.props.value).join(";");
          return (0, _.jsx)(cd.bL, {
            ...m,
            children: (0, _.jsxs)(_m, {
              required: h,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: P,
              contentId: (0, ld.useId)(),
              value: S,
              onValueChange: T,
              open: x,
              onOpenChange: C,
              dir: E,
              triggerPointerDownPosRef: O,
              disabled: f,
              children: [(0, _.jsx)(pm.Provider, {
                scope: t,
                children: (0, _.jsx)(Pm, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: M.useCallback(e => {
                    j(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: M.useCallback(e => {
                    j(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), R ? (0, _.jsxs)(av, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: u,
                autoComplete: d,
                value: S,
                onChange: e => T(e.target.value),
                disabled: f,
                form: p,
                children: [void 0 === S ? (0, _.jsx)("option", {
                  value: ""
                }) : null, Array.from(N)]
              }, I) : null]
            })
          })
        };
      xm.displayName = hm;
      var Cm = "SelectTrigger",
        Sm = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = bm(r), i = wm(Cm, r), s = i.disabled || n, l = (0, ad.s)(t, i.onTriggerChange), c = mm(r), u = M.useRef("touch"), [d, f, h] = sv(e => {
            const t = c().filter(e => !e.disabled),
              r = t.find(e => e.value === i.value),
              n = lv(t, e, r);
            void 0 !== n && i.onValueChange(n.value)
          }), p = e => {
            s || (i.onOpenChange(!0), h()), e && (i.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, _.jsx)(cd.Mz, {
            asChild: !0,
            ...a,
            children: (0, _.jsx)(fd.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": i.contentId,
              "aria-expanded": i.open,
              "aria-required": i.required,
              "aria-autocomplete": "none",
              dir: i.dir,
              "data-state": i.open ? "open" : "closed",
              disabled: s,
              "data-disabled": s ? "" : void 0,
              "data-placeholder": iv(i.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, od.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== u.current && p(e)
              }),
              onPointerDown: (0, od.mK)(o.onPointerDown, e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              }),
              onKeyDown: (0, od.mK)(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || dm.includes(e.key) && (p(), e.preventDefault())
              })
            })
          })
        });
      Sm.displayName = Cm;
      var Tm = "SelectValue",
        Om = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: i = "",
            ...s
          } = e, l = wm(Tm, r), {
            onValueNodeHasChildrenChange: c
          } = l, u = void 0 !== a, d = (0, ad.s)(t, l.onValueNodeChange);
          return (0, Ep.N)(() => {
            c(u)
          }, [c, u]), (0, _.jsx)(fd.sG.span, {
            ...s,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: iv(l.value) ? (0, _.jsx)(_.Fragment, {
              children: i
            }) : a
          })
        });
      Om.displayName = Tm;
      var Rm = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, _.jsx)(fd.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Rm.displayName = "SelectIcon";
      var Nm = e => (0, _.jsx)(ud.Portal, {
        asChild: !0,
        ...e
      });
      Nm.displayName = "SelectPortal";
      var jm = "SelectContent",
        Im = M.forwardRef((e, t) => {
          const r = wm(jm, e.__scopeSelect),
            [n, o] = M.useState();
          if ((0, Ep.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? qu.createPortal((0, _.jsx)(Lm, {
              scope: e.__scopeSelect,
              children: (0, _.jsx)(pm.Slot, {
                scope: e.__scopeSelect,
                children: (0, _.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, _.jsx)(Mm, {
            ...e,
            ref: t
          })
        });
      Im.displayName = jm;
      var km = 10,
        [Lm, Dm] = ym(jm),
        Am = (0, hd.createSlot)("SelectContent.RemoveScroll"),
        Mm = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            side: s,
            sideOffset: l,
            align: c,
            alignOffset: u,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: h,
            sticky: p,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
          } = e, g = wm(jm, r), [b, w] = M.useState(null), [P, E] = M.useState(null), x = (0, ad.s)(t, e => w(e)), [C, S] = M.useState(null), [T, O] = M.useState(null), R = mm(r), [N, j] = M.useState(!1), I = M.useRef(!1);
          M.useEffect(() => {
            if (b) return (0, cm.Eq)(b)
          }, [b]), (0, sm.Oh)();
          const k = M.useCallback(e => {
              const [t, ...r] = R().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && P && (P.scrollTop = 0), r === n && P && (P.scrollTop = P.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [R, P]),
            L = M.useCallback(() => k([C, b]), [k, C, b]);
          M.useEffect(() => {
            N && L()
          }, [N, L]);
          const {
            onOpenChange: D,
            triggerPointerDownPosRef: A
          } = g;
          M.useEffect(() => {
            if (b) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (A.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (A.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || D(!1), document.removeEventListener("pointermove", t), A.current = null
                };
              return null !== A.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [b, D, A]), M.useEffect(() => {
            const e = () => D(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [D]);
          const [H, B] = sv(e => {
            const t = R().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = lv(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), z = M.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (S(e), n && (I.current = !0))
          }, [g.value]), V = M.useCallback(() => b?.focus(), [b]), F = M.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && O(e)
          }, [g.value]), q = "popper" === n ? Bm : Hm, U = q === Bm ? {
            side: s,
            sideOffset: l,
            align: c,
            alignOffset: u,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: h,
            sticky: p,
            hideWhenDetached: m,
            avoidCollisions: v
          } : {};
          return (0, _.jsx)(Lm, {
            scope: r,
            content: b,
            viewport: P,
            onViewportChange: E,
            itemRefCallback: z,
            selectedItem: C,
            onItemLeave: V,
            itemTextRefCallback: F,
            focusSelectedItem: L,
            selectedItemText: T,
            position: n,
            isPositioned: N,
            searchRef: H,
            children: (0, _.jsx)(um.RemoveScroll, {
              as: Am,
              allowPinchZoom: !0,
              children: (0, _.jsx)(lm.FocusScope, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, od.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, _.jsx)(sd.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: i,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, _.jsx)(q, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...U,
                    onPlaced: () => j(!0),
                    ref: x,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, od.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = R().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => k(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      Mm.displayName = "SelectContentImpl";
      var Hm = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = wm(jm, r), i = Dm(jm, r), [s, l] = M.useState(null), [c, u] = M.useState(null), d = (0, ad.s)(t, e => u(e)), f = mm(r), h = M.useRef(!1), p = M.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = i, b = M.useCallback(() => {
          if (a.trigger && a.valueNode && s && c && m && v && y) {
            const e = a.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              r = a.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                i = e.left - a,
                l = e.width + i,
                c = Math.max(l, t.width),
                u = window.innerWidth - km,
                d = nf(a, [km, Math.max(km, u - c)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                i = window.innerWidth - e.right - a,
                l = e.width + i,
                c = Math.max(l, t.width),
                u = window.innerWidth - km,
                d = nf(a, [km, Math.max(km, u - c)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const i = f(),
              l = window.innerHeight - 2 * km,
              u = m.scrollHeight,
              d = window.getComputedStyle(c),
              p = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              _ = p + g + u + parseInt(d.paddingBottom, 10) + b,
              w = Math.min(5 * v.offsetHeight, _),
              P = window.getComputedStyle(m),
              E = parseInt(P.paddingTop, 10),
              x = parseInt(P.paddingBottom, 10),
              C = e.top + e.height / 2 - km,
              S = l - C,
              T = v.offsetHeight / 2,
              O = p + g + (v.offsetTop + T),
              R = _ - O;
            if (O <= C) {
              const e = i.length > 0 && v === i[i.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = c.clientHeight - m.offsetTop - m.offsetHeight,
                r = O + Math.max(S, T + (e ? x : 0) + t + b);
              s.style.height = r + "px"
            } else {
              const e = i.length > 0 && v === i[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(C, p + m.offsetTop + (e ? E : 0) + T) + R;
              s.style.height = t + "px", m.scrollTop = O - C + m.offsetTop
            }
            s.style.margin = `${km}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => h.current = !0)
          }
        }, [f, a.trigger, a.valueNode, s, c, m, v, y, a.dir, n]);
        (0, Ep.N)(() => b(), [b]);
        const [w, P] = M.useState();
        (0, Ep.N)(() => {
          c && P(window.getComputedStyle(c).zIndex)
        }, [c]);
        const E = M.useCallback(e => {
          e && !0 === p.current && (b(), g?.(), p.current = !1)
        }, [b, g]);
        return (0, _.jsx)(zm, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: E,
          children: (0, _.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, _.jsx)(fd.sG.div, {
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
      });
      Hm.displayName = "SelectItemAlignedPosition";
      var Bm = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = km,
          ...a
        } = e, i = bm(r);
        return (0, _.jsx)(cd.UC, {
          ...i,
          ...a,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      });
      Bm.displayName = "SelectPopperPosition";
      var [zm, Vm] = ym(jm, {}), Fm = "SelectViewport", qm = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = Dm(Fm, r), i = Vm(Fm, r), s = (0, ad.s)(t, a.onViewportChange), l = M.useRef(0);
        return (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, _.jsx)(pm.Slot, {
            scope: r,
            children: (0, _.jsx)(fd.sG.div, {
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
              onScroll: (0, od.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = i;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * km,
                      o = parseFloat(r.style.minHeight),
                      a = parseFloat(r.style.height),
                      i = Math.max(o, a);
                    if (i < n) {
                      const o = i + e,
                        a = Math.min(n, o),
                        s = o - a;
                      r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = s > 0 ? s : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = t.scrollTop
              })
            })
          })]
        })
      });
      qm.displayName = Fm;
      var Um = "SelectGroup",
        [Gm, Xm] = ym(Um);
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, ld.useId)();
        return (0, _.jsx)(Gm, {
          scope: r,
          id: o,
          children: (0, _.jsx)(fd.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Um;
      var Km = "SelectLabel";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Xm(Km, r);
        return (0, _.jsx)(fd.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Km;
      var Wm = "SelectItem",
        [Zm, $m] = ym(Wm),
        Ym = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...i
          } = e, s = wm(Wm, r), l = Dm(Wm, r), c = s.value === n, [u, d] = M.useState(a ?? ""), [f, h] = M.useState(!1), p = (0, ad.s)(t, e => l.itemRefCallback?.(e, n, o)), m = (0, ld.useId)(), v = M.useRef("touch"), y = () => {
            o || (s.onValueChange(n), s.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, _.jsx)(Zm, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: c,
            onItemTextChange: M.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, _.jsx)(pm.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: u,
              children: (0, _.jsx)(fd.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": c && f,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: p,
                onFocus: (0, od.mK)(i.onFocus, () => h(!0)),
                onBlur: (0, od.mK)(i.onBlur, () => h(!1)),
                onClick: (0, od.mK)(i.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: (0, od.mK)(i.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: (0, od.mK)(i.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: (0, od.mK)(i.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, od.mK)(i.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, od.mK)(i.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (fm.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Ym.displayName = Wm;
      var Qm = "SelectItemText",
        Jm = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, i = wm(Qm, r), s = Dm(Qm, r), l = $m(Qm, r), c = Em(Qm, r), [u, d] = M.useState(null), f = (0, ad.s)(t, e => d(e), l.onItemTextChange, e => s.itemTextRefCallback?.(e, l.value, l.disabled)), h = u?.textContent, p = M.useMemo(() => (0, _.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = c;
          return (0, Ep.N)(() => (m(p), () => v(p)), [m, v, p]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(fd.sG.span, {
              id: l.textId,
              ...a,
              ref: f
            }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? qu.createPortal(a.children, i.valueNode) : null]
          })
        });
      Jm.displayName = Qm;
      var ev = "SelectItemIndicator";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return $m(ev, r).isSelected ? (0, _.jsx)(fd.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = ev;
      var tv = "SelectScrollUpButton";
      M.forwardRef((e, t) => {
        const r = Dm(tv, e.__scopeSelect),
          n = Vm(tv, e.__scopeSelect),
          [o, a] = M.useState(!1),
          i = (0, ad.s)(t, n.onScrollButtonChange);
        return (0, Ep.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, _.jsx)(nv, {
          ...e,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      }).displayName = tv;
      var rv = "SelectScrollDownButton";
      M.forwardRef((e, t) => {
        const r = Dm(rv, e.__scopeSelect),
          n = Vm(rv, e.__scopeSelect),
          [o, a] = M.useState(!1),
          i = (0, ad.s)(t, n.onScrollButtonChange);
        return (0, Ep.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, _.jsx)(nv, {
          ...e,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      }).displayName = rv;
      var nv = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = Dm("SelectScrollButton", r), i = M.useRef(null), s = mm(r), l = M.useCallback(() => {
          null !== i.current && (window.clearInterval(i.current), i.current = null)
        }, []);
        return M.useEffect(() => () => l(), [l]), (0, Ep.N)(() => {
          const e = s().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [s]), (0, _.jsx)(fd.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, od.mK)(o.onPointerDown, () => {
            null === i.current && (i.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, od.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === i.current && (i.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, od.mK)(o.onPointerLeave, () => {
            l()
          })
        })
      });
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, _.jsx)(fd.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var ov = "SelectArrow";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = bm(r), a = wm(ov, r), i = Dm(ov, r);
        return a.open && "popper" === i.position ? (0, _.jsx)(cd.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = ov;
      var av = M.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = M.useRef(null),
          a = (0, ad.s)(n, o),
          i = (0, af.Z)(t);
        return M.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (i !== t && n) {
            const r = new Event("change", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [i, t]), (0, _.jsx)(fd.sG.select, {
          ...r,
          style: {
            ...md.VISUALLY_HIDDEN_STYLES,
            ...r.style
          },
          ref: a,
          defaultValue: t
        })
      });

      function iv(e) {
        return "" === e || void 0 === e
      }

      function sv(e) {
        const t = (0, Pp.c)(e),
          r = M.useRef(""),
          n = M.useRef(0),
          o = M.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = M.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return M.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function lv(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (i = e, s = Math.max(o, 0), i.map((e, t) => i[(s + t) % i.length]));
        var i, s;
        1 === n.length && (a = a.filter(e => e !== r));
        const l = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      av.displayName = "SelectBubbleInput";
      var cv = xm,
        uv = Sm,
        dv = Om,
        fv = Rm,
        hv = Nm,
        pv = Im,
        mv = qm,
        vv = Ym,
        yv = Jm;

      function gv(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function bv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = gv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function wv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Pv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ev = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _v(_v({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Pv(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wv(e.variantClassNames, e => wv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        xv = Ev({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Cv = Ev({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sv = Ev({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Tv = Ev({
          defaultClassName: "foundry_uaq1gw1 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
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
        Ov = Ev({
          defaultClassName: "foundry_uaq1gw6 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
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
        Rv = Ev({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Nv = (0, M.createContext)(null);

      function jv() {
        const e = (0, M.useContext)(Nv);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Iv = (0, M.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: a,
          onValueChange: i,
          name: s,
          value: l,
          defaultOpen: c,
          onOpenChange: u,
          isOpen: d,
          size: f = "MD",
          status: h = "neutral",
          ...p
        }, m) => {
          const v = (0, M.useRef)(null),
            y = (0, Pe.UP)(v, m),
            g = (0, M.useId)(),
            b = (0, M.useId)(),
            w = (0, M.useId)(),
            P = (0, M.useId)(),
            E = (0, M.useId)(),
            x = (0, M.useId)(),
            [C = !1, S] = (0, Pe.ic)({
              prop: d,
              defaultProp: c,
              onChange: u
            }),
            T = (0, F.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, _.jsx)(Nv.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: x,
              hintId: P,
              popoverId: E,
              defaultValue: a,
              onValueChange: i,
              value: l,
              isOpen: C,
              setIsOpen: S,
              defaultOpen: c,
              onOpenChange: u,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: h,
              size: f
            },
            children: (0, _.jsx)(cv, {
              required: r,
              disabled: n,
              open: C,
              onOpenChange: () => S(!o && !C),
              value: l,
              defaultValue: a,
              onValueChange: i,
              name: s,
              children: (0, _.jsx)("div", {
                ref: y,
                ...T,
                children: e
              })
            })
          })
        }),
        kv = (0, M.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = jv(), i = (0, F.mergeProps)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: xv({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, _.jsx)(pv, {
            ...i,
            ref: o,
            children: (0, _.jsx)(mv, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Lv = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, _.jsxs)(nm, {
            ...o,
            ref: n,
            children: [(0, _.jsx)(om, {
              className: "foundry_uaq1gwu",
              style: {
                overflowY: void 0
              },
              children: e
            }), (0, _.jsx)(am, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, _.jsx)(im, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Dv = (0, M.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...a
        }, i) => {
          const {
            isReadOnly: s,
            status: l,
            isDisabled: c,
            labelId: u,
            hintId: d,
            triggerId: f,
            popoverId: h,
            descriptionId: p,
            isOpen: m,
            value: v,
            size: y
          } = jv(), {
            isPressed: g,
            pressProps: b
          } = op({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, F.mergeProps)({
            id: f,
            className: Ov({
              size: y,
              isReadOnly: !!s,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!c
            }),
            "aria-labelledby": (0, F.joinStrings)(r, u, d),
            "aria-describedby": (0, F.joinStrings)(n, p),
            "aria-activedescendant": v,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, F.omit)(b, "onKeyDown"), a), P = o ? Ee.DX : uv;
          return (0, _.jsx)(P, {
            ...w,
            ref: i,
            children: e
          })
        }),
        Av = (0, M.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: a
          } = jv(), i = (0, F.mergeProps)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), s = t ? Ee.DX : "span";
          return (0, _.jsx)(s, {
            ...i,
            ref: o,
            children: (0, _.jsx)(dv, {
              placeholder: e,
              "aria-label": a
            })
          })
        }),
        Mv = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: i
          } = jv(), s = i ? Me.ChevronUp : Me.ChevronDown, l = (0, F.mergeProps)({
            asChild: !0,
            className: Rv({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, _.jsx)(fv, {
            ...l,
            ref: n,
            children: e || (0, _.jsx)(s, {
              size: "LG",
              label: ""
            })
          })
        }),
        Hv = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, i) => {
          const {
            isRequired: s,
            isDisabled: l,
            labelId: c,
            triggerId: u
          } = jv(), d = s && !o, f = (0, F.mergeProps)({
            id: a.id || c,
            htmlFor: u,
            "data-testid": e,
            className: Tv({
              showAsterisk: d,
              isDisabled: l
            })
          }, a), h = t ? Ee.DX : "label";
          return (0, _.jsx)(Ee.s6, {
            enabled: n,
            children: (0, _.jsx)(h, {
              ...f,
              ref: i,
              children: r
            })
          })
        }),
        Bv = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = jv(), s = (0, F.mergeProps)({
            className: Cv({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? Ee.DX : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        zv = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: i
          } = jv(), s = (0, F.mergeProps)({
            className: Sv({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), l = t ? Ee.DX : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Vv = (0, M.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const i = (0, M.useRef)(null),
            s = (0, Pe.UP)(i, a),
            l = (0, F.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, _.jsx)(vv, {
            ref: s,
            ...l,
            children: e
          })
        }),
        Fv = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, _.jsx)(yv, {
            ref: n,
            asChild: !0,
            children: (0, _.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        qv = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, _.jsx)(fv, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        Uv = hv,
        Gv = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: i
          } = jv(), s = (0, F.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: i
          }, n), l = r ? Ee.DX : bp;
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Xv = _p,
        Kv = wp;
      var Wv = r(36768),
        Zv = r(99098),
        $v = r(79888);

      function Yv(e, t, r) {
        let n = (0, $v.J)(() => {
          r && r(t)
        });
        (0, M.useEffect)(() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", n), () => {
            null == r || r.removeEventListener("reset", n)
          }
        }, [e, n])
      }
      var Qv = r(41149),
        Jv = r(52061);

      function ey(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: a,
          name: i,
          form: s,
          children: l,
          "aria-label": c,
          "aria-labelledby": u,
          validationState: d = "valid",
          isInvalid: f,
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g
        } = e, {
          pressProps: b,
          isPressed: _
        } = (0, Qv.d)({
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g,
          isDisabled: n
        }), {
          pressProps: w,
          isPressed: P
        } = (0, Qv.d)({
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPressUp: y,
          onClick: g,
          onPress(e) {
            var n;
            null == v || v(e), t.toggle(), null === (n = r.current) || void 0 === n || n.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: E
        } = (0, Jv.Wc)(e, r), x = (0, Wv.v)(b, E), C = (0, Zv.$)(e, {
          labelable: !0
        });
        return Yv(r, t.defaultSelected, t.setSelected), {
          labelProps: (0, Wv.v)(w, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, Wv.v)(C, {
            "aria-invalid": f || "invalid" === d || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: n,
            ...null == a ? {} : {
              value: a
            },
            name: i,
            form: s,
            type: "checkbox",
            ...x
          }),
          isSelected: t.isSelected,
          isPressed: _ || P,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === d
        }
      }

      function ty(e, t, r) {
        let [n, o] = (0, M.useState)(e || t), a = (0, M.useRef)(void 0 !== e), i = void 0 !== e;
        (0, M.useEffect)(() => {
          a.current, a.current = i
        }, [i]);
        let s = i ? e : n,
          l = (0, M.useCallback)((e, ...t) => {
            let n = (e, ...t) => {
              r && (Object.is(s, e) || r(e, ...t)), i || (s = e)
            };
            "function" == typeof e ? o((r, ...o) => {
              let a = e(i ? s : r, ...o);
              return n(a, ...t), i ? r : a
            }) : (i || o(e), n(e, ...t))
          }, [i, s, r]);
        return [s, l]
      }

      function ry(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = ty(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, M.useState)(r);
        var a;
        return {
          isSelected: r,
          defaultSelected: null !== (a = e.defaultSelected) && void 0 !== a ? a : o,
          setSelected: function(e) {
            t || n(e)
          },
          toggle: function() {
            t || n(!r)
          }
        }
      }

      function ny(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function oy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ay(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? oy(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ny(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function iy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ly = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ay(ay({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) sy(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return iy(e.variantClassNames, e => iy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        cy = ly({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        uy = ly({
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
        dy = ly({
          defaultClassName: "foundry_okz6z2b",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
              LG: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            },
            isDisabled: {
              true: "foundry_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        fy = ly({
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
        hy = ly({
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
      const py = (0, M.createContext)(null);

      function my() {
        const e = (0, M.useContext)(py);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const vy = (0, M.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: a = !1,
          isReadOnly: i = !1,
          ...s
        }, l) => {
          const c = (0, F.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, s),
            u = n ? Ee.DX : "div",
            d = (0, M.useId)(),
            f = (0, M.useId)(),
            h = (0, M.useId)();
          return (0, _.jsx)(py.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: f,
              inputId: h,
              isDisabled: a,
              isReadOnly: i,
              ...s
            },
            children: (0, _.jsx)(u, {
              ...c,
              ref: l,
              children: o
            })
          })
        }),
        yy = (0, M.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: a,
          isSelected: i,
          defaultSelected: s,
          onSelectedChange: l,
          name: c,
          value: u,
          ...d
        }, f) => {
          const h = (0, M.useRef)(null),
            p = (0, Pe.UP)(h, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: P
            } = my(),
            E = ry({
              isDisabled: w,
              isReadOnly: P,
              isSelected: i,
              defaultSelected: s,
              onChange: l
            }),
            {
              inputProps: x
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: a,
                isPressed: i,
                isDisabled: s,
                isReadOnly: l
              } = ey(e, t, r);
              return {
                labelProps: n,
                inputProps: {
                  ...o,
                  role: "switch",
                  checked: a
                },
                isSelected: a,
                isPressed: i,
                isDisabled: s,
                isReadOnly: l
              }
            }({
              id: a || y,
              "aria-labelledby": (0, F.joinStrings)(n, g),
              "aria-describedby": (0, F.joinStrings)(o, b),
              name: c,
              value: u,
              isDisabled: w,
              isReadOnly: P
            }, E, h),
            C = (0, F.mergeProps)({
              className: hy({
                appearance: v
              }),
              "data-state": E.isSelected ? "selected" : "unselected",
              "data-disabled": w || P,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || P || E.toggle()
              }
            }, d);
          return (0, _.jsxs)("div", {
            ...C,
            children: [(0, _.jsx)(Ee.s6, {
              children: (0, _.jsx)("input", {
                ...x,
                ref: p
              })
            }), (0, _.jsx)("div", {
              className: fy({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, _.jsx)("div", {
                className: uy({
                  size: m,
                  isSelected: E.isSelected
                })
              })
            })]
          })
        }),
        gy = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            isDisabled: i,
            labelId: s,
            inputId: l,
            size: c
          } = my(), u = (0, F.mergeProps)({
            id: o.id || s,
            htmlFor: l,
            "data-testid": e,
            className: dy({
              isDisabled: i,
              size: c
            })
          }, o), d = t ? Ee.DX : "label";
          return (0, _.jsx)(Ee.s6, {
            enabled: n,
            children: (0, _.jsx)(d, {
              ...u,
              ref: a,
              children: r
            })
          })
        }),
        by = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = my(), s = n.id || i, l = (0, F.mergeProps)({
            className: cy({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? Ee.DX : "div";
          return (0, _.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        _y = {
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
        wy = {
          ..._y,
          customError: !0,
          valid: !1
        },
        Py = {
          isInvalid: !1,
          validationDetails: _y,
          validationErrors: []
        },
        Ey = (0, M.createContext)({}),
        xy = "__formValidationState" + Date.now();

      function Cy(e) {
        if (e[xy]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: a
          } = e[xy];
          return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: a
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: r,
            name: n,
            value: o,
            builtinValidation: a,
            validate: i,
            validationBehavior: s = "aria"
          } = e;
          r && (t || (t = "invalid" === r));
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: wy
            } : null,
            c = (0, M.useMemo)(() => {
              if (!i || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return Sy(r)
                }
                return []
              }(i, o);
              return Ty(e)
            }, [i, o]);
          (null == a ? void 0 : a.validationDetails.valid) && (a = void 0);
          let u = (0, M.useContext)(Ey),
            d = (0, M.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => Sy(u[e])) : Sy(u[n]) : [], [u, n]),
            [f, h] = (0, M.useState)(u),
            [p, m] = (0, M.useState)(!1);
          u !== f && (h(u), m(!1));
          let v = (0, M.useMemo)(() => Ty(p ? [] : d), [p, d]),
            y = (0, M.useRef)(Py),
            [g, b] = (0, M.useState)(Py),
            _ = (0, M.useRef)(Py),
            [w, P] = (0, M.useState)(!1);
          return (0, M.useEffect)(() => {
            if (!w) return;
            P(!1);
            let e = c || a || y.current;
            Oy(e, _.current) || (_.current = e, b(e))
          }), {
            realtimeValidation: l || v || c || a || Py,
            displayValidation: "native" === s ? l || v || g : l || v || c || a || g,
            updateValidation(e) {
              "aria" !== s || Oy(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = Py;
              Oy(e, _.current) || (_.current = e, b(e)), "native" === s && P(!1), m(!0)
            },
            commitValidation() {
              "native" === s && P(!0), m(!0)
            }
          }
        }(e)
      }

      function Sy(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Ty(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: wy
        } : null
      }

      function Oy(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }
      var Ry = r(38223),
        Ny = r(28830);

      function jy(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, Ny.N)(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: Iy(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let a = (0, M.useRef)(!1),
          i = (0, $v.J)(() => {
            a.current || t.resetValidation()
          }),
          s = (0, $v.J)(e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let a = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var i;
            !e.defaultPrevented && r && a && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!r.validity.valid) return r
              }
              return null
            }(a) === r.current && (o ? o() : null === (i = r.current) || void 0 === i || i.focus(), (0, Ry.Cl)("keyboard")), e.preventDefault()
          }),
          l = (0, $v.J)(() => {
            t.commitValidation()
          });
        (0, M.useEffect)(() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form,
            n = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            a.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort, null == n || n.call(t), a.current = !1
          }), e.addEventListener("invalid", s), e.addEventListener("change", l), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", s), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", i), t && (t.reset = n)
          }
        }, [r, s, l, i, n])
      }

      function Iy(e) {
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
      const ky = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Ly = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Dy = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Ay = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        My = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Hy = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function By(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function zy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zy(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = By(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Uy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vy(Vy({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) qy(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fy(e.variantClassNames, e => Fy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Gy = Uy({
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
        Xy = Uy({
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
        Ky = Uy({
          defaultClassName: "foundry_11gbdtyj foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_11gbdtyk",
              true: "foundry_11gbdtyl"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Wy = Uy({
          defaultClassName: "foundry_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
              LG: "foundry_11gbdtyf foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
              XL: "foundry_11gbdtyg foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
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
      const Zy = (0, M.createContext)(null);

      function $y() {
        const e = (0, M.useContext)(Zy);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Yy = (0, M.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...a
        }, i) => {
          const s = (0, F.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, F.omit)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? Ee.DX : "div",
            c = (0, M.useId)(),
            u = (0, M.useId)(),
            d = (0, M.useId)();
          return (0, _.jsx)(Zy.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: u,
              inputId: d,
              ...a
            },
            children: (0, _.jsx)(l, {
              ...s,
              ref: i,
              children: o
            })
          })
        }),
        Qy = (0, M.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: a,
          onClick: i,
          "aria-describedby": l,
          "aria-errormessage": c,
          "aria-labelledby": u,
          ...d
        }, f) => {
          const {
            size: h,
            appearance: p,
            isIndeterminate: m,
            isRequired: v,
            descriptionId: y,
            labelId: g,
            inputId: b,
            ...w
          } = $y(), P = (0, M.useRef)(null), E = d.id || b, {
            isPressed: x,
            pressProps: C
          } = op({
            ref: P
          }), {
            setSelected: S,
            toggle: T,
            ...O
          } = ry({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: R,
            isSelected: N,
            isDisabled: j,
            isReadOnly: I
          } = function(e, t, r) {
            let n = Cy({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: a,
                validationDetails: i
              } = n.displayValidation,
              {
                labelProps: s,
                inputProps: l,
                isSelected: c,
                isPressed: u,
                isDisabled: d,
                isReadOnly: f
              } = ey({
                ...e,
                isInvalid: o
              }, t, r);
            jy(e, n, r);
            let {
              isIndeterminate: h,
              isRequired: p,
              validationBehavior: m = "aria"
            } = e;
            (0, M.useEffect)(() => {
              r.current && (r.current.indeterminate = !!h)
            });
            let {
              pressProps: v
            } = (0, Qv.d)({
              isDisabled: d || f,
              onPress() {
                let {
                  [xy]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: (0, Wv.v)(s, v, (0, M.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...l,
                checked: c,
                "aria-required": p && "aria" === m || void 0,
                required: p && "native" === m
              },
              isSelected: c,
              isPressed: u,
              isDisabled: d,
              isReadOnly: f,
              isInvalid: o,
              validationErrors: a,
              validationDetails: i
            }
          }({
            "aria-label": "",
            id: E,
            name: o,
            ...w
          }, {
            ...O,
            toggle: T,
            setSelected: w.isReadOnly ? () => !1 : S
          }, P), k = (0, F.mergeProps)({
            className: Xy({
              size: h
            }),
            onClick: e => {
              a?.(e) ?? i?.(e), e.defaultPrevented || j || I || T()
            }
          }, C, d), L = (0, F.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, F.joinStrings)(u, g),
            "aria-describedby": (0, F.joinStrings)(l, y),
            "aria-errormessage": (0, F.joinStrings)(c, w.isInvalid ? y : void 0),
            "aria-required": v,
            required: v
          }, R), D = m ? s[`Dash${h}`] : s[`Check${h}`];
          return (0, _.jsxs)("div", {
            ...k,
            children: [(0, _.jsx)(Ee.s6, {
              children: (0, _.jsx)("input", {
                ...L,
                ref: f
              })
            }), (0, _.jsx)("div", {
              className: Gy({
                size: h,
                appearance: p
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : N ? "checked" : "unchecked",
              "data-disabled": j || I,
              "data-testid": e,
              "data-pressed": x,
              children: (0, _.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (N || m) && (0, _.jsx)(D, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Jy = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, i) => {
          const {
            size: s,
            labelId: l,
            inputId: c,
            isRequired: u
          } = $y(), d = a.id || l, f = u && !o, h = (0, F.mergeProps)({
            className: Wy({
              size: s,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: a.htmlFor || c
          }, a), p = t ? Ee.DX : "label";
          return (0, _.jsx)(Ee.s6, {
            enabled: n,
            children: (0, _.jsx)(p, {
              ...h,
              ref: i,
              children: e
            })
          })
        }),
        eg = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = $y(), s = n.id || i, l = (0, F.mergeProps)({
            className: Ky({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? Ee.DX : "div";
          return (0, _.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        tg = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = $y(), i = n.id || a, s = (0, F.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: i
          }, n), l = t ? Ee.DX : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        });

      function rg(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ng(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function og(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ng(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = rg(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ng(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ag(e, t) {
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
        sg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = og(og({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
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
              return ag(e.variantClassNames, e => ag(e, e => e.split(" ")[0]))
            }
          }, t
        },
        lg = sg({
          defaultClassName: "foundry_vq8c3j6 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_vq8c3j7",
              true: "foundry_vq8c3j8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cg = sg({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ug = sg({
          defaultClassName: "foundry_vq8c3j1 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
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
        dg = sg({
          defaultClassName: "foundry_vq8c3j9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
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
      const fg = (0, M.createContext)(null);

      function hg() {
        const e = (0, M.useContext)(fg);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const pg = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: i = "neutral",
          ...s
        }, l) => {
          const c = (0, F.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, s),
            u = e ? Ee.DX : "div",
            d = (0, M.useId)(),
            f = (0, M.useId)(),
            h = (0, M.useId)(),
            p = (0, M.useId)();
          return (0, _.jsx)(fg.Provider, {
            value: {
              labelId: d,
              descriptionId: f,
              hintId: h,
              inputId: p,
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: i,
              ...s
            },
            children: (0, _.jsx)(u, {
              ref: l,
              ...c,
              children: t
            })
          })
        }),
        mg = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, i) => {
          const {
            labelId: s,
            inputId: l,
            isDisabled: c,
            isRequired: u
          } = hg(), d = (0, F.mergeProps)({
            className: ug({
              isDisabled: c,
              showAsterisk: u && !o
            }),
            "data-testid": r,
            id: s,
            htmlFor: l
          }, a), f = t ? Ee.DX : "label";
          return (0, _.jsx)(Ee.s6, {
            enabled: n,
            children: (0, _.jsx)(f, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        vg = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: a,
          placeholder: i = " ",
          "aria-labelledby": s,
          "aria-describedby": l,
          ...c
        }, u) => {
          const {
            descriptionId: d,
            labelId: f,
            inputId: h,
            hintId: p,
            isDisabled: m,
            isRequired: v,
            isReadOnly: y,
            status: g
          } = hg(), b = (0, M.useRef)(null), w = (0, Pe.UP)(b, u), {
            isPressed: P,
            pressProps: E
          } = op({}), x = (0, F.mergeProps)({
            className: dg({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isPressed: P,
              isSuccess: "success" === g
            }),
            name: a,
            id: c.id || h,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: i,
            "aria-labelledby": (0, F.joinStrings)(c.id, f, p, s),
            "aria-describedby": (0, F.joinStrings)(d, l),
            "data-testid": r,
            ..."invalid" === g && {
              "aria-invalid": !0,
              "aria-errormessage": d
            },
            ..."success" === g && {
              "data-success": !0
            },
            ...m && {
              "aria-disabled": !0
            },
            ...v && {
              "aria-required": !0
            }
          }, E, c), C = e ? Ee.DX : "textarea";
          return (0, _.jsx)(C, {
            ref: w,
            ...x,
            children: t
          })
        }),
        yg = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = hg(), s = (0, F.mergeProps)({
            className: lg({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? Ee.DX : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        gg = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: i
          } = hg(), s = (0, F.mergeProps)({
            className: cg({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), l = t ? Ee.DX : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        bg = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: i
          } = hg(), s = (0, F.mergeProps)({
            className: "foundry_vq8c3jm",
            "data-testid": t,
            descriptionId: a,
            status: i
          }, n), l = r ? Ee.DX : bp;
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        _g = _p,
        wg = wp;
      let Pg = Math.round(1e10 * Math.random()),
        Eg = 0;
      const xg = new WeakMap;
      var Cg = r(62993),
        Sg = r(49652),
        Tg = r(42351),
        Og = r(13569);
      class Rg {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, Og.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, Og.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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

      function Ng(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
      }

      function jg(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? Tg.A : Tg.t,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          a = (0, Cg.TW)(o),
          i = function(e, t, r, n) {
            return (0, Wh.Nf)() ? new Rg(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(a, e || a, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              if (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) return NodeFilter.FILTER_REJECT;
              if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    let t = [];
                    if (e.form) {
                      var r, n;
                      let o = null === (n = e.form) || void 0 === n || null === (r = n.elements) || void 0 === r ? void 0 : r.namedItem(e.name);
                      t = [...null != o ? o : []]
                    } else t = [...(0, Cg.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                    return !!t && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === i.currentNode.tagName && "radio" === i.currentNode.type && i.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !Ng(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (i.currentNode = t.from), i
      }
      class Ig {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new kg({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Ng(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Ig;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new kg({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class kg {
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

      function Lg(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, Sg.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Dg(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: a,
          fieldProps: i
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: a = "label"
          } = e;
          t = (0, Sg.Bi)(t);
          let i = (0, Sg.Bi)(),
            s = {};
          return r && (n = n ? `${i} ${n}` : i, s = {
            id: i,
            htmlFor: "label" === a ? t : void 0
          }), {
            labelProps: s,
            fieldProps: Lg({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = (0, Sg.X1)([Boolean(t), Boolean(r), n, o]), l = (0, Sg.X1)([Boolean(t), Boolean(r), n, o]);
        return i = (0, Wv.v)(i, {
          "aria-describedby": [s, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: a,
          fieldProps: i,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      new Ig;
      var Ag = r(89839),
        Mg = r(73581);
      const Hg = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Bg = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function zg(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return Hg.has(t.script)
        }
        let t = e.split("-")[0];
        return Bg.has(t)
      }
      var Vg = r(50336);
      const Fg = Symbol.for("react-aria.i18n.locale");

      function qg() {
        let e = "undefined" != typeof window && window[Fg] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: zg(e) ? "rtl" : "ltr"
        }
      }
      let Ug = qg(),
        Gg = new Set;

      function Xg() {
        Ug = qg();
        for (let e of Gg) e(Ug)
      }
      const Kg = M.createContext(null);

      function Wg() {
        let e = function() {
          let e = (0, Vg.wR)(),
            [t, r] = (0, M.useState)(Ug);
          return (0, M.useEffect)(() => (0 === Gg.size && window.addEventListener("languagechange", Xg), Gg.add(r), () => {
            Gg.delete(r), 0 === Gg.size && window.removeEventListener("languagechange", Xg)
          }), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, M.useContext)(Kg) || e
      }

      function Zg(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: a,
          isDisabled: i,
          orientation: s = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: c
        } = Wg(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = Dg({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = (0, Zv.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, a = (0, M.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: i,
            removeAllGlobalListeners: s
          } = (0, Mg.A)(), l = (0, M.useCallback)(e => {
            e.currentTarget.contains(e.target) && a.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (a.current.isFocusWithin = !1, s(), r && r(e), o && o(!1))
          }, [r, o, a, s]), c = (0, Ag.yB)(l), u = (0, M.useCallback)(e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = (0, Cg.TW)(e.target),
              r = (0, Og.bq)(t);
            if (!a.current.isFocusWithin && r === (0, Og.wt)(e.nativeEvent)) {
              n && n(e), o && o(!0), a.current.isFocusWithin = !0, c(e);
              let r = e.currentTarget;
              i(t, "focus", e => {
                if (a.current.isFocusWithin && !(0, Og.sD)(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  (0, Ag.o1)(n, r);
                  let o = (0, Ag.eg)(n);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [n, o, c, i, l]);
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
        }), b = (0, Sg.Bi)(r);
        return xg.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: (0, Wv.v)(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === c && "vertical" !== s ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === c && "vertical" !== s ? "next" : "prev";
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
              let n, o = jg(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof(0, Cg.mD)(e).HTMLInputElement && "radio" === e.type
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": a || void 0,
            "aria-disabled": i || void 0,
            "aria-orientation": s,
            ...p,
            ...g
          }),
          labelProps: h,
          descriptionProps: m,
          errorMessageProps: v,
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        }
      }

      function $g(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Yg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Qg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yg(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = $g(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Jg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var eb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qg(Qg({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) eb(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jg(e.variantClassNames, e => Jg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rb = tb({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nb = tb({
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
      const ob = (0, M.createContext)(null);

      function ab() {
        const e = (0, M.useContext)(ob);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const ib = (0, M.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: a,
          "aria-labelledby": i,
          "aria-describedby": s,
          "aria-errormessage": l,
          status: c = "neutral",
          ...u
        }, d) => {
          const f = (0, M.useRef)(null),
            h = (0, Pe.UP)(f, d),
            p = (0, M.useId)(),
            m = (0, M.useId)(),
            v = (0, M.useId)(),
            y = function(e) {
              let t = (0, M.useMemo)(() => e.name || `radio-group-${Pg}-${++Eg}`, [e.name]);
              var r;
              let [n, o] = ty(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [a] = (0, M.useState)(n), [i, s] = (0, M.useState)(null), l = Cy({
                ...e,
                value: n
              }), c = l.displayValidation.isInvalid;
              var u;
              return {
                ...l,
                name: t,
                selectedValue: n,
                defaultSelectedValue: void 0 !== e.value ? a : null !== (u = e.defaultValue) && void 0 !== u ? u : null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
                },
                lastFocusedValue: i,
                setLastFocusedValue: s,
                isDisabled: e.isDisabled || !1,
                isReadOnly: e.isReadOnly || !1,
                isRequired: e.isRequired || !1,
                validationState: e.validationState || (c ? "invalid" : null),
                isInvalid: c
              }
            }({
              ...u,
              isInvalid: "invalid" === c
            }),
            {
              radioGroupProps: g
            } = Zg({
              ...u,
              orientation: r,
              "aria-labelledby": (0, F.joinStrings)(p, i),
              "aria-describedby": (0, F.joinStrings)(m, v, s),
              "aria-errormessage": (0, F.joinStrings)(v, l)
            }, y),
            b = (0, F.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, F.omit)(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? Ee.DX : "div";
          return (0, _.jsx)(ob.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: m,
              labelId: p,
              errorId: v,
              status: c,
              ...u
            },
            children: (0, _.jsx)(w, {
              ref: h,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        sb = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: i
          } = ab(), s = (0, F.mergeProps)({
            "data-testid": e,
            className: nb({
              size: a,
              orientation: i
            })
          }, n), l = t ? Ee.DX : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: r
          })
        }),
        lb = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, i) => {
          const {
            isRequired: s,
            labelId: l
          } = ab(), c = s && !o, u = (0, F.mergeProps)({
            id: a.id || l,
            "data-testid": e,
            className: rb({
              showAsterisk: c
            })
          }, a), d = t ? Ee.DX : "div";
          return (0, _.jsx)(Ee.s6, {
            enabled: n,
            children: (0, _.jsx)(d, {
              ...u,
              ref: i,
              children: r
            })
          })
        }),
        cb = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = ab(), i = (0, F.mergeProps)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), s = t ? Ee.DX : "div";
          return (0, _.jsx)(s, {
            ...i,
            ref: o,
            children: r
          })
        }),
        ub = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: i
          } = ab(), s = (0, F.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: i
          }, n), l = r ? Ee.DX : bp;
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        db = _p,
        fb = wp;
      var hb = tb({
          defaultClassName: "foundry_1pfduetf foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_1pfduetg",
              true: "foundry_1pfdueth"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pb = tb({
          defaultClassName: "foundry_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
              LG: "foundry_1pfduetc foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
              XL: "foundry_1pfduetd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            },
            isDisabled: {
              true: "foundry_1pfduete"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        mb = tb({
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
        vb = tb({
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
      const yb = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, _.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        gb = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, _.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        bb = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, _.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        _b = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            i = e ? Ee.DX : "label";
          return (0, _.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        wb = (0, M.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, M.useRef)(null),
            a = (0, Pe.UP)(o, n),
            i = (0, M.useId)(),
            {
              state: s,
              appearance: l,
              size: c,
              isReadOnly: d,
              isRequired: f
            } = ab(),
            {
              isPressed: h,
              pressProps: p
            } = op({}),
            {
              inputProps: m
            } = function(e, t, r) {
              let {
                value: n,
                children: o,
                "aria-label": a,
                "aria-labelledby": i,
                onPressStart: s,
                onPressEnd: l,
                onPressChange: c,
                onPress: u,
                onPressUp: d,
                onClick: f
              } = e;
              const h = e.isDisabled || t.isDisabled;
              let p = t.selectedValue === n,
                {
                  pressProps: m,
                  isPressed: v
                } = (0, Qv.d)({
                  onPressStart: s,
                  onPressEnd: l,
                  onPressChange: c,
                  onPress: u,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: h
                }),
                {
                  pressProps: y,
                  isPressed: g
                } = (0, Qv.d)({
                  onPressStart: s,
                  onPressEnd: l,
                  onPressChange: c,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: h,
                  onPress(e) {
                    var o;
                    null == u || u(e), t.setSelectedValue(n), null === (o = r.current) || void 0 === o || o.focus()
                  }
                }),
                {
                  focusableProps: b
                } = (0, Jv.Wc)((0, Wv.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                _ = (0, Wv.v)(m, b),
                w = (0, Zv.$)(e, {
                  labelable: !0
                }),
                P = -1;
              null != t.selectedValue ? t.selectedValue === n && (P = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (P = 0), h && (P = void 0);
              let {
                name: E,
                form: x,
                descriptionId: C,
                errorMessageId: S,
                validationBehavior: T
              } = xg.get(t);
              return Yv(r, t.defaultSelectedValue, t.setSelectedValue), jy({
                validationBehavior: T
              }, t, r), {
                labelProps: (0, Wv.v)(y, (0, M.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, Wv.v)(w, {
                  ..._,
                  type: "radio",
                  name: E,
                  form: x,
                  tabIndex: P,
                  disabled: h,
                  required: t.isRequired && "native" === T,
                  checked: p,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? S : null, C].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: h,
                isSelected: p,
                isPressed: v || g
              }
            }({
              ...r,
              id: i,
              value: t,
              "aria-label": ""
            }, s, o),
            v = m.checked,
            y = m.disabled || s?.isReadOnly,
            g = (0, F.mergeProps)(m, {
              disabled: y,
              readOnly: d,
              required: f,
              "data-testid": e,
              ...y && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, r),
            b = u[`Dot${c}`];
          return (0, _.jsxs)("div", {
            className: vb({
              size: c
            }),
            children: [(0, _.jsx)(Ee.s6, {
              children: (0, _.jsx)("input", {
                type: "radio",
                ...g,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, _.jsx)("div", {
              className: mb({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": h,
              ...p,
              children: (0, _.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, _.jsx)(b, {})
              })
            })]
          })
        }),
        Pb = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: i,
            state: s
          } = ab(), l = (0, M.useId)(), c = (0, F.mergeProps)({
            id: l,
            "data-testid": e,
            className: pb({
              size: i,
              isDisabled: s?.isDisabled
            })
          }, o), u = t ? Ee.DX : "div";
          return (0, _.jsx)(Ee.s6, {
            enabled: n,
            children: (0, _.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Eb = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = ab(), i = (0, F.mergeProps)({
            "data-testid": e,
            className: hb({
              isDisabled: a
            })
          }, n), s = t ? Ee.DX : "span";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: r
          })
        });

      function xb(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Cb(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return xb(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? xb(e, t) : void 0
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
        var a, i = !0,
          s = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return i = e.done, e
          },
          e: function(e) {
            s = !0, a = e
          },
          f: function() {
            try {
              i || null == r.return || r.return()
            } finally {
              if (s) throw a
            }
          }
        }
      }

      function Sb(e, t, r) {
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

      function Tb(e) {
        return Tb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Tb(e)
      }

      function Ob() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (Ob = function() {
          return !!e
        })()
      }

      function Rb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Nb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rb(Object(r), !0).forEach(function(t) {
            Sb(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jb(e, t) {
        return jb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, jb(e, t)
      }

      function Ib(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          a = t.separate,
          i = n,
          s = "",
          l = Cb(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var c, u = r.value,
              d = !Object.prototype.hasOwnProperty.call(o, u) && (null === (c = o[i[0]]) || void 0 === c ? void 0 : c.test(u));
            (a && u === i[0] || d) && (i = i.slice(1), s += u)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return s
      }

      function kb(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          a = t.separate,
          i = t.showMask,
          s = 0,
          l = "",
          c = Cb(n);
        try {
          for (c.s(); !(r = c.n()).done;) {
            var u = r.value;
            if (!i && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[s] ? l += e[s++] : l += u
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (a && !i) {
          for (var d = n.length - 1; d >= 0 && l[d] === n[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function Lb(e, t) {
        for (var r = t.mask, n = t.replacement, o = [], a = 0; a < r.length; a++) {
          var i, s = null !== (i = e[a]) && void 0 !== i ? i : r[a],
            l = Object.prototype.hasOwnProperty.call(n, s) ? "replacement" : void 0 !== e[a] && e[a] !== r[a] ? "input" : "mask";
          o.push({
            type: l,
            value: s,
            index: a
          })
        }
        return o
      }

      function Db(e) {
        return e.length > 0 ? Sb({}, e, /./) : {}
      }

      function Ab(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, a = t.mask, i = t.replacement, s = t.separate, l = e.slice(n, o), c = a.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(i, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && s && (u += c[d])
        }
        return u
      }

      function Mb(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? Db(n) : n,
          a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return kb(Ib(e, {
          replacementChars: r.replace(a, ""),
          replacement: o,
          separate: !1
        }), {
          mask: r,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var Hb = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Bb(e) {
        return Hb.includes(e) ? "\\".concat(e) : e
      }

      function zb(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Vb(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Fb(e, t, r) {
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

      function qb(e) {
        return qb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, qb(e)
      }

      function Ub() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (Ub = function() {
          return !!e
        })()
      }

      function Gb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Xb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gb(Object(r), !0).forEach(function(t) {
            Fb(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Kb(e, t) {
        return Kb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Kb(e, t)
      }

      function Wb(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Wb = function(e) {
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
              if (Ub()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && Kb(o, r.prototype), o
            }(e, arguments, qb(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Kb(r, e)
        }, Wb(e)
      }
      var Zb, $b = function(e) {
          function t(e) {
            var r;
            return zb(this, t), (r = function(e, t, r) {
              return t = qb(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, Ub() ? Reflect.construct(t, r || [], qb(e).constructor) : t.apply(e, r))
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
            }), t && Kb(e, t)
          }(t, e), Vb(t)
        }(Wb(Error)),
        Yb = ["options"],
        Qb = ["text", "email", "tel", "search", "url"],
        Jb = Vb(function e(t) {
          var r = t.init,
            n = t.tracking;
          zb(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Qb.includes(e.type)) {
              var a = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                i = a.initialValue,
                s = void 0 === i ? "" : i,
                l = a.controlled,
                c = void 0 !== l && l,
                u = r({
                  initialValue: e.value || s,
                  controlled: c
                }),
                d = u.value,
                f = u.options,
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
              Object.defineProperty(e, "value", Xb(Xb({}, v), {}, {
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
                    if (p.cachedId === p.id) throw new $b("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var a = e.value,
                      i = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === i || null === s) throw new $b("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), i > m.selectionStart ? l = "insert" : i <= m.selectionStart && i < m.selectionEnd ? l = "deleteBackward" : i === m.selectionEnd && a.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && a.length > c.length) throw new $b("Input type detection error.");
                    var u = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) u = a.slice(m.selectionStart, i);
                    else {
                      var v = c.length - a.length;
                      d = i, f = i + v
                    }
                    h.value !== c ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var y = h.options,
                      g = n({
                        inputType: l,
                        previousValue: c,
                        previousOptions: y,
                        value: a,
                        addedValue: u,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: i,
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
                          var a = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < a.length; n++) r = a[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                      }(g, Yb);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), h.value = _.value, h.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, c)
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
        });
      Zb = Jb, Object.defineProperty(Zb.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var e_, t_ = ["track", "modify"];

      function r_(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? Db(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var n_ = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = Tb(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, Ob() ? Reflect.construct(t, r || [], Tb(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = r_(r),
                a = o.mask,
                i = o.replacement,
                s = o.separate,
                l = o.showMask;
              return {
                value: t = n || t ? t : l ? a : "",
                options: {
                  mask: a,
                  replacement: i,
                  separate: s
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                n = e.previousValue,
                o = e.previousOptions,
                a = e.addedValue,
                i = e.changeStart,
                s = e.changeEnd,
                l = r_(r),
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
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                  }
                  return o
                }(l, t_),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = Nb(Nb({}, "insert" === t ? {
                  inputType: t,
                  data: a
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: n,
                  selectionStart: i,
                  selectionEnd: s
                }),
                y = null == c ? void 0 : c(v);
              if (!1 === y) throw new $b("Custom tracking stop.");
              null === y ? a = "" : !0 !== y && void 0 !== y && (a = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? Db(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = Ab(n, Nb({
                  end: i
                }, o)),
                _ = Ab(n, Nb({
                  start: s
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                P = f.replace(w, "");
              if (b && (b = Ib(b, {
                  replacementChars: P,
                  replacement: h,
                  separate: m
                }), P = P.slice(b.length)), a && (a = Ib(a, {
                  replacementChars: P,
                  replacement: h,
                  separate: !1
                }), P = P.slice(a.length)), "insert" === t && "" === a) throw new $b("The character does not match the key value of the `replacement` object.");
              if (m) {
                var E = f.slice(i, s).replace(w, ""),
                  x = E.length - a.length;
                x < 0 ? _ = _.slice(-x) : x > 0 && (_ = E.slice(-x) + _)
              }
              _ && (_ = Ib(_, {
                replacementChars: P,
                replacement: h,
                separate: m
              }));
              var C = kb(b + a + _, {
                  mask: f,
                  replacement: h,
                  separate: m,
                  showMask: p
                }),
                S = function(e) {
                  var t, r, n, o = e.inputType,
                    a = e.value,
                    i = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = Lb(a, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    }),
                    d = null === (t = u[s.length + i.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = u[s.length - 1]) || void 0 === r ? void 0 : r.index,
                    h = null === (n = u[s.length + i.length]) || void 0 === n ? void 0 : n.index;
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
                  var p = a.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  });
                  return -1 !== p ? p : a.length
                }({
                  inputType: t,
                  value: C,
                  addedValue: a,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: h,
                  separate: m
                });
              return {
                value: C,
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
            return Mb(e, r_(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Db(n) : n;
              return Lb(Mb(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, r_(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Db(n) : n,
                a = Ab(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return Ib(a, {
                replacementChars: r.replace(i, ""),
                replacement: o,
                separate: !1
              })
            }(e, r_(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? Db(n) : n, a = "partial" === e || "partial-inexact" === e, i = "full" === e || "partial" === e, s = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (s = "^"), a && (s += "("), s += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(i ? "(?!".concat(Bb(c), ")") : "", "(").concat(o[c].source, ")") : Bb(c), l === r.length - 1 && (a && (s += ")?".repeat(r.length)), s += "$")
              }
              return s
            }(e, r_(r))
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
            }), t && jb(e, t)
          }(e, Jb),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function o_(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function a_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function i_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a_(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = o_(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function s_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      e_ = n_, Object.defineProperty(e_.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var l_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        c_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = i_(i_({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) l_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return s_(e.variantClassNames, e => s_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        u_ = c_({
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
        d_ = c_({
          defaultClassName: "foundry_8oytzo13 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo14",
              true: "foundry_8oytzo15"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        f_ = c_({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        h_ = c_({
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
        p_ = c_({
          defaultClassName: "foundry_8oytzoq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
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
        m_ = c_({
          defaultClassName: "foundry_8oytzo4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
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
        });
      const v_ = (0, M.createContext)(null);

      function y_() {
        const e = (0, M.useContext)(v_);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const g_ = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: i = "neutral",
          ...s
        }, l) => {
          const [c, u] = (0, M.useState)("text"), d = (0, M.useId)(), f = (0, M.useId)(), h = (0, M.useId)(), {
            isPressed: p,
            pressProps: m
          } = op({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !0
          }), v = {
            ...m,
            onKeyDown: () => {}
          }, y = (0, F.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, s), g = e ? Ee.DX : "div";
          return (0, _.jsx)(v_.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: i,
              labelId: d,
              inputId: f,
              descriptionId: h,
              isPressed: p,
              pressProps: v,
              type: c,
              setType: u,
              ...s
            },
            children: (0, _.jsx)(g, {
              ref: l,
              ...y,
              children: t
            })
          })
        }),
        b_ = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, i) => {
          const {
            isDisabled: s,
            isRequired: l,
            inputId: c,
            labelId: u
          } = y_(), d = l && !o, f = (0, F.mergeProps)({
            id: a.id || u,
            htmlFor: a.htmlFor || c,
            "data-testid": e,
            className: m_({
              showAsterisk: d,
              isDisabled: s
            })
          }, a), h = t ? Ee.DX : "label";
          return (0, _.jsx)(Ee.s6, {
            enabled: n,
            children: (0, _.jsx)(h, {
              ref: i,
              ...f,
              children: r
            })
          })
        }),
        __ = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = y_(), i = (0, F.mergeProps)({
            "data-testid": e,
            className: f_({
              isDisabled: a
            })
          }, n), s = t ? Ee.DX : "span";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: r
          })
        }),
        w_ = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: i,
            isPressed: s,
            pressProps: l,
            status: c
          } = y_(), u = (0, F.mergeProps)({
            "data-testid": e,
            "data-pressed": s,
            className: (0, Ae.clsx)(u_({
              isDisabled: a,
              isReadOnly: i,
              isInvalid: "invalid" === c,
              isPressed: s,
              isSuccess: "success" === c
            }), "foundry_8oytzo1")
          }, l, n), d = t ? Ee.DX : "div";
          return (0, _.jsx)(d, {
            ref: o,
            ...u,
            children: r
          })
        }),
        P_ = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: a,
          placeholder: i = " ",
          "aria-labelledby": s,
          "aria-describedby": l,
          type: c = "text",
          ...u
        }, d) => {
          const {
            isDisabled: f,
            isReadOnly: h,
            isRequired: p,
            status: m,
            labelId: v,
            inputId: y,
            descriptionId: g,
            setType: b,
            type: w
          } = y_();
          (0, M.useEffect)(() => b(c), []);
          const P = "invalid" === m,
            E = (0, F.mergeProps)({
              disabled: f,
              readOnly: h,
              required: p,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: i,
              "aria-labelledby": (0, F.joinStrings)(v, s),
              "aria-describedby": (0, F.joinStrings)(g, l),
              "data-testid": e,
              className: (0, Ae.clsx)(p_({
                isDisabled: f,
                isReadOnly: h
              }), "foundry_8oytzo2"),
              ...P && {
                "aria-invalid": !0,
                "aria-errormessage": g
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
            }, u),
            x = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                a = e.track,
                i = e.modify,
                s = (0, M.useRef)(null),
                l = (0, M.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: a,
                  modify: i
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = a, l.current.modify = i, (0, M.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(s, new n_(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            C = (0, Pe.UP)(r && n ? x : null, d),
            S = t ? Ee.DX : "input";
          return (0, _.jsx)(S, {
            ref: C,
            ...E
          })
        }),
        E_ = (0, M.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: i
          } = y_(), s = (0, F.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, Ae.clsx)(h_({
              side: n,
              isDisabled: i
            }), "foundry_8oytzo0")
          }, o), l = t ? Ee.DX : He[e];
          return (0, _.jsx)(l, {
            ref: a,
            ...s
          })
        }),
        x_ = (0, M.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = y_(), n = (0, F.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzo10"
          }, e);
          return (0, _.jsx)(at, {
            ref: t,
            ...n
          })
        }),
        C_ = (0, M.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a
          } = y_(), i = "password" === o, s = i ? e : t, l = (0, F.mergeProps)({
            label: s,
            icon: i ? "Eye" : "EyeOff",
            onPress: () => {
              a(i ? "text" : "password")
            }
          }, r);
          return (0, _.jsxs)(Qd, {
            children: [(0, _.jsx)(Jd, {
              children: (0, _.jsx)(x_, {
                ref: n,
                ...l
              })
            }), (0, _.jsxs)(ef, {
              side: "bottom",
              align: "end",
              children: [s, (0, _.jsx)(tf, {})]
            })]
          })
        }),
        S_ = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = y_(), s = (0, F.mergeProps)({
            className: d_({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? Ee.DX : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        T_ = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: i
          } = y_(), s = (0, F.mergeProps)({
            className: "foundry_8oytzo16",
            "data-testid": t,
            descriptionId: a,
            status: i
          }, n), l = r ? Ee.DX : bp;
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        O_ = _p,
        R_ = wp;
      var N_ = r(36566);

      function j_(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          onClick: i,
          isDisabled: s,
          ...l
        } = e, c = {};
        "a" !== r && (c = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: u
        } = (0, Jv.Wc)(e, t), {
          pressProps: d,
          isPressed: f
        } = (0, Qv.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          onClick: i,
          isDisabled: s,
          ref: t
        }), h = (0, Zv.$)(l, {
          labelable: !0
        }), p = (0, Wv.v)(u, d), m = (0, N_.rd)(), v = (0, N_._h)(e);
        return {
          isPressed: f,
          linkProps: (0, Wv.v)(h, v, {
            ...p,
            ...c,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), (0, N_.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function I_(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function k_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function L_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? k_(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = I_(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function D_(e, t) {
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
        M_ = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = L_(L_({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
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
              return D_(e.variantClassNames, e => D_(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_shqzby0",
          variantClassNames: {
            size: {
              SM: "foundry_shqzby1",
              MD: "foundry_shqzby2",
              LG: "foundry_shqzby3",
              XL: "foundry_shqzby4"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const H_ = (0, M.forwardRef)(({
        children: e,
        ...t
      }, r) => {
        const n = (0, xe.zQ)(),
          o = "string" == typeof t.size ? t.size : t.size?.[n] ?? "LG",
          a = (0, F.mergeProps)({
            className: M_({
              size: o
            })
          }, t);
        return (0, _.jsx)(at, {
          appearance: "ghost",
          icon: "X",
          ...a,
          ref: r,
          children: e
        })
      });

      function B_(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function z_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function V_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? z_(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = B_(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function F_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var q_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        U_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = V_(V_({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) q_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return F_(e.variantClassNames, e => F_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        G_ = U_({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        X_ = U_({
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
        K_ = U_({
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
      const W_ = (0, M.createContext)(null);

      function Z_() {
        const e = (0, M.useContext)(W_);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const $_ = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const i = e ? Ee.DX : "div",
            s = (0, F.mergeProps)({
              className: K_({
                status: r,
                background: n
              })
            }, o);
          return (0, _.jsx)(W_.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, _.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s
            })
          })
        }),
        Y_ = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Ee.DX : "div",
            a = (0, F.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Q_ = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Ee.DX : "div",
            a = (0, F.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        J_ = {
          danger: Me.CircleX,
          information: Me.Info,
          success: Me.CircleCheck,
          warning: Me.TriangleAlert
        },
        ew = (0, M.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Z_(), a = e ? Ee.DX : J_[o], i = (0, F.mergeProps)({
            className: X_({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, _.jsx)(a, {
            label: "",
            ref: n,
            ...i
          })
        }),
        tw = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Ee.DX : "div",
            a = (0, F.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        rw = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Ee.DX : "div",
            a = (0, F.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        nw = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, M.useRef)(null),
            i = (0, Pe.UP)(a, o),
            s = e ? Ee.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = j_(n, a),
            u = (0, F.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, _.jsx)(s, {
            "data-pressed": c,
            "data-testid": r,
            ref: i,
            ...u,
            children: t
          })
        }),
        ow = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? Ee.DX : "div",
            i = (0, F.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        aw = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const a = e ? Ee.DX : "div";
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, Ae.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        iw = (0, M.forwardRef)((e, t) => {
          const {
            background: r
          } = Z_(), n = "none" !== r, o = (0, F.mergeProps)({
            className: G_({
              hasBackground: n
            })
          }, e);
          return (0, _.jsx)(H_, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function sw(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function lw(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : sw(n) && sw(o) ? lw(n, o) : n === o
        }))
      }

      function cw(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function uw(e) {
        return "number" == typeof e
      }

      function dw(e) {
        return "string" == typeof e
      }

      function fw(e) {
        return "boolean" == typeof e
      }

      function hw(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function pw(e) {
        return Math.abs(e)
      }

      function mw(e) {
        return Math.sign(e)
      }

      function vw(e, t) {
        return pw(e - t)
      }

      function yw(e) {
        return Pw(e).map(Number)
      }

      function gw(e) {
        return e[bw(e)]
      }

      function bw(e) {
        return Math.max(0, e.length - 1)
      }

      function _w(e, t) {
        return t === bw(e)
      }

      function ww(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function Pw(e) {
        return Object.keys(e)
      }

      function Ew(e, t) {
        return [e, t].reduce((e, t) => (Pw(t).forEach(r => {
          const n = e[r],
            o = t[r],
            a = hw(n) && hw(o);
          e[r] = a ? Ew(n, o) : o
        }), e), {})
      }

      function xw(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function Cw() {
        let e = [];
        const t = {
          add: function(r, n, o, a = {
            passive: !0
          }) {
            let i;
            if ("addEventListener" in r) r.addEventListener(n, o, a), i = () => r.removeEventListener(n, o, a);
            else {
              const e = r;
              e.addListener(o), i = () => e.removeListener(o)
            }
            return e.push(i), t
          },
          clear: function() {
            e = e.filter(e => e())
          }
        };
        return t
      }

      function Sw(e = 0, t = 0) {
        const r = pw(e - t);

        function n(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function a(e) {
          return n(e) || o(e)
        }
        return {
          length: r,
          max: t,
          min: e,
          constrain: function(r) {
            return a(r) ? n(r) ? e : t : r
          },
          reachedAny: a,
          reachedMax: o,
          reachedMin: n,
          removeOffset: function(e) {
            return r ? e - r * Math.ceil((e - t) / r) : e
          }
        }
      }

      function Tw(e, t, r) {
        const {
          constrain: n
        } = Sw(0, e), o = e + 1;
        let a = i(t);

        function i(e) {
          return r ? pw((o + e) % o) : n(e)
        }

        function s() {
          return a
        }

        function l() {
          return Tw(e, s(), r)
        }
        const c = {
          get: s,
          set: function(e) {
            return a = i(e), c
          },
          add: function(e) {
            return l().set(s() + e)
          },
          clone: l
        };
        return c
      }

      function Ow(e, t, r, n, o, a, i, s, l, c, u, d, f, h, p, m, v, y, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], P = {
          passive: !1
        }, E = Cw(), x = Cw(), C = Sw(50, 225).constrain(h.measure(20)), S = {
          mouse: 300,
          touch: 400
        }, T = {
          mouse: 500,
          touch: 600
        }, O = p ? 43 : 25;
        let R = !1,
          N = 0,
          j = 0,
          I = !1,
          k = !1,
          L = !1,
          D = !1;

        function A(e) {
          if (!xw(e, n) && e.touches.length >= 2) return M(e);
          const t = a.readPoint(e),
            r = a.readPoint(e, b),
            i = vw(t, N),
            l = vw(r, j);
          if (!k && !D) {
            if (!e.cancelable) return M(e);
            if (k = i > l, !k) return M(e)
          }
          const u = a.pointerMove(e);
          i > m && (L = !0), c.useFriction(.3).useDuration(.75), s.start(), o.add(_(u)), e.preventDefault()
        }

        function M(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            r = a.pointerUp(e) * (p ? T : S)[D ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * mw(e)),
                n = u.byDistance(e, !p).distance;
              return p || pw(e) < C ? n : v && t ? .5 * n : u.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (pw(e) <= pw(t)) return 0;
              const r = vw(pw(e), pw(t));
              return pw(r / e)
            }(r, n),
            i = O - 10 * o,
            s = y + o / 50;
          k = !1, I = !1, x.clear(), c.useDuration(i).useFriction(s), l.distance(n, !p), D = !1, f.emit("pointerUp")
        }

        function H(e) {
          L && (e.stopPropagation(), e.preventDefault(), L = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function s(s) {
              (fw(g) || g(e, s)) && function(e) {
                const s = xw(e, n);
                D = s, L = p && s && !e.buttons && R, R = vw(o.get(), i.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (I = !0, a.pointerDown(e), c.useFriction(0).useDuration(0), o.set(i), function() {
                  const e = D ? r : t;
                  x.add(e, "touchmove", A, P).add(e, "touchend", M).add(e, "mousemove", A, P).add(e, "mouseup", M)
                }(), N = a.readPoint(e), j = a.readPoint(e, b), f.emit("pointerDown"))
              }(s)
            }
            const l = t;
            E.add(l, "dragstart", e => e.preventDefault(), P).add(l, "touchmove", () => {}, P).add(l, "touchend", () => {}).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", H, !0)
          },
          destroy: function() {
            E.clear(), x.clear()
          },
          pointerDown: function() {
            return I
          }
        }
      }

      function Rw(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function a(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (xw(r, t) ? r : r.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return r = e, n = e, a(e)
          },
          pointerMove: function(e) {
            const t = a(e) - a(n),
              i = o(e) - o(r) > 170;
            return n = e, i && (r = e), t
          },
          pointerUp: function(e) {
            if (!r || !n) return 0;
            const t = a(n) - a(r),
              i = o(e) - o(r),
              s = o(e) - o(n) > 170,
              l = t / i;
            return i && !s && pw(l) > .1 ? l : 0
          },
          readPoint: a
        }
      }

      function Nw(e, t, r, n, o, a, i) {
        const s = [e].concat(n);
        let l, c, u = [],
          d = !1;

        function f(e) {
          return o.measureSize(i.measure(e))
        }
        return {
          init: function(o) {
            a && (c = f(e), u = n.map(f), l = new ResizeObserver(r => {
              (fw(a) || a(o, r)) && function(r) {
                for (const a of r) {
                  if (d) return;
                  const r = a.target === e,
                    i = n.indexOf(a.target),
                    s = r ? c : u[i];
                  if (pw(f(r ? e : n[i]) - s) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(r)
            }), r.requestAnimationFrame(() => {
              s.forEach(e => l.observe(e))
            }))
          },
          destroy: function() {
            d = !0, l && l.disconnect()
          }
        }
      }

      function jw(e, t, r, n, o) {
        const a = o.measure(10),
          i = o.measure(50),
          s = Sw(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = pw(e[l] - t.get()),
              d = r.get() - t.get(),
              f = s.constrain(u / i);
            r.subtract(d * f), !o && pw(d) < a && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function Iw(e, t, r, n) {
        const o = t.min + .1,
          a = t.max + .1,
          {
            reachedMin: i,
            reachedMax: s
          } = Sw(o, a),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? s(r.get()) : -1 === e && i(r.get())
                }(t)) return;
              const o = e * (-1 * t);
              n.forEach(e => e.add(o))
            }
          };
        return l
      }

      function kw(e) {
        let t = e;

        function r(e) {
          return uw(e) ? e : e.get()
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

      function Lw(e, t) {
        const r = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          n = t.style;
        let o = null,
          a = !1;
        const i = {
          clear: function() {
            a || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (a) return;
            const i = (s = e.direction(t), Math.round(100 * s) / 100);
            var s;
            i !== o && (n.transform = r(i), o = i)
          },
          toggleActive: function(e) {
            a = !e
          }
        };
        return i
      }

      function Dw(e, t, r, n, o, a, i, s, l) {
        const c = yw(o),
          u = yw(o).reverse(),
          d = function() {
            const e = i[0];
            return p(h(u, e), r, !1)
          }().concat(function() {
            const e = t - i[0] - 1;
            return p(h(c, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function h(e, t) {
          return e.reduce((e, r) => f(e, t) > 0 ? e.concat([r]) : e, [])
        }

        function p(o, i, c) {
          const u = function(e) {
            return a.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(i);
          return o.map(t => {
            const n = c ? 0 : -r,
              o = c ? r : 0,
              a = c ? "end" : "start",
              i = u[t][a];
            return {
              index: t,
              loopPoint: i,
              slideLocation: kw(-1),
              translate: Lw(e, l[t]),
              target: () => s.get() > i ? n : o
            }
          })
        }
        const m = {
          canLoop: function() {
            return d.every(({
              index: e
            }) => {
              const r = c.filter(t => t !== e);
              return f(r, t) <= .1
            })
          },
          clear: function() {
            d.forEach(e => e.translate.clear())
          },
          loop: function() {
            d.forEach(e => {
              const {
                target: t,
                translate: r,
                slideLocation: n
              } = e, o = t();
              o !== n.get() && (r.to(o), n.set(o))
            })
          },
          loopPoints: d
        };
        return m
      }

      function Aw(e, t, r) {
        let n, o = !1;
        return {
          init: function(a) {
            r && (n = new MutationObserver(e => {
              o || (fw(r) || r(a, e)) && function(e) {
                for (const r of e)
                  if ("childList" === r.type) {
                    a.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(e)
            }), n.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            n && n.disconnect(), o = !0
          }
        }
      }

      function Mw(e, t, r, n, o, a, i) {
        const {
          align: s,
          axis: l,
          direction: c,
          startIndex: u,
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
          watchFocus: P
        } = a, E = {
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
        }, x = E.measure(t), C = r.map(E.measure), S = function(e, t) {
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
        }(l, c), T = S.measureSize(x), O = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(T), R = function(e, t) {
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
              return dw(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(s, T), N = !d && !!g, j = d || !!g, {
          slideSizes: I,
          slideSizesWithGaps: k,
          startGap: L,
          endGap: D
        } = function(e, t, r, n, o, a) {
          const {
            measureSize: i,
            startEdge: s,
            endEdge: l
          } = e, c = r[0] && o, u = function() {
            if (!c) return 0;
            const e = r[0];
            return pw(t[s] - e[s])
          }(), d = function() {
            if (!c) return 0;
            const e = a.getComputedStyle(gw(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(i), h = r.map((e, t, r) => {
            const n = !t,
              o = _w(r, t);
            return n ? f[t] + u : o ? f[t] + d : r[t + 1][s] - e[s]
          }).map(pw);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: u,
            endGap: d
          }
        }(S, x, C, r, j, o), A = function(e, t, r, n, o, a, i, s, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, f = uw(r), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return yw(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? yw(e).reduce((r, f, h) => {
                  const p = gw(r) || 0,
                    m = 0 === p,
                    v = f === bw(e),
                    y = o[c] - a[p][c],
                    g = o[c] - a[f][u],
                    b = !n && m ? d(i) : 0,
                    _ = pw(g - (!n && v ? d(s) : 0) - (y + b));
                  return h && _ > t + l && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return h
        }(S, T, v, d, x, C, L, D, 2), {
          snaps: M,
          snapsAligned: H
        } = function(e, t, r, n, o) {
          const {
            startEdge: a,
            endEdge: i
          } = e, {
            groupSlides: s
          } = o, l = s(n).map(e => gw(e)[i] - e[0][a]).map(pw).map(t.measure), c = n.map(e => r[a] - e[a]).map(e => -pw(e)), u = s(c).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: c,
            snapsAligned: u
          }
        }(S, R, x, C, A), B = -gw(M) + gw(k), {
          snapsContained: z,
          scrollContainLimit: V
        } = function(e, t, r, n) {
          const o = Sw(-t + e, 0),
            a = r.map((e, t) => {
              const {
                min: n,
                max: a
              } = o, i = o.constrain(e), l = !t, c = _w(r, t);
              return l ? a : c || s(n, i) ? n : s(a, i) ? a : i
            }).map(e => parseFloat(e.toFixed(3))),
            i = function() {
              const e = a[0],
                t = gw(a);
              return Sw(a.lastIndexOf(e), a.indexOf(t) + 1)
            }();

          function s(e, t) {
            return vw(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === n) return a;
              const {
                min: r,
                max: s
              } = i;
              return a.slice(r, s)
            }(),
            scrollContainLimit: i
          }
        }(T, B, H, g), F = N ? z : H, {
          limit: q
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: Sw(r ? n - e : gw(t), n)
          }
        }(B, F, d), U = Tw(bw(F), u, d), G = U.clone(), X = yw(r), K = function(e, t, r, n) {
          const o = Cw(),
            a = 1e3 / 60;
          let i = null,
            s = 0,
            l = 0;

          function c(e) {
            if (!l) return;
            i || (i = e, r(), r());
            const o = e - i;
            for (i = e, s += o; s >= a;) r(), s -= a;
            n(s / a), l && (l = t.requestAnimationFrame(c))
          }

          function u() {
            t.cancelAnimationFrame(l), i = null, s = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", () => {
                e.hidden && (i = null, s = 0)
              })
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
        }(n, o, () => (({
          dragHandler: e,
          scrollBody: t,
          scrollBounds: r,
          options: {
            loop: n
          }
        }) => {
          n || r.constrain(e.pointerDown()), t.seek()
        })(se), e => (({
          scrollBody: e,
          translate: t,
          location: r,
          offsetLocation: n,
          previousLocation: o,
          scrollLooper: a,
          slideLooper: i,
          dragHandler: s,
          animation: l,
          eventHandler: c,
          scrollBounds: u,
          options: {
            loop: d
          }
        }, f) => {
          const h = e.settled(),
            p = !u.shouldConstrain(),
            m = d ? h : h && p,
            v = m && !s.pointerDown();
          v && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), d && (a.loop(e.direction()), i.loop()), t.to(n.get()), v && c.emit("settle"), m || c.emit("scroll")
        })(se, e)), W = F[U.get()], Z = kw(W), $ = kw(W), Y = kw(W), Q = kw(W), J = function(e, t, r, n, o) {
          let a = 0,
            i = 0,
            s = o,
            l = .68,
            c = e.get(),
            u = 0;

          function d(e) {
            return s = e, h
          }

          function f(e) {
            return l = e, h
          }
          const h = {
            direction: function() {
              return i
            },
            duration: function() {
              return s
            },
            velocity: function() {
              return a
            },
            seek: function() {
              const t = n.get() - e.get();
              let o = 0;
              return s ? (r.set(e), a += t / s, a *= l, c += a, e.add(a), o = c - u) : (a = 0, r.set(n), e.set(n), o = t), i = mw(o), u = c, h
            },
            settled: function() {
              return pw(n.get() - t.get()) < .001
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
        }(Z, Y, $, Q, f), ee = function(e, t, r, n, o) {
          const {
            reachedAny: a,
            removeOffset: i,
            constrain: s
          } = n;

          function l(e) {
            return e.concat().sort((e, t) => pw(e) - pw(t))[0]
          }

          function c(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const a = o.filter(e => mw(e) === n);
            return a.length ? l(a) : gw(o) - r
          }
          const u = {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: u,
                  distance: d
                } = function(r) {
                  const n = e ? i(r) : s(r),
                    o = t.map((e, t) => ({
                      diff: c(e - n, 0),
                      index: t
                    })).sort((e, t) => pw(e.diff) - pw(t.diff)),
                    {
                      index: a
                    } = o[0];
                  return {
                    index: a,
                    distance: n
                  }
                }(l),
                f = !e && a(l);
              return !n || f ? {
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
        }(d, F, B, q, Q), te = function(e, t, r, n, o, a, i) {
          function s(o) {
            const s = o.distance,
              l = o.index !== t.get();
            a.add(s), s && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (r.set(t.get()), t.set(o.index), i.emit("select"))
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
        }(K, U, G, J, ee, Q, i), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(q), ne = Cw(), oe = function(e, t, r, n) {
          const o = {};
          let a, i = null,
            s = null,
            l = !1;
          return {
            init: function() {
              a = new IntersectionObserver(e => {
                l || (e.forEach(e => {
                  const r = t.indexOf(e.target);
                  o[r] = e
                }), i = null, s = null, r.emit("slidesInView"))
              }, {
                root: e.parentElement,
                threshold: n
              }), t.forEach(e => a.observe(e))
            },
            destroy: function() {
              a && a.disconnect(), l = !0
            },
            get: function(e = !0) {
              if (e && i) return i;
              if (!e && s) return s;
              const t = function(e) {
                return Pw(o).reduce((t, r) => {
                  const n = parseInt(r),
                    {
                      isIntersecting: a
                    } = o[n];
                  return (e && a || !e && !a) && t.push(n), t
                }, [])
              }(e);
              return e && (i = t), e || (s = t), t
            }
          }
        }(t, r, i, m), {
          slideRegistry: ae
        } = function(e, t, r, n, o, a) {
          const {
            groupSlides: i
          } = o, {
            min: s,
            max: l
          } = n;
          return {
            slideRegistry: function() {
              const n = i(a),
                o = !e || "keepSnaps" === t;
              return 1 === r.length ? [a] : o ? n : n.slice(s, l).map((e, t, r) => {
                const n = !t,
                  o = _w(r, t);
                return n ? ww(gw(r[0]) + 1) : o ? ww(bw(a) - gw(r)[0] + 1, gw(r)[0]) : e
              })
            }()
          }
        }(N, g, F, V, A, X), ie = function(e, t, r, n, o, a, i, s) {
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
              s && (a.add(document, "keydown", u, !1), t.forEach((t, u) => {
                a.add(t, "focus", t => {
                  (fw(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    i.emit("slideFocusStart"), e.scrollLeft = 0;
                    const a = r.findIndex(e => e.includes(t));
                    uw(a) && (o.useDuration(0), n.index(a, 0), i.emit("slideFocus"))
                  }(u)
                }, l)
              }))
            }
          }
        }(e, r, ae, te, J, ne, i, P), se = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: i,
          containerRect: x,
          slideRects: C,
          animation: K,
          axis: S,
          dragHandler: Ow(S, e, n, o, Q, Rw(S, o), Z, K, te, J, ee, U, i, O, h, p, y, .68, w),
          eventStore: ne,
          percentOfView: O,
          index: U,
          indexPrevious: G,
          limit: q,
          location: Z,
          offsetLocation: Y,
          previousLocation: $,
          options: a,
          resizeHandler: Nw(t, i, o, r, S, b, E),
          scrollBody: J,
          scrollBounds: jw(q, Y, Q, J, O),
          scrollLooper: Iw(B, q, Y, [Z, Y, $, Q]),
          scrollProgress: re,
          scrollSnapList: F.map(re.get),
          scrollSnaps: F,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: Dw(S, T, B, I, k, M, F, Y, r),
          slideFocus: ie,
          slidesHandler: Aw(t, i, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ae,
          slidesToScroll: A,
          target: Q,
          translate: Lw(S, t)
        };
        return se
      }
      const Hw = {
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

      function Bw(e) {
        function t(e, t) {
          return Ew(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = Pw(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => Pw(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function zw(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          a = Bw(o),
          i = function(e) {
            let t = [];
            const r = {
              init: function(r, n) {
                return t = n.filter(({
                  options: t
                }) => !1 !== e.optionsAtMedia(t).active), t.forEach(t => t.init(r, e)), n.reduce((e, t) => Object.assign(e, {
                  [t.name]: t
                }), {})
              },
              destroy: function() {
                t = t.filter(e => e.destroy())
              }
            };
            return r
          }(a),
          s = Cw(),
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
                return r(t).forEach(r => r(e, t)), n
              },
              off: function(e, o) {
                return t[e] = r(e).filter(e => e !== o), n
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
          } = a,
          {
            on: f,
            off: h,
            emit: p
          } = l,
          m = S;
        let v, y, g, b, _ = !1,
          w = c(Hw, zw.globalOptions),
          P = c(w),
          E = [];

        function x(t) {
          const r = Mw(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? x(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function C(t, r) {
          _ || (w = c(w, t), P = u(w), E = r || E, function() {
            const {
              container: t,
              slides: r
            } = P, n = dw(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = dw(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = x(P), d([w, ...E.map(({
            options: e
          }) => e)]).forEach(e => s.add(e, "change", S)), P.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(N), v.eventHandler.init(N), v.resizeHandler.init(N), v.slidesHandler.init(N), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(N), y = i.init(N, E)))
        }

        function S(e, t) {
          const r = R();
          T(), C(c({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function T() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), i.destroy(), s.clear()
        }

        function O(e, t, r) {
          P.active && !_ && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : P.duration), v.scrollTo.index(e, r || 0))
        }

        function R() {
          return v.index.get()
        }
        const N = {
          canScrollNext: function() {
            return v.index.add(1).get() !== R()
          },
          canScrollPrev: function() {
            return v.index.add(-1).get() !== R()
          },
          containerNode: function() {
            return g
          },
          internalEngine: function() {
            return v
          },
          destroy: function() {
            _ || (_ = !0, s.clear(), T(), l.emit("destroy"), l.clear())
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
            O(v.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            O(v.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return v.scrollProgress.get(v.offsetLocation.get())
          },
          scrollSnapList: function() {
            return v.scrollSnapList
          },
          scrollTo: O,
          selectedScrollSnap: R,
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
        return C(t, r), setTimeout(() => l.emit("init"), 0), N
      }

      function Vw(e = {}, t = []) {
        const r = (0, M.useRef)(e),
          n = (0, M.useRef)(t),
          [o, a] = (0, M.useState)(),
          [i, s] = (0, M.useState)(),
          l = (0, M.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, M.useEffect)(() => {
          lw(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, M.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = cw(e),
              n = cw(t);
            return r.every((e, t) => lw(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, M.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && i) {
            zw.globalOptions = Vw.globalOptions;
            const e = zw(i, r.current, n.current);
            return a(e), () => e.destroy()
          }
          a(void 0)
        }, [i, a]), [s, o]
      }

      function Fw(e = {}) {
        let t, r = [];
        const n = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          return n ? n.map(e => r[e]).reduce((e, t) => Math.max(e, t), 0) : null
        }

        function a() {
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
              slideRects: i
            } = t.internalEngine();
            "y" !== o && (r = i.map(e => e.height), n.forEach(e => t.on(e, a)), a())
          },
          destroy: function() {
            n.forEach(e => t.off(e, a));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      zw.globalOptions = void 0, Vw.globalOptions = void 0, Fw.globalOptions = void 0;
      const qw = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function Uw(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function Gw(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Xw(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Kw(e = {}) {
        let t, r, n, o, a = [],
          i = [];
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
          ("pointerDown" === t ? Xw : Gw)(n, u.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            a = e.map(e => o[e]);
          return n.forEach(e => Gw(e, r)), a.forEach(e => Xw(e, r)), e
        }

        function h() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          a = f(t, a, u.snapped)
        }

        function p() {
          const e = r.slidesInView();
          i = f(e, i, u.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(a, i) {
            r = a;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = i, v = f(qw, Kw.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (u.loop = Uw(t.loop), Xw(n, u.loop)), t.draggable && _ && (u.draggable = Uw(t.draggable), Xw(n, u.draggable)), t.dragging && (u.dragging = Uw(t.dragging), l.forEach(e => r.on(e, d))), t.snapped && (u.snapped = Uw(t.snapped), s.forEach(e => r.on(e, h)), h()), t.inView && (u.inView = Uw(t.inView), c.forEach(e => r.on(e, p)), p())
          },
          destroy: function() {
            l.forEach(e => r.off(e, d)), s.forEach(e => r.off(e, h)), c.forEach(e => r.off(e, p)), Gw(n, u.loop), Gw(n, u.draggable), Gw(n, u.dragging), f([], a, u.snapped), f([], i, u.inView), Object.keys(u).forEach(e => {
              u[e] = []
            })
          }
        };
        return m
      }
      Kw.globalOptions = void 0;

      function Ww(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Zw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zw(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ww(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Yw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jw = "foundry_qmpv6yt",
        eP = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $w($w({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Qw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yw(e.variantClassNames, e => Yw(e, e => e.split(" ")[0]))
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
      const tP = (0, M.createContext)(null);

      function rP() {
        const e = (0, M.useContext)(tP);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const nP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: a,
          align: i = "left",
          ...s
        }, l) => {
          const c = (({
              loopPagination: e = !0
            }) => {
              const t = (0, Pe.rl)(),
                r = (0, Pe.jt)(),
                [n, o] = (0, M.useState)([]),
                a = n.length,
                [i, s] = (0, M.useState)(0),
                [l, c] = Vw({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [Fw(), Kw()]),
                u = (0, M.useRef)(0),
                d = (0, M.useRef)(!1),
                f = n[i],
                h = (0, M.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), s(t), d.current = !0
                }, [c]),
                p = (0, M.useCallback)(e => {
                  u.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, M.useCallback)((e, t) => {
                  const r = e.internalEngine(),
                    n = e.scrollProgress(),
                    o = e.slidesInView(),
                    a = "scroll" === t;
                  e.scrollSnapList().forEach((t, i) => {
                    let s = t - n;
                    r.slideRegistry[i].forEach(i => {
                      if (a && !o.includes(i)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                        const r = e.target();
                        if (i === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (s = t - (1 + n)), 1 === e && (s = t + (1 - n))
                        }
                      });
                      const l = (c = 1 - Math.abs(s * u.current), Math.min(Math.max(c, 0), 1)).toString();
                      var c;
                      e.slideNodes()[i].style.opacity = l
                    })
                  })
                }, []);
              return (0, M.useEffect)(() => {
                c && (p(c), m(c), c.on("reInit", p).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [c, m]), (0, M.useEffect)(() => {
                c && (h(c), c.on("select", h).on("reInit", h))
              }, [c, h]), {
                setAlerts: o,
                alerts: n,
                numAlerts: a,
                emblaRef: l,
                prevAlert: () => c?.scrollPrev(r),
                nextAlert: () => c?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: i,
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
              currentAlert: u,
              isInitialized: d,
              setAlerts: f,
              numAlerts: h
            } = c;
          (0, M.useEffect)(() => {
            o && a && f([{
              status: o,
              background: a,
              align: i
            }])
          }, []);
          const p = h > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            m = (0, F.mergeProps)({
              className: eP(u)
            }, p, s),
            v = e ? Ee.DX : "div";
          return (0, _.jsx)(tP.Provider, {
            value: c,
            children: (0, _.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        }),
        oP = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        aP = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = rP();
          if (!e && !n || !n?.status) return null;
          const o = e || oP[n.status],
            a = He[o],
            i = (0, F.mergeProps)({
              className: "foundry_qmpv6yn"
            }, t);
          return (0, _.jsx)(a, {
            label: "",
            ref: r,
            size: "LG",
            "data-icon": !0,
            ...i
          })
        }),
        iP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Ee.DX : "div",
            a = (0, F.mergeProps)({
              className: "foundry_qmpv6yo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        sP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...a
        }, i) => {
          const s = e ? Ee.DX : "div",
            l = (0, F.mergeProps)({
              className: "foundry_qmpv6yk"
            }, a);
          return (0, _.jsx)(s, {
            ref: i,
            "data-testid": t,
            ...l
          })
        }),
        lP = (0, M.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a
          } = rP(), i = (0, F.mergeProps)({
            className: "foundry_qmpv6yl"
          }, r), s = (0, Pe.UP)(a, n), l = M.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, M.useEffect)(() => {
            l && o(l)
          }, []), (0, _.jsx)("div", {
            ref: s,
            "data-testid": e,
            ...i,
            children: (0, _.jsx)("div", {
              className: "foundry_qmpv6ym",
              children: t
            })
          })
        }),
        cP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, M.useRef)(null),
            i = (0, Pe.UP)(a, o),
            s = e ? Ee.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = j_(n, a),
            u = (0, F.mergeProps)({
              className: "foundry_qmpv6yp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, _.jsx)(s, {
            "data-pressed": c,
            "data-testid": r,
            ref: i,
            ...l,
            ...u,
            children: t
          })
        }),
        uP = (0, M.forwardRef)((e, t) => {
          const r = (0, F.mergeProps)({
            className: "foundry_qmpv6yq"
          }, e);
          return (0, _.jsx)(H_, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        dP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? Ee.DX : "div",
            i = (0, F.mergeProps)({
              className: "foundry_qmpv6ys"
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...i,
            children: r
          })
        }),
        fP = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = rP(), a = (0, F.mergeProps)({
            className: Jw
          }, t);
          return (0, _.jsx)(at, {
            ref: r,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...a
          })
        }),
        hP = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = rP(), a = (0, F.mergeProps)({
            className: Jw
          }, t);
          return (0, _.jsx)(at, {
            ref: r,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...a
          })
        }),
        pP = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = rP(), a = (0, F.mergeProps)({
            className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh"
          }, t);
          return (0, _.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [n + 1, "/", o]
          })
        });

      function mP(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function vP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vP(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = mP(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        _P = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yP(yP({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) bP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gP(e.variantClassNames, e => gP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        wP = _P({
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
        PP = _P({
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
        EP = _P({
          defaultClassName: "foundry_oahh58z",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
              LG: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc foundry_tdsdcdh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const xP = (0, M.createContext)(null);

      function CP() {
        const e = (0, M.useContext)(xP);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const SP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: a,
          hasBorder: i,
          isDisabled: s,
          ...l
        }, c) => {
          const u = {
              size: n,
              background: o,
              color: a,
              hasBorder: i,
              isDisabled: s
            },
            d = (0, F.mergeProps)({
              className: PP(u)
            }, l),
            f = e ? Ee.DX : "div";
          return (0, _.jsx)(xP.Provider, {
            value: u,
            children: (0, _.jsx)(f, {
              ref: c,
              "data-testid": r,
              "aria-disabled": s,
              ...d,
              children: t
            })
          })
        }),
        TP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = CP(), i = e ? Ee.DX : "div", s = (0, F.mergeProps)({
            className: EP({
              size: a
            })
          }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        OP = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = He[e],
            o = (0, F.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, _.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        RP = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = CP(), a = (0, F.mergeProps)({
            className: wP({
              background: n
            })
          }, t);
          return (0, _.jsx)(at, {
            ref: r,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: o,
            ...a
          })
        });
      var NP = "ToastProvider",
        [jP, IP, kP] = (0, lf.N)("Toast"),
        [LP, DP] = (0, id.A)("Toast", [kP]),
        [AP, MP] = LP(NP),
        HP = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            children: i
          } = e, [s, l] = M.useState(null), [c, u] = M.useState(0), d = M.useRef(!1), f = M.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${NP}\`. Expected non-empty \`string\`.`), (0, _.jsx)(jP.Provider, {
            scope: t,
            children: (0, _.jsx)(AP, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: c,
              viewport: s,
              onViewportChange: l,
              onToastAdd: M.useCallback(() => u(e => e + 1), []),
              onToastRemove: M.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: i
            })
          })
        };
      HP.displayName = NP;
      var BP = "ToastViewport",
        zP = ["F8"],
        VP = "toast.viewportPause",
        FP = "toast.viewportResume",
        qP = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = zP,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, i = MP(BP, r), s = IP(r), l = M.useRef(null), c = M.useRef(null), u = M.useRef(null), d = M.useRef(null), f = (0, ad.s)(t, d, i.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), p = i.toastCount > 0;
          M.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && d.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), M.useEffect(() => {
            const e = l.current,
              t = d.current;
            if (p && e && t) {
              const r = () => {
                  if (!i.isClosePausedRef.current) {
                    const e = new CustomEvent(VP);
                    t.dispatchEvent(e), i.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (i.isClosePausedRef.current) {
                    const e = new CustomEvent(FP);
                    t.dispatchEvent(e), i.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && n()
                },
                a = () => {
                  e.contains(document.activeElement) || n()
                };
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", a), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [p, i.isClosePausedRef]);
          const m = M.useCallback(({
            tabbingDirection: e
          }) => {
            const t = s().map(t => {
              const r = t.ref.current,
                n = [r, ...sE(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [s]);
          return M.useEffect(() => {
            const e = d.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void c.current?.focus();
                  const o = m({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === r);
                  lE(o.slice(a + 1)) ? t.preventDefault() : n ? c.current?.focus() : u.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [s, m]), (0, _.jsxs)(sd.lg, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", h),
            tabIndex: -1,
            style: {
              pointerEvents: p ? void 0 : "none"
            },
            children: [p && (0, _.jsx)(GP, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                lE(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, _.jsx)(jP.Slot, {
              scope: r,
              children: (0, _.jsx)(fd.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), p && (0, _.jsx)(GP, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                lE(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      qP.displayName = BP;
      var UP = "ToastFocusProxy",
        GP = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = MP(UP, r);
          return (0, _.jsx)(md.VisuallyHidden, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !a.viewport?.contains(t) && n()
            }
          })
        });
      GP.displayName = UP;
      var XP = "Toast",
        KP = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...i
          } = e, [s, l] = (0, pd.useControllableState)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: XP
          });
          return (0, _.jsx)(dd.C, {
            present: r || s,
            children: (0, _.jsx)($P, {
              open: s,
              ...i,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Pp.c)(e.onPause),
              onResume: (0, Pp.c)(e.onResume),
              onSwipeStart: (0, od.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, od.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, od.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, od.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      KP.displayName = XP;
      var [WP, ZP] = LP(XP, {
        onClose() {}
      }), $P = M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: a,
          onClose: i,
          onEscapeKeyDown: s,
          onPause: l,
          onResume: c,
          onSwipeStart: u,
          onSwipeMove: d,
          onSwipeCancel: f,
          onSwipeEnd: h,
          ...p
        } = e, m = MP(XP, r), [v, y] = M.useState(null), g = (0, ad.s)(t, e => y(e)), b = M.useRef(null), w = M.useRef(null), P = o || m.duration, E = M.useRef(0), x = M.useRef(P), C = M.useRef(0), {
          onToastAdd: S,
          onToastRemove: T
        } = m, O = (0, Pp.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), i()
        }), R = M.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), E.current = (new Date).getTime(), C.current = window.setTimeout(O, e))
        }, [O]);
        M.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                R(x.current), c?.()
              },
              r = () => {
                const e = (new Date).getTime() - E.current;
                x.current = x.current - e, window.clearTimeout(C.current), l?.()
              };
            return e.addEventListener(VP, r), e.addEventListener(FP, t), () => {
              e.removeEventListener(VP, r), e.removeEventListener(FP, t)
            }
          }
        }, [m.viewport, P, l, c, R]), M.useEffect(() => {
          a && !m.isClosePausedRef.current && R(P)
        }, [a, P, m.isClosePausedRef, R]), M.useEffect(() => (S(), () => T()), [S, T]);
        const N = M.useMemo(() => v ? oE(v) : null, [v]);
        return m.viewport ? (0, _.jsxs)(_.Fragment, {
          children: [N && (0, _.jsx)(YP, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: N
          }), (0, _.jsx)(WP, {
            scope: r,
            onClose: O,
            children: qu.createPortal((0, _.jsx)(jP.ItemSlot, {
              scope: r,
              children: (0, _.jsx)(sd.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, od.mK)(s, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || O(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, _.jsx)(fd.sG.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": m.swipeDirection,
                  ...p,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, od.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (s?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, O()))
                  }),
                  onPointerDown: (0, od.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, od.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      a = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      i = o ? a(0, t) : 0,
                      s = o ? 0 : a(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      c = {
                        x: i,
                        y: s
                      },
                      f = {
                        originalEvent: e,
                        delta: c
                      };
                    n ? (w.current = c, aE("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : iE(c, m.swipeDirection, l) ? (w.current = c, aE("toast.swipeStart", u, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: (0, od.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      iE(t, m.swipeDirection, m.swipeThreshold) ? aE("toast.swipeEnd", h, n, {
                        discrete: !0
                      }) : aE("toast.swipeCancel", f, n, {
                        discrete: !0
                      }), r.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), m.viewport)
          })]
        }) : null
      }), YP = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = MP(XP, t), [a, i] = M.useState(!1), [s, l] = M.useState(!1);
        return function(e = () => {}) {
          const t = (0, Pp.c)(e);
          (0, Ep.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => i(!0)), M.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), s ? null : (0, _.jsx)(ud.Portal, {
          asChild: !0,
          children: (0, _.jsx)(md.VisuallyHidden, {
            ...n,
            children: a && (0, _.jsxs)(_.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, _.jsx)(fd.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var QP = M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, _.jsx)(fd.sG.div, {
          ...n,
          ref: t
        })
      });
      QP.displayName = "ToastDescription";
      var JP = "ToastAction",
        eE = M.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, _.jsx)(nE, {
            altText: r,
            asChild: !0,
            children: (0, _.jsx)(rE, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${JP}\`. Expected non-empty \`string\`.`), null)
        });
      eE.displayName = JP;
      var tE = "ToastClose",
        rE = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = ZP(tE, r);
          return (0, _.jsx)(nE, {
            asChild: !0,
            children: (0, _.jsx)(fd.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, od.mK)(e.onClick, o.onClose)
            })
          })
        });
      rE.displayName = tE;
      var nE = M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, _.jsx)(fd.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function oE(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e)) {
            const r = e.ariaHidden || e.hidden || "none" === e.style.display,
              n = "" === e.dataset.radixToastAnnounceExclude;
            if (!r)
              if (n) {
                const r = e.dataset.radixToastAnnounceAlt;
                r && t.push(r)
              } else t.push(...oE(e))
          }
        }), t
      }

      function aE(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.currentTarget,
          a = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, fd.hO)(o, a) : o.dispatchEvent(a)
      }
      var iE = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function sE(e) {
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

      function lE(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var cE = HP,
        uE = qP,
        dE = KP,
        fE = QP,
        hE = eE,
        pE = rE;

      function mE(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function vE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vE(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = mE(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        _E = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yE(yE({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) bE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gE(e.variantClassNames, e => gE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        wE = _E({
          defaultClassName: "foundry_dnh2nzk",
          variantClassNames: {
            appearance: {
              danger: "foundry_dnh2nzl",
              information: "foundry_dnh2nzm",
              warning: "foundry_dnh2nzn",
              success: "foundry_dnh2nzo",
              avocado: "foundry_dnh2nzp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        PE = _E({
          defaultClassName: "foundry_dnh2nzd foundry_1d5mo5m0",
          variantClassNames: {
            appearance: {
              danger: "foundry_dnh2nze",
              information: "foundry_dnh2nzf",
              warning: "foundry_dnh2nzg",
              success: "foundry_dnh2nzh",
              avocado: "foundry_dnh2nzi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        EE = _E({
          defaultClassName: "foundry_dnh2nz8 foundry_8kowh41",
          variantClassNames: {
            position: {
              topLeft: "foundry_dnh2nz9",
              topRight: "foundry_dnh2nza",
              bottomLeft: "foundry_dnh2nzb",
              bottomRight: "foundry_dnh2nzc"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const xE = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, _.jsx)(cE, {
          ref: n,
          "data-testid": t,
          ...r,
          children: e
        })),
        CE = (0, M.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const a = (0, F.mergeProps)({
            className: EE({
              position: r
            })
          }, n);
          return (0, _.jsx)(uE, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        SE = (0, M.createContext)(null);

      function TE() {
        const e = (0, M.useContext)(SE);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const OE = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const i = e ? Ee.DX : dE,
            s = (0, F.mergeProps)({
              className: PE({
                appearance: n
              })
            }, o);
          return (0, _.jsx)(SE.Provider, {
            value: {
              appearance: n
            },
            children: (0, _.jsx)(i, {
              ref: a,
              "data-testid": r,
              ...s,
              children: t
            })
          })
        }),
        RE = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? Ee.DX : fE,
            i = (0, F.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        NE = {
          danger: Me.CircleX,
          information: Me.Info,
          success: Me.CircleCheck,
          warning: Me.TriangleAlert,
          avocado: Me.CircleCheck
        },
        jE = (0, M.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = TE(), o = e ? Ee.DX : NE[n], a = (0, F.mergeProps)({
            className: wE({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, _.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        IE = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? Ee.DX : hE,
            i = (0, F.mergeProps)({
              className: "foundry_dnh2nzq",
              asChild: !0
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: e ? (0, _.jsx)(Ee.xV, {
              children: t
            }) : (0, _.jsx)(Ze, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        kE = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? Ee.DX : pE,
            i = (0, F.mergeProps)({
              className: "foundry_dnh2nzr",
              asChild: !0
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: e ? (0, _.jsx)(Ee.xV, {
              children: t
            }) : (0, _.jsx)(H_, {
              size: "SM",
              label: ""
            })
          })
        });

      function LE(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function DE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function AE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? DE(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = LE(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : DE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ME(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var HE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        BE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = AE(AE({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) HE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ME(e.variantClassNames, e => ME(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zE = BE({
          defaultClassName: "foundry_m1icrx6 foundry_1d5mo5m0",
          variantClassNames: {
            size: {
              MD: "foundry_m1icrx7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
              LG: "foundry_m1icrx8 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc foundry_tdsdcdh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        VE = BE({
          defaultClassName: "foundry_m1icrx3",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
              LG: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc foundry_tdsdcdh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        FE = BE({
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

      function qE() {
        const e = (0, M.useContext)(UE);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const UE = (0, M.createContext)(null),
        GE = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, a) => {
          const i = (0, F.mergeProps)({
              className: FE({
                size: n
              })
            }, o),
            s = r ? Ee.DX : "ol";
          return (0, _.jsx)(UE.Provider, {
            value: {
              size: n
            },
            children: (0, _.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i,
              children: e
            })
          })
        }),
        XE = (0, M.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, a) => {
          const i = (0, M.useRef)(null),
            {
              size: s
            } = qE(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: r,
                isDisabled: n,
                "aria-current": o,
                elementType: a = "a",
                ...i
              } = e, {
                linkProps: s
              } = j_({
                isDisabled: n || r,
                elementType: a,
                ...i
              }, t), l = {};
              return /^h[1-6]$/.test(a) || (l = s), r && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": n,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, i),
            c = r ? Ee.DX : "a",
            u = (0, F.mergeProps)({
              className: (0, Ae.clsx)(zE({
                size: s
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, _.jsx)("li", {
            className: VE({
              size: s
            }),
            ref: a,
            children: (0, _.jsx)(c, {
              ref: i,
              ...u,
              children: t
            })
          })
        }),
        KE = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = He[e];
          return (0, _.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        WE = (0, M.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [i, s] = (0, M.useState)(r), {
            size: l
          } = qE(), c = (0, F.mergeProps)({
            className: VE({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, _.jsx)("li", {
            ref: a,
            ...c,
            children: (0, _.jsxs)(cv, {
              open: i,
              onOpenChange: () => s(!i),
              children: [(0, _.jsx)(uv, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, _.jsx)(hv, {
                children: (0, _.jsx)(pv, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, _.jsx)(mv, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        ZE = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? Ee.DX : vv,
            i = (0, F.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            ...i,
            children: e
          })
        });

      function $E(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function YE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function QE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? YE(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = $E(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : YE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function JE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ex = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tx = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = QE(QE({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ex(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return JE(e.variantClassNames, e => JE(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_18omk9t0",
          variantClassNames: {
            appearance: {
              primary: "foundry_18omk9t1",
              secondary: "foundry_18omk9t2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const rx = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          ...n
        }, o) => {
          const a = e ? Ee.DX : "div",
            i = (0, F.mergeProps)({
              className: tx({
                appearance: r
              })
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...i
          })
        }),
        nx = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? Ee.DX : "div",
            i = (0, F.mergeProps)({
              className: "foundry_18omk9t4 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo"
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        ox = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = He[e],
            o = (0, F.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t3",
              label: ""
            }, t);
          return (0, _.jsx)(n, {
            ref: r,
            ...o
          })
        });
      var ax = wx(),
        ix = e => yx(e, ax),
        sx = wx();
      ix.write = e => yx(e, sx);
      var lx = wx();
      ix.onStart = e => yx(e, lx);
      var cx = wx();
      ix.onFrame = e => yx(e, cx);
      var ux = wx();
      ix.onFinish = e => yx(e, ux);
      var dx = [];
      ix.setTimeout = (e, t) => {
        const r = ix.now() + t,
          n = () => {
            const e = dx.findIndex(e => e.cancel == n);
            ~e && dx.splice(e, 1), mx -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return dx.splice(fx(r), 0, o), mx += 1, gx(), o
      };
      var fx = e => ~(~dx.findIndex(t => t.time > e) || ~dx.length);
      ix.cancel = e => {
        lx.delete(e), cx.delete(e), ux.delete(e), ax.delete(e), sx.delete(e)
      }, ix.sync = e => {
        vx = !0, ix.batchedUpdates(e), vx = !1
      }, ix.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, ix.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          lx.delete(r), t = null
        }, n
      };
      var hx = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      ix.use = e => hx = e, ix.now = "undefined" != typeof performance ? () => performance.now() : Date.now, ix.batchedUpdates = e => e(), ix.catch = console.error, ix.frameLoop = "always", ix.advance = () => {
        "demand" !== ix.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : _x()
      };
      var px = -1,
        mx = 0,
        vx = !1;

      function yx(e, t) {
        vx ? (t.delete(e), e(0)) : (t.add(e), gx())
      }

      function gx() {
        px < 0 && (px = 0, "demand" !== ix.frameLoop && hx(bx))
      }

      function bx() {
        ~px && (hx(bx), ix.batchedUpdates(_x))
      }

      function _x() {
        const e = px;
        px = ix.now();
        const t = fx(px);
        t && (Px(dx.splice(0, t), e => e.handler()), mx -= t), mx ? (lx.flush(), ax.flush(e ? Math.min(64, px - e) : 16.667), cx.flush(), sx.flush(), ux.flush()) : px = -1
      }

      function wx() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            mx += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (mx -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, mx -= t.size, Px(t, t => t(r) && e.add(t)), mx += e.size, t = e)
          }
        }
      }

      function Px(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            ix.catch(e)
          }
        })
      }
      var Ex = Object.defineProperty,
        xx = {};

      function Cx() {}((e, t) => {
        for (var r in t) Ex(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(xx, {
        assign: () => Bx,
        colors: () => Ax,
        createStringInterpolator: () => Ix,
        skipAnimation: () => Mx,
        to: () => kx,
        willAdvance: () => Hx
      });
      var Sx = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Tx(e, t) {
        if (Sx.arr(e)) {
          if (!Sx.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var Ox = (e, t) => e.forEach(t);

      function Rx(e, t, r) {
        if (Sx.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Nx = e => Sx.und(e) ? [] : Sx.arr(e) ? e : [e];

      function jx(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Ox(r, t)
        }
      }
      var Ix, kx, Lx = (e, ...t) => jx(e, e => e(...t)),
        Dx = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Ax = null,
        Mx = !1,
        Hx = Cx,
        Bx = e => {
          e.to && (kx = e.to), e.now && (ix.now = e.now), void 0 !== e.colors && (Ax = e.colors), null != e.skipAnimation && (Mx = e.skipAnimation), e.createStringInterpolator && (Ix = e.createStringInterpolator), e.requestAnimationFrame && ix.use(e.requestAnimationFrame), e.batchedUpdates && (ix.batchedUpdates = e.batchedUpdates), e.willAdvance && (Hx = e.willAdvance), e.frameLoop && (ix.frameLoop = e.frameLoop)
        },
        zx = new Set,
        Vx = [],
        Fx = [],
        qx = 0,
        Ux = {
          get idle() {
            return !zx.size && !Vx.length
          },
          start(e) {
            qx > e.priority ? (zx.add(e), ix.onStart(Gx)) : (Xx(e), ix(Wx))
          },
          advance: Wx,
          sort(e) {
            if (qx) ix.onFrame(() => Ux.sort(e));
            else {
              const t = Vx.indexOf(e);
              ~t && (Vx.splice(t, 1), Kx(e))
            }
          },
          clear() {
            Vx = [], zx.clear()
          }
        };

      function Gx() {
        zx.forEach(Xx), zx.clear(), ix(Wx)
      }

      function Xx(e) {
        Vx.includes(e) || Kx(e)
      }

      function Kx(e) {
        Vx.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(Vx), 0, e)
      }

      function Wx(e) {
        const t = Fx;
        for (let r = 0; r < Vx.length; r++) {
          const n = Vx[r];
          qx = n.priority, n.idle || (Hx(n), n.advance(e), n.idle || t.push(n))
        }
        return qx = 0, (Fx = Vx).length = 0, (Vx = t).length > 0
      }
      var Zx = "[-+]?\\d*\\.?\\d+",
        $x = Zx + "%";

      function Yx(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Qx = new RegExp("rgb" + Yx(Zx, Zx, Zx)),
        Jx = new RegExp("rgba" + Yx(Zx, Zx, Zx, Zx)),
        eC = new RegExp("hsl" + Yx(Zx, $x, $x)),
        tC = new RegExp("hsla" + Yx(Zx, $x, $x, Zx)),
        rC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        nC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        oC = /^#([0-9a-fA-F]{6})$/,
        aC = /^#([0-9a-fA-F]{8})$/;

      function iC(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function sC(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          a = iC(o, n, e + 1 / 3),
          i = iC(o, n, e),
          s = iC(o, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * i) << 16 | Math.round(255 * s) << 8
      }

      function lC(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function cC(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function uC(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function dC(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function fC(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = oC.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ax && void 0 !== Ax[e] ? Ax[e] : (t = Qx.exec(e)) ? (lC(t[1]) << 24 | lC(t[2]) << 16 | lC(t[3]) << 8 | 255) >>> 0 : (t = Jx.exec(e)) ? (lC(t[1]) << 24 | lC(t[2]) << 16 | lC(t[3]) << 8 | uC(t[4])) >>> 0 : (t = rC.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = aC.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = nC.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = eC.exec(e)) ? (255 | sC(cC(t[1]), dC(t[2]), dC(t[3]))) >>> 0 : (t = tC.exec(e)) ? (sC(cC(t[1]), dC(t[2]), dC(t[3])) | uC(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var hC = (e, t, r) => {
          if (Sx.fun(e)) return e;
          if (Sx.arr(e)) return hC({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Sx.str(e.output[0])) return Ix(e);
          const n = e,
            o = n.output,
            a = n.range || [0, 1],
            i = n.extrapolateLeft || n.extrapolate || "extend",
            s = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, a);
            return function(e, t, r, n, o, a, i, s, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === i) return c;
                "clamp" === i && (c = t)
              }
              if (c > r) {
                if ("identity" === s) return c;
                "clamp" === s && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = a(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, a[t], a[t + 1], o[t], o[t + 1], l, i, s, n.map)
          }
        },
        pC = 1.70158,
        mC = 2.5949095,
        vC = 2.70158,
        yC = 2 * Math.PI / 3,
        gC = 2 * Math.PI / 4.5,
        bC = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        _C = {
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
          easeInBack: e => vC * e * e * e - pC * e * e,
          easeOutBack: e => 1 + vC * Math.pow(e - 1, 3) + pC * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - mC) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + mC) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * yC),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * yC) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * gC) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * gC) / 2 + 1,
          easeInBounce: e => 1 - bC(1 - e),
          easeOutBounce: bC,
          easeInOutBounce: e => e < .5 ? (1 - bC(1 - 2 * e)) / 2 : (1 + bC(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        wC = Symbol.for("FluidValue.get"),
        PC = Symbol.for("FluidValue.observers"),
        EC = e => Boolean(e && e[wC]),
        xC = e => e && e[wC] ? e[wC]() : e,
        CC = e => e[PC] || null;

      function SC(e, t) {
        const r = e[PC];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var TC = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            OC(this, e)
          }
        },
        OC = (e, t) => IC(e, wC, t);

      function RC(e, t) {
        if (e[wC]) {
          let r = e[PC];
          r || IC(e, PC, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function NC(e, t) {
        const r = e[PC];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[PC] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var jC, IC = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        kC = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        LC = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        DC = new RegExp(`(${kC.source})(%|[a-z]+)`, "i"),
        AC = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        MC = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        HC = e => {
          const [t, r] = BC(e);
          if (!t || Dx()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && MC.test(r) ? HC(r) : r || e
        },
        BC = e => {
          const t = MC.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        zC = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        VC = e => {
          jC || (jC = Ax ? new RegExp(`(${Object.keys(Ax).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => xC(e).replace(MC, HC).replace(LC, fC).replace(jC, fC)),
            r = t.map(e => e.match(kC).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => hC({
              ...e,
              output: t
            }));
          return e => {
            const r = !DC.test(t[0]) && t.find(e => DC.test(e))?.replace(kC, "");
            let n = 0;
            return t[0].replace(kC, () => `${o[n++](e)}${r||""}`).replace(AC, zC)
          }
        },
        FC = "react-spring: ",
        qC = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${FC}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        UC = qC(console.warn),
        GC = qC(console.warn);

      function XC(e) {
        return Sx.str(e) && ("#" == e[0] || /\d/.test(e) || !Dx() && MC.test(e) || e in (Ax || {}))
      }
      var KC = Dx() ? M.useEffect : M.useLayoutEffect;

      function WC() {
        const e = (0, M.useState)()[1],
          t = (() => {
            const e = (0, M.useRef)(!1);
            return KC(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var ZC = e => (0, M.useEffect)(e, $C),
        $C = [],
        YC = Symbol.for("Animated:node"),
        QC = e => e && e[YC],
        JC = (e, t) => {
          return r = e, n = YC, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        eS = e => e && e[YC] && e[YC].getPayload(),
        tS = class {
          constructor() {
            JC(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        rS = class e extends tS {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Sx.num(this._value) && (this.lastPosition = this._value)
          }
          static create(t) {
            return new e(t)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Sx.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Sx.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        nS = class e extends rS {
          constructor(e) {
            super(0), this._string = null, this._toString = hC({
              output: [e, e]
            })
          }
          static create(t) {
            return new e(t)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Sx.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = hC({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        oS = {
          dependencies: null
        },
        aS = class extends tS {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Rx(this.source, (r, n) => {
              var o;
              (o = r) && o[YC] === o ? t[n] = r.getValue(e) : EC(r) ? t[n] = xC(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Ox(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Rx(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            oS.dependencies && EC(e) && oS.dependencies.add(e);
            const t = eS(e);
            t && Ox(t, e => this.add(e))
          }
        },
        iS = class e extends aS {
          constructor(e) {
            super(e)
          }
          static create(t) {
            return new e(t)
          }
          getValue() {
            return this.source.map(e => e.getValue())
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(sS)), !0)
          }
        };

      function sS(e) {
        return (XC(e) ? nS : rS).create(e)
      }

      function lS(e) {
        const t = QC(e);
        return t ? t.constructor : Sx.arr(e) ? iS : XC(e) ? nS : rS
      }
      var cS = (e, t) => {
          const r = !Sx.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, M.forwardRef)((n, o) => {
            const a = (0, M.useRef)(null),
              i = r && (0, M.useCallback)(e => {
                a.current = function(e, t) {
                  return e && (Sx.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return oS.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new aS(e), oS.dependencies = null, [e, r]
              }(n, t),
              c = WC(),
              u = () => {
                const e = a.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new uS(u, l),
              f = (0, M.useRef)(void 0);
            KC(() => (f.current = d, Ox(l, e => RC(e, d)), () => {
              f.current && (Ox(f.current.deps, e => NC(e, f.current)), ix.cancel(f.current.update))
            })), (0, M.useEffect)(u, []), ZC(() => () => {
              const e = f.current;
              Ox(e.deps, t => NC(t, e))
            });
            const h = t.getComponentProps(s.getValue());
            return M.createElement(e, {
              ...h,
              ref: i
            })
          })
        },
        uS = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && ix.write(this.update)
          }
        },
        dS = Symbol.for("AnimatedComponent"),
        fS = e => Sx.str(e) ? e : e && Sx.str(e.displayName) ? e.displayName : Sx.fun(e) && e.name || null;

      function hS(e, ...t) {
        return Sx.fun(e) ? e(...t) : e
      }
      var pS = (e, t) => !0 === e || !!(t && e && (Sx.fun(e) ? e(t) : Nx(e).includes(t))),
        mS = (e, t) => Sx.obj(e) ? t && e[t] : e,
        vS = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        yS = e => e,
        gS = (e, t = yS) => {
          let r = bS;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Sx.und(r) || (n[o] = r)
          }
          return n
        },
        bS = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        _S = {
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

      function wS(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Rx(e, (e, n) => {
              _S[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Rx(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function PS(e) {
        return e = xC(e), Sx.arr(e) ? e.map(PS) : XC(e) ? xx.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function ES(e) {
        return Sx.fun(e) || Sx.arr(e) && Sx.obj(e[0])
      }

      function xS(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var CS = {
          default: {
            tension: 170,
            friction: 26
          },
          gentle: {
            tension: 120,
            friction: 14
          },
          wobbly: {
            tension: 180,
            friction: 12
          },
          stiff: {
            tension: 210,
            friction: 20
          },
          slow: {
            tension: 280,
            friction: 60
          },
          molasses: {
            tension: 280,
            friction: 120
          }
        },
        SS = {
          ...CS.default,
          mass: 1,
          damping: 1,
          easing: _C.linear,
          clamp: !1
        },
        TS = class {
          constructor() {
            this.velocity = 0, Object.assign(this, SS)
          }
        };

      function OS(e, t) {
        if (Sx.und(t.decay)) {
          const r = !Sx.und(t.tension) || !Sx.und(t.friction);
          !r && Sx.und(t.frequency) && Sx.und(t.damping) && Sx.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var RS = [],
        NS = class {
          constructor() {
            this.changed = !1, this.values = RS, this.toValues = null, this.fromValues = RS, this.config = new TS, this.immediate = !1
          }
        };

      function jS(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: a
      }) {
        return new Promise((i, s) => {
          let l, c, u = pS(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            Sx.und(r.pause) || (o.paused = pS(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || pS(e, t)), l = hS(r.delay || 0, t), e ? (o.resumeQueue.add(f), a.pause()) : (a.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - ix.now()
          }

          function f() {
            l > 0 && !xx.skipAnimation ? (o.delayed = !0, c = ix.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              a.start({
                ...r,
                callId: e,
                cancel: u
              }, i)
            } catch (e) {
              s(e)
            }
          }
        })
      }
      var IS = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? DS(e.get()) : t.every(e => e.noop) ? kS(e.get()) : LS(e.get(), t.every(e => e.finished)),
        kS = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        LS = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        DS = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function AS(e, t, r, n) {
        const {
          callId: o,
          parentId: a,
          onRest: i
        } = t, {
          asyncTo: s,
          promise: l
        } = r;
        return a || e !== s || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const c = gS(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && DS(n) || o !== r.asyncId && LS(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const a = new HS,
                i = new BS;
              return (async () => {
                if (xx.skipAnimation) throw MS(r), i.result = LS(n, !1), d(i), i;
                h(a);
                const s = Sx.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Rx(c, (e, t) => {
                  Sx.und(s[t]) && (s[t] = e)
                });
                const l = await n.start(s);
                return h(a), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (xx.skipAnimation) return MS(r), LS(n, !1);
          try {
            let t;
            t = Sx.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = LS(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof HS) m = e.result;
            else {
              if (!(e instanceof BS)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = a, r.asyncTo = a ? s : void 0, r.promise = a ? l : void 0)
          }
          return Sx.fun(i) && ix.batchedUpdates(() => {
            i(m, n, n.item)
          }), m
        })() : l
      }

      function MS(e, t) {
        jx(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var HS = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        BS = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        zS = e => e instanceof FS,
        VS = 1,
        FS = class extends TC {
          constructor() {
            super(...arguments), this.id = VS++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = QC(this);
            return e && e.getValue()
          }
          to(...e) {
            return xx.to(this, e)
          }
          interpolate(...e) {
            return UC(`${FC}The "interpolate" function is deprecated in v9 (use "to" instead)`), xx.to(this, e)
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
            SC(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Ux.sort(this), SC(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        qS = Symbol.for("SpringPhase"),
        US = e => (1 & e[qS]) > 0,
        GS = e => (2 & e[qS]) > 0,
        XS = e => (4 & e[qS]) > 0,
        KS = (e, t) => t ? e[qS] |= 3 : e[qS] &= -3,
        WS = (e, t) => t ? e[qS] |= 4 : e[qS] &= -5,
        ZS = class extends FS {
          constructor(e, t) {
            if (super(), this.animation = new NS, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Sx.und(e) || !Sx.und(t)) {
              const r = Sx.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Sx.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(GS(this) || this._state.asyncTo) || XS(this)
          }
          get goal() {
            return xC(this.animation.to)
          }
          get velocity() {
            const e = QC(this);
            return e instanceof rS ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return US(this)
          }
          get isAnimating() {
            return GS(this)
          }
          get isPaused() {
            return XS(this)
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
              config: a
            } = n, i = eS(n.to);
            !i && EC(n.to) && (o = Nx(xC(n.to))), n.values.forEach((s, l) => {
              if (s.done) return;
              const c = s.constructor == nS ? 1 : i ? i[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, a.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Sx.arr(a.velocity) ? a.velocity[l] : a.velocity;
                let i;
                const f = a.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (Sx.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(s.lastPosition - d) <= f, i = o * n
                  } else {
                    i = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = a.restVelocity || f / 10,
                      n = a.clamp ? 0 : a.bounce,
                      l = !Sx.und(n),
                      h = r == c ? s.v0 > 0 : r < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(i) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (i = -i * n, d = c)), i += (1e-6 * -a.tension * (d - c) + .001 * -a.friction * i) / a.mass * v, d += i * v
                  }
                else {
                  let n = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, s.durationProgress > 0 && (s.elapsedTime = a.duration * s.durationProgress, t = s.elapsedTime += e)), n = (a.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), d = r + a.easing(n) * (c - r), i = (d - s.lastPosition) / e, u = 1 == n
                }
                s.lastVelocity = i, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              i && !i[l].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(d, a.round) && (r = !0)
            });
            const s = QC(this),
              l = s.getValue();
            if (t) {
              const e = xC(n.to);
              l === e && !r || a.decay ? r && a.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return ix.batchedUpdates(() => {
              this._stop(), this._focus(e), this._set(e)
            }), this
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
            if (GS(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              ix.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              })
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let r;
            return Sx.und(e) ? (r = this.queue || [], this.queue = []) : r = [Sx.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => IS(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), MS(this._state, e && this._lastCallId), ix.batchedUpdates(() => this._stop(t, e)), this
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
            r = Sx.obj(r) ? r[t] : r, (null == r || ES(r)) && (r = void 0), n = Sx.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return US(this) || (e.reverse && ([r, n] = [n, r]), n = xC(n), Sx.und(n) ? QC(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, gS(e, (e, t) => /^on/.test(t) ? mS(e, r) : e)), tT(this, e, "onProps"), rT(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return jS(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: a,
              actions: {
                pause: () => {
                  XS(this) || (WS(this, !0), Lx(a.pauseQueue), rT(this, "onPause", LS(this, $S(this, this.animation.to)), this))
                },
                resume: () => {
                  XS(this) && (WS(this, !1), GS(this) && this._resume(), Lx(a.resumeQueue), rT(this, "onResume", LS(this, $S(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = YS(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(DS(this));
            const n = !Sx.und(e.to),
              o = !Sx.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(DS(this));
              this._lastToId = t.callId
            }
            const {
              key: a,
              defaultProps: i,
              animation: s
            } = this, {
              to: l,
              from: c
            } = s;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || n || t.default && !Sx.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !Tx(d, c);
            f && (s.from = d), d = xC(d);
            const h = !Tx(u, l);
            h && this._focus(u);
            const p = ES(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (OS(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), OS(e, t), Object.assign(e, t);
              for (const t in SS) null == e[t] && (e[t] = SS[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: a
              } = e;
              Sx.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * a, e.friction = 4 * Math.PI * o * a / n)
            }(m, hS(t.config, a), t.config !== i.config ? hS(i.config, a) : void 0);
            let g = QC(this);
            if (!g || Sx.und(u)) return r(LS(this, !0));
            const b = Sx.und(t.reset) ? o && !t.default : !Sx.und(d) && pS(t.reset, a),
              _ = b ? d : this.get(),
              w = PS(u),
              P = Sx.num(w) || Sx.arr(w) || XC(w),
              E = !p && (!P || pS(i.immediate || t.immediate, a));
            if (h) {
              const e = lS(u);
              if (e !== g.constructor) {
                if (!E) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const x = g.constructor;
            let C = EC(u),
              S = !1;
            if (!C) {
              const e = b || !US(this) && f;
              (h || e) && (S = Tx(PS(_), w), C = !S), (Tx(s.immediate, E) || E) && Tx(m.decay, v) && Tx(m.velocity, y) || (C = !0)
            }
            if (S && GS(this) && (s.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || EC(l)) && (s.values = g.getPayload(), s.toValues = EC(u) ? null : x == nS ? [1] : Nx(w)), s.immediate != E && (s.immediate = E, E || b || this._set(l)), C)) {
              const {
                onRest: e
              } = s;
              Ox(eT, e => tT(this, t, e));
              const n = LS(this, $S(this, l));
              Lx(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && ix.batchedUpdates(() => {
                s.changed = !b, e?.(n, this), b ? hS(i.onRest, n) : s.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(AS(t.to, t, this._state, this)) : C ? this._start() : GS(this) && !h ? this._pendingCalls.add(r) : r(kS(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (CC(this) && this._detach(), t.to = e, CC(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            EC(t) && (RC(t, this), zS(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            EC(e) && NC(e, this)
          }
          _set(e, t = !0) {
            const r = xC(e);
            if (!Sx.und(r)) {
              const e = QC(this);
              if (!e || !Tx(r, e.getValue())) {
                const n = lS(r);
                e && e.constructor == n ? e.setValue(r) : JC(this, n.create(r)), e && ix.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return QC(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, rT(this, "onStart", LS(this, $S(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), hS(this.animation.onChange, e, this)), hS(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            QC(this).reset(xC(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), GS(this) || (KS(this, !0), XS(this) || this._resume())
          }
          _resume() {
            xx.skipAnimation ? this.finish() : Ux.start(this)
          }
          _stop(e, t) {
            if (GS(this)) {
              KS(this, !1);
              const r = this.animation;
              Ox(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), SC(this, {
                type: "idle",
                parent: this
              });
              const n = t ? DS(this.get()) : LS(this.get(), $S(this, e ?? r.to));
              Lx(this._pendingCalls, n), r.changed && (r.changed = !1, rT(this, "onRest", n, this))
            }
          }
        };

      function $S(e, t) {
        const r = PS(t);
        return Tx(PS(e.get()), r)
      }

      function YS(e, t = e.loop, r = e.to) {
        const n = hS(t);
        if (n) {
          const o = !0 !== n && wS(n),
            a = (o || e).reverse,
            i = !o || o.reset;
          return QS({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || ES(r) ? r : void 0,
            from: i ? e.from : void 0,
            reset: i,
            ...o
          })
        }
      }

      function QS(e) {
        const {
          to: t,
          from: r
        } = e = wS(e), n = new Set;
        return Sx.obj(t) && JS(t, n), Sx.obj(r) && JS(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function JS(e, t) {
        Rx(e, (e, r) => null != e && t.add(r))
      }
      var eT = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function tT(e, t, r) {
        e.animation[r] = t[r] !== vS(t, r) ? mS(t[r], e.key) : void 0
      }

      function rT(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var nT = ["onStart", "onChange", "onRest"],
        oT = 1,
        aT = class {
          constructor(e, t) {
            this.id = oT++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused)
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each((t, r) => e[r] = t.get()), e
          }
          set(e) {
            for (const t in e) {
              const r = e[t];
              Sx.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(QS(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Nx(e).map(QS) : this.queue = [], this._flush ? this._flush(this, t) : (uT(this, t), function(e, t) {
              return Promise.all(t.map(t => iT(e, t))).then(t => IS(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              Ox(Nx(t), t => r[t].stop(!!e))
            } else MS(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (Sx.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Ox(Nx(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (Sx.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Ox(Nx(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            Rx(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, jx(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const a = !n && this._started,
              i = o || a && r.size ? this.get() : null;
            o && t.size && jx(t, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }), a && (this._started = !1, jx(r, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            ix.onFrame(this._onFrame)
          }
        };
      async function iT(e, t, r) {
        const {
          keys: n,
          to: o,
          from: a,
          loop: i,
          onRest: s,
          onResolve: l
        } = t, c = Sx.obj(t.default) && t.default;
        i && (t.loop = !1), !1 === o && (t.to = null), !1 === a && (t.from = null);
        const u = Sx.arr(o) || Sx.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Ox(nT, r => {
          const n = t[r];
          if (Sx.fun(n)) {
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
        });
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Lx(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === vS(t, "cancel");
        (u || h && d.asyncId) && f.push(jS(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Cx,
            resume: Cx,
            start(t, r) {
              h ? (MS(d, e._lastAsyncId), r(DS(e))) : (t.onRest = s, r(AS(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = IS(e, await Promise.all(f));
        if (i && p.finished && (!r || !p.noop)) {
          const r = YS(t, i, o);
          if (r) return uT(e, [r]), iT(e, r, !0)
        }
        return l && ix.batchedUpdates(() => l(p, e, e.item)), p
      }

      function sT(e, t) {
        const r = {
          ...e.springs
        };
        return t && Ox(Nx(t), e => {
            Sx.und(e.keys) && (e = QS(e)), Sx.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), cT(r, e, e => lT(e))
          }),
          function(e, t) {
            Rx(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, RC(t, e))
            })
          }(e, r), r
      }

      function lT(e, t) {
        const r = new ZS;
        return r.key = e, t && RC(r, t), r
      }

      function cT(e, t, r) {
        t.keys && Ox(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function uT(e, t) {
        Ox(t, t => {
          cT(e.springs, t, t => lT(t, e))
        })
      }
      var dT = M.createContext({
          pause: !1,
          immediate: !1
        }),
        fT = () => {
          const e = [],
            t = function(t) {
              GC(`${FC}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return Ox(e, (e, o) => {
                if (Sx.und(t)) n.push(e.start());
                else {
                  const a = r(t, e, o);
                  a && n.push(e.start(a))
                }
              }), n
            };
          t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
          }, t.delete = function(t) {
            const r = e.indexOf(t);
            ~r && e.splice(r, 1)
          }, t.pause = function() {
            return Ox(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return Ox(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            Ox(e, (e, r) => {
              const n = Sx.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return Ox(e, (e, n) => {
              if (Sx.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return Ox(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return Ox(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return Sx.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        hT = () => fT(),
        pT = () => (0, M.useState)(hT)[0];

      function mT(e, t, r) {
        const n = Sx.fun(t) && t,
          {
            reset: o,
            sort: a,
            trail: i = 0,
            expires: s = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: c,
            ref: u,
            config: d
          } = n ? n() : t,
          f = (0, M.useMemo)(() => n || 3 == arguments.length ? fT() : void 0, []),
          h = Nx(e),
          p = [],
          m = (0, M.useRef)(null),
          v = o ? null : m.current;
        KC(() => {
          m.current = p
        }), ZC(() => (Ox(p, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          Ox(m.current, e => {
            e.expired && clearTimeout(e.expirationId), xS(e.ctrl, f), e.ctrl.stop(!0)
          })
        }));
        const y = function(e, {
            key: t,
            keys: r = t
          }, n) {
            if (null === r) {
              const t = new Set;
              return e.map(e => {
                const r = n && n.find(r => r.item === e && "leave" !== r.phase && !t.has(r));
                return r ? (t.add(r), r.key) : vT++
              })
            }
            return Sx.und(r) ? e : Sx.fun(r) ? e.map(r) : Nx(r)
          }(h, n ? n() : t, v),
          g = o && m.current || [];
        KC(() => Ox(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          xS(e, f), hS(c, t, r)
        }));
        const b = [];
        if (v && Ox(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
          }), Ox(h, (e, t) => {
            p[t] || (p[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new aT
            }, p[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          Ox(b, (t, n) => {
            const o = v[n];
            ~t ? (e = p.indexOf(o), p[e] = {
              ...o,
              item: h[t]
            }) : r && p.splice(++e, 0, o)
          })
        }
        Sx.fun(a) && p.sort((e, t) => a(e.item, t.item));
        let _ = -i;
        const w = WC(),
          P = gS(t),
          E = new Map,
          x = (0, M.useRef)(new Map),
          C = (0, M.useRef)(!1);
        Ox(p, (e, r) => {
          const o = e.key,
            a = e.phase,
            c = n ? n() : t;
          let f, h;
          const p = hS(c.delay || 0, o);
          if ("mount" == a) f = c.enter, h = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != a)
              if (e) f = c.leave, h = "leave";
              else {
                if (!(f = c.update)) return;
                h = "update"
              }
            else {
              if (e) return;
              f = c.enter, h = "enter"
            }
          }
          if (f = hS(f, e.item, r), f = Sx.obj(f) ? wS(f) : {
              to: f
            }, !f.config) {
            const t = d || P.config;
            f.config = hS(t, e.item, r, h)
          }
          _ += i;
          const g = {
            ...P,
            delay: p + _,
            ref: u,
            immediate: c.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == h && Sx.und(g.from)) {
            const o = n ? n() : t,
              a = Sx.und(o.initial) || v ? o.from : o.initial;
            g.from = hS(a, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            hS(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = hS(s, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                }
              }
              e && t.some(e => e.expired) && (x.current.delete(r), l && (C.current = !0), w())
            }
          };
          const S = sT(e.ctrl, g);
          "leave" === h && l ? x.current.set(e, {
            phase: h,
            springs: S,
            payload: g
          }) : E.set(e, {
            phase: h,
            springs: S,
            payload: g
          })
        });
        const S = (0, M.useContext)(dT),
          T = function(e) {
            const t = (0, M.useRef)(void 0);
            return (0, M.useEffect)(() => {
              t.current = e
            }), t.current
          }(S),
          O = S !== T && function(e) {
            for (const t in e) return !0;
            return !1
          }(S);
        KC(() => {
          O && Ox(p, e => {
            e.ctrl.start({
              default: S
            })
          })
        }, [S]), Ox(E, (e, t) => {
          if (x.current.size) {
            const e = p.findIndex(e => e.key === t.key);
            p.splice(e, 1)
          }
        }), KC(() => {
          Ox(x.current.size ? x.current : E, ({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), O && "enter" == e && n.start({
              default: S
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || C.current ? (n.start(t), C.current && (C.current = !1)) : n.update(t))
          })
        }, o ? void 0 : r);
        const R = e => M.createElement(M.Fragment, null, p.map((t, r) => {
          const {
            springs: n
          } = E.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), a = Sx.str(t.key) || Sx.num(t.key) ? t.key : t.ctrl.id, i = M.version < "19.0.0", s = o?.props ?? {}, l = i ? o?.ref : s?.ref;
          return o && o.type ? M.createElement(o.type, {
            ...s,
            key: a,
            ref: l
          }) : o
        }));
        return f ? [R, f] : R
      }
      var vT = 1,
        yT = class extends FS {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = hC(...t);
            const r = this._get(),
              n = lS(r);
            JC(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            Tx(t, this.get()) || (QC(this).setValue(t), this._onChange(t, this.idle)), !this.idle && bT(this._active) && _T(this)
          }
          _get() {
            const e = Sx.arr(this.source) ? this.source.map(xC) : Nx(xC(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !bT(this._active) && (this.idle = !1, Ox(eS(this), e => {
              e.done = !1
            }), xx.skipAnimation ? (ix.batchedUpdates(() => this.advance()), _T(this)) : Ux.start(this))
          }
          _attach() {
            let e = 1;
            Ox(Nx(this.source), t => {
              EC(t) && RC(t, this), zS(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            Ox(Nx(this.source), e => {
              EC(e) && NC(e, this)
            }), this._active.clear(), _T(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Nx(this.source).reduce((e, t) => Math.max(e, (zS(t) ? t.priority : 0) + 1), 0))
          }
        };

      function gT(e) {
        return !1 !== e.idle
      }

      function bT(e) {
        return !e.size || Array.from(e).every(gT)
      }

      function _T(e) {
        e.idle || (e.idle = !0, Ox(eS(e), e => {
          e.done = !0
        }), SC(e, {
          type: "idle",
          parent: e
        }))
      }
      xx.assign({
        createStringInterpolator: VC,
        to: (e, t) => new yT(e, t)
      }), Ux.advance;
      var wT = /^--/;

      function PT(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || wT.test(e) || xT.hasOwnProperty(e) && xT[e] ? ("" + t).trim() : t + "px"
      }
      var ET = {},
        xT = {
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
        CT = ["Webkit", "Ms", "Moz", "O"];
      xT = Object.keys(xT).reduce((e, t) => (CT.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), xT);
      var ST = /^(matrix|translate|scale|rotate|skew)/,
        TT = /^(translate)/,
        OT = /^(rotate|skew)/,
        RT = (e, t) => Sx.num(e) && 0 !== e ? e + t : e,
        NT = (e, t) => Sx.arr(e) ? e.every(e => NT(e, t)) : Sx.num(e) ? e === t : parseFloat(e) === t,
        jT = class extends aS {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push(e => [`translate3d(${e.map(e=>RT(e,"px")).join(",")})`, NT(e, 0)])), Rx(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push(e => [e, "" === e]);
              else if (ST.test(t)) {
                if (delete n[t], Sx.und(e)) return;
                const r = TT.test(t) ? "px" : OT.test(t) ? "deg" : "";
                o.push(Nx(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${RT(o,r)})`, NT(o, 0)] : e => [`${t}(${e.map(e=>RT(e,r)).join(",")})`, NT(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new IT(o, a)), super(n)
          }
        },
        IT = class extends TC {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Ox(this.inputs, (r, n) => {
              const o = xC(r[0]),
                [a, i] = this.transforms[n](Sx.arr(o) ? o : r.map(xC));
              e += " " + a, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Ox(this.inputs, e => Ox(e, e => EC(e) && RC(e, this)))
          }
          observerRemoved(e) {
            0 == e && Ox(this.inputs, e => Ox(e, e => EC(e) && NC(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), SC(this, e)
          }
        };
      xx.assign({
        batchedUpdates: qu.unstable_batchedUpdates,
        createStringInterpolator: VC,
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
      var kT = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new aS(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            a = e => {
              const t = fS(e) || "Anonymous";
              return (e = Sx.str(e) ? a[e] || (a[e] = cS(e, o)) : e[dS] || (e[dS] = cS(e, o))).displayName = `Animated(${t})`, e
            };
          return Rx(e, (t, r) => {
            Sx.arr(e) && (r = fS(t)), a[r] = a(t)
          }), {
            animated: a
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: a,
                scrollTop: i,
                scrollLeft: s,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : ET[t] || (ET[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = PT(t, o[t]);
                wT.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new jT(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        LT = kT.animated,
        DT = r(6630);
      const AT = () => {
          const e = (0, Pe.Ub)(F.breakpoints.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        MT = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function HT({
        dialogRef: e,
        dialogSpringRef: t,
        overlaySpringRef: r,
        onCloseTransitionStart: n,
        onCloseTransitionComplete: o
      }) {
        const a = MT(),
          i = AT(),
          s = (0, M.useRef)(),
          l = (Hr(Br), tn({
            drag: ({
              velocity: [, l],
              offset: [, c],
              direction: [, u],
              cancel: d,
              last: f,
              first: h,
              target: p
            }) => {
              const {
                height: m
              } = e.current.getBoundingClientRect();
              if (h && (s.current = function(e, t) {
                  for (; e;) {
                    if (e.scrollHeight > e.clientHeight) {
                      if (0 !== e.scrollTop) return !1;
                      if (t < 0) return !1;
                      if ("dialog" === e.getAttribute("role")) return !0
                    }
                    e = e.parentNode
                  }
                }(p, u)), (!s.current || c < -70) && d(), s.current) {
                const e = 100 * (m - c) / m;
                r.start({
                  ...a(e),
                  immediate: !0
                }), t.start({
                  ...i(e),
                  immediate: !0
                })
              }
              f && (c > .5 * m || l > .5 && u > 0 ? (t.start({
                ...i(0),
                immediate: !1,
                config: CS.stiff,
                onStart: n,
                onRest: o
              }), r.start({
                ...a(0),
                immediate: !1,
                config: CS.stiff
              })) : (t.start({
                ...i(100),
                immediate: !1,
                config: CS.stiff
              }), r.start({
                ...a(100),
                immediate: !1,
                config: CS.stiff
              })))
            }
          }, {
            from: () => [0, 0],
            filterTaps: !1,
            bounds: {
              top: 0
            },
            rubberband: !0,
            pointer: {
              touch: !0
            },
            axis: "y"
          } || {}, "drag"));
        return {
          bindDrag: l
        }
      }

      function BT(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function zT(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function VT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zT(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = BT(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zT(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function FT(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qT = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        UT = "foundry_8kowh41",
        GT = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = VT(VT({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) qT(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return FT(e.variantClassNames, e => FT(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_xov33n9 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm foundry_tdsdcdq",
          variantClassNames: {
            align: {
              left: "foundry_xov33na",
              center: "foundry_xov33nb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const XT = (0, M.createContext)(null);

      function KT() {
        const e = (0, M.useContext)(XT);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const WT = (0, M.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r,
          onOpenChange: n,
          isOpen: o,
          onOpenTransitionStart: a,
          onOpenTransitionComplete: i,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: l,
          ...c
        }, u) => {
          const d = (0, F.mergeProps)({
              "data-testid": t
            }, c),
            [f, h] = (0, Pe.ic)({
              prop: o,
              defaultProp: r ?? !1,
              onChange: n
            }),
            p = (0, Pe.ZC)(f);
          return (0, _.jsx)(XT.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== o,
              openImmediately: !(void 0 !== p || !r),
              setIsOpen: h,
              onOpenTransitionStart: a,
              onOpenTransitionComplete: i,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: l,
              contentId: (0, M.useId)(),
              descriptionId: (0, M.useId)(),
              triggerRef: (0, M.useRef)(null),
              dialogSpringRef: pT(),
              overlaySpringRef: pT()
            },
            children: (0, _.jsx)(DT.Root, {
              ref: u,
              open: f,
              onOpenChange: h,
              ...d,
              children: e
            })
          })
        }),
        ZT = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isOpen: o,
            overlaySpringRef: a,
            openImmediately: i
          } = KT(), s = MT(), l = (0, Pe.jt)(), c = mT(o, {
            ref: a,
            delay: o ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: CS.stiff,
            immediate: l || i
          }), u = (0, F.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n0"
          }, r), d = LT(DT.Overlay);
          return (0, M.useEffect)(() => {
            a.start()
          }, [o]), c((t, r) => r ? (0, _.jsx)(d, {
            forceMount: !0,
            ref: n,
            ...u,
            style: t,
            children: e
          }) : null)
        }),
        $T = (0, M.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, a) => {
          const {
            isOpen: i,
            setIsOpen: s,
            openImmediately: l,
            contentId: c,
            triggerRef: u,
            onOpenTransitionStart: d,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: h,
            onCloseTransitionComplete: p,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = KT(), y = (0, Pe.rl)(), g = (0, Pe.jt)(), b = (0, M.useRef)(null), w = AT(), {
            bindDrag: P
          } = HT({
            dialogRef: b,
            overlaySpringRef: v,
            dialogSpringRef: m,
            onCloseTransitionStart: () => {
              s(!1), h?.()
            },
            onCloseTransitionComplete: p
          }), E = mT(i, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: i ? 100 : 0,
            config: CS.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? d?.() : h?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : p?.()
            }
          });
          (0, M.useEffect)(() => {
            m.start()
          }, [i]);
          const x = (0, Pe.UP)(b, a),
            C = y && !g && !n && P(),
            S = (0, F.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: c
            }, C || {}, o),
            T = LT(DT.Content);
          return E((t, r) => r ? (0, _.jsx)(T, {
            forceMount: !0,
            ref: x,
            ...S,
            style: t,
            children: e
          }) : null)
        }),
        YT = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.mergeProps)({
            "data-testid": t
          }, r);
          return (0, _.jsx)(DT.Portal, {
            forceMount: !0,
            ref: n,
            ...o,
            children: e
          })
        }),
        QT = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, _.jsx)(DT.Title, {
            ref: n,
            ...o,
            children: e
          })
        }),
        JT = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.mergeProps)({
            "data-testid": t
          }, r);
          return (0, _.jsx)(DT.Description, {
            ref: n,
            ...o,
            children: e
          })
        }),
        eO = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.mergeProps)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, r);
          return (0, _.jsxs)(nm, {
            ref: n,
            ...o,
            children: [(0, _.jsx)(om, {
              className: "foundry_xov33ne",
              children: e
            }), (0, _.jsx)(am, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, _.jsx)(im, {
                className: "foundry_xov33ng"
              })
            })]
          })
        }),
        tO = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n2"
            }, n),
            i = e ? Ee.DX : "div";
          return (0, _.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        rO = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n3"
            }, n),
            i = e ? Ee.DX : "div";
          return (0, _.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        nO = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n8"
            }, n),
            i = e ? Ee.DX : "header";
          return (0, _.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        oO = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nc"
            }, n),
            i = e ? Ee.DX : "footer";
          return (0, _.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        aO = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n,
          ...o
        }, a) => {
          const i = (0, F.mergeProps)({
              "data-testid": r,
              className: GT({
                align: n
              })
            }, o),
            s = e ? Ee.DX : DT.Title;
          return (0, _.jsx)(s, {
            ref: a,
            ...i,
            children: t
          })
        }),
        iO = (0, M.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: a,
            setIsOpen: i
          } = KT(), s = (0, F.mergeProps)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? r?.(e), !a && i(!1)
            }
          }, n);
          return (0, _.jsx)(H_, {
            ...s,
            size: "MD",
            ref: o,
            children: e
          })
        }),
        sO = (0, M.forwardRef)((e, t) => {
          const r = (0, F.mergeProps)({
            className: "foundry_xov33n5"
          }, e);
          return (0, _.jsx)(at, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "SM"
          })
        }),
        lO = (0, M.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: a,
            setIsOpen: i
          } = KT(), s = (0, F.mergeProps)({
            className: UT,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !a && i(!1)
            }
          }, n);
          return (0, _.jsx)(Ze, {
            ref: o,
            ...s,
            children: e
          })
        }),
        cO = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          onPress: r,
          onClick: n,
          ...o
        }, a) => {
          const {
            isControlled: i,
            setIsOpen: s,
            isOpen: l,
            contentId: c,
            triggerRef: u
          } = KT(), d = (0, Pe.UP)(u, a), f = (0, F.mergeProps)({
            className: UT,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !i && s(!0)
            }
          }, o), h = e ? Ee.DX : DT.Trigger;
          return (0, _.jsx)(h, {
            ...f,
            ref: d,
            children: t
          })
        })
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
        return n.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
    },
    71753: (e, t, r) => {
      r.d(t, {
        b: () => s
      });
      var n = r(71127),
        o = r(63694),
        a = r(42295),
        i = ({
          children: e,
          label: t
        }) => {
          const r = n.Children.only(e);
          return (0, a.jsxs)(a.Fragment, {
            children: [n.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, a.jsx)(o.Root, {
              children: t
            })]
          })
        };
      i.displayName = "AccessibleIcon";
      var s = i
    },
    77768: (e, t, r) => {
      r.d(t, {
        jH: () => a
      });
      var n = r(71127),
        o = (r(42295), n.createContext(void 0));

      function a(e) {
        const t = n.useContext(o);
        return e || t || "ltr"
      }
    }
  }
]);