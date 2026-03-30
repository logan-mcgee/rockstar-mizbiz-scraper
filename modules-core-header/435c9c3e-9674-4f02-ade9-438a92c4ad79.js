try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "435c9c3e-9674-4f02-ade9-438a92c4ad79", e._sentryDebugIdIdentifier = "sentry-dbid-435c9c3e-9674-4f02-ade9-438a92c4ad79")
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
  [9487], {
    20027: (e, t, r) => {
      r.d(t, {
        N: () => l
      });
      var n = r(71127),
        o = r(85426),
        a = r(95362),
        s = r(45824),
        i = r(42295);

      function l(e) {
        const t = e + "CollectionProvider",
          [r, l] = (0, o.A)(t),
          [d, c] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          u = e => {
            const {
              scope: t,
              children: r
            } = e, o = n.useRef(null), a = n.useRef(new Map).current;
            return (0, i.jsx)(d, {
              scope: t,
              itemMap: a,
              collectionRef: o,
              children: r
            })
          };
        u.displayName = t;
        const f = e + "CollectionSlot",
          p = (0, s.createSlot)(f),
          h = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = c(f, r), s = (0, a.s)(t, o.collectionRef);
            return (0, i.jsx)(p, {
              ref: s,
              children: n
            })
          });
        h.displayName = f;
        const v = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          y = (0, s.createSlot)(v),
          g = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: o,
              ...s
            } = e, l = n.useRef(null), d = (0, a.s)(t, l), u = c(v, r);
            return n.useEffect(() => (u.itemMap.set(l, {
              ref: l,
              ...s
            }), () => {
              u.itemMap.delete(l)
            })), (0, i.jsx)(y, {
              [m]: "",
              ref: d,
              children: o
            })
          });
        return g.displayName = v, [{
          Provider: u,
          Slot: h,
          ItemSlot: g
        }, function(t) {
          const r = c(e + "CollectionConsumer", t);
          return n.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${m}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
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
        return n.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
    },
    36553: (e, t, r) => {
      e.exports = r(44622)
    },
    44622: (e, t, r) => {
      var n = r(71127),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        a = n.useState,
        s = n.useEffect,
        i = n.useLayoutEffect,
        l = n.useDebugValue;

      function d(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r)
        } catch (e) {
          return !0
        }
      }
      var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
      } : function(e, t) {
        var r = t(),
          n = a({
            inst: {
              value: r,
              getSnapshot: t
            }
          }),
          o = n[0].inst,
          c = n[1];
        return i(function() {
          o.value = r, o.getSnapshot = t, d(o) && c({
            inst: o
          })
        }, [e, r, t]), s(function() {
          return d(o) && c({
            inst: o
          }), e(function() {
            d(o) && c({
              inst: o
            })
          })
        }, [e]), l(r), r
      };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
    },
    49487: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => w,
        Badge: () => g,
        Body: () => Dt,
        Breadcrumbs: () => y,
        Button: () => Qe,
        Checkbox: () => l,
        Code: () => Lt,
        Dialog: () => b,
        Display: () => zt,
        Divider: () => ht,
        Dropdown: () => a,
        Heading: () => At,
        IconButton: () => it,
        Label: () => qt,
        Lightbox: () => o,
        Loader: () => jt,
        Pagination: () => _,
        RadioGroup: () => u,
        Spinner: () => Me,
        Switch: () => s,
        Tag: () => v,
        Text: () => Kt,
        TextArea: () => d,
        TextField: () => f,
        TextSemantics: () => Bt,
        Toast: () => m,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Ml,
        Content: () => zl,
        Portal: () => Al,
        Root: () => Il,
        Trigger: () => Ll,
        useTooltipContext: () => Dl
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => zd,
        Close: () => Fd,
        Content: () => Td,
        Controls: () => Md,
        CssVars: () => Hd,
        Download: () => Kd,
        Image: () => Ld,
        Keyboard: () => Vd,
        LightboxContext: () => xd,
        OpenIcon: () => kd,
        Overlay: () => Rd,
        Portal: () => Ed,
        Reset: () => Bd,
        Root: () => Pd,
        RootImplContext: () => Cd,
        Thumbnail: () => Sd,
        Trigger: () => Od,
        Zoom: () => qd,
        ZoomPan: () => Nd
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => Gp,
        Description: () => Jp,
        Hint: () => eh,
        Label: () => Yp,
        Option: () => th,
        OptionIcon: () => nh,
        OptionText: () => rh,
        Portal: () => oh,
        Root: () => Up,
        ScrollArea: () => Wp,
        StatusIcon: () => sh,
        StatusRoot: () => ah,
        StatusText: () => ih,
        Trigger: () => Zp,
        TriggerIcon: () => Qp,
        TriggerText: () => $p,
        useDropdownContext: () => Xp
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => ev,
        Input: () => Yh,
        Label: () => Jh,
        Root: () => Qh,
        useSwitchContext: () => $h
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => pv,
        CheckMD: () => fv,
        CheckXL: () => hv,
        DashLG: () => mv,
        DashMD: () => vv,
        DashXL: () => yv
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Dv,
        ErrorText: () => Iv,
        Input: () => Tv,
        Label: () => Nv,
        Root: () => Rv
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => $v,
        Hint: () => Qv,
        Input: () => Zv,
        Label: () => Wv,
        Root: () => Gv,
        RootContext: () => Xv,
        StatusIcon: () => Jv,
        StatusRoot: () => Yv,
        StatusText: () => em,
        useTextAreaContext: () => Uv
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => Hm,
        DotMD: () => Km,
        DotXL: () => Xm
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => Lm,
        Input: () => Gm,
        Label: () => Im,
        Option: () => Um,
        OptionDescription: () => Zm,
        OptionLabel: () => Wm,
        Options: () => Dm,
        Root: () => Nm,
        StatusIcon: () => Mm,
        StatusRoot: () => zm,
        StatusText: () => Am,
        useRadioGroupContext: () => Tm
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => $y,
        Control: () => Gy,
        Description: () => Yy,
        Hint: () => Uy,
        Icon: () => Zy,
        Input: () => Wy,
        Label: () => Xy,
        PasswordButton: () => Qy,
        Root: () => Hy,
        StatusIcon: () => eg,
        StatusRoot: () => Jy,
        StatusText: () => tg
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => Pg,
        CloseButton: () => Tg,
        Description: () => Sg,
        ErrorText: () => Rg,
        Footer: () => Eg,
        Header: () => xg,
        Icon: () => jg,
        Link: () => kg,
        Root: () => _g,
        RootContext: () => bg,
        Title: () => Og,
        iconStatusMap: () => Cg,
        useAlertContext: () => wg
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => Nb,
        CloseButton: () => Lb,
        Description: () => Tb,
        Icon: () => Rb,
        Link: () => Ib,
        PaginationCounter: () => Vb,
        PaginationNav: () => zb,
        PaginationNextButton: () => Mb,
        PaginationPrevButton: () => Ab,
        PaginationViewport: () => Db,
        Root: () => kb,
        RootContext: () => Ob,
        iconStatusMap: () => Eb,
        useAlertBannerContext: () => Sb
      });
      var v = {};
      r.r(v), r.d(v, {
        CloseButton: () => ew,
        Icon: () => Jb,
        Label: () => Yb,
        Root: () => Qb,
        RootContext: () => Zb,
        useTagContext: () => $b
      });
      var m = {};
      r.r(m), r.d(m, {
        Action: () => n_,
        CloseButton: () => o_,
        Description: () => e_,
        Icon: () => r_,
        Provider: () => Zw,
        Root: () => Jw,
        RootContext: () => Qw,
        Viewport: () => $w,
        iconAppearanceMap: () => t_,
        useToastContext: () => Yw
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => g_,
        Item: () => y_,
        OverflowMenu: () => b_,
        OverflowMenuItem: () => w_,
        Root: () => m_,
        RootContext: () => v_,
        useBreadcrumbsContext: () => h_
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => E_,
        Label: () => k_,
        Root: () => S_
      });
      var b = {};
      r.r(b), r.d(b, {
        ActionArea: () => cx,
        Button: () => mx,
        CloseButton: () => hx,
        Content: () => ox,
        Description: () => ix,
        Footer: () => fx,
        Header: () => ux,
        HeaderButton: () => vx,
        HeaderTitle: () => px,
        Layout: () => dx,
        Overlay: () => nx,
        Portal: () => ax,
        Root: () => rx,
        ScrollArea: () => lx,
        Title: () => sx,
        Trigger: () => yx,
        useDialogContext: () => tx
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => Yx,
        Root: () => Qx,
        StatusIndicator: () => Jx,
        useAvatarContext: () => $x
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => fP,
        Dropdown: () => yP,
        DropdownLabel: () => mP,
        Ellipsis: () => uP,
        Item: () => lP,
        Label: () => bP,
        Next: () => cP,
        Option: () => gP,
        Pages: () => iP,
        Prev: () => dP,
        ResultsPerPage: () => vP,
        Root: () => sP
      });
      var x = r(42295);

      function P(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class C extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var j = C;

      function O(e) {
        if ("string" != typeof e) throw new j(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = I.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = k[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new j(e);
          return `#${r}`
        }(e) : e;
        const r = R.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(E(e, 2), 16)), parseInt(E(e[3] || "f", 2), 16) / 255]
        }
        const n = T.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = N.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const a = D.exec(t);
        if (a) {
          const [t, r, n, o] = Array.from(a).slice(1).map(parseFloat);
          if (P(0, 100, r) !== r) throw new j(e);
          if (P(0, 100, n) !== n) throw new j(e);
          return [...z(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new j(e)
      }
      const S = e => parseInt(e.replace(/_/g, ""), 36),
        k = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = S(t.substring(0, 3)),
            n = S(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        E = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        R = new RegExp(`^#${E("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        T = new RegExp(`^#${E("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        N = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${E(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        D = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        I = /^[a-z]+$/i,
        L = e => Math.round(255 * e),
        z = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(L);
          const o = (e % 360 + 360) % 360 / 60,
            a = (1 - Math.abs(2 * n - 1)) * (t / 100),
            s = a * (1 - Math.abs(o % 2 - 1));
          let i = 0,
            l = 0,
            d = 0;
          o >= 0 && o < 1 ? (i = a, l = s) : o >= 1 && o < 2 ? (i = s, l = a) : o >= 2 && o < 3 ? (l = a, d = s) : o >= 3 && o < 4 ? (l = s, d = a) : o >= 4 && o < 5 ? (i = s, d = a) : o >= 5 && o < 6 && (i = a, d = s);
          const c = n - a / 2;
          return [i + c, l + c, d + c].map(L)
        };

      function M(e, t) {
        const [r, n, o, a] = function(e) {
          const [t, r, n, o] = O(e).map((e, t) => 3 === t ? e : e / 255), a = Math.max(t, r, n), s = Math.min(t, r, n), i = (a + s) / 2;
          if (a === s) return [0, 0, i, o];
          const l = a - s;
          return [60 * (t === a ? (r - n) / l + (r < n ? 6 : 0) : r === a ? (n - t) / l + 2 : (t - r) / l + 4), i > .5 ? l / (2 - a - s) : l / (a + s), i, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${P(0,100,100*t).toFixed()}%, ${P(0,100,100*r).toFixed()}%, ${parseFloat(P(0,1,n).toFixed(3))})`
        }(r, n, o - t, a)
      }

      function A(e, t) {
        return M(e, -t)
      }
      var V = r(71127),
        q = r.n(V),
        F = r(23644);

      function B(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          (0, F.Bx)(t, (e, t) => {
            if (null != e) {
              var o = (0, F.Jt)(n, t);
              r[(0, F.Tm)(o)] = String(e)
            }
          })
        } else {
          var o = e;
          for (var a in o) {
            var s = o[a];
            null != s && (r[(0, F.Tm)(a)] = s)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
          },
          writable: !1
        }), r
      }
      r(84735);
      var K = {
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
        H = r(58531);
      const X = e => {
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

      function W(e) {
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

      function Z(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var $ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Q = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = W(W({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) $(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Z(e.variantClassNames, e => Z(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Y = "var(--foundry_1qqcnua0)",
        J = "var(--foundry_1qqcnua1)",
        ee = "var(--foundry_1qqcnua2)",
        te = "var(--foundry_1qqcnua3)",
        re = "var(--foundry_1qqcnua4)",
        ne = "var(--foundry_1qqcnua5)",
        oe = "var(--foundry_1qqcnua6)",
        ae = "var(--foundry_1qqcnua7)",
        se = "var(--foundry_1qqcnua8)",
        ie = "var(--foundry_1qqcnua9)",
        le = "var(--foundry_1qqcnuaa)",
        de = "var(--foundry_1qqcnuab)",
        ce = "var(--foundry_1qqcnuac)",
        ue = "var(--foundry_1qqcnuad)",
        fe = "var(--foundry_1qqcnuae)",
        pe = "var(--foundry_1qqcnuaf)",
        he = "var(--foundry_1qqcnuag)",
        ve = "var(--foundry_1qqcnuah)",
        me = "var(--foundry_1qqcnuai)",
        ye = "var(--foundry_1qqcnuaj)",
        ge = "var(--foundry_1qqcnuak)",
        be = "var(--foundry_1qqcnual)",
        we = "var(--foundry_1qqcnuam)",
        _e = "var(--foundry_1qqcnuan)";
      Q({
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
      }), Q({
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
      }), Q({
        defaultClassName: "foundry_tdsdcdr foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdt",
            bold: "foundry_tdsdcdu"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), Q({
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
      }), Q({
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
      const xe = {
          enabled: {
            background: X(Y),
            border: X(J),
            text: X(ee),
            outline: X(te)
          },
          hover: {
            background: X(re),
            border: X(ne),
            text: X(oe),
            outline: X(ae)
          },
          focus: {
            background: X(se),
            border: X(ie),
            text: X(le),
            outline: X(de)
          },
          pressed: {
            background: X(ce),
            border: X(ue),
            text: X(fe),
            outline: X(pe)
          },
          disabled: {
            background: X(he),
            border: X(ve),
            text: X(me),
            outline: X(ye)
          },
          loading: {
            background: X(ge),
            border: X(be),
            text: X(we),
            outline: X(_e)
          }
        },
        Pe = ({
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
            hoverColor: s,
            pressedColor: i,
            textColor: l
          },
          enabled: d = !1
        }, c = []) => {
          (0, V.useEffect)(() => {
            if (!e.current || !a || !d) return;
            const c = `${a}:${t}:${r}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, H.getOrSet)(c, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = O(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(a);
                return {
                  text: l || (e > t ? K.black.static[100] : K.white.static[100]),
                  hover: s || (e >= r ? M(a, n) : A(a, n)),
                  pressed: i || (e >= r ? M(a, o) : A(a, o))
                }
              });
            return e.current.style.setProperty(xe.enabled.background, a), e.current.style.setProperty(xe.enabled.border, a), e.current.style.setProperty(xe.enabled.text, u), e.current.style.setProperty(xe.hover.background, f), e.current.style.setProperty(xe.hover.border, f), e.current.style.setProperty(xe.hover.text, u), e.current.style.setProperty(xe.focus.background, f), e.current.style.setProperty(xe.focus.border, f), e.current.style.setProperty(xe.focus.text, u), e.current.style.setProperty(xe.pressed.background, p), e.current.style.setProperty(xe.pressed.border, p), e.current.style.setProperty(xe.pressed.text, u), e.current.style.setProperty(xe.loading.background, f), e.current.style.setProperty(xe.loading.border, f), e.current.style.setProperty(xe.loading.text, u), () => {
              e.current?.style.removeProperty(xe.enabled.background), e.current?.style.removeProperty(xe.enabled.border), e.current?.style.removeProperty(xe.enabled.text), e.current?.style.removeProperty(xe.hover.background), e.current?.style.removeProperty(xe.hover.border), e.current?.style.removeProperty(xe.hover.text), e.current?.style.removeProperty(xe.focus.background), e.current?.style.removeProperty(xe.focus.border), e.current?.style.removeProperty(xe.focus.text), e.current?.style.removeProperty(xe.pressed.background), e.current?.style.removeProperty(xe.pressed.border), e.current?.style.removeProperty(xe.pressed.text), e.current?.style.removeProperty(xe.loading.background), e.current?.style.removeProperty(xe.loading.border), e.current?.style.removeProperty(xe.loading.text)
            }
          }, [e.current, t, r, n, o, a, s, i, l, d, ...c])
        };
      var Ce = r(89754),
        je = r(32067),
        Oe = r(50078),
        Se = r(43529),
        ke = ({
          children: e,
          label: t
        }) => {
          const r = V.Children.only(e);
          return (0, x.jsxs)(x.Fragment, {
            children: [V.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, x.jsx)(Se.Root, {
              children: t
            })]
          })
        };
      ke.displayName = "AccessibleIcon";
      var Ee = ke;

      function Re(e) {
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

      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Te(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Re(o)) in n ? Object.defineProperty(n, o, {
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

      function De(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ie = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Le = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ne(Ne({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Ie(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return De(e.variantClassNames, e => De(e, e => e.split(" ")[0]))
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
      const ze = "pageMD",
        Me = (0, V.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = ze,
          testId: n,
          ...o
        }, a) => {
          const s = (0, Oe.zQ)(),
            i = "string" == typeof r ? r : r?.[s] ?? r.default ?? ze,
            l = (0, H.mergeProps)({
              className: Le({
                size: i
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, x.jsx)(Ee, {
            label: e,
            children: (0, x.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: a,
              viewBox: "0 0 16 16",
              children: [!t && (0, x.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, x.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var Ae = r(1556),
        Ve = r(84531),
        qe = r.t(Ve, 2);

      function Fe(e) {
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

      function Be(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Be(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Fe(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function He(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ue = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ke(Ke({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Xe(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return He(e.variantClassNames, e => He(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ge = Ue({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnuao foundry_1qqcnuap",
              secondary: "foundry_17pcofy3 foundry_1qqcnuao foundry_1qqcnuaq",
              tertiary: "foundry_1qqcnuao foundry_1qqcnuar",
              ghost: "foundry_1qqcnuao foundry_1qqcnuas",
              danger: "foundry_1qqcnuao foundry_1qqcnuau",
              information: "foundry_1qqcnuao foundry_1qqcnuat",
              accent: "foundry_1qqcnuao foundry_1qqcnuav",
              link: "foundry_17pcofy9 foundry_1qqcnuao foundry_1qqcnuaw"
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
      var We = Ue({
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
        Ze = Ue({
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
        $e = Ue({
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
      const Qe = (0, V.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: a,
        iconRightLabel: s,
        appearance: i,
        size: l = "MD",
        fullWidth: d = !1,
        isLoading: c = !1,
        spinnerLabel: u,
        override_darkenLuminance: f = .035,
        override_textLuminance: p = .179,
        override_hoverLuminance: h = .08,
        override_pressedLuminance: v = .15,
        override_backgroundColor: m,
        override_hoverColor: y,
        override_pressedColor: g,
        override_textColor: b,
        ...w
      }, _) => {
        const P = (0, V.useRef)(null),
          C = (0, Ce.UP)(P, _),
          j = (0, Oe.zQ)(),
          O = "string" == typeof l ? l : l?.[j] ?? l.default ?? "MD",
          {
            buttonProps: S
          } = (0, Ce.sL)((0, H.mergeProps)(w, {
            isLoading: c
          }), P);
        Pe({
          refs: {
            buttonRef: P
          },
          config: {
            textLuminance: p,
            darkenLuminance: f,
            hoverLuminance: h,
            pressedLuminance: v
          },
          overrides: {
            backgroundColor: m,
            hoverColor: y,
            pressedColor: g,
            textColor: b
          },
          enabled: "accent" === i
        }, [t]);
        const k = (0, H.mergeProps)({
            className: Ge({
              appearance: i,
              size: O,
              fullWidth: d,
              iconLeft: !!n,
              iconRight: !!a,
              isLoading: c
            }),
            "data-testid": e
          }, S),
          E = n && qe[n],
          R = a && qe[a],
          T = t ? je.DX : "button",
          N = d && (R || R && E);
        return (0, x.jsxs)(T, {
          ref: C,
          ...k,
          children: [N && (0, x.jsx)("div", {
            className: "foundry_17pcofy15"
          }), E && (0, x.jsx)(E, {
            label: o || "",
            size: O,
            className: (0, Ae.clsx)(We({
              size: O
            }), "foundry_17pcofy11")
          }), (0, x.jsx)(je.xV, {
            children: r
          }), R && (0, x.jsx)(R, {
            label: s || "",
            size: O,
            className: (0, Ae.clsx)(We({
              size: O
            }), Ze({
              fullWidth: d
            }))
          }), c && (0, x.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, x.jsx)(Me, {
              label: u || "",
              size: "inline" + ("LG" === O ? "LG" : "MD"),
              hideTrack: !0,
              className: $e({
                size: O
              })
            })
          })]
        })
      });

      function Ye(e) {
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

      function Je(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function et(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Je(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ye(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Je(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function tt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var rt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        nt = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = et(et({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) rt(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tt(e.variantClassNames, e => tt(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ot = nt({
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
        at = nt({
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
        st = nt({
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
      const it = (0, V.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: a = !1,
        size: s = "LG",
        children: i,
        isLoading: l = !1,
        spinnerLabel: d,
        override_darkenLuminance: c = .035,
        override_textLuminance: u = .179,
        override_hoverLuminance: f = .08,
        override_pressedLuminance: p = .15,
        override_backgroundColor: h,
        override_hoverColor: v,
        override_pressedColor: m,
        override_textColor: y,
        ...g
      }, b) => {
        const w = (0, V.useRef)(null),
          _ = (0, Ce.UP)(w, b),
          P = (0, Oe.zQ)(),
          C = "string" == typeof s ? s : s?.[P] ?? s.default ?? "LG",
          {
            buttonProps: j
          } = (0, Ce.sL)((0, H.mergeProps)(g, {
            isLoading: l
          }), w);
        Pe({
          refs: {
            buttonRef: w
          },
          config: {
            textLuminance: u,
            darkenLuminance: c,
            hoverLuminance: f,
            pressedLuminance: p
          },
          overrides: {
            backgroundColor: h,
            hoverColor: v,
            pressedColor: m,
            textColor: y
          },
          enabled: "accent" === o
        }, [t]);
        const O = (0, H.mergeProps)({
            className: at({
              appearance: o,
              size: C,
              fullWidth: a,
              isLoading: l
            }),
            "data-testid": e
          }, j),
          S = qe[r],
          k = t ? je.DX : "button";
        return (0, x.jsxs)(k, {
          ref: _,
          ...O,
          children: [S && (0, x.jsx)(S, {
            label: n || "",
            size: C,
            className: ot({
              size: C
            })
          }), (0, x.jsx)(je.xV, {
            children: i
          }), l && (0, x.jsx)("div", {
            className: "foundry_a5x3khl",
            children: (0, x.jsx)(Me, {
              label: d || "",
              size: C && "SM" !== C ? `inline${C}` : "inlineMD",
              hideTrack: !0,
              className: st({
                size: C
              })
            })
          })]
        })
      });

      function lt(e) {
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

      function dt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dt(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = lt(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ut(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ft = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ct(ct({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) ft(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ut(e.variantClassNames, e => ut(e, e => e.split(" ")[0]))
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
      const ht = (0, V.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: a,
        ...s
      }, i) => {
        const l = "horizontal" !== t || n ? "div" : "hr",
          d = n || "hr" === l ? void 0 : "separator",
          c = o ? je.DX : l;
        return (0, x.jsx)(c, {
          ref: i,
          className: (0, Ae.clsx)(pt({
            thickness: r,
            orientation: t
          }), e),
          role: d,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });

      function vt(e) {
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

      function mt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mt(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = vt(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wt = "var(--foundry_9dxgbc2)",
        _t = "var(--foundry_9dxgbc3)",
        xt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yt(yt({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) bt(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gt(e.variantClassNames, e => gt(e, e => e.split(" ")[0]))
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
        Pt = "var(--foundry_9dxgbc0)",
        Ct = "var(--foundry_9dxgbc1)";
      const jt = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...s
      }, i) => {
        const l = (0, Oe.zQ)(),
          d = "string" == typeof a ? a : a?.[l] ?? a.default ?? "MD",
          c = (0, H.mergeProps)({
            className: xt({
              size: d
            }),
            "data-testid": t,
            style: B({
              [Pt]: n?.pulseColorBackground,
              [Ct]: n?.pulseColorForeground,
              [wt]: n?.gradientColorBackground,
              [_t]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          u = e ? je.DX : "div";
        return (0, x.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, x.jsx)(je.xV, {
            children: r
          }) : (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, x.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function Ot(e) {
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

      function St(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? St(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ot(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : St(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Et(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Rt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tt = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kt(kt({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Rt(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Et(e.variantClassNames, e => Et(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Nt = Tt({
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
      const Dt = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? je.DX : "p",
          i = (0, H.mergeProps)({
            className: Nt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, x.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var It = Tt({
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
      const Lt = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const a = e ? je.DX : "p",
            s = (0, H.mergeProps)({
              className: It({
                appearance: r
              })
            }, n);
          return (0, x.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        zt = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? je.DX : "h1",
            a = (0, H.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        });
      var Mt = Tt({
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
      const At = (0, V.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? je.DX : `h${t}`,
          s = (0, H.mergeProps)(n, {
            className: Mt({
              level: t
            })
          });
        return (0, x.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var Vt = Tt({
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
      const qt = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? je.DX : "p",
          i = (0, H.mergeProps)({
            className: Vt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, x.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var Ft = Tt({
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
      const Bt = {
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
        Kt = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const a = e ? je.DX : Bt[r] || "span",
            s = (0, H.mergeProps)(n, {
              className: Ft({
                semantic: r
              })
            });
          return (0, x.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var Ht = r(7911),
        Xt = r.n(Ht);
      let Ut = "undefined" != typeof document ? V.useLayoutEffect : V.useEffect,
        Gt = e => e && !Array.isArray(e) && "object" == typeof e,
        Wt = [],
        Zt = {},
        $t = Xt();
      const Qt = (e, t = Wt) => {
        let r = Zt;
        Gt(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : Wt) : Gt(t) && (r = t, t = "dependencies" in r ? r.dependencies : Wt), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, a = (0, V.useRef)(!1), s = (0, V.useRef)($t.context(() => {}, n)), i = (0, V.useRef)(e => s.current.add(null, e)), l = t && t.length && !o;
        return l && Ut(() => (a.current = !0, () => s.current.revert()), Wt), Ut(() => {
          if (e && s.current.add(e, n), !l || !a.current) return () => s.current.revert()
        }, t), {
          context: s.current,
          contextSafe: i.current
        }
      };
      Qt.register = e => {
        $t = e
      }, Qt.headless = !0;
      const Yt = {
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

      function Jt(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function er(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -Jt(t - e, r - t, n) + t : e > r ? +Jt(e - r, r - t, n) + r : e
      }

      function tr(e, t, r) {
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

      function rr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function nr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rr(Object(r), !0).forEach(function(t) {
            tr(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const or = {
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

      function ar(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const sr = ["enter", "leave"];
      const ir = ["gotpointercapture", "lostpointercapture"];

      function lr(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = ir.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function dr(e) {
        return "touches" in e
      }

      function cr(e) {
        return dr(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function ur(e) {
        return dr(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function fr(e, t) {
        try {
          const r = t.clientX - e.clientX,
            n = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            a = (t.clientY + e.clientY) / 2,
            s = Math.hypot(r, n);
          return {
            angle: -180 * Math.atan2(r, n) / Math.PI,
            distance: s,
            origin: [o, a]
          }
        } catch (e) {}
        return null
      }

      function pr(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return fr(r, n)
      }

      function hr(e) {
        const t = ur(e);
        return dr(e) ? t.identifier : t.pointerId
      }

      function vr(e) {
        const t = ur(e);
        return [t.clientX, t.clientY]
      }

      function mr(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function yr(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function gr() {}

      function br(...e) {
        return 0 === e.length ? gr : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function wr(e, t) {
        return Object.assign({}, t, e || {})
      }
      class _r {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? yr(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            Yt.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [a, s] = t._movement, [i, l] = r.threshold, {
            _step: d,
            values: c
          } = t;
          if (r.hasCustomTransform ? (!1 === d[0] && (d[0] = Math.abs(a) >= i && c[0]), !1 === d[1] && (d[1] = Math.abs(s) >= l && c[1])) : (!1 === d[0] && (d[0] = Math.abs(a) >= i && Math.sign(a) * i), !1 === d[1] && (d[1] = Math.abs(s) >= l && Math.sign(s) * l)), t.intentional = !1 !== d[0] || !1 !== d[1], !t.intentional) return;
          const u = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = c;
            u[0] = !1 !== d[0] ? e - d[0] : 0, u[1] = !1 !== d[1] ? t - d[1] : 0
          } else u[0] = !1 !== d[0] ? a - d[0] : 0, u[1] = !1 !== d[1] ? s - d[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(u);
          const f = t.offset,
            p = t._active && !t._blocked || t.active;
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = yr(r.bounds, t)), this.setup && this.setup()), t.movement = u, this.computeOffset()));
          const [h, v] = t.offset, [
            [m, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [h < m ? -1 : h > y ? 1 : 0, v < g ? -1 : v > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [a, s],
                [i, l]
              ] = e;
              return [er(t, a, s, n), er(r, i, l, o)]
            }(t._bounds, t.offset, w), t.delta = Yt.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = Yt.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Yt.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(nr(nr(nr({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class xr extends _r {
        constructor(...e) {
          super(...e), tr(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Yt.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Yt.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[cr(e)] : r.axisThreshold;
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
      const Pr = e => e,
        Cr = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => nr(nr({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return Yt.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Yt.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Pr
          },
          threshold: e => Yt.toVector(e, 0)
        },
        jr = nr(nr({}, Cr), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => jr.bounds(e(t));
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
        Or = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Sr = "undefined" != typeof window && window.document && window.document.createElement;

      function kr() {
        return Sr && "ontouchstart" in window
      }
      const Er = {
          isBrowser: Sr,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: kr(),
          touchscreen: kr() || Sr && window.navigator.maxTouchPoints > 1,
          pointer: Sr && "onpointerdown" in window,
          pointerLock: Sr && "exitPointerLock" in window.document
        },
        Rr = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Tr = nr(nr({}, jr), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Er.pointerLock, Er.touch && r ? "touch" : this.pointerLock ? "mouse" : Er.pointer && !o ? "pointer" : Er.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Er.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const a = Yt.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, a
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(Yt.toVector(e)),
              distance: this.transform(Yt.toVector(t)),
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
          axisThreshold: e => e ? nr(nr({}, Rr), e) : Rr,
          keyboardDisplacement: (e = 10) => e
        });

      function Nr(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [a, s] = e._direction;
        (t < 0 && n > 0 && a < 0 || t > 0 && n < 0 && a > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && s < 0 || r > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Dr = nr(nr({}, Cr), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Er.touch && Er.gesture) return "gesture";
            if (Er.touch && n) return "touch";
            if (Er.touchscreen) {
              if (Er.pointer) return "pointer";
              if (Er.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = wr(yr(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = wr(yr(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), a()] : e => [o(e), a(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, Yt.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Ir = nr(nr({}, jr), {}, {
          mouseOnly: (e = !0) => e
        }),
        Lr = jr,
        zr = jr,
        Mr = nr(nr({}, jr), {}, {
          mouseOnly: (e = !0) => e
        }),
        Ar = new Map,
        Vr = new Map;

      function qr(e) {
        Ar.set(e.key, e.engine), Vr.set(e.key, e.resolver)
      }
      const Fr = {
          key: "drag",
          engine: class extends xr {
            constructor(...e) {
              super(...e), tr(this, "ingKey", "dragging")
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
                e._bounds = jr.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = hr(e), r._pointerActive = !0, this.computeValues(vr(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== cr(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = hr(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = vr(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Yt.sub(o, t._values), this.computeValues(o)), Yt.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = hr(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, a] = t._distance;
              if (t.tap = o <= r.tapsThreshold && a <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, a] = t._movement, [s, i] = r.swipe.velocity, [l, d] = r.swipe.distance, c = r.swipe.duration;
                if (t.elapsedTime < c) {
                  const r = Math.abs(e / t.timeDelta),
                    c = Math.abs(n / t.timeDelta);
                  r > s && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), c > i && Math.abs(a) > d && (t.swipe[1] = Math.sign(n))
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
              const t = Or[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, Yt.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Or && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Tr
        },
        Br = {
          key: "hover",
          engine: class extends xr {
            constructor(...e) {
              super(...e), tr(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(vr(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = vr(e);
              t._movement = t._delta = Yt.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Mr
        },
        Kr = {
          key: "move",
          engine: class extends xr {
            constructor(...e) {
              super(...e), tr(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(vr(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = vr(e),
                r = this.state;
              r._delta = Yt.sub(t, r._values), Yt.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
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
        Hr = {
          key: "pinch",
          engine: class extends _r {
            constructor(...e) {
              super(...e), tr(this, "ingKey", "pinching"), tr(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? Yt.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = pr(e, t._touchIds);
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
              const o = fr(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = pr(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = fr(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = Yt.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-mr(e)[1] / 100 * t.offset[0], 0], Yt.addTo(t._movement, t._delta), Nr(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Dr
        },
        Xr = {
          key: "scroll",
          engine: class extends xr {
            constructor(...e) {
              super(...e), tr(this, "ingKey", "scrolling")
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
                    scrollTop: s
                  } = e.currentTarget;
                  return [null !== (t = null != n ? n : a) && void 0 !== t ? t : 0, null !== (r = null != o ? o : s) && void 0 !== r ? r : 0]
                }(e);
              t._delta = Yt.sub(r, t._values), Yt.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Lr
        },
        Ur = {
          key: "wheel",
          engine: class extends xr {
            constructor(...e) {
              super(...e), tr(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = mr(e), Yt.addTo(t._movement, t._delta), Nr(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: zr
        };
      const Gr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Er.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Wr = ["target", "eventOptions", "window", "enabled", "transform"];

      function Zr(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = Zr(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class $r {
        constructor(e, t) {
          tr(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const a = this._listeners,
            s = function(e, t = "") {
              const r = or[e];
              return e + (r && r[t] || t)
            }(t, r),
            i = nr(nr({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(s, n, i);
          const l = () => {
            e.removeEventListener(s, n, i), a.delete(l)
          };
          return a.add(l), l
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class Qr {
        constructor() {
          tr(this, "_timeouts", new Map)
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
      class Yr {
        constructor(e) {
          var t, r;
          tr(this, "gestures", new Set), tr(this, "_targetEventStore", new $r(this)), tr(this, "gestureEventStores", {}), tr(this, "gestureTimeoutStores", {}), tr(this, "handlers", {}), tr(this, "config", {}), tr(this, "pointerIds", new Set), tr(this, "touchIds", new Set), tr(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && Jr(t, "drag"), r.wheel && Jr(t, "wheel"), r.scroll && Jr(t, "scroll"), r.move && Jr(t, "move"), r.pinch && Jr(t, "pinch"), r.hover && Jr(t, "hover")
        }
        setEventIds(e) {
          return dr(e) ? (this.touchIds = new Set(function(e) {
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
                window: s,
                enabled: i,
                transform: l
              } = n,
              d = function(e, t) {
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
              }(n, Wr);
            if (r.shared = Zr({
                target: o,
                eventOptions: a,
                window: s,
                enabled: i,
                transform: l
              }, Gr), t) {
              const e = Vr.get(t);
              r[t] = Zr(nr({
                shared: r.shared
              }, d), e)
            } else
              for (const e in d) {
                const t = Vr.get(e);
                t && (r[e] = Zr(nr({
                  shared: r.shared
                }, d[e]), t))
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
                  a = en(r, o.eventOptions, !!n);
                o.enabled && new(Ar.get(t))(this, e, t).bind(a)
              }
              const o = en(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](nr(nr({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = br(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: a
              } = lr(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: a
              })
            }
          }
        }
      }

      function Jr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new $r(e, t), e.gestureTimeoutStores[t] = new Qr
      }
      const en = (e, t, r) => (n, o, a, s = {}, i = !1) => {
          var l, d;
          const c = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            u = null !== (d = s.passive) && void 0 !== d ? d : t.passive;
          let f = i ? n : function(e, t = "", r = !1) {
            const n = or[e],
              o = n && n[t] || t;
            return "on" + ar(e) + ar(o) + (function(e = !1, t) {
              return e && !sr.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && u && (f += "Passive"), e[f] = e[f] || [], e[f].push(a)
        },
        tn = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function rn(e, t, r, n, o, a) {
        if (!e.has(r)) return;
        if (!Ar.has(n)) return;
        const s = r + "Start",
          i = r + "End";
        o[n] = e => {
          let n;
          return e.first && s in t && t[s](e), r in t && (n = t[r](e)), e.last && i in t && t[i](e), n
        }, a[n] = a[n] || {}
      }

      function nn(e, t = {}, r, n) {
        const o = q().useMemo(() => new Yr(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), q().useEffect(o.effect.bind(o)), q().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function on(e, t) {
        const r = ([Fr, Hr, Xr, Ur, Kr, Br].forEach(qr), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) tn.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), a = {};
            return rn(o, r, "onDrag", "drag", a, t), rn(o, r, "onWheel", "wheel", a, t), rn(o, r, "onScroll", "scroll", a, t), rn(o, r, "onPinch", "pinch", a, t), rn(o, r, "onMove", "move", a, t), rn(o, r, "onHover", "hover", a, t), {
              handlers: a,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return nn(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const an = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), sn = ([e, t]) => ({
        x: e,
        y: t
      }), ln = (e, t) => (e.x = t.x, e.y = t.y, e), dn = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, cn = (e, t, r) => Math.min(Math.max(e, t), r);

      function un() {
        return un = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, un.apply(null, arguments)
      }
      var fn = ["shift", "alt", "meta", "mod", "ctrl"],
        pn = {
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

      function hn(e) {
        return (e && pn[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function vn(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function mn(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return hn(e)
        });
        return un({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !fn.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && bn([hn(e.key), hn(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && wn([hn(e.key), hn(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        yn.clear()
      });
      var yn = new Set;

      function gn(e) {
        return Array.isArray(e)
      }

      function bn(e) {
        var t = Array.isArray(e) ? e : [e];
        yn.has("meta") && yn.forEach(function(e) {
          return ! function(e) {
            return fn.includes(e)
          }(e) && yn.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return yn.add(e.toLowerCase())
        })
      }

      function wn(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? yn.clear() : t.forEach(function(e) {
          return yn.delete(e.toLowerCase())
        })
      }

      function _n(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          a = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && a ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, gn(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var xn = (0, V.createContext)(void 0);

      function Pn(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, x.jsx)(xn.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Cn(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Cn(e[n], t[n])
        }, !0) : e === t
      }
      var jn = (0, V.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        On = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, V.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            a = o[0],
            s = o[1],
            i = (0, V.useState)([]),
            l = i[0],
            d = i[1],
            c = (0, V.useCallback)(function(e) {
              s(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            u = (0, V.useCallback)(function(e) {
              s(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, V.useCallback)(function(e) {
              s(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            p = (0, V.useCallback)(function(e) {
              d(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            h = (0, V.useCallback)(function(e) {
              d(function(t) {
                return t.filter(function(t) {
                  return !Cn(t, e)
                })
              })
            }, []);
          return (0, x.jsx)(jn.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: l,
              enableScope: c,
              disableScope: u,
              toggleScope: f
            },
            children: (0, x.jsx)(Pn, {
              addHotkey: p,
              removeHotkey: h,
              children: n
            })
          })
        },
        Sn = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        kn = "undefined" != typeof window ? V.useLayoutEffect : V.useEffect;

      function En(e, t, r, n) {
        var o = (0, V.useState)(null),
          a = o[0],
          s = o[1],
          i = (0, V.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          d = gn(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          u = (0, V.useCallback)(t, null != c ? c : []),
          f = (0, V.useRef)(u);
        f.current = c ? u : t;
        var p = function(e) {
            var t = (0, V.useRef)(void 0);
            return Cn(t.current, e) || (t.current = e), t.current
          }(l),
          h = (0, V.useContext)(jn).enabledScopes,
          v = (0, V.useContext)(xn);
        return kn(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !_n(e, ["input", "textarea", "select"]) || _n(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== a) {
                    var n = a.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== a && !a.contains(n.activeElement)) return void Sn(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && vn(d, null == p ? void 0 : p.splitKey).forEach(function(r) {
                    var n, o = mn(r, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, a = t.alt,
                          s = t.meta,
                          i = t.mod,
                          l = t.shift,
                          d = t.ctrl,
                          c = t.keys,
                          u = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          v = e.shiftKey,
                          m = e.altKey,
                          y = hn(f),
                          g = u.toLowerCase();
                        if (!(null != c && c.includes(y) || null != c && c.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (a === !m && "alt" !== g) return !1;
                          if (l === !v && "shift" !== g) return !1;
                          if (i) {
                            if (!h && !p) return !1
                          } else {
                            if (s === !h && "meta" !== g && "os" !== g) return !1;
                            if (d === !p && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (gn(n = c) ? n : n.split(o)).every(function(e) {
                          return yn.has(e.trim().toLowerCase())
                        })) : !c)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && i.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void Sn(e);
                      f.current(e, o), t || (i.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (bn(hn(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (wn(hn(e.code)), i.current = !1, null != p && p.keyup && r(e, !0))
              },
              s = a || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), v && vn(d, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return v.addHotkey(mn(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), v && vn(d, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return v.removeHotkey(mn(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [a, d, p, h]), s
      }

      function Rn(e) {
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

      function Tn(e, t) {
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
          t % 2 ? Tn(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Rn(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dn(e, t) {
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
        Ln = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Nn(Nn({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) In(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dn(e.variantClassNames, e => Dn(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zn = Ln({
          defaultClassName: "foundry_1a74xwbk",
          variantClassNames: {
            styled: {
              true: "foundry_1a74xwbj",
              false: "foundry_1a74xwbm"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mn = Ln({
          defaultClassName: "foundry_1a74xwbq foundry_1a74xwbi",
          variantClassNames: {
            position: {
              top: "foundry_1a74xwbr",
              bottom: "foundry_1a74xwbs"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      Ht.gsap.registerPlugin(Qt);
      const An = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Vn = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        qn = X("var(--foundry_1a74xwb0)");
      var Fn = r(9872),
        Bn = r(24944),
        Kn = r(30597);
      const Hn = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, a] = (0, V.useState)(null);
          return (0, V.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              a(e.default)
            })
          }, [r]), o ? (0, x.jsx)(Fn.A, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        Xn = {
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
      class Un {
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
          return r ? t : cn(t, this.max[e], this.min[e])
        }
      }
      class Gn {
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
      class Wn {
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
      class Zn {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", ln(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (ln(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(n, o), this.clearTapTimer()
          }, a))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, n]
          } = t, o = "x" === e ? r : n, a = this.slide.pan[e], s = a + o;
          if (this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(a),
              t = this.getVerticalDragRatio(s);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const i = this.slide.bounds.correctPan(e, s);
          a !== i && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = i)
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
      class $n {
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
          e.src = this.thumbnail.currentSrc ?? "", await an(e)
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
      class Qn {
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
      class Yn extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class Jn extends Wn {
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
          if (!this.dispatch(e, new Yn(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class eo {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = sn(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, ln(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = sn(e);
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
            a = ln({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = ln({
            x: 0,
            y: 0
          }, a);
          var i, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, ln(this.startPan, a)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = a, ((i = s).x !== l.x || i.y !== l.y || n || o) && (ln(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class to extends Wn {
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
          super(), this.width = e, this.height = t, this.opener = new $n({
            slide: this
          }), this.bounds = new Un({
            slide: this
          }), this.dragHandler = new Zn({
            slide: this
          }), this.scrollWheel = new Qn({
            slide: this
          }), this.zoomHandler = new eo({
            slide: this
          }), this.zoomLevels = new Gn({
            options: r
          }), this.tapHandler = new Jn({
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
          r || (e = cn(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), dn(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), dn(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), ln(this.pan, this.bounds.center)
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
      var ro = r(25778);
      const no = (0, Bn.YK)({
        OpenButtonLabel: {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        CloseButtonLabel: {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        CloseButtonTooltip: {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        ZoomInButtonLabel: {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        ZoomInButtonTooltip: {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        ZoomOutButtonLabel: {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        ZoomOutButtonTooltip: {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        ResetZoomButtonLabel: {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        ResetZoomButtonTooltip: {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        ZoomSliderLabel: {
          id: "Lightbox_Zoom_Slider_Label",
          description: "Aria-label for the lightbox zoom slider",
          defaultMessage: "Zoom level"
        },
        ZoomSliderTooltip: {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        DownloadButtonLabel: {
          id: "Lightbox_Download_Button_Label",
          description: "Aria-label for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        DownloadButtonTooltip: {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        }
      });
      var oo = "foundry_bc732x1";
      const ao = (0, V.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (En(e, e => r?.(e), [r]), (0, x.jsx)(Dt, {
        size: "XS",
        className: (0, Ae.clsx)("foundry_bc732x0", {
          [oo]: t
        }),
        asChild: !0,
        children: (0, x.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var so = Po(),
        io = e => bo(e, so),
        lo = Po();
      io.write = e => bo(e, lo);
      var co = Po();
      io.onStart = e => bo(e, co);
      var uo = Po();
      io.onFrame = e => bo(e, uo);
      var fo = Po();
      io.onFinish = e => bo(e, fo);
      var po = [];
      io.setTimeout = (e, t) => {
        const r = io.now() + t,
          n = () => {
            const e = po.findIndex(e => e.cancel == n);
            ~e && po.splice(e, 1), yo -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return po.splice(ho(r), 0, o), yo += 1, wo(), o
      };
      var ho = e => ~(~po.findIndex(t => t.time > e) || ~po.length);
      io.cancel = e => {
        co.delete(e), uo.delete(e), fo.delete(e), so.delete(e), lo.delete(e)
      }, io.sync = e => {
        go = !0, io.batchedUpdates(e), go = !1
      }, io.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, io.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          co.delete(r), t = null
        }, n
      };
      var vo = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      io.use = e => vo = e, io.now = "undefined" != typeof performance ? () => performance.now() : Date.now, io.batchedUpdates = e => e(), io.catch = console.error, io.frameLoop = "always", io.advance = () => {
        "demand" !== io.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : xo()
      };
      var mo = -1,
        yo = 0,
        go = !1;

      function bo(e, t) {
        go ? (t.delete(e), e(0)) : (t.add(e), wo())
      }

      function wo() {
        mo < 0 && (mo = 0, "demand" !== io.frameLoop && vo(_o))
      }

      function _o() {
        ~mo && (vo(_o), io.batchedUpdates(xo))
      }

      function xo() {
        const e = mo;
        mo = io.now();
        const t = ho(mo);
        t && (Co(po.splice(0, t), e => e.handler()), yo -= t), yo ? (co.flush(), so.flush(e ? Math.min(64, mo - e) : 16.667), uo.flush(), lo.flush(), fo.flush()) : mo = -1
      }

      function Po() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            yo += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (yo -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, yo -= t.size, Co(t, t => t(r) && e.add(t)), yo += e.size, t = e)
          }
        }
      }

      function Co(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            io.catch(e)
          }
        })
      }
      var jo = Object.defineProperty,
        Oo = {};

      function So() {}((e, t) => {
        for (var r in t) jo(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Oo, {
        assign: () => Fo,
        colors: () => Ao,
        createStringInterpolator: () => Io,
        skipAnimation: () => Vo,
        to: () => Lo,
        willAdvance: () => qo
      });
      var ko = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Eo(e, t) {
        if (ko.arr(e)) {
          if (!ko.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var Ro = (e, t) => e.forEach(t);

      function To(e, t, r) {
        if (ko.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var No = e => ko.und(e) ? [] : ko.arr(e) ? e : [e];

      function Do(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Ro(r, t)
        }
      }
      var Io, Lo, zo = (e, ...t) => Do(e, e => e(...t)),
        Mo = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Ao = null,
        Vo = !1,
        qo = So,
        Fo = e => {
          e.to && (Lo = e.to), e.now && (io.now = e.now), void 0 !== e.colors && (Ao = e.colors), null != e.skipAnimation && (Vo = e.skipAnimation), e.createStringInterpolator && (Io = e.createStringInterpolator), e.requestAnimationFrame && io.use(e.requestAnimationFrame), e.batchedUpdates && (io.batchedUpdates = e.batchedUpdates), e.willAdvance && (qo = e.willAdvance), e.frameLoop && (io.frameLoop = e.frameLoop)
        },
        Bo = new Set,
        Ko = [],
        Ho = [],
        Xo = 0,
        Uo = {
          get idle() {
            return !Bo.size && !Ko.length
          },
          start(e) {
            Xo > e.priority ? (Bo.add(e), io.onStart(Go)) : (Wo(e), io($o))
          },
          advance: $o,
          sort(e) {
            if (Xo) io.onFrame(() => Uo.sort(e));
            else {
              const t = Ko.indexOf(e);
              ~t && (Ko.splice(t, 1), Zo(e))
            }
          },
          clear() {
            Ko = [], Bo.clear()
          }
        };

      function Go() {
        Bo.forEach(Wo), Bo.clear(), io($o)
      }

      function Wo(e) {
        Ko.includes(e) || Zo(e)
      }

      function Zo(e) {
        Ko.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(Ko), 0, e)
      }

      function $o(e) {
        const t = Ho;
        for (let r = 0; r < Ko.length; r++) {
          const n = Ko[r];
          Xo = n.priority, n.idle || (qo(n), n.advance(e), n.idle || t.push(n))
        }
        return Xo = 0, (Ho = Ko).length = 0, (Ko = t).length > 0
      }
      var Qo = {
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
        },
        Yo = "[-+]?\\d*\\.?\\d+",
        Jo = Yo + "%";

      function ea(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var ta = new RegExp("rgb" + ea(Yo, Yo, Yo)),
        ra = new RegExp("rgba" + ea(Yo, Yo, Yo, Yo)),
        na = new RegExp("hsl" + ea(Yo, Jo, Jo)),
        oa = new RegExp("hsla" + ea(Yo, Jo, Jo, Yo)),
        aa = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        sa = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ia = /^#([0-9a-fA-F]{6})$/,
        la = /^#([0-9a-fA-F]{8})$/;

      function da(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function ca(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          a = da(o, n, e + 1 / 3),
          s = da(o, n, e),
          i = da(o, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * s) << 16 | Math.round(255 * i) << 8
      }

      function ua(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function fa(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function pa(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function ha(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function va(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ia.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ao && void 0 !== Ao[e] ? Ao[e] : (t = ta.exec(e)) ? (ua(t[1]) << 24 | ua(t[2]) << 16 | ua(t[3]) << 8 | 255) >>> 0 : (t = ra.exec(e)) ? (ua(t[1]) << 24 | ua(t[2]) << 16 | ua(t[3]) << 8 | pa(t[4])) >>> 0 : (t = aa.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = la.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = sa.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = na.exec(e)) ? (255 | ca(fa(t[1]), ha(t[2]), ha(t[3]))) >>> 0 : (t = oa.exec(e)) ? (ca(fa(t[1]), ha(t[2]), ha(t[3])) | pa(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var ma = (e, t, r) => {
          if (ko.fun(e)) return e;
          if (ko.arr(e)) return ma({
            range: e,
            output: t,
            extrapolate: r
          });
          if (ko.str(e.output[0])) return Io(e);
          const n = e,
            o = n.output,
            a = n.range || [0, 1],
            s = n.extrapolateLeft || n.extrapolate || "extend",
            i = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, a);
            return function(e, t, r, n, o, a, s, i, l) {
              let d = l ? l(e) : e;
              if (d < t) {
                if ("identity" === s) return d;
                "clamp" === s && (d = t)
              }
              if (d > r) {
                if ("identity" === i) return d;
                "clamp" === i && (d = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? d = -d : r === 1 / 0 ? d -= t : d = (d - t) / (r - t), d = a(d), n === -1 / 0 ? d = -d : o === 1 / 0 ? d += n : d = d * (o - n) + n, d)
            }(e, a[t], a[t + 1], o[t], o[t + 1], l, s, i, n.map)
          }
        },
        ya = 1.70158,
        ga = 1.525 * ya,
        ba = ya + 1,
        wa = 2 * Math.PI / 3,
        _a = 2 * Math.PI / 4.5,
        xa = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Pa = {
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
          easeInBack: e => ba * e * e * e - ya * e * e,
          easeOutBack: e => 1 + ba * Math.pow(e - 1, 3) + ya * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - ga) / 2 : (Math.pow(2 * e - 2, 2) * ((ga + 1) * (2 * e - 2) + ga) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * wa),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * wa) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * _a) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * _a) / 2 + 1,
          easeInBounce: e => 1 - xa(1 - e),
          easeOutBounce: xa,
          easeInOutBounce: e => e < .5 ? (1 - xa(1 - 2 * e)) / 2 : (1 + xa(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Ca = Symbol.for("FluidValue.get"),
        ja = Symbol.for("FluidValue.observers"),
        Oa = e => Boolean(e && e[Ca]),
        Sa = e => e && e[Ca] ? e[Ca]() : e,
        ka = e => e[ja] || null;

      function Ea(e, t) {
        const r = e[ja];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var Ra = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Ta(this, e)
          }
        },
        Ta = (e, t) => La(e, Ca, t);

      function Na(e, t) {
        if (e[Ca]) {
          let r = e[ja];
          r || La(e, ja, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Da(e, t) {
        const r = e[ja];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[ja] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var Ia, La = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        za = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ma = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Aa = new RegExp(`(${za.source})(%|[a-z]+)`, "i"),
        Va = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        qa = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Fa = e => {
          const [t, r] = Ba(e);
          if (!t || Mo()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && qa.test(r) ? Fa(r) : r || e
        },
        Ba = e => {
          const t = qa.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        Ka = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        Ha = e => {
          Ia || (Ia = Ao ? new RegExp(`(${Object.keys(Ao).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => Sa(e).replace(qa, Fa).replace(Ma, va).replace(Ia, va)),
            r = t.map(e => e.match(za).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => ma({
              ...e,
              output: t
            }));
          return e => {
            const r = !Aa.test(t[0]) && t.find(e => Aa.test(e))?.replace(za, "");
            let n = 0;
            return t[0].replace(za, () => `${o[n++](e)}${r||""}`).replace(Va, Ka)
          }
        },
        Xa = "react-spring: ",
        Ua = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${Xa}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Ga = Ua(console.warn),
        Wa = Ua(console.warn);

      function Za(e) {
        return ko.str(e) && ("#" == e[0] || /\d/.test(e) || !Mo() && qa.test(e) || e in (Ao || {}))
      }
      var $a = Mo() ? V.useEffect : V.useLayoutEffect;

      function Qa() {
        const e = (0, V.useState)()[1],
          t = (() => {
            const e = (0, V.useRef)(!1);
            return $a(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Ya = e => (0, V.useEffect)(e, Ja),
        Ja = [],
        es = Symbol.for("Animated:node"),
        ts = e => e && e[es],
        rs = (e, t) => {
          return r = e, n = es, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        ns = e => e && e[es] && e[es].getPayload(),
        os = class {
          constructor() {
            rs(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        as = class e extends os {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, ko.num(this._value) && (this.lastPosition = this._value)
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
            return ko.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, ko.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        ss = class e extends as {
          constructor(e) {
            super(0), this._string = null, this._toString = ma({
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
            if (ko.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = ma({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        is = {
          dependencies: null
        },
        ls = class extends os {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return To(this.source, (r, n) => {
              var o;
              (o = r) && o[es] === o ? t[n] = r.getValue(e) : Oa(r) ? t[n] = Sa(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Ro(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return To(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            is.dependencies && Oa(e) && is.dependencies.add(e);
            const t = ns(e);
            t && Ro(t, e => this.add(e))
          }
        },
        ds = class e extends ls {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(cs)), !0)
          }
        };

      function cs(e) {
        return (Za(e) ? ss : as).create(e)
      }

      function us(e) {
        const t = ts(e);
        return t ? t.constructor : ko.arr(e) ? ds : Za(e) ? ss : as
      }
      var fs = (e, t) => {
          const r = !ko.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, V.forwardRef)((n, o) => {
            const a = (0, V.useRef)(null),
              s = r && (0, V.useCallback)(e => {
                a.current = function(e, t) {
                  return e && (ko.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [i, l] = function(e, t) {
                const r = new Set;
                return is.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new ls(e), is.dependencies = null, [e, r]
              }(n, t),
              d = Qa(),
              c = () => {
                const e = a.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && d()
              },
              u = new ps(c, l),
              f = (0, V.useRef)(void 0);
            $a(() => (f.current = u, Ro(l, e => Na(e, u)), () => {
              f.current && (Ro(f.current.deps, e => Da(e, f.current)), io.cancel(f.current.update))
            })), (0, V.useEffect)(c, []), Ya(() => () => {
              const e = f.current;
              Ro(e.deps, t => Da(t, e))
            });
            const p = t.getComponentProps(i.getValue());
            return V.createElement(e, {
              ...p,
              ref: s
            })
          })
        },
        ps = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && io.write(this.update)
          }
        },
        hs = Symbol.for("AnimatedComponent"),
        vs = (e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new ls(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            a = e => {
              const t = ms(e) || "Anonymous";
              return (e = ko.str(e) ? a[e] || (a[e] = fs(e, o)) : e[hs] || (e[hs] = fs(e, o))).displayName = `Animated(${t})`, e
            };
          return To(e, (t, r) => {
            ko.arr(e) && (r = ms(t)), a[r] = a(t)
          }), {
            animated: a
          }
        },
        ms = e => ko.str(e) ? e : e && ko.str(e.displayName) ? e.displayName : ko.fun(e) && e.name || null;

      function ys(e, ...t) {
        return ko.fun(e) ? e(...t) : e
      }
      var gs = (e, t) => !0 === e || !!(t && e && (ko.fun(e) ? e(t) : No(e).includes(t))),
        bs = (e, t) => ko.obj(e) ? t && e[t] : e,
        ws = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        _s = e => e,
        xs = (e, t = _s) => {
          let r = Ps;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            ko.und(r) || (n[o] = r)
          }
          return n
        },
        Ps = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Cs = {
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

      function js(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (To(e, (e, n) => {
              Cs[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return To(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function Os(e) {
        return e = Sa(e), ko.arr(e) ? e.map(Os) : Za(e) ? Oo.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Ss(e) {
        return ko.fun(e) || ko.arr(e) && ko.obj(e[0])
      }

      function ks(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var Es = {
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
        Rs = {
          ...Es.default,
          mass: 1,
          damping: 1,
          easing: Pa.linear,
          clamp: !1
        },
        Ts = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Rs)
          }
        };

      function Ns(e, t) {
        if (ko.und(t.decay)) {
          const r = !ko.und(t.tension) || !ko.und(t.friction);
          !r && ko.und(t.frequency) && ko.und(t.damping) && ko.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Ds = [],
        Is = class {
          constructor() {
            this.changed = !1, this.values = Ds, this.toValues = null, this.fromValues = Ds, this.config = new Ts, this.immediate = !1
          }
        };

      function Ls(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: a
      }) {
        return new Promise((s, i) => {
          let l, d, c = gs(r.cancel ?? n?.cancel, t);
          if (c) p();
          else {
            ko.und(r.pause) || (o.paused = gs(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || gs(e, t)), l = ys(r.delay || 0, t), e ? (o.resumeQueue.add(f), a.pause()) : (a.resume(), f())
          }

          function u() {
            o.resumeQueue.add(f), o.timeouts.delete(d), d.cancel(), l = d.time - io.now()
          }

          function f() {
            l > 0 && !Oo.skipAnimation ? (o.delayed = !0, d = io.setTimeout(p, l), o.pauseQueue.add(u), o.timeouts.add(d)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(u), o.timeouts.delete(d), e <= (o.cancelId || 0) && (c = !0);
            try {
              a.start({
                ...r,
                callId: e,
                cancel: c
              }, s)
            } catch (e) {
              i(e)
            }
          }
        })
      }
      var zs = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? Vs(e.get()) : t.every(e => e.noop) ? Ms(e.get()) : As(e.get(), t.every(e => e.finished)),
        Ms = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        As = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        Vs = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function qs(e, t, r, n) {
        const {
          callId: o,
          parentId: a,
          onRest: s
        } = t, {
          asyncTo: i,
          promise: l
        } = r;
        return a || e !== i || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const d = xs(t, (e, t) => "onRest" === t ? void 0 : e);
          let c, u;
          const f = new Promise((e, t) => (c = e, u = t)),
            p = e => {
              const t = o <= (r.cancelId || 0) && Vs(n) || o !== r.asyncId && As(n, !1);
              if (t) throw e.result = t, u(e), e
            },
            h = (e, t) => {
              const a = new Bs,
                s = new Ks;
              return (async () => {
                if (Oo.skipAnimation) throw Fs(r), s.result = As(n, !1), u(s), s;
                p(a);
                const i = ko.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                i.parentId = o, To(d, (e, t) => {
                  ko.und(i[t]) && (i[t] = e)
                });
                const l = await n.start(i);
                return p(a), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let v;
          if (Oo.skipAnimation) return Fs(r), As(n, !1);
          try {
            let t;
            t = ko.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, n.stop.bind(n))), await Promise.all([t.then(c), f]), v = As(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof Bs) v = e.result;
            else {
              if (!(e instanceof Ks)) throw e;
              v = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = a, r.asyncTo = a ? i : void 0, r.promise = a ? l : void 0)
          }
          return ko.fun(s) && io.batchedUpdates(() => {
            s(v, n, n.item)
          }), v
        })() : l
      }

      function Fs(e, t) {
        Do(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Bs = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Ks = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Hs = e => e instanceof Us,
        Xs = 1,
        Us = class extends Ra {
          constructor() {
            super(...arguments), this.id = Xs++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = ts(this);
            return e && e.getValue()
          }
          to(...e) {
            return Oo.to(this, e)
          }
          interpolate(...e) {
            return Ga(`${Xa}The "interpolate" function is deprecated in v9 (use "to" instead)`), Oo.to(this, e)
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
            Ea(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Uo.sort(this), Ea(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Gs = Symbol.for("SpringPhase"),
        Ws = e => (1 & e[Gs]) > 0,
        Zs = e => (2 & e[Gs]) > 0,
        $s = e => (4 & e[Gs]) > 0,
        Qs = (e, t) => t ? e[Gs] |= 3 : e[Gs] &= -3,
        Ys = (e, t) => t ? e[Gs] |= 4 : e[Gs] &= -5,
        Js = class extends Us {
          constructor(e, t) {
            if (super(), this.animation = new Is, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !ko.und(e) || !ko.und(t)) {
              const r = ko.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              ko.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Zs(this) || this._state.asyncTo) || $s(this)
          }
          get goal() {
            return Sa(this.animation.to)
          }
          get velocity() {
            const e = ts(this);
            return e instanceof as ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return Ws(this)
          }
          get isAnimating() {
            return Zs(this)
          }
          get isPaused() {
            return $s(this)
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
            } = n, s = ns(n.to);
            !s && Oa(n.to) && (o = No(Sa(n.to))), n.values.forEach((i, l) => {
              if (i.done) return;
              const d = i.constructor == ss ? 1 : s ? s[l].lastPosition : o[l];
              let c = n.immediate,
                u = d;
              if (!c) {
                if (u = i.lastPosition, a.tension <= 0) return void(i.done = !0);
                let t = i.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != i.v0 ? i.v0 : i.v0 = ko.arr(a.velocity) ? a.velocity[l] : a.velocity;
                let s;
                const f = a.precision || (r == d ? .005 : Math.min(1, .001 * Math.abs(d - r)));
                if (ko.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      n = Math.exp(-(1 - e) * t);
                    u = r + o / (1 - e) * (1 - n), c = Math.abs(i.lastPosition - u) <= f, s = o * n
                  } else {
                    s = null == i.lastVelocity ? o : i.lastVelocity;
                    const t = a.restVelocity || f / 10,
                      n = a.clamp ? 0 : a.bounce,
                      l = !ko.und(n),
                      p = r == d ? i.v0 > 0 : r < d;
                    let h, v = !1;
                    const m = 1,
                      y = Math.ceil(e / m);
                    for (let e = 0; e < y && (h = Math.abs(s) > t, h || (c = Math.abs(d - u) <= f, !c)); ++e) l && (v = u == d || u > d == p, v && (s = -s * n, u = d)), s += (1e-6 * -a.tension * (u - d) + .001 * -a.friction * s) / a.mass * m, u += s * m
                  }
                else {
                  let n = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, i.durationProgress > 0 && (i.elapsedTime = a.duration * i.durationProgress, t = i.elapsedTime += e)), n = (a.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, i.durationProgress = n), u = r + a.easing(n) * (d - r), s = (u - i.lastPosition) / e, c = 1 == n
                }
                i.lastVelocity = s, Number.isNaN(u) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              s && !s[l].done && (c = !1), c ? i.done = !0 : t = !1, i.setValue(u, a.round) && (r = !0)
            });
            const i = ts(this),
              l = i.getValue();
            if (t) {
              const e = Sa(n.to);
              l === e && !r || a.decay ? r && a.decay && this._onChange(l) : (i.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return io.batchedUpdates(() => {
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
            if (Zs(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              io.batchedUpdates(() => {
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
            return ko.und(e) ? (r = this.queue || [], this.queue = []) : r = [ko.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => zs(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), Fs(this._state, e && this._lastCallId), io.batchedUpdates(() => this._stop(t, e)), this
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
            r = ko.obj(r) ? r[t] : r, (null == r || Ss(r)) && (r = void 0), n = ko.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return Ws(this) || (e.reverse && ([r, n] = [n, r]), n = Sa(n), ko.und(n) ? ts(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, xs(e, (e, t) => /^on/.test(t) ? bs(e, r) : e)), ai(this, e, "onProps"), si(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return Ls(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: a,
              actions: {
                pause: () => {
                  $s(this) || (Ys(this, !0), zo(a.pauseQueue), si(this, "onPause", As(this, ei(this, this.animation.to)), this))
                },
                resume: () => {
                  $s(this) && (Ys(this, !1), Zs(this) && this._resume(), zo(a.resumeQueue), si(this, "onResume", As(this, ei(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = ti(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(Vs(this));
            const n = !ko.und(e.to),
              o = !ko.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(Vs(this));
              this._lastToId = t.callId
            }
            const {
              key: a,
              defaultProps: s,
              animation: i
            } = this, {
              to: l,
              from: d
            } = i;
            let {
              to: c = l,
              from: u = d
            } = e;
            !o || n || t.default && !ko.und(c) || (c = u), t.reverse && ([c, u] = [u, c]);
            const f = !Eo(u, d);
            f && (i.from = u), u = Sa(u);
            const p = !Eo(c, l);
            p && this._focus(c);
            const h = Ss(t.to),
              {
                config: v
              } = i,
              {
                decay: m,
                velocity: y
              } = v;
            (n || o) && (v.velocity = 0), t.config && !h && function(e, t, r) {
              r && (Ns(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Ns(e, t), Object.assign(e, t);
              for (const t in Rs) null == e[t] && (e[t] = Rs[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: a
              } = e;
              ko.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * a, e.friction = 4 * Math.PI * o * a / n)
            }(v, ys(t.config, a), t.config !== s.config ? ys(s.config, a) : void 0);
            let g = ts(this);
            if (!g || ko.und(c)) return r(As(this, !0));
            const b = ko.und(t.reset) ? o && !t.default : !ko.und(u) && gs(t.reset, a),
              w = b ? u : this.get(),
              _ = Os(c),
              x = ko.num(_) || ko.arr(_) || Za(_),
              P = !h && (!x || gs(s.immediate || t.immediate, a));
            if (p) {
              const e = us(c);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const C = g.constructor;
            let j = Oa(c),
              O = !1;
            if (!j) {
              const e = b || !Ws(this) && f;
              (p || e) && (O = Eo(Os(w), _), j = !O), (Eo(i.immediate, P) || P) && Eo(v.decay, m) && Eo(v.velocity, y) || (j = !0)
            }
            if (O && Zs(this) && (i.changed && !b ? j = !0 : j || this._stop(l)), !h && ((j || Oa(l)) && (i.values = g.getPayload(), i.toValues = Oa(c) ? null : C == ss ? [1] : No(_)), i.immediate != P && (i.immediate = P, P || b || this._set(l)), j)) {
              const {
                onRest: e
              } = i;
              Ro(oi, e => ai(this, t, e));
              const n = As(this, ei(this, l));
              zo(this._pendingCalls, n), this._pendingCalls.add(r), i.changed && io.batchedUpdates(() => {
                i.changed = !b, e?.(n, this), b ? ys(s.onRest, n) : i.onStart?.(n, this)
              })
            }
            b && this._set(w), h ? r(qs(t.to, t, this._state, this)) : j ? this._start() : Zs(this) && !p ? this._pendingCalls.add(r) : r(Ms(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (ka(this) && this._detach(), t.to = e, ka(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Oa(t) && (Na(t, this), Hs(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Oa(e) && Da(e, this)
          }
          _set(e, t = !0) {
            const r = Sa(e);
            if (!ko.und(r)) {
              const e = ts(this);
              if (!e || !Eo(r, e.getValue())) {
                const n = us(r);
                e && e.constructor == n ? e.setValue(r) : rs(this, n.create(r)), e && io.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return ts(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, si(this, "onStart", As(this, ei(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), ys(this.animation.onChange, e, this)), ys(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            ts(this).reset(Sa(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Zs(this) || (Qs(this, !0), $s(this) || this._resume())
          }
          _resume() {
            Oo.skipAnimation ? this.finish() : Uo.start(this)
          }
          _stop(e, t) {
            if (Zs(this)) {
              Qs(this, !1);
              const r = this.animation;
              Ro(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Ea(this, {
                type: "idle",
                parent: this
              });
              const n = t ? Vs(this.get()) : As(this.get(), ei(this, e ?? r.to));
              zo(this._pendingCalls, n), r.changed && (r.changed = !1, si(this, "onRest", n, this))
            }
          }
        };

      function ei(e, t) {
        const r = Os(t);
        return Eo(Os(e.get()), r)
      }

      function ti(e, t = e.loop, r = e.to) {
        const n = ys(t);
        if (n) {
          const o = !0 !== n && js(n),
            a = (o || e).reverse,
            s = !o || o.reset;
          return ri({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || Ss(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function ri(e) {
        const {
          to: t,
          from: r
        } = e = js(e), n = new Set;
        return ko.obj(t) && ni(t, n), ko.obj(r) && ni(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function ni(e, t) {
        To(e, (e, r) => null != e && t.add(r))
      }
      var oi = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function ai(e, t, r) {
        e.animation[r] = t[r] !== ws(t, r) ? bs(t[r], e.key) : void 0
      }

      function si(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var ii = ["onStart", "onChange", "onRest"],
        li = 1,
        di = class {
          constructor(e, t) {
            this.id = li++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              ko.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(ri(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = No(e).map(ri) : this.queue = [], this._flush ? this._flush(this, t) : (hi(this, t), function(e, t) {
              return Promise.all(t.map(t => ci(e, t))).then(t => zs(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              Ro(No(t), t => r[t].stop(!!e))
            } else Fs(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (ko.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Ro(No(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (ko.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Ro(No(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            To(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, Do(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const a = !n && this._started,
              s = o || a && r.size ? this.get() : null;
            o && t.size && Do(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), a && (this._started = !1, Do(r, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            io.onFrame(this._onFrame)
          }
        };
      async function ci(e, t, r) {
        const {
          keys: n,
          to: o,
          from: a,
          loop: s,
          onRest: i,
          onResolve: l
        } = t, d = ko.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === a && (t.from = null);
        const c = ko.arr(o) || ko.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : Ro(ii, r => {
          const n = t[r];
          if (ko.fun(n)) {
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
            }, d && (d[r] = t[r])
          }
        });
        const u = e._state;
        t.pause === !u.paused ? (u.paused = t.pause, zo(t.pause ? u.pauseQueue : u.resumeQueue)) : u.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          p = !0 === t.cancel || !0 === ws(t, "cancel");
        (c || p && u.asyncId) && f.push(Ls(++e._lastAsyncId, {
          props: t,
          state: u,
          actions: {
            pause: So,
            resume: So,
            start(t, r) {
              p ? (Fs(u, e._lastAsyncId), r(Vs(e))) : (t.onRest = i, r(qs(c, t, u, e)))
            }
          }
        })), u.paused && await new Promise(e => {
          u.resumeQueue.add(e)
        });
        const h = zs(e, await Promise.all(f));
        if (s && h.finished && (!r || !h.noop)) {
          const r = ti(t, s, o);
          if (r) return hi(e, [r]), ci(e, r, !0)
        }
        return l && io.batchedUpdates(() => l(h, e, e.item)), h
      }

      function ui(e, t) {
        const r = {
          ...e.springs
        };
        return t && Ro(No(t), e => {
            ko.und(e.keys) && (e = ri(e)), ko.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), pi(r, e, e => fi(e))
          }),
          function(e, t) {
            To(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, Na(t, e))
            })
          }(e, r), r
      }

      function fi(e, t) {
        const r = new Js;
        return r.key = e, t && Na(r, t), r
      }

      function pi(e, t, r) {
        t.keys && Ro(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function hi(e, t) {
        Ro(t, t => {
          pi(e.springs, t, t => fi(t, e))
        })
      }
      var vi = V.createContext({
          pause: !1,
          immediate: !1
        }),
        mi = () => {
          const e = [],
            t = function(t) {
              Wa(`${Xa}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return Ro(e, (e, o) => {
                if (ko.und(t)) n.push(e.start());
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
            return Ro(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return Ro(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            Ro(e, (e, r) => {
              const n = ko.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return Ro(e, (e, n) => {
              if (ko.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return Ro(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return Ro(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return ko.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        yi = () => mi(),
        gi = () => (0, V.useState)(yi)[0];

      function bi(e, t, r) {
        const n = ko.fun(t) && t,
          {
            reset: o,
            sort: a,
            trail: s = 0,
            expires: i = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: d,
            ref: c,
            config: u
          } = n ? n() : t,
          f = (0, V.useMemo)(() => n || 3 == arguments.length ? mi() : void 0, []),
          p = No(e),
          h = [],
          v = (0, V.useRef)(null),
          m = o ? null : v.current;
        $a(() => {
          v.current = h
        }), Ya(() => (Ro(h, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          Ro(v.current, e => {
            e.expired && clearTimeout(e.expirationId), ks(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : wi++
              })
            }
            return ko.und(r) ? e : ko.fun(r) ? e.map(r) : No(r)
          }(p, n ? n() : t, m),
          g = o && v.current || [];
        $a(() => Ro(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          ks(e, f), ys(d, t, r)
        }));
        const b = [];
        if (m && Ro(m, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (h[t] = e)
          }), Ro(p, (e, t) => {
            h[t] || (h[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new di
            }, h[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          Ro(b, (t, n) => {
            const o = m[n];
            ~t ? (e = h.indexOf(o), h[e] = {
              ...o,
              item: p[t]
            }) : r && h.splice(++e, 0, o)
          })
        }
        ko.fun(a) && h.sort((e, t) => a(e.item, t.item));
        let w = -s;
        const _ = Qa(),
          x = xs(t),
          P = new Map,
          C = (0, V.useRef)(new Map),
          j = (0, V.useRef)(!1);
        Ro(h, (e, r) => {
          const o = e.key,
            a = e.phase,
            d = n ? n() : t;
          let f, p;
          const h = ys(d.delay || 0, o);
          if ("mount" == a) f = d.enter, p = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != a)
              if (e) f = d.leave, p = "leave";
              else {
                if (!(f = d.update)) return;
                p = "update"
              }
            else {
              if (e) return;
              f = d.enter, p = "enter"
            }
          }
          if (f = ys(f, e.item, r), f = ko.obj(f) ? js(f) : {
              to: f
            }, !f.config) {
            const t = u || x.config;
            f.config = ys(t, e.item, r, p)
          }
          w += s;
          const g = {
            ...x,
            delay: h + w,
            ref: c,
            immediate: d.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == p && ko.und(g.from)) {
            const o = n ? n() : t,
              a = ko.und(o.initial) || m ? o.from : o.initial;
            g.from = ys(a, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            ys(b, e);
            const t = v.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = ys(i, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(_, n)))
                }
              }
              e && t.some(e => e.expired) && (C.current.delete(r), l && (j.current = !0), _())
            }
          };
          const O = ui(e.ctrl, g);
          "leave" === p && l ? C.current.set(e, {
            phase: p,
            springs: O,
            payload: g
          }) : P.set(e, {
            phase: p,
            springs: O,
            payload: g
          })
        });
        const O = (0, V.useContext)(vi),
          S = function(e) {
            const t = (0, V.useRef)(void 0);
            return (0, V.useEffect)(() => {
              t.current = e
            }), t.current
          }(O),
          k = O !== S && function(e) {
            for (const t in e) return !0;
            return !1
          }(O);
        $a(() => {
          k && Ro(h, e => {
            e.ctrl.start({
              default: O
            })
          })
        }, [O]), Ro(P, (e, t) => {
          if (C.current.size) {
            const e = h.findIndex(e => e.key === t.key);
            h.splice(e, 1)
          }
        }), $a(() => {
          Ro(C.current.size ? C.current : P, ({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), k && "enter" == e && n.start({
              default: O
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || j.current ? (n.start(t), j.current && (j.current = !1)) : n.update(t))
          })
        }, o ? void 0 : r);
        const E = e => V.createElement(V.Fragment, null, h.map((t, r) => {
          const {
            springs: n
          } = P.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), a = ko.str(t.key) || ko.num(t.key) ? t.key : t.ctrl.id, s = V.version < "19.0.0", i = o?.props ?? {}, l = s ? o?.ref : i?.ref;
          return o && o.type ? V.createElement(o.type, {
            ...i,
            key: a,
            ref: l
          }) : o
        }));
        return f ? [E, f] : E
      }
      var wi = 1,
        _i = class extends Us {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = ma(...t);
            const r = this._get(),
              n = us(r);
            rs(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            Eo(t, this.get()) || (ts(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Pi(this._active) && Ci(this)
          }
          _get() {
            const e = ko.arr(this.source) ? this.source.map(Sa) : No(Sa(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Pi(this._active) && (this.idle = !1, Ro(ns(this), e => {
              e.done = !1
            }), Oo.skipAnimation ? (io.batchedUpdates(() => this.advance()), Ci(this)) : Uo.start(this))
          }
          _attach() {
            let e = 1;
            Ro(No(this.source), t => {
              Oa(t) && Na(t, this), Hs(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            Ro(No(this.source), e => {
              Oa(e) && Da(e, this)
            }), this._active.clear(), Ci(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = No(this.source).reduce((e, t) => Math.max(e, (Hs(t) ? t.priority : 0) + 1), 0))
          }
        };

      function xi(e) {
        return !1 !== e.idle
      }

      function Pi(e) {
        return !e.size || Array.from(e).every(xi)
      }

      function Ci(e) {
        e.idle || (e.idle = !0, Ro(ns(e), e => {
          e.done = !0
        }), Ea(e, {
          type: "idle",
          parent: e
        }))
      }
      Oo.assign({
        createStringInterpolator: Ha,
        to: (e, t) => new _i(e, t)
      }), Uo.advance;
      var ji = r(18429),
        Oi = /^--/;

      function Si(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Oi.test(e) || Ei.hasOwnProperty(e) && Ei[e] ? ("" + t).trim() : t + "px"
      }
      var ki = {},
        Ei = {
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
        Ri = ["Webkit", "Ms", "Moz", "O"];
      Ei = Object.keys(Ei).reduce((e, t) => (Ri.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), Ei);
      var Ti = /^(matrix|translate|scale|rotate|skew)/,
        Ni = /^(translate)/,
        Di = /^(rotate|skew)/,
        Ii = (e, t) => ko.num(e) && 0 !== e ? e + t : e,
        Li = (e, t) => ko.arr(e) ? e.every(e => Li(e, t)) : ko.num(e) ? e === t : parseFloat(e) === t,
        zi = class extends ls {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push(e => [`translate3d(${e.map(e=>Ii(e,"px")).join(",")})`, Li(e, 0)])), To(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push(e => [e, "" === e]);
              else if (Ti.test(t)) {
                if (delete n[t], ko.und(e)) return;
                const r = Ni.test(t) ? "px" : Di.test(t) ? "deg" : "";
                o.push(No(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${Ii(o,r)})`, Li(o, 0)] : e => [`${t}(${e.map(e=>Ii(e,r)).join(",")})`, Li(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new Mi(o, a)), super(n)
          }
        },
        Mi = class extends Ra {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Ro(this.inputs, (r, n) => {
              const o = Sa(r[0]),
                [a, s] = this.transforms[n](ko.arr(o) ? o : r.map(Sa));
              e += " " + a, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Ro(this.inputs, e => Ro(e, e => Oa(e) && Na(e, this)))
          }
          observerRemoved(e) {
            0 == e && Ro(this.inputs, e => Ro(e, e => Oa(e) && Da(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Ea(this, e)
          }
        };
      Oo.assign({
        batchedUpdates: ji.unstable_batchedUpdates,
        createStringInterpolator: Ha,
        colors: Qo
      });
      var Ai = vs(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: a,
                scrollTop: s,
                scrollLeft: i,
                viewBox: l,
                ...d
              } = t,
              c = Object.values(d),
              u = Object.keys(d).map(t => r || e.hasAttribute(t) ? t : ki[t] || (ki[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = Si(t, o[t]);
                Oi.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== i && (e.scrollLeft = i), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new zi(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        Vi = Ai.animated,
        qi = r(94118),
        Fi = r(95362),
        Bi = r(85426),
        Ki = r(89749),
        Hi = r(10250),
        Xi = r(96077),
        Ui = r(4683),
        Gi = r(53146),
        Wi = r(78004),
        Zi = r(45824),
        $i = r(66190),
        Qi = r(89630),
        [Yi, Ji] = (0, Bi.A)("Tooltip", [Xi.Bk]),
        el = (0, Xi.Bk)(),
        tl = "TooltipProvider",
        rl = 700,
        nl = "tooltip.open",
        [ol, al] = Yi(tl),
        sl = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = rl,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = V.useRef(!0), i = V.useRef(!1), l = V.useRef(0);
          return V.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, x.jsx)(ol, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: V.useCallback(() => {
              window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: V.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, n)
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: V.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      sl.displayName = tl;
      var il = "Tooltip",
        [ll, dl] = Yi(il),
        cl = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, l = al(il, e.__scopeTooltip), d = el(t), [c, u] = V.useState(null), f = (0, Hi.useId)(), p = V.useRef(0), h = s ?? l.disableHoverableContent, v = i ?? l.delayDuration, m = V.useRef(!1), [y, g] = (0, $i.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(nl))) : l.onClose(), a?.(e)
            },
            caller: il
          }), b = V.useMemo(() => y ? m.current ? "delayed-open" : "instant-open" : "closed", [y]), w = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, m.current = !1, g(!0)
          }, [g]), _ = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), P = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              m.current = !0, g(!0), p.current = 0
            }, v)
          }, [v, g]);
          return V.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, x.jsx)(Xi.bL, {
            ...d,
            children: (0, x.jsx)(ll, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: V.useCallback(() => {
                l.isOpenDelayedRef.current ? P() : w()
              }, [l.isOpenDelayedRef, P, w]),
              onTriggerLeave: V.useCallback(() => {
                h ? _() : (window.clearTimeout(p.current), p.current = 0)
              }, [_, h]),
              onOpen: w,
              onClose: _,
              disableHoverableContent: h,
              children: r
            })
          })
        };
      cl.displayName = il;
      var ul = "TooltipTrigger",
        fl = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = dl(ul, r), a = al(ul, r), s = el(r), i = V.useRef(null), l = (0, Fi.s)(t, i, o.onTriggerChange), d = V.useRef(!1), c = V.useRef(!1), u = V.useCallback(() => d.current = !1, []);
          return V.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, x.jsx)(Xi.Mz, {
            asChild: !0,
            ...s,
            children: (0, x.jsx)(Wi.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, qi.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, qi.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, qi.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, qi.mK)(e.onFocus, () => {
                d.current || o.onOpen()
              }),
              onBlur: (0, qi.mK)(e.onBlur, o.onClose),
              onClick: (0, qi.mK)(e.onClick, o.onClose)
            })
          })
        });
      fl.displayName = ul;
      var pl = "TooltipPortal",
        [hl, vl] = Yi(pl, {
          forceMount: void 0
        }),
        ml = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = dl(pl, t);
          return (0, x.jsx)(hl, {
            scope: t,
            forceMount: r,
            children: (0, x.jsx)(Gi.C, {
              present: r || a.open,
              children: (0, x.jsx)(Ui.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      ml.displayName = pl;
      var yl = "TooltipContent",
        gl = V.forwardRef((e, t) => {
          const r = vl(yl, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = dl(yl, e.__scopeTooltip);
          return (0, x.jsx)(Gi.C, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, x.jsx)(Pl, {
              side: o,
              ...a,
              ref: t
            }) : (0, x.jsx)(bl, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        bl = V.forwardRef((e, t) => {
          const r = dl(yl, e.__scopeTooltip),
            n = al(yl, e.__scopeTooltip),
            o = V.useRef(null),
            a = (0, Fi.s)(t, o),
            [s, i] = V.useState(null),
            {
              trigger: l,
              onClose: d
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = V.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = V.useCallback((e, t) => {
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
              i(a), u(!0)
            }, [u]);
          return V.useEffect(() => () => f(), [f]), V.useEffect(() => {
            if (l && c) {
              const e = e => p(e, c),
                t = e => p(e, l);
              return l.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [l, c, p, f]), V.useEffect(() => {
            if (s) {
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
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const s = t[e],
                        i = t[a],
                        l = s.x,
                        d = s.y,
                        c = i.x,
                        u = i.y;
                      d > n != u > n && r < (c - l) * (n - d) / (u - d) + l && (o = !o)
                    }
                    return o
                  }(r, s);
                n ? f() : o && (f(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, c, s, d, f]), (0, x.jsx)(Pl, {
            ...e,
            ref: a
          })
        }),
        [wl, _l] = Yi(il, {
          isInside: !1
        }),
        xl = (0, Zi.createSlottable)("TooltipContent"),
        Pl = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, l = dl(yl, r), d = el(r), {
            onClose: c
          } = l;
          return V.useEffect(() => (document.addEventListener(nl, c), () => document.removeEventListener(nl, c)), [c]), V.useEffect(() => {
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
          }, [l.trigger, c]), (0, x.jsx)(Ki.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, x.jsxs)(Xi.UC, {
              "data-state": l.stateAttribute,
              ...d,
              ...i,
              ref: t,
              style: {
                ...i.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, x.jsx)(xl, {
                children: n
              }), (0, x.jsx)(wl, {
                scope: r,
                isInside: !0,
                children: (0, x.jsx)(Qi.Root, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      gl.displayName = yl;
      var Cl = "TooltipArrow",
        jl = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = el(r);
          return _l(Cl, r).isInside ? null : (0, x.jsx)(Xi.i3, {
            ...o,
            ...n,
            ref: t
          })
        });
      jl.displayName = Cl;
      var Ol = sl,
        Sl = cl,
        kl = fl,
        El = ml,
        Rl = gl,
        Tl = jl;
      const Nl = (0, V.createContext)(null);

      function Dl() {
        const e = (0, V.useContext)(Nl);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Il = ({
          children: e,
          delayDuration: t,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [a = !1, s] = (0, Ce.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, x.jsx)(Ol, {
            delayDuration: t,
            children: (0, x.jsx)(Nl.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, x.jsx)(Sl, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        Ll = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, x.jsx)(kl, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        zl = (0, V.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: a = !0,
          sticky: s = "partial",
          ...i
        }, l) => {
          const {
            isOpen: d
          } = Dl(), c = (0, Ce.jt)(), u = Vi(Rl), f = bi(d, {
            delay: d ? 0 : 200,
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            },
            config: Es.stiff,
            immediate: c
          }), p = (0, H.mergeProps)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, i);
          return f(e => (0, x.jsx)(u, {
            ...p,
            style: e,
            ref: l
          }))
        }),
        Ml = (0, V.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, H.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, x.jsx)(Tl, {
            ...r,
            ref: t
          })
        }),
        Al = El;

      function Vl(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var ql = r(77768),
        Fl = r(29044),
        Bl = r(60528),
        Kl = r(20027),
        Hl = ["PageUp", "PageDown"],
        Xl = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Ul = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Gl = "Slider",
        [Wl, Zl, $l] = (0, Kl.N)(Gl),
        [Ql, Yl] = (0, Bi.A)(Gl, [$l]),
        [Jl, ed] = Ql(Gl),
        td = V.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: a = 1,
            orientation: s = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: d = [n],
            value: c,
            onValueChange: u = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: h,
            ...v
          } = e, m = V.useRef(new Set), y = V.useRef(0), g = "horizontal" === s ? od : ad, [b = [], w] = (0, $i.useControllableState)({
            prop: c,
            defaultProp: d,
            onChange: e => {
              const t = [...m.current];
              t[y.current]?.focus(), u(e)
            }
          }), _ = V.useRef(b);

          function P(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = function(e) {
                return (String(e).split(".")[1] || "").length
              }(a),
              i = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / a) * a + n, s),
              d = Vl(i, [n, o]);
            w((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort((e, t) => e - t)
              }(e, d, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map((t, r) => e[r + 1] - t)
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, l * a)) {
                y.current = n.indexOf(d);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, x.jsx)(Jl, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: m.current,
            values: b,
            orientation: s,
            form: h,
            children: (0, x.jsx)(Wl.Provider, {
              scope: e.__scopeSlider,
              children: (0, x.jsx)(Wl.Slot, {
                scope: e.__scopeSlider,
                children: (0, x.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: (0, qi.mK)(v.onPointerDown, () => {
                    i || (_.current = b)
                  }),
                  min: n,
                  max: o,
                  inverted: p,
                  onSlideStart: i ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map(e => Math.abs(e - t)),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(b, e);
                    P(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    P(e, y.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = _.current[y.current];
                    b[y.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !i && P(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !i && P(o, b.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      const r = Hl.includes(e.key) || e.shiftKey && Xl.includes(e.key) ? 10 : 1,
                        n = y.current;
                      P(b[n] + a * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      td.displayName = Gl;
      var [rd, nd] = Ql(Gl, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), od = V.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: a,
          onSlideStart: s,
          onSlideMove: i,
          onSlideEnd: l,
          onStepKeyDown: d,
          ...c
        } = e, [u, f] = V.useState(null), p = (0, Fi.s)(t, e => f(e)), h = V.useRef(void 0), v = (0, ql.jH)(o), m = "ltr" === v, y = m && !a || !m && a;

        function g(e) {
          const t = h.current || u.getBoundingClientRect(),
            o = md([0, t.width], y ? [r, n] : [n, r]);
          return h.current = t, o(e - t.left)
        }
        return (0, x.jsx)(rd, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, x.jsx)(sd, {
            dir: v,
            "data-orientation": "horizontal",
            ...c,
            ref: p,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = g(e.clientX);
              s?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientX);
              i?.(t)
            },
            onSlideEnd: () => {
              h.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = Ul[y ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), ad = V.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: l,
          ...d
        } = e, c = V.useRef(null), u = (0, Fi.s)(t, c), f = V.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = md([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, x.jsx)(rd, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, x.jsx)(sd, {
            "data-orientation": "vertical",
            ...d,
            ref: u,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = h(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = h(e.clientY);
              s?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, i?.()
            },
            onStepKeyDown: e => {
              const t = Ul[p ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), sd = V.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: l,
          ...d
        } = e, c = ed(Gl, r);
        return (0, x.jsx)(Wi.sG.span, {
          ...d,
          ref: t,
          onKeyDown: (0, qi.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : Hl.concat(Xl).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, qi.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, qi.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, qi.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), id = "SliderTrack", ld = V.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = ed(id, r);
        return (0, x.jsx)(Wi.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      ld.displayName = id;
      var dd = "SliderRange",
        cd = V.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = ed(dd, r), a = nd(dd, r), s = V.useRef(null), i = (0, Fi.s)(t, s), l = o.values.length, d = o.values.map(e => vd(e, o.min, o.max)), c = l > 1 ? Math.min(...d) : 0, u = 100 - Math.max(...d);
          return (0, x.jsx)(Wi.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: i,
            style: {
              ...e.style,
              [a.startEdge]: c + "%",
              [a.endEdge]: u + "%"
            }
          })
        });
      cd.displayName = dd;
      var ud = "SliderThumb",
        fd = V.forwardRef((e, t) => {
          const r = Zl(e.__scopeSlider),
            [n, o] = V.useState(null),
            a = (0, Fi.s)(t, e => o(e)),
            s = V.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, x.jsx)(pd, {
            ...e,
            ref: a,
            index: s
          })
        }),
        pd = V.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...a
          } = e, s = ed(ud, r), i = nd(ud, r), [l, d] = V.useState(null), c = (0, Fi.s)(t, e => d(e)), u = !l || s.form || !!l.closest("form"), f = (0, Bl.X)(l), p = s.values[n], h = void 0 === p ? 0 : vd(p, s.min, s.max), v = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), m = f?.[i.size], y = m ? function(e, t, r) {
            const n = e / 2;
            return (n - md([0, 50], [0, n])(t) * r) * r
          }(m, h, i.direction) : 0;
          return V.useEffect(() => {
            if (l) return s.thumbs.add(l), () => {
              s.thumbs.delete(l)
            }
          }, [l, s.thumbs]), (0, x.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${h}% + ${y}px)`
            },
            children: [(0, x.jsx)(Wl.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, x.jsx)(Wi.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || v,
                "aria-valuemin": s.min,
                "aria-valuenow": p,
                "aria-valuemax": s.max,
                "aria-orientation": s.orientation,
                "data-orientation": s.orientation,
                "data-disabled": s.disabled ? "" : void 0,
                tabIndex: s.disabled ? void 0 : 0,
                ...a,
                ref: c,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: (0, qi.mK)(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), u && (0, x.jsx)(hd, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: p
            }, n)]
          })
        });
      fd.displayName = ud;
      var hd = V.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = V.useRef(null),
          a = (0, Fi.s)(o, n),
          s = (0, Fl.Z)(t);
        return V.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (s !== t && n) {
            const r = new Event("input", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [s, t]), (0, x.jsx)(Wi.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: a,
          defaultValue: t
        })
      });

      function vd(e, t, r) {
        return Vl(100 / (r - t) * (e - t), [0, 100])
      }

      function md(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      hd.displayName = "RadioBubbleInput";
      var yd = td,
        gd = ld,
        bd = cd,
        wd = fd,
        _d = r(9145);
      const xd = (0, V.createContext)({
          triggerRef: (0, V.createRef)(),
          triggerBorderRef: (0, V.createRef)(),
          thumbnailRef: (0, V.createRef)(),
          openIconRef: (0, V.createRef)(),
          overlayRef: (0, V.createRef)(),
          contentRef: (0, V.createRef)(),
          containerRef: (0, V.createRef)(),
          imageRef: (0, V.createRef)(),
          placeholderRef: (0, V.createRef)(),
          zoomPanRef: (0, V.createRef)(),
          captionRef: (0, V.createRef)(),
          controlsRef: (0, V.createRef)(),
          closeRef: (0, V.createRef)(),
          zoomRef: (0, V.createRef)(),
          zoomInRef: (0, V.createRef)(),
          zoomSliderRef: (0, V.createRef)(),
          zoomOutRef: (0, V.createRef)(),
          resetRef: (0, V.createRef)(),
          downloadRef: (0, V.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        Pd = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: a = 300,
          zoomLevelStep: s = 100,
          clickAction: i = "close",
          doubleTapAction: l,
          tapAction: d,
          hideTrigger: c = !0,
          ...u
        }) => {
          const f = (0, Oe.Ym)(),
            p = (0, Ce.rl)(),
            h = (0, V.useRef)(null),
            v = (0, V.useRef)(null),
            m = (0, V.useRef)(null),
            y = (0, V.useRef)(null),
            g = (0, V.useRef)(null),
            b = (0, V.useRef)(null),
            w = (0, V.useRef)(null),
            _ = (0, V.useRef)(null),
            P = (0, V.useRef)(null),
            C = (0, V.useRef)(null),
            j = (0, V.useRef)(null),
            O = (0, V.useRef)(null),
            S = (0, V.useRef)(null),
            k = (0, V.useRef)(null),
            E = (0, V.useRef)(null),
            R = (0, V.useRef)(null),
            T = (0, V.useRef)(null),
            N = (0, V.useRef)(null),
            D = (0, V.useRef)(null),
            [I = !1, L] = (0, Ce.ic)({
              prop: t || n,
              onChange: r
            }),
            z = (0, V.useRef)(null);
          return z.current || (z.current = new to({
            width: 0,
            height: 0,
            zoomLevelOptions: {
              max: a,
              min: o,
              step: s
            },
            actionOptions: {
              click: i,
              tap: d || p ? "toggle-controls" : "close",
              doubleTap: l || p ? "zoom" : "none"
            }
          })), (0, x.jsx)(Hn, {
            messages: Xn,
            locale: f,
            children: (0, x.jsx)(xd.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: v,
                thumbnailRef: m,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: _,
                imageRef: P,
                placeholderRef: C,
                captionRef: j,
                controlsRef: O,
                closeRef: S,
                zoomRef: k,
                zoomInRef: E,
                zoomSliderRef: R,
                zoomOutRef: T,
                resetRef: N,
                downloadRef: D,
                open: I,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: z.current
              },
              children: (0, x.jsx)(jd, {
                ...u
              })
            })
          })
        },
        Cd = (0, V.createContext)({
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
        jd = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, V.useContext)(xd), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = Qt(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: a,
              triggerRef: s,
              triggerBorderRef: i,
              thumbnailRef: l,
              containerRef: d,
              zoomPanRef: c,
              placeholderRef: u,
              imageRef: f
            } = (0, V.useContext)(xd), p = (0, V.useRef)(null);
            p.current || (p.current = Ht.gsap.timeline({
              defaults: An
            }));
            const h = (0, V.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const t = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of t)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              v = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), l.current && i.current && (t.opening = !0, t.setup(i.current, l.current), t.zoomAndPanToInitial(), Ht.gsap.set([u.current, f.current], {
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
                }), Ht.gsap.set([f.current], {
                  visibility: "hidden"
                }), await t.opener.loadPlaceholder(u.current), p.current.clear(), u.current && (p.current.to([u.current, f.current], {
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
                }), p.current.to([c.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), p.current.to([d.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), n && p.current.to([s.current, i.current], {
                  opacity: 0,
                  duration: 0
                }), p.current.to([u.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  duration: 0
                }), p.current.fromTo([d.current], {
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
                }, 0), p.current.fromTo([u.current, f.current], {
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
                }, 0), p.current.fromTo([c.current], {
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
                }, 0), p.current.fromTo([o.current], {
                  opacity: 0
                }, {
                  opacity: () => t.getOverlayOpacity(),
                  data: {
                    invalidate: !0
                  }
                }, 0), p.current.fromTo([a.current], {
                  opacity: 0,
                  [qn]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [qn]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await an(f.current), t.closing || (Ht.gsap.set([f.current], {
                  visibility: "visible",
                  ...Vn
                }), Ht.gsap.set([u.current], {
                  visibility: "hidden",
                  ...Vn
                }))))
              }),
              m = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              y = (0, V.useCallback)(async e => {
                e || (window.addEventListener("click", h), await m(), window.removeEventListener("click", h)), r(e)
              }, [r]),
              g = (0, V.useCallback)(() => y(!1), [y]);
            return {
              onOpenChange: y,
              openAnim: v,
              close: g
            }
          })(), {
            update: a,
            zoomIn: s,
            zoomOut: i,
            zoomTo: l,
            resetZoom: d,
            toggleControls: c
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = Qt(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, V.useContext)(xd), l = t(async e => {
              r.zoomTo(e), Ht.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Vn
              })
            }), d = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), Ht.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Vn
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), Ht.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Vn
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), Ht.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Vn
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              Ht.gsap.to([a.current], {
                opacity: e,
                [qn]: t,
                ...Vn
              })
            }), p = t(async () => {
              Ht.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Vn
              })
            }), h = (0, V.useCallback)(() => {
              n.current && o.current && (r.resize(), Ht.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Vn
              }), Ht.gsap.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...Vn
              }), Ht.gsap.set([s.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }, []);
            return (0, V.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), window.addEventListener("resize", h), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", p), r.removeEventListener("toggle-controls", f), window.removeEventListener("resize", h)
            }), []), {
              zoomIn: d,
              zoomOut: c,
              zoomTo: l,
              resetZoom: u,
              toggleControls: f,
              update: p
            }
          })({
            close: o
          }), u = (0, H.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, x.jsx)(Cd.Provider, {
            value: {
              update: a,
              openAnim: n,
              close: o,
              zoomIn: s,
              zoomOut: i,
              zoomTo: l,
              resetZoom: d,
              toggleControls: c,
              onOpenChange: r
            },
            children: (0, x.jsx)(_d.Root, {
              ...u
            })
          })
        },
        Od = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, Kn.A)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, V.useContext)(xd),
            l = (0, Ce.UP)(a, n),
            d = (0, H.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(no.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, x.jsx)(_d.Trigger, {
            ref: l,
            ...d,
            children: (0, x.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, x.jsx)(je.xV, {
                children: t
              })
            })
          })
        }),
        Sd = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, V.useContext)(xd), a = (0, Ce.UP)(o, n), s = (0, H.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? je.DX : "img";
          return (0, x.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        kd = (0, V.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, V.useContext)(xd), o = (0, Ce.UP)(n, r), a = (0, H.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? je.DX : Ve.Maximize2;
          return (0, x.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        Ed = ({
          ...e
        }) => (0, x.jsx)(_d.Portal, {
          ...e
        }),
        Rd = (0, V.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, V.useContext)(xd), o = (0, Ce.UP)(n, r), a = (0, H.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, x.jsx)(_d.Overlay, {
            ref: o,
            ...a
          })
        }),
        Td = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, V.useContext)(Cd), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, V.useContext)(xd), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, V.useContext)(xd), [t, r] = (0, V.useState)(e.getCursor()), n = (0, V.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, V.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), d = (0, ro.m)("dark"), c = (0, Ce.UP)(a, n), u = (0, H.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, Ae.clsx)("foundry_1a74xwb9", d),
            style: {
              cursor: l
            }
          });
          return (0, x.jsxs)(_d.Content, {
            ref: c,
            ...u,
            children: [(0, x.jsx)(je.s6, {
              children: (0, x.jsx)(_d.Title, {
                children: s
              })
            }), t]
          })
        }),
        Nd = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, V.useContext)(xd);
          (() => {
            const {
              contextSafe: e
            } = Qt(), {
              toggleControls: t
            } = (0, V.useContext)(Cd), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, V.useContext)(xd), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (Ht.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...Vn
              }), Ht.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Vn
              }), Ht.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...Vn
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || Ht.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...Vn
              }))
            }), d = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (Ht.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...Vn
              }), Ht.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Vn
              }), Ht.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...Vn
              })))
            }), c = (0, V.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, Ce.iQ)({
              ref: a,
              onFocusIn: c
            }), on({
              onWheel: l,
              onDrag: i,
              onPinch: d
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
          const a = (0, Ce.UP)(o, n),
            s = (0, H.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, x.jsx)("div", {
            ref: a,
            ...s,
            children: (0, x.jsxs)(Dd, {
              children: [(0, x.jsx)(Id, {}), t]
            })
          })
        }),
        Dd = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, V.useContext)(xd), a = (0, Ce.UP)(o, n), s = (0, H.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? je.DX : "div";
          return (0, x.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Id = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, V.useContext)(xd), a = (0, Ce.UP)(o, n), s = (0, H.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? je.DX : "img";
          return (0, x.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ld = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, V.useContext)(xd), a = (0, Ce.UP)(o, n), s = (0, H.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? je.DX : "img";
          return (0, x.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        zd = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, V.useContext)(xd), a = (0, Ce.UP)(o, n), s = (0, H.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), i = t ? je.DX : "p";
          return (0, x.jsx)(_d.Description, {
            asChild: !0,
            children: (0, x.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Md = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, V.useContext)(xd);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, V.useContext)(Cd);
            En(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), En(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), En("r", n, {
              enabled: e,
              preventDefault: !0
            }), En("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, Ce.UP)(o, n),
            s = (0, H.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? je.DX : "div";
          return (0, x.jsx)(On, {
            children: (0, x.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Ad = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, x.jsx)(x.Fragment, {
            children: n
          });
          const a = (0, H.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, x.jsxs)(Il, {
            delayDuration: 0,
            children: [(0, x.jsx)(Ll, {
              children: n
            }), (0, x.jsxs)(zl, {
              ...a,
              children: [(0, x.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, x.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, x.jsx)(Ml, {})]
            })]
          })
        },
        Vd = (0, V.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, H.mergeProps)(e, {
            isInline: !0
          });
          return (0, x.jsx)(ao, {
            ref: t,
            ...r
          })
        }),
        qd = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const s = (0, Kn.A)(),
            {
              zoomRef: i
            } = (0, V.useContext)(xd),
            {
              canZoomIn: l,
              zoomIn: d,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: h,
              zoomTo: v
            } = (() => {
              const {
                slide: e
              } = (0, V.useContext)(xd), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, V.useContext)(Cd), [o, a] = (0, V.useState)(!1), [s, i] = (0, V.useState)(!1), [l, d] = (0, V.useState)(0), [c, u] = (0, V.useState)(0), [f, p] = (0, V.useState)(0), h = (0, V.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), d(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), v = (0, V.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, V.useEffect)(() => (e.addEventListener("zoom", h), () => {
                e.removeEventListener("zoom", h)
              }), [h]), {
                zoomTo: v,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: s,
                zoomProgress: l,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            m = (0, Ce.UP)(i, a),
            y = (0, H.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? je.DX : "div";
          return (0, x.jsxs)(g, {
            ref: m,
            ...y,
            children: [(0, x.jsx)(Ad, {
              side: "left",
              enabled: r,
              content: s.formatMessage(no.ZoomInButtonLabel),
              metadata: s.formatMessage(no.ZoomInButtonTooltip, {
                shortcut: (0, x.jsx)(Vd, {
                  shortcut: "+"
                })
              }),
              children: (0, x.jsx)(it, {
                label: s.formatMessage(no.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Mn({
                  position: "top"
                }),
                onPress: d,
                isDisabled: !l
              })
            }), (0, x.jsxs)(yd, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: v,
              children: [(0, x.jsx)(gd, {
                className: "foundry_1a74xwbu",
                children: (0, x.jsx)(bd, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, x.jsx)(Ad, {
                side: "left",
                enabled: r,
                content: s.formatMessage(no.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, x.jsx)(wd, {
                  className: "foundry_1a74xwbw",
                  children: (0, x.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, x.jsx)(Ad, {
              side: "left",
              enabled: r,
              content: s.formatMessage(no.ZoomOutButtonLabel),
              metadata: s.formatMessage(no.ZoomOutButtonTooltip, {
                shortcut: (0, x.jsx)(Vd, {
                  shortcut: "-"
                })
              }),
              children: (0, x.jsx)(it, {
                label: s.formatMessage(no.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Mn({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, x.jsx)(je.xV, {
              children: n
            })]
          })
        }),
        Fd = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = (0, Kn.A)(),
            {
              closeRef: s
            } = (0, V.useContext)(xd),
            i = (0, Ce.UP)(s, o),
            l = (0, H.mergeProps)(n, {
              "data-testid": e,
              className: zn({
                styled: !t
              })
            }),
            d = t ? (0, x.jsx)(je.DX, {
              ref: i,
              ...l
            }) : (0, x.jsx)(it, {
              ref: i,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(no.CloseButtonLabel)
            });
          return (0, x.jsx)(Ad, {
            side: "right",
            enabled: r,
            content: a.formatMessage(no.CloseButtonLabel),
            metadata: a.formatMessage(no.CloseButtonTooltip, {
              shortcut: (0, x.jsx)(Vd, {
                shortcut: "Esc"
              })
            }),
            children: (0, x.jsx)(_d.Close, {
              asChild: !0,
              children: d
            })
          })
        }),
        Bd = (0, V.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Kn.A)(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, V.useContext)(xd), {
                contextSafe: r
              } = Qt(), {
                resetZoom: n
              } = (0, V.useContext)(Cd), [o, a] = (0, V.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                Ht.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Vn
                })
              }), i = (0, V.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), s(t)
              }, [a]);
              return (0, V.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, V.useContext)(xd),
            i = (0, Ce.UP)(s, n),
            l = (0, H.mergeProps)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, x.jsx)(Ad, {
            side: "left",
            enabled: t,
            content: o.formatMessage(no.ResetZoomButtonLabel),
            metadata: o.formatMessage(no.ResetZoomButtonTooltip, {
              shortcut: (0, x.jsx)(Vd, {
                shortcut: "R"
              })
            }),
            children: (0, x.jsx)(it, {
              ref: i,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(no.ResetZoomButtonLabel)
            })
          })
        }),
        Kd = (0, V.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Kn.A)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, V.useContext)(xd),
            i = (0, Ce.UP)(a, n),
            l = (0, H.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, x.jsx)(Ad, {
            side: "left",
            enabled: t,
            content: o.formatMessage(no.DownloadButtonTooltip),
            children: (0, x.jsx)(it, {
              ref: i,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(no.DownloadButtonTooltip),
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
              })(s.current)
            })
          })
        }),
        Hd = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        },
        Xd = "undefined" != typeof document ? V.useLayoutEffect : () => {},
        Ud = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Gd = e => e && "window" in e && e.window === e ? e : Ud(e).defaultView || window;

      function Wd(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
      const Zd = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function $d(e, t) {
        return Zd ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = Gd(e);
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
        }(e, t) && (!e.parentElement || $d(e.parentElement, e))
      }
      const Qd = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        Yd = Qd.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Qd.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const Jd = Qd.join(':not([hidden]):not([tabindex="-1"]),');

      function ec(e) {
        return e.matches(Yd) && $d(e) && !rc(e)
      }

      function tc(e) {
        return e.matches(Jd) && $d(e) && !rc(e)
      }

      function rc(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }

      function nc(e) {
        if (function() {
            if (null == oc) {
              oc = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return oc = !0, !0
                  }
                })
              } catch {}
            }
            return oc
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
      let oc = null;

      function ac(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function sc(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function ic(e) {
        let t = (0, V.useRef)({
          isFocused: !1,
          observer: null
        });
        return Xd(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []), (0, V.useCallback)(r => {
          if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = r.target,
              o = r => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = ac(r);
                  null == e || e(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            n.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver(() => {
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
            }), t.current.observer.observe(n, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }, [e])
      }
      let lc = !1;

      function dc(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let r = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(r) && r.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function cc(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function uc(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const fc = uc(function() {
          return cc(/^Mac/i)
        }),
        pc = uc(function() {
          return cc(/^iPhone/i)
        }),
        hc = uc(function() {
          return cc(/^iPad/i) || fc() && navigator.maxTouchPoints > 1
        }),
        vc = uc(function() {
          return pc() || hc()
        }),
        mc = (uc(function() {
          return fc() || vc()
        }), uc(function() {
          return dc(/AppleWebKit/i) && !yc()
        })),
        yc = uc(function() {
          return dc(/Chrome/i)
        }),
        gc = uc(function() {
          return dc(/Android/i)
        }),
        bc = uc(function() {
          return dc(/Firefox/i)
        });
      let wc = new Map,
        _c = new Set;

      function xc() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = wc.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), wc.delete(r.target)), 0 === wc.size)) {
            for (let e of _c) e();
            _c.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = wc.get(r.target);
          n || (n = new Set, wc.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function Pc(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of wc) "isConnected" in e && !e.isConnected && wc.delete(e)
          }(), 0 === wc.size ? e() : _c.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? xc() : document.addEventListener("DOMContentLoaded", xc));
      let Cc = "default",
        jc = "",
        Oc = new WeakMap;

      function Sc(e) {
        if (vc()) {
          if ("disabled" !== Cc) return;
          Cc = "restoring", setTimeout(() => {
            Pc(() => {
              if ("restoring" === Cc) {
                const t = Ud(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = jc || ""), jc = "", Cc = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Oc.has(e)) {
          let t = Oc.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Oc.delete(e)
        }
      }
      const kc = V.createContext({
        register: () => {}
      });
      kc.displayName = "PressResponderContext";
      var Ec = r(88842),
        Rc = r(57178),
        Tc = r(72562);

      function Nc(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const Dc = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Ic = V.createContext(Dc),
        Lc = V.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let zc = new WeakMap;
      const Mc = "function" == typeof V.useId ? function(e) {
        let t = V.useId(),
          [r] = (0, V.useState)(Fc());
        return e || `${r?"react-aria":`react-aria${Dc.prefix}`}-${t}`
      } : function(e) {
        let t = (0, V.useContext)(Ic),
          r = function(e = !1) {
            let t = (0, V.useContext)(Ic),
              r = (0, V.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = zc.get(e);
                null == r ? zc.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, zc.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function Ac() {
        return !1
      }

      function Vc() {
        return !0
      }

      function qc(e) {
        return () => {}
      }

      function Fc() {
        return "function" == typeof V.useSyncExternalStore ? V.useSyncExternalStore(qc, Ac, Vc) : (0, V.useContext)(Lc)
      }
      let Bc, Kc = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Hc = new Map;

      function Xc(e) {
        let [t, r] = (0, V.useState)(e), n = (0, V.useRef)(null), o = Mc(t), a = (0, V.useRef)(null);
        if (Bc && Bc.register(a, o), Kc) {
          const e = Hc.get(o);
          e && !e.includes(n) ? e.push(n) : Hc.set(o, [n])
        }
        return Xd(() => {
          let e = o;
          return () => {
            Bc && Bc.unregister(a), Hc.delete(e)
          }
        }, [o]), (0, V.useEffect)(() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        }), o
      }

      function Uc(e, t) {
        if (e === t) return e;
        let r = Hc.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = Hc.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function Gc(e = []) {
        let t = Xc(),
          [r, n] = function(e) {
            let [t, r] = (0, V.useState)(e), n = (0, V.useRef)(t), o = (0, V.useRef)(null), a = (0, V.useRef)(() => {
              if (!o.current) return;
              let e = o.current.next();
              e.done ? o.current = null : n.current === e.value ? a.current() : r(e.value)
            });
            Xd(() => {
              n.current = t, o.current && a.current()
            });
            let s = (0, V.useCallback)(e => {
              o.current = e(n.current), a.current()
            }, [a]);
            return [t, s]
          }(t),
          o = (0, V.useCallback)(() => {
            n(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, n]);
        return Xd(o, [t, o, ...e]), r
      }

      function Wc(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
          let r = !1;
          const n = e.map(e => {
            const n = Zc(e, t);
            return r || (r = "function" == typeof n), n
          });
          if (r) return () => {
            n.forEach((t, r) => {
              "function" == typeof t ? t() : Zc(e[r], null)
            })
          }
        }
      }

      function Zc(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function $c(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Nc(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Uc(r, o) : "ref" === e && r && o ? t.ref = Wc(r, o) : t[e] = void 0 !== o ? o : r : t[e] = Ae(r, o)
          }
        }
        return t
      }

      function Qc(e, t) {
        Xd(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }

      function Yc() {
        let e = (0, V.useRef)(new Map),
          t = (0, V.useCallback)((t, r, n, o) => {
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
          r = (0, V.useCallback)((t, r, n, o) => {
            var a;
            let s = (null === (a = e.current.get(n)) || void 0 === a ? void 0 : a.fn) || n;
            t.removeEventListener(r, s, o), e.current.delete(n)
          }, []),
          n = (0, V.useCallback)(() => {
            e.current.forEach((e, t) => {
              r(e.eventTarget, e.type, t, e.options)
            })
          }, [r]);
        return (0, V.useEffect)(() => n, [n]), {
          addGlobalListener: t,
          removeGlobalListener: r,
          removeAllGlobalListeners: n
        }
      }
      var Jc;
      "undefined" != typeof FinalizationRegistry && (Bc = new FinalizationRegistry(e => {
        Hc.delete(e)
      }));
      const eu = null !== (Jc = V.useInsertionEffect) && void 0 !== Jc ? Jc : Xd;

      function tu(e) {
        const t = (0, V.useRef)(null);
        return eu(() => {
          t.current = e
        }, [e]), (0, V.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      var ru = r(35412);

      function nu(e, t) {
        if (!(0, ru.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let r = t;
        for (; null !== r;) {
          if (r === e) return !0;
          r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : Wd(r) ? r.host : r.parentNode
        }
        return !1
      }
      const ou = (e = document) => {
        var t;
        if (!(0, ru.Nf)()) return e.activeElement;
        let r = e.activeElement;
        for (; r && "shadowRoot" in r && (null === (t = r.shadowRoot) || void 0 === t ? void 0 : t.activeElement);) r = r.shadowRoot.activeElement;
        return r
      };

      function au(e) {
        return (0, ru.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }
      const su = (0, V.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, e => lu(e, t))
        },
        useHref: e => e
      });

      function iu() {
        return (0, V.useContext)(su)
      }

      function lu(e, t, r = !0) {
        var n, o;
        let {
          metaKey: a,
          ctrlKey: s,
          altKey: i,
          shiftKey: l
        } = t;
        bc() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (fc() ? a = !0 : s = !0);
        let d = mc() && fc() && !hc() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: s,
          altKey: i,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: s,
          altKey: i,
          shiftKey: l,
          detail: 1,
          bubbles: !0,
          cancelable: !0
        });
        lu.isOpening = r, nc(e), e.dispatchEvent(d), lu.isOpening = !1
      }

      function du(e) {
        var t;
        const r = iu().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function cu(e, t, r, n) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let r = e.getAttribute("target");
          return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && r && (e.preventDefault(), t.open(e.currentTarget, e, r, n))
      }

      function uu(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (gc() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      lu.isOpening = !1;
      var fu = new WeakMap;
      class pu {
        continuePropagation() {
          (0, Tc._)(this, fu, !1)
        }
        get shouldStopPropagation() {
          return (0, Ec._)(this, fu)
        }
        constructor(e, t, r, n) {
          var o;
          (0, Rc._)(this, fu, {
            writable: !0,
            value: void 0
          }), (0, Tc._)(this, fu, !0);
          let a = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const s = null == a ? void 0 : a.getBoundingClientRect();
          let i, l, d = 0,
            c = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, c = r.clientY), s && (null != l && null != c ? (i = l - s.left, d = c - s.top) : (i = s.width / 2, d = s.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = i, this.y = d, this.key = r.key
        }
      }
      const hu = Symbol("linkClicked"),
        vu = "react-aria-pressable-style",
        mu = "data-react-aria-pressable";

      function yu(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: a,
          onClick: s,
          isDisabled: i,
          isPressed: l,
          preventFocusOnPress: d,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: u,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, V.useContext)(kc);
          if (t) {
            let {
              register: r,
              ref: n,
              ...o
            } = t;
            e = $c(o, e), r()
          }
          return Qc(t, e.ref), e
        }(e), [h, v] = (0, V.useState)(!1), m = (0, V.useRef)({
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
          removeAllGlobalListeners: g,
          removeGlobalListener: b
        } = Yc(), w = (0, V.useCallback)((e, t) => {
          let o = m.current;
          if (i || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new pu("pressstart", t, e);
            n(r), a = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, v(!0), a
        }, [i, n, r]), _ = (0, V.useCallback)((e, n, a = !0) => {
          let s = m.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new pu("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), v(!1), t && a && !i) {
            let r = new pu("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        }, [i, o, r, t]), x = tu(_), P = (0, V.useCallback)((e, t) => {
          let r = m.current;
          if (i) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let n = new pu("pressup", t, e);
            return a(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }, [i, a]), C = tu(P), j = (0, V.useCallback)(e => {
          let t = m.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(wu(t.target, e), t.pointerType, !1), t.isPressed = !1, I(null), t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), u || Sc(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [u, g, _]), O = tu(j), S = (0, V.useCallback)(e => {
          c && j(e)
        }, [c, j]), k = (0, V.useCallback)(e => {
          i || null == s || s(e)
        }, [i, s]), E = (0, V.useCallback)((e, t) => {
          if (!i && s) {
            let r = new MouseEvent("click", e);
            sc(r, t), s(ac(r))
          }
        }, [i, s]), R = tu(E), [T, N] = (0, V.useState)(!1);
        Xd(() => {
          let e = m.current;
          if (T) {
            let t = t => {
                var r;
                if (e.isPressed && e.target && bu(t, e.target)) {
                  var n;
                  _u(au(t), t.key) && t.preventDefault();
                  let r = au(t),
                    o = nu(e.target, au(t));
                  x(wu(e.target, t), "keyboard", o), o && R(t, e.target), g(), "Enter" !== t.key && gu(e.target) && nu(e.target, r) && !t[hu] && (t[hu] = !0, lu(e.target, t, !1)), e.isPressed = !1, N(!1), null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
                } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                  var o;
                  let t = e.metaKeyEvents;
                  e.metaKeyEvents = void 0;
                  for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
                }
              },
              r = e.target,
              n = t => {
                r && bu(t, r) && !t.repeat && nu(r, au(t)) && e.target && C(wu(e.target, t), "keyboard")
              },
              o = Nc(n, t);
            return y(Ud(e.target), "keyup", o, !0), () => {
              b(Ud(e.target), "keyup", o, !0)
            }
          }
        }, [T, y, g, b]);
        let [D, I] = (0, V.useState)(null);
        Xd(() => {
          let e = m.current;
          if ("pointer" === D) {
            let t = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (nu(e.target, au(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? O(t) : (nc(e.target), e.target.click()))
                      }, 80);
                    y(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else O(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                O(e)
              };
            return y(Ud(e.target), "pointerup", t, !1), y(Ud(e.target), "pointercancel", r, !1), () => {
              b(Ud(e.target), "pointerup", t, !1), b(Ud(e.target), "pointercancel", r, !1)
            }
          }
        }, [D, y, b]);
        let L = (0, V.useMemo)(() => {
          let e = m.current,
            t = {
              onKeyDown(t) {
                if (bu(t.nativeEvent, t.currentTarget) && nu(t.currentTarget, au(t.nativeEvent))) {
                  var r;
                  _u(au(t.nativeEvent), t.key) && t.preventDefault();
                  let n = !0;
                  e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, N(!0), e.pointerType = "keyboard", n = w(t, "keyboard")), n && t.stopPropagation(), t.metaKey && fc() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || nu(t.currentTarget, au(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !lu.isOpening) {
                  let r = !0;
                  if (i && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !uu(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = P(wu(t.currentTarget, t), n),
                        a = _(wu(t.currentTarget, t), n, !0);
                      r = o && a, e.isOverTarget = !1, k(t), j(t)
                    }
                  } else {
                    let e = w(t, "virtual"),
                      n = P(t, "virtual"),
                      o = _(t, "virtual");
                    k(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            };
          return "undefined" != typeof PointerEvent && (t.onPointerDown = t => {
            if (0 !== t.button || !nu(t.currentTarget, au(t.nativeEvent))) return;
            if (r = t.nativeEvent, !gc() && 0 === r.width && 0 === r.height || 1 === r.width && 1 === r.height && 0 === r.pressure && 0 === r.detail && "mouse" === r.pointerType) return void(e.pointerType = "virtual");
            var r;
            e.pointerType = t.pointerType;
            let n = !0;
            if (!e.isPressed) {
              e.isPressed = !0, I("pointer"), e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, u || function(e) {
                if (vc()) {
                  if ("default" === Cc) {
                    const t = Ud(e);
                    jc = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                  }
                  Cc = "disabled"
                } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                  let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                  Oc.set(e, e.style[t]), e.style[t] = "none"
                }
              }(e.target), n = w(t, e.pointerType);
              let r = au(t.nativeEvent);
              "releasePointerCapture" in r && ("hasPointerCapture" in r ? r.hasPointerCapture(t.pointerId) && r.releasePointerCapture(t.pointerId) : r.releasePointerCapture(t.pointerId))
            }
            n && t.stopPropagation()
          }, t.onMouseDown = t => {
            if (nu(t.currentTarget, au(t.nativeEvent)) && 0 === t.button) {
              if (d) {
                let r = function(e) {
                  for (; e && !ec(e);) e = e.parentElement;
                  let t = Gd(e),
                    r = t.document.activeElement;
                  if (!r || r === e) return;
                  lc = !0;
                  let n = !1,
                    o = e => {
                      (e.target === r || n) && e.stopImmediatePropagation()
                    },
                    a = t => {
                      (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, nc(r), l()))
                    },
                    s = t => {
                      (t.target === e || n) && t.stopImmediatePropagation()
                    },
                    i = t => {
                      (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, nc(r), l()))
                    };
                  t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", i, !0), t.addEventListener("focus", s, !0);
                  let l = () => {
                      cancelAnimationFrame(d), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", i, !0), t.removeEventListener("focus", s, !0), lc = !1, n = !1
                    },
                    d = requestAnimationFrame(l);
                  return l
                }(t.target);
                r && e.disposables.push(r)
              }
              t.stopPropagation()
            }
          }, t.onPointerUp = t => {
            nu(t.currentTarget, au(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || P(t, e.pointerType || t.pointerType))
          }, t.onPointerEnter = t => {
            t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, w(wu(e.target, t), e.pointerType))
          }, t.onPointerLeave = t => {
            t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(wu(e.target, t), e.pointerType, !1), S(t))
          }, t.onDragStart = e => {
            nu(e.currentTarget, au(e.nativeEvent)) && j(e)
          }), t
        }, [i, d, g, u, j, S, _, w, P, k, E]);
        return (0, V.useEffect)(() => {
          if (!f) return;
          const e = Ud(f.current);
          if (!e || !e.head || e.getElementById(vu)) return;
          const t = e.createElement("style");
          t.id = vu, t.textContent = `\n@layer {\n  [${mu}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, V.useEffect)(() => {
          let e = m.current;
          return () => {
            var t;
            u || Sc(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [u]), {
          isPressed: l || h,
          pressProps: $c(p, L, {
            [mu]: !0
          })
        }
      }

      function gu(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function bu(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Gd(o).HTMLInputElement && !Pu(o, r) || o instanceof Gd(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && gu(o)) && "Enter" !== r)
      }

      function wu(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n,
          key: t.key
        }
      }

      function _u(e, t) {
        return e instanceof HTMLInputElement ? !Pu(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : gu(e)))
        }(e)
      }
      const xu = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Pu(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : xu.has(e.type)
      }

      function Cu(e) {
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

      function ju(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ou(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ju(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Cu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ju(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Su(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ku = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Eu = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ou(Ou({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) ku(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Su(e.variantClassNames, e => Su(e, e => e.split(" ")[0]))
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
      const Ru = (0, V.createContext)(null);

      function Tu() {
        const e = (0, V.useContext)(Ru);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Nu = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const l = (0, H.mergeProps)({
              className: Eu({
                status: a
              }),
              "data-testid": t
            }, s),
            d = r ? je.DX : "div";
          return (0, x.jsx)(Ru.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: a,
              ...s
            },
            children: (0, x.jsx)(d, {
              ...l,
              ref: i,
              children: e
            })
          })
        }),
        Du = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Tu(), a = (0, H.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: Ve.Check,
            invalid: Ve.X,
            neutral: Ve.TriangleAlert
          }, i = t ? je.DX : s[o];
          return (0, x.jsx)(i, {
            ref: n,
            ...a
          })
        }),
        Iu = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: s
          } = Tu(), i = (0, H.mergeProps)({
            "data-testid": t,
            id: s || a
          }, n), l = r ? je.DX : "div";
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        });
      var Lu = r(76286),
        zu = r(63155),
        Mu = "ScrollArea",
        [Au, Vu] = (0, Bi.A)(Mu),
        [qu, Fu] = Au(Mu),
        Bu = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, l] = V.useState(null), [d, c] = V.useState(null), [u, f] = V.useState(null), [p, h] = V.useState(null), [v, m] = V.useState(null), [y, g] = V.useState(0), [b, w] = V.useState(0), [_, P] = V.useState(!1), [C, j] = V.useState(!1), O = (0, Fi.s)(t, e => l(e)), S = (0, ql.jH)(o);
          return (0, x.jsx)(qu, {
            scope: r,
            type: n,
            dir: S,
            scrollHideDelay: a,
            scrollArea: i,
            viewport: d,
            onViewportChange: c,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: h,
            scrollbarXEnabled: _,
            onScrollbarXEnabledChange: P,
            scrollbarY: v,
            onScrollbarYChange: m,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, x.jsx)(Wi.sG.div, {
              dir: S,
              ...s,
              ref: O,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        });
      Bu.displayName = Mu;
      var Ku = "ScrollAreaViewport",
        Hu = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = Fu(Ku, r), i = V.useRef(null), l = (0, Fi.s)(t, i, s.onViewportChange);
          return (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, x.jsx)(Wi.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: l,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, x.jsx)("div", {
                ref: s.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        });
      Hu.displayName = Ku;
      var Xu = "ScrollAreaScrollbar",
        Uu = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Fu(Xu, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return V.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, x.jsx)(Gu, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, x.jsx)(Wu, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, x.jsx)(Zu, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, x.jsx)($u, {
            ...n,
            ref: t
          }) : null
        });
      Uu.displayName = Xu;
      var Gu = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Fu(Xu, e.__scopeScrollArea), [a, s] = V.useState(!1);
          return V.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), s(!0)
                },
                n = () => {
                  t = window.setTimeout(() => s(!1), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, x.jsx)(Gi.C, {
            present: r || a,
            children: (0, x.jsx)(Zu, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Wu = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Fu(Xu, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = vf(() => l("SCROLL_END"), 100), [i, l] = (d = {
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
          }, V.useReducer((e, t) => d[e][t] ?? e, "hidden"));
          var d;
          return V.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, l]), V.useEffect(() => {
            const e = o.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (l("SCROLL"), s()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, a, l, s]), (0, x.jsx)(Gi.C, {
            present: r || "hidden" !== i,
            children: (0, x.jsx)($u, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, qi.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, qi.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        Zu = V.forwardRef((e, t) => {
          const r = Fu(Xu, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = V.useState(!1),
            i = "horizontal" === e.orientation,
            l = vf(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return mf(r.viewport, l), mf(r.content, l), (0, x.jsx)(Gi.C, {
            present: n || a,
            children: (0, x.jsx)($u, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        $u = V.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Fu(Xu, e.__scopeScrollArea), a = V.useRef(null), s = V.useRef(0), [i, l] = V.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = df(i.viewport, i.content), c = {
            ...n,
            sizes: i,
            onSizesChange: l,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function u(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = cf(r),
                a = t || o / 2,
                s = o - a,
                i = r.scrollbar.paddingStart + a,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                d = r.content - r.viewport;
              return ff([i, l], "ltr" === n ? [0, d] : [-1 * d, 0])(e)
            }(e, s.current, i, t)
          }
          return "horizontal" === r ? (0, x.jsx)(Qu, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = uf(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, x.jsx)(Yu, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = uf(o.viewport.scrollTop, i);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = u(e))
            }
          }) : null
        }),
        Qu = V.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Fu(Xu, e.__scopeScrollArea), [s, i] = V.useState(), l = V.useRef(null), d = (0, Fi.s)(t, l, a.onScrollbarXChange);
          return V.useEffect(() => {
            l.current && i(getComputedStyle(l.current))
          }, [l]), (0, x.jsx)(tf, {
            "data-orientation": "horizontal",
            ...o,
            ref: d,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": cf(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), pf(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: lf(s.paddingLeft),
                  paddingEnd: lf(s.paddingRight)
                }
              })
            }
          })
        }),
        Yu = V.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Fu(Xu, e.__scopeScrollArea), [s, i] = V.useState(), l = V.useRef(null), d = (0, Fi.s)(t, l, a.onScrollbarYChange);
          return V.useEffect(() => {
            l.current && i(getComputedStyle(l.current))
          }, [l]), (0, x.jsx)(tf, {
            "data-orientation": "vertical",
            ...o,
            ref: d,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": cf(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), pf(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: lf(s.paddingTop),
                  paddingEnd: lf(s.paddingBottom)
                }
              })
            }
          })
        }),
        [Ju, ef] = Au(Xu),
        tf = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: s,
            onThumbPointerDown: i,
            onThumbPositionChange: l,
            onDragScroll: d,
            onWheelScroll: c,
            onResize: u,
            ...f
          } = e, p = Fu(Xu, r), [h, v] = V.useState(null), m = (0, Fi.s)(t, e => v(e)), y = V.useRef(null), g = V.useRef(""), b = p.viewport, w = n.content - n.viewport, _ = (0, Lu.c)(c), P = (0, Lu.c)(l), C = vf(u, 10);

          function j(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              d({
                x: t,
                y: r
              })
            }
          }
          return V.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = h?.contains(t);
              r && _(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, h, w, _]), V.useEffect(P, [n, P]), mf(h, C), mf(p.content, C), (0, x.jsx)(Ju, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, Lu.c)(a),
            onThumbPointerUp: (0, Lu.c)(s),
            onThumbPositionChange: P,
            onThumbPointerDown: (0, Lu.c)(i),
            children: (0, x.jsx)(Wi.sG.div, {
              ...f,
              ref: m,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, qi.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, qi.mK)(e.onPointerMove, j),
              onPointerUp: (0, qi.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        rf = "ScrollAreaThumb",
        nf = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ef(rf, e.__scopeScrollArea);
          return (0, x.jsx)(Gi.C, {
            present: r || o.hasThumb,
            children: (0, x.jsx)(of, {
              ref: t,
              ...n
            })
          })
        }),
        of = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = Fu(rf, r), s = ef(rf, r), {
            onThumbPositionChange: i
          } = s, l = (0, Fi.s)(t, e => s.onThumbChange(e)), d = V.useRef(void 0), c = vf(() => {
            d.current && (d.current(), d.current = void 0)
          }, 100);
          return V.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (c(), !d.current) {
                  const t = hf(e, i);
                  d.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, i]), (0, x.jsx)(Wi.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, qi.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, qi.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      nf.displayName = rf;
      var af = "ScrollAreaCorner";
      V.forwardRef((e, t) => {
        const r = Fu(af, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, x.jsx)(sf, {
          ...e,
          ref: t
        }) : null
      }).displayName = af;
      var sf = V.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Fu(af, r), [a, s] = V.useState(0), [i, l] = V.useState(0), d = Boolean(a && i);
        return mf(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), mf(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), d ? (0, x.jsx)(Wi.sG.div, {
          ...n,
          ref: t,
          style: {
            width: a,
            height: i,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function lf(e) {
        return e ? parseInt(e, 10) : 0
      }

      function df(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function cf(e) {
        const t = df(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function uf(e, t, r = "ltr") {
        const n = cf(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          l = Vl(e, "ltr" === r ? [0, s] : [-1 * s, 0]);
        return ff([0, s], [0, i])(l)
      }

      function ff(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function pf(e, t) {
        return e > 0 && e < t
      }
      var hf = (e, t = () => {}) => {
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
            s = r.left !== a.left,
            i = r.top !== a.top;
          (s || i) && t(), r = a, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function vf(e, t) {
        const r = (0, Lu.c)(e),
          n = V.useRef(0);
        return V.useEffect(() => () => window.clearTimeout(n.current), []), V.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function mf(e, t) {
        const r = (0, Lu.c)(t);
        (0, zu.N)(() => {
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
      var yf = Bu,
        gf = Hu,
        bf = Uu,
        wf = nf,
        _f = r(15234),
        xf = r(6329),
        Pf = r(94926),
        Cf = r(82422),
        jf = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Of = [" ", "Enter"],
        Sf = "Select",
        [kf, Ef, Rf] = (0, Kl.N)(Sf),
        [Tf, Nf] = (0, Bi.A)(Sf, [Rf, Xi.Bk]),
        Df = (0, Xi.Bk)(),
        [If, Lf] = Tf(Sf),
        [zf, Mf] = Tf(Sf),
        Af = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            value: s,
            defaultValue: i,
            onValueChange: l,
            dir: d,
            name: c,
            autoComplete: u,
            disabled: f,
            required: p,
            form: h
          } = e, v = Df(t), [m, y] = V.useState(null), [g, b] = V.useState(null), [w, _] = V.useState(!1), P = (0, ql.jH)(d), [C, j] = (0, $i.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: Sf
          }), [O, S] = (0, $i.useControllableState)({
            prop: s,
            defaultProp: i,
            onChange: l,
            caller: Sf
          }), k = V.useRef(null), E = !m || h || !!m.closest("form"), [R, T] = V.useState(new Set), N = Array.from(R).map(e => e.props.value).join(";");
          return (0, x.jsx)(Xi.bL, {
            ...v,
            children: (0, x.jsxs)(If, {
              required: p,
              scope: t,
              trigger: m,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: _,
              contentId: (0, Hi.useId)(),
              value: O,
              onValueChange: S,
              open: C,
              onOpenChange: j,
              dir: P,
              triggerPointerDownPosRef: k,
              disabled: f,
              children: [(0, x.jsx)(kf.Provider, {
                scope: t,
                children: (0, x.jsx)(zf, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: V.useCallback(e => {
                    T(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: V.useCallback(e => {
                    T(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), E ? (0, x.jsxs)(bp, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: c,
                autoComplete: u,
                value: O,
                onChange: e => S(e.target.value),
                disabled: f,
                form: h,
                children: [void 0 === O ? (0, x.jsx)("option", {
                  value: ""
                }) : null, Array.from(R)]
              }, N) : null]
            })
          })
        };
      Af.displayName = Sf;
      var Vf = "SelectTrigger",
        qf = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = Df(r), s = Lf(Vf, r), i = s.disabled || n, l = (0, Fi.s)(t, s.onTriggerChange), d = Ef(r), c = V.useRef("touch"), [u, f, p] = _p(e => {
            const t = d().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = xp(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), h = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, x.jsx)(Xi.Mz, {
            asChild: !0,
            ...a,
            children: (0, x.jsx)(Wi.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.contentId,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": wp(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, qi.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && h(e)
              }),
              onPointerDown: (0, qi.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: (0, qi.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || jf.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      qf.displayName = Vf;
      var Ff = "SelectValue",
        Bf = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, l = Lf(Ff, r), {
            onValueNodeHasChildrenChange: d
          } = l, c = void 0 !== a, u = (0, Fi.s)(t, l.onValueNodeChange);
          return (0, zu.N)(() => {
            d(c)
          }, [d, c]), (0, x.jsx)(Wi.sG.span, {
            ...i,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: wp(l.value) ? (0, x.jsx)(x.Fragment, {
              children: s
            }) : a
          })
        });
      Bf.displayName = Ff;
      var Kf = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, x.jsx)(Wi.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Kf.displayName = "SelectIcon";
      var Hf = e => (0, x.jsx)(Ui.Portal, {
        asChild: !0,
        ...e
      });
      Hf.displayName = "SelectPortal";
      var Xf = "SelectContent",
        Uf = V.forwardRef((e, t) => {
          const r = Lf(Xf, e.__scopeSelect),
            [n, o] = V.useState();
          if ((0, zu.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? ji.createPortal((0, x.jsx)(Wf, {
              scope: e.__scopeSelect,
              children: (0, x.jsx)(kf.Slot, {
                scope: e.__scopeSelect,
                children: (0, x.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, x.jsx)(Qf, {
            ...e,
            ref: t
          })
        });
      Uf.displayName = Xf;
      var Gf = 10,
        [Wf, Zf] = Tf(Xf),
        $f = (0, Zi.createSlot)("SelectContent.RemoveScroll"),
        Qf = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            side: i,
            sideOffset: l,
            align: d,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: v,
            avoidCollisions: m,
            ...y
          } = e, g = Lf(Xf, r), [b, w] = V.useState(null), [_, P] = V.useState(null), C = (0, Fi.s)(t, e => w(e)), [j, O] = V.useState(null), [S, k] = V.useState(null), E = Ef(r), [R, T] = V.useState(!1), N = V.useRef(!1);
          V.useEffect(() => {
            if (b) return (0, Pf.Eq)(b)
          }, [b]), (0, _f.Oh)();
          const D = V.useCallback(e => {
              const [t, ...r] = E().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && _ && (_.scrollTop = 0), r === n && _ && (_.scrollTop = _.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [E, _]),
            I = V.useCallback(() => D([j, b]), [D, j, b]);
          V.useEffect(() => {
            R && I()
          }, [R, I]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: z
          } = g;
          V.useEffect(() => {
            if (b) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (z.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (z.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || L(!1), document.removeEventListener("pointermove", t), z.current = null
                };
              return null !== z.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [b, L, z]), V.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [M, A] = _p(e => {
            const t = E().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = xp(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), q = V.useCallback((e, t, r) => {
            const n = !N.current && !r;
            (void 0 !== g.value && g.value === t || n) && (O(e), n && (N.current = !0))
          }, [g.value]), F = V.useCallback(() => b?.focus(), [b]), B = V.useCallback((e, t, r) => {
            const n = !N.current && !r;
            (void 0 !== g.value && g.value === t || n) && k(e)
          }, [g.value]), K = "popper" === n ? Jf : Yf, H = K === Jf ? {
            side: i,
            sideOffset: l,
            align: d,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: v,
            avoidCollisions: m
          } : {};
          return (0, x.jsx)(Wf, {
            scope: r,
            content: b,
            viewport: _,
            onViewportChange: P,
            itemRefCallback: q,
            selectedItem: j,
            onItemLeave: F,
            itemTextRefCallback: B,
            focusSelectedItem: I,
            selectedItemText: S,
            position: n,
            isPositioned: R,
            searchRef: M,
            children: (0, x.jsx)(Cf.RemoveScroll, {
              as: $f,
              allowPinchZoom: !0,
              children: (0, x.jsx)(xf.FocusScope, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, qi.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, x.jsx)(Ki.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, x.jsx)(K, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...H,
                    onPlaced: () => T(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, qi.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || A(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = E().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => D(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      Qf.displayName = "SelectContentImpl";
      var Yf = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = Lf(Xf, r), s = Zf(Xf, r), [i, l] = V.useState(null), [d, c] = V.useState(null), u = (0, Fi.s)(t, e => c(e)), f = Ef(r), p = V.useRef(!1), h = V.useRef(!0), {
          viewport: v,
          selectedItem: m,
          selectedItemText: y,
          focusSelectedItem: g
        } = s, b = V.useCallback(() => {
          if (a.trigger && a.valueNode && i && d && v && m && y) {
            const e = a.trigger.getBoundingClientRect(),
              t = d.getBoundingClientRect(),
              r = a.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                s = e.left - a,
                l = e.width + s,
                d = Math.max(l, t.width),
                c = window.innerWidth - Gf,
                u = Vl(a, [Gf, Math.max(Gf, c - d)]);
              i.style.minWidth = l + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - a,
                l = e.width + s,
                d = Math.max(l, t.width),
                c = window.innerWidth - Gf,
                u = Vl(a, [Gf, Math.max(Gf, c - d)]);
              i.style.minWidth = l + "px", i.style.right = u + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * Gf,
              c = v.scrollHeight,
              u = window.getComputedStyle(d),
              h = parseInt(u.borderTopWidth, 10),
              g = parseInt(u.paddingTop, 10),
              b = parseInt(u.borderBottomWidth, 10),
              w = h + g + c + parseInt(u.paddingBottom, 10) + b,
              _ = Math.min(5 * m.offsetHeight, w),
              x = window.getComputedStyle(v),
              P = parseInt(x.paddingTop, 10),
              C = parseInt(x.paddingBottom, 10),
              j = e.top + e.height / 2 - Gf,
              O = l - j,
              S = m.offsetHeight / 2,
              k = h + g + (m.offsetTop + S),
              E = w - k;
            if (k <= j) {
              const e = s.length > 0 && m === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = d.clientHeight - v.offsetTop - v.offsetHeight,
                r = k + Math.max(O, S + (e ? C : 0) + t + b);
              i.style.height = r + "px"
            } else {
              const e = s.length > 0 && m === s[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(j, h + v.offsetTop + (e ? P : 0) + S) + E;
              i.style.height = t + "px", v.scrollTop = k - j + v.offsetTop
            }
            i.style.margin = `${Gf}px 0`, i.style.minHeight = _ + "px", i.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, d, v, m, y, a.dir, n]);
        (0, zu.N)(() => b(), [b]);
        const [w, _] = V.useState();
        (0, zu.N)(() => {
          d && _(window.getComputedStyle(d).zIndex)
        }, [d]);
        const P = V.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, x.jsx)(ep, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: P,
          children: (0, x.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, x.jsx)(Wi.sG.div, {
              ...o,
              ref: u,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      });
      Yf.displayName = "SelectItemAlignedPosition";
      var Jf = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Gf,
          ...a
        } = e, s = Df(r);
        return (0, x.jsx)(Xi.UC, {
          ...s,
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
      Jf.displayName = "SelectPopperPosition";
      var [ep, tp] = Tf(Xf, {}), rp = "SelectViewport", np = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = Zf(rp, r), s = tp(rp, r), i = (0, Fi.s)(t, a.onViewportChange), l = V.useRef(0);
        return (0, x.jsxs)(x.Fragment, {
          children: [(0, x.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, x.jsx)(kf.Slot, {
            scope: r,
            children: (0, x.jsx)(Wi.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: i,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...o.style
              },
              onScroll: (0, qi.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * Gf,
                      o = parseFloat(r.style.minHeight),
                      a = parseFloat(r.style.height),
                      s = Math.max(o, a);
                    if (s < n) {
                      const o = s + e,
                        a = Math.min(n, o),
                        i = o - a;
                      r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = t.scrollTop
              })
            })
          })]
        })
      });
      np.displayName = rp;
      var op = "SelectGroup",
        [ap, sp] = Tf(op);
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Hi.useId)();
        return (0, x.jsx)(ap, {
          scope: r,
          id: o,
          children: (0, x.jsx)(Wi.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = op;
      var ip = "SelectLabel";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = sp(ip, r);
        return (0, x.jsx)(Wi.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = ip;
      var lp = "SelectItem",
        [dp, cp] = Tf(lp),
        up = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = Lf(lp, r), l = Zf(lp, r), d = i.value === n, [c, u] = V.useState(a ?? ""), [f, p] = V.useState(!1), h = (0, Fi.s)(t, e => l.itemRefCallback?.(e, n, o)), v = (0, Hi.useId)(), m = V.useRef("touch"), y = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, x.jsx)(dp, {
            scope: r,
            value: n,
            disabled: o,
            textId: v,
            isSelected: d,
            onItemTextChange: V.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, x.jsx)(kf.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, x.jsx)(Wi.sG.div, {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": d && f,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: h,
                onFocus: (0, qi.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, qi.mK)(s.onBlur, () => p(!1)),
                onClick: (0, qi.mK)(s.onClick, () => {
                  "mouse" !== m.current && y()
                }),
                onPointerUp: (0, qi.mK)(s.onPointerUp, () => {
                  "mouse" === m.current && y()
                }),
                onPointerDown: (0, qi.mK)(s.onPointerDown, e => {
                  m.current = e.pointerType
                }),
                onPointerMove: (0, qi.mK)(s.onPointerMove, e => {
                  m.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === m.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, qi.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, qi.mK)(s.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (Of.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      up.displayName = lp;
      var fp = "SelectItemText",
        pp = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = Lf(fp, r), i = Zf(fp, r), l = cp(fp, r), d = Mf(fp, r), [c, u] = V.useState(null), f = (0, Fi.s)(t, e => u(e), l.onItemTextChange, e => i.itemTextRefCallback?.(e, l.value, l.disabled)), p = c?.textContent, h = V.useMemo(() => (0, x.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: p
          }, l.value), [l.disabled, l.value, p]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: m
          } = d;
          return (0, zu.N)(() => (v(h), () => m(h)), [v, m, h]), (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(Wi.sG.span, {
              id: l.textId,
              ...a,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? ji.createPortal(a.children, s.valueNode) : null]
          })
        });
      pp.displayName = fp;
      var hp = "SelectItemIndicator";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return cp(hp, r).isSelected ? (0, x.jsx)(Wi.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = hp;
      var vp = "SelectScrollUpButton";
      V.forwardRef((e, t) => {
        const r = Zf(vp, e.__scopeSelect),
          n = tp(vp, e.__scopeSelect),
          [o, a] = V.useState(!1),
          s = (0, Fi.s)(t, n.onScrollButtonChange);
        return (0, zu.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, x.jsx)(yp, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      }).displayName = vp;
      var mp = "SelectScrollDownButton";
      V.forwardRef((e, t) => {
        const r = Zf(mp, e.__scopeSelect),
          n = tp(mp, e.__scopeSelect),
          [o, a] = V.useState(!1),
          s = (0, Fi.s)(t, n.onScrollButtonChange);
        return (0, zu.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, x.jsx)(yp, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      }).displayName = mp;
      var yp = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = Zf("SelectScrollButton", r), s = V.useRef(null), i = Ef(r), l = V.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return V.useEffect(() => () => l(), [l]), (0, zu.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, x.jsx)(Wi.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, qi.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, qi.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, qi.mK)(o.onPointerLeave, () => {
            l()
          })
        })
      });
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, x.jsx)(Wi.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var gp = "SelectArrow";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Df(r), a = Lf(gp, r), s = Zf(gp, r);
        return a.open && "popper" === s.position ? (0, x.jsx)(Xi.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = gp;
      var bp = V.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = V.useRef(null),
          a = (0, Fi.s)(n, o),
          s = (0, Fl.Z)(t);
        return V.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (s !== t && n) {
            const r = new Event("change", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [s, t]), (0, x.jsx)(Wi.sG.select, {
          ...r,
          style: {
            ...Qi.VISUALLY_HIDDEN_STYLES,
            ...r.style
          },
          ref: a,
          defaultValue: t
        })
      });

      function wp(e) {
        return "" === e || void 0 === e
      }

      function _p(e) {
        const t = (0, Lu.c)(e),
          r = V.useRef(""),
          n = V.useRef(0),
          o = V.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = V.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return V.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function xp(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (s = e, i = Math.max(o, 0), s.map((e, t) => s[(i + t) % s.length]));
        var s, i;
        1 === n.length && (a = a.filter(e => e !== r));
        const l = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      bp.displayName = "SelectBubbleInput";
      var Pp = Af,
        Cp = qf,
        jp = Bf,
        Op = Kf,
        Sp = Hf,
        kp = Uf,
        Ep = np,
        Rp = up,
        Tp = pp;

      function Np(e) {
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

      function Dp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ip(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Dp(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Np(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Lp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var zp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ip(Ip({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) zp(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lp(e.variantClassNames, e => Lp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ap = Mp({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vp = Mp({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qp = Mp({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fp = Mp({
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
        Bp = Mp({
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
        Kp = Mp({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Hp = (0, V.createContext)(null);

      function Xp() {
        const e = (0, V.useContext)(Hp);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Up = (0, V.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: a,
          onValueChange: s,
          name: i,
          value: l,
          defaultOpen: d,
          onOpenChange: c,
          isOpen: u,
          size: f = "MD",
          status: p = "neutral",
          ...h
        }, v) => {
          const m = (0, V.useRef)(null),
            y = (0, Ce.UP)(m, v),
            g = (0, V.useId)(),
            b = (0, V.useId)(),
            w = (0, V.useId)(),
            _ = (0, V.useId)(),
            P = (0, V.useId)(),
            C = (0, V.useId)(),
            [j = !1, O] = (0, Ce.ic)({
              prop: u,
              defaultProp: d,
              onChange: c
            }),
            S = (0, H.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, x.jsx)(Hp.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: C,
              hintId: _,
              popoverId: P,
              defaultValue: a,
              onValueChange: s,
              value: l,
              isOpen: j,
              setIsOpen: O,
              defaultOpen: d,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, x.jsx)(Pp, {
              required: r,
              disabled: n,
              open: j,
              onOpenChange: () => O(!o && !j),
              value: l,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, x.jsx)("div", {
                ref: y,
                ...S,
                children: e
              })
            })
          })
        }),
        Gp = (0, V.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = Xp(), s = (0, H.mergeProps)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Ap({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, x.jsx)(kp, {
            ...s,
            ref: o,
            children: (0, x.jsx)(Ep, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Wp = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, x.jsxs)(yf, {
            ...o,
            ref: n,
            children: [(0, x.jsx)(Ep, {
              asChild: !0,
              children: (0, x.jsx)(gf, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                children: e
              })
            }), (0, x.jsx)(bf, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, x.jsx)(wf, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Zp = (0, V.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...a
        }, s) => {
          const {
            isReadOnly: i,
            status: l,
            isDisabled: d,
            labelId: c,
            hintId: u,
            triggerId: f,
            popoverId: p,
            descriptionId: h,
            isOpen: v,
            value: m,
            size: y
          } = Xp(), {
            isPressed: g,
            pressProps: b
          } = yu({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, H.mergeProps)({
            id: f,
            className: Bp({
              size: y,
              isReadOnly: !!i,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!d
            }),
            "aria-labelledby": (0, H.joinStrings)(r, c, u),
            "aria-describedby": (0, H.joinStrings)(n, h),
            "aria-activedescendant": m,
            "aria-controls": p,
            "aria-invalid": "invalid" === l,
            "data-state": v ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, H.omit)(b, "onKeyDown"), a), _ = o ? je.DX : Cp;
          return (0, x.jsx)(_, {
            ...w,
            ref: s,
            children: e
          })
        }),
        $p = (0, V.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: a
          } = Xp(), s = (0, H.mergeProps)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), i = t ? je.DX : "span";
          return (0, x.jsx)(i, {
            ...s,
            ref: o,
            children: (0, x.jsx)(jp, {
              placeholder: e,
              "aria-label": a
            })
          })
        }),
        Qp = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = Xp(), i = s ? Ve.ChevronUp : Ve.ChevronDown, l = (0, H.mergeProps)({
            asChild: !0,
            className: Kp({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, x.jsx)(Op, {
            ...l,
            ref: n,
            children: e || (0, x.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Yp = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            isDisabled: l,
            labelId: d,
            triggerId: c
          } = Xp(), u = i && !o, f = (0, H.mergeProps)({
            id: a.id || d,
            htmlFor: c,
            "data-testid": e,
            className: Fp({
              showAsterisk: u,
              isDisabled: l
            })
          }, a), p = t ? je.DX : "label";
          return (0, x.jsx)(je.s6, {
            enabled: n,
            children: (0, x.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        Jp = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Xp(), i = (0, H.mergeProps)({
            className: Vp({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? je.DX : "div";
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        eh = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = Xp(), i = (0, H.mergeProps)({
            className: qp({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), l = t ? je.DX : "div";
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        th = (0, V.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, V.useRef)(null),
            i = (0, Ce.UP)(s, a),
            l = (0, H.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, x.jsx)(Rp, {
            ref: i,
            ...l,
            children: e
          })
        }),
        rh = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, x.jsx)(Tp, {
            ref: n,
            asChild: !0,
            children: (0, x.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        nh = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, x.jsx)(Op, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        oh = Sp,
        ah = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Xp(), i = (0, H.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), l = r ? je.DX : Nu;
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        sh = Du,
        ih = Iu,
        lh = new Set(["id"]),
        dh = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        ch = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        uh = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        fh = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        ph = /^(data-.*)$/;

      function hh(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          global: o,
          events: a = o,
          propNames: s
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (lh.has(t) || r && dh.has(t) || n && ch.has(t) || o && uh.has(t) || a && (fh.has(t) || t.endsWith("Capture") && fh.has(t.slice(0, -7))) || (null == s ? void 0 : s.has(t)) || ph.test(t)) && (i[t] = e[t]);
        return i
      }

      function vh(e, t, r) {
        let n = tu(() => {
          r && r(t)
        });
        (0, V.useEffect)(() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", n), () => {
            null == r || r.removeEventListener("reset", n)
          }
        }, [e])
      }
      let mh = null,
        yh = "keyboard";
      const gh = new Set;
      let bh = new Map,
        wh = !1,
        _h = !1;

      function xh(e, t) {
        for (let r of gh) r(e, t)
      }

      function Ph(e) {
        wh = !0, !lu.isOpening && function(e) {
          return !(e.metaKey || !fc() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (mh = "keyboard", yh = "keyboard", xh("keyboard", e))
      }

      function Ch(e) {
        mh = "pointer", yh = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (wh = !0, xh("pointer", e))
      }

      function jh(e) {
        !lu.isOpening && uu(e) && (wh = !0, mh = "virtual", yh = "virtual")
      }

      function Oh(e) {
        e.target !== window && e.target !== document && !lc && e.isTrusted && (wh || _h || (mh = "virtual", yh = "virtual", xh("virtual", e)), wh = !1, _h = !1)
      }

      function Sh() {
        lc || (wh = !1, _h = !0)
      }

      function kh(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || bh.get(Gd(e))) return;
        const t = Gd(e),
          r = Ud(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          wh = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", Ph, !0), r.addEventListener("keyup", Ph, !0), r.addEventListener("click", jh, !0), t.addEventListener("focus", Oh, !0), t.addEventListener("blur", Sh, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", Ch, !0), r.addEventListener("pointermove", Ch, !0), r.addEventListener("pointerup", Ch, !0)), t.addEventListener("beforeunload", () => {
          Eh(e)
        }, {
          once: !0
        }), bh.set(t, {
          focus: n
        })
      }
      const Eh = (e, t) => {
        const r = Gd(e),
          n = Ud(e);
        t && n.removeEventListener("DOMContentLoaded", t), bh.has(r) && (r.HTMLElement.prototype.focus = bh.get(r).focus, n.removeEventListener("keydown", Ph, !0), n.removeEventListener("keyup", Ph, !0), n.removeEventListener("click", jh, !0), r.removeEventListener("focus", Oh, !0), r.removeEventListener("blur", Sh, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", Ch, !0), n.removeEventListener("pointermove", Ch, !0), n.removeEventListener("pointerup", Ch, !0)), bh.delete(r))
      };

      function Rh(e) {
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
      "undefined" != typeof document && function(e) {
        const t = Ud(e);
        let r;
        "loading" !== t.readyState ? kh(e) : (r = () => {
          kh(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let Th = V.createContext(null);

      function Nh(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: n,
            onFocusChange: o
          } = e;
          const a = (0, V.useCallback)(e => {
              if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
            }, [n, o]),
            s = ic(a),
            i = (0, V.useCallback)(e => {
              const t = Ud(e.target),
                n = t ? ou(t) : ou();
              e.target === e.currentTarget && n === au(e.nativeEvent) && (r && r(e), o && o(!0), s(e))
            }, [o, r, s]);
          return {
            focusProps: {
              onFocus: !t && (r || o || n) ? i : void 0,
              onBlur: t || !n && !o ? void 0 : a
            }
          }
        }(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Rh(e.onKeyDown),
              onKeyUp: Rh(e.onKeyUp)
            }
          }
        }(e), o = $c(r, n), a = function(e) {
          let t = (0, V.useContext)(Th) || {};
          Qc(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), s = e.isDisabled ? {} : a, i = (0, V.useRef)(e.autoFocus);
        (0, V.useEffect)(() => {
          i.current && t.current && function(e) {
            const t = Ud(e);
            if ("virtual" === mh) {
              let r = ou(t);
              Pc(() => {
                const n = ou(t);
                n !== r && n !== t.body || !e.isConnected || nc(e)
              })
            } else nc(e)
          }(t.current), i.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: $c({
            ...o,
            tabIndex: l
          }, s)
        }
      }

      function Dh(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: a,
          name: s,
          form: i,
          children: l,
          "aria-label": d,
          "aria-labelledby": c,
          validationState: u = "valid",
          isInvalid: f,
          onPressStart: p,
          onPressEnd: h,
          onPressChange: v,
          onPress: m,
          onPressUp: y,
          onClick: g
        } = e, {
          pressProps: b,
          isPressed: w
        } = yu({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: v,
          onPress: m,
          onPressUp: y,
          onClick: g,
          isDisabled: n
        }), {
          pressProps: _,
          isPressed: x
        } = yu({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: v,
          onPressUp: y,
          onClick: g,
          onPress(e) {
            var n;
            null == m || m(e), t.toggle(), null === (n = r.current) || void 0 === n || n.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: P
        } = Nh(e, r), C = $c(b, P), j = hh(e, {
          labelable: !0
        });
        return vh(r, t.defaultSelected, t.setSelected), {
          labelProps: $c(_, {
            onClick: e => e.preventDefault()
          }),
          inputProps: $c(j, {
            "aria-invalid": f || "invalid" === u || void 0,
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
            name: s,
            form: i,
            type: "checkbox",
            ...C
          }),
          isSelected: t.isSelected,
          isPressed: w || x,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === u
        }
      }
      var Ih;
      const Lh = "undefined" != typeof document ? null !== (Ih = V.useInsertionEffect) && void 0 !== Ih ? Ih : V.useLayoutEffect : () => {};

      function zh(e, t, r) {
        let [n, o] = (0, V.useState)(e || t), a = (0, V.useRef)(n), s = (0, V.useRef)(void 0 !== e), i = void 0 !== e;
        (0, V.useEffect)(() => {
          s.current, s.current = i
        }, [i]);
        let l = i ? e : n;
        Lh(() => {
          a.current = l
        });
        let [, d] = (0, V.useReducer)(() => ({}), {}), c = (0, V.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(a.current) : e;
          Object.is(a.current, n) || (a.current = n, o(n), d(), null == r || r(n, ...t))
        }, [r]);
        return [l, c]
      }

      function Mh(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = zh(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, V.useState)(r);
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

      function Ah(e) {
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

      function Vh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vh(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ah(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Bh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Kh = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qh(qh({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Bh(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fh(e.variantClassNames, e => Fh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Hh = Kh({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xh = Kh({
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
        Uh = Kh({
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
        Gh = Kh({
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
        Wh = Kh({
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
      const Zh = (0, V.createContext)(null);

      function $h() {
        const e = (0, V.useContext)(Zh);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Qh = (0, V.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, l) => {
          const d = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? je.DX : "div",
            u = (0, V.useId)(),
            f = (0, V.useId)(),
            p = (0, V.useId)();
          return (0, x.jsx)(Zh.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: f,
              inputId: p,
              isDisabled: a,
              isReadOnly: s,
              ...i
            },
            children: (0, x.jsx)(c, {
              ...d,
              ref: l,
              children: o
            })
          })
        }),
        Yh = (0, V.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: a,
          isSelected: s,
          defaultSelected: i,
          onSelectedChange: l,
          name: d,
          value: c,
          ...u
        }, f) => {
          const p = (0, V.useRef)(null),
            h = (0, Ce.UP)(p, f),
            {
              size: v,
              appearance: m,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: _
            } = $h(),
            P = Mh({
              isDisabled: w,
              isReadOnly: _,
              isSelected: s,
              defaultSelected: i,
              onChange: l
            }),
            {
              inputProps: C
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: a,
                isPressed: s,
                isDisabled: i,
                isReadOnly: l
              } = Dh(e, t, r);
              return {
                labelProps: n,
                inputProps: {
                  ...o,
                  role: "switch",
                  checked: a
                },
                isSelected: a,
                isPressed: s,
                isDisabled: i,
                isReadOnly: l
              }
            }({
              id: a || y,
              "aria-labelledby": (0, H.joinStrings)(n, g),
              "aria-describedby": (0, H.joinStrings)(o, b),
              name: d,
              value: c,
              isDisabled: w,
              isReadOnly: _
            }, P, p),
            j = (0, H.mergeProps)({
              className: Wh({
                appearance: m
              }),
              "data-state": P.isSelected ? "selected" : "unselected",
              "data-disabled": w || _,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || _ || P.toggle()
              }
            }, u);
          return (0, x.jsxs)("div", {
            ...j,
            children: [(0, x.jsx)(je.s6, {
              children: (0, x.jsx)("input", {
                ...C,
                ref: h
              })
            }), (0, x.jsx)("div", {
              className: Gh({
                size: v
              }),
              "aria-hidden": "true",
              children: (0, x.jsx)("div", {
                className: Xh({
                  size: v,
                  isSelected: P.isSelected
                })
              })
            })]
          })
        }),
        Jh = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            isDisabled: s,
            labelId: i,
            inputId: l,
            size: d
          } = $h(), c = (0, H.mergeProps)({
            id: o.id || i,
            htmlFor: l,
            "data-testid": e,
            className: Uh({
              isDisabled: s,
              size: d
            })
          }, o), u = t ? je.DX : "label";
          return (0, x.jsx)(je.s6, {
            enabled: n,
            children: (0, x.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        ev = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = $h(), i = n.id || s, l = (0, H.mergeProps)({
            className: Hh({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), d = t ? je.DX : "div";
          return (0, x.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        }),
        tv = {
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
        rv = {
          ...tv,
          customError: !0,
          valid: !1
        },
        nv = {
          isInvalid: !1,
          validationDetails: tv,
          validationErrors: []
        },
        ov = (0, V.createContext)({}),
        av = "__formValidationState" + Date.now();

      function sv(e) {
        if (e[av]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: a
          } = e[av];
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
            validate: s,
            validationBehavior: i = "aria"
          } = e;
          r && (t || (t = "invalid" === r));
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: rv
            } : null,
            d = (0, V.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return iv(r)
                }
                return []
              }(s, o);
              return lv(e)
            }, [s, o]);
          (null == a ? void 0 : a.validationDetails.valid) && (a = void 0);
          let c = (0, V.useContext)(ov),
            u = (0, V.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => iv(c[e])) : iv(c[n]) : [], [c, n]),
            [f, p] = (0, V.useState)(c),
            [h, v] = (0, V.useState)(!1);
          c !== f && (p(c), v(!1));
          let m = (0, V.useMemo)(() => lv(h ? [] : u), [h, u]),
            y = (0, V.useRef)(nv),
            [g, b] = (0, V.useState)(nv),
            w = (0, V.useRef)(nv),
            [_, x] = (0, V.useState)(!1);
          return (0, V.useEffect)(() => {
            if (!_) return;
            x(!1);
            let e = d || a || y.current;
            dv(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: l || m || d || a || nv,
            displayValidation: "native" === i ? l || m || g : l || m || d || a || g,
            updateValidation(e) {
              "aria" !== i || dv(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = nv;
              dv(e, w.current) || (w.current = e, b(e)), "native" === i && x(!1), v(!0)
            },
            commitValidation() {
              "native" === i && x(!0), v(!0)
            }
          }
        }(e)
      }

      function iv(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function lv(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: rv
        } : null
      }

      function dv(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }

      function cv(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        Xd(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: uv(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let a = (0, V.useRef)(!1),
          s = tu(() => {
            a.current || t.resetValidation()
          }),
          i = tu(e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let a = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var s, i;
            !e.defaultPrevented && r && a && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!r.validity.valid) return r
              }
              return null
            }(a) === r.current && (o ? o() : null === (s = r.current) || void 0 === s || s.focus(), mh = i = "keyboard", yh = i, xh(i, null)), e.preventDefault()
          }),
          l = tu(() => {
            t.commitValidation()
          });
        (0, V.useEffect)(() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form,
            n = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            a.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort, null == n || n.call(t), a.current = !1
          }), e.addEventListener("invalid", i), e.addEventListener("change", l), null == t || t.addEventListener("reset", s), () => {
            e.removeEventListener("invalid", i), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", s), t && (t.reset = n)
          }
        }, [r, n])
      }

      function uv(e) {
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
      const fv = ({
          color: e = "currentColor"
        }) => (0, x.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, x.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        pv = ({
          color: e = "currentColor"
        }) => (0, x.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, x.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        hv = ({
          color: e = "currentColor"
        }) => (0, x.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, x.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        vv = ({
          color: e = "currentColor"
        }) => (0, x.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, x.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        mv = ({
          color: e = "currentColor"
        }) => (0, x.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, x.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        yv = ({
          color: e = "currentColor"
        }) => (0, x.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, x.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

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

      function wv(e) {
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

      function _v(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var xv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = wv(wv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) xv(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _v(e.variantClassNames, e => _v(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Cv = Pv({
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
        jv = Pv({
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
        Ov = Pv({
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
        Sv = Pv({
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
      const kv = (0, V.createContext)(null);

      function Ev() {
        const e = (0, V.useContext)(kv);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Rv = (0, V.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...a
        }, s) => {
          const i = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, H.omit)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? je.DX : "div",
            d = (0, V.useId)(),
            c = (0, V.useId)(),
            u = (0, V.useId)();
          return (0, x.jsx)(kv.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, x.jsx)(l, {
              ...i,
              ref: s,
              children: o
            })
          })
        }),
        Tv = (0, V.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: a,
          onClick: s,
          "aria-describedby": l,
          "aria-errormessage": d,
          "aria-labelledby": c,
          ...u
        }, f) => {
          const {
            size: p,
            appearance: h,
            isIndeterminate: v,
            isRequired: m,
            descriptionId: y,
            labelId: g,
            inputId: b,
            ...w
          } = Ev(), _ = (0, V.useRef)(null), P = u.id || b, {
            isPressed: C,
            pressProps: j
          } = yu({
            ref: _
          }), {
            setSelected: O,
            toggle: S,
            ...k
          } = Mh({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: E,
            isSelected: R,
            isDisabled: T,
            isReadOnly: N
          } = function(e, t, r) {
            let n = sv({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: a,
                validationDetails: s
              } = n.displayValidation,
              {
                labelProps: i,
                inputProps: l,
                isSelected: d,
                isPressed: c,
                isDisabled: u,
                isReadOnly: f
              } = Dh({
                ...e,
                isInvalid: o
              }, t, r);
            cv(e, n, r);
            let {
              isIndeterminate: p,
              isRequired: h,
              validationBehavior: v = "aria"
            } = e;
            (0, V.useEffect)(() => {
              r.current && (r.current.indeterminate = !!p)
            });
            let {
              pressProps: m
            } = yu({
              isDisabled: u || f,
              onPress() {
                let {
                  [av]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: $c(i, m, (0, V.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...l,
                checked: d,
                "aria-required": h && "aria" === v || void 0,
                required: h && "native" === v
              },
              isSelected: d,
              isPressed: c,
              isDisabled: u,
              isReadOnly: f,
              isInvalid: o,
              validationErrors: a,
              validationDetails: s
            }
          }({
            "aria-label": "",
            id: P,
            name: o,
            ...w
          }, {
            ...k,
            toggle: S,
            setSelected: w.isReadOnly ? () => !1 : O
          }, _), D = (0, H.mergeProps)({
            className: jv({
              size: p
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || T || N || S()
            }
          }, j, u), I = (0, H.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, H.joinStrings)(c, g),
            "aria-describedby": (0, H.joinStrings)(l, y),
            "aria-errormessage": (0, H.joinStrings)(d, w.isInvalid ? y : void 0),
            "aria-required": m,
            required: m
          }, E), L = v ? i[`Dash${p}`] : i[`Check${p}`];
          return (0, x.jsxs)("div", {
            ...D,
            children: [(0, x.jsx)(je.s6, {
              children: (0, x.jsx)("input", {
                ...I,
                ref: f
              })
            }), (0, x.jsx)("div", {
              className: Cv({
                size: p,
                appearance: h
              }),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : R ? "checked" : "unchecked",
              "data-disabled": T || N,
              "data-testid": e,
              "data-pressed": C,
              children: (0, x.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (R || v) && (0, x.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Nv = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, s) => {
          const {
            size: i,
            labelId: l,
            inputId: d,
            isRequired: c
          } = Ev(), u = a.id || l, f = c && !o, p = (0, H.mergeProps)({
            className: Sv({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: a.htmlFor || d
          }, a), h = t ? je.DX : "label";
          return (0, x.jsx)(je.s6, {
            enabled: n,
            children: (0, x.jsx)(h, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        Dv = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Ev(), i = n.id || s, l = (0, H.mergeProps)({
            className: Ov({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), d = t ? je.DX : "div";
          return (0, x.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Iv = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Ev(), s = n.id || a, i = (0, H.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: s
          }, n), l = t ? je.DX : "div";
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        });

      function Lv(e) {
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

      function zv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Lv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Av(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Vv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mv(Mv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Vv(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Av(e.variantClassNames, e => Av(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Fv = qv({
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
        Bv = qv({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Kv = qv({
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
        Hv = qv({
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
            isInvalid: {
              false: "foundry_vq8c3je",
              true: "foundry_vq8c3jf"
            },
            isSuccess: {
              true: "foundry_vq8c3jg"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !1,
              isSuccess: !1,
              isReadOnly: !1,
              isInvalid: !1
            }, "foundry_vq8c3jh"]
          ]
        });
      const Xv = (0, V.createContext)(null);

      function Uv() {
        const e = (0, V.useContext)(Xv);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Gv = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, l) => {
          const d = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? je.DX : "div",
            u = (0, V.useId)(),
            f = (0, V.useId)(),
            p = (0, V.useId)(),
            h = (0, V.useId)();
          return (0, x.jsx)(Xv.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: h,
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: s,
              ...i
            },
            children: (0, x.jsx)(c, {
              ref: l,
              ...d,
              children: t
            })
          })
        }),
        Wv = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            labelId: i,
            inputId: l,
            isDisabled: d,
            isRequired: c
          } = Uv(), u = (0, H.mergeProps)({
            className: Kv({
              isDisabled: d,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: l
          }, a), f = t ? je.DX : "label";
          return (0, x.jsx)(je.s6, {
            enabled: n,
            children: (0, x.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        Zv = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: a,
          placeholder: s = " ",
          "aria-labelledby": i,
          "aria-describedby": l,
          ...d
        }, c) => {
          const {
            descriptionId: u,
            labelId: f,
            inputId: p,
            hintId: h,
            isDisabled: v,
            isRequired: m,
            isReadOnly: y,
            status: g
          } = Uv(), b = (0, V.useRef)(null), w = (0, Ce.UP)(b, c), _ = (0, H.mergeProps)({
            className: Hv({
              isInvalid: "invalid" === g,
              isDisabled: v,
              isReadOnly: y,
              isSuccess: "success" === g
            }),
            name: a,
            id: d.id || p,
            rows: n,
            defaultValue: o,
            disabled: v,
            required: m,
            readOnly: y,
            placeholder: s,
            "aria-labelledby": (0, H.joinStrings)(d.id, f, h, i),
            "aria-describedby": (0, H.joinStrings)(u, l),
            "data-testid": r,
            ..."invalid" === g && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === g && {
              "data-success": !0
            },
            ...v && {
              "aria-disabled": !0
            },
            ...m && {
              "aria-required": !0
            }
          }, d), P = e ? je.DX : "textarea";
          return (0, x.jsx)(P, {
            ref: w,
            ..._,
            children: t
          })
        }),
        $v = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Uv(), i = (0, H.mergeProps)({
            className: Fv({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? je.DX : "div";
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Qv = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = Uv(), i = (0, H.mergeProps)({
            className: Bv({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), l = t ? je.DX : "div";
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Yv = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Uv(), i = (0, H.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), l = r ? je.DX : Nu;
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Jv = Du,
        em = Iu;
      let tm = Math.round(1e10 * Math.random()),
        rm = 0;
      const nm = new WeakMap;
      class om {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!nu(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return nu(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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

      function am(e, t) {
        return !!e && !!t && t.some(t => nu(t, e))
      }

      function sm(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? tc : ec,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          a = Ud(o),
          s = function(e, t, r, n) {
            return (0, ru.Nf)() ? new om(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(a, e || a, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if (nu(null == t ? void 0 : t.from, e)) return NodeFilter.FILTER_REJECT;
              if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    let t = [];
                    if (e.form) {
                      var r, n;
                      let o = null === (n = e.form) || void 0 === n || null === (r = n.elements) || void 0 === r ? void 0 : r.namedItem(e.name);
                      t = [...null != o ? o : []]
                    } else t = [...Ud(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                    return !!t && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !am(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (s.currentNode = t.from), s
      }
      class im {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new lm({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && am(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new im;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new lm({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class lm {
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

      function dm(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = Xc(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function cm(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: a,
          fieldProps: s
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: a = "label"
          } = e;
          t = Xc(t);
          let s = Xc(),
            i = {};
          return r && (n = n ? `${s} ${n}` : s, i = {
            id: s,
            htmlFor: "label" === a ? t : void 0
          }), {
            labelProps: i,
            fieldProps: dm({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), i = Gc([Boolean(t), Boolean(r), n, o]), l = Gc([Boolean(t), Boolean(r), n, o]);
        return s = $c(s, {
          "aria-describedby": [i, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: a,
          fieldProps: s,
          descriptionProps: {
            id: i
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      new im;
      const um = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        fm = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function pm(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return um.has(t.script)
        }
        let t = e.split("-")[0];
        return fm.has(t)
      }
      const hm = Symbol.for("react-aria.i18n.locale");

      function vm() {
        let e = "undefined" != typeof window && window[hm] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: pm(e) ? "rtl" : "ltr"
        }
      }
      let mm = vm(),
        ym = new Set;

      function gm() {
        mm = vm();
        for (let e of ym) e(mm)
      }
      const bm = V.createContext(null);

      function wm() {
        let e = function() {
          let e = Fc(),
            [t, r] = (0, V.useState)(mm);
          return (0, V.useEffect)(() => (0 === ym.size && window.addEventListener("languagechange", gm), ym.add(r), () => {
            ym.delete(r), 0 === ym.size && window.removeEventListener("languagechange", gm)
          }), []), e ? {
            locale: "undefined" != typeof window && window[hm] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, V.useContext)(bm) || e
      }

      function _m(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: a,
          isDisabled: s,
          orientation: i = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: d
        } = wm(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: v,
          errorMessageProps: m
        } = cm({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), y = hh(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, a = (0, V.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: s,
            removeAllGlobalListeners: i
          } = Yc(), l = (0, V.useCallback)(e => {
            nu(e.currentTarget, e.target) && a.current.isFocusWithin && !nu(e.currentTarget, e.relatedTarget) && (a.current.isFocusWithin = !1, i(), r && r(e), o && o(!1))
          }, [r, o, a, i]), d = ic(l), c = (0, V.useCallback)(e => {
            if (!nu(e.currentTarget, e.target)) return;
            const t = Ud(e.target),
              r = ou(t);
            if (!a.current.isFocusWithin && r === au(e.nativeEvent)) {
              n && n(e), o && o(!0), a.current.isFocusWithin = !0, d(e);
              let r = e.currentTarget;
              s(t, "focus", e => {
                if (a.current.isFocusWithin && !nu(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  sc(n, r);
                  let o = ac(n);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [n, o, d, s, l]);
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
        }), b = Xc(r);
        return nm.set(t, {
          name: b,
          form: n,
          descriptionId: v.id,
          errorMessageId: m.id,
          validationBehavior: l
        }), {
          radioGroupProps: $c(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === d && "vertical" !== i ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === d && "vertical" !== i ? "next" : "prev";
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
              let n, o = sm(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof Gd(e).HTMLInputElement && "radio" === e.type
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": a || void 0,
            "aria-disabled": s || void 0,
            "aria-orientation": i,
            ...h,
            ...g
          }),
          labelProps: p,
          descriptionProps: v,
          errorMessageProps: m,
          isInvalid: c,
          validationErrors: u,
          validationDetails: f
        }
      }

      function xm(e) {
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

      function Pm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Cm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pm(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = xm(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Om = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Sm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Cm(Cm({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Om(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jm(e.variantClassNames, e => jm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        km = Sm({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Em = Sm({
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
      const Rm = (0, V.createContext)(null);

      function Tm() {
        const e = (0, V.useContext)(Rm);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Nm = (0, V.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: a,
          "aria-labelledby": s,
          "aria-describedby": i,
          "aria-errormessage": l,
          status: d = "neutral",
          ...c
        }, u) => {
          const f = (0, V.useRef)(null),
            p = (0, Ce.UP)(f, u),
            h = (0, V.useId)(),
            v = (0, V.useId)(),
            m = (0, V.useId)(),
            y = function(e) {
              let t = (0, V.useMemo)(() => e.name || `radio-group-${tm}-${++rm}`, [e.name]);
              var r;
              let [n, o] = zh(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [a] = (0, V.useState)(n), [s, i] = (0, V.useState)(null), l = sv({
                ...e,
                value: n
              }), d = l.displayValidation.isInvalid;
              var c;
              return {
                ...l,
                name: t,
                selectedValue: n,
                defaultSelectedValue: void 0 !== e.value ? a : null !== (c = e.defaultValue) && void 0 !== c ? c : null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
                },
                lastFocusedValue: s,
                setLastFocusedValue: i,
                isDisabled: e.isDisabled || !1,
                isReadOnly: e.isReadOnly || !1,
                isRequired: e.isRequired || !1,
                validationState: e.validationState || (d ? "invalid" : null),
                isInvalid: d
              }
            }({
              ...c,
              isInvalid: "invalid" === d
            }),
            {
              radioGroupProps: g
            } = _m({
              ...c,
              orientation: r,
              "aria-labelledby": (0, H.joinStrings)(h, s),
              "aria-describedby": (0, H.joinStrings)(v, m, i),
              "aria-errormessage": (0, H.joinStrings)(m, l)
            }, y),
            b = (0, H.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, H.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? je.DX : "div";
          return (0, x.jsx)(Rm.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: v,
              labelId: h,
              errorId: m,
              status: d,
              ...c
            },
            children: (0, x.jsx)(w, {
              ref: p,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        Dm = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: s
          } = Tm(), i = (0, H.mergeProps)({
            "data-testid": e,
            className: Em({
              size: a,
              orientation: s
            })
          }, n), l = t ? je.DX : "div";
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: r
          })
        }),
        Im = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            labelId: l
          } = Tm(), d = i && !o, c = (0, H.mergeProps)({
            id: a.id || l,
            "data-testid": e,
            className: km({
              showAsterisk: d
            })
          }, a), u = t ? je.DX : "div";
          return (0, x.jsx)(je.s6, {
            enabled: n,
            children: (0, x.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Lm = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Tm(), s = (0, H.mergeProps)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), i = t ? je.DX : "div";
          return (0, x.jsx)(i, {
            ...s,
            ref: o,
            children: r
          })
        }),
        zm = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: s
          } = Tm(), i = (0, H.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: s
          }, n), l = r ? je.DX : Nu;
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Mm = Du,
        Am = Iu;
      var Vm = Sm({
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
        qm = Sm({
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
        Fm = Sm({
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
        Bm = Sm({
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
      const Km = ({
          color: e = "currentColor"
        }) => (0, x.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, x.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Hm = ({
          color: e = "currentColor"
        }) => (0, x.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, x.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Xm = ({
          color: e = "currentColor"
        }) => (0, x.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, x.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        Um = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? je.DX : "label";
          return (0, x.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        Gm = (0, V.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, V.useRef)(null),
            a = (0, Ce.UP)(o, n),
            s = (0, V.useId)(),
            {
              state: i,
              appearance: l,
              size: d,
              isReadOnly: u,
              isRequired: f
            } = Tm(),
            {
              isPressed: p,
              pressProps: h
            } = yu({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: v
            } = function(e, t, r) {
              let {
                value: n,
                children: o,
                "aria-label": a,
                "aria-labelledby": s,
                onPressStart: i,
                onPressEnd: l,
                onPressChange: d,
                onPress: c,
                onPressUp: u,
                onClick: f
              } = e;
              const p = e.isDisabled || t.isDisabled;
              let h = t.selectedValue === n,
                {
                  pressProps: v,
                  isPressed: m
                } = yu({
                  onPressStart: i,
                  onPressEnd: l,
                  onPressChange: d,
                  onPress: c,
                  onPressUp: u,
                  onClick: f,
                  isDisabled: p
                }),
                {
                  pressProps: y,
                  isPressed: g
                } = yu({
                  onPressStart: i,
                  onPressEnd: l,
                  onPressChange: d,
                  onPressUp: u,
                  onClick: f,
                  isDisabled: p,
                  onPress(e) {
                    var o;
                    null == c || c(e), t.setSelectedValue(n), null === (o = r.current) || void 0 === o || o.focus()
                  }
                }),
                {
                  focusableProps: b
                } = Nh($c(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                w = $c(v, b),
                _ = hh(e, {
                  labelable: !0
                }),
                x = -1;
              null != t.selectedValue ? t.selectedValue === n && (x = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (x = 0), p && (x = void 0);
              let {
                name: P,
                form: C,
                descriptionId: j,
                errorMessageId: O,
                validationBehavior: S
              } = nm.get(t);
              return vh(r, t.defaultSelectedValue, t.setSelectedValue), cv({
                validationBehavior: S
              }, t, r), {
                labelProps: $c(y, (0, V.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: $c(_, {
                  ...w,
                  type: "radio",
                  name: P,
                  form: C,
                  tabIndex: x,
                  disabled: p,
                  required: t.isRequired && "native" === S,
                  checked: h,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? O : null, j].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: p,
                isSelected: h,
                isPressed: m || g
              }
            }({
              ...r,
              id: s,
              value: t,
              "aria-label": ""
            }, i, o),
            m = v.checked,
            y = v.disabled || i?.isReadOnly,
            g = (0, H.mergeProps)(v, {
              disabled: y,
              readOnly: u,
              required: f,
              "data-testid": e,
              ...y && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, r),
            b = c[`Dot${d}`];
          return (0, x.jsxs)("div", {
            className: Bm({
              size: d
            }),
            children: [(0, x.jsx)(je.s6, {
              children: (0, x.jsx)("input", {
                type: "radio",
                ...g,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, x.jsx)("div", {
              className: Fm({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": m ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": p,
              ...h,
              children: (0, x.jsx)("span", {
                className: "foundry_1pfduet9",
                children: m && (0, x.jsx)(b, {})
              })
            })]
          })
        }),
        Wm = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: s,
            state: i
          } = Tm(), l = (0, V.useId)(), d = (0, H.mergeProps)({
            id: l,
            "data-testid": e,
            className: qm({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? je.DX : "div";
          return (0, x.jsx)(je.s6, {
            enabled: n,
            children: (0, x.jsx)(c, {
              ...d,
              ref: a,
              children: r
            })
          })
        }),
        Zm = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = Tm(), s = (0, H.mergeProps)({
            "data-testid": e,
            className: Vm({
              isDisabled: a
            })
          }, n), i = t ? je.DX : "span";
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        });

      function $m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Qm(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return $m(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? $m(e, t) : void 0
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
        var a, s = !0,
          i = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return s = e.done, e
          },
          e: function(e) {
            i = !0, a = e
          },
          f: function() {
            try {
              s || null == r.return || r.return()
            } finally {
              if (i) throw a
            }
          }
        }
      }

      function Ym(e, t, r) {
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

      function Jm(e) {
        return Jm = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Jm(e)
      }

      function ey() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (ey = function() {
          return !!e
        })()
      }

      function ty(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ry(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ty(Object(r), !0).forEach(function(t) {
            Ym(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ty(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ny(e, t) {
        return ny = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, ny(e, t)
      }

      function oy(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          a = t.separate,
          s = n,
          i = "",
          l = Qm(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var d, c = r.value,
              u = !Object.prototype.hasOwnProperty.call(o, c) && (null === (d = o[s[0]]) || void 0 === d ? void 0 : d.test(c));
            (a && c === s[0] || u) && (s = s.slice(1), i += c)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return i
      }

      function ay(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          a = t.separate,
          s = t.showMask,
          i = 0,
          l = "",
          d = Qm(n);
        try {
          for (d.s(); !(r = d.n()).done;) {
            var c = r.value;
            if (!s && void 0 === e[i]) break;
            Object.prototype.hasOwnProperty.call(o, c) && void 0 !== e[i] ? l += e[i++] : l += c
          }
        } catch (e) {
          d.e(e)
        } finally {
          d.f()
        }
        if (a && !s) {
          for (var u = n.length - 1; u >= 0 && l[u] === n[u]; u--);
          l = l.slice(0, u + 1)
        }
        return l
      }

      function sy(e, t) {
        for (var r = t.mask, n = t.replacement, o = [], a = 0; a < r.length; a++) {
          var s, i = null !== (s = e[a]) && void 0 !== s ? s : r[a],
            l = Object.prototype.hasOwnProperty.call(n, i) ? "replacement" : void 0 !== e[a] && e[a] !== r[a] ? "input" : "mask";
          o.push({
            type: l,
            value: i,
            index: a
          })
        }
        return o
      }

      function iy(e) {
        return e.length > 0 ? Ym({}, e, /./) : {}
      }

      function ly(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, a = t.mask, s = t.replacement, i = t.separate, l = e.slice(n, o), d = a.slice(n, o), c = "", u = 0; u < d.length; u++) {
          var f = Object.prototype.hasOwnProperty.call(s, d[u]);
          f && void 0 !== l[u] && l[u] !== d[u] ? c += l[u] : f && i && (c += d[u])
        }
        return c
      }

      function dy(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? iy(n) : n,
          a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return ay(oy(e, {
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
      var cy = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function uy(e) {
        return cy.includes(e) ? "\\".concat(e) : e
      }

      function fy(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function py(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function hy(e, t, r) {
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

      function vy(e) {
        return vy = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, vy(e)
      }

      function my() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (my = function() {
          return !!e
        })()
      }

      function yy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yy(Object(r), !0).forEach(function(t) {
            hy(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function by(e, t) {
        return by = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, by(e, t)
      }

      function wy(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return wy = function(e) {
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
              if (my()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && by(o, r.prototype), o
            }(e, arguments, vy(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), by(r, e)
        }, wy(e)
      }
      var _y, xy = function(e) {
          function t(e) {
            var r;
            return fy(this, t), (r = function(e, t, r) {
              return t = vy(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, my() ? Reflect.construct(t, r || [], vy(e).constructor) : t.apply(e, r))
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
            }), t && by(e, t)
          }(t, e), py(t)
        }(wy(Error)),
        Py = ["options"],
        Cy = ["text", "email", "tel", "search", "url"],
        jy = py(function e(t) {
          var r = t.init,
            n = t.tracking;
          fy(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Cy.includes(e.type)) {
              var a = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                s = a.initialValue,
                i = void 0 === s ? "" : s,
                l = a.controlled,
                d = void 0 !== l && l,
                c = r({
                  initialValue: e.value || i,
                  controlled: d
                }),
                u = c.value,
                f = c.options,
                p = {
                  value: u,
                  options: f,
                  fallbackOptions: f
                },
                h = {
                  id: -1,
                  cachedId: -1
                },
                v = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                m = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", gy(gy({}, m), {}, {
                set: function(t) {
                  var r;
                  v.value = t, null == m || null === (r = m.set) || void 0 === r || r.call(e, t)
                }
              })), e.value = u;
              var y = function() {
                  var t = function() {
                    var r, n;
                    v.selectionStart = null !== (r = e.selectionStart) && void 0 !== r ? r : 0, v.selectionEnd = null !== (n = e.selectionEnd) && void 0 !== n ? n : 0, h.id = window.setTimeout(t)
                  };
                  h.id = window.setTimeout(t)
                },
                g = function() {
                  window.clearTimeout(h.id), h.id = -1, h.cachedId = -1
                },
                b = function(t) {
                  try {
                    var r, o;
                    if (h.cachedId === h.id) throw new xy("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var a = e.value,
                      s = e.selectionStart,
                      i = e.selectionEnd;
                    if (null === s || null === i) throw new xy("The selection attributes have not been initialized.");
                    var l, d = v.value;
                    if (void 0 === t.inputType && (v.selectionStart = 0, v.selectionEnd = d.length), s > v.selectionStart ? l = "insert" : s <= v.selectionStart && s < v.selectionEnd ? l = "deleteBackward" : s === v.selectionEnd && a.length < d.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && a.length > d.length) throw new xy("Input type detection error.");
                    var c = "",
                      u = v.selectionStart,
                      f = v.selectionEnd;
                    if ("insert" === l) c = a.slice(v.selectionStart, s);
                    else {
                      var m = d.length - a.length;
                      u = s, f = s + m
                    }
                    p.value !== d ? p.options = p.fallbackOptions : p.fallbackOptions = p.options;
                    var y = p.options,
                      g = n({
                        inputType: l,
                        previousValue: d,
                        previousOptions: y,
                        value: a,
                        addedValue: c,
                        changeStart: u,
                        changeEnd: f,
                        selectionStart: s,
                        selectionEnd: i
                      }),
                      b = g.options,
                      w = function(e, t) {
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
                      }(g, Py);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), p.value = w.value, p.options = b, v.selectionStart = w.selectionStart, v.selectionEnd = w.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, d)
                  } catch (r) {
                    if (e.value = v.value, e.setSelectionRange(v.selectionStart, v.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== r.name) throw r
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
      _y = jy, Object.defineProperty(_y.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Oy, Sy = ["track", "modify"];

      function ky(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? iy(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Ey = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = Jm(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, ey() ? Reflect.construct(t, r || [], Jm(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = ky(r),
                a = o.mask,
                s = o.replacement,
                i = o.separate,
                l = o.showMask;
              return {
                value: t = n || t ? t : l ? a : "",
                options: {
                  mask: a,
                  replacement: s,
                  separate: i
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                n = e.previousValue,
                o = e.previousOptions,
                a = e.addedValue,
                s = e.changeStart,
                i = e.changeEnd,
                l = ky(r),
                d = l.track,
                c = l.modify,
                u = function(e, t) {
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
                }(l, Sy),
                f = u.mask,
                p = u.replacement,
                h = u.showMask,
                v = u.separate,
                m = ry(ry({}, "insert" === t ? {
                  inputType: t,
                  data: a
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: n,
                  selectionStart: s,
                  selectionEnd: i
                }),
                y = null == d ? void 0 : d(m);
              if (!1 === y) throw new xy("Custom tracking stop.");
              null === y ? a = "" : !0 !== y && void 0 !== y && (a = y);
              var g = null == c ? void 0 : c(m);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? iy(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (v = g.separate);
              var b = ly(n, ry({
                  end: s
                }, o)),
                w = ly(n, ry({
                  start: i
                }, o)),
                _ = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                x = f.replace(_, "");
              if (b && (b = oy(b, {
                  replacementChars: x,
                  replacement: p,
                  separate: v
                }), x = x.slice(b.length)), a && (a = oy(a, {
                  replacementChars: x,
                  replacement: p,
                  separate: !1
                }), x = x.slice(a.length)), "insert" === t && "" === a) throw new xy("The character does not match the key value of the `replacement` object.");
              if (v) {
                var P = f.slice(s, i).replace(_, ""),
                  C = P.length - a.length;
                C < 0 ? w = w.slice(-C) : C > 0 && (w = P.slice(-C) + w)
              }
              w && (w = oy(w, {
                replacementChars: x,
                replacement: p,
                separate: v
              }));
              var j = ay(b + a + w, {
                  mask: f,
                  replacement: p,
                  separate: v,
                  showMask: h
                }),
                O = function(e) {
                  var t, r, n, o = e.inputType,
                    a = e.value,
                    s = e.addedValue,
                    i = e.beforeChangeValue,
                    l = e.replacement,
                    d = e.separate,
                    c = sy(a, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || d && "replacement" === t
                    }),
                    u = null === (t = c[i.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = c[i.length - 1]) || void 0 === r ? void 0 : r.index,
                    p = null === (n = c[i.length + s.length]) || void 0 === n ? void 0 : n.index;
                  if ("insert" === o) {
                    if (void 0 !== u) return u + 1;
                    if (void 0 !== p) return p;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteForward" === o) {
                    if (void 0 !== p) return p;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteBackward" === o) {
                    if (void 0 !== f) return f + 1;
                    if (void 0 !== p) return p
                  }
                  var h = a.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  });
                  return -1 !== h ? h : a.length
                }({
                  inputType: t,
                  value: j,
                  addedValue: a,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: p,
                  separate: v
                });
              return {
                value: j,
                selectionStart: O,
                selectionEnd: O,
                options: {
                  mask: f,
                  replacement: p,
                  separate: v
                }
              }
            }
          }])).format = function(e) {
            return dy(e, ky(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? iy(n) : n;
              return sy(dy(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, ky(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? iy(n) : n,
                a = ly(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return oy(a, {
                replacementChars: r.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, ky(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? iy(n) : n, a = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, i = "", l = 0; l < r.length; l++) {
                var d = r[l];
                0 === l && (i = "^"), a && (i += "("), i += Object.prototype.hasOwnProperty.call(o, d) ? "".concat(s ? "(?!".concat(uy(d), ")") : "", "(").concat(o[d].source, ")") : uy(d), l === r.length - 1 && (a && (i += ")?".repeat(r.length)), i += "$")
              }
              return i
            }(e, ky(r))
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
            }), t && ny(e, t)
          }(e, jy),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function Ry(e) {
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

      function Ty(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ny(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ty(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ry(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ty(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Oy = Ey, Object.defineProperty(Oy.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Iy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ly = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ny(Ny({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Iy(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dy(e.variantClassNames, e => Dy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zy = Ly({
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
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isInvalid: !1,
              isSuccess: !1,
              isDisabled: !1,
              isReadOnly: !1
            }, "foundry_8oytzok"],
            [{
              isDisabled: !1
            }, "foundry_8oytzol"]
          ]
        }),
        My = Ly({
          defaultClassName: "foundry_8oytzoz foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo10",
              true: "foundry_8oytzo11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ay = Ly({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vy = Ly({
          defaultClassName: "foundry_8oytzor",
          variantClassNames: {
            side: {
              left: "foundry_8oytzos",
              right: "foundry_8oytzot"
            },
            isDisabled: {
              false: "foundry_8oytzou",
              true: "foundry_8oytzov"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qy = Ly({
          defaultClassName: "foundry_8oytzom foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzon",
              true: "foundry_8oytzoo"
            },
            isReadOnly: {
              false: "foundry_8oytzop",
              true: "foundry_8oytzoq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fy = Ly({
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
      const By = (0, V.createContext)(null);

      function Ky() {
        const e = (0, V.useContext)(By);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Hy = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, l) => {
          const [d, c] = (0, V.useState)("text"), u = (0, V.useId)(), f = (0, V.useId)(), p = (0, V.useId)(), h = (0, H.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, i), v = e ? je.DX : "div";
          return (0, x.jsx)(By.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: s,
              labelId: u,
              inputId: f,
              descriptionId: p,
              type: d,
              setType: c,
              ...i
            },
            children: (0, x.jsx)(v, {
              ref: l,
              ...h,
              children: t
            })
          })
        }),
        Xy = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, s) => {
          const {
            isDisabled: i,
            isRequired: l,
            inputId: d,
            labelId: c
          } = Ky(), u = l && !o, f = (0, H.mergeProps)({
            id: a.id || c,
            htmlFor: a.htmlFor || d,
            "data-testid": e,
            className: Fy({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = t ? je.DX : "label";
          return (0, x.jsx)(je.s6, {
            enabled: n,
            children: (0, x.jsx)(p, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        Uy = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = Ky(), s = (0, H.mergeProps)({
            "data-testid": e,
            className: Ay({
              isDisabled: a
            })
          }, n), i = t ? je.DX : "span";
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        }),
        Gy = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = Ky(), l = (0, H.mergeProps)({
            "data-testid": e,
            className: (0, Ae.clsx)(zy({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), d = t ? je.DX : "div";
          return (0, x.jsx)(d, {
            ref: o,
            ...l,
            children: r
          })
        }),
        Wy = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: a,
          placeholder: s = " ",
          "aria-labelledby": i,
          "aria-describedby": l,
          type: d = "text",
          ...c
        }, u) => {
          const {
            isDisabled: f,
            isReadOnly: p,
            isRequired: h,
            status: v,
            labelId: m,
            inputId: y,
            descriptionId: g,
            setType: b,
            type: w
          } = Ky();
          (0, V.useEffect)(() => b(d), []);
          const _ = "invalid" === v,
            P = (0, H.mergeProps)({
              disabled: f,
              readOnly: p,
              required: h,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, H.joinStrings)(m, i),
              "aria-describedby": (0, H.joinStrings)(g, l),
              "data-testid": e,
              className: (0, Ae.clsx)(qy({
                isDisabled: f,
                isReadOnly: p
              }), "foundry_8oytzo2"),
              ..._ && {
                "aria-invalid": !0,
                "aria-errormessage": g
              },
              ..."success" === v && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...h && {
                "aria-required": !0
              }
            }, c),
            C = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                a = e.track,
                s = e.modify,
                i = (0, V.useRef)(null),
                l = (0, V.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: a,
                  modify: s
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = a, l.current.modify = s, (0, V.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(i, new Ey(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            j = (0, Ce.UP)(r && n ? C : null, u),
            O = t ? je.DX : "input";
          return (0, x.jsx)(O, {
            ref: j,
            ...P
          })
        }),
        Zy = (0, V.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: s
          } = Ky(), i = (0, H.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, Ae.clsx)(Vy({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? je.DX : qe[e];
          return (0, x.jsx)(l, {
            ref: a,
            ...i
          })
        }),
        $y = (0, V.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Ky(), n = (0, H.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzow"
          }, e);
          return (0, x.jsx)(it, {
            ref: t,
            ...n
          })
        }),
        Qy = (0, V.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a
          } = Ky(), s = "password" === o, i = s ? e : t, l = (0, H.mergeProps)({
            label: i,
            icon: s ? "Eye" : "EyeOff",
            onPress: () => {
              a(s ? "text" : "password")
            }
          }, r);
          return (0, x.jsxs)(Il, {
            children: [(0, x.jsx)(Ll, {
              children: (0, x.jsx)($y, {
                ref: n,
                ...l
              })
            }), (0, x.jsxs)(zl, {
              side: "bottom",
              align: "end",
              children: [i, (0, x.jsx)(Ml, {})]
            })]
          })
        }),
        Yy = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Ky(), i = (0, H.mergeProps)({
            className: My({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? je.DX : "div";
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Jy = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Ky(), i = (0, H.mergeProps)({
            className: "foundry_8oytzo12",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), l = r ? je.DX : Nu;
          return (0, x.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        eg = Du,
        tg = Iu;

      function rg(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          onClick: s,
          isDisabled: i,
          ...l
        } = e, d = {};
        "a" !== r && (d = {
          role: "link",
          tabIndex: i ? void 0 : 0
        });
        let {
          focusableProps: c
        } = Nh(e, t), {
          pressProps: u,
          isPressed: f
        } = yu({
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          onClick: s,
          isDisabled: i,
          ref: t
        }), p = hh(l, {
          labelable: !0
        }), h = $c(c, u), v = iu();
        return {
          isPressed: f,
          linkProps: $c(p, du(e), {
            ...h,
            ...d,
            "aria-disabled": i || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = u.onClick) || void 0 === r || r.call(u, t), cu(t, v, e.href, e.routerOptions)
            }
          })
        }
      }

      function ng(e) {
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

      function og(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ag(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? og(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ng(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : og(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sg(e, t) {
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
        lg = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ag(ag({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) ig(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sg(e.variantClassNames, e => sg(e, e => e.split(" ")[0]))
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
      const dg = (0, V.forwardRef)(({
        children: e,
        ...t
      }, r) => {
        const n = (0, Oe.zQ)(),
          o = "string" == typeof t.size ? t.size : t.size?.[n] ?? "LG",
          a = (0, H.mergeProps)({
            className: lg({
              size: o
            })
          }, t);
        return (0, x.jsx)(it, {
          appearance: "ghost",
          icon: "X",
          ...a,
          ref: r,
          children: e
        })
      });

      function cg(e) {
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

      function ug(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function fg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ug(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = cg(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ug(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function pg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fg(fg({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) hg(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pg(e.variantClassNames, e => pg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        mg = vg({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yg = vg({
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
        gg = vg({
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
      const bg = (0, V.createContext)(null);

      function wg() {
        const e = (0, V.useContext)(bg);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const _g = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const s = e ? je.DX : "div",
            i = (0, H.mergeProps)({
              className: gg({
                status: r,
                background: n
              })
            }, o);
          return (0, x.jsx)(bg.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, x.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i
            })
          })
        }),
        xg = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? je.DX : "div",
            a = (0, H.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Pg = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? je.DX : "div",
            a = (0, H.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Cg = {
          danger: Ve.CircleX,
          information: Ve.Info,
          success: Ve.CircleCheck,
          warning: Ve.TriangleAlert
        },
        jg = (0, V.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = wg(), a = e ? je.DX : Cg[o], s = (0, H.mergeProps)({
            className: yg({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, x.jsx)(a, {
            label: "",
            ref: n,
            ...s
          })
        }),
        Og = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? je.DX : "div",
            a = (0, H.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Sg = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? je.DX : "div",
            a = (0, H.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        kg = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, V.useRef)(null),
            s = (0, Ce.UP)(a, o),
            i = e ? je.DX : "a",
            {
              linkProps: l,
              isPressed: d
            } = rg(n, a),
            c = (0, H.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, x.jsx)(i, {
            "data-pressed": d,
            "data-testid": r,
            ref: s,
            ...c,
            children: t
          })
        }),
        Eg = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? je.DX : "div",
            s = (0, H.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, x.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        Rg = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const a = e ? je.DX : "div";
          return (0, x.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, Ae.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        Tg = (0, V.forwardRef)((e, t) => {
          const {
            background: r
          } = wg(), n = "none" !== r, o = (0, H.mergeProps)({
            className: mg({
              hasBackground: n
            })
          }, e);
          return (0, x.jsx)(dg, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function Ng(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Dg(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : Ng(n) && Ng(o) ? Dg(n, o) : n === o
        }))
      }

      function Ig(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function Lg(e) {
        return "number" == typeof e
      }

      function zg(e) {
        return "string" == typeof e
      }

      function Mg(e) {
        return "boolean" == typeof e
      }

      function Ag(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function Vg(e) {
        return Math.abs(e)
      }

      function qg(e) {
        return Math.sign(e)
      }

      function Fg(e, t) {
        return Vg(e - t)
      }

      function Bg(e) {
        return Gg(e).map(Number)
      }

      function Kg(e) {
        return e[Hg(e)]
      }

      function Hg(e) {
        return Math.max(0, e.length - 1)
      }

      function Xg(e, t) {
        return t === Hg(e)
      }

      function Ug(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function Gg(e) {
        return Object.keys(e)
      }

      function Wg(e, t) {
        return [e, t].reduce((e, t) => (Gg(t).forEach(r => {
          const n = e[r],
            o = t[r],
            a = Ag(n) && Ag(o);
          e[r] = a ? Wg(n, o) : o
        }), e), {})
      }

      function Zg(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function $g() {
        let e = [];
        const t = {
          add: function(r, n, o, a = {
            passive: !0
          }) {
            let s;
            if ("addEventListener" in r) r.addEventListener(n, o, a), s = () => r.removeEventListener(n, o, a);
            else {
              const e = r;
              e.addListener(o), s = () => e.removeListener(o)
            }
            return e.push(s), t
          },
          clear: function() {
            e = e.filter(e => e())
          }
        };
        return t
      }

      function Qg(e = 0, t = 0) {
        const r = Vg(e - t);

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

      function Yg(e, t, r) {
        const {
          constrain: n
        } = Qg(0, e), o = e + 1;
        let a = s(t);

        function s(e) {
          return r ? Vg((o + e) % o) : n(e)
        }

        function i() {
          return a
        }

        function l() {
          return Yg(e, i(), r)
        }
        const d = {
          get: i,
          set: function(e) {
            return a = s(e), d
          },
          add: function(e) {
            return l().set(i() + e)
          },
          clone: l
        };
        return d
      }

      function Jg(e, t, r, n, o, a, s, i, l, d, c, u, f, p, h, v, m, y, g) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, P = $g(), C = $g(), j = Qg(50, 225).constrain(p.measure(20)), O = {
          mouse: 300,
          touch: 400
        }, S = {
          mouse: 500,
          touch: 600
        }, k = h ? 43 : 25;
        let E = !1,
          R = 0,
          T = 0,
          N = !1,
          D = !1,
          I = !1,
          L = !1;

        function z(e) {
          if (!Zg(e, n) && e.touches.length >= 2) return M(e);
          const t = a.readPoint(e),
            r = a.readPoint(e, b),
            s = Fg(t, R),
            l = Fg(r, T);
          if (!D && !L) {
            if (!e.cancelable) return M(e);
            if (D = s > l, !D) return M(e)
          }
          const c = a.pointerMove(e);
          s > v && (I = !0), d.useFriction(.3).useDuration(.75), i.start(), o.add(w(c)), e.preventDefault()
        }

        function M(e) {
          const t = c.byDistance(0, !1).index !== u.get(),
            r = a.pointerUp(e) * (h ? S : O)[L ? "mouse" : "touch"],
            n = function(e, t) {
              const r = u.add(-1 * qg(e)),
                n = c.byDistance(e, !h).distance;
              return h || Vg(e) < j ? n : m && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(w(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (Vg(e) <= Vg(t)) return 0;
              const r = Fg(Vg(e), Vg(t));
              return Vg(r / e)
            }(r, n),
            s = k - 10 * o,
            i = y + o / 50;
          D = !1, N = !1, C.clear(), d.useDuration(s).useFriction(i), l.distance(n, !h), L = !1, f.emit("pointerUp")
        }

        function A(e) {
          I && (e.stopPropagation(), e.preventDefault(), I = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function i(i) {
              (Mg(g) || g(e, i)) && function(e) {
                const i = Zg(e, n);
                L = i, I = h && i && !e.buttons && E, E = Fg(o.get(), s.get()) >= 2, i && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (N = !0, a.pointerDown(e), d.useFriction(0).useDuration(0), o.set(s), function() {
                  const e = L ? r : t;
                  C.add(e, "touchmove", z, x).add(e, "touchend", M).add(e, "mousemove", z, x).add(e, "mouseup", M)
                }(), R = a.readPoint(e), T = a.readPoint(e, b), f.emit("pointerDown"))
              }(i)
            }
            const l = t;
            P.add(l, "dragstart", e => e.preventDefault(), x).add(l, "touchmove", () => {}, x).add(l, "touchend", () => {}).add(l, "touchstart", i).add(l, "mousedown", i).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", A, !0)
          },
          destroy: function() {
            P.clear(), C.clear()
          },
          pointerDown: function() {
            return N
          }
        }
      }

      function eb(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function a(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (Zg(r, t) ? r : r.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return r = e, n = e, a(e)
          },
          pointerMove: function(e) {
            const t = a(e) - a(n),
              s = o(e) - o(r) > 170;
            return n = e, s && (r = e), t
          },
          pointerUp: function(e) {
            if (!r || !n) return 0;
            const t = a(n) - a(r),
              s = o(e) - o(r),
              i = o(e) - o(n) > 170,
              l = t / s;
            return s && !i && Vg(l) > .1 ? l : 0
          },
          readPoint: a
        }
      }

      function tb(e, t, r, n, o, a, s) {
        const i = [e].concat(n);
        let l, d, c = [],
          u = !1;

        function f(e) {
          return o.measureSize(s.measure(e))
        }
        return {
          init: function(o) {
            a && (d = f(e), c = n.map(f), l = new ResizeObserver(r => {
              (Mg(a) || a(o, r)) && function(r) {
                for (const a of r) {
                  if (u) return;
                  const r = a.target === e,
                    s = n.indexOf(a.target),
                    i = r ? d : c[s];
                  if (Vg(f(r ? e : n[s]) - i) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(r)
            }), r.requestAnimationFrame(() => {
              i.forEach(e => l.observe(e))
            }))
          },
          destroy: function() {
            u = !0, l && l.disconnect()
          }
        }
      }

      function rb(e, t, r, n, o) {
        const a = o.measure(10),
          s = o.measure(50),
          i = Qg(.1, .99);
        let l = !1;

        function d() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: d,
          constrain: function(o) {
            if (!d()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = Vg(e[l] - t.get()),
              u = r.get() - t.get(),
              f = i.constrain(c / s);
            r.subtract(u * f), !o && Vg(u) < a && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function nb(e, t, r, n) {
        const o = t.min + .1,
          a = t.max + .1,
          {
            reachedMin: s,
            reachedMax: i
          } = Qg(o, a),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? i(r.get()) : -1 === e && s(r.get())
                }(t)) return;
              const o = e * (-1 * t);
              n.forEach(e => e.add(o))
            }
          };
        return l
      }

      function ob(e) {
        let t = e;

        function r(e) {
          return Lg(e) ? e : e.get()
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

      function ab(e, t) {
        const r = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          n = t.style;
        let o = null,
          a = !1;
        return {
          clear: function() {
            a || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (a) return;
            const s = (i = e.direction(t), Math.round(100 * i) / 100);
            var i;
            s !== o && (n.transform = r(s), o = s)
          },
          toggleActive: function(e) {
            a = !e
          }
        }
      }

      function sb(e, t, r, n, o, a, s, i, l) {
        const d = Bg(o),
          c = Bg(o).reverse(),
          u = function() {
            const e = s[0];
            return h(p(c, e), r, !1)
          }().concat(function() {
            const e = t - s[0] - 1;
            return h(p(d, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function p(e, t) {
          return e.reduce((e, r) => f(e, t) > 0 ? e.concat([r]) : e, [])
        }

        function h(o, s, d) {
          const c = function(e) {
            return a.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(s);
          return o.map(t => {
            const n = d ? 0 : -r,
              o = d ? r : 0,
              a = d ? "end" : "start",
              s = c[t][a];
            return {
              index: t,
              loopPoint: s,
              slideLocation: ob(-1),
              translate: ab(e, l[t]),
              target: () => i.get() > s ? n : o
            }
          })
        }
        const v = {
          canLoop: function() {
            return u.every(({
              index: e
            }) => {
              const r = d.filter(t => t !== e);
              return f(r, t) <= .1
            })
          },
          clear: function() {
            u.forEach(e => e.translate.clear())
          },
          loop: function() {
            u.forEach(e => {
              const {
                target: t,
                translate: r,
                slideLocation: n
              } = e, o = t();
              o !== n.get() && (r.to(o), n.set(o))
            })
          },
          loopPoints: u
        };
        return v
      }

      function ib(e, t, r) {
        let n, o = !1;
        return {
          init: function(a) {
            r && (n = new MutationObserver(e => {
              o || (Mg(r) || r(a, e)) && function(e) {
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

      function lb(e, t, r, n, o, a, s) {
        const {
          align: i,
          axis: l,
          direction: d,
          startIndex: c,
          loop: u,
          duration: f,
          dragFree: p,
          dragThreshold: h,
          inViewThreshold: v,
          slidesToScroll: m,
          skipSnaps: y,
          containScroll: g,
          watchResize: b,
          watchSlides: w,
          watchDrag: _,
          watchFocus: x
        } = a, P = {
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
        }, C = P.measure(t), j = r.map(P.measure), O = function(e, t) {
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
        }(l, d), S = O.measureSize(C), k = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(S), E = function(e, t) {
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
              return zg(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(i, S), R = !u && !!g, T = u || !!g, {
          slideSizes: N,
          slideSizesWithGaps: D,
          startGap: I,
          endGap: L
        } = function(e, t, r, n, o, a) {
          const {
            measureSize: s,
            startEdge: i,
            endEdge: l
          } = e, d = r[0] && o, c = function() {
            if (!d) return 0;
            const e = r[0];
            return Vg(t[i] - e[i])
          }(), u = function() {
            if (!d) return 0;
            const e = a.getComputedStyle(Kg(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(s), p = r.map((e, t, r) => {
            const n = !t,
              o = Xg(r, t);
            return n ? f[t] + c : o ? f[t] + u : r[t + 1][i] - e[i]
          }).map(Vg);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: c,
            endGap: u
          }
        }(O, C, j, r, T, o), z = function(e, t, r, n, o, a, s, i, l) {
          const {
            startEdge: d,
            endEdge: c,
            direction: u
          } = e, f = Lg(r), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return Bg(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? Bg(e).reduce((r, f, p) => {
                  const h = Kg(r) || 0,
                    v = 0 === h,
                    m = f === Hg(e),
                    y = o[d] - a[h][d],
                    g = o[d] - a[f][c],
                    b = !n && v ? u(s) : 0,
                    w = Vg(g - (!n && m ? u(i) : 0) - (y + b));
                  return p && w > t + l && r.push(f), m && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(O, S, m, u, C, j, I, L, 2), {
          snaps: M,
          snapsAligned: A
        } = function(e, t, r, n, o) {
          const {
            startEdge: a,
            endEdge: s
          } = e, {
            groupSlides: i
          } = o, l = i(n).map(e => Kg(e)[s] - e[0][a]).map(Vg).map(t.measure), d = n.map(e => r[a] - e[a]).map(e => -Vg(e)), c = i(d).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: d,
            snapsAligned: c
          }
        }(O, E, C, j, z), V = -Kg(M) + Kg(D), {
          snapsContained: q,
          scrollContainLimit: F
        } = function(e, t, r, n) {
          const o = Qg(-t + e, 0),
            a = r.map((e, t) => {
              const {
                min: n,
                max: a
              } = o, s = o.constrain(e), l = !t, d = Xg(r, t);
              return l ? a : d || i(n, s) ? n : i(a, s) ? a : s
            }).map(e => parseFloat(e.toFixed(3))),
            s = function() {
              const e = a[0],
                t = Kg(a);
              return Qg(a.lastIndexOf(e), a.indexOf(t) + 1)
            }();

          function i(e, t) {
            return Fg(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === n) return a;
              const {
                min: r,
                max: i
              } = s;
              return a.slice(r, i)
            }(),
            scrollContainLimit: s
          }
        }(S, V, A, g), B = R ? q : A, {
          limit: K
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: Qg(r ? n - e : Kg(t), n)
          }
        }(V, B, u), H = Yg(Hg(B), c, u), X = H.clone(), U = Bg(r), G = function(e, t, r, n) {
          const o = $g(),
            a = 1e3 / 60;
          let s = null,
            i = 0,
            l = 0;

          function d(e) {
            if (!l) return;
            s || (s = e, r(), r());
            const o = e - s;
            for (s = e, i += o; i >= a;) r(), i -= a;
            n(i / a), l && (l = t.requestAnimationFrame(d))
          }

          function c() {
            t.cancelAnimationFrame(l), s = null, i = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", () => {
                e.hidden && (s = null, i = 0)
              })
            },
            destroy: function() {
              c(), o.clear()
            },
            start: function() {
              l || (l = t.requestAnimationFrame(d))
            },
            stop: c,
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
        })(ie), e => (({
          scrollBody: e,
          translate: t,
          location: r,
          offsetLocation: n,
          previousLocation: o,
          scrollLooper: a,
          slideLooper: s,
          dragHandler: i,
          animation: l,
          eventHandler: d,
          scrollBounds: c,
          options: {
            loop: u
          }
        }, f) => {
          const p = e.settled(),
            h = !c.shouldConstrain(),
            v = u ? p : p && h,
            m = v && !i.pointerDown();
          m && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), u && (a.loop(e.direction()), s.loop()), t.to(n.get()), m && d.emit("settle"), v || d.emit("scroll")
        })(ie, e)), W = B[H.get()], Z = ob(W), $ = ob(W), Q = ob(W), Y = ob(W), J = function(e, t, r, n, o) {
          let a = 0,
            s = 0,
            i = o,
            l = .68,
            d = e.get(),
            c = 0;

          function u(e) {
            return i = e, p
          }

          function f(e) {
            return l = e, p
          }
          const p = {
            direction: function() {
              return s
            },
            duration: function() {
              return i
            },
            velocity: function() {
              return a
            },
            seek: function() {
              const t = n.get() - e.get();
              let o = 0;
              return i ? (r.set(e), a += t / i, a *= l, d += a, e.add(a), o = d - c) : (a = 0, r.set(n), e.set(n), o = t), s = qg(o), c = d, p
            },
            settled: function() {
              return Vg(n.get() - t.get()) < .001
            },
            useBaseFriction: function() {
              return f(.68)
            },
            useBaseDuration: function() {
              return u(o)
            },
            useFriction: f,
            useDuration: u
          };
          return p
        }(Z, Q, $, Y, f), ee = function(e, t, r, n, o) {
          const {
            reachedAny: a,
            removeOffset: s,
            constrain: i
          } = n;

          function l(e) {
            return e.concat().sort((e, t) => Vg(e) - Vg(t))[0]
          }

          function d(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const a = o.filter(e => qg(e) === n);
            return a.length ? l(a) : Kg(o) - r
          }
          return {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: c,
                  distance: u
                } = function(r) {
                  const n = e ? s(r) : i(r),
                    o = t.map((e, t) => ({
                      diff: d(e - n, 0),
                      index: t
                    })).sort((e, t) => Vg(e.diff) - Vg(t.diff)),
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
                index: c,
                distance: r
              } : {
                index: c,
                distance: r + d(t[c] - u, 0)
              }
            },
            byIndex: function(e, r) {
              return {
                index: e,
                distance: d(t[e] - o.get(), r)
              }
            },
            shortcut: d
          }
        }(u, B, V, K, Y), te = function(e, t, r, n, o, a, s) {
          function i(o) {
            const i = o.distance,
              l = o.index !== t.get();
            a.add(i), i && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (r.set(t.get()), t.set(o.index), s.emit("select"))
          }
          const l = {
            distance: function(e, t) {
              i(o.byDistance(e, t))
            },
            index: function(e, r) {
              const n = t.clone().set(e);
              i(o.byIndex(n.get(), r))
            }
          };
          return l
        }(G, H, X, J, ee, Y, s), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(K), ne = $g(), oe = function(e, t, r, n) {
          const o = {};
          let a, s = null,
            i = null,
            l = !1;
          return {
            init: function() {
              a = new IntersectionObserver(e => {
                l || (e.forEach(e => {
                  const r = t.indexOf(e.target);
                  o[r] = e
                }), s = null, i = null, r.emit("slidesInView"))
              }, {
                root: e.parentElement,
                threshold: n
              }), t.forEach(e => a.observe(e))
            },
            destroy: function() {
              a && a.disconnect(), l = !0
            },
            get: function(e = !0) {
              if (e && s) return s;
              if (!e && i) return i;
              const t = function(e) {
                return Gg(o).reduce((t, r) => {
                  const n = parseInt(r),
                    {
                      isIntersecting: a
                    } = o[n];
                  return (e && a || !e && !a) && t.push(n), t
                }, [])
              }(e);
              return e && (s = t), e || (i = t), t
            }
          }
        }(t, r, s, v), {
          slideRegistry: ae
        } = function(e, t, r, n, o, a) {
          const {
            groupSlides: s
          } = o, {
            min: i,
            max: l
          } = n;
          return {
            slideRegistry: function() {
              const n = s(a),
                o = !e || "keepSnaps" === t;
              return 1 === r.length ? [a] : o ? n : n.slice(i, l).map((e, t, r) => {
                const n = !t,
                  o = Xg(r, t);
                return n ? Ug(Kg(r[0]) + 1) : o ? Ug(Hg(a) - Kg(r)[0] + 1, Kg(r)[0]) : e
              })
            }()
          }
        }(R, g, B, F, z, U), se = function(e, t, r, n, o, a, s, i) {
          const l = {
            passive: !0,
            capture: !0
          };
          let d = 0;

          function c(e) {
            "Tab" === e.code && (d = (new Date).getTime())
          }
          return {
            init: function(u) {
              i && (a.add(document, "keydown", c, !1), t.forEach((t, c) => {
                a.add(t, "focus", t => {
                  (Mg(i) || i(u, t)) && function(t) {
                    if ((new Date).getTime() - d > 10) return;
                    s.emit("slideFocusStart"), e.scrollLeft = 0;
                    const a = r.findIndex(e => e.includes(t));
                    Lg(a) && (o.useDuration(0), n.index(a, 0), s.emit("slideFocus"))
                  }(c)
                }, l)
              }))
            }
          }
        }(e, r, ae, te, J, ne, s, x), ie = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: s,
          containerRect: C,
          slideRects: j,
          animation: G,
          axis: O,
          dragHandler: Jg(O, e, n, o, Y, eb(O, o), Z, G, te, J, ee, H, s, k, p, h, y, .68, _),
          eventStore: ne,
          percentOfView: k,
          index: H,
          indexPrevious: X,
          limit: K,
          location: Z,
          offsetLocation: Q,
          previousLocation: $,
          options: a,
          resizeHandler: tb(t, s, o, r, O, b, P),
          scrollBody: J,
          scrollBounds: rb(K, Q, Y, J, k),
          scrollLooper: nb(V, K, Q, [Z, Q, $, Y]),
          scrollProgress: re,
          scrollSnapList: B.map(re.get),
          scrollSnaps: B,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: sb(O, S, V, N, D, M, B, Q, r),
          slideFocus: se,
          slidesHandler: ib(t, s, w),
          slidesInView: oe,
          slideIndexes: U,
          slideRegistry: ae,
          slidesToScroll: z,
          target: Y,
          translate: ab(O, t)
        };
        return ie
      }
      const db = {
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

      function cb(e) {
        function t(e, t) {
          return Wg(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = Gg(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => Gg(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function ub(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          a = cb(o),
          s = function(e) {
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
          i = $g(),
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
            mergeOptions: d,
            optionsAtMedia: c,
            optionsMediaQueries: u
          } = a,
          {
            on: f,
            off: p,
            emit: h
          } = l,
          v = O;
        let m, y, g, b, w = !1,
          _ = d(db, ub.globalOptions),
          x = d(_),
          P = [];

        function C(t) {
          const r = lb(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? C(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function j(t, r) {
          w || (_ = d(_, t), x = c(_), P = r || P, function() {
            const {
              container: t,
              slides: r
            } = x, n = zg(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = zg(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), m = C(x), u([_, ...P.map(({
            options: e
          }) => e)]).forEach(e => i.add(e, "change", O)), x.active && (m.translate.to(m.location.get()), m.animation.init(), m.slidesInView.init(), m.slideFocus.init(R), m.eventHandler.init(R), m.resizeHandler.init(R), m.slidesHandler.init(R), m.options.loop && m.slideLooper.loop(), g.offsetParent && b.length && m.dragHandler.init(R), y = s.init(R, P)))
        }

        function O(e, t) {
          const r = E();
          S(), j(d({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function S() {
          m.dragHandler.destroy(), m.eventStore.clear(), m.translate.clear(), m.slideLooper.clear(), m.resizeHandler.destroy(), m.slidesHandler.destroy(), m.slidesInView.destroy(), m.animation.destroy(), s.destroy(), i.clear()
        }

        function k(e, t, r) {
          x.active && !w && (m.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), m.scrollTo.index(e, r || 0))
        }

        function E() {
          return m.index.get()
        }
        const R = {
          canScrollNext: function() {
            return m.index.add(1).get() !== E()
          },
          canScrollPrev: function() {
            return m.index.add(-1).get() !== E()
          },
          containerNode: function() {
            return g
          },
          internalEngine: function() {
            return m
          },
          destroy: function() {
            w || (w = !0, i.clear(), S(), l.emit("destroy"), l.clear())
          },
          off: p,
          on: f,
          emit: h,
          plugins: function() {
            return y
          },
          previousScrollSnap: function() {
            return m.indexPrevious.get()
          },
          reInit: v,
          rootNode: function() {
            return e
          },
          scrollNext: function(e) {
            k(m.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            k(m.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return m.scrollProgress.get(m.offsetLocation.get())
          },
          scrollSnapList: function() {
            return m.scrollSnapList
          },
          scrollTo: k,
          selectedScrollSnap: E,
          slideNodes: function() {
            return b
          },
          slidesInView: function() {
            return m.slidesInView.get()
          },
          slidesNotInView: function() {
            return m.slidesInView.get(!1)
          }
        };
        return j(t, r), setTimeout(() => l.emit("init"), 0), R
      }

      function fb(e = {}, t = []) {
        const r = (0, V.useRef)(e),
          n = (0, V.useRef)(t),
          [o, a] = (0, V.useState)(),
          [s, i] = (0, V.useState)(),
          l = (0, V.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, V.useEffect)(() => {
          Dg(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, V.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = Ig(e),
              n = Ig(t);
            return r.every((e, t) => Dg(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, V.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && s) {
            ub.globalOptions = fb.globalOptions;
            const e = ub(s, r.current, n.current);
            return a(e), () => e.destroy()
          }
          a(void 0)
        }, [s, a]), [i, o]
      }

      function pb(e = {}) {
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
              slideRects: s
            } = t.internalEngine();
            "y" !== o && (r = s.map(e => e.height), n.forEach(e => t.on(e, a)), a())
          },
          destroy: function() {
            n.forEach(e => t.off(e, a));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      ub.globalOptions = void 0, fb.globalOptions = void 0, pb.globalOptions = void 0;
      const hb = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function vb(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function mb(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function yb(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function gb(e = {}) {
        let t, r, n, o, a = [],
          s = [];
        const i = ["select"],
          l = ["pointerDown", "pointerUp"],
          d = ["slidesInView"],
          c = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function u(e, t) {
          ("pointerDown" === t ? yb : mb)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            a = e.map(e => o[e]);
          return n.forEach(e => mb(e, r)), a.forEach(e => yb(e, r)), e
        }

        function p() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          a = f(t, a, c.snapped)
        }

        function h() {
          const e = r.slidesInView();
          s = f(e, s, c.inView)
        }
        const v = {
          name: "classNames",
          options: e,
          init: function(a, s) {
            r = a;
            const {
              mergeOptions: f,
              optionsAtMedia: v
            } = s, m = f(hb, gb.globalOptions), y = f(m, e);
            t = v(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, w = !!g;
            t.loop && b && (c.loop = vb(t.loop), yb(n, c.loop)), t.draggable && w && (c.draggable = vb(t.draggable), yb(n, c.draggable)), t.dragging && (c.dragging = vb(t.dragging), l.forEach(e => r.on(e, u))), t.snapped && (c.snapped = vb(t.snapped), i.forEach(e => r.on(e, p)), p()), t.inView && (c.inView = vb(t.inView), d.forEach(e => r.on(e, h)), h())
          },
          destroy: function() {
            l.forEach(e => r.off(e, u)), i.forEach(e => r.off(e, p)), d.forEach(e => r.off(e, h)), mb(n, c.loop), mb(n, c.draggable), mb(n, c.dragging), f([], a, c.snapped), f([], s, c.inView), Object.keys(c).forEach(e => {
              c[e] = []
            })
          }
        };
        return v
      }
      gb.globalOptions = void 0;

      function bb(e) {
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

      function wb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wb(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = bb(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Pb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cb = "foundry_qmpv6yv",
        jb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _b(_b({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Pb(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xb(e.variantClassNames, e => xb(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_qmpv6y8",
          variantClassNames: {
            status: {
              danger: "foundry_qmpv6y9",
              information: "foundry_qmpv6ya",
              success: "foundry_qmpv6yb",
              warning: "foundry_qmpv6yc"
            },
            background: {
              static: "foundry_qmpv6yd",
              "two-tone": "foundry_qmpv6ye",
              neutral: "foundry_qmpv6yf"
            },
            align: {
              left: "foundry_qmpv6yg",
              center: "foundry_qmpv6yh"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_qmpv6yi"],
            [{
              status: "information",
              background: "static"
            }, "foundry_qmpv6yj"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_qmpv6yk"],
            [{
              status: "success",
              background: "static"
            }, "foundry_qmpv6yl"]
          ]
        });
      const Ob = (0, V.createContext)(null);

      function Sb() {
        const e = (0, V.useContext)(Ob);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const kb = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: a,
          align: s = "left",
          ...i
        }, l) => {
          const d = (({
              loopPagination: e = !0
            }) => {
              const t = (0, Ce.rl)(),
                r = (0, Ce.jt)(),
                [n, o] = (0, V.useState)([]),
                a = n.length,
                [s, i] = (0, V.useState)(0),
                [l, d] = fb({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [pb(), gb()]),
                c = (0, V.useRef)(0),
                u = (0, V.useRef)(!1),
                f = n[s],
                p = (0, V.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [d]),
                h = (0, V.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                v = (0, V.useCallback)((e, t) => {
                  const r = e.internalEngine(),
                    n = e.scrollProgress(),
                    o = e.slidesInView(),
                    a = "scroll" === t;
                  e.scrollSnapList().forEach((t, s) => {
                    let i = t - n;
                    r.slideRegistry[s].forEach(s => {
                      if (a && !o.includes(s)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                        const r = e.target();
                        if (s === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (i = t - (1 + n)), 1 === e && (i = t + (1 - n))
                        }
                      });
                      const l = (d = 1 - Math.abs(i * c.current), Math.min(Math.max(d, 0), 1)).toString();
                      var d;
                      e.slideNodes()[s].style.opacity = l
                    })
                  })
                }, []);
              return (0, V.useEffect)(() => {
                d && (h(d), v(d), d.on("reInit", h).on("reInit", v).on("scroll", v).on("slideFocus", v))
              }, [d, v]), (0, V.useEffect)(() => {
                d && (p(d), d.on("select", p).on("reInit", p))
              }, [d, p]), {
                setAlerts: o,
                alerts: n,
                numAlerts: a,
                emblaRef: l,
                prevAlert: () => d?.scrollPrev(r),
                nextAlert: () => d?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: s,
                setCurrentAlertIndex: i,
                isInitialized: u.current,
                loopPagination: e,
                canScrollNext: () => d?.canScrollNext() || !1,
                canScrollPrev: () => d?.canScrollPrev() || !1
              }
            })({
              loopPagination: n
            }),
            {
              currentAlert: c,
              isInitialized: u,
              setAlerts: f,
              numAlerts: p
            } = d;
          (0, V.useEffect)(() => {
            o && a && f([{
              status: o,
              background: a,
              align: s
            }])
          }, []);
          const h = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            v = (0, H.mergeProps)({
              className: jb(c)
            }, h, i),
            m = e ? je.DX : "div";
          return (0, x.jsx)(Ob.Provider, {
            value: d,
            children: (0, x.jsx)(m, {
              ref: l,
              "data-testid": r,
              "data-initialized": u,
              ...v,
              children: t
            })
          })
        }),
        Eb = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Rb = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Sb();
          if (!e && !n || !n?.status) return null;
          const o = e || Eb[n.status],
            a = qe[o],
            s = (0, H.mergeProps)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, x.jsx)(a, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        Tb = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? je.DX : "div",
            a = (0, H.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Nb = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...a
        }, s) => {
          const i = e ? je.DX : "div",
            l = (0, H.mergeProps)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, x.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        Db = (0, V.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a
          } = Sb(), s = (0, H.mergeProps)({
            className: "foundry_qmpv6ym"
          }, r), i = (0, Ce.UP)(a, n), l = V.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, V.useEffect)(() => {
            l && o(l)
          }, []), (0, x.jsx)("div", {
            ref: i,
            "data-testid": e,
            ...s,
            children: (0, x.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Ib = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, V.useRef)(null),
            s = (0, Ce.UP)(a, o),
            i = e ? je.DX : "a",
            {
              linkProps: l,
              isPressed: d
            } = rg(n, a),
            c = (0, H.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, x.jsx)(i, {
            "data-pressed": d,
            "data-testid": r,
            ref: s,
            ...l,
            ...c,
            children: t
          })
        }),
        Lb = (0, V.forwardRef)((e, t) => {
          const r = (0, H.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, x.jsx)(dg, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        zb = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? je.DX : "div",
            s = (0, H.mergeProps)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, x.jsx)(a, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        Mb = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Sb(), a = (0, H.mergeProps)({
            className: Cb
          }, t);
          return (0, x.jsx)(it, {
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
        Ab = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Sb(), a = (0, H.mergeProps)({
            className: Cb
          }, t);
          return (0, x.jsx)(it, {
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
        Vb = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Sb(), a = (0, H.mergeProps)({
            className: "foundry_qmpv6yu foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn foundry_tdsdcdq"
          }, t);
          return (0, x.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [n + 1, "/", o]
          })
        });

      function qb(e) {
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

      function Fb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Bb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fb(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = qb(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Kb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Hb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Bb(Bb({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Hb(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kb(e.variantClassNames, e => Kb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ub = Xb({
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
        Gb = Xb({
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
        Wb = Xb({
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
      const Zb = (0, V.createContext)(null);

      function $b() {
        const e = (0, V.useContext)(Zb);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Qb = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: a,
          hasBorder: s,
          isDisabled: i,
          ...l
        }, d) => {
          const c = {
              size: n,
              background: o,
              color: a,
              hasBorder: s,
              isDisabled: i
            },
            u = (0, H.mergeProps)({
              className: Gb(c)
            }, l),
            f = e ? je.DX : "div";
          return (0, x.jsx)(Zb.Provider, {
            value: c,
            children: (0, x.jsx)(f, {
              ref: d,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        Yb = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = $b(), s = e ? je.DX : "div", i = (0, H.mergeProps)({
            className: Wb({
              size: a
            })
          }, n);
          return (0, x.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        Jb = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = qe[e],
            o = (0, H.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, x.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        ew = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = $b(), a = (0, H.mergeProps)({
            className: Ub({
              background: n
            })
          }, t);
          return (0, x.jsx)(it, {
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
      var tw = "ToastProvider",
        [rw, nw, ow] = (0, Kl.N)("Toast"),
        [aw, sw] = (0, Bi.A)("Toast", [ow]),
        [iw, lw] = aw(tw),
        dw = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            children: s
          } = e, [i, l] = V.useState(null), [d, c] = V.useState(0), u = V.useRef(!1), f = V.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${tw}\`. Expected non-empty \`string\`.`), (0, x.jsx)(rw.Provider, {
            scope: t,
            children: (0, x.jsx)(iw, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: d,
              viewport: i,
              onViewportChange: l,
              onToastAdd: V.useCallback(() => c(e => e + 1), []),
              onToastRemove: V.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: u,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      dw.displayName = tw;
      var cw = "ToastViewport",
        uw = ["F8"],
        fw = "toast.viewportPause",
        pw = "toast.viewportResume",
        hw = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = uw,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = lw(cw, r), i = nw(r), l = V.useRef(null), d = V.useRef(null), c = V.useRef(null), u = V.useRef(null), f = (0, Fi.s)(t, u, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = s.toastCount > 0;
          V.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), V.useEffect(() => {
            const e = l.current,
              t = u.current;
            if (h && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(fw);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(pw);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !1
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
          }, [h, s.isClosePausedRef]);
          const v = V.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Nw(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return V.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void d.current?.focus();
                  const o = v({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === r);
                  Dw(o.slice(a + 1)) ? t.preventDefault() : n ? d.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, v]), (0, x.jsxs)(Ki.lg, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, x.jsx)(mw, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                Dw(v({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, x.jsx)(rw.Slot, {
              scope: r,
              children: (0, x.jsx)(Wi.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), h && (0, x.jsx)(mw, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Dw(v({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      hw.displayName = cw;
      var vw = "ToastFocusProxy",
        mw = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = lw(vw, r);
          return (0, x.jsx)(Qi.VisuallyHidden, {
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
      mw.displayName = vw;
      var yw = "Toast",
        gw = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, l] = (0, $i.useControllableState)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: yw
          });
          return (0, x.jsx)(Gi.C, {
            present: r || i,
            children: (0, x.jsx)(_w, {
              open: i,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Lu.c)(e.onPause),
              onResume: (0, Lu.c)(e.onResume),
              onSwipeStart: (0, qi.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, qi.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, qi.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, qi.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      gw.displayName = yw;
      var [bw, ww] = aw(yw, {
        onClose() {}
      }), _w = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: a,
          onClose: s,
          onEscapeKeyDown: i,
          onPause: l,
          onResume: d,
          onSwipeStart: c,
          onSwipeMove: u,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...h
        } = e, v = lw(yw, r), [m, y] = V.useState(null), g = (0, Fi.s)(t, e => y(e)), b = V.useRef(null), w = V.useRef(null), _ = o || v.duration, P = V.useRef(0), C = V.useRef(_), j = V.useRef(0), {
          onToastAdd: O,
          onToastRemove: S
        } = v, k = (0, Lu.c)(() => {
          const e = m?.contains(document.activeElement);
          e && v.viewport?.focus(), s()
        }), E = V.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(j.current), P.current = (new Date).getTime(), j.current = window.setTimeout(k, e))
        }, [k]);
        V.useEffect(() => {
          const e = v.viewport;
          if (e) {
            const t = () => {
                E(C.current), d?.()
              },
              r = () => {
                const e = (new Date).getTime() - P.current;
                C.current = C.current - e, window.clearTimeout(j.current), l?.()
              };
            return e.addEventListener(fw, r), e.addEventListener(pw, t), () => {
              e.removeEventListener(fw, r), e.removeEventListener(pw, t)
            }
          }
        }, [v.viewport, _, l, d, E]), V.useEffect(() => {
          a && !v.isClosePausedRef.current && E(_)
        }, [a, _, v.isClosePausedRef, E]), V.useEffect(() => (O(), () => S()), [O, S]);
        const R = V.useMemo(() => m ? Ew(m) : null, [m]);
        return v.viewport ? (0, x.jsxs)(x.Fragment, {
          children: [R && (0, x.jsx)(xw, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: R
          }), (0, x.jsx)(bw, {
            scope: r,
            onClose: k,
            children: ji.createPortal((0, x.jsx)(rw.ItemSlot, {
              scope: r,
              children: (0, x.jsx)(Ki.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, qi.mK)(i, () => {
                  v.isFocusedToastEscapeKeyDownRef.current || k(), v.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, x.jsx)(Wi.sG.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": v.swipeDirection,
                  ...h,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, qi.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, k()))
                  }),
                  onPointerDown: (0, qi.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, qi.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(v.swipeDirection),
                      a = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
                      s = o ? a(0, t) : 0,
                      i = o ? 0 : a(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      d = {
                        x: s,
                        y: i
                      },
                      f = {
                        originalEvent: e,
                        delta: d
                      };
                    n ? (w.current = d, Rw("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : Tw(d, v.swipeDirection, l) ? (w.current = d, Rw("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: (0, qi.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Tw(t, v.swipeDirection, v.swipeThreshold) ? Rw("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : Rw("toast.swipeCancel", f, n, {
                        discrete: !0
                      }), r.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), v.viewport)
          })]
        }) : null
      }), xw = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = lw(yw, t), [a, s] = V.useState(!1), [i, l] = V.useState(!1);
        return function(e = () => {}) {
          const t = (0, Lu.c)(e);
          (0, zu.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), V.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, x.jsx)(Ui.Portal, {
          asChild: !0,
          children: (0, x.jsx)(Qi.VisuallyHidden, {
            ...n,
            children: a && (0, x.jsxs)(x.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, x.jsx)(Wi.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Pw = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, x.jsx)(Wi.sG.div, {
          ...n,
          ref: t
        })
      });
      Pw.displayName = "ToastDescription";
      var Cw = "ToastAction",
        jw = V.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, x.jsx)(kw, {
            altText: r,
            asChild: !0,
            children: (0, x.jsx)(Sw, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Cw}\`. Expected non-empty \`string\`.`), null)
        });
      jw.displayName = Cw;
      var Ow = "ToastClose",
        Sw = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = ww(Ow, r);
          return (0, x.jsx)(kw, {
            asChild: !0,
            children: (0, x.jsx)(Wi.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, qi.mK)(e.onClick, o.onClose)
            })
          })
        });
      Sw.displayName = Ow;
      var kw = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, x.jsx)(Wi.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function Ew(e) {
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
              } else t.push(...Ew(e))
          }
        }), t
      }

      function Rw(e, t, r, {
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
        }), n ? (0, Wi.hO)(o, a) : o.dispatchEvent(a)
      }
      var Tw = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function Nw(e) {
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

      function Dw(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var Iw = dw,
        Lw = hw,
        zw = gw,
        Mw = Pw,
        Aw = jw,
        Vw = Sw;

      function qw(e) {
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

      function Fw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Bw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fw(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = qw(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Kw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Hw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Bw(Bw({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Hw(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kw(e.variantClassNames, e => Kw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Uw = Xw({
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
        Gw = Xw({
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
        Ww = Xw({
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
      const Zw = ({
          testId: e,
          ...t
        }) => (0, x.jsx)(Iw, {
          "data-testid": e,
          ...t
        }),
        $w = (0, V.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const a = (0, H.mergeProps)({
            className: Ww({
              position: r
            })
          }, n);
          return (0, x.jsx)(Lw, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        Qw = (0, V.createContext)(null);

      function Yw() {
        const e = (0, V.useContext)(Qw);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Jw = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const s = e ? je.DX : zw,
            i = (0, H.mergeProps)({
              className: Gw({
                appearance: n
              })
            }, o);
          return (0, x.jsx)(Qw.Provider, {
            value: {
              appearance: n
            },
            children: (0, x.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        e_ = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? je.DX : Mw,
            s = (0, H.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, x.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        t_ = {
          danger: Ve.CircleX,
          information: Ve.Info,
          success: Ve.CircleCheck,
          warning: Ve.TriangleAlert,
          avocado: Ve.CircleCheck
        },
        r_ = (0, V.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = Yw(), o = e ? je.DX : t_[n], a = (0, H.mergeProps)({
            className: Uw({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, x.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        n_ = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, H.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, x.jsx)(Aw, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, x.jsx)(je.DX, {
              children: t
            }) : (0, x.jsx)(Qe, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        o_ = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, a) => {
          const s = (0, H.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, x.jsx)(Vw, {
            ref: a,
            "data-testid": r,
            ...s,
            children: e ? (0, x.jsx)(je.DX, {
              children: t
            }) : (0, x.jsx)(dg, {
              size: "SM",
              label: n
            })
          })
        });

      function a_(e) {
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

      function s_(e, t) {
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
          t % 2 ? s_(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = a_(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function l_(e, t) {
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
        c_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = i_(i_({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) d_(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return l_(e.variantClassNames, e => l_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        u_ = c_({
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
        f_ = c_({
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
        p_ = c_({
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

      function h_() {
        const e = (0, V.useContext)(v_);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const v_ = (0, V.createContext)(null),
        m_ = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, a) => {
          const s = (0, H.mergeProps)({
              className: p_({
                size: n
              })
            }, o),
            i = r ? je.DX : "ol";
          return (0, x.jsx)(v_.Provider, {
            value: {
              size: n
            },
            children: (0, x.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        y_ = (0, V.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, V.useRef)(null),
            {
              size: i
            } = h_(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: r,
                isDisabled: n,
                "aria-current": o,
                elementType: a = "a",
                ...s
              } = e, {
                linkProps: i
              } = rg({
                isDisabled: n || r,
                elementType: a,
                ...s
              }, t), l = {};
              return /^h[1-6]$/.test(a) || (l = i), r && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": n,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, s),
            d = r ? je.DX : "a",
            c = (0, H.mergeProps)({
              className: (0, Ae.clsx)(u_({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, x.jsx)("li", {
            className: f_({
              size: i
            }),
            ref: a,
            children: (0, x.jsx)(d, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        g_ = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = qe[e];
          return (0, x.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        b_ = (0, V.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [s, i] = (0, V.useState)(r), {
            size: l
          } = h_(), d = (0, H.mergeProps)({
            className: f_({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, x.jsx)("li", {
            ref: a,
            ...d,
            children: (0, x.jsxs)(Pp, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, x.jsx)(Cp, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, x.jsx)(Sp, {
                children: (0, x.jsx)(kp, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, x.jsx)(Ep, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        w_ = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? je.DX : Rp,
            s = (0, H.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, x.jsx)(a, {
            ref: o,
            ...s,
            children: e
          })
        });

      function __(e) {
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

      function x_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function P_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? x_(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = __(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function C_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var j_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        O_ = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = P_(P_({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) j_(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return C_(e.variantClassNames, e => C_(e, e => e.split(" ")[0]))
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
      const S_ = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          ...n
        }, o) => {
          const a = e ? je.DX : "div",
            s = (0, H.mergeProps)({
              className: O_({
                appearance: r
              })
            }, n);
          return (0, x.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        k_ = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? je.DX : "div",
            s = (0, H.mergeProps)({
              className: "foundry_18omk9t4 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo"
            }, n);
          return (0, x.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        E_ = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = qe[e],
            o = (0, H.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t3",
              label: ""
            }, t);
          return (0, x.jsx)(n, {
            ref: r,
            ...o
          })
        });
      var R_ = /^--/;

      function T_(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || R_.test(e) || D_.hasOwnProperty(e) && D_[e] ? ("" + t).trim() : t + "px"
      }
      var N_ = {},
        D_ = {
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
        I_ = ["Webkit", "Ms", "Moz", "O"];
      D_ = Object.keys(D_).reduce((e, t) => (I_.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), D_);
      var L_ = /^(matrix|translate|scale|rotate|skew)/,
        z_ = /^(translate)/,
        M_ = /^(rotate|skew)/,
        A_ = (e, t) => ko.num(e) && 0 !== e ? e + t : e,
        V_ = (e, t) => ko.arr(e) ? e.every(e => V_(e, t)) : ko.num(e) ? e === t : parseFloat(e) === t,
        q_ = class extends ls {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push(e => [`translate3d(${e.map(e=>A_(e,"px")).join(",")})`, V_(e, 0)])), To(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push(e => [e, "" === e]);
              else if (L_.test(t)) {
                if (delete n[t], ko.und(e)) return;
                const r = z_.test(t) ? "px" : M_.test(t) ? "deg" : "";
                o.push(No(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${A_(o,r)})`, V_(o, 0)] : e => [`${t}(${e.map(e=>A_(e,r)).join(",")})`, V_(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new F_(o, a)), super(n)
          }
        },
        F_ = class extends Ra {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Ro(this.inputs, (r, n) => {
              const o = Sa(r[0]),
                [a, s] = this.transforms[n](ko.arr(o) ? o : r.map(Sa));
              e += " " + a, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Ro(this.inputs, e => Ro(e, e => Oa(e) && Na(e, this)))
          }
          observerRemoved(e) {
            0 == e && Ro(this.inputs, e => Ro(e, e => Oa(e) && Da(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Ea(this, e)
          }
        };
      Oo.assign({
        batchedUpdates: ji.unstable_batchedUpdates,
        createStringInterpolator: Ha,
        colors: Qo
      });
      var B_ = vs(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: a,
                scrollTop: s,
                scrollLeft: i,
                viewBox: l,
                ...d
              } = t,
              c = Object.values(d),
              u = Object.keys(d).map(t => r || e.hasAttribute(t) ? t : N_[t] || (N_[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = T_(t, o[t]);
                R_.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== i && (e.scrollLeft = i), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new q_(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        K_ = B_.animated,
        H_ = r(15034);
      const X_ = () => {
          const e = (0, Ce.Ub)(H.breakpoints.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        U_ = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function G_(e) {
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

      function W_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Z_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? W_(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = G_(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Q_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Y_ = "foundry_8kowh41",
        J_ = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Z_(Z_({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Q_(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $_(e.variantClassNames, e => $_(e, e => e.split(" ")[0]))
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
      const ex = (0, V.createContext)(null);

      function tx() {
        const e = (0, V.useContext)(ex);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const rx = ({
          testId: e,
          defaultOpen: t,
          onOpenChange: r,
          isOpen: n,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: a,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: i,
          ...l
        }) => {
          const d = (0, H.mergeProps)({
              "data-testid": e
            }, l),
            [c, u] = (0, Ce.ic)({
              prop: n,
              defaultProp: t ?? !1,
              onChange: r
            }),
            f = (0, Ce.ZC)(c);
          return (0, x.jsx)(ex.Provider, {
            value: {
              isOpen: c,
              isControlled: void 0 !== n,
              openImmediately: !(void 0 !== f || !t),
              setIsOpen: u,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: a,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: i,
              contentId: (0, V.useId)(),
              descriptionId: (0, V.useId)(),
              triggerRef: (0, V.useRef)(null),
              dialogSpringRef: gi(),
              overlaySpringRef: gi()
            },
            children: (0, x.jsx)(H_.Root, {
              open: c,
              onOpenChange: u,
              ...d
            })
          })
        },
        nx = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: a
          } = tx(), s = U_(), i = (0, Ce.jt)(), l = bi(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: Es.stiff,
            immediate: i || a
          }), d = (0, H.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), c = K_(H_.Overlay);
          return (0, V.useEffect)(() => {
            o.start()
          }, [n]), l((e, t) => t ? (0, x.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...d,
            style: e
          }) : null)
        }),
        ox = (0, V.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, a) => {
          const {
            isOpen: s,
            setIsOpen: i,
            openImmediately: l,
            contentId: d,
            triggerRef: c,
            onOpenTransitionStart: u,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: h,
            dialogSpringRef: v,
            overlaySpringRef: m
          } = tx(), y = (0, Ce.rl)(), g = (0, Ce.jt)(), b = (0, V.useRef)(null), w = X_(), {
            bindDrag: _
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const a = U_(),
              s = X_(),
              i = (0, V.useRef)();
            var l;
            return {
              bindDrag: (l = ({
                velocity: [, l],
                offset: [, d],
                direction: [, c],
                cancel: u,
                last: f,
                first: p,
                target: h
              }) => {
                const {
                  height: v
                } = e.current.getBoundingClientRect();
                if (p && (i.current = function(e, t) {
                    for (; e;) {
                      if (e.scrollHeight > e.clientHeight) {
                        if (0 !== e.scrollTop) return !1;
                        if (t < 0) return !1;
                        if ("dialog" === e.getAttribute("role")) return !0
                      }
                      e = e.parentNode
                    }
                  }(h, c)), (!i.current || d < -70) && u(), i.current) {
                  const e = 100 * (v - d) / v;
                  r.start({
                    ...a(e),
                    immediate: !0
                  }), t.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (d > .5 * v || l > .5 && c > 0 ? (t.start({
                  ...s(0),
                  immediate: !1,
                  config: Es.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...a(0),
                  immediate: !1,
                  config: Es.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: Es.stiff
                }), r.start({
                  ...a(100),
                  immediate: !1,
                  config: Es.stiff
                })))
              }, qr(Fr), nn({
                drag: l
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
              } || {}, "drag"))
            }
          }({
            dialogRef: b,
            overlaySpringRef: m,
            dialogSpringRef: v,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: h
          }), P = bi(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: Es.stiff,
            ref: v,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : h?.()
            }
          });
          (0, V.useEffect)(() => {
            v.start()
          }, [s]);
          const C = (0, Ce.UP)(b, a),
            j = y && !g && !n && _(),
            O = (0, H.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: d
            }, j || {}, o),
            S = K_(H_.Content);
          return P((t, r) => r ? (0, x.jsx)(S, {
            forceMount: !0,
            ref: C,
            ...O,
            style: t,
            children: e
          }) : null)
        }),
        ax = ({
          testId: e,
          ...t
        }) => {
          const r = (0, H.mergeProps)({
            "data-testid": e
          }, t);
          return (0, x.jsx)(H_.Portal, {
            forceMount: !0,
            ...r
          })
        },
        sx = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, x.jsx)(H_.Title, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ix = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            "data-testid": t
          }, r);
          return (0, x.jsx)(H_.Description, {
            ref: n,
            ...o,
            children: e
          })
        }),
        lx = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, r);
          return (0, x.jsxs)(yf, {
            ref: n,
            ...o,
            children: [(0, x.jsx)(gf, {
              className: "foundry_xov33ne",
              children: e
            }), (0, x.jsx)(bf, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, x.jsx)(wf, {
                className: "foundry_xov33ng"
              })
            })]
          })
        }),
        dx = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n2"
            }, n),
            s = e ? je.DX : "div";
          return (0, x.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        cx = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n3"
            }, n),
            s = e ? je.DX : "div";
          return (0, x.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        ux = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n8"
            }, n),
            s = e ? je.DX : "header";
          return (0, x.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        fx = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nc"
            }, n),
            s = e ? je.DX : "footer";
          return (0, x.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        px = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n,
          ...o
        }, a) => {
          const s = (0, H.mergeProps)({
              "data-testid": r,
              className: J_({
                align: n
              })
            }, o),
            i = e ? je.DX : H_.Title;
          return (0, x.jsx)(i, {
            ref: a,
            ...s,
            children: t
          })
        }),
        hx = (0, V.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: a,
            setIsOpen: s
          } = tx(), i = (0, H.mergeProps)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? r?.(e), !a && s(!1)
            }
          }, n);
          return (0, x.jsx)(dg, {
            ...i,
            size: "MD",
            ref: o,
            children: e
          })
        }),
        vx = (0, V.forwardRef)((e, t) => {
          const r = (0, H.mergeProps)({
            className: "foundry_xov33n5"
          }, e);
          return (0, x.jsx)(it, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "SM"
          })
        }),
        mx = (0, V.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: a,
            setIsOpen: s
          } = tx(), i = (0, H.mergeProps)({
            className: Y_,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !a && s(!1)
            }
          }, n);
          return (0, x.jsx)(Qe, {
            ref: o,
            ...i,
            children: e
          })
        }),
        yx = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          onPress: r,
          onClick: n,
          ...o
        }, a) => {
          const {
            isControlled: s,
            setIsOpen: i,
            isOpen: l,
            contentId: d,
            triggerRef: c
          } = tx(), u = (0, Ce.UP)(c, a), f = (0, H.mergeProps)({
            className: Y_,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": d,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !s && i(!0)
            }
          }, o), p = e ? je.DX : H_.Trigger;
          return (0, x.jsx)(p, {
            ...f,
            ref: u,
            children: t
          })
        });

      function gx(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const r = () => {
          const r = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const n = r.reduce((t, {
              useScope: r,
              scopeName: n
            }) => ({
              ...t,
              ...r(e)[`__scope${n}`]
            }), {});
            return V.useMemo(() => ({
              [`__scope${t.scopeName}`]: n
            }), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }
      var bx = r(80649),
        wx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = (0, bx.createSlot)(`Primitive.${t}`),
            n = V.forwardRef((e, n) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, x.jsx)(s, {
                ...a,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {}),
        _x = r(36553);

      function xx() {
        return () => {}
      }
      var Px = "Avatar",
        [Cx, jx] = function(e, t = []) {
          let r = [];
          const n = () => {
            const t = r.map(e => V.createContext(e));
            return function(r) {
              const n = r?.[e] || t;
              return V.useMemo(() => ({
                [`__scope${e}`]: {
                  ...r,
                  [e]: n
                }
              }), [r, n])
            }
          };
          return n.scopeName = e, [function(t, n) {
            const o = V.createContext(n);
            o.displayName = t + "Context";
            const a = r.length;
            r = [...r, n];
            const s = t => {
              const {
                scope: r,
                children: n,
                ...s
              } = t, i = r?.[e]?.[a] || o, l = V.useMemo(() => s, Object.values(s));
              return (0, x.jsx)(i.Provider, {
                value: l,
                children: n
              })
            };
            return s.displayName = t + "Provider", [s, function(r, s) {
              const i = s?.[e]?.[a] || o,
                l = V.useContext(i);
              if (l) return l;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, gx(n, ...t)]
        }(Px),
        [Ox, Sx] = Cx(Px),
        kx = V.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = V.useState("idle");
          return (0, x.jsx)(Ox, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: a,
            children: (0, x.jsx)(wx.span, {
              ...n,
              ref: t
            })
          })
        });
      kx.displayName = Px;
      var Ex = "AvatarImage",
        Rx = V.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...a
          } = e, s = Sx(Ex, r), i = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, _x.useSyncExternalStore)(xx, () => !0, () => !1),
              o = V.useRef(null),
              a = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [s, i] = V.useState(() => Nx(a, e));
            return (0, zu.N)(() => {
              i(Nx(a, e))
            }, [a, e]), (0, zu.N)(() => {
              const e = e => () => {
                i(e)
              };
              if (!a) return;
              const n = e("loaded"),
                o = e("error");
              return a.addEventListener("load", n), a.addEventListener("error", o), t && (a.referrerPolicy = t), "string" == typeof r && (a.crossOrigin = r), () => {
                a.removeEventListener("load", n), a.removeEventListener("error", o)
              }
            }, [a, r, t]), s
          }(n, a), l = (0, Lu.c)(e => {
            o(e), s.onImageLoadingStatusChange(e)
          });
          return (0, zu.N)(() => {
            "idle" !== i && l(i)
          }, [i, l]), "loaded" === i ? (0, x.jsx)(wx.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        });
      Rx.displayName = Ex;
      var Tx = "AvatarFallback";

      function Nx(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      V.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, a = Sx(Tx, r), [s, i] = V.useState(void 0 === n);
        return V.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== a.imageLoadingStatus ? (0, x.jsx)(wx.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Tx;
      var Dx = kx,
        Ix = Rx;

      function Lx(e) {
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

      function zx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zx(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Lx(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ax(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Vx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mx(Mx({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Vx(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ax(e.variantClassNames, e => Ax(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Fx = qx({
          defaultClassName: "foundry_v912w24 foundry_8kowh41",
          variantClassNames: {
            isDisabled: {
              true: "foundry_v912w25",
              false: "foundry_v912w26"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Bx = "var(--foundry_v912w22)",
        Kx = "var(--foundry_v912w23)",
        Hx = qx({
          defaultClassName: "foundry_v912w2h",
          variantClassNames: {
            isDisabled: {
              true: "foundry_v912w2i",
              false: "foundry_v912w2j"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xx = qx({
          defaultClassName: "foundry_v912w27",
          variantClassNames: {
            size: {
              SM: "foundry_v912w28",
              MD: "foundry_v912w29",
              LG: "foundry_v912w2a",
              XL: "foundry_v912w2b"
            },
            isDisabled: {
              true: "foundry_v912w2c",
              false: "foundry_v912w2d"
            },
            isFallback: {
              true: "foundry_v912w2e",
              false: "foundry_v912w2f"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !0,
              isFallback: !0
            }, "foundry_v912w2g"]
          ]
        }),
        Ux = "var(--foundry_v912w21)",
        Gx = "var(--foundry_v912w20)",
        Wx = qx({
          defaultClassName: "foundry_v912w2k",
          variantClassNames: {
            status: {
              online: "foundry_v912w2l",
              offline: "foundry_v912w2m",
              away: "foundry_v912w2n",
              busy: "foundry_v912w2o"
            },
            size: {
              SM: "foundry_v912w2p",
              MD: "foundry_v912w2q",
              LG: "foundry_v912w2r",
              XL: "foundry_v912w2s"
            },
            isDisabled: {
              true: "foundry_v912w2t",
              false: "foundry_v912w2u"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Zx = (0, V.createContext)(null);

      function $x() {
        const e = (0, V.useContext)(Zx);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Qx = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const l = (0, H.mergeProps)({
            "data-testid": r,
            "aria-disabled": a,
            className: Fx({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, x.jsx)(Zx.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: a
            },
            children: (0, x.jsx)(Dx, {
              ref: i,
              ...l,
              children: t
            })
          })
        }),
        Yx = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: a,
            isDisabled: s
          } = $x(), [i, l] = (0, V.useState)(!1);
          (0, V.useEffect)(() => {
            l(!1)
          }, [r]);
          const d = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, H.mergeProps)({
              className: Hx({
                isDisabled: s
              }),
              src: d,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, n);
          return (0, x.jsx)("span", {
            className: Xx({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, x.jsx)(Ix, {
              ref: o,
              ...c
            })
          })
        }),
        Jx = (0, V.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, V.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = $x(),
            l = (0, Ce.UP)(o, n),
            d = (0, H.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Wx({
                status: s,
                size: a,
                isDisabled: i
              }),
              style: B({
                [Gx]: t?.online,
                [Ux]: t?.offline,
                [Bx]: t?.away,
                [Kx]: t?.busy
              })
            }, r);
          return (0, x.jsx)("span", {
            ref: l,
            ...d
          })
        });

      function eP(e) {
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

      function tP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function rP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tP(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = eP(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function nP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var oP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        aP = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rP(rP({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) oP(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nP(e.variantClassNames, e => nP(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_2jlbzt2 foundry_8kowh41 foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            isActive: {
              true: "foundry_2jlbzt3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const sP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? je.DX : "nav";
          return (0, x.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        iP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, H.mergeProps)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            s = e ? je.DX : "div";
          return (0, x.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        lP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, V.useRef)(null),
            i = (0, Ce.UP)(s, a),
            {
              linkProps: l,
              isPressed: d
            } = rg(o, s),
            c = (0, H.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": d,
              "data-active": r,
              className: (0, Ae.clsx)(aP({
                isActive: r
              }))
            }, l),
            u = e ? je.DX : "a";
          return (0, x.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        dP = (0, V.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, x.jsx)(lP, {
            ref: n,
            ...o,
            children: (0, x.jsx)(Ve.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        cP = (0, V.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, x.jsx)(lP, {
            ref: n,
            ...o,
            children: (0, x.jsx)(Ve.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        uP = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, H.mergeProps)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            }, n),
            a = e ? je.DX : "span";
          return (0, x.jsx)(a, {
            ...o,
            children: t || "..."
          })
        },
        fP = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            a = e ? je.DX : "div";
          return (0, x.jsx)(a, {
            ...o,
            children: t
          })
        },
        pP = (0, V.createContext)(null);

      function hP() {
        const e = (0, V.useContext)(pP);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const vP = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, V.useId)(),
            a = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? je.DX : "div";
          return (0, x.jsx)(pP.Provider, {
            value: {
              labelId: o
            },
            children: (0, x.jsx)(s, {
              ...a,
              children: t
            })
          })
        },
        mP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = hP(), s = (0, H.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, n), i = e ? je.DX : "label";
          return (0, x.jsx)(i, {
            ref: o,
            id: a,
            ...s,
            children: t
          })
        }),
        yP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = hP(), s = (0, H.mergeProps)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, n), i = e ? je.DX : Up;
          return (0, x.jsxs)(i, {
            ...s,
            children: [(0, x.jsxs)(Zp, {
              ref: o,
              children: [(0, x.jsx)($p, {
                placeholder: r
              }), (0, x.jsx)(Qp, {})]
            }), (0, x.jsx)(oh, {
              children: (0, x.jsx)(Gp, {
                children: (0, x.jsx)(Wp, {
                  children: t
                })
              })
            })]
          })
        }),
        gP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, H.mergeProps)({
              "data-testid": r
            }, n),
            s = e ? je.DX : th;
          return (0, x.jsx)(s, {
            ...a,
            ref: o,
            children: (0, x.jsx)(rh, {
              children: t
            })
          })
        }),
        bP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, n),
            s = e ? je.DX : "p";
          return (0, x.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        })
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