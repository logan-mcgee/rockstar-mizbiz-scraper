try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b29515fd-468a-44c5-9497-b6bfacda335b", e._sentryDebugIdIdentifier = "sentry-dbid-b29515fd-468a-44c5-9497-b6bfacda335b")
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
  [2442], {
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
    10907: (e, t, r) => {
      r.d(t, {
        n: () => n
      });
      const n = (e, t) => {
        let r = 0;
        return (...n) => {
          const o = Date.now();
          o - r >= t && (r = o, e(...n))
        }
      }
    },
    12442: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => f,
        AlertBanner: () => h,
        Badge: () => v,
        Body: () => Ef,
        Breadcrumbs: () => m,
        Button: () => Fr,
        Checkbox: () => s,
        Code: () => Sf,
        Dialog: () => y,
        Display: () => Cf,
        Divider: () => Dp,
        Dropdown: () => o,
        Heading: () => Tf,
        IconButton: () => hf,
        Label: () => If,
        Lightbox: () => Np,
        Loader: () => $p,
        RadioGroup: () => u,
        Spinner: () => jr,
        Switch: () => i,
        Tag: () => p,
        Text: () => kf,
        TextArea: () => l,
        TextField: () => d,
        TextSemantics: () => jf,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => pp,
        Content: () => hp,
        Portal: () => mp,
        Root: () => dp,
        Trigger: () => fp,
        useTooltipContext: () => up
      });
      var o = {};
      r.r(o), r.d(o, {
        Content: () => wg,
        Description: () => Tg,
        Hint: () => Og,
        Label: () => xg,
        Option: () => Ig,
        OptionIcon: () => jg,
        OptionText: () => Ng,
        Portal: () => kg,
        Root: () => _g,
        ScrollArea: () => Eg,
        StatusIcon: () => Lg,
        StatusRoot: () => Rg,
        StatusText: () => Ag,
        Trigger: () => Pg,
        TriggerIcon: () => Cg,
        TriggerText: () => Sg,
        useDropdownContext: () => bg
      });
      var i = {};
      r.r(i), r.d(i, {
        Description: () => ob,
        Input: () => rb,
        Label: () => nb,
        Root: () => tb,
        useSwitchContext: () => eb
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => bb,
        CheckMD: () => gb,
        CheckXL: () => _b,
        DashLG: () => Eb,
        DashMD: () => wb,
        DashXL: () => Pb
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => Bb,
        ErrorText: () => Vb,
        Input: () => Db,
        Label: () => Hb,
        Root: () => Mb
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => o_,
        Hint: () => i_,
        Input: () => n_,
        Label: () => r_,
        Root: () => t_,
        RootContext: () => Jb,
        StatusIcon: () => s_,
        StatusRoot: () => a_,
        StatusText: () => l_,
        useTextAreaContext: () => e_
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => tw,
        DotMD: () => ew,
        DotXL: () => rw
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => K_,
        Input: () => ow,
        Label: () => G_,
        Option: () => nw,
        OptionDescription: () => aw,
        OptionLabel: () => iw,
        Options: () => U_,
        Root: () => q_,
        StatusIcon: () => W_,
        StatusRoot: () => X_,
        StatusText: () => $_,
        useRadioGroupContext: () => F_
      });
      var d = {};
      r.r(d), r.d(d, {
        Button: () => dE,
        Control: () => lE,
        Description: () => hE,
        Hint: () => sE,
        Icon: () => uE,
        Input: () => cE,
        Label: () => aE,
        PasswordButton: () => fE,
        Root: () => iE,
        StatusIcon: () => mE,
        StatusRoot: () => pE,
        StatusText: () => vE
      });
      var f = {};
      r.r(f), r.d(f, {
        Body: () => RE,
        CloseButton: () => zE,
        Description: () => DE,
        ErrorText: () => VE,
        Footer: () => BE,
        Header: () => kE,
        Icon: () => AE,
        Link: () => HE,
        Root: () => jE,
        RootContext: () => IE,
        Title: () => ME,
        iconStatusMap: () => LE,
        useAlertContext: () => NE
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => WP,
        CloseButton: () => ZP,
        Description: () => XP,
        Icon: () => KP,
        Link: () => YP,
        PaginationCounter: () => tS,
        PaginationNav: () => QP,
        PaginationNextButton: () => JP,
        PaginationPrevButton: () => eS,
        PaginationViewport: () => $P,
        Root: () => UP,
        RootContext: () => FP,
        iconStatusMap: () => GP,
        useAlertBannerContext: () => qP
      });
      var p = {};
      r.r(p), r.d(p, {
        CloseButton: () => bS,
        Icon: () => gS,
        Label: () => yS,
        Root: () => vS,
        RootContext: () => pS,
        useTagContext: () => mS
      });
      var m = {};
      r.r(m), r.d(m, {
        Icon: () => MS,
        Item: () => AS,
        OverflowMenu: () => DS,
        OverflowMenuItem: () => HS,
        Root: () => LS,
        RootContext: () => RS,
        useBreadcrumbsContext: () => kS
      });
      var v = {};
      r.r(v), r.d(v, {
        Icon: () => WS,
        Label: () => XS,
        Root: () => KS
      });
      var y = {};
      r.r(y), r.d(y, {
        ActionArea: () => VI,
        Button: () => KI,
        CloseButton: () => UI,
        Content: () => LI,
        Description: () => DI,
        Footer: () => FI,
        Header: () => zI,
        HeaderButton: () => GI,
        HeaderTitle: () => qI,
        Layout: () => BI,
        Overlay: () => RI,
        Portal: () => AI,
        Root: () => kI,
        ScrollArea: () => HI,
        Title: () => MI,
        Trigger: () => XI,
        useDialogContext: () => jI
      });
      var g = r(42295);

      function b(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class _ extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var w = _;

      function E(e) {
        if ("string" != typeof e) throw new w(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = N.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = S[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new w(e);
          return `#${r}`
        }(e) : e;
        const r = x.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(C(e, 2), 16))), parseInt(C(e[3] || "f", 2), 16) / 255]
        }
        const n = T.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 16))), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = O.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 10))), parseFloat(e[3] || "1")]
        }
        const i = I.exec(t);
        if (i) {
          const [t, r, n, o] = Array.from(i).slice(1).map(parseFloat);
          if (b(0, 100, r) !== r) throw new w(e);
          if (b(0, 100, n) !== n) throw new w(e);
          return [...k(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new w(e)
      }
      const P = e => parseInt(e.replace(/_/g, ""), 36),
        S = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce(((e, t) => {
          const r = P(t.substring(0, 3)),
            n = P(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }), {}),
        C = (e, t) => Array.from(Array(t)).map((() => e)).join(""),
        x = new RegExp(`^#${C("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        T = new RegExp(`^#${C("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        O = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${C(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        I = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        N = /^[a-z]+$/i,
        j = e => Math.round(255 * e),
        k = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(j);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * n - 1)) * (t / 100),
            a = i * (1 - Math.abs(o % 2 - 1));
          let s = 0,
            l = 0,
            c = 0;
          o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, c = a) : o >= 3 && o < 4 ? (l = a, c = i) : o >= 4 && o < 5 ? (s = a, c = i) : o >= 5 && o < 6 && (s = i, c = a);
          const u = n - i / 2;
          return [s + u, l + u, c + u].map(j)
        };

      function R(e, t) {
        const [r, n, o, i] = function(e) {
          const [t, r, n, o] = E(e).map(((e, t) => 3 === t ? e : e / 255)), i = Math.max(t, r, n), a = Math.min(t, r, n), s = (i + a) / 2;
          if (i === a) return [0, 0, s, o];
          const l = i - a;
          return [60 * (t === i ? (r - n) / l + (r < n ? 6 : 0) : r === i ? (n - t) / l + 2 : (t - r) / l + 4), s > .5 ? l / (2 - i - a) : l / (i + a), s, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${b(0,100,100*t).toFixed()}%, ${b(0,100,100*r).toFixed()}%, ${parseFloat(b(0,1,n).toFixed(3))})`
        }(r, n, o - t, i)
      }

      function L(e, t) {
        return R(e, -t)
      }
      var A = r(71127),
        M = r.n(A),
        D = r(23644);

      function H(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          (0, D.Bx)(t, ((e, t) => {
            if (null != e) {
              var o = (0, D.Jt)(n, t);
              r[(0, D.Tm)(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (r[(0, D.Tm)(i)] = a)
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
      var B = {
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
        V = r(71223);
      const z = e => {
        const t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      };

      function F(e) {
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

      function q(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? q(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = F(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function G(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var K = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        X = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = U(U({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) K(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return G(e.variantClassNames, (e => G(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        W = "var(--foundry_1qqcnua0)",
        $ = "var(--foundry_1qqcnua1)",
        Y = "var(--foundry_1qqcnua2)",
        Z = "var(--foundry_1qqcnua3)",
        Q = "var(--foundry_1qqcnua4)",
        J = "var(--foundry_1qqcnua5)",
        ee = "var(--foundry_1qqcnua6)",
        te = "var(--foundry_1qqcnua7)",
        re = "var(--foundry_1qqcnua8)",
        ne = "var(--foundry_1qqcnua9)",
        oe = "var(--foundry_1qqcnuaa)",
        ie = "var(--foundry_1qqcnuab)",
        ae = "var(--foundry_1qqcnuac)",
        se = "var(--foundry_1qqcnuad)",
        le = "var(--foundry_1qqcnuae)",
        ce = "var(--foundry_1qqcnuaf)",
        ue = "var(--foundry_1qqcnuag)",
        de = "var(--foundry_1qqcnuah)",
        fe = "var(--foundry_1qqcnuai)",
        he = "var(--foundry_1qqcnuaj)",
        pe = "var(--foundry_1qqcnuak)",
        me = "var(--foundry_1qqcnual)",
        ve = "var(--foundry_1qqcnuam)",
        ye = "var(--foundry_1qqcnuan)";
      X({
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
      }), X({
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
      }), X({
        defaultClassName: "foundry_tdsdcdr foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdt",
            bold: "foundry_tdsdcdu"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), X({
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
      }), X({
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
      const ge = {
          enabled: {
            background: z(W),
            border: z($),
            text: z(Y),
            outline: z(Z)
          },
          hover: {
            background: z(Q),
            border: z(J),
            text: z(ee),
            outline: z(te)
          },
          focus: {
            background: z(re),
            border: z(ne),
            text: z(oe),
            outline: z(ie)
          },
          pressed: {
            background: z(ae),
            border: z(se),
            text: z(le),
            outline: z(ce)
          },
          disabled: {
            background: z(ue),
            border: z(de),
            text: z(fe),
            outline: z(he)
          },
          loading: {
            background: z(pe),
            border: z(me),
            text: z(ve),
            outline: z(ye)
          }
        },
        be = ({
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
          (0, A.useEffect)((() => {
            if (!e.current || !i || !c) return;
            const u = `${i}:${t}:${r}`,
              {
                text: d,
                hover: f,
                pressed: h
              } = (0, V.getOrSet)(u, (() => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = E(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? B.black.static[100] : B.white.static[100]),
                  hover: a || (e >= r ? R(i, n) : L(i, n)),
                  pressed: s || (e >= r ? R(i, o) : L(i, o))
                }
              }));
            return e.current.style.setProperty(ge.enabled.background, i), e.current.style.setProperty(ge.enabled.border, i), e.current.style.setProperty(ge.enabled.text, d), e.current.style.setProperty(ge.hover.background, f), e.current.style.setProperty(ge.hover.border, f), e.current.style.setProperty(ge.hover.text, d), e.current.style.setProperty(ge.focus.background, f), e.current.style.setProperty(ge.focus.border, f), e.current.style.setProperty(ge.focus.text, d), e.current.style.setProperty(ge.pressed.background, h), e.current.style.setProperty(ge.pressed.border, h), e.current.style.setProperty(ge.pressed.text, d), e.current.style.setProperty(ge.loading.background, f), e.current.style.setProperty(ge.loading.border, f), e.current.style.setProperty(ge.loading.text, d), () => {
              e.current?.style.removeProperty(ge.enabled.background), e.current?.style.removeProperty(ge.enabled.border), e.current?.style.removeProperty(ge.enabled.text), e.current?.style.removeProperty(ge.hover.background), e.current?.style.removeProperty(ge.hover.border), e.current?.style.removeProperty(ge.hover.text), e.current?.style.removeProperty(ge.focus.background), e.current?.style.removeProperty(ge.focus.border), e.current?.style.removeProperty(ge.focus.text), e.current?.style.removeProperty(ge.pressed.background), e.current?.style.removeProperty(ge.pressed.border), e.current?.style.removeProperty(ge.pressed.text), e.current?.style.removeProperty(ge.loading.background), e.current?.style.removeProperty(ge.loading.border), e.current?.style.removeProperty(ge.loading.text)
            }
          }), [e.current, t, r, n, o, i, a, s, l, c, ...u])
        };

      function _e(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      r(55311);
      const we = "undefined" != typeof document ? A.useLayoutEffect : () => {};

      function Ee(e) {
        const t = (0, A.useRef)(null);
        return we((() => {
          t.current = e
        }), [e]), (0, A.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }
      const Pe = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Se = A.createContext(Pe),
        Ce = A.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let xe = new WeakMap;
      const Te = "function" == typeof A.useId ? function(e) {
        let t = A.useId(),
          [r] = (0, A.useState)(je());
        return e || `${r?"react-aria":`react-aria${Pe.prefix}`}-${t}`
      } : function(e) {
        let t = (0, A.useContext)(Se),
          r = function(e = !1) {
            let t = (0, A.useContext)(Se),
              r = (0, A.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = xe.get(e);
                null == r ? xe.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, xe.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function Oe() {
        return !1
      }

      function Ie() {
        return !0
      }

      function Ne(e) {
        return () => {}
      }

      function je() {
        return "function" == typeof A.useSyncExternalStore ? A.useSyncExternalStore(Ne, Oe, Ie) : (0, A.useContext)(Ce)
      }
      let ke, Re = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Le = new Map;

      function Ae(e) {
        let [t, r] = (0, A.useState)(e), n = (0, A.useRef)(null), o = Te(t), i = (0, A.useRef)(null);
        if (ke && ke.register(i, o), Re) {
          const e = Le.get(o);
          e && !e.includes(n) ? e.push(n) : Le.set(o, [n])
        }
        return we((() => {
          let e = o;
          return () => {
            ke && ke.unregister(i), Le.delete(e)
          }
        }), [o]), (0, A.useEffect)((() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        })), o
      }

      function Me(e, t) {
        if (e === t) return e;
        let r = Le.get(e);
        if (r) return r.forEach((e => e.current = t)), t;
        let n = Le.get(t);
        return n ? (n.forEach((t => t.current = e)), e) : t
      }

      function De(e = []) {
        let t = Ae(),
          [r, n] = function(e) {
            let [t, r] = (0, A.useState)(e), n = (0, A.useRef)(null), o = Ee((() => {
              if (!n.current) return;
              let e = n.current.next();
              e.done ? n.current = null : t === e.value ? o() : r(e.value)
            }));
            we((() => {
              n.current && o()
            }));
            let i = Ee((e => {
              n.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, A.useCallback)((() => {
            n((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, n]);
        return we(o, [t, o, ...e]), r
      }
      "undefined" != typeof FinalizationRegistry && (ke = new FinalizationRegistry((e => {
        Le.delete(e)
      })));
      var He = r(4572);

      function Be(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = _e(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Me(r, o) : t[e] = void 0 !== o ? o : r : t[e] = He(r, o)
          }
        }
        return t
      }
      const Ve = new Set(["id"]),
        ze = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Fe = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        qe = /^(data-.*)$/;

      function Ue(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (Ve.has(t) || r && ze.has(t) || n && Fe.has(t) || (null == o ? void 0 : o.has(t)) || qe.test(t)) && (i[t] = e[t]);
        return i
      }
      const Ge = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        Ke = Ge.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Ge.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const Xe = Ge.join(':not([hidden]):not([tabindex="-1"]),');

      function We(e) {
        return e.matches(Ke)
      }

      function $e(e) {
        return e.matches(Xe)
      }
      const Ye = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Ze = e => e && "window" in e && e.window === e ? e : Ye(e).defaultView || window;

      function Qe(e) {
        if (function() {
            if (null == Je) {
              Je = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Je = !0, !0
                  }
                })
              } catch {}
            }
            return Je
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
      let Je = null;

      function et(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function tt(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function rt(e) {
        let t = (0, A.useRef)({
          isFocused: !1,
          observer: null
        });
        we((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let r = Ee((t => {
          null == e || e(t)
        }));
        return (0, A.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = e.target,
              o = e => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = et(e);
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
      let nt = !1;

      function ot(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function it(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function at(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const st = at((function() {
          return it(/^Mac/i)
        })),
        lt = at((function() {
          return it(/^iPhone/i)
        })),
        ct = at((function() {
          return it(/^iPad/i) || st() && navigator.maxTouchPoints > 1
        })),
        ut = at((function() {
          return lt() || ct()
        })),
        dt = (at((function() {
          return st() || ut()
        })), at((function() {
          return ot(/AppleWebKit/i) && !ft()
        }))),
        ft = at((function() {
          return ot(/Chrome/i)
        })),
        ht = at((function() {
          return ot(/Android/i)
        })),
        pt = at((function() {
          return ot(/Firefox/i)
        }));
      let mt = new Map,
        vt = new Set;

      function yt() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = mt.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), mt.delete(r.target)), 0 === mt.size)) {
            for (let e of vt) e();
            vt.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = mt.get(r.target);
          n || (n = new Set, mt.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function gt(e) {
        requestAnimationFrame((() => {
          0 === mt.size ? e() : vt.add(e)
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? yt() : document.addEventListener("DOMContentLoaded", yt));
      let bt = "default",
        _t = "",
        wt = new WeakMap;

      function Et(e) {
        if (ut()) {
          if ("disabled" !== bt) return;
          bt = "restoring", setTimeout((() => {
            gt((() => {
              if ("restoring" === bt) {
                const t = Ye(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = _t || ""), _t = "", bt = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && wt.has(e)) {
          let t = wt.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), wt.delete(e)
        }
      }
      const Pt = A.createContext({
        register: () => {}
      });

      function St(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }

      function Ct(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, St(e, t, "get"))
      }

      function xt(e, t, r) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, r)
      }

      function Tt(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, St(e, t, "set"), r), r
      }

      function Ot(e, t) {
        we((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }

      function It() {
        let e = (0, A.useRef)(new Map),
          t = (0, A.useCallback)(((t, r, n, o) => {
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
          r = (0, A.useCallback)(((t, r, n, o) => {
            var i;
            let a = (null === (i = e.current.get(n)) || void 0 === i ? void 0 : i.fn) || n;
            t.removeEventListener(r, a, o), e.current.delete(n)
          }), []),
          n = (0, A.useCallback)((() => {
            e.current.forEach(((e, t) => {
              r(e.eventTarget, e.type, t, e.options)
            }))
          }), [r]);
        return (0, A.useEffect)((() => n), [n]), {
          addGlobalListener: t,
          removeGlobalListener: r,
          removeAllGlobalListeners: n
        }
      }
      Pt.displayName = "PressResponderContext";

      function Nt(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const jt = (e = document) => e.activeElement;

      function kt(e) {
        return e.target
      }
      const Rt = (0, A.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, (e => At(e, t)))
        },
        useHref: e => e
      });

      function Lt() {
        return (0, A.useContext)(Rt)
      }

      function At(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        pt() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (st() ? i = !0 : a = !0);
        let c = dt() && st() && !ct() ? new KeyboardEvent("keydown", {
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
        At.isOpening = r, Qe(e), e.dispatchEvent(c), At.isOpening = !1
      }

      function Mt(e) {
        var t;
        const r = Lt().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function Dt(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (ht() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      At.isOpening = !1;
      var Ht = r(18429),
        Bt = new WeakMap;
      class Vt {
        continuePropagation() {
          Tt(this, Bt, !1)
        }
        get shouldStopPropagation() {
          return Ct(this, Bt)
        }
        constructor(e, t, r, n) {
          var o;
          xt(this, Bt, {
            writable: !0,
            value: void 0
          }), Tt(this, Bt, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, c = 0,
            u = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, u = r.clientY), a && (null != l && null != u ? (s = l - a.left, c = u - a.top) : (s = a.width / 2, c = a.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = c
        }
      }
      const zt = Symbol("linkClicked");

      function Ft(e) {
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
          let t = (0, A.useContext)(Pt);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = Be(n, e), r()
          }
          return Ot(t, e.ref), e
        }(e), [p, m] = (0, A.useState)(!1), v = (0, A.useRef)({
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
        } = It(), b = Ee(((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new Vt("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), _ = Ee(((e, n, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Vt("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !s) {
            let r = new Vt("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), w = Ee(((e, t) => {
          let r = v.current;
          if (s) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new Vt("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), E = Ee((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(Gt(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || Et(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), P = Ee((e => {
          u && E(e)
        })), S = Ee((e => {
          null == a || a(e)
        })), C = Ee(((e, t) => {
          if (a) {
            let r = new MouseEvent("click", e);
            tt(r, t), a(et(r))
          }
        })), x = (0, A.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Ut(t.nativeEvent, t.currentTarget) && Nt(t.currentTarget, kt(t.nativeEvent))) {
                  var n;
                  Kt(kt(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        Ut(t, n) && !t.repeat && Nt(n, kt(t)) && e.target && w(Gt(e.target, t), "keyboard")
                      };
                    y(Ye(t.currentTarget), "keyup", _e(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && st() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || Nt(t.currentTarget, kt(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !At.isOpening) {
                  let r = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Dt(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      r = _(Gt(t.currentTarget, t), n, !0), e.isOverTarget = !1, S(t), E(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      n = w(t, "virtual"),
                      o = _(t, "virtual");
                    S(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && Ut(t, e.target)) {
                var n;
                Kt(kt(t), t.key) && t.preventDefault();
                let r = kt(t),
                  o = Nt(e.target, kt(t));
                _(Gt(e.target, t), "keyboard", o), o && C(t, e.target), g(), "Enter" !== t.key && qt(e.target) && Nt(e.target, r) && !t[zt] && (t[zt] = !0, At(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !Nt(t.currentTarget, kt(t.nativeEvent))) return;
              if (o = t.nativeEvent, !ht() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (ut()) {
                    if ("default" === bt) {
                      const t = Ye(e);
                      _t = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    bt = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    wt.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = kt(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Ye(t.currentTarget), "pointerup", r, !1), y(Ye(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (Nt(t.currentTarget, kt(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let r = function(e) {
                    for (; e && !We(e);) e = e.parentElement;
                    let t = Ze(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    nt = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, Qe(r), l()))
                      },
                      a = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, Qe(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), nt = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              Nt(t.currentTarget, kt(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && w(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(Gt(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(Gt(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (Nt(e.target, kt(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (Qe(e.target), e.target.click()))
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
              Nt(e.currentTarget, kt(e.nativeEvent)) && E(e)
            }
          }
          return t
        }), [y, s, c, g, d, E, P, _, b, w, S, C]);
        return (0, A.useEffect)((() => {
          let e = null == f ? void 0 : f.current;
          e && e instanceof Ze(e).Element && "auto" === Ze(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [f]), (0, A.useEffect)((() => {
          let e = v.current;
          return () => {
            var t;
            d || Et(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: l || p,
          pressProps: Be(h, x)
        }
      }

      function qt(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Ut(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Ze(o).HTMLInputElement && !Wt(o, r) || o instanceof Ze(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && qt(o)) && "Enter" !== r)
      }

      function Gt(e, t) {
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

      function Kt(e, t) {
        return e instanceof HTMLInputElement ? !Wt(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : qt(e)))
        }(e)
      }
      const Xt = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Wt(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Xt.has(e.type)
      }
      let $t = null,
        Yt = new Set,
        Zt = new Map,
        Qt = !1,
        Jt = !1;

      function er(e, t) {
        for (let r of Yt) r(e, t)
      }

      function tr(e) {
        Qt = !0,
          function(e) {
            return !(e.metaKey || !st() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && ($t = "keyboard", er("keyboard", e))
      }

      function rr(e) {
        $t = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Qt = !0, er("pointer", e))
      }

      function nr(e) {
        Dt(e) && (Qt = !0, $t = "virtual")
      }

      function or(e) {
        e.target !== window && e.target !== document && !nt && e.isTrusted && (Qt || Jt || ($t = "virtual", er("virtual", e)), Qt = !1, Jt = !1)
      }

      function ir() {
        nt || (Qt = !1, Jt = !0)
      }

      function ar(e) {
        if ("undefined" == typeof window || Zt.get(Ze(e))) return;
        const t = Ze(e),
          r = Ye(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Qt = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", tr, !0), r.addEventListener("keyup", tr, !0), r.addEventListener("click", nr, !0), t.addEventListener("focus", or, !0), t.addEventListener("blur", ir, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", rr, !0), r.addEventListener("pointermove", rr, !0), r.addEventListener("pointerup", rr, !0)), t.addEventListener("beforeunload", (() => {
          sr(e)
        }), {
          once: !0
        }), Zt.set(t, {
          focus: n
        })
      }
      const sr = (e, t) => {
        const r = Ze(e),
          n = Ye(e);
        t && n.removeEventListener("DOMContentLoaded", t), Zt.has(r) && (r.HTMLElement.prototype.focus = Zt.get(r).focus, n.removeEventListener("keydown", tr, !0), n.removeEventListener("keyup", tr, !0), n.removeEventListener("click", nr, !0), r.removeEventListener("focus", or, !0), r.removeEventListener("blur", ir, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", rr, !0), n.removeEventListener("pointermove", rr, !0), n.removeEventListener("pointerup", rr, !0)), Zt.delete(r))
      };

      function lr(e) {
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
        const t = Ye(e);
        let r;
        "loading" !== t.readyState ? ar(e) : (r = () => {
          ar(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let cr = A.createContext(null);

      function ur(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: n,
            onFocusChange: o
          } = e;
          const i = (0, A.useCallback)((e => {
              if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
            }), [n, o]),
            a = rt(i),
            s = (0, A.useCallback)((e => {
              const t = Ye(e.target),
                n = t ? jt(t) : jt();
              e.target === e.currentTarget && n === kt(e.nativeEvent) && (r && r(e), o && o(!0), a(e))
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
              onKeyDown: lr(e.onKeyDown),
              onKeyUp: lr(e.onKeyUp)
            }
          }
        }(e), o = Be(r, n), i = function(e) {
          let t = (0, A.useContext)(cr) || {};
          Ot(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), a = e.isDisabled ? {} : i, s = (0, A.useRef)(e.autoFocus);
        (0, A.useEffect)((() => {
          s.current && t.current && function(e) {
            const t = Ye(e),
              r = jt(t);
            if ("virtual" === $t) {
              let n = r;
              gt((() => {
                jt(t) === n && e.isConnected && Qe(e)
              }))
            } else Qe(e)
          }(t.current), s.current = !1
        }), [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Be({
            ...o,
            tabIndex: l
          }, a)
        }
      }

      function dr(e, t) {
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
        } = Ft({
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
        } = ur(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let _ = Be(b, y, Ue(e, {
          labelable: !0
        }));
        return {
          isPressed: g,
          buttonProps: Be(r, _, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"]
          })
        }
      }
      var fr = r(52360),
        hr = r(35205),
        pr = r(21222),
        mr = r(63694),
        vr = r(33736),
        yr = r(63540),
        gr = r(83115),
        br = r(7492),
        _r = ({
          children: e,
          label: t
        }) => {
          const r = A.Children.only(e);
          return (0, g.jsxs)(g.Fragment, {
            children: [A.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, g.jsx)(br.Root, {
              children: t
            })]
          })
        };
      _r.displayName = "AccessibleIcon";
      var wr = _r;

      function Er(e) {
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

      function Pr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Sr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pr(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Er(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pr(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Cr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var xr, Tr, Or = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ir = (xr = {
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
        }, Tr = e => {
          var t = xr.defaultClassName,
            r = Sr(Sr({}, xr.defaultVariants), e);
          for (var n in r) {
            var o, i = null !== (o = r[n]) && void 0 !== o ? o : xr.defaultVariants[n];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = xr.variantClassNames[n][a];
              s && (t += " " + s)
            }
          }
          for (var [l, c] of xr.compoundVariants) Or(l, r, xr.defaultVariants) && (t += " " + c);
          return t
        }, Tr.variants = () => Object.keys(xr.variantClassNames), Tr.classNames = {
          get base() {
            return xr.defaultClassName.split(" ")[0]
          },
          get variants() {
            return Cr(xr.variantClassNames, (e => Cr(e, (e => e.split(" ")[0]))))
          }
        }, Tr);
      const Nr = "pageMD",
        jr = (0, A.forwardRef)((({
          label: e,
          hideTrack: t = !1,
          size: r = Nr,
          testId: n,
          ...o
        }, i) => {
          const a = (0, vr.zQ)(),
            s = "string" == typeof r ? r : r?.[a] ?? r.default ?? Nr,
            l = (0, gr.mergeProps)({
              className: Ir({
                size: s
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, g.jsx)(wr, {
            label: e,
            children: (0, g.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: i,
              viewBox: "0 0 16 16",
              children: [!t && (0, g.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, g.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        }));
      var kr = r(71214),
        Rr = r.t(kr, 2);

      function Lr(e) {
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

      function Ar(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Mr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ar(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Lr(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ar(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Dr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Hr = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Br = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mr(Mr({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Hr(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dr(e.variantClassNames, (e => Dr(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Vr = Br({
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
      Br({
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
      var zr = Br({
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
      const Fr = (0, A.forwardRef)((({
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
        override_pressedColor: b,
        override_textColor: _,
        ...w
      }, E) => {
        const P = (0, A.useRef)(null),
          S = function(...e) {
            const t = (0, A.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }(P, E),
          C = (0, vr.zQ)(),
          x = "string" == typeof l ? l : l?.[C] ?? l.default ?? "MD",
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
            } = (0, fr.b)(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: c
            } = dr({
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
              buttonProps: (0, hr.v)(e ? {} : u, {
                ...a,
                className: t
              })
            }
          })((0, yr.mergeProps)(w, {
            isLoading: u
          }), P);
        be({
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
            pressedColor: b,
            textColor: _
          },
          enabled: "accent" === s
        }, [t]);
        const O = (0, yr.mergeProps)({
            className: Vr({
              appearance: s,
              size: x,
              fullWidth: c,
              iconLeft: !!n,
              iconRight: !!i,
              isLoading: u
            }),
            "data-testid": e
          }, T),
          I = n && Rr[n],
          N = i && Rr[i],
          j = t ? pr.Slot : "button",
          k = c && (N || N && I);
        return (0, g.jsxs)(j, {
          ref: S,
          ...O,
          children: [k && (0, g.jsx)("div", {
            className: "foundry_17pcofyx"
          }), I && (0, g.jsx)(I, {
            label: o || "",
            size: x,
            className: "foundry_17pcofyt"
          }), (0, g.jsx)(pr.Slottable, {
            children: r
          }), N && (0, g.jsx)(N, {
            label: a || "",
            size: x,
            className: zr({
              fullWidth: c
            })
          }), u && (0, g.jsx)("div", {
            className: "foundry_17pcofyy",
            children: (0, g.jsx)(jr, {
              label: d || "",
              size: "inline" + ("LG" === x ? "LG" : "MD"),
              hideTrack: !0
            })
          })]
        })
      }));
      var qr = r(68138);

      function Ur(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => qr.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, A.useState)((() => r ? n(e) : t));

        function a() {
          i(n(e))
        }
        return (0, A.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
            t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
          }
        }), [e]), o
      }
      const Gr = () => Ur("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function Kr(e) {
        const t = (0, A.useRef)(e);
        return (0, A.useEffect)((() => {
          t.current = e
        })), (0, A.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      var Xr = r(10907);

      function Wr({
        prop: e,
        defaultProp: t,
        onChange: r = () => {}
      }) {
        const [n, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, A.useState)(e),
            [n] = r,
            o = (0, A.useRef)(n),
            i = Kr(t);
          return (0, A.useEffect)((() => {
            o.current !== n && (i(n), o.current = n)
          }), [n, o, i]), r
        }({
          defaultProp: t,
          onChange: r
        }), i = void 0 !== e, a = i ? e : n, s = Kr(r), l = (0, A.useCallback)((t => {
          if (i) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && s(r)
          } else o(t)
        }), [i, e, o, s]);
        return [a, l]
      }

      function $r(e, t, r, n) {
        const o = (0, A.useRef)(t);
        (0, A.useEffect)((() => {
          o.current = t
        }), [t]), (0, A.useEffect)((() => {
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

      function Yr(e = !0) {
        const t = Ur("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      const Zr = (e, t = []) => {
        const r = (0, A.useRef)(!1);
        (0, A.useEffect)((() => (r.current = !0, () => {
          r.current = !1
        })), []), (0, A.useEffect)((() => {
          r.current && e()
        }), [...t])
      };
      r(38476);
      var Qr = r(35873),
        Jr = r(75891);
      const en = {
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

      function tn(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function rn(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -tn(t - e, r - t, n) + t : e > r ? +tn(e - r, r - t, n) + r : e
      }

      function nn(e, t, r) {
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

      function on(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function an(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? on(Object(r), !0).forEach((function(t) {
            nn(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : on(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      const sn = {
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

      function ln(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const cn = ["enter", "leave"];
      const un = ["gotpointercapture", "lostpointercapture"];

      function dn(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = un.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function fn(e) {
        return "touches" in e
      }

      function hn(e) {
        return fn(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function pn(e) {
        return fn(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function mn(e, t) {
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

      function vn(e, t) {
        const [r, n] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return mn(r, n)
      }

      function yn(e) {
        const t = pn(e);
        return fn(e) ? t.identifier : t.pointerId
      }

      function gn(e) {
        const t = pn(e);
        return [t.clientX, t.clientY]
      }

      function bn(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function _n(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function wn() {}

      function En(...e) {
        return 0 === e.length ? wn : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function Pn(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Sn {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? _n(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            en.addTo(t._distance, e)
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
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = _n(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
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
              return [rn(t, i, a, n), rn(r, s, l, o)]
            }(t._bounds, t.offset, _), t.delta = en.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = en.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            en.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(an(an(an({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Cn extends Sn {
        constructor(...e) {
          super(...e), nn(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = en.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = en.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[hn(e)] : r.axisThreshold;
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
      const xn = e => e,
        Tn = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => an(an({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return en.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? en.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || xn
          },
          threshold: e => en.toVector(e, 0)
        },
        On = an(an({}, Tn), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => On.bounds(e(t));
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
        In = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Nn = "undefined" != typeof window && window.document && window.document.createElement;

      function jn() {
        return Nn && "ontouchstart" in window
      }
      const kn = {
          isBrowser: Nn,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: jn(),
          touchscreen: jn() || Nn && window.navigator.maxTouchPoints > 1,
          pointer: Nn && "onpointerdown" in window,
          pointerLock: Nn && "exitPointerLock" in window.document
        },
        Rn = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Ln = an(an({}, On), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && kn.pointerLock, kn.touch && r ? "touch" : this.pointerLock ? "mouse" : kn.pointer && !o ? "pointer" : kn.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, kn.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const i = en.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(en.toVector(e)),
              distance: this.transform(en.toVector(t)),
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
          axisThreshold: e => e ? an(an({}, Rn), e) : Rn,
          keyboardDisplacement: (e = 10) => e
        });

      function An(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, a] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && a < 0 || r > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Mn = an(an({}, Tn), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !kn.touch && kn.gesture) return "gesture";
            if (kn.touch && n) return "touch";
            if (kn.touchscreen) {
              if (kn.pointer) return "pointer";
              if (kn.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = Pn(_n(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = Pn(_n(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, en.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Dn = an(an({}, On), {}, {
          mouseOnly: (e = !0) => e
        }),
        Hn = On,
        Bn = On,
        Vn = an(an({}, On), {}, {
          mouseOnly: (e = !0) => e
        }),
        zn = new Map,
        Fn = new Map;

      function qn(e) {
        zn.set(e.key, e.engine), Fn.set(e.key, e.resolver)
      }
      const Un = {
          key: "drag",
          engine: class extends Cn {
            constructor(...e) {
              super(...e), nn(this, "ingKey", "dragging")
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
                e._bounds = On.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = yn(e), r._pointerActive = !0, this.computeValues(gn(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== hn(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = yn(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = gn(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = en.sub(o, t._values), this.computeValues(o)), en.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = yn(e);
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
              const t = In[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, en.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in In && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Ln
        },
        Gn = {
          key: "hover",
          engine: class extends Cn {
            constructor(...e) {
              super(...e), nn(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(gn(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = gn(e);
              t._movement = t._delta = en.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Vn
        },
        Kn = {
          key: "move",
          engine: class extends Cn {
            constructor(...e) {
              super(...e), nn(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(gn(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = gn(e),
                r = this.state;
              r._delta = en.sub(t, r._values), en.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Dn
        },
        Xn = {
          key: "pinch",
          engine: class extends Sn {
            constructor(...e) {
              super(...e), nn(this, "ingKey", "pinching"), nn(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? en.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = vn(e, t._touchIds);
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
              const o = mn(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = vn(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = mn(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = en.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-bn(e)[1] / 100 * t.offset[0], 0], en.addTo(t._movement, t._delta), An(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Mn
        },
        Wn = {
          key: "scroll",
          engine: class extends Cn {
            constructor(...e) {
              super(...e), nn(this, "ingKey", "scrolling")
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
              t._delta = en.sub(r, t._values), en.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Hn
        },
        $n = {
          key: "wheel",
          engine: class extends Cn {
            constructor(...e) {
              super(...e), nn(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = bn(e), en.addTo(t._movement, t._delta), An(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Bn
        };
      const Yn = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (kn.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Zn = ["target", "eventOptions", "window", "enabled", "transform"];

      function Qn(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = Qn(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class Jn {
        constructor(e, t) {
          nn(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            a = function(e, t = "") {
              const r = sn[e];
              return e + (r && r[t] || t)
            }(t, r),
            s = an(an({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class eo {
        constructor() {
          nn(this, "_timeouts", new Map)
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
      class to {
        constructor(e) {
          var t, r;
          nn(this, "gestures", new Set), nn(this, "_targetEventStore", new Jn(this)), nn(this, "gestureEventStores", {}), nn(this, "gestureTimeoutStores", {}), nn(this, "handlers", {}), nn(this, "config", {}), nn(this, "pointerIds", new Set), nn(this, "touchIds", new Set), nn(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && ro(t, "drag"), r.wheel && ro(t, "wheel"), r.scroll && ro(t, "scroll"), r.move && ro(t, "move"), r.pinch && ro(t, "pinch"), r.hover && ro(t, "hover")
        }
        setEventIds(e) {
          return fn(e) ? (this.touchIds = new Set(function(e) {
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
              }(n, Zn);
            if (r.shared = Qn({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, Yn), t) {
              const e = Fn.get(t);
              r[t] = Qn(an({
                shared: r.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = Fn.get(e);
                t && (r[e] = Qn(an({
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
                  i = no(r, o.eventOptions, !!n);
                o.enabled && new(zn.get(t))(this, e, t).bind(i)
              }
              const o = no(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", (r => this.nativeHandlers[t](an(an({}, this.state.shared), {}, {
                event: r,
                args: e
              }))), void 0, !0)
            }
            for (const e in r) r[e] = En(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: i
              } = dn(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function ro(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Jn(e, t), e.gestureTimeoutStores[t] = new eo
      }
      const no = (e, t, r) => (n, o, i, a = {}, s = !1) => {
          var l, c;
          const u = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = a.passive) && void 0 !== c ? c : t.passive;
          let f = s ? n : function(e, t = "", r = !1) {
            const n = sn[e],
              o = n && n[t] || t;
            return "on" + ln(e) + ln(o) + (function(e = !1, t) {
              return e && !cn.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        oo = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function io(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!zn.has(n)) return;
        const a = r + "Start",
          s = r + "End";
        o[n] = e => {
          let n;
          return e.first && a in t && t[a](e), r in t && (n = t[r](e)), e.last && s in t && t[s](e), n
        }, i[n] = i[n] || {}
      }

      function ao(e, t = {}, r, n) {
        const o = M().useMemo((() => new to(e)), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), M().useEffect(o.effect.bind(o)), M().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
      }

      function so(e, t) {
        const r = ([Un, Xn, Wn, $n, Kn, Gn].forEach(qn), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) oo.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return io(o, r, "onDrag", "drag", i, t), io(o, r, "onWheel", "wheel", i, t), io(o, r, "onScroll", "scroll", i, t), io(o, r, "onPinch", "pinch", i, t), io(o, r, "onMove", "move", i, t), io(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return ao(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      var lo = Co(),
        co = e => wo(e, lo),
        uo = Co();
      co.write = e => wo(e, uo);
      var fo = Co();
      co.onStart = e => wo(e, fo);
      var ho = Co();
      co.onFrame = e => wo(e, ho);
      var po = Co();
      co.onFinish = e => wo(e, po);
      var mo = [];
      co.setTimeout = (e, t) => {
        const r = co.now() + t,
          n = () => {
            const e = mo.findIndex((e => e.cancel == n));
            ~e && mo.splice(e, 1), bo -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return mo.splice(vo(r), 0, o), bo += 1, Eo(), o
      };
      var vo = e => ~(~mo.findIndex((t => t.time > e)) || ~mo.length);
      co.cancel = e => {
        fo.delete(e), ho.delete(e), po.delete(e), lo.delete(e), uo.delete(e)
      }, co.sync = e => {
        _o = !0, co.batchedUpdates(e), _o = !1
      }, co.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, co.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          fo.delete(r), t = null
        }, n
      };
      var yo = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      co.use = e => yo = e, co.now = "undefined" != typeof performance ? () => performance.now() : Date.now, co.batchedUpdates = e => e(), co.catch = console.error, co.frameLoop = "always", co.advance = () => {
        "demand" !== co.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : So()
      };
      var go = -1,
        bo = 0,
        _o = !1;

      function wo(e, t) {
        _o ? (t.delete(e), e(0)) : (t.add(e), Eo())
      }

      function Eo() {
        go < 0 && (go = 0, "demand" !== co.frameLoop && yo(Po))
      }

      function Po() {
        ~go && (yo(Po), co.batchedUpdates(So))
      }

      function So() {
        const e = go;
        go = co.now();
        const t = vo(go);
        t && (xo(mo.splice(0, t), (e => e.handler())), bo -= t), bo ? (fo.flush(), lo.flush(e ? Math.min(64, go - e) : 16.667), ho.flush(), uo.flush(), po.flush()) : go = -1
      }

      function Co() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            bo += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (bo -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, bo -= t.size, xo(t, (t => t(r) && e.add(t))), bo += e.size, t = e)
          }
        }
      }

      function xo(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            co.catch(e)
          }
        }))
      }
      var To = Object.defineProperty,
        Oo = {};

      function Io() {}((e, t) => {
        for (var r in t) To(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Oo, {
        assign: () => qo,
        colors: () => Vo,
        createStringInterpolator: () => Mo,
        skipAnimation: () => zo,
        to: () => Do,
        willAdvance: () => Fo
      });
      var No = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function jo(e, t) {
        if (No.arr(e)) {
          if (!No.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var ko = (e, t) => e.forEach(t);

      function Ro(e, t, r) {
        if (No.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Lo = e => No.und(e) ? [] : No.arr(e) ? e : [e];

      function Ao(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), ko(r, t)
        }
      }
      var Mo, Do, Ho = (e, ...t) => Ao(e, (e => e(...t))),
        Bo = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Vo = null,
        zo = !1,
        Fo = Io,
        qo = e => {
          e.to && (Do = e.to), e.now && (co.now = e.now), void 0 !== e.colors && (Vo = e.colors), null != e.skipAnimation && (zo = e.skipAnimation), e.createStringInterpolator && (Mo = e.createStringInterpolator), e.requestAnimationFrame && co.use(e.requestAnimationFrame), e.batchedUpdates && (co.batchedUpdates = e.batchedUpdates), e.willAdvance && (Fo = e.willAdvance), e.frameLoop && (co.frameLoop = e.frameLoop)
        },
        Uo = new Set,
        Go = [],
        Ko = [],
        Xo = 0,
        Wo = {
          get idle() {
            return !Uo.size && !Go.length
          },
          start(e) {
            Xo > e.priority ? (Uo.add(e), co.onStart($o)) : (Yo(e), co(Qo))
          },
          advance: Qo,
          sort(e) {
            if (Xo) co.onFrame((() => Wo.sort(e)));
            else {
              const t = Go.indexOf(e);
              ~t && (Go.splice(t, 1), Zo(e))
            }
          },
          clear() {
            Go = [], Uo.clear()
          }
        };

      function $o() {
        Uo.forEach(Yo), Uo.clear(), co(Qo)
      }

      function Yo(e) {
        Go.includes(e) || Zo(e)
      }

      function Zo(e) {
        Go.splice(function(t) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(Go), 0, e)
      }

      function Qo(e) {
        const t = Ko;
        for (let r = 0; r < Go.length; r++) {
          const n = Go[r];
          Xo = n.priority, n.idle || (Fo(n), n.advance(e), n.idle || t.push(n))
        }
        return Xo = 0, (Ko = Go).length = 0, (Go = t).length > 0
      }
      var Jo = "[-+]?\\d*\\.?\\d+",
        ei = Jo + "%";

      function ti(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var ri = new RegExp("rgb" + ti(Jo, Jo, Jo)),
        ni = new RegExp("rgba" + ti(Jo, Jo, Jo, Jo)),
        oi = new RegExp("hsl" + ti(Jo, ei, ei)),
        ii = new RegExp("hsla" + ti(Jo, ei, ei, Jo)),
        ai = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        si = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        li = /^#([0-9a-fA-F]{6})$/,
        ci = /^#([0-9a-fA-F]{8})$/;

      function ui(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function di(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = ui(o, n, e + 1 / 3),
          a = ui(o, n, e),
          s = ui(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function fi(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function hi(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function pi(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function mi(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function vi(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = li.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Vo && void 0 !== Vo[e] ? Vo[e] : (t = ri.exec(e)) ? (fi(t[1]) << 24 | fi(t[2]) << 16 | fi(t[3]) << 8 | 255) >>> 0 : (t = ni.exec(e)) ? (fi(t[1]) << 24 | fi(t[2]) << 16 | fi(t[3]) << 8 | pi(t[4])) >>> 0 : (t = ai.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = ci.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = si.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = oi.exec(e)) ? (255 | di(hi(t[1]), mi(t[2]), mi(t[3]))) >>> 0 : (t = ii.exec(e)) ? (di(hi(t[1]), mi(t[2]), mi(t[3])) | pi(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var yi = (e, t, r) => {
          if (No.fun(e)) return e;
          if (No.arr(e)) return yi({
            range: e,
            output: t,
            extrapolate: r
          });
          if (No.str(e.output[0])) return Mo(e);
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
        gi = 1.70158,
        bi = 1.525 * gi,
        _i = gi + 1,
        wi = 2 * Math.PI / 3,
        Ei = 2 * Math.PI / 4.5,
        Pi = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Si = {
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
          easeInBack: e => _i * e * e * e - gi * e * e,
          easeOutBack: e => 1 + _i * Math.pow(e - 1, 3) + gi * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - bi) / 2 : (Math.pow(2 * e - 2, 2) * ((bi + 1) * (2 * e - 2) + bi) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * wi),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * wi) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ei) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ei) / 2 + 1,
          easeInBounce: e => 1 - Pi(1 - e),
          easeOutBounce: Pi,
          easeInOutBounce: e => e < .5 ? (1 - Pi(1 - 2 * e)) / 2 : (1 + Pi(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Ci = Symbol.for("FluidValue.get"),
        xi = Symbol.for("FluidValue.observers"),
        Ti = e => Boolean(e && e[Ci]),
        Oi = e => e && e[Ci] ? e[Ci]() : e,
        Ii = e => e[xi] || null;

      function Ni(e, t) {
        const r = e[xi];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var ji = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            ki(this, e)
          }
        },
        ki = (e, t) => Mi(e, Ci, t);

      function Ri(e, t) {
        if (e[Ci]) {
          let r = e[xi];
          r || Mi(e, xi, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Li(e, t) {
        const r = e[xi];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[xi] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var Ai, Mi = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Di = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Hi = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Bi = new RegExp(`(${Di.source})(%|[a-z]+)`, "i"),
        Vi = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        zi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Fi = e => {
          const [t, r] = qi(e);
          if (!t || Bo()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && zi.test(r) ? Fi(r) : r || e
        },
        qi = e => {
          const t = zi.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        Ui = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        Gi = e => {
          Ai || (Ai = Vo ? new RegExp(`(${Object.keys(Vo).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Oi(e).replace(zi, Fi).replace(Hi, vi).replace(Ai, vi))),
            r = t.map((e => e.match(Di).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = n.map((t => yi({
              ...e,
              output: t
            })));
          return e => {
            const r = !Bi.test(t[0]) && t.find((e => Bi.test(e)))?.replace(Di, "");
            let n = 0;
            return t[0].replace(Di, (() => `${o[n++](e)}${r||""}`)).replace(Vi, Ui)
          }
        },
        Ki = "react-spring: ",
        Xi = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${Ki}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Wi = Xi(console.warn),
        $i = Xi(console.warn);

      function Yi(e) {
        return No.str(e) && ("#" == e[0] || /\d/.test(e) || !Bo() && zi.test(e) || e in (Vo || {}))
      }
      var Zi = Bo() ? A.useEffect : A.useLayoutEffect;

      function Qi() {
        const e = (0, A.useState)()[1],
          t = (() => {
            const e = (0, A.useRef)(!1);
            return Zi((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Ji = e => (0, A.useEffect)(e, ea),
        ea = [];

      function ta(e) {
        const t = (0, A.useRef)();
        return (0, A.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var ra = Symbol.for("Animated:node"),
        na = e => e && e[ra],
        oa = (e, t) => {
          return r = e, n = ra, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        ia = e => e && e[ra] && e[ra].getPayload(),
        aa = class {
          constructor() {
            oa(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        sa = class extends aa {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, No.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new sa(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return No.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, No.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        la = class extends sa {
          constructor(e) {
            super(0), this._string = null, this._toString = yi({
              output: [e, e]
            })
          }
          static create(e) {
            return new la(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (No.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = yi({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        ca = {
          dependencies: null
        },
        ua = class extends aa {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Ro(this.source, ((r, n) => {
              var o;
              (o = r) && o[ra] === o ? t[n] = r.getValue(e) : Ti(r) ? t[n] = Oi(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && ko(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Ro(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            ca.dependencies && Ti(e) && ca.dependencies.add(e);
            const t = ia(e);
            t && ko(t, (e => this.add(e)))
          }
        },
        da = class extends ua {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new da(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(fa)), !0)
          }
        };

      function fa(e) {
        return (Yi(e) ? la : sa).create(e)
      }

      function ha(e) {
        const t = na(e);
        return t ? t.constructor : No.arr(e) ? da : Yi(e) ? la : sa
      }
      var pa = (e, t) => {
          const r = !No.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, A.forwardRef)(((n, o) => {
            const i = (0, A.useRef)(null),
              a = r && (0, A.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (No.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return ca.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new ua(e), ca.dependencies = null, [e, r]
              }(n, t),
              c = Qi(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new ma(u, l),
              f = (0, A.useRef)();
            Zi((() => (f.current = d, ko(l, (e => Ri(e, d))), () => {
              f.current && (ko(f.current.deps, (e => Li(e, f.current))), co.cancel(f.current.update))
            }))), (0, A.useEffect)(u, []), Ji((() => () => {
              const e = f.current;
              ko(e.deps, (t => Li(t, e)))
            }));
            const h = t.getComponentProps(s.getValue());
            return A.createElement(e, {
              ...h,
              ref: a
            })
          }))
        },
        ma = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && co.write(this.update)
          }
        },
        va = Symbol.for("AnimatedComponent"),
        ya = e => No.str(e) ? e : e && No.str(e.displayName) ? e.displayName : No.fun(e) && e.name || null;

      function ga(e, ...t) {
        return No.fun(e) ? e(...t) : e
      }
      var ba = (e, t) => !0 === e || !!(t && e && (No.fun(e) ? e(t) : Lo(e).includes(t))),
        _a = (e, t) => No.obj(e) ? t && e[t] : e,
        wa = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Ea = e => e,
        Pa = (e, t = Ea) => {
          let r = Sa;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            No.und(r) || (n[o] = r)
          }
          return n
        },
        Sa = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Ca = {
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

      function xa(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Ro(e, ((e, n) => {
              Ca[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Ro(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function Ta(e) {
        return e = Oi(e), No.arr(e) ? e.map(Ta) : Yi(e) ? Oo.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Oa(e) {
        for (const t in e) return !0;
        return !1
      }

      function Ia(e) {
        return No.fun(e) || No.arr(e) && No.obj(e[0])
      }

      function Na(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function ja(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var ka = {
          tension: 170,
          friction: 26
        },
        Ra = {
          ...ka,
          mass: 1,
          damping: 1,
          easing: Si.linear,
          clamp: !1
        },
        La = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Ra)
          }
        };

      function Aa(e, t) {
        if (No.und(t.decay)) {
          const r = !No.und(t.tension) || !No.und(t.friction);
          !r && No.und(t.frequency) && No.und(t.damping) && No.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Ma = [],
        Da = class {
          constructor() {
            this.changed = !1, this.values = Ma, this.toValues = null, this.fromValues = Ma, this.config = new La, this.immediate = !1
          }
        };

      function Ha(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, c, u = ba(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            No.und(r.pause) || (o.paused = ba(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || ba(e, t)), l = ga(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - co.now()
          }

          function f() {
            l > 0 && !Oo.skipAnimation ? (o.delayed = !0, c = co.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
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
      var Ba = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Fa(e.get()) : t.every((e => e.noop)) ? Va(e.get()) : za(e.get(), t.every((e => e.finished))),
        Va = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        za = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        Fa = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function qa(e, t, r, n) {
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
          const c = Pa(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const f = new Promise(((e, t) => (u = e, d = t))),
            h = e => {
              const t = o <= (r.cancelId || 0) && Fa(n) || o !== r.asyncId && za(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new Ga,
                a = new Ka;
              return (async () => {
                if (Oo.skipAnimation) throw Ua(r), a.result = za(n, !1), d(a), a;
                h(i);
                const s = No.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Ro(c, ((e, t) => {
                  No.und(s[t]) && (s[t] = e)
                }));
                const l = await n.start(s);
                return h(i), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (Oo.skipAnimation) return Ua(r), za(n, !1);
          try {
            let t;
            t = No.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = za(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof Ga) m = e.result;
            else {
              if (!(e instanceof Ka)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? s : void 0, r.promise = i ? l : void 0)
          }
          return No.fun(a) && co.batchedUpdates((() => {
            a(m, n, n.item)
          })), m
        })() : l
      }

      function Ua(e, t) {
        Ao(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Ga = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Ka = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Xa = e => e instanceof $a,
        Wa = 1,
        $a = class extends ji {
          constructor() {
            super(...arguments), this.id = Wa++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = na(this);
            return e && e.getValue()
          }
          to(...e) {
            return Oo.to(this, e)
          }
          interpolate(...e) {
            return Wi(`${Ki}The "interpolate" function is deprecated in v9 (use "to" instead)`), Oo.to(this, e)
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
            Ni(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Wo.sort(this), Ni(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Ya = Symbol.for("SpringPhase"),
        Za = e => (1 & e[Ya]) > 0,
        Qa = e => (2 & e[Ya]) > 0,
        Ja = e => (4 & e[Ya]) > 0,
        es = (e, t) => t ? e[Ya] |= 3 : e[Ya] &= -3,
        ts = (e, t) => t ? e[Ya] |= 4 : e[Ya] &= -5,
        rs = class extends $a {
          constructor(e, t) {
            if (super(), this.animation = new Da, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !No.und(e) || !No.und(t)) {
              const r = No.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              No.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Qa(this) || this._state.asyncTo) || Ja(this)
          }
          get goal() {
            return Oi(this.animation.to)
          }
          get velocity() {
            const e = na(this);
            return e instanceof sa ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return Za(this)
          }
          get isAnimating() {
            return Qa(this)
          }
          get isPaused() {
            return Ja(this)
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
            } = n, a = ia(n.to);
            !a && Ti(n.to) && (o = Lo(Oi(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              const c = s.constructor == la ? 1 : a ? a[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = No.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (No.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(s.lastPosition - d) <= f, a = o * n
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !No.und(n),
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
            const s = na(this),
              l = s.getValue();
            if (t) {
              const e = Oi(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return co.batchedUpdates((() => {
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
            if (Qa(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              co.batchedUpdates((() => {
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
            return No.und(e) ? (r = this.queue || [], this.queue = []) : r = [No.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => Ba(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), Ua(this._state, e && this._lastCallId), co.batchedUpdates((() => this._stop(t, e))), this
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
            r = No.obj(r) ? r[t] : r, (null == r || Ia(r)) && (r = void 0), n = No.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return Za(this) || (e.reverse && ([r, n] = [n, r]), n = Oi(n), No.und(n) ? na(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, Pa(e, ((e, t) => /^on/.test(t) ? _a(e, r) : e))), cs(this, e, "onProps"), us(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Ha(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  Ja(this) || (ts(this, !0), Ho(i.pauseQueue), us(this, "onPause", za(this, ns(this, this.animation.to)), this))
                },
                resume: () => {
                  Ja(this) && (ts(this, !1), Qa(this) && this._resume(), Ho(i.resumeQueue), us(this, "onResume", za(this, ns(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = os(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(Fa(this));
            const n = !No.und(e.to),
              o = !No.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(Fa(this));
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
            !o || n || t.default && !No.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !jo(d, c);
            f && (s.from = d), d = Oi(d);
            const h = !jo(u, l);
            h && this._focus(u);
            const p = Ia(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (Aa(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Aa(e, t), Object.assign(e, t);
              for (const t in Ra) null == e[t] && (e[t] = Ra[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              No.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, ga(t.config, i), t.config !== a.config ? ga(a.config, i) : void 0);
            let g = na(this);
            if (!g || No.und(u)) return r(za(this, !0));
            const b = No.und(t.reset) ? o && !t.default : !No.und(d) && ba(t.reset, i),
              _ = b ? d : this.get(),
              w = Ta(u),
              E = No.num(w) || No.arr(w) || Yi(w),
              P = !p && (!E || ba(a.immediate || t.immediate, i));
            if (h) {
              const e = ha(u);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const S = g.constructor;
            let C = Ti(u),
              x = !1;
            if (!C) {
              const e = b || !Za(this) && f;
              (h || e) && (x = jo(Ta(_), w), C = !x), (jo(s.immediate, P) || P) && jo(m.decay, v) && jo(m.velocity, y) || (C = !0)
            }
            if (x && Qa(this) && (s.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || Ti(l)) && (s.values = g.getPayload(), s.toValues = Ti(u) ? null : S == la ? [1] : Lo(w)), s.immediate != P && (s.immediate = P, P || b || this._set(l)), C)) {
              const {
                onRest: e
              } = s;
              ko(ls, (e => cs(this, t, e)));
              const n = za(this, ns(this, l));
              Ho(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && co.batchedUpdates((() => {
                s.changed = !b, e?.(n, this), b ? ga(a.onRest, n) : s.onStart?.(n, this)
              }))
            }
            b && this._set(_), p ? r(qa(t.to, t, this._state, this)) : C ? this._start() : Qa(this) && !h ? this._pendingCalls.add(r) : r(Va(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Ii(this) && this._detach(), t.to = e, Ii(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Ti(t) && (Ri(t, this), Xa(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Ti(e) && Li(e, this)
          }
          _set(e, t = !0) {
            const r = Oi(e);
            if (!No.und(r)) {
              const e = na(this);
              if (!e || !jo(r, e.getValue())) {
                const n = ha(r);
                e && e.constructor == n ? e.setValue(r) : oa(this, n.create(r)), e && co.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return na(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, us(this, "onStart", za(this, ns(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), ga(this.animation.onChange, e, this)), ga(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            na(this).reset(Oi(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Qa(this) || (es(this, !0), Ja(this) || this._resume())
          }
          _resume() {
            Oo.skipAnimation ? this.finish() : Wo.start(this)
          }
          _stop(e, t) {
            if (Qa(this)) {
              es(this, !1);
              const r = this.animation;
              ko(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Ni(this, {
                type: "idle",
                parent: this
              });
              const n = t ? Fa(this.get()) : za(this.get(), ns(this, e ?? r.to));
              Ho(this._pendingCalls, n), r.changed && (r.changed = !1, us(this, "onRest", n, this))
            }
          }
        };

      function ns(e, t) {
        const r = Ta(t);
        return jo(Ta(e.get()), r)
      }

      function os(e, t = e.loop, r = e.to) {
        const n = ga(t);
        if (n) {
          const o = !0 !== n && xa(n),
            i = (o || e).reverse,
            a = !o || o.reset;
          return is({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Ia(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function is(e) {
        const {
          to: t,
          from: r
        } = e = xa(e), n = new Set;
        return No.obj(t) && ss(t, n), No.obj(r) && ss(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function as(e) {
        const t = is(e);
        return No.und(t.default) && (t.default = Pa(t)), t
      }

      function ss(e, t) {
        Ro(e, ((e, r) => null != e && t.add(r)))
      }
      var ls = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function cs(e, t, r) {
        e.animation[r] = t[r] !== wa(t, r) ? _a(t[r], e.key) : void 0
      }

      function us(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var ds = ["onStart", "onChange", "onRest"],
        fs = 1,
        hs = class {
          constructor(e, t) {
            this.id = fs++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              No.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(is(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Lo(e).map(is) : this.queue = [], this._flush ? this._flush(this, t) : (_s(this, t), ps(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              ko(Lo(t), (t => r[t].stop(!!e)))
            } else Ua(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (No.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              ko(Lo(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (No.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              ko(Lo(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            Ro(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, Ao(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !n && this._started,
              a = o || i && r.size ? this.get() : null;
            o && t.size && Ao(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, Ao(r, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            co.onFrame(this._onFrame)
          }
        };

      function ps(e, t) {
        return Promise.all(t.map((t => ms(e, t)))).then((t => Ba(e, t)))
      }
      async function ms(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = No.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = No.arr(o) || No.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : ko(ds, (r => {
          const n = t[r];
          if (No.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, Ho(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          h = !0 === t.cancel || !0 === wa(t, "cancel");
        (u || h && d.asyncId) && f.push(Ha(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Io,
            resume: Io,
            start(t, r) {
              h ? (Ua(d, e._lastAsyncId), r(Fa(e))) : (t.onRest = s, r(qa(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = Ba(e, await Promise.all(f));
        if (a && p.finished && (!r || !p.noop)) {
          const r = os(t, a, o);
          if (r) return _s(e, [r]), ms(e, r, !0)
        }
        return l && co.batchedUpdates((() => l(p, e, e.item))), p
      }

      function vs(e, t) {
        const r = {
          ...e.springs
        };
        return t && ko(Lo(t), (e => {
          No.und(e.keys) && (e = is(e)), No.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), bs(r, e, (e => gs(e)))
        })), ys(e, r), r
      }

      function ys(e, t) {
        Ro(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, Ri(t, e))
        }))
      }

      function gs(e, t) {
        const r = new rs;
        return r.key = e, t && Ri(r, t), r
      }

      function bs(e, t, r) {
        t.keys && ko(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function _s(e, t) {
        ko(t, (t => {
          bs(e.springs, t, (t => gs(t, e)))
        }))
      }
      var ws, Es, Ps = ({
          children: e,
          ...t
        }) => {
          const r = (0, A.useContext)(Ss),
            n = t.pause || !!r.pause,
            o = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, A.useState)((() => ({
              inputs: t,
              result: e()
            }))), n = (0, A.useRef)(), o = n.current;
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
            return (0, A.useEffect)((() => {
              n.current = i, o == r && (r.inputs = r.result = void 0)
            }), [i]), i.result
          }((() => ({
            pause: n,
            immediate: o
          })), [n, o]);
          const {
            Provider: i
          } = Ss;
          return A.createElement(i, {
            value: t
          }, e)
        },
        Ss = (ws = Ps, Es = {}, Object.assign(ws, A.createContext(Es)), ws.Provider._context = ws, ws.Consumer._context = ws, ws);
      Ps.Provider = Ss.Provider, Ps.Consumer = Ss.Consumer;
      var Cs = () => {
        const e = [],
          t = function(t) {
            $i(`${Ki}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return ko(e, ((e, o) => {
              if (No.und(t)) n.push(e.start());
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
          return ko(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return ko(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          ko(e, ((e, r) => {
            const n = No.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          const r = [];
          return ko(e, ((e, n) => {
            if (No.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          })), r
        }, t.stop = function() {
          return ko(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return ko(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        const r = function(e, t, r) {
          return No.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function xs(e, t) {
        const r = No.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = No.fun(t) && t;
            n && !r && (r = []);
            const o = (0, A.useMemo)((() => n || 3 == arguments.length ? Cs() : void 0), []),
              i = (0, A.useRef)(0),
              a = Qi(),
              s = (0, A.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = vs(e, t);
                  return i.current > 0 && !s.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? ps(e, t) : new Promise((n => {
                    ys(e, r), s.queue.push((() => {
                      n(ps(e, t))
                    })), a()
                  }))
                }
              })), []),
              l = (0, A.useRef)([...s.ctrls]),
              c = [],
              u = ta(e) || 0;

            function d(e, r) {
              for (let o = e; o < r; o++) {
                const e = l.current[o] || (l.current[o] = new hs(null, s.flush)),
                  r = n ? n(o, e) : t[o];
                r && (c[o] = as(r))
              }
            }(0, A.useMemo)((() => {
              ko(l.current.slice(e, u), (e => {
                Na(e, o), e.stop(!0)
              })), l.current.length = e, d(u, e)
            }), [e]), (0, A.useMemo)((() => {
              d(0, Math.min(u, e))
            }), r);
            const f = l.current.map(((e, t) => vs(e, c[t]))),
              h = (0, A.useContext)(Ps),
              p = ta(h),
              m = h !== p && Oa(h);
            Zi((() => {
              i.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], ko(e, (e => e()))), ko(l.current, ((e, t) => {
                o?.add(e), m && e.start({
                  default: h
                });
                const r = c[t];
                r && (ja(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              }))
            })), Ji((() => () => {
              ko(s.ctrls, (e => e.stop(!0)))
            }));
            const v = f.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var Ts = () => Cs(),
        Os = () => (0, A.useState)(Ts)[0];
      var Is = 1,
        Ns = class extends $a {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = yi(...t);
            const r = this._get(),
              n = ha(r);
            oa(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            jo(t, this.get()) || (na(this).setValue(t), this._onChange(t, this.idle)), !this.idle && ks(this._active) && Rs(this)
          }
          _get() {
            const e = No.arr(this.source) ? this.source.map(Oi) : Lo(Oi(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !ks(this._active) && (this.idle = !1, ko(ia(this), (e => {
              e.done = !1
            })), Oo.skipAnimation ? (co.batchedUpdates((() => this.advance())), Rs(this)) : Wo.start(this))
          }
          _attach() {
            let e = 1;
            ko(Lo(this.source), (t => {
              Ti(t) && Ri(t, this), Xa(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            ko(Lo(this.source), (e => {
              Ti(e) && Li(e, this)
            })), this._active.clear(), Rs(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Lo(this.source).reduce(((e, t) => Math.max(e, (Xa(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function js(e) {
        return !1 !== e.idle
      }

      function ks(e) {
        return !e.size || Array.from(e).every(js)
      }

      function Rs(e) {
        e.idle || (e.idle = !0, ko(ia(e), (e => {
          e.done = !0
        })), Ni(e, {
          type: "idle",
          parent: e
        }))
      }
      Oo.assign({
        createStringInterpolator: Gi,
        to: (e, t) => new Ns(e, t)
      }), Wo.advance;
      var Ls = /^--/;

      function As(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Ls.test(e) || Ds.hasOwnProperty(e) && Ds[e] ? ("" + t).trim() : t + "px"
      }
      var Ms = {},
        Ds = {
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
        Hs = ["Webkit", "Ms", "Moz", "O"];
      Ds = Object.keys(Ds).reduce(((e, t) => (Hs.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), Ds);
      var Bs = /^(matrix|translate|scale|rotate|skew)/,
        Vs = /^(translate)/,
        zs = /^(rotate|skew)/,
        Fs = (e, t) => No.num(e) && 0 !== e ? e + t : e,
        qs = (e, t) => No.arr(e) ? e.every((e => qs(e, t))) : No.num(e) ? e === t : parseFloat(e) === t,
        Us = class extends ua {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push((e => [`translate3d(${e.map((e=>Fs(e,"px"))).join(",")})`, qs(e, 0)]))), Ro(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Bs.test(t)) {
                if (delete n[t], No.und(e)) return;
                const r = Vs.test(t) ? "px" : zs.test(t) ? "deg" : "";
                o.push(Lo(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${Fs(o,r)})`, qs(o, 0)] : e => [`${t}(${e.map((e=>Fs(e,r))).join(",")})`, qs(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new Gs(o, i)), super(n)
          }
        },
        Gs = class extends ji {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return ko(this.inputs, ((r, n) => {
              const o = Oi(r[0]),
                [i, a] = this.transforms[n](No.arr(o) ? o : r.map(Oi));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && ko(this.inputs, (e => ko(e, (e => Ti(e) && Ri(e, this)))))
          }
          observerRemoved(e) {
            0 == e && ko(this.inputs, (e => ko(e, (e => Ti(e) && Li(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Ni(this, e)
          }
        };
      Oo.assign({
        batchedUpdates: Ht.unstable_batchedUpdates,
        createStringInterpolator: Gi,
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
      var Ks = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new ua(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = ya(e) || "Anonymous";
              return (e = No.str(e) ? i[e] || (i[e] = pa(e, o)) : e[va] || (e[va] = pa(e, o))).displayName = `Animated(${t})`, e
            };
          return Ro(e, ((t, r) => {
            No.arr(e) && (r = ya(t)), i[r] = i(t)
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
              d = Object.keys(c).map((t => r || e.hasAttribute(t) ? t : Ms[t] || (Ms[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = As(t, o[t]);
                Ls.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, u[r])
            })), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new Us(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        Xs = Ks.animated;
      const Ws = (e, t, r) => {
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
        $s = e => {
          const t = (e, t, r) => {
            r(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, r) => {
            const n = r.getBoundingClientRect();
            return e ? (t(e.top, n.top, ((e, t) => e < t)), t(e.bottom, n.bottom, ((e, t) => e > t)), t(e.left, n.left, ((e, t) => e < t)), t(e.right, n.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), n) : n
          }), null)
        },
        Ys = ([e, t], r) => {
          const {
            a: n
          } = new DOMMatrix(r.style.transform), o = $s(r), i = o.width / n, a = 100 * Qs(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / n;
          return {
            x: a,
            y: 100 * Qs(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        Zs = (e, t, r, n) => {
          let o = r[0],
            i = r[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = n / 100, l = $s(e), c = t.getBoundingClientRect(), u = l.width / a / 2, d = c.width / 2, f = u * s > d ? u * s - d : 0, h = l.height / a / 2, p = c.height / 2, m = h * s > p ? h * s - p : 0, v = -o > f, y = o > f, g = i > m, b = -i > m;
          return v && !y ? o = -f : y && !v && (o = f), g && !b ? i = m : b && !g && (i = -m), {
            xy: [o, i],
            horizontalOffset: f,
            verticalOffset: m
          }
        },
        Qs = (e, t, r) => Math.min(Math.max(e, t), r),
        Js = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        el = ka,
        tl = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        rl = ({
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
            (0, A.useEffect)((() => (document.addEventListener("gesturestart", r), document.addEventListener("gesturechange", r), t.current?.addEventListener("dragstart", r), t.current?.addEventListener("click", r), e.current?.addEventListener("dragstart", r), e.current?.addEventListener("click", r), () => {
              document.removeEventListener("gesturestart", r), document.removeEventListener("gesturechange", r), t.current?.removeEventListener("dragstart", r), t.current?.removeEventListener("click", r), e.current?.removeEventListener("dragstart", r), e.current?.removeEventListener("click", r)
            })), [e.current, t.current])
          })({
            containerRef: t,
            contentRef: r
          }), so({
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
          return (0, g.jsx)("div", {
            ref: t,
            className: "foundry_148vt480",
            style: l,
            children: (0, g.jsx)(Xs.div, {
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
      var nl = r(78322);

      function ol(e, t) {
        var r = t && t.cache ? t.cache : ml,
          n = t && t.serializer ? t.serializer : cl;
        return (t && t.strategy ? t.strategy : ll)(e, {
          cache: r,
          serializer: n
        })
      }

      function il(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function al(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function sl(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function ll(e, t) {
        return sl(e, this, 1 === e.length ? il : al, t.cache.create(), t.serializer)
      }
      var cl = function() {
        return JSON.stringify(arguments)
      };

      function ul() {
        this.cache = Object.create(null)
      }
      ul.prototype.get = function(e) {
        return this.cache[e]
      }, ul.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var dl, fl, hl, pl, ml = {
          create: function() {
            return new ul
          }
        },
        vl = {
          variadic: function(e, t) {
            return sl(e, this, al, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return sl(e, this, il, t.cache.create(), t.serializer)
          }
        };

      function yl(e) {
        return e.type === fl.literal
      }

      function gl(e) {
        return e.type === fl.argument
      }

      function bl(e) {
        return e.type === fl.number
      }

      function _l(e) {
        return e.type === fl.date
      }

      function wl(e) {
        return e.type === fl.time
      }

      function El(e) {
        return e.type === fl.select
      }

      function Pl(e) {
        return e.type === fl.plural
      }

      function Sl(e) {
        return e.type === fl.pound
      }

      function Cl(e) {
        return e.type === fl.tag
      }

      function xl(e) {
        return !(!e || "object" != typeof e || e.type !== hl.number)
      }

      function Tl(e) {
        return !(!e || "object" != typeof e || e.type !== hl.dateTime)
      }(pl = dl || (dl = {}))[pl.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", pl[pl.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", pl[pl.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", pl[pl.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", pl[pl.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", pl[pl.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", pl[pl.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", pl[pl.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", pl[pl.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", pl[pl.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", pl[pl.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", pl[pl.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", pl[pl.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", pl[pl.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", pl[pl.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", pl[pl.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", pl[pl.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", pl[pl.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", pl[pl.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", pl[pl.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", pl[pl.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", pl[pl.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", pl[pl.INVALID_TAG = 23] = "INVALID_TAG", pl[pl.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", pl[pl.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", pl[pl.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(fl || (fl = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(hl || (hl = {}));
      var Ol = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Il = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Nl(e) {
        var t = {};
        return e.replace(Il, (function(e) {
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
      var jl = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function kl(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, n = e.split(jl).filter((function(e) {
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
      var Rl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Ll = /^(@+)?(\+|#+)?[rs]?$/g,
        Al = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Ml = /^(0+)$/;

      function Dl(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Ll, (function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        })), t
      }

      function Hl(e) {
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

      function Bl(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ml.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Vl(e) {
        return Hl(e) || {}
      }

      function zl(e) {
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
              t = (0, nl.__assign)((0, nl.__assign)((0, nl.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, nl.__assign)((0, nl.__assign)({}, e), Vl(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, nl.__assign)((0, nl.__assign)((0, nl.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, nl.__assign)((0, nl.__assign)({}, e), Vl(t))
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
              o.options[0].replace(Al, (function(e, r, n, o, i, a) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Ml.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Rl.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Rl, (function(e, r, n, o, i, a) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, nl.__assign)((0, nl.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, nl.__assign)((0, nl.__assign)({}, t), Dl(i)))
          } else if (Ll.test(o.stem)) t = (0, nl.__assign)((0, nl.__assign)({}, t), Dl(o.stem));
          else {
            var a = Hl(o.stem);
            a && (t = (0, nl.__assign)((0, nl.__assign)({}, t), a));
            var s = Bl(o.stem);
            s && (t = (0, nl.__assign)((0, nl.__assign)({}, t), s))
          }
        }
        return t
      }
      var Fl, ql = {
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

      function Ul(e) {
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
        return "root" !== n && (r = e.maximize().region), (ql[r || ""] || ql[n || ""] || ql["".concat(n, "-001")] || ql["001"])[0]
      }
      var Gl = new RegExp("^".concat(Ol.source, "*")),
        Kl = new RegExp("".concat(Ol.source, "*$"));

      function Xl(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Wl = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        $l = !!String.fromCodePoint,
        Yl = !!Object.fromEntries,
        Zl = !!String.prototype.codePointAt,
        Ql = !!String.prototype.trimStart,
        Jl = !!String.prototype.trimEnd,
        ec = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        tc = !0;
      try {
        tc = "a" === (null === (Fl = cc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Fl ? void 0 : Fl[0])
      } catch (e) {
        tc = !1
      }
      var rc, nc = Wl ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        oc = $l ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        ic = Yl ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        ac = Zl ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        sc = Ql ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Gl, "")
        },
        lc = Jl ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Kl, "")
        };

      function cc(e, t) {
        return new RegExp(e, t)
      }
      if (tc) {
        var uc = cc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        rc = function(e, t) {
          var r;
          return uc.lastIndex = t, null !== (r = uc.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else rc = function(e, t) {
        for (var r = [];;) {
          var n = ac(e, t);
          if (void 0 === n || mc(n) || vc(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return oc.apply(void 0, r)
      };
      var dc, fc, hc = function() {
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
                  return this.error(dl.UNMATCHED_CLOSING_TAG, Xl(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && pc(this.peek() || 0)) {
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
                  type: fl.pound,
                  location: Xl(a, this.clonePosition())
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
              type: fl.literal,
              value: "<".concat(n, "/>"),
              location: Xl(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !pc(this.char())) return this.error(dl.INVALID_TAG, Xl(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(dl.UNMATCHED_CLOSING_TAG, Xl(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: fl.tag,
                  value: n,
                  children: i,
                  location: Xl(r, this.clonePosition())
                },
                err: null
              } : this.error(dl.INVALID_TAG, Xl(a, this.clonePosition())))
            }
            return this.error(dl.UNCLOSED_TAG, Xl(r, this.clonePosition()))
          }
          return this.error(dl.INVALID_TAG, Xl(r, this.clonePosition()))
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
          var s = Xl(r, this.clonePosition());
          return {
            val: {
              type: fl.literal,
              value: n,
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
          return oc.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), oc(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(dl.EXPECT_ARGUMENT_CLOSING_BRACE, Xl(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(dl.EMPTY_ARGUMENT, Xl(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(dl.MALFORMED_ARGUMENT, Xl(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(dl.EXPECT_ARGUMENT_CLOSING_BRACE, Xl(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: fl.argument,
                  value: n,
                  location: Xl(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(dl.EXPECT_ARGUMENT_CLOSING_BRACE, Xl(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(dl.MALFORMED_ARGUMENT, Xl(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = rc(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Xl(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(dl.EXPECT_ARGUMENT_TYPE, Xl(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = lc(y.val)).length) return this.error(dl.EXPECT_ARGUMENT_STYLE, Xl(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Xl(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = Xl(n, this.clonePosition());
              if (l && nc(null == l ? void 0 : l.style, "::", 0)) {
                var d = sc(l.style.slice(2));
                if ("number" === a) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: fl.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(dl.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Ul(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: hl.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Nl(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? fl.date : fl.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? fl.number : "date" === a ? fl.date : fl.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(dl.EXPECT_SELECT_ARGUMENT_OPTIONS, Xl(p, (0, nl.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(dl.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Xl(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(dl.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, dl.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = Xl(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: fl.select,
                  value: r,
                  options: ic(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: fl.plural,
                  value: r,
                  options: ic(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(dl.INVALID_ARGUMENT_TYPE, Xl(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(dl.EXPECT_ARGUMENT_CLOSING_BRACE, Xl(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(dl.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Xl(r, this.clonePosition()));
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
            r = kl(e)
          } catch (e) {
            return this.error(dl.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: hl.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? zl(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(dl.EXPECT_PLURAL_ARGUMENT_SELECTOR, dl.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Xl(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? dl.DUPLICATE_SELECT_ARGUMENT_SELECTOR : dl.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? dl.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : dl.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Xl(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: Xl(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? dl.EXPECT_SELECT_ARGUMENT_SELECTOR : dl.EXPECT_PLURAL_ARGUMENT_SELECTOR, Xl(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(dl.MISSING_OTHER_CLAUSE, Xl(this.clonePosition(), this.clonePosition())) : {
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
          var s = Xl(n, this.clonePosition());
          return o ? ec(i *= r) ? {
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
          var t = ac(this.message, e);
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
          if (nc(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && mc(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function pc(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function mc(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function vc(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function yc(e) {
        e.forEach((function(e) {
          if (delete e.location, El(e) || Pl(e))
            for (var t in e.options) delete e.options[t].location, yc(e.options[t].value);
          else bl(e) && xl(e.style) || (_l(e) || wl(e)) && Tl(e.style) ? delete e.style.location : Cl(e) && yc(e.children)
        }))
      }

      function gc(e, t) {
        void 0 === t && (t = {}), t = (0, nl.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new hc(e, t).parse();
        if (r.err) {
          var n = SyntaxError(dl[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || yc(r.val), r.val
      }(fc = dc || (dc = {})).MISSING_VALUE = "MISSING_VALUE", fc.INVALID_VALUE = "INVALID_VALUE", fc.MISSING_INTL_API = "MISSING_INTL_API";
      var bc, _c = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, nl.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        wc = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), dc.INVALID_VALUE, o) || this
          }
          return (0, nl.__extends)(t, e), t
        }(_c),
        Ec = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), dc.INVALID_VALUE, n) || this
          }
          return (0, nl.__extends)(t, e), t
        }(_c),
        Pc = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), dc.MISSING_VALUE, r) || this
          }
          return (0, nl.__extends)(t, e), t
        }(_c);

      function Sc(e) {
        return "function" == typeof e
      }

      function Cc(e, t, r, n, o, i, a) {
        if (1 === e.length && yl(e[0])) return [{
          type: bc.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (yl(u)) s.push({
            type: bc.literal,
            value: u.value
          });
          else if (Sl(u)) "number" == typeof i && s.push({
            type: bc.literal,
            value: r.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new Pc(d, a);
            var f = o[d];
            if (gl(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? bc.literal : bc.object,
              value: f
            });
            else if (_l(u)) {
              var h = "string" == typeof u.style ? n.date[u.style] : Tl(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: bc.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (wl(u)) h = "string" == typeof u.style ? n.time[u.style] : Tl(u.style) ? u.style.parsedOptions : n.time.medium, s.push({
              type: bc.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (bl(u))(h = "string" == typeof u.style ? n.number[u.style] : xl(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: bc.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (Cl(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!Sc(v)) throw new Ec(m, "function", a);
                var y = v(Cc(p, t, r, n, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(y) || (y = [y]), s.push.apply(s, y.map((function(e) {
                  return {
                    type: "string" == typeof e ? bc.literal : bc.object,
                    value: e
                  }
                })))
              }
              if (El(u)) {
                if (!(g = u.options[f] || u.options.other)) throw new wc(u.value, f, Object.keys(u.options), a);
                s.push.apply(s, Cc(g.value, t, r, n, o))
              } else if (Pl(u)) {
                var g;
                if (!(g = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new _c('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', dc.MISSING_INTL_API, a);
                  var b = r.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  g = u.options[b] || u.options.other
                }
                if (!g) throw new wc(u.value, f, Object.keys(u.options), a);
                s.push.apply(s, Cc(g.value, t, r, n, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce((function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === bc.literal && t.type === bc.literal ? r.value += t.value : e.push(t), e
        }), []);
        var _
      }

      function xc(e) {
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
      }(bc || (bc = {}));
      var Tc, Oc = function() {
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
                return e.length && t.type === bc.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return Cc(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
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
              u = (c.formatters, (0, nl.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, nl.__assign)((0, nl.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = n) ? Object.keys(a).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, nl.__assign)((0, nl.__assign)((0, nl.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(r, n) {
                return r[n] = (0, nl.__assign)((0, nl.__assign)({}, e[n]), t[n] || {}), r
              }), {})) : e
            }(a[t], s[t]), e
          }), (0, nl.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: ol((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
            }), {
              cache: xc(i.number),
              strategy: vl.variadic
            }),
            getDateTimeFormat: ol((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
            }), {
              cache: xc(i.dateTime),
              strategy: vl.variadic
            }),
            getPluralRules: ol((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
            }), {
              cache: xc(i.pluralRules),
              strategy: vl.variadic
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
        }, e.__parse = gc, e.formats = {
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
      }(Tc || (Tc = {}));
      var Ic = function(e) {
          function t(r, n, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, nl.__extends)(t, e), t
        }(Error),
        Nc = function(e) {
          function t(t, r) {
            return e.call(this, Tc.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, nl.__extends)(t, e), t
        }(Ic),
        jc = function(e) {
          function t(t, r) {
            return e.call(this, Tc.INVALID_CONFIG, t, r) || this
          }
          return (0, nl.__extends)(t, e), t
        }(Ic),
        kc = function(e) {
          function t(t, r) {
            return e.call(this, Tc.MISSING_DATA, t, r) || this
          }
          return (0, nl.__extends)(t, e), t
        }(Ic),
        Rc = function(e) {
          function t(t, r, n) {
            var o = e.call(this, Tc.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, nl.__extends)(t, e), t
        }(Ic),
        Lc = function(e) {
          function t(t, r, n, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return i.descriptor = n, i.locale = r, i
          }
          return (0, nl.__extends)(t, e), t
        }(Rc),
        Ac = function(e) {
          function t(t, r) {
            var n = e.call(this, Tc.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, nl.__extends)(t, e), t
        }(Ic);

      function Mc(e, t, r) {
        return void 0 === r && (r = {}), t.reduce((function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }), {})
      }
      var Dc = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Hc(e) {
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

      function Bc(e, t, r, n) {
        var o, i = e && e[t];
        if (i && (o = i[r]), o) return o;
        n(new Nc("No ".concat(t, " format named: ").concat(r)))
      }

      function Vc(e, t) {
        var r = t && t.cache ? t.cache : Xc,
          n = t && t.serializer ? t.serializer : Gc;
        return (t && t.strategy ? t.strategy : Uc)(e, {
          cache: r,
          serializer: n
        })
      }

      function zc(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function Fc(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function qc(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function Uc(e, t) {
        return qc(e, this, 1 === e.length ? zc : Fc, t.cache.create(), t.serializer)
      }
      var Gc = function() {
        return JSON.stringify(arguments)
      };

      function Kc() {
        this.cache = Object.create(null)
      }
      Kc.prototype.get = function(e) {
        return this.cache[e]
      }, Kc.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Xc = {
          create: function() {
            return new Kc
          }
        },
        Wc = {
          variadic: function(e, t) {
            return qc(e, this, Fc, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return qc(e, this, zc, t.cache.create(), t.serializer)
          }
        };

      function $c(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      Vc((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Wc.variadic
      }), Vc((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Wc.variadic
      }), Vc((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Wc.variadic
      }), Vc((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Wc.variadic
      }), Vc((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Wc.variadic
      });
      var Yc = (0, nl.__assign)((0, nl.__assign)({}, Dc), {
        textComponent: A.Fragment
      });
      r(35255);
      var Zc = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? A.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = A.createContext(null)),
        Qc = (Zc.Consumer, Zc.Provider),
        Jc = Zc;

      function eu(e, t) {
        return Object.keys(e).reduce((function(r, n) {
          return r[n] = (0, nl.__assign)({
            timeZone: t
          }, e[n]), r
        }), {})
      }

      function tu(e, t) {
        return Object.keys((0, nl.__assign)((0, nl.__assign)({}, e), t)).reduce((function(r, n) {
          return r[n] = (0, nl.__assign)((0, nl.__assign)({}, e[n] || {}), t[n] || {}), r
        }), {})
      }

      function ru(e, t) {
        if (!t) return e;
        var r = Oc.formats;
        return (0, nl.__assign)((0, nl.__assign)((0, nl.__assign)({}, r), e), {
          date: tu(eu(r.date, t), eu(e.date || {}, t)),
          time: tu(eu(r.time, t), eu(e.time || {}, t))
        })
      }
      ol((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: vl.variadic
      }), ol((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: vl.variadic
      }), ol((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: vl.variadic
      }), ol((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: vl.variadic
      }), ol((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: vl.variadic
      });
      var nu = function(e, t, r, n, o) {
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
          if (Array.isArray(y) && 1 === y.length && y[0].type === fl.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, nl.__assign)((0, nl.__assign)({}, h), n || {}), a = ru(a, f), c = ru(c, f), !y) {
            if (!1 === u && "" === y) return y;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new Ac(r, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(n)
            } catch (e) {
              return d(new Lc('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, i, a, (0, nl.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new Lc('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(n)
          } catch (e) {
            d(new Lc('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        ou = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function iu(e, t, r) {
        var n = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === r && (r = {});
        var a = r.format,
          s = a && Bc(o, "number", a, i) || {};
        return t(n, Mc(r, ou, s))
      }

      function au(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return iu(e, t, n).format(r)
        } catch (t) {
          e.onError(new Rc("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function su(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return iu(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new Rc("Error formatting number.", e.locale, t))
        }
        return []
      }
      var lu = ["numeric", "style"];

      function cu(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new _c('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', dc.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === r && (r = {});
            var a = r.format,
              s = !!a && Bc(o, "relative", a, i) || {};
            return t(n, Mc(r, lu, s))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new Rc("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var uu = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function du(e, t, r, n) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          c = (0, nl.__assign)((0, nl.__assign)({}, s && {
            timeZone: s
          }), l && Bc(i, t, l, a)),
          u = Mc(n, uu, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, nl.__assign)((0, nl.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, u)
      }

      function fu(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return du(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new Rc("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function hu(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return du(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new Rc("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function pu(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = r[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = Mc(s, uu, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, i)
        } catch (t) {
          u(new Rc("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function mu(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return du(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Rc("Error formatting date.", e.locale, t))
        }
        return []
      }

      function vu(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return du(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Rc("Error formatting time.", e.locale, t))
        }
        return []
      }
      var yu = ["type"];

      function gu(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new _c('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', dc.MISSING_INTL_API));
        var a = Mc(n, yu);
        try {
          return t(o, a).select(r)
        } catch (e) {
          i(new Rc("Error formatting plural.", o, e))
        }
        return "other"
      }
      var bu = ["type", "style"],
        _u = Date.now();

      function wu(e, t, r, n) {
        void 0 === n && (n = {});
        var o = Eu(e, t, r, n).reduce((function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Eu(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || i(new _c('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', dc.MISSING_INTL_API));
        var a = Mc(n, bu);
        try {
          var s = {},
            l = r.map((function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(_u, "_").concat(e, "_").concat(_u)
                }(t);
                return s[r] = e, r
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, nl.__assign)((0, nl.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new Rc("Error formatting list.", o, e))
        }
        return r
      }
      var Pu, Su, Cu, xu = ["style", "type", "fallback", "languageDisplay"];

      function Tu(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new _c('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', dc.MISSING_INTL_API));
        var a = Mc(n, xu);
        try {
          return t(o, a).of(r)
        } catch (e) {
          i(new Rc("Error formatting display name.", o, e))
        }
      }

      function Ou(e, t) {
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
              o = ol((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Hc(e.dateTime),
                strategy: vl.variadic
              }),
              i = ol((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Hc(e.number),
                strategy: vl.variadic
              }),
              a = ol((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, nl.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Hc(e.pluralRules),
                strategy: vl.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: ol((function(e, t, r, n) {
                return new Oc(e, t, r, (0, nl.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, n || {}))
              }), {
                cache: Hc(e.message),
                strategy: vl.variadic
              }),
              getRelativeTimeFormat: ol((function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, nl.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Hc(e.relativeTime),
                strategy: vl.variadic
              }),
              getPluralRules: a,
              getListFormat: ol((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, nl.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Hc(e.list),
                strategy: vl.variadic
              }),
              getDisplayNames: ol((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, nl.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Hc(e.displayNames),
                strategy: vl.variadic
              })
            }
          }(t),
          n = (0, nl.__assign)((0, nl.__assign)({}, Dc), e),
          o = n.locale,
          i = n.defaultLocale,
          a = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new kc('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new kc('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new jc('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, nl.__assign)((0, nl.__assign)({}, n), {
            formatters: r,
            formatNumber: au.bind(null, n, r.getNumberFormat),
            formatNumberToParts: su.bind(null, n, r.getNumberFormat),
            formatRelativeTime: cu.bind(null, n, r.getRelativeTimeFormat),
            formatDate: fu.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: mu.bind(null, n, r.getDateTimeFormat),
            formatTime: hu.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: pu.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: vu.bind(null, n, r.getDateTimeFormat),
            formatPlural: gu.bind(null, n, r.getPluralRules),
            formatMessage: nu.bind(null, n, r),
            $t: nu.bind(null, n, r),
            formatList: wu.bind(null, n, r.getListFormat),
            formatListToParts: Eu.bind(null, n, r.getListFormat),
            formatDisplayName: Tu.bind(null, n, r.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Pu || (Pu = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Su || (Su = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Cu || (Cu = {}));
      var Iu, Nu = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        ju = {
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

      function ku(e) {
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
        return "root" !== n && (r = e.maximize().region), (ju[r || ""] || ju[n || ""] || ju["".concat(n, "-001")] || ju["001"])[0]
      }
      var Ru = new RegExp("^".concat(Nu.source, "*")),
        Lu = new RegExp("".concat(Nu.source, "*$"));

      function Au(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Mu = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Du = !!String.fromCodePoint,
        Hu = !!Object.fromEntries,
        Bu = !!String.prototype.codePointAt,
        Vu = !!String.prototype.trimStart,
        zu = !!String.prototype.trimEnd,
        Fu = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        qu = !0;
      try {
        qu = "a" === (null === (Iu = Qu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Iu ? void 0 : Iu[0])
      } catch (e) {
        qu = !1
      }
      var Uu, Gu, Ku = Mu ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Xu = Du ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        Wu = Hu ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        $u = Bu ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Yu = Vu ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Ru, "")
        },
        Zu = zu ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Lu, "")
        };

      function Qu(e, t) {
        return new RegExp(e, t)
      }
      if (qu) {
        var Ju = Qu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Uu = function(e, t) {
          var r;
          return Ju.lastIndex = t, null !== (r = Ju.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Uu = function(e, t) {
        for (var r = [];;) {
          var n = $u(e, t);
          if (void 0 === n || td(n) || rd(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Xu.apply(void 0, r)
      };

      function ed(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function td(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function rd(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function nd(e) {
        return e ? Object.keys(e).reduce((function(t, r) {
          var n, o = e[r];
          return t[r] = "function" == typeof o ? (n = o, function(e) {
            return n(A.Children.toArray(e))
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
                  return this.error(Pu.UNMATCHED_CLOSING_TAG, Au(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && ed(this.peek() || 0)) {
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
                  type: Su.pound,
                  location: Au(a, this.clonePosition())
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
              type: Su.literal,
              value: "<".concat(n, "/>"),
              location: Au(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !ed(this.char())) return this.error(Pu.INVALID_TAG, Au(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Pu.UNMATCHED_CLOSING_TAG, Au(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Su.tag,
                  value: n,
                  children: i,
                  location: Au(r, this.clonePosition())
                },
                err: null
              } : this.error(Pu.INVALID_TAG, Au(a, this.clonePosition())))
            }
            return this.error(Pu.UNCLOSED_TAG, Au(r, this.clonePosition()))
          }
          return this.error(Pu.INVALID_TAG, Au(r, this.clonePosition()))
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
          var s = Au(r, this.clonePosition());
          return {
            val: {
              type: Su.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ed(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Xu.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Xu(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Pu.EXPECT_ARGUMENT_CLOSING_BRACE, Au(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Pu.EMPTY_ARGUMENT, Au(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Pu.MALFORMED_ARGUMENT, Au(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Pu.EXPECT_ARGUMENT_CLOSING_BRACE, Au(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Su.argument,
                  value: n,
                  location: Au(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Pu.EXPECT_ARGUMENT_CLOSING_BRACE, Au(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Pu.MALFORMED_ARGUMENT, Au(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Uu(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Au(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Pu.EXPECT_ARGUMENT_TYPE, Au(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Zu(y.val)).length) return this.error(Pu.EXPECT_ARGUMENT_STYLE, Au(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Au(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = Au(n, this.clonePosition());
              if (l && Ku(null == l ? void 0 : l.style, "::", 0)) {
                var d = Yu(l.style.slice(2));
                if ("number" === a) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: Su.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Pu.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = ku(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: Cu.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Nl(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Su.date : Su.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Su.number : "date" === a ? Su.date : Su.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Pu.EXPECT_SELECT_ARGUMENT_OPTIONS, Au(p, (0, nl.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Pu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Au(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Pu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Pu.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = Au(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Su.select,
                  value: r,
                  options: Wu(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Su.plural,
                  value: r,
                  options: Wu(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Pu.INVALID_ARGUMENT_TYPE, Au(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Pu.EXPECT_ARGUMENT_CLOSING_BRACE, Au(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Pu.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Au(r, this.clonePosition()));
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
            r = kl(e)
          } catch (e) {
            return this.error(Pu.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Cu.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? zl(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Pu.EXPECT_PLURAL_ARGUMENT_SELECTOR, Pu.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Au(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Pu.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Pu.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Pu.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Pu.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Au(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: Au(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Pu.EXPECT_SELECT_ARGUMENT_SELECTOR : Pu.EXPECT_PLURAL_ARGUMENT_SELECTOR, Au(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Pu.MISSING_OTHER_CLAUSE, Au(this.clonePosition(), this.clonePosition())) : {
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
          var s = Au(n, this.clonePosition());
          return o ? Fu(i *= r) ? {
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
          var t = $u(this.message, e);
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
          if (Ku(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && td(this.char());) this.bump()
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
      }(Gu || (Gu = {}));
      var od = function(e, t, r, n) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = nd(n),
            s = nu.apply(void 0, (0, nl.__spreadArray)([e, t, r, a], o, !1));
          return Array.isArray(s) ? A.Children.toArray(s) : s
        },
        id = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, nl.__rest)(e, ["defaultRichTextElements"]),
            o = nd(r),
            i = Ou((0, nl.__assign)((0, nl.__assign)((0, nl.__assign)({}, Yc), n), {
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
          return (0, nl.__assign)((0, nl.__assign)({}, i), {
            formatMessage: od.bind(null, a, i.formatters),
            $t: od.bind(null, a, i.formatters)
          })
        };

      function ad(e) {
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
      var sd = function(e) {
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
            intl: id(ad(t.props), t.cache),
            prevConfig: ad(t.props)
          }, t
        }
        return (0, nl.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = ad(e);
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
            intl: id(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return $c(this.state.intl), A.createElement(Qc, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = Yc, t
      }(A.PureComponent);
      const ld = sd;

      function cd() {
        var e = A.useContext(Jc);
        return $c(e), e
      }
      var ud, dd;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(ud || (ud = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(dd || (dd = {}));
      var fd = function(e) {
        var t = cd(),
          r = e.value,
          n = e.children,
          o = (0, nl.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function hd(e) {
        var t = function(t) {
          var r = cd(),
            n = t.value,
            o = t.children,
            i = (0, nl.__rest)(t, ["value", "children"]),
            a = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(a, i) : r.formatTimeToParts(a, i))
        };
        return t.displayName = dd[e], t
      }

      function pd(e) {
        var t = function(t) {
          var r = cd(),
            n = t.value,
            o = t.children,
            i = (0, nl.__rest)(t, ["value", "children"]),
            a = r[e](n, i);
          if ("function" == typeof o) return o(a);
          var s = r.textComponent || A.Fragment;
          return A.createElement(s, null, a)
        };
        return t.displayName = ud[e], t
      }
      fd.displayName = "FormattedNumberParts", fd.displayName = "FormattedNumberParts", pd("formatDate"), pd("formatTime"), pd("formatNumber"), pd("formatList"), pd("formatDisplayName"), hd("formatDate"), hd("formatTime");
      const md = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, i] = (0, A.useState)(null);
          return (0, A.useEffect)((() => {
            (t?.[r] ?? t["en-US"]).then((e => {
              i(e.default)
            }))
          }), [r]), o ? (0, g.jsx)(ld, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        vd = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "Open image in lightbox"
        },
        yd = {
          id: "Lightbox_Dialog_Title",
          description: "Visually hidden text used for the lightbox dialog title",
          defaultMessage: "Image lightbox"
        },
        gd = {
          id: "Lightbox_Dialog_Description",
          description: "Visually hidden text used for the lightbox dialog description",
          defaultMessage: "Alt text: {alt}"
        },
        bd = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? mr.VisuallyHidden : A.Fragment;
          return (0, g.jsx)(r, {
            ...t
          })
        },
        _d = {
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
      var wd = r(4218);
      const Ed = (e, t) => {
        const r = "more" === t ? wd.xW.lightHc : wd.xW.light,
          n = "more" === t ? wd.xW.darkHc : wd.xW.dark;
        return "dark" === e ? n : r
      };

      function Pd() {
        return Pd = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Pd.apply(null, arguments)
      }
      var Sd = ["shift", "alt", "meta", "mod", "ctrl"],
        Cd = {
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

      function xd(e) {
        return (e && Cd[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Td(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Od(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map((function(e) {
          return xd(e)
        }));
        return Pd({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter((function(e) {
            return !Sd.includes(e)
          })),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && jd([xd(e.key), xd(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && kd([xd(e.key), xd(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        Id.clear()
      }));
      var Id = new Set;

      function Nd(e) {
        return Array.isArray(e)
      }

      function jd(e) {
        var t = Array.isArray(e) ? e : [e];
        Id.has("meta") && Id.forEach((function(e) {
          return ! function(e) {
            return Sd.includes(e)
          }(e) && Id.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return Id.add(e.toLowerCase())
        }))
      }

      function kd(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Id.clear() : t.forEach((function(e) {
          return Id.delete(e.toLowerCase())
        }))
      }

      function Rd(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Nd(t) ? Boolean(n && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        }))) : Boolean(n && t && t)
      }
      var Ld = (0, A.createContext)(void 0);

      function Ad(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, g.jsx)(Ld.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Md(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(r, n) {
          return r && Md(e[n], t[n])
        }), !0) : e === t
      }
      var Dd = (0, A.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Hd = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, A.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            a = o[1],
            s = (0, A.useState)([]),
            l = s[0],
            c = s[1],
            u = (0, A.useCallback)((function(e) {
              a((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            d = (0, A.useCallback)((function(e) {
              a((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            f = (0, A.useCallback)((function(e) {
              a((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            h = (0, A.useCallback)((function(e) {
              c((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            p = (0, A.useCallback)((function(e) {
              c((function(t) {
                return t.filter((function(t) {
                  return !Md(t, e)
                }))
              }))
            }), []);
          return (0, g.jsx)(Dd.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: u,
              disableScope: d,
              toggleScope: f
            },
            children: (0, g.jsx)(Ad, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        Bd = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Vd = "undefined" != typeof window ? A.useLayoutEffect : A.useEffect;

      function zd(e, t, r, n) {
        var o = (0, A.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, A.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          c = Nd(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, A.useCallback)(t, null != u ? u : []),
          f = (0, A.useRef)(d);
        f.current = u ? d : t;
        var h = function(e) {
            var t = (0, A.useRef)(void 0);
            return Md(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, A.useContext)(Dd).enabledScopes,
          m = (0, A.useContext)(Ld);
        return Vd((function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Rd(e, ["input", "textarea", "select"]) || Rd(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void Bd(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && Td(c, null == h ? void 0 : h.splitKey).forEach((function(r) {
                    var n, o = Od(r, null == h ? void 0 : h.combinationKey);
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
                          y = xd(f),
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
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (Nd(n = u) ? n : n.split(o)).every((function(e) {
                          return Id.has(e.trim().toLowerCase())
                        }))) : !u)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void Bd(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              n = function(e) {
                void 0 !== e.key && (jd(xd(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (kd(xd(e.code)), s.current = !1, null != h && h.keyup && r(e, !0))
              },
              a = i || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Td(c, null == h ? void 0 : h.splitKey).forEach((function(e) {
                return m.addHotkey(Od(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Td(c, null == h ? void 0 : h.splitKey).forEach((function(e) {
                  return m.removeHotkey(Od(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                }))
              }
          }
        }), [i, c, h, p]), a
      }
      const Fd = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close lightbox"
        },
        qd = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        Ud = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        Gd = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        Kd = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        Xd = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        Wd = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        $d = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        Yd = {
          id: "Lightbox_Zoom_Slider_Label",
          description: "Aria-label for the lightbox zoom slider",
          defaultMessage: "Zoom level"
        },
        Zd = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Qd = {
          id: "Lightbox_Download_Button_Label",
          description: "Aria-label for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        Jd = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };
      r(6521);
      var ef = r(80070),
        tf = r(43607),
        rf = r(52710);

      function nf(e) {
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

      function of(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function af(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? of(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = nf(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : of(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function sf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var lf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        cf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = af(af({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) lf(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sf(e.variantClassNames, (e => sf(e, (e => e.split(" ")[0]))))
            }
          }, t
        };
      cf({
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
      var uf = cf({
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
        df = r(22874),
        ff = r.t(df, 2);
      const hf = (0, A.forwardRef)((({
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
        ...b
      }, _) => {
        const w = (0, A.useRef)(null),
          E = function(...e) {
            const t = (0, A.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }(w, _),
          P = (0, vr.zQ)(),
          S = "string" == typeof a ? a : a?.[P] ?? a.default ?? "LG",
          {
            buttonProps: C
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
            } = (0, ef.b)(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: c
            } = dr({
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
              buttonProps: (0, tf.v)(e ? {} : u, {
                ...a,
                className: t
              })
            }
          })((0, rf.mergeProps)(b, {
            isLoading: l
          }), w);
        be({
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
        const x = (0, rf.mergeProps)({
            className: uf({
              appearance: o,
              size: S,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, C),
          T = ff[r],
          O = t ? pr.Slot : "button";
        return (0, g.jsxs)(O, {
          ref: E,
          ...x,
          children: [T && (0, g.jsx)(T, {
            label: n || "",
            size: S
          }), (0, g.jsx)(pr.Slottable, {
            children: s
          }), l && (0, g.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, g.jsx)(jr, {
              label: c || "",
              size: S && "SM" !== S ? `inline${S}` : "inlineMD",
              hideTrack: !0
            })
          })]
        })
      }));
      var pf = r(34893);

      function mf(e) {
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

      function vf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function yf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vf(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = mf(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vf(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function gf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        _f = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yf(yf({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) bf(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gf(e.variantClassNames, (e => gf(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        wf = _f({
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
      const Ef = (0, A.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? pr.Slot : "p",
          s = (0, pf.mergeProps)({
            className: wf({
              size: n,
              appearance: r
            })
          }, o);
        return (0, g.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));
      var Pf = _f({
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
      const Sf = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const i = e ? pr.Slot : "p",
            a = (0, pf.mergeProps)({
              className: Pf({
                appearance: r
              })
            }, n);
          return (0, g.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        })),
        Cf = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? pr.Slot : "h1",
            i = (0, pf.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, g.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }));
      var xf = _f({
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
      const Tf = (0, A.forwardRef)((({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? pr.Slot : `h${t}`,
          a = (0, pf.mergeProps)(n, {
            className: xf({
              level: t
            })
          });
        return (0, g.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...a
        })
      }));
      var Of = _f({
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
      const If = (0, A.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? pr.Slot : "p",
          s = (0, pf.mergeProps)({
            className: Of({
              size: n,
              appearance: r
            })
          }, o);
        return (0, g.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));
      var Nf = _f({
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
      const jf = {
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
        kf = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? pr.Slot : jf[r] || "span",
            a = (0, pf.mergeProps)(n, {
              className: Nf({
                semantic: r
              })
            });
          return (0, g.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }));
      var Rf = "foundry_bc732x1";
      const Lf = (0, A.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (zd(e, (e => r?.(e)), [r]), (0, g.jsx)(Ef, {
        size: "XS",
        className: (0, He.clsx)("foundry_bc732x0", {
          [Rf]: t
        }),
        asChild: !0,
        children: (0, g.jsx)("kbd", {
          ref: n,
          children: e
        })
      }))));

      function Af(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var Mf = r(94118),
        Df = r(95362),
        Hf = r(85426),
        Bf = r(79158),
        Vf = r(77768),
        zf = r(29044),
        Ff = r(60528),
        qf = r(78004),
        Uf = r(20027),
        Gf = ["PageUp", "PageDown"],
        Kf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Xf = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Wf = "Slider",
        [$f, Yf, Zf] = (0, Uf.N)(Wf),
        [Qf, Jf] = (0, Hf.A)(Wf, [Zf]),
        [eh, th] = Qf(Wf),
        rh = A.forwardRef(((e, t) => {
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
          } = e, v = A.useRef(new Set), y = A.useRef(0), b = "horizontal" === a ? ih : ah, [_ = [], w] = (0, Bf.useControllableState)({
            prop: u,
            defaultProp: c,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), E = A.useRef(_);

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
              c = Af(s, [n, o]);
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
                y.current = n.indexOf(c);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            }))
          }
          return (0, g.jsx)(eh, {
            scope: e.__scopeSlider,
            name: r,
            disabled: s,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: _,
            orientation: a,
            form: p,
            children: (0, g.jsx)($f.Provider, {
              scope: e.__scopeSlider,
              children: (0, g.jsx)($f.Slot, {
                scope: e.__scopeSlider,
                children: (0, g.jsx)(b, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, Mf.m)(m.onPointerDown, (() => {
                    s || (E.current = _)
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
                    }(_, e);
                    P(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    P(e, y.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = E.current[y.current];
                    _[y.current] !== e && f(_)
                  },
                  onHomeKeyDown: () => !s && P(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && P(o, _.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const r = Gf.includes(e.key) || e.shiftKey && Kf.includes(e.key) ? 10 : 1,
                        n = y.current;
                      P(_[n] + i * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      rh.displayName = Wf;
      var [nh, oh] = Qf(Wf, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), ih = A.forwardRef(((e, t) => {
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
        } = e, [d, f] = A.useState(null), h = (0, Df.s)(t, (e => f(e))), p = A.useRef(void 0), m = (0, Vf.jH)(o), v = "ltr" === m, y = v && !i || !v && i;

        function b(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = yh([0, t.width], y ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, g.jsx)(nh, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, g.jsx)(sh, {
            dir: m,
            "data-orientation": "horizontal",
            ...u,
            ref: h,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = b(e.clientX);
              a?.(t)
            },
            onSlideMove: e => {
              const t = b(e.clientX);
              s?.(t)
            },
            onSlideEnd: () => {
              p.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = Xf[y ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), ah = A.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...c
        } = e, u = A.useRef(null), d = (0, Df.s)(t, u), f = A.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = yh([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, g.jsx)(nh, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, g.jsx)(sh, {
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
              const t = Xf[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), sh = A.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...c
        } = e, u = th(Wf, r);
        return (0, g.jsx)(qf.sG.span, {
          ...c,
          ref: t,
          onKeyDown: (0, Mf.m)(e.onKeyDown, (e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Gf.concat(Kf).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: (0, Mf.m)(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          })),
          onPointerMove: (0, Mf.m)(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: (0, Mf.m)(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), lh = "SliderTrack", ch = A.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = th(lh, r);
        return (0, g.jsx)(qf.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      }));
      ch.displayName = lh;
      var uh = "SliderRange",
        dh = A.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = th(uh, r), i = oh(uh, r), a = A.useRef(null), s = (0, Df.s)(t, a), l = o.values.length, c = o.values.map((e => vh(e, o.min, o.max))), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
          return (0, g.jsx)(qf.sG.span, {
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
      dh.displayName = uh;
      var fh = "SliderThumb",
        hh = A.forwardRef(((e, t) => {
          const r = Yf(e.__scopeSlider),
            [n, o] = A.useState(null),
            i = (0, Df.s)(t, (e => o(e))),
            a = A.useMemo((() => n ? r().findIndex((e => e.ref.current === n)) : -1), [r, n]);
          return (0, g.jsx)(ph, {
            ...e,
            ref: i,
            index: a
          })
        })),
        ph = A.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, a = th(fh, r), s = oh(fh, r), [l, c] = A.useState(null), u = (0, Df.s)(t, (e => c(e))), d = !l || a.form || !!l.closest("form"), f = (0, Ff.X)(l), h = a.values[n], p = void 0 === h ? 0 : vh(h, a.min, a.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, a.values.length), v = f?.[s.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - yh([0, 50], [0, n])(t) * r) * r
          }(v, p, s.direction) : 0;
          return A.useEffect((() => {
            if (l) return a.thumbs.add(l), () => {
              a.thumbs.delete(l)
            }
          }), [l, a.thumbs]), (0, g.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${p}% + ${y}px)`
            },
            children: [(0, g.jsx)($f.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, g.jsx)(qf.sG.span, {
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
                onFocus: (0, Mf.m)(e.onFocus, (() => {
                  a.valueIndexToChangeRef.current = n
                }))
              })
            }), d && (0, g.jsx)(mh, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: h
            }, n)]
          })
        }));
      hh.displayName = fh;
      var mh = A.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = A.useRef(null),
          i = (0, Df.s)(o, n),
          a = (0, zf.Z)(t);
        return A.useEffect((() => {
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
        }), [a, t]), (0, g.jsx)(qf.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      }));

      function vh(e, t, r) {
        return Af(100 / (r - t) * (e - t), [0, 100])
      }

      function yh(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      mh.displayName = "RadioBubbleInput";
      var gh = rh,
        bh = ch,
        _h = dh,
        wh = hh,
        Eh = r(20841);

      function Ph(e) {
        const t = (0, A.useRef)(e);
        return (0, A.useEffect)((() => {
          t.current = e
        })), (0, A.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      r(6330), r(22108);
      var Sh = r(89749),
        Ch = r(74406),
        xh = r(96077),
        Th = r(34902),
        Oh = r(53146),
        [Ih, Nh] = (0, Hf.A)("Tooltip", [xh.Bk]),
        jh = (0, xh.Bk)(),
        kh = "TooltipProvider",
        Rh = 700,
        Lh = "tooltip.open",
        [Ah, Mh] = Ih(kh),
        Dh = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Rh,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = A.useRef(!0), s = A.useRef(!1), l = A.useRef(0);
          return A.useEffect((() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }), []), (0, g.jsx)(Ah, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: A.useCallback((() => {
              window.clearTimeout(l.current), a.current = !1
            }), []),
            onClose: A.useCallback((() => {
              window.clearTimeout(l.current), l.current = window.setTimeout((() => a.current = !0), n)
            }), [n]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: A.useCallback((e => {
              s.current = e
            }), []),
            disableHoverableContent: o,
            children: i
          })
        };
      Dh.displayName = kh;
      var Hh = "Tooltip",
        [Bh, Vh] = Ih(Hh),
        zh = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = Mh(Hh, e.__scopeTooltip), c = jh(t), [u, d] = A.useState(null), f = (0, Ch.useId)(), h = A.useRef(0), p = a ?? l.disableHoverableContent, m = s ?? l.delayDuration, v = A.useRef(!1), [y, b] = (0, Bf.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Lh))) : l.onClose(), i?.(e)
            },
            caller: Hh
          }), _ = A.useMemo((() => y ? v.current ? "delayed-open" : "instant-open" : "closed"), [y]), w = A.useCallback((() => {
            window.clearTimeout(h.current), h.current = 0, v.current = !1, b(!0)
          }), [b]), E = A.useCallback((() => {
            window.clearTimeout(h.current), h.current = 0, b(!1)
          }), [b]), P = A.useCallback((() => {
            window.clearTimeout(h.current), h.current = window.setTimeout((() => {
              v.current = !0, b(!0), h.current = 0
            }), m)
          }), [m, b]);
          return A.useEffect((() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }), []), (0, g.jsx)(xh.bL, {
            ...c,
            children: (0, g.jsx)(Bh, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: _,
              trigger: u,
              onTriggerChange: d,
              onTriggerEnter: A.useCallback((() => {
                l.isOpenDelayedRef.current ? P() : w()
              }), [l.isOpenDelayedRef, P, w]),
              onTriggerLeave: A.useCallback((() => {
                p ? E() : (window.clearTimeout(h.current), h.current = 0)
              }), [E, p]),
              onOpen: w,
              onClose: E,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      zh.displayName = Hh;
      var Fh = "TooltipTrigger",
        qh = A.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Vh(Fh, r), i = Mh(Fh, r), a = jh(r), s = A.useRef(null), l = (0, Df.s)(t, s, o.onTriggerChange), c = A.useRef(!1), u = A.useRef(!1), d = A.useCallback((() => c.current = !1), []);
          return A.useEffect((() => () => document.removeEventListener("pointerup", d)), [d]), (0, g.jsx)(xh.Mz, {
            asChild: !0,
            ...a,
            children: (0, g.jsx)(qf.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, Mf.m)(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (u.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              })),
              onPointerLeave: (0, Mf.m)(e.onPointerLeave, (() => {
                o.onTriggerLeave(), u.current = !1
              })),
              onPointerDown: (0, Mf.m)(e.onPointerDown, (() => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              })),
              onFocus: (0, Mf.m)(e.onFocus, (() => {
                c.current || o.onOpen()
              })),
              onBlur: (0, Mf.m)(e.onBlur, o.onClose),
              onClick: (0, Mf.m)(e.onClick, o.onClose)
            })
          })
        }));
      qh.displayName = Fh;
      var Uh = "TooltipPortal",
        [Gh, Kh] = Ih(Uh, {
          forceMount: void 0
        }),
        Xh = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = Vh(Uh, t);
          return (0, g.jsx)(Gh, {
            scope: t,
            forceMount: r,
            children: (0, g.jsx)(Oh.C, {
              present: r || i.open,
              children: (0, g.jsx)(Th.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Xh.displayName = Uh;
      var Wh = "TooltipContent",
        $h = A.forwardRef(((e, t) => {
          const r = Kh(Wh, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = Vh(Wh, e.__scopeTooltip);
          return (0, g.jsx)(Oh.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, g.jsx)(ep, {
              side: o,
              ...i,
              ref: t
            }) : (0, g.jsx)(Yh, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        Yh = A.forwardRef(((e, t) => {
          const r = Vh(Wh, e.__scopeTooltip),
            n = Mh(Wh, e.__scopeTooltip),
            o = A.useRef(null),
            i = (0, Df.s)(t, o),
            [a, s] = A.useState(null),
            {
              trigger: l,
              onClose: c
            } = r,
            u = o.current,
            {
              onPointerInTransitChange: d
            } = n,
            f = A.useCallback((() => {
              s(null), d(!1)
            }), [d]),
            h = A.useCallback(((e, t) => {
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
          return A.useEffect((() => () => f()), [f]), A.useEffect((() => {
            if (l && u) {
              const e = e => h(e, u),
                t = e => h(e, l);
              return l.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t)
              }
            }
          }), [l, u, h, f]), A.useEffect((() => {
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
          }), [l, u, a, c, f]), (0, g.jsx)(ep, {
            ...e,
            ref: i
          })
        })),
        [Zh, Qh] = Ih(Hh, {
          isInside: !1
        }),
        Jh = (0, pr.createSlottable)("TooltipContent"),
        ep = A.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = Vh(Wh, r), c = jh(r), {
            onClose: u
          } = l;
          return A.useEffect((() => (document.addEventListener(Lh, u), () => document.removeEventListener(Lh, u))), [u]), A.useEffect((() => {
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
          }), [l.trigger, u]), (0, g.jsx)(Sh.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, g.jsxs)(xh.UC, {
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
              children: [(0, g.jsx)(Jh, {
                children: n
              }), (0, g.jsx)(Zh, {
                scope: r,
                isInside: !0,
                children: (0, g.jsx)(mr.Root, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        }));
      $h.displayName = Wh;
      var tp = "TooltipArrow",
        rp = A.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = jh(r);
          return Qh(tp, r).isInside ? null : (0, g.jsx)(xh.i3, {
            ...o,
            ...n,
            ref: t
          })
        }));
      rp.displayName = tp;
      var np = Dh,
        op = zh,
        ip = qh,
        ap = Xh,
        sp = $h,
        lp = rp;
      const cp = (0, A.createContext)(null);

      function up() {
        const e = (0, A.useContext)(cp);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const dp = ({
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
              const r = (0, A.useState)(e),
                [n] = r,
                o = (0, A.useRef)(n),
                i = Ph(t);
              return (0, A.useEffect)((() => {
                o.current !== n && (i(n), o.current = n)
              }), [n, o, i]), r
            }({
              defaultProp: t,
              onChange: r
            }), i = void 0 !== e, a = i ? e : n, s = Ph(r), l = (0, A.useCallback)((t => {
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
          return (0, g.jsx)(np, {
            delayDuration: t,
            children: (0, g.jsx)(cp.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, g.jsx)(op, {
                open: i,
                onOpenChange: a,
                children: e
              })
            })
          })
        },
        fp = (0, A.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => (0, g.jsx)(ip, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        }))),
        hp = (0, A.forwardRef)((({
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
          } = up(), m = function(e) {
            const t = (0, A.useRef)({
                value: e,
                prev: void 0
              }),
              r = t.current.value;
            return e !== r && (t.current = {
              value: e,
              prev: r
            }), t.current.prev
          }(p), v = xs({
            opacity: p ? 1 : 0,
            immediate: p && !m
          }), y = (0, Eh.mergeProps)({
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, f);
          return (0, g.jsx)(sp, {
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
            children: (0, g.jsx)(Xs.div, {
              style: v,
              ...y,
              ref: h,
              children: t
            })
          })
        })),
        pp = (0, A.forwardRef)((({
          testId: e
        }, t) => {
          const r = (0, Eh.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, g.jsx)(lp, {
            ...r,
            ref: t
          })
        })),
        mp = ap;
      var vp = "foundry_bwy1ds1",
        yp = "foundry_bwy1dsg",
        gp = "foundry_bwy1dsf";
      const bp = e => {
          e.preventDefault?.()
        },
        _p = e => {
          const {
            delayDuration: t,
            content: r,
            children: n,
            ...o
          } = e;
          return (0, g.jsxs)(dp, {
            delayDuration: t,
            children: [(0, g.jsx)(fp, {
              children: n
            }), (0, g.jsxs)(hp, {
              ...o,
              children: [r, (0, g.jsx)(pp, {})]
            })]
          })
        },
        wp = (0, A.forwardRef)((({
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
          resetZoom: u,
          caption: d,
          showDownloadButton: f,
          defaultZoomLevel: h,
          showZoomControls: p
        }, m) => {
          const v = cd(),
            y = Ur("screen and (max-width: 1024px)"),
            b = r !== h,
            _ = y ? "MD" : "XL",
            w = xs({
              opacity: b ? 1 : 0,
              immediate: Gr()
            });
          zd(["+", "=", "add", "plus"], (() => n?.()), {
            preventDefault: !0,
            enabled: p
          }), zd(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: p
          }), zd("r", (() => u?.()), {
            preventDefault: !0,
            enabled: p
          });
          const E = Yr() && y;
          return (0, g.jsx)(Hd, {
            children: (0, g.jsxs)("div", {
              className: "foundry_bwy1ds0",
              ref: m,
              children: [(0, g.jsx)(_p, {
                side: "right",
                delayDuration: 0,
                onPointerDownOutside: bp,
                content: (0, g.jsxs)("div", {
                  className: gp,
                  children: [v.formatMessage(Fd), (0, g.jsx)(Ef, {
                    size: "XS",
                    className: yp,
                    children: v.formatMessage(qd, {
                      shortcut: (0, g.jsx)(Lf, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, g.jsx)(hf, {
                  size: _,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: v.formatMessage(Fd),
                  className: (0, He.clsx)(vp, "foundry_bwy1ds2"),
                  onPress: e
                })
              }), (0, g.jsxs)("div", {
                className: "foundry_bwy1ds3",
                children: [!E && p && (0, g.jsxs)(g.Fragment, {
                  children: [(0, g.jsxs)("div", {
                    className: "foundry_bwy1ds4",
                    children: [(0, g.jsx)(_p, {
                      side: "left",
                      delayDuration: 0,
                      onPointerDownOutside: bp,
                      content: (0, g.jsxs)("div", {
                        className: gp,
                        children: [v.formatMessage(Ud), (0, g.jsx)(Ef, {
                          size: "XS",
                          className: yp,
                          children: v.formatMessage(Gd, {
                            shortcut: (0, g.jsx)(Lf, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, g.jsx)(hf, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: v.formatMessage(Ud),
                        className: (0, He.clsx)(vp, "foundry_bwy1ds5"),
                        onPress: () => n(),
                        isDisabled: !l
                      })
                    }), (0, g.jsxs)(gh, {
                      className: "foundry_bwy1dsa",
                      value: [r],
                      max: s,
                      min: a,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => i?.(e[0]),
                      children: [(0, g.jsx)(bh, {
                        className: "foundry_bwy1dsb",
                        children: (0, g.jsx)(_h, {
                          className: "foundry_bwy1dsc"
                        })
                      }), (0, g.jsx)(_p, {
                        side: "left",
                        delayDuration: 0,
                        onPointerDownOutside: bp,
                        content: v.formatMessage(Zd, {
                          zoom: r.toFixed(0)
                        }),
                        children: (0, g.jsx)(wh, {
                          className: "foundry_bwy1dsd",
                          "aria-label": v.formatMessage(Yd),
                          children: (0, g.jsx)("span", {
                            className: "foundry_bwy1dse"
                          })
                        })
                      })]
                    }), (0, g.jsx)(_p, {
                      side: "left",
                      delayDuration: 0,
                      onPointerDownOutside: bp,
                      content: (0, g.jsxs)("div", {
                        className: gp,
                        children: [v.formatMessage(Kd), (0, g.jsx)(Ef, {
                          size: "XS",
                          className: yp,
                          children: v.formatMessage(Xd, {
                            shortcut: (0, g.jsx)(Lf, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, g.jsx)(hf, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: v.formatMessage(Kd),
                        className: (0, He.clsx)(vp, "foundry_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !c
                      })
                    })]
                  }), (0, g.jsx)(Xs.div, {
                    style: w,
                    children: (0, g.jsx)(_p, {
                      side: "left",
                      delayDuration: 0,
                      onPointerDownOutside: bp,
                      content: (0, g.jsxs)("div", {
                        className: gp,
                        children: [v.formatMessage(Wd), (0, g.jsx)(Ef, {
                          size: "XS",
                          className: yp,
                          children: v.formatMessage($d, {
                            shortcut: (0, g.jsx)(Lf, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, g.jsx)(hf, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Undo",
                        label: v.formatMessage(Wd),
                        className: (0, He.clsx)(vp, "foundry_bwy1ds7"),
                        onPress: u,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), f && E && (0, g.jsx)(_p, {
                  side: "left",
                  delayDuration: 0,
                  onPointerDownOutside: bp,
                  content: v.formatMessage(Jd),
                  children: (0, g.jsx)(hf, {
                    size: _,
                    appearance: "tertiary",
                    icon: "Download",
                    label: v.formatMessage(Qd),
                    className: vp,
                    onPress: e
                  })
                })]
              }), (0, g.jsxs)("div", {
                className: "foundry_bwy1ds8",
                children: [d && (0, g.jsxs)(g.Fragment, {
                  children: [(0, g.jsx)("div", {
                    className: "foundry_bwy1dsh"
                  }), (0, g.jsx)(Ef, {
                    size: "SM",
                    "aria-hidden": !0,
                    asChild: "string" != typeof d,
                    children: d
                  })]
                }), f && !E && (0, g.jsx)("div", {
                  className: "foundry_bwy1ds9",
                  children: (0, g.jsx)(_p, {
                    side: "left",
                    delayDuration: 0,
                    onPointerDownOutside: bp,
                    content: v.formatMessage(Jd),
                    children: (0, g.jsx)(hf, {
                      size: _,
                      appearance: "tertiary",
                      icon: "Download",
                      label: v.formatMessage(Qd),
                      className: vp,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var Ep = "foundry_1a74xwb4",
        Pp = r(24780);
      const Sp = Xs(Pp.Overlay),
        Cp = Xs(Pp.Content),
        xp = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        Tp = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        Op = (0, Qr.cubicBezier)(.77, 0, .175, 1),
        Ip = ({
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
          thumbnailFit: u,
          reduceMotion: d = !1,
          defaultOpen: f,
          open: h,
          onOpenChange: p,
          showOpenButton: m,
          showDownloadButton: v,
          zoomLevel: y,
          defaultZoomLevel: b = 100,
          minZoomLevel: _ = 100,
          maxZoomLevel: w = 300,
          zoomLevelStep: E = 100,
          onZoomLevelChange: P,
          gestureSettings: S,
          testId: C,
          showZoomControls: x = !0,
          disableGesturesOn: T,
          asChild: O,
          children: I,
          className: N,
          usePortal: j = !0,
          enabled: k = !0
        }) => {
          const R = (0, A.useRef)(null),
            L = (0, A.useRef)(null),
            M = (0, A.useRef)(null),
            D = (0, A.useRef)(null),
            H = Os(),
            B = Os(),
            V = Os(),
            z = (0, A.useRef)(!1),
            F = cd(),
            q = Ur("screen and (max-width: 1024px)"),
            U = Yr() && q,
            G = Gr(),
            K = "pointer-devices" !== T || U,
            [X, W] = (0, A.useState)(!0),
            [$, Y] = (0, A.useState)(!1),
            [Z = !1, Q] = Wr({
              prop: h,
              defaultProp: f,
              onChange: p
            }),
            [J, ee] = (0, A.useState)(!1),
            [te, re] = (0, A.useState)(null),
            ne = (0, A.useDeferredValue)(J),
            oe = d || G || f && !z.current;
          (0, A.useEffect)((() => {
            o?.()
          }), []), (0, A.useEffect)((() => {
            (f || h) && ee(Z)
          }), []), Zr((() => {
            J !== ne && (async function(e, {
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
                _ = ((e, t = 0) => Number.isNaN(e) ? t : e)("horizontal" === g ? (window.innerWidth - window.innerHeight * p / m) / 2 : (window.innerHeight - window.innerWidth * m / p) / 2, 0);
              e ? V.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    aspectRatio: "unset",
                    scale: l,
                    width: `${n.width}px`,
                    height: `${n.height}px`,
                    x: n.left,
                    y: n.top,
                    objectFit: u || a,
                    objectPosition: c || s
                  }), await e({
                    immediate: !0,
                    opacity: 1
                  }), M.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === g ? `${window.innerHeight}px` : `${y}px`,
                    width: "horizontal" === g ? `${v}px` : `${window.innerWidth}px`,
                    x: "horizontal" === g ? _ : 0,
                    y: "horizontal" === g ? 0 : _,
                    scale: b / 100,
                    immediate: oe,
                    config: {
                      duration: 550,
                      easing: Op
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
                  }), "vertical" === g ? R.current?.style.setProperty("width", "100%") : "horizontal" === g && R.current?.style.setProperty("height", "100%"), t?.()
                }
              }) : V.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    opacity: 1,
                    height: "horizontal" === g ? `${window.innerHeight}px` : `${y}px`,
                    width: "horizontal" === g ? `${v}px` : `${window.innerWidth}px`,
                    x: he.position[0] + ("horizontal" === g ? _ : 0),
                    y: he.position[1] + ("horizontal" === g ? 0 : _),
                    scale: he.zoomLevel / 100,
                    objectFit: u || a,
                    objectPosition: c || s
                  }), await e({
                    aspectRatio: "unset",
                    scale: l,
                    width: `${n.width}px`,
                    height: `${n.height}px`,
                    x: n.left,
                    y: n.top,
                    immediate: oe,
                    config: {
                      duration: 250,
                      easing: Op
                    }
                  }), M.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), r?.()
                }
              })
            }(J, {
              onClose: () => Q(!1)
            }), z.current = !0)
          }), [J]), Zr((() => {
            Z ? Promise.resolve().then((() => async function() {
              const e = M.current.querySelector("img");
              if (D.current) {
                let t = xp;
                e?.currentSrc && (t = e?.currentSrc), D.current.src = t, await ye(D.current)
              }
            }())).then((() => ye(D.current))).then((() => ee(Z))) : ee(!1)
          }), [Z]);
          const ie = () => {
              ee(!1)
            },
            {
              loaded: ae,
              eventHandlers: se
            } = (({
              enabled: e = !0
            }) => {
              const [t, r] = (0, A.useState)(!1), [n, o] = (0, A.useState)(!1);
              return (0, A.useEffect)((() => {
                e || (r(!1), o(!1))
              }), [e]), {
                eventHandlers: {
                  onLoad: () => {
                    e && (o(!0), r(!1))
                  },
                  onAbort: () => {
                    e && (o(!0), r(!1))
                  },
                  onError: () => {
                    e && (o(!0), r(!1))
                  }
                },
                error: t,
                loaded: n
              }
            })({
              enabled: ne
            }),
            {
              isHovered: le
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [r, n] = (0, A.useState)(!1);
              return (0, A.useEffect)((() => {
                n(!1)
              }), [t.current]), $r("mouseenter", (() => {
                n(!0)
              }), t), $r("mouseleave", (() => {
                n(!1)
              }), t), {
                isHovered: !!e && r
              }
            })({
              ref: L,
              enabled: ne
            }),
            {
              isFocused: ce
            } = (({
              ref: e,
              onChange: t,
              onFocusIn: r,
              onFocusOut: n,
              enabled: o = !0
            }) => {
              const [i, a] = (0, A.useState)(!1);
              return $r("focusin", (e => {
                a(!0), r?.(e), t?.(!0, e)
              }), e), $r("focusout", (e => {
                a(!1), n?.(e), t?.(!1, e)
              }), e), {
                isFocused: !!o && i
              }
            })({
              ref: L,
              enabled: ne
            }),
            {
              isIdle: ue
            } = (({
              activity: e,
              leave: t,
              enabled: r = !0
            }) => {
              const n = (0, A.useRef)(),
                [o, i] = (0, A.useState)(!1),
                a = (0, A.useCallback)((() => {
                  i(!0)
                }), []),
                s = (0, A.useCallback)((0, Xr.n)((() => {
                  i(!1), window.clearTimeout(n.current), n.current = window.setTimeout(a, e)
                }), 500), []),
                l = (0, A.useCallback)((() => {
                  window.clearTimeout(n.current), n.current = window.setTimeout(a, t)
                }), []),
                c = (0, A.useCallback)((() => {
                  document.hidden || s()
                }), []);
              return (0, A.useEffect)((() => {
                const e = () => {
                  window.removeEventListener("mousemove", s), window.removeEventListener("mousedown", s), window.removeEventListener("resize", s), window.removeEventListener("keydown", s), window.removeEventListener("touchstart", s), window.removeEventListener("wheel", s), document.removeEventListener("mouseleave", l), document.removeEventListener("visibilitychange", c), window.clearTimeout(n.current), i(!1)
                };
                return r ? (window.addEventListener("mousemove", s), window.addEventListener("mousedown", s), window.addEventListener("resize", s), window.addEventListener("keydown", s), window.addEventListener("touchstart", s), window.addEventListener("wheel", s), document.addEventListener("mouseleave", l), document.addEventListener("visibilitychange", c), s()) : e(), () => e()
              }), [r]), {
                isIdle: o
              }
            })({
              leave: 300,
              activity: 3e3,
              enabled: ne && !le && !ce && !U
            }),
            de = function(e, t, r) {
              const n = No.fun(t) && t,
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
                f = (0, A.useMemo)((() => n || 3 == arguments.length ? Cs() : void 0), []),
                h = Lo(e),
                p = [],
                m = (0, A.useRef)(null),
                v = o ? null : m.current;
              Zi((() => {
                m.current = p
              })), Ji((() => (ko(p, (e => {
                f?.add(e.ctrl), e.ctrl.ref = f
              })), () => {
                ko(m.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Na(e.ctrl, f), e.ctrl.stop(!0)
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
                      return r ? (t.add(r), r.key) : Is++
                    }))
                  }
                  return No.und(r) ? e : No.fun(r) ? e.map(r) : Lo(r)
                }(h, n ? n() : t, v),
                g = o && m.current || [];
              Zi((() => ko(g, (({
                ctrl: e,
                item: t,
                key: r
              }) => {
                Na(e, f), ga(c, t, r)
              }))));
              const b = [];
              if (v && ko(v, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
                })), ko(h, ((e, t) => {
                  p[t] || (p[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new hs
                  }, p[t].ctrl.item = e)
                })), b.length) {
                let e = -1;
                const {
                  leave: r
                } = n ? n() : t;
                ko(b, ((t, n) => {
                  const o = v[n];
                  ~t ? (e = p.indexOf(o), p[e] = {
                    ...o,
                    item: h[t]
                  }) : r && p.splice(++e, 0, o)
                }))
              }
              No.fun(i) && p.sort(((e, t) => i(e.item, t.item)));
              let _ = -a;
              const w = Qi(),
                E = Pa(t),
                P = new Map,
                S = (0, A.useRef)(new Map),
                C = (0, A.useRef)(!1);
              ko(p, ((e, r) => {
                const o = e.key,
                  i = e.phase,
                  c = n ? n() : t;
                let f, h;
                const p = ga(c.delay || 0, o);
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
                if (f = ga(f, e.item, r), f = No.obj(f) ? xa(f) : {
                    to: f
                  }, !f.config) {
                  const t = d || E.config;
                  f.config = ga(t, e.item, r, h)
                }
                _ += a;
                const g = {
                  ...E,
                  delay: p + _,
                  ref: u,
                  immediate: c.immediate,
                  reset: !1,
                  ...f
                };
                if ("enter" == h && No.und(g.from)) {
                  const o = n ? n() : t,
                    i = No.und(o.initial) || v ? o.from : o.initial;
                  g.from = ga(i, e.item, r)
                }
                const {
                  onResolve: b
                } = g;
                g.onResolve = e => {
                  ga(b, e);
                  const t = m.current,
                    r = t.find((e => e.key === o));
                  if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == r.phase) {
                      const t = ga(s, r.item);
                      if (!1 !== t) {
                        const n = !0 === t ? 0 : t;
                        if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                      }
                    }
                    e && t.some((e => e.expired)) && (S.current.delete(r), l && (C.current = !0), w())
                  }
                };
                const x = vs(e.ctrl, g);
                "leave" === h && l ? S.current.set(e, {
                  phase: h,
                  springs: x,
                  payload: g
                }) : P.set(e, {
                  phase: h,
                  springs: x,
                  payload: g
                })
              }));
              const x = (0, A.useContext)(Ps),
                T = ta(x),
                O = x !== T && Oa(x);
              Zi((() => {
                O && ko(p, (e => {
                  e.ctrl.start({
                    default: x
                  })
                }))
              }), [x]), ko(P, ((e, t) => {
                if (S.current.size) {
                  const e = p.findIndex((e => e.key === t.key));
                  p.splice(e, 1)
                }
              })), Zi((() => {
                ko(S.current.size ? S.current : P, (({
                  phase: e,
                  payload: t
                }, r) => {
                  const {
                    ctrl: n
                  } = r;
                  r.phase = e, f?.add(n), O && "enter" == e && n.start({
                    default: x
                  }), t && (ja(n, t.ref), !n.ref && !f || C.current ? (n.start(t), C.current && (C.current = !1)) : n.update(t))
                }))
              }), o ? void 0 : r);
              const I = e => A.createElement(A.Fragment, null, p.map(((t, r) => {
                const {
                  springs: n
                } = P.get(t) || t.ctrl, o = e({
                  ...n
                }, t.item, t, r);
                return o && o.type ? A.createElement(o.type, {
                  ...o.props,
                  key: No.str(t.key) || No.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return f ? [I, f] : I
            }(ne, {
              ref: H,
              from: {
                opacity: 0
              },
              enter: {
                opacity: 1
              },
              leave: {
                opacity: 0
              },
              immediate: oe
            }),
            [fe] = xs((() => ({
              ref: B,
              opacity: ne && !ue && ae && X ? 1 : 0,
              immediate: oe
            })), [ne, ue, ae, X]),
            he = (({
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
              gestureSettings: h = tl,
              enabled: p
            }) => {
              const m = Gr(),
                [v = t, y] = Wr({
                  prop: e,
                  defaultProp: t,
                  onChange: r
                }),
                [g = s, b] = Wr({
                  prop: a,
                  defaultProp: s,
                  onChange: l
                }),
                _ = (0, A.useRef)(null),
                w = (0, A.useRef)(null),
                [E, P] = (0, A.useState)(!1),
                S = g > n,
                C = g < o,
                x = g > n,
                T = g === n,
                [O, I] = xs((() => ({
                  x: v[0],
                  y: v[1],
                  scale: g / 100,
                  from: {
                    scale: n / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: m,
                  config: Js
                }))),
                N = (e, {
                  origin: r,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (_.current && w.current) {
                    r || (r = [w.current.clientWidth / 2, w.current.clientHeight / 2]);
                    const s = Qs(e, n, o);
                    if (s === g) return;
                    i || (i = (s - g) / 100);
                    const l = {
                      config: a || Js,
                      x: t[0],
                      y: t[1],
                      scale: g,
                      immediate: m
                    };
                    if (s <= n) y(t);
                    else {
                      const e = Zs(_.current, w.current, (({
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
                        contentRef: _,
                        pinchDelta: i,
                        scale: g / 100,
                        touchOrigin: r
                      }), s);
                      l.x = e.xy[0], l.y = e.xy[1], y(e.xy)
                    }
                    l.scale = s / 100, I(l), b(s)
                  }
                },
                j = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: k
                } = (({
                  enabled: e = !0,
                  latency: t = 300,
                  onDoubleClick: r = () => null,
                  onSingleClick: n = () => null
                }) => {
                  const o = (0, A.useRef)(0),
                    i = (0, A.useRef)();
                  return {
                    handleClick: a => {
                      e && (o.current += 1, i.current = setTimeout((() => {
                        1 === o.current ? n(a) : 2 === o.current && r(a), o.current = 0
                      }), t))
                    }
                  }
                })({
                  onDoubleClick: e => {
                    if (_.current) {
                      const t = $s(_.current),
                        r = j(e, t) ? "overlay" : "content";
                      f?.({
                        target: r,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (_.current && 0 === e.button) {
                      const t = $s(_.current),
                        r = j(e, t) ? "overlay" : "content";
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
                contentRef: _,
                canPan: S,
                isPanning: E,
                position: v,
                zoomLevel: g,
                zoomIn: e => {
                  N(g + i, e)
                },
                zoomOut: e => {
                  N(g - i, e)
                },
                zoomTo: N,
                resetZoom: () => {
                  y(t), b(s);
                  const e = {
                    config: el,
                    x: t[0],
                    y: t[1],
                    scale: s / 100,
                    immediate: m
                  };
                  I(e)
                },
                canZoomIn: C,
                canZoomOut: x,
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
                    if (!w.current || !_.current) return;
                    if (s) return void k(c);
                    if (o && i && !E && P(!0), l > 1) return;
                    if (a || g < n) return;
                    if (e) return v;
                    const {
                      horizontalOffset: d,
                      verticalOffset: f
                    } = Zs(_.current, w.current, v, g), p = o * h.dragFactor, b = i * h.dragFactor, S = {
                      config: Js,
                      x: t[0],
                      y: t[1],
                      immediate: m
                    };
                    if (g === n) {
                      const e = [r[0], r[1] + b],
                        {
                          y: t
                        } = Ys(e, _.current),
                        n = Qs(100 * Math.abs(t) / h.closePc, 0, 100);
                      S.config = el, S.x = e[0], S.y = e[1], y(e), u?.(n)
                    } else {
                      const e = [Ws(r[0] + p, -d, d), Ws(r[1] + b, -f, f)];
                      S.x = e[0], S.y = e[1], y(e)
                    }
                    return I(S), r
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (w.current && _.current)
                      if (g === n) {
                        const {
                          y: e
                        } = Ys(v, _.current);
                        if (Qs(100 * Math.abs(e) / h.closePc, 0, 100) >= 100) c?.();
                        else {
                          const e = {
                            config: el,
                            x: t[0],
                            y: t[1],
                            immediate: m
                          };
                          I(e), y(t), u?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = Zs(_.current, w.current, v, g),
                        t = {
                          config: Js,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: m
                        };
                      I(t), P(!1), y(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: t,
                    offset: [r],
                    origin: [n, o],
                    first: i
                  }) => {
                    if (_.current && w.current) {
                      if (i && P(!0), t) return void e();
                      N(100 * r, {
                        origin: [n, o],
                        delta: r - g / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    w.current && _.current && P(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: r
                  }) => {
                    if (_.current && w.current) {
                      const n = -1 * r[1];
                      if (n && E && P(!0), e) return;
                      const o = [t.clientX, t.clientY],
                        i = g / 100,
                        a = i + n / h.scrollFactor;
                      N(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    w.current && _.current && P(!1)
                  }
                },
                getCursor: () => T && !p ? "zoom-out" : T && C ? "zoom-in" : S ? E ? "grabbing" : "grab" : "pointer",
                enabled: p,
                animation: O
              }
            })({
              enabled: K && ne,
              onClick: function() {
                q ? W(!X) : ie()
              },
              onDoubleClick: function(e) {
                if (U && he.containerRef.current && "content" === e.target)
                  if (he.zoomLevel > he.minZoomLevel) he.resetZoom();
                  else {
                    const t = ((e, t, r) => {
                      const n = e.height / (r / 100);
                      return 100 * t.height / n
                    })(e.contentBounds, he.containerRef.current.getBoundingClientRect(), he.zoomLevel);
                    he.zoomTo(t, {
                      animationConfig: el
                    })
                  }
              },
              onRequestedClose: ie,
              onRequestingClose: e => {
                if (J) {
                  const t = 1,
                    r = .25,
                    n = Qs(t - e * (t - r) / 100, r, t);
                  H.start({
                    opacity: n
                  });
                  const o = Qs(1 - e / 100, 0, 1);
                  B.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: y,
              defaultZoomLevel: b,
              minZoomLevel: _,
              maxZoomLevel: w,
              zoomLevelStep: E,
              onZoomLevelChange: P,
              defaultPosition: [0, 0],
              gestureSettings: S
            }),
            pe = xs({
              ref: V,
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
                objectFit: u,
                objectPosition: c,
                opacity: 0
              },
              onStart: () => {
                ne || Y(!1)
              },
              onRest: async () => {
                ne ? Y(!0) : (he.resetZoom(), W(!0))
              }
            }),
            me = xs({
              opacity: ne && ae && $ ? 1 : 0,
              immediate: !0,
              onRest: () => {
                ne && J && ae && V.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            ve = [
              [V, H, B],
              [0, 0, .1]
            ];
          async function ye(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, r) => {
              e.onload = () => t(e), e.onerror = r
            }))
          }! function(e, t, r = 1e3) {
            Zi((() => {
              if (t) {
                let n = 0;
                ko(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = r * t[o];
                    isNaN(a) ? a = n : n = a, ko(i, (e => {
                      ko(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + ga(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                ko(e, (e => {
                  const r = e.current;
                  if (r.length) {
                    const n = r.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (ko(r, ((e, t) => ko(n[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(ne ? ve[0] : ve[0].reverse(), ve[1]);
          const ge = O ? (0, g.jsx)(pr.Slot, {
            className: Ep,
            ref: null,
            children: I
          }) : (0, g.jsx)("img", {
            alt: "",
            src: s,
            "aria-hidden": !0,
            loading: i,
            className: Ep,
            crossOrigin: n,
            referrerPolicy: a
          });
          (0, A.useEffect)((() => {
            W(!U)
          }), [U]);
          const {
            contrastMode: be
          } = (0, vr.DP)(), _e = ((e, t) => [wd.xW.tokens, Ed("dark", t)].join(" "))(0, be);
          return (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)(Pp.Root, {
              open: Z,
              children: (0, g.jsxs)("div", {
                className: (0, He.clsx)("foundry_1a74xwb0", N),
                children: [(0, g.jsx)(Pp.Trigger, {
                  asChild: !0,
                  children: (0, g.jsxs)(Xs.button, {
                    className: "foundry_1a74xwb3 foundry_1d5mo5m0 foundry_1a74xwb1",
                    onClick: async () => {
                      k && Q(!Z)
                    },
                    ref: M,
                    "data-idle": !J,
                    style: {
                      aspectRatio: l,
                      objectPosition: c,
                      objectFit: u
                    },
                    children: [(0, g.jsx)(bd, {
                      children: F.formatMessage(vd)
                    }), ge, de(((e, t) => m && !t && (0, g.jsx)(Xs.span, {
                      className: "foundry_1a74xwb5",
                      style: e,
                      children: (0, g.jsx)(Jr.Plus, {
                        label: "",
                        size: "SM"
                      })
                    })))]
                  })
                }), (0, g.jsxs)(Pp.Portal, {
                  ...!j && {
                    container: te
                  },
                  children: [(0, g.jsx)(Xs.img, {
                    "aria-hidden": !0,
                    src: xp,
                    ref: D,
                    className: "foundry_1a74xwb2 foundry_1a74xwb1",
                    style: {
                      aspectRatio: l,
                      backgroundPosition: c,
                      backgroundSize: u,
                      ...pe
                    }
                  }), de(((o, s) => s && (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(Sp, {
                      className: "foundry_1a74xwb8",
                      style: o
                    }), (0, g.jsxs)(Cp, {
                      "data-testid": C,
                      onEscapeKeyDown: ie,
                      onOpenAutoFocus: Tp,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, M),
                      className: _e,
                      children: [(0, g.jsx)(bd, {
                        children: (0, g.jsx)(Pp.Title, {
                          children: F.formatMessage(yd)
                        })
                      }), (0, g.jsx)(bd, {
                        children: (0, g.jsx)(Pp.Description, {
                          children: r || F.formatMessage(gd, {
                            alt: t
                          })
                        })
                      }), (0, g.jsx)(Xs.div, {
                        className: "foundry_1a74xwb6",
                        style: me,
                        children: (0, g.jsx)(rl, {
                          ...he,
                          children: (0, g.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: R,
                            loading: i,
                            className: "foundry_1a74xwba",
                            crossOrigin: n,
                            "aria-hidden": !0,
                            referrerPolicy: a,
                            style: {
                              cursor: he.getCursor()
                            },
                            ...se
                          })
                        })
                      }), (0, g.jsx)(Xs.div, {
                        className: "foundry_1a74xwb9",
                        style: fe,
                        children: (0, g.jsx)(wp, {
                          ...he,
                          ref: L,
                          onClose: ie,
                          caption: r,
                          onDownload: () => (e => {
                            const t = document.createElement("a");
                            t.href = e, t.download = e.substring(e.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                          })(e),
                          showDownloadButton: v,
                          showZoomControls: x
                        })
                      })]
                    })]
                  })))]
                })]
              })
            }), !j && (0, g.jsx)("div", {
              ref: re
            })]
          })
        },
        Np = e => {
          const t = (0, vr.Ym)();
          return (0, g.jsx)(md, {
            messages: _d,
            locale: t,
            children: (0, g.jsx)(Ip, {
              ...e
            })
          })
        };

      function jp(e) {
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

      function kp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Rp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? kp(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = jp(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kp(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Lp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ap = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Rp(Rp({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ap(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lp(e.variantClassNames, (e => Lp(e, (e => e.split(" ")[0]))))
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
      const Dp = (0, A.forwardRef)((({
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
          u = o ? pr.Slot : l;
        return (0, g.jsx)(u, {
          ref: s,
          className: (0, He.clsx)(Mp({
            thickness: r,
            orientation: t
          }), e),
          role: c,
          "aria-orientation": t,
          "data-testid": i,
          ...a
        })
      }));
      var Hp = r(1483);

      function Bp(e) {
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

      function Vp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function zp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vp(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Bp(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vp(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Fp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Up = "var(--foundry_9dxgbc2)",
        Gp = "var(--foundry_9dxgbc3)",
        Kp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = zp(zp({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) qp(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fp(e.variantClassNames, (e => Fp(e, (e => e.split(" ")[0]))))
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
        Xp = "var(--foundry_9dxgbc0)",
        Wp = "var(--foundry_9dxgbc1)";
      const $p = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          children: r,
          colorOverride: n,
          label: o,
          size: i = "MD",
          ...a
        }, s) => {
          const l = (0, vr.zQ)(),
            c = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
            u = (0, Hp.mergeProps)({
              className: Kp({
                size: c
              }),
              "data-testid": t,
              style: H({
                [Xp]: n?.pulseColorBackground,
                [Wp]: n?.pulseColorForeground,
                [Up]: n?.gradientColorBackground,
                [Gp]: n?.gradientColorForeground
              }),
              role: "status",
              "aria-atomic": !0,
              "aria-label": o
            }, a),
            d = e ? pr.Slot : "div";
          return (0, g.jsx)(d, {
            ref: s,
            ...u,
            children: e ? (0, g.jsx)(pr.Slottable, {
              children: r
            }) : (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsx)("div", {
                className: "foundry_9dxgbcd"
              }), (0, g.jsx)("div", {
                className: "foundry_9dxgbcc"
              })]
            })
          })
        })),
        Yp = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? mr.VisuallyHidden : A.Fragment;
          return (0, g.jsx)(r, {
            ...t
          })
        },
        Zp = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        Qp = Zp.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Zp.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), Zp.join(':not([hidden]):not([tabindex="-1"]),');
      const Jp = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        em = e => e && "window" in e && e.window === e ? e : Jp(e).defaultView || window;

      function tm(e) {
        if (function() {
            if (null == rm) {
              rm = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return rm = !0, !0
                  }
                })
              } catch {}
            }
            return rm
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
      let rm = null;
      let nm = !1;

      function om(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function im(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function am(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const sm = am((function() {
          return im(/^Mac/i)
        })),
        lm = am((function() {
          return im(/^iPhone/i)
        })),
        cm = am((function() {
          return im(/^iPad/i) || sm() && navigator.maxTouchPoints > 1
        })),
        um = am((function() {
          return lm() || cm()
        })),
        dm = (am((function() {
          return sm() || um()
        })), am((function() {
          return om(/AppleWebKit/i) && !fm()
        }))),
        fm = am((function() {
          return om(/Chrome/i)
        })),
        hm = am((function() {
          return om(/Android/i)
        })),
        pm = am((function() {
          return om(/Firefox/i)
        }));
      let mm = new Map,
        vm = new Set;

      function ym() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = mm.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), mm.delete(r.target)), 0 === mm.size)) {
            for (let e of vm) e();
            vm.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = mm.get(r.target);
          n || (n = new Set, mm.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? ym() : document.addEventListener("DOMContentLoaded", ym));
      let gm = "default",
        bm = "",
        _m = new WeakMap;

      function wm(e) {
        if (um()) {
          if ("disabled" !== gm) return;
          gm = "restoring", setTimeout((() => {
            var t;
            t = () => {
              if ("restoring" === gm) {
                const t = Jp(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = bm || ""), bm = "", gm = "default"
              }
            }, requestAnimationFrame((() => {
              ! function() {
                for (const [e] of mm) "isConnected" in e && !e.isConnected && mm.delete(e)
              }(), 0 === mm.size ? t() : vm.add(t)
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && _m.has(e)) {
          let t = _m.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), _m.delete(e)
        }
      }
      const Em = A.createContext({
        register: () => {}
      });

      function Pm(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      Em.displayName = "PressResponderContext", Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Sm, Cm = new Map;

      function xm(e, t) {
        if (e === t) return e;
        let r = Cm.get(e);
        if (r) return r.forEach((e => e.current = t)), t;
        let n = Cm.get(t);
        return n ? (n.forEach((t => t.current = e)), e) : t
      }

      function Tm(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Pm(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = xm(r, o) : t[e] = void 0 !== o ? o : r : t[e] = He(r, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (Sm = new FinalizationRegistry((e => {
        Cm.delete(e)
      })));
      const Om = "undefined" != typeof document ? A.useLayoutEffect : () => {};

      function Im(e) {
        const t = (0, A.useRef)(null);
        return Om((() => {
          t.current = e
        }), [e]), (0, A.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }

      function Nm(e, t) {
        return !(!t || !e) && e.contains(t)
      }

      function jm(e) {
        return e.target
      }

      function km(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        pm() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (sm() ? i = !0 : a = !0);
        let c = dm() && sm() && !cm() ? new KeyboardEvent("keydown", {
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
        km.isOpening = r, tm(e), e.dispatchEvent(c), km.isOpening = !1
      }

      function Rm(e) {
        let t = (0, A.useContext)(Em);
        if (t) {
          let {
            register: r,
            ...n
          } = t;
          e = Tm(n, e), r()
        }
        return function(e, t) {
          Om((() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          }))
        }(t, e.ref), e
      }
      km.isOpening = !1;
      var Lm = new WeakMap;
      class Am {
        continuePropagation() {
          Tt(this, Lm, !1)
        }
        get shouldStopPropagation() {
          return Ct(this, Lm)
        }
        constructor(e, t, r, n) {
          var o;
          xt(this, Lm, {
            writable: !0,
            value: void 0
          }), Tt(this, Lm, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, c = 0,
            u = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, u = r.clientY), a && (null != l && null != u ? (s = l - a.left, c = u - a.top) : (s = a.width / 2, c = a.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = c
        }
      }
      const Mm = Symbol("linkClicked"),
        Dm = "react-aria-pressable-style",
        Hm = "data-react-aria-pressable";

      function Bm(e) {
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
        } = Rm(e), [p, m] = (0, A.useState)(!1), v = (0, A.useRef)({
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
          let e = (0, A.useRef)(new Map),
            t = (0, A.useCallback)(((t, r, n, o) => {
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
            r = (0, A.useCallback)(((t, r, n, o) => {
              var i;
              let a = (null === (i = e.current.get(n)) || void 0 === i ? void 0 : i.fn) || n;
              t.removeEventListener(r, a, o), e.current.delete(n)
            }), []),
            n = (0, A.useCallback)((() => {
              e.current.forEach(((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              }))
            }), [r]);
          return (0, A.useEffect)((() => n), [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), b = Im(((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new Am("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), _ = Im(((e, n, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Am("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !s) {
            let r = new Am("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), w = Im(((e, t) => {
          let r = v.current;
          if (s) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new Am("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), E = Im((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(Fm(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || wm(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), P = Im((e => {
          u && E(e)
        })), S = Im((e => {
          null == a || a(e)
        })), C = Im(((e, t) => {
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
        })), x = (0, A.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (zm(t.nativeEvent, t.currentTarget) && Nm(t.currentTarget, jm(t.nativeEvent))) {
                  var n;
                  qm(jm(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        zm(t, n) && !t.repeat && Nm(n, jm(t)) && e.target && w(Fm(e.target, t), "keyboard")
                      };
                    y(Jp(t.currentTarget), "keyup", Pm(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && sm() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var r;
                if ((!t || Nm(t.currentTarget, jm(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !km.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (r = t.nativeEvent).mozInputSource || !r.isTrusted) && (hm() && r.pointerType ? "click" !== r.type || 1 !== r.buttons : 0 !== r.detail || r.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = w(Fm(t.currentTarget, t), r),
                        i = _(Fm(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, S(t), E(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      r = w(t, "virtual"),
                      o = _(t, "virtual");
                    S(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && zm(t, e.target)) {
                var n;
                qm(jm(t), t.key) && t.preventDefault();
                let r = jm(t),
                  o = Nm(e.target, jm(t));
                _(Fm(e.target, t), "keyboard", o), o && C(t, e.target), g(), "Enter" !== t.key && Vm(e.target) && Nm(e.target, r) && !t[Mm] && (t[Mm] = !0, km(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !Nm(t.currentTarget, jm(t.nativeEvent))) return;
              if (o = t.nativeEvent, !hm() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (um()) {
                    if ("default" === gm) {
                      const t = Jp(e);
                      bm = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    gm = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    _m.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = jm(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Jp(t.currentTarget), "pointerup", r, !1), y(Jp(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (Nm(t.currentTarget, jm(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let r = function(e) {
                    for (; e && !e.matches(Qp);) e = e.parentElement;
                    let t = em(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    nm = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, tm(r), l()))
                      },
                      a = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, tm(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), nm = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              Nm(t.currentTarget, jm(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || w(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(Fm(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(Fm(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (Nm(e.target, jm(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (tm(e.target), e.target.click()))
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
              Nm(e.currentTarget, jm(e.nativeEvent)) && E(e)
            }
          }
          return t
        }), [y, s, c, g, d, E, P, _, b, w, S, C]);
        return (0, A.useEffect)((() => {
          if (!f) return;
          const e = Jp(f.current);
          if (!e || !e.head || e.getElementById(Dm)) return;
          const t = e.createElement("style");
          t.id = Dm, t.textContent = `\n@layer {\n  [${Hm}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }), [f]), (0, A.useEffect)((() => {
          let e = v.current;
          return () => {
            var t;
            d || wm(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: l || p,
          pressProps: Tm(h, x, {
            [Hm]: !0
          })
        }
      }

      function Vm(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function zm(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof em(o).HTMLInputElement && !Gm(o, r) || o instanceof em(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Vm(o)) && "Enter" !== r)
      }

      function Fm(e, t) {
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

      function qm(e, t) {
        return e instanceof HTMLInputElement ? !Gm(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Vm(e)))
        }(e)
      }
      const Um = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Gm(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Um.has(e.type)
      }
      var Km = r(50857),
        Xm = r(57817);

      function Wm(e) {
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

      function $m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Ym(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $m(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Wm(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $m(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Zm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jm = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ym(Ym({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Qm(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zm(e.variantClassNames, (e => Zm(e, (e => e.split(" ")[0]))))
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
        ev = r(64324),
        tv = r.t(ev, 2);
      const rv = (0, A.createContext)(null);

      function nv() {
        const e = (0, A.useContext)(rv);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const ov = (0, A.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: i = "neutral",
          ...a
        }, s) => {
          const l = (0, Xm.mergeProps)({
              className: Jm({
                status: i
              }),
              "data-testid": t
            }, a),
            c = r ? pr.Slot : "div";
          return (0, g.jsx)(rv.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: i,
              ...a
            },
            children: (0, g.jsx)(c, {
              ...l,
              ref: s,
              children: e
            })
          })
        })),
        iv = (0, A.forwardRef)((({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = nv(), i = (0, Xm.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: ev.Check,
            invalid: ev.X,
            neutral: ev.TriangleAlert
          }, s = t ? pr.Slot : a[o];
          return (0, g.jsx)(s, {
            ref: n,
            ...i
          })
        })),
        av = (0, A.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            errorId: a
          } = nv(), s = (0, Xm.mergeProps)({
            "data-testid": t,
            id: a || i
          }, n), l = r ? pr.Slot : "div";
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }));

      function sv(...e) {
        const t = (0, A.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }

      function lv(e) {
        const t = (0, A.useRef)(e);
        return (0, A.useEffect)((() => {
          t.current = e
        })), (0, A.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      r(43778), r(24244);
      var cv = r(76286),
        uv = r(63155),
        dv = "ScrollArea",
        [fv, hv] = (0, Hf.A)(dv),
        [pv, mv] = fv(dv),
        vv = A.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = A.useState(null), [c, u] = A.useState(null), [d, f] = A.useState(null), [h, p] = A.useState(null), [m, v] = A.useState(null), [y, b] = A.useState(0), [_, w] = A.useState(0), [E, P] = A.useState(!1), [S, C] = A.useState(!1), x = (0, Df.s)(t, (e => l(e))), T = (0, Vf.jH)(o);
          return (0, g.jsx)(pv, {
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
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: b,
            onCornerHeightChange: w,
            children: (0, g.jsx)(qf.sG.div, {
              dir: T,
              ...a,
              ref: x,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": _ + "px",
                ...e.style
              }
            })
          })
        }));
      vv.displayName = dv;
      var yv = "ScrollAreaViewport",
        gv = A.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, a = mv(yv, r), s = A.useRef(null), l = (0, Df.s)(t, s, a.onViewportChange);
          return (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, g.jsx)(qf.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, g.jsx)("div", {
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
      gv.displayName = yv;
      var bv = "ScrollAreaScrollbar",
        _v = A.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = mv(bv, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return A.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, g.jsx)(wv, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, g.jsx)(Ev, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, g.jsx)(Pv, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, g.jsx)(Sv, {
            ...n,
            ref: t
          }) : null
        }));
      _v.displayName = bv;
      var wv = A.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = mv(bv, e.__scopeScrollArea), [i, a] = A.useState(!1);
          return A.useEffect((() => {
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, g.jsx)(Oh.C, {
            present: r || i,
            children: (0, g.jsx)(Pv, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        Ev = A.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = mv(bv, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = Fv((() => l("SCROLL_END")), 100), [s, l] = (c = {
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
          }, A.useReducer(((e, t) => c[e][t] ?? e), "hidden"));
          var c;
          return A.useEffect((() => {
            if ("idle" === s) {
              const e = window.setTimeout((() => l("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [s, o.scrollHideDelay, l]), A.useEffect((() => {
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
          }), [o.viewport, i, l, a]), (0, g.jsx)(Oh.C, {
            present: r || "hidden" !== s,
            children: (0, g.jsx)(Sv, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, Mf.m)(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: (0, Mf.m)(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        Pv = A.forwardRef(((e, t) => {
          const r = mv(bv, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, a] = A.useState(!1),
            s = "horizontal" === e.orientation,
            l = Fv((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return qv(r.viewport, l), qv(r.content, l), (0, g.jsx)(Oh.C, {
            present: n || i,
            children: (0, g.jsx)(Sv, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        Sv = A.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = mv(bv, e.__scopeScrollArea), i = A.useRef(null), a = A.useRef(0), [s, l] = A.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = Mv(s.viewport, s.content), u = {
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
              const o = Dv(r),
                i = t || o / 2,
                a = o - i,
                s = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                c = r.content - r.viewport;
              return Bv([s, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === r ? (0, g.jsx)(Cv, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Hv(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, g.jsx)(xv, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Hv(o.viewport.scrollTop, s);
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
        Cv = A.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = mv(bv, e.__scopeScrollArea), [a, s] = A.useState(), l = A.useRef(null), c = (0, Df.s)(t, l, i.onScrollbarXChange);
          return A.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, g.jsx)(Iv, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Dv(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Vv(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Av(a.paddingLeft),
                  paddingEnd: Av(a.paddingRight)
                }
              })
            }
          })
        })),
        xv = A.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = mv(bv, e.__scopeScrollArea), [a, s] = A.useState(), l = A.useRef(null), c = (0, Df.s)(t, l, i.onScrollbarYChange);
          return A.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, g.jsx)(Iv, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Dv(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Vv(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Av(a.paddingTop),
                  paddingEnd: Av(a.paddingBottom)
                }
              })
            }
          })
        })),
        [Tv, Ov] = fv(bv),
        Iv = A.forwardRef(((e, t) => {
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
          } = e, h = mv(bv, r), [p, m] = A.useState(null), v = (0, Df.s)(t, (e => m(e))), y = A.useRef(null), b = A.useRef(""), _ = h.viewport, w = n.content - n.viewport, E = (0, cv.c)(u), P = (0, cv.c)(l), S = Fv(d, 10);

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
          return A.useEffect((() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && E(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [_, p, w, E]), A.useEffect(P, [n, P]), qv(p, S), qv(h.content, S), (0, g.jsx)(Tv, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, cv.c)(i),
            onThumbPointerUp: (0, cv.c)(a),
            onThumbPositionChange: P,
            onThumbPointerDown: (0, cv.c)(s),
            children: (0, g.jsx)(qf.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Mf.m)(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(e))
              })),
              onPointerMove: (0, Mf.m)(e.onPointerMove, C),
              onPointerUp: (0, Mf.m)(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = b.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              }))
            })
          })
        })),
        Nv = "ScrollAreaThumb",
        jv = A.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ov(Nv, e.__scopeScrollArea);
          return (0, g.jsx)(Oh.C, {
            present: r || o.hasThumb,
            children: (0, g.jsx)(kv, {
              ref: t,
              ...n
            })
          })
        })),
        kv = A.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = mv(Nv, r), a = Ov(Nv, r), {
            onThumbPositionChange: s
          } = a, l = (0, Df.s)(t, (e => a.onThumbChange(e))), c = A.useRef(void 0), u = Fv((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return A.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = zv(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, u, s]), (0, g.jsx)(qf.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, Mf.m)(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: (0, Mf.m)(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      jv.displayName = Nv;
      var Rv = "ScrollAreaCorner";
      A.forwardRef(((e, t) => {
        const r = mv(Rv, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, g.jsx)(Lv, {
          ...e,
          ref: t
        }) : null
      })).displayName = Rv;
      var Lv = A.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = mv(Rv, r), [i, a] = A.useState(0), [s, l] = A.useState(0), c = Boolean(i && s);
        return qv(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), qv(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), c ? (0, g.jsx)(qf.sG.div, {
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

      function Av(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Mv(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Dv(e) {
        const t = Mv(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Hv(e, t, r = "ltr") {
        const n = Dv(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - n,
          l = Af(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return Bv([0, a], [0, s])(l)
      }

      function Bv(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Vv(e, t) {
        return e > 0 && e < t
      }
      var zv = (e, t = () => {}) => {
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

      function Fv(e, t) {
        const r = (0, cv.c)(e),
          n = A.useRef(0);
        return A.useEffect((() => () => window.clearTimeout(n.current)), []), A.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function qv(e, t) {
        const r = (0, cv.c)(t);
        (0, uv.N)((() => {
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
      var Uv = vv,
        Gv = gv,
        Kv = _v,
        Xv = jv,
        Wv = r(15234),
        $v = r(80113),
        Yv = r(94926),
        Zv = r(19690),
        Qv = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Jv = [" ", "Enter"],
        ey = "Select",
        [ty, ry, ny] = (0, Uf.N)(ey),
        [oy, iy] = (0, Hf.A)(ey, [ny, xh.Bk]),
        ay = (0, xh.Bk)(),
        [sy, ly] = oy(ey),
        [cy, uy] = oy(ey),
        dy = e => {
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
          } = e, m = ay(t), [v, y] = A.useState(null), [b, _] = A.useState(null), [w, E] = A.useState(!1), P = (0, Vf.jH)(c), [S, C] = (0, Bf.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: ey
          }), [x, T] = (0, Bf.useControllableState)({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: ey
          }), O = A.useRef(null), I = !v || p || !!v.closest("form"), [N, j] = A.useState(new Set), k = Array.from(N).map((e => e.props.value)).join(";");
          return (0, g.jsx)(xh.bL, {
            ...m,
            children: (0, g.jsxs)(sy, {
              required: h,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: b,
              onValueNodeChange: _,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: E,
              contentId: (0, Ch.useId)(),
              value: x,
              onValueChange: T,
              open: S,
              onOpenChange: C,
              dir: P,
              triggerPointerDownPosRef: O,
              disabled: f,
              children: [(0, g.jsx)(ty.Provider, {
                scope: t,
                children: (0, g.jsx)(cy, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: A.useCallback((e => {
                    j((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: A.useCallback((e => {
                    j((t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    }))
                  }), []),
                  children: r
                })
              }), I ? (0, g.jsxs)(Ky, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: u,
                autoComplete: d,
                value: x,
                onChange: e => T(e.target.value),
                disabled: f,
                form: p,
                children: [void 0 === x ? (0, g.jsx)("option", {
                  value: ""
                }) : null, Array.from(N)]
              }, k) : null]
            })
          })
        };
      dy.displayName = ey;
      var fy = "SelectTrigger",
        hy = A.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = ay(r), a = ly(fy, r), s = a.disabled || n, l = (0, Df.s)(t, a.onTriggerChange), c = ry(r), u = A.useRef("touch"), [d, f, h] = Wy((e => {
            const t = c().filter((e => !e.disabled)),
              r = t.find((e => e.value === a.value)),
              n = $y(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          })), p = e => {
            s || (a.onOpenChange(!0), h()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, g.jsx)(xh.Mz, {
            asChild: !0,
            ...i,
            children: (0, g.jsx)(qf.sG.button, {
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
              "data-placeholder": Xy(a.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, Mf.m)(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== u.current && p(e)
              })),
              onPointerDown: (0, Mf.m)(o.onPointerDown, (e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              })),
              onKeyDown: (0, Mf.m)(o.onKeyDown, (e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Qv.includes(e.key) && (p(), e.preventDefault())
              }))
            })
          })
        }));
      hy.displayName = fy;
      var py = "SelectValue",
        my = A.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = ly(py, r), {
            onValueNodeHasChildrenChange: c
          } = l, u = void 0 !== i, d = (0, Df.s)(t, l.onValueNodeChange);
          return (0, uv.N)((() => {
            c(u)
          }), [c, u]), (0, g.jsx)(qf.sG.span, {
            ...s,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: Xy(l.value) ? (0, g.jsx)(g.Fragment, {
              children: a
            }) : i
          })
        }));
      my.displayName = py;
      var vy = A.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, g.jsx)(qf.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      }));
      vy.displayName = "SelectIcon";
      var yy = e => (0, g.jsx)(Th.Portal, {
        asChild: !0,
        ...e
      });
      yy.displayName = "SelectPortal";
      var gy = "SelectContent",
        by = A.forwardRef(((e, t) => {
          const r = ly(gy, e.__scopeSelect),
            [n, o] = A.useState();
          if ((0, uv.N)((() => {
              o(new DocumentFragment)
            }), []), !r.open) {
            const t = n;
            return t ? Ht.createPortal((0, g.jsx)(wy, {
              scope: e.__scopeSelect,
              children: (0, g.jsx)(ty.Slot, {
                scope: e.__scopeSelect,
                children: (0, g.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, g.jsx)(Sy, {
            ...e,
            ref: t
          })
        }));
      by.displayName = gy;
      var _y = 10,
        [wy, Ey] = oy(gy),
        Py = (0, pr.createSlot)("SelectContent.RemoveScroll"),
        Sy = A.forwardRef(((e, t) => {
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
          } = e, b = ly(gy, r), [_, w] = A.useState(null), [E, P] = A.useState(null), S = (0, Df.s)(t, (e => w(e))), [C, x] = A.useState(null), [T, O] = A.useState(null), I = ry(r), [N, j] = A.useState(!1), k = A.useRef(!1);
          A.useEffect((() => {
            if (_) return (0, Yv.Eq)(_)
          }), [_]), (0, Wv.Oh)();
          const R = A.useCallback((e => {
              const [t, ...r] = I().map((e => e.ref.current)), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && E && (E.scrollTop = 0), r === n && E && (E.scrollTop = E.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }), [I, E]),
            L = A.useCallback((() => R([C, _])), [R, C, _]);
          A.useEffect((() => {
            N && L()
          }), [N, L]);
          const {
            onOpenChange: M,
            triggerPointerDownPosRef: D
          } = b;
          A.useEffect((() => {
            if (_) {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : _.contains(r.target) || M(!1), document.removeEventListener("pointermove", t), D.current = null
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
          }), [_, M, D]), A.useEffect((() => {
            const e = () => M(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [M]);
          const [H, B] = Wy((e => {
            const t = I().filter((e => !e.disabled)),
              r = t.find((e => e.ref.current === document.activeElement)),
              n = $y(t, e, r);
            n && setTimeout((() => n.ref.current.focus()))
          })), V = A.useCallback(((e, t, r) => {
            const n = !k.current && !r;
            (void 0 !== b.value && b.value === t || n) && (x(e), n && (k.current = !0))
          }), [b.value]), z = A.useCallback((() => _?.focus()), [_]), F = A.useCallback(((e, t, r) => {
            const n = !k.current && !r;
            (void 0 !== b.value && b.value === t || n) && O(e)
          }), [b.value]), q = "popper" === n ? xy : Cy, U = q === xy ? {
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
          return (0, g.jsx)(wy, {
            scope: r,
            content: _,
            viewport: E,
            onViewportChange: P,
            itemRefCallback: V,
            selectedItem: C,
            onItemLeave: z,
            itemTextRefCallback: F,
            focusSelectedItem: L,
            selectedItemText: T,
            position: n,
            isPositioned: N,
            searchRef: H,
            children: (0, g.jsx)(Zv.RemoveScroll, {
              as: Py,
              allowPinchZoom: !0,
              children: (0, g.jsx)($v.FocusScope, {
                asChild: !0,
                trapped: b.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Mf.m)(o, (e => {
                  b.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, g.jsx)(Sh.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => b.onOpenChange(!1),
                  children: (0, g.jsx)(q, {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...U,
                    onPlaced: () => j(!0),
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, Mf.m)(y.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = I().filter((e => !e.disabled));
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
      Sy.displayName = "SelectContentImpl";
      var Cy = A.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = ly(gy, r), a = Ey(gy, r), [s, l] = A.useState(null), [c, u] = A.useState(null), d = (0, Df.s)(t, (e => u(e))), f = ry(r), h = A.useRef(!1), p = A.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: b
        } = a, _ = A.useCallback((() => {
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
                u = window.innerWidth - _y,
                d = Af(i, [_y, Math.max(_y, u - c)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - _y,
                d = Af(i, [_y, Math.max(_y, u - c)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const a = f(),
              l = window.innerHeight - 2 * _y,
              u = m.scrollHeight,
              d = window.getComputedStyle(c),
              p = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              _ = p + g + u + parseInt(d.paddingBottom, 10) + b,
              w = Math.min(5 * v.offsetHeight, _),
              E = window.getComputedStyle(m),
              P = parseInt(E.paddingTop, 10),
              S = parseInt(E.paddingBottom, 10),
              C = e.top + e.height / 2 - _y,
              x = l - C,
              T = v.offsetHeight / 2,
              O = p + g + (v.offsetTop + T),
              I = _ - O;
            if (O <= C) {
              const e = a.length > 0 && v === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = c.clientHeight - m.offsetTop - m.offsetHeight,
                r = O + Math.max(x, T + (e ? S : 0) + t + b);
              s.style.height = r + "px"
            } else {
              const e = a.length > 0 && v === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(C, p + m.offsetTop + (e ? P : 0) + T) + I;
              s.style.height = t + "px", m.scrollTop = O - C + m.offsetTop
            }
            s.style.margin = `${_y}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = l + "px", n?.(), requestAnimationFrame((() => h.current = !0))
          }
        }), [f, i.trigger, i.valueNode, s, c, m, v, y, i.dir, n]);
        (0, uv.N)((() => _()), [_]);
        const [w, E] = A.useState();
        (0, uv.N)((() => {
          c && E(window.getComputedStyle(c).zIndex)
        }), [c]);
        const P = A.useCallback((e => {
          e && !0 === p.current && (_(), b?.(), p.current = !1)
        }), [_, b]);
        return (0, g.jsx)(Ty, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: P,
          children: (0, g.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, g.jsx)(qf.sG.div, {
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
      Cy.displayName = "SelectItemAlignedPosition";
      var xy = A.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = _y,
          ...i
        } = e, a = ay(r);
        return (0, g.jsx)(xh.UC, {
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
      xy.displayName = "SelectPopperPosition";
      var [Ty, Oy] = oy(gy, {}), Iy = "SelectViewport", Ny = A.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = Ey(Iy, r), a = Oy(Iy, r), s = (0, Df.s)(t, i.onViewportChange), l = A.useRef(0);
        return (0, g.jsxs)(g.Fragment, {
          children: [(0, g.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, g.jsx)(ty.Slot, {
            scope: r,
            children: (0, g.jsx)(qf.sG.div, {
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
              onScroll: (0, Mf.m)(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * _y,
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
      Ny.displayName = Iy;
      var jy = "SelectGroup",
        [ky, Ry] = oy(jy);
      A.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Ch.useId)();
        return (0, g.jsx)(ky, {
          scope: r,
          id: o,
          children: (0, g.jsx)(qf.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      })).displayName = jy;
      var Ly = "SelectLabel";
      A.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Ry(Ly, r);
        return (0, g.jsx)(qf.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      })).displayName = Ly;
      var Ay = "SelectItem",
        [My, Dy] = oy(Ay),
        Hy = A.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = ly(Ay, r), l = Ey(Ay, r), c = s.value === n, [u, d] = A.useState(i ?? ""), [f, h] = A.useState(!1), p = (0, Df.s)(t, (e => l.itemRefCallback?.(e, n, o))), m = (0, Ch.useId)(), v = A.useRef("touch"), y = () => {
            o || (s.onValueChange(n), s.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, g.jsx)(My, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: c,
            onItemTextChange: A.useCallback((e => {
              d((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, g.jsx)(ty.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: u,
              children: (0, g.jsx)(qf.sG.div, {
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
                onFocus: (0, Mf.m)(a.onFocus, (() => h(!0))),
                onBlur: (0, Mf.m)(a.onBlur, (() => h(!1))),
                onClick: (0, Mf.m)(a.onClick, (() => {
                  "mouse" !== v.current && y()
                })),
                onPointerUp: (0, Mf.m)(a.onPointerUp, (() => {
                  "mouse" === v.current && y()
                })),
                onPointerDown: (0, Mf.m)(a.onPointerDown, (e => {
                  v.current = e.pointerType
                })),
                onPointerMove: (0, Mf.m)(a.onPointerMove, (e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: (0, Mf.m)(a.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                })),
                onKeyDown: (0, Mf.m)(a.onKeyDown, (e => {
                  "" !== l.searchRef?.current && " " === e.key || (Jv.includes(e.key) && y(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      Hy.displayName = Ay;
      var By = "SelectItemText",
        Vy = A.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, a = ly(By, r), s = Ey(By, r), l = Dy(By, r), c = uy(By, r), [u, d] = A.useState(null), f = (0, Df.s)(t, (e => d(e)), l.onItemTextChange, (e => s.itemTextRefCallback?.(e, l.value, l.disabled))), h = u?.textContent, p = A.useMemo((() => (0, g.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value)), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = c;
          return (0, uv.N)((() => (m(p), () => v(p))), [m, v, p]), (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)(qf.sG.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Ht.createPortal(i.children, a.valueNode) : null]
          })
        }));
      Vy.displayName = By;
      var zy = "SelectItemIndicator";
      A.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Dy(zy, r).isSelected ? (0, g.jsx)(qf.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      })).displayName = zy;
      var Fy = "SelectScrollUpButton";
      A.forwardRef(((e, t) => {
        const r = Ey(Fy, e.__scopeSelect),
          n = Oy(Fy, e.__scopeSelect),
          [o, i] = A.useState(!1),
          a = (0, Df.s)(t, n.onScrollButtonChange);
        return (0, uv.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, g.jsx)(Uy, {
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
      })).displayName = Fy;
      var qy = "SelectScrollDownButton";
      A.forwardRef(((e, t) => {
        const r = Ey(qy, e.__scopeSelect),
          n = Oy(qy, e.__scopeSelect),
          [o, i] = A.useState(!1),
          a = (0, Df.s)(t, n.onScrollButtonChange);
        return (0, uv.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, g.jsx)(Uy, {
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
      })).displayName = qy;
      var Uy = A.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = Ey("SelectScrollButton", r), a = A.useRef(null), s = ry(r), l = A.useCallback((() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }), []);
        return A.useEffect((() => () => l()), [l]), (0, uv.N)((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, g.jsx)(qf.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, Mf.m)(o.onPointerDown, (() => {
            null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerMove: (0, Mf.m)(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerLeave: (0, Mf.m)(o.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      A.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, g.jsx)(qf.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var Gy = "SelectArrow";
      A.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = ay(r), i = ly(Gy, r), a = Ey(Gy, r);
        return i.open && "popper" === a.position ? (0, g.jsx)(xh.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      })).displayName = Gy;
      var Ky = A.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = A.useRef(null),
          i = (0, Df.s)(n, o),
          a = (0, zf.Z)(t);
        return A.useEffect((() => {
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
        }), [a, t]), (0, g.jsx)(qf.sG.select, {
          ...r,
          style: {
            ...mr.VISUALLY_HIDDEN_STYLES,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      }));

      function Xy(e) {
        return "" === e || void 0 === e
      }

      function Wy(e) {
        const t = (0, cv.c)(e),
          r = A.useRef(""),
          n = A.useRef(0),
          o = A.useCallback((e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          i = A.useCallback((() => {
            r.current = "", window.clearTimeout(n.current)
          }), []);
        return A.useEffect((() => () => window.clearTimeout(n.current)), []), [r, o, i]
      }

      function $y(e, t, r) {
        const n = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === n.length && (i = i.filter((e => e !== r)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(n.toLowerCase())));
        return l !== r ? l : void 0
      }
      Ky.displayName = "SelectBubbleInput";
      var Yy = dy,
        Zy = hy,
        Qy = my,
        Jy = vy,
        eg = yy,
        tg = by,
        rg = Ny,
        ng = Hy,
        og = Vy,
        ig = r(84899);

      function ag(e) {
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

      function sg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function lg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sg(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ag(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sg(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function cg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ug = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lg(lg({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ug(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cg(e.variantClassNames, (e => cg(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        fg = dg({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hg = dg({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pg = dg({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        mg = dg({
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
        vg = dg({
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
        yg = dg({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const gg = (0, A.createContext)(null);

      function bg() {
        const e = (0, A.useContext)(gg);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const _g = (0, A.forwardRef)((({
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
          const v = sv((0, A.useRef)(null), m),
            y = (0, A.useId)(),
            b = (0, A.useId)(),
            _ = (0, A.useId)(),
            w = (0, A.useId)(),
            E = (0, A.useId)(),
            P = (0, A.useId)(),
            [S = !1, C] = function({
              prop: e,
              defaultProp: t,
              onChange: r = () => {}
            }) {
              const [n, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const r = (0, A.useState)(e),
                  [n] = r,
                  o = (0, A.useRef)(n),
                  i = lv(t);
                return (0, A.useEffect)((() => {
                  o.current !== n && (i(n), o.current = n)
                }), [n, o, i]), r
              }({
                defaultProp: t,
                onChange: r
              }), i = void 0 !== e, a = i ? e : n, s = lv(r), l = (0, A.useCallback)((t => {
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
            x = (0, Km.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, g.jsx)(gg.Provider, {
            value: {
              labelId: y,
              errorId: b,
              descriptionId: _,
              triggerId: P,
              hintId: w,
              popoverId: E,
              defaultValue: i,
              onValueChange: a,
              value: l,
              isOpen: S,
              setIsOpen: C,
              defaultOpen: c,
              onOpenChange: u,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: h,
              size: f
            },
            children: (0, g.jsx)(Yy, {
              required: r,
              disabled: n,
              open: S,
              onOpenChange: () => C(!o && !S),
              value: l,
              defaultValue: i,
              onValueChange: a,
              name: s,
              children: (0, g.jsx)("div", {
                ref: v,
                ...x,
                children: e
              })
            })
          })
        })),
        wg = (0, A.forwardRef)((({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: i
          } = bg(), a = (0, Km.mergeProps)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: fg({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, g.jsx)(tg, {
            ...a,
            ref: o,
            children: (0, g.jsx)(rg, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        })),
        Eg = (0, A.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Km.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, g.jsxs)(Uv, {
            ...o,
            ref: n,
            children: [(0, g.jsx)(Gv, {
              className: "foundry_uaq1gwu",
              style: {
                overflowY: void 0
              },
              children: e
            }), (0, g.jsx)(Kv, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, g.jsx)(Xv, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        })),
        Pg = (0, A.forwardRef)((({
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
          } = bg(), {
            isPressed: b,
            pressProps: _
          } = Bm({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, Km.mergeProps)({
            id: f,
            className: vg({
              size: y,
              isReadOnly: !!s,
              isInvalid: "invalid" === l,
              isPressed: !!b,
              isDisabled: !!c
            }),
            "aria-labelledby": (0, Km.joinStrings)(r, u, d),
            "aria-describedby": (0, Km.joinStrings)(n, p),
            "aria-activedescendant": v,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!b
          }, (0, Km.omit)(_, "onKeyDown"), i), E = o ? pr.Slot : Zy;
          return (0, g.jsx)(E, {
            ...w,
            ref: a,
            children: e
          })
        })),
        Sg = (0, A.forwardRef)((({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: i
          } = bg(), a = (0, Km.mergeProps)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), s = t ? pr.Slot : "span";
          return (0, g.jsx)(s, {
            ...a,
            ref: o,
            children: (0, g.jsx)(Qy, {
              placeholder: e,
              "aria-label": i
            })
          })
        })),
        Cg = (0, A.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: a
          } = bg(), s = a ? ig.ChevronUp : ig.ChevronDown, l = (0, Km.mergeProps)({
            asChild: !0,
            className: yg({
              isDisabled: i || o
            }),
            "data-testid": t
          }, r);
          return (0, g.jsx)(Jy, {
            ...l,
            ref: n,
            children: e || (0, g.jsx)(s, {
              size: "LG",
              label: ""
            })
          })
        })),
        xg = (0, A.forwardRef)((({
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
          } = bg(), d = s && !o, f = (0, Km.mergeProps)({
            id: i.id || c,
            htmlFor: u,
            "data-testid": e,
            className: mg({
              showAsterisk: d,
              isDisabled: l
            })
          }, i), h = t ? pr.Slot : "label";
          return (0, g.jsx)(Yp, {
            enabled: n,
            children: (0, g.jsx)(h, {
              ...f,
              ref: a,
              children: r
            })
          })
        })),
        Tg = (0, A.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = bg(), s = (0, Km.mergeProps)({
            className: hg({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? pr.Slot : "div";
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Og = (0, A.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: a
          } = bg(), s = (0, Km.mergeProps)({
            className: pg({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? pr.Slot : "div";
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Ig = (0, A.forwardRef)((({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, i) => {
          const a = sv((0, A.useRef)(null), i),
            s = (0, Km.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, g.jsx)(ng, {
            ref: a,
            ...s,
            children: e
          })
        })),
        Ng = (0, A.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Km.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, g.jsx)(og, {
            ref: n,
            asChild: !0,
            children: (0, g.jsx)("span", {
              ...o,
              children: e
            })
          })
        })),
        jg = (0, A.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Km.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, g.jsx)(Jy, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        })),
        kg = eg,
        Rg = (0, A.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = bg(), s = (0, Km.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? pr.Slot : ov;
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Lg = iv,
        Ag = av,
        Mg = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? mr.VisuallyHidden : A.Fragment;
          return (0, g.jsx)(r, {
            ...t
          })
        };

      function Dg(e, t, r) {
        let n = (0, A.useRef)(t),
          o = Ee((() => {
            r && r(n.current)
          }));
        (0, A.useEffect)((() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", o), () => {
            null == r || r.removeEventListener("reset", o)
          }
        }), [e, o])
      }

      function Hg(e, t, r) {
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
        } = Ft({
          isDisabled: n
        }), {
          pressProps: p,
          isPressed: m
        } = Ft({
          onPress() {
            var e;
            t.toggle(), null === (e = r.current) || void 0 === e || e.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: v
        } = ur(e, r), y = Be(f, v), g = Ue(e, {
          labelable: !0
        });
        return Dg(r, t.isSelected, t.setSelected), {
          labelProps: Be(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: Be(g, {
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
      var Bg = r(93756);

      function Vg(e, t, r) {
        let [n, o] = (0, A.useState)(e || t), i = (0, A.useRef)(void 0 !== e), a = void 0 !== e;
        (0, A.useEffect)((() => {
          i.current, i.current = a
        }), [a]);
        let s = a ? e : n,
          l = (0, A.useCallback)(((e, ...t) => {
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

      function zg(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = Vg(e.isSelected, e.defaultSelected || !1, e.onChange);
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

      function qg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Ug(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qg(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Fg(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qg(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Gg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      r(80999), r(33037);
      var Kg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ug(Ug({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Kg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gg(e.variantClassNames, (e => Gg(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Wg = Xg({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $g = Xg({
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
        Yg = Xg({
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
        Zg = Xg({
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
        Qg = Xg({
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
      const Jg = (0, A.createContext)(null);

      function eb() {
        const e = (0, A.useContext)(Jg);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const tb = (0, A.forwardRef)((({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: i = !1,
          isReadOnly: a = !1,
          ...s
        }, l) => {
          const c = (0, Bg.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, s),
            u = n ? pr.Slot : "div",
            d = (0, A.useId)(),
            f = (0, A.useId)(),
            h = (0, A.useId)();
          return (0, g.jsx)(Jg.Provider, {
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
            children: (0, g.jsx)(u, {
              ...c,
              ref: l,
              children: o
            })
          })
        })),
        rb = (0, A.forwardRef)((({
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
          const h = (0, A.useRef)(null),
            p = function(...e) {
              const t = (0, A.useRef)(null);
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
              labelId: b,
              descriptionId: _,
              isDisabled: w,
              isReadOnly: E
            } = eb(),
            P = zg({
              isDisabled: w,
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
              } = Hg(e, t, r);
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
              "aria-labelledby": (0, Bg.joinStrings)(n, b),
              "aria-describedby": (0, Bg.joinStrings)(o, _),
              name: c,
              value: u,
              isDisabled: w,
              isReadOnly: E
            }, P, h),
            C = (0, Bg.mergeProps)({
              className: Qg({
                appearance: v
              }),
              "data-state": P.isSelected ? "selected" : "unselected",
              "data-disabled": w || E,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || E || P.toggle()
              }
            }, d);
          return (0, g.jsxs)("div", {
            ...C,
            children: [(0, g.jsx)(Mg, {
              children: (0, g.jsx)("input", {
                ...S,
                ref: p
              })
            }), (0, g.jsx)("div", {
              className: Zg({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, g.jsx)("div", {
                className: $g({
                  size: m,
                  isSelected: P.isSelected
                })
              })
            })]
          })
        })),
        nb = (0, A.forwardRef)((({
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
          } = eb(), u = (0, Bg.mergeProps)({
            id: o.id || s,
            htmlFor: l,
            "data-testid": e,
            className: Yg({
              isDisabled: a,
              size: c
            })
          }, o), d = t ? pr.Slot : "label";
          return (0, g.jsx)(Mg, {
            enabled: n,
            children: (0, g.jsx)(d, {
              ...u,
              ref: i,
              children: r
            })
          })
        })),
        ob = (0, A.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = eb(), s = n.id || a, l = (0, Bg.mergeProps)({
            className: Wg({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? pr.Slot : "div";
          return (0, g.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        })),
        ib = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? mr.VisuallyHidden : A.Fragment;
          return (0, g.jsx)(r, {
            ...t
          })
        };
      var ab = r(20633);
      const sb = {
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
        lb = {
          ...sb,
          customError: !0,
          valid: !1
        },
        cb = {
          isInvalid: !1,
          validationDetails: sb,
          validationErrors: []
        },
        ub = (0, A.createContext)({}),
        db = "__formValidationState" + Date.now();

      function fb(e) {
        if (e[db]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[db];
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
              validationDetails: lb
            } : null,
            c = (0, A.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return hb(r)
                }
                return []
              }(a, o);
              return pb(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let u = (0, A.useContext)(ub),
            d = (0, A.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => hb(u[e]))) : hb(u[n]) : []), [u, n]),
            [f, h] = (0, A.useState)(u),
            [p, m] = (0, A.useState)(!1);
          u !== f && (h(u), m(!1));
          let v = (0, A.useMemo)((() => pb(p ? [] : d)), [p, d]),
            y = (0, A.useRef)(cb),
            [g, b] = (0, A.useState)(cb),
            _ = (0, A.useRef)(cb),
            [w, E] = (0, A.useState)(!1);
          return (0, A.useEffect)((() => {
            if (!w) return;
            E(!1);
            let e = c || i || y.current;
            mb(e, _.current) || (_.current = e, b(e))
          })), {
            realtimeValidation: l || v || c || i || cb,
            displayValidation: "native" === s ? l || v || g : l || v || c || i || g,
            updateValidation(e) {
              "aria" !== s || mb(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = cb;
              mb(e, _.current) || (_.current = e, b(e)), "native" === s && E(!1), m(!0)
            },
            commitValidation() {
              "native" === s && E(!0), m(!0)
            }
          }
        }(e)
      }

      function hb(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function pb(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: lb
        } : null
      }

      function mb(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }

      function vb(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        we((() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: yb(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = Ee((() => {
            t.resetValidation()
          })),
          a = Ee((e => {
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
            }(i) === r.current && (o ? o() : null === (a = r.current) || void 0 === a || a.focus(), $t = "keyboard", er("keyboard", null)), e.preventDefault()
          })),
          s = Ee((() => {
            t.commitValidation()
          }));
        (0, A.useEffect)((() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", a), e.addEventListener("change", s), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", s), null == t || t.removeEventListener("reset", i)
          }
        }), [r, a, s, i, n])
      }

      function yb(e) {
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
      const gb = ({
          color: e = "currentColor"
        }) => (0, g.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, g.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        bb = ({
          color: e = "currentColor"
        }) => (0, g.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, g.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        _b = ({
          color: e = "currentColor"
        }) => (0, g.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, g.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        wb = ({
          color: e = "currentColor"
        }) => (0, g.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, g.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Eb = ({
          color: e = "currentColor"
        }) => (0, g.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, g.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Pb = ({
          color: e = "currentColor"
        }) => (0, g.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, g.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Sb(e) {
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

      function Cb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function xb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cb(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Sb(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cb(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Tb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ob = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ib = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xb(xb({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ob(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tb(e.variantClassNames, (e => Tb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Nb = Ib({
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
        jb = Ib({
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
        kb = Ib({
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
        Rb = Ib({
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
      const Lb = (0, A.createContext)(null);

      function Ab() {
        const e = (0, A.useContext)(Lb);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Mb = (0, A.forwardRef)((({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...i
        }, a) => {
          const s = (0, ab.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, ab.omit)(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? pr.Slot : "div",
            c = (0, A.useId)(),
            u = (0, A.useId)(),
            d = (0, A.useId)();
          return (0, g.jsx)(Lb.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: u,
              inputId: d,
              ...i
            },
            children: (0, g.jsx)(l, {
              ...s,
              ref: a,
              children: o
            })
          })
        })),
        Db = (0, A.forwardRef)((({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: i,
          onClick: s,
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
            labelId: b,
            inputId: _,
            ...w
          } = Ab(), E = (0, A.useRef)(null), P = d.id || _, {
            isPressed: S,
            pressProps: C
          } = Bm({
            ref: E
          }), {
            setSelected: x,
            toggle: T,
            ...O
          } = zg({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: I,
            isSelected: N,
            isDisabled: j,
            isReadOnly: k
          } = function(e, t, r) {
            let n = fb({
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
              } = Hg({
                ...e,
                isInvalid: o
              }, t, r);
            vb(e, n, r);
            let {
              isIndeterminate: h,
              isRequired: p,
              validationBehavior: m = "aria"
            } = e;
            (0, A.useEffect)((() => {
              r.current && (r.current.indeterminate = !!h)
            }));
            let {
              pressProps: v
            } = Ft({
              isDisabled: d || f,
              onPress() {
                let {
                  [db]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: Be(s, v),
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
            ...w
          }, {
            ...O,
            toggle: T,
            setSelected: w.isReadOnly ? () => !1 : x
          }, E), R = (0, ab.mergeProps)({
            className: jb({
              size: h
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || j || k || T()
            }
          }, C, d), L = (0, ab.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, ab.joinStrings)(u, b),
            "aria-describedby": (0, ab.joinStrings)(l, y),
            "aria-errormessage": (0, ab.joinStrings)(c, w.isInvalid ? y : void 0),
            "aria-required": v,
            required: v
          }, I), M = m ? a[`Dash${h}`] : a[`Check${h}`];
          return (0, g.jsxs)("div", {
            ...R,
            children: [(0, g.jsx)(ib, {
              children: (0, g.jsx)("input", {
                ...L,
                ref: f
              })
            }), (0, g.jsx)("div", {
              className: Nb({
                size: h,
                appearance: p
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : N ? "checked" : "unchecked",
              "data-disabled": j || k,
              "data-testid": e,
              "data-pressed": S,
              children: (0, g.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (N || m) && (0, g.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        })),
        Hb = (0, A.forwardRef)((({
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
          } = Ab(), d = i.id || l, f = u && !o, h = (0, ab.mergeProps)({
            className: Rb({
              size: s,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: i.htmlFor || c
          }, i), p = t ? pr.Slot : "label";
          return (0, g.jsx)(ib, {
            enabled: n,
            children: (0, g.jsx)(p, {
              ...h,
              ref: a,
              children: e
            })
          })
        })),
        Bb = (0, A.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = Ab(), s = n.id || a, l = (0, ab.mergeProps)({
            className: kb({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? pr.Slot : "div";
          return (0, g.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        })),
        Vb = (0, A.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = Ab(), a = n.id || i, s = (0, ab.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: a
          }, n), l = t ? pr.Slot : "div";
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }));
      r(90394), r(8956);
      var zb = r(60413);
      const Fb = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? mr.VisuallyHidden : A.Fragment;
        return (0, g.jsx)(r, {
          ...t
        })
      };

      function qb(e) {
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

      function Ub(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Gb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ub(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = qb(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ub(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Kb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gb(Gb({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Xb(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kb(e.variantClassNames, (e => Kb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        $b = Wb({
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
        Yb = Wb({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zb = Wb({
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
        Qb = Wb({
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
      const Jb = (0, A.createContext)(null);

      function e_() {
        const e = (0, A.useContext)(Jb);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const t_ = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: a = "neutral",
          ...s
        }, l) => {
          const c = (0, zb.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, s),
            u = e ? pr.Slot : "div",
            d = (0, A.useId)(),
            f = (0, A.useId)(),
            h = (0, A.useId)(),
            p = (0, A.useId)();
          return (0, g.jsx)(Jb.Provider, {
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
            children: (0, g.jsx)(u, {
              ref: l,
              ...c,
              children: t
            })
          })
        })),
        r_ = (0, A.forwardRef)((({
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
          } = e_(), d = (0, zb.mergeProps)({
            className: Zb({
              isDisabled: c,
              showAsterisk: u && !o
            }),
            "data-testid": r,
            id: s,
            htmlFor: l
          }, i), f = t ? pr.Slot : "label";
          return (0, g.jsx)(Fb, {
            enabled: n,
            children: (0, g.jsx)(f, {
              ...d,
              ref: a,
              children: e
            })
          })
        })),
        n_ = (0, A.forwardRef)((({
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
            status: b
          } = e_(), _ = function(...e) {
            const t = (0, A.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }((0, A.useRef)(null), u), {
            isPressed: w,
            pressProps: E
          } = Bm({}), P = (0, zb.mergeProps)({
            className: Qb({
              isInvalid: "invalid" === b,
              isDisabled: m,
              isReadOnly: y,
              isPressed: w,
              isSuccess: "success" === b
            }),
            name: i,
            id: c.id || h,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: a,
            "aria-labelledby": (0, zb.joinStrings)(c.id, f, p, s),
            "aria-describedby": (0, zb.joinStrings)(d, l),
            "data-testid": r,
            ..."invalid" === b && {
              "aria-invalid": !0,
              "aria-errormessage": d
            },
            ..."success" === b && {
              "data-success": !0
            },
            ...m && {
              "aria-disabled": !0
            },
            ...v && {
              "aria-required": !0
            }
          }, E, c), S = e ? pr.Slot : "textarea";
          return (0, g.jsx)(S, {
            ref: _,
            ...P,
            children: t
          })
        })),
        o_ = (0, A.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = e_(), s = (0, zb.mergeProps)({
            className: $b({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? pr.Slot : "div";
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        i_ = (0, A.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: a
          } = e_(), s = (0, zb.mergeProps)({
            className: Yb({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? pr.Slot : "div";
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        a_ = (0, A.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = e_(), s = (0, zb.mergeProps)({
            className: "foundry_vq8c3jm",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? pr.Slot : ov;
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        s_ = iv,
        l_ = av,
        c_ = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? mr.VisuallyHidden : A.Fragment;
          return (0, g.jsx)(r, {
            ...t
          })
        };

      function u_(...e) {
        const t = (0, A.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      r(21344), r(250);
      var d_ = r(96723);
      let f_ = Math.round(1e10 * Math.random()),
        h_ = 0;
      const p_ = new WeakMap;

      function m_(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = Ze(e);
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
        }(e, t) && (!e.parentElement || m_(e.parentElement, e))
      }

      function v_(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function y_(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? $e : We,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = Ye(o),
          a = function(e, t, r, n) {
            return e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !n(e) || !m_(e) || r && !v_(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class g_ {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new b_({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && v_(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach((e => r && r.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new g_;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new b_({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class b_ {
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

      function __(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = Ae(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function w_(e) {
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
          t = Ae(t);
          let a = Ae(),
            s = {};
          return r && (n = n ? `${a} ${n}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: __({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = De([Boolean(t), Boolean(r), n, o]), l = De([Boolean(t), Boolean(r), n, o]);
        return a = Be(a, {
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
      new g_;
      const E_ = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        P_ = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function S_(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return E_.has(t.script)
        }
        let t = e.split("-")[0];
        return P_.has(t)
      }
      const C_ = Symbol.for("react-aria.i18n.locale");

      function x_() {
        let e = "undefined" != typeof window && window[C_] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: S_(e) ? "rtl" : "ltr"
        }
      }
      let T_ = x_(),
        O_ = new Set;

      function I_() {
        T_ = x_();
        for (let e of O_) e(T_)
      }
      const N_ = A.createContext(null);

      function j_() {
        let e = function() {
          let e = je(),
            [t, r] = (0, A.useState)(T_);
          return (0, A.useEffect)((() => (0 === O_.size && window.addEventListener("languagechange", I_), O_.add(r), () => {
            O_.delete(r), 0 === O_.size && window.removeEventListener("languagechange", I_)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, A.useContext)(N_) || e
      }

      function k_(e, t) {
        let {
          name: r,
          isReadOnly: n,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: l
        } = j_(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: d
        } = t.displayValidation, {
          labelProps: f,
          fieldProps: h,
          descriptionProps: p,
          errorMessageProps: m
        } = w_({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), v = Ue(e, {
          labelable: !0
        }), {
          focusWithinProps: y
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, i = (0, A.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: s
          } = It(), l = (0, A.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, s(), r && r(e), o && o(!1))
          }), [r, o, i, s]), c = rt(l), u = (0, A.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = Ye(e.target),
              r = jt(t);
            if (!i.current.isFocusWithin && r === kt(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let r = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !Nt(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  tt(n, r);
                  let o = et(n);
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
        }), g = Ae(r);
        return p_.set(t, {
          name: g,
          descriptionId: p.id,
          errorMessageId: m.id,
          validationBehavior: s
        }), {
          radioGroupProps: Be(v, {
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
              let n, o = y_(e.currentTarget, {
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

      function R_(e) {
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

      function L_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function A_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? L_(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = R_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L_(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function M_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var D_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        H_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = A_(A_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) D_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return M_(e.variantClassNames, (e => M_(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        B_ = H_({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        V_ = H_({
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
      const z_ = (0, A.createContext)(null);

      function F_() {
        const e = (0, A.useContext)(z_);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const q_ = (0, A.forwardRef)((({
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
          const f = u_((0, A.useRef)(null), d),
            h = (0, A.useId)(),
            p = (0, A.useId)(),
            m = (0, A.useId)(),
            v = function(e) {
              let t = (0, A.useMemo)((() => e.name || `radio-group-${f_}-${++h_}`), [e.name]);
              var r;
              let [n, o] = Vg(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i, a] = (0, A.useState)(null), s = fb({
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
            } = k_({
              ...u,
              orientation: r,
              "aria-labelledby": (0, d_.joinStrings)(h, a),
              "aria-describedby": (0, d_.joinStrings)(p, m, s),
              "aria-errormessage": (0, d_.joinStrings)(m, l)
            }, v),
            b = (0, d_.mergeProps)({
              className: "foundry_njguqn0"
            }, y, (0, d_.omit)(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            _ = i ? pr.Slot : "div";
          return (0, g.jsx)(z_.Provider, {
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
            children: (0, g.jsx)(_, {
              ref: f,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        })),
        U_ = (0, A.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: i,
            orientation: a
          } = F_(), s = (0, d_.mergeProps)({
            "data-testid": e,
            className: V_({
              size: i,
              orientation: a
            })
          }, n), l = t ? pr.Slot : "div";
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: r
          })
        })),
        G_ = (0, A.forwardRef)((({
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
          } = F_(), c = s && !o, u = (0, d_.mergeProps)({
            id: i.id || l,
            "data-testid": e,
            className: B_({
              showAsterisk: c
            })
          }, i), d = t ? pr.Slot : "div";
          return (0, g.jsx)(c_, {
            enabled: n,
            children: (0, g.jsx)(d, {
              ...u,
              ref: a,
              children: r
            })
          })
        })),
        K_ = (0, A.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = F_(), a = (0, d_.mergeProps)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), s = t ? pr.Slot : "div";
          return (0, g.jsx)(s, {
            ...a,
            ref: o,
            children: r
          })
        })),
        X_ = (0, A.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: i,
            status: a
          } = F_(), s = (0, d_.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: a
          }, n), l = r ? pr.Slot : ov;
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        W_ = iv,
        $_ = av;
      var Y_ = H_({
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
        Z_ = H_({
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
        Q_ = H_({
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
        J_ = H_({
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
      const ew = ({
          color: e = "currentColor"
        }) => (0, g.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, g.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        tw = ({
          color: e = "currentColor"
        }) => (0, g.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, g.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        rw = ({
          color: e = "currentColor"
        }) => (0, g.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, g.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        nw = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, d_.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? pr.Slot : "label";
          return (0, g.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        ow = (0, A.forwardRef)((({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, A.useRef)(null),
            i = u_(o, n),
            a = (0, A.useId)(),
            {
              state: s,
              appearance: l,
              size: u,
              isReadOnly: d,
              isRequired: f
            } = F_(),
            {
              isPressed: h,
              pressProps: p
            } = Bm({}),
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
                } = Ft({
                  isDisabled: s
                }),
                {
                  pressProps: d,
                  isPressed: f
                } = Ft({
                  isDisabled: s,
                  onPress() {
                    var e;
                    t.setSelectedValue(n), null === (e = r.current) || void 0 === e || e.focus()
                  }
                }),
                {
                  focusableProps: h
                } = ur(Be(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                p = Be(c, h),
                m = Ue(e, {
                  labelable: !0
                }),
                v = -1;
              null != t.selectedValue ? t.selectedValue === n && (v = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (v = 0), s && (v = void 0);
              let {
                name: y,
                descriptionId: g,
                errorMessageId: b,
                validationBehavior: _
              } = p_.get(t);
              return Dg(r, t.selectedValue, t.setSelectedValue), vb({
                validationBehavior: _
              }, t, r), {
                labelProps: Be(d, {
                  onClick: e => e.preventDefault()
                }),
                inputProps: Be(m, {
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
            b = (0, d_.mergeProps)(m, {
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
            _ = c[`Dot${u}`];
          return (0, g.jsxs)("div", {
            className: J_({
              size: u
            }),
            children: [(0, g.jsx)(c_, {
              children: (0, g.jsx)("input", {
                type: "radio",
                ...b,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, g.jsx)("div", {
              className: Q_({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": h,
              ...p,
              children: (0, g.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, g.jsx)(_, {})
              })
            })]
          })
        })),
        iw = (0, A.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            size: a,
            state: s
          } = F_(), l = (0, A.useId)(), c = (0, d_.mergeProps)({
            id: l,
            "data-testid": e,
            className: Z_({
              size: a,
              isDisabled: s?.isDisabled
            })
          }, o), u = t ? pr.Slot : "div";
          return (0, g.jsx)(c_, {
            enabled: n,
            children: (0, g.jsx)(u, {
              ...c,
              ref: i,
              children: r
            })
          })
        })),
        aw = (0, A.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = F_(), a = (0, d_.mergeProps)({
            "data-testid": e,
            className: Y_({
              isDisabled: i
            })
          }, n), s = t ? pr.Slot : "span";
          return (0, g.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        }));

      function sw(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function lw(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return sw(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? sw(e, t) : void 0
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

      function cw(e, t, r) {
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

      function uw(e) {
        return uw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, uw(e)
      }

      function dw() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (dw = function() {
          return !!e
        })()
      }

      function fw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function hw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fw(Object(r), !0).forEach((function(t) {
            cw(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fw(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function pw(e, t) {
        return pw = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, pw(e, t)
      }

      function mw(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = n,
          s = "",
          l = lw(e);
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

      function vw(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          c = lw(n);
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

      function yw(e, t) {
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

      function gw(e) {
        return e.length > 0 ? cw({}, e, /./) : {}
      }

      function bw(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(n, o), c = i.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(a, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && s && (u += c[d])
        }
        return u
      }

      function _w(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? gw(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return vw(mw(e, {
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
      var ww = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Ew(e) {
        return ww.includes(e) ? "\\".concat(e) : e
      }

      function Pw(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Sw(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Cw(e, t, r) {
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

      function xw(e) {
        return xw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, xw(e)
      }

      function Tw() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (Tw = function() {
          return !!e
        })()
      }

      function Ow(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Iw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ow(Object(r), !0).forEach((function(t) {
            Cw(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ow(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Nw(e, t) {
        return Nw = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Nw(e, t)
      }

      function jw(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return jw = function(e) {
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
              if (Tw()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && Nw(o, r.prototype), o
            }(e, arguments, xw(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Nw(r, e)
        }, jw(e)
      }
      var kw, Rw = function(e) {
          function t(e) {
            var r;
            return Pw(this, t), (r = function(e, t, r) {
              return t = xw(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, Tw() ? Reflect.construct(t, r || [], xw(e).constructor) : t.apply(e, r))
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
            }), t && Nw(e, t)
          }(t, e), Sw(t)
        }(jw(Error)),
        Lw = ["options"],
        Aw = ["text", "email", "tel", "search", "url"],
        Mw = Sw((function e(t) {
          var r = t.init,
            n = t.tracking;
          Pw(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Aw.includes(e.type)) {
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
              Object.defineProperty(e, "value", Iw(Iw({}, v), {}, {
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
                    if (p.cachedId === p.id) throw new Rw("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new Rw("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), a > m.selectionStart ? l = "insert" : a <= m.selectionStart && a < m.selectionEnd ? l = "deleteBackward" : a === m.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new Rw("Input type detection error.");
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
                      }(g, Lw);
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
        }));
      kw = Mw, Object.defineProperty(kw.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Dw, Hw = ["track", "modify"];

      function Bw(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? gw(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Vw = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = uw(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, dw() ? Reflect.construct(t, r || [], uw(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = Bw(r),
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
                l = Bw(r),
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
                }(l, Hw),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = hw(hw({}, "insert" === t ? {
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
              if (!1 === y) throw new Rw("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? gw(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = bw(n, hw({
                  end: a
                }, o)),
                _ = bw(n, hw({
                  start: s
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                E = f.replace(w, "");
              if (b && (b = mw(b, {
                  replacementChars: E,
                  replacement: h,
                  separate: m
                }), E = E.slice(b.length)), i && (i = mw(i, {
                  replacementChars: E,
                  replacement: h,
                  separate: !1
                }), E = E.slice(i.length)), "insert" === t && "" === i) throw new Rw("The character does not match the key value of the `replacement` object.");
              if (m) {
                var P = f.slice(a, s).replace(w, ""),
                  S = P.length - i.length;
                S < 0 ? _ = _.slice(-S) : S > 0 && (_ = P.slice(-S) + _)
              }
              _ && (_ = mw(_, {
                replacementChars: E,
                replacement: h,
                separate: m
              }));
              var C = vw(b + i + _, {
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
                    c = e.separate,
                    u = yw(i, {
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
            return _w(e, Bw(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? gw(n) : n;
              return yw(_w(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, Bw(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? gw(n) : n,
                i = bw(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return mw(i, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, Bw(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? gw(n) : n, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(a ? "(?!".concat(Ew(c), ")") : "", "(").concat(o[c].source, ")") : Ew(c), l === r.length - 1 && (i && (s += ")?".repeat(r.length)), s += "$")
              }
              return s
            }(e, Bw(r))
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
            }), t && pw(e, t)
          }(e, Mw),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();
      Dw = Vw, Object.defineProperty(Dw.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      }), r(60893), r(42131);
      var zw = r(28770);
      const Fw = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? mr.VisuallyHidden : A.Fragment;
        return (0, g.jsx)(r, {
          ...t
        })
      };

      function qw(e) {
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

      function Uw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Gw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uw(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = qw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uw(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Kw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ww = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gw(Gw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Xw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kw(e.variantClassNames, (e => Kw(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        $w = Ww({
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
        Yw = Ww({
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
        Zw = Ww({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Qw = Ww({
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
        Jw = Ww({
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
        eE = Ww({
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
        tE = r(22400),
        rE = r.t(tE, 2);
      const nE = (0, A.createContext)(null);

      function oE() {
        const e = (0, A.useContext)(nE);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const iE = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: a = "neutral",
          ...s
        }, l) => {
          const [c, u] = (0, A.useState)("text"), d = (0, A.useId)(), f = (0, A.useId)(), h = (0, A.useId)(), {
            isPressed: p,
            pressProps: m
          } = Bm({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !0
          }), v = {
            ...m,
            onKeyDown: () => {}
          }, y = (0, zw.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, s), b = e ? pr.Slot : "div";
          return (0, g.jsx)(nE.Provider, {
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
            children: (0, g.jsx)(b, {
              ref: l,
              ...y,
              children: t
            })
          })
        })),
        aE = (0, A.forwardRef)((({
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
          } = oE(), d = l && !o, f = (0, zw.mergeProps)({
            id: i.id || u,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: eE({
              showAsterisk: d,
              isDisabled: s
            })
          }, i), h = t ? pr.Slot : "label";
          return (0, g.jsx)(Fw, {
            enabled: n,
            children: (0, g.jsx)(h, {
              ref: a,
              ...f,
              children: r
            })
          })
        })),
        sE = (0, A.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = oE(), a = (0, zw.mergeProps)({
            "data-testid": e,
            className: Zw({
              isDisabled: i
            })
          }, n), s = t ? pr.Slot : "span";
          return (0, g.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        })),
        lE = (0, A.forwardRef)((({
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
          } = oE(), u = (0, zw.mergeProps)({
            "data-testid": e,
            "data-pressed": s,
            className: (0, He.clsx)($w({
              isDisabled: i,
              isReadOnly: a,
              isInvalid: "invalid" === c,
              isPressed: s,
              isSuccess: "success" === c
            }), "foundry_8oytzo1")
          }, l, n), d = t ? pr.Slot : "div";
          return (0, g.jsx)(d, {
            ref: o,
            ...u,
            children: r
          })
        })),
        cE = (0, A.forwardRef)((({
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
            descriptionId: b,
            setType: _,
            type: w
          } = oE();
          (0, A.useEffect)((() => _(c)), []);
          const E = "invalid" === m,
            P = (0, zw.mergeProps)({
              disabled: f,
              readOnly: h,
              required: p,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, zw.joinStrings)(v, s),
              "aria-describedby": (0, zw.joinStrings)(b, l),
              "data-testid": e,
              className: (0, He.clsx)(Jw({
                isDisabled: f,
                isReadOnly: h
              }), "foundry_8oytzo2"),
              ...E && {
                "aria-invalid": !0,
                "aria-errormessage": b
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
                s = (0, A.useRef)(null),
                l = (0, A.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: i,
                  modify: a
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = i, l.current.modify = a, (0, A.useMemo)((function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(s, new Vw(l.current))
              }), [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: i
            }),
            C = function(...e) {
              const t = (0, A.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach((e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                }))
              }), t.current
            }(r && n ? S : null, d),
            x = t ? pr.Slot : "input";
          return (0, g.jsx)(x, {
            ref: C,
            ...P
          })
        })),
        uE = (0, A.forwardRef)((({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = oE(), s = (0, zw.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, He.clsx)(Qw({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), l = t ? pr.Slot : rE[e];
          return (0, g.jsx)(l, {
            ref: i,
            ...s
          })
        })),
        dE = (0, A.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = oE(), n = (0, zw.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzo10"
          }, e);
          return (0, g.jsx)(hf, {
            ref: t,
            ...n
          })
        })),
        fE = (0, A.forwardRef)((({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: i
          } = oE(), a = "password" === o, s = a ? e : t, l = (0, zw.mergeProps)({
            label: s,
            icon: a ? "Eye" : "EyeOff",
            onPress: () => {
              i(a ? "text" : "password")
            }
          }, r);
          return (0, g.jsxs)(dp, {
            children: [(0, g.jsx)(fp, {
              children: (0, g.jsx)(dE, {
                ref: n,
                ...l
              })
            }), (0, g.jsxs)(hp, {
              side: "bottom",
              align: "end",
              children: [s, (0, g.jsx)(pp, {})]
            })]
          })
        })),
        hE = (0, A.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = oE(), s = (0, zw.mergeProps)({
            className: Yw({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? pr.Slot : "div";
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        pE = (0, A.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = oE(), s = (0, zw.mergeProps)({
            className: "foundry_8oytzo16",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? pr.Slot : ov;
          return (0, g.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        mE = iv,
        vE = av;
      var yE = r(36896);

      function gE(e, t) {
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
        } = ur(e, t), {
          pressProps: d,
          isPressed: f
        } = Ft({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), h = Ue(l, {
          labelable: !0
        }), p = Be(u, d), m = Lt();
        return {
          isPressed: f,
          linkProps: Be(h, Mt(e), {
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
      var bE = r(54848);

      function _E(e) {
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

      function wE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function EE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wE(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = _E(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wE(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function PE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var SE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        CE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = EE(EE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) SE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return PE(e.variantClassNames, (e => PE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        xE = CE({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        TE = CE({
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
        OE = CE({
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
      const IE = (0, A.createContext)(null);

      function NE() {
        const e = (0, A.useContext)(IE);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const jE = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const a = e ? pr.Slot : "div",
            s = (0, yE.mergeProps)({
              className: OE({
                status: r,
                background: n
              })
            }, o);
          return (0, g.jsx)(IE.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, g.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s
            })
          })
        })),
        kE = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? pr.Slot : "div",
            i = (0, yE.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, g.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        RE = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? pr.Slot : "div",
            i = (0, yE.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, g.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        LE = {
          danger: bE.CircleX,
          information: bE.Info,
          success: bE.CircleCheck,
          warning: bE.TriangleAlert
        },
        AE = (0, A.forwardRef)((({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = NE(), i = e ? pr.Slot : LE[o], a = (0, yE.mergeProps)({
            className: TE({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, g.jsx)(i, {
            label: "",
            ref: n,
            ...a
          })
        })),
        ME = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? pr.Slot : "div",
            i = (0, yE.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, g.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        DE = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? pr.Slot : "div",
            i = (0, yE.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, g.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        HE = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, A.useRef)(null),
            a = function(...e) {
              const t = (0, A.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach((e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                }))
              }), t.current
            }(i, o),
            s = e ? pr.Slot : "a",
            {
              linkProps: l,
              isPressed: c
            } = gE(n, i),
            u = (0, yE.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, g.jsx)(s, {
            "data-pressed": c,
            "data-testid": r,
            ref: a,
            ...u,
            children: t
          })
        })),
        BE = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? pr.Slot : "div",
            a = (0, yE.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, g.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        })),
        VE = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? pr.Slot : "div";
          return (0, g.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, He.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        })),
        zE = (0, A.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n
          } = NE(), o = (0, yE.mergeProps)({
            className: xE({
              hasBackground: "none" !== n
            })
          }, t);
          return (0, g.jsx)(hf, {
            ref: r,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...o
          })
        }));

      function FE(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function qE(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every((r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : FE(n) && FE(o) ? qE(n, o) : n === o
        })))
      }

      function UE(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function GE(e) {
        return "number" == typeof e
      }

      function KE(e) {
        return "string" == typeof e
      }

      function XE(e) {
        return "boolean" == typeof e
      }

      function WE(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function $E(e) {
        return Math.abs(e)
      }

      function YE(e) {
        return Math.sign(e)
      }

      function ZE(e, t) {
        return $E(e - t)
      }

      function QE(e) {
        return nP(e).map(Number)
      }

      function JE(e) {
        return e[eP(e)]
      }

      function eP(e) {
        return Math.max(0, e.length - 1)
      }

      function tP(e, t) {
        return t === eP(e)
      }

      function rP(e, t = 0) {
        return Array.from(Array(e), ((e, r) => t + r))
      }

      function nP(e) {
        return Object.keys(e)
      }

      function oP(e, t) {
        return [e, t].reduce(((e, t) => (nP(t).forEach((r => {
          const n = e[r],
            o = t[r],
            i = WE(n) && WE(o);
          e[r] = i ? oP(n, o) : o
        })), e)), {})
      }

      function iP(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function aP() {
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

      function sP(e = 0, t = 0) {
        const r = $E(e - t);

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

      function lP(e, t, r) {
        const {
          constrain: n
        } = sP(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return r ? $E((o + e) % o) : n(e)
        }

        function s() {
          return i
        }

        function l() {
          return lP(e, s(), r)
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

      function cP(e, t, r, n, o, i, a, s, l, c, u, d, f, h, p, m, v, y, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], E = {
          passive: !1
        }, P = aP(), S = aP(), C = sP(50, 225).constrain(h.measure(20)), x = {
          mouse: 300,
          touch: 400
        }, T = {
          mouse: 500,
          touch: 600
        }, O = p ? 43 : 25;
        let I = !1,
          N = 0,
          j = 0,
          k = !1,
          R = !1,
          L = !1,
          A = !1;

        function M(e) {
          if (!iP(e, n) && e.touches.length >= 2) return D(e);
          const t = i.readPoint(e),
            r = i.readPoint(e, b),
            a = ZE(t, N),
            l = ZE(r, j);
          if (!R && !A) {
            if (!e.cancelable) return D(e);
            if (R = a > l, !R) return D(e)
          }
          const u = i.pointerMove(e);
          a > m && (L = !0), c.useFriction(.3).useDuration(.75), s.start(), o.add(_(u)), e.preventDefault()
        }

        function D(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            r = i.pointerUp(e) * (p ? T : x)[A ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * YE(e)),
                n = u.byDistance(e, !p).distance;
              return p || $E(e) < C ? n : v && t ? .5 * n : u.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if ($E(e) <= $E(t)) return 0;
              const r = ZE($E(e), $E(t));
              return $E(r / e)
            }(r, n),
            a = O - 10 * o,
            s = y + o / 50;
          R = !1, k = !1, S.clear(), c.useDuration(a).useFriction(s), l.distance(n, !p), A = !1, f.emit("pointerUp")
        }

        function H(e) {
          L && (e.stopPropagation(), e.preventDefault(), L = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function s(s) {
              (XE(g) || g(e, s)) && function(e) {
                const s = iP(e, n);
                A = s, L = p && s && !e.buttons && I, I = ZE(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (k = !0, i.pointerDown(e), c.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = A ? r : t;
                  S.add(e, "touchmove", M, E).add(e, "touchend", D).add(e, "mousemove", M, E).add(e, "mouseup", D)
                }(), N = i.readPoint(e), j = i.readPoint(e, b), f.emit("pointerDown"))
              }(s)
            }
            const l = t;
            P.add(l, "dragstart", (e => e.preventDefault()), E).add(l, "touchmove", (() => {}), E).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", D).add(l, "contextmenu", D).add(l, "click", H, !0)
          },
          destroy: function() {
            P.clear(), S.clear()
          },
          pointerDown: function() {
            return k
          }
        }
      }

      function uP(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function i(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (iP(r, t) ? r : r.touches[0])[o]
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
            return a && !s && $E(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function dP(e, t, r, n, o, i, a) {
        const s = [e].concat(n);
        let l, c, u = [],
          d = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (c = f(e), u = n.map(f), l = new ResizeObserver((r => {
              (XE(i) || i(o, r)) && function(r) {
                for (const i of r) {
                  if (d) return;
                  const r = i.target === e,
                    a = n.indexOf(i.target),
                    s = r ? c : u[a];
                  if ($E(f(r ? e : n[a]) - s) >= .5) {
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

      function fP(e, t, r, n, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = sP(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = $E(e[l] - t.get()),
              d = r.get() - t.get(),
              f = s.constrain(u / a);
            r.subtract(d * f), !o && $E(d) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function hP(e, t, r, n) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = sP(o, i),
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

      function pP(e) {
        let t = e;

        function r(e) {
          return GE(e) ? e : e.get()
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

      function mP(e, t) {
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

      function vP(e, t, r, n, o, i, a, s, l) {
        const c = QE(o),
          u = QE(o).reverse(),
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
              slideLocation: pP(-1),
              translate: mP(e, l[t]),
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

      function yP(e, t, r) {
        let n, o = !1;
        return {
          init: function(i) {
            r && (n = new MutationObserver((e => {
              o || (XE(r) || r(i, e)) && function(e) {
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

      function gP(e, t, r, n, o, i, a) {
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
        }(l, c), T = x.measureSize(S), O = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(T), I = function(e, t) {
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
              return KE(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(s, T), N = !d && !!g, j = d || !!g, {
          slideSizes: k,
          slideSizesWithGaps: R,
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
            return $E(t[s] - e[s])
          }(), d = function() {
            if (!c) return 0;
            const e = i.getComputedStyle(JE(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(a), h = r.map(((e, t, r) => {
            const n = !t,
              o = tP(r, t);
            return n ? f[t] + u : o ? f[t] + d : r[t + 1][s] - e[s]
          })).map($E);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: u,
            endGap: d
          }
        }(x, S, C, r, j, o), M = function(e, t, r, n, o, i, a, s, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, f = GE(r), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return QE(e).filter((e => e % t == 0)).map((r => e.slice(r, r + t)))
              }(e, r) : function(e) {
                return e.length ? QE(e).reduce(((r, f, h) => {
                  const p = JE(r) || 0,
                    m = 0 === p,
                    v = f === eP(e),
                    y = o[c] - i[p][c],
                    g = o[c] - i[f][u],
                    b = !n && m ? d(a) : 0,
                    _ = $E(g - (!n && v ? d(s) : 0) - (y + b));
                  return h && _ > t + l && r.push(f), v && r.push(e.length), r
                }), []).map(((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return h
        }(x, T, v, d, S, C, L, A, 2), {
          snaps: D,
          snapsAligned: H
        } = function(e, t, r, n, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(n).map((e => JE(e)[a] - e[0][i])).map($E).map(t.measure), c = n.map((e => r[i] - e[i])).map((e => -$E(e))), u = s(c).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: c,
            snapsAligned: u
          }
        }(x, I, S, C, M), B = -JE(D) + JE(R), {
          snapsContained: V,
          scrollContainLimit: z
        } = function(e, t, r, n) {
          const o = sP(-t + e, 0),
            i = r.map(((e, t) => {
              const {
                min: n,
                max: i
              } = o, a = o.constrain(e), l = !t, c = tP(r, t);
              return l ? i : c || s(n, a) ? n : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = JE(i);
              return sP(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return ZE(e, t) <= 1
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
        }(T, B, H, g), F = N ? V : H, {
          limit: q
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: sP(r ? n - e : JE(t), n)
          }
        }(B, F, d), U = lP(eP(F), u, d), G = U.clone(), K = QE(r), X = function(e, t, r, n) {
          const o = aP(),
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
        })(se, e))), W = F[U.get()], $ = pP(W), Y = pP(W), Z = pP(W), Q = pP(W), J = function(e, t, r, n, o) {
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
              return s ? (r.set(e), i += t / s, i *= l, c += i, e.add(i), o = c - u) : (i = 0, r.set(n), e.set(n), o = t), a = YE(o), u = c, h
            },
            settled: function() {
              return $E(n.get() - t.get()) < .001
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
            return e.concat().sort(((e, t) => $E(e) - $E(t)))[0]
          }

          function c(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const i = o.filter((e => YE(e) === n));
            return i.length ? l(i) : JE(o) - r
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
                    }))).sort(((e, t) => $E(e.diff) - $E(t.diff))),
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
        }(X, U, G, J, ee, Q, a), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(q), ne = aP(), oe = function(e, t, r, n) {
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
                return nP(o).reduce(((t, r) => {
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
                  o = tP(r, t);
                return n ? rP(JE(r[0]) + 1) : o ? rP(eP(i) - JE(r)[0] + 1, JE(r)[0]) : e
              }))
            }()
          }
        }(N, g, F, z, M, K), ae = function(e, t, r, n, o, i, a, s) {
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
                  (XE(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = r.findIndex((e => e.includes(t)));
                    GE(i) && (o.useDuration(0), n.index(i, 0), a.emit("slideFocus"))
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
          slideRects: C,
          animation: X,
          axis: x,
          dragHandler: cP(x, e, n, o, Q, uP(x, o), $, X, te, J, ee, U, a, O, h, p, y, .68, w),
          eventStore: ne,
          percentOfView: O,
          index: U,
          indexPrevious: G,
          limit: q,
          location: $,
          offsetLocation: Z,
          previousLocation: Y,
          options: i,
          resizeHandler: dP(t, a, o, r, x, b, P),
          scrollBody: J,
          scrollBounds: fP(q, Z, Q, J, O),
          scrollLooper: hP(B, q, Z, [$, Z, Y, Q]),
          scrollProgress: re,
          scrollSnapList: F.map(re.get),
          scrollSnaps: F,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: vP(x, T, B, k, R, D, F, Z, r),
          slideFocus: ae,
          slidesHandler: yP(t, a, _),
          slidesInView: oe,
          slideIndexes: K,
          slideRegistry: ie,
          slidesToScroll: M,
          target: Q,
          translate: mP(x, t)
        };
        return se
      }
      const bP = {
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

      function _P(e) {
        function t(e, t) {
          return oP(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = nP(n).filter((t => e.matchMedia(t).matches)).map((e => n[e])).reduce(((e, r) => t(e, r)), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => nP(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return r
      }

      function wP(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          i = _P(o),
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
          s = aP(),
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
          m = x;
        let v, y, g, b, _ = !1,
          w = c(bP, wP.globalOptions),
          E = c(w),
          P = [];

        function S(t) {
          const r = gP(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? S(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function C(t, r) {
          _ || (w = c(w, t), E = u(w), P = r || P, function() {
            const {
              container: t,
              slides: r
            } = E, n = KE(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = KE(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = S(E), d([w, ...P.map((({
            options: e
          }) => e))]).forEach((e => s.add(e, "change", x))), E.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(N), v.eventHandler.init(N), v.resizeHandler.init(N), v.slidesHandler.init(N), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(N), y = a.init(N, P)))
        }

        function x(e, t) {
          const r = I();
          T(), C(c({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function T() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), a.destroy(), s.clear()
        }

        function O(e, t, r) {
          E.active && !_ && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : E.duration), v.scrollTo.index(e, r || 0))
        }

        function I() {
          return v.index.get()
        }
        const N = {
          canScrollNext: function() {
            return v.index.add(1).get() !== I()
          },
          canScrollPrev: function() {
            return v.index.add(-1).get() !== I()
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
          selectedScrollSnap: I,
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
        return C(t, r), setTimeout((() => l.emit("init")), 0), N
      }

      function EP(e = {}, t = []) {
        const r = (0, A.useRef)(e),
          n = (0, A.useRef)(t),
          [o, i] = (0, A.useState)(),
          [a, s] = (0, A.useState)(),
          l = (0, A.useCallback)((() => {
            o && o.reInit(r.current, n.current)
          }), [o]);
        return (0, A.useEffect)((() => {
          qE(r.current, e) || (r.current = e, l())
        }), [e, l]), (0, A.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = UE(e),
              n = UE(t);
            return r.every(((e, t) => qE(e, n[t])))
          })(n.current, t) || (n.current = t, l())
        }), [t, l]), (0, A.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            wP.globalOptions = EP.globalOptions;
            const e = wP(a, r.current, n.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [s, o]
      }

      function PP(e = {}) {
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
      wP.globalOptions = void 0, EP.globalOptions = void 0, PP.globalOptions = void 0;
      const SP = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function CP(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function xP(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function TP(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function OP(e = {}) {
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
          ("pointerDown" === t ? TP : xP)(n, u.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map((e => o[e])),
            i = e.map((e => o[e]));
          return n.forEach((e => xP(e, r))), i.forEach((e => TP(e, r))), e
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
            } = a, v = f(SP, OP.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (u.loop = CP(t.loop), TP(n, u.loop)), t.draggable && _ && (u.draggable = CP(t.draggable), TP(n, u.draggable)), t.dragging && (u.dragging = CP(t.dragging), l.forEach((e => r.on(e, d)))), t.snapped && (u.snapped = CP(t.snapped), s.forEach((e => r.on(e, h))), h()), t.inView && (u.inView = CP(t.inView), c.forEach((e => r.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => r.off(e, d))), s.forEach((e => r.off(e, h))), c.forEach((e => r.off(e, p))), xP(n, u.loop), xP(n, u.draggable), xP(n, u.dragging), f([], i, u.snapped), f([], a, u.inView), Object.keys(u).forEach((e => {
              u[e] = []
            }))
          }
        };
        return m
      }
      OP.globalOptions = void 0;
      var IP = r(77680);

      function NP(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => IP.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, A.useState)((() => r ? n(e) : t));

        function a() {
          i(n(e))
        }
        return (0, A.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
            t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
          }
        }), [e]), o
      }

      function jP(...e) {
        const t = (0, A.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      r(33834);
      var kP = r(28679),
        RP = r(98365),
        LP = r.t(RP, 2);

      function AP(e) {
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

      function MP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function DP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? MP(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = AP(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : MP(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function HP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var BP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        VP = "foundry_qmpv6yt",
        zP = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = DP(DP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) BP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return HP(e.variantClassNames, (e => HP(e, (e => e.split(" ")[0]))))
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
      const FP = (0, A.createContext)(null);

      function qP() {
        const e = (0, A.useContext)(FP);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const UP = (0, A.forwardRef)((({
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
                  const t = NP("screen and (pointer: coarse) and (hover: none)");
                  return !!e && t
                }(),
                r = NP("(prefers-reduced-motion: reduce)", {
                  defaultValue: !1,
                  initializeWithValue: !0
                }),
                [n, o] = (0, A.useState)([]),
                i = n.length,
                [a, s] = (0, A.useState)(0),
                [l, c] = EP({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [PP(), OP()]),
                u = (0, A.useRef)(0),
                d = (0, A.useRef)(!1),
                f = n[a],
                h = (0, A.useCallback)((e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach(((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  })), s(t), d.current = !0
                }), [c]),
                p = (0, A.useCallback)((e => {
                  u.current = .94 * e.scrollSnapList().length
                }), []),
                m = (0, A.useCallback)(((e, t) => {
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
              return (0, A.useEffect)((() => {
                c && (p(c), m(c), c.on("reInit", p).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }), [c, m]), (0, A.useEffect)((() => {
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
          (0, A.useEffect)((() => {
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
            m = (0, kP.mergeProps)({
              className: zP(u)
            }, p, s),
            v = e ? pr.Slot : "div";
          return (0, g.jsx)(FP.Provider, {
            value: c,
            children: (0, g.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        })),
        GP = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        KP = (0, A.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = qP();
          if (!e && !n || !n?.status) return null;
          const o = e || GP[n.status],
            i = LP[o],
            a = (0, kP.mergeProps)({
              className: "foundry_qmpv6yn"
            }, t);
          return (0, g.jsx)(i, {
            label: "",
            ref: r,
            size: "LG",
            "data-icon": !0,
            ...a
          })
        })),
        XP = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? pr.Slot : "div",
            i = (0, kP.mergeProps)({
              className: "foundry_qmpv6yo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, g.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        WP = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, a) => {
          const s = e ? pr.Slot : "div",
            l = (0, kP.mergeProps)({
              className: "foundry_qmpv6yk"
            }, i);
          return (0, g.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...l
          })
        })),
        $P = (0, A.forwardRef)((({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = qP(), a = (0, kP.mergeProps)({
            className: "foundry_qmpv6yl"
          }, r), s = jP(i, n), l = A.Children.map(t, (e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          }));
          return (0, A.useEffect)((() => {
            l && o(l)
          }), []), (0, g.jsx)("div", {
            ref: s,
            "data-testid": e,
            ...a,
            children: (0, g.jsx)("div", {
              className: "foundry_qmpv6ym",
              children: t
            })
          })
        })),
        YP = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, A.useRef)(null),
            a = jP(i, o),
            s = e ? pr.Slot : "a",
            {
              linkProps: l,
              isPressed: c
            } = gE(n, i),
            u = (0, kP.mergeProps)({
              className: "foundry_qmpv6yp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, g.jsx)(s, {
            "data-pressed": c,
            "data-testid": r,
            ref: a,
            ...l,
            ...u,
            children: t
          })
        })),
        ZP = (0, A.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const n = (0, kP.mergeProps)({
            className: "foundry_qmpv6yq"
          }, t);
          return (0, g.jsx)(hf, {
            ref: r,
            "data-close-btn": !0,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...n
          })
        })),
        QP = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? pr.Slot : "div",
            a = (0, kP.mergeProps)({
              className: "foundry_qmpv6ys"
            }, n);
          return (0, g.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...a,
            children: r
          })
        })),
        JP = (0, A.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = qP(), i = (0, kP.mergeProps)({
            className: VP
          }, t);
          return (0, g.jsx)(hf, {
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
        eS = (0, A.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = qP(), i = (0, kP.mergeProps)({
            className: VP
          }, t);
          return (0, g.jsx)(hf, {
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
        tS = (0, A.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = qP(), i = (0, kP.mergeProps)({
            className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh"
          }, t);
          return (0, g.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...i,
            children: [n + 1, "/", o]
          })
        }));
      var rS = r(29214),
        nS = r(78734),
        oS = r.t(nS, 2);

      function iS(e) {
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

      function aS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function sS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? aS(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = iS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aS(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function lS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var cS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        uS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sS(sS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) cS(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lS(e.variantClassNames, (e => lS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        dS = uS({
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
        fS = uS({
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
        hS = uS({
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
      const pS = (0, A.createContext)(null);

      function mS() {
        const e = (0, A.useContext)(pS);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const vS = (0, A.forwardRef)((({
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
            d = (0, rS.mergeProps)({
              className: fS(u)
            }, l),
            f = e ? pr.Slot : "div";
          return (0, g.jsx)(pS.Provider, {
            value: u,
            children: (0, g.jsx)(f, {
              ref: c,
              "data-testid": r,
              "aria-disabled": s,
              ...d,
              children: t
            })
          })
        })),
        yS = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = mS(), a = e ? pr.Slot : "div", s = (0, rS.mergeProps)({
            className: hS({
              size: i
            })
          }, n);
          return (0, g.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        })),
        gS = (0, A.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = oS[e],
            o = (0, rS.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, g.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        })),
        bS = (0, A.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = mS(), i = (0, rS.mergeProps)({
            className: dS({
              background: n
            })
          }, t);
          return (0, g.jsx)(hf, {
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
      var _S = r(7640),
        wS = r(76932),
        ES = r.t(wS, 2);

      function PS(e) {
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

      function SS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function CS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? SS(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = PS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : SS(Object(r)).forEach((function(t) {
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
      var TS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        OS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = CS(CS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) TS(c, n, e.defaultVariants) && (r += " " + u);
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
        IS = OS({
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
        NS = OS({
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
        jS = OS({
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

      function kS() {
        const e = (0, A.useContext)(RS);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const RS = (0, A.createContext)(null),
        LS = (0, A.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const a = (0, _S.mergeProps)({
              className: jS({
                size: n
              })
            }, o),
            s = r ? pr.Slot : "ol";
          return (0, g.jsx)(RS.Provider, {
            value: {
              size: n
            },
            children: (0, g.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        })),
        AS = (0, A.forwardRef)((({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const a = (0, A.useRef)(null),
            {
              size: s
            } = kS(),
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
              } = gE({
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
            c = r ? pr.Slot : "a",
            u = (0, _S.mergeProps)({
              className: (0, He.clsx)(IS({
                size: s
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, g.jsx)("li", {
            className: NS({
              size: s
            }),
            ref: i,
            children: (0, g.jsx)(c, {
              ref: a,
              ...u,
              children: t
            })
          })
        })),
        MS = (0, A.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = ES[e];
          return (0, g.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        })),
        DS = (0, A.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, i) => {
          const [a, s] = (0, A.useState)(r), {
            size: l
          } = kS(), c = (0, _S.mergeProps)({
            className: NS({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, g.jsx)("li", {
            ref: i,
            ...c,
            children: (0, g.jsxs)(Yy, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, g.jsx)(Zy, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, g.jsx)(eg, {
                children: (0, g.jsx)(tg, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, g.jsx)(rg, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        HS = (0, A.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? pr.Slot : ng,
            a = (0, _S.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, g.jsx)(i, {
            ref: o,
            ...a,
            children: e
          })
        }));
      var BS = r(55529);

      function VS(e) {
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

      function zS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function FS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zS(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = VS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zS(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function qS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var US = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        GS = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = FS(FS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) US(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qS(e.variantClassNames, (e => qS(e, (e => e.split(" ")[0]))))
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
      const KS = (0, A.forwardRef)((({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          ...n
        }, o) => {
          const i = e ? pr.Slot : "div",
            a = (0, BS.mergeProps)({
              className: GS({
                appearance: r
              })
            }, n);
          return (0, g.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        })),
        XS = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? pr.Slot : "div",
            a = (0, BS.mergeProps)({
              className: "foundry_18omk9t4 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo"
            }, n);
          return (0, g.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        })),
        WS = (0, A.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = tv[e],
            o = (0, BS.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t3",
              label: ""
            }, t);
          return (0, g.jsx)(n, {
            ref: r,
            ...o
          })
        }));
      var $S = dC(),
        YS = e => sC(e, $S),
        ZS = dC();
      YS.write = e => sC(e, ZS);
      var QS = dC();
      YS.onStart = e => sC(e, QS);
      var JS = dC();
      YS.onFrame = e => sC(e, JS);
      var eC = dC();
      YS.onFinish = e => sC(e, eC);
      var tC = [];
      YS.setTimeout = (e, t) => {
        const r = YS.now() + t,
          n = () => {
            const e = tC.findIndex((e => e.cancel == n));
            ~e && tC.splice(e, 1), iC -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return tC.splice(rC(r), 0, o), iC += 1, lC(), o
      };
      var rC = e => ~(~tC.findIndex((t => t.time > e)) || ~tC.length);
      YS.cancel = e => {
        QS.delete(e), JS.delete(e), eC.delete(e), $S.delete(e), ZS.delete(e)
      }, YS.sync = e => {
        aC = !0, YS.batchedUpdates(e), aC = !1
      }, YS.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, YS.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          QS.delete(r), t = null
        }, n
      };
      var nC = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      YS.use = e => nC = e, YS.now = "undefined" != typeof performance ? () => performance.now() : Date.now, YS.batchedUpdates = e => e(), YS.catch = console.error, YS.frameLoop = "always", YS.advance = () => {
        "demand" !== YS.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : uC()
      };
      var oC = -1,
        iC = 0,
        aC = !1;

      function sC(e, t) {
        aC ? (t.delete(e), e(0)) : (t.add(e), lC())
      }

      function lC() {
        oC < 0 && (oC = 0, "demand" !== YS.frameLoop && nC(cC))
      }

      function cC() {
        ~oC && (nC(cC), YS.batchedUpdates(uC))
      }

      function uC() {
        const e = oC;
        oC = YS.now();
        const t = rC(oC);
        t && (fC(tC.splice(0, t), (e => e.handler())), iC -= t), iC ? (QS.flush(), $S.flush(e ? Math.min(64, oC - e) : 16.667), JS.flush(), ZS.flush(), eC.flush()) : oC = -1
      }

      function dC() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            iC += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (iC -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, iC -= t.size, fC(t, (t => t(r) && e.add(t))), iC += e.size, t = e)
          }
        }
      }

      function fC(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            YS.catch(e)
          }
        }))
      }
      var hC = Object.defineProperty,
        pC = {};

      function mC() {}((e, t) => {
        for (var r in t) hC(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(pC, {
        assign: () => IC,
        colors: () => xC,
        createStringInterpolator: () => EC,
        skipAnimation: () => TC,
        to: () => PC,
        willAdvance: () => OC
      });
      var vC = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function yC(e, t) {
        if (vC.arr(e)) {
          if (!vC.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var gC = (e, t) => e.forEach(t);

      function bC(e, t, r) {
        if (vC.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var _C = e => vC.und(e) ? [] : vC.arr(e) ? e : [e];

      function wC(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), gC(r, t)
        }
      }
      var EC, PC, SC = (e, ...t) => wC(e, (e => e(...t))),
        CC = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        xC = null,
        TC = !1,
        OC = mC,
        IC = e => {
          e.to && (PC = e.to), e.now && (YS.now = e.now), void 0 !== e.colors && (xC = e.colors), null != e.skipAnimation && (TC = e.skipAnimation), e.createStringInterpolator && (EC = e.createStringInterpolator), e.requestAnimationFrame && YS.use(e.requestAnimationFrame), e.batchedUpdates && (YS.batchedUpdates = e.batchedUpdates), e.willAdvance && (OC = e.willAdvance), e.frameLoop && (YS.frameLoop = e.frameLoop)
        },
        NC = new Set,
        jC = [],
        kC = [],
        RC = 0,
        LC = {
          get idle() {
            return !NC.size && !jC.length
          },
          start(e) {
            RC > e.priority ? (NC.add(e), YS.onStart(AC)) : (MC(e), YS(HC))
          },
          advance: HC,
          sort(e) {
            if (RC) YS.onFrame((() => LC.sort(e)));
            else {
              const t = jC.indexOf(e);
              ~t && (jC.splice(t, 1), DC(e))
            }
          },
          clear() {
            jC = [], NC.clear()
          }
        };

      function AC() {
        NC.forEach(MC), NC.clear(), YS(HC)
      }

      function MC(e) {
        jC.includes(e) || DC(e)
      }

      function DC(e) {
        jC.splice(function(t) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(jC), 0, e)
      }

      function HC(e) {
        const t = kC;
        for (let r = 0; r < jC.length; r++) {
          const n = jC[r];
          RC = n.priority, n.idle || (OC(n), n.advance(e), n.idle || t.push(n))
        }
        return RC = 0, (kC = jC).length = 0, (jC = t).length > 0
      }
      var BC = "[-+]?\\d*\\.?\\d+",
        VC = BC + "%";

      function zC(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var FC = new RegExp("rgb" + zC(BC, BC, BC)),
        qC = new RegExp("rgba" + zC(BC, BC, BC, BC)),
        UC = new RegExp("hsl" + zC(BC, VC, VC)),
        GC = new RegExp("hsla" + zC(BC, VC, VC, BC)),
        KC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        XC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        WC = /^#([0-9a-fA-F]{6})$/,
        $C = /^#([0-9a-fA-F]{8})$/;

      function YC(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function ZC(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = YC(o, n, e + 1 / 3),
          a = YC(o, n, e),
          s = YC(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function QC(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function JC(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function ex(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function tx(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function rx(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = WC.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : xC && void 0 !== xC[e] ? xC[e] : (t = FC.exec(e)) ? (QC(t[1]) << 24 | QC(t[2]) << 16 | QC(t[3]) << 8 | 255) >>> 0 : (t = qC.exec(e)) ? (QC(t[1]) << 24 | QC(t[2]) << 16 | QC(t[3]) << 8 | ex(t[4])) >>> 0 : (t = KC.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = $C.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = XC.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = UC.exec(e)) ? (255 | ZC(JC(t[1]), tx(t[2]), tx(t[3]))) >>> 0 : (t = GC.exec(e)) ? (ZC(JC(t[1]), tx(t[2]), tx(t[3])) | ex(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var nx = (e, t, r) => {
          if (vC.fun(e)) return e;
          if (vC.arr(e)) return nx({
            range: e,
            output: t,
            extrapolate: r
          });
          if (vC.str(e.output[0])) return EC(e);
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
        ox = 1.70158,
        ix = 2.5949095,
        ax = 2.70158,
        sx = 2 * Math.PI / 3,
        lx = 2 * Math.PI / 4.5,
        cx = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        ux = {
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
          easeInBack: e => ax * e * e * e - ox * e * e,
          easeOutBack: e => 1 + ax * Math.pow(e - 1, 3) + ox * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - ix) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + ix) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * sx),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * sx) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * lx) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * lx) / 2 + 1,
          easeInBounce: e => 1 - cx(1 - e),
          easeOutBounce: cx,
          easeInOutBounce: e => e < .5 ? (1 - cx(1 - 2 * e)) / 2 : (1 + cx(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        dx = Symbol.for("FluidValue.get"),
        fx = Symbol.for("FluidValue.observers"),
        hx = e => Boolean(e && e[dx]),
        px = e => e && e[dx] ? e[dx]() : e,
        mx = e => e[fx] || null;

      function vx(e, t) {
        const r = e[fx];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var yx = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            gx(this, e)
          }
        },
        gx = (e, t) => Ex(e, dx, t);

      function bx(e, t) {
        if (e[dx]) {
          let r = e[fx];
          r || Ex(e, fx, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function _x(e, t) {
        const r = e[fx];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[fx] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var wx, Ex = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Px = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Sx = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Cx = new RegExp(`(${Px.source})(%|[a-z]+)`, "i"),
        xx = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Tx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Ox = e => {
          const [t, r] = Ix(e);
          if (!t || CC()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && Tx.test(r) ? Ox(r) : r || e
        },
        Ix = e => {
          const t = Tx.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        Nx = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        jx = e => {
          wx || (wx = xC ? new RegExp(`(${Object.keys(xC).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => px(e).replace(Tx, Ox).replace(Sx, rx).replace(wx, rx))),
            r = t.map((e => e.match(Px).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = n.map((t => nx({
              ...e,
              output: t
            })));
          return e => {
            const r = !Cx.test(t[0]) && t.find((e => Cx.test(e)))?.replace(Px, "");
            let n = 0;
            return t[0].replace(Px, (() => `${o[n++](e)}${r||""}`)).replace(xx, Nx)
          }
        },
        kx = "react-spring: ",
        Rx = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${kx}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Lx = Rx(console.warn),
        Ax = Rx(console.warn);

      function Mx(e) {
        return vC.str(e) && ("#" == e[0] || /\d/.test(e) || !CC() && Tx.test(e) || e in (xC || {}))
      }
      var Dx = CC() ? A.useEffect : A.useLayoutEffect;

      function Hx() {
        const e = (0, A.useState)()[1],
          t = (() => {
            const e = (0, A.useRef)(!1);
            return Dx((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Bx = e => (0, A.useEffect)(e, Vx),
        Vx = [],
        zx = Symbol.for("Animated:node"),
        Fx = e => e && e[zx],
        qx = (e, t) => {
          return r = e, n = zx, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Ux = e => e && e[zx] && e[zx].getPayload(),
        Gx = class {
          constructor() {
            qx(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Kx = class e extends Gx {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, vC.num(this._value) && (this.lastPosition = this._value)
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
            return vC.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, vC.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Xx = class e extends Kx {
          constructor(e) {
            super(0), this._string = null, this._toString = nx({
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
            if (vC.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = nx({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Wx = {
          dependencies: null
        },
        $x = class extends Gx {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return bC(this.source, ((r, n) => {
              var o;
              (o = r) && o[zx] === o ? t[n] = r.getValue(e) : hx(r) ? t[n] = px(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && gC(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return bC(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Wx.dependencies && hx(e) && Wx.dependencies.add(e);
            const t = Ux(e);
            t && gC(t, (e => this.add(e)))
          }
        },
        Yx = class e extends $x {
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
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(Zx)), !0)
          }
        };

      function Zx(e) {
        return (Mx(e) ? Xx : Kx).create(e)
      }

      function Qx(e) {
        const t = Fx(e);
        return t ? t.constructor : vC.arr(e) ? Yx : Mx(e) ? Xx : Kx
      }
      var Jx = (e, t) => {
          const r = !vC.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, A.forwardRef)(((n, o) => {
            const i = (0, A.useRef)(null),
              a = r && (0, A.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (vC.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return Wx.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new $x(e), Wx.dependencies = null, [e, r]
              }(n, t),
              c = Hx(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new eT(u, l),
              f = (0, A.useRef)(void 0);
            Dx((() => (f.current = d, gC(l, (e => bx(e, d))), () => {
              f.current && (gC(f.current.deps, (e => _x(e, f.current))), YS.cancel(f.current.update))
            }))), (0, A.useEffect)(u, []), Bx((() => () => {
              const e = f.current;
              gC(e.deps, (t => _x(t, e)))
            }));
            const h = t.getComponentProps(s.getValue());
            return A.createElement(e, {
              ...h,
              ref: a
            })
          }))
        },
        eT = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && YS.write(this.update)
          }
        },
        tT = Symbol.for("AnimatedComponent"),
        rT = e => vC.str(e) ? e : e && vC.str(e.displayName) ? e.displayName : vC.fun(e) && e.name || null;

      function nT(e, ...t) {
        return vC.fun(e) ? e(...t) : e
      }
      var oT = (e, t) => !0 === e || !!(t && e && (vC.fun(e) ? e(t) : _C(e).includes(t))),
        iT = (e, t) => vC.obj(e) ? t && e[t] : e,
        aT = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        sT = e => e,
        lT = (e, t = sT) => {
          let r = cT;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            vC.und(r) || (n[o] = r)
          }
          return n
        },
        cT = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        uT = {
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

      function dT(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (bC(e, ((e, n) => {
              uT[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return bC(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function fT(e) {
        return e = px(e), vC.arr(e) ? e.map(fT) : Mx(e) ? pC.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function hT(e) {
        return vC.fun(e) || vC.arr(e) && vC.obj(e[0])
      }

      function pT(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var mT = {
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
        vT = {
          ...mT.default,
          mass: 1,
          damping: 1,
          easing: ux.linear,
          clamp: !1
        },
        yT = class {
          constructor() {
            this.velocity = 0, Object.assign(this, vT)
          }
        };

      function gT(e, t) {
        if (vC.und(t.decay)) {
          const r = !vC.und(t.tension) || !vC.und(t.friction);
          !r && vC.und(t.frequency) && vC.und(t.damping) && vC.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var bT = [],
        _T = class {
          constructor() {
            this.changed = !1, this.values = bT, this.toValues = null, this.fromValues = bT, this.config = new yT, this.immediate = !1
          }
        };

      function wT(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, c, u = oT(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            vC.und(r.pause) || (o.paused = oT(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || oT(e, t)), l = nT(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - YS.now()
          }

          function f() {
            l > 0 && !pC.skipAnimation ? (o.delayed = !0, c = YS.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
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
      var ET = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? CT(e.get()) : t.every((e => e.noop)) ? PT(e.get()) : ST(e.get(), t.every((e => e.finished))),
        PT = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        ST = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        CT = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function xT(e, t, r, n) {
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
          const c = lT(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const f = new Promise(((e, t) => (u = e, d = t))),
            h = e => {
              const t = o <= (r.cancelId || 0) && CT(n) || o !== r.asyncId && ST(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new OT,
                a = new IT;
              return (async () => {
                if (pC.skipAnimation) throw TT(r), a.result = ST(n, !1), d(a), a;
                h(i);
                const s = vC.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, bC(c, ((e, t) => {
                  vC.und(s[t]) && (s[t] = e)
                }));
                const l = await n.start(s);
                return h(i), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (pC.skipAnimation) return TT(r), ST(n, !1);
          try {
            let t;
            t = vC.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = ST(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof OT) m = e.result;
            else {
              if (!(e instanceof IT)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? s : void 0, r.promise = i ? l : void 0)
          }
          return vC.fun(a) && YS.batchedUpdates((() => {
            a(m, n, n.item)
          })), m
        })() : l
      }

      function TT(e, t) {
        wC(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var OT = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        IT = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        NT = e => e instanceof kT,
        jT = 1,
        kT = class extends yx {
          constructor() {
            super(...arguments), this.id = jT++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Fx(this);
            return e && e.getValue()
          }
          to(...e) {
            return pC.to(this, e)
          }
          interpolate(...e) {
            return Lx(`${kx}The "interpolate" function is deprecated in v9 (use "to" instead)`), pC.to(this, e)
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
            vx(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || LC.sort(this), vx(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        RT = Symbol.for("SpringPhase"),
        LT = e => (1 & e[RT]) > 0,
        AT = e => (2 & e[RT]) > 0,
        MT = e => (4 & e[RT]) > 0,
        DT = (e, t) => t ? e[RT] |= 3 : e[RT] &= -3,
        HT = (e, t) => t ? e[RT] |= 4 : e[RT] &= -5,
        BT = class extends kT {
          constructor(e, t) {
            if (super(), this.animation = new _T, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !vC.und(e) || !vC.und(t)) {
              const r = vC.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              vC.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(AT(this) || this._state.asyncTo) || MT(this)
          }
          get goal() {
            return px(this.animation.to)
          }
          get velocity() {
            const e = Fx(this);
            return e instanceof Kx ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return LT(this)
          }
          get isAnimating() {
            return AT(this)
          }
          get isPaused() {
            return MT(this)
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
            } = n, a = Ux(n.to);
            !a && hx(n.to) && (o = _C(px(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              const c = s.constructor == Xx ? 1 : a ? a[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = vC.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (vC.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(s.lastPosition - d) <= f, a = o * n
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !vC.und(n),
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
            const s = Fx(this),
              l = s.getValue();
            if (t) {
              const e = px(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return YS.batchedUpdates((() => {
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
            if (AT(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              YS.batchedUpdates((() => {
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
            return vC.und(e) ? (r = this.queue || [], this.queue = []) : r = [vC.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => ET(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), TT(this._state, e && this._lastCallId), YS.batchedUpdates((() => this._stop(t, e))), this
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
            r = vC.obj(r) ? r[t] : r, (null == r || hT(r)) && (r = void 0), n = vC.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return LT(this) || (e.reverse && ([r, n] = [n, r]), n = px(n), vC.und(n) ? Fx(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, lT(e, ((e, t) => /^on/.test(t) ? iT(e, r) : e))), GT(this, e, "onProps"), KT(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return wT(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  MT(this) || (HT(this, !0), SC(i.pauseQueue), KT(this, "onPause", ST(this, VT(this, this.animation.to)), this))
                },
                resume: () => {
                  MT(this) && (HT(this, !1), AT(this) && this._resume(), SC(i.resumeQueue), KT(this, "onResume", ST(this, VT(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = zT(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(CT(this));
            const n = !vC.und(e.to),
              o = !vC.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(CT(this));
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
            !o || n || t.default && !vC.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !yC(d, c);
            f && (s.from = d), d = px(d);
            const h = !yC(u, l);
            h && this._focus(u);
            const p = hT(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (gT(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), gT(e, t), Object.assign(e, t);
              for (const t in vT) null == e[t] && (e[t] = vT[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              vC.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, nT(t.config, i), t.config !== a.config ? nT(a.config, i) : void 0);
            let g = Fx(this);
            if (!g || vC.und(u)) return r(ST(this, !0));
            const b = vC.und(t.reset) ? o && !t.default : !vC.und(d) && oT(t.reset, i),
              _ = b ? d : this.get(),
              w = fT(u),
              E = vC.num(w) || vC.arr(w) || Mx(w),
              P = !p && (!E || oT(a.immediate || t.immediate, i));
            if (h) {
              const e = Qx(u);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const S = g.constructor;
            let C = hx(u),
              x = !1;
            if (!C) {
              const e = b || !LT(this) && f;
              (h || e) && (x = yC(fT(_), w), C = !x), (yC(s.immediate, P) || P) && yC(m.decay, v) && yC(m.velocity, y) || (C = !0)
            }
            if (x && AT(this) && (s.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || hx(l)) && (s.values = g.getPayload(), s.toValues = hx(u) ? null : S == Xx ? [1] : _C(w)), s.immediate != P && (s.immediate = P, P || b || this._set(l)), C)) {
              const {
                onRest: e
              } = s;
              gC(UT, (e => GT(this, t, e)));
              const n = ST(this, VT(this, l));
              SC(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && YS.batchedUpdates((() => {
                s.changed = !b, e?.(n, this), b ? nT(a.onRest, n) : s.onStart?.(n, this)
              }))
            }
            b && this._set(_), p ? r(xT(t.to, t, this._state, this)) : C ? this._start() : AT(this) && !h ? this._pendingCalls.add(r) : r(PT(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (mx(this) && this._detach(), t.to = e, mx(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            hx(t) && (bx(t, this), NT(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            hx(e) && _x(e, this)
          }
          _set(e, t = !0) {
            const r = px(e);
            if (!vC.und(r)) {
              const e = Fx(this);
              if (!e || !yC(r, e.getValue())) {
                const n = Qx(r);
                e && e.constructor == n ? e.setValue(r) : qx(this, n.create(r)), e && YS.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return Fx(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, KT(this, "onStart", ST(this, VT(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), nT(this.animation.onChange, e, this)), nT(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Fx(this).reset(px(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), AT(this) || (DT(this, !0), MT(this) || this._resume())
          }
          _resume() {
            pC.skipAnimation ? this.finish() : LC.start(this)
          }
          _stop(e, t) {
            if (AT(this)) {
              DT(this, !1);
              const r = this.animation;
              gC(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), vx(this, {
                type: "idle",
                parent: this
              });
              const n = t ? CT(this.get()) : ST(this.get(), VT(this, e ?? r.to));
              SC(this._pendingCalls, n), r.changed && (r.changed = !1, KT(this, "onRest", n, this))
            }
          }
        };

      function VT(e, t) {
        const r = fT(t);
        return yC(fT(e.get()), r)
      }

      function zT(e, t = e.loop, r = e.to) {
        const n = nT(t);
        if (n) {
          const o = !0 !== n && dT(n),
            i = (o || e).reverse,
            a = !o || o.reset;
          return FT({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || hT(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function FT(e) {
        const {
          to: t,
          from: r
        } = e = dT(e), n = new Set;
        return vC.obj(t) && qT(t, n), vC.obj(r) && qT(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function qT(e, t) {
        bC(e, ((e, r) => null != e && t.add(r)))
      }
      var UT = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function GT(e, t, r) {
        e.animation[r] = t[r] !== aT(t, r) ? iT(t[r], e.key) : void 0
      }

      function KT(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var XT = ["onStart", "onChange", "onRest"],
        WT = 1,
        $T = class {
          constructor(e, t) {
            this.id = WT++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              vC.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(FT(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = _C(e).map(FT) : this.queue = [], this._flush ? this._flush(this, t) : (eO(this, t), function(e, t) {
              return Promise.all(t.map((t => YT(e, t)))).then((t => ET(e, t)))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              gC(_C(t), (t => r[t].stop(!!e)))
            } else TT(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (vC.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              gC(_C(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (vC.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              gC(_C(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            bC(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, wC(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !n && this._started,
              a = o || i && r.size ? this.get() : null;
            o && t.size && wC(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, wC(r, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            YS.onFrame(this._onFrame)
          }
        };
      async function YT(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = vC.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = vC.arr(o) || vC.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : gC(XT, (r => {
          const n = t[r];
          if (vC.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, SC(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          h = !0 === t.cancel || !0 === aT(t, "cancel");
        (u || h && d.asyncId) && f.push(wT(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: mC,
            resume: mC,
            start(t, r) {
              h ? (TT(d, e._lastAsyncId), r(CT(e))) : (t.onRest = s, r(xT(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = ET(e, await Promise.all(f));
        if (a && p.finished && (!r || !p.noop)) {
          const r = zT(t, a, o);
          if (r) return eO(e, [r]), YT(e, r, !0)
        }
        return l && YS.batchedUpdates((() => l(p, e, e.item))), p
      }

      function ZT(e, t) {
        const r = {
          ...e.springs
        };
        return t && gC(_C(t), (e => {
            vC.und(e.keys) && (e = FT(e)), vC.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), JT(r, e, (e => QT(e)))
          })),
          function(e, t) {
            bC(t, ((t, r) => {
              e.springs[r] || (e.springs[r] = t, bx(t, e))
            }))
          }(e, r), r
      }

      function QT(e, t) {
        const r = new BT;
        return r.key = e, t && bx(r, t), r
      }

      function JT(e, t, r) {
        t.keys && gC(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function eO(e, t) {
        gC(t, (t => {
          JT(e.springs, t, (t => QT(t, e)))
        }))
      }
      var tO = A.createContext({
          pause: !1,
          immediate: !1
        }),
        rO = () => {
          const e = [],
            t = function(t) {
              Ax(`${kx}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return gC(e, ((e, o) => {
                if (vC.und(t)) n.push(e.start());
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
            return gC(e, (e => e.pause(...arguments))), this
          }, t.resume = function() {
            return gC(e, (e => e.resume(...arguments))), this
          }, t.set = function(t) {
            gC(e, ((e, r) => {
              const n = vC.fun(t) ? t(r, e) : t;
              n && e.set(n)
            }))
          }, t.start = function(t) {
            const r = [];
            return gC(e, ((e, n) => {
              if (vC.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            })), r
          }, t.stop = function() {
            return gC(e, (e => e.stop(...arguments))), this
          }, t.update = function(t) {
            return gC(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
          };
          const r = function(e, t, r) {
            return vC.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        nO = () => rO(),
        oO = () => (0, A.useState)(nO)[0];

      function iO(e, t, r) {
        const n = vC.fun(t) && t,
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
          f = (0, A.useMemo)((() => n || 3 == arguments.length ? rO() : void 0), []),
          h = _C(e),
          p = [],
          m = (0, A.useRef)(null),
          v = o ? null : m.current;
        Dx((() => {
          m.current = p
        })), Bx((() => (gC(p, (e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        })), () => {
          gC(m.current, (e => {
            e.expired && clearTimeout(e.expirationId), pT(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : aO++
              }))
            }
            return vC.und(r) ? e : vC.fun(r) ? e.map(r) : _C(r)
          }(h, n ? n() : t, v),
          g = o && m.current || [];
        Dx((() => gC(g, (({
          ctrl: e,
          item: t,
          key: r
        }) => {
          pT(e, f), nT(c, t, r)
        }))));
        const b = [];
        if (v && gC(v, ((e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
          })), gC(h, ((e, t) => {
            p[t] || (p[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new $T
            }, p[t].ctrl.item = e)
          })), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          gC(b, ((t, n) => {
            const o = v[n];
            ~t ? (e = p.indexOf(o), p[e] = {
              ...o,
              item: h[t]
            }) : r && p.splice(++e, 0, o)
          }))
        }
        vC.fun(i) && p.sort(((e, t) => i(e.item, t.item)));
        let _ = -a;
        const w = Hx(),
          E = lT(t),
          P = new Map,
          S = (0, A.useRef)(new Map),
          C = (0, A.useRef)(!1);
        gC(p, ((e, r) => {
          const o = e.key,
            i = e.phase,
            c = n ? n() : t;
          let f, h;
          const p = nT(c.delay || 0, o);
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
          if (f = nT(f, e.item, r), f = vC.obj(f) ? dT(f) : {
              to: f
            }, !f.config) {
            const t = d || E.config;
            f.config = nT(t, e.item, r, h)
          }
          _ += a;
          const g = {
            ...E,
            delay: p + _,
            ref: u,
            immediate: c.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == h && vC.und(g.from)) {
            const o = n ? n() : t,
              i = vC.und(o.initial) || v ? o.from : o.initial;
            g.from = nT(i, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            nT(b, e);
            const t = m.current,
              r = t.find((e => e.key === o));
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every((e => e.ctrl.idle));
              if ("leave" == r.phase) {
                const t = nT(s, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                }
              }
              e && t.some((e => e.expired)) && (S.current.delete(r), l && (C.current = !0), w())
            }
          };
          const x = ZT(e.ctrl, g);
          "leave" === h && l ? S.current.set(e, {
            phase: h,
            springs: x,
            payload: g
          }) : P.set(e, {
            phase: h,
            springs: x,
            payload: g
          })
        }));
        const x = (0, A.useContext)(tO),
          T = function(e) {
            const t = (0, A.useRef)(void 0);
            return (0, A.useEffect)((() => {
              t.current = e
            })), t.current
          }(x),
          O = x !== T && function(e) {
            for (const t in e) return !0;
            return !1
          }(x);
        Dx((() => {
          O && gC(p, (e => {
            e.ctrl.start({
              default: x
            })
          }))
        }), [x]), gC(P, ((e, t) => {
          if (S.current.size) {
            const e = p.findIndex((e => e.key === t.key));
            p.splice(e, 1)
          }
        })), Dx((() => {
          gC(S.current.size ? S.current : P, (({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), O && "enter" == e && n.start({
              default: x
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || C.current ? (n.start(t), C.current && (C.current = !1)) : n.update(t))
          }))
        }), o ? void 0 : r);
        const I = e => A.createElement(A.Fragment, null, p.map(((t, r) => {
          const {
            springs: n
          } = P.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), i = vC.str(t.key) || vC.num(t.key) ? t.key : t.ctrl.id, a = A.version < "19.0.0", s = o?.props ?? {};
          return a && (s.ref = o.ref), o && o.type ? A.createElement(o.type, {
            key: i,
            ...s
          }) : o
        })));
        return f ? [I, f] : I
      }
      var aO = 1,
        sO = class extends kT {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = nx(...t);
            const r = this._get(),
              n = Qx(r);
            qx(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            yC(t, this.get()) || (Fx(this).setValue(t), this._onChange(t, this.idle)), !this.idle && cO(this._active) && uO(this)
          }
          _get() {
            const e = vC.arr(this.source) ? this.source.map(px) : _C(px(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !cO(this._active) && (this.idle = !1, gC(Ux(this), (e => {
              e.done = !1
            })), pC.skipAnimation ? (YS.batchedUpdates((() => this.advance())), uO(this)) : LC.start(this))
          }
          _attach() {
            let e = 1;
            gC(_C(this.source), (t => {
              hx(t) && bx(t, this), NT(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            gC(_C(this.source), (e => {
              hx(e) && _x(e, this)
            })), this._active.clear(), uO(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = _C(this.source).reduce(((e, t) => Math.max(e, (NT(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function lO(e) {
        return !1 !== e.idle
      }

      function cO(e) {
        return !e.size || Array.from(e).every(lO)
      }

      function uO(e) {
        e.idle || (e.idle = !0, gC(Ux(e), (e => {
          e.done = !0
        })), vx(e, {
          type: "idle",
          parent: e
        }))
      }
      pC.assign({
        createStringInterpolator: jx,
        to: (e, t) => new sO(e, t)
      }), LC.advance;
      var dO = /^--/;

      function fO(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || dO.test(e) || pO.hasOwnProperty(e) && pO[e] ? ("" + t).trim() : t + "px"
      }
      var hO = {},
        pO = {
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
        mO = ["Webkit", "Ms", "Moz", "O"];
      pO = Object.keys(pO).reduce(((e, t) => (mO.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), pO);
      var vO = /^(matrix|translate|scale|rotate|skew)/,
        yO = /^(translate)/,
        gO = /^(rotate|skew)/,
        bO = (e, t) => vC.num(e) && 0 !== e ? e + t : e,
        _O = (e, t) => vC.arr(e) ? e.every((e => _O(e, t))) : vC.num(e) ? e === t : parseFloat(e) === t,
        wO = class extends $x {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push((e => [`translate3d(${e.map((e=>bO(e,"px"))).join(",")})`, _O(e, 0)]))), bC(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (vO.test(t)) {
                if (delete n[t], vC.und(e)) return;
                const r = yO.test(t) ? "px" : gO.test(t) ? "deg" : "";
                o.push(_C(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${bO(o,r)})`, _O(o, 0)] : e => [`${t}(${e.map((e=>bO(e,r))).join(",")})`, _O(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new EO(o, i)), super(n)
          }
        },
        EO = class extends yx {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return gC(this.inputs, ((r, n) => {
              const o = px(r[0]),
                [i, a] = this.transforms[n](vC.arr(o) ? o : r.map(px));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && gC(this.inputs, (e => gC(e, (e => hx(e) && bx(e, this)))))
          }
          observerRemoved(e) {
            0 == e && gC(this.inputs, (e => gC(e, (e => hx(e) && _x(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), vx(this, e)
          }
        };
      pC.assign({
        batchedUpdates: Ht.unstable_batchedUpdates,
        createStringInterpolator: jx,
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
      var PO = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new $x(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = rT(e) || "Anonymous";
              return (e = vC.str(e) ? i[e] || (i[e] = Jx(e, o)) : e[tT] || (e[tT] = Jx(e, o))).displayName = `Animated(${t})`, e
            };
          return bC(e, ((t, r) => {
            vC.arr(e) && (r = rT(t)), i[r] = i(t)
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
              d = Object.keys(c).map((t => r || e.hasAttribute(t) ? t : hO[t] || (hO[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = fO(t, o[t]);
                dO.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, u[r])
            })), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new wO(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        SO = PO.animated,
        CO = r(91381),
        xO = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const r = (0, CO.createSlot)(`Primitive.${t}`),
            n = A.forwardRef(((e, n) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, g.jsx)(a, {
                ...i,
                ref: n
              })
            }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        TO = e => {
          const {
            present: t,
            children: r
          } = e, n = function(e) {
            const [t, r] = A.useState(), n = A.useRef(null), o = A.useRef(e), i = A.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = function(e, t) {
              return A.useReducer(((e, r) => t[e][r] ?? e), e)
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
            return A.useEffect((() => {
              const e = OO(n.current);
              i.current = "mounted" === s ? e : "none"
            }), [s]), (0, uv.N)((() => {
              const t = n.current,
                r = o.current;
              if (r !== e) {
                const n = i.current,
                  a = OO(t);
                l(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : r && n !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
              }
            }), [e, l]), (0, uv.N)((() => {
              if (t) {
                let e;
                const r = t.ownerDocument.defaultView ?? window,
                  a = i => {
                    const a = OO(n.current).includes(CSS.escape(i.animationName));
                    if (i.target === t && a && (l("ANIMATION_END"), !o.current)) {
                      const n = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = r.setTimeout((() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                      }))
                    }
                  },
                  s = e => {
                    e.target === t && (i.current = OO(n.current))
                  };
                return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
                  r.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
                }
              }
              l("ANIMATION_END")
            }), [t, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(s),
              ref: A.useCallback((e => {
                n.current = e ? getComputedStyle(e) : null, r(e)
              }), [])
            }
          }(t), o = "function" == typeof r ? r({
            present: n.isPresent
          }) : A.Children.only(r), i = (0, Df.s)(n.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = t && "isReactWarning" in t && t.isReactWarning;
            return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
          }(o));
          return "function" == typeof r || n.isPresent ? A.cloneElement(o, {
            ref: i
          }) : null
        };

      function OO(e) {
        return e?.animationName || "none"
      }

      function IO(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }
      TO.displayName = "Presence", "undefined" == typeof window || !window.document || window.document.createElement;
      var NO = "ScrollArea",
        [jO, kO] = (0, Hf.A)(NO),
        [RO, LO] = jO(NO),
        AO = A.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = A.useState(null), [c, u] = A.useState(null), [d, f] = A.useState(null), [h, p] = A.useState(null), [m, v] = A.useState(null), [y, b] = A.useState(0), [_, w] = A.useState(0), [E, P] = A.useState(!1), [S, C] = A.useState(!1), x = (0, Df.s)(t, (e => l(e))), T = (0, Vf.jH)(o);
          return (0, g.jsx)(RO, {
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
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: b,
            onCornerHeightChange: w,
            children: (0, g.jsx)(xO.div, {
              dir: T,
              ...a,
              ref: x,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": _ + "px",
                ...e.style
              }
            })
          })
        }));
      AO.displayName = NO;
      var MO = "ScrollAreaViewport",
        DO = A.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, a = LO(MO, r), s = A.useRef(null), l = (0, Df.s)(t, s, a.onViewportChange);
          return (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, g.jsx)(xO.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, g.jsx)("div", {
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
      DO.displayName = MO;
      var HO = "ScrollAreaScrollbar",
        BO = A.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = LO(HO, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return A.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, g.jsx)(VO, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, g.jsx)(zO, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, g.jsx)(FO, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, g.jsx)(qO, {
            ...n,
            ref: t
          }) : null
        }));
      BO.displayName = HO;
      var VO = A.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = LO(HO, e.__scopeScrollArea), [i, a] = A.useState(!1);
          return A.useEffect((() => {
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, g.jsx)(TO, {
            present: r || i,
            children: (0, g.jsx)(FO, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        zO = A.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = LO(HO, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = sI((() => l("SCROLL_END")), 100), [s, l] = (c = {
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
          }, A.useReducer(((e, t) => c[e][t] ?? e), "hidden"));
          var c;
          return A.useEffect((() => {
            if ("idle" === s) {
              const e = window.setTimeout((() => l("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [s, o.scrollHideDelay, l]), A.useEffect((() => {
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
          }), [o.viewport, i, l, a]), (0, g.jsx)(TO, {
            present: r || "hidden" !== s,
            children: (0, g.jsx)(qO, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: IO(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: IO(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        FO = A.forwardRef(((e, t) => {
          const r = LO(HO, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, a] = A.useState(!1),
            s = "horizontal" === e.orientation,
            l = sI((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return lI(r.viewport, l), lI(r.content, l), (0, g.jsx)(TO, {
            present: n || i,
            children: (0, g.jsx)(qO, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        qO = A.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = LO(HO, e.__scopeScrollArea), i = A.useRef(null), a = A.useRef(0), [s, l] = A.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = tI(s.viewport, s.content), u = {
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
              const o = rI(r),
                i = t || o / 2,
                a = o - i,
                s = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                c = r.content - r.viewport;
              return oI([s, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === r ? (0, g.jsx)(UO, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = nI(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, g.jsx)(GO, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = nI(o.viewport.scrollTop, s);
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
        UO = A.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = LO(HO, e.__scopeScrollArea), [a, s] = A.useState(), l = A.useRef(null), c = (0, Df.s)(t, l, i.onScrollbarXChange);
          return A.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, g.jsx)(WO, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": rI(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), iI(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: eI(a.paddingLeft),
                  paddingEnd: eI(a.paddingRight)
                }
              })
            }
          })
        })),
        GO = A.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = LO(HO, e.__scopeScrollArea), [a, s] = A.useState(), l = A.useRef(null), c = (0, Df.s)(t, l, i.onScrollbarYChange);
          return A.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, g.jsx)(WO, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": rI(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), iI(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: eI(a.paddingTop),
                  paddingEnd: eI(a.paddingBottom)
                }
              })
            }
          })
        })),
        [KO, XO] = jO(HO),
        WO = A.forwardRef(((e, t) => {
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
          } = e, h = LO(HO, r), [p, m] = A.useState(null), v = (0, Df.s)(t, (e => m(e))), y = A.useRef(null), b = A.useRef(""), _ = h.viewport, w = n.content - n.viewport, E = (0, cv.c)(u), P = (0, cv.c)(l), S = sI(d, 10);

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
          return A.useEffect((() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && E(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [_, p, w, E]), A.useEffect(P, [n, P]), lI(p, S), lI(h.content, S), (0, g.jsx)(KO, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, cv.c)(i),
            onThumbPointerUp: (0, cv.c)(a),
            onThumbPositionChange: P,
            onThumbPointerDown: (0, cv.c)(s),
            children: (0, g.jsx)(xO.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: IO(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(e))
              })),
              onPointerMove: IO(e.onPointerMove, C),
              onPointerUp: IO(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = b.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              }))
            })
          })
        })),
        $O = "ScrollAreaThumb",
        YO = A.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = XO($O, e.__scopeScrollArea);
          return (0, g.jsx)(TO, {
            present: r || o.hasThumb,
            children: (0, g.jsx)(ZO, {
              ref: t,
              ...n
            })
          })
        })),
        ZO = A.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = LO($O, r), a = XO($O, r), {
            onThumbPositionChange: s
          } = a, l = (0, Df.s)(t, (e => a.onThumbChange(e))), c = A.useRef(void 0), u = sI((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return A.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = aI(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, u, s]), (0, g.jsx)(xO.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: IO(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: IO(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      YO.displayName = $O;
      var QO = "ScrollAreaCorner";
      A.forwardRef(((e, t) => {
        const r = LO(QO, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, g.jsx)(JO, {
          ...e,
          ref: t
        }) : null
      })).displayName = QO;
      var JO = A.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = LO(QO, r), [i, a] = A.useState(0), [s, l] = A.useState(0), c = Boolean(i && s);
        return lI(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), lI(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), c ? (0, g.jsx)(xO.div, {
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

      function eI(e) {
        return e ? parseInt(e, 10) : 0
      }

      function tI(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function rI(e) {
        const t = tI(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function nI(e, t, r = "ltr") {
        const n = rI(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - n,
          l = Af(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return oI([0, a], [0, s])(l)
      }

      function oI(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function iI(e, t) {
        return e > 0 && e < t
      }
      var aI = (e, t = () => {}) => {
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

      function sI(e, t) {
        const r = (0, cv.c)(e),
          n = A.useRef(0);
        return A.useEffect((() => () => window.clearTimeout(n.current)), []), A.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function lI(e, t) {
        const r = (0, cv.c)(t);
        (0, uv.N)((() => {
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
      var cI = AO,
        uI = DO,
        dI = BO,
        fI = YO,
        hI = r(6630),
        pI = r(49336),
        mI = r(41423);

      function vI(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => mI.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, A.useState)((() => r ? n(e) : t));

        function a() {
          i(n(e))
        }
        return (0, A.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
            t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
          }
        }), [e]), o
      }

      function yI(...e) {
        const t = (0, A.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      const gI = () => vI("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function bI(e) {
        const t = (0, A.useRef)(e);
        return (0, A.useEffect)((() => {
          t.current = e
        })), (0, A.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      r(82949);
      const _I = () => {
          const e = vI(pI.breakpoints.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        wI = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function EI({
        dialogRef: e,
        dialogSpringRef: t,
        overlaySpringRef: r,
        onCloseTransitionStart: n,
        onCloseTransitionComplete: o
      }) {
        const i = wI(),
          a = _I(),
          s = (0, A.useRef)(),
          l = (qn(Un), ao({
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
                config: mT.stiff,
                onStart: n,
                onRest: o
              }), r.start({
                ...i(0),
                immediate: !1,
                config: mT.stiff
              })) : (t.start({
                ...a(100),
                immediate: !1,
                config: mT.stiff
              }), r.start({
                ...i(100),
                immediate: !1,
                config: mT.stiff
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

      function PI(e) {
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

      function SI(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function CI(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? SI(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = PI(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : SI(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function xI(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var TI = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        OI = "foundry_8kowh41",
        II = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = CI(CI({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) TI(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xI(e.variantClassNames, (e => xI(e, (e => e.split(" ")[0]))))
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
      const NI = (0, A.createContext)(null);

      function jI() {
        const e = (0, A.useContext)(NI);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const kI = (0, A.forwardRef)((({
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
          const d = (0, pI.mergeProps)({
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
                const r = (0, A.useState)(e),
                  [n] = r,
                  o = (0, A.useRef)(n),
                  i = bI(t);
                return (0, A.useEffect)((() => {
                  o.current !== n && (i(n), o.current = n)
                }), [n, o, i]), r
              }({
                defaultProp: t,
                onChange: r
              }), i = void 0 !== e, a = i ? e : n, s = bI(r), l = (0, A.useCallback)((t => {
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
              const t = (0, A.useRef)({
                  value: e,
                  prev: void 0
                }),
                r = t.current.value;
              return e !== r && (t.current = {
                value: e,
                prev: r
              }), t.current.prev
            }(f);
          return (0, g.jsx)(NI.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== o,
              openImmediately: !(void 0 !== p || !r),
              setIsOpen: h,
              onOpenTransitionStart: i,
              onOpenTransitionComplete: a,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: l,
              contentId: (0, A.useId)(),
              descriptionId: (0, A.useId)(),
              triggerRef: (0, A.useRef)(null),
              dialogSpringRef: oO(),
              overlaySpringRef: oO()
            },
            children: (0, g.jsx)(hI.Root, {
              ref: u,
              open: f,
              onOpenChange: h,
              ...d,
              children: e
            })
          })
        })),
        RI = (0, A.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isOpen: o,
            overlaySpringRef: i,
            openImmediately: a
          } = jI(), s = wI(), l = gI(), c = iO(o, {
            ref: i,
            delay: o ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: mT.stiff,
            immediate: l || a
          }), u = (0, pI.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n0"
          }, r), d = SO(hI.Overlay);
          return (0, A.useEffect)((() => {
            i.start()
          }), [o]), c(((t, r) => r ? (0, g.jsx)(d, {
            forceMount: !0,
            ref: n,
            ...u,
            style: t,
            children: e
          }) : null))
        })),
        LI = (0, A.forwardRef)((({
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
          } = jI(), y = function(e = !0) {
            const t = vI("screen and (pointer: coarse) and (hover: none)");
            return !!e && t
          }(), b = gI(), _ = (0, A.useRef)(null), w = _I(), {
            bindDrag: E
          } = EI({
            dialogRef: _,
            overlaySpringRef: v,
            dialogSpringRef: m,
            onCloseTransitionStart: () => {
              s(!1), h?.()
            },
            onCloseTransitionComplete: p
          }), P = iO(a, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: a ? 100 : 0,
            config: mT.stiff,
            ref: m,
            immediate: b || l,
            onStart: (e, t, r) => {
              r ? d?.() : h?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : p?.()
            }
          });
          (0, A.useEffect)((() => {
            m.start()
          }), [a]);
          const S = yI(_, i),
            C = y && !b && !n && E(),
            x = (0, pI.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: c
            }, C || {}, o),
            T = SO(hI.Content);
          return P(((t, r) => r ? (0, g.jsx)(T, {
            forceMount: !0,
            ref: S,
            ...x,
            style: t,
            children: e
          }) : null))
        })),
        AI = (0, A.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, pI.mergeProps)({
            "data-testid": t
          }, r);
          return (0, g.jsx)(hI.Portal, {
            forceMount: !0,
            ref: n,
            ...o,
            children: e
          })
        })),
        MI = (0, A.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, pI.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, g.jsx)(hI.Title, {
            ref: n,
            ...o,
            children: e
          })
        })),
        DI = (0, A.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, pI.mergeProps)({
            "data-testid": t
          }, r);
          return (0, g.jsx)(hI.Description, {
            ref: n,
            ...o,
            children: e
          })
        })),
        HI = (0, A.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, pI.mergeProps)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, r);
          return (0, g.jsxs)(cI, {
            ref: n,
            ...o,
            children: [(0, g.jsx)(uI, {
              className: "foundry_xov33ne",
              children: e
            }), (0, g.jsx)(dI, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, g.jsx)(fI, {
                className: "foundry_xov33ng"
              })
            })]
          })
        })),
        BI = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, pI.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n2"
            }, n),
            a = e ? pr.Slot : "div";
          return (0, g.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        VI = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, pI.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n3"
            }, n),
            a = e ? pr.Slot : "div";
          return (0, g.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        zI = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, pI.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n8"
            }, n),
            a = e ? pr.Slot : "header";
          return (0, g.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        FI = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, pI.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nc"
            }, n),
            a = e ? pr.Slot : "footer";
          return (0, g.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        qI = (0, A.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          align: n,
          ...o
        }, i) => {
          const a = (0, pI.mergeProps)({
              "data-testid": r,
              className: II({
                align: n
              })
            }, o),
            s = e ? pr.Slot : hI.Title;
          return (0, g.jsx)(s, {
            ref: i,
            ...a,
            children: t
          })
        })),
        UI = (0, A.forwardRef)((({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: a
          } = jI(), s = (0, pI.mergeProps)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && a(!1)
            }
          }, n);
          return (0, g.jsx)(hf, {
            ref: o,
            ...s,
            appearance: "ghost",
            icon: "X",
            size: "MD",
            children: e
          })
        })),
        GI = (0, A.forwardRef)(((e, t) => {
          const r = (0, pI.mergeProps)({
            className: "foundry_xov33n5"
          }, e);
          return (0, g.jsx)(hf, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "SM"
          })
        })),
        KI = (0, A.forwardRef)((({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: a
          } = jI(), s = (0, pI.mergeProps)({
            className: OI,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && a(!1)
            }
          }, n);
          return (0, g.jsx)(Fr, {
            ref: o,
            ...s,
            children: e
          })
        })),
        XI = (0, A.forwardRef)((({
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
          } = jI(), d = yI(u, i), f = (0, pI.mergeProps)({
            className: OI,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !a && s(!0)
            }
          }, o), h = e ? pr.Slot : hI.Trigger;
          return (0, g.jsx)(h, {
            ...f,
            ref: d,
            children: t
          })
        }))
    },
    16859: (e, t) => {
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
                case u:
                case d:
                case i:
                case s:
                case a:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
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
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = f, t.Fragment = i, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = h, t.isAsyncMode = function(e) {
        return E(e) || w(e) === u
      }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
        return w(e) === c
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
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === s || e === a || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || e.$$typeof === g || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === y)
      }, t.typeOf = w
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
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
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
          var a = u(r);
          d && (a = a.concat(d(r)));
          for (var s = l(t), m = l(r), v = 0; v < a.length; ++v) {
            var y = a[v];
            if (!(i[y] || n && n[y] || m && m[y] || s && s[y])) {
              var g = f(r, y);
              try {
                c(t, y, g)
              } catch (e) {}
            }
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
    88335: (e, t, r) => {
      e.exports = r(16859)
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