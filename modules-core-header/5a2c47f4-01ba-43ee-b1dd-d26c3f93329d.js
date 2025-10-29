try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5a2c47f4-01ba-43ee-b1dd-d26c3f93329d", e._sentryDebugIdIdentifier = "sentry-dbid-5a2c47f4-01ba-43ee-b1dd-d26c3f93329d")
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
  [1107], {
    250: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    6330: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    6521: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    8956: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    11107: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => h,
        AlertBanner: () => p,
        Badge: () => g,
        Body: () => jn,
        Breadcrumbs: () => y,
        Button: () => qr,
        Checkbox: () => l,
        Code: () => Ln,
        Dialog: () => b,
        Display: () => An,
        Divider: () => dn,
        Dropdown: () => i,
        Heading: () => Dn,
        IconButton: () => nn,
        Label: () => Bn,
        Lightbox: () => o,
        Loader: () => Pn,
        RadioGroup: () => d,
        Spinner: () => kr,
        Switch: () => a,
        Tag: () => m,
        Text: () => Fn,
        TextArea: () => c,
        TextField: () => f,
        TextSemantics: () => Vn,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => ip,
        Content: () => op,
        Portal: () => ap,
        Root: () => rp,
        Trigger: () => np,
        useTooltipContext: () => tp
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => om,
        Close: () => cm,
        Content: () => Jp,
        Controls: () => im,
        CssVars: () => fm,
        Download: () => dm,
        Image: () => nm,
        Keyboard: () => sm,
        LightboxContext: () => qp,
        OpenIcon: () => $p,
        Overlay: () => Qp,
        Portal: () => Yp,
        Reset: () => um,
        Root: () => Gp,
        RootImplContext: () => Kp,
        Thumbnail: () => Zp,
        Trigger: () => Xp,
        Zoom: () => lm,
        ZoomPan: () => em
      });
      var i = {};
      r.r(i), r.d(i, {
        Content: () => Hg,
        Description: () => qg,
        Hint: () => Gg,
        Label: () => Ug,
        Option: () => Kg,
        OptionIcon: () => Xg,
        OptionText: () => Wg,
        Portal: () => Zg,
        Root: () => Dg,
        ScrollArea: () => Bg,
        StatusIcon: () => Yg,
        StatusRoot: () => $g,
        StatusText: () => Qg,
        Trigger: () => zg,
        TriggerIcon: () => Fg,
        TriggerText: () => Vg,
        useDropdownContext: () => Mg
      });
      var a = {};
      r.r(a), r.d(a, {
        Description: () => _b,
        Input: () => bb,
        Label: () => wb,
        Root: () => gb,
        useSwitchContext: () => yb
      });
      var s = {};
      r.r(s), r.d(s, {
        CheckLG: () => Mb,
        CheckMD: () => Ab,
        CheckXL: () => Db,
        DashLG: () => Bb,
        DashMD: () => Hb,
        DashXL: () => zb
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => rw,
        ErrorText: () => nw,
        Input: () => ew,
        Label: () => tw,
        Root: () => Jb
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => _w,
        Hint: () => Ew,
        Input: () => ww,
        Label: () => bw,
        Root: () => gw,
        RootContext: () => vw,
        StatusIcon: () => Sw,
        StatusRoot: () => Pw,
        StatusText: () => xw,
        useTextAreaContext: () => yw
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => g_,
        DotMD: () => y_,
        DotXL: () => b_
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => c_,
        Input: () => __,
        Label: () => l_,
        Option: () => w_,
        OptionDescription: () => P_,
        OptionLabel: () => E_,
        Options: () => s_,
        Root: () => a_,
        StatusIcon: () => d_,
        StatusRoot: () => u_,
        StatusText: () => f_,
        useRadioGroupContext: () => i_
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => OE,
        Control: () => xE,
        Description: () => IE,
        Hint: () => SE,
        Icon: () => TE,
        Input: () => CE,
        Label: () => PE,
        PasswordButton: () => RE,
        Root: () => EE,
        StatusIcon: () => jE,
        StatusRoot: () => NE,
        StatusText: () => kE
      });
      var h = {};
      r.r(h), r.d(h, {
        Body: () => $E,
        CloseButton: () => oP,
        Description: () => eP,
        ErrorText: () => nP,
        Footer: () => rP,
        Header: () => ZE,
        Icon: () => QE,
        Link: () => tP,
        Root: () => XE,
        RootContext: () => KE,
        Title: () => JE,
        iconStatusMap: () => YE,
        useAlertContext: () => WE
      });
      var p = {};
      r.r(p), r.d(p, {
        Alert: () => dS,
        CloseButton: () => pS,
        Description: () => uS,
        Icon: () => cS,
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
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => MS,
        Icon: () => AS,
        Label: () => LS,
        Root: () => kS,
        RootContext: () => NS,
        useTagContext: () => jS
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => oC,
        CloseButton: () => iC,
        Description: () => tC,
        Icon: () => nC,
        Provider: () => $x,
        Root: () => eC,
        RootContext: () => Qx,
        Viewport: () => Yx,
        iconAppearanceMap: () => rC,
        useToastContext: () => Jx
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => EC,
        Item: () => _C,
        OverflowMenu: () => PC,
        OverflowMenuItem: () => SC,
        Root: () => wC,
        RootContext: () => bC,
        useBreadcrumbsContext: () => gC
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => LC,
        Label: () => kC,
        Root: () => jC
      });
      var b = {};
      r.r(b), r.d(b, {
        ActionArea: () => CN,
        Button: () => jN,
        CloseButton: () => IN,
        Content: () => wN,
        Description: () => PN,
        Footer: () => ON,
        Header: () => TN,
        HeaderButton: () => NN,
        HeaderTitle: () => RN,
        Layout: () => xN,
        Overlay: () => bN,
        Portal: () => _N,
        Root: () => gN,
        ScrollArea: () => SN,
        Title: () => EN,
        Trigger: () => kN,
        useDialogContext: () => yN
      });
      var w = r(42295);

      function _(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class E extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var P = E;

      function S(e) {
        if ("string" != typeof e) throw new P(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = j.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = C[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new P(e);
          return `#${r}`
        }(e) : e;
        const r = O.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(T(e, 2), 16))), parseInt(T(e[3] || "f", 2), 16) / 255]
        }
        const n = R.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 16))), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = I.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 10))), parseFloat(e[3] || "1")]
        }
        const i = N.exec(t);
        if (i) {
          const [t, r, n, o] = Array.from(i).slice(1).map(parseFloat);
          if (_(0, 100, r) !== r) throw new P(e);
          if (_(0, 100, n) !== n) throw new P(e);
          return [...L(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new P(e)
      }
      const x = e => parseInt(e.replace(/_/g, ""), 36),
        C = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce(((e, t) => {
          const r = x(t.substring(0, 3)),
            n = x(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }), {}),
        T = (e, t) => Array.from(Array(t)).map((() => e)).join(""),
        O = new RegExp(`^#${T("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        R = new RegExp(`^#${T("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        I = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${T(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        N = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        j = /^[a-z]+$/i,
        k = e => Math.round(255 * e),
        L = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(k);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * n - 1)) * (t / 100),
            a = i * (1 - Math.abs(o % 2 - 1));
          let s = 0,
            l = 0,
            c = 0;
          o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, c = a) : o >= 3 && o < 4 ? (l = a, c = i) : o >= 4 && o < 5 ? (s = a, c = i) : o >= 5 && o < 6 && (s = i, c = a);
          const u = n - i / 2;
          return [s + u, l + u, c + u].map(k)
        };

      function A(e, t) {
        const [r, n, o, i] = function(e) {
          const [t, r, n, o] = S(e).map(((e, t) => 3 === t ? e : e / 255)), i = Math.max(t, r, n), a = Math.min(t, r, n), s = (i + a) / 2;
          if (i === a) return [0, 0, s, o];
          const l = i - a;
          return [60 * (t === i ? (r - n) / l + (r < n ? 6 : 0) : r === i ? (n - t) / l + 2 : (t - r) / l + 4), s > .5 ? l / (2 - i - a) : l / (i + a), s, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${_(0,100,100*t).toFixed()}%, ${_(0,100,100*r).toFixed()}%, ${parseFloat(_(0,1,n).toFixed(3))})`
        }(r, n, o - t, i)
      }

      function M(e, t) {
        return A(e, -t)
      }
      var D = r(71127),
        H = r.n(D),
        B = r(23644);

      function z(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          (0, B.Bx)(t, ((e, t) => {
            if (null != e) {
              var o = (0, B.Jt)(n, t);
              r[(0, B.Tm)(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (r[(0, B.Tm)(i)] = a)
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
        F = r(42435);
      const U = e => {
        const t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      };

      function q(e) {
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
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? G(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = q(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function W(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var X = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Z = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = K(K({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) X(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return W(e.variantClassNames, (e => W(e, (e => e.split(" ")[0]))))
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
        ie = "var(--foundry_1qqcnua9)",
        ae = "var(--foundry_1qqcnuaa)",
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
            accent: "foundry_1qqcnuav"
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
      const we = {
          enabled: {
            background: U($),
            border: U(Y),
            text: U(Q),
            outline: U(J)
          },
          hover: {
            background: U(ee),
            border: U(te),
            text: U(re),
            outline: U(ne)
          },
          focus: {
            background: U(oe),
            border: U(ie),
            text: U(ae),
            outline: U(se)
          },
          pressed: {
            background: U(le),
            border: U(ce),
            text: U(ue),
            outline: U(de)
          },
          disabled: {
            background: U(fe),
            border: U(he),
            text: U(pe),
            outline: U(me)
          },
          loading: {
            background: U(ve),
            border: U(ye),
            text: U(ge),
            outline: U(be)
          }
        },
        _e = ({
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
          enabled: c = !1
        }, u = []) => {
          (0, D.useEffect)((() => {
            if (!e.current || !i || !c) return;
            const u = `${i}:${t}:${r}`,
              {
                text: d,
                hover: f,
                pressed: h
              } = (0, F.getOrSet)(u, (() => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = S(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? V.black.static[100] : V.white.static[100]),
                  hover: a || (e >= r ? A(i, n) : M(i, n)),
                  pressed: s || (e >= r ? A(i, o) : M(i, o))
                }
              }));
            return e.current.style.setProperty(we.enabled.background, i), e.current.style.setProperty(we.enabled.border, i), e.current.style.setProperty(we.enabled.text, d), e.current.style.setProperty(we.hover.background, f), e.current.style.setProperty(we.hover.border, f), e.current.style.setProperty(we.hover.text, d), e.current.style.setProperty(we.focus.background, f), e.current.style.setProperty(we.focus.border, f), e.current.style.setProperty(we.focus.text, d), e.current.style.setProperty(we.pressed.background, h), e.current.style.setProperty(we.pressed.border, h), e.current.style.setProperty(we.pressed.text, d), e.current.style.setProperty(we.loading.background, f), e.current.style.setProperty(we.loading.border, f), e.current.style.setProperty(we.loading.text, d), () => {
              e.current?.style.removeProperty(we.enabled.background), e.current?.style.removeProperty(we.enabled.border), e.current?.style.removeProperty(we.enabled.text), e.current?.style.removeProperty(we.hover.background), e.current?.style.removeProperty(we.hover.border), e.current?.style.removeProperty(we.hover.text), e.current?.style.removeProperty(we.focus.background), e.current?.style.removeProperty(we.focus.border), e.current?.style.removeProperty(we.focus.text), e.current?.style.removeProperty(we.pressed.background), e.current?.style.removeProperty(we.pressed.border), e.current?.style.removeProperty(we.pressed.text), e.current?.style.removeProperty(we.loading.background), e.current?.style.removeProperty(we.loading.border), e.current?.style.removeProperty(we.loading.text)
            }
          }), [e.current, t, r, n, o, i, a, s, l, c, ...u])
        };

      function Ee(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      r(55311);
      const Pe = "undefined" != typeof document ? D.useLayoutEffect : () => {};

      function Se(e) {
        const t = (0, D.useRef)(null);
        return Pe((() => {
          t.current = e
        }), [e]), (0, D.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }
      const xe = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Ce = D.createContext(xe),
        Te = D.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Oe = new WeakMap;
      const Re = "function" == typeof D.useId ? function(e) {
        let t = D.useId(),
          [r] = (0, D.useState)(ke());
        return e || `${r?"react-aria":`react-aria${xe.prefix}`}-${t}`
      } : function(e) {
        let t = (0, D.useContext)(Ce),
          r = function(e = !1) {
            let t = (0, D.useContext)(Ce),
              r = (0, D.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = Oe.get(e);
                null == r ? Oe.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, Oe.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function Ie() {
        return !1
      }

      function Ne() {
        return !0
      }

      function je(e) {
        return () => {}
      }

      function ke() {
        return "function" == typeof D.useSyncExternalStore ? D.useSyncExternalStore(je, Ie, Ne) : (0, D.useContext)(Te)
      }
      let Le, Ae = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Me = new Map;

      function De(e) {
        let [t, r] = (0, D.useState)(e), n = (0, D.useRef)(null), o = Re(t), i = (0, D.useRef)(null);
        if (Le && Le.register(i, o), Ae) {
          const e = Me.get(o);
          e && !e.includes(n) ? e.push(n) : Me.set(o, [n])
        }
        return Pe((() => {
          let e = o;
          return () => {
            Le && Le.unregister(i), Me.delete(e)
          }
        }), [o]), (0, D.useEffect)((() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        })), o
      }

      function He(e, t) {
        if (e === t) return e;
        let r = Me.get(e);
        if (r) return r.forEach((e => e.current = t)), t;
        let n = Me.get(t);
        return n ? (n.forEach((t => t.current = e)), e) : t
      }

      function Be(e = []) {
        let t = De(),
          [r, n] = function(e) {
            let [t, r] = (0, D.useState)(e), n = (0, D.useRef)(null), o = Se((() => {
              if (!n.current) return;
              let e = n.current.next();
              e.done ? n.current = null : t === e.value ? o() : r(e.value)
            }));
            Pe((() => {
              n.current && o()
            }));
            let i = Se((e => {
              n.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, D.useCallback)((() => {
            n((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, n]);
        return Pe(o, [t, o, ...e]), r
      }
      "undefined" != typeof FinalizationRegistry && (Le = new FinalizationRegistry((e => {
        Me.delete(e)
      })));
      var ze = r(4572);

      function Ve(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Ee(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = He(r, o) : t[e] = void 0 !== o ? o : r : t[e] = ze(r, o)
          }
        }
        return t
      }
      const Fe = new Set(["id"]),
        Ue = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        qe = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Ge = /^(data-.*)$/;

      function Ke(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (Fe.has(t) || r && Ue.has(t) || n && qe.has(t) || (null == o ? void 0 : o.has(t)) || Ge.test(t)) && (i[t] = e[t]);
        return i
      }
      const We = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        Xe = We.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      We.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const Ze = We.join(':not([hidden]):not([tabindex="-1"]),');

      function $e(e) {
        return e.matches(Xe)
      }

      function Ye(e) {
        return e.matches(Ze)
      }
      const Qe = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Je = e => e && "window" in e && e.window === e ? e : Qe(e).defaultView || window;

      function et(e) {
        if (function() {
            if (null == tt) {
              tt = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return tt = !0, !0
                  }
                })
              } catch {}
            }
            return tt
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
      let tt = null;

      function rt(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function nt(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function ot(e) {
        let t = (0, D.useRef)({
          isFocused: !1,
          observer: null
        });
        Pe((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let r = Se((t => {
          null == e || e(t)
        }));
        return (0, D.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = e.target,
              o = e => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = rt(e);
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
      let it = !1;

      function at(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function st(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function lt(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const ct = lt((function() {
          return st(/^Mac/i)
        })),
        ut = lt((function() {
          return st(/^iPhone/i)
        })),
        dt = lt((function() {
          return st(/^iPad/i) || ct() && navigator.maxTouchPoints > 1
        })),
        ft = lt((function() {
          return ut() || dt()
        })),
        ht = (lt((function() {
          return ct() || ft()
        })), lt((function() {
          return at(/AppleWebKit/i) && !pt()
        }))),
        pt = lt((function() {
          return at(/Chrome/i)
        })),
        mt = lt((function() {
          return at(/Android/i)
        })),
        vt = lt((function() {
          return at(/Firefox/i)
        }));
      let yt = new Map,
        gt = new Set;

      function bt() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = yt.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), yt.delete(r.target)), 0 === yt.size)) {
            for (let e of gt) e();
            gt.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = yt.get(r.target);
          n || (n = new Set, yt.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function wt(e) {
        requestAnimationFrame((() => {
          0 === yt.size ? e() : gt.add(e)
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? bt() : document.addEventListener("DOMContentLoaded", bt));
      let _t = "default",
        Et = "",
        Pt = new WeakMap;

      function St(e) {
        if (ft()) {
          if ("disabled" !== _t) return;
          _t = "restoring", setTimeout((() => {
            wt((() => {
              if ("restoring" === _t) {
                const t = Qe(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Et || ""), Et = "", _t = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Pt.has(e)) {
          let t = Pt.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Pt.delete(e)
        }
      }
      const xt = D.createContext({
        register: () => {}
      });

      function Ct(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }

      function Tt(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, Ct(e, t, "get"))
      }

      function Ot(e, t, r) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, r)
      }

      function Rt(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, Ct(e, t, "set"), r), r
      }

      function It(e, t) {
        Pe((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }

      function Nt() {
        let e = (0, D.useRef)(new Map),
          t = (0, D.useCallback)(((t, r, n, o) => {
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
          r = (0, D.useCallback)(((t, r, n, o) => {
            var i;
            let a = (null === (i = e.current.get(n)) || void 0 === i ? void 0 : i.fn) || n;
            t.removeEventListener(r, a, o), e.current.delete(n)
          }), []),
          n = (0, D.useCallback)((() => {
            e.current.forEach(((e, t) => {
              r(e.eventTarget, e.type, t, e.options)
            }))
          }), [r]);
        return (0, D.useEffect)((() => n), [n]), {
          addGlobalListener: t,
          removeGlobalListener: r,
          removeAllGlobalListeners: n
        }
      }
      xt.displayName = "PressResponderContext";

      function jt(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const kt = (e = document) => e.activeElement;

      function Lt(e) {
        return e.target
      }
      const At = (0, D.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, (e => Dt(e, t)))
        },
        useHref: e => e
      });

      function Mt() {
        return (0, D.useContext)(At)
      }

      function Dt(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        vt() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (ct() ? i = !0 : a = !0);
        let c = ht() && ct() && !dt() ? new KeyboardEvent("keydown", {
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
        Dt.isOpening = r, et(e), e.dispatchEvent(c), Dt.isOpening = !1
      }

      function Ht(e) {
        var t;
        const r = Mt().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function Bt(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (mt() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      Dt.isOpening = !1;
      var zt = r(18429),
        Vt = new WeakMap;
      class Ft {
        continuePropagation() {
          Rt(this, Vt, !1)
        }
        get shouldStopPropagation() {
          return Tt(this, Vt)
        }
        constructor(e, t, r, n) {
          var o;
          Ot(this, Vt, {
            writable: !0,
            value: void 0
          }), Rt(this, Vt, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, c = 0,
            u = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, u = r.clientY), a && (null != l && null != u ? (s = l - a.left, c = u - a.top) : (s = a.width / 2, c = a.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = c
        }
      }
      const Ut = Symbol("linkClicked");

      function qt(e) {
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
          ...h
        } = function(e) {
          let t = (0, D.useContext)(xt);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = Ve(n, e), r()
          }
          return It(t, e.ref), e
        }(e), [p, m] = (0, D.useState)(!1), v = (0, D.useRef)({
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
        } = Nt(), b = Se(((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new Ft("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), w = Se(((e, n, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Ft("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !s) {
            let r = new Ft("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), _ = Se(((e, t) => {
          let r = v.current;
          if (s) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new Ft("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), E = Se((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(Wt(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || St(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), P = Se((e => {
          u && E(e)
        })), S = Se((e => {
          null == a || a(e)
        })), x = Se(((e, t) => {
          if (a) {
            let r = new MouseEvent("click", e);
            nt(r, t), a(rt(r))
          }
        })), C = (0, D.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Kt(t.nativeEvent, t.currentTarget) && jt(t.currentTarget, Lt(t.nativeEvent))) {
                  var n;
                  Xt(Lt(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        Kt(t, n) && !t.repeat && jt(n, Lt(t)) && e.target && _(Wt(e.target, t), "keyboard")
                      };
                    y(Qe(t.currentTarget), "keyup", Ee(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && ct() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || jt(t.currentTarget, Lt(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Dt.isOpening) {
                  let r = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Bt(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      r = w(Wt(t.currentTarget, t), n, !0), e.isOverTarget = !1, S(t), E(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      n = _(t, "virtual"),
                      o = w(t, "virtual");
                    S(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && Kt(t, e.target)) {
                var n;
                Xt(Lt(t), t.key) && t.preventDefault();
                let r = Lt(t),
                  o = jt(e.target, Lt(t));
                w(Wt(e.target, t), "keyboard", o), o && x(t, e.target), g(), "Enter" !== t.key && Gt(e.target) && jt(e.target, r) && !t[Ut] && (t[Ut] = !0, Dt(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !jt(t.currentTarget, Lt(t.nativeEvent))) return;
              if (o = t.nativeEvent, !mt() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (ft()) {
                    if ("default" === _t) {
                      const t = Qe(e);
                      Et = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    _t = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Pt.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = Lt(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Qe(t.currentTarget), "pointerup", r, !1), y(Qe(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (jt(t.currentTarget, Lt(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let r = function(e) {
                    for (; e && !$e(e);) e = e.parentElement;
                    let t = Je(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    it = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, et(r), l()))
                      },
                      a = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, et(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), it = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              jt(t.currentTarget, Lt(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && _(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(Wt(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Wt(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (jt(e.target, Lt(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (et(e.target), e.target.click()))
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
              jt(e.currentTarget, Lt(e.nativeEvent)) && E(e)
            }
          }
          return t
        }), [y, s, c, g, d, E, P, w, b, _, S, x]);
        return (0, D.useEffect)((() => {
          let e = null == f ? void 0 : f.current;
          e && e instanceof Je(e).Element && "auto" === Je(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [f]), (0, D.useEffect)((() => {
          let e = v.current;
          return () => {
            var t;
            d || St(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: l || p,
          pressProps: Ve(h, C)
        }
      }

      function Gt(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Kt(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Je(o).HTMLInputElement && !$t(o, r) || o instanceof Je(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Gt(o)) && "Enter" !== r)
      }

      function Wt(e, t) {
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

      function Xt(e, t) {
        return e instanceof HTMLInputElement ? !$t(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Gt(e)))
        }(e)
      }
      const Zt = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function $t(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Zt.has(e.type)
      }
      let Yt = null,
        Qt = new Set,
        Jt = new Map,
        er = !1,
        tr = !1;

      function rr(e, t) {
        for (let r of Qt) r(e, t)
      }

      function nr(e) {
        er = !0,
          function(e) {
            return !(e.metaKey || !ct() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Yt = "keyboard", rr("keyboard", e))
      }

      function or(e) {
        Yt = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (er = !0, rr("pointer", e))
      }

      function ir(e) {
        Bt(e) && (er = !0, Yt = "virtual")
      }

      function ar(e) {
        e.target !== window && e.target !== document && !it && e.isTrusted && (er || tr || (Yt = "virtual", rr("virtual", e)), er = !1, tr = !1)
      }

      function sr() {
        it || (er = !1, tr = !0)
      }

      function lr(e) {
        if ("undefined" == typeof window || Jt.get(Je(e))) return;
        const t = Je(e),
          r = Qe(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          er = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", nr, !0), r.addEventListener("keyup", nr, !0), r.addEventListener("click", ir, !0), t.addEventListener("focus", ar, !0), t.addEventListener("blur", sr, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", or, !0), r.addEventListener("pointermove", or, !0), r.addEventListener("pointerup", or, !0)), t.addEventListener("beforeunload", (() => {
          cr(e)
        }), {
          once: !0
        }), Jt.set(t, {
          focus: n
        })
      }
      const cr = (e, t) => {
        const r = Je(e),
          n = Qe(e);
        t && n.removeEventListener("DOMContentLoaded", t), Jt.has(r) && (r.HTMLElement.prototype.focus = Jt.get(r).focus, n.removeEventListener("keydown", nr, !0), n.removeEventListener("keyup", nr, !0), n.removeEventListener("click", ir, !0), r.removeEventListener("focus", ar, !0), r.removeEventListener("blur", sr, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", or, !0), n.removeEventListener("pointermove", or, !0), n.removeEventListener("pointerup", or, !0)), Jt.delete(r))
      };

      function ur(e) {
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
        const t = Qe(e);
        let r;
        "loading" !== t.readyState ? lr(e) : (r = () => {
          lr(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let dr = D.createContext(null);

      function fr(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: n,
            onFocusChange: o
          } = e;
          const i = (0, D.useCallback)((e => {
              if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
            }), [n, o]),
            a = ot(i),
            s = (0, D.useCallback)((e => {
              const t = Qe(e.target),
                n = t ? kt(t) : kt();
              e.target === e.currentTarget && n === Lt(e.nativeEvent) && (r && r(e), o && o(!0), a(e))
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
              onKeyDown: ur(e.onKeyDown),
              onKeyUp: ur(e.onKeyUp)
            }
          }
        }(e), o = Ve(r, n), i = function(e) {
          let t = (0, D.useContext)(dr) || {};
          It(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), a = e.isDisabled ? {} : i, s = (0, D.useRef)(e.autoFocus);
        (0, D.useEffect)((() => {
          s.current && t.current && function(e) {
            const t = Qe(e),
              r = kt(t);
            if ("virtual" === Yt) {
              let n = r;
              wt((() => {
                kt(t) === n && e.isConnected && et(e)
              }))
            } else et(e)
          }(t.current), s.current = !1
        }), [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Ve({
            ...o,
            tabIndex: l
          }, a)
        }
      }

      function hr(e, t) {
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
          onClick: f,
          href: h,
          target: p,
          rel: m,
          type: v = "button"
        } = e;
        r = "button" === n ? {
          type: v,
          disabled: o
        } : {
          role: "button",
          href: "a" !== n || o ? void 0 : h,
          target: "a" === n ? p : void 0,
          type: "input" === n ? v : void 0,
          disabled: "input" === n ? o : void 0,
          "aria-disabled": o && "input" !== n ? o : void 0,
          rel: "a" === n ? m : void 0
        };
        let {
          pressProps: y,
          isPressed: g
        } = qt({
          onPressStart: a,
          onPressEnd: s,
          onPressChange: c,
          onPress: i,
          onPressUp: l,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: u,
          ref: t
        }), {
          focusableProps: b
        } = fr(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = Ve(b, y, Ke(e, {
          labelable: !0
        }));
        return {
          isPressed: g,
          buttonProps: Ve(r, w, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"]
          })
        }
      }
      var pr = r(52360),
        mr = r(35205),
        vr = r(21222),
        yr = r(63694),
        gr = r(33736),
        br = r(80176),
        wr = r(48783),
        _r = r(7492),
        Er = ({
          children: e,
          label: t
        }) => {
          const r = D.Children.only(e);
          return (0, w.jsxs)(w.Fragment, {
            children: [D.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, w.jsx)(_r.Root, {
              children: t
            })]
          })
        };
      Er.displayName = "AccessibleIcon";
      var Pr = Er;

      function Sr(e) {
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

      function xr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Cr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xr(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Sr(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xr(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Tr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Or, Rr, Ir = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Nr = (Or = {
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
        }, Rr = e => {
          var t = Or.defaultClassName,
            r = Cr(Cr({}, Or.defaultVariants), e);
          for (var n in r) {
            var o, i = null !== (o = r[n]) && void 0 !== o ? o : Or.defaultVariants[n];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = Or.variantClassNames[n][a];
              s && (t += " " + s)
            }
          }
          for (var [l, c] of Or.compoundVariants) Ir(l, r, Or.defaultVariants) && (t += " " + c);
          return t
        }, Rr.variants = () => Object.keys(Or.variantClassNames), Rr.classNames = {
          get base() {
            return Or.defaultClassName.split(" ")[0]
          },
          get variants() {
            return Tr(Or.variantClassNames, (e => Tr(e, (e => e.split(" ")[0]))))
          }
        }, Rr);
      const jr = "pageMD",
        kr = (0, D.forwardRef)((({
          label: e,
          hideTrack: t = !1,
          size: r = jr,
          testId: n,
          ...o
        }, i) => {
          const a = (0, gr.zQ)(),
            s = "string" == typeof r ? r : r?.[a] ?? r.default ?? jr,
            l = (0, wr.mergeProps)({
              className: Nr({
                size: s
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, w.jsx)(Pr, {
            label: e,
            children: (0, w.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: i,
              viewBox: "0 0 16 16",
              children: [!t && (0, w.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, w.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        }));
      var Lr = r(87419),
        Ar = r.t(Lr, 2);

      function Mr(e) {
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

      function Dr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Hr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Dr(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Mr(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dr(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Br(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var zr = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Vr = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Hr(Hr({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) zr(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Br(e.variantClassNames, (e => Br(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Fr = Vr({
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
              SM: "foundry_17pcofy9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdh",
              MD: "foundry_17pcofya foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
              LG: "foundry_17pcofyb foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
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
              size: "SM",
              iconLeft: !0
            }, "foundry_17pcofyj"],
            [{
              size: "SM",
              iconRight: !0
            }, "foundry_17pcofyk"],
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_17pcofyl"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_17pcofym"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_17pcofyn"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_17pcofyo"],
            [{
              size: "SM",
              appearance: "ghost"
            }, "foundry_17pcofyp"],
            [{
              size: "MD",
              appearance: "ghost"
            }, "foundry_17pcofyq"],
            [{
              size: "LG",
              appearance: "ghost"
            }, "foundry_17pcofyr"]
          ]
        });
      Vr({
        defaultClassName: "foundry_17pcofys",
        variantClassNames: {
          isLoading: {
            true: "foundry_17pcofyt"
          },
          fullWidth: {
            true: "foundry_17pcofyu",
            false: "foundry_17pcofyv"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var Ur = Vr({
        defaultClassName: "foundry_17pcofyx",
        variantClassNames: {
          fullWidth: {
            true: "foundry_17pcofyy",
            false: "foundry_17pcofyz"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const qr = (0, D.forwardRef)((({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: i,
        iconRightLabel: a,
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
        ..._
      }, E) => {
        const P = (0, D.useRef)(null),
          S = function(...e) {
            const t = (0, D.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }(P, E),
          x = (0, gr.zQ)(),
          C = "string" == typeof l ? l : l?.[x] ?? l.default ?? "MD",
          {
            buttonProps: T
          } = (({
            inert: e,
            className: t,
            onClick: r,
            isLoading: n,
            ...o
          }, i) => {
            const {
              events: a,
              others: s
            } = (0, pr.b)(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: c
            } = hr({
              ...s,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => {
                n || (s.onPress?.(e) ?? r?.({
                  ...e,
                  currentTarget: e.target
                }))
              }
            }, i), u = {
              ...l,
              role: "button",
              "data-pressed": !e && c,
              "data-loading": n,
              "aria-busy": n
            };
            return {
              isPressed: !e && c,
              buttonProps: (0, mr.v)(e ? {} : u, {
                ...a,
                className: t
              })
            }
          })((0, br.mergeProps)(_, {
            isLoading: u
          }), P);
        _e({
          refs: {
            buttonRef: P
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
        const O = (0, br.mergeProps)({
            className: Fr({
              appearance: s,
              size: C,
              fullWidth: c,
              iconLeft: !!n,
              iconRight: !!i,
              isLoading: u
            }),
            "data-testid": e
          }, T),
          R = n && Ar[n],
          I = i && Ar[i],
          N = t ? vr.Slot : "button",
          j = c && (I || I && R);
        return (0, w.jsxs)(N, {
          ref: S,
          ...O,
          children: [j && (0, w.jsx)("div", {
            className: "foundry_17pcofy10"
          }), R && (0, w.jsx)(R, {
            label: o || "",
            size: C,
            className: "foundry_17pcofyw"
          }), (0, w.jsx)(vr.Slottable, {
            children: r
          }), I && (0, w.jsx)(I, {
            label: a || "",
            size: C,
            className: Ur({
              fullWidth: c
            })
          }), u && (0, w.jsx)("div", {
            className: "foundry_17pcofy11",
            children: (0, w.jsx)(kr, {
              label: d || "",
              size: "inline" + ("LG" === C ? "LG" : "MD"),
              hideTrack: !0
            })
          })]
        })
      }));
      r(6521);
      var Gr = r(80070),
        Kr = r(43607),
        Wr = r(64706);

      function Xr(e) {
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

      function Zr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function $r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zr(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Xr(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zr(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Yr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qr = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jr = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $r($r({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Qr(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yr(e.variantClassNames, (e => Yr(e, (e => e.split(" ")[0]))))
            }
          }, t
        };
      Jr({
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
      var en = Jr({
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
        tn = r(91253),
        rn = r.t(tn, 2);
      const nn = (0, D.forwardRef)((({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: i = !1,
        size: a = "LG",
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
        const _ = (0, D.useRef)(null),
          E = function(...e) {
            const t = (0, D.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }(_, b),
          P = (0, gr.zQ)(),
          S = "string" == typeof a ? a : a?.[P] ?? a.default ?? "LG",
          {
            buttonProps: x
          } = (({
            inert: e,
            className: t,
            onClick: r,
            isLoading: n,
            ...o
          }, i) => {
            const {
              events: a,
              others: s
            } = (0, Gr.b)(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: c
            } = hr({
              ...s,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => {
                n || (s.onPress?.(e) ?? r?.({
                  ...e,
                  currentTarget: e.target
                }))
              }
            }, i), u = {
              ...l,
              role: "button",
              "data-pressed": !e && c,
              "data-loading": n,
              "aria-busy": n
            };
            return {
              isPressed: !e && c,
              buttonProps: (0, Kr.v)(e ? {} : u, {
                ...a,
                className: t
              })
            }
          })((0, Wr.mergeProps)(g, {
            isLoading: l
          }), _);
        _e({
          refs: {
            buttonRef: _
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
        const C = (0, Wr.mergeProps)({
            className: en({
              appearance: o,
              size: S,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, x),
          T = rn[r],
          O = t ? vr.Slot : "button";
        return (0, w.jsxs)(O, {
          ref: E,
          ...C,
          children: [T && (0, w.jsx)(T, {
            label: n || "",
            size: S
          }), (0, w.jsx)(vr.Slottable, {
            children: s
          }), l && (0, w.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, w.jsx)(kr, {
              label: c || "",
              size: S && "SM" !== S ? `inline${S}` : "inlineMD",
              hideTrack: !0
            })
          })]
        })
      }));

      function on(e) {
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

      function an(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function sn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? an(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = on(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : an(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function ln(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var cn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        un = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sn(sn({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) cn(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ln(e.variantClassNames, (e => ln(e, (e => e.split(" ")[0]))))
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
      const dn = (0, D.forwardRef)((({
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
          u = o ? vr.Slot : l;
        return (0, w.jsx)(u, {
          ref: s,
          className: (0, ze.clsx)(un({
            thickness: r,
            orientation: t
          }), e),
          role: c,
          "aria-orientation": t,
          "data-testid": i,
          ...a
        })
      }));
      var fn = r(39935);

      function hn(e) {
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

      function pn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function mn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pn(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = hn(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pn(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function vn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var yn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gn = "var(--foundry_9dxgbc2)",
        bn = "var(--foundry_9dxgbc3)",
        wn = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mn(mn({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yn(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vn(e.variantClassNames, (e => vn(e, (e => e.split(" ")[0]))))
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
        _n = "var(--foundry_9dxgbc0)",
        En = "var(--foundry_9dxgbc1)";
      const Pn = (0, D.forwardRef)((({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: i = "MD",
        ...a
      }, s) => {
        const l = (0, gr.zQ)(),
          c = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          u = (0, fn.mergeProps)({
            className: wn({
              size: c
            }),
            "data-testid": t,
            style: z({
              [_n]: n?.pulseColorBackground,
              [En]: n?.pulseColorForeground,
              [gn]: n?.gradientColorBackground,
              [bn]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, a),
          d = e ? vr.Slot : "div";
        return (0, w.jsx)(d, {
          ref: s,
          ...u,
          children: e ? (0, w.jsx)(vr.Slottable, {
            children: r
          }) : (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, w.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      }));
      var Sn = r(84345);

      function xn(e) {
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

      function Cn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Tn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cn(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = xn(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cn(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function On(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Rn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        In = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Tn(Tn({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Rn(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return On(e.variantClassNames, (e => On(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Nn = In({
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
      const jn = (0, D.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? vr.Slot : "p",
          s = (0, Sn.mergeProps)({
            className: Nn({
              size: n,
              appearance: r
            })
          }, o);
        return (0, w.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));
      var kn = In({
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
      const Ln = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const i = e ? vr.Slot : "p",
            a = (0, Sn.mergeProps)({
              className: kn({
                appearance: r
              })
            }, n);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        })),
        An = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? vr.Slot : "h1",
            i = (0, Sn.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, w.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }));
      var Mn = In({
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
      const Dn = (0, D.forwardRef)((({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? vr.Slot : `h${t}`,
          a = (0, Sn.mergeProps)(n, {
            className: Mn({
              level: t
            })
          });
        return (0, w.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...a
        })
      }));
      var Hn = In({
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
      const Bn = (0, D.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? vr.Slot : "p",
          s = (0, Sn.mergeProps)({
            className: Hn({
              size: n,
              appearance: r
            })
          }, o);
        return (0, w.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));
      var zn = In({
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
      const Vn = {
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
        Fn = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? vr.Slot : Vn[r] || "span",
            a = (0, Sn.mergeProps)(n, {
              className: zn({
                semantic: r
              })
            });
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        })),
        Un = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? yr.VisuallyHidden : D.Fragment;
          return (0, w.jsx)(r, {
            ...t
          })
        };

      function qn(...e) {
        const t = (0, D.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }

      function Gn(e) {
        const t = (0, D.useRef)(e);
        return (0, D.useEffect)((() => {
          t.current = e
        })), (0, D.useMemo)((() => (...e) => t.current?.(...e)), [])
      }

      function Kn(e, t, r, n) {
        const o = (0, D.useRef)(t);
        (0, D.useEffect)((() => {
          o.current = t
        }), [t]), (0, D.useEffect)((() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const i = e => {
            o.current(e)
          };
          return t.addEventListener(e, i, n), () => {
            t.removeEventListener(e, i, n)
          }
        }), [e, r?.current, n])
      }
      r(68138), r(38476);
      var Wn = r(46890),
        Xn = r.n(Wn);
      let Zn = "undefined" != typeof document ? D.useLayoutEffect : D.useEffect,
        $n = e => e && !Array.isArray(e) && "object" == typeof e,
        Yn = [],
        Qn = {},
        Jn = Xn();
      const eo = (e, t = Yn) => {
        let r = Qn;
        $n(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : Yn) : $n(t) && (r = t, t = "dependencies" in r ? r.dependencies : Yn), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, i = (0, D.useRef)(!1), a = (0, D.useRef)(Jn.context((() => {}), n)), s = (0, D.useRef)((e => a.current.add(null, e))), l = t && t.length && !o;
        return l && Zn((() => (i.current = !0, () => a.current.revert())), Yn), Zn((() => {
          if (e && a.current.add(e, n), !l || !i.current) return () => a.current.revert()
        }), t), {
          context: a.current,
          contextSafe: s.current
        }
      };
      eo.register = e => {
        Jn = e
      }, eo.headless = !0;
      const to = {
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

      function ro(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function no(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -ro(t - e, r - t, n) + t : e > r ? +ro(e - r, r - t, n) + r : e
      }

      function oo(e, t, r) {
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

      function io(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ao(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? io(Object(r), !0).forEach((function(t) {
            oo(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : io(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      const so = {
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

      function lo(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const co = ["enter", "leave"];
      const uo = ["gotpointercapture", "lostpointercapture"];

      function fo(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = uo.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function ho(e) {
        return "touches" in e
      }

      function po(e) {
        return ho(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function mo(e) {
        return ho(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function vo(e, t) {
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

      function yo(e, t) {
        const [r, n] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return vo(r, n)
      }

      function go(e) {
        const t = mo(e);
        return ho(e) ? t.identifier : t.pointerId
      }

      function bo(e) {
        const t = mo(e);
        return [t.clientX, t.clientY]
      }

      function wo(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function _o(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Eo() {}

      function Po(...e) {
        return 0 === e.length ? Eo : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function So(e, t) {
        return Object.assign({}, t, e || {})
      }
      class xo {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? _o(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            to.addTo(t._distance, e)
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
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = _o(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [p < v ? -1 : p > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [i, a],
                [s, l]
              ] = e;
              return [no(t, i, a, n), no(r, s, l, o)]
            }(t._bounds, t.offset, w), t.delta = to.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = to.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            to.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(ao(ao(ao({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Co extends xo {
        constructor(...e) {
          super(...e), oo(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = to.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = to.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[po(e)] : r.axisThreshold;
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
      const To = e => e,
        Oo = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => ao(ao({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return to.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? to.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || To
          },
          threshold: e => to.toVector(e, 0)
        },
        Ro = ao(ao({}, Oo), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Ro.bounds(e(t));
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
        Io = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        No = "undefined" != typeof window && window.document && window.document.createElement;

      function jo() {
        return No && "ontouchstart" in window
      }
      const ko = {
          isBrowser: No,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: jo(),
          touchscreen: jo() || No && window.navigator.maxTouchPoints > 1,
          pointer: No && "onpointerdown" in window,
          pointerLock: No && "exitPointerLock" in window.document
        },
        Lo = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Ao = ao(ao({}, Ro), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && ko.pointerLock, ko.touch && r ? "touch" : this.pointerLock ? "mouse" : ko.pointer && !o ? "pointer" : ko.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, ko.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const i = to.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(to.toVector(e)),
              distance: this.transform(to.toVector(t)),
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
          axisThreshold: e => e ? ao(ao({}, Lo), e) : Lo,
          keyboardDisplacement: (e = 10) => e
        });

      function Mo(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, a] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && a < 0 || r > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Do = ao(ao({}, Oo), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !ko.touch && ko.gesture) return "gesture";
            if (ko.touch && n) return "touch";
            if (ko.touchscreen) {
              if (ko.pointer) return "pointer";
              if (ko.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = So(_o(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = So(_o(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, to.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Ho = ao(ao({}, Ro), {}, {
          mouseOnly: (e = !0) => e
        }),
        Bo = Ro,
        zo = Ro,
        Vo = ao(ao({}, Ro), {}, {
          mouseOnly: (e = !0) => e
        }),
        Fo = new Map,
        Uo = new Map;

      function qo(e) {
        Fo.set(e.key, e.engine), Uo.set(e.key, e.resolver)
      }
      const Go = {
          key: "drag",
          engine: class extends Co {
            constructor(...e) {
              super(...e), oo(this, "ingKey", "dragging")
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
                e._bounds = Ro.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = go(e), r._pointerActive = !0, this.computeValues(bo(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== po(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = go(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = bo(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = to.sub(o, t._values), this.computeValues(o)), to.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = go(e);
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
              const t = Io[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, to.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Io && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Ao
        },
        Ko = {
          key: "hover",
          engine: class extends Co {
            constructor(...e) {
              super(...e), oo(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(bo(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = bo(e);
              t._movement = t._delta = to.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Vo
        },
        Wo = {
          key: "move",
          engine: class extends Co {
            constructor(...e) {
              super(...e), oo(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(bo(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = bo(e),
                r = this.state;
              r._delta = to.sub(t, r._values), to.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Ho
        },
        Xo = {
          key: "pinch",
          engine: class extends xo {
            constructor(...e) {
              super(...e), oo(this, "ingKey", "pinching"), oo(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? to.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = yo(e, t._touchIds);
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
              const o = vo(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = yo(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = vo(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = to.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-wo(e)[1] / 100 * t.offset[0], 0], to.addTo(t._movement, t._delta), Mo(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Do
        },
        Zo = {
          key: "scroll",
          engine: class extends Co {
            constructor(...e) {
              super(...e), oo(this, "ingKey", "scrolling")
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
              t._delta = to.sub(r, t._values), to.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Bo
        },
        $o = {
          key: "wheel",
          engine: class extends Co {
            constructor(...e) {
              super(...e), oo(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = wo(e), to.addTo(t._movement, t._delta), Mo(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: zo
        };
      const Yo = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (ko.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Qo = ["target", "eventOptions", "window", "enabled", "transform"];

      function Jo(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = Jo(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class ei {
        constructor(e, t) {
          oo(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            a = function(e, t = "") {
              const r = so[e];
              return e + (r && r[t] || t)
            }(t, r),
            s = ao(ao({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class ti {
        constructor() {
          oo(this, "_timeouts", new Map)
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
      class ri {
        constructor(e) {
          var t, r;
          oo(this, "gestures", new Set), oo(this, "_targetEventStore", new ei(this)), oo(this, "gestureEventStores", {}), oo(this, "gestureTimeoutStores", {}), oo(this, "handlers", {}), oo(this, "config", {}), oo(this, "pointerIds", new Set), oo(this, "touchIds", new Set), oo(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && ni(t, "drag"), r.wheel && ni(t, "wheel"), r.scroll && ni(t, "scroll"), r.move && ni(t, "move"), r.pinch && ni(t, "pinch"), r.hover && ni(t, "hover")
        }
        setEventIds(e) {
          return ho(e) ? (this.touchIds = new Set(function(e) {
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
              }(n, Qo);
            if (r.shared = Jo({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, Yo), t) {
              const e = Uo.get(t);
              r[t] = Jo(ao({
                shared: r.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = Uo.get(e);
                t && (r[e] = Jo(ao({
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
                  i = oi(r, o.eventOptions, !!n);
                o.enabled && new(Fo.get(t))(this, e, t).bind(i)
              }
              const o = oi(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", (r => this.nativeHandlers[t](ao(ao({}, this.state.shared), {}, {
                event: r,
                args: e
              }))), void 0, !0)
            }
            for (const e in r) r[e] = Po(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: i
              } = fo(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function ni(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new ei(e, t), e.gestureTimeoutStores[t] = new ti
      }
      const oi = (e, t, r) => (n, o, i, a = {}, s = !1) => {
          var l, c;
          const u = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = a.passive) && void 0 !== c ? c : t.passive;
          let f = s ? n : function(e, t = "", r = !1) {
            const n = so[e],
              o = n && n[t] || t;
            return "on" + lo(e) + lo(o) + (function(e = !1, t) {
              return e && !co.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        ii = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function ai(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!Fo.has(n)) return;
        const a = r + "Start",
          s = r + "End";
        o[n] = e => {
          let n;
          return e.first && a in t && t[a](e), r in t && (n = t[r](e)), e.last && s in t && t[s](e), n
        }, i[n] = i[n] || {}
      }

      function si(e, t = {}, r, n) {
        const o = H().useMemo((() => new ri(e)), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), H().useEffect(o.effect.bind(o)), H().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
      }

      function li(e, t) {
        const r = ([Go, Xo, Zo, $o, Wo, Ko].forEach(qo), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) ii.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return ai(o, r, "onDrag", "drag", i, t), ai(o, r, "onWheel", "wheel", i, t), ai(o, r, "onScroll", "scroll", i, t), ai(o, r, "onPinch", "pinch", i, t), ai(o, r, "onMove", "move", i, t), ai(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return si(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const ci = async e => e.decode ? e.decode().catch((() => {})) : e.complete ? Promise.resolve() : new Promise(((t, r) => {
        e.onload = () => t(), e.onerror = r
      })), ui = ([e, t]) => ({
        x: e,
        y: t
      }), di = (e, t) => (e.x = t.x, e.y = t.y, e), fi = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, hi = (e, t, r) => Math.min(Math.max(e, t), r);

      function pi() {
        return pi = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, pi.apply(null, arguments)
      }
      var mi = ["shift", "alt", "meta", "mod", "ctrl"],
        vi = {
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

      function yi(e) {
        return (e && vi[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function gi(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function bi(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map((function(e) {
          return yi(e)
        }));
        return pi({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter((function(e) {
            return !mi.includes(e)
          })),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && Ei([yi(e.key), yi(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && Pi([yi(e.key), yi(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        wi.clear()
      }));
      var wi = new Set;

      function _i(e) {
        return Array.isArray(e)
      }

      function Ei(e) {
        var t = Array.isArray(e) ? e : [e];
        wi.has("meta") && wi.forEach((function(e) {
          return ! function(e) {
            return mi.includes(e)
          }(e) && wi.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return wi.add(e.toLowerCase())
        }))
      }

      function Pi(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? wi.clear() : t.forEach((function(e) {
          return wi.delete(e.toLowerCase())
        }))
      }

      function Si(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, _i(t) ? Boolean(n && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        }))) : Boolean(n && t && t)
      }
      var xi = (0, D.createContext)(void 0);

      function Ci(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, w.jsx)(xi.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Ti(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(r, n) {
          return r && Ti(e[n], t[n])
        }), !0) : e === t
      }
      var Oi = (0, D.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Ri = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, D.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            a = o[1],
            s = (0, D.useState)([]),
            l = s[0],
            c = s[1],
            u = (0, D.useCallback)((function(e) {
              a((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            d = (0, D.useCallback)((function(e) {
              a((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            f = (0, D.useCallback)((function(e) {
              a((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            h = (0, D.useCallback)((function(e) {
              c((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            p = (0, D.useCallback)((function(e) {
              c((function(t) {
                return t.filter((function(t) {
                  return !Ti(t, e)
                }))
              }))
            }), []);
          return (0, w.jsx)(Oi.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: u,
              disableScope: d,
              toggleScope: f
            },
            children: (0, w.jsx)(Ci, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        Ii = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Ni = "undefined" != typeof window ? D.useLayoutEffect : D.useEffect;

      function ji(e, t, r, n) {
        var o = (0, D.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, D.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          c = _i(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, D.useCallback)(t, null != u ? u : []),
          f = (0, D.useRef)(d);
        f.current = u ? d : t;
        var h = function(e) {
            var t = (0, D.useRef)(void 0);
            return Ti(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, D.useContext)(Oi).enabledScopes,
          m = (0, D.useContext)(xi);
        return Ni((function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Si(e, ["input", "textarea", "select"]) || Si(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void Ii(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && gi(c, null == h ? void 0 : h.splitKey).forEach((function(r) {
                    var n, o = bi(r, null == h ? void 0 : h.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, i = t.alt,
                          a = t.meta,
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
                          y = yi(f),
                          g = d.toLowerCase();
                        if (!(null != u && u.includes(y) || null != u && u.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (i === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (s) {
                            if (!p && !h) return !1
                          } else {
                            if (a === !p && "meta" !== g && "os" !== g) return !1;
                            if (c === !h && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (_i(n = u) ? n : n.split(o)).every((function(e) {
                          return wi.has(e.trim().toLowerCase())
                        }))) : !u)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void Ii(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              n = function(e) {
                void 0 !== e.key && (Ei(yi(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Pi(yi(e.code)), s.current = !1, null != h && h.keyup && r(e, !0))
              },
              a = i || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && gi(c, null == h ? void 0 : h.splitKey).forEach((function(e) {
                return m.addHotkey(bi(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && gi(c, null == h ? void 0 : h.splitKey).forEach((function(e) {
                  return m.removeHotkey(bi(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                }))
              }
          }
        }), [i, c, h, p]), a
      }

      function ki(e) {
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

      function Li(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Ai(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Li(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ki(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Li(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Mi(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Di = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hi = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ai(Ai({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Di(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Mi(e.variantClassNames, (e => Mi(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_1a74xwbm foundry_1a74xwbh",
          variantClassNames: {
            position: {
              top: "foundry_1a74xwbn",
              bottom: "foundry_1a74xwbo"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      Wn.gsap.registerPlugin(eo);
      const Bi = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        zi = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Vi = U("var(--foundry_1a74xwb0)");
      var Fi = r(78322);

      function Ui(e, t) {
        var r = t && t.cache ? t.cache : ea,
          n = t && t.serializer ? t.serializer : Xi;
        return (t && t.strategy ? t.strategy : Wi)(e, {
          cache: r,
          serializer: n
        })
      }

      function qi(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function Gi(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function Ki(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function Wi(e, t) {
        return Ki(e, this, 1 === e.length ? qi : Gi, t.cache.create(), t.serializer)
      }
      var Xi = function() {
        return JSON.stringify(arguments)
      };

      function Zi() {
        this.cache = Object.create(null)
      }
      Zi.prototype.get = function(e) {
        return this.cache[e]
      }, Zi.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var $i, Yi, Qi, Ji, ea = {
          create: function() {
            return new Zi
          }
        },
        ta = {
          variadic: function(e, t) {
            return Ki(e, this, Gi, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Ki(e, this, qi, t.cache.create(), t.serializer)
          }
        };

      function ra(e) {
        return e.type === Yi.literal
      }

      function na(e) {
        return e.type === Yi.argument
      }

      function oa(e) {
        return e.type === Yi.number
      }

      function ia(e) {
        return e.type === Yi.date
      }

      function aa(e) {
        return e.type === Yi.time
      }

      function sa(e) {
        return e.type === Yi.select
      }

      function la(e) {
        return e.type === Yi.plural
      }

      function ca(e) {
        return e.type === Yi.pound
      }

      function ua(e) {
        return e.type === Yi.tag
      }

      function da(e) {
        return !(!e || "object" != typeof e || e.type !== Qi.number)
      }

      function fa(e) {
        return !(!e || "object" != typeof e || e.type !== Qi.dateTime)
      }(Ji = $i || ($i = {}))[Ji.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Ji[Ji.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Ji[Ji.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Ji[Ji.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Ji[Ji.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Ji[Ji.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Ji[Ji.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Ji[Ji.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Ji[Ji.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Ji[Ji.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Ji[Ji.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Ji[Ji.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Ji[Ji.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Ji[Ji.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Ji[Ji.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Ji[Ji.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Ji[Ji.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Ji[Ji.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Ji[Ji.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Ji[Ji.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Ji[Ji.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Ji[Ji.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Ji[Ji.INVALID_TAG = 23] = "INVALID_TAG", Ji[Ji.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Ji[Ji.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Ji[Ji.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(Yi || (Yi = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Qi || (Qi = {}));
      var ha = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        pa = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function ma(e) {
        var t = {};
        return e.replace(pa, (function(e) {
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
      var va = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function ya(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, n = e.split(va).filter((function(e) {
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
      var ga = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        ba = /^(@+)?(\+|#+)?[rs]?$/g,
        wa = /(\*)(0+)|(#+)(0+)|(0+)/g,
        _a = /^(0+)$/;

      function Ea(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(ba, (function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        })), t
      }

      function Pa(e) {
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

      function Sa(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !_a.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function xa(e) {
        return Pa(e) || {}
      }

      function Ca(e) {
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
              t = (0, Fi.__assign)((0, Fi.__assign)((0, Fi.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, Fi.__assign)((0, Fi.__assign)({}, e), xa(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, Fi.__assign)((0, Fi.__assign)((0, Fi.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, Fi.__assign)((0, Fi.__assign)({}, e), xa(t))
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
              o.options[0].replace(wa, (function(e, r, n, o, i, a) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (_a.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (ga.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(ga, (function(e, r, n, o, i, a) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, Fi.__assign)((0, Fi.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, Fi.__assign)((0, Fi.__assign)({}, t), Ea(i)))
          } else if (ba.test(o.stem)) t = (0, Fi.__assign)((0, Fi.__assign)({}, t), Ea(o.stem));
          else {
            var a = Pa(o.stem);
            a && (t = (0, Fi.__assign)((0, Fi.__assign)({}, t), a));
            var s = Sa(o.stem);
            s && (t = (0, Fi.__assign)((0, Fi.__assign)({}, t), s))
          }
        }
        return t
      }
      var Ta, Oa = {
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

      function Ra(e) {
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
        return "root" !== n && (r = e.maximize().region), (Oa[r || ""] || Oa[n || ""] || Oa["".concat(n, "-001")] || Oa["001"])[0]
      }
      var Ia = new RegExp("^".concat(ha.source, "*")),
        Na = new RegExp("".concat(ha.source, "*$"));

      function ja(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var ka = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        La = !!String.fromCodePoint,
        Aa = !!Object.fromEntries,
        Ma = !!String.prototype.codePointAt,
        Da = !!String.prototype.trimStart,
        Ha = !!String.prototype.trimEnd,
        Ba = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        za = !0;
      try {
        za = "a" === (null === (Ta = Xa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Ta ? void 0 : Ta[0])
      } catch (e) {
        za = !1
      }
      var Va, Fa = ka ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Ua = La ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        qa = Aa ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        Ga = Ma ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Ka = Da ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Ia, "")
        },
        Wa = Ha ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Na, "")
        };

      function Xa(e, t) {
        return new RegExp(e, t)
      }
      if (za) {
        var Za = Xa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Va = function(e, t) {
          var r;
          return Za.lastIndex = t, null !== (r = Za.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Va = function(e, t) {
        for (var r = [];;) {
          var n = Ga(e, t);
          if (void 0 === n || es(n) || ts(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Ua.apply(void 0, r)
      };
      var $a, Ya, Qa = function() {
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
                  return this.error($i.UNMATCHED_CLOSING_TAG, ja(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Ja(this.peek() || 0)) {
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
                  type: Yi.pound,
                  location: ja(a, this.clonePosition())
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
              type: Yi.literal,
              value: "<".concat(n, "/>"),
              location: ja(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Ja(this.char())) return this.error($i.INVALID_TAG, ja(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error($i.UNMATCHED_CLOSING_TAG, ja(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Yi.tag,
                  value: n,
                  children: i,
                  location: ja(r, this.clonePosition())
                },
                err: null
              } : this.error($i.INVALID_TAG, ja(a, this.clonePosition())))
            }
            return this.error($i.UNCLOSED_TAG, ja(r, this.clonePosition()))
          }
          return this.error($i.INVALID_TAG, ja(r, this.clonePosition()))
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
          var s = ja(r, this.clonePosition());
          return {
            val: {
              type: Yi.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Ja(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Ua.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Ua(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error($i.EXPECT_ARGUMENT_CLOSING_BRACE, ja(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error($i.EMPTY_ARGUMENT, ja(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error($i.MALFORMED_ARGUMENT, ja(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error($i.EXPECT_ARGUMENT_CLOSING_BRACE, ja(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Yi.argument,
                  value: n,
                  location: ja(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error($i.EXPECT_ARGUMENT_CLOSING_BRACE, ja(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error($i.MALFORMED_ARGUMENT, ja(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Va(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: ja(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error($i.EXPECT_ARGUMENT_TYPE, ja(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Wa(y.val)).length) return this.error($i.EXPECT_ARGUMENT_STYLE, ja(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: ja(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = ja(n, this.clonePosition());
              if (l && Fa(null == l ? void 0 : l.style, "::", 0)) {
                var d = Ka(l.style.slice(2));
                if ("number" === a) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: Yi.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error($i.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Ra(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: Qi.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? ma(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Yi.date : Yi.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Yi.number : "date" === a ? Yi.date : Yi.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error($i.EXPECT_SELECT_ARGUMENT_OPTIONS, ja(p, (0, Fi.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error($i.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ja(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger($i.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, $i.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var w = ja(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Yi.select,
                  value: r,
                  options: qa(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: Yi.plural,
                  value: r,
                  options: qa(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error($i.INVALID_ARGUMENT_TYPE, ja(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error($i.EXPECT_ARGUMENT_CLOSING_BRACE, ja(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error($i.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ja(r, this.clonePosition()));
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
            r = ya(e)
          } catch (e) {
            return this.error($i.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Qi.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Ca(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger($i.EXPECT_PLURAL_ARGUMENT_SELECTOR, $i.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = ja(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? $i.DUPLICATE_SELECT_ARGUMENT_SELECTOR : $i.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? $i.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : $i.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ja(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: ja(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? $i.EXPECT_SELECT_ARGUMENT_SELECTOR : $i.EXPECT_PLURAL_ARGUMENT_SELECTOR, ja(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error($i.MISSING_OTHER_CLAUSE, ja(this.clonePosition(), this.clonePosition())) : {
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
          var s = ja(n, this.clonePosition());
          return o ? Ba(i *= r) ? {
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
          var t = Ga(this.message, e);
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
          if (Fa(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && es(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function Ja(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function es(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function ts(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function rs(e) {
        e.forEach((function(e) {
          if (delete e.location, sa(e) || la(e))
            for (var t in e.options) delete e.options[t].location, rs(e.options[t].value);
          else oa(e) && da(e.style) || (ia(e) || aa(e)) && fa(e.style) ? delete e.style.location : ua(e) && rs(e.children)
        }))
      }

      function ns(e, t) {
        void 0 === t && (t = {}), t = (0, Fi.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new Qa(e, t).parse();
        if (r.err) {
          var n = SyntaxError($i[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || rs(r.val), r.val
      }(Ya = $a || ($a = {})).MISSING_VALUE = "MISSING_VALUE", Ya.INVALID_VALUE = "INVALID_VALUE", Ya.MISSING_INTL_API = "MISSING_INTL_API";
      var os, is = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, Fi.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        as = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), $a.INVALID_VALUE, o) || this
          }
          return (0, Fi.__extends)(t, e), t
        }(is),
        ss = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), $a.INVALID_VALUE, n) || this
          }
          return (0, Fi.__extends)(t, e), t
        }(is),
        ls = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), $a.MISSING_VALUE, r) || this
          }
          return (0, Fi.__extends)(t, e), t
        }(is);

      function cs(e) {
        return "function" == typeof e
      }

      function us(e, t, r, n, o, i, a) {
        if (1 === e.length && ra(e[0])) return [{
          type: os.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (ra(u)) s.push({
            type: os.literal,
            value: u.value
          });
          else if (ca(u)) "number" == typeof i && s.push({
            type: os.literal,
            value: r.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new ls(d, a);
            var f = o[d];
            if (na(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? os.literal : os.object,
              value: f
            });
            else if (ia(u)) {
              var h = "string" == typeof u.style ? n.date[u.style] : fa(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: os.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (aa(u)) h = "string" == typeof u.style ? n.time[u.style] : fa(u.style) ? u.style.parsedOptions : n.time.medium, s.push({
              type: os.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (oa(u))(h = "string" == typeof u.style ? n.number[u.style] : da(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: os.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (ua(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!cs(v)) throw new ss(m, "function", a);
                var y = v(us(p, t, r, n, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(y) || (y = [y]), s.push.apply(s, y.map((function(e) {
                  return {
                    type: "string" == typeof e ? os.literal : os.object,
                    value: e
                  }
                })))
              }
              if (sa(u)) {
                if (!(g = u.options[f] || u.options.other)) throw new as(u.value, f, Object.keys(u.options), a);
                s.push.apply(s, us(g.value, t, r, n, o))
              } else if (la(u)) {
                var g;
                if (!(g = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new is('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', $a.MISSING_INTL_API, a);
                  var b = r.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  g = u.options[b] || u.options.other
                }
                if (!g) throw new as(u.value, f, Object.keys(u.options), a);
                s.push.apply(s, us(g.value, t, r, n, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (w = s).length < 2 ? w : w.reduce((function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === os.literal && t.type === os.literal ? r.value += t.value : e.push(t), e
        }), []);
        var w
      }

      function ds(e) {
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
      }(os || (os = {}));
      var fs, hs = function() {
        function e(t, r, n, o) {
          void 0 === r && (r = e.defaultLocale);
          var i, a = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = a.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce((function(e, t) {
                return e.length && t.type === os.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return us(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = a.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
              }
            }, this.getAst = function() {
              return a.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var s = o || {},
              l = (s.formatters, (0, Fi.__rest)(s, ["formatters"]));
            this.ast = e.__parse(t, (0, Fi.__assign)((0, Fi.__assign)({}, l), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = function(e, t) {
            return t ? Object.keys(e).reduce((function(r, n) {
              return r[n] = function(e, t) {
                return t ? (0, Fi.__assign)((0, Fi.__assign)((0, Fi.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(r, n) {
                  return r[n] = (0, Fi.__assign)((0, Fi.__assign)({}, e[n]), t[n] || {}), r
                }), {})) : e
              }(e[n], t[n]), r
            }), (0, Fi.__assign)({}, e)) : e
          }(e.formats, n), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: Ui((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
            }), {
              cache: ds(i.number),
              strategy: ta.variadic
            }),
            getDateTimeFormat: Ui((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
            }), {
              cache: ds(i.dateTime),
              strategy: ta.variadic
            }),
            getPluralRules: Ui((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
            }), {
              cache: ds(i.pluralRules),
              strategy: ta.variadic
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
        }, e.__parse = ns, e.formats = {
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
      }(fs || (fs = {}));
      var ps = function(e) {
          function t(r, n, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, Fi.__extends)(t, e), t
        }(Error),
        ms = function(e) {
          function t(t, r) {
            return e.call(this, fs.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, Fi.__extends)(t, e), t
        }(ps),
        vs = function(e) {
          function t(t, r) {
            return e.call(this, fs.INVALID_CONFIG, t, r) || this
          }
          return (0, Fi.__extends)(t, e), t
        }(ps),
        ys = function(e) {
          function t(t, r) {
            return e.call(this, fs.MISSING_DATA, t, r) || this
          }
          return (0, Fi.__extends)(t, e), t
        }(ps),
        gs = function(e) {
          function t(t, r, n) {
            var o = e.call(this, fs.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, Fi.__extends)(t, e), t
        }(ps),
        bs = function(e) {
          function t(t, r, n, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return i.descriptor = n, i.locale = r, i
          }
          return (0, Fi.__extends)(t, e), t
        }(gs),
        ws = function(e) {
          function t(t, r) {
            var n = e.call(this, fs.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, Fi.__extends)(t, e), t
        }(ps);

      function _s(e, t, r) {
        return void 0 === r && (r = {}), t.reduce((function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }), {})
      }
      var Es = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Ps(e) {
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

      function Ss(e, t, r, n) {
        var o, i = e && e[t];
        if (i && (o = i[r]), o) return o;
        n(new ms("No ".concat(t, " format named: ").concat(r)))
      }

      function xs(e, t) {
        var r = t && t.cache ? t.cache : js,
          n = t && t.serializer ? t.serializer : Is;
        return (t && t.strategy ? t.strategy : Rs)(e, {
          cache: r,
          serializer: n
        })
      }

      function Cs(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function Ts(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function Os(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function Rs(e, t) {
        return Os(e, this, 1 === e.length ? Cs : Ts, t.cache.create(), t.serializer)
      }
      var Is = function() {
        return JSON.stringify(arguments)
      };

      function Ns() {
        this.cache = Object.create(null)
      }
      Ns.prototype.get = function(e) {
        return this.cache[e]
      }, Ns.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var js = {
          create: function() {
            return new Ns
          }
        },
        ks = {
          variadic: function(e, t) {
            return Os(e, this, Ts, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Os(e, this, Cs, t.cache.create(), t.serializer)
          }
        };

      function Ls(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      xs((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ks.variadic
      }), xs((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ks.variadic
      }), xs((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ks.variadic
      }), xs((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ks.variadic
      }), xs((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ks.variadic
      });
      var As = (0, Fi.__assign)((0, Fi.__assign)({}, Es), {
        textComponent: D.Fragment
      });
      r(35255);
      var Ms = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? D.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = D.createContext(null)),
        Ds = (Ms.Consumer, Ms.Provider),
        Hs = Ms;

      function Bs(e, t) {
        return Object.keys(e).reduce((function(r, n) {
          return r[n] = (0, Fi.__assign)({
            timeZone: t
          }, e[n]), r
        }), {})
      }

      function zs(e, t) {
        return Object.keys((0, Fi.__assign)((0, Fi.__assign)({}, e), t)).reduce((function(r, n) {
          return r[n] = (0, Fi.__assign)((0, Fi.__assign)({}, e[n] || {}), t[n] || {}), r
        }), {})
      }

      function Vs(e, t) {
        if (!t) return e;
        var r = hs.formats;
        return (0, Fi.__assign)((0, Fi.__assign)((0, Fi.__assign)({}, r), e), {
          date: zs(Bs(r.date, t), Bs(e.date || {}, t)),
          time: zs(Bs(r.time, t), Bs(e.time || {}, t))
        })
      }
      Ui((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ta.variadic
      }), Ui((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ta.variadic
      }), Ui((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ta.variadic
      }), Ui((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ta.variadic
      }), Ui((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ta.variadic
      });
      var Fs = function(e, t, r, n, o) {
          var i = e.locale,
            a = e.formats,
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
          if (Array.isArray(y) && 1 === y.length && y[0].type === Yi.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, Fi.__assign)((0, Fi.__assign)({}, h), n || {}), a = Vs(a, f), c = Vs(c, f), !y) {
            if (!1 === u && "" === y) return y;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new ws(r, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(n)
            } catch (e) {
              return d(new bs('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, i, a, (0, Fi.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new bs('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(n)
          } catch (e) {
            d(new bs('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        Us = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function qs(e, t, r) {
        var n = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === r && (r = {});
        var a = r.format,
          s = a && Ss(o, "number", a, i) || {};
        return t(n, _s(r, Us, s))
      }

      function Gs(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return qs(e, t, n).format(r)
        } catch (t) {
          e.onError(new gs("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function Ks(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return qs(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new gs("Error formatting number.", e.locale, t))
        }
        return []
      }
      var Ws = ["numeric", "style"];

      function Xs(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new is('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', $a.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === r && (r = {});
            var a = r.format,
              s = !!a && Ss(o, "relative", a, i) || {};
            return t(n, _s(r, Ws, s))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new gs("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var Zs = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function $s(e, t, r, n) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          c = (0, Fi.__assign)((0, Fi.__assign)({}, s && {
            timeZone: s
          }), l && Ss(i, t, l, a)),
          u = _s(n, Zs, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, Fi.__assign)((0, Fi.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, u)
      }

      function Ys(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return $s(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new gs("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function Qs(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return $s(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new gs("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function Js(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = r[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = _s(s, Zs, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, i)
        } catch (t) {
          u(new gs("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function el(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return $s(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new gs("Error formatting date.", e.locale, t))
        }
        return []
      }

      function tl(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return $s(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new gs("Error formatting time.", e.locale, t))
        }
        return []
      }
      var rl = ["type"];

      function nl(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new is('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', $a.MISSING_INTL_API));
        var a = _s(n, rl);
        try {
          return t(o, a).select(r)
        } catch (e) {
          i(new gs("Error formatting plural.", o, e))
        }
        return "other"
      }
      var ol = ["type", "style"],
        il = Date.now();

      function al(e, t, r, n) {
        void 0 === n && (n = {});
        var o = sl(e, t, r, n).reduce((function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function sl(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || i(new is('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', $a.MISSING_INTL_API));
        var a = _s(n, ol);
        try {
          var s = {},
            l = r.map((function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(il, "_").concat(e, "_").concat(il)
                }(t);
                return s[r] = e, r
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, Fi.__assign)((0, Fi.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new gs("Error formatting list.", o, e))
        }
        return r
      }
      var ll, cl, ul, dl = ["style", "type", "fallback", "languageDisplay"];

      function fl(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new is('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', $a.MISSING_INTL_API));
        var a = _s(n, dl);
        try {
          return t(o, a).of(r)
        } catch (e) {
          i(new gs("Error formatting display name.", o, e))
        }
      }

      function hl(e, t) {
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
              o = Ui((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Ps(e.dateTime),
                strategy: ta.variadic
              }),
              i = Ui((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Ps(e.number),
                strategy: ta.variadic
              }),
              a = Ui((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, Fi.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Ps(e.pluralRules),
                strategy: ta.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: Ui((function(e, t, r, n) {
                return new hs(e, t, r, (0, Fi.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, n || {}))
              }), {
                cache: Ps(e.message),
                strategy: ta.variadic
              }),
              getRelativeTimeFormat: Ui((function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, Fi.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Ps(e.relativeTime),
                strategy: ta.variadic
              }),
              getPluralRules: a,
              getListFormat: Ui((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, Fi.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Ps(e.list),
                strategy: ta.variadic
              }),
              getDisplayNames: Ui((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, Fi.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Ps(e.displayNames),
                strategy: ta.variadic
              })
            }
          }(t),
          n = (0, Fi.__assign)((0, Fi.__assign)({}, Es), e),
          o = n.locale,
          i = n.defaultLocale,
          a = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new ys('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new ys('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new vs('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, Fi.__assign)((0, Fi.__assign)({}, n), {
            formatters: r,
            formatNumber: Gs.bind(null, n, r.getNumberFormat),
            formatNumberToParts: Ks.bind(null, n, r.getNumberFormat),
            formatRelativeTime: Xs.bind(null, n, r.getRelativeTimeFormat),
            formatDate: Ys.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: el.bind(null, n, r.getDateTimeFormat),
            formatTime: Qs.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: Js.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: tl.bind(null, n, r.getDateTimeFormat),
            formatPlural: nl.bind(null, n, r.getPluralRules),
            formatMessage: Fs.bind(null, n, r),
            $t: Fs.bind(null, n, r),
            formatList: al.bind(null, n, r.getListFormat),
            formatListToParts: sl.bind(null, n, r.getListFormat),
            formatDisplayName: fl.bind(null, n, r.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(ll || (ll = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(cl || (cl = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(ul || (ul = {}));
      var pl, ml = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        vl = {
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

      function yl(e) {
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
        return "root" !== n && (r = e.maximize().region), (vl[r || ""] || vl[n || ""] || vl["".concat(n, "-001")] || vl["001"])[0]
      }
      var gl = new RegExp("^".concat(ml.source, "*")),
        bl = new RegExp("".concat(ml.source, "*$"));

      function wl(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var _l = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        El = !!String.fromCodePoint,
        Pl = !!Object.fromEntries,
        Sl = !!String.prototype.codePointAt,
        xl = !!String.prototype.trimStart,
        Cl = !!String.prototype.trimEnd,
        Tl = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Ol = !0;
      try {
        Ol = "a" === (null === (pl = Dl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === pl ? void 0 : pl[0])
      } catch (e) {
        Ol = !1
      }
      var Rl, Il, Nl = _l ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        jl = El ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        kl = Pl ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        Ll = Sl ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Al = xl ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(gl, "")
        },
        Ml = Cl ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(bl, "")
        };

      function Dl(e, t) {
        return new RegExp(e, t)
      }
      if (Ol) {
        var Hl = Dl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Rl = function(e, t) {
          var r;
          return Hl.lastIndex = t, null !== (r = Hl.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Rl = function(e, t) {
        for (var r = [];;) {
          var n = Ll(e, t);
          if (void 0 === n || zl(n) || Vl(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return jl.apply(void 0, r)
      };

      function Bl(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function zl(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Vl(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Fl(e) {
        return e ? Object.keys(e).reduce((function(t, r) {
          var n, o = e[r];
          return t[r] = "function" == typeof o ? (n = o, function(e) {
            return n(D.Children.toArray(e))
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
                  return this.error(ll.UNMATCHED_CLOSING_TAG, wl(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Bl(this.peek() || 0)) {
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
                  type: cl.pound,
                  location: wl(a, this.clonePosition())
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
              type: cl.literal,
              value: "<".concat(n, "/>"),
              location: wl(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Bl(this.char())) return this.error(ll.INVALID_TAG, wl(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(ll.UNMATCHED_CLOSING_TAG, wl(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: cl.tag,
                  value: n,
                  children: i,
                  location: wl(r, this.clonePosition())
                },
                err: null
              } : this.error(ll.INVALID_TAG, wl(a, this.clonePosition())))
            }
            return this.error(ll.UNCLOSED_TAG, wl(r, this.clonePosition()))
          }
          return this.error(ll.INVALID_TAG, wl(r, this.clonePosition()))
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
          var s = wl(r, this.clonePosition());
          return {
            val: {
              type: cl.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Bl(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return jl.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), jl(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(ll.EXPECT_ARGUMENT_CLOSING_BRACE, wl(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(ll.EMPTY_ARGUMENT, wl(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(ll.MALFORMED_ARGUMENT, wl(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(ll.EXPECT_ARGUMENT_CLOSING_BRACE, wl(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: cl.argument,
                  value: n,
                  location: wl(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ll.EXPECT_ARGUMENT_CLOSING_BRACE, wl(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(ll.MALFORMED_ARGUMENT, wl(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Rl(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: wl(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(ll.EXPECT_ARGUMENT_TYPE, wl(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Ml(y.val)).length) return this.error(ll.EXPECT_ARGUMENT_STYLE, wl(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: wl(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = wl(n, this.clonePosition());
              if (l && Nl(null == l ? void 0 : l.style, "::", 0)) {
                var d = Al(l.style.slice(2));
                if ("number" === a) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: cl.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(ll.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = yl(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: ul.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? ma(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? cl.date : cl.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? cl.number : "date" === a ? cl.date : cl.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(ll.EXPECT_SELECT_ARGUMENT_OPTIONS, wl(p, (0, Fi.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(ll.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, wl(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(ll.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ll.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var w = wl(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: cl.select,
                  value: r,
                  options: kl(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: cl.plural,
                  value: r,
                  options: kl(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(ll.INVALID_ARGUMENT_TYPE, wl(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(ll.EXPECT_ARGUMENT_CLOSING_BRACE, wl(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(ll.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, wl(r, this.clonePosition()));
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
            r = ya(e)
          } catch (e) {
            return this.error(ll.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: ul.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Ca(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(ll.EXPECT_PLURAL_ARGUMENT_SELECTOR, ll.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = wl(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? ll.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ll.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? ll.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ll.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, wl(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: wl(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? ll.EXPECT_SELECT_ARGUMENT_SELECTOR : ll.EXPECT_PLURAL_ARGUMENT_SELECTOR, wl(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(ll.MISSING_OTHER_CLAUSE, wl(this.clonePosition(), this.clonePosition())) : {
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
          var s = wl(n, this.clonePosition());
          return o ? Tl(i *= r) ? {
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
          var t = Ll(this.message, e);
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
          if (Nl(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && zl(this.char());) this.bump()
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
      }(Il || (Il = {}));
      var Ul = function(e, t, r, n) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = Fl(n),
            s = Fs.apply(void 0, (0, Fi.__spreadArray)([e, t, r, a], o, !1));
          return Array.isArray(s) ? D.Children.toArray(s) : s
        },
        ql = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, Fi.__rest)(e, ["defaultRichTextElements"]),
            o = Fl(r),
            i = hl((0, Fi.__assign)((0, Fi.__assign)((0, Fi.__assign)({}, As), n), {
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
          return (0, Fi.__assign)((0, Fi.__assign)({}, i), {
            formatMessage: Ul.bind(null, a, i.formatters),
            $t: Ul.bind(null, a, i.formatters)
          })
        };

      function Gl(e) {
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
      var Kl = function(e) {
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
            intl: ql(Gl(t.props), t.cache),
            prevConfig: Gl(t.props)
          }, t
        }
        return (0, Fi.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = Gl(e);
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
            intl: ql(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return Ls(this.state.intl), D.createElement(Ds, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = As, t
      }(D.PureComponent);
      const Wl = Kl;

      function Xl() {
        var e = D.useContext(Hs);
        return Ls(e), e
      }
      var Zl, $l;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Zl || (Zl = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }($l || ($l = {}));
      var Yl = function(e) {
        var t = Xl(),
          r = e.value,
          n = e.children,
          o = (0, Fi.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function Ql(e) {
        var t = function(t) {
          var r = Xl(),
            n = t.value,
            o = t.children,
            i = (0, Fi.__rest)(t, ["value", "children"]),
            a = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(a, i) : r.formatTimeToParts(a, i))
        };
        return t.displayName = $l[e], t
      }

      function Jl(e) {
        var t = function(t) {
          var r = Xl(),
            n = t.value,
            o = t.children,
            i = (0, Fi.__rest)(t, ["value", "children"]),
            a = r[e](n, i);
          if ("function" == typeof o) return o(a);
          var s = r.textComponent || D.Fragment;
          return D.createElement(s, null, a)
        };
        return t.displayName = Zl[e], t
      }
      Yl.displayName = "FormattedNumberParts", Yl.displayName = "FormattedNumberParts", Jl("formatDate"), Jl("formatTime"), Jl("formatNumber"), Jl("formatList"), Jl("formatDisplayName"), Ql("formatDate"), Ql("formatTime");
      const ec = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, i] = (0, D.useState)(null);
          return (0, D.useEffect)((() => {
            (t?.[r] ?? t["en-US"]).then((e => {
              i(e.default)
            }))
          }), [r]), o ? (0, w.jsx)(Wl, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        tc = {
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
      var rc = r(4218);
      const nc = (e, t) => {
        const r = "more" === t ? rc.xW.lightHc : rc.xW.light,
          n = "more" === t ? rc.xW.darkHc : rc.xW.dark;
        return "dark" === e ? n : r
      };
      var oc = r(7157);
      class ic {
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
          return r ? t : hi(t, this.max[e], this.min[e])
        }
      }
      class ac {
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
      class sc {
        eventCallbacks = new Map;
        addEventListener(e, t) {
          this.eventCallbacks.has(e) || this.eventCallbacks.set(e, new Set), this.eventCallbacks.get(e)?.add(t)
        }
        removeEventListener(e, t) {
          this.eventCallbacks.has(e) && this.eventCallbacks.get(e)?.delete(t)
        }
        dispatch(e, t) {
          const r = t || new Event(e);
          return this.eventCallbacks.get(e)?.forEach((e => e(r))), r
        }
      }
      class lc {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", di(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [r, n]
          } = e, o = t > 1, i = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && i && !o ? (this.setPanWithFriction("y", this.slide.pan.y + n, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && i ? this.setPanWithFriction("x", this.slide.pan.x + r, .35) : (this.setPanWithFriction("x", this.slide.pan.x + r), this.setPanWithFriction("y", this.slide.pan.y + n))
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
          const i = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const r = Math.abs(e.x - t.x),
              n = Math.abs(e.y - t.y);
            return Math.sqrt(r * r + n * n)
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (di(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout((() => {
            this.slide.tapHandler.tap(n, o), this.clearTapTimer()
          }), i))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, n]
          } = t, o = "x" === e ? r : n, i = this.slide.pan[e], a = i + o;
          if (this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(i),
              t = this.getVerticalDragRatio(a);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const s = this.slide.bounds.correctPan(e, a);
          i !== s && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = s)
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
      class cc {
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
          e.src = this.thumbnail.currentSrc ?? "", await ci(e)
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
      class uc {
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
      class dc extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class fc extends sc {
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
          if (!this.dispatch(e, new dc(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class hc {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = ui(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, di(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = ui(e);
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
            i = di({
              x: 0,
              y: 0
            }, this.slide.pan);
          let a = di({
            x: 0,
            y: 0
          }, i);
          var s, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, di(this.startPan, i)), n && (a = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), a = {
            x: this.slide.bounds.correctPan("x", a.x),
            y: this.slide.bounds.correctPan("y", a.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((s = a).x !== l.x || s.y !== l.y || n || o) && (di(this.slide.pan, a), this.slide.setZoomLevel(r))
        }
      }
      class pc extends sc {
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
          super(), this.width = e, this.height = t, this.opener = new cc({
            slide: this
          }), this.bounds = new ic({
            slide: this
          }), this.dragHandler = new lc({
            slide: this
          }), this.scrollWheel = new uc({
            slide: this
          }), this.zoomHandler = new hc({
            slide: this
          }), this.zoomLevels = new ac({
            options: r
          }), this.tapHandler = new fc({
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
          r || (e = hi(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), fi(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), fi(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), di(this.pan, this.bounds.center)
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
          if (0 == this.bounds.max[e] - this.bounds.min[e]) return this.bounds.center[e];
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
      var mc = r(7454);
      const vc = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        yc = {
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
        wc = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        _c = {
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
        xc = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Cc = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };
      var Tc = "foundry_bc732x1";
      const Oc = (0, D.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (ji(e, (e => r?.(e)), [r]), (0, w.jsx)(jn, {
        size: "XS",
        className: (0, ze.clsx)("foundry_bc732x0", {
          [Tc]: t
        }),
        asChild: !0,
        children: (0, w.jsx)("kbd", {
          ref: n,
          children: e
        })
      }))));
      var Rc = r(46461),
        Ic = Kc(),
        Nc = e => Fc(e, Ic),
        jc = Kc();
      Nc.write = e => Fc(e, jc);
      var kc = Kc();
      Nc.onStart = e => Fc(e, kc);
      var Lc = Kc();
      Nc.onFrame = e => Fc(e, Lc);
      var Ac = Kc();
      Nc.onFinish = e => Fc(e, Ac);
      var Mc = [];
      Nc.setTimeout = (e, t) => {
        const r = Nc.now() + t,
          n = () => {
            const e = Mc.findIndex((e => e.cancel == n));
            ~e && Mc.splice(e, 1), zc -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Mc.splice(Dc(r), 0, o), zc += 1, Uc(), o
      };
      var Dc = e => ~(~Mc.findIndex((t => t.time > e)) || ~Mc.length);
      Nc.cancel = e => {
        kc.delete(e), Lc.delete(e), Ac.delete(e), Ic.delete(e), jc.delete(e)
      }, Nc.sync = e => {
        Vc = !0, Nc.batchedUpdates(e), Vc = !1
      }, Nc.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Nc.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          kc.delete(r), t = null
        }, n
      };
      var Hc = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Nc.use = e => Hc = e, Nc.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Nc.batchedUpdates = e => e(), Nc.catch = console.error, Nc.frameLoop = "always", Nc.advance = () => {
        "demand" !== Nc.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Gc()
      };
      var Bc = -1,
        zc = 0,
        Vc = !1;

      function Fc(e, t) {
        Vc ? (t.delete(e), e(0)) : (t.add(e), Uc())
      }

      function Uc() {
        Bc < 0 && (Bc = 0, "demand" !== Nc.frameLoop && Hc(qc))
      }

      function qc() {
        ~Bc && (Hc(qc), Nc.batchedUpdates(Gc))
      }

      function Gc() {
        const e = Bc;
        Bc = Nc.now();
        const t = Dc(Bc);
        t && (Wc(Mc.splice(0, t), (e => e.handler())), zc -= t), zc ? (kc.flush(), Ic.flush(e ? Math.min(64, Bc - e) : 16.667), Lc.flush(), jc.flush(), Ac.flush()) : Bc = -1
      }

      function Kc() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            zc += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (zc -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, zc -= t.size, Wc(t, (t => t(r) && e.add(t))), zc += e.size, t = e)
          }
        }
      }

      function Wc(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            Nc.catch(e)
          }
        }))
      }
      var Xc = Object.defineProperty,
        Zc = {};

      function $c() {}((e, t) => {
        for (var r in t) Xc(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Zc, {
        assign: () => uu,
        colors: () => su,
        createStringInterpolator: () => nu,
        skipAnimation: () => lu,
        to: () => ou,
        willAdvance: () => cu
      });
      var Yc = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Qc(e, t) {
        if (Yc.arr(e)) {
          if (!Yc.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var Jc = (e, t) => e.forEach(t);

      function eu(e, t, r) {
        if (Yc.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var tu = e => Yc.und(e) ? [] : Yc.arr(e) ? e : [e];

      function ru(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Jc(r, t)
        }
      }
      var nu, ou, iu = (e, ...t) => ru(e, (e => e(...t))),
        au = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        su = null,
        lu = !1,
        cu = $c,
        uu = e => {
          e.to && (ou = e.to), e.now && (Nc.now = e.now), void 0 !== e.colors && (su = e.colors), null != e.skipAnimation && (lu = e.skipAnimation), e.createStringInterpolator && (nu = e.createStringInterpolator), e.requestAnimationFrame && Nc.use(e.requestAnimationFrame), e.batchedUpdates && (Nc.batchedUpdates = e.batchedUpdates), e.willAdvance && (cu = e.willAdvance), e.frameLoop && (Nc.frameLoop = e.frameLoop)
        },
        du = new Set,
        fu = [],
        hu = [],
        pu = 0,
        mu = {
          get idle() {
            return !du.size && !fu.length
          },
          start(e) {
            pu > e.priority ? (du.add(e), Nc.onStart(vu)) : (yu(e), Nc(bu))
          },
          advance: bu,
          sort(e) {
            if (pu) Nc.onFrame((() => mu.sort(e)));
            else {
              const t = fu.indexOf(e);
              ~t && (fu.splice(t, 1), gu(e))
            }
          },
          clear() {
            fu = [], du.clear()
          }
        };

      function vu() {
        du.forEach(yu), du.clear(), Nc(bu)
      }

      function yu(e) {
        fu.includes(e) || gu(e)
      }

      function gu(e) {
        fu.splice(function(t) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(fu), 0, e)
      }

      function bu(e) {
        const t = hu;
        for (let r = 0; r < fu.length; r++) {
          const n = fu[r];
          pu = n.priority, n.idle || (cu(n), n.advance(e), n.idle || t.push(n))
        }
        return pu = 0, (hu = fu).length = 0, (fu = t).length > 0
      }
      var wu = "[-+]?\\d*\\.?\\d+",
        _u = wu + "%";

      function Eu(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Pu = new RegExp("rgb" + Eu(wu, wu, wu)),
        Su = new RegExp("rgba" + Eu(wu, wu, wu, wu)),
        xu = new RegExp("hsl" + Eu(wu, _u, _u)),
        Cu = new RegExp("hsla" + Eu(wu, _u, _u, wu)),
        Tu = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ou = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ru = /^#([0-9a-fA-F]{6})$/,
        Iu = /^#([0-9a-fA-F]{8})$/;

      function Nu(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function ju(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = Nu(o, n, e + 1 / 3),
          a = Nu(o, n, e),
          s = Nu(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function ku(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Lu(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Au(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Mu(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Du(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Ru.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : su && void 0 !== su[e] ? su[e] : (t = Pu.exec(e)) ? (ku(t[1]) << 24 | ku(t[2]) << 16 | ku(t[3]) << 8 | 255) >>> 0 : (t = Su.exec(e)) ? (ku(t[1]) << 24 | ku(t[2]) << 16 | ku(t[3]) << 8 | Au(t[4])) >>> 0 : (t = Tu.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Iu.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Ou.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = xu.exec(e)) ? (255 | ju(Lu(t[1]), Mu(t[2]), Mu(t[3]))) >>> 0 : (t = Cu.exec(e)) ? (ju(Lu(t[1]), Mu(t[2]), Mu(t[3])) | Au(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Hu = (e, t, r) => {
          if (Yc.fun(e)) return e;
          if (Yc.arr(e)) return Hu({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Yc.str(e.output[0])) return nu(e);
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
        Bu = 1.70158,
        zu = 1.525 * Bu,
        Vu = Bu + 1,
        Fu = 2 * Math.PI / 3,
        Uu = 2 * Math.PI / 4.5,
        qu = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Gu = {
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
          easeInBack: e => Vu * e * e * e - Bu * e * e,
          easeOutBack: e => 1 + Vu * Math.pow(e - 1, 3) + Bu * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - zu) / 2 : (Math.pow(2 * e - 2, 2) * ((zu + 1) * (2 * e - 2) + zu) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Fu),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Fu) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Uu) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Uu) / 2 + 1,
          easeInBounce: e => 1 - qu(1 - e),
          easeOutBounce: qu,
          easeInOutBounce: e => e < .5 ? (1 - qu(1 - 2 * e)) / 2 : (1 + qu(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Ku = Symbol.for("FluidValue.get"),
        Wu = Symbol.for("FluidValue.observers"),
        Xu = e => Boolean(e && e[Ku]),
        Zu = e => e && e[Ku] ? e[Ku]() : e,
        $u = e => e[Wu] || null;

      function Yu(e, t) {
        const r = e[Wu];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Qu = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Ju(this, e)
          }
        },
        Ju = (e, t) => nd(e, Ku, t);

      function ed(e, t) {
        if (e[Ku]) {
          let r = e[Wu];
          r || nd(e, Wu, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function td(e, t) {
        const r = e[Wu];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Wu] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var rd, nd = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        od = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        id = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ad = new RegExp(`(${od.source})(%|[a-z]+)`, "i"),
        sd = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        ld = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        cd = e => {
          const [t, r] = ud(e);
          if (!t || au()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && ld.test(r) ? cd(r) : r || e
        },
        ud = e => {
          const t = ld.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        dd = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        fd = e => {
          rd || (rd = su ? new RegExp(`(${Object.keys(su).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Zu(e).replace(ld, cd).replace(id, Du).replace(rd, Du))),
            r = t.map((e => e.match(od).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = n.map((t => Hu({
              ...e,
              output: t
            })));
          return e => {
            const r = !ad.test(t[0]) && t.find((e => ad.test(e)))?.replace(od, "");
            let n = 0;
            return t[0].replace(od, (() => `${o[n++](e)}${r||""}`)).replace(sd, dd)
          }
        },
        hd = "react-spring: ",
        pd = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${hd}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        md = pd(console.warn),
        vd = pd(console.warn);

      function yd(e) {
        return Yc.str(e) && ("#" == e[0] || /\d/.test(e) || !au() && ld.test(e) || e in (su || {}))
      }
      var gd = au() ? D.useEffect : D.useLayoutEffect;

      function bd() {
        const e = (0, D.useState)()[1],
          t = (() => {
            const e = (0, D.useRef)(!1);
            return gd((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var wd = e => (0, D.useEffect)(e, _d),
        _d = [];

      function Ed(e) {
        const t = (0, D.useRef)();
        return (0, D.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var Pd = Symbol.for("Animated:node"),
        Sd = e => e && e[Pd],
        xd = (e, t) => {
          return r = e, n = Pd, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Cd = e => e && e[Pd] && e[Pd].getPayload(),
        Td = class {
          constructor() {
            xd(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Od = class extends Td {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Yc.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Od(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Yc.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Yc.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Rd = class extends Od {
          constructor(e) {
            super(0), this._string = null, this._toString = Hu({
              output: [e, e]
            })
          }
          static create(e) {
            return new Rd(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Yc.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Hu({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Id = {
          dependencies: null
        },
        Nd = class extends Td {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return eu(this.source, ((r, n) => {
              var o;
              (o = r) && o[Pd] === o ? t[n] = r.getValue(e) : Xu(r) ? t[n] = Zu(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Jc(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return eu(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Id.dependencies && Xu(e) && Id.dependencies.add(e);
            const t = Cd(e);
            t && Jc(t, (e => this.add(e)))
          }
        },
        jd = class extends Nd {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new jd(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(kd)), !0)
          }
        };

      function kd(e) {
        return (yd(e) ? Rd : Od).create(e)
      }

      function Ld(e) {
        const t = Sd(e);
        return t ? t.constructor : Yc.arr(e) ? jd : yd(e) ? Rd : Od
      }
      var Ad = (e, t) => {
          const r = !Yc.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, D.forwardRef)(((n, o) => {
            const i = (0, D.useRef)(null),
              a = r && (0, D.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (Yc.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return Id.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Nd(e), Id.dependencies = null, [e, r]
              }(n, t),
              c = bd(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new Md(u, l),
              f = (0, D.useRef)();
            gd((() => (f.current = d, Jc(l, (e => ed(e, d))), () => {
              f.current && (Jc(f.current.deps, (e => td(e, f.current))), Nc.cancel(f.current.update))
            }))), (0, D.useEffect)(u, []), wd((() => () => {
              const e = f.current;
              Jc(e.deps, (t => td(t, e)))
            }));
            const h = t.getComponentProps(s.getValue());
            return D.createElement(e, {
              ...h,
              ref: a
            })
          }))
        },
        Md = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Nc.write(this.update)
          }
        },
        Dd = Symbol.for("AnimatedComponent"),
        Hd = e => Yc.str(e) ? e : e && Yc.str(e.displayName) ? e.displayName : Yc.fun(e) && e.name || null;

      function Bd(e, ...t) {
        return Yc.fun(e) ? e(...t) : e
      }
      var zd = (e, t) => !0 === e || !!(t && e && (Yc.fun(e) ? e(t) : tu(e).includes(t))),
        Vd = (e, t) => Yc.obj(e) ? t && e[t] : e,
        Fd = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Ud = e => e,
        qd = (e, t = Ud) => {
          let r = Gd;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Yc.und(r) || (n[o] = r)
          }
          return n
        },
        Gd = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Kd = {
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

      function Wd(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (eu(e, ((e, n) => {
              Kd[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return eu(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function Xd(e) {
        return e = Zu(e), Yc.arr(e) ? e.map(Xd) : yd(e) ? Zc.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Zd(e) {
        return Yc.fun(e) || Yc.arr(e) && Yc.obj(e[0])
      }
      var $d = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: Gu.linear,
          clamp: !1
        },
        Yd = class {
          constructor() {
            this.velocity = 0, Object.assign(this, $d)
          }
        };

      function Qd(e, t) {
        if (Yc.und(t.decay)) {
          const r = !Yc.und(t.tension) || !Yc.und(t.friction);
          !r && Yc.und(t.frequency) && Yc.und(t.damping) && Yc.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Jd = [],
        ef = class {
          constructor() {
            this.changed = !1, this.values = Jd, this.toValues = null, this.fromValues = Jd, this.config = new Yd, this.immediate = !1
          }
        };

      function tf(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, c, u = zd(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            Yc.und(r.pause) || (o.paused = zd(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || zd(e, t)), l = Bd(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - Nc.now()
          }

          function f() {
            l > 0 && !Zc.skipAnimation ? (o.delayed = !0, c = Nc.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
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
      var rf = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? af(e.get()) : t.every((e => e.noop)) ? nf(e.get()) : of(e.get(), t.every((e => e.finished))),
        nf = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        of = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        af = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function sf(e, t, r, n) {
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
          const c = qd(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const f = new Promise(((e, t) => (u = e, d = t))),
            h = e => {
              const t = o <= (r.cancelId || 0) && af(n) || o !== r.asyncId && of(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new cf,
                a = new uf;
              return (async () => {
                if (Zc.skipAnimation) throw lf(r), a.result = of(n, !1), d(a), a;
                h(i);
                const s = Yc.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, eu(c, ((e, t) => {
                  Yc.und(s[t]) && (s[t] = e)
                }));
                const l = await n.start(s);
                return h(i), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (Zc.skipAnimation) return lf(r), of(n, !1);
          try {
            let t;
            t = Yc.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = of(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof cf) m = e.result;
            else {
              if (!(e instanceof uf)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? s : void 0, r.promise = i ? l : void 0)
          }
          return Yc.fun(a) && Nc.batchedUpdates((() => {
            a(m, n, n.item)
          })), m
        })() : l
      }

      function lf(e, t) {
        ru(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var cf = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        uf = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        df = e => e instanceof hf,
        ff = 1,
        hf = class extends Qu {
          constructor() {
            super(...arguments), this.id = ff++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Sd(this);
            return e && e.getValue()
          }
          to(...e) {
            return Zc.to(this, e)
          }
          interpolate(...e) {
            return md(`${hd}The "interpolate" function is deprecated in v9 (use "to" instead)`), Zc.to(this, e)
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
            Yu(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || mu.sort(this), Yu(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        pf = Symbol.for("SpringPhase"),
        mf = e => (1 & e[pf]) > 0,
        vf = e => (2 & e[pf]) > 0,
        yf = e => (4 & e[pf]) > 0,
        gf = (e, t) => t ? e[pf] |= 3 : e[pf] &= -3,
        bf = (e, t) => t ? e[pf] |= 4 : e[pf] &= -5,
        wf = class extends hf {
          constructor(e, t) {
            if (super(), this.animation = new ef, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Yc.und(e) || !Yc.und(t)) {
              const r = Yc.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Yc.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(vf(this) || this._state.asyncTo) || yf(this)
          }
          get goal() {
            return Zu(this.animation.to)
          }
          get velocity() {
            const e = Sd(this);
            return e instanceof Od ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return mf(this)
          }
          get isAnimating() {
            return vf(this)
          }
          get isPaused() {
            return yf(this)
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
            } = n, a = Cd(n.to);
            !a && Xu(n.to) && (o = tu(Zu(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              const c = s.constructor == Rd ? 1 : a ? a[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Yc.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (Yc.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(s.lastPosition - d) <= f, a = o * n
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !Yc.und(n),
                      h = r == c ? s.v0 > 0 : r < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(a) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (a = -a * n, d = c)), a += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * a) / i.mass * v, d += a * v
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), d = r + i.easing(n) * (c - r), a = (d - s.lastPosition) / e, u = 1 == n
                }
                s.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              a && !a[l].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(d, i.round) && (r = !0)
            }));
            const s = Sd(this),
              l = s.getValue();
            if (t) {
              const e = Zu(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Nc.batchedUpdates((() => {
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
            if (vf(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Nc.batchedUpdates((() => {
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
            return Yc.und(e) ? (r = this.queue || [], this.queue = []) : r = [Yc.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => rf(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), lf(this._state, e && this._lastCallId), Nc.batchedUpdates((() => this._stop(t, e))), this
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
            r = Yc.obj(r) ? r[t] : r, (null == r || Zd(r)) && (r = void 0), n = Yc.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return mf(this) || (e.reverse && ([r, n] = [n, r]), n = Zu(n), Yc.und(n) ? Sd(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, qd(e, ((e, t) => /^on/.test(t) ? Vd(e, r) : e))), Tf(this, e, "onProps"), Of(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return tf(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  yf(this) || (bf(this, !0), iu(i.pauseQueue), Of(this, "onPause", of(this, _f(this, this.animation.to)), this))
                },
                resume: () => {
                  yf(this) && (bf(this, !1), vf(this) && this._resume(), iu(i.resumeQueue), Of(this, "onResume", of(this, _f(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Ef(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(af(this));
            const n = !Yc.und(e.to),
              o = !Yc.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(af(this));
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
            !o || n || t.default && !Yc.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !Qc(d, c);
            f && (s.from = d), d = Zu(d);
            const h = !Qc(u, l);
            h && this._focus(u);
            const p = Zd(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (Qd(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Qd(e, t), Object.assign(e, t);
              for (const t in $d) null == e[t] && (e[t] = $d[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Yc.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, Bd(t.config, i), t.config !== a.config ? Bd(a.config, i) : void 0);
            let g = Sd(this);
            if (!g || Yc.und(u)) return r(of(this, !0));
            const b = Yc.und(t.reset) ? o && !t.default : !Yc.und(d) && zd(t.reset, i),
              w = b ? d : this.get(),
              _ = Xd(u),
              E = Yc.num(_) || Yc.arr(_) || yd(_),
              P = !p && (!E || zd(a.immediate || t.immediate, i));
            if (h) {
              const e = Ld(u);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const S = g.constructor;
            let x = Xu(u),
              C = !1;
            if (!x) {
              const e = b || !mf(this) && f;
              (h || e) && (C = Qc(Xd(w), _), x = !C), (Qc(s.immediate, P) || P) && Qc(m.decay, v) && Qc(m.velocity, y) || (x = !0)
            }
            if (C && vf(this) && (s.changed && !b ? x = !0 : x || this._stop(l)), !p && ((x || Xu(l)) && (s.values = g.getPayload(), s.toValues = Xu(u) ? null : S == Rd ? [1] : tu(_)), s.immediate != P && (s.immediate = P, P || b || this._set(l)), x)) {
              const {
                onRest: e
              } = s;
              Jc(Cf, (e => Tf(this, t, e)));
              const n = of(this, _f(this, l));
              iu(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && Nc.batchedUpdates((() => {
                s.changed = !b, e?.(n, this), b ? Bd(a.onRest, n) : s.onStart?.(n, this)
              }))
            }
            b && this._set(w), p ? r(sf(t.to, t, this._state, this)) : x ? this._start() : vf(this) && !h ? this._pendingCalls.add(r) : r(nf(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && ($u(this) && this._detach(), t.to = e, $u(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Xu(t) && (ed(t, this), df(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Xu(e) && td(e, this)
          }
          _set(e, t = !0) {
            const r = Zu(e);
            if (!Yc.und(r)) {
              const e = Sd(this);
              if (!e || !Qc(r, e.getValue())) {
                const n = Ld(r);
                e && e.constructor == n ? e.setValue(r) : xd(this, n.create(r)), e && Nc.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return Sd(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Of(this, "onStart", of(this, _f(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Bd(this.animation.onChange, e, this)), Bd(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Sd(this).reset(Zu(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), vf(this) || (gf(this, !0), yf(this) || this._resume())
          }
          _resume() {
            Zc.skipAnimation ? this.finish() : mu.start(this)
          }
          _stop(e, t) {
            if (vf(this)) {
              gf(this, !1);
              const r = this.animation;
              Jc(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Yu(this, {
                type: "idle",
                parent: this
              });
              const n = t ? af(this.get()) : of(this.get(), _f(this, e ?? r.to));
              iu(this._pendingCalls, n), r.changed && (r.changed = !1, Of(this, "onRest", n, this))
            }
          }
        };

      function _f(e, t) {
        const r = Xd(t);
        return Qc(Xd(e.get()), r)
      }

      function Ef(e, t = e.loop, r = e.to) {
        const n = Bd(t);
        if (n) {
          const o = !0 !== n && Wd(n),
            i = (o || e).reverse,
            a = !o || o.reset;
          return Pf({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Zd(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function Pf(e) {
        const {
          to: t,
          from: r
        } = e = Wd(e), n = new Set;
        return Yc.obj(t) && xf(t, n), Yc.obj(r) && xf(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Sf(e) {
        const t = Pf(e);
        return Yc.und(t.default) && (t.default = qd(t)), t
      }

      function xf(e, t) {
        eu(e, ((e, r) => null != e && t.add(r)))
      }
      var Cf = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Tf(e, t, r) {
        e.animation[r] = t[r] !== Fd(t, r) ? Vd(t[r], e.key) : void 0
      }

      function Of(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Rf = ["onStart", "onChange", "onRest"],
        If = 1,
        Nf = class {
          constructor(e, t) {
            this.id = If++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              Yc.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(Pf(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = tu(e).map(Pf) : this.queue = [], this._flush ? this._flush(this, t) : (Hf(this, t), jf(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              Jc(tu(t), (t => r[t].stop(!!e)))
            } else lf(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (Yc.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Jc(tu(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (Yc.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Jc(tu(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            eu(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, ru(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !n && this._started,
              a = o || i && r.size ? this.get() : null;
            o && t.size && ru(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, ru(r, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Nc.onFrame(this._onFrame)
          }
        };

      function jf(e, t) {
        return Promise.all(t.map((t => kf(e, t)))).then((t => rf(e, t)))
      }
      async function kf(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = Yc.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = Yc.arr(o) || Yc.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Jc(Rf, (r => {
          const n = t[r];
          if (Yc.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, iu(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          h = !0 === t.cancel || !0 === Fd(t, "cancel");
        (u || h && d.asyncId) && f.push(tf(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: $c,
            resume: $c,
            start(t, r) {
              h ? (lf(d, e._lastAsyncId), r(af(e))) : (t.onRest = s, r(sf(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = rf(e, await Promise.all(f));
        if (a && p.finished && (!r || !p.noop)) {
          const r = Ef(t, a, o);
          if (r) return Hf(e, [r]), kf(e, r, !0)
        }
        return l && Nc.batchedUpdates((() => l(p, e, e.item))), p
      }

      function Lf(e, t) {
        const r = {
          ...e.springs
        };
        return t && Jc(tu(t), (e => {
          Yc.und(e.keys) && (e = Pf(e)), Yc.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Df(r, e, (e => Mf(e)))
        })), Af(e, r), r
      }

      function Af(e, t) {
        eu(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, ed(t, e))
        }))
      }

      function Mf(e, t) {
        const r = new wf;
        return r.key = e, t && ed(r, t), r
      }

      function Df(e, t, r) {
        t.keys && Jc(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function Hf(e, t) {
        Jc(t, (t => {
          Df(e.springs, t, (t => Mf(t, e)))
        }))
      }
      var Bf, zf, Vf = ({
          children: e,
          ...t
        }) => {
          const r = (0, D.useContext)(Ff),
            n = t.pause || !!r.pause,
            o = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, D.useState)((() => ({
              inputs: t,
              result: e()
            }))), n = (0, D.useRef)(), o = n.current;
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
            return (0, D.useEffect)((() => {
              n.current = i, o == r && (r.inputs = r.result = void 0)
            }), [i]), i.result
          }((() => ({
            pause: n,
            immediate: o
          })), [n, o]);
          const {
            Provider: i
          } = Ff;
          return D.createElement(i, {
            value: t
          }, e)
        },
        Ff = (Bf = Vf, zf = {}, Object.assign(Bf, D.createContext(zf)), Bf.Provider._context = Bf, Bf.Consumer._context = Bf, Bf);
      Vf.Provider = Ff.Provider, Vf.Consumer = Ff.Consumer;
      var Uf = () => {
        const e = [],
          t = function(t) {
            vd(`${hd}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return Jc(e, ((e, o) => {
              if (Yc.und(t)) n.push(e.start());
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
          return Jc(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Jc(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Jc(e, ((e, r) => {
            const n = Yc.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          const r = [];
          return Jc(e, ((e, n) => {
            if (Yc.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          })), r
        }, t.stop = function() {
          return Jc(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Jc(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        const r = function(e, t, r) {
          return Yc.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function qf(e, t) {
        const r = Yc.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = Yc.fun(t) && t;
            n && !r && (r = []);
            const o = (0, D.useMemo)((() => n || 3 == arguments.length ? Uf() : void 0), []),
              i = (0, D.useRef)(0),
              a = bd(),
              s = (0, D.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = Lf(e, t);
                  return i.current > 0 && !s.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? jf(e, t) : new Promise((n => {
                    Af(e, r), s.queue.push((() => {
                      n(jf(e, t))
                    })), a()
                  }))
                }
              })), []),
              l = (0, D.useRef)([...s.ctrls]),
              c = [],
              u = Ed(e) || 0;

            function d(e, r) {
              for (let o = e; o < r; o++) {
                const e = l.current[o] || (l.current[o] = new Nf(null, s.flush)),
                  r = n ? n(o, e) : t[o];
                r && (c[o] = Sf(r))
              }
            }(0, D.useMemo)((() => {
              Jc(l.current.slice(e, u), (e => {
                (function(e, t) {
                  e.ref?.delete(e), t?.delete(e)
                })(e, o), e.stop(!0)
              })), l.current.length = e, d(u, e)
            }), [e]), (0, D.useMemo)((() => {
              d(0, Math.min(u, e))
            }), r);
            const f = l.current.map(((e, t) => Lf(e, c[t]))),
              h = (0, D.useContext)(Vf),
              p = Ed(h),
              m = h !== p && function(e) {
                for (const t in e) return !0;
                return !1
              }(h);
            gd((() => {
              i.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], Jc(e, (e => e()))), Jc(l.current, ((e, t) => {
                o?.add(e), m && e.start({
                  default: h
                });
                const r = c[t];
                r && (function(e, t) {
                  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
                }(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              }))
            })), wd((() => () => {
              Jc(s.ctrls, (e => e.stop(!0)))
            }));
            const v = f.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var Gf = class extends hf {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Hu(...t);
          const r = this._get(),
            n = Ld(r);
          xd(this, n.create(r))
        }
        advance(e) {
          const t = this._get();
          Qc(t, this.get()) || (Sd(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Wf(this._active) && Xf(this)
        }
        _get() {
          const e = Yc.arr(this.source) ? this.source.map(Zu) : tu(Zu(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !Wf(this._active) && (this.idle = !1, Jc(Cd(this), (e => {
            e.done = !1
          })), Zc.skipAnimation ? (Nc.batchedUpdates((() => this.advance())), Xf(this)) : mu.start(this))
        }
        _attach() {
          let e = 1;
          Jc(tu(this.source), (t => {
            Xu(t) && ed(t, this), df(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          })), this.priority = e, this._start()
        }
        _detach() {
          Jc(tu(this.source), (e => {
            Xu(e) && td(e, this)
          })), this._active.clear(), Xf(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = tu(this.source).reduce(((e, t) => Math.max(e, (df(t) ? t.priority : 0) + 1)), 0))
        }
      };

      function Kf(e) {
        return !1 !== e.idle
      }

      function Wf(e) {
        return !e.size || Array.from(e).every(Kf)
      }

      function Xf(e) {
        e.idle || (e.idle = !0, Jc(Cd(e), (e => {
          e.done = !0
        })), Yu(e, {
          type: "idle",
          parent: e
        }))
      }
      Zc.assign({
        createStringInterpolator: fd,
        to: (e, t) => new Gf(e, t)
      }), mu.advance;
      var Zf = /^--/;

      function $f(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Zf.test(e) || Qf.hasOwnProperty(e) && Qf[e] ? ("" + t).trim() : t + "px"
      }
      var Yf = {},
        Qf = {
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
        Jf = ["Webkit", "Ms", "Moz", "O"];
      Qf = Object.keys(Qf).reduce(((e, t) => (Jf.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), Qf);
      var eh = /^(matrix|translate|scale|rotate|skew)/,
        th = /^(translate)/,
        rh = /^(rotate|skew)/,
        nh = (e, t) => Yc.num(e) && 0 !== e ? e + t : e,
        oh = (e, t) => Yc.arr(e) ? e.every((e => oh(e, t))) : Yc.num(e) ? e === t : parseFloat(e) === t,
        ih = class extends Nd {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push((e => [`translate3d(${e.map((e=>nh(e,"px"))).join(",")})`, oh(e, 0)]))), eu(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (eh.test(t)) {
                if (delete n[t], Yc.und(e)) return;
                const r = th.test(t) ? "px" : rh.test(t) ? "deg" : "";
                o.push(tu(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${nh(o,r)})`, oh(o, 0)] : e => [`${t}(${e.map((e=>nh(e,r))).join(",")})`, oh(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new ah(o, i)), super(n)
          }
        },
        ah = class extends Qu {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Jc(this.inputs, ((r, n) => {
              const o = Zu(r[0]),
                [i, a] = this.transforms[n](Yc.arr(o) ? o : r.map(Zu));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Jc(this.inputs, (e => Jc(e, (e => Xu(e) && ed(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Jc(this.inputs, (e => Jc(e, (e => Xu(e) && td(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Yu(this, e)
          }
        };
      Zc.assign({
        batchedUpdates: zt.unstable_batchedUpdates,
        createStringInterpolator: fd,
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
      var sh = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Nd(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = Hd(e) || "Anonymous";
              return (e = Yc.str(e) ? i[e] || (i[e] = Ad(e, o)) : e[Dd] || (e[Dd] = Ad(e, o))).displayName = `Animated(${t})`, e
            };
          return eu(e, ((t, r) => {
            Yc.arr(e) && (r = Hd(t)), i[r] = i(t)
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
              d = Object.keys(c).map((t => r || e.hasAttribute(t) ? t : Yf[t] || (Yf[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = $f(t, o[t]);
                Zf.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, u[r])
            })), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new ih(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        lh = sh.animated;

      function ch(e) {
        const t = (0, D.useRef)(e);
        return (0, D.useEffect)((() => {
          t.current = e
        })), (0, D.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      r(6330), r(22108);
      var uh = r(94118),
        dh = r(95362),
        fh = r(85426),
        hh = r(89749),
        ph = r(74406),
        mh = r(96077),
        vh = r(34902),
        yh = r(53146),
        gh = r(78004),
        bh = r(79158),
        [wh, _h] = (0, fh.A)("Tooltip", [mh.Bk]),
        Eh = (0, mh.Bk)(),
        Ph = "TooltipProvider",
        Sh = 700,
        xh = "tooltip.open",
        [Ch, Th] = wh(Ph),
        Oh = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Sh,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = D.useRef(!0), s = D.useRef(!1), l = D.useRef(0);
          return D.useEffect((() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }), []), (0, w.jsx)(Ch, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: D.useCallback((() => {
              window.clearTimeout(l.current), a.current = !1
            }), []),
            onClose: D.useCallback((() => {
              window.clearTimeout(l.current), l.current = window.setTimeout((() => a.current = !0), n)
            }), [n]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: D.useCallback((e => {
              s.current = e
            }), []),
            disableHoverableContent: o,
            children: i
          })
        };
      Oh.displayName = Ph;
      var Rh = "Tooltip",
        [Ih, Nh] = wh(Rh),
        jh = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = Th(Rh, e.__scopeTooltip), c = Eh(t), [u, d] = D.useState(null), f = (0, ph.useId)(), h = D.useRef(0), p = a ?? l.disableHoverableContent, m = s ?? l.delayDuration, v = D.useRef(!1), [y, g] = (0, bh.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(xh))) : l.onClose(), i?.(e)
            },
            caller: Rh
          }), b = D.useMemo((() => y ? v.current ? "delayed-open" : "instant-open" : "closed"), [y]), _ = D.useCallback((() => {
            window.clearTimeout(h.current), h.current = 0, v.current = !1, g(!0)
          }), [g]), E = D.useCallback((() => {
            window.clearTimeout(h.current), h.current = 0, g(!1)
          }), [g]), P = D.useCallback((() => {
            window.clearTimeout(h.current), h.current = window.setTimeout((() => {
              v.current = !0, g(!0), h.current = 0
            }), m)
          }), [m, g]);
          return D.useEffect((() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }), []), (0, w.jsx)(mh.bL, {
            ...c,
            children: (0, w.jsx)(Ih, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: d,
              onTriggerEnter: D.useCallback((() => {
                l.isOpenDelayedRef.current ? P() : _()
              }), [l.isOpenDelayedRef, P, _]),
              onTriggerLeave: D.useCallback((() => {
                p ? E() : (window.clearTimeout(h.current), h.current = 0)
              }), [E, p]),
              onOpen: _,
              onClose: E,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      jh.displayName = Rh;
      var kh = "TooltipTrigger",
        Lh = D.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Nh(kh, r), i = Th(kh, r), a = Eh(r), s = D.useRef(null), l = (0, dh.s)(t, s, o.onTriggerChange), c = D.useRef(!1), u = D.useRef(!1), d = D.useCallback((() => c.current = !1), []);
          return D.useEffect((() => () => document.removeEventListener("pointerup", d)), [d]), (0, w.jsx)(mh.Mz, {
            asChild: !0,
            ...a,
            children: (0, w.jsx)(gh.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, uh.m)(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (u.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              })),
              onPointerLeave: (0, uh.m)(e.onPointerLeave, (() => {
                o.onTriggerLeave(), u.current = !1
              })),
              onPointerDown: (0, uh.m)(e.onPointerDown, (() => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              })),
              onFocus: (0, uh.m)(e.onFocus, (() => {
                c.current || o.onOpen()
              })),
              onBlur: (0, uh.m)(e.onBlur, o.onClose),
              onClick: (0, uh.m)(e.onClick, o.onClose)
            })
          })
        }));
      Lh.displayName = kh;
      var Ah = "TooltipPortal",
        [Mh, Dh] = wh(Ah, {
          forceMount: void 0
        }),
        Hh = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = Nh(Ah, t);
          return (0, w.jsx)(Mh, {
            scope: t,
            forceMount: r,
            children: (0, w.jsx)(yh.C, {
              present: r || i.open,
              children: (0, w.jsx)(vh.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Hh.displayName = Ah;
      var Bh = "TooltipContent",
        zh = D.forwardRef(((e, t) => {
          const r = Dh(Bh, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = Nh(Bh, e.__scopeTooltip);
          return (0, w.jsx)(yh.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, w.jsx)(Gh, {
              side: o,
              ...i,
              ref: t
            }) : (0, w.jsx)(Vh, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        Vh = D.forwardRef(((e, t) => {
          const r = Nh(Bh, e.__scopeTooltip),
            n = Th(Bh, e.__scopeTooltip),
            o = D.useRef(null),
            i = (0, dh.s)(t, o),
            [a, s] = D.useState(null),
            {
              trigger: l,
              onClose: c
            } = r,
            u = o.current,
            {
              onPointerInTransitChange: d
            } = n,
            f = D.useCallback((() => {
              s(null), d(!1)
            }), [d]),
            h = D.useCallback(((e, t) => {
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
          return D.useEffect((() => () => f()), [f]), D.useEffect((() => {
            if (l && u) {
              const e = e => h(e, u),
                t = e => h(e, l);
              return l.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t)
              }
            }
          }), [l, u, h, f]), D.useEffect((() => {
            if (a) {
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
                n ? f() : o && (f(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [l, u, a, c, f]), (0, w.jsx)(Gh, {
            ...e,
            ref: i
          })
        })),
        [Fh, Uh] = wh(Rh, {
          isInside: !1
        }),
        qh = (0, vr.createSlottable)("TooltipContent"),
        Gh = D.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = Nh(Bh, r), c = Eh(r), {
            onClose: u
          } = l;
          return D.useEffect((() => (document.addEventListener(xh, u), () => document.removeEventListener(xh, u))), [u]), D.useEffect((() => {
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
          }), [l.trigger, u]), (0, w.jsx)(hh.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, w.jsxs)(mh.UC, {
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
              children: [(0, w.jsx)(qh, {
                children: n
              }), (0, w.jsx)(Fh, {
                scope: r,
                isInside: !0,
                children: (0, w.jsx)(yr.Root, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        }));
      zh.displayName = Bh;
      var Kh = "TooltipArrow",
        Wh = D.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Eh(r);
          return Uh(Kh, r).isInside ? null : (0, w.jsx)(mh.i3, {
            ...o,
            ...n,
            ref: t
          })
        }));
      Wh.displayName = Kh;
      var Xh = Oh,
        Zh = jh,
        $h = Lh,
        Yh = Hh,
        Qh = zh,
        Jh = Wh;
      const ep = (0, D.createContext)(null);

      function tp() {
        const e = (0, D.useContext)(ep);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const rp = ({
          children: e,
          delayDuration: t,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [i = !1, a] = function({
            prop: e,
            defaultProp: t,
            onChange: r = () => {}
          }) {
            const [n, o] = function({
              defaultProp: e,
              onChange: t
            }) {
              const r = (0, D.useState)(e),
                [n] = r,
                o = (0, D.useRef)(n),
                i = ch(t);
              return (0, D.useEffect)((() => {
                o.current !== n && (i(n), o.current = n)
              }), [n, o, i]), r
            }({
              defaultProp: t,
              onChange: r
            }), i = void 0 !== e, a = i ? e : n, s = ch(r), l = (0, D.useCallback)((t => {
              if (i) {
                const r = "function" == typeof t ? t(e) : t;
                r !== e && s(r)
              } else o(t)
            }), [i, e, o, s]);
            return [a, l]
          }({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, w.jsx)(Xh, {
            delayDuration: t,
            children: (0, w.jsx)(ep.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, w.jsx)(Zh, {
                open: i,
                onOpenChange: a,
                children: e
              })
            })
          })
        },
        np = (0, D.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => (0, w.jsx)($h, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        }))),
        op = (0, D.forwardRef)((({
          testId: e,
          children: t,
          collisionBoundary: r,
          collisionPadding: n,
          onEscapeKeyDown: o,
          onPointerDownOutside: i,
          side: a = "top",
          sideOffset: s = 8,
          align: l = "center",
          alignOffset: c = 0,
          avoidCollisions: u = !0,
          sticky: d = "partial",
          ...f
        }, h) => {
          const {
            isOpen: p
          } = tp(), m = function(e) {
            const t = (0, D.useRef)({
                value: e,
                prev: void 0
              }),
              r = t.current.value;
            return e !== r && (t.current = {
              value: e,
              prev: r
            }), t.current.prev
          }(p), v = qf({
            opacity: p ? 1 : 0,
            immediate: p && !m
          }), y = (0, Rc.mergeProps)({
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, f);
          return (0, w.jsx)(Qh, {
            forceMount: !0,
            "data-testid": e,
            side: a,
            align: l,
            sticky: d,
            sideOffset: s,
            alignOffset: c,
            avoidCollisions: u,
            collisionPadding: n,
            collisionBoundary: r,
            onEscapeKeyDown: o,
            onPointerDownOutside: i,
            asChild: !0,
            children: (0, w.jsx)(lh.div, {
              style: v,
              ...y,
              ref: h,
              children: t
            })
          })
        })),
        ip = (0, D.forwardRef)((({
          testId: e
        }, t) => {
          const r = (0, Rc.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, w.jsx)(Jh, {
            ...r,
            ref: t
          })
        })),
        ap = Yh;

      function sp(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var lp = r(77768),
        cp = r(29044),
        up = r(60528),
        dp = r(20027),
        fp = ["PageUp", "PageDown"],
        hp = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        pp = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        mp = "Slider",
        [vp, yp, gp] = (0, dp.N)(mp),
        [bp, wp] = (0, fh.A)(mp, [gp]),
        [_p, Ep] = bp(mp),
        Pp = D.forwardRef(((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: i = 1,
            orientation: a = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: c = [n],
            value: u,
            onValueChange: d = () => {},
            onValueCommit: f = () => {},
            inverted: h = !1,
            form: p,
            ...m
          } = e, v = D.useRef(new Set), y = D.useRef(0), g = "horizontal" === a ? Cp : Tp, [b = [], _] = (0, bh.useControllableState)({
            prop: u,
            defaultProp: c,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), E = D.useRef(b);

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
              c = sp(s, [n, o]);
            _(((e = []) => {
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
                y.current = n.indexOf(c);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            }))
          }
          return (0, w.jsx)(_p, {
            scope: e.__scopeSlider,
            name: r,
            disabled: s,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: b,
            orientation: a,
            form: p,
            children: (0, w.jsx)(vp.Provider, {
              scope: e.__scopeSlider,
              children: (0, w.jsx)(vp.Slot, {
                scope: e.__scopeSlider,
                children: (0, w.jsx)(g, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, uh.m)(m.onPointerDown, (() => {
                    s || (E.current = b)
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
                    }(b, e);
                    P(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    P(e, y.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = E.current[y.current];
                    b[y.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !s && P(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && P(o, b.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const r = fp.includes(e.key) || e.shiftKey && hp.includes(e.key) ? 10 : 1,
                        n = y.current;
                      P(b[n] + i * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      Pp.displayName = mp;
      var [Sp, xp] = bp(mp, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Cp = D.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: i,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: l,
          onStepKeyDown: c,
          ...u
        } = e, [d, f] = D.useState(null), h = (0, dh.s)(t, (e => f(e))), p = D.useRef(void 0), m = (0, lp.jH)(o), v = "ltr" === m, y = v && !i || !v && i;

        function g(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = Hp([0, t.width], y ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, w.jsx)(Sp, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, w.jsx)(Op, {
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
              a?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientX);
              s?.(t)
            },
            onSlideEnd: () => {
              p.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = pp[y ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Tp = D.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...c
        } = e, u = D.useRef(null), d = (0, dh.s)(t, u), f = D.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = Hp([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, w.jsx)(Sp, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, w.jsx)(Op, {
            "data-orientation": "vertical",
            ...c,
            ref: d,
            style: {
              ...c.style,
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
              const t = pp[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Op = D.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...c
        } = e, u = Ep(mp, r);
        return (0, w.jsx)(gh.sG.span, {
          ...c,
          ref: t,
          onKeyDown: (0, uh.m)(e.onKeyDown, (e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : fp.concat(hp).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: (0, uh.m)(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          })),
          onPointerMove: (0, uh.m)(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: (0, uh.m)(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), Rp = "SliderTrack", Ip = D.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Ep(Rp, r);
        return (0, w.jsx)(gh.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      }));
      Ip.displayName = Rp;
      var Np = "SliderRange",
        jp = D.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Ep(Np, r), i = xp(Np, r), a = D.useRef(null), s = (0, dh.s)(t, a), l = o.values.length, c = o.values.map((e => Dp(e, o.min, o.max))), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
          return (0, w.jsx)(gh.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: s,
            style: {
              ...e.style,
              [i.startEdge]: u + "%",
              [i.endEdge]: d + "%"
            }
          })
        }));
      jp.displayName = Np;
      var kp = "SliderThumb",
        Lp = D.forwardRef(((e, t) => {
          const r = yp(e.__scopeSlider),
            [n, o] = D.useState(null),
            i = (0, dh.s)(t, (e => o(e))),
            a = D.useMemo((() => n ? r().findIndex((e => e.ref.current === n)) : -1), [r, n]);
          return (0, w.jsx)(Ap, {
            ...e,
            ref: i,
            index: a
          })
        })),
        Ap = D.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, a = Ep(kp, r), s = xp(kp, r), [l, c] = D.useState(null), u = (0, dh.s)(t, (e => c(e))), d = !l || a.form || !!l.closest("form"), f = (0, up.X)(l), h = a.values[n], p = void 0 === h ? 0 : Dp(h, a.min, a.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, a.values.length), v = f?.[s.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - Hp([0, 50], [0, n])(t) * r) * r
          }(v, p, s.direction) : 0;
          return D.useEffect((() => {
            if (l) return a.thumbs.add(l), () => {
              a.thumbs.delete(l)
            }
          }), [l, a.thumbs]), (0, w.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${p}% + ${y}px)`
            },
            children: [(0, w.jsx)(vp.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, w.jsx)(gh.sG.span, {
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
                ref: u,
                style: void 0 === h ? {
                  display: "none"
                } : e.style,
                onFocus: (0, uh.m)(e.onFocus, (() => {
                  a.valueIndexToChangeRef.current = n
                }))
              })
            }), d && (0, w.jsx)(Mp, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: h
            }, n)]
          })
        }));
      Lp.displayName = kp;
      var Mp = D.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = D.useRef(null),
          i = (0, dh.s)(o, n),
          a = (0, cp.Z)(t);
        return D.useEffect((() => {
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
        }), [a, t]), (0, w.jsx)(gh.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      }));

      function Dp(e, t, r) {
        return sp(100 / (r - t) * (e - t), [0, 100])
      }

      function Hp(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      Mp.displayName = "RadioBubbleInput";
      var Bp = Pp,
        zp = Ip,
        Vp = jp,
        Fp = Lp,
        Up = r(24780);
      const qp = (0, D.createContext)({
          triggerRef: (0, D.createRef)(),
          triggerBorderRef: (0, D.createRef)(),
          thumbnailRef: (0, D.createRef)(),
          openIconRef: (0, D.createRef)(),
          overlayRef: (0, D.createRef)(),
          contentRef: (0, D.createRef)(),
          containerRef: (0, D.createRef)(),
          imageRef: (0, D.createRef)(),
          placeholderRef: (0, D.createRef)(),
          zoomPanRef: (0, D.createRef)(),
          captionRef: (0, D.createRef)(),
          controlsRef: (0, D.createRef)(),
          closeRef: (0, D.createRef)(),
          zoomRef: (0, D.createRef)(),
          zoomInRef: (0, D.createRef)(),
          zoomSliderRef: (0, D.createRef)(),
          zoomOutRef: (0, D.createRef)(),
          resetRef: (0, D.createRef)(),
          downloadRef: (0, D.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        Gp = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: i = 300,
          zoomLevelStep: a = 100,
          clickAction: s = "close",
          doubleTapAction: l = "zoom",
          tapAction: c = "toggle-controls",
          hideTrigger: u = !0,
          ...d
        }) => {
          const f = (0, gr.Ym)(),
            h = (0, D.useRef)(null),
            p = (0, D.useRef)(null),
            m = (0, D.useRef)(null),
            v = (0, D.useRef)(null),
            y = (0, D.useRef)(null),
            g = (0, D.useRef)(null),
            b = (0, D.useRef)(null),
            _ = (0, D.useRef)(null),
            E = (0, D.useRef)(null),
            P = (0, D.useRef)(null),
            S = (0, D.useRef)(null),
            x = (0, D.useRef)(null),
            C = (0, D.useRef)(null),
            T = (0, D.useRef)(null),
            O = (0, D.useRef)(null),
            R = (0, D.useRef)(null),
            I = (0, D.useRef)(null),
            N = (0, D.useRef)(null),
            j = (0, D.useRef)(null),
            [k = !1, L] = function({
              prop: e,
              defaultProp: t,
              onChange: r = () => {}
            }) {
              const [n, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const r = (0, D.useState)(e),
                  [n] = r,
                  o = (0, D.useRef)(n),
                  i = Gn(t);
                return (0, D.useEffect)((() => {
                  o.current !== n && (i(n), o.current = n)
                }), [n, o, i]), r
              }({
                defaultProp: t,
                onChange: r
              }), i = void 0 !== e, a = i ? e : n, s = Gn(r), l = (0, D.useCallback)((t => {
                if (i) {
                  const r = "function" == typeof t ? t(e) : t;
                  r !== e && s(r)
                } else o(t)
              }), [i, e, o, s]);
              return [a, l]
            }({
              prop: t || n,
              onChange: r
            }),
            A = (0, D.useRef)(null);
          return A.current || (A.current = new pc({
            width: 0,
            height: 0,
            zoomLevelOptions: {
              max: i,
              min: o,
              step: a
            },
            actionOptions: {
              click: s,
              tap: c,
              doubleTap: l
            }
          })), (0, w.jsx)(ec, {
            messages: tc,
            locale: f,
            children: (0, w.jsx)(qp.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: p,
                thumbnailRef: m,
                openIconRef: v,
                overlayRef: y,
                contentRef: g,
                containerRef: b,
                zoomPanRef: _,
                imageRef: E,
                placeholderRef: P,
                captionRef: S,
                controlsRef: x,
                closeRef: C,
                zoomRef: T,
                zoomInRef: O,
                zoomSliderRef: R,
                zoomOutRef: I,
                resetRef: N,
                downloadRef: j,
                open: k,
                setOpen: L,
                altText: e,
                hideTrigger: u,
                slide: A.current
              },
              children: (0, w.jsx)(Wp, {
                ...d
              })
            })
          })
        },
        Kp = (0, D.createContext)({
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
        Wp = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, D.useContext)(qp), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = eo(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: i,
              triggerRef: a,
              triggerBorderRef: s,
              thumbnailRef: l,
              containerRef: c,
              zoomPanRef: u,
              placeholderRef: d,
              imageRef: f
            } = (0, D.useContext)(qp), h = (0, D.useRef)(null);
            h.current || (h.current = Wn.gsap.timeline({
              defaults: Bi
            }));
            const p = (0, D.useCallback)((e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const t = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of t)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }), []),
              m = e((async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), l.current && s.current && (t.opening = !0, t.setup(s.current, l.current), t.zoomAndPanToInitial(), Wn.gsap.set([d.current, f.current], {
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
                }), Wn.gsap.set([f.current], {
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
                }), n && h.current.to([a.current, s.current], {
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
                }, 0), h.current.fromTo([i.current], {
                  opacity: 0,
                  [Vi]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Vi]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (h.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await ci(f.current), t.closing || (Wn.gsap.set([f.current], {
                  visibility: "visible",
                  ...zi
                }), Wn.gsap.set([d.current], {
                  visibility: "hidden",
                  ...zi
                }))))
              })),
              v = e((async () => {
                t.close(), h.current.getChildren().filter((e => e.data?.invalidate)).forEach((e => e.invalidate())), await h.current.reverse()
              })),
              y = (0, D.useCallback)((async e => {
                e || (window.addEventListener("click", p), await v(), window.removeEventListener("click", p)), r(e)
              }), [r]),
              g = (0, D.useCallback)((() => y(!1)), [y]);
            return {
              onOpenChange: y,
              openAnim: m,
              close: g
            }
          })(), {
            update: i,
            zoomIn: a,
            zoomOut: s,
            zoomTo: l,
            resetZoom: c,
            toggleControls: u
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = eo(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: a,
              placeholderRef: s
            } = (0, D.useContext)(qp), l = t((async e => {
              r.zoomTo(e), Wn.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...zi
              })
            })), c = t((async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), Wn.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...zi
              })
            })), u = t((async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), Wn.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...zi
              })
            })), d = t((async () => {
              r.zoomAndPanToInitial(), Wn.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...zi
              })
            })), f = t((async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              Wn.gsap.to([i.current], {
                opacity: e,
                [Vi]: t,
                ...zi
              })
            })), h = t((async () => {
              Wn.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...zi
              })
            })), p = (0, D.useCallback)((() => {
              n.current && o.current && (r.resize(), Wn.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...zi
              }), Wn.gsap.set([n.current, s.current], {
                ...r.getUpdatedContentSize(),
                ...zi
              }), Wn.gsap.set([a.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }), []);
            return (0, D.useEffect)((() => (r.addEventListener("close", e), r.addEventListener("animate", h), r.addEventListener("toggle-controls", f), window.addEventListener("resize", p), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", h), r.removeEventListener("toggle-controls", f), window.removeEventListener("resize", p)
            })), []), {
              zoomIn: c,
              zoomOut: u,
              zoomTo: l,
              resetZoom: d,
              toggleControls: f,
              update: h
            }
          })({
            close: o
          }), d = (0, oc.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, w.jsx)(Kp.Provider, {
            value: {
              update: i,
              openAnim: n,
              close: o,
              zoomIn: a,
              zoomOut: s,
              zoomTo: l,
              resetZoom: c,
              toggleControls: u,
              onOpenChange: r
            },
            children: (0, w.jsx)(Up.Root, {
              ...d
            })
          })
        },
        Xp = (0, D.forwardRef)((function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = Xl(),
            {
              triggerRef: i,
              triggerBorderRef: a,
              altText: s
            } = (0, D.useContext)(qp),
            l = qn(i, n),
            c = (0, oc.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(vc, {
                description: s
              }),
              className: "foundry_1a74xwb3 foundry_8kowh41"
            });
          return (0, w.jsx)(Up.Trigger, {
            ref: l,
            ...c,
            children: (0, w.jsx)("div", {
              className: "foundry_1a74xwb4",
              ref: a,
              children: (0, w.jsx)(vr.Slottable, {
                children: t
              })
            })
          })
        })),
        Zp = (0, D.forwardRef)((function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, D.useContext)(qp), i = qn(o, n), a = (0, oc.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb5"
          }), s = t ? vr.Slot : "img";
          return (0, w.jsx)(s, {
            ref: i,
            ...a
          })
        })),
        $p = (0, D.forwardRef)((function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, D.useContext)(qp), o = qn(n, r), i = (0, oc.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb6",
            size: "SM"
          }), a = e ? vr.Slot : mc.Plus;
          return (0, w.jsx)(a, {
            ref: o,
            ...i
          })
        })),
        Yp = ({
          ...e
        }) => (0, w.jsx)(Up.Portal, {
          ...e
        }),
        Qp = (0, D.forwardRef)((function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, D.useContext)(qp), o = qn(n, r), i = (0, oc.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb7"
          });
          return (0, w.jsx)(Up.Overlay, {
            ref: o,
            ...i
          })
        })),
        Jp = (0, D.forwardRef)((function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, D.useContext)(Kp), {
            contrastMode: i
          } = (0, gr.DP)(), {
            contentRef: a,
            altText: s,
            triggerRef: l
          } = (0, D.useContext)(qp), {
            cursor: c
          } = (() => {
            const {
              slide: e
            } = (0, D.useContext)(qp), [t, r] = (0, D.useState)(e.getCursor()), n = (0, D.useCallback)((() => {
              r(e.getCursor())
            }), []);
            return (0, D.useEffect)((() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            })), [n]), {
              cursor: t
            }
          })(), u = ((e, t) => [rc.xW.tokens, rc.xW.typography, nc("dark", t)].join(" "))(0, i), d = qn(a, n), f = (0, oc.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, l),
            className: (0, ze.clsx)("foundry_1a74xwb8", u),
            style: {
              cursor: c
            }
          });
          return (0, w.jsxs)(Up.Content, {
            ref: d,
            ...f,
            children: [(0, w.jsx)(Un, {
              children: (0, w.jsx)(Up.Title, {
                children: s
              })
            }), t]
          })
        })),
        em = (0, D.forwardRef)((function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, D.useContext)(qp);
          (() => {
            const {
              contextSafe: e
            } = eo(), {
              toggleControls: t
            } = (0, D.useContext)(Kp), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: i,
              slide: a
            } = (0, D.useContext)(qp), s = e((e => {
              e.pinching || a.zoomHandler.pinching || (a.dragHandler.handleDrag(e), a.dragHandler.animate && !a.closing && (Wn.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...zi
              }), Wn.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...zi
              }), Wn.gsap.to([i.current], {
                opacity: a.getControlsOpacity(),
                ...zi
              })))
            })), l = e((e => {
              e.pinching || a.zoomHandler.pinching || (a.scrollWheel.handleWheel(e), a.closing || Wn.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...zi
              }))
            })), c = e((e => {
              !e.pinching && !a.zoomHandler.pinching || a.dragHandler.dragging || (a.zoomHandler.handleZoom(e), a.zoomHandler.animate && !a.closing && (Wn.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...zi
              }), Wn.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...zi
              }), Wn.gsap.to([i.current], {
                opacity: a.getControlsOpacity(),
                ...zi
              })))
            })), u = (0, D.useCallback)((() => {
              a.controlsVisible || t()
            }), [, t]);
            (({
              ref: e,
              onChange: t,
              onFocusIn: r,
              onFocusOut: n,
              enabled: o = !0
            }) => {
              const [i, a] = (0, D.useState)(!1);
              Kn("focusin", (e => {
                a(!0), r?.(e), t?.(!0, e)
              }), e), Kn("focusout", (e => {
                a(!1), n?.(e), t?.(!1, e)
              }), e)
            })({
              ref: i,
              onFocusIn: u
            }), li({
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
          const i = qn(o, n),
            a = (0, oc.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwb9 foundry_1a74xwb1"
            });
          return (0, w.jsx)("div", {
            ref: i,
            ...a,
            children: (0, w.jsxs)(tm, {
              children: [(0, w.jsx)(rm, {}), t]
            })
          })
        })),
        tm = (0, D.forwardRef)((function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, D.useContext)(qp), i = qn(o, n), a = (0, oc.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwba foundry_1a74xwb1"
          }), s = t ? vr.Slot : "div";
          return (0, w.jsx)(s, {
            ref: i,
            ...a
          })
        })),
        rm = (0, D.forwardRef)((function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, D.useContext)(qp), i = qn(o, n), a = (0, oc.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb2 foundry_1a74xwb1"
          }), s = t ? vr.Slot : "img";
          return (0, w.jsx)(s, {
            ref: i,
            ...a
          })
        })),
        nm = (0, D.forwardRef)((function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, D.useContext)(qp), i = qn(o, n), a = (0, oc.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb2",
            draggable: !1
          }), s = t ? vr.Slot : "img";
          return (0, w.jsx)(s, {
            ref: i,
            ...a
          })
        })),
        om = (0, D.forwardRef)((function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, D.useContext)(qp), i = qn(o, n), a = (0, oc.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbg foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), s = t ? vr.Slot : "p";
          return (0, w.jsx)(Up.Description, {
            asChild: !0,
            children: (0, w.jsx)(s, {
              ref: i,
              ...a
            })
          })
        })),
        im = (0, D.forwardRef)((function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, D.useContext)(qp);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, D.useContext)(Kp);
            ji(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), ji(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), ji("r", n, {
              enabled: e,
              preventDefault: !0
            }), ji("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const i = qn(o, n),
            a = (0, oc.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbd foundry_1a74xwb1 foundry_1a74xwb2"
            }),
            s = t ? vr.Slot : "div";
          return (0, w.jsx)(Ri, {
            children: (0, w.jsx)(s, {
              ref: i,
              ...a
            })
          })
        })),
        am = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, w.jsx)(w.Fragment, {
            children: n
          });
          const i = (0, oc.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, w.jsxs)(rp, {
            delayDuration: 0,
            children: [(0, w.jsx)(np, {
              children: n
            }), (0, w.jsxs)(op, {
              ...i,
              children: [(0, w.jsxs)("div", {
                className: "foundry_1a74xwbe",
                children: [e, t && (0, w.jsx)("div", {
                  className: "foundry_1a74xwbf",
                  children: t
                })]
              }), (0, w.jsx)(ip, {})]
            })]
          })
        },
        sm = (0, D.forwardRef)((function({
          ...e
        }, t) {
          const r = (0, oc.mergeProps)(e, {
            isInline: !0
          });
          return (0, w.jsx)(Oc, {
            ref: t,
            ...r
          })
        })),
        lm = (0, D.forwardRef)((function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, i) {
          const a = Xl(),
            {
              zoomRef: s
            } = (0, D.useContext)(qp),
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
              } = (0, D.useContext)(qp), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, D.useContext)(Kp), [o, i] = (0, D.useState)(!1), [a, s] = (0, D.useState)(!1), [l, c] = (0, D.useState)(0), [u, d] = (0, D.useState)(0), [f, h] = (0, D.useState)(0), p = (0, D.useCallback)((() => {
                i(e.currZoomLevel < e.zoomLevels.max), s(e.currZoomLevel > e.zoomLevels.min), c(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), h(Math.ceil(100 * e.zoomLevels.max))
              }), []), m = (0, D.useCallback)((([e]) => {
                n(e / 100)
              }), [n]);
              return (0, D.useEffect)((() => (e.addEventListener("zoom", p), () => {
                e.removeEventListener("zoom", p)
              })), [p]), {
                zoomTo: m,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: a,
                zoomProgress: l,
                minZoomLevel: u,
                maxZoomLevel: f
              }
            })(),
            v = qn(s, i),
            y = (0, oc.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbl"
            }),
            g = t ? vr.Slot : "div";
          return (0, w.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, w.jsx)(am, {
              side: "left",
              enabled: r,
              content: a.formatMessage(bc),
              metadata: a.formatMessage(wc, {
                shortcut: (0, w.jsx)(sm, {
                  shortcut: "+"
                })
              }),
              children: (0, w.jsx)(nn, {
                label: a.formatMessage(bc),
                size: {
                  mobile: "MD",
                  default: "XL"
                },
                icon: "Plus",
                appearance: "tertiary",
                className: Hi({
                  position: "top"
                }),
                onPress: c,
                isDisabled: !l
              })
            }), (0, w.jsxs)(Bp, {
              className: "foundry_1a74xwbp",
              max: p,
              min: h,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, w.jsx)(zp, {
                className: "foundry_1a74xwbq",
                children: (0, w.jsx)(Vp, {
                  className: "foundry_1a74xwbr"
                })
              }), (0, w.jsx)(am, {
                side: "left",
                enabled: r,
                content: a.formatMessage(xc, {
                  zoom: f.toFixed(0)
                }),
                children: (0, w.jsx)(Fp, {
                  className: "foundry_1a74xwbs",
                  children: (0, w.jsx)("span", {
                    className: "foundry_1a74xwbt"
                  })
                })
              })]
            }), (0, w.jsx)(am, {
              side: "left",
              enabled: r,
              content: a.formatMessage(_c),
              metadata: a.formatMessage(Ec, {
                shortcut: (0, w.jsx)(sm, {
                  shortcut: "-"
                })
              }),
              children: (0, w.jsx)(nn, {
                label: a.formatMessage(_c),
                size: {
                  mobile: "MD",
                  default: "XL"
                },
                icon: "Minus",
                appearance: "tertiary",
                className: Hi({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !u
              })
            }), (0, w.jsx)(vr.Slottable, {
              children: n
            })]
          })
        })),
        cm = (0, D.forwardRef)((function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const i = Xl(),
            {
              closeRef: a
            } = (0, D.useContext)(qp),
            s = qn(a, o),
            l = (0, oc.mergeProps)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbi"
            }),
            c = t ? (0, w.jsx)(vr.Slot, {
              ref: s,
              ...l
            }) : (0, w.jsx)(nn, {
              ref: s,
              ...l,
              size: {
                mobile: "MD",
                default: "XL"
              },
              icon: "ArrowLeft",
              appearance: "tertiary",
              label: i.formatMessage(yc)
            });
          return (0, w.jsx)(am, {
            side: "right",
            enabled: r,
            content: i.formatMessage(yc),
            metadata: i.formatMessage(gc, {
              shortcut: (0, w.jsx)(sm, {
                shortcut: "Esc"
              })
            }),
            children: (0, w.jsx)(Up.Close, {
              asChild: !0,
              children: c
            })
          })
        })),
        um = (0, D.forwardRef)((function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = Xl(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, D.useContext)(qp), {
                contextSafe: r
              } = eo(), {
                resetZoom: n
              } = (0, D.useContext)(Kp), [o, i] = (0, D.useState)(e.currZoomLevel !== e.zoomLevels.initial), a = r((e => {
                Wn.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...zi
                })
              })), s = (0, D.useCallback)((() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                i(t), a(t)
              }), [i]);
              return (0, D.useEffect)((() => (e.addEventListener("zoom", s), () => {
                e.removeEventListener("zoom", s)
              })), [s]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: a
            } = (0, D.useContext)(qp),
            s = qn(a, n),
            l = (0, oc.mergeProps)(r, i, {
              "data-testid": e,
              className: "foundry_1a74xwbj"
            });
          return (0, w.jsx)(am, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Pc),
            metadata: o.formatMessage(Sc, {
              shortcut: (0, w.jsx)(sm, {
                shortcut: "R"
              })
            }),
            children: (0, w.jsx)(nn, {
              ref: s,
              ...l,
              size: {
                mobile: "MD",
                default: "XL"
              },
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Pc)
            })
          })
        })),
        dm = (0, D.forwardRef)((function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = Xl(),
            {
              downloadRef: i,
              imageRef: a
            } = (0, D.useContext)(qp),
            s = qn(i, n),
            l = (0, oc.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbk"
            });
          return (0, w.jsx)(am, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Cc),
            children: (0, w.jsx)(nn, {
              ref: s,
              ...l,
              size: {
                mobile: "MD",
                default: "XL"
              },
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Cc),
              onPress: () => (async e => {
                if (!e) return;
                const t = document.createElement("a");
                t.href = e.currentSrc, t.download = e.currentSrc.substring(e.currentSrc.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
              })(a.current)
            })
          })
        })),
        fm = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        },
        hm = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? yr.VisuallyHidden : D.Fragment;
          return (0, w.jsx)(r, {
            ...t
          })
        },
        pm = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        mm = pm.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      pm.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), pm.join(':not([hidden]):not([tabindex="-1"]),');
      const vm = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        ym = e => e && "window" in e && e.window === e ? e : vm(e).defaultView || window;

      function gm(e) {
        if (function() {
            if (null == bm) {
              bm = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return bm = !0, !0
                  }
                })
              } catch {}
            }
            return bm
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
      let bm = null;
      let wm = !1;

      function _m(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function Em(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Pm(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Sm = Pm((function() {
          return Em(/^Mac/i)
        })),
        xm = Pm((function() {
          return Em(/^iPhone/i)
        })),
        Cm = Pm((function() {
          return Em(/^iPad/i) || Sm() && navigator.maxTouchPoints > 1
        })),
        Tm = Pm((function() {
          return xm() || Cm()
        })),
        Om = (Pm((function() {
          return Sm() || Tm()
        })), Pm((function() {
          return _m(/AppleWebKit/i) && !Rm()
        }))),
        Rm = Pm((function() {
          return _m(/Chrome/i)
        })),
        Im = Pm((function() {
          return _m(/Android/i)
        })),
        Nm = Pm((function() {
          return _m(/Firefox/i)
        }));
      let jm = new Map,
        km = new Set;

      function Lm() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = jm.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), jm.delete(r.target)), 0 === jm.size)) {
            for (let e of km) e();
            km.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = jm.get(r.target);
          n || (n = new Set, jm.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Lm() : document.addEventListener("DOMContentLoaded", Lm));
      let Am = "default",
        Mm = "",
        Dm = new WeakMap;

      function Hm(e) {
        if (Tm()) {
          if ("disabled" !== Am) return;
          Am = "restoring", setTimeout((() => {
            var t;
            t = () => {
              if ("restoring" === Am) {
                const t = vm(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Mm || ""), Mm = "", Am = "default"
              }
            }, requestAnimationFrame((() => {
              ! function() {
                for (const [e] of jm) "isConnected" in e && !e.isConnected && jm.delete(e)
              }(), 0 === jm.size ? t() : km.add(t)
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Dm.has(e)) {
          let t = Dm.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Dm.delete(e)
        }
      }
      const Bm = D.createContext({
        register: () => {}
      });

      function zm(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      Bm.displayName = "PressResponderContext", Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Vm, Fm = new Map;

      function Um(e, t) {
        if (e === t) return e;
        let r = Fm.get(e);
        if (r) return r.forEach((e => e.current = t)), t;
        let n = Fm.get(t);
        return n ? (n.forEach((t => t.current = e)), e) : t
      }

      function qm(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = zm(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Um(r, o) : t[e] = void 0 !== o ? o : r : t[e] = ze(r, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (Vm = new FinalizationRegistry((e => {
        Fm.delete(e)
      })));
      const Gm = "undefined" != typeof document ? D.useLayoutEffect : () => {};

      function Km(e) {
        const t = (0, D.useRef)(null);
        return Gm((() => {
          t.current = e
        }), [e]), (0, D.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }

      function Wm(e, t) {
        return !(!t || !e) && e.contains(t)
      }

      function Xm(e) {
        return e.target
      }

      function Zm(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Nm() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Sm() ? i = !0 : a = !0);
        let c = Om() && Sm() && !Cm() ? new KeyboardEvent("keydown", {
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
        Zm.isOpening = r, gm(e), e.dispatchEvent(c), Zm.isOpening = !1
      }

      function $m(e) {
        let t = (0, D.useContext)(Bm);
        if (t) {
          let {
            register: r,
            ...n
          } = t;
          e = qm(n, e), r()
        }
        return function(e, t) {
          Gm((() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          }))
        }(t, e.ref), e
      }
      Zm.isOpening = !1;
      var Ym = new WeakMap;
      class Qm {
        continuePropagation() {
          Rt(this, Ym, !1)
        }
        get shouldStopPropagation() {
          return Tt(this, Ym)
        }
        constructor(e, t, r, n) {
          var o;
          Ot(this, Ym, {
            writable: !0,
            value: void 0
          }), Rt(this, Ym, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, c = 0,
            u = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, u = r.clientY), a && (null != l && null != u ? (s = l - a.left, c = u - a.top) : (s = a.width / 2, c = a.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = c
        }
      }
      const Jm = Symbol("linkClicked"),
        ev = "react-aria-pressable-style",
        tv = "data-react-aria-pressable";

      function rv(e) {
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
          ...h
        } = $m(e), [p, m] = (0, D.useState)(!1), v = (0, D.useRef)({
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
          let e = (0, D.useRef)(new Map),
            t = (0, D.useCallback)(((t, r, n, o) => {
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
            r = (0, D.useCallback)(((t, r, n, o) => {
              var i;
              let a = (null === (i = e.current.get(n)) || void 0 === i ? void 0 : i.fn) || n;
              t.removeEventListener(r, a, o), e.current.delete(n)
            }), []),
            n = (0, D.useCallback)((() => {
              e.current.forEach(((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              }))
            }), [r]);
          return (0, D.useEffect)((() => n), [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), b = Km(((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new Qm("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), w = Km(((e, n, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Qm("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !s) {
            let r = new Qm("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), _ = Km(((e, t) => {
          let r = v.current;
          if (s) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new Qm("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), E = Km((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(iv(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || Hm(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), P = Km((e => {
          u && E(e)
        })), S = Km((e => {
          null == a || a(e)
        })), x = Km(((e, t) => {
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
        })), C = (0, D.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (ov(t.nativeEvent, t.currentTarget) && Wm(t.currentTarget, Xm(t.nativeEvent))) {
                  var n;
                  av(Xm(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        ov(t, n) && !t.repeat && Wm(n, Xm(t)) && e.target && _(iv(e.target, t), "keyboard")
                      };
                    y(vm(t.currentTarget), "keyup", zm(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Sm() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var r;
                if ((!t || Wm(t.currentTarget, Xm(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Zm.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (r = t.nativeEvent).mozInputSource || !r.isTrusted) && (Im() && r.pointerType ? "click" !== r.type || 1 !== r.buttons : 0 !== r.detail || r.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = _(iv(t.currentTarget, t), r),
                        i = w(iv(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, S(t), E(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      r = _(t, "virtual"),
                      o = w(t, "virtual");
                    S(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && ov(t, e.target)) {
                var n;
                av(Xm(t), t.key) && t.preventDefault();
                let r = Xm(t),
                  o = Wm(e.target, Xm(t));
                w(iv(e.target, t), "keyboard", o), o && x(t, e.target), g(), "Enter" !== t.key && nv(e.target) && Wm(e.target, r) && !t[Jm] && (t[Jm] = !0, Zm(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !Wm(t.currentTarget, Xm(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Im() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (Tm()) {
                    if ("default" === Am) {
                      const t = vm(e);
                      Mm = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Am = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Dm.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = Xm(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(vm(t.currentTarget), "pointerup", r, !1), y(vm(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (Wm(t.currentTarget, Xm(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let r = function(e) {
                    for (; e && !e.matches(mm);) e = e.parentElement;
                    let t = ym(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    wm = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, gm(r), l()))
                      },
                      a = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, gm(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), wm = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              Wm(t.currentTarget, Xm(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || _(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(iv(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(iv(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (Wm(e.target, Xm(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (gm(e.target), e.target.click()))
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
              Wm(e.currentTarget, Xm(e.nativeEvent)) && E(e)
            }
          }
          return t
        }), [y, s, c, g, d, E, P, w, b, _, S, x]);
        return (0, D.useEffect)((() => {
          if (!f) return;
          const e = vm(f.current);
          if (!e || !e.head || e.getElementById(ev)) return;
          const t = e.createElement("style");
          t.id = ev, t.textContent = `\n@layer {\n  [${tv}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }), [f]), (0, D.useEffect)((() => {
          let e = v.current;
          return () => {
            var t;
            d || Hm(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: l || p,
          pressProps: qm(h, C, {
            [tv]: !0
          })
        }
      }

      function nv(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function ov(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof ym(o).HTMLInputElement && !lv(o, r) || o instanceof ym(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && nv(o)) && "Enter" !== r)
      }

      function iv(e, t) {
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

      function av(e, t) {
        return e instanceof HTMLInputElement ? !lv(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : nv(e)))
        }(e)
      }
      const sv = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function lv(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : sv.has(e.type)
      }
      var cv = r(18637),
        uv = r(88301);

      function dv(e) {
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

      function fv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function hv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fv(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = dv(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fv(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function pv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var mv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hv(hv({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) mv(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pv(e.variantClassNames, (e => pv(e, (e => e.split(" ")[0]))))
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
        }),
        yv = r(84999),
        gv = r.t(yv, 2);
      const bv = (0, D.createContext)(null);

      function wv() {
        const e = (0, D.useContext)(bv);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const _v = (0, D.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: i = "neutral",
          ...a
        }, s) => {
          const l = (0, uv.mergeProps)({
              className: vv({
                status: i
              }),
              "data-testid": t
            }, a),
            c = r ? vr.Slot : "div";
          return (0, w.jsx)(bv.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: i,
              ...a
            },
            children: (0, w.jsx)(c, {
              ...l,
              ref: s,
              children: e
            })
          })
        })),
        Ev = (0, D.forwardRef)((({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = wv(), i = (0, uv.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: yv.Check,
            invalid: yv.X,
            neutral: yv.TriangleAlert
          }, s = t ? vr.Slot : a[o];
          return (0, w.jsx)(s, {
            ref: n,
            ...i
          })
        })),
        Pv = (0, D.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            errorId: a
          } = wv(), s = (0, uv.mergeProps)({
            "data-testid": t,
            id: a || i
          }, n), l = r ? vr.Slot : "div";
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }));

      function Sv(...e) {
        const t = (0, D.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }

      function xv(e) {
        const t = (0, D.useRef)(e);
        return (0, D.useEffect)((() => {
          t.current = e
        })), (0, D.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      r(43778), r(24244);
      var Cv = r(76286),
        Tv = r(63155),
        Ov = "ScrollArea",
        [Rv, Iv] = (0, fh.A)(Ov),
        [Nv, jv] = Rv(Ov),
        kv = D.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = D.useState(null), [c, u] = D.useState(null), [d, f] = D.useState(null), [h, p] = D.useState(null), [m, v] = D.useState(null), [y, g] = D.useState(0), [b, _] = D.useState(0), [E, P] = D.useState(!1), [S, x] = D.useState(!1), C = (0, dh.s)(t, (e => l(e))), T = (0, lp.jH)(o);
          return (0, w.jsx)(Nv, {
            scope: r,
            type: n,
            dir: T,
            scrollHideDelay: i,
            scrollArea: s,
            viewport: c,
            onViewportChange: u,
            content: d,
            onContentChange: f,
            scrollbarX: h,
            onScrollbarXChange: p,
            scrollbarXEnabled: E,
            onScrollbarXEnabledChange: P,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: S,
            onScrollbarYEnabledChange: x,
            onCornerWidthChange: g,
            onCornerHeightChange: _,
            children: (0, w.jsx)(gh.sG.div, {
              dir: T,
              ...a,
              ref: C,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        }));
      kv.displayName = Ov;
      var Lv = "ScrollAreaViewport",
        Av = D.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, a = jv(Lv, r), s = D.useRef(null), l = (0, dh.s)(t, s, a.onViewportChange);
          return (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, w.jsx)(gh.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, w.jsx)("div", {
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
      Av.displayName = Lv;
      var Mv = "ScrollAreaScrollbar",
        Dv = D.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = jv(Mv, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return D.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, w.jsx)(Hv, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, w.jsx)(Bv, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, w.jsx)(zv, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, w.jsx)(Vv, {
            ...n,
            ref: t
          }) : null
        }));
      Dv.displayName = Mv;
      var Hv = D.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = jv(Mv, e.__scopeScrollArea), [i, a] = D.useState(!1);
          return D.useEffect((() => {
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, w.jsx)(yh.C, {
            present: r || i,
            children: (0, w.jsx)(zv, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        Bv = D.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = jv(Mv, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = iy((() => l("SCROLL_END")), 100), [s, l] = (c = {
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
          }, D.useReducer(((e, t) => c[e][t] ?? e), "hidden"));
          var c;
          return D.useEffect((() => {
            if ("idle" === s) {
              const e = window.setTimeout((() => l("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [s, o.scrollHideDelay, l]), D.useEffect((() => {
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
          }), [o.viewport, i, l, a]), (0, w.jsx)(yh.C, {
            present: r || "hidden" !== s,
            children: (0, w.jsx)(Vv, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, uh.m)(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: (0, uh.m)(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        zv = D.forwardRef(((e, t) => {
          const r = jv(Mv, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, a] = D.useState(!1),
            s = "horizontal" === e.orientation,
            l = iy((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return ay(r.viewport, l), ay(r.content, l), (0, w.jsx)(yh.C, {
            present: n || i,
            children: (0, w.jsx)(Vv, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        Vv = D.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = jv(Mv, e.__scopeScrollArea), i = D.useRef(null), a = D.useRef(0), [s, l] = D.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = Jv(s.viewport, s.content), u = {
            ...n,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: e => a.current = e
          };

          function d(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = ey(r),
                i = t || o / 2,
                a = o - i,
                s = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                c = r.content - r.viewport;
              return ry([s, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === r ? (0, w.jsx)(Fv, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = ty(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, w.jsx)(Uv, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = ty(o.viewport.scrollTop, s);
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
        Fv = D.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = jv(Mv, e.__scopeScrollArea), [a, s] = D.useState(), l = D.useRef(null), c = (0, dh.s)(t, l, i.onScrollbarXChange);
          return D.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, w.jsx)(Kv, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": ey(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), ny(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Qv(a.paddingLeft),
                  paddingEnd: Qv(a.paddingRight)
                }
              })
            }
          })
        })),
        Uv = D.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = jv(Mv, e.__scopeScrollArea), [a, s] = D.useState(), l = D.useRef(null), c = (0, dh.s)(t, l, i.onScrollbarYChange);
          return D.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, w.jsx)(Kv, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": ey(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), ny(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Qv(a.paddingTop),
                  paddingEnd: Qv(a.paddingBottom)
                }
              })
            }
          })
        })),
        [qv, Gv] = Rv(Mv),
        Kv = D.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: a,
            onThumbPointerDown: s,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: u,
            onResize: d,
            ...f
          } = e, h = jv(Mv, r), [p, m] = D.useState(null), v = (0, dh.s)(t, (e => m(e))), y = D.useRef(null), g = D.useRef(""), b = h.viewport, _ = n.content - n.viewport, E = (0, Cv.c)(u), P = (0, Cv.c)(l), S = iy(d, 10);

          function x(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              c({
                x: t,
                y: r
              })
            }
          }
          return D.useEffect((() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && E(e, _)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [b, p, _, E]), D.useEffect(P, [n, P]), ay(p, S), ay(h.content, S), (0, w.jsx)(qv, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, Cv.c)(i),
            onThumbPointerUp: (0, Cv.c)(a),
            onThumbPositionChange: P,
            onThumbPointerDown: (0, Cv.c)(s),
            children: (0, w.jsx)(gh.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, uh.m)(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), x(e))
              })),
              onPointerMove: (0, uh.m)(e.onPointerMove, x),
              onPointerUp: (0, uh.m)(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              }))
            })
          })
        })),
        Wv = "ScrollAreaThumb",
        Xv = D.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Gv(Wv, e.__scopeScrollArea);
          return (0, w.jsx)(yh.C, {
            present: r || o.hasThumb,
            children: (0, w.jsx)(Zv, {
              ref: t,
              ...n
            })
          })
        })),
        Zv = D.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = jv(Wv, r), a = Gv(Wv, r), {
            onThumbPositionChange: s
          } = a, l = (0, dh.s)(t, (e => a.onThumbChange(e))), c = D.useRef(void 0), u = iy((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return D.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = oy(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, u, s]), (0, w.jsx)(gh.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, uh.m)(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: (0, uh.m)(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      Xv.displayName = Wv;
      var $v = "ScrollAreaCorner";
      D.forwardRef(((e, t) => {
        const r = jv($v, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, w.jsx)(Yv, {
          ...e,
          ref: t
        }) : null
      })).displayName = $v;
      var Yv = D.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = jv($v, r), [i, a] = D.useState(0), [s, l] = D.useState(0), c = Boolean(i && s);
        return ay(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), ay(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), c ? (0, w.jsx)(gh.sG.div, {
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

      function Qv(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Jv(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function ey(e) {
        const t = Jv(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function ty(e, t, r = "ltr") {
        const n = ey(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - n,
          l = sp(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return ry([0, a], [0, s])(l)
      }

      function ry(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function ny(e, t) {
        return e > 0 && e < t
      }
      var oy = (e, t = () => {}) => {
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

      function iy(e, t) {
        const r = (0, Cv.c)(e),
          n = D.useRef(0);
        return D.useEffect((() => () => window.clearTimeout(n.current)), []), D.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function ay(e, t) {
        const r = (0, Cv.c)(t);
        (0, Tv.N)((() => {
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
      var sy = kv,
        ly = Av,
        cy = Dv,
        uy = Xv,
        dy = r(15234),
        fy = r(80113),
        hy = r(94926),
        py = r(19690),
        my = [" ", "Enter", "ArrowUp", "ArrowDown"],
        vy = [" ", "Enter"],
        yy = "Select",
        [gy, by, wy] = (0, dp.N)(yy),
        [_y, Ey] = (0, fh.A)(yy, [wy, mh.Bk]),
        Py = (0, mh.Bk)(),
        [Sy, xy] = _y(yy),
        [Cy, Ty] = _y(yy),
        Oy = e => {
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
            name: u,
            autoComplete: d,
            disabled: f,
            required: h,
            form: p
          } = e, m = Py(t), [v, y] = D.useState(null), [g, b] = D.useState(null), [_, E] = D.useState(!1), P = (0, lp.jH)(c), [S, x] = (0, bh.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: yy
          }), [C, T] = (0, bh.useControllableState)({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: yy
          }), O = D.useRef(null), R = !v || p || !!v.closest("form"), [I, N] = D.useState(new Set), j = Array.from(I).map((e => e.props.value)).join(";");
          return (0, w.jsx)(mh.bL, {
            ...m,
            children: (0, w.jsxs)(Sy, {
              required: h,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: _,
              onValueNodeHasChildrenChange: E,
              contentId: (0, ph.useId)(),
              value: C,
              onValueChange: T,
              open: S,
              onOpenChange: x,
              dir: P,
              triggerPointerDownPosRef: O,
              disabled: f,
              children: [(0, w.jsx)(gy.Provider, {
                scope: t,
                children: (0, w.jsx)(Cy, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: D.useCallback((e => {
                    N((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: D.useCallback((e => {
                    N((t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    }))
                  }), []),
                  children: r
                })
              }), R ? (0, w.jsxs)(cg, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: u,
                autoComplete: d,
                value: C,
                onChange: e => T(e.target.value),
                disabled: f,
                form: p,
                children: [void 0 === C ? (0, w.jsx)("option", {
                  value: ""
                }) : null, Array.from(I)]
              }, j) : null]
            })
          })
        };
      Oy.displayName = yy;
      var Ry = "SelectTrigger",
        Iy = D.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = Py(r), a = xy(Ry, r), s = a.disabled || n, l = (0, dh.s)(t, a.onTriggerChange), c = by(r), u = D.useRef("touch"), [d, f, h] = dg((e => {
            const t = c().filter((e => !e.disabled)),
              r = t.find((e => e.value === a.value)),
              n = fg(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          })), p = e => {
            s || (a.onOpenChange(!0), h()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, w.jsx)(mh.Mz, {
            asChild: !0,
            ...i,
            children: (0, w.jsx)(gh.sG.button, {
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
              "data-placeholder": ug(a.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, uh.m)(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== u.current && p(e)
              })),
              onPointerDown: (0, uh.m)(o.onPointerDown, (e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              })),
              onKeyDown: (0, uh.m)(o.onKeyDown, (e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || my.includes(e.key) && (p(), e.preventDefault())
              }))
            })
          })
        }));
      Iy.displayName = Ry;
      var Ny = "SelectValue",
        jy = D.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = xy(Ny, r), {
            onValueNodeHasChildrenChange: c
          } = l, u = void 0 !== i, d = (0, dh.s)(t, l.onValueNodeChange);
          return (0, Tv.N)((() => {
            c(u)
          }), [c, u]), (0, w.jsx)(gh.sG.span, {
            ...s,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: ug(l.value) ? (0, w.jsx)(w.Fragment, {
              children: a
            }) : i
          })
        }));
      jy.displayName = Ny;
      var ky = D.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, w.jsx)(gh.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      }));
      ky.displayName = "SelectIcon";
      var Ly = e => (0, w.jsx)(vh.Portal, {
        asChild: !0,
        ...e
      });
      Ly.displayName = "SelectPortal";
      var Ay = "SelectContent",
        My = D.forwardRef(((e, t) => {
          const r = xy(Ay, e.__scopeSelect),
            [n, o] = D.useState();
          if ((0, Tv.N)((() => {
              o(new DocumentFragment)
            }), []), !r.open) {
            const t = n;
            return t ? zt.createPortal((0, w.jsx)(Hy, {
              scope: e.__scopeSelect,
              children: (0, w.jsx)(gy.Slot, {
                scope: e.__scopeSelect,
                children: (0, w.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, w.jsx)(Vy, {
            ...e,
            ref: t
          })
        }));
      My.displayName = Ay;
      var Dy = 10,
        [Hy, By] = _y(Ay),
        zy = (0, vr.createSlot)("SelectContent.RemoveScroll"),
        Vy = D.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
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
          } = e, g = xy(Ay, r), [b, _] = D.useState(null), [E, P] = D.useState(null), S = (0, dh.s)(t, (e => _(e))), [x, C] = D.useState(null), [T, O] = D.useState(null), R = by(r), [I, N] = D.useState(!1), j = D.useRef(!1);
          D.useEffect((() => {
            if (b) return (0, hy.Eq)(b)
          }), [b]), (0, dy.Oh)();
          const k = D.useCallback((e => {
              const [t, ...r] = R().map((e => e.ref.current)), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && E && (E.scrollTop = 0), r === n && E && (E.scrollTop = E.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }), [R, E]),
            L = D.useCallback((() => k([x, b])), [k, x, b]);
          D.useEffect((() => {
            I && L()
          }), [I, L]);
          const {
            onOpenChange: A,
            triggerPointerDownPosRef: M
          } = g;
          D.useEffect((() => {
            if (b) {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || A(!1), document.removeEventListener("pointermove", t), M.current = null
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
          }), [b, A, M]), D.useEffect((() => {
            const e = () => A(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [A]);
          const [H, B] = dg((e => {
            const t = R().filter((e => !e.disabled)),
              r = t.find((e => e.ref.current === document.activeElement)),
              n = fg(t, e, r);
            n && setTimeout((() => n.ref.current.focus()))
          })), z = D.useCallback(((e, t, r) => {
            const n = !j.current && !r;
            (void 0 !== g.value && g.value === t || n) && (C(e), n && (j.current = !0))
          }), [g.value]), V = D.useCallback((() => b?.focus()), [b]), F = D.useCallback(((e, t, r) => {
            const n = !j.current && !r;
            (void 0 !== g.value && g.value === t || n) && O(e)
          }), [g.value]), U = "popper" === n ? Uy : Fy, q = U === Uy ? {
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
          return (0, w.jsx)(Hy, {
            scope: r,
            content: b,
            viewport: E,
            onViewportChange: P,
            itemRefCallback: z,
            selectedItem: x,
            onItemLeave: V,
            itemTextRefCallback: F,
            focusSelectedItem: L,
            selectedItemText: T,
            position: n,
            isPositioned: I,
            searchRef: H,
            children: (0, w.jsx)(py.RemoveScroll, {
              as: zy,
              allowPinchZoom: !0,
              children: (0, w.jsx)(fy.FocusScope, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, uh.m)(o, (e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, w.jsx)(hh.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, w.jsx)(U, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...q,
                    onPlaced: () => N(!0),
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, uh.m)(y.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = R().filter((e => !e.disabled));
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
      Vy.displayName = "SelectContentImpl";
      var Fy = D.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = xy(Ay, r), a = By(Ay, r), [s, l] = D.useState(null), [c, u] = D.useState(null), d = (0, dh.s)(t, (e => u(e))), f = by(r), h = D.useRef(!1), p = D.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = a, b = D.useCallback((() => {
          if (i.trigger && i.valueNode && s && c && m && v && y) {
            const e = i.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              r = i.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const n = o.left - t.left,
                i = r.left - n,
                a = e.left - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - Dy,
                d = sp(i, [Dy, Math.max(Dy, u - c)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - Dy,
                d = sp(i, [Dy, Math.max(Dy, u - c)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const a = f(),
              l = window.innerHeight - 2 * Dy,
              u = m.scrollHeight,
              d = window.getComputedStyle(c),
              p = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              w = p + g + u + parseInt(d.paddingBottom, 10) + b,
              _ = Math.min(5 * v.offsetHeight, w),
              E = window.getComputedStyle(m),
              P = parseInt(E.paddingTop, 10),
              S = parseInt(E.paddingBottom, 10),
              x = e.top + e.height / 2 - Dy,
              C = l - x,
              T = v.offsetHeight / 2,
              O = p + g + (v.offsetTop + T),
              R = w - O;
            if (O <= x) {
              const e = a.length > 0 && v === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = c.clientHeight - m.offsetTop - m.offsetHeight,
                r = O + Math.max(C, T + (e ? S : 0) + t + b);
              s.style.height = r + "px"
            } else {
              const e = a.length > 0 && v === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(x, p + m.offsetTop + (e ? P : 0) + T) + R;
              s.style.height = t + "px", m.scrollTop = O - x + m.offsetTop
            }
            s.style.margin = `${Dy}px 0`, s.style.minHeight = _ + "px", s.style.maxHeight = l + "px", n?.(), requestAnimationFrame((() => h.current = !0))
          }
        }), [f, i.trigger, i.valueNode, s, c, m, v, y, i.dir, n]);
        (0, Tv.N)((() => b()), [b]);
        const [_, E] = D.useState();
        (0, Tv.N)((() => {
          c && E(window.getComputedStyle(c).zIndex)
        }), [c]);
        const P = D.useCallback((e => {
          e && !0 === p.current && (b(), g?.(), p.current = !1)
        }), [b, g]);
        return (0, w.jsx)(qy, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: P,
          children: (0, w.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: _
            },
            children: (0, w.jsx)(gh.sG.div, {
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
      Fy.displayName = "SelectItemAlignedPosition";
      var Uy = D.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Dy,
          ...i
        } = e, a = Py(r);
        return (0, w.jsx)(mh.UC, {
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
      Uy.displayName = "SelectPopperPosition";
      var [qy, Gy] = _y(Ay, {}), Ky = "SelectViewport", Wy = D.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = By(Ky, r), a = Gy(Ky, r), s = (0, dh.s)(t, i.onViewportChange), l = D.useRef(0);
        return (0, w.jsxs)(w.Fragment, {
          children: [(0, w.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, w.jsx)(gy.Slot, {
            scope: r,
            children: (0, w.jsx)(gh.sG.div, {
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
              onScroll: (0, uh.m)(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * Dy,
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
      Wy.displayName = Ky;
      var Xy = "SelectGroup",
        [Zy, $y] = _y(Xy);
      D.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, ph.useId)();
        return (0, w.jsx)(Zy, {
          scope: r,
          id: o,
          children: (0, w.jsx)(gh.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      })).displayName = Xy;
      var Yy = "SelectLabel";
      D.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = $y(Yy, r);
        return (0, w.jsx)(gh.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      })).displayName = Yy;
      var Qy = "SelectItem",
        [Jy, eg] = _y(Qy),
        tg = D.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = xy(Qy, r), l = By(Qy, r), c = s.value === n, [u, d] = D.useState(i ?? ""), [f, h] = D.useState(!1), p = (0, dh.s)(t, (e => l.itemRefCallback?.(e, n, o))), m = (0, ph.useId)(), v = D.useRef("touch"), y = () => {
            o || (s.onValueChange(n), s.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, w.jsx)(Jy, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: c,
            onItemTextChange: D.useCallback((e => {
              d((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, w.jsx)(gy.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: u,
              children: (0, w.jsx)(gh.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": c && f,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: p,
                onFocus: (0, uh.m)(a.onFocus, (() => h(!0))),
                onBlur: (0, uh.m)(a.onBlur, (() => h(!1))),
                onClick: (0, uh.m)(a.onClick, (() => {
                  "mouse" !== v.current && y()
                })),
                onPointerUp: (0, uh.m)(a.onPointerUp, (() => {
                  "mouse" === v.current && y()
                })),
                onPointerDown: (0, uh.m)(a.onPointerDown, (e => {
                  v.current = e.pointerType
                })),
                onPointerMove: (0, uh.m)(a.onPointerMove, (e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: (0, uh.m)(a.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                })),
                onKeyDown: (0, uh.m)(a.onKeyDown, (e => {
                  "" !== l.searchRef?.current && " " === e.key || (vy.includes(e.key) && y(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      tg.displayName = Qy;
      var rg = "SelectItemText",
        ng = D.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, a = xy(rg, r), s = By(rg, r), l = eg(rg, r), c = Ty(rg, r), [u, d] = D.useState(null), f = (0, dh.s)(t, (e => d(e)), l.onItemTextChange, (e => s.itemTextRefCallback?.(e, l.value, l.disabled))), h = u?.textContent, p = D.useMemo((() => (0, w.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value)), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = c;
          return (0, Tv.N)((() => (m(p), () => v(p))), [m, v, p]), (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsx)(gh.sG.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? zt.createPortal(i.children, a.valueNode) : null]
          })
        }));
      ng.displayName = rg;
      var og = "SelectItemIndicator";
      D.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return eg(og, r).isSelected ? (0, w.jsx)(gh.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      })).displayName = og;
      var ig = "SelectScrollUpButton";
      D.forwardRef(((e, t) => {
        const r = By(ig, e.__scopeSelect),
          n = Gy(ig, e.__scopeSelect),
          [o, i] = D.useState(!1),
          a = (0, dh.s)(t, n.onScrollButtonChange);
        return (0, Tv.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, w.jsx)(sg, {
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
      })).displayName = ig;
      var ag = "SelectScrollDownButton";
      D.forwardRef(((e, t) => {
        const r = By(ag, e.__scopeSelect),
          n = Gy(ag, e.__scopeSelect),
          [o, i] = D.useState(!1),
          a = (0, dh.s)(t, n.onScrollButtonChange);
        return (0, Tv.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, w.jsx)(sg, {
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
      })).displayName = ag;
      var sg = D.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = By("SelectScrollButton", r), a = D.useRef(null), s = by(r), l = D.useCallback((() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }), []);
        return D.useEffect((() => () => l()), [l]), (0, Tv.N)((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, w.jsx)(gh.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, uh.m)(o.onPointerDown, (() => {
            null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerMove: (0, uh.m)(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerLeave: (0, uh.m)(o.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      D.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, w.jsx)(gh.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var lg = "SelectArrow";
      D.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Py(r), i = xy(lg, r), a = By(lg, r);
        return i.open && "popper" === a.position ? (0, w.jsx)(mh.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      })).displayName = lg;
      var cg = D.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = D.useRef(null),
          i = (0, dh.s)(n, o),
          a = (0, cp.Z)(t);
        return D.useEffect((() => {
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
        }), [a, t]), (0, w.jsx)(gh.sG.select, {
          ...r,
          style: {
            ...yr.VISUALLY_HIDDEN_STYLES,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      }));

      function ug(e) {
        return "" === e || void 0 === e
      }

      function dg(e) {
        const t = (0, Cv.c)(e),
          r = D.useRef(""),
          n = D.useRef(0),
          o = D.useCallback((e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          i = D.useCallback((() => {
            r.current = "", window.clearTimeout(n.current)
          }), []);
        return D.useEffect((() => () => window.clearTimeout(n.current)), []), [r, o, i]
      }

      function fg(e, t, r) {
        const n = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === n.length && (i = i.filter((e => e !== r)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(n.toLowerCase())));
        return l !== r ? l : void 0
      }
      cg.displayName = "SelectBubbleInput";
      var hg = Oy,
        pg = Iy,
        mg = jy,
        vg = ky,
        yg = Ly,
        gg = My,
        bg = Wy,
        wg = tg,
        _g = ng,
        Eg = r(56614);

      function Pg(e) {
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

      function Sg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function xg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sg(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Pg(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sg(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Cg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Tg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Og = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xg(xg({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Tg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cg(e.variantClassNames, (e => Cg(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Rg = Og({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ig = Og({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ng = Og({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jg = Og({
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
        kg = Og({
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
        Lg = Og({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ag = (0, D.createContext)(null);

      function Mg() {
        const e = (0, D.useContext)(Ag);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Dg = (0, D.forwardRef)((({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: i,
          onValueChange: a,
          name: s,
          value: l,
          defaultOpen: c,
          onOpenChange: u,
          isOpen: d,
          size: f = "MD",
          status: h = "neutral",
          ...p
        }, m) => {
          const v = Sv((0, D.useRef)(null), m),
            y = (0, D.useId)(),
            g = (0, D.useId)(),
            b = (0, D.useId)(),
            _ = (0, D.useId)(),
            E = (0, D.useId)(),
            P = (0, D.useId)(),
            [S = !1, x] = function({
              prop: e,
              defaultProp: t,
              onChange: r = () => {}
            }) {
              const [n, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const r = (0, D.useState)(e),
                  [n] = r,
                  o = (0, D.useRef)(n),
                  i = xv(t);
                return (0, D.useEffect)((() => {
                  o.current !== n && (i(n), o.current = n)
                }), [n, o, i]), r
              }({
                defaultProp: t,
                onChange: r
              }), i = void 0 !== e, a = i ? e : n, s = xv(r), l = (0, D.useCallback)((t => {
                if (i) {
                  const r = "function" == typeof t ? t(e) : t;
                  r !== e && s(r)
                } else o(t)
              }), [i, e, o, s]);
              return [a, l]
            }({
              prop: d,
              defaultProp: c,
              onChange: u
            }),
            C = (0, cv.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, w.jsx)(Ag.Provider, {
            value: {
              labelId: y,
              errorId: g,
              descriptionId: b,
              triggerId: P,
              hintId: _,
              popoverId: E,
              defaultValue: i,
              onValueChange: a,
              value: l,
              isOpen: S,
              setIsOpen: x,
              defaultOpen: c,
              onOpenChange: u,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: h,
              size: f
            },
            children: (0, w.jsx)(hg, {
              required: r,
              disabled: n,
              open: S,
              onOpenChange: () => x(!o && !S),
              value: l,
              defaultValue: i,
              onValueChange: a,
              name: s,
              children: (0, w.jsx)("div", {
                ref: v,
                ...C,
                children: e
              })
            })
          })
        })),
        Hg = (0, D.forwardRef)((({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: i
          } = Mg(), a = (0, cv.mergeProps)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Rg({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, w.jsx)(gg, {
            ...a,
            ref: o,
            children: (0, w.jsx)(bg, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        })),
        Bg = (0, D.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, cv.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, w.jsxs)(sy, {
            ...o,
            ref: n,
            children: [(0, w.jsx)(ly, {
              className: "foundry_uaq1gwu",
              style: {
                overflowY: void 0
              },
              children: e
            }), (0, w.jsx)(cy, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, w.jsx)(uy, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        })),
        zg = (0, D.forwardRef)((({
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
            isDisabled: c,
            labelId: u,
            hintId: d,
            triggerId: f,
            popoverId: h,
            descriptionId: p,
            isOpen: m,
            value: v,
            size: y
          } = Mg(), {
            isPressed: g,
            pressProps: b
          } = rv({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), _ = (0, cv.mergeProps)({
            id: f,
            className: kg({
              size: y,
              isReadOnly: !!s,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!c
            }),
            "aria-labelledby": (0, cv.joinStrings)(r, u, d),
            "aria-describedby": (0, cv.joinStrings)(n, p),
            "aria-activedescendant": v,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, cv.omit)(b, "onKeyDown"), i), E = o ? vr.Slot : pg;
          return (0, w.jsx)(E, {
            ..._,
            ref: a,
            children: e
          })
        })),
        Vg = (0, D.forwardRef)((({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: i
          } = Mg(), a = (0, cv.mergeProps)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), s = t ? vr.Slot : "span";
          return (0, w.jsx)(s, {
            ...a,
            ref: o,
            children: (0, w.jsx)(mg, {
              placeholder: e,
              "aria-label": i
            })
          })
        })),
        Fg = (0, D.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: a
          } = Mg(), s = a ? Eg.ChevronUp : Eg.ChevronDown, l = (0, cv.mergeProps)({
            asChild: !0,
            className: Lg({
              isDisabled: i || o
            }),
            "data-testid": t
          }, r);
          return (0, w.jsx)(vg, {
            ...l,
            ref: n,
            children: e || (0, w.jsx)(s, {
              size: "LG",
              label: ""
            })
          })
        })),
        Ug = (0, D.forwardRef)((({
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
            labelId: c,
            triggerId: u
          } = Mg(), d = s && !o, f = (0, cv.mergeProps)({
            id: i.id || c,
            htmlFor: u,
            "data-testid": e,
            className: jg({
              showAsterisk: d,
              isDisabled: l
            })
          }, i), h = t ? vr.Slot : "label";
          return (0, w.jsx)(hm, {
            enabled: n,
            children: (0, w.jsx)(h, {
              ...f,
              ref: a,
              children: r
            })
          })
        })),
        qg = (0, D.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = Mg(), s = (0, cv.mergeProps)({
            className: Ig({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? vr.Slot : "div";
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Gg = (0, D.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: a
          } = Mg(), s = (0, cv.mergeProps)({
            className: Ng({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? vr.Slot : "div";
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Kg = (0, D.forwardRef)((({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, i) => {
          const a = Sv((0, D.useRef)(null), i),
            s = (0, cv.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, w.jsx)(wg, {
            ref: a,
            ...s,
            children: e
          })
        })),
        Wg = (0, D.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, cv.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, w.jsx)(_g, {
            ref: n,
            asChild: !0,
            children: (0, w.jsx)("span", {
              ...o,
              children: e
            })
          })
        })),
        Xg = (0, D.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, cv.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, w.jsx)(vg, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        })),
        Zg = yg,
        $g = (0, D.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = Mg(), s = (0, cv.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? vr.Slot : _v;
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Yg = Ev,
        Qg = Pv,
        Jg = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? yr.VisuallyHidden : D.Fragment;
          return (0, w.jsx)(r, {
            ...t
          })
        };

      function eb(e, t, r) {
        let n = (0, D.useRef)(t),
          o = Se((() => {
            r && r(n.current)
          }));
        (0, D.useEffect)((() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", o), () => {
            null == r || r.removeEventListener("reset", o)
          }
        }), [e, o])
      }

      function tb(e, t, r) {
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
          pressProps: f,
          isPressed: h
        } = qt({
          isDisabled: n
        }), {
          pressProps: p,
          isPressed: m
        } = qt({
          onPress() {
            var e;
            t.toggle(), null === (e = r.current) || void 0 === e || e.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: v
        } = fr(e, r), y = Ve(f, v), g = Ke(e, {
          labelable: !0
        });
        return eb(r, t.isSelected, t.setSelected), {
          labelProps: Ve(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: Ve(g, {
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
            ...y
          }),
          isSelected: t.isSelected,
          isPressed: h || m,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: d || "invalid" === u
        }
      }
      var rb = r(90048);

      function nb(e, t, r) {
        let [n, o] = (0, D.useState)(e || t), i = (0, D.useRef)(void 0 !== e), a = void 0 !== e;
        (0, D.useEffect)((() => {
          i.current, i.current = a
        }), [a]);
        let s = a ? e : n,
          l = (0, D.useCallback)(((e, ...t) => {
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

      function ob(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = nb(e.isSelected, e.defaultSelected || !1, e.onChange);
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

      function ib(e) {
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

      function ab(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function sb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ab(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ib(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ab(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function lb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      r(80999), r(33037);
      var cb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ub = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sb(sb({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) cb(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lb(e.variantClassNames, (e => lb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        db = ub({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        fb = ub({
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
        hb = ub({
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
        pb = ub({
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
        mb = ub({
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
      const vb = (0, D.createContext)(null);

      function yb() {
        const e = (0, D.useContext)(vb);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const gb = (0, D.forwardRef)((({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: i = !1,
          isReadOnly: a = !1,
          ...s
        }, l) => {
          const c = (0, rb.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, s),
            u = n ? vr.Slot : "div",
            d = (0, D.useId)(),
            f = (0, D.useId)(),
            h = (0, D.useId)();
          return (0, w.jsx)(vb.Provider, {
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
            children: (0, w.jsx)(u, {
              ...c,
              ref: l,
              children: o
            })
          })
        })),
        bb = (0, D.forwardRef)((({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: i,
          isSelected: a,
          defaultSelected: s,
          onSelectedChange: l,
          name: c,
          value: u,
          ...d
        }, f) => {
          const h = (0, D.useRef)(null),
            p = function(...e) {
              const t = (0, D.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach((e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                }))
              }), t.current
            }(h, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: _,
              isReadOnly: E
            } = yb(),
            P = ob({
              isDisabled: _,
              isReadOnly: E,
              isSelected: a,
              defaultSelected: s,
              onChange: l
            }),
            {
              inputProps: S
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: i,
                isPressed: a,
                isDisabled: s,
                isReadOnly: l
              } = tb(e, t, r);
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
              id: i || y,
              "aria-labelledby": (0, rb.joinStrings)(n, g),
              "aria-describedby": (0, rb.joinStrings)(o, b),
              name: c,
              value: u,
              isDisabled: _,
              isReadOnly: E
            }, P, h),
            x = (0, rb.mergeProps)({
              className: mb({
                appearance: v
              }),
              "data-state": P.isSelected ? "selected" : "unselected",
              "data-disabled": _ || E,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || _ || E || P.toggle()
              }
            }, d);
          return (0, w.jsxs)("div", {
            ...x,
            children: [(0, w.jsx)(Jg, {
              children: (0, w.jsx)("input", {
                ...S,
                ref: p
              })
            }), (0, w.jsx)("div", {
              className: pb({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, w.jsx)("div", {
                className: fb({
                  size: m,
                  isSelected: P.isSelected
                })
              })
            })]
          })
        })),
        wb = (0, D.forwardRef)((({
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
            size: c
          } = yb(), u = (0, rb.mergeProps)({
            id: o.id || s,
            htmlFor: l,
            "data-testid": e,
            className: hb({
              isDisabled: a,
              size: c
            })
          }, o), d = t ? vr.Slot : "label";
          return (0, w.jsx)(Jg, {
            enabled: n,
            children: (0, w.jsx)(d, {
              ...u,
              ref: i,
              children: r
            })
          })
        })),
        _b = (0, D.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = yb(), s = n.id || a, l = (0, rb.mergeProps)({
            className: db({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? vr.Slot : "div";
          return (0, w.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        })),
        Eb = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? yr.VisuallyHidden : D.Fragment;
          return (0, w.jsx)(r, {
            ...t
          })
        };
      var Pb = r(67901);
      const Sb = {
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
        xb = {
          ...Sb,
          customError: !0,
          valid: !1
        },
        Cb = {
          isInvalid: !1,
          validationDetails: Sb,
          validationErrors: []
        },
        Tb = (0, D.createContext)({}),
        Ob = "__formValidationState" + Date.now();

      function Rb(e) {
        if (e[Ob]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[Ob];
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
              validationDetails: xb
            } : null,
            c = (0, D.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return Ib(r)
                }
                return []
              }(a, o);
              return Nb(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let u = (0, D.useContext)(Tb),
            d = (0, D.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => Ib(u[e]))) : Ib(u[n]) : []), [u, n]),
            [f, h] = (0, D.useState)(u),
            [p, m] = (0, D.useState)(!1);
          u !== f && (h(u), m(!1));
          let v = (0, D.useMemo)((() => Nb(p ? [] : d)), [p, d]),
            y = (0, D.useRef)(Cb),
            [g, b] = (0, D.useState)(Cb),
            w = (0, D.useRef)(Cb),
            [_, E] = (0, D.useState)(!1);
          return (0, D.useEffect)((() => {
            if (!_) return;
            E(!1);
            let e = c || i || y.current;
            jb(e, w.current) || (w.current = e, b(e))
          })), {
            realtimeValidation: l || v || c || i || Cb,
            displayValidation: "native" === s ? l || v || g : l || v || c || i || g,
            updateValidation(e) {
              "aria" !== s || jb(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = Cb;
              jb(e, w.current) || (w.current = e, b(e)), "native" === s && E(!1), m(!0)
            },
            commitValidation() {
              "native" === s && E(!0), m(!0)
            }
          }
        }(e)
      }

      function Ib(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Nb(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: xb
        } : null
      }

      function jb(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }

      function kb(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        Pe((() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: Lb(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = Se((() => {
            t.resetValidation()
          })),
          a = Se((e => {
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
            }(i) === r.current && (o ? o() : null === (a = r.current) || void 0 === a || a.focus(), Yt = "keyboard", rr("keyboard", null)), e.preventDefault()
          })),
          s = Se((() => {
            t.commitValidation()
          }));
        (0, D.useEffect)((() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", a), e.addEventListener("change", s), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", s), null == t || t.removeEventListener("reset", i)
          }
        }), [r, a, s, i, n])
      }

      function Lb(e) {
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
      const Ab = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Mb = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Db = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Hb = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Bb = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        zb = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Vb(e) {
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
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Ub(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fb(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Vb(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fb(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function qb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Gb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Kb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ub(Ub({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Gb(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qb(e.variantClassNames, (e => qb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Wb = Kb({
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
        Xb = Kb({
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
        Zb = Kb({
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
        $b = Kb({
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
      const Yb = (0, D.createContext)(null);

      function Qb() {
        const e = (0, D.useContext)(Yb);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Jb = (0, D.forwardRef)((({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...i
        }, a) => {
          const s = (0, Pb.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, Pb.omit)(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? vr.Slot : "div",
            c = (0, D.useId)(),
            u = (0, D.useId)(),
            d = (0, D.useId)();
          return (0, w.jsx)(Yb.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: u,
              inputId: d,
              ...i
            },
            children: (0, w.jsx)(l, {
              ...s,
              ref: a,
              children: o
            })
          })
        })),
        ew = (0, D.forwardRef)((({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: i,
          onClick: a,
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
            ..._
          } = Qb(), E = (0, D.useRef)(null), P = d.id || b, {
            isPressed: S,
            pressProps: x
          } = rv({
            ref: E
          }), {
            setSelected: C,
            toggle: T,
            ...O
          } = ob({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: R,
            isSelected: I,
            isDisabled: N,
            isReadOnly: j
          } = function(e, t, r) {
            let n = Rb({
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
              } = tb({
                ...e,
                isInvalid: o
              }, t, r);
            kb(e, n, r);
            let {
              isIndeterminate: h,
              isRequired: p,
              validationBehavior: m = "aria"
            } = e;
            (0, D.useEffect)((() => {
              r.current && (r.current.indeterminate = !!h)
            }));
            let {
              pressProps: v
            } = qt({
              isDisabled: d || f,
              onPress() {
                let {
                  [Ob]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: Ve(s, v),
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
              validationErrors: i,
              validationDetails: a
            }
          }({
            "aria-label": "",
            id: P,
            name: o,
            ..._
          }, {
            ...O,
            toggle: T,
            setSelected: _.isReadOnly ? () => !1 : C
          }, E), k = (0, Pb.mergeProps)({
            className: Xb({
              size: h
            }),
            onClick: e => {
              i?.(e) ?? a?.(e), e.defaultPrevented || N || j || T()
            }
          }, x, d), L = (0, Pb.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, Pb.joinStrings)(u, g),
            "aria-describedby": (0, Pb.joinStrings)(l, y),
            "aria-errormessage": (0, Pb.joinStrings)(c, _.isInvalid ? y : void 0),
            "aria-required": v,
            required: v
          }, R), A = m ? s[`Dash${h}`] : s[`Check${h}`];
          return (0, w.jsxs)("div", {
            ...k,
            children: [(0, w.jsx)(Eb, {
              children: (0, w.jsx)("input", {
                ...L,
                ref: f
              })
            }), (0, w.jsx)("div", {
              className: Wb({
                size: h,
                appearance: p
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : I ? "checked" : "unchecked",
              "data-disabled": N || j,
              "data-testid": e,
              "data-pressed": S,
              children: (0, w.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (I || m) && (0, w.jsx)(A, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        })),
        tw = (0, D.forwardRef)((({
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
            inputId: c,
            isRequired: u
          } = Qb(), d = i.id || l, f = u && !o, h = (0, Pb.mergeProps)({
            className: $b({
              size: s,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: i.htmlFor || c
          }, i), p = t ? vr.Slot : "label";
          return (0, w.jsx)(Eb, {
            enabled: n,
            children: (0, w.jsx)(p, {
              ...h,
              ref: a,
              children: e
            })
          })
        })),
        rw = (0, D.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = Qb(), s = n.id || a, l = (0, Pb.mergeProps)({
            className: Zb({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? vr.Slot : "div";
          return (0, w.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        })),
        nw = (0, D.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = Qb(), a = n.id || i, s = (0, Pb.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: a
          }, n), l = t ? vr.Slot : "div";
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }));
      r(90394), r(8956);
      var ow = r(18049);
      const iw = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? yr.VisuallyHidden : D.Fragment;
        return (0, w.jsx)(r, {
          ...t
        })
      };

      function aw(e) {
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

      function cw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var uw = (e, t, r) => {
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
            for (var [c, u] of e.compoundVariants) uw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cw(e.variantClassNames, (e => cw(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        fw = dw({
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
        hw = dw({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pw = dw({
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
        mw = dw({
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
      const vw = (0, D.createContext)(null);

      function yw() {
        const e = (0, D.useContext)(vw);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const gw = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: a = "neutral",
          ...s
        }, l) => {
          const c = (0, ow.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, s),
            u = e ? vr.Slot : "div",
            d = (0, D.useId)(),
            f = (0, D.useId)(),
            h = (0, D.useId)(),
            p = (0, D.useId)();
          return (0, w.jsx)(vw.Provider, {
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
            children: (0, w.jsx)(u, {
              ref: l,
              ...c,
              children: t
            })
          })
        })),
        bw = (0, D.forwardRef)((({
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
            isDisabled: c,
            isRequired: u
          } = yw(), d = (0, ow.mergeProps)({
            className: pw({
              isDisabled: c,
              showAsterisk: u && !o
            }),
            "data-testid": r,
            id: s,
            htmlFor: l
          }, i), f = t ? vr.Slot : "label";
          return (0, w.jsx)(iw, {
            enabled: n,
            children: (0, w.jsx)(f, {
              ...d,
              ref: a,
              children: e
            })
          })
        })),
        ww = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: i,
          placeholder: a = " ",
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
          } = yw(), b = function(...e) {
            const t = (0, D.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }((0, D.useRef)(null), u), {
            isPressed: _,
            pressProps: E
          } = rv({}), P = (0, ow.mergeProps)({
            className: mw({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isPressed: _,
              isSuccess: "success" === g
            }),
            name: i,
            id: c.id || h,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: a,
            "aria-labelledby": (0, ow.joinStrings)(c.id, f, p, s),
            "aria-describedby": (0, ow.joinStrings)(d, l),
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
          }, E, c), S = e ? vr.Slot : "textarea";
          return (0, w.jsx)(S, {
            ref: b,
            ...P,
            children: t
          })
        })),
        _w = (0, D.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = yw(), s = (0, ow.mergeProps)({
            className: fw({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? vr.Slot : "div";
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Ew = (0, D.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: a
          } = yw(), s = (0, ow.mergeProps)({
            className: hw({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? vr.Slot : "div";
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Pw = (0, D.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = yw(), s = (0, ow.mergeProps)({
            className: "foundry_vq8c3jm",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? vr.Slot : _v;
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Sw = Ev,
        xw = Pv,
        Cw = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? yr.VisuallyHidden : D.Fragment;
          return (0, w.jsx)(r, {
            ...t
          })
        };

      function Tw(...e) {
        const t = (0, D.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      r(21344), r(250);
      var Ow = r(46591);
      let Rw = Math.round(1e10 * Math.random()),
        Iw = 0;
      const Nw = new WeakMap;

      function jw(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = Je(e);
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
        }(e, t) && (!e.parentElement || jw(e.parentElement, e))
      }

      function kw(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function Lw(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? Ye : $e,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = Qe(o),
          a = function(e, t, r, n) {
            return e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !n(e) || !jw(e) || r && !kw(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class Aw {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new Mw({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && kw(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach((e => r && r.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Aw;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new Mw({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class Mw {
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

      function Dw(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = De(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Hw(e) {
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
          t = De(t);
          let a = De(),
            s = {};
          return r && (n = n ? `${a} ${n}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: Dw({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = Be([Boolean(t), Boolean(r), n, o]), l = Be([Boolean(t), Boolean(r), n, o]);
        return a = Ve(a, {
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
      new Aw;
      const Bw = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        zw = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Vw(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return Bw.has(t.script)
        }
        let t = e.split("-")[0];
        return zw.has(t)
      }
      const Fw = Symbol.for("react-aria.i18n.locale");

      function Uw() {
        let e = "undefined" != typeof window && window[Fw] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Vw(e) ? "rtl" : "ltr"
        }
      }
      let qw = Uw(),
        Gw = new Set;

      function Kw() {
        qw = Uw();
        for (let e of Gw) e(qw)
      }
      const Ww = D.createContext(null);

      function Xw() {
        let e = function() {
          let e = ke(),
            [t, r] = (0, D.useState)(qw);
          return (0, D.useEffect)((() => (0 === Gw.size && window.addEventListener("languagechange", Kw), Gw.add(r), () => {
            Gw.delete(r), 0 === Gw.size && window.removeEventListener("languagechange", Kw)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, D.useContext)(Ww) || e
      }

      function Zw(e, t) {
        let {
          name: r,
          isReadOnly: n,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: l
        } = Xw(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: d
        } = t.displayValidation, {
          labelProps: f,
          fieldProps: h,
          descriptionProps: p,
          errorMessageProps: m
        } = Hw({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), v = Ke(e, {
          labelable: !0
        }), {
          focusWithinProps: y
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, i = (0, D.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: s
          } = Nt(), l = (0, D.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, s(), r && r(e), o && o(!1))
          }), [r, o, i, s]), c = ot(l), u = (0, D.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = Qe(e.target),
              r = kt(t);
            if (!i.current.isFocusWithin && r === Lt(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let r = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !jt(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  nt(n, r);
                  let o = rt(n);
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
        }), g = De(r);
        return Nw.set(t, {
          name: g,
          descriptionId: p.id,
          errorMessageId: m.id,
          validationBehavior: s
        }), {
          radioGroupProps: Ve(v, {
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
              let n, o = Lw(e.currentTarget, {
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
          isInvalid: c,
          validationErrors: u,
          validationDetails: d
        }
      }

      function $w(e) {
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

      function Yw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Qw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yw(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = $w(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yw(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Jw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var e_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        t_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qw(Qw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) e_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jw(e.variantClassNames, (e => Jw(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        r_ = t_({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        n_ = t_({
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
      const o_ = (0, D.createContext)(null);

      function i_() {
        const e = (0, D.useContext)(o_);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const a_ = (0, D.forwardRef)((({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: i,
          "aria-labelledby": a,
          "aria-describedby": s,
          "aria-errormessage": l,
          status: c = "neutral",
          ...u
        }, d) => {
          const f = Tw((0, D.useRef)(null), d),
            h = (0, D.useId)(),
            p = (0, D.useId)(),
            m = (0, D.useId)(),
            v = function(e) {
              let t = (0, D.useMemo)((() => e.name || `radio-group-${Rw}-${++Iw}`), [e.name]);
              var r;
              let [n, o] = nb(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i, a] = (0, D.useState)(null), s = Rb({
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
              ...u,
              isInvalid: "invalid" === c
            }),
            {
              radioGroupProps: y
            } = Zw({
              ...u,
              orientation: r,
              "aria-labelledby": (0, Ow.joinStrings)(h, a),
              "aria-describedby": (0, Ow.joinStrings)(p, m, s),
              "aria-errormessage": (0, Ow.joinStrings)(m, l)
            }, v),
            g = (0, Ow.mergeProps)({
              className: "foundry_njguqn0"
            }, y, (0, Ow.omit)(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            b = i ? vr.Slot : "div";
          return (0, w.jsx)(o_.Provider, {
            value: {
              state: v,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: p,
              labelId: h,
              errorId: m,
              status: c,
              ...u
            },
            children: (0, w.jsx)(b, {
              ref: f,
              "data-testid": o,
              ...g,
              children: n
            })
          })
        })),
        s_ = (0, D.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: i,
            orientation: a
          } = i_(), s = (0, Ow.mergeProps)({
            "data-testid": e,
            className: n_({
              size: i,
              orientation: a
            })
          }, n), l = t ? vr.Slot : "div";
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: r
          })
        })),
        l_ = (0, D.forwardRef)((({
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
          } = i_(), c = s && !o, u = (0, Ow.mergeProps)({
            id: i.id || l,
            "data-testid": e,
            className: r_({
              showAsterisk: c
            })
          }, i), d = t ? vr.Slot : "div";
          return (0, w.jsx)(Cw, {
            enabled: n,
            children: (0, w.jsx)(d, {
              ...u,
              ref: a,
              children: r
            })
          })
        })),
        c_ = (0, D.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = i_(), a = (0, Ow.mergeProps)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), s = t ? vr.Slot : "div";
          return (0, w.jsx)(s, {
            ...a,
            ref: o,
            children: r
          })
        })),
        u_ = (0, D.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: i,
            status: a
          } = i_(), s = (0, Ow.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: a
          }, n), l = r ? vr.Slot : _v;
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        d_ = Ev,
        f_ = Pv;
      var h_ = t_({
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
        p_ = t_({
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
        m_ = t_({
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
        v_ = t_({
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
      const y_ = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, w.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        g_ = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, w.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        b_ = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, w.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        w_ = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, Ow.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? vr.Slot : "label";
          return (0, w.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        __ = (0, D.forwardRef)((({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, D.useRef)(null),
            i = Tw(o, n),
            a = (0, D.useId)(),
            {
              state: s,
              appearance: l,
              size: c,
              isReadOnly: d,
              isRequired: f
            } = i_(),
            {
              isPressed: h,
              pressProps: p
            } = rv({}),
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
                  pressProps: c,
                  isPressed: u
                } = qt({
                  isDisabled: s
                }),
                {
                  pressProps: d,
                  isPressed: f
                } = qt({
                  isDisabled: s,
                  onPress() {
                    var e;
                    t.setSelectedValue(n), null === (e = r.current) || void 0 === e || e.focus()
                  }
                }),
                {
                  focusableProps: h
                } = fr(Ve(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                p = Ve(c, h),
                m = Ke(e, {
                  labelable: !0
                }),
                v = -1;
              null != t.selectedValue ? t.selectedValue === n && (v = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (v = 0), s && (v = void 0);
              let {
                name: y,
                descriptionId: g,
                errorMessageId: b,
                validationBehavior: w
              } = Nw.get(t);
              return eb(r, t.selectedValue, t.setSelectedValue), kb({
                validationBehavior: w
              }, t, r), {
                labelProps: Ve(d, {
                  onClick: e => e.preventDefault()
                }),
                inputProps: Ve(m, {
                  ...p,
                  type: "radio",
                  name: y,
                  tabIndex: v,
                  disabled: s,
                  required: t.isRequired && "native" === w,
                  checked: l,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? b : null, g].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: s,
                isSelected: l,
                isPressed: u || f
              }
            }({
              ...r,
              id: a,
              value: t,
              "aria-label": ""
            }, s, o),
            v = m.checked,
            y = m.disabled || s?.isReadOnly,
            g = (0, Ow.mergeProps)(m, {
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
          return (0, w.jsxs)("div", {
            className: v_({
              size: c
            }),
            children: [(0, w.jsx)(Cw, {
              children: (0, w.jsx)("input", {
                type: "radio",
                ...g,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, w.jsx)("div", {
              className: m_({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": h,
              ...p,
              children: (0, w.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, w.jsx)(b, {})
              })
            })]
          })
        })),
        E_ = (0, D.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            size: a,
            state: s
          } = i_(), l = (0, D.useId)(), c = (0, Ow.mergeProps)({
            id: l,
            "data-testid": e,
            className: p_({
              size: a,
              isDisabled: s?.isDisabled
            })
          }, o), u = t ? vr.Slot : "div";
          return (0, w.jsx)(Cw, {
            enabled: n,
            children: (0, w.jsx)(u, {
              ...c,
              ref: i,
              children: r
            })
          })
        })),
        P_ = (0, D.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = i_(), a = (0, Ow.mergeProps)({
            "data-testid": e,
            className: h_({
              isDisabled: i
            })
          }, n), s = t ? vr.Slot : "span";
          return (0, w.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        }));

      function S_(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function x_(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return S_(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? S_(e, t) : void 0
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

      function C_(e, t, r) {
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

      function T_(e) {
        return T_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, T_(e)
      }

      function O_() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (O_ = function() {
          return !!e
        })()
      }

      function R_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function I_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? R_(Object(r), !0).forEach((function(t) {
            C_(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R_(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function N_(e, t) {
        return N_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, N_(e, t)
      }

      function j_(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = n,
          s = "",
          l = x_(e);
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

      function k_(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          c = x_(n);
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

      function L_(e, t) {
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

      function A_(e) {
        return e.length > 0 ? C_({}, e, /./) : {}
      }

      function M_(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(n, o), c = i.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(a, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && s && (u += c[d])
        }
        return u
      }

      function D_(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? A_(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return k_(j_(e, {
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
      var H_ = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function B_(e) {
        return H_.includes(e) ? "\\".concat(e) : e
      }

      function z_(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function V_(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function F_(e, t, r) {
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

      function U_(e) {
        return U_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, U_(e)
      }

      function q_() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (q_ = function() {
          return !!e
        })()
      }

      function G_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function K_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? G_(Object(r), !0).forEach((function(t) {
            F_(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G_(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function W_(e, t) {
        return W_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, W_(e, t)
      }

      function X_(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return X_ = function(e) {
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
              if (q_()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && W_(o, r.prototype), o
            }(e, arguments, U_(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), W_(r, e)
        }, X_(e)
      }
      var Z_, $_ = function(e) {
          function t(e) {
            var r;
            return z_(this, t), (r = function(e, t, r) {
              return t = U_(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, q_() ? Reflect.construct(t, r || [], U_(e).constructor) : t.apply(e, r))
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
            }), t && W_(e, t)
          }(t, e), V_(t)
        }(X_(Error)),
        Y_ = ["options"],
        Q_ = ["text", "email", "tel", "search", "url"],
        J_ = V_((function e(t) {
          var r = t.init,
            n = t.tracking;
          z_(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Q_.includes(e.type)) {
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
              Object.defineProperty(e, "value", K_(K_({}, v), {}, {
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
                      f = m.selectionEnd;
                    if ("insert" === l) u = i.slice(m.selectionStart, a);
                    else {
                      var v = c.length - i.length;
                      d = a, f = a + v
                    }
                    h.value !== c ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var y = h.options,
                      g = n({
                        inputType: l,
                        previousValue: c,
                        previousOptions: y,
                        value: i,
                        addedValue: u,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: a,
                        selectionEnd: s
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
                          var i = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                      }(g, Y_);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), h.value = w.value, h.options = b, m.selectionStart = w.selectionStart, m.selectionEnd = w.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, c)
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
      Z_ = J_, Object.defineProperty(Z_.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var eE, tE = ["track", "modify"];

      function rE(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? A_(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var nE = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = T_(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, O_() ? Reflect.construct(t, r || [], T_(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = rE(r),
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
                l = rE(r),
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
                }(l, tE),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = I_(I_({}, "insert" === t ? {
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
                y = null == c ? void 0 : c(v);
              if (!1 === y) throw new $_("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? A_(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = M_(n, I_({
                  end: a
                }, o)),
                w = M_(n, I_({
                  start: s
                }, o)),
                _ = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                E = f.replace(_, "");
              if (b && (b = j_(b, {
                  replacementChars: E,
                  replacement: h,
                  separate: m
                }), E = E.slice(b.length)), i && (i = j_(i, {
                  replacementChars: E,
                  replacement: h,
                  separate: !1
                }), E = E.slice(i.length)), "insert" === t && "" === i) throw new $_("The character does not match the key value of the `replacement` object.");
              if (m) {
                var P = f.slice(a, s).replace(_, ""),
                  S = P.length - i.length;
                S < 0 ? w = w.slice(-S) : S > 0 && (w = P.slice(-S) + w)
              }
              w && (w = j_(w, {
                replacementChars: E,
                replacement: h,
                separate: m
              }));
              var x = k_(b + i + w, {
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
                    c = e.separate,
                    u = L_(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter((function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    })),
                    d = null === (t = u[s.length + a.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = u[s.length - 1]) || void 0 === r ? void 0 : r.index,
                    h = null === (n = u[s.length + a.length]) || void 0 === n ? void 0 : n.index;
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
            return D_(e, rE(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? A_(n) : n;
              return L_(D_(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, rE(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? A_(n) : n,
                i = M_(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return j_(i, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, rE(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? A_(n) : n, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(a ? "(?!".concat(B_(c), ")") : "", "(").concat(o[c].source, ")") : B_(c), l === r.length - 1 && (i && (s += ")?".repeat(r.length)), s += "$")
              }
              return s
            }(e, rE(r))
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
            }), t && N_(e, t)
          }(e, J_),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();
      eE = nE, Object.defineProperty(eE.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      }), r(60893), r(42131);
      var oE = r(80150);
      const iE = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? yr.VisuallyHidden : D.Fragment;
        return (0, w.jsx)(r, {
          ...t
        })
      };

      function aE(e) {
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

      function sE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function lE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sE(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = aE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sE(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function cE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var uE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lE(lE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) uE(c, n, e.defaultVariants) && (r += " " + u);
            return r
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
        fE = dE({
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
        hE = dE({
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
        pE = dE({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        mE = dE({
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
        vE = dE({
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
        yE = dE({
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
        }),
        gE = r(13201),
        bE = r.t(gE, 2);
      const wE = (0, D.createContext)(null);

      function _E() {
        const e = (0, D.useContext)(wE);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const EE = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: a = "neutral",
          ...s
        }, l) => {
          const [c, u] = (0, D.useState)("text"), d = (0, D.useId)(), f = (0, D.useId)(), h = (0, D.useId)(), {
            isPressed: p,
            pressProps: m
          } = rv({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !0
          }), v = {
            ...m,
            onKeyDown: () => {}
          }, y = (0, oE.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, s), g = e ? vr.Slot : "div";
          return (0, w.jsx)(wE.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: a,
              labelId: d,
              inputId: f,
              descriptionId: h,
              isPressed: p,
              pressProps: v,
              type: c,
              setType: u,
              ...s
            },
            children: (0, w.jsx)(g, {
              ref: l,
              ...y,
              children: t
            })
          })
        })),
        PE = (0, D.forwardRef)((({
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
            inputId: c,
            labelId: u
          } = _E(), d = l && !o, f = (0, oE.mergeProps)({
            id: i.id || u,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: yE({
              showAsterisk: d,
              isDisabled: s
            })
          }, i), h = t ? vr.Slot : "label";
          return (0, w.jsx)(iE, {
            enabled: n,
            children: (0, w.jsx)(h, {
              ref: a,
              ...f,
              children: r
            })
          })
        })),
        SE = (0, D.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = _E(), a = (0, oE.mergeProps)({
            "data-testid": e,
            className: pE({
              isDisabled: i
            })
          }, n), s = t ? vr.Slot : "span";
          return (0, w.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        })),
        xE = (0, D.forwardRef)((({
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
            status: c
          } = _E(), u = (0, oE.mergeProps)({
            "data-testid": e,
            "data-pressed": s,
            className: (0, ze.clsx)(fE({
              isDisabled: i,
              isReadOnly: a,
              isInvalid: "invalid" === c,
              isPressed: s,
              isSuccess: "success" === c
            }), "foundry_8oytzo1")
          }, l, n), d = t ? vr.Slot : "div";
          return (0, w.jsx)(d, {
            ref: o,
            ...u,
            children: r
          })
        })),
        CE = (0, D.forwardRef)((({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: i,
          placeholder: a = " ",
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
            type: _
          } = _E();
          (0, D.useEffect)((() => b(c)), []);
          const E = "invalid" === m,
            P = (0, oE.mergeProps)({
              disabled: f,
              readOnly: h,
              required: p,
              id: y,
              type: _,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, oE.joinStrings)(v, s),
              "aria-describedby": (0, oE.joinStrings)(g, l),
              "data-testid": e,
              className: (0, ze.clsx)(vE({
                isDisabled: f,
                isReadOnly: h
              }), "foundry_8oytzo2"),
              ...E && {
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
            S = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                i = e.track,
                a = e.modify,
                s = (0, D.useRef)(null),
                l = (0, D.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: i,
                  modify: a
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = i, l.current.modify = a, (0, D.useMemo)((function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(s, new nE(l.current))
              }), [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: i
            }),
            x = function(...e) {
              const t = (0, D.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach((e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                }))
              }), t.current
            }(r && n ? S : null, d),
            C = t ? vr.Slot : "input";
          return (0, w.jsx)(C, {
            ref: x,
            ...P
          })
        })),
        TE = (0, D.forwardRef)((({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = _E(), s = (0, oE.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, ze.clsx)(mE({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), l = t ? vr.Slot : bE[e];
          return (0, w.jsx)(l, {
            ref: i,
            ...s
          })
        })),
        OE = (0, D.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = _E(), n = (0, oE.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzo10"
          }, e);
          return (0, w.jsx)(nn, {
            ref: t,
            ...n
          })
        })),
        RE = (0, D.forwardRef)((({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: i
          } = _E(), a = "password" === o, s = a ? e : t, l = (0, oE.mergeProps)({
            label: s,
            icon: a ? "Eye" : "EyeOff",
            onPress: () => {
              i(a ? "text" : "password")
            }
          }, r);
          return (0, w.jsxs)(rp, {
            children: [(0, w.jsx)(np, {
              children: (0, w.jsx)(OE, {
                ref: n,
                ...l
              })
            }), (0, w.jsxs)(op, {
              side: "bottom",
              align: "end",
              children: [s, (0, w.jsx)(ip, {})]
            })]
          })
        })),
        IE = (0, D.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = _E(), s = (0, oE.mergeProps)({
            className: hE({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? vr.Slot : "div";
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        NE = (0, D.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = _E(), s = (0, oE.mergeProps)({
            className: "foundry_8oytzo16",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? vr.Slot : _v;
          return (0, w.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        jE = Ev,
        kE = Pv;
      var LE = r(29316);

      function AE(e, t) {
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
        } = fr(e, t), {
          pressProps: d,
          isPressed: f
        } = qt({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), h = Ke(l, {
          labelable: !0
        }), p = Ve(u, d), m = Mt();
        return {
          isPressed: f,
          linkProps: Ve(h, Ht(e), {
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
      r(17695), r(96277);
      var ME = r(49252);

      function DE(e) {
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

      function HE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function BE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? HE(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = DE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : HE(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function zE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var VE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        FE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = BE(BE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) VE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zE(e.variantClassNames, (e => zE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        UE = FE({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qE = FE({
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
        GE = FE({
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
      const KE = (0, D.createContext)(null);

      function WE() {
        const e = (0, D.useContext)(KE);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const XE = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const a = e ? vr.Slot : "div",
            s = (0, LE.mergeProps)({
              className: GE({
                status: r,
                background: n
              })
            }, o);
          return (0, w.jsx)(KE.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, w.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s
            })
          })
        })),
        ZE = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? vr.Slot : "div",
            i = (0, LE.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, w.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        $E = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? vr.Slot : "div",
            i = (0, LE.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, w.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        YE = {
          danger: ME.CircleX,
          information: ME.Info,
          success: ME.CircleCheck,
          warning: ME.TriangleAlert
        },
        QE = (0, D.forwardRef)((({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = WE(), i = e ? vr.Slot : YE[o], a = (0, LE.mergeProps)({
            className: qE({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, w.jsx)(i, {
            label: "",
            ref: n,
            ...a
          })
        })),
        JE = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? vr.Slot : "div",
            i = (0, LE.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, w.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        eP = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? vr.Slot : "div",
            i = (0, LE.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, w.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        tP = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, D.useRef)(null),
            a = function(...e) {
              const t = (0, D.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach((e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                }))
              }), t.current
            }(i, o),
            s = e ? vr.Slot : "a",
            {
              linkProps: l,
              isPressed: c
            } = AE(n, i),
            u = (0, LE.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, w.jsx)(s, {
            "data-pressed": c,
            "data-testid": r,
            ref: a,
            ...u,
            children: t
          })
        })),
        rP = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? vr.Slot : "div",
            a = (0, LE.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        })),
        nP = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? vr.Slot : "div";
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, ze.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        })),
        oP = (0, D.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n
          } = WE(), o = (0, LE.mergeProps)({
            className: UE({
              hasBackground: "none" !== n
            })
          }, t);
          return (0, w.jsx)(nn, {
            ref: r,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...o
          })
        }));

      function iP(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function aP(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every((r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : iP(n) && iP(o) ? aP(n, o) : n === o
        })))
      }

      function sP(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function lP(e) {
        return "number" == typeof e
      }

      function cP(e) {
        return "string" == typeof e
      }

      function uP(e) {
        return "boolean" == typeof e
      }

      function dP(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function fP(e) {
        return Math.abs(e)
      }

      function hP(e) {
        return Math.sign(e)
      }

      function pP(e, t) {
        return fP(e - t)
      }

      function mP(e) {
        return wP(e).map(Number)
      }

      function vP(e) {
        return e[yP(e)]
      }

      function yP(e) {
        return Math.max(0, e.length - 1)
      }

      function gP(e, t) {
        return t === yP(e)
      }

      function bP(e, t = 0) {
        return Array.from(Array(e), ((e, r) => t + r))
      }

      function wP(e) {
        return Object.keys(e)
      }

      function _P(e, t) {
        return [e, t].reduce(((e, t) => (wP(t).forEach((r => {
          const n = e[r],
            o = t[r],
            i = dP(n) && dP(o);
          e[r] = i ? _P(n, o) : o
        })), e)), {})
      }

      function EP(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function PP() {
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

      function SP(e = 0, t = 0) {
        const r = fP(e - t);

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

      function xP(e, t, r) {
        const {
          constrain: n
        } = SP(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return r ? fP((o + e) % o) : n(e)
        }

        function s() {
          return i
        }

        function l() {
          return xP(e, s(), r)
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

      function CP(e, t, r, n, o, i, a, s, l, c, u, d, f, h, p, m, v, y, g) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], E = {
          passive: !1
        }, P = PP(), S = PP(), x = SP(50, 225).constrain(h.measure(20)), C = {
          mouse: 300,
          touch: 400
        }, T = {
          mouse: 500,
          touch: 600
        }, O = p ? 43 : 25;
        let R = !1,
          I = 0,
          N = 0,
          j = !1,
          k = !1,
          L = !1,
          A = !1;

        function M(e) {
          if (!EP(e, n) && e.touches.length >= 2) return D(e);
          const t = i.readPoint(e),
            r = i.readPoint(e, b),
            a = pP(t, I),
            l = pP(r, N);
          if (!k && !A) {
            if (!e.cancelable) return D(e);
            if (k = a > l, !k) return D(e)
          }
          const u = i.pointerMove(e);
          a > m && (L = !0), c.useFriction(.3).useDuration(.75), s.start(), o.add(w(u)), e.preventDefault()
        }

        function D(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            r = i.pointerUp(e) * (p ? T : C)[A ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * hP(e)),
                n = u.byDistance(e, !p).distance;
              return p || fP(e) < x ? n : v && t ? .5 * n : u.byIndex(r.get(), 0).distance
            }(w(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (fP(e) <= fP(t)) return 0;
              const r = pP(fP(e), fP(t));
              return fP(r / e)
            }(r, n),
            a = O - 10 * o,
            s = y + o / 50;
          k = !1, j = !1, S.clear(), c.useDuration(a).useFriction(s), l.distance(n, !p), A = !1, f.emit("pointerUp")
        }

        function H(e) {
          L && (e.stopPropagation(), e.preventDefault(), L = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function s(s) {
              (uP(g) || g(e, s)) && function(e) {
                const s = EP(e, n);
                A = s, L = p && s && !e.buttons && R, R = pP(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (j = !0, i.pointerDown(e), c.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = A ? r : t;
                  S.add(e, "touchmove", M, E).add(e, "touchend", D).add(e, "mousemove", M, E).add(e, "mouseup", D)
                }(), I = i.readPoint(e), N = i.readPoint(e, b), f.emit("pointerDown"))
              }(s)
            }
            const l = t;
            P.add(l, "dragstart", (e => e.preventDefault()), E).add(l, "touchmove", (() => {}), E).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", D).add(l, "contextmenu", D).add(l, "click", H, !0)
          },
          destroy: function() {
            P.clear(), S.clear()
          },
          pointerDown: function() {
            return j
          }
        }
      }

      function TP(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function i(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (EP(r, t) ? r : r.touches[0])[o]
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
            return a && !s && fP(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function OP(e, t, r, n, o, i, a) {
        const s = [e].concat(n);
        let l, c, u = [],
          d = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (c = f(e), u = n.map(f), l = new ResizeObserver((r => {
              (uP(i) || i(o, r)) && function(r) {
                for (const i of r) {
                  if (d) return;
                  const r = i.target === e,
                    a = n.indexOf(i.target),
                    s = r ? c : u[a];
                  if (fP(f(r ? e : n[a]) - s) >= .5) {
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

      function RP(e, t, r, n, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = SP(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = fP(e[l] - t.get()),
              d = r.get() - t.get(),
              f = s.constrain(u / a);
            r.subtract(d * f), !o && fP(d) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function IP(e, t, r, n) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = SP(o, i),
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

      function NP(e) {
        let t = e;

        function r(e) {
          return lP(e) ? e : e.get()
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

      function jP(e, t) {
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

      function kP(e, t, r, n, o, i, a, s, l) {
        const c = mP(o),
          u = mP(o).reverse(),
          d = function() {
            const e = a[0];
            return p(h(u, e), r, !1)
          }().concat(function() {
            const e = t - a[0] - 1;
            return p(h(c, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce(((e, t) => e - o[t]), t)
        }

        function h(e, t) {
          return e.reduce(((e, r) => f(e, t) > 0 ? e.concat([r]) : e), [])
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
              slideLocation: NP(-1),
              translate: jP(e, l[t]),
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

      function LP(e, t, r) {
        let n, o = !1;
        return {
          init: function(i) {
            r && (n = new MutationObserver((e => {
              o || (uP(r) || r(i, e)) && function(e) {
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

      function AP(e, t, r, n, o, i, a) {
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
          watchSlides: w,
          watchDrag: _,
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
        }, S = P.measure(t), x = r.map(P.measure), C = function(e, t) {
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
        }(l, c), T = C.measureSize(S), O = function(e) {
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
              return cP(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(s, T), I = !d && !!g, N = d || !!g, {
          slideSizes: j,
          slideSizesWithGaps: k,
          startGap: L,
          endGap: A
        } = function(e, t, r, n, o, i) {
          const {
            measureSize: a,
            startEdge: s,
            endEdge: l
          } = e, c = r[0] && o, u = function() {
            if (!c) return 0;
            const e = r[0];
            return fP(t[s] - e[s])
          }(), d = function() {
            if (!c) return 0;
            const e = i.getComputedStyle(vP(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(a), h = r.map(((e, t, r) => {
            const n = !t,
              o = gP(r, t);
            return n ? f[t] + u : o ? f[t] + d : r[t + 1][s] - e[s]
          })).map(fP);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: u,
            endGap: d
          }
        }(C, S, x, r, N, o), M = function(e, t, r, n, o, i, a, s, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, f = lP(r), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return mP(e).filter((e => e % t == 0)).map((r => e.slice(r, r + t)))
              }(e, r) : function(e) {
                return e.length ? mP(e).reduce(((r, f, h) => {
                  const p = vP(r) || 0,
                    m = 0 === p,
                    v = f === yP(e),
                    y = o[c] - i[p][c],
                    g = o[c] - i[f][u],
                    b = !n && m ? d(a) : 0,
                    w = fP(g - (!n && v ? d(s) : 0) - (y + b));
                  return h && w > t + l && r.push(f), v && r.push(e.length), r
                }), []).map(((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return h
        }(C, T, v, d, S, x, L, A, 2), {
          snaps: D,
          snapsAligned: H
        } = function(e, t, r, n, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(n).map((e => vP(e)[a] - e[0][i])).map(fP).map(t.measure), c = n.map((e => r[i] - e[i])).map((e => -fP(e))), u = s(c).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: c,
            snapsAligned: u
          }
        }(C, R, S, x, M), B = -vP(D) + vP(k), {
          snapsContained: z,
          scrollContainLimit: V
        } = function(e, t, r, n) {
          const o = SP(-t + e, 0),
            i = r.map(((e, t) => {
              const {
                min: n,
                max: i
              } = o, a = o.constrain(e), l = !t, c = gP(r, t);
              return l ? i : c || s(n, a) ? n : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = vP(i);
              return SP(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return pP(e, t) <= 1
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
        }(T, B, H, g), F = I ? z : H, {
          limit: U
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: SP(r ? n - e : vP(t), n)
          }
        }(B, F, d), q = xP(yP(F), u, d), G = q.clone(), K = mP(r), W = function(e, t, r, n) {
          const o = PP(),
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
        }, f) => {
          const h = e.settled(),
            p = !u.shouldConstrain(),
            m = d ? h : h && p,
            v = m && !s.pointerDown();
          v && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), d && (i.loop(e.direction()), a.loop()), t.to(n.get()), v && c.emit("settle"), m || c.emit("scroll")
        })(se, e))), X = F[q.get()], Z = NP(X), $ = NP(X), Y = NP(X), Q = NP(X), J = function(e, t, r, n, o) {
          let i = 0,
            a = 0,
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
              return s ? (r.set(e), i += t / s, i *= l, c += i, e.add(i), o = c - u) : (i = 0, r.set(n), e.set(n), o = t), a = hP(o), u = c, h
            },
            settled: function() {
              return fP(n.get() - t.get()) < .001
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
            reachedAny: i,
            removeOffset: a,
            constrain: s
          } = n;

          function l(e) {
            return e.concat().sort(((e, t) => fP(e) - fP(t)))[0]
          }

          function c(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const i = o.filter((e => hP(e) === n));
            return i.length ? l(i) : vP(o) - r
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
                    }))).sort(((e, t) => fP(e.diff) - fP(t.diff))),
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
        }(W, q, G, J, ee, Q, a), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(U), ne = PP(), oe = function(e, t, r, n) {
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
                return wP(o).reduce(((t, r) => {
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
                  o = gP(r, t);
                return n ? bP(vP(r[0]) + 1) : o ? bP(yP(i) - vP(r)[0] + 1, vP(r)[0]) : e
              }))
            }()
          }
        }(I, g, F, V, M, K), ae = function(e, t, r, n, o, i, a, s) {
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
                  (uP(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = r.findIndex((e => e.includes(t)));
                    lP(i) && (o.useDuration(0), n.index(i, 0), a.emit("slideFocus"))
                  }(u)
                }), l)
              })))
            }
          }
        }(e, r, ie, te, J, ne, a, E), se = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: a,
          containerRect: S,
          slideRects: x,
          animation: W,
          axis: C,
          dragHandler: CP(C, e, n, o, Q, TP(C, o), Z, W, te, J, ee, q, a, O, h, p, y, .68, _),
          eventStore: ne,
          percentOfView: O,
          index: q,
          indexPrevious: G,
          limit: U,
          location: Z,
          offsetLocation: Y,
          previousLocation: $,
          options: i,
          resizeHandler: OP(t, a, o, r, C, b, P),
          scrollBody: J,
          scrollBounds: RP(U, Y, Q, J, O),
          scrollLooper: IP(B, U, Y, [Z, Y, $, Q]),
          scrollProgress: re,
          scrollSnapList: F.map(re.get),
          scrollSnaps: F,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: kP(C, T, B, j, k, D, F, Y, r),
          slideFocus: ae,
          slidesHandler: LP(t, a, w),
          slidesInView: oe,
          slideIndexes: K,
          slideRegistry: ie,
          slidesToScroll: M,
          target: Q,
          translate: jP(C, t)
        };
        return se
      }
      const MP = {
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

      function DP(e) {
        function t(e, t) {
          return _P(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = wP(n).filter((t => e.matchMedia(t).matches)).map((e => n[e])).reduce(((e, r) => t(e, r)), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => wP(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return r
      }

      function HP(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          i = DP(o),
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
          s = PP(),
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
            on: f,
            off: h,
            emit: p
          } = l,
          m = C;
        let v, y, g, b, w = !1,
          _ = c(MP, HP.globalOptions),
          E = c(_),
          P = [];

        function S(t) {
          const r = AP(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? S(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function x(t, r) {
          w || (_ = c(_, t), E = u(_), P = r || P, function() {
            const {
              container: t,
              slides: r
            } = E, n = cP(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = cP(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = S(E), d([_, ...P.map((({
            options: e
          }) => e))]).forEach((e => s.add(e, "change", C))), E.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(I), v.eventHandler.init(I), v.resizeHandler.init(I), v.slidesHandler.init(I), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(I), y = a.init(I, P)))
        }

        function C(e, t) {
          const r = R();
          T(), x(c({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function T() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), a.destroy(), s.clear()
        }

        function O(e, t, r) {
          E.active && !w && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : E.duration), v.scrollTo.index(e, r || 0))
        }

        function R() {
          return v.index.get()
        }
        const I = {
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
            w || (w = !0, s.clear(), T(), l.emit("destroy"), l.clear())
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
        return x(t, r), setTimeout((() => l.emit("init")), 0), I
      }

      function BP(e = {}, t = []) {
        const r = (0, D.useRef)(e),
          n = (0, D.useRef)(t),
          [o, i] = (0, D.useState)(),
          [a, s] = (0, D.useState)(),
          l = (0, D.useCallback)((() => {
            o && o.reInit(r.current, n.current)
          }), [o]);
        return (0, D.useEffect)((() => {
          aP(r.current, e) || (r.current = e, l())
        }), [e, l]), (0, D.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = sP(e),
              n = sP(t);
            return r.every(((e, t) => aP(e, n[t])))
          })(n.current, t) || (n.current = t, l())
        }), [t, l]), (0, D.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            HP.globalOptions = BP.globalOptions;
            const e = HP(a, r.current, n.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [s, o]
      }

      function zP(e = {}) {
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
      HP.globalOptions = void 0, BP.globalOptions = void 0, zP.globalOptions = void 0;
      const VP = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function FP(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function UP(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function qP(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function GP(e = {}) {
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
          ("pointerDown" === t ? qP : UP)(n, u.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map((e => o[e])),
            i = e.map((e => o[e]));
          return n.forEach((e => UP(e, r))), i.forEach((e => qP(e, r))), e
        }

        function h() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          i = f(t, i, u.snapped)
        }

        function p() {
          const e = r.slidesInView();
          a = f(e, a, u.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(i, a) {
            r = i;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = a, v = f(VP, GP.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, w = !!g;
            t.loop && b && (u.loop = FP(t.loop), qP(n, u.loop)), t.draggable && w && (u.draggable = FP(t.draggable), qP(n, u.draggable)), t.dragging && (u.dragging = FP(t.dragging), l.forEach((e => r.on(e, d)))), t.snapped && (u.snapped = FP(t.snapped), s.forEach((e => r.on(e, h))), h()), t.inView && (u.inView = FP(t.inView), c.forEach((e => r.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => r.off(e, d))), s.forEach((e => r.off(e, h))), c.forEach((e => r.off(e, p))), UP(n, u.loop), UP(n, u.draggable), UP(n, u.dragging), f([], i, u.snapped), f([], a, u.inView), Object.keys(u).forEach((e => {
              u[e] = []
            }))
          }
        };
        return m
      }
      GP.globalOptions = void 0;
      var KP = r(77680);

      function WP(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => KP.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, D.useState)((() => r ? n(e) : t));

        function a() {
          i(n(e))
        }
        return (0, D.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
            t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
          }
        }), [e]), o
      }

      function XP(...e) {
        const t = (0, D.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      r(33834);
      var ZP = r(94771),
        $P = r(84636),
        YP = r.t($P, 2);

      function QP(e) {
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
            for (var [c, u] of e.compoundVariants) rS(c, n, e.defaultVariants) && (r += " " + u);
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
      const iS = (0, D.createContext)(null);

      function aS() {
        const e = (0, D.useContext)(iS);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const sS = (0, D.forwardRef)((({
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
              const t = function(e = !0) {
                  const t = WP("screen and (pointer: coarse) and (hover: none)");
                  return !!e && t
                }(),
                r = WP("(prefers-reduced-motion: reduce)", {
                  defaultValue: !1,
                  initializeWithValue: !0
                }),
                [n, o] = (0, D.useState)([]),
                i = n.length,
                [a, s] = (0, D.useState)(0),
                [l, c] = BP({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [zP(), GP()]),
                u = (0, D.useRef)(0),
                d = (0, D.useRef)(!1),
                f = n[a],
                h = (0, D.useCallback)((e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach(((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  })), s(t), d.current = !0
                }), [c]),
                p = (0, D.useCallback)((e => {
                  u.current = .94 * e.scrollSnapList().length
                }), []),
                m = (0, D.useCallback)(((e, t) => {
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
              return (0, D.useEffect)((() => {
                c && (p(c), m(c), c.on("reInit", p).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }), [c, m]), (0, D.useEffect)((() => {
                c && (h(c), c.on("select", h).on("reInit", h))
              }), [c, h]), {
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
              currentAlert: u,
              isInitialized: d,
              setAlerts: f,
              numAlerts: h
            } = c;
          (0, D.useEffect)((() => {
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
            m = (0, ZP.mergeProps)({
              className: oS(u)
            }, p, s),
            v = e ? vr.Slot : "div";
          return (0, w.jsx)(iS.Provider, {
            value: c,
            children: (0, w.jsx)(v, {
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
        cS = (0, D.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = aS();
          if (!e && !n || !n?.status) return null;
          const o = e || lS[n.status],
            i = YP[o],
            a = (0, ZP.mergeProps)({
              className: "foundry_qmpv6yn"
            }, t);
          return (0, w.jsx)(i, {
            label: "",
            ref: r,
            size: "LG",
            "data-icon": !0,
            ...a
          })
        })),
        uS = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? vr.Slot : "div",
            i = (0, ZP.mergeProps)({
              className: "foundry_qmpv6yo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, w.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        dS = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, a) => {
          const s = e ? vr.Slot : "div",
            l = (0, ZP.mergeProps)({
              className: "foundry_qmpv6yk"
            }, i);
          return (0, w.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...l
          })
        })),
        fS = (0, D.forwardRef)((({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = aS(), a = (0, ZP.mergeProps)({
            className: "foundry_qmpv6yl"
          }, r), s = XP(i, n), l = D.Children.map(t, (e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          }));
          return (0, D.useEffect)((() => {
            l && o(l)
          }), []), (0, w.jsx)("div", {
            ref: s,
            "data-testid": e,
            ...a,
            children: (0, w.jsx)("div", {
              className: "foundry_qmpv6ym",
              children: t
            })
          })
        })),
        hS = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, D.useRef)(null),
            a = XP(i, o),
            s = e ? vr.Slot : "a",
            {
              linkProps: l,
              isPressed: c
            } = AE(n, i),
            u = (0, ZP.mergeProps)({
              className: "foundry_qmpv6yp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, w.jsx)(s, {
            "data-pressed": c,
            "data-testid": r,
            ref: a,
            ...l,
            ...u,
            children: t
          })
        })),
        pS = (0, D.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const n = (0, ZP.mergeProps)({
            className: "foundry_qmpv6yq"
          }, t);
          return (0, w.jsx)(nn, {
            ref: r,
            "data-close-btn": !0,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...n
          })
        })),
        mS = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? vr.Slot : "div",
            a = (0, ZP.mergeProps)({
              className: "foundry_qmpv6ys"
            }, n);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...a,
            children: r
          })
        })),
        vS = (0, D.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = aS(), i = (0, ZP.mergeProps)({
            className: nS
          }, t);
          return (0, w.jsx)(nn, {
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
        yS = (0, D.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = aS(), i = (0, ZP.mergeProps)({
            className: nS
          }, t);
          return (0, w.jsx)(nn, {
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
        gS = (0, D.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = aS(), i = (0, ZP.mergeProps)({
            className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh"
          }, t);
          return (0, w.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...i,
            children: [n + 1, "/", o]
          })
        }));
      var bS = r(69482),
        wS = r(56045),
        _S = r.t(wS, 2);

      function ES(e) {
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

      function PS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function SS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? PS(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ES(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : PS(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function xS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var CS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        TS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = SS(SS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) CS(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xS(e.variantClassNames, (e => xS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        OS = TS({
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
        RS = TS({
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
        IS = TS({
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
      const NS = (0, D.createContext)(null);

      function jS() {
        const e = (0, D.useContext)(NS);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const kS = (0, D.forwardRef)((({
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
          const u = {
              size: n,
              background: o,
              color: i,
              hasBorder: a,
              isDisabled: s
            },
            d = (0, bS.mergeProps)({
              className: RS(u)
            }, l),
            f = e ? vr.Slot : "div";
          return (0, w.jsx)(NS.Provider, {
            value: u,
            children: (0, w.jsx)(f, {
              ref: c,
              "data-testid": r,
              "aria-disabled": s,
              ...d,
              children: t
            })
          })
        })),
        LS = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = jS(), a = e ? vr.Slot : "div", s = (0, bS.mergeProps)({
            className: IS({
              size: i
            })
          }, n);
          return (0, w.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        })),
        AS = (0, D.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = _S[e],
            o = (0, bS.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, w.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        })),
        MS = (0, D.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = jS(), i = (0, bS.mergeProps)({
            className: OS({
              background: n
            })
          }, t);
          return (0, w.jsx)(nn, {
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
      var DS = r(19198),
        HS = r(55685);

      function BS(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }
      "undefined" == typeof window || !window.document || window.document.createElement;
      var zS = r(34325);
      Map;
      var VS, FS = r(12255),
        US = r(94040),
        qS = "dismissableLayer.update",
        GS = D.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        KS = D.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: a,
            onDismiss: s,
            ...l
          } = e, c = D.useContext(GS), [u, d] = D.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, h] = D.useState({}), p = (0, dh.s)(t, (e => d(e))), m = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = u ? m.indexOf(u) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = g >= y, E = function(e, t = globalThis?.document) {
            const r = (0, Cv.c)(e),
              n = D.useRef(!1),
              o = D.useRef((() => {}));
            return D.useEffect((() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      ZS("dismissableLayer.pointerDownOutside", r, i, {
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
              r = [...c.branches].some((e => e.contains(t)));
            _ && !r && (o?.(e), a?.(e), e.defaultPrevented || s?.())
          }), f), P = function(e, t = globalThis?.document) {
            const r = (0, Cv.c)(e),
              n = D.useRef(!1);
            return D.useEffect((() => {
              const e = e => {
                e.target && !n.current && ZS("dismissableLayer.focusOutside", r, {
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
            [...c.branches].some((e => e.contains(t))) || (i?.(e), a?.(e), e.defaultPrevented || s?.())
          }), f);
          return (0, US.U)((e => {
            g === c.layers.size - 1 && (n?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
          }), f), D.useEffect((() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (VS = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), XS(), () => {
              r && 1 === c.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = VS)
            }
          }), [u, f, r, c]), D.useEffect((() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), XS())
          }), [u, c]), D.useEffect((() => {
            const e = () => h({});
            return document.addEventListener(qS, e), () => document.removeEventListener(qS, e)
          }), []), (0, w.jsx)(FS.sG.div, {
            ...l,
            ref: p,
            style: {
              pointerEvents: b ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: BS(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: BS(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: BS(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        }));
      KS.displayName = "DismissableLayer";
      var WS = D.forwardRef(((e, t) => {
        const r = D.useContext(GS),
          n = D.useRef(null),
          o = (0, dh.s)(t, n);
        return D.useEffect((() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }), [r.branches]), (0, w.jsx)(FS.sG.div, {
          ...e,
          ref: o
        })
      }));

      function XS() {
        const e = new CustomEvent(qS);
        document.dispatchEvent(e)
      }

      function ZS(e, t, r, {
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
        }), n ? (0, FS.hO)(o, i) : o.dispatchEvent(i)
      }
      WS.displayName = "DismissableLayerBranch";
      var $S = KS,
        YS = WS,
        QS = r(43251),
        JS = e => {
          const {
            present: t,
            children: r
          } = e, n = function(e) {
            const [t, r] = D.useState(), n = D.useRef(null), o = D.useRef(e), i = D.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = function(e, t) {
              return D.useReducer(((e, r) => t[e][r] ?? e), e)
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
            return D.useEffect((() => {
              const e = ex(n.current);
              i.current = "mounted" === s ? e : "none"
            }), [s]), (0, Tv.N)((() => {
              const t = n.current,
                r = o.current;
              if (r !== e) {
                const n = i.current,
                  a = ex(t);
                l(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : r && n !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
              }
            }), [e, l]), (0, Tv.N)((() => {
              if (t) {
                let e;
                const r = t.ownerDocument.defaultView ?? window,
                  a = i => {
                    const a = ex(n.current).includes(CSS.escape(i.animationName));
                    if (i.target === t && a && (l("ANIMATION_END"), !o.current)) {
                      const n = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = r.setTimeout((() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                      }))
                    }
                  },
                  s = e => {
                    e.target === t && (i.current = ex(n.current))
                  };
                return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
                  r.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
                }
              }
              l("ANIMATION_END")
            }), [t, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(s),
              ref: D.useCallback((e => {
                n.current = e ? getComputedStyle(e) : null, r(e)
              }), [])
            }
          }(t), o = "function" == typeof r ? r({
            present: n.isPresent
          }) : D.Children.only(r), i = (0, dh.s)(n.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = t && "isReactWarning" in t && t.isReactWarning;
            return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
          }(o));
          return "function" == typeof r || n.isPresent ? D.cloneElement(o, {
            ref: i
          }) : null
        };

      function ex(e) {
        return e?.animationName || "none"
      }
      JS.displayName = "Presence";
      var tx = r(48272),
        rx = "ToastProvider",
        [nx, ox, ix] = function(e) {
          const t = e + "CollectionProvider",
            [r, n] = (0, fh.A)(t),
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
              } = e, n = D.useRef(null), i = D.useRef(new Map).current;
              return (0, w.jsx)(o, {
                scope: t,
                itemMap: i,
                collectionRef: n,
                children: r
              })
            };
          a.displayName = t;
          const s = e + "CollectionSlot",
            l = (0, zS.createSlot)(s),
            c = D.forwardRef(((e, t) => {
              const {
                scope: r,
                children: n
              } = e, o = i(s, r), a = (0, dh.s)(t, o.collectionRef);
              return (0, w.jsx)(l, {
                ref: a,
                children: n
              })
            }));
          c.displayName = s;
          const u = e + "CollectionItemSlot",
            d = "data-radix-collection-item",
            f = (0, zS.createSlot)(u),
            h = D.forwardRef(((e, t) => {
              const {
                scope: r,
                children: n,
                ...o
              } = e, a = D.useRef(null), s = (0, dh.s)(t, a), l = i(u, r);
              return D.useEffect((() => (l.itemMap.set(a, {
                ref: a,
                ...o
              }), () => {
                l.itemMap.delete(a)
              }))), (0, w.jsx)(f, {
                [d]: "",
                ref: s,
                children: n
              })
            }));
          return h.displayName = u, [{
            Provider: a,
            Slot: c,
            ItemSlot: h
          }, function(t) {
            const r = i(e + "CollectionConsumer", t),
              n = D.useCallback((() => {
                const e = r.collectionRef.current;
                if (!e) return [];
                const t = Array.from(e.querySelectorAll(`[${d}]`)),
                  n = Array.from(r.itemMap.values()).sort(((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)));
                return n
              }), [r.collectionRef, r.itemMap]);
            return n
          }, n]
        }("Toast"),
        [ax, sx] = (0, fh.A)("Toast", [ix]),
        [lx, cx] = ax(rx),
        ux = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: a
          } = e, [s, l] = D.useState(null), [c, u] = D.useState(0), d = D.useRef(!1), f = D.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${rx}\`. Expected non-empty \`string\`.`), (0, w.jsx)(nx.Provider, {
            scope: t,
            children: (0, w.jsx)(lx, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: i,
              toastCount: c,
              viewport: s,
              onViewportChange: l,
              onToastAdd: D.useCallback((() => u((e => e + 1))), []),
              onToastRemove: D.useCallback((() => u((e => e - 1))), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: a
            })
          })
        };
      ux.displayName = rx;
      var dx = "ToastViewport",
        fx = ["F8"],
        hx = "toast.viewportPause",
        px = "toast.viewportResume",
        mx = D.forwardRef(((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = fx,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, a = cx(dx, r), s = ox(r), l = D.useRef(null), c = D.useRef(null), u = D.useRef(null), d = D.useRef(null), f = (0, dh.s)(t, d, a.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), p = a.toastCount > 0;
          D.useEffect((() => {
            const e = e => {
              0 !== n.length && n.every((t => e[t] || e.code === t)) && d.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }), [n]), D.useEffect((() => {
            const e = l.current,
              t = d.current;
            if (p && e && t) {
              const r = () => {
                  if (!a.isClosePausedRef.current) {
                    const e = new CustomEvent(hx);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (a.isClosePausedRef.current) {
                    const e = new CustomEvent(px);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && n()
                },
                i = () => {
                  e.contains(document.activeElement) || n()
                };
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", i), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", i), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }), [p, a.isClosePausedRef]);
          const m = D.useCallback((({
            tabbingDirection: e
          }) => {
            const t = s().map((t => {
              const r = t.ref.current,
                n = [r, ...kx(r)];
              return "forwards" === e ? n : n.reverse()
            }));
            return ("forwards" === e ? t.reverse() : t).flat()
          }), [s]);
          return D.useEffect((() => {
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
                    i = o.findIndex((e => e === r));
                  Lx(o.slice(i + 1)) ? t.preventDefault() : n ? c.current?.focus() : u.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }), [s, m]), (0, w.jsxs)(YS, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", h),
            tabIndex: -1,
            style: {
              pointerEvents: p ? void 0 : "none"
            },
            children: [p && (0, w.jsx)(yx, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Lx(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, w.jsx)(nx.Slot, {
              scope: r,
              children: (0, w.jsx)(FS.sG.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), p && (0, w.jsx)(yx, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                Lx(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        }));
      mx.displayName = dx;
      var vx = "ToastFocusProxy",
        yx = D.forwardRef(((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, i = cx(vx, r);
          return (0, w.jsx)(tx.VisuallyHidden, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !i.viewport?.contains(t) && n()
            }
          })
        }));
      yx.displayName = vx;
      var gx = "Toast",
        bx = D.forwardRef(((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            ...a
          } = e, [s, l] = (0, bh.useControllableState)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: i,
            caller: gx
          });
          return (0, w.jsx)(JS, {
            present: r || s,
            children: (0, w.jsx)(Ex, {
              open: s,
              ...a,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Cv.c)(e.onPause),
              onResume: (0, Cv.c)(e.onResume),
              onSwipeStart: BS(e.onSwipeStart, (e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              })),
              onSwipeMove: BS(e.onSwipeMove, (e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              })),
              onSwipeCancel: BS(e.onSwipeCancel, (e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              })),
              onSwipeEnd: BS(e.onSwipeEnd, (e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              }))
            })
          })
        }));
      bx.displayName = gx;
      var [wx, _x] = ax(gx, {
        onClose() {}
      }), Ex = D.forwardRef(((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: i,
          onClose: a,
          onEscapeKeyDown: s,
          onPause: l,
          onResume: c,
          onSwipeStart: u,
          onSwipeMove: d,
          onSwipeCancel: f,
          onSwipeEnd: h,
          ...p
        } = e, m = cx(gx, r), [v, y] = D.useState(null), g = (0, dh.s)(t, (e => y(e))), b = D.useRef(null), _ = D.useRef(null), E = o || m.duration, P = D.useRef(0), S = D.useRef(E), x = D.useRef(0), {
          onToastAdd: C,
          onToastRemove: T
        } = m, O = (0, Cv.c)((() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), a()
        })), R = D.useCallback((e => {
          e && e !== 1 / 0 && (window.clearTimeout(x.current), P.current = (new Date).getTime(), x.current = window.setTimeout(O, e))
        }), [O]);
        D.useEffect((() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                R(S.current), c?.()
              },
              r = () => {
                const e = (new Date).getTime() - P.current;
                S.current = S.current - e, window.clearTimeout(x.current), l?.()
              };
            return e.addEventListener(hx, r), e.addEventListener(px, t), () => {
              e.removeEventListener(hx, r), e.removeEventListener(px, t)
            }
          }
        }), [m.viewport, E, l, c, R]), D.useEffect((() => {
          i && !m.isClosePausedRef.current && R(E)
        }), [i, E, m.isClosePausedRef, R]), D.useEffect((() => (C(), () => T())), [C, T]);
        const I = D.useMemo((() => v ? Ix(v) : null), [v]);
        return m.viewport ? (0, w.jsxs)(w.Fragment, {
          children: [I && (0, w.jsx)(Px, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: I
          }), (0, w.jsx)(wx, {
            scope: r,
            onClose: O,
            children: zt.createPortal((0, w.jsx)(nx.ItemSlot, {
              scope: r,
              children: (0, w.jsx)($S, {
                asChild: !0,
                onEscapeKeyDown: BS(s, (() => {
                  m.isFocusedToastEscapeKeyDownRef.current || O(), m.isFocusedToastEscapeKeyDownRef.current = !1
                })),
                children: (0, w.jsx)(FS.sG.li, {
                  tabIndex: 0,
                  "data-state": i ? "open" : "closed",
                  "data-swipe-direction": m.swipeDirection,
                  ...p,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: BS(e.onKeyDown, (e => {
                    "Escape" === e.key && (s?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, O()))
                  })),
                  onPointerDown: BS(e.onPointerDown, (e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  })),
                  onPointerMove: BS(e.onPointerMove, (e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(_.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      i = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      a = o ? i(0, t) : 0,
                      s = o ? 0 : i(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      c = {
                        x: a,
                        y: s
                      },
                      f = {
                        originalEvent: e,
                        delta: c
                      };
                    n ? (_.current = c, Nx("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : jx(c, m.swipeDirection, l) ? (_.current = c, Nx("toast.swipeStart", u, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  })),
                  onPointerUp: BS(e.onPointerUp, (e => {
                    const t = _.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), _.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      jx(t, m.swipeDirection, m.swipeThreshold) ? Nx("toast.swipeEnd", h, n, {
                        discrete: !0
                      }) : Nx("toast.swipeCancel", f, n, {
                        discrete: !0
                      }), r.addEventListener("click", (e => e.preventDefault()), {
                        once: !0
                      })
                    }
                  }))
                })
              })
            }), m.viewport)
          })]
        }) : null
      })), Px = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = cx(gx, t), [i, a] = D.useState(!1), [s, l] = D.useState(!1);
        return function(e = () => {}) {
          const t = (0, Cv.c)(e);
          (0, Tv.N)((() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame((() => r = window.requestAnimationFrame(t))), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }), [t])
        }((() => a(!0))), D.useEffect((() => {
          const e = window.setTimeout((() => l(!0)), 1e3);
          return () => window.clearTimeout(e)
        }), []), s ? null : (0, w.jsx)(QS.Portal, {
          asChild: !0,
          children: (0, w.jsx)(tx.VisuallyHidden, {
            ...n,
            children: i && (0, w.jsxs)(w.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      D.forwardRef(((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, w.jsx)(FS.sG.div, {
          ...n,
          ref: t
        })
      })).displayName = "ToastTitle";
      var Sx = D.forwardRef(((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, w.jsx)(FS.sG.div, {
          ...n,
          ref: t
        })
      }));
      Sx.displayName = "ToastDescription";
      var xx = "ToastAction",
        Cx = D.forwardRef(((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, w.jsx)(Rx, {
            altText: r,
            asChild: !0,
            children: (0, w.jsx)(Ox, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${xx}\`. Expected non-empty \`string\`.`), null)
        }));
      Cx.displayName = xx;
      var Tx = "ToastClose",
        Ox = D.forwardRef(((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = _x(Tx, r);
          return (0, w.jsx)(Rx, {
            asChild: !0,
            children: (0, w.jsx)(FS.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: BS(e.onClick, o.onClose)
            })
          })
        }));
      Ox.displayName = Tx;
      var Rx = D.forwardRef(((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, w.jsx)(FS.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      }));

      function Ix(e) {
        const t = [];
        return Array.from(e.childNodes).forEach((e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e)) {
            const r = e.ariaHidden || e.hidden || "none" === e.style.display,
              n = "" === e.dataset.radixToastAnnounceExclude;
            if (!r)
              if (n) {
                const r = e.dataset.radixToastAnnounceAlt;
                r && t.push(r)
              } else t.push(...Ix(e))
          }
        })), t
      }

      function Nx(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.currentTarget,
          i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, FS.hO)(o, i) : o.dispatchEvent(i)
      }
      var jx = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          i = n > o;
        return "left" === t || "right" === t ? i && n > r : !i && o > r
      };

      function kx(e) {
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

      function Lx(e) {
        const t = document.activeElement;
        return e.some((e => e === t || (e.focus(), document.activeElement !== t)))
      }
      var Ax = ux,
        Mx = mx,
        Dx = bx,
        Hx = Sx,
        Bx = Cx,
        zx = Ox;

      function Vx(e) {
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

      function Fx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Ux(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fx(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Vx(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fx(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function qx(e, t) {
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
        Kx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ux(Ux({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Gx(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qx(e.variantClassNames, (e => qx(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Wx = Kx({
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
        Xx = Kx({
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
        Zx = Kx({
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
      const $x = (0, D.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => (0, w.jsx)(Ax, {
          ref: n,
          "data-testid": t,
          ...r,
          children: e
        }))),
        Yx = (0, D.forwardRef)((({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const i = (0, HS.mergeProps)({
            className: Zx({
              position: r
            })
          }, n);
          return (0, w.jsx)(Mx, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        })),
        Qx = (0, D.createContext)(null);

      function Jx() {
        const e = (0, D.useContext)(Qx);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const eC = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, i) => {
          const a = e ? vr.Slot : Dx,
            s = (0, HS.mergeProps)({
              className: Xx({
                appearance: n
              })
            }, o);
          return (0, w.jsx)(Qx.Provider, {
            value: {
              appearance: n
            },
            children: (0, w.jsx)(a, {
              ref: i,
              "data-testid": r,
              ...s,
              children: t
            })
          })
        })),
        tC = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? vr.Slot : Hx,
            a = (0, HS.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        })),
        rC = {
          danger: DS.CircleX,
          information: DS.Info,
          success: DS.CircleCheck,
          warning: DS.TriangleAlert,
          avocado: DS.CircleCheck
        },
        nC = (0, D.forwardRef)((({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = Jx(), o = e ? vr.Slot : rC[n], i = (0, HS.mergeProps)({
            className: Wx({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, w.jsx)(o, {
            ref: r,
            ...i
          })
        })),
        oC = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? vr.Slot : Bx,
            a = (0, HS.mergeProps)({
              className: "foundry_dnh2nzq",
              asChild: !0
            }, n);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, w.jsx)(vr.Slottable, {
              children: t
            }) : (0, w.jsx)(qr, {
              size: "MD",
              appearance: "ghost",
              children: t
            })
          })
        })),
        iC = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? vr.Slot : zx,
            a = (0, HS.mergeProps)({
              className: "foundry_dnh2nzr",
              asChild: !0
            }, n);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, w.jsx)(vr.Slottable, {
              children: t
            }) : (0, w.jsx)(nn, {
              appearance: "ghost",
              icon: "X",
              size: "SM",
              label: ""
            })
          })
        }));
      var aC = r(14772),
        sC = r(58511),
        lC = r.t(sC, 2);

      function cC(e) {
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

      function uC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function dC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? uC(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = cC(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uC(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function fC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = dC(dC({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) hC(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fC(e.variantClassNames, (e => fC(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        mC = pC({
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
        vC = pC({
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
        yC = pC({
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

      function gC() {
        const e = (0, D.useContext)(bC);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const bC = (0, D.createContext)(null),
        wC = (0, D.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const a = (0, aC.mergeProps)({
              className: yC({
                size: n
              })
            }, o),
            s = r ? vr.Slot : "ol";
          return (0, w.jsx)(bC.Provider, {
            value: {
              size: n
            },
            children: (0, w.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        })),
        _C = (0, D.forwardRef)((({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const a = (0, D.useRef)(null),
            {
              size: s
            } = gC(),
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
              } = AE({
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
            c = r ? vr.Slot : "a",
            u = (0, aC.mergeProps)({
              className: (0, ze.clsx)(mC({
                size: s
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, w.jsx)("li", {
            className: vC({
              size: s
            }),
            ref: i,
            children: (0, w.jsx)(c, {
              ref: a,
              ...u,
              children: t
            })
          })
        })),
        EC = (0, D.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = lC[e];
          return (0, w.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        })),
        PC = (0, D.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, i) => {
          const [a, s] = (0, D.useState)(r), {
            size: l
          } = gC(), c = (0, aC.mergeProps)({
            className: vC({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, w.jsx)("li", {
            ref: i,
            ...c,
            children: (0, w.jsxs)(hg, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, w.jsx)(pg, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, w.jsx)(yg, {
                children: (0, w.jsx)(gg, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, w.jsx)(bg, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        SC = (0, D.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? vr.Slot : wg,
            a = (0, aC.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, w.jsx)(i, {
            ref: o,
            ...a,
            children: e
          })
        }));
      var xC = r(63405);

      function CC(e) {
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

      function TC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function OC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? TC(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = CC(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : TC(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function RC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var IC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        NC = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = OC(OC({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) IC(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return RC(e.variantClassNames, (e => RC(e, (e => e.split(" ")[0]))))
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
      const jC = (0, D.forwardRef)((({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          ...n
        }, o) => {
          const i = e ? vr.Slot : "div",
            a = (0, xC.mergeProps)({
              className: NC({
                appearance: r
              })
            }, n);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        })),
        kC = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? vr.Slot : "div",
            a = (0, xC.mergeProps)({
              className: "foundry_18omk9t4 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo"
            }, n);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        })),
        LC = (0, D.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = gv[e],
            o = (0, xC.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t3",
              label: ""
            }, t);
          return (0, w.jsx)(n, {
            ref: r,
            ...o
          })
        }));
      var AC = YC(),
        MC = e => WC(e, AC),
        DC = YC();
      MC.write = e => WC(e, DC);
      var HC = YC();
      MC.onStart = e => WC(e, HC);
      var BC = YC();
      MC.onFrame = e => WC(e, BC);
      var zC = YC();
      MC.onFinish = e => WC(e, zC);
      var VC = [];
      MC.setTimeout = (e, t) => {
        const r = MC.now() + t,
          n = () => {
            const e = VC.findIndex((e => e.cancel == n));
            ~e && VC.splice(e, 1), GC -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return VC.splice(FC(r), 0, o), GC += 1, XC(), o
      };
      var FC = e => ~(~VC.findIndex((t => t.time > e)) || ~VC.length);
      MC.cancel = e => {
        HC.delete(e), BC.delete(e), zC.delete(e), AC.delete(e), DC.delete(e)
      }, MC.sync = e => {
        KC = !0, MC.batchedUpdates(e), KC = !1
      }, MC.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, MC.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          HC.delete(r), t = null
        }, n
      };
      var UC = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      MC.use = e => UC = e, MC.now = "undefined" != typeof performance ? () => performance.now() : Date.now, MC.batchedUpdates = e => e(), MC.catch = console.error, MC.frameLoop = "always", MC.advance = () => {
        "demand" !== MC.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : $C()
      };
      var qC = -1,
        GC = 0,
        KC = !1;

      function WC(e, t) {
        KC ? (t.delete(e), e(0)) : (t.add(e), XC())
      }

      function XC() {
        qC < 0 && (qC = 0, "demand" !== MC.frameLoop && UC(ZC))
      }

      function ZC() {
        ~qC && (UC(ZC), MC.batchedUpdates($C))
      }

      function $C() {
        const e = qC;
        qC = MC.now();
        const t = FC(qC);
        t && (QC(VC.splice(0, t), (e => e.handler())), GC -= t), GC ? (HC.flush(), AC.flush(e ? Math.min(64, qC - e) : 16.667), BC.flush(), DC.flush(), zC.flush()) : qC = -1
      }

      function YC() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            GC += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (GC -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, GC -= t.size, QC(t, (t => t(r) && e.add(t))), GC += e.size, t = e)
          }
        }
      }

      function QC(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            MC.catch(e)
          }
        }))
      }
      var JC = Object.defineProperty,
        eT = {};

      function tT() {}((e, t) => {
        for (var r in t) JC(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(eT, {
        assign: () => mT,
        colors: () => fT,
        createStringInterpolator: () => lT,
        skipAnimation: () => hT,
        to: () => cT,
        willAdvance: () => pT
      });
      var rT = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function nT(e, t) {
        if (rT.arr(e)) {
          if (!rT.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var oT = (e, t) => e.forEach(t);

      function iT(e, t, r) {
        if (rT.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var aT = e => rT.und(e) ? [] : rT.arr(e) ? e : [e];

      function sT(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), oT(r, t)
        }
      }
      var lT, cT, uT = (e, ...t) => sT(e, (e => e(...t))),
        dT = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        fT = null,
        hT = !1,
        pT = tT,
        mT = e => {
          e.to && (cT = e.to), e.now && (MC.now = e.now), void 0 !== e.colors && (fT = e.colors), null != e.skipAnimation && (hT = e.skipAnimation), e.createStringInterpolator && (lT = e.createStringInterpolator), e.requestAnimationFrame && MC.use(e.requestAnimationFrame), e.batchedUpdates && (MC.batchedUpdates = e.batchedUpdates), e.willAdvance && (pT = e.willAdvance), e.frameLoop && (MC.frameLoop = e.frameLoop)
        },
        vT = new Set,
        yT = [],
        gT = [],
        bT = 0,
        wT = {
          get idle() {
            return !vT.size && !yT.length
          },
          start(e) {
            bT > e.priority ? (vT.add(e), MC.onStart(_T)) : (ET(e), MC(ST))
          },
          advance: ST,
          sort(e) {
            if (bT) MC.onFrame((() => wT.sort(e)));
            else {
              const t = yT.indexOf(e);
              ~t && (yT.splice(t, 1), PT(e))
            }
          },
          clear() {
            yT = [], vT.clear()
          }
        };

      function _T() {
        vT.forEach(ET), vT.clear(), MC(ST)
      }

      function ET(e) {
        yT.includes(e) || PT(e)
      }

      function PT(e) {
        yT.splice(function(t) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(yT), 0, e)
      }

      function ST(e) {
        const t = gT;
        for (let r = 0; r < yT.length; r++) {
          const n = yT[r];
          bT = n.priority, n.idle || (pT(n), n.advance(e), n.idle || t.push(n))
        }
        return bT = 0, (gT = yT).length = 0, (yT = t).length > 0
      }
      var xT = "[-+]?\\d*\\.?\\d+",
        CT = xT + "%";

      function TT(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var OT = new RegExp("rgb" + TT(xT, xT, xT)),
        RT = new RegExp("rgba" + TT(xT, xT, xT, xT)),
        IT = new RegExp("hsl" + TT(xT, CT, CT)),
        NT = new RegExp("hsla" + TT(xT, CT, CT, xT)),
        jT = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        kT = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        LT = /^#([0-9a-fA-F]{6})$/,
        AT = /^#([0-9a-fA-F]{8})$/;

      function MT(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function DT(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = MT(o, n, e + 1 / 3),
          a = MT(o, n, e),
          s = MT(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function HT(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function BT(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function zT(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function VT(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function FT(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = LT.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : fT && void 0 !== fT[e] ? fT[e] : (t = OT.exec(e)) ? (HT(t[1]) << 24 | HT(t[2]) << 16 | HT(t[3]) << 8 | 255) >>> 0 : (t = RT.exec(e)) ? (HT(t[1]) << 24 | HT(t[2]) << 16 | HT(t[3]) << 8 | zT(t[4])) >>> 0 : (t = jT.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = AT.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = kT.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = IT.exec(e)) ? (255 | DT(BT(t[1]), VT(t[2]), VT(t[3]))) >>> 0 : (t = NT.exec(e)) ? (DT(BT(t[1]), VT(t[2]), VT(t[3])) | zT(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var UT = (e, t, r) => {
          if (rT.fun(e)) return e;
          if (rT.arr(e)) return UT({
            range: e,
            output: t,
            extrapolate: r
          });
          if (rT.str(e.output[0])) return lT(e);
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
        qT = 1.70158,
        GT = 2.5949095,
        KT = 2.70158,
        WT = 2 * Math.PI / 3,
        XT = 2 * Math.PI / 4.5,
        ZT = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        $T = {
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
          easeInBack: e => KT * e * e * e - qT * e * e,
          easeOutBack: e => 1 + KT * Math.pow(e - 1, 3) + qT * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - GT) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + GT) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * WT),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * WT) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * XT) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * XT) / 2 + 1,
          easeInBounce: e => 1 - ZT(1 - e),
          easeOutBounce: ZT,
          easeInOutBounce: e => e < .5 ? (1 - ZT(1 - 2 * e)) / 2 : (1 + ZT(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        YT = Symbol.for("FluidValue.get"),
        QT = Symbol.for("FluidValue.observers"),
        JT = e => Boolean(e && e[YT]),
        eO = e => e && e[YT] ? e[YT]() : e,
        tO = e => e[QT] || null;

      function rO(e, t) {
        const r = e[QT];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var nO = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            oO(this, e)
          }
        },
        oO = (e, t) => lO(e, YT, t);

      function iO(e, t) {
        if (e[YT]) {
          let r = e[QT];
          r || lO(e, QT, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function aO(e, t) {
        const r = e[QT];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[QT] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var sO, lO = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        cO = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        uO = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        dO = new RegExp(`(${cO.source})(%|[a-z]+)`, "i"),
        fO = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        hO = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        pO = e => {
          const [t, r] = mO(e);
          if (!t || dT()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && hO.test(r) ? pO(r) : r || e
        },
        mO = e => {
          const t = hO.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        vO = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        yO = e => {
          sO || (sO = fT ? new RegExp(`(${Object.keys(fT).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => eO(e).replace(hO, pO).replace(uO, FT).replace(sO, FT))),
            r = t.map((e => e.match(cO).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = n.map((t => UT({
              ...e,
              output: t
            })));
          return e => {
            const r = !dO.test(t[0]) && t.find((e => dO.test(e)))?.replace(cO, "");
            let n = 0;
            return t[0].replace(cO, (() => `${o[n++](e)}${r||""}`)).replace(fO, vO)
          }
        },
        gO = "react-spring: ",
        bO = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${gO}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        wO = bO(console.warn),
        _O = bO(console.warn);

      function EO(e) {
        return rT.str(e) && ("#" == e[0] || /\d/.test(e) || !dT() && hO.test(e) || e in (fT || {}))
      }
      var PO = dT() ? D.useEffect : D.useLayoutEffect;

      function SO() {
        const e = (0, D.useState)()[1],
          t = (() => {
            const e = (0, D.useRef)(!1);
            return PO((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var xO = e => (0, D.useEffect)(e, CO),
        CO = [],
        TO = Symbol.for("Animated:node"),
        OO = e => e && e[TO],
        RO = (e, t) => {
          return r = e, n = TO, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        IO = e => e && e[TO] && e[TO].getPayload(),
        NO = class {
          constructor() {
            RO(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        jO = class e extends NO {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, rT.num(this._value) && (this.lastPosition = this._value)
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
            return rT.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, rT.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        kO = class e extends jO {
          constructor(e) {
            super(0), this._string = null, this._toString = UT({
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
            if (rT.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = UT({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        LO = {
          dependencies: null
        },
        AO = class extends NO {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return iT(this.source, ((r, n) => {
              var o;
              (o = r) && o[TO] === o ? t[n] = r.getValue(e) : JT(r) ? t[n] = eO(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && oT(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return iT(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            LO.dependencies && JT(e) && LO.dependencies.add(e);
            const t = IO(e);
            t && oT(t, (e => this.add(e)))
          }
        },
        MO = class e extends AO {
          constructor(e) {
            super(e)
          }
          static create(t) {
            return new e(t)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(DO)), !0)
          }
        };

      function DO(e) {
        return (EO(e) ? kO : jO).create(e)
      }

      function HO(e) {
        const t = OO(e);
        return t ? t.constructor : rT.arr(e) ? MO : EO(e) ? kO : jO
      }
      var BO = (e, t) => {
          const r = !rT.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, D.forwardRef)(((n, o) => {
            const i = (0, D.useRef)(null),
              a = r && (0, D.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (rT.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return LO.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new AO(e), LO.dependencies = null, [e, r]
              }(n, t),
              c = SO(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new zO(u, l),
              f = (0, D.useRef)(void 0);
            PO((() => (f.current = d, oT(l, (e => iO(e, d))), () => {
              f.current && (oT(f.current.deps, (e => aO(e, f.current))), MC.cancel(f.current.update))
            }))), (0, D.useEffect)(u, []), xO((() => () => {
              const e = f.current;
              oT(e.deps, (t => aO(t, e)))
            }));
            const h = t.getComponentProps(s.getValue());
            return D.createElement(e, {
              ...h,
              ref: a
            })
          }))
        },
        zO = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && MC.write(this.update)
          }
        },
        VO = Symbol.for("AnimatedComponent"),
        FO = e => rT.str(e) ? e : e && rT.str(e.displayName) ? e.displayName : rT.fun(e) && e.name || null;

      function UO(e, ...t) {
        return rT.fun(e) ? e(...t) : e
      }
      var qO = (e, t) => !0 === e || !!(t && e && (rT.fun(e) ? e(t) : aT(e).includes(t))),
        GO = (e, t) => rT.obj(e) ? t && e[t] : e,
        KO = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        WO = e => e,
        XO = (e, t = WO) => {
          let r = ZO;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            rT.und(r) || (n[o] = r)
          }
          return n
        },
        ZO = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        $O = {
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

      function YO(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (iT(e, ((e, n) => {
              $O[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return iT(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function QO(e) {
        return e = eO(e), rT.arr(e) ? e.map(QO) : EO(e) ? eT.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function JO(e) {
        return rT.fun(e) || rT.arr(e) && rT.obj(e[0])
      }

      function eR(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var tR = {
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
        rR = {
          ...tR.default,
          mass: 1,
          damping: 1,
          easing: $T.linear,
          clamp: !1
        },
        nR = class {
          constructor() {
            this.velocity = 0, Object.assign(this, rR)
          }
        };

      function oR(e, t) {
        if (rT.und(t.decay)) {
          const r = !rT.und(t.tension) || !rT.und(t.friction);
          !r && rT.und(t.frequency) && rT.und(t.damping) && rT.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var iR = [],
        aR = class {
          constructor() {
            this.changed = !1, this.values = iR, this.toValues = null, this.fromValues = iR, this.config = new nR, this.immediate = !1
          }
        };

      function sR(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, c, u = qO(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            rT.und(r.pause) || (o.paused = qO(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || qO(e, t)), l = UO(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - MC.now()
          }

          function f() {
            l > 0 && !eT.skipAnimation ? (o.delayed = !0, c = MC.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
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
      var lR = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? dR(e.get()) : t.every((e => e.noop)) ? cR(e.get()) : uR(e.get(), t.every((e => e.finished))),
        cR = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        uR = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        dR = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function fR(e, t, r, n) {
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
          const c = XO(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const f = new Promise(((e, t) => (u = e, d = t))),
            h = e => {
              const t = o <= (r.cancelId || 0) && dR(n) || o !== r.asyncId && uR(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new pR,
                a = new mR;
              return (async () => {
                if (eT.skipAnimation) throw hR(r), a.result = uR(n, !1), d(a), a;
                h(i);
                const s = rT.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, iT(c, ((e, t) => {
                  rT.und(s[t]) && (s[t] = e)
                }));
                const l = await n.start(s);
                return h(i), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (eT.skipAnimation) return hR(r), uR(n, !1);
          try {
            let t;
            t = rT.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = uR(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof pR) m = e.result;
            else {
              if (!(e instanceof mR)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? s : void 0, r.promise = i ? l : void 0)
          }
          return rT.fun(a) && MC.batchedUpdates((() => {
            a(m, n, n.item)
          })), m
        })() : l
      }

      function hR(e, t) {
        sT(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var pR = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        mR = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        vR = e => e instanceof gR,
        yR = 1,
        gR = class extends nO {
          constructor() {
            super(...arguments), this.id = yR++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = OO(this);
            return e && e.getValue()
          }
          to(...e) {
            return eT.to(this, e)
          }
          interpolate(...e) {
            return wO(`${gO}The "interpolate" function is deprecated in v9 (use "to" instead)`), eT.to(this, e)
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
            rO(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || wT.sort(this), rO(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        bR = Symbol.for("SpringPhase"),
        wR = e => (1 & e[bR]) > 0,
        _R = e => (2 & e[bR]) > 0,
        ER = e => (4 & e[bR]) > 0,
        PR = (e, t) => t ? e[bR] |= 3 : e[bR] &= -3,
        SR = (e, t) => t ? e[bR] |= 4 : e[bR] &= -5,
        xR = class extends gR {
          constructor(e, t) {
            if (super(), this.animation = new aR, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !rT.und(e) || !rT.und(t)) {
              const r = rT.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              rT.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(_R(this) || this._state.asyncTo) || ER(this)
          }
          get goal() {
            return eO(this.animation.to)
          }
          get velocity() {
            const e = OO(this);
            return e instanceof jO ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return wR(this)
          }
          get isAnimating() {
            return _R(this)
          }
          get isPaused() {
            return ER(this)
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
            } = n, a = IO(n.to);
            !a && JT(n.to) && (o = aT(eO(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              const c = s.constructor == kO ? 1 : a ? a[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = rT.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (rT.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(s.lastPosition - d) <= f, a = o * n
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !rT.und(n),
                      h = r == c ? s.v0 > 0 : r < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(a) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (a = -a * n, d = c)), a += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * a) / i.mass * v, d += a * v
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), d = r + i.easing(n) * (c - r), a = (d - s.lastPosition) / e, u = 1 == n
                }
                s.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              a && !a[l].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(d, i.round) && (r = !0)
            }));
            const s = OO(this),
              l = s.getValue();
            if (t) {
              const e = eO(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return MC.batchedUpdates((() => {
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
            if (_R(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              MC.batchedUpdates((() => {
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
            return rT.und(e) ? (r = this.queue || [], this.queue = []) : r = [rT.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => lR(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), hR(this._state, e && this._lastCallId), MC.batchedUpdates((() => this._stop(t, e))), this
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
            r = rT.obj(r) ? r[t] : r, (null == r || JO(r)) && (r = void 0), n = rT.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return wR(this) || (e.reverse && ([r, n] = [n, r]), n = eO(n), rT.und(n) ? OO(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, XO(e, ((e, t) => /^on/.test(t) ? GO(e, r) : e))), NR(this, e, "onProps"), jR(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return sR(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  ER(this) || (SR(this, !0), uT(i.pauseQueue), jR(this, "onPause", uR(this, CR(this, this.animation.to)), this))
                },
                resume: () => {
                  ER(this) && (SR(this, !1), _R(this) && this._resume(), uT(i.resumeQueue), jR(this, "onResume", uR(this, CR(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = TR(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(dR(this));
            const n = !rT.und(e.to),
              o = !rT.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(dR(this));
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
            !o || n || t.default && !rT.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !nT(d, c);
            f && (s.from = d), d = eO(d);
            const h = !nT(u, l);
            h && this._focus(u);
            const p = JO(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (oR(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), oR(e, t), Object.assign(e, t);
              for (const t in rR) null == e[t] && (e[t] = rR[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              rT.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, UO(t.config, i), t.config !== a.config ? UO(a.config, i) : void 0);
            let g = OO(this);
            if (!g || rT.und(u)) return r(uR(this, !0));
            const b = rT.und(t.reset) ? o && !t.default : !rT.und(d) && qO(t.reset, i),
              w = b ? d : this.get(),
              _ = QO(u),
              E = rT.num(_) || rT.arr(_) || EO(_),
              P = !p && (!E || qO(a.immediate || t.immediate, i));
            if (h) {
              const e = HO(u);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const S = g.constructor;
            let x = JT(u),
              C = !1;
            if (!x) {
              const e = b || !wR(this) && f;
              (h || e) && (C = nT(QO(w), _), x = !C), (nT(s.immediate, P) || P) && nT(m.decay, v) && nT(m.velocity, y) || (x = !0)
            }
            if (C && _R(this) && (s.changed && !b ? x = !0 : x || this._stop(l)), !p && ((x || JT(l)) && (s.values = g.getPayload(), s.toValues = JT(u) ? null : S == kO ? [1] : aT(_)), s.immediate != P && (s.immediate = P, P || b || this._set(l)), x)) {
              const {
                onRest: e
              } = s;
              oT(IR, (e => NR(this, t, e)));
              const n = uR(this, CR(this, l));
              uT(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && MC.batchedUpdates((() => {
                s.changed = !b, e?.(n, this), b ? UO(a.onRest, n) : s.onStart?.(n, this)
              }))
            }
            b && this._set(w), p ? r(fR(t.to, t, this._state, this)) : x ? this._start() : _R(this) && !h ? this._pendingCalls.add(r) : r(cR(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (tO(this) && this._detach(), t.to = e, tO(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            JT(t) && (iO(t, this), vR(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            JT(e) && aO(e, this)
          }
          _set(e, t = !0) {
            const r = eO(e);
            if (!rT.und(r)) {
              const e = OO(this);
              if (!e || !nT(r, e.getValue())) {
                const n = HO(r);
                e && e.constructor == n ? e.setValue(r) : RO(this, n.create(r)), e && MC.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return OO(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, jR(this, "onStart", uR(this, CR(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), UO(this.animation.onChange, e, this)), UO(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            OO(this).reset(eO(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), _R(this) || (PR(this, !0), ER(this) || this._resume())
          }
          _resume() {
            eT.skipAnimation ? this.finish() : wT.start(this)
          }
          _stop(e, t) {
            if (_R(this)) {
              PR(this, !1);
              const r = this.animation;
              oT(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), rO(this, {
                type: "idle",
                parent: this
              });
              const n = t ? dR(this.get()) : uR(this.get(), CR(this, e ?? r.to));
              uT(this._pendingCalls, n), r.changed && (r.changed = !1, jR(this, "onRest", n, this))
            }
          }
        };

      function CR(e, t) {
        const r = QO(t);
        return nT(QO(e.get()), r)
      }

      function TR(e, t = e.loop, r = e.to) {
        const n = UO(t);
        if (n) {
          const o = !0 !== n && YO(n),
            i = (o || e).reverse,
            a = !o || o.reset;
          return OR({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || JO(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function OR(e) {
        const {
          to: t,
          from: r
        } = e = YO(e), n = new Set;
        return rT.obj(t) && RR(t, n), rT.obj(r) && RR(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function RR(e, t) {
        iT(e, ((e, r) => null != e && t.add(r)))
      }
      var IR = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function NR(e, t, r) {
        e.animation[r] = t[r] !== KO(t, r) ? GO(t[r], e.key) : void 0
      }

      function jR(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var kR = ["onStart", "onChange", "onRest"],
        LR = 1,
        AR = class {
          constructor(e, t) {
            this.id = LR++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              rT.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(OR(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = aT(e).map(OR) : this.queue = [], this._flush ? this._flush(this, t) : (zR(this, t), function(e, t) {
              return Promise.all(t.map((t => MR(e, t)))).then((t => lR(e, t)))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              oT(aT(t), (t => r[t].stop(!!e)))
            } else hR(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (rT.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              oT(aT(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (rT.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              oT(aT(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            iT(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, sT(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !n && this._started,
              a = o || i && r.size ? this.get() : null;
            o && t.size && sT(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, sT(r, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            MC.onFrame(this._onFrame)
          }
        };
      async function MR(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = rT.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = rT.arr(o) || rT.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : oT(kR, (r => {
          const n = t[r];
          if (rT.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, uT(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          h = !0 === t.cancel || !0 === KO(t, "cancel");
        (u || h && d.asyncId) && f.push(sR(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: tT,
            resume: tT,
            start(t, r) {
              h ? (hR(d, e._lastAsyncId), r(dR(e))) : (t.onRest = s, r(fR(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = lR(e, await Promise.all(f));
        if (a && p.finished && (!r || !p.noop)) {
          const r = TR(t, a, o);
          if (r) return zR(e, [r]), MR(e, r, !0)
        }
        return l && MC.batchedUpdates((() => l(p, e, e.item))), p
      }

      function DR(e, t) {
        const r = {
          ...e.springs
        };
        return t && oT(aT(t), (e => {
            rT.und(e.keys) && (e = OR(e)), rT.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), BR(r, e, (e => HR(e)))
          })),
          function(e, t) {
            iT(t, ((t, r) => {
              e.springs[r] || (e.springs[r] = t, iO(t, e))
            }))
          }(e, r), r
      }

      function HR(e, t) {
        const r = new xR;
        return r.key = e, t && iO(r, t), r
      }

      function BR(e, t, r) {
        t.keys && oT(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function zR(e, t) {
        oT(t, (t => {
          BR(e.springs, t, (t => HR(t, e)))
        }))
      }
      var VR = D.createContext({
          pause: !1,
          immediate: !1
        }),
        FR = () => {
          const e = [],
            t = function(t) {
              _O(`${gO}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return oT(e, ((e, o) => {
                if (rT.und(t)) n.push(e.start());
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
            return oT(e, (e => e.pause(...arguments))), this
          }, t.resume = function() {
            return oT(e, (e => e.resume(...arguments))), this
          }, t.set = function(t) {
            oT(e, ((e, r) => {
              const n = rT.fun(t) ? t(r, e) : t;
              n && e.set(n)
            }))
          }, t.start = function(t) {
            const r = [];
            return oT(e, ((e, n) => {
              if (rT.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            })), r
          }, t.stop = function() {
            return oT(e, (e => e.stop(...arguments))), this
          }, t.update = function(t) {
            return oT(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
          };
          const r = function(e, t, r) {
            return rT.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        UR = () => FR(),
        qR = () => (0, D.useState)(UR)[0];

      function GR(e, t, r) {
        const n = rT.fun(t) && t,
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
          f = (0, D.useMemo)((() => n || 3 == arguments.length ? FR() : void 0), []),
          h = aT(e),
          p = [],
          m = (0, D.useRef)(null),
          v = o ? null : m.current;
        PO((() => {
          m.current = p
        })), xO((() => (oT(p, (e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        })), () => {
          oT(m.current, (e => {
            e.expired && clearTimeout(e.expirationId), eR(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : KR++
              }))
            }
            return rT.und(r) ? e : rT.fun(r) ? e.map(r) : aT(r)
          }(h, n ? n() : t, v),
          g = o && m.current || [];
        PO((() => oT(g, (({
          ctrl: e,
          item: t,
          key: r
        }) => {
          eR(e, f), UO(c, t, r)
        }))));
        const b = [];
        if (v && oT(v, ((e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
          })), oT(h, ((e, t) => {
            p[t] || (p[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new AR
            }, p[t].ctrl.item = e)
          })), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          oT(b, ((t, n) => {
            const o = v[n];
            ~t ? (e = p.indexOf(o), p[e] = {
              ...o,
              item: h[t]
            }) : r && p.splice(++e, 0, o)
          }))
        }
        rT.fun(i) && p.sort(((e, t) => i(e.item, t.item)));
        let w = -a;
        const _ = SO(),
          E = XO(t),
          P = new Map,
          S = (0, D.useRef)(new Map),
          x = (0, D.useRef)(!1);
        oT(p, ((e, r) => {
          const o = e.key,
            i = e.phase,
            c = n ? n() : t;
          let f, h;
          const p = UO(c.delay || 0, o);
          if ("mount" == i) f = c.enter, h = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != i)
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
          if (f = UO(f, e.item, r), f = rT.obj(f) ? YO(f) : {
              to: f
            }, !f.config) {
            const t = d || E.config;
            f.config = UO(t, e.item, r, h)
          }
          w += a;
          const g = {
            ...E,
            delay: p + w,
            ref: u,
            immediate: c.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == h && rT.und(g.from)) {
            const o = n ? n() : t,
              i = rT.und(o.initial) || v ? o.from : o.initial;
            g.from = UO(i, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            UO(b, e);
            const t = m.current,
              r = t.find((e => e.key === o));
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every((e => e.ctrl.idle));
              if ("leave" == r.phase) {
                const t = UO(s, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(_, n)))
                }
              }
              e && t.some((e => e.expired)) && (S.current.delete(r), l && (x.current = !0), _())
            }
          };
          const C = DR(e.ctrl, g);
          "leave" === h && l ? S.current.set(e, {
            phase: h,
            springs: C,
            payload: g
          }) : P.set(e, {
            phase: h,
            springs: C,
            payload: g
          })
        }));
        const C = (0, D.useContext)(VR),
          T = function(e) {
            const t = (0, D.useRef)(void 0);
            return (0, D.useEffect)((() => {
              t.current = e
            })), t.current
          }(C),
          O = C !== T && function(e) {
            for (const t in e) return !0;
            return !1
          }(C);
        PO((() => {
          O && oT(p, (e => {
            e.ctrl.start({
              default: C
            })
          }))
        }), [C]), oT(P, ((e, t) => {
          if (S.current.size) {
            const e = p.findIndex((e => e.key === t.key));
            p.splice(e, 1)
          }
        })), PO((() => {
          oT(S.current.size ? S.current : P, (({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), O && "enter" == e && n.start({
              default: C
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || x.current ? (n.start(t), x.current && (x.current = !1)) : n.update(t))
          }))
        }), o ? void 0 : r);
        const R = e => D.createElement(D.Fragment, null, p.map(((t, r) => {
          const {
            springs: n
          } = P.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), i = rT.str(t.key) || rT.num(t.key) ? t.key : t.ctrl.id, a = D.version < "19.0.0", s = o?.props ?? {};
          return a && (s.ref = o.ref), o && o.type ? D.createElement(o.type, {
            key: i,
            ...s
          }) : o
        })));
        return f ? [R, f] : R
      }
      var KR = 1,
        WR = class extends gR {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = UT(...t);
            const r = this._get(),
              n = HO(r);
            RO(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            nT(t, this.get()) || (OO(this).setValue(t), this._onChange(t, this.idle)), !this.idle && ZR(this._active) && $R(this)
          }
          _get() {
            const e = rT.arr(this.source) ? this.source.map(eO) : aT(eO(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !ZR(this._active) && (this.idle = !1, oT(IO(this), (e => {
              e.done = !1
            })), eT.skipAnimation ? (MC.batchedUpdates((() => this.advance())), $R(this)) : wT.start(this))
          }
          _attach() {
            let e = 1;
            oT(aT(this.source), (t => {
              JT(t) && iO(t, this), vR(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            oT(aT(this.source), (e => {
              JT(e) && aO(e, this)
            })), this._active.clear(), $R(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = aT(this.source).reduce(((e, t) => Math.max(e, (vR(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function XR(e) {
        return !1 !== e.idle
      }

      function ZR(e) {
        return !e.size || Array.from(e).every(XR)
      }

      function $R(e) {
        e.idle || (e.idle = !0, oT(IO(e), (e => {
          e.done = !0
        })), rO(e, {
          type: "idle",
          parent: e
        }))
      }
      eT.assign({
        createStringInterpolator: yO,
        to: (e, t) => new WR(e, t)
      }), wT.advance;
      var YR = /^--/;

      function QR(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || YR.test(e) || eI.hasOwnProperty(e) && eI[e] ? ("" + t).trim() : t + "px"
      }
      var JR = {},
        eI = {
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
        tI = ["Webkit", "Ms", "Moz", "O"];
      eI = Object.keys(eI).reduce(((e, t) => (tI.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), eI);
      var rI = /^(matrix|translate|scale|rotate|skew)/,
        nI = /^(translate)/,
        oI = /^(rotate|skew)/,
        iI = (e, t) => rT.num(e) && 0 !== e ? e + t : e,
        aI = (e, t) => rT.arr(e) ? e.every((e => aI(e, t))) : rT.num(e) ? e === t : parseFloat(e) === t,
        sI = class extends AO {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push((e => [`translate3d(${e.map((e=>iI(e,"px"))).join(",")})`, aI(e, 0)]))), iT(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (rI.test(t)) {
                if (delete n[t], rT.und(e)) return;
                const r = nI.test(t) ? "px" : oI.test(t) ? "deg" : "";
                o.push(aT(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${iI(o,r)})`, aI(o, 0)] : e => [`${t}(${e.map((e=>iI(e,r))).join(",")})`, aI(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new lI(o, i)), super(n)
          }
        },
        lI = class extends nO {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return oT(this.inputs, ((r, n) => {
              const o = eO(r[0]),
                [i, a] = this.transforms[n](rT.arr(o) ? o : r.map(eO));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && oT(this.inputs, (e => oT(e, (e => JT(e) && iO(e, this)))))
          }
          observerRemoved(e) {
            0 == e && oT(this.inputs, (e => oT(e, (e => JT(e) && aO(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), rO(this, e)
          }
        };
      eT.assign({
        batchedUpdates: zt.unstable_batchedUpdates,
        createStringInterpolator: yO,
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
      var cI = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new AO(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = FO(e) || "Anonymous";
              return (e = rT.str(e) ? i[e] || (i[e] = BO(e, o)) : e[VO] || (e[VO] = BO(e, o))).displayName = `Animated(${t})`, e
            };
          return iT(e, ((t, r) => {
            rT.arr(e) && (r = FO(t)), i[r] = i(t)
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
              d = Object.keys(c).map((t => r || e.hasAttribute(t) ? t : JR[t] || (JR[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = QR(t, o[t]);
                YR.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, u[r])
            })), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new sI(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        uI = cI.animated,
        dI = r(91381),
        fI = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const r = (0, dI.createSlot)(`Primitive.${t}`),
            n = D.forwardRef(((e, n) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, w.jsx)(a, {
                ...i,
                ref: n
              })
            }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        hI = e => {
          const {
            present: t,
            children: r
          } = e, n = function(e) {
            const [t, r] = D.useState(), n = D.useRef(null), o = D.useRef(e), i = D.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = function(e, t) {
              return D.useReducer(((e, r) => t[e][r] ?? e), e)
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
            return D.useEffect((() => {
              const e = pI(n.current);
              i.current = "mounted" === s ? e : "none"
            }), [s]), (0, Tv.N)((() => {
              const t = n.current,
                r = o.current;
              if (r !== e) {
                const n = i.current,
                  a = pI(t);
                l(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : r && n !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
              }
            }), [e, l]), (0, Tv.N)((() => {
              if (t) {
                let e;
                const r = t.ownerDocument.defaultView ?? window,
                  a = i => {
                    const a = pI(n.current).includes(CSS.escape(i.animationName));
                    if (i.target === t && a && (l("ANIMATION_END"), !o.current)) {
                      const n = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = r.setTimeout((() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                      }))
                    }
                  },
                  s = e => {
                    e.target === t && (i.current = pI(n.current))
                  };
                return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
                  r.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
                }
              }
              l("ANIMATION_END")
            }), [t, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(s),
              ref: D.useCallback((e => {
                n.current = e ? getComputedStyle(e) : null, r(e)
              }), [])
            }
          }(t), o = "function" == typeof r ? r({
            present: n.isPresent
          }) : D.Children.only(r), i = (0, dh.s)(n.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = t && "isReactWarning" in t && t.isReactWarning;
            return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
          }(o));
          return "function" == typeof r || n.isPresent ? D.cloneElement(o, {
            ref: i
          }) : null
        };

      function pI(e) {
        return e?.animationName || "none"
      }

      function mI(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }
      hI.displayName = "Presence", "undefined" == typeof window || !window.document || window.document.createElement;
      var vI = "ScrollArea",
        [yI, gI] = (0, fh.A)(vI),
        [bI, wI] = yI(vI),
        _I = D.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = D.useState(null), [c, u] = D.useState(null), [d, f] = D.useState(null), [h, p] = D.useState(null), [m, v] = D.useState(null), [y, g] = D.useState(0), [b, _] = D.useState(0), [E, P] = D.useState(!1), [S, x] = D.useState(!1), C = (0, dh.s)(t, (e => l(e))), T = (0, lp.jH)(o);
          return (0, w.jsx)(bI, {
            scope: r,
            type: n,
            dir: T,
            scrollHideDelay: i,
            scrollArea: s,
            viewport: c,
            onViewportChange: u,
            content: d,
            onContentChange: f,
            scrollbarX: h,
            onScrollbarXChange: p,
            scrollbarXEnabled: E,
            onScrollbarXEnabledChange: P,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: S,
            onScrollbarYEnabledChange: x,
            onCornerWidthChange: g,
            onCornerHeightChange: _,
            children: (0, w.jsx)(fI.div, {
              dir: T,
              ...a,
              ref: C,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        }));
      _I.displayName = vI;
      var EI = "ScrollAreaViewport",
        PI = D.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, a = wI(EI, r), s = D.useRef(null), l = (0, dh.s)(t, s, a.onViewportChange);
          return (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, w.jsx)(fI.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, w.jsx)("div", {
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
      PI.displayName = EI;
      var SI = "ScrollAreaScrollbar",
        xI = D.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = wI(SI, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return D.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, w.jsx)(CI, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, w.jsx)(TI, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, w.jsx)(OI, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, w.jsx)(RI, {
            ...n,
            ref: t
          }) : null
        }));
      xI.displayName = SI;
      var CI = D.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = wI(SI, e.__scopeScrollArea), [i, a] = D.useState(!1);
          return D.useEffect((() => {
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, w.jsx)(hI, {
            present: r || i,
            children: (0, w.jsx)(OI, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        TI = D.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = wI(SI, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = WI((() => l("SCROLL_END")), 100), [s, l] = (c = {
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
          }, D.useReducer(((e, t) => c[e][t] ?? e), "hidden"));
          var c;
          return D.useEffect((() => {
            if ("idle" === s) {
              const e = window.setTimeout((() => l("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [s, o.scrollHideDelay, l]), D.useEffect((() => {
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
          }), [o.viewport, i, l, a]), (0, w.jsx)(hI, {
            present: r || "hidden" !== s,
            children: (0, w.jsx)(RI, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: mI(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: mI(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        OI = D.forwardRef(((e, t) => {
          const r = wI(SI, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, a] = D.useState(!1),
            s = "horizontal" === e.orientation,
            l = WI((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return XI(r.viewport, l), XI(r.content, l), (0, w.jsx)(hI, {
            present: n || i,
            children: (0, w.jsx)(RI, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        RI = D.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = wI(SI, e.__scopeScrollArea), i = D.useRef(null), a = D.useRef(0), [s, l] = D.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = VI(s.viewport, s.content), u = {
            ...n,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: e => a.current = e
          };

          function d(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = FI(r),
                i = t || o / 2,
                a = o - i,
                s = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                c = r.content - r.viewport;
              return qI([s, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === r ? (0, w.jsx)(II, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = UI(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, w.jsx)(NI, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = UI(o.viewport.scrollTop, s);
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
        II = D.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = wI(SI, e.__scopeScrollArea), [a, s] = D.useState(), l = D.useRef(null), c = (0, dh.s)(t, l, i.onScrollbarXChange);
          return D.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, w.jsx)(LI, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": FI(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), GI(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: zI(a.paddingLeft),
                  paddingEnd: zI(a.paddingRight)
                }
              })
            }
          })
        })),
        NI = D.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = wI(SI, e.__scopeScrollArea), [a, s] = D.useState(), l = D.useRef(null), c = (0, dh.s)(t, l, i.onScrollbarYChange);
          return D.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, w.jsx)(LI, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": FI(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), GI(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: zI(a.paddingTop),
                  paddingEnd: zI(a.paddingBottom)
                }
              })
            }
          })
        })),
        [jI, kI] = yI(SI),
        LI = D.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: a,
            onThumbPointerDown: s,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: u,
            onResize: d,
            ...f
          } = e, h = wI(SI, r), [p, m] = D.useState(null), v = (0, dh.s)(t, (e => m(e))), y = D.useRef(null), g = D.useRef(""), b = h.viewport, _ = n.content - n.viewport, E = (0, Cv.c)(u), P = (0, Cv.c)(l), S = WI(d, 10);

          function x(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              c({
                x: t,
                y: r
              })
            }
          }
          return D.useEffect((() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && E(e, _)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [b, p, _, E]), D.useEffect(P, [n, P]), XI(p, S), XI(h.content, S), (0, w.jsx)(jI, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, Cv.c)(i),
            onThumbPointerUp: (0, Cv.c)(a),
            onThumbPositionChange: P,
            onThumbPointerDown: (0, Cv.c)(s),
            children: (0, w.jsx)(fI.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: mI(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), x(e))
              })),
              onPointerMove: mI(e.onPointerMove, x),
              onPointerUp: mI(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              }))
            })
          })
        })),
        AI = "ScrollAreaThumb",
        MI = D.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = kI(AI, e.__scopeScrollArea);
          return (0, w.jsx)(hI, {
            present: r || o.hasThumb,
            children: (0, w.jsx)(DI, {
              ref: t,
              ...n
            })
          })
        })),
        DI = D.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = wI(AI, r), a = kI(AI, r), {
            onThumbPositionChange: s
          } = a, l = (0, dh.s)(t, (e => a.onThumbChange(e))), c = D.useRef(void 0), u = WI((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return D.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = KI(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, u, s]), (0, w.jsx)(fI.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: mI(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: mI(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      MI.displayName = AI;
      var HI = "ScrollAreaCorner";
      D.forwardRef(((e, t) => {
        const r = wI(HI, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, w.jsx)(BI, {
          ...e,
          ref: t
        }) : null
      })).displayName = HI;
      var BI = D.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = wI(HI, r), [i, a] = D.useState(0), [s, l] = D.useState(0), c = Boolean(i && s);
        return XI(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), XI(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), c ? (0, w.jsx)(fI.div, {
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

      function zI(e) {
        return e ? parseInt(e, 10) : 0
      }

      function VI(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function FI(e) {
        const t = VI(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function UI(e, t, r = "ltr") {
        const n = FI(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - n,
          l = sp(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return qI([0, a], [0, s])(l)
      }

      function qI(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function GI(e, t) {
        return e > 0 && e < t
      }
      var KI = (e, t = () => {}) => {
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

      function WI(e, t) {
        const r = (0, Cv.c)(e),
          n = D.useRef(0);
        return D.useEffect((() => () => window.clearTimeout(n.current)), []), D.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function XI(e, t) {
        const r = (0, Cv.c)(t);
        (0, Tv.N)((() => {
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
      var ZI = _I,
        $I = PI,
        YI = xI,
        QI = MI,
        JI = r(6630),
        eN = r(73468),
        tN = r(41423);

      function rN(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => tN.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, D.useState)((() => r ? n(e) : t));

        function a() {
          i(n(e))
        }
        return (0, D.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
            t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
          }
        }), [e]), o
      }

      function nN(...e) {
        const t = (0, D.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      const oN = () => rN("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function iN(e) {
        const t = (0, D.useRef)(e);
        return (0, D.useEffect)((() => {
          t.current = e
        })), (0, D.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      r(82949);
      const aN = () => {
          const e = rN(eN.breakpoints.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        sN = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function lN({
        dialogRef: e,
        dialogSpringRef: t,
        overlaySpringRef: r,
        onCloseTransitionStart: n,
        onCloseTransitionComplete: o
      }) {
        const i = sN(),
          a = aN(),
          s = (0, D.useRef)(),
          l = (qo(Go), si({
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
                  ...i(e),
                  immediate: !0
                }), t.start({
                  ...a(e),
                  immediate: !0
                })
              }
              f && (c > .5 * m || l > .5 && u > 0 ? (t.start({
                ...a(0),
                immediate: !1,
                config: tR.stiff,
                onStart: n,
                onRest: o
              }), r.start({
                ...i(0),
                immediate: !1,
                config: tR.stiff
              })) : (t.start({
                ...a(100),
                immediate: !1,
                config: tR.stiff
              }), r.start({
                ...i(100),
                immediate: !1,
                config: tR.stiff
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

      function cN(e) {
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

      function uN(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function dN(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? uN(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = cN(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uN(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function fN(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hN = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pN = "foundry_8kowh41",
        mN = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = dN(dN({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) hN(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fN(e.variantClassNames, (e => fN(e, (e => e.split(" ")[0]))))
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
      const vN = (0, D.createContext)(null);

      function yN() {
        const e = (0, D.useContext)(vN);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const gN = (0, D.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: r,
          onOpenChange: n,
          isOpen: o,
          onOpenTransitionStart: i,
          onOpenTransitionComplete: a,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: l,
          ...c
        }, u) => {
          const d = (0, eN.mergeProps)({
              "data-testid": t
            }, c),
            [f, h] = function({
              prop: e,
              defaultProp: t,
              onChange: r = () => {}
            }) {
              const [n, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const r = (0, D.useState)(e),
                  [n] = r,
                  o = (0, D.useRef)(n),
                  i = iN(t);
                return (0, D.useEffect)((() => {
                  o.current !== n && (i(n), o.current = n)
                }), [n, o, i]), r
              }({
                defaultProp: t,
                onChange: r
              }), i = void 0 !== e, a = i ? e : n, s = iN(r), l = (0, D.useCallback)((t => {
                if (i) {
                  const r = "function" == typeof t ? t(e) : t;
                  r !== e && s(r)
                } else o(t)
              }), [i, e, o, s]);
              return [a, l]
            }({
              prop: o,
              defaultProp: r ?? !1,
              onChange: n
            }),
            p = function(e) {
              const t = (0, D.useRef)({
                  value: e,
                  prev: void 0
                }),
                r = t.current.value;
              return e !== r && (t.current = {
                value: e,
                prev: r
              }), t.current.prev
            }(f);
          return (0, w.jsx)(vN.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== o,
              openImmediately: !(void 0 !== p || !r),
              setIsOpen: h,
              onOpenTransitionStart: i,
              onOpenTransitionComplete: a,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: l,
              contentId: (0, D.useId)(),
              descriptionId: (0, D.useId)(),
              triggerRef: (0, D.useRef)(null),
              dialogSpringRef: qR(),
              overlaySpringRef: qR()
            },
            children: (0, w.jsx)(JI.Root, {
              ref: u,
              open: f,
              onOpenChange: h,
              ...d,
              children: e
            })
          })
        })),
        bN = (0, D.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isOpen: o,
            overlaySpringRef: i,
            openImmediately: a
          } = yN(), s = sN(), l = oN(), c = GR(o, {
            ref: i,
            delay: o ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: tR.stiff,
            immediate: l || a
          }), u = (0, eN.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n0"
          }, r), d = uI(JI.Overlay);
          return (0, D.useEffect)((() => {
            i.start()
          }), [o]), c(((t, r) => r ? (0, w.jsx)(d, {
            forceMount: !0,
            ref: n,
            ...u,
            style: t,
            children: e
          }) : null))
        })),
        wN = (0, D.forwardRef)((({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, i) => {
          const {
            isOpen: a,
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
          } = yN(), y = function(e = !0) {
            const t = rN("screen and (pointer: coarse) and (hover: none)");
            return !!e && t
          }(), g = oN(), b = (0, D.useRef)(null), _ = aN(), {
            bindDrag: E
          } = lN({
            dialogRef: b,
            overlaySpringRef: v,
            dialogSpringRef: m,
            onCloseTransitionStart: () => {
              s(!1), h?.()
            },
            onCloseTransitionComplete: p
          }), P = GR(a, {
            from: _(0),
            enter: _(100),
            leave: _(0),
            delay: a ? 100 : 0,
            config: tR.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? d?.() : h?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : p?.()
            }
          });
          (0, D.useEffect)((() => {
            m.start()
          }), [a]);
          const S = nN(b, i),
            x = y && !g && !n && E(),
            C = (0, eN.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: c
            }, x || {}, o),
            T = uI(JI.Content);
          return P(((t, r) => r ? (0, w.jsx)(T, {
            forceMount: !0,
            ref: S,
            ...C,
            style: t,
            children: e
          }) : null))
        })),
        _N = (0, D.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, eN.mergeProps)({
            "data-testid": t
          }, r);
          return (0, w.jsx)(JI.Portal, {
            forceMount: !0,
            ref: n,
            ...o,
            children: e
          })
        })),
        EN = (0, D.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, eN.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, w.jsx)(JI.Title, {
            ref: n,
            ...o,
            children: e
          })
        })),
        PN = (0, D.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, eN.mergeProps)({
            "data-testid": t
          }, r);
          return (0, w.jsx)(JI.Description, {
            ref: n,
            ...o,
            children: e
          })
        })),
        SN = (0, D.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, eN.mergeProps)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, r);
          return (0, w.jsxs)(ZI, {
            ref: n,
            ...o,
            children: [(0, w.jsx)($I, {
              className: "foundry_xov33ne",
              children: e
            }), (0, w.jsx)(YI, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, w.jsx)(QI, {
                className: "foundry_xov33ng"
              })
            })]
          })
        })),
        xN = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, eN.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n2"
            }, n),
            a = e ? vr.Slot : "div";
          return (0, w.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        CN = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, eN.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n3"
            }, n),
            a = e ? vr.Slot : "div";
          return (0, w.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        TN = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, eN.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n8"
            }, n),
            a = e ? vr.Slot : "header";
          return (0, w.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        ON = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, eN.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nc"
            }, n),
            a = e ? vr.Slot : "footer";
          return (0, w.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        RN = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          align: n,
          ...o
        }, i) => {
          const a = (0, eN.mergeProps)({
              "data-testid": r,
              className: mN({
                align: n
              })
            }, o),
            s = e ? vr.Slot : JI.Title;
          return (0, w.jsx)(s, {
            ref: i,
            ...a,
            children: t
          })
        })),
        IN = (0, D.forwardRef)((({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: a
          } = yN(), s = (0, eN.mergeProps)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && a(!1)
            }
          }, n);
          return (0, w.jsx)(nn, {
            ref: o,
            ...s,
            appearance: "ghost",
            icon: "X",
            size: "MD",
            children: e
          })
        })),
        NN = (0, D.forwardRef)(((e, t) => {
          const r = (0, eN.mergeProps)({
            className: "foundry_xov33n5"
          }, e);
          return (0, w.jsx)(nn, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "SM"
          })
        })),
        jN = (0, D.forwardRef)((({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: a
          } = yN(), s = (0, eN.mergeProps)({
            className: pN,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && a(!1)
            }
          }, n);
          return (0, w.jsx)(qr, {
            ref: o,
            ...s,
            children: e
          })
        })),
        kN = (0, D.forwardRef)((({
          asChild: e,
          children: t,
          onPress: r,
          onClick: n,
          ...o
        }, i) => {
          const {
            isControlled: a,
            setIsOpen: s,
            isOpen: l,
            contentId: c,
            triggerRef: u
          } = yN(), d = nN(u, i), f = (0, eN.mergeProps)({
            className: pN,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !a && s(!0)
            }
          }, o), h = e ? vr.Slot : JI.Trigger;
          return (0, w.jsx)(h, {
            ...f,
            ref: d,
            children: t
          })
        }))
    },
    12255: (e, t, r) => {
      r.d(t, {
        hO: () => l,
        sG: () => s
      });
      var n = r(71127),
        o = r(18429),
        i = r(37910),
        a = r(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const r = (0, i.createSlot)(`Primitive.${t}`),
            o = n.forwardRef(((e, n) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, {
                ...i,
                ref: n
              })
            }));
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }), {});

      function l(e, t) {
        e && o.flushSync((() => e.dispatchEvent(t)))
      }
    },
    17695: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
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
        const f = e + "CollectionSlot",
          h = (0, a.createSlot)(f),
          p = n.forwardRef(((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = u(f, r), a = (0, i.s)(t, o.collectionRef);
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
            } = e, l = n.useRef(null), c = (0, i.s)(t, l), d = u(m, r);
            return n.useEffect((() => (d.itemMap.set(l, {
              ref: l,
              ...a
            }), () => {
              d.itemMap.delete(l)
            }))), (0, s.jsx)(y, {
              [v]: "",
              ref: c,
              children: o
            })
          }));
        return g.displayName = m, [{
          Provider: d,
          Slot: p,
          ItemSlot: g
        }, function(t) {
          const r = u(e + "CollectionConsumer", t);
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
    21344: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    22108: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    24244: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
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
    33037: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    33834: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    35205: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    38476: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    41423: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    42131: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    43607: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    43778: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    52360: (e, t, r) => {
      r.d(t, {
        b: () => i
      });
      const n = /^(on.*)$/,
        o = /^(onPress.*)$/;

      function i(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const r = {},
          i = {};
        for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (o.test(a) ? t ? r[a] = e[a] : i[a] = e[a] : n.test(a) ? r[a] = e[a] : i[a] = e[a]);
        return {
          events: r,
          others: i
        }
      }
    },
    55311: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    60893: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    68138: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    77680: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
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
    },
    80070: (e, t, r) => {
      r.d(t, {
        b: () => i
      });
      const n = /^(on.*)$/,
        o = /^(onPress.*)$/;

      function i(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const r = {},
          i = {};
        for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (o.test(a) ? t ? r[a] = e[a] : i[a] = e[a] : n.test(a) ? r[a] = e[a] : i[a] = e[a]);
        return {
          events: r,
          others: i
        }
      }
    },
    80999: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    82949: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    90394: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    96277: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = o.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = i(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    }
  }
]);