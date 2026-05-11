try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a5e747fc-b737-4dae-a4cf-ad288745e252", e._sentryDebugIdIdentifier = "sentry-dbid-a5e747fc-b737-4dae-a4cf-ad288745e252")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6777], {
    44622(e, t, r) {
      var n = r(71127),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        s = n.useState,
        i = n.useEffect,
        a = n.useLayoutEffect,
        l = n.useDebugValue;

      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r)
        } catch (e) {
          return !0
        }
      }
      var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
      } : function(e, t) {
        var r = t(),
          n = s({
            inst: {
              value: r,
              getSnapshot: t
            }
          }),
          o = n[0].inst,
          u = n[1];
        return a(function() {
          o.value = r, o.getSnapshot = t, c(o) && u({
            inst: o
          })
        }, [e, r, t]), i(function() {
          return c(o) && u({
            inst: o
          }), e(function() {
            c(o) && u({
              inst: o
            })
          })
        }, [e]), l(r), r
      };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : u
    },
    36553(e, t, r) {
      e.exports = r(44622)
    },
    76777(e, t, r) {
      r.r(t), r.d(t, {
        Alert: () => h,
        AlertBanner: () => p,
        Avatar: () => w,
        Badge: () => g,
        Body: () => st,
        Breadcrumbs: () => y,
        Button: () => Ee,
        Checkbox: () => l,
        ChipGroup: () => E,
        Code: () => at,
        Dialog: () => _,
        Display: () => lt,
        Divider: () => ze,
        Dropdown: () => s,
        Heading: () => ut,
        IconButton: () => ke,
        Label: () => ft,
        Lightbox: () => o,
        Loader: () => Ye,
        Pagination: () => x,
        Popover: () => C,
        RadioGroup: () => d,
        ScrollArea: () => b,
        Spinner: () => ue,
        Switch: () => i,
        Tag: () => m,
        Text: () => mt,
        TextArea: () => c,
        TextField: () => f,
        TextSemantics: () => pt,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => lf,
        Content: () => af,
        Portal: () => cf,
        Root: () => of,
        Trigger: () => sf,
        useTooltipContext: () => nf
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => ih,
        Close: () => dh,
        Content: () => th,
        Controls: () => ah,
        CssVars: () => ph,
        Download: () => hh,
        Image: () => sh,
        Keyboard: () => ch,
        LightboxContext: () => Xf,
        OpenIcon: () => Qf,
        Overlay: () => eh,
        Portal: () => Jf,
        Reset: () => fh,
        Root: () => Kf,
        RootImplContext: () => Wf,
        Thumbnail: () => Yf,
        Trigger: () => $f,
        Zoom: () => uh,
        ZoomPan: () => rh
      });
      var s = {};
      r.r(s), r.d(s, {
        Content: () => Qm,
        Description: () => ov,
        Hint: () => sv,
        Label: () => nv,
        Option: () => iv,
        OptionIcon: () => lv,
        OptionText: () => av,
        Portal: () => cv,
        Root: () => Ym,
        ScrollArea: () => Jm,
        StatusIcon: () => dv,
        StatusRoot: () => uv,
        StatusText: () => fv,
        Trigger: () => ev,
        TriggerIcon: () => rv,
        TriggerText: () => tv,
        useDropdownContext: () => $m
      });
      var i = {};
      r.r(i), r.d(i, {
        Description: () => zv,
        Input: () => Bv,
        Label: () => Hv,
        Root: () => Mv,
        useSwitchContext: () => Av
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => ty,
        CheckMD: () => ey,
        CheckXL: () => ry,
        DashLG: () => oy,
        DashMD: () => ny,
        DashXL: () => sy
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Ey,
        ErrorText: () => Cy,
        Group: () => Oy,
        GroupDescription: () => jy,
        GroupErrorText: () => Ry,
        GroupItems: () => Ny,
        GroupLabel: () => Ty,
        Input: () => wy,
        Label: () => xy,
        Root: () => _y,
        useGroupContext: () => Sy
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => Ky,
        Hint: () => Wy,
        Input: () => Xy,
        Label: () => qy,
        Root: () => Uy,
        RootContext: () => Fy,
        StatusIcon: () => $y,
        StatusRoot: () => Zy,
        StatusText: () => Yy,
        useTextAreaContext: () => Gy
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => Wg,
        DotMD: () => Kg,
        DotXL: () => Zg
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => Hg,
        Input: () => Yg,
        Label: () => Bg,
        Option: () => $g,
        OptionDescription: () => Jg,
        OptionLabel: () => Qg,
        Options: () => Mg,
        Root: () => Ag,
        StatusIcon: () => Vg,
        StatusRoot: () => zg,
        StatusText: () => Fg,
        useRadioGroupContext: () => Lg
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => r_,
        Control: () => Jb,
        Description: () => o_,
        Hint: () => Qb,
        Icon: () => t_,
        Input: () => e_,
        Label: () => Yb,
        PasswordButton: () => n_,
        Root: () => $b,
        StatusIcon: () => i_,
        StatusRoot: () => s_,
        StatusText: () => a_
      });
      var h = {};
      r.r(h), r.d(h, {
        Body: () => R_,
        CloseButton: () => H_,
        Description: () => L_,
        ErrorText: () => B_,
        Footer: () => M_,
        Header: () => N_,
        Icon: () => k_,
        Link: () => A_,
        Root: () => j_,
        RootContext: () => O_,
        Title: () => D_,
        iconStatusMap: () => I_,
        useAlertContext: () => T_
      });
      var p = {};
      r.r(p), r.d(p, {
        Alert: () => zw,
        CloseButton: () => Gw,
        Description: () => Hw,
        Icon: () => Bw,
        Link: () => Fw,
        PaginationCounter: () => Kw,
        PaginationNav: () => Uw,
        PaginationNextButton: () => qw,
        PaginationPrevButton: () => Xw,
        PaginationViewport: () => Vw,
        Root: () => Aw,
        RootContext: () => Dw,
        iconStatusMap: () => Mw,
        useAlertBannerContext: () => Lw
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => lx,
        Icon: () => ax,
        Label: () => ix,
        Root: () => sx,
        RootContext: () => nx,
        useTagContext: () => ox
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => pE,
        CloseButton: () => mE,
        Description: () => dE,
        Icon: () => hE,
        Provider: () => iE,
        Root: () => uE,
        RootContext: () => lE,
        Viewport: () => aE,
        iconAppearanceMap: () => fE,
        useToastContext: () => cE
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => jE,
        Item: () => TE,
        OverflowMenu: () => NE,
        OverflowMenuItem: () => RE,
        Root: () => OE,
        RootContext: () => SE,
        useBreadcrumbsContext: () => PE
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => FE,
        Label: () => VE,
        Root: () => zE,
        useBadgeContext: () => HE
      });
      var b = {};
      r.r(b), r.d(b, {
        Corner: () => hC,
        Root: () => cC,
        Scrollbar: () => dC,
        Thumb: () => fC,
        Viewport: () => uC
      });
      var _ = {};
      r.r(_), r.d(_, {
        ActionArea: () => BC,
        Button: () => HC,
        CloseButton: () => AC,
        Content: () => jC,
        Description: () => RC,
        Footer: () => zC,
        Header: () => DC,
        HeaderButton: () => MC,
        HeaderTitle: () => LC,
        Layout: () => kC,
        Overlay: () => TC,
        Portal: () => FC,
        Root: () => OC,
        ScrollArea: () => IC,
        Title: () => NC,
        Trigger: () => VC,
        useDialogContext: () => SC
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => EP,
        Root: () => xP,
        StatusIndicator: () => CP,
        useAvatarContext: () => wP
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => MP,
        Dropdown: () => FP,
        DropdownLabel: () => VP,
        Ellipsis: () => AP,
        Item: () => kP,
        Label: () => UP,
        Next: () => LP,
        Option: () => GP,
        Pages: () => IP,
        Prev: () => DP,
        ResultsPerPage: () => zP,
        Root: () => RP
      });
      var E = {};
      r.r(E), r.d(E, {
        Icon: () => XS,
        Item: () => qS,
        Label: () => WS,
        Root: () => US,
        StatusIndicator: () => KS,
        useChipGroupContext: () => GS
      });
      var C = {};
      r.r(C), r.d(C, {
        Anchor: () => QO,
        Arrow: () => eT,
        Close: () => rT,
        Content: () => JO,
        Portal: () => tT,
        Root: () => WO,
        RootContext: () => KO,
        Trigger: () => ZO,
        TriggerButton: () => YO
      });
      var P = r(42295);

      function S(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class O extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var T = O;

      function j(e) {
        if ("string" != typeof e) throw new T(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = M.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = R[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new T(e);
          return `#${r}`
        }(e) : e;
        const r = k.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(I(e, 2), 16)), parseInt(I(e[3] || "f", 2), 16) / 255]
        }
        const n = D.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = L.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const s = A.exec(t);
        if (s) {
          const [t, r, n, o] = Array.from(s).slice(1).map(parseFloat);
          if (S(0, 100, r) !== r) throw new T(e);
          if (S(0, 100, n) !== n) throw new T(e);
          return [...H(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new T(e)
      }
      const N = e => parseInt(e.replace(/_/g, ""), 36),
        R = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = N(t.substring(0, 3)),
            n = N(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        I = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        k = new RegExp(`^#${I("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        D = new RegExp(`^#${I("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        L = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${I(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        A = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        M = /^[a-z]+$/i,
        B = e => Math.round(255 * e),
        H = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(B);
          const o = (e % 360 + 360) % 360 / 60,
            s = (1 - Math.abs(2 * n - 1)) * (t / 100),
            i = s * (1 - Math.abs(o % 2 - 1));
          let a = 0,
            l = 0,
            c = 0;
          o >= 0 && o < 1 ? (a = s, l = i) : o >= 1 && o < 2 ? (a = i, l = s) : o >= 2 && o < 3 ? (l = s, c = i) : o >= 3 && o < 4 ? (l = i, c = s) : o >= 4 && o < 5 ? (a = i, c = s) : o >= 5 && o < 6 && (a = s, c = i);
          const u = n - s / 2;
          return [a + u, l + u, c + u].map(B)
        };

      function z(e, t) {
        const [r, n, o, s] = function(e) {
          const [t, r, n, o] = j(e).map((e, t) => 3 === t ? e : e / 255), s = Math.max(t, r, n), i = Math.min(t, r, n), a = (s + i) / 2;
          if (s === i) return [0, 0, a, o];
          const l = s - i;
          return [60 * (t === s ? (r - n) / l + (r < n ? 6 : 0) : r === s ? (n - t) / l + 2 : (t - r) / l + 4), a > .5 ? l / (2 - s - i) : l / (s + i), a, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${S(0,100,100*t).toFixed()}%, ${S(0,100,100*r).toFixed()}%, ${parseFloat(S(0,1,n).toFixed(3))})`
        }(r, n, o - t, s)
      }

      function V(e, t) {
        return z(e, -t)
      }
      var F = r(71127),
        G = r(93715),
        U = r(57461),
        q = r(75523);
      const X = {
          enabled: {
            background: (0, G.Tm)(U.no.enabled.background),
            border: (0, G.Tm)(U.no.enabled.border),
            text: (0, G.Tm)(U.no.enabled.text),
            outline: (0, G.Tm)(U.no.enabled.outline)
          },
          hover: {
            background: (0, G.Tm)(U.no.hover.background),
            border: (0, G.Tm)(U.no.hover.border),
            text: (0, G.Tm)(U.no.hover.text),
            outline: (0, G.Tm)(U.no.hover.outline)
          },
          focus: {
            background: (0, G.Tm)(U.no.focus.background),
            border: (0, G.Tm)(U.no.focus.border),
            text: (0, G.Tm)(U.no.focus.text),
            outline: (0, G.Tm)(U.no.focus.outline)
          },
          pressed: {
            background: (0, G.Tm)(U.no.pressed.background),
            border: (0, G.Tm)(U.no.pressed.border),
            text: (0, G.Tm)(U.no.pressed.text),
            outline: (0, G.Tm)(U.no.pressed.outline)
          },
          disabled: {
            background: (0, G.Tm)(U.no.disabled.background),
            border: (0, G.Tm)(U.no.disabled.border),
            text: (0, G.Tm)(U.no.disabled.text),
            outline: (0, G.Tm)(U.no.disabled.outline)
          },
          loading: {
            background: (0, G.Tm)(U.no.loading.background),
            border: (0, G.Tm)(U.no.loading.border),
            text: (0, G.Tm)(U.no.loading.text),
            outline: (0, G.Tm)(U.no.loading.outline)
          }
        },
        K = ({
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
            backgroundColor: s,
            hoverColor: i,
            pressedColor: a,
            textColor: l
          },
          enabled: c = !1
        }, u = []) => {
          (0, F.useEffect)(() => {
            if (!e.current || !s || !c) return;
            const u = `${s}:${t}:${r}`,
              {
                text: d,
                hover: f,
                pressed: h
              } = (0, q.IO)(u, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = j(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(s);
                return {
                  text: l || (e > t ? G.LU.global.color.black.static[100] : G.LU.global.color.white.static[100]),
                  hover: i || (e >= r ? z(s, n) : V(s, n)),
                  pressed: a || (e >= r ? z(s, o) : V(s, o))
                }
              });
            return e.current.style.setProperty(X.enabled.background, s), e.current.style.setProperty(X.enabled.border, s), e.current.style.setProperty(X.enabled.text, d), e.current.style.setProperty(X.hover.background, f), e.current.style.setProperty(X.hover.border, f), e.current.style.setProperty(X.hover.text, d), e.current.style.setProperty(X.focus.background, f), e.current.style.setProperty(X.focus.border, f), e.current.style.setProperty(X.focus.text, d), e.current.style.setProperty(X.pressed.background, h), e.current.style.setProperty(X.pressed.border, h), e.current.style.setProperty(X.pressed.text, d), e.current.style.setProperty(X.loading.background, f), e.current.style.setProperty(X.loading.border, f), e.current.style.setProperty(X.loading.text, d), () => {
              e.current?.style.removeProperty(X.enabled.background), e.current?.style.removeProperty(X.enabled.border), e.current?.style.removeProperty(X.enabled.text), e.current?.style.removeProperty(X.hover.background), e.current?.style.removeProperty(X.hover.border), e.current?.style.removeProperty(X.hover.text), e.current?.style.removeProperty(X.focus.background), e.current?.style.removeProperty(X.focus.border), e.current?.style.removeProperty(X.focus.text), e.current?.style.removeProperty(X.pressed.background), e.current?.style.removeProperty(X.pressed.border), e.current?.style.removeProperty(X.pressed.text), e.current?.style.removeProperty(X.loading.background), e.current?.style.removeProperty(X.loading.border), e.current?.style.removeProperty(X.loading.text)
            }
          }, [e.current, t, r, n, o, s, i, a, l, c, ...u])
        };
      var W = r(46219),
        Z = r(32067);
      r(10357);
      const $ = (0, F.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        Y = () => (0, F.useContext)($),
        Q = () => {
          const {
            platformScale: e
          } = Y();
          return e
        };
      var J = r(86825);
      const ee = e => "dark" === e ? J.xW.dark : J.xW.light;
      const te = () => q.X3 ? null : document.body;
      (0, F.forwardRef)(({
        children: e,
        className: t,
        container: r = te(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: s,
        defaultPlatformScale: i,
        platformScale: a,
        onPlatformScaleChange: l,
        locale: c = "en-US"
      }, u) => {
        const d = (0, F.useRef)(null),
          f = (0, W.UP)(d, u),
          h = (0, F.useRef)(r),
          {
            ratio: p,
            scale: m
          } = function(e) {
            const [t, r] = (0, F.useState)(e.platformScale || e.defaultPlatformScale), n = (0, F.useCallback)(t => {
              r(t), e.onPlatformScaleChange?.(t)
            }, [e.onPlatformScaleChange]), o = (0, F.useRef)([]), s = () => {
              if (!q.X3) {
                for (const {
                    handler: e,
                    matchMedia: t
                  }
                  of o.current) t.removeEventListener("change", e);
                o.current = []
              }
            };
            return (0, F.useEffect)(() => (e.platformScale ? n(e.platformScale) : (() => {
              if (!q.X3) {
                s();
                for (const e in J.wj) {
                  const t = window.matchMedia(J.wj[e]),
                    r = t => {
                      t.matches && n(e)
                    };
                  t.addEventListener("change", r), t.matches && n(e), o.current.push({
                    handler: r,
                    matchMedia: t
                  })
                }
              }
            })(), s), [e.platformScale, n]), {
              scale: t,
              ratio: J.nz[t]
            }
          }({
            onPlatformScaleChange: l,
            defaultPlatformScale: i,
            platformScale: a
          }),
          {
            appearanceClass: v,
            otherAppearanceClasses: y,
            providerColor: g
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark"
          }) {
            const r = (0, W.Ub)("(prefers-color-scheme: light)"),
              n = (0, W.Ub)("(prefers-color-scheme: dark)"),
              o = "system" !== e && e || r && "light" || n && "dark" || t,
              s = (0, F.useMemo)(() => ee(o), [o]),
              i = (0, F.useMemo)(() => (e => {
                const t = ee(e);
                return [J.xW.light, J.xW.dark].filter(e => e !== t)
              })(o), [o]);
            return {
              appearanceClass: s,
              otherAppearanceClasses: i,
              providerColor: o
            }
          }({
            colorScheme: o,
            defaultColorScheme: s
          });
        return (({
          container: e,
          currentScale: t,
          appearanceClass: r,
          otherAppearanceClasses: n,
          locale: o,
          className: s
        }) => {
          const i = (0, W.ZC)(s),
            a = (0, W.ZC)(e.current);
          (0, F.useEffect)(() => {
            e.current?.classList.contains(J.X6) || e.current?.classList.add(J.X6), e.current?.classList.contains(J.yU) || e.current?.classList.add(J.yU), e.current?.classList.contains(J.Np) || e.current?.classList.add(J.Np), e.current?.classList.add(r), e.current?.classList.remove(...n), i && s && e.current?.classList.contains(i) ? e.current?.classList.replace(i, s) : i && !s && e.current?.classList.contains(i) ? e.current?.classList.remove(i) : s && e.current?.classList.add(s)
          }, [r, s]), (0, F.useEffect)(() => {
            e.current?.setAttribute("lang", o)
          }, [o]), (0, F.useEffect)(() => (t && e.current?.style.setProperty(J.HZ, t.toString()), () => {
            e.current?.style.removeProperty(J.HZ)
          }), [t]), (0, F.useEffect)(() => {
            a?.classList.remove(J.X6), a?.classList.remove(J.yU), a?.classList.remove(r), a?.style.removeProperty(J.HZ), s && a?.classList.remove(s)
          }, [a])
        })({
          locale: c,
          className: t,
          appearanceClass: v,
          otherAppearanceClasses: y,
          currentScale: a ? p : -0,
          container: n ? d : h
        }), (0, P.jsx)($.Provider, {
          value: {
            locale: c,
            defaultColorScheme: s,
            colorScheme: g,
            defaultPlatformScale: i,
            platformScale: m
          },
          children: n ? (0, P.jsx)(Z.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var re = r(71753);

      function ne(e) {
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

      function oe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? oe(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ne(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oe(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ie(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ae = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        le = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = se(se({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ae(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ie(e.variantClassNames, e => ie(e, e => e.split(" ")[0]))
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
      const ce = "pageMD",
        ue = (0, F.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = ce,
          testId: n,
          ...o
        }, s) => {
          const i = Q(),
            a = "string" == typeof r ? r : r?.[i] ?? r.default ?? ce,
            l = (0, q.v6)({
              className: le({
                size: a
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, P.jsx)(re.b, {
            label: e,
            children: (0, P.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: s,
              viewBox: "0 0 16 16",
              children: [!t && (0, P.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, P.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var de = r(1556),
        fe = r(67774);

      function he(e) {
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

      function pe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pe(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = he(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pe(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ve(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ye = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ge = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = me(me({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ye(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ve(e.variantClassNames, e => ve(e, e => e.split(" ")[0]))
            }
          }, t
        },
        be = ge({
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
              appearance: "link"
            }, "foundry_17pcofyp"],
            [{
              size: "MD",
              appearance: "link"
            }, "foundry_17pcofyq"],
            [{
              size: "LG",
              appearance: "link"
            }, "foundry_17pcofyr"]
          ]
        });
      ge({
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
      var _e = ge({
          defaultClassName: "foundry_17pcofyw",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofyx",
              MD: "foundry_17pcofyy",
              LG: "foundry_17pcofyz"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        we = ge({
          defaultClassName: "foundry_17pcofy11",
          variantClassNames: {
            fullWidth: {
              true: "foundry_17pcofy12",
              false: "foundry_17pcofy13"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xe = ge({
          defaultClassName: "foundry_17pcofy16",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofy17",
              MD: "foundry_17pcofy18",
              LG: "foundry_17pcofy19"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ee = (0, F.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: s,
        iconRightLabel: i,
        appearance: a,
        size: l = "MD",
        fullWidth: c = !1,
        isLoading: u = !1,
        spinnerLabel: d,
        preventFocusOnPress: f = !1,
        override_darkenLuminance: h = .035,
        override_textLuminance: p = .179,
        override_hoverLuminance: m = .08,
        override_pressedLuminance: v = .15,
        override_backgroundColor: y,
        override_hoverColor: g,
        override_pressedColor: b,
        override_textColor: _,
        ...w
      }, x) => {
        const E = (0, F.useRef)(null),
          C = (0, W.UP)(E, x),
          S = Q(),
          O = "string" == typeof l ? l : l?.[S] ?? l.default ?? "MD",
          {
            buttonProps: T
          } = (0, W.sL)((0, q.v6)(w, {
            isLoading: u,
            preventFocusOnPress: f
          }), E);
        K({
          refs: {
            buttonRef: E
          },
          config: {
            textLuminance: p,
            darkenLuminance: h,
            hoverLuminance: m,
            pressedLuminance: v
          },
          overrides: {
            backgroundColor: y,
            hoverColor: g,
            pressedColor: b,
            textColor: _
          },
          enabled: "accent" === a
        }, [t]);
        const j = (0, q.v6)({
            className: be({
              appearance: a,
              size: O,
              fullWidth: c,
              iconLeft: !!n,
              iconRight: !!s
            }),
            "data-testid": e
          }, T),
          N = n && fe[n],
          R = s && fe[s],
          I = t ? Z.DX : "button",
          k = c && (R || R && N);
        return (0, P.jsxs)(I, {
          ref: C,
          ...j,
          children: [k && (0, P.jsx)("div", {
            className: "foundry_17pcofy14"
          }), N && (0, P.jsx)(N, {
            label: o || "",
            size: O,
            className: (0, de.clsx)(_e({
              size: O
            }), "foundry_17pcofy10")
          }), (0, P.jsx)(Z.xV, {
            children: r
          }), R && (0, P.jsx)(R, {
            label: i || "",
            size: O,
            className: (0, de.clsx)(_e({
              size: O
            }), we({
              fullWidth: c
            }))
          }), u && (0, P.jsx)("div", {
            className: "foundry_17pcofy15",
            children: (0, P.jsx)(ue, {
              label: d || "",
              size: "inline" + ("LG" === O ? "LG" : "MD"),
              hideTrack: !0,
              className: xe({
                size: O
              })
            })
          })]
        })
      });

      function Ce(e) {
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

      function Pe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pe(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ce(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pe(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Oe(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Te = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        je = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Se(Se({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Te(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Oe(e.variantClassNames, e => Oe(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ne = je({
          defaultClassName: "foundry_a5x3khf",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khg",
              MD: "foundry_a5x3khh",
              LG: "foundry_a5x3khi",
              XL: "foundry_a5x3khj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Re = je({
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
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ie = je({
          defaultClassName: "foundry_a5x3khl",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khm",
              MD: "foundry_a5x3khn",
              LG: "foundry_a5x3kho",
              XL: "foundry_a5x3khp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ke = (0, F.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: s = !1,
        size: i = "LG",
        children: a,
        isLoading: l = !1,
        spinnerLabel: c,
        preventFocusOnPress: u = !1,
        override_darkenLuminance: d = .035,
        override_textLuminance: f = .179,
        override_hoverLuminance: h = .08,
        override_pressedLuminance: p = .15,
        override_backgroundColor: m,
        override_hoverColor: v,
        override_pressedColor: y,
        override_textColor: g,
        ...b
      }, _) => {
        const w = (0, F.useRef)(null),
          x = (0, W.UP)(w, _),
          E = Q(),
          C = "string" == typeof i ? i : i?.[E] ?? i.default ?? "LG",
          {
            buttonProps: S
          } = (0, W.sL)((0, q.v6)(b, {
            isLoading: l,
            preventFocusOnPress: u
          }), w);
        K({
          refs: {
            buttonRef: w
          },
          config: {
            textLuminance: f,
            darkenLuminance: d,
            hoverLuminance: h,
            pressedLuminance: p
          },
          overrides: {
            backgroundColor: m,
            hoverColor: v,
            pressedColor: y,
            textColor: g
          },
          enabled: "accent" === o
        }, [t]);
        const O = (0, q.v6)({
            className: Re({
              appearance: o,
              size: C,
              fullWidth: s
            }),
            "data-testid": e
          }, S),
          T = fe[r],
          j = t ? Z.DX : "button";
        return (0, P.jsxs)(j, {
          ref: x,
          ...O,
          children: [T && (0, P.jsx)(T, {
            label: n || "",
            size: C,
            className: Ne({
              size: C
            })
          }), (0, P.jsx)(Z.xV, {
            children: a
          }), l && (0, P.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, P.jsx)(ue, {
              label: c || "",
              size: C && "SM" !== C ? `inline${C}` : "inlineMD",
              hideTrack: !0,
              className: Ie({
                size: C
              })
            })
          })]
        })
      });

      function De(e) {
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

      function Le(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Le(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = De(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Le(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Me(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Be = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        He = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ae(Ae({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Be(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Me(e.variantClassNames, e => Me(e, e => e.split(" ")[0]))
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
      const ze = (0, F.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: s,
        ...i
      }, a) => {
        const l = "horizontal" !== t || n ? "div" : "hr",
          c = n || "hr" === l ? void 0 : "separator",
          u = o ? Z.DX : l;
        return (0, P.jsx)(u, {
          ref: a,
          className: (0, de.clsx)(He({
            thickness: r,
            orientation: t
          }), e),
          role: c,
          "aria-orientation": t,
          "data-testid": s,
          ...i
        })
      });

      function Ve(e) {
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

      function Fe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fe(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ve(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fe(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ue(e, t) {
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
        Xe = "var(--foundry_9dxgbc2)",
        Ke = "var(--foundry_9dxgbc3)",
        We = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ge(Ge({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
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
              return Ue(e.variantClassNames, e => Ue(e, e => e.split(" ")[0]))
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
        Ze = "var(--foundry_9dxgbc0)",
        $e = "var(--foundry_9dxgbc1)";
      const Ye = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: s = "MD",
        ...i
      }, a) => {
        const l = Q(),
          c = "string" == typeof s ? s : s?.[l] ?? s.default ?? "MD",
          u = (0, q.v6)({
            className: We({
              size: c
            }),
            "data-testid": t,
            style: (0, G.DI)({
              [Ze]: n?.pulseColorBackground,
              [$e]: n?.pulseColorForeground,
              [Xe]: n?.gradientColorBackground,
              [Ke]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, i),
          d = e ? Z.DX : "div";
        return (0, P.jsx)(d, {
          ref: a,
          ...u,
          children: e ? (0, P.jsx)(Z.xV, {
            children: r
          }) : (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, P.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function Qe(e) {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Qe(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) rt(c, n, e.defaultVariants) && (r += " " + u);
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
      const st = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const i = e ? Z.DX : "p",
          a = (0, q.v6)({
            className: ot({
              size: n,
              appearance: r
            })
          }, o);
        return (0, P.jsx)(i, {
          ref: s,
          "data-testid": t,
          ...a
        })
      });
      var it = nt({
        defaultClassName: "foundry_ujgffp0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcds foundry_tdsdcd0 foundry_tdsdcdu",
            bold: "foundry_tdsdcds foundry_tdsdcd0 foundry_tdsdcdv"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const at = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const s = e ? Z.DX : "p",
            i = (0, q.v6)({
              className: it({
                appearance: r
              })
            }, n);
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...i
          })
        }),
        lt = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "h1",
            s = (0, q.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        });
      var ct = nt({
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
      const ut = (0, F.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? Z.DX : `h${t}`,
          i = (0, q.v6)(n, {
            className: ct({
              level: t
            })
          });
        return (0, P.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...i
        })
      });
      var dt = nt({
        defaultClassName: "foundry_370tab0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
            MD: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm",
            SM: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn",
            XS: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdo",
            XXS: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdp"
          },
          appearance: {
            default: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq",
            bold: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdr"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const ft = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const i = e ? Z.DX : "p",
          a = (0, q.v6)({
            className: dt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, P.jsx)(i, {
          ref: s,
          "data-testid": t,
          ...a
        })
      });
      var ht = nt({
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
      const pt = {
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
        mt = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const s = e ? Z.DX : pt[r] || "span",
            i = (0, q.v6)(n, {
              className: ht({
                semantic: r
              })
            });
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...i
          })
        });
      var vt = r(31142),
        yt = r(83791);
      const gt = {
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

      function bt(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function _t(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -bt(t - e, r - t, n) + t : e > r ? +bt(e - r, r - t, n) + r : e
      }

      function wt(e, t, r) {
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

      function xt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Et(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xt(Object(r), !0).forEach(function(t) {
            wt(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const Ct = {
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

      function Pt(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const St = ["enter", "leave"];
      const Ot = ["gotpointercapture", "lostpointercapture"];

      function Tt(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = Ot.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function jt(e) {
        return "touches" in e
      }

      function Nt(e) {
        return jt(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Rt(e) {
        return jt(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function It(e, t) {
        try {
          const r = t.clientX - e.clientX,
            n = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            s = (t.clientY + e.clientY) / 2,
            i = Math.hypot(r, n);
          return {
            angle: -180 * Math.atan2(r, n) / Math.PI,
            distance: i,
            origin: [o, s]
          }
        } catch (e) {}
        return null
      }

      function kt(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return It(r, n)
      }

      function Dt(e) {
        const t = Rt(e);
        return jt(e) ? t.identifier : t.pointerId
      }

      function Lt(e) {
        const t = Rt(e);
        return [t.clientX, t.clientY]
      }

      function At(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function Mt(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Bt() {}

      function Ht(...e) {
        return 0 === e.length ? Bt : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function zt(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Vt {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Mt(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
                  ctrlKey: s
                } = e;
                Object.assign(t, {
                  shiftKey: r,
                  altKey: n,
                  metaKey: o,
                  ctrlKey: s
                })
              }
              return t
            }(e)), n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            gt.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [s, i] = t._movement, [a, l] = r.threshold, {
            _step: c,
            values: u
          } = t;
          if (r.hasCustomTransform ? (!1 === c[0] && (c[0] = Math.abs(s) >= a && u[0]), !1 === c[1] && (c[1] = Math.abs(i) >= l && u[1])) : (!1 === c[0] && (c[0] = Math.abs(s) >= a && Math.sign(s) * a), !1 === c[1] && (c[1] = Math.abs(i) >= l && Math.sign(i) * l)), t.intentional = !1 !== c[0] || !1 !== c[1], !t.intentional) return;
          const d = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== c[0] ? e - c[0] : 0, d[1] = !1 !== c[1] ? t - c[1] : 0
          } else d[0] = !1 !== c[0] ? s - c[0] : 0, d[1] = !1 !== c[1] ? i - c[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Mt(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [p < v ? -1 : p > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [s, i],
                [a, l]
              ] = e;
              return [_t(t, s, i, n), _t(r, a, l, o)]
            }(t._bounds, t.offset, _), t.delta = gt.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = gt.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            gt.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(Et(Et(Et({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Ft extends Vt {
        constructor(...e) {
          super(...e), wt(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = gt.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = gt.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Nt(e)] : r.axisThreshold;
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
      const Gt = e => e,
        Ut = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => Et(Et({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return gt.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? gt.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Gt
          },
          threshold: e => gt.toVector(e, 0)
        },
        qt = Et(Et({}, Ut), {}, {
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
        Xt = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Kt = "undefined" != typeof window && window.document && window.document.createElement;

      function Wt() {
        return Kt && "ontouchstart" in window
      }
      const Zt = {
          isBrowser: Kt,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Wt(),
          touchscreen: Wt() || Kt && window.navigator.maxTouchPoints > 1,
          pointer: Kt && "onpointerdown" in window,
          pointerLock: Kt && "exitPointerLock" in window.document
        },
        $t = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Yt = Et(Et({}, qt), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Zt.pointerLock, Zt.touch && r ? "touch" : this.pointerLock ? "mouse" : Zt.pointer && !o ? "pointer" : Zt.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Zt.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const s = gt.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, s
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(gt.toVector(e)),
              distance: this.transform(gt.toVector(t)),
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
          axisThreshold: e => e ? Et(Et({}, $t), e) : $t,
          keyboardDisplacement: (e = 10) => e
        });

      function Qt(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [s, i] = e._direction;
        (t < 0 && n > 0 && s < 0 || t > 0 && n < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && i < 0 || r > 0 && o < 0 && i > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Jt = Et(Et({}, Ut), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Zt.touch && Zt.gesture) return "gesture";
            if (Zt.touch && n) return "touch";
            if (Zt.touchscreen) {
              if (Zt.pointer) return "pointer";
              if (Zt.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = zt(Mt(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              s = e => {
                const t = zt(Mt(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), s()] : e => [o(e), s(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, gt.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        er = Et(Et({}, qt), {}, {
          mouseOnly: (e = !0) => e
        }),
        tr = qt,
        rr = qt,
        nr = Et(Et({}, qt), {}, {
          mouseOnly: (e = !0) => e
        }),
        or = new Map,
        sr = new Map;

      function ir(e) {
        or.set(e.key, e.engine), sr.set(e.key, e.resolver)
      }
      const ar = {
          key: "drag",
          engine: class extends Ft {
            constructor(...e) {
              super(...e), wt(this, "ingKey", "dragging")
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Dt(e), r._pointerActive = !0, this.computeValues(Lt(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Nt(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Dt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Lt(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = gt.sub(o, t._values), this.computeValues(o)), gt.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = Dt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, s] = t._distance;
              if (t.tap = o <= r.tapsThreshold && s <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, s] = t._movement, [i, a] = r.swipe.velocity, [l, c] = r.swipe.distance, u = r.swipe.duration;
                if (t.elapsedTime < u) {
                  const r = Math.abs(e / t.timeDelta),
                    u = Math.abs(n / t.timeDelta);
                  r > i && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > a && Math.abs(s) > c && (t.swipe[1] = Math.sign(n))
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
              const t = Xt[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, gt.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Xt && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Yt
        },
        lr = {
          key: "hover",
          engine: class extends Ft {
            constructor(...e) {
              super(...e), wt(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Lt(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Lt(e);
              t._movement = t._delta = gt.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: nr
        },
        cr = {
          key: "move",
          engine: class extends Ft {
            constructor(...e) {
              super(...e), wt(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Lt(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Lt(e),
                r = this.state;
              r._delta = gt.sub(t, r._values), gt.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: er
        },
        ur = {
          key: "pinch",
          engine: class extends Vt {
            constructor(...e) {
              super(...e), wt(this, "ingKey", "pinching"), wt(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? gt.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = kt(e, t._touchIds);
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
              const o = It(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = kt(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = It(...Array.from(t.values()));
              r && this.pinchMove(e, r)
            }
            pinchMove(e, t) {
              const r = this.state,
                n = r._values[1],
                o = t.angle - n;
              let s = 0;
              Math.abs(o) > 270 && (s += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * s]), r.origin = t.origin, r.turns = s, r._movement = [r._values[0] / r._initial[0] - 1, r._values[1] - r._initial[1]], this.compute(e), this.emit()
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
              t._movement = [e.scale - 1, e.rotation], t._delta = gt.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-At(e)[1] / 100 * t.offset[0], 0], gt.addTo(t._movement, t._delta), Qt(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Jt
        },
        dr = {
          key: "scroll",
          engine: class extends Ft {
            constructor(...e) {
              super(...e), wt(this, "ingKey", "scrolling")
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
                    scrollLeft: s,
                    scrollTop: i
                  } = e.currentTarget;
                  return [null !== (t = null != n ? n : s) && void 0 !== t ? t : 0, null !== (r = null != o ? o : i) && void 0 !== r ? r : 0]
                }(e);
              t._delta = gt.sub(r, t._values), gt.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: tr
        },
        fr = {
          key: "wheel",
          engine: class extends Ft {
            constructor(...e) {
              super(...e), wt(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = At(e), gt.addTo(t._movement, t._delta), Qt(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: rr
        };
      const hr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Zt.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        pr = ["target", "eventOptions", "window", "enabled", "transform"];

      function mr(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = mr(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class vr {
        constructor(e, t) {
          wt(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const s = this._listeners,
            i = function(e, t = "") {
              const r = Ct[e];
              return e + (r && r[t] || t)
            }(t, r),
            a = Et(Et({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(i, n, a);
          const l = () => {
            e.removeEventListener(i, n, a), s.delete(l)
          };
          return s.add(l), l
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class yr {
        constructor() {
          wt(this, "_timeouts", new Map)
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
      class gr {
        constructor(e) {
          var t, r;
          wt(this, "gestures", new Set), wt(this, "_targetEventStore", new vr(this)), wt(this, "gestureEventStores", {}), wt(this, "gestureTimeoutStores", {}), wt(this, "handlers", {}), wt(this, "config", {}), wt(this, "pointerIds", new Set), wt(this, "touchIds", new Set), wt(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && br(t, "drag"), r.wheel && br(t, "wheel"), r.scroll && br(t, "scroll"), r.move && br(t, "move"), r.pinch && br(t, "pinch"), r.hover && br(t, "hover")
        }
        setEventIds(e) {
          return jt(e) ? (this.touchIds = new Set(function(e) {
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
                eventOptions: s,
                window: i,
                enabled: a,
                transform: l
              } = n,
              c = function(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                  if (null == e) return {};
                  var r, n, o = {},
                    s = Object.keys(e);
                  for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var s = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
              }(n, pr);
            if (r.shared = mr({
                target: o,
                eventOptions: s,
                window: i,
                enabled: a,
                transform: l
              }, hr), t) {
              const e = sr.get(t);
              r[t] = mr(Et({
                shared: r.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = sr.get(e);
                t && (r[e] = mr(Et({
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
                  s = _r(r, o.eventOptions, !!n);
                o.enabled && new(or.get(t))(this, e, t).bind(s)
              }
              const o = _r(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](Et(Et({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = Ht(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: s
              } = Tt(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: s
              })
            }
          }
        }
      }

      function br(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new vr(e, t), e.gestureTimeoutStores[t] = new yr
      }
      const _r = (e, t, r) => (n, o, s, i = {}, a = !1) => {
          var l, c;
          const u = null !== (l = i.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = i.passive) && void 0 !== c ? c : t.passive;
          let f = a ? n : function(e, t = "", r = !1) {
            const n = Ct[e],
              o = n && n[t] || t;
            return "on" + Pt(e) + Pt(o) + (function(e = !1, t) {
              return e && !St.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(s)
        },
        wr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function xr(e, t, r, n, o, s) {
        if (!e.has(r)) return;
        if (!or.has(n)) return;
        const i = r + "Start",
          a = r + "End";
        o[n] = e => {
          let n;
          return e.first && i in t && t[i](e), r in t && (n = t[r](e)), e.last && a in t && t[a](e), n
        }, s[n] = s[n] || {}
      }

      function Er(e, t = {}, r, n) {
        const o = F.useMemo(() => new gr(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), F.useEffect(o.effect.bind(o)), F.useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function Cr(e, t) {
        const r = ([ar, ur, dr, fr, cr, lr].forEach(ir), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) wr.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), s = {};
            return xr(o, r, "onDrag", "drag", s, t), xr(o, r, "onWheel", "wheel", s, t), xr(o, r, "onScroll", "scroll", s, t), xr(o, r, "onPinch", "pinch", s, t), xr(o, r, "onMove", "move", s, t), xr(o, r, "onHover", "hover", s, t), {
              handlers: s,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return Er(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const Pr = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Sr = ([e, t]) => ({
        x: e,
        y: t
      }), Or = (e, t) => (e.x = t.x, e.y = t.y, e), Tr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, jr = (e, t, r) => Math.min(Math.max(e, t), r);

      function Nr() {
        return Nr = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Nr.apply(null, arguments)
      }
      var Rr = ["shift", "alt", "meta", "mod", "ctrl"],
        Ir = {
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

      function kr(e) {
        return (e && Ir[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Dr(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Lr(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return kr(e)
        });
        return Nr({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Rr.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && Br([kr(e.key), kr(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && Hr([kr(e.key), kr(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Ar.clear()
      });
      var Ar = new Set;

      function Mr(e) {
        return Array.isArray(e)
      }

      function Br(e) {
        var t = Array.isArray(e) ? e : [e];
        Ar.has("meta") && Ar.forEach(function(e) {
          return ! function(e) {
            return Rr.includes(e)
          }(e) && Ar.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Ar.add(e.toLowerCase())
        })
      }

      function Hr(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Ar.clear() : t.forEach(function(e) {
          return Ar.delete(e.toLowerCase())
        })
      }

      function zr(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          s = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && s ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Mr(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Vr = (0, F.createContext)(void 0);

      function Fr(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, P.jsx)(Vr.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Gr(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Gr(e[n], t[n])
        }, !0) : e === t
      }
      var Ur = (0, F.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        qr = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, F.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            s = o[0],
            i = o[1],
            a = (0, F.useState)([]),
            l = a[0],
            c = a[1],
            u = (0, F.useCallback)(function(e) {
              i(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            d = (0, F.useCallback)(function(e) {
              i(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, F.useCallback)(function(e) {
              i(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            h = (0, F.useCallback)(function(e) {
              c(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            p = (0, F.useCallback)(function(e) {
              c(function(t) {
                return t.filter(function(t) {
                  return !Gr(t, e)
                })
              })
            }, []);
          return (0, P.jsx)(Ur.Provider, {
            value: {
              enabledScopes: s,
              hotkeys: l,
              enableScope: u,
              disableScope: d,
              toggleScope: f
            },
            children: (0, P.jsx)(Fr, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        Xr = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Kr = "undefined" != typeof window ? F.useLayoutEffect : F.useEffect;

      function Wr(e, t, r, n) {
        var o = (0, F.useState)(null),
          s = o[0],
          i = o[1],
          a = (0, F.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          c = Mr(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, F.useCallback)(t, null != u ? u : []),
          f = (0, F.useRef)(d);
        f.current = u ? d : t;
        var h = function(e) {
            var t = (0, F.useRef)(void 0);
            return Gr(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, F.useContext)(Ur).enabledScopes,
          m = (0, F.useContext)(Vr);
        return Kr(function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !zr(e, ["input", "textarea", "select"]) || zr(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== s) {
                    var n = s.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== s && !s.contains(n.activeElement)) return void Xr(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && Dr(c, null == h ? void 0 : h.splitKey).forEach(function(r) {
                    var n, o = Lr(r, null == h ? void 0 : h.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, s = t.alt,
                          i = t.meta,
                          a = t.mod,
                          l = t.shift,
                          c = t.ctrl,
                          u = t.keys,
                          d = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = kr(f),
                          g = d.toLowerCase();
                        if (!(null != u && u.includes(y) || null != u && u.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (s === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (a) {
                            if (!p && !h) return !1
                          } else {
                            if (i === !p && "meta" !== g && "os" !== g) return !1;
                            if (c === !h && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (Mr(n = u) ? n : n.split(o)).every(function(e) {
                          return Ar.has(e.trim().toLowerCase())
                        })) : !u)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void Xr(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (Br(kr(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Hr(kr(e.code)), a.current = !1, null != h && h.keyup && r(e, !0))
              },
              i = s || (null == l ? void 0 : l.document) || document;
            return i.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), i.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Dr(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                return m.addHotkey(Lr(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              }),
              function() {
                i.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), i.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Dr(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                  return m.removeHotkey(Lr(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                })
              }
          }
        }, [s, c, h, p]), i
      }

      function Zr(e) {
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

      function $r(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Yr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $r(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Zr(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $r(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Qr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Jr = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        en = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Yr(Yr({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Jr(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qr(e.variantClassNames, e => Qr(e, e => e.split(" ")[0]))
            }
          }, t
        },
        tn = en({
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
        rn = en({
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
      vt.gsap.registerPlugin(yt.useGSAP);
      const nn = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        on = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        sn = (0, G.Tm)("var(--foundry_1a74xwb0)");
      var an, ln, cn, un = r(78322),
        dn = r(30762);

      function fn(e) {
        return e.type === ln.literal
      }

      function hn(e) {
        return e.type === ln.argument
      }

      function pn(e) {
        return e.type === ln.number
      }

      function mn(e) {
        return e.type === ln.date
      }

      function vn(e) {
        return e.type === ln.time
      }

      function yn(e) {
        return e.type === ln.select
      }

      function gn(e) {
        return e.type === ln.plural
      }

      function bn(e) {
        return e.type === ln.pound
      }

      function _n(e) {
        return e.type === ln.tag
      }

      function wn(e) {
        return !(!e || "object" != typeof e || e.type !== cn.number)
      }

      function xn(e) {
        return !(!e || "object" != typeof e || e.type !== cn.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(an || (an = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(ln || (ln = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(cn || (cn = {}));
      var En = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Cn = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Pn(e) {
        var t = {};
        return e.replace(Cn, function(e) {
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
      var Sn = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function On(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var Tn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        jn = /^(@+)?(\+|#+)?[rs]?$/g,
        Nn = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Rn = /^(0+)$/;

      function In(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(jn, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function kn(e) {
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

      function Dn(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Rn.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Ln(e) {
        return kn(e) || {}
      }

      function An(e) {
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
              t.style = "unit", t.unit = On(o.options[0]);
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
              t = (0, un.__assign)((0, un.__assign)((0, un.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, un.__assign)((0, un.__assign)({}, e), Ln(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, un.__assign)((0, un.__assign)((0, un.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, un.__assign)((0, un.__assign)({}, e), Ln(t))
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
              o.options[0].replace(Nn, function(e, r, n, o, s, i) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && s) throw new Error("We currently do not support maximum integer digits");
                  if (i) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (Rn.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Tn.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Tn, function(e, r, n, o, s, i) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : s && i ? (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length + i.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var s = o.options[0];
            "w" === s ? t = (0, un.__assign)((0, un.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : s && (t = (0, un.__assign)((0, un.__assign)({}, t), In(s)))
          } else if (jn.test(o.stem)) t = (0, un.__assign)((0, un.__assign)({}, t), In(o.stem));
          else {
            var i = kn(o.stem);
            i && (t = (0, un.__assign)((0, un.__assign)({}, t), i));
            var a = Dn(o.stem);
            a && (t = (0, un.__assign)((0, un.__assign)({}, t), a))
          }
        }
        return t
      }
      var Mn, Bn = {
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

      function Hn(e) {
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
        return "root" !== n && (r = e.maximize().region), (Bn[r || ""] || Bn[n || ""] || Bn["".concat(n, "-001")] || Bn["001"])[0]
      }
      var zn = new RegExp("^".concat(En.source, "*")),
        Vn = new RegExp("".concat(En.source, "*$"));

      function Fn(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Gn = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Un = !!String.fromCodePoint,
        qn = !!Object.fromEntries,
        Xn = !!String.prototype.codePointAt,
        Kn = !!String.prototype.trimStart,
        Wn = !!String.prototype.trimEnd,
        Zn = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        $n = !0;
      try {
        $n = "a" === (null === (Mn = oo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Mn ? void 0 : Mn[0])
      } catch (e) {
        $n = !1
      }
      var Yn, Qn = Gn ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Jn = Un ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, s = 0; o > s;) {
            if ((r = e[s++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        eo = qn ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              s = o[0],
              i = o[1];
            t[s] = i
          }
          return t
        },
        to = Xn ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        ro = Kn ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(zn, "")
        },
        no = Wn ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Vn, "")
        };

      function oo(e, t) {
        return new RegExp(e, t)
      }
      if ($n) {
        var so = oo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Yn = function(e, t) {
          var r;
          return so.lastIndex = t, null !== (r = so.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Yn = function(e, t) {
        for (var r = [];;) {
          var n = to(e, t);
          if (void 0 === n || uo(n) || fo(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Jn.apply(void 0, r)
      };
      var io, ao = function() {
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
              if ((s = this.parseArgument(e, r)).err) return s;
              n.push(s.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(an.UNMATCHED_CLOSING_TAG, Fn(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && lo(this.peek() || 0)) {
                  if ((s = this.parseTag(e, t)).err) return s;
                  n.push(s.val)
                } else {
                  var s;
                  if ((s = this.parseLiteral(e, t)).err) return s;
                  n.push(s.val)
                }
              } else {
                var i = this.clonePosition();
                this.bump(), n.push({
                  type: ln.pound,
                  location: Fn(i, this.clonePosition())
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
              type: ln.literal,
              value: "<".concat(n, "/>"),
              location: Fn(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var s = o.val,
              i = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !lo(this.char())) return this.error(an.INVALID_TAG, Fn(i, this.clonePosition()));
              var a = this.clonePosition();
              return n !== this.parseTagName() ? this.error(an.UNMATCHED_CLOSING_TAG, Fn(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: ln.tag,
                  value: n,
                  children: s,
                  location: Fn(r, this.clonePosition())
                },
                err: null
              } : this.error(an.INVALID_TAG, Fn(i, this.clonePosition())))
            }
            return this.error(an.UNCLOSED_TAG, Fn(r, this.clonePosition()))
          }
          return this.error(an.INVALID_TAG, Fn(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && co(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var s = this.tryParseUnquoted(e, t);
              if (s) n += s;
              else {
                var i = this.tryParseLeftAngleBracket();
                if (!i) break;
                n += i
              }
            }
          }
          var a = Fn(r, this.clonePosition());
          return {
            val: {
              type: ln.literal,
              value: n,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (lo(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Jn.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Jn(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE, Fn(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(an.EMPTY_ARGUMENT, Fn(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(an.MALFORMED_ARGUMENT, Fn(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE, Fn(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: ln.argument,
                  value: n,
                  location: Fn(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE, Fn(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(an.MALFORMED_ARGUMENT, Fn(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Yn(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Fn(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, s = this.clonePosition(),
            i = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (i) {
            case "":
              return this.error(an.EXPECT_ARGUMENT_TYPE, Fn(s, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = no(y.val)).length) return this.error(an.EXPECT_ARGUMENT_STYLE, Fn(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Fn(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = Fn(n, this.clonePosition());
              if (l && Qn(null == l ? void 0 : l.style, "::", 0)) {
                var d = ro(l.style.slice(2));
                if ("number" === i) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: ln.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(an.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var s = 0; n + 1 < e.length && e.charAt(n + 1) === o;) s++, n++;
                      var i = 1 + (1 & s),
                        a = s < 2 ? 1 : 3 + (s >> 1),
                        l = Hn(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) r += "a";
                      for (; i-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: cn.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Pn(f) : {}
                };
                return {
                  val: {
                    type: "date" === i ? ln.date : ln.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === i ? ln.number : "date" === i ? ln.date : ln.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(an.EXPECT_SELECT_ARGUMENT_OPTIONS, Fn(p, (0, un.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== i && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(an.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Fn(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(an.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, an.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, i, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = Fn(n, this.clonePosition());
              return "select" === i ? {
                val: {
                  type: ln.select,
                  value: r,
                  options: eo(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: ln.plural,
                  value: r,
                  options: eo(b.val),
                  offset: v,
                  pluralType: "plural" === i ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(an.INVALID_ARGUMENT_TYPE, Fn(s, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE, Fn(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(an.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Fn(r, this.clonePosition()));
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
            r = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], r = 0, n = e.split(Sn).filter(function(e) {
                  return e.length > 0
                }); r < n.length; r++) {
                var o = n[r].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var s = o[0], i = o.slice(1), a = 0, l = i; a < l.length; a++)
                  if (0 === l[a].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: s,
                  options: i
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(an.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: cn.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? An(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, s = !1, i = [], a = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(an.EXPECT_PLURAL_ARGUMENT_SELECTOR, an.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Fn(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? an.DUPLICATE_SELECT_ARGUMENT_SELECTOR : an.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (s = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? an.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : an.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Fn(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            i.push([l, {
              value: h.val,
              location: Fn(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === i.length ? this.error("select" === t ? an.EXPECT_SELECT_ARGUMENT_SELECTOR : an.EXPECT_PLURAL_ARGUMENT_SELECTOR, Fn(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(an.MISSING_OTHER_CLAUSE, Fn(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, s = 0; !this.isEOF();) {
            var i = this.char();
            if (!(i >= 48 && i <= 57)) break;
            o = !0, s = 10 * s + (i - 48), this.bump()
          }
          var a = Fn(n, this.clonePosition());
          return o ? Zn(s *= r) ? {
            val: s,
            err: null
          } : this.error(t, a) : this.error(e, a)
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
          var t = to(this.message, e);
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
          if (Qn(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && uo(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function lo(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function co(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function uo(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function fo(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function ho(e) {
        e.forEach(function(e) {
          if (delete e.location, yn(e) || gn(e))
            for (var t in e.options) delete e.options[t].location, ho(e.options[t].value);
          else pn(e) && wn(e.style) || (mn(e) || vn(e)) && xn(e.style) ? delete e.style.location : _n(e) && ho(e.children)
        })
      }

      function po(e, t) {
        void 0 === t && (t = {}), t = (0, un.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new ao(e, t).parse();
        if (r.err) {
          var n = SyntaxError(an[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || ho(r.val), r.val
      }! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(io || (io = {}));
      var mo, vo = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, un.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        yo = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), io.INVALID_VALUE, o) || this
          }
          return (0, un.__extends)(t, e), t
        }(vo),
        go = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), io.INVALID_VALUE, n) || this
          }
          return (0, un.__extends)(t, e), t
        }(vo),
        bo = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), io.MISSING_VALUE, r) || this
          }
          return (0, un.__extends)(t, e), t
        }(vo);

      function _o(e) {
        return "function" == typeof e
      }

      function wo(e, t, r, n, o, s, i) {
        if (1 === e.length && fn(e[0])) return [{
          type: mo.literal,
          value: e[0].value
        }];
        for (var a = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (fn(u)) a.push({
            type: mo.literal,
            value: u.value
          });
          else if (bn(u)) "number" == typeof s && a.push({
            type: mo.literal,
            value: r.getNumberFormat(t).format(s)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new bo(d, i);
            var f = o[d];
            if (hn(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), a.push({
              type: "string" == typeof f ? mo.literal : mo.object,
              value: f
            });
            else if (mn(u)) {
              var h = "string" == typeof u.style ? n.date[u.style] : xn(u.style) ? u.style.parsedOptions : void 0;
              a.push({
                type: mo.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (vn(u)) h = "string" == typeof u.style ? n.time[u.style] : xn(u.style) ? u.style.parsedOptions : n.time.medium, a.push({
              type: mo.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (pn(u))(h = "string" == typeof u.style ? n.number[u.style] : wn(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), a.push({
              type: mo.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (_n(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!_o(v)) throw new go(m, "function", i);
                var y = v(wo(p, t, r, n, o, s).map(function(e) {
                  return e.value
                }));
                Array.isArray(y) || (y = [y]), a.push.apply(a, y.map(function(e) {
                  return {
                    type: "string" == typeof e ? mo.literal : mo.object,
                    value: e
                  }
                }))
              }
              if (yn(u)) {
                if (!(g = u.options[f] || u.options.other)) throw new yo(u.value, f, Object.keys(u.options), i);
                a.push.apply(a, wo(g.value, t, r, n, o))
              } else if (gn(u)) {
                var g;
                if (!(g = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new vo('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', io.MISSING_INTL_API, i);
                  var b = r.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  g = u.options[b] || u.options.other
                }
                if (!g) throw new yo(u.value, f, Object.keys(u.options), i);
                a.push.apply(a, wo(g.value, t, r, n, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = a).length < 2 ? _ : _.reduce(function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === mo.literal && t.type === mo.literal ? r.value += t.value : e.push(t), e
        }, []);
        var _
      }

      function xo(e) {
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
      }(mo || (mo = {}));
      var Eo, Co = function() {
        function e(t, r, n, o) {
          void 0 === r && (r = e.defaultLocale);
          var s, i, a, l = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = l.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce(function(e, t) {
                return e.length && t.type === mo.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }, []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return wo(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
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
              u = (c.formatters, (0, un.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, un.__assign)((0, un.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (i = e.formats, (a = n) ? Object.keys(i).reduce(function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, un.__assign)((0, un.__assign)((0, un.__assign)({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
                return r[n] = (0, un.__assign)((0, un.__assign)({}, e[n]), t[n] || {}), r
              }, {})) : e
            }(i[t], a[t]), e
          }, (0, un.__assign)({}, i)) : i), this.formatters = o && o.formatters || (void 0 === (s = this.formatterCache) && (s = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, dn.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, un.__spreadArray)([void 0], t, !1)))
            }, {
              cache: xo(s.number),
              strategy: dn.W.variadic
            }),
            getDateTimeFormat: (0, dn.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, un.__spreadArray)([void 0], t, !1)))
            }, {
              cache: xo(s.dateTime),
              strategy: dn.W.variadic
            }),
            getPluralRules: (0, dn.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, un.__spreadArray)([void 0], t, !1)))
            }, {
              cache: xo(s.pluralRules),
              strategy: dn.W.variadic
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
        }, e.__parse = po, e.formats = {
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
      }(Eo || (Eo = {}));
      var Po = function(e) {
          function t(r, n, o) {
            var s = this,
              i = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (s = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(i ? "\n".concat(i.message, "\n").concat(i.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(s, t), s
          }
          return (0, un.__extends)(t, e), t
        }(Error),
        So = function(e) {
          function t(t, r) {
            return e.call(this, Eo.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, un.__extends)(t, e), t
        }(Po),
        Oo = function(e) {
          function t(t, r) {
            return e.call(this, Eo.INVALID_CONFIG, t, r) || this
          }
          return (0, un.__extends)(t, e), t
        }(Po),
        To = function(e) {
          function t(t, r) {
            return e.call(this, Eo.MISSING_DATA, t, r) || this
          }
          return (0, un.__extends)(t, e), t
        }(Po),
        jo = function(e) {
          function t(t, r, n) {
            var o = e.call(this, Eo.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, un.__extends)(t, e), t
        }(Po),
        No = function(e) {
          function t(t, r, n, o) {
            var s = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return s.descriptor = n, s.locale = r, s
          }
          return (0, un.__extends)(t, e), t
        }(jo),
        Ro = function(e) {
          function t(t, r) {
            var n = e.call(this, Eo.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            }).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, un.__extends)(t, e), t
        }(Po);

      function Io(e, t, r) {
        return void 0 === r && (r = {}), t.reduce(function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }, {})
      }
      var ko = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Do(e) {
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

      function Lo(e, t, r, n) {
        var o, s = e && e[t];
        if (s && (o = s[r]), o) return o;
        n(new So("No ".concat(t, " format named: ").concat(r)))
      }

      function Ao(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      var Mo, Bo, Ho, zo = (0, un.__assign)((0, un.__assign)({}, ko), {
          textComponent: F.Fragment
        }),
        Vo = function(e, t) {
          return F.isValidElement(e) ? F.cloneElement(e, {
            key: t
          }) : e
        },
        Fo = function(e) {
          var t;
          return null !== (t = F.Children.map(e, Vo)) && void 0 !== t ? t : []
        };
      ! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Mo || (Mo = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Bo || (Bo = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Ho || (Ho = {}));
      var Go = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Uo = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function qo(e) {
        var t = {};
        return e.replace(Uo, function(e) {
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
      var Xo = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function Ko(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var Wo = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Zo = /^(@+)?(\+|#+)?[rs]?$/g,
        $o = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Yo = /^(0+)$/;

      function Qo(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Zo, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function Jo(e) {
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

      function es(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Yo.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function ts(e) {
        return Jo(e) || {}
      }

      function rs(e) {
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
              t.style = "unit", t.unit = Ko(o.options[0]);
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
              t = (0, un.__assign)((0, un.__assign)((0, un.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, un.__assign)((0, un.__assign)({}, e), ts(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, un.__assign)((0, un.__assign)((0, un.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, un.__assign)((0, un.__assign)({}, e), ts(t))
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
              o.options[0].replace($o, function(e, r, n, o, s, i) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && s) throw new Error("We currently do not support maximum integer digits");
                  if (i) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (Yo.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Wo.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Wo, function(e, r, n, o, s, i) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : s && i ? (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length + i.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var s = o.options[0];
            "w" === s ? t = (0, un.__assign)((0, un.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : s && (t = (0, un.__assign)((0, un.__assign)({}, t), Qo(s)))
          } else if (Zo.test(o.stem)) t = (0, un.__assign)((0, un.__assign)({}, t), Qo(o.stem));
          else {
            var i = Jo(o.stem);
            i && (t = (0, un.__assign)((0, un.__assign)({}, t), i));
            var a = es(o.stem);
            a && (t = (0, un.__assign)((0, un.__assign)({}, t), a))
          }
        }
        return t
      }
      var ns, os = {
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

      function ss(e) {
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
        return "root" !== n && (r = e.maximize().region), (os[r || ""] || os[n || ""] || os["".concat(n, "-001")] || os["001"])[0]
      }
      var is = new RegExp("^".concat(Go.source, "*")),
        as = new RegExp("".concat(Go.source, "*$"));

      function ls(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var cs = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        us = !!String.fromCodePoint,
        ds = !!Object.fromEntries,
        fs = !!String.prototype.codePointAt,
        hs = !!String.prototype.trimStart,
        ps = !!String.prototype.trimEnd,
        ms = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        vs = !0;
      try {
        vs = "a" === (null === (ns = Cs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === ns ? void 0 : ns[0])
      } catch (e) {
        vs = !1
      }
      var ys, gs = cs ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        bs = us ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, s = 0; o > s;) {
            if ((r = e[s++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        _s = ds ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              s = o[0],
              i = o[1];
            t[s] = i
          }
          return t
        },
        ws = fs ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        xs = hs ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(is, "")
        },
        Es = ps ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(as, "")
        };

      function Cs(e, t) {
        return new RegExp(e, t)
      }
      if (vs) {
        var Ps = Cs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        ys = function(e, t) {
          var r;
          return Ps.lastIndex = t, null !== (r = Ps.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else ys = function(e, t) {
        for (var r = [];;) {
          var n = ws(e, t);
          if (void 0 === n || Ts(n) || js(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return bs.apply(void 0, r)
      };

      function Ss(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Os(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function Ts(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function js(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Ns(e, t) {
        return Object.keys(e).reduce(function(r, n) {
          return r[n] = (0, un.__assign)({
            timeZone: t
          }, e[n]), r
        }, {})
      }

      function Rs(e, t) {
        return Object.keys((0, un.__assign)((0, un.__assign)({}, e), t)).reduce(function(r, n) {
          return r[n] = (0, un.__assign)((0, un.__assign)({}, e[n] || {}), t[n] || {}), r
        }, {})
      }

      function Is(e, t) {
        if (!t) return e;
        var r = Co.formats;
        return (0, un.__assign)((0, un.__assign)((0, un.__assign)({}, r), e), {
          date: Rs(Ns(r.date, t), Ns(e.date || {}, t)),
          time: Rs(Ns(r.time, t), Ns(e.time || {}, t))
        })
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
              if ((s = this.parseArgument(e, r)).err) return s;
              n.push(s.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(Mo.UNMATCHED_CLOSING_TAG, ls(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Ss(this.peek() || 0)) {
                  if ((s = this.parseTag(e, t)).err) return s;
                  n.push(s.val)
                } else {
                  var s;
                  if ((s = this.parseLiteral(e, t)).err) return s;
                  n.push(s.val)
                }
              } else {
                var i = this.clonePosition();
                this.bump(), n.push({
                  type: Bo.pound,
                  location: ls(i, this.clonePosition())
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
              type: Bo.literal,
              value: "<".concat(n, "/>"),
              location: ls(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var s = o.val,
              i = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Ss(this.char())) return this.error(Mo.INVALID_TAG, ls(i, this.clonePosition()));
              var a = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Mo.UNMATCHED_CLOSING_TAG, ls(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Bo.tag,
                  value: n,
                  children: s,
                  location: ls(r, this.clonePosition())
                },
                err: null
              } : this.error(Mo.INVALID_TAG, ls(i, this.clonePosition())))
            }
            return this.error(Mo.UNCLOSED_TAG, ls(r, this.clonePosition()))
          }
          return this.error(Mo.INVALID_TAG, ls(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && Os(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var s = this.tryParseUnquoted(e, t);
              if (s) n += s;
              else {
                var i = this.tryParseLeftAngleBracket();
                if (!i) break;
                n += i
              }
            }
          }
          var a = ls(r, this.clonePosition());
          return {
            val: {
              type: Bo.literal,
              value: n,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Ss(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return bs.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), bs(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Mo.EXPECT_ARGUMENT_CLOSING_BRACE, ls(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Mo.EMPTY_ARGUMENT, ls(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Mo.MALFORMED_ARGUMENT, ls(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Mo.EXPECT_ARGUMENT_CLOSING_BRACE, ls(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Bo.argument,
                  value: n,
                  location: ls(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Mo.EXPECT_ARGUMENT_CLOSING_BRACE, ls(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Mo.MALFORMED_ARGUMENT, ls(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = ys(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: ls(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, s = this.clonePosition(),
            i = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (i) {
            case "":
              return this.error(Mo.EXPECT_ARGUMENT_TYPE, ls(s, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Es(y.val)).length) return this.error(Mo.EXPECT_ARGUMENT_STYLE, ls(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: ls(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = ls(n, this.clonePosition());
              if (l && gs(null == l ? void 0 : l.style, "::", 0)) {
                var d = xs(l.style.slice(2));
                if ("number" === i) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: Bo.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Mo.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var s = 0; n + 1 < e.length && e.charAt(n + 1) === o;) s++, n++;
                      var i = 1 + (1 & s),
                        a = s < 2 ? 1 : 3 + (s >> 1),
                        l = ss(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) r += "a";
                      for (; i-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: Ho.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? qo(f) : {}
                };
                return {
                  val: {
                    type: "date" === i ? Bo.date : Bo.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === i ? Bo.number : "date" === i ? Bo.date : Bo.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Mo.EXPECT_SELECT_ARGUMENT_OPTIONS, ls(p, (0, un.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== i && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Mo.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ls(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Mo.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Mo.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, i, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = ls(n, this.clonePosition());
              return "select" === i ? {
                val: {
                  type: Bo.select,
                  value: r,
                  options: _s(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Bo.plural,
                  value: r,
                  options: _s(b.val),
                  offset: v,
                  pluralType: "plural" === i ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Mo.INVALID_ARGUMENT_TYPE, ls(s, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Mo.EXPECT_ARGUMENT_CLOSING_BRACE, ls(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Mo.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ls(r, this.clonePosition()));
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
            r = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], r = 0, n = e.split(Xo).filter(function(e) {
                  return e.length > 0
                }); r < n.length; r++) {
                var o = n[r].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var s = o[0], i = o.slice(1), a = 0, l = i; a < l.length; a++)
                  if (0 === l[a].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: s,
                  options: i
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(Mo.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Ho.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? rs(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, s = !1, i = [], a = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Mo.EXPECT_PLURAL_ARGUMENT_SELECTOR, Mo.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = ls(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? Mo.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Mo.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (s = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Mo.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Mo.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ls(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            i.push([l, {
              value: h.val,
              location: ls(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === i.length ? this.error("select" === t ? Mo.EXPECT_SELECT_ARGUMENT_SELECTOR : Mo.EXPECT_PLURAL_ARGUMENT_SELECTOR, ls(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(Mo.MISSING_OTHER_CLAUSE, ls(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, s = 0; !this.isEOF();) {
            var i = this.char();
            if (!(i >= 48 && i <= 57)) break;
            o = !0, s = 10 * s + (i - 48), this.bump()
          }
          var a = ls(n, this.clonePosition());
          return o ? ms(s *= r) ? {
            val: s,
            err: null
          } : this.error(t, a) : this.error(e, a)
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
          var t = ws(this.message, e);
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
          if (gs(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Ts(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }
      }();
      var ks = function(e, t, r, n, o) {
          var s = e.locale,
            i = e.formats,
            a = e.messages,
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
            if (void 0 === r && (r = Error), !e) throw new r("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!p);
          var v = String(p),
            y = a && Object.prototype.hasOwnProperty.call(a, v) && a[v];
          if (Array.isArray(y) && 1 === y.length && y[0].type === Bo.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, un.__assign)((0, un.__assign)({}, h), n || {}), i = Is(i, f), c = Is(c, f), !y) {
            if (!1 === u && "" === y) return y;
            if ((!m || s && s.toLowerCase() !== l.toLowerCase()) && d(new Ro(r, s)), m) try {
              return t.getMessageFormat(m, l, c, o).format(n)
            } catch (e) {
              return d(new No('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), s, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, s, i, (0, un.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new No('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), s, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(n)
          } catch (e) {
            d(new No('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), s, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        Ds = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Ls(e, t, r, n) {
        var o = e.locale,
          s = e.formats,
          i = e.onError,
          a = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          c = (0, un.__assign)((0, un.__assign)({}, a && {
            timeZone: a
          }), l && Lo(s, t, l, i)),
          u = Io(n, Ds, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, un.__assign)((0, un.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, u)
      }

      function As(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          s = r[1],
          i = void 0 === s ? {} : s,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ls(e, "date", t, i).format(a)
        } catch (t) {
          e.onError(new jo("Error formatting date.", e.locale, t))
        }
        return String(a)
      }

      function Ms(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          s = r[1],
          i = void 0 === s ? {} : s,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ls(e, "time", t, i).format(a)
        } catch (t) {
          e.onError(new jo("Error formatting time.", e.locale, t))
        }
        return String(a)
      }

      function Bs(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          s = r[1],
          i = r[2],
          a = void 0 === i ? {} : i,
          l = "string" == typeof o ? new Date(o || 0) : o,
          c = "string" == typeof s ? new Date(s || 0) : s;
        try {
          return Ls(e, "dateTimeRange", t, a).formatRange(l, c)
        } catch (t) {
          e.onError(new jo("Error formatting date time range.", e.locale, t))
        }
        return String(l)
      }

      function Hs(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          s = r[1],
          i = void 0 === s ? {} : s,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ls(e, "date", t, i).formatToParts(a)
        } catch (t) {
          e.onError(new jo("Error formatting date.", e.locale, t))
        }
        return []
      }

      function zs(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          s = r[1],
          i = void 0 === s ? {} : s,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ls(e, "time", t, i).formatToParts(a)
        } catch (t) {
          e.onError(new jo("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Vs = ["style", "type", "fallback", "languageDisplay"];

      function Fs(e, t, r, n) {
        var o = e.locale,
          s = e.onError;
        Intl.DisplayNames || s(new vo('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', io.MISSING_INTL_API));
        var i = Io(n, Vs);
        try {
          return t(o, i).of(r)
        } catch (e) {
          s(new jo("Error formatting display name.", o, e))
        }
      }
      var Gs = ["type", "style"],
        Us = Date.now();

      function qs(e, t, r, n) {
        void 0 === n && (n = {});
        var o = Xs(e, t, r, n).reduce(function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Xs(e, t, r, n) {
        var o = e.locale,
          s = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || s(new vo('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', io.MISSING_INTL_API));
        var i = Io(n, Gs);
        try {
          var a = {},
            l = Array.from(r).map(function(e, t) {
              if ("object" == typeof e && null !== e) {
                var r = function(e) {
                  return "".concat(Us, "_").concat(e, "_").concat(Us)
                }(t);
                return a[r] = e, r
              }
              return String(e)
            });
          return t(o, i).formatToParts(l).map(function(e) {
            return "literal" === e.type ? e : (0, un.__assign)((0, un.__assign)({}, e), {
              value: a[e.value] || e.value
            })
          })
        } catch (e) {
          s(new jo("Error formatting list.", o, e))
        }
        return r
      }
      var Ks = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function Ws(e, t, r) {
        var n = e.locale,
          o = e.formats,
          s = e.onError;
        void 0 === r && (r = {});
        var i = r.format,
          a = i && Lo(o, "number", i, s) || {};
        return t(n, Io(r, Ks, a))
      }

      function Zs(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return Ws(e, t, n).format(r)
        } catch (t) {
          e.onError(new jo("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function $s(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return Ws(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new jo("Error formatting number.", e.locale, t))
        }
        return []
      }
      var Ys = ["type"];

      function Qs(e, t, r, n) {
        var o = e.locale,
          s = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || s(new vo('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', io.MISSING_INTL_API));
        var i = Io(n, Ys);
        try {
          return t(o, i).select(r)
        } catch (e) {
          s(new jo("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Js = ["numeric", "style"];

      function ei(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new vo('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', io.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              s = e.onError;
            void 0 === r && (r = {});
            var i = r.format,
              a = !!i && Lo(o, "relative", i, s) || {};
            return t(n, Io(r, Js, a))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new jo("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }

      function ti(e, t) {
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
              o = (0, dn.B)(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, un.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Do(e.dateTime),
                strategy: dn.W.variadic
              }),
              s = (0, dn.B)(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, un.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Do(e.number),
                strategy: dn.W.variadic
              }),
              i = (0, dn.B)(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, un.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Do(e.pluralRules),
                strategy: dn.W.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: s,
              getMessageFormat: (0, dn.B)(function(e, t, r, n) {
                return new Co(e, t, r, (0, un.__assign)({
                  formatters: {
                    getNumberFormat: s,
                    getDateTimeFormat: o,
                    getPluralRules: i
                  }
                }, n || {}))
              }, {
                cache: Do(e.message),
                strategy: dn.W.variadic
              }),
              getRelativeTimeFormat: (0, dn.B)(function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, un.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Do(e.relativeTime),
                strategy: dn.W.variadic
              }),
              getPluralRules: i,
              getListFormat: (0, dn.B)(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, un.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Do(e.list),
                strategy: dn.W.variadic
              }),
              getDisplayNames: (0, dn.B)(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, un.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Do(e.displayNames),
                strategy: dn.W.variadic
              })
            }
          }(t),
          n = (0, un.__assign)((0, un.__assign)({}, ko), e),
          o = n.locale,
          s = n.defaultLocale,
          i = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && i ? i(new To('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && i && i(new To('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (i && i(new Oo('"locale" was not configured, using "'.concat(s, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
          }(n), (0, un.__assign)((0, un.__assign)({}, n), {
            formatters: r,
            formatNumber: Zs.bind(null, n, r.getNumberFormat),
            formatNumberToParts: $s.bind(null, n, r.getNumberFormat),
            formatRelativeTime: ei.bind(null, n, r.getRelativeTimeFormat),
            formatDate: As.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: Hs.bind(null, n, r.getDateTimeFormat),
            formatTime: Ms.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: Bs.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: zs.bind(null, n, r.getDateTimeFormat),
            formatPlural: Qs.bind(null, n, r.getPluralRules),
            formatMessage: ks.bind(null, n, r),
            $t: ks.bind(null, n, r),
            formatList: qs.bind(null, n, r.getListFormat),
            formatListToParts: Xs.bind(null, n, r.getListFormat),
            formatDisplayName: Fs.bind(null, n, r.getDisplayNames)
          })
      }

      function ri(e) {
        return e ? Object.keys(e).reduce(function(t, r) {
          var n, o = e[r];
          return t[r] = _o(o) ? (n = o, function(e) {
            return n(Fo(e))
          }) : o, t
        }, {}) : e
      }
      var ni = function(e, t, r, n) {
          for (var o = [], s = 4; s < arguments.length; s++) o[s - 4] = arguments[s];
          var i = ri(n),
            a = ks.apply(void 0, (0, un.__spreadArray)([e, t, r, i], o, !1));
          return Array.isArray(a) ? Fo(a) : a
        },
        oi = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, un.__rest)(e, ["defaultRichTextElements"]),
            o = ri(r),
            s = ti((0, un.__assign)((0, un.__assign)((0, un.__assign)({}, zo), n), {
              defaultRichTextElements: o
            }), t),
            i = {
              locale: s.locale,
              timeZone: s.timeZone,
              fallbackOnEmptyString: s.fallbackOnEmptyString,
              formats: s.formats,
              defaultLocale: s.defaultLocale,
              defaultFormats: s.defaultFormats,
              messages: s.messages,
              onError: s.onError,
              defaultRichTextElements: o
            };
          return (0, un.__assign)((0, un.__assign)({}, s), {
            formatMessage: ni.bind(null, i, s.formatters),
            $t: ni.bind(null, i, s.formatters)
          })
        };
      r(35255);
      var si = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? F.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = F.createContext(null)),
        ii = (si.Consumer, si.Provider),
        ai = si;

      function li(e) {
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
      var ci = function(e) {
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
            intl: oi(li(t.props), t.cache),
            prevConfig: li(t.props)
          }, t
        }
        return (0, un.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = li(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var r = Object.keys(e),
              n = Object.keys(t),
              o = r.length;
            if (n.length !== o) return !1;
            for (var s = 0; s < o; s++) {
              var i = r[s];
              if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i)) return !1
            }
            return !0
          }(r, o) ? null : {
            intl: oi(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return Ao(this.state.intl), F.createElement(ii, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = zo, t
      }(F.PureComponent);
      const ui = ci;

      function di() {
        var e = F.useContext(ai);
        return Ao(e), e
      }
      var fi, hi;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(fi || (fi = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(hi || (hi = {}));
      var pi = function(e) {
        var t = di(),
          r = e.value,
          n = e.children,
          o = (0, un.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function mi(e) {
        var t = function(t) {
          var r = di(),
            n = t.value,
            o = t.children,
            s = (0, un.__rest)(t, ["value", "children"]),
            i = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(i, s) : r.formatTimeToParts(i, s))
        };
        return t.displayName = hi[e], t
      }

      function vi(e) {
        var t = function(t) {
          var r = di(),
            n = t.value,
            o = t.children,
            s = (0, un.__rest)(t, ["value", "children"]),
            i = r[e](n, s);
          if ("function" == typeof o) return o(i);
          var a = r.textComponent || F.Fragment;
          return F.createElement(a, null, i)
        };
        return t.displayName = fi[e], t
      }
      pi.displayName = "FormattedNumberParts", pi.displayName = "FormattedNumberParts", vi("formatDate"), vi("formatTime"), vi("formatNumber"), vi("formatList"), vi("formatDisplayName"), mi("formatDate"), mi("formatTime");
      const yi = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, s] = (0, F.useState)(null);
          return (0, F.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              s(e.default)
            })
          }, [r]), o ? (0, P.jsx)(ui, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        gi = {
          "en-US": r.e(9760).then(r.bind(r, 9760)),
          "de-DE": r.e(7407).then(r.bind(r, 27407)),
          "es-ES": r.e(173).then(r.bind(r, 40173)),
          "es-MX": r.e(68).then(r.bind(r, 30068)),
          "fr-FR": r.e(8325).then(r.bind(r, 38325)),
          "it-IT": r.e(5415).then(r.bind(r, 97796)),
          "ja-JP": r.e(3896).then(r.bind(r, 3896)),
          "ko-KR": r.e(1758).then(r.bind(r, 11758)),
          "pl-PL": r.e(5265).then(r.bind(r, 5265)),
          "pt-BR": r.e(8845).then(r.bind(r, 28845)),
          "ru-RU": r.e(6471).then(r.bind(r, 96471)),
          "zh-CN": r.e(8938).then(r.bind(r, 58938)),
          "zh-TW": r.e(2234).then(r.bind(r, 59853))
        };
      class bi {
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
          return r ? t : jr(t, this.max[e], this.min[e])
        }
      }
      class _i {
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
      class wi {
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
      class xi {
        slide;
        options;
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
          slide: e,
          options: t
        }) {
          this.slide = e, this.options = t || {
            dragToClose: !0
          }
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Or(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [r, n]
          } = e, o = t > 1, s = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && s && !o ? (this.setPanWithFriction("y", this.slide.pan.y + n, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && s ? this.setPanWithFriction("x", this.slide.pan.x + r, .35) : (this.setPanWithFriction("x", this.slide.pan.x + r), this.setPanWithFriction("y", this.slide.pan.y + n))
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
          const s = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const r = Math.abs(e.x - t.x),
              n = Math.abs(e.y - t.y);
            return Math.sqrt(r * r + n * n)
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Or(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(n, o), this.clearTapTimer()
          }, s))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, n]
          } = t, o = "x" === e ? r : n, s = this.slide.pan[e], i = s + o;
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(s),
              t = this.getVerticalDragRatio(i);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const a = this.slide.bounds.correctPan(e, i);
          s !== a && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = a)
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
      class Ei {
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
        setupStatic(e) {
          this.thumbnail = e, this.correctImageSize()
        }
        resize() {
          this.slide.isStatic || (this.setTriggerBounds(), this.setThumbStyles()), this.correctImageSize()
        }
        async loadPlaceholder(e) {
          e.src = this.thumbnail.currentSrc ?? "", await Pr(e)
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
      class Ci {
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
      class Pi extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class Si extends wi {
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
          if (!this.dispatch(e, new Pi(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class Oi {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Sr(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Or(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Sr(e);
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
            s = Or({
              x: 0,
              y: 0
            }, this.slide.pan);
          let i = Or({
            x: 0,
            y: 0
          }, s);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Or(this.startPan, s)), n && (i = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), i = {
            x: this.slide.bounds.correctPan("x", i.x),
            y: this.slide.bounds.correctPan("y", i.y)
          }, this.slide.setZoomLevel(t, !1), l = s, ((a = i).x !== l.x || a.y !== l.y || n || o) && (Or(this.slide.pan, i), this.slide.setZoomLevel(r))
        }
      }
      class Ti {
        target;
        constructor({
          options: e
        } = {}) {
          this.target = e?.panArea
        }
        setupStatic(e) {
          this.target = e
        }
        get x() {
          return this.target ? this.target.clientWidth : window.innerWidth
        }
        get y() {
          return this.target ? this.target.clientHeight : window.innerHeight
        }
      }
      class ji extends wi {
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
        panAreaSize;
        isStatic = !1;
        constructor({
          width: e = 0,
          height: t = 0,
          zoomLevelOptions: r,
          actionOptions: n,
          panAreaOptions: o,
          dragOptions: s
        }) {
          super(), this.width = e, this.height = t, this.opener = new Ei({
            slide: this
          }), this.bounds = new bi({
            slide: this
          }), this.dragHandler = new xi({
            options: s,
            slide: this
          }), this.scrollWheel = new Ci({
            slide: this
          }), this.zoomHandler = new Oi({
            slide: this
          }), this.zoomLevels = new _i({
            options: r
          }), this.tapHandler = new Si({
            options: n,
            slide: this
          }), this.panAreaSize = new Ti({
            options: o
          })
        }
        setup(e, t) {
          this.opener.setup(e, t), this.dragHandler.setup(), this.closing = !1, this.width = this.opener.width, this.height = this.opener.height, this.controlsVisible = !0, this.controlsOpacity = 1, this.calculateSize(), this.bounds.update(this.currZoomLevel)
        }
        setupStatic(e, t) {
          this.isStatic = !0, this.panAreaSize.setupStatic(t), this.opener.setupStatic(e), this.dragHandler.setup(), this.closing = !1, this.width = this.opener.width, this.height = this.opener.height, this.controlsVisible = !0, this.controlsOpacity = 1, this.calculateSize(), this.bounds.update(this.currZoomLevel)
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
          r || (e = jr(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Tr(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Tr(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Or(this.pan, this.bounds.center)
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
      var Ni = r(25778);
      const Ri = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        Ii = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        ki = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        Di = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        Li = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        Ai = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        Mi = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        Bi = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        Hi = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        zi = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Vi = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };
      var Fi = "foundry_bc732x1";
      const Gi = (0, F.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Wr(e, e => r?.(e), [r]), (0, P.jsx)(st, {
        size: "XS",
        className: (0, de.clsx)("foundry_bc732x0", {
          [Fi]: t
        }),
        asChild: !0,
        children: (0, P.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Ui = ia(),
        qi = e => ra(e, Ui),
        Xi = ia();
      qi.write = e => ra(e, Xi);
      var Ki = ia();
      qi.onStart = e => ra(e, Ki);
      var Wi = ia();
      qi.onFrame = e => ra(e, Wi);
      var Zi = ia();
      qi.onFinish = e => ra(e, Zi);
      var $i = [];
      qi.setTimeout = (e, t) => {
        const r = qi.now() + t,
          n = () => {
            const e = $i.findIndex(e => e.cancel == n);
            ~e && $i.splice(e, 1), ea -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return $i.splice(Yi(r), 0, o), ea += 1, na(), o
      };
      var Yi = e => ~(~$i.findIndex(t => t.time > e) || ~$i.length);
      qi.cancel = e => {
        Ki.delete(e), Wi.delete(e), Zi.delete(e), Ui.delete(e), Xi.delete(e)
      }, qi.sync = e => {
        ta = !0, qi.batchedUpdates(e), ta = !1
      }, qi.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, qi.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Ki.delete(r), t = null
        }, n
      };
      var Qi = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      qi.use = e => Qi = e, qi.now = "undefined" != typeof performance ? () => performance.now() : Date.now, qi.batchedUpdates = e => e(), qi.catch = console.error, qi.frameLoop = "always", qi.advance = () => {
        "demand" !== qi.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : sa()
      };
      var Ji = -1,
        ea = 0,
        ta = !1;

      function ra(e, t) {
        ta ? (t.delete(e), e(0)) : (t.add(e), na())
      }

      function na() {
        Ji < 0 && (Ji = 0, "demand" !== qi.frameLoop && Qi(oa))
      }

      function oa() {
        ~Ji && (Qi(oa), qi.batchedUpdates(sa))
      }

      function sa() {
        const e = Ji;
        Ji = qi.now();
        const t = Yi(Ji);
        t && (aa($i.splice(0, t), e => e.handler()), ea -= t), ea ? (Ki.flush(), Ui.flush(e ? Math.min(64, Ji - e) : 16.667), Wi.flush(), Xi.flush(), Zi.flush()) : Ji = -1
      }

      function ia() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            ea += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (ea -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, ea -= t.size, aa(t, t => t(r) && e.add(t)), ea += e.size, t = e)
          }
        }
      }

      function aa(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            qi.catch(e)
          }
        })
      }
      var la = Object.defineProperty,
        ca = {};

      function ua() {}((e, t) => {
        for (var r in t) la(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(ca, {
        assign: () => Ca,
        colors: () => wa,
        createStringInterpolator: () => ya,
        skipAnimation: () => xa,
        to: () => ga,
        willAdvance: () => Ea
      });
      var da = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function fa(e, t) {
        if (da.arr(e)) {
          if (!da.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var ha = (e, t) => e.forEach(t);

      function pa(e, t, r) {
        if (da.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var ma = e => da.und(e) ? [] : da.arr(e) ? e : [e];

      function va(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), ha(r, t)
        }
      }
      var ya, ga, ba = (e, ...t) => va(e, e => e(...t)),
        _a = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        wa = null,
        xa = !1,
        Ea = ua,
        Ca = e => {
          e.to && (ga = e.to), e.now && (qi.now = e.now), void 0 !== e.colors && (wa = e.colors), null != e.skipAnimation && (xa = e.skipAnimation), e.createStringInterpolator && (ya = e.createStringInterpolator), e.requestAnimationFrame && qi.use(e.requestAnimationFrame), e.batchedUpdates && (qi.batchedUpdates = e.batchedUpdates), e.willAdvance && (Ea = e.willAdvance), e.frameLoop && (qi.frameLoop = e.frameLoop)
        },
        Pa = new Set,
        Sa = [],
        Oa = [],
        Ta = 0,
        ja = {
          get idle() {
            return !Pa.size && !Sa.length
          },
          start(e) {
            Ta > e.priority ? (Pa.add(e), qi.onStart(Na)) : (Ra(e), qi(ka))
          },
          advance: ka,
          sort(e) {
            if (Ta) qi.onFrame(() => ja.sort(e));
            else {
              const t = Sa.indexOf(e);
              ~t && (Sa.splice(t, 1), Ia(e))
            }
          },
          clear() {
            Sa = [], Pa.clear()
          }
        };

      function Na() {
        Pa.forEach(Ra), Pa.clear(), qi(ka)
      }

      function Ra(e) {
        Sa.includes(e) || Ia(e)
      }

      function Ia(e) {
        Sa.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(Sa), 0, e)
      }

      function ka(e) {
        const t = Oa;
        for (let r = 0; r < Sa.length; r++) {
          const n = Sa[r];
          Ta = n.priority, n.idle || (Ea(n), n.advance(e), n.idle || t.push(n))
        }
        return Ta = 0, (Oa = Sa).length = 0, (Sa = t).length > 0
      }
      var Da = {
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
        La = "[-+]?\\d*\\.?\\d+",
        Aa = La + "%";

      function Ma(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Ba = new RegExp("rgb" + Ma(La, La, La)),
        Ha = new RegExp("rgba" + Ma(La, La, La, La)),
        za = new RegExp("hsl" + Ma(La, Aa, Aa)),
        Va = new RegExp("hsla" + Ma(La, Aa, Aa, La)),
        Fa = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ga = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ua = /^#([0-9a-fA-F]{6})$/,
        qa = /^#([0-9a-fA-F]{8})$/;

      function Xa(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Ka(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          s = Xa(o, n, e + 1 / 3),
          i = Xa(o, n, e),
          a = Xa(o, n, e - 1 / 3);
        return Math.round(255 * s) << 24 | Math.round(255 * i) << 16 | Math.round(255 * a) << 8
      }

      function Wa(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Za(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function $a(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Ya(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Qa(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Ua.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : wa && void 0 !== wa[e] ? wa[e] : (t = Ba.exec(e)) ? (Wa(t[1]) << 24 | Wa(t[2]) << 16 | Wa(t[3]) << 8 | 255) >>> 0 : (t = Ha.exec(e)) ? (Wa(t[1]) << 24 | Wa(t[2]) << 16 | Wa(t[3]) << 8 | $a(t[4])) >>> 0 : (t = Fa.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = qa.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Ga.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = za.exec(e)) ? (255 | Ka(Za(t[1]), Ya(t[2]), Ya(t[3]))) >>> 0 : (t = Va.exec(e)) ? (Ka(Za(t[1]), Ya(t[2]), Ya(t[3])) | $a(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Ja = (e, t, r) => {
          if (da.fun(e)) return e;
          if (da.arr(e)) return Ja({
            range: e,
            output: t,
            extrapolate: r
          });
          if (da.str(e.output[0])) return ya(e);
          const n = e,
            o = n.output,
            s = n.range || [0, 1],
            i = n.extrapolateLeft || n.extrapolate || "extend",
            a = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, s);
            return function(e, t, r, n, o, s, i, a, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === i) return c;
                "clamp" === i && (c = t)
              }
              if (c > r) {
                if ("identity" === a) return c;
                "clamp" === a && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = s(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, s[t], s[t + 1], o[t], o[t + 1], l, i, a, n.map)
          }
        },
        el = 1.70158,
        tl = 1.525 * el,
        rl = el + 1,
        nl = 2 * Math.PI / 3,
        ol = 2 * Math.PI / 4.5,
        sl = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        il = {
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
          easeInBack: e => rl * e * e * e - el * e * e,
          easeOutBack: e => 1 + rl * Math.pow(e - 1, 3) + el * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - tl) / 2 : (Math.pow(2 * e - 2, 2) * ((tl + 1) * (2 * e - 2) + tl) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * nl),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * nl) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ol) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ol) / 2 + 1,
          easeInBounce: e => 1 - sl(1 - e),
          easeOutBounce: sl,
          easeInOutBounce: e => e < .5 ? (1 - sl(1 - 2 * e)) / 2 : (1 + sl(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        al = Symbol.for("FluidValue.get"),
        ll = Symbol.for("FluidValue.observers"),
        cl = e => Boolean(e && e[al]),
        ul = e => e && e[al] ? e[al]() : e,
        dl = e => e[ll] || null;

      function fl(e, t) {
        const r = e[ll];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var hl = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            pl(this, e)
          }
        },
        pl = (e, t) => gl(e, al, t);

      function ml(e, t) {
        if (e[al]) {
          let r = e[ll];
          r || gl(e, ll, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function vl(e, t) {
        const r = e[ll];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[ll] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var yl, gl = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        bl = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        _l = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        wl = new RegExp(`(${bl.source})(%|[a-z]+)`, "i"),
        xl = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        El = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Cl = e => {
          const [t, r] = Pl(e);
          if (!t || _a()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && El.test(r) ? Cl(r) : r || e
        },
        Pl = e => {
          const t = El.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        Sl = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        Ol = e => {
          yl || (yl = wa ? new RegExp(`(${Object.keys(wa).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => ul(e).replace(El, Cl).replace(_l, Qa).replace(yl, Qa)),
            r = t.map(e => e.match(bl).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => Ja({
              ...e,
              output: t
            }));
          return e => {
            const r = !wl.test(t[0]) && t.find(e => wl.test(e))?.replace(bl, "");
            let n = 0;
            return t[0].replace(bl, () => `${o[n++](e)}${r||""}`).replace(xl, Sl)
          }
        },
        Tl = "react-spring: ",
        jl = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${Tl}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Nl = jl(console.warn),
        Rl = jl(console.warn);

      function Il(e) {
        return da.str(e) && ("#" == e[0] || /\d/.test(e) || !_a() && El.test(e) || e in (wa || {}))
      }
      var kl = _a() ? F.useEffect : F.useLayoutEffect;

      function Dl() {
        const e = (0, F.useState)()[1],
          t = (() => {
            const e = (0, F.useRef)(!1);
            return kl(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Ll = e => (0, F.useEffect)(e, Al),
        Al = [],
        Ml = Symbol.for("Animated:node"),
        Bl = e => e && e[Ml],
        Hl = (e, t) => {
          return r = e, n = Ml, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        zl = e => e && e[Ml] && e[Ml].getPayload(),
        Vl = class {
          constructor() {
            Hl(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Fl = class e extends Vl {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, da.num(this._value) && (this.lastPosition = this._value)
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
            return da.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, da.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Gl = class e extends Fl {
          constructor(e) {
            super(0), this._string = null, this._toString = Ja({
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
            if (da.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Ja({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Ul = {
          dependencies: null
        },
        ql = class extends Vl {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return pa(this.source, (r, n) => {
              var o;
              (o = r) && o[Ml] === o ? t[n] = r.getValue(e) : cl(r) ? t[n] = ul(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && ha(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return pa(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Ul.dependencies && cl(e) && Ul.dependencies.add(e);
            const t = zl(e);
            t && ha(t, e => this.add(e))
          }
        },
        Xl = class e extends ql {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Kl)), !0)
          }
        };

      function Kl(e) {
        return (Il(e) ? Gl : Fl).create(e)
      }

      function Wl(e) {
        const t = Bl(e);
        return t ? t.constructor : da.arr(e) ? Xl : Il(e) ? Gl : Fl
      }
      var Zl = (e, t) => {
          const r = !da.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, F.forwardRef)((n, o) => {
            const s = (0, F.useRef)(null),
              i = r && (0, F.useCallback)(e => {
                s.current = function(e, t) {
                  return e && (da.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const r = new Set;
                return Ul.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new ql(e), Ul.dependencies = null, [e, r]
              }(n, t),
              c = Dl(),
              u = () => {
                const e = s.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && c()
              },
              d = new $l(u, l),
              f = (0, F.useRef)(void 0);
            kl(() => (f.current = d, ha(l, e => ml(e, d)), () => {
              f.current && (ha(f.current.deps, e => vl(e, f.current)), qi.cancel(f.current.update))
            })), (0, F.useEffect)(u, []), Ll(() => () => {
              const e = f.current;
              ha(e.deps, t => vl(t, e))
            });
            const h = t.getComponentProps(a.getValue());
            return F.createElement(e, {
              ...h,
              ref: i
            })
          })
        },
        $l = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && qi.write(this.update)
          }
        },
        Yl = Symbol.for("AnimatedComponent"),
        Ql = (e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new ql(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            s = e => {
              const t = Jl(e) || "Anonymous";
              return (e = da.str(e) ? s[e] || (s[e] = Zl(e, o)) : e[Yl] || (e[Yl] = Zl(e, o))).displayName = `Animated(${t})`, e
            };
          return pa(e, (t, r) => {
            da.arr(e) && (r = Jl(t)), s[r] = s(t)
          }), {
            animated: s
          }
        },
        Jl = e => da.str(e) ? e : e && da.str(e.displayName) ? e.displayName : da.fun(e) && e.name || null;

      function ec(e, ...t) {
        return da.fun(e) ? e(...t) : e
      }
      var tc = (e, t) => !0 === e || !!(t && e && (da.fun(e) ? e(t) : ma(e).includes(t))),
        rc = (e, t) => da.obj(e) ? t && e[t] : e,
        nc = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        oc = e => e,
        sc = (e, t = oc) => {
          let r = ic;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            da.und(r) || (n[o] = r)
          }
          return n
        },
        ic = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        ac = {
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

      function lc(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (pa(e, (e, n) => {
              ac[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return pa(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function cc(e) {
        return e = ul(e), da.arr(e) ? e.map(cc) : Il(e) ? ca.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function uc(e) {
        return da.fun(e) || da.arr(e) && da.obj(e[0])
      }

      function dc(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var fc = {
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
        hc = {
          ...fc.default,
          mass: 1,
          damping: 1,
          easing: il.linear,
          clamp: !1
        },
        pc = class {
          constructor() {
            this.velocity = 0, Object.assign(this, hc)
          }
        };

      function mc(e, t) {
        if (da.und(t.decay)) {
          const r = !da.und(t.tension) || !da.und(t.friction);
          !r && da.und(t.frequency) && da.und(t.damping) && da.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var vc = [],
        yc = class {
          constructor() {
            this.changed = !1, this.values = vc, this.toValues = null, this.fromValues = vc, this.config = new pc, this.immediate = !1
          }
        };

      function gc(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: s
      }) {
        return new Promise((i, a) => {
          let l, c, u = tc(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            da.und(r.pause) || (o.paused = tc(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || tc(e, t)), l = ec(r.delay || 0, t), e ? (o.resumeQueue.add(f), s.pause()) : (s.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - qi.now()
          }

          function f() {
            l > 0 && !ca.skipAnimation ? (o.delayed = !0, c = qi.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              s.start({
                ...r,
                callId: e,
                cancel: u
              }, i)
            } catch (e) {
              a(e)
            }
          }
        })
      }
      var bc = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? xc(e.get()) : t.every(e => e.noop) ? _c(e.get()) : wc(e.get(), t.every(e => e.finished)),
        _c = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        wc = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        xc = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Ec(e, t, r, n) {
        const {
          callId: o,
          parentId: s,
          onRest: i
        } = t, {
          asyncTo: a,
          promise: l
        } = r;
        return s || e !== a || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const c = sc(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && xc(n) || o !== r.asyncId && wc(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const s = new Pc,
                i = new Sc;
              return (async () => {
                if (ca.skipAnimation) throw Cc(r), i.result = wc(n, !1), d(i), i;
                h(s);
                const a = da.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, pa(c, (e, t) => {
                  da.und(a[t]) && (a[t] = e)
                });
                const l = await n.start(a);
                return h(s), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (ca.skipAnimation) return Cc(r), wc(n, !1);
          try {
            let t;
            t = da.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = wc(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof Pc) m = e.result;
            else {
              if (!(e instanceof Sc)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = s, r.asyncTo = s ? a : void 0, r.promise = s ? l : void 0)
          }
          return da.fun(i) && qi.batchedUpdates(() => {
            i(m, n, n.item)
          }), m
        })() : l
      }

      function Cc(e, t) {
        va(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Pc = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Sc = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Oc = e => e instanceof jc,
        Tc = 1,
        jc = class extends hl {
          constructor() {
            super(...arguments), this.id = Tc++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Bl(this);
            return e && e.getValue()
          }
          to(...e) {
            return ca.to(this, e)
          }
          interpolate(...e) {
            return Nl(`${Tl}The "interpolate" function is deprecated in v9 (use "to" instead)`), ca.to(this, e)
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
            fl(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || ja.sort(this), fl(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Nc = Symbol.for("SpringPhase"),
        Rc = e => (1 & e[Nc]) > 0,
        Ic = e => (2 & e[Nc]) > 0,
        kc = e => (4 & e[Nc]) > 0,
        Dc = (e, t) => t ? e[Nc] |= 3 : e[Nc] &= -3,
        Lc = (e, t) => t ? e[Nc] |= 4 : e[Nc] &= -5,
        Ac = class extends jc {
          constructor(e, t) {
            if (super(), this.animation = new yc, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !da.und(e) || !da.und(t)) {
              const r = da.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              da.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Ic(this) || this._state.asyncTo) || kc(this)
          }
          get goal() {
            return ul(this.animation.to)
          }
          get velocity() {
            const e = Bl(this);
            return e instanceof Fl ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return Rc(this)
          }
          get isAnimating() {
            return Ic(this)
          }
          get isPaused() {
            return kc(this)
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
              config: s
            } = n, i = zl(n.to);
            !i && cl(n.to) && (o = ma(ul(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const c = a.constructor == Gl ? 1 : i ? i[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = a.lastPosition, s.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = da.arr(s.velocity) ? s.velocity[l] : s.velocity;
                let i;
                const f = s.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (da.und(s.duration))
                  if (s.decay) {
                    const e = !0 === s.decay ? .998 : s.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(a.lastPosition - d) <= f, i = o * n
                  } else {
                    i = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = s.restVelocity || f / 10,
                      n = s.clamp ? 0 : s.bounce,
                      l = !da.und(n),
                      h = r == c ? a.v0 > 0 : r < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(i) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (i = -i * n, d = c)), i += (1e-6 * -s.tension * (d - c) + .001 * -s.friction * i) / s.mass * v, d += i * v
                  }
                else {
                  let n = 1;
                  s.duration > 0 && (this._memoizedDuration !== s.duration && (this._memoizedDuration = s.duration, a.durationProgress > 0 && (a.elapsedTime = s.duration * a.durationProgress, t = a.elapsedTime += e)), n = (s.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, a.durationProgress = n), d = r + s.easing(n) * (c - r), i = (d - a.lastPosition) / e, u = 1 == n
                }
                a.lastVelocity = i, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              i && !i[l].done && (u = !1), u ? a.done = !0 : t = !1, a.setValue(d, s.round) && (r = !0)
            });
            const a = Bl(this),
              l = a.getValue();
            if (t) {
              const e = ul(n.to);
              l === e && !r || s.decay ? r && s.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return qi.batchedUpdates(() => {
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
            if (Ic(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              qi.batchedUpdates(() => {
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
            return da.und(e) ? (r = this.queue || [], this.queue = []) : r = [da.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => bc(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), Cc(this._state, e && this._lastCallId), qi.batchedUpdates(() => this._stop(t, e)), this
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
            r = da.obj(r) ? r[t] : r, (null == r || uc(r)) && (r = void 0), n = da.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return Rc(this) || (e.reverse && ([r, n] = [n, r]), n = ul(n), da.und(n) ? Bl(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, sc(e, (e, t) => /^on/.test(t) ? rc(e, r) : e)), Fc(this, e, "onProps"), Gc(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const s = this._state;
            return gc(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: s,
              actions: {
                pause: () => {
                  kc(this) || (Lc(this, !0), ba(s.pauseQueue), Gc(this, "onPause", wc(this, Mc(this, this.animation.to)), this))
                },
                resume: () => {
                  kc(this) && (Lc(this, !1), Ic(this) && this._resume(), ba(s.resumeQueue), Gc(this, "onResume", wc(this, Mc(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Bc(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(xc(this));
            const n = !da.und(e.to),
              o = !da.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(xc(this));
              this._lastToId = t.callId
            }
            const {
              key: s,
              defaultProps: i,
              animation: a
            } = this, {
              to: l,
              from: c
            } = a;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || n || t.default && !da.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !fa(d, c);
            f && (a.from = d), d = ul(d);
            const h = !fa(u, l);
            h && this._focus(u);
            const p = uc(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (mc(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), mc(e, t), Object.assign(e, t);
              for (const t in hc) null == e[t] && (e[t] = hc[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: s
              } = e;
              da.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * s, e.friction = 4 * Math.PI * o * s / n)
            }(m, ec(t.config, s), t.config !== i.config ? ec(i.config, s) : void 0);
            let g = Bl(this);
            if (!g || da.und(u)) return r(wc(this, !0));
            const b = da.und(t.reset) ? o && !t.default : !da.und(d) && tc(t.reset, s),
              _ = b ? d : this.get(),
              w = cc(u),
              x = da.num(w) || da.arr(w) || Il(w),
              E = !p && (!x || tc(i.immediate || t.immediate, s));
            if (h) {
              const e = Wl(u);
              if (e !== g.constructor) {
                if (!E) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const C = g.constructor;
            let P = cl(u),
              S = !1;
            if (!P) {
              const e = b || !Rc(this) && f;
              (h || e) && (S = fa(cc(_), w), P = !S), (fa(a.immediate, E) || E) && fa(m.decay, v) && fa(m.velocity, y) || (P = !0)
            }
            if (S && Ic(this) && (a.changed && !b ? P = !0 : P || this._stop(l)), !p && ((P || cl(l)) && (a.values = g.getPayload(), a.toValues = cl(u) ? null : C == Gl ? [1] : ma(w)), a.immediate != E && (a.immediate = E, E || b || this._set(l)), P)) {
              const {
                onRest: e
              } = a;
              ha(Vc, e => Fc(this, t, e));
              const n = wc(this, Mc(this, l));
              ba(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && qi.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? ec(i.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(Ec(t.to, t, this._state, this)) : P ? this._start() : Ic(this) && !h ? this._pendingCalls.add(r) : r(_c(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (dl(this) && this._detach(), t.to = e, dl(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            cl(t) && (ml(t, this), Oc(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            cl(e) && vl(e, this)
          }
          _set(e, t = !0) {
            const r = ul(e);
            if (!da.und(r)) {
              const e = Bl(this);
              if (!e || !fa(r, e.getValue())) {
                const n = Wl(r);
                e && e.constructor == n ? e.setValue(r) : Hl(this, n.create(r)), e && qi.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return Bl(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Gc(this, "onStart", wc(this, Mc(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), ec(this.animation.onChange, e, this)), ec(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Bl(this).reset(ul(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Ic(this) || (Dc(this, !0), kc(this) || this._resume())
          }
          _resume() {
            ca.skipAnimation ? this.finish() : ja.start(this)
          }
          _stop(e, t) {
            if (Ic(this)) {
              Dc(this, !1);
              const r = this.animation;
              ha(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), fl(this, {
                type: "idle",
                parent: this
              });
              const n = t ? xc(this.get()) : wc(this.get(), Mc(this, e ?? r.to));
              ba(this._pendingCalls, n), r.changed && (r.changed = !1, Gc(this, "onRest", n, this))
            }
          }
        };

      function Mc(e, t) {
        const r = cc(t);
        return fa(cc(e.get()), r)
      }

      function Bc(e, t = e.loop, r = e.to) {
        const n = ec(t);
        if (n) {
          const o = !0 !== n && lc(n),
            s = (o || e).reverse,
            i = !o || o.reset;
          return Hc({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !s || uc(r) ? r : void 0,
            from: i ? e.from : void 0,
            reset: i,
            ...o
          })
        }
      }

      function Hc(e) {
        const {
          to: t,
          from: r
        } = e = lc(e), n = new Set;
        return da.obj(t) && zc(t, n), da.obj(r) && zc(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function zc(e, t) {
        pa(e, (e, r) => null != e && t.add(r))
      }
      var Vc = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Fc(e, t, r) {
        e.animation[r] = t[r] !== nc(t, r) ? rc(t[r], e.key) : void 0
      }

      function Gc(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Uc = ["onStart", "onChange", "onRest"],
        qc = 1,
        Xc = class {
          constructor(e, t) {
            this.id = qc++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              da.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(Hc(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = ma(e).map(Hc) : this.queue = [], this._flush ? this._flush(this, t) : (Yc(this, t), function(e, t) {
              return Promise.all(t.map(t => Kc(e, t))).then(t => bc(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              ha(ma(t), t => r[t].stop(!!e))
            } else Cc(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (da.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              ha(ma(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (da.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              ha(ma(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            pa(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, va(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const s = !n && this._started,
              i = o || s && r.size ? this.get() : null;
            o && t.size && va(t, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }), s && (this._started = !1, va(r, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            qi.onFrame(this._onFrame)
          }
        };
      async function Kc(e, t, r) {
        const {
          keys: n,
          to: o,
          from: s,
          loop: i,
          onRest: a,
          onResolve: l
        } = t, c = da.obj(t.default) && t.default;
        i && (t.loop = !1), !1 === o && (t.to = null), !1 === s && (t.from = null);
        const u = da.arr(o) || da.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : ha(Uc, r => {
          const n = t[r];
          if (da.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, ba(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === nc(t, "cancel");
        (u || h && d.asyncId) && f.push(gc(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: ua,
            resume: ua,
            start(t, r) {
              h ? (Cc(d, e._lastAsyncId), r(xc(e))) : (t.onRest = a, r(Ec(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = bc(e, await Promise.all(f));
        if (i && p.finished && (!r || !p.noop)) {
          const r = Bc(t, i, o);
          if (r) return Yc(e, [r]), Kc(e, r, !0)
        }
        return l && qi.batchedUpdates(() => l(p, e, e.item)), p
      }

      function Wc(e, t) {
        const r = {
          ...e.springs
        };
        return t && ha(ma(t), e => {
            da.und(e.keys) && (e = Hc(e)), da.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), $c(r, e, e => Zc(e))
          }),
          function(e, t) {
            pa(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, ml(t, e))
            })
          }(e, r), r
      }

      function Zc(e, t) {
        const r = new Ac;
        return r.key = e, t && ml(r, t), r
      }

      function $c(e, t, r) {
        t.keys && ha(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Yc(e, t) {
        ha(t, t => {
          $c(e.springs, t, t => Zc(t, e))
        })
      }
      var Qc = F.createContext({
          pause: !1,
          immediate: !1
        }),
        Jc = () => {
          const e = [],
            t = function(t) {
              Rl(`${Tl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return ha(e, (e, o) => {
                if (da.und(t)) n.push(e.start());
                else {
                  const s = r(t, e, o);
                  s && n.push(e.start(s))
                }
              }), n
            };
          t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
          }, t.delete = function(t) {
            const r = e.indexOf(t);
            ~r && e.splice(r, 1)
          }, t.pause = function() {
            return ha(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return ha(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            ha(e, (e, r) => {
              const n = da.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return ha(e, (e, n) => {
              if (da.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return ha(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return ha(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return da.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        eu = () => Jc(),
        tu = () => (0, F.useState)(eu)[0];

      function ru(e, t, r) {
        const n = da.fun(t) && t,
          {
            reset: o,
            sort: s,
            trail: i = 0,
            expires: a = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: c,
            ref: u,
            config: d
          } = n ? n() : t,
          f = (0, F.useMemo)(() => n || 3 == arguments.length ? Jc() : void 0, []),
          h = ma(e),
          p = [],
          m = (0, F.useRef)(null),
          v = o ? null : m.current;
        kl(() => {
          m.current = p
        }), Ll(() => (ha(p, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          ha(m.current, e => {
            e.expired && clearTimeout(e.expirationId), dc(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : nu++
              })
            }
            return da.und(r) ? e : da.fun(r) ? e.map(r) : ma(r)
          }(h, n ? n() : t, v),
          g = o && m.current || [];
        kl(() => ha(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          dc(e, f), ec(c, t, r)
        }));
        const b = [];
        if (v && ha(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
          }), ha(h, (e, t) => {
            p[t] || (p[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new Xc
            }, p[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          ha(b, (t, n) => {
            const o = v[n];
            ~t ? (e = p.indexOf(o), p[e] = {
              ...o,
              item: h[t]
            }) : r && p.splice(++e, 0, o)
          })
        }
        da.fun(s) && p.sort((e, t) => s(e.item, t.item));
        let _ = -i;
        const w = Dl(),
          x = sc(t),
          E = new Map,
          C = (0, F.useRef)(new Map),
          P = (0, F.useRef)(!1);
        ha(p, (e, r) => {
          const o = e.key,
            s = e.phase,
            c = n ? n() : t;
          let f, h;
          const p = ec(c.delay || 0, o);
          if ("mount" == s) f = c.enter, h = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != s)
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
          if (f = ec(f, e.item, r), f = da.obj(f) ? lc(f) : {
              to: f
            }, !f.config) {
            const t = d || x.config;
            f.config = ec(t, e.item, r, h)
          }
          _ += i;
          const g = {
            ...x,
            delay: p + _,
            ref: u,
            immediate: c.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == h && da.und(g.from)) {
            const o = n ? n() : t,
              s = da.und(o.initial) || v ? o.from : o.initial;
            g.from = ec(s, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            ec(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = ec(a, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                }
              }
              e && t.some(e => e.expired) && (C.current.delete(r), l && (P.current = !0), w())
            }
          };
          const S = Wc(e.ctrl, g);
          "leave" === h && l ? C.current.set(e, {
            phase: h,
            springs: S,
            payload: g
          }) : E.set(e, {
            phase: h,
            springs: S,
            payload: g
          })
        });
        const S = (0, F.useContext)(Qc),
          O = function(e) {
            const t = (0, F.useRef)(void 0);
            return (0, F.useEffect)(() => {
              t.current = e
            }), t.current
          }(S),
          T = S !== O && function(e) {
            for (const t in e) return !0;
            return !1
          }(S);
        kl(() => {
          T && ha(p, e => {
            e.ctrl.start({
              default: S
            })
          })
        }, [S]), ha(E, (e, t) => {
          if (C.current.size) {
            const e = p.findIndex(e => e.key === t.key);
            p.splice(e, 1)
          }
        }), kl(() => {
          ha(C.current.size ? C.current : E, ({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), T && "enter" == e && n.start({
              default: S
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || P.current ? (n.start(t), P.current && (P.current = !1)) : n.update(t))
          })
        }, o ? void 0 : r);
        const j = e => F.createElement(F.Fragment, null, p.map((t, r) => {
          const {
            springs: n
          } = E.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), s = da.str(t.key) || da.num(t.key) ? t.key : t.ctrl.id, i = F.version < "19.0.0", a = o?.props ?? {}, l = i ? o?.ref : a?.ref;
          return o && o.type ? F.createElement(o.type, {
            ...a,
            key: s,
            ref: l
          }) : o
        }));
        return f ? [j, f] : j
      }
      var nu = 1,
        ou = class extends jc {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Ja(...t);
            const r = this._get(),
              n = Wl(r);
            Hl(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            fa(t, this.get()) || (Bl(this).setValue(t), this._onChange(t, this.idle)), !this.idle && iu(this._active) && au(this)
          }
          _get() {
            const e = da.arr(this.source) ? this.source.map(ul) : ma(ul(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !iu(this._active) && (this.idle = !1, ha(zl(this), e => {
              e.done = !1
            }), ca.skipAnimation ? (qi.batchedUpdates(() => this.advance()), au(this)) : ja.start(this))
          }
          _attach() {
            let e = 1;
            ha(ma(this.source), t => {
              cl(t) && ml(t, this), Oc(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            ha(ma(this.source), e => {
              cl(e) && vl(e, this)
            }), this._active.clear(), au(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = ma(this.source).reduce((e, t) => Math.max(e, (Oc(t) ? t.priority : 0) + 1), 0))
          }
        };

      function su(e) {
        return !1 !== e.idle
      }

      function iu(e) {
        return !e.size || Array.from(e).every(su)
      }

      function au(e) {
        e.idle || (e.idle = !0, ha(zl(e), e => {
          e.done = !0
        }), fl(e, {
          type: "idle",
          parent: e
        }))
      }
      ca.assign({
        createStringInterpolator: Ol,
        to: (e, t) => new ou(e, t)
      }), ja.advance;
      var lu = r(18429),
        cu = /^--/;

      function uu(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || cu.test(e) || fu.hasOwnProperty(e) && fu[e] ? ("" + t).trim() : t + "px"
      }
      var du = {},
        fu = {
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
        hu = ["Webkit", "Ms", "Moz", "O"];
      fu = Object.keys(fu).reduce((e, t) => (hu.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), fu);
      var pu = /^(matrix|translate|scale|rotate|skew)/,
        mu = /^(translate)/,
        vu = /^(rotate|skew)/,
        yu = (e, t) => da.num(e) && 0 !== e ? e + t : e,
        gu = (e, t) => da.arr(e) ? e.every(e => gu(e, t)) : da.num(e) ? e === t : parseFloat(e) === t,
        bu = class extends ql {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              s = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), s.push(e => [`translate3d(${e.map(e=>yu(e,"px")).join(",")})`, gu(e, 0)])), pa(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), s.push(e => [e, "" === e]);
              else if (pu.test(t)) {
                if (delete n[t], da.und(e)) return;
                const r = mu.test(t) ? "px" : vu.test(t) ? "deg" : "";
                o.push(ma(e)), s.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${yu(o,r)})`, gu(o, 0)] : e => [`${t}(${e.map(e=>yu(e,r)).join(",")})`, gu(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new _u(o, s)), super(n)
          }
        },
        _u = class extends hl {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return ha(this.inputs, (r, n) => {
              const o = ul(r[0]),
                [s, i] = this.transforms[n](da.arr(o) ? o : r.map(ul));
              e += " " + s, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && ha(this.inputs, e => ha(e, e => cl(e) && ml(e, this)))
          }
          observerRemoved(e) {
            0 == e && ha(this.inputs, e => ha(e, e => cl(e) && vl(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), fl(this, e)
          }
        };
      ca.assign({
        batchedUpdates: lu.unstable_batchedUpdates,
        createStringInterpolator: Ol,
        colors: Da
      });
      var wu = Ql(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: s,
                scrollTop: i,
                scrollLeft: a,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : du[t] || (du[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== s && (e.textContent = s);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = uu(t, o[t]);
                cu.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new bu(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        xu = wu.animated,
        Eu = r(94118),
        Cu = r(95362),
        Pu = r(85426),
        Su = r(1573),
        Ou = r(86126),
        Tu = r(64728),
        ju = "undefined" != typeof document ? F.useLayoutEffect : function() {};

      function Nu(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 !== n--;)
              if (!Nu(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 !== n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 !== n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || Nu(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Ru(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Iu(e, t) {
        const r = Ru(e);
        return Math.round(t * r) / r
      }

      function ku(e) {
        const t = F.useRef(e);
        return ju(() => {
          t.current = e
        }), t
      }
      const Du = (e, t) => {
          const r = (0, Tu.cY)(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Lu = (e, t) => {
          const r = (0, Tu.BN)(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Au = (e, t) => ({
          fn: (0, Tu.ER)(e).fn,
          options: [e, t]
        }),
        Mu = (e, t) => {
          const r = (0, Tu.UU)(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Bu = (e, t) => {
          const r = (0, Tu.Ej)(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Hu = (e, t) => {
          const r = (0, Tu.jD)(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        zu = (e, t) => {
          const r = (e => ({
            name: "arrow",
            options: e,
            fn(t) {
              const {
                element: r,
                padding: n
              } = "function" == typeof e ? e(t) : e;
              return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? (0, Tu.UE)({
                element: r.current,
                padding: n
              }).fn(t) : {} : r ? (0, Tu.UE)({
                element: r,
                padding: n
              }).fn(t) : {};
              var o
            }
          }))(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        };
      var Vu = r(62228),
        Fu = F.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...s
          } = e;
          return (0, P.jsx)(Vu.sG.svg, {
            ...s,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, P.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Fu.displayName = "Arrow";
      var Gu = Fu,
        Uu = r(76286),
        qu = r(63155);

      function Xu(e) {
        const [t, r] = F.useState(void 0);
        return (0, qu.N)(() => {
          if (e) {
            r({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver(t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const n = t[0];
              let o, s;
              if ("borderBoxSize" in n) {
                const e = n.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, s = t.blockSize
              } else o = e.offsetWidth, s = e.offsetHeight;
              r({
                width: o,
                height: s
              })
            });
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          r(void 0)
        }, [e]), t
      }
      var Ku = "Popper",
        [Wu, Zu] = (0, Pu.A)(Ku),
        [$u, Yu] = Wu(Ku),
        Qu = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = F.useState(null);
          return (0, P.jsx)($u, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      Qu.displayName = Ku;
      var Ju = "PopperAnchor",
        ed = F.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, s = Yu(Ju, r), i = F.useRef(null), a = (0, Cu.s)(t, i), l = F.useRef(null);
          return F.useEffect(() => {
            const e = l.current;
            l.current = n?.current || i.current, e !== l.current && s.onAnchorChange(l.current)
          }), n ? null : (0, P.jsx)(Vu.sG.div, {
            ...o,
            ref: a
          })
        });
      ed.displayName = Ju;
      var td = "PopperContent",
        [rd, nd] = Wu(td),
        od = F.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: s = "center",
            alignOffset: i = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: c = [],
            collisionPadding: u = 0,
            sticky: d = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: h = "optimized",
            onPlaced: p,
            ...m
          } = e, v = Yu(td, r), [y, g] = F.useState(null), b = (0, Cu.s)(t, e => g(e)), [_, w] = F.useState(null), x = Xu(_), E = x?.width ?? 0, C = x?.height ?? 0, S = n + ("center" !== s ? "-" + s : ""), O = "number" == typeof u ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
          }, T = Array.isArray(c) ? c : [c], j = T.length > 0, N = {
            padding: O,
            boundary: T.filter(ld),
            altBoundary: j
          }, {
            refs: R,
            floatingStyles: I,
            placement: k,
            isPositioned: D,
            middlewareData: L
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: r = "absolute",
              middleware: n = [],
              platform: o,
              elements: {
                reference: s,
                floating: i
              } = {},
              transform: a = !0,
              whileElementsMounted: l,
              open: c
            } = e, [u, d] = F.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, h] = F.useState(n);
            Nu(f, n) || h(n);
            const [p, m] = F.useState(null), [v, y] = F.useState(null), g = F.useCallback(e => {
              e !== x.current && (x.current = e, m(e))
            }, []), b = F.useCallback(e => {
              e !== E.current && (E.current = e, y(e))
            }, []), _ = s || p, w = i || v, x = F.useRef(null), E = F.useRef(null), C = F.useRef(u), P = null != l, S = ku(l), O = ku(o), T = ku(c), j = F.useCallback(() => {
              if (!x.current || !E.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              O.current && (e.platform = O.current), (0, Tu.rD)(x.current, E.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== T.current
                };
                N.current && !Nu(C.current, t) && (C.current = t, lu.flushSync(() => {
                  d(t)
                }))
              })
            }, [f, t, r, O, T]);
            ju(() => {
              !1 === c && C.current.isPositioned && (C.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [c]);
            const N = F.useRef(!1);
            ju(() => (N.current = !0, () => {
              N.current = !1
            }), []), ju(() => {
              if (_ && (x.current = _), w && (E.current = w), _ && w) {
                if (S.current) return S.current(_, w, j);
                j()
              }
            }, [_, w, j, S, P]);
            const R = F.useMemo(() => ({
                reference: x,
                floating: E,
                setReference: g,
                setFloating: b
              }), [g, b]),
              I = F.useMemo(() => ({
                reference: _,
                floating: w
              }), [_, w]),
              k = F.useMemo(() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!I.floating) return e;
                const t = Iu(I.floating, u.x),
                  n = Iu(I.floating, u.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...Ru(I.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }, [r, a, I.floating, u.x, u.y]);
            return F.useMemo(() => ({
              ...u,
              update: j,
              refs: R,
              elements: I,
              floatingStyles: k
            }), [u, j, R, I, k])
          }({
            strategy: "fixed",
            placement: S,
            whileElementsMounted: (...e) => (0, Tu.ll)(...e, {
              animationFrame: "always" === h
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [Du({
              mainAxis: o + C,
              alignmentAxis: i
            }), l && Lu({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === d ? Au() : void 0,
              ...N
            }), l && Mu({
              ...N
            }), Bu({
              ...N,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: n
              }) => {
                const {
                  width: o,
                  height: s
                } = t.reference, i = e.floating.style;
                i.setProperty("--radix-popper-available-width", `${r}px`), i.setProperty("--radix-popper-available-height", `${n}px`), i.setProperty("--radix-popper-anchor-width", `${o}px`), i.setProperty("--radix-popper-anchor-height", `${s}px`)
              }
            }), _ && zu({
              element: _,
              padding: a
            }), cd({
              arrowWidth: E,
              arrowHeight: C
            }), f && Hu({
              strategy: "referenceHidden",
              ...N
            })]
          }), [A, M] = ud(k), B = (0, Uu.c)(p);
          (0, qu.N)(() => {
            D && B?.()
          }, [D, B]);
          const H = L.arrow?.x,
            z = L.arrow?.y,
            V = 0 !== L.arrow?.centerOffset,
            [G, U] = F.useState();
          return (0, qu.N)(() => {
            y && U(window.getComputedStyle(y).zIndex)
          }, [y]), (0, P.jsx)("div", {
            ref: R.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: D ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: G,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, P.jsx)(rd, {
              scope: r,
              placedSide: A,
              onArrowChange: w,
              arrowX: H,
              arrowY: z,
              shouldHideArrow: V,
              children: (0, P.jsx)(Vu.sG.div, {
                "data-side": A,
                "data-align": M,
                ...m,
                ref: b,
                style: {
                  ...m.style,
                  animation: D ? void 0 : "none"
                }
              })
            })
          })
        });
      od.displayName = td;
      var sd = "PopperArrow",
        id = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        ad = F.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = nd(sd, r), s = id[o.placedSide];
          return (0, P.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [s]: 0,
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
            children: (0, P.jsx)(Gu, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function ld(e) {
        return null !== e
      }
      ad.displayName = sd;
      var cd = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, s = 0 !== o.arrow?.centerOffset, i = s ? 0 : e.arrowWidth, a = s ? 0 : e.arrowHeight, [l, c] = ud(r), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], d = (o.arrow?.x ?? 0) + i / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let h = "",
            p = "";
          return "bottom" === l ? (h = s ? u : `${d}px`, p = -a + "px") : "top" === l ? (h = s ? u : `${d}px`, p = `${n.floating.height+a}px`) : "right" === l ? (h = -a + "px", p = s ? u : `${f}px`) : "left" === l && (h = `${n.floating.width+a}px`, p = s ? u : `${f}px`), {
            data: {
              x: h,
              y: p
            }
          }
        }
      });

      function ud(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var dd = Qu,
        fd = ed,
        hd = od,
        pd = ad,
        md = F.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, s] = F.useState(!1);
          (0, qu.N)(() => s(!0), []);
          const i = r || o && globalThis?.document?.body;
          return i ? lu.createPortal((0, P.jsx)(Vu.sG.div, {
            ...n,
            ref: t
          }), i) : null
        });
      md.displayName = "Portal";
      var vd = r(53146),
        yd = Symbol("radix.slottable");
      var gd = r(53054),
        bd = Object.freeze({
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
        _d = F.forwardRef((e, t) => (0, P.jsx)(Vu.sG.span, {
          ...e,
          ref: t,
          style: {
            ...bd,
            ...e.style
          }
        }));
      _d.displayName = "VisuallyHidden";
      var wd = _d,
        [xd, Ed] = (0, Pu.A)("Tooltip", [Zu]),
        Cd = Zu(),
        Pd = "TooltipProvider",
        Sd = 700,
        Od = "tooltip.open",
        [Td, jd] = xd(Pd),
        Nd = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Sd,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: s
          } = e, i = F.useRef(!0), a = F.useRef(!1), l = F.useRef(0);
          return F.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, P.jsx)(Td, {
            scope: t,
            isOpenDelayedRef: i,
            delayDuration: r,
            onOpen: F.useCallback(() => {
              window.clearTimeout(l.current), i.current = !1
            }, []),
            onClose: F.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => i.current = !0, n)
            }, [n]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: F.useCallback(e => {
              a.current = e
            }, []),
            disableHoverableContent: o,
            children: s
          })
        };
      Nd.displayName = Pd;
      var Rd = "Tooltip",
        [Id, kd] = xd(Rd),
        Dd = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: i,
            delayDuration: a
          } = e, l = jd(Rd, e.__scopeTooltip), c = Cd(t), [u, d] = F.useState(null), f = (0, Ou.B)(), h = F.useRef(0), p = i ?? l.disableHoverableContent, m = a ?? l.delayDuration, v = F.useRef(!1), [y, g] = (0, gd.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Od))) : l.onClose(), s?.(e)
            },
            caller: Rd
          }), b = F.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), _ = F.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, v.current = !1, g(!0)
          }, [g]), w = F.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, g(!1)
          }, [g]), x = F.useCallback(() => {
            window.clearTimeout(h.current), h.current = window.setTimeout(() => {
              v.current = !0, g(!0), h.current = 0
            }, m)
          }, [m, g]);
          return F.useEffect(() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }, []), (0, P.jsx)(dd, {
            ...c,
            children: (0, P.jsx)(Id, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: d,
              onTriggerEnter: F.useCallback(() => {
                l.isOpenDelayedRef.current ? x() : _()
              }, [l.isOpenDelayedRef, x, _]),
              onTriggerLeave: F.useCallback(() => {
                p ? w() : (window.clearTimeout(h.current), h.current = 0)
              }, [w, p]),
              onOpen: _,
              onClose: w,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      Dd.displayName = Rd;
      var Ld = "TooltipTrigger",
        Ad = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = kd(Ld, r), s = jd(Ld, r), i = Cd(r), a = F.useRef(null), l = (0, Cu.s)(t, a, o.onTriggerChange), c = F.useRef(!1), u = F.useRef(!1), d = F.useCallback(() => c.current = !1, []);
          return F.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, P.jsx)(fd, {
            asChild: !0,
            ...i,
            children: (0, P.jsx)(Vu.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, Eu.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (u.current || s.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              }),
              onPointerLeave: (0, Eu.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), u.current = !1
              }),
              onPointerDown: (0, Eu.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              }),
              onFocus: (0, Eu.mK)(e.onFocus, () => {
                c.current || o.onOpen()
              }),
              onBlur: (0, Eu.mK)(e.onBlur, o.onClose),
              onClick: (0, Eu.mK)(e.onClick, o.onClose)
            })
          })
        });
      Ad.displayName = Ld;
      var Md = "TooltipPortal",
        [Bd, Hd] = xd(Md, {
          forceMount: void 0
        }),
        zd = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = kd(Md, t);
          return (0, P.jsx)(Bd, {
            scope: t,
            forceMount: r,
            children: (0, P.jsx)(vd.C, {
              present: r || s.open,
              children: (0, P.jsx)(md, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      zd.displayName = Md;
      var Vd = "TooltipContent",
        Fd = F.forwardRef((e, t) => {
          const r = Hd(Vd, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...s
            } = e,
            i = kd(Vd, e.__scopeTooltip);
          return (0, P.jsx)(vd.C, {
            present: n || i.open,
            children: i.disableHoverableContent ? (0, P.jsx)(Kd, {
              side: o,
              ...s,
              ref: t
            }) : (0, P.jsx)(Gd, {
              side: o,
              ...s,
              ref: t
            })
          })
        }),
        Gd = F.forwardRef((e, t) => {
          const r = kd(Vd, e.__scopeTooltip),
            n = jd(Vd, e.__scopeTooltip),
            o = F.useRef(null),
            s = (0, Cu.s)(t, o),
            [i, a] = F.useState(null),
            {
              trigger: l,
              onClose: c
            } = r,
            u = o.current,
            {
              onPointerInTransitChange: d
            } = n,
            f = F.useCallback(() => {
              a(null), d(!1)
            }, [d]),
            h = F.useCallback((e, t) => {
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
                    s = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, o, s)) {
                    case s:
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
                s = function(e) {
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
              a(s), d(!0)
            }, [d]);
          return F.useEffect(() => () => f(), [f]), F.useEffect(() => {
            if (l && u) {
              const e = e => h(e, u),
                t = e => h(e, l);
              return l.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t)
              }
            }
          }, [l, u, h, f]), F.useEffect(() => {
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
                    for (let e = 0, s = t.length - 1; e < t.length; s = e++) {
                      const i = t[e],
                        a = t[s],
                        l = i.x,
                        c = i.y,
                        u = a.x,
                        d = a.y;
                      c > n != d > n && r < (u - l) * (n - c) / (d - c) + l && (o = !o)
                    }
                    return o
                  }(r, i);
                n ? f() : o && (f(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, u, i, c, f]), (0, P.jsx)(Kd, {
            ...e,
            ref: s
          })
        }),
        [Ud, qd] = xd(Rd, {
          isInside: !1
        }),
        Xd = function(e) {
          const t = ({
            children: e
          }) => (0, P.jsx)(P.Fragment, {
            children: e
          });
          return t.displayName = `${e}.Slottable`, t.__radixId = yd, t
        }("TooltipContent"),
        Kd = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            ...a
          } = e, l = kd(Vd, r), c = Cd(r), {
            onClose: u
          } = l;
          return F.useEffect(() => (document.addEventListener(Od, u), () => document.removeEventListener(Od, u)), [u]), F.useEffect(() => {
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
          }, [l.trigger, u]), (0, P.jsx)(Su.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, P.jsxs)(hd, {
              "data-state": l.stateAttribute,
              ...c,
              ...a,
              ref: t,
              style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, P.jsx)(Xd, {
                children: n
              }), (0, P.jsx)(Ud, {
                scope: r,
                isInside: !0,
                children: (0, P.jsx)(wd, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Fd.displayName = Vd;
      var Wd = "TooltipArrow",
        Zd = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Cd(r);
          return qd(Wd, r).isInside ? null : (0, P.jsx)(pd, {
            ...o,
            ...n,
            ref: t
          })
        });
      Zd.displayName = Wd;
      var $d = Nd,
        Yd = Dd,
        Qd = Ad,
        Jd = zd,
        ef = Fd,
        tf = Zd;
      const rf = (0, F.createContext)(null);

      function nf() {
        const e = (0, F.useContext)(rf);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const of = ({
        children: e,
        delayDuration: t = 0,
        defaultOpen: r,
        onOpenChange: n,
        ...o
      }) => {
        const [s = !1, i] = (0, W.ic)({
          defaultProp: r,
          prop: o.isOpen,
          onChange: n
        });
        return (0, P.jsx)($d, {
          delayDuration: t,
          children: (0, P.jsx)(rf.Provider, {
            value: {
              isOpen: s,
              ...o
            },
            children: (0, P.jsx)(Yd, {
              open: s,
              onOpenChange: i,
              children: e
            })
          })
        })
      }, sf = (0, F.forwardRef)(({
        children: e,
        testId: t,
        ...r
      }, n) => (0, P.jsx)(Qd, {
        asChild: !0,
        "data-testid": t,
        ...r,
        ref: n,
        children: e
      })), af = (0, F.forwardRef)(({
        testId: e,
        side: t = "top",
        sideOffset: r = 8,
        align: n = "center",
        alignOffset: o = 0,
        avoidCollisions: s = !0,
        sticky: i = "partial",
        ...a
      }, l) => {
        const {
          isOpen: c
        } = nf(), u = (0, W.jt)(), d = xu(ef), f = ru(c, {
          delay: c ? 0 : 200,
          from: {
            opacity: 0
          },
          enter: {
            opacity: 1
          },
          leave: {
            opacity: 0
          },
          config: fc.stiff,
          immediate: u
        }), h = (0, q.v6)({
          "data-testid": e,
          side: t,
          align: n,
          sticky: i,
          sideOffset: r,
          alignOffset: o,
          avoidCollisions: s,
          className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
        }, a);
        return f(e => (0, P.jsx)(d, {
          ...h,
          style: e,
          ref: l
        }))
      }), lf = (0, F.forwardRef)(({
        testId: e
      }, t) => {
        const r = (0, q.v6)({
          className: "foundry_h3lgaa1",
          "data-testid": e
        });
        return (0, P.jsx)(tf, {
          ...r,
          ref: t
        })
      }), cf = Jd;

      function uf(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var df = r(77768);

      function ff(e) {
        const t = F.useRef({
          value: e,
          previous: e
        });
        return F.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
      var hf = r(13165),
        pf = ["PageUp", "PageDown"],
        mf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        vf = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        yf = "Slider",
        [gf, bf, _f] = (0, hf.N)(yf),
        [wf, xf] = (0, Pu.A)(yf, [_f]),
        [Ef, Cf] = wf(yf),
        Pf = F.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: s = 1,
            orientation: i = "horizontal",
            disabled: a = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: c = [n],
            value: u,
            onValueChange: d = () => {},
            onValueCommit: f = () => {},
            inverted: h = !1,
            form: p,
            ...m
          } = e, v = F.useRef(new Set), y = F.useRef(0), g = "horizontal" === i ? Tf : jf, [b = [], _] = (0, gd.i)({
            prop: u,
            defaultProp: c,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), w = F.useRef(b);

          function x(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const i = function(e) {
                return (String(e).split(".")[1] || "").length
              }(s),
              a = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / s) * s + n, i),
              c = uf(a, [n, o]);
            _((e = []) => {
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
                }(n, l * s)) {
                y.current = n.indexOf(c);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, P.jsx)(Ef, {
            scope: e.__scopeSlider,
            name: r,
            disabled: a,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: b,
            orientation: i,
            form: p,
            children: (0, P.jsx)(gf.Provider, {
              scope: e.__scopeSlider,
              children: (0, P.jsx)(gf.Slot, {
                scope: e.__scopeSlider,
                children: (0, P.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, Eu.mK)(m.onPointerDown, () => {
                    a || (w.current = b)
                  }),
                  min: n,
                  max: o,
                  inverted: h,
                  onSlideStart: a ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map(e => Math.abs(e - t)),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(b, e);
                    x(e, t)
                  },
                  onSlideMove: a ? void 0 : function(e) {
                    x(e, y.current)
                  },
                  onSlideEnd: a ? void 0 : function() {
                    const e = w.current[y.current];
                    b[y.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !a && x(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !a && x(o, b.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!a) {
                      const r = pf.includes(e.key) || e.shiftKey && mf.includes(e.key) ? 10 : 1,
                        n = y.current;
                      x(b[n] + s * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      Pf.displayName = yf;
      var [Sf, Of] = wf(yf, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Tf = F.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: s,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: l,
          onStepKeyDown: c,
          ...u
        } = e, [d, f] = F.useState(null), h = (0, Cu.s)(t, e => f(e)), p = F.useRef(void 0), m = (0, df.jH)(o), v = "ltr" === m, y = v && !s || !v && s;

        function g(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = zf([0, t.width], y ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, P.jsx)(Sf, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, P.jsx)(Nf, {
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
              a?.(t)
            },
            onSlideEnd: () => {
              p.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = vf[y ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), jf = F.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: s,
          onSlideMove: i,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...c
        } = e, u = F.useRef(null), d = (0, Cu.s)(t, u), f = F.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = zf([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, P.jsx)(Sf, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, P.jsx)(Nf, {
            "data-orientation": "vertical",
            ...c,
            ref: d,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = p(e.clientY);
              s?.(t)
            },
            onSlideMove: e => {
              const t = p(e.clientY);
              i?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, a?.()
            },
            onStepKeyDown: e => {
              const t = vf[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Nf = F.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: s,
          onHomeKeyDown: i,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...c
        } = e, u = Cf(yf, r);
        return (0, P.jsx)(Vu.sG.span, {
          ...c,
          ref: t,
          onKeyDown: (0, Eu.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (i(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : pf.concat(mf).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, Eu.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, Eu.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, Eu.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
          })
        })
      }), Rf = "SliderTrack", If = F.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Cf(Rf, r);
        return (0, P.jsx)(Vu.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      If.displayName = Rf;
      var kf = "SliderRange",
        Df = F.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Cf(kf, r), s = Of(kf, r), i = F.useRef(null), a = (0, Cu.s)(t, i), l = o.values.length, c = o.values.map(e => Hf(e, o.min, o.max)), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
          return (0, P.jsx)(Vu.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: a,
            style: {
              ...e.style,
              [s.startEdge]: u + "%",
              [s.endEdge]: d + "%"
            }
          })
        });
      Df.displayName = kf;
      var Lf = "SliderThumb",
        Af = F.forwardRef((e, t) => {
          const r = bf(e.__scopeSlider),
            [n, o] = F.useState(null),
            s = (0, Cu.s)(t, e => o(e)),
            i = F.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, P.jsx)(Mf, {
            ...e,
            ref: s,
            index: i
          })
        }),
        Mf = F.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...s
          } = e, i = Cf(Lf, r), a = Of(Lf, r), [l, c] = F.useState(null), u = (0, Cu.s)(t, e => c(e)), d = !l || i.form || !!l.closest("form"), f = Xu(l), h = i.values[n], p = void 0 === h ? 0 : Hf(h, i.min, i.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, i.values.length), v = f?.[a.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - zf([0, 50], [0, n])(t) * r) * r
          }(v, p, a.direction) : 0;
          return F.useEffect(() => {
            if (l) return i.thumbs.add(l), () => {
              i.thumbs.delete(l)
            }
          }, [l, i.thumbs]), (0, P.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${p}% + ${y}px)`
            },
            children: [(0, P.jsx)(gf.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, P.jsx)(Vu.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": i.min,
                "aria-valuenow": h,
                "aria-valuemax": i.max,
                "aria-orientation": i.orientation,
                "data-orientation": i.orientation,
                "data-disabled": i.disabled ? "" : void 0,
                tabIndex: i.disabled ? void 0 : 0,
                ...s,
                ref: u,
                style: void 0 === h ? {
                  display: "none"
                } : e.style,
                onFocus: (0, Eu.mK)(e.onFocus, () => {
                  i.valueIndexToChangeRef.current = n
                })
              })
            }), d && (0, P.jsx)(Bf, {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: h
            }, n)]
          })
        });
      Af.displayName = Lf;
      var Bf = F.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = F.useRef(null),
          s = (0, Cu.s)(o, n),
          i = ff(t);
        return F.useEffect(() => {
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
        }, [i, t]), (0, P.jsx)(Vu.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: s,
          defaultValue: t
        })
      });

      function Hf(e, t, r) {
        return uf(100 / (r - t) * (e - t), [0, 100])
      }

      function zf(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      Bf.displayName = "RadioBubbleInput";
      var Vf = Pf,
        Ff = If,
        Gf = Df,
        Uf = Af,
        qf = r(53245);
      const Xf = (0, F.createContext)({
          triggerRef: (0, F.createRef)(),
          triggerBorderRef: (0, F.createRef)(),
          thumbnailRef: (0, F.createRef)(),
          openIconRef: (0, F.createRef)(),
          overlayRef: (0, F.createRef)(),
          contentRef: (0, F.createRef)(),
          containerRef: (0, F.createRef)(),
          imageRef: (0, F.createRef)(),
          placeholderRef: (0, F.createRef)(),
          zoomPanRef: (0, F.createRef)(),
          captionRef: (0, F.createRef)(),
          controlsRef: (0, F.createRef)(),
          closeRef: (0, F.createRef)(),
          zoomRef: (0, F.createRef)(),
          zoomInRef: (0, F.createRef)(),
          zoomSliderRef: (0, F.createRef)(),
          zoomOutRef: (0, F.createRef)(),
          resetRef: (0, F.createRef)(),
          downloadRef: (0, F.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        Kf = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: s = 300,
          zoomLevelStep: i = 100,
          clickAction: a = "close",
          doubleTapAction: l,
          tapAction: c,
          hideTrigger: u = !0,
          ...d
        }) => {
          const f = (() => {
              const {
                locale: e
              } = Y();
              return e
            })(),
            h = (0, W.rl)(),
            p = (0, F.useRef)(null),
            m = (0, F.useRef)(null),
            v = (0, F.useRef)(null),
            y = (0, F.useRef)(null),
            g = (0, F.useRef)(null),
            b = (0, F.useRef)(null),
            _ = (0, F.useRef)(null),
            w = (0, F.useRef)(null),
            x = (0, F.useRef)(null),
            E = (0, F.useRef)(null),
            C = (0, F.useRef)(null),
            S = (0, F.useRef)(null),
            O = (0, F.useRef)(null),
            T = (0, F.useRef)(null),
            j = (0, F.useRef)(null),
            N = (0, F.useRef)(null),
            R = (0, F.useRef)(null),
            I = (0, F.useRef)(null),
            k = (0, F.useRef)(null),
            [D = !1, L] = (0, W.ic)({
              prop: t || n,
              onChange: r
            }),
            A = (0, F.useRef)(null);
          return A.current || (A.current = new ji({
            zoomLevelOptions: {
              max: s,
              min: o,
              step: i
            },
            actionOptions: {
              click: a,
              tap: c || (h ? "toggle-controls" : "close"),
              doubleTap: l || (h ? "zoom" : "none")
            }
          })), (0, P.jsx)(yi, {
            messages: gi,
            locale: f,
            children: (0, P.jsx)(Xf.Provider, {
              value: {
                triggerRef: p,
                triggerBorderRef: m,
                thumbnailRef: v,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: _,
                zoomPanRef: w,
                imageRef: x,
                placeholderRef: E,
                captionRef: C,
                controlsRef: S,
                closeRef: O,
                zoomRef: T,
                zoomInRef: j,
                zoomSliderRef: N,
                zoomOutRef: R,
                resetRef: I,
                downloadRef: k,
                open: D,
                setOpen: L,
                altText: e,
                hideTrigger: u,
                slide: A.current
              },
              children: (0, P.jsx)(Zf, {
                ...d
              })
            })
          })
        },
        Wf = (0, F.createContext)({
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
        Zf = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, F.useContext)(Xf), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, yt.useGSAP)(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: s,
              triggerRef: i,
              triggerBorderRef: a,
              thumbnailRef: l,
              containerRef: c,
              zoomPanRef: u,
              placeholderRef: d,
              imageRef: f
            } = (0, F.useContext)(Xf), h = (0, F.useRef)(null);
            h.current || (h.current = vt.gsap.timeline({
              defaults: nn
            }));
            const p = (0, F.useCallback)(e => {
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
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), vt.gsap.set([d.current, f.current], {
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
                }), vt.gsap.set([f.current], {
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
                }), n && h.current.to([i.current, a.current], {
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
                }, 0), h.current.fromTo([s.current], {
                  opacity: 0,
                  [sn]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [sn]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (h.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Pr(f.current), t.closing || (vt.gsap.set([f.current], {
                  visibility: "visible",
                  ...on
                }), vt.gsap.set([d.current], {
                  visibility: "hidden",
                  ...on
                }))))
              }),
              v = e(async () => {
                t.close(), h.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await h.current.reverse()
              }),
              y = (0, F.useCallback)(async e => {
                e || (window.addEventListener("click", p), await v(), window.removeEventListener("click", p)), r(e)
              }, [r]),
              g = (0, F.useCallback)(() => y(!1), [y]);
            return {
              onOpenChange: y,
              openAnim: m,
              close: g
            }
          })(), {
            update: s,
            zoomIn: i,
            zoomOut: a,
            zoomTo: l,
            resetZoom: c,
            toggleControls: u
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = (0, yt.useGSAP)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: s,
              containerRef: i,
              placeholderRef: a
            } = (0, F.useContext)(Xf), l = t(async e => {
              r.zoomTo(e), vt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...on
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), vt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...on
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), vt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...on
              })
            }), d = t(async () => {
              r.zoomAndPanToInitial(), vt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...on
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              vt.gsap.to([s.current], {
                opacity: e,
                [sn]: t,
                ...on
              })
            }), h = t(async () => {
              vt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...on
              })
            }), p = (0, F.useCallback)(() => {
              n.current && o.current && (r.resize(), vt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...on
              }), vt.gsap.set([n.current, a.current], {
                ...r.getUpdatedContentSize(),
                ...on
              }), vt.gsap.set([i.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }, []);
            return (0, F.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", h), r.addEventListener("toggle-controls", f), window.addEventListener("resize", p), () => {
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
          }), d = (0, q.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, P.jsx)(Wf.Provider, {
            value: {
              update: s,
              openAnim: n,
              close: o,
              zoomIn: i,
              zoomOut: a,
              zoomTo: l,
              resetZoom: c,
              toggleControls: u,
              onOpenChange: r
            },
            children: (0, P.jsx)(qf.bL, {
              ...d
            })
          })
        },
        $f = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = di(),
            {
              triggerRef: s,
              triggerBorderRef: i,
              altText: a
            } = (0, F.useContext)(Xf),
            l = (0, W.UP)(s, n),
            c = (0, q.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Ri, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, P.jsx)(qf.l9, {
            ref: l,
            ...c,
            children: (0, P.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: i,
              children: (0, P.jsx)(Z.xV, {
                children: t
              })
            })
          })
        }),
        Yf = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, F.useContext)(Xf), s = (0, W.UP)(o, n), i = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? Z.DX : "img";
          return (0, P.jsx)(a, {
            ref: s,
            ...i
          })
        }),
        Qf = (0, F.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, F.useContext)(Xf), o = (0, W.UP)(n, r), s = (0, q.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), i = e ? Z.DX : fe.Maximize2;
          return (0, P.jsx)(i, {
            ref: o,
            ...s
          })
        }),
        Jf = ({
          ...e
        }) => (0, P.jsx)(qf.ZL, {
          ...e
        }),
        eh = (0, F.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, F.useContext)(Xf), o = (0, W.UP)(n, r), s = (0, q.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, P.jsx)(qf.hJ, {
            ref: o,
            ...s
          })
        }),
        th = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, F.useContext)(Wf), {
            contentRef: s,
            altText: i,
            triggerRef: a
          } = (0, F.useContext)(Xf), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, F.useContext)(Xf), [t, r] = (0, F.useState)(e.getCursor()), n = (0, F.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, F.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), c = (0, Ni.m)("dark"), u = (0, W.UP)(s, n), d = (0, q.v6)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, a),
            className: (0, de.clsx)("foundry_1a74xwb9", c),
            style: {
              cursor: l
            }
          });
          return (0, P.jsxs)(qf.UC, {
            ref: u,
            ...d,
            children: [(0, P.jsx)(Z.s6, {
              children: (0, P.jsx)(qf.hE, {
                children: i
              })
            }), t]
          })
        }),
        rh = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, F.useContext)(Xf);
          (() => {
            const {
              contextSafe: e
            } = (0, yt.useGSAP)(), {
              toggleControls: t
            } = (0, F.useContext)(Wf), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: s,
              slide: i
            } = (0, F.useContext)(Xf), a = e(e => {
              e.pinching || i.zoomHandler.pinching || (i.dragHandler.handleDrag(e), i.dragHandler.animate && !i.closing && (vt.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...on
              }), vt.gsap.to([o.current], {
                opacity: i.getOverlayOpacity(),
                ...on
              }), vt.gsap.to([s.current], {
                opacity: i.getControlsOpacity(),
                ...on
              })))
            }), l = e(e => {
              e.pinching || i.zoomHandler.pinching || (i.scrollWheel.handleWheel(e), i.closing || vt.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...on
              }))
            }), c = e(e => {
              !e.pinching && !i.zoomHandler.pinching || i.dragHandler.dragging || (i.zoomHandler.handleZoom(e), i.zoomHandler.animate && !i.closing && (vt.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...on
              }), vt.gsap.to([o.current], {
                opacity: i.getOverlayOpacity(),
                ...on
              }), vt.gsap.to([s.current], {
                opacity: i.getControlsOpacity(),
                ...on
              })))
            }), u = (0, F.useCallback)(() => {
              i.controlsVisible || t()
            }, [, t]);
            (0, W.iQ)({
              ref: s,
              onFocusIn: u
            }), Cr({
              onWheel: l,
              onDrag: a,
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
          const s = (0, W.UP)(o, n),
            i = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, P.jsx)("div", {
            ref: s,
            ...i,
            children: (0, P.jsxs)(nh, {
              children: [(0, P.jsx)(oh, {}), t]
            })
          })
        }),
        nh = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, F.useContext)(Xf), s = (0, W.UP)(o, n), i = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? Z.DX : "div";
          return (0, P.jsx)(a, {
            ref: s,
            ...i
          })
        }),
        oh = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, F.useContext)(Xf), s = (0, W.UP)(o, n), i = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), a = t ? Z.DX : "img";
          return (0, P.jsx)(a, {
            ref: s,
            ...i
          })
        }),
        sh = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, F.useContext)(Xf), s = (0, W.UP)(o, n), i = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? Z.DX : "img";
          return (0, P.jsx)(a, {
            ref: s,
            ...i
          })
        }),
        ih = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, F.useContext)(Xf), s = (0, W.UP)(o, n), i = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), a = t ? Z.DX : "p";
          return (0, P.jsx)(qf.VY, {
            asChild: !0,
            children: (0, P.jsx)(a, {
              ref: s,
              ...i
            })
          })
        }),
        ah = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, F.useContext)(Xf);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, F.useContext)(Wf);
            Wr(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), Wr(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), Wr("r", n, {
              enabled: e,
              preventDefault: !0
            }), Wr("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const s = (0, W.UP)(o, n),
            i = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            a = t ? Z.DX : "div";
          return (0, P.jsx)(qr, {
            children: (0, P.jsx)(a, {
              ref: s,
              ...i
            })
          })
        }),
        lh = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, P.jsx)(P.Fragment, {
            children: n
          });
          const s = (0, q.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, P.jsxs)(of, {
            delayDuration: 0,
            children: [(0, P.jsx)(sf, {
              children: n
            }), (0, P.jsxs)(af, {
              ...s,
              children: [(0, P.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, P.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, P.jsx)(lf, {})]
            })]
          })
        },
        ch = (0, F.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, q.v6)(e, {
            isInline: !0
          });
          return (0, P.jsx)(Gi, {
            ref: t,
            ...r
          })
        }),
        uh = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, s) {
          const i = di(),
            {
              zoomRef: a
            } = (0, F.useContext)(Xf),
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
              } = (0, F.useContext)(Xf), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, F.useContext)(Wf), [o, s] = (0, F.useState)(!1), [i, a] = (0, F.useState)(!1), [l, c] = (0, F.useState)(0), [u, d] = (0, F.useState)(0), [f, h] = (0, F.useState)(0), p = (0, F.useCallback)(() => {
                s(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), c(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), h(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, F.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, F.useEffect)(() => (e.addEventListener("zoom", p), () => {
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
            v = (0, W.UP)(a, s),
            y = (0, q.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? Z.DX : "div";
          return (0, P.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, P.jsx)(lh, {
              side: "left",
              enabled: r,
              content: i.formatMessage(Di),
              metadata: i.formatMessage(Li, {
                shortcut: (0, P.jsx)(ch, {
                  shortcut: "+"
                })
              }),
              children: (0, P.jsx)(ke, {
                label: i.formatMessage(Di),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: rn({
                  position: "top"
                }),
                onPress: c,
                isDisabled: !l
              })
            }), (0, P.jsxs)(Vf, {
              className: "foundry_1a74xwbt",
              max: p,
              min: h,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, P.jsx)(Ff, {
                className: "foundry_1a74xwbu",
                children: (0, P.jsx)(Gf, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, P.jsx)(lh, {
                side: "left",
                enabled: r,
                content: i.formatMessage(zi, {
                  zoom: f.toFixed(0)
                }),
                children: (0, P.jsx)(Uf, {
                  className: "foundry_1a74xwbw",
                  children: (0, P.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, P.jsx)(lh, {
              side: "left",
              enabled: r,
              content: i.formatMessage(Ai),
              metadata: i.formatMessage(Mi, {
                shortcut: (0, P.jsx)(ch, {
                  shortcut: "-"
                })
              }),
              children: (0, P.jsx)(ke, {
                label: i.formatMessage(Ai),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: rn({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !u
              })
            }), (0, P.jsx)(Z.xV, {
              children: n
            })]
          })
        }),
        dh = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const s = di(),
            {
              closeRef: i
            } = (0, F.useContext)(Xf),
            a = (0, W.UP)(i, o),
            l = (0, q.v6)(n, {
              "data-testid": e,
              className: tn({
                styled: !t
              })
            }),
            c = t ? (0, P.jsx)(Z.DX, {
              ref: a,
              ...l
            }) : (0, P.jsx)(ke, {
              ref: a,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: s.formatMessage(Ii)
            });
          return (0, P.jsx)(lh, {
            side: "right",
            enabled: r,
            content: s.formatMessage(Ii),
            metadata: s.formatMessage(ki, {
              shortcut: (0, P.jsx)(ch, {
                shortcut: "Esc"
              })
            }),
            children: (0, P.jsx)(qf.bm, {
              asChild: !0,
              children: c
            })
          })
        }),
        fh = (0, F.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = di(),
            s = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, F.useContext)(Xf), {
                contextSafe: r
              } = (0, yt.useGSAP)(), {
                resetZoom: n
              } = (0, F.useContext)(Wf), [o, s] = (0, F.useState)(e.currZoomLevel !== e.zoomLevels.initial), i = r(e => {
                vt.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...on
                })
              }), a = (0, F.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                s(t), i(t)
              }, [s]);
              return (0, F.useEffect)(() => (e.addEventListener("zoom", a), () => {
                e.removeEventListener("zoom", a)
              }), [a]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: i
            } = (0, F.useContext)(Xf),
            a = (0, W.UP)(i, n),
            l = (0, q.v6)(r, s, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, P.jsx)(lh, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Bi),
            metadata: o.formatMessage(Hi, {
              shortcut: (0, P.jsx)(ch, {
                shortcut: "R"
              })
            }),
            children: (0, P.jsx)(ke, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Bi)
            })
          })
        }),
        hh = (0, F.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = di(),
            {
              downloadRef: s,
              imageRef: i
            } = (0, F.useContext)(Xf),
            a = (0, W.UP)(s, n),
            l = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, P.jsx)(lh, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Vi),
            children: (0, P.jsx)(ke, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Vi),
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
        ph = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var mh = r(46773);

      function vh(e) {
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

      function yh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yh(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = vh(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function bh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _h = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wh = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gh(gh({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) _h(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bh(e.variantClassNames, e => bh(e, e => e.split(" ")[0]))
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
      const xh = (0, F.createContext)(null);

      function Eh() {
        const e = (0, F.useContext)(xh);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Ch = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: s = "neutral",
          ...i
        }, a) => {
          const l = (0, q.v6)({
              className: wh({
                status: s
              }),
              "data-testid": t
            }, i),
            c = r ? Z.DX : "div";
          return (0, P.jsx)(xh.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: s,
              ...i
            },
            children: (0, P.jsx)(c, {
              ...l,
              ref: a,
              children: e
            })
          })
        }),
        Ph = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Eh(), s = (0, q.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), i = {
            success: fe.Check,
            invalid: fe.X,
            neutral: fe.TriangleAlert
          }, a = t ? Z.DX : i[o];
          return (0, P.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        Sh = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            errorId: i
          } = Eh(), a = (0, q.v6)({
            "data-testid": t,
            id: i || s
          }, n), l = r ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });
      var Oh = "ScrollArea",
        [Th, jh] = (0, Pu.A)(Oh),
        [Nh, Rh] = Th(Oh),
        Ih = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...i
          } = e, [a, l] = F.useState(null), [c, u] = F.useState(null), [d, f] = F.useState(null), [h, p] = F.useState(null), [m, v] = F.useState(null), [y, g] = F.useState(0), [b, _] = F.useState(0), [w, x] = F.useState(!1), [E, C] = F.useState(!1), S = (0, Cu.s)(t, e => l(e)), O = (0, df.jH)(o);
          return (0, P.jsx)(Nh, {
            scope: r,
            type: n,
            dir: O,
            scrollHideDelay: s,
            scrollArea: a,
            viewport: c,
            onViewportChange: u,
            content: d,
            onContentChange: f,
            scrollbarX: h,
            onScrollbarXChange: p,
            scrollbarXEnabled: w,
            onScrollbarXEnabledChange: x,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: E,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: g,
            onCornerHeightChange: _,
            children: (0, P.jsx)(Vu.sG.div, {
              dir: O,
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
      Ih.displayName = Oh;
      var kh = "ScrollAreaViewport",
        Dh = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...s
          } = e, i = Rh(kh, r), a = F.useRef(null), l = (0, Cu.s)(t, a, i.onViewportChange);
          return (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, P.jsx)(Vu.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: l,
              style: {
                overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, P.jsx)("div", {
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
      Dh.displayName = kh;
      var Lh = "ScrollAreaScrollbar",
        Ah = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Rh(Lh, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: i
          } = o, a = "horizontal" === e.orientation;
          return F.useEffect(() => (a ? s(!0) : i(!0), () => {
            a ? s(!1) : i(!1)
          }), [a, s, i]), "hover" === o.type ? (0, P.jsx)(Mh, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, P.jsx)(Bh, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, P.jsx)(Hh, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, P.jsx)(zh, {
            ...n,
            ref: t
          }) : null
        });
      Ah.displayName = Lh;
      var Mh = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Rh(Lh, e.__scopeScrollArea), [s, i] = F.useState(!1);
          return F.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, P.jsx)(vd.C, {
            present: r || s,
            children: (0, P.jsx)(Hh, {
              "data-state": s ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Bh = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Rh(Lh, e.__scopeScrollArea), s = "horizontal" === e.orientation, i = sp(() => l("SCROLL_END"), 100), [a, l] = (c = {
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
          }, F.useReducer((e, t) => c[e][t] ?? e, "hidden"));
          var c;
          return F.useEffect(() => {
            if ("idle" === a) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [a, o.scrollHideDelay, l]), F.useEffect(() => {
            const e = o.viewport,
              t = s ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (l("SCROLL"), i()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, s, l, i]), (0, P.jsx)(vd.C, {
            present: r || "hidden" !== a,
            children: (0, P.jsx)(zh, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, Eu.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, Eu.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        Hh = F.forwardRef((e, t) => {
          const r = Rh(Lh, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [s, i] = F.useState(!1),
            a = "horizontal" === e.orientation,
            l = sp(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                i(a ? e : t)
              }
            }, 10);
          return ip(r.viewport, l), ip(r.content, l), (0, P.jsx)(vd.C, {
            present: n || s,
            children: (0, P.jsx)(zh, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        zh = F.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Rh(Lh, e.__scopeScrollArea), s = F.useRef(null), i = F.useRef(0), [a, l] = F.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = Jh(a.viewport, a.content), u = {
            ...n,
            sizes: a,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => s.current = e,
            onThumbPointerUp: () => i.current = 0,
            onThumbPointerDown: e => i.current = e
          };

          function d(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = ep(r),
                s = t || o / 2,
                i = o - s,
                a = r.scrollbar.paddingStart + s,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - i,
                c = r.content - r.viewport;
              return rp([a, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, i.current, a, t)
          }
          return "horizontal" === r ? (0, P.jsx)(Vh, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = tp(o.viewport.scrollLeft, a, o.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, P.jsx)(Fh, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = tp(o.viewport.scrollTop, a);
                s.current.style.transform = `translate3d(0, ${e}px, 0)`
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
        Vh = F.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = Rh(Lh, e.__scopeScrollArea), [i, a] = F.useState(), l = F.useRef(null), c = (0, Cu.s)(t, l, s.onScrollbarXChange);
          return F.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, P.jsx)(qh, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": ep(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), np(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && s.viewport && i && n({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Qh(i.paddingLeft),
                  paddingEnd: Qh(i.paddingRight)
                }
              })
            }
          })
        }),
        Fh = F.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = Rh(Lh, e.__scopeScrollArea), [i, a] = F.useState(), l = F.useRef(null), c = (0, Cu.s)(t, l, s.onScrollbarYChange);
          return F.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, P.jsx)(qh, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": ep(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), np(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && s.viewport && i && n({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Qh(i.paddingTop),
                  paddingEnd: Qh(i.paddingBottom)
                }
              })
            }
          })
        }),
        [Gh, Uh] = Th(Lh),
        qh = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: s,
            onThumbPointerUp: i,
            onThumbPointerDown: a,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: u,
            onResize: d,
            ...f
          } = e, h = Rh(Lh, r), [p, m] = F.useState(null), v = (0, Cu.s)(t, e => m(e)), y = F.useRef(null), g = F.useRef(""), b = h.viewport, _ = n.content - n.viewport, w = (0, Uu.c)(u), x = (0, Uu.c)(l), E = sp(d, 10);

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
          return F.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && w(e, _)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, p, _, w]), F.useEffect(x, [n, x]), ip(p, E), ip(h.content, E), (0, P.jsx)(Gh, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, Uu.c)(s),
            onThumbPointerUp: (0, Uu.c)(i),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, Uu.c)(a),
            children: (0, P.jsx)(Vu.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Eu.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, Eu.mK)(e.onPointerMove, C),
              onPointerUp: (0, Eu.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        Xh = "ScrollAreaThumb",
        Kh = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Uh(Xh, e.__scopeScrollArea);
          return (0, P.jsx)(vd.C, {
            present: r || o.hasThumb,
            children: (0, P.jsx)(Wh, {
              ref: t,
              ...n
            })
          })
        }),
        Wh = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, s = Rh(Xh, r), i = Uh(Xh, r), {
            onThumbPositionChange: a
          } = i, l = (0, Cu.s)(t, e => i.onThumbChange(e)), c = F.useRef(void 0), u = sp(() => {
            c.current && (c.current(), c.current = void 0)
          }, 100);
          return F.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = op(e, a);
                  c.current = t, a()
                }
              };
              return a(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [s.viewport, u, a]), (0, P.jsx)(Vu.sG.div, {
            "data-state": i.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, Eu.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              i.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, Eu.mK)(e.onPointerUp, i.onThumbPointerUp)
          })
        });
      Kh.displayName = Xh;
      var Zh = "ScrollAreaCorner",
        $h = F.forwardRef((e, t) => {
          const r = Rh(Zh, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, P.jsx)(Yh, {
            ...e,
            ref: t
          }) : null
        });
      $h.displayName = Zh;
      var Yh = F.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Rh(Zh, r), [s, i] = F.useState(0), [a, l] = F.useState(0), c = Boolean(s && a);
        return ip(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), ip(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), i(e)
        }), c ? (0, P.jsx)(Vu.sG.div, {
          ...n,
          ref: t,
          style: {
            width: s,
            height: a,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function Qh(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Jh(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function ep(e) {
        const t = Jh(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function tp(e, t, r = "ltr") {
        const n = ep(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          s = t.scrollbar.size - o,
          i = t.content - t.viewport,
          a = s - n,
          l = uf(e, "ltr" === r ? [0, i] : [-1 * i, 0]);
        return rp([0, i], [0, a])(l)
      }

      function rp(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function np(e, t) {
        return e > 0 && e < t
      }
      var op = (e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function o() {
          const s = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            i = r.left !== s.left,
            a = r.top !== s.top;
          (i || a) && t(), r = s, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function sp(e, t) {
        const r = (0, Uu.c)(e),
          n = F.useRef(0);
        return F.useEffect(() => () => window.clearTimeout(n.current), []), F.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function ip(e, t) {
        const r = (0, Uu.c)(t);
        (0, qu.N)(() => {
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
      var ap = Ih,
        lp = Dh,
        cp = Ah,
        up = Kh,
        dp = $h,
        fp = r(15234),
        hp = "focusScope.autoFocusOnMount",
        pp = "focusScope.autoFocusOnUnmount",
        mp = {
          bubbles: !1,
          cancelable: !0
        },
        vp = F.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            ...i
          } = e, [a, l] = F.useState(null), c = (0, Uu.c)(o), u = (0, Uu.c)(s), d = F.useRef(null), f = (0, Cu.s)(t, e => l(e)), h = F.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          F.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (h.paused || !a) return;
                  const t = e.target;
                  a.contains(t) ? d.current = t : _p(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || _p(d.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && _p(a)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return a && n.observe(a, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }, [n, a, h.paused]), F.useEffect(() => {
            if (a) {
              wp.add(h);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(hp, mp);
                a.addEventListener(hp, c), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (_p(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(yp(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && _p(a))
              }
              return () => {
                a.removeEventListener(hp, c), setTimeout(() => {
                  const t = new CustomEvent(pp, mp);
                  a.addEventListener(pp, u), a.dispatchEvent(t), t.defaultPrevented || _p(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(pp, u), wp.remove(h)
                }, 0)
              }
            }
          }, [a, c, u, h]);
          const p = F.useCallback(e => {
            if (!r && !n) return;
            if (h.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, s] = function(e) {
                  const t = yp(e);
                  return [gp(t, e), gp(t.reverse(), e)]
                }(t);
              n && s ? e.shiftKey || o !== s ? e.shiftKey && o === n && (e.preventDefault(), r && _p(s, {
                select: !0
              })) : (e.preventDefault(), r && _p(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, h.paused]);
          return (0, P.jsx)(Vu.sG.div, {
            tabIndex: -1,
            ...i,
            ref: f,
            onKeyDown: p
          })
        });

      function yp(e) {
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

      function gp(e, t) {
        for (const r of e)
          if (!bp(r, {
              upTo: t
            })) return r
      }

      function bp(e, {
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

      function _p(e, {
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
      vp.displayName = "FocusScope";
      var wp = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = xp(e, t), e.unshift(t)
          },
          remove(t) {
            e = xp(e, t), e[0]?.resume()
          }
        }
      }();

      function xp(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var Ep = F.forwardRef((e, t) => {
        const {
          container: r,
          ...n
        } = e, [o, s] = F.useState(!1);
        (0, qu.N)(() => s(!0), []);
        const i = r || o && globalThis?.document?.body;
        return i ? lu.createPortal((0, P.jsx)(Vu.sG.div, {
          ...n,
          ref: t
        }), i) : null
      });

      function Cp(e) {
        const t = F.forwardRef((e, t) => {
          const {
            children: r,
            ...n
          } = e;
          if (F.isValidElement(r)) {
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
                    s = t[n];
                  /^on[A-Z]/.test(n) ? o && s ? r[n] = (...e) => {
                    const t = s(...e);
                    return o(...e), t
                  } : o && (r[n] = o) : "style" === n ? r[n] = {
                    ...o,
                    ...s
                  } : "className" === n && (r[n] = [o, s].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== F.Fragment && (o.ref = t ? (0, Cu.t)(t, e) : e), F.cloneElement(r, o)
          }
          return F.Children.count(r) > 1 ? F.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      Ep.displayName = "Portal";
      var Pp = Symbol("radix.slottable");

      function Sp(e) {
        return F.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Pp
      }
      var Op = Object.freeze({
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
      });
      F.forwardRef((e, t) => (0, P.jsx)(Vu.sG.span, {
        ...e,
        ref: t,
        style: {
          ...Op,
          ...e.style
        }
      })).displayName = "VisuallyHidden";
      var Tp = r(94926),
        jp = r(97359),
        Np = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Rp = [" ", "Enter"],
        Ip = "Select",
        [kp, Dp, Lp] = (0, hf.N)(Ip),
        [Ap, Mp] = (0, Pu.A)(Ip, [Lp, Zu]),
        Bp = Zu(),
        [Hp, zp] = Ap(Ip),
        [Vp, Fp] = Ap(Ip),
        Gp = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            value: i,
            defaultValue: a,
            onValueChange: l,
            dir: c,
            name: u,
            autoComplete: d,
            disabled: f,
            required: h,
            form: p
          } = e, m = Bp(t), [v, y] = F.useState(null), [g, b] = F.useState(null), [_, w] = F.useState(!1), x = (0, df.jH)(c), [E, C] = (0, gd.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Ip
          }), [S, O] = (0, gd.i)({
            prop: i,
            defaultProp: a,
            onChange: l,
            caller: Ip
          }), T = F.useRef(null), j = !v || p || !!v.closest("form"), [N, R] = F.useState(new Set), I = Array.from(N).map(e => e.props.value).join(";");
          return (0, P.jsx)(dd, {
            ...m,
            children: (0, P.jsxs)(Hp, {
              required: h,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: _,
              onValueNodeHasChildrenChange: w,
              contentId: (0, Ou.B)(),
              value: S,
              onValueChange: O,
              open: E,
              onOpenChange: C,
              dir: x,
              triggerPointerDownPosRef: T,
              disabled: f,
              children: [(0, P.jsx)(kp.Provider, {
                scope: t,
                children: (0, P.jsx)(Vp, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: F.useCallback(e => {
                    R(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: F.useCallback(e => {
                    R(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), j ? (0, P.jsxs)(Cm, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: u,
                autoComplete: d,
                value: S,
                onChange: e => O(e.target.value),
                disabled: f,
                form: p,
                children: [void 0 === S ? (0, P.jsx)("option", {
                  value: ""
                }) : null, Array.from(N)]
              }, I) : null]
            })
          })
        };
      Gp.displayName = Ip;
      var Up = "SelectTrigger",
        qp = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, s = Bp(r), i = zp(Up, r), a = i.disabled || n, l = (0, Cu.s)(t, i.onTriggerChange), c = Dp(r), u = F.useRef("touch"), [d, f, h] = Sm(e => {
            const t = c().filter(e => !e.disabled),
              r = t.find(e => e.value === i.value),
              n = Om(t, e, r);
            void 0 !== n && i.onValueChange(n.value)
          }), p = e => {
            a || (i.onOpenChange(!0), h()), e && (i.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, P.jsx)(fd, {
            asChild: !0,
            ...s,
            children: (0, P.jsx)(Vu.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": i.contentId,
              "aria-expanded": i.open,
              "aria-required": i.required,
              "aria-autocomplete": "none",
              dir: i.dir,
              "data-state": i.open ? "open" : "closed",
              disabled: a,
              "data-disabled": a ? "" : void 0,
              "data-placeholder": Pm(i.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, Eu.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== u.current && p(e)
              }),
              onPointerDown: (0, Eu.mK)(o.onPointerDown, e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              }),
              onKeyDown: (0, Eu.mK)(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Np.includes(e.key) && (p(), e.preventDefault())
              })
            })
          })
        });
      qp.displayName = Up;
      var Xp = "SelectValue",
        Kp = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: s,
            placeholder: i = "",
            ...a
          } = e, l = zp(Xp, r), {
            onValueNodeHasChildrenChange: c
          } = l, u = void 0 !== s, d = (0, Cu.s)(t, l.onValueNodeChange);
          return (0, qu.N)(() => {
            c(u)
          }, [c, u]), (0, P.jsx)(Vu.sG.span, {
            ...a,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: Pm(l.value) ? (0, P.jsx)(P.Fragment, {
              children: i
            }) : s
          })
        });
      Kp.displayName = Xp;
      var Wp = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, P.jsx)(Vu.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Wp.displayName = "SelectIcon";
      var Zp = e => (0, P.jsx)(Ep, {
        asChild: !0,
        ...e
      });
      Zp.displayName = "SelectPortal";
      var $p = "SelectContent",
        Yp = F.forwardRef((e, t) => {
          const r = zp($p, e.__scopeSelect),
            [n, o] = F.useState();
          if ((0, qu.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? lu.createPortal((0, P.jsx)(Jp, {
              scope: e.__scopeSelect,
              children: (0, P.jsx)(kp.Slot, {
                scope: e.__scopeSelect,
                children: (0, P.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, P.jsx)(rm, {
            ...e,
            ref: t
          })
        });
      Yp.displayName = $p;
      var Qp = 10,
        [Jp, em] = Ap($p),
        tm = function(e) {
          const t = Cp(e),
            r = F.forwardRef((e, r) => {
              const {
                children: n,
                ...o
              } = e, s = F.Children.toArray(n), i = s.find(Sp);
              if (i) {
                const e = i.props.children,
                  n = s.map(t => t === i ? F.Children.count(e) > 1 ? F.Children.only(null) : F.isValidElement(e) ? e.props.children : null : t);
                return (0, P.jsx)(t, {
                  ...o,
                  ref: r,
                  children: F.isValidElement(e) ? F.cloneElement(e, void 0, n) : null
                })
              }
              return (0, P.jsx)(t, {
                ...o,
                ref: r,
                children: n
              })
            });
          return r.displayName = `${e}.Slot`, r
        }("SelectContent.RemoveScroll"),
        rm = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            side: a,
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
          } = e, g = zp($p, r), [b, _] = F.useState(null), [w, x] = F.useState(null), E = (0, Cu.s)(t, e => _(e)), [C, S] = F.useState(null), [O, T] = F.useState(null), j = Dp(r), [N, R] = F.useState(!1), I = F.useRef(!1);
          F.useEffect(() => {
            if (b) return (0, Tp.Eq)(b)
          }, [b]), (0, fp.Oh)();
          const k = F.useCallback(e => {
              const [t, ...r] = j().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && w && (w.scrollTop = 0), r === n && w && (w.scrollTop = w.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [j, w]),
            D = F.useCallback(() => k([C, b]), [k, C, b]);
          F.useEffect(() => {
            N && D()
          }, [N, D]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: A
          } = g;
          F.useEffect(() => {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || L(!1), document.removeEventListener("pointermove", t), A.current = null
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
          }, [b, L, A]), F.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [M, B] = Sm(e => {
            const t = j().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Om(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), H = F.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (S(e), n && (I.current = !0))
          }, [g.value]), z = F.useCallback(() => b?.focus(), [b]), V = F.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && T(e)
          }, [g.value]), G = "popper" === n ? om : nm, U = G === om ? {
            side: a,
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
          return (0, P.jsx)(Jp, {
            scope: r,
            content: b,
            viewport: w,
            onViewportChange: x,
            itemRefCallback: H,
            selectedItem: C,
            onItemLeave: z,
            itemTextRefCallback: V,
            focusSelectedItem: D,
            selectedItemText: O,
            position: n,
            isPositioned: N,
            searchRef: M,
            children: (0, P.jsx)(jp.A, {
              as: tm,
              allowPinchZoom: !0,
              children: (0, P.jsx)(vp, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Eu.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, P.jsx)(Su.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: i,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, P.jsx)(G, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...U,
                    onPlaced: () => R(!0),
                    ref: E,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, Eu.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = j().filter(e => !e.disabled);
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
      rm.displayName = "SelectContentImpl";
      var nm = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, s = zp($p, r), i = em($p, r), [a, l] = F.useState(null), [c, u] = F.useState(null), d = (0, Cu.s)(t, e => u(e)), f = Dp(r), h = F.useRef(!1), p = F.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = i, b = F.useCallback(() => {
          if (s.trigger && s.valueNode && a && c && m && v && y) {
            const e = s.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              r = s.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== s.dir) {
              const n = o.left - t.left,
                s = r.left - n,
                i = e.left - s,
                l = e.width + i,
                c = Math.max(l, t.width),
                u = window.innerWidth - Qp,
                d = uf(s, [Qp, Math.max(Qp, u - c)]);
              a.style.minWidth = l + "px", a.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                s = window.innerWidth - r.right - n,
                i = window.innerWidth - e.right - s,
                l = e.width + i,
                c = Math.max(l, t.width),
                u = window.innerWidth - Qp,
                d = uf(s, [Qp, Math.max(Qp, u - c)]);
              a.style.minWidth = l + "px", a.style.right = d + "px"
            }
            const i = f(),
              l = window.innerHeight - 2 * Qp,
              u = m.scrollHeight,
              d = window.getComputedStyle(c),
              p = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              _ = p + g + u + parseInt(d.paddingBottom, 10) + b,
              w = Math.min(5 * v.offsetHeight, _),
              x = window.getComputedStyle(m),
              E = parseInt(x.paddingTop, 10),
              C = parseInt(x.paddingBottom, 10),
              P = e.top + e.height / 2 - Qp,
              S = l - P,
              O = v.offsetHeight / 2,
              T = p + g + (v.offsetTop + O),
              j = _ - T;
            if (T <= P) {
              const e = i.length > 0 && v === i[i.length - 1].ref.current;
              a.style.bottom = "0px";
              const t = c.clientHeight - m.offsetTop - m.offsetHeight,
                r = T + Math.max(S, O + (e ? C : 0) + t + b);
              a.style.height = r + "px"
            } else {
              const e = i.length > 0 && v === i[0].ref.current;
              a.style.top = "0px";
              const t = Math.max(P, p + m.offsetTop + (e ? E : 0) + O) + j;
              a.style.height = t + "px", m.scrollTop = T - P + m.offsetTop
            }
            a.style.margin = `${Qp}px 0`, a.style.minHeight = w + "px", a.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => h.current = !0)
          }
        }, [f, s.trigger, s.valueNode, a, c, m, v, y, s.dir, n]);
        (0, qu.N)(() => b(), [b]);
        const [_, w] = F.useState();
        (0, qu.N)(() => {
          c && w(window.getComputedStyle(c).zIndex)
        }, [c]);
        const x = F.useCallback(e => {
          e && !0 === p.current && (b(), g?.(), p.current = !1)
        }, [b, g]);
        return (0, P.jsx)(sm, {
          scope: r,
          contentWrapper: a,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: x,
          children: (0, P.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: _
            },
            children: (0, P.jsx)(Vu.sG.div, {
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
      nm.displayName = "SelectItemAlignedPosition";
      var om = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Qp,
          ...s
        } = e, i = Bp(r);
        return (0, P.jsx)(hd, {
          ...i,
          ...s,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...s.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      });
      om.displayName = "SelectPopperPosition";
      var [sm, im] = Ap($p, {}), am = "SelectViewport", lm = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, s = em(am, r), i = im(am, r), a = (0, Cu.s)(t, s.onViewportChange), l = F.useRef(0);
        return (0, P.jsxs)(P.Fragment, {
          children: [(0, P.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, P.jsx)(kp.Slot, {
            scope: r,
            children: (0, P.jsx)(Vu.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: a,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...o.style
              },
              onScroll: (0, Eu.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = i;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * Qp,
                      o = parseFloat(r.style.minHeight),
                      s = parseFloat(r.style.height),
                      i = Math.max(o, s);
                    if (i < n) {
                      const o = i + e,
                        s = Math.min(n, o),
                        a = o - s;
                      r.style.height = s + "px", "0px" === r.style.bottom && (t.scrollTop = a > 0 ? a : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = t.scrollTop
              })
            })
          })]
        })
      });
      lm.displayName = am;
      var cm = "SelectGroup",
        [um, dm] = Ap(cm);
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Ou.B)();
        return (0, P.jsx)(um, {
          scope: r,
          id: o,
          children: (0, P.jsx)(Vu.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = cm;
      var fm = "SelectLabel";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = dm(fm, r);
        return (0, P.jsx)(Vu.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = fm;
      var hm = "SelectItem",
        [pm, mm] = Ap(hm),
        vm = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: s,
            ...i
          } = e, a = zp(hm, r), l = em(hm, r), c = a.value === n, [u, d] = F.useState(s ?? ""), [f, h] = F.useState(!1), p = (0, Cu.s)(t, e => l.itemRefCallback?.(e, n, o)), m = (0, Ou.B)(), v = F.useRef("touch"), y = () => {
            o || (a.onValueChange(n), a.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, P.jsx)(pm, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: c,
            onItemTextChange: F.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, P.jsx)(kp.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: u,
              children: (0, P.jsx)(Vu.sG.div, {
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
                onFocus: (0, Eu.mK)(i.onFocus, () => h(!0)),
                onBlur: (0, Eu.mK)(i.onBlur, () => h(!1)),
                onClick: (0, Eu.mK)(i.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: (0, Eu.mK)(i.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: (0, Eu.mK)(i.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: (0, Eu.mK)(i.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Eu.mK)(i.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, Eu.mK)(i.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (Rp.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      vm.displayName = hm;
      var ym = "SelectItemText",
        gm = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...s
          } = e, i = zp(ym, r), a = em(ym, r), l = mm(ym, r), c = Fp(ym, r), [u, d] = F.useState(null), f = (0, Cu.s)(t, e => d(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), h = u?.textContent, p = F.useMemo(() => (0, P.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = c;
          return (0, qu.N)(() => (m(p), () => v(p)), [m, v, p]), (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)(Vu.sG.span, {
              id: l.textId,
              ...s,
              ref: f
            }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? lu.createPortal(s.children, i.valueNode) : null]
          })
        });
      gm.displayName = ym;
      var bm = "SelectItemIndicator";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return mm(bm, r).isSelected ? (0, P.jsx)(Vu.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = bm;
      var _m = "SelectScrollUpButton";
      F.forwardRef((e, t) => {
        const r = em(_m, e.__scopeSelect),
          n = im(_m, e.__scopeSelect),
          [o, s] = F.useState(!1),
          i = (0, Cu.s)(t, n.onScrollButtonChange);
        return (0, qu.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              s(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, P.jsx)(xm, {
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
      }).displayName = _m;
      var wm = "SelectScrollDownButton";
      F.forwardRef((e, t) => {
        const r = em(wm, e.__scopeSelect),
          n = im(wm, e.__scopeSelect),
          [o, s] = F.useState(!1),
          i = (0, Cu.s)(t, n.onScrollButtonChange);
        return (0, qu.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              s(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, P.jsx)(xm, {
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
      }).displayName = wm;
      var xm = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, s = em("SelectScrollButton", r), i = F.useRef(null), a = Dp(r), l = F.useCallback(() => {
          null !== i.current && (window.clearInterval(i.current), i.current = null)
        }, []);
        return F.useEffect(() => () => l(), [l]), (0, qu.N)(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, P.jsx)(Vu.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, Eu.mK)(o.onPointerDown, () => {
            null === i.current && (i.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, Eu.mK)(o.onPointerMove, () => {
            s.onItemLeave?.(), null === i.current && (i.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, Eu.mK)(o.onPointerLeave, () => {
            l()
          })
        })
      });
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, P.jsx)(Vu.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Em = "SelectArrow";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Bp(r), s = zp(Em, r), i = em(Em, r);
        return s.open && "popper" === i.position ? (0, P.jsx)(pd, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Em;
      var Cm = F.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = F.useRef(null),
          s = (0, Cu.s)(n, o),
          i = ff(t);
        return F.useEffect(() => {
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
        }, [i, t]), (0, P.jsx)(Vu.sG.select, {
          ...r,
          style: {
            ...Op,
            ...r.style
          },
          ref: s,
          defaultValue: t
        })
      });

      function Pm(e) {
        return "" === e || void 0 === e
      }

      function Sm(e) {
        const t = (0, Uu.c)(e),
          r = F.useRef(""),
          n = F.useRef(0),
          o = F.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          s = F.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return F.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s]
      }

      function Om(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let s = (i = e, a = Math.max(o, 0), i.map((e, t) => i[(a + t) % i.length]));
        var i, a;
        1 === n.length && (s = s.filter(e => e !== r));
        const l = s.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      Cm.displayName = "SelectBubbleInput";
      var Tm = Gp,
        jm = qp,
        Nm = Kp,
        Rm = Wp,
        Im = Zp,
        km = Yp,
        Dm = lm,
        Lm = vm,
        Am = gm;

      function Mm(e) {
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

      function Bm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Hm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bm(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Mm(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function zm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Vm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Hm(Hm({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Vm(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zm(e.variantClassNames, e => zm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Gm = Fm({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Um = Fm({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qm = Fm({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xm = Fm({
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
        Km = Fm({
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
        Wm = Fm({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Zm = (0, F.createContext)(null);

      function $m() {
        const e = (0, F.useContext)(Zm);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Ym = (0, F.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: s,
          onValueChange: i,
          name: a,
          value: l,
          defaultOpen: c,
          onOpenChange: u,
          isOpen: d,
          size: f = "MD",
          status: h = "neutral",
          ...p
        }, m) => {
          const v = (0, F.useRef)(null),
            y = (0, W.UP)(v, m),
            g = (0, F.useId)(),
            b = (0, F.useId)(),
            _ = (0, F.useId)(),
            w = (0, F.useId)(),
            x = (0, F.useId)(),
            E = (0, F.useId)(),
            [C = !1, S] = (0, W.ic)({
              prop: d,
              defaultProp: c,
              onChange: u
            }),
            O = (0, q.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, P.jsx)(Zm.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: _,
              triggerId: E,
              hintId: w,
              popoverId: x,
              defaultValue: s,
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
            children: (0, P.jsx)(Tm, {
              required: r,
              disabled: n,
              open: C,
              onOpenChange: () => S(!o && !C),
              value: l,
              defaultValue: s,
              onValueChange: i,
              name: a,
              children: (0, P.jsx)("div", {
                ref: y,
                ...O,
                children: e
              })
            })
          })
        }),
        Qm = (0, F.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: s
          } = $m(), i = (0, q.v6)({
            id: s,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Gm({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, P.jsx)(km, {
            ...i,
            ref: o,
            children: (0, P.jsx)(Dm, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Jm = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, P.jsxs)(ap, {
            ...o,
            ref: n,
            children: [(0, P.jsx)(Dm, {
              asChild: !0,
              children: (0, P.jsx)(lp, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, P.jsx)(cp, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, P.jsx)(up, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        ev = (0, F.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...s
        }, i) => {
          const {
            isReadOnly: a,
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
          } = $m(), {
            isPressed: g,
            pressProps: b
          } = (0, mh.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), _ = (0, q.v6)({
            id: f,
            className: Km({
              size: y,
              isReadOnly: !!a,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!c
            }),
            "aria-labelledby": (0, q.VW)(r, u, d),
            "aria-describedby": (0, q.VW)(n, p),
            "aria-activedescendant": v,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, q.cJ)(b, "onKeyDown"), s), w = o ? Z.DX : jm;
          return (0, P.jsx)(w, {
            ..._,
            ref: i,
            children: e
          })
        }),
        tv = (0, F.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            i = t ? Z.DX : "span";
          return (0, P.jsx)(i, {
            ...s,
            ref: o,
            children: (0, P.jsx)(Nm, {
              placeholder: e
            })
          })
        }),
        rv = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: s,
            isOpen: i
          } = $m(), a = i ? fe.ChevronUp : fe.ChevronDown, l = (0, q.v6)({
            asChild: !0,
            className: Wm({
              isDisabled: s || o
            }),
            "data-testid": t
          }, r);
          return (0, P.jsx)(Rm, {
            ...l,
            ref: n,
            children: e || (0, P.jsx)(a, {
              size: "LG",
              label: ""
            })
          })
        }),
        nv = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, i) => {
          const {
            isRequired: a,
            isDisabled: l,
            labelId: c,
            triggerId: u
          } = $m(), d = a && !o, f = (0, q.v6)({
            id: s.id || c,
            htmlFor: u,
            "data-testid": e,
            className: Xm({
              showAsterisk: d,
              isDisabled: l
            })
          }, s), h = t ? Z.DX : "label";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(h, {
              ...f,
              ref: i,
              children: r
            })
          })
        }),
        ov = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: i
          } = $m(), a = (0, q.v6)({
            className: Um({
              isDisabled: s
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        sv = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: i
          } = $m(), a = (0, q.v6)({
            className: qm({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), l = t ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        iv = (0, F.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, s) => {
          const i = (0, F.useRef)(null),
            a = (0, W.UP)(i, s),
            l = (0, q.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, P.jsx)(Lm, {
            ref: a,
            ...l,
            children: e
          })
        }),
        av = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, P.jsx)(Am, {
            ref: n,
            asChild: !0,
            children: (0, P.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        lv = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, P.jsx)(Rm, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        cv = Im,
        uv = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: i
          } = $m(), a = (0, q.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: s,
            status: i
          }, n), l = r ? Z.DX : Ch;
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        dv = Ph,
        fv = Sh;
      var hv = r(13569),
        pv = r(64720),
        mv = r(99098),
        vv = r(79888);

      function yv(e, t, r) {
        let n = (0, vv.J)(() => {
          r && r(t)
        });
        (0, F.useEffect)(() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", n), () => {
            null == r || r.removeEventListener("reset", n)
          }
        }, [e])
      }
      var gv, bv = r(52061);

      function _v(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: s,
          name: i,
          form: a,
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
        } = (0, mh.d)({
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g,
          isDisabled: n
        }), {
          pressProps: w,
          isPressed: x
        } = (0, mh.d)({
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
        } = (0, bv.Wc)(e, r), C = (0, pv.v)(b, E), P = (0, mv.$)(e, {
          labelable: !0
        });
        return yv(r, t.defaultSelected, t.setSelected), {
          labelProps: (0, pv.v)(w, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, pv.v)(P, {
            "aria-invalid": f || "invalid" === d || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected((0, hv.wt)(e).checked)
            },
            disabled: n,
            ...null == s ? {} : {
              value: s
            },
            name: i,
            form: a,
            type: "checkbox",
            ...C
          }),
          isSelected: t.isSelected,
          isPressed: _ || x,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === d
        }
      }
      const wv = "undefined" != typeof document ? null !== (gv = F.useInsertionEffect) && void 0 !== gv ? gv : F.useLayoutEffect : () => {};

      function xv(e, t, r) {
        let [n, o] = (0, F.useState)(e || t), s = (0, F.useRef)(n), i = (0, F.useRef)(void 0 !== e), a = void 0 !== e;
        (0, F.useEffect)(() => {
          i.current, i.current = a
        }, [a]);
        let l = a ? e : n;
        wv(() => {
          s.current = l
        });
        let [, c] = (0, F.useReducer)(() => ({}), {}), u = (0, F.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(s.current) : e;
          Object.is(s.current, n) || (s.current = n, o(n), c(), null == r || r(n, ...t))
        }, [r]);
        return [l, u]
      }

      function Ev(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = xv(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, F.useState)(r);
        var s;
        return {
          isSelected: r,
          defaultSelected: null !== (s = e.defaultSelected) && void 0 !== s ? s : o,
          setSelected: function(e) {
            t || n(e)
          },
          toggle: function() {
            t || n(!r)
          }
        }
      }

      function Cv(e) {
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

      function Pv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Sv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pv(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Cv(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ov(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Tv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Sv(Sv({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Tv(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ov(e.variantClassNames, e => Ov(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Nv = jv({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Rv = jv({
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
        Iv = jv({
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
        kv = jv({
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
        Dv = jv({
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
      const Lv = (0, F.createContext)(null);

      function Av() {
        const e = (0, F.useContext)(Lv);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Mv = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: s = !1,
          isReadOnly: i = !1,
          ...a
        }, l) => {
          const c = (0, q.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, a),
            u = n ? Z.DX : "div",
            d = (0, F.useId)(),
            f = (0, F.useId)(),
            h = (0, F.useId)();
          return (0, P.jsx)(Lv.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: f,
              inputId: h,
              isDisabled: s,
              isReadOnly: i,
              ...a
            },
            children: (0, P.jsx)(u, {
              ...c,
              ref: l,
              children: o
            })
          })
        }),
        Bv = (0, F.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: s,
          isSelected: i,
          defaultSelected: a,
          onSelectedChange: l,
          name: c,
          value: u,
          ...d
        }, f) => {
          const h = (0, F.useRef)(null),
            p = (0, W.UP)(h, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: _,
              isReadOnly: w
            } = Av(),
            x = Ev({
              isDisabled: _,
              isReadOnly: w,
              isSelected: i,
              defaultSelected: a,
              onChange: l
            }),
            {
              inputProps: E
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: s,
                isPressed: i,
                isDisabled: a,
                isReadOnly: l
              } = _v(e, t, r);
              return {
                labelProps: n,
                inputProps: {
                  ...o,
                  role: "switch",
                  checked: s
                },
                isSelected: s,
                isPressed: i,
                isDisabled: a,
                isReadOnly: l
              }
            }({
              id: s || y,
              "aria-labelledby": (0, q.VW)(n, g),
              "aria-describedby": (0, q.VW)(o, b),
              name: c,
              value: u,
              isDisabled: _,
              isReadOnly: w
            }, x, h),
            C = (0, q.v6)({
              className: Dv({
                appearance: v
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": _ || w,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || _ || w || x.toggle()
              }
            }, d);
          return (0, P.jsxs)("div", {
            ...C,
            children: [(0, P.jsx)(Z.s6, {
              children: (0, P.jsx)("input", {
                ...E,
                ref: p
              })
            }), (0, P.jsx)("div", {
              className: kv({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, P.jsx)("div", {
                className: Rv({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        Hv = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            isDisabled: i,
            labelId: a,
            inputId: l,
            size: c
          } = Av(), u = (0, q.v6)({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: Iv({
              isDisabled: i,
              size: c
            })
          }, o), d = t ? Z.DX : "label";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(d, {
              ...u,
              ref: s,
              children: r
            })
          })
        }),
        zv = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: i
          } = Av(), a = n.id || i, l = (0, q.v6)({
            className: Nv({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? Z.DX : "div";
          return (0, P.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Vv = {
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
        Fv = {
          ...Vv,
          customError: !0,
          valid: !1
        },
        Gv = {
          isInvalid: !1,
          validationDetails: Vv,
          validationErrors: []
        },
        Uv = (0, F.createContext)({}),
        qv = "__formValidationState" + Date.now();

      function Xv(e) {
        if (e[qv]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: s
          } = e[qv];
          return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: s
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: r,
            name: n,
            value: o,
            builtinValidation: s,
            validate: i,
            validationBehavior: a = "aria"
          } = e;
          r && (t || (t = "invalid" === r));
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: Fv
            } : null,
            c = (0, F.useMemo)(() => {
              if (!i || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return Kv(r)
                }
                return []
              }(i, o);
              return Wv(e)
            }, [i, o]);
          (null == s ? void 0 : s.validationDetails.valid) && (s = void 0);
          let u = (0, F.useContext)(Uv),
            d = (0, F.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => Kv(u[e])) : Kv(u[n]) : [], [u, n]),
            [f, h] = (0, F.useState)(u),
            [p, m] = (0, F.useState)(!1);
          u !== f && (h(u), m(!1));
          let v = (0, F.useMemo)(() => Wv(p ? [] : d), [p, d]),
            y = (0, F.useRef)(Gv),
            [g, b] = (0, F.useState)(Gv),
            _ = (0, F.useRef)(Gv),
            [w, x] = (0, F.useState)(!1);
          return (0, F.useEffect)(() => {
            if (!w) return;
            x(!1);
            let e = c || s || y.current;
            Zv(e, _.current) || (_.current = e, b(e))
          }), {
            realtimeValidation: l || v || c || s || Gv,
            displayValidation: "native" === a ? l || v || g : l || v || c || s || g,
            updateValidation(e) {
              "aria" !== a || Zv(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = Gv;
              Zv(e, _.current) || (_.current = e, b(e)), "native" === a && x(!1), m(!0)
            },
            commitValidation() {
              "native" === a && x(!0), m(!0)
            }
          }
        }(e)
      }

      function Kv(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Wv(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Fv
        } : null
      }

      function Zv(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }
      var $v = r(28830),
        Yv = r(38223);

      function Qv(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, $v.N)(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: Jv(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let s = (0, F.useRef)(!1),
          i = (0, vv.J)(() => {
            s.current || t.resetValidation()
          }),
          a = (0, vv.J)(e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let s = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var i;
            !e.defaultPrevented && r && s && function(e) {
              for (let r = 0; r < e.elements.length; r++) {
                var t;
                let n = e.elements[r];
                if (!1 === (null === (t = n.validity) || void 0 === t ? void 0 : t.valid)) return n
              }
              return null
            }(s) === r.current && (o ? o() : null === (i = r.current) || void 0 === i || i.focus(), (0, Yv.Cl)("keyboard")), e.preventDefault()
          }),
          l = (0, vv.J)(() => {
            t.commitValidation()
          });
        (0, F.useEffect)(() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form,
            n = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            s.current = !window.event || "message" === window.event.type && (0, hv.wt)(window.event) instanceof MessagePort, null == n || n.call(t), s.current = !1
          }), e.addEventListener("invalid", a), e.addEventListener("change", l), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", i), t && (t.reset = n)
          }
        }, [r, n])
      }

      function Jv(e) {
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
      const ey = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        ty = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        ry = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        ny = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        oy = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        sy = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function iy(e) {
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

      function ay(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ly(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ay(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = iy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ay(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var uy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ly(ly({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) uy(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cy(e.variantClassNames, e => cy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        fy = dy({
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
        hy = dy({
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
        py = dy({
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
        my = dy({
          defaultClassName: "foundry_11gbdtys",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdtyt",
              LG: "foundry_11gbdtyu",
              XL: "foundry_11gbdtyv"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vy = dy({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yy = dy({
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
      const gy = (0, F.createContext)(null);

      function by() {
        const e = (0, F.useContext)(gy);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const _y = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...s
        }, i) => {
          const a = (0, q.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, q.cJ)(s, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? Z.DX : "div",
            c = (0, F.useId)(),
            u = (0, F.useId)(),
            d = (0, F.useId)();
          return (0, P.jsx)(gy.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: u,
              inputId: d,
              ...s
            },
            children: (0, P.jsx)(l, {
              ...a,
              ref: i,
              children: o
            })
          })
        }),
        wy = (0, F.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: s,
          onClick: i,
          "aria-describedby": l,
          "aria-errormessage": c,
          "aria-labelledby": u,
          className: d,
          ...f
        }, h) => {
          const {
            size: p,
            appearance: m,
            isIndeterminate: v,
            isRequired: y,
            descriptionId: g,
            labelId: b,
            inputId: _,
            ...w
          } = by(), x = (0, F.useRef)(null), E = f.id || _, {
            isPressed: C,
            pressProps: S
          } = (0, mh.d)({
            ref: x
          }), {
            setSelected: O,
            toggle: T,
            ...j
          } = Ev({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: N,
            isSelected: R,
            isDisabled: I,
            isReadOnly: k
          } = function(e, t, r) {
            let n = Xv({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: s,
                validationDetails: i
              } = n.displayValidation,
              {
                labelProps: a,
                inputProps: l,
                isSelected: c,
                isPressed: u,
                isDisabled: d,
                isReadOnly: f
              } = _v({
                ...e,
                isInvalid: o
              }, t, r);
            Qv(e, n, r);
            let {
              isIndeterminate: h,
              isRequired: p,
              validationBehavior: m = "aria"
            } = e;
            (0, F.useEffect)(() => {
              r.current && (r.current.indeterminate = !!h)
            });
            let {
              pressProps: v
            } = (0, mh.d)({
              isDisabled: d || f,
              onPress() {
                let {
                  [qv]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: (0, pv.v)(a, v, (0, F.useMemo)(() => ({
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
              validationErrors: s,
              validationDetails: i
            }
          }({
            "aria-label": "",
            id: E,
            name: o,
            ...w
          }, {
            ...j,
            toggle: T,
            setSelected: w.isReadOnly ? () => !1 : O
          }, x), D = (0, q.v6)({
            className: hy({
              size: p
            }),
            onClick: e => {
              s?.(e) ?? i?.(e), e.defaultPrevented || I || k || T()
            }
          }, S, f), L = (0, q.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, q.VW)(u, b),
            "aria-describedby": (0, q.VW)(l, g),
            "aria-errormessage": (0, q.VW)(c, w.isInvalid ? g : void 0),
            "aria-required": y,
            required: y
          }, N), A = v ? a[`Dash${p}`] : a[`Check${p}`];
          return (0, P.jsxs)("div", {
            ...D,
            children: [(0, P.jsx)(Z.s6, {
              children: (0, P.jsx)("input", {
                ...L,
                ref: h
              })
            }), (0, P.jsx)("div", {
              className: (0, de.clsx)(fy({
                size: p,
                appearance: m
              }), d),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : R ? "checked" : "unchecked",
              "data-disabled": I || k,
              "data-testid": e,
              "data-pressed": C,
              children: (0, P.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (R || v) && (0, P.jsx)(A, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        xy = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...s
        }, i) => {
          const {
            size: a,
            labelId: l,
            inputId: c,
            isRequired: u
          } = by(), d = s.id || l, f = u && !o, h = (0, q.v6)({
            className: yy({
              size: a,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: s.htmlFor || c
          }, s), p = t ? Z.DX : "label";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(p, {
              ...h,
              ref: i,
              children: e
            })
          })
        }),
        Ey = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: i
          } = by(), a = n.id || i, l = (0, q.v6)({
            className: py({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? Z.DX : "div";
          return (0, P.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Cy = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = by(), i = n.id || s, a = (0, q.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: i
          }, n), l = t ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Py = (0, F.createContext)(null);

      function Sy() {
        const e = (0, F.useContext)(Py);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Oy = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...s
        }, i) => {
          const [a, l] = (0, F.useState)(null), [c, u] = (0, F.useState)(null), d = [a, c].filter(Boolean).join(" "), f = (0, q.v6)({
            "data-testid": e,
            "aria-describedby": d,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, s), h = t ? Z.DX : "fieldset";
          return (0, P.jsx)(Py.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: a,
              errorTextId: c,
              setDescriptionId: l,
              setErrorTextId: u
            },
            children: (0, P.jsx)(h, {
              ...f,
              ref: i,
              children: r
            })
          })
        }),
        Ty = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          optionalText: n = "optional",
          hideVisually: o = !1,
          hideRequiredAsterisk: s,
          ...i
        }, a) => {
          const {
            isRequired: l
          } = Sy(), c = l && !s, u = (0, q.v6)({
            "data-testid": r,
            className: vy({
              showAsterisk: c
            })
          }, i), d = t ? Z.DX : "legend";
          return (0, P.jsx)(Z.s6, {
            enabled: o,
            children: (0, P.jsxs)(d, {
              ...u,
              ref: a,
              children: [(0, P.jsx)(Z.xV, {
                children: e
              }), !l && (0, P.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        jy = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: s
          } = Sy(), i = (0, F.useId)(), a = n.id || i;
          (0, F.useEffect)(() => {
            s(a)
          }, [s, a]);
          const l = (0, q.v6)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
              id: a
            }, n),
            c = t ? Z.DX : "div";
          return (0, P.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Ny = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = Sy(), i = (0, q.v6)({
            "data-testid": r,
            className: my({
              size: s
            })
          }, n), a = t ? Z.DX : "div";
          return (0, P.jsx)(a, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ry = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: s
          } = Sy(), i = (0, F.useId)(), a = n.id || i;
          (0, F.useEffect)(() => {
            s(a)
          }, [s, a]);
          const l = (0, q.v6)({
              "data-testid": r,
              id: a,
              className: "foundry_11gbdtyw foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh"
            }, n),
            c = fe.X,
            u = t ? Z.DX : "div";
          return (0, P.jsxs)(u, {
            ...l,
            ref: o,
            children: [(0, P.jsx)(c, {
              label: "",
              size: "SM"
            }), (0, P.jsx)(Z.xV, {
              children: e
            })]
          })
        });

      function Iy(e) {
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

      function ky(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Dy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ky(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Iy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ky(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ly(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ay = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        My = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Dy(Dy({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ay(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ly(e.variantClassNames, e => Ly(e, e => e.split(" ")[0]))
            }
          }, t
        },
        By = My({
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
        Hy = My({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zy = My({
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
        Vy = My({
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
      const Fy = (0, F.createContext)(null);

      function Gy() {
        const e = (0, F.useContext)(Fy);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Uy = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: i = "neutral",
          ...a
        }, l) => {
          const c = (0, q.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, a),
            u = e ? Z.DX : "div",
            d = (0, F.useId)(),
            f = (0, F.useId)(),
            h = (0, F.useId)(),
            p = (0, F.useId)();
          return (0, P.jsx)(Fy.Provider, {
            value: {
              labelId: d,
              descriptionId: f,
              hintId: h,
              inputId: p,
              isDisabled: n,
              isReadOnly: o,
              isRequired: s,
              status: i,
              ...a
            },
            children: (0, P.jsx)(u, {
              ref: l,
              ...c,
              children: t
            })
          })
        }),
        qy = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, i) => {
          const {
            labelId: a,
            inputId: l,
            isDisabled: c,
            isRequired: u
          } = Gy(), d = (0, q.v6)({
            className: zy({
              isDisabled: c,
              showAsterisk: u && !o
            }),
            "data-testid": r,
            id: a,
            htmlFor: l
          }, s), f = t ? Z.DX : "label";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(f, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        Xy = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: s,
          placeholder: i = " ",
          "aria-labelledby": a,
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
          } = Gy(), b = (0, F.useRef)(null), _ = (0, W.UP)(b, u), w = (0, q.v6)({
            className: Vy({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isSuccess: "success" === g
            }),
            name: s,
            id: c.id || h,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: i,
            "aria-labelledby": (0, q.VW)(c.id, f, p, a),
            "aria-describedby": (0, q.VW)(d, l),
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
          }, c), x = e ? Z.DX : "textarea";
          return (0, P.jsx)(x, {
            ref: _,
            ...w,
            children: t
          })
        }),
        Ky = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: i
          } = Gy(), a = (0, q.v6)({
            className: By({
              isDisabled: s
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Wy = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: i
          } = Gy(), a = (0, q.v6)({
            className: Hy({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), l = t ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Zy = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: i
          } = Gy(), a = (0, q.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: s,
            status: i
          }, n), l = r ? Z.DX : Ch;
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        $y = Ph,
        Yy = Sh;
      let Qy = Math.round(1e10 * Math.random()),
        Jy = 0;
      const eg = new WeakMap;
      var tg = r(62993),
        rg = r(49652),
        ng = r(42351),
        og = r(35412);
      class sg {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, hv.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, hv.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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

      function ig(e, t) {
        return !!e && !!t && t.some(t => (0, hv.sD)(t, e))
      }

      function ag(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? ng.A : ng.t,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          s = (0, tg.TW)(o),
          i = function(e, t, r, n) {
            return (0, og.Nf)() ? new sg(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(s, e || s, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if ((0, hv.sD)(null == t ? void 0 : t.from, e)) return NodeFilter.FILTER_REJECT;
              if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from((0, tg.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let r = (0, tg.mD)(e);
                      return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === i.currentNode.tagName && "radio" === i.currentNode.type && i.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !ig(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (i.currentNode = t.from), i
      }
      class lg {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new cg({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && ig(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new lg;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new cg({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class cg {
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

      function ug(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, rg.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function dg(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: s,
          fieldProps: i
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: s = "label"
          } = e;
          t = (0, rg.Bi)(t);
          let i = (0, rg.Bi)(),
            a = {};
          return r && (n = n ? `${i} ${n}` : i, a = {
            id: i,
            htmlFor: "label" === s ? t : void 0
          }), {
            labelProps: a,
            fieldProps: ug({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), a = (0, rg.X1)([Boolean(t), Boolean(r), n, o]), l = (0, rg.X1)([Boolean(t), Boolean(r), n, o]);
        return i = (0, pv.v)(i, {
          "aria-describedby": [a, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: s,
          fieldProps: i,
          descriptionProps: {
            id: a
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      new lg;
      var fg = r(89839),
        hg = r(73581);
      const pg = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        mg = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function vg(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return pg.has(t.script)
        }
        let t = e.split("-")[0];
        return mg.has(t)
      }
      var yg = r(50336);
      const gg = Symbol.for("react-aria.i18n.locale");

      function bg() {
        let e = "undefined" != typeof window && window[gg] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: vg(e) ? "rtl" : "ltr"
        }
      }
      let _g = bg(),
        wg = new Set;

      function xg() {
        _g = bg();
        for (let e of wg) e(_g)
      }
      const Eg = F.createContext(null);

      function Cg() {
        let e = function() {
          let e = (0, yg.wR)(),
            [t, r] = (0, F.useState)(_g);
          return (0, F.useEffect)(() => (0 === wg.size && window.addEventListener("languagechange", xg), wg.add(r), () => {
            wg.delete(r), 0 === wg.size && window.removeEventListener("languagechange", xg)
          }), []), e ? {
            locale: "undefined" != typeof window && window[gg] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, F.useContext)(Eg) || e
      }

      function Pg(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: s,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: c
        } = Cg(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = dg({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = (0, mv.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, s = (0, F.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: i,
            removeAllGlobalListeners: a
          } = (0, hg.A)(), l = (0, F.useCallback)(e => {
            (0, hv.sD)(e.currentTarget, (0, hv.wt)(e)) && s.current.isFocusWithin && !(0, hv.sD)(e.currentTarget, e.relatedTarget) && (s.current.isFocusWithin = !1, a(), r && r(e), o && o(!1))
          }, [r, o, s, a]), c = (0, fg.yB)(l), u = (0, F.useCallback)(e => {
            if (!(0, hv.sD)(e.currentTarget, (0, hv.wt)(e))) return;
            let t = (0, hv.wt)(e);
            const r = (0, tg.TW)(t),
              a = (0, hv.bq)(r);
            if (!s.current.isFocusWithin && a === t) {
              n && n(e), o && o(!0), s.current.isFocusWithin = !0, c(e);
              let t = e.currentTarget;
              i(r, "focus", e => {
                let n = (0, hv.wt)(e);
                if (s.current.isFocusWithin && !(0, hv.sD)(t, n)) {
                  let e = new r.defaultView.FocusEvent("blur", {
                    relatedTarget: n
                  });
                  (0, fg.o1)(e, t);
                  let o = (0, fg.eg)(e);
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
        }), b = (0, rg.Bi)(r);
        return eg.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: (0, pv.v)(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === c && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === c && "vertical" !== a ? "next" : "prev";
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
              let n, o = ag(e.currentTarget, {
                from: (0, hv.wt)(e),
                accept: e => e instanceof(0, tg.mD)(e).HTMLInputElement && "radio" === e.type
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": s || void 0,
            "aria-disabled": i || void 0,
            "aria-orientation": a,
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

      function Sg(e) {
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

      function Og(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Tg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Og(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Sg(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Og(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ng = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Tg(Tg({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ng(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jg(e.variantClassNames, e => jg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ig = Rg({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kg = Rg({
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
      const Dg = (0, F.createContext)(null);

      function Lg() {
        const e = (0, F.useContext)(Dg);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Ag = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: s,
          "aria-labelledby": i,
          "aria-describedby": a,
          "aria-errormessage": l,
          status: c = "neutral",
          ...u
        }, d) => {
          const f = (0, F.useRef)(null),
            h = (0, W.UP)(f, d),
            p = (0, F.useId)(),
            m = (0, F.useId)(),
            v = (0, F.useId)(),
            y = function(e) {
              let t = (0, F.useMemo)(() => e.name || `radio-group-${Qy}-${++Jy}`, [e.name]);
              var r;
              let [n, o] = xv(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [s] = (0, F.useState)(n), [i, a] = (0, F.useState)(null), l = Xv({
                ...e,
                value: n
              }), c = l.displayValidation.isInvalid;
              var u;
              return {
                ...l,
                name: t,
                selectedValue: n,
                defaultSelectedValue: void 0 !== e.value ? s : null !== (u = e.defaultValue) && void 0 !== u ? u : null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
                },
                lastFocusedValue: i,
                setLastFocusedValue: a,
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
            } = Pg({
              ...u,
              orientation: r,
              "aria-labelledby": (0, q.VW)(p, i),
              "aria-describedby": (0, q.VW)(m, v, a),
              "aria-errormessage": (0, q.VW)(v, l)
            }, y),
            b = (0, q.v6)({
              className: "foundry_njguqn0"
            }, g, (0, q.cJ)(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            _ = s ? Z.DX : "div";
          return (0, P.jsx)(Dg.Provider, {
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
            children: (0, P.jsx)(_, {
              ref: h,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        Mg = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: s,
            orientation: i
          } = Lg(), a = (0, q.v6)({
            "data-testid": e,
            className: kg({
              size: s,
              orientation: i
            })
          }, n), l = t ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: r
          })
        }),
        Bg = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, i) => {
          const {
            isRequired: a,
            labelId: l
          } = Lg(), c = a && !o, u = (0, q.v6)({
            id: s.id || l,
            "data-testid": e,
            className: Ig({
              showAsterisk: c
            })
          }, s), d = t ? Z.DX : "div";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(d, {
              ...u,
              ref: i,
              children: r
            })
          })
        }),
        Hg = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = Lg(), i = (0, q.v6)({
            id: s,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), a = t ? Z.DX : "div";
          return (0, P.jsx)(a, {
            ...i,
            ref: o,
            children: r
          })
        }),
        zg = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: s,
            status: i
          } = Lg(), a = (0, q.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: s,
            status: i
          }, n), l = r ? Z.DX : Ch;
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Vg = Ph,
        Fg = Sh;
      var Gg = Rg({
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
        Ug = Rg({
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
        qg = Rg({
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
        Xg = Rg({
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
      const Kg = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, P.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Wg = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, P.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Zg = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, P.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        $g = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            i = e ? Z.DX : "label";
          return (0, P.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Yg = (0, F.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, F.useRef)(null),
            s = (0, W.UP)(o, n),
            i = (0, F.useId)(),
            {
              state: a,
              appearance: l,
              size: c,
              isReadOnly: d,
              isRequired: f
            } = Lg(),
            {
              isPressed: h,
              pressProps: p
            } = (0, mh.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: m
            } = function(e, t, r) {
              let {
                value: n,
                children: o,
                "aria-label": s,
                "aria-labelledby": i,
                onPressStart: a,
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
                } = (0, mh.d)({
                  onPressStart: a,
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
                } = (0, mh.d)({
                  onPressStart: a,
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
                } = (0, bv.Wc)((0, pv.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                _ = (0, pv.v)(m, b),
                w = (0, mv.$)(e, {
                  labelable: !0
                }),
                x = -1;
              null != t.selectedValue ? t.selectedValue === n && (x = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (x = 0), h && (x = void 0);
              let {
                name: E,
                form: C,
                descriptionId: P,
                errorMessageId: S,
                validationBehavior: O
              } = eg.get(t);
              return yv(r, t.defaultSelectedValue, t.setSelectedValue), Qv({
                validationBehavior: O
              }, t, r), {
                labelProps: (0, pv.v)(y, (0, F.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, pv.v)(w, {
                  ..._,
                  type: "radio",
                  name: E,
                  form: C,
                  tabIndex: x,
                  disabled: h,
                  required: t.isRequired && "native" === O,
                  checked: p,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? S : null, P].filter(Boolean).join(" ") || void 0
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
            }, a, o),
            v = m.checked,
            y = m.disabled || a?.isReadOnly,
            g = (0, q.v6)(m, {
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
          return (0, P.jsxs)("div", {
            className: Xg({
              size: c
            }),
            children: [(0, P.jsx)(Z.s6, {
              children: (0, P.jsx)("input", {
                type: "radio",
                ...g,
                ref: s,
                className: "foundry_1pfduet1"
              })
            }), (0, P.jsx)("div", {
              className: qg({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": h,
              ...p,
              children: (0, P.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, P.jsx)(b, {})
              })
            })]
          })
        }),
        Qg = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            size: i,
            state: a
          } = Lg(), l = (0, F.useId)(), c = (0, q.v6)({
            id: l,
            "data-testid": e,
            className: Ug({
              size: i,
              isDisabled: a?.isDisabled
            })
          }, o), u = t ? Z.DX : "div";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Jg = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Lg(), i = (0, q.v6)({
            "data-testid": e,
            className: Gg({
              isDisabled: s
            })
          }, n), a = t ? Z.DX : "span";
          return (0, P.jsx)(a, {
            ref: o,
            ...i,
            children: r
          })
        });

      function eb(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function tb(e, t, r) {
        return t = ob(t),
          function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, sb() ? Reflect.construct(t, r || [], ob(e).constructor) : t.apply(e, r))
      }

      function rb(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return eb(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? eb(e, t) : void 0
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
        var s, i = !0,
          a = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return i = e.done, e
          },
          e: function(e) {
            a = !0, s = e
          },
          f: function() {
            try {
              i || null == r.return || r.return()
            } finally {
              if (a) throw s
            }
          }
        }
      }

      function nb(e, t, r) {
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

      function ob(e) {
        return ob = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, ob(e)
      }

      function sb() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (sb = function() {
          return !!e
        })()
      }

      function ib(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ab(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ib(Object(r), !0).forEach(function(t) {
            nb(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ib(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function lb(e, t) {
        return lb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, lb(e, t)
      }

      function cb(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          s = t.separate,
          i = n,
          a = "",
          l = rb(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var c, u = r.value,
              d = !Object.prototype.hasOwnProperty.call(o, u) && (null === (c = o[i[0]]) || void 0 === c ? void 0 : c.test(u));
            (s && u === i[0] || d) && (i = i.slice(1), a += u)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return a
      }

      function ub(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          s = t.separate,
          i = t.showMask,
          a = 0,
          l = "",
          c = rb(n);
        try {
          for (c.s(); !(r = c.n()).done;) {
            var u = r.value;
            if (!i && void 0 === e[a]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[a] ? l += e[a++] : l += u
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (s && !i) {
          for (var d = n.length - 1; d >= 0 && l[d] === n[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function db(e, t) {
        for (var r = t.mask, n = t.replacement, o = [], s = 0; s < r.length; s++) {
          var i, a = null !== (i = e[s]) && void 0 !== i ? i : r[s],
            l = Object.prototype.hasOwnProperty.call(n, a) ? "replacement" : void 0 !== e[s] && e[s] !== r[s] ? "input" : "mask";
          o.push({
            type: l,
            value: a,
            index: s
          })
        }
        return o
      }

      function fb(e) {
        return e.length > 0 ? nb({}, e, /./) : {}
      }

      function hb(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, s = t.mask, i = t.replacement, a = t.separate, l = e.slice(n, o), c = s.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(i, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && a && (u += c[d])
        }
        return u
      }

      function pb(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? fb(n) : n,
          s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return ub(cb(e, {
          replacementChars: r.replace(s, ""),
          replacement: o,
          separate: !1
        }), {
          mask: r,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var mb = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function vb(e) {
        return mb.includes(e) ? "\\".concat(e) : e
      }

      function yb(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function gb(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
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
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (wb = function() {
          return !!e
        })()
      }

      function xb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Eb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xb(Object(r), !0).forEach(function(t) {
            bb(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Cb(e, t) {
        return Cb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Cb(e, t)
      }

      function Pb(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Pb = function(e) {
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
              if (wb()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && Cb(o, r.prototype), o
            }(e, arguments, _b(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Cb(r, e)
        }, Pb(e)
      }
      var Sb, Ob = function(e) {
          function t(e) {
            var r;
            return yb(this, t), (r = function(e, t, r) {
              return t = _b(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, wb() ? Reflect.construct(t, r || [], _b(e).constructor) : t.apply(e, r))
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
            }), t && Cb(e, t)
          }(t, e), gb(t)
        }(Pb(Error)),
        Tb = ["options"],
        jb = ["text", "email", "tel", "search", "url"],
        Nb = gb(function e(t) {
          var r = t.init,
            n = t.tracking;
          yb(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (jb.includes(e.type)) {
              var s = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                i = s.initialValue,
                a = void 0 === i ? "" : i,
                l = s.controlled,
                c = void 0 !== l && l,
                u = r({
                  initialValue: e.value || a,
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
              Object.defineProperty(e, "value", Eb(Eb({}, v), {}, {
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
                    if (p.cachedId === p.id) throw new Ob("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var s = e.value,
                      i = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === i || null === a) throw new Ob("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), i > m.selectionStart ? l = "insert" : i <= m.selectionStart && i < m.selectionEnd ? l = "deleteBackward" : i === m.selectionEnd && s.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && s.length > c.length) throw new Ob("Input type detection error.");
                    var u = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) u = s.slice(m.selectionStart, i);
                    else {
                      var v = c.length - s.length;
                      d = i, f = i + v
                    }
                    h.value !== c ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var y = h.options,
                      g = n({
                        inputType: l,
                        previousValue: c,
                        previousOptions: y,
                        value: s,
                        addedValue: u,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: i,
                        selectionEnd: a
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
                          var s = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < s.length; n++) r = s[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                      }(g, Tb);
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
      Sb = Nb, Object.defineProperty(Sb.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Rb, Ib = ["track", "modify"];

      function kb(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? fb(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Db = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = tb(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = kb(r),
                s = o.mask,
                i = o.replacement,
                a = o.separate,
                l = o.showMask;
              return {
                value: t = n || t ? t : l ? s : "",
                options: {
                  mask: s,
                  replacement: i,
                  separate: a
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                n = e.previousValue,
                o = e.previousOptions,
                s = e.addedValue,
                i = e.changeStart,
                a = e.changeEnd,
                l = kb(r),
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
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                  }
                  return o
                }(l, Ib),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = ab(ab({}, "insert" === t ? {
                  inputType: t,
                  data: s
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: n,
                  selectionStart: i,
                  selectionEnd: a
                }),
                y = null == c ? void 0 : c(v);
              if (!1 === y) throw new Ob("Custom tracking stop.");
              null === y ? s = "" : !0 !== y && void 0 !== y && (s = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? fb(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = hb(n, ab({
                  end: i
                }, o)),
                _ = hb(n, ab({
                  start: a
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                x = f.replace(w, "");
              if (b && (b = cb(b, {
                  replacementChars: x,
                  replacement: h,
                  separate: m
                }), x = x.slice(b.length)), s && (s = cb(s, {
                  replacementChars: x,
                  replacement: h,
                  separate: !1
                }), x = x.slice(s.length)), "insert" === t && "" === s) throw new Ob("The character does not match the key value of the `replacement` object.");
              if (m) {
                var E = f.slice(i, a).replace(w, ""),
                  C = E.length - s.length;
                C < 0 ? _ = _.slice(-C) : C > 0 && (_ = E.slice(-C) + _)
              }
              _ && (_ = cb(_, {
                replacementChars: x,
                replacement: h,
                separate: m
              }));
              var P = ub(b + s + _, {
                  mask: f,
                  replacement: h,
                  separate: m,
                  showMask: p
                }),
                S = function(e) {
                  var t, r, n, o = e.inputType,
                    s = e.value,
                    i = e.addedValue,
                    a = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = db(s, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    }),
                    d = null === (t = u[a.length + i.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = u[a.length - 1]) || void 0 === r ? void 0 : r.index,
                    h = null === (n = u[a.length + i.length]) || void 0 === n ? void 0 : n.index;
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
                  var p = s.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  });
                  return -1 !== p ? p : s.length
                }({
                  inputType: t,
                  value: P,
                  addedValue: s,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: h,
                  separate: m
                });
              return {
                value: P,
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
            return pb(e, kb(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? fb(n) : n;
              return db(pb(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, kb(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? fb(n) : n,
                s = hb(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return cb(s, {
                replacementChars: r.replace(i, ""),
                replacement: o,
                separate: !1
              })
            }(e, kb(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? fb(n) : n, s = "partial" === e || "partial-inexact" === e, i = "full" === e || "partial" === e, a = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (a = "^"), s && (a += "("), a += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(i ? "(?!".concat(vb(c), ")") : "", "(").concat(o[c].source, ")") : vb(c), l === r.length - 1 && (s && (a += ")?".repeat(r.length)), a += "$")
              }
              return a
            }(e, kb(r))
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
            }), t && lb(e, t)
          }(e, Nb),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function Lb(e) {
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

      function Ab(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ab(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Lb(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ab(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Bb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Rb = Db, Object.defineProperty(Rb.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Hb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        zb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mb(Mb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Hb(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bb(e.variantClassNames, e => Bb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Vb = zb({
          defaultClassName: "foundry_8oytzoc",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzod",
              true: "foundry_8oytzoe"
            },
            isReadOnly: {
              false: "foundry_8oytzof",
              true: "foundry_8oytzog"
            },
            isInvalid: {
              false: "foundry_8oytzoh",
              true: "foundry_8oytzoi"
            },
            isSuccess: {
              false: "foundry_8oytzoj",
              true: "foundry_8oytzok"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isInvalid: !1,
              isSuccess: !1,
              isDisabled: !1,
              isReadOnly: !1
            }, "foundry_8oytzol"],
            [{
              isDisabled: !1
            }, "foundry_8oytzom"]
          ]
        }),
        Fb = zb({
          defaultClassName: "foundry_8oytzo10 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo11",
              true: "foundry_8oytzo12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gb = zb({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ub = zb({
          defaultClassName: "foundry_8oytzos",
          variantClassNames: {
            side: {
              left: "foundry_8oytzot",
              right: "foundry_8oytzou"
            },
            isDisabled: {
              false: "foundry_8oytzov",
              true: "foundry_8oytzow"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qb = zb({
          defaultClassName: "foundry_8oytzon foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzoo",
              true: "foundry_8oytzop"
            },
            isReadOnly: {
              false: "foundry_8oytzoq",
              true: "foundry_8oytzor"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xb = zb({
          defaultClassName: "foundry_8oytzo5 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo6",
              true: "foundry_8oytzo7"
            },
            showAsterisk: {
              true: "foundry_8oytzo8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Kb = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Wb = (0, F.createContext)(null);

      function Zb() {
        const e = (0, F.useContext)(Wb);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const $b = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: i = "neutral",
          ...a
        }, l) => {
          const [c, u] = (0, F.useState)("text"), d = `${(0,F.useId)()}-label`, f = `${(0,F.useId)()}-input`, h = `${(0,F.useId)()}-description`, p = (0, F.useRef)(null), m = (0, F.useRef)(Kb), v = (0, q.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, a), y = e ? Z.DX : "div";
          return (0, P.jsx)(Wb.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: s,
              status: i,
              labelId: d,
              inputId: f,
              descriptionId: h,
              type: c,
              setType: u,
              inputRef: p,
              focusState: m,
              ...a
            },
            children: (0, P.jsx)(y, {
              ref: l,
              ...v,
              children: t
            })
          })
        }),
        Yb = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...s
        }, i) => {
          const {
            isDisabled: a,
            isRequired: l,
            inputId: c,
            labelId: u
          } = Zb(), d = l && !o, f = (0, q.v6)({
            id: s.id || u,
            htmlFor: s.htmlFor || c,
            "data-testid": e,
            className: Xb({
              showAsterisk: d,
              isDisabled: a
            })
          }, s), h = t ? Z.DX : "label";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(h, {
              ref: i,
              ...f,
              children: r
            })
          })
        }),
        Qb = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Zb(), i = (0, q.v6)({
            "data-testid": e,
            className: Gb({
              isDisabled: s
            })
          }, n), a = t ? Z.DX : "span";
          return (0, P.jsx)(a, {
            ref: o,
            ...i,
            children: r
          })
        }),
        Jb = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            isReadOnly: i,
            status: a
          } = Zb(), l = (0, q.v6)({
            "data-testid": e,
            className: (0, de.clsx)(Vb({
              isDisabled: s,
              isReadOnly: i,
              isInvalid: "invalid" === a,
              isSuccess: "success" === a
            }), "foundry_8oytzo1")
          }, n), c = t ? Z.DX : "div";
          return (0, P.jsx)(c, {
            ref: o,
            ...l,
            children: r
          })
        }),
        e_ = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: s,
          placeholder: i = " ",
          "aria-labelledby": a,
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
            type: _,
            inputRef: w,
            focusState: x
          } = Zb();
          (0, F.useEffect)(() => b(c), []);
          const E = "invalid" === m,
            C = (0, q.v6)({
              disabled: f,
              readOnly: h,
              required: p,
              id: y,
              type: _,
              spellCheck: !1,
              placeholder: i,
              "aria-labelledby": (0, q.VW)(v, a),
              "aria-describedby": (0, q.VW)(g, l),
              "data-testid": e,
              className: (0, de.clsx)(qb({
                isDisabled: f,
                isReadOnly: h
              }), "foundry_8oytzo2"),
              onBlur: e => {
                if (x.current) {
                  const {
                    selectionStart: t,
                    selectionEnd: r
                  } = e.currentTarget;
                  x.current.selectionStart = t, x.current.selectionEnd = r
                }
              },
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
                s = e.track,
                i = e.modify,
                a = (0, F.useRef)(null),
                l = (0, F.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: s,
                  modify: i
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = s, l.current.modify = i, (0, F.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(a, new Db(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: s
            }),
            O = (0, W.UP)(r && n ? S : null, w, d),
            T = t ? Z.DX : "input";
          return (0, P.jsx)(T, {
            ref: O,
            ...C
          })
        }),
        t_ = (0, F.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, s) => {
          const {
            isDisabled: i
          } = Zb(), a = (0, q.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, de.clsx)(Ub({
              side: n,
              isDisabled: i
            }), "foundry_8oytzo0")
          }, o), l = t ? Z.DX : fe[e];
          return (0, P.jsx)(l, {
            ref: s,
            ...a
          })
        }),
        r_ = (0, F.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Zb(), n = (0, q.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, de.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, P.jsx)(ke, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        n_ = (0, F.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: s,
            inputRef: i,
            focusState: a
          } = Zb(), l = "password" === o, c = l ? e : t;
          (0, F.useEffect)(() => {
            a.current && (a.current.clickTriggered = !1)
          }, [a]);
          const u = (0, q.v6)({
            label: c,
            icon: l ? "Eye" : "EyeOff",
            onPress: () => {
              s(l ? "text" : "password");
              const e = i.current;
              if (a.current && e) {
                const {
                  selectionStart: t,
                  selectionEnd: r
                } = a.current;
                e.focus(), null === t && null === r || requestAnimationFrame(() => {
                  e.ownerDocument.activeElement === e && (e.selectionStart = t, e.selectionEnd = r)
                })
              }
            },
            preventFocusOnPress: !0
          }, r);
          return (0, P.jsxs)(of, {
            children: [(0, P.jsx)(sf, {
              children: (0, P.jsx)(r_, {
                ref: n,
                ...u
              })
            }), (0, P.jsxs)(af, {
              side: "bottom",
              align: "end",
              children: [c, (0, P.jsx)(lf, {})]
            })]
          })
        }),
        o_ = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: i
          } = Zb(), a = (0, q.v6)({
            className: Fb({
              isDisabled: s
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        s_ = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: i
          } = Zb(), a = (0, q.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: s,
            status: i
          }, n), l = r ? Z.DX : Ch;
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        i_ = Ph,
        a_ = Sh;
      var l_ = r(36566);

      function c_(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: s,
          onClick: i,
          isDisabled: a,
          ...l
        } = e, c = {};
        "a" !== r && (c = {
          role: "link",
          tabIndex: a ? void 0 : 0
        });
        let {
          focusableProps: u
        } = (0, bv.Wc)(e, t), {
          pressProps: d,
          isPressed: f
        } = (0, mh.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: s,
          onClick: i,
          isDisabled: a,
          ref: t
        }), h = (0, mv.$)(l, {
          labelable: !0
        }), p = (0, pv.v)(u, d), m = (0, l_.rd)(), v = (0, l_._h)(e);
        return {
          isPressed: f,
          linkProps: (0, pv.v)(h, v, {
            ...p,
            ...c,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), (0, l_.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function u_(e) {
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

      function d_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function f_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? d_(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = u_(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function h_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var p_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        m_ = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = f_(f_({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) p_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return h_(e.variantClassNames, e => h_(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_shqzby0 foundry_8kowh41 foundry_1d5mo5m0 foundry_1qqcnuao foundry_1qqcnuas",
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
      const v_ = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        y_ = (0, F.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const s = (0, F.useRef)(null),
            i = (0, W.UP)(s, o),
            {
              buttonProps: a
            } = (0, W.sL)(n, s),
            l = (0, q.v6)({
              "data-testid": r,
              className: m_({
                size: t
              })
            }, a);
          return (0, P.jsx)("button", {
            ref: i,
            ...l,
            children: (0, P.jsx)(fe.X, {
              label: e,
              size: v_[t]
            })
          })
        });

      function g_(e) {
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

      function b_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function __(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? b_(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = g_(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function w_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var x_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        E_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = __(__({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) x_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return w_(e.variantClassNames, e => w_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        C_ = E_({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        P_ = E_({
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
        S_ = E_({
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
      const O_ = (0, F.createContext)(null);

      function T_() {
        const e = (0, F.useContext)(O_);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const j_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, s) => {
          const i = e ? Z.DX : "div",
            a = (0, q.v6)({
              className: S_({
                status: r,
                background: n
              })
            }, o);
          return (0, P.jsx)(O_.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, P.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...a
            })
          })
        }),
        N_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        R_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        I_ = {
          danger: fe.CircleX,
          information: fe.Info,
          success: fe.CircleCheck,
          warning: fe.TriangleAlert
        },
        k_ = (0, F.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = T_(), s = e ? Z.DX : I_[o], i = (0, q.v6)({
            className: P_({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, P.jsx)(s, {
            label: "",
            ref: n,
            ...i
          })
        }),
        D_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        L_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        A_ = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, F.useRef)(null),
            i = (0, W.UP)(s, o),
            a = e ? Z.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = c_(n, s),
            u = (0, q.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, P.jsx)(a, {
            "data-pressed": c,
            "data-testid": r,
            ref: i,
            ...u,
            children: t
          })
        }),
        M_ = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? Z.DX : "div",
            i = (0, q.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        B_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const s = e ? Z.DX : "div";
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": t,
            className: (0, de.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        H_ = (0, F.forwardRef)((e, t) => {
          const {
            background: r
          } = T_(), n = "none" !== r, o = (0, q.v6)({
            className: C_({
              hasBackground: n
            })
          }, e);
          return (0, P.jsx)(y_, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function z_(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function V_(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : z_(n) && z_(o) ? V_(n, o) : n === o
        }))
      }

      function F_(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function G_(e) {
        return "number" == typeof e
      }

      function U_(e) {
        return "string" == typeof e
      }

      function q_(e) {
        return "boolean" == typeof e
      }

      function X_(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function K_(e) {
        return Math.abs(e)
      }

      function W_(e) {
        return Math.sign(e)
      }

      function Z_(e, t) {
        return K_(e - t)
      }

      function $_(e) {
        return tw(e).map(Number)
      }

      function Y_(e) {
        return e[Q_(e)]
      }

      function Q_(e) {
        return Math.max(0, e.length - 1)
      }

      function J_(e, t) {
        return t === Q_(e)
      }

      function ew(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function tw(e) {
        return Object.keys(e)
      }

      function rw(e, t) {
        return [e, t].reduce((e, t) => (tw(t).forEach(r => {
          const n = e[r],
            o = t[r],
            s = X_(n) && X_(o);
          e[r] = s ? rw(n, o) : o
        }), e), {})
      }

      function nw(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function ow() {
        let e = [];
        const t = {
          add: function(r, n, o, s = {
            passive: !0
          }) {
            let i;
            if ("addEventListener" in r) r.addEventListener(n, o, s), i = () => r.removeEventListener(n, o, s);
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

      function sw(e = 0, t = 0) {
        const r = K_(e - t);

        function n(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function s(e) {
          return n(e) || o(e)
        }
        return {
          length: r,
          max: t,
          min: e,
          constrain: function(r) {
            return s(r) ? n(r) ? e : t : r
          },
          reachedAny: s,
          reachedMax: o,
          reachedMin: n,
          removeOffset: function(e) {
            return r ? e - r * Math.ceil((e - t) / r) : e
          }
        }
      }

      function iw(e, t, r) {
        const {
          constrain: n
        } = sw(0, e), o = e + 1;
        let s = i(t);

        function i(e) {
          return r ? K_((o + e) % o) : n(e)
        }

        function a() {
          return s
        }

        function l() {
          return iw(e, a(), r)
        }
        const c = {
          get: a,
          set: function(e) {
            return s = i(e), c
          },
          add: function(e) {
            return l().set(a() + e)
          },
          clone: l
        };
        return c
      }

      function aw(e, t, r, n, o, s, i, a, l, c, u, d, f, h, p, m, v, y, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, E = ow(), C = ow(), P = sw(50, 225).constrain(h.measure(20)), S = {
          mouse: 300,
          touch: 400
        }, O = {
          mouse: 500,
          touch: 600
        }, T = p ? 43 : 25;
        let j = !1,
          N = 0,
          R = 0,
          I = !1,
          k = !1,
          D = !1,
          L = !1;

        function A(e) {
          if (!nw(e, n) && e.touches.length >= 2) return M(e);
          const t = s.readPoint(e),
            r = s.readPoint(e, b),
            i = Z_(t, N),
            l = Z_(r, R);
          if (!k && !L) {
            if (!e.cancelable) return M(e);
            if (k = i > l, !k) return M(e)
          }
          const u = s.pointerMove(e);
          i > m && (D = !0), c.useFriction(.3).useDuration(.75), a.start(), o.add(_(u)), e.preventDefault()
        }

        function M(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            r = s.pointerUp(e) * (p ? O : S)[L ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * W_(e)),
                n = u.byDistance(e, !p).distance;
              return p || K_(e) < P ? n : v && t ? .5 * n : u.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (K_(e) <= K_(t)) return 0;
              const r = Z_(K_(e), K_(t));
              return K_(r / e)
            }(r, n),
            i = T - 10 * o,
            a = y + o / 50;
          k = !1, I = !1, C.clear(), c.useDuration(i).useFriction(a), l.distance(n, !p), L = !1, f.emit("pointerUp")
        }

        function B(e) {
          D && (e.stopPropagation(), e.preventDefault(), D = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function a(a) {
              (q_(g) || g(e, a)) && function(e) {
                const a = nw(e, n);
                L = a, D = p && a && !e.buttons && j, j = Z_(o.get(), i.get()) >= 2, a && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (I = !0, s.pointerDown(e), c.useFriction(0).useDuration(0), o.set(i), function() {
                  const e = L ? r : t;
                  C.add(e, "touchmove", A, x).add(e, "touchend", M).add(e, "mousemove", A, x).add(e, "mouseup", M)
                }(), N = s.readPoint(e), R = s.readPoint(e, b), f.emit("pointerDown"))
              }(a)
            }
            const l = t;
            E.add(l, "dragstart", e => e.preventDefault(), x).add(l, "touchmove", () => {}, x).add(l, "touchend", () => {}).add(l, "touchstart", a).add(l, "mousedown", a).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", B, !0)
          },
          destroy: function() {
            E.clear(), C.clear()
          },
          pointerDown: function() {
            return I
          }
        }
      }

      function lw(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function s(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (nw(r, t) ? r : r.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return r = e, n = e, s(e)
          },
          pointerMove: function(e) {
            const t = s(e) - s(n),
              i = o(e) - o(r) > 170;
            return n = e, i && (r = e), t
          },
          pointerUp: function(e) {
            if (!r || !n) return 0;
            const t = s(n) - s(r),
              i = o(e) - o(r),
              a = o(e) - o(n) > 170,
              l = t / i;
            return i && !a && K_(l) > .1 ? l : 0
          },
          readPoint: s
        }
      }

      function cw(e, t, r, n, o, s, i) {
        const a = [e].concat(n);
        let l, c, u = [],
          d = !1;

        function f(e) {
          return o.measureSize(i.measure(e))
        }
        return {
          init: function(o) {
            s && (c = f(e), u = n.map(f), l = new ResizeObserver(r => {
              (q_(s) || s(o, r)) && function(r) {
                for (const s of r) {
                  if (d) return;
                  const r = s.target === e,
                    i = n.indexOf(s.target),
                    a = r ? c : u[i];
                  if (K_(f(r ? e : n[i]) - a) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(r)
            }), r.requestAnimationFrame(() => {
              a.forEach(e => l.observe(e))
            }))
          },
          destroy: function() {
            d = !0, l && l.disconnect()
          }
        }
      }

      function uw(e, t, r, n, o) {
        const s = o.measure(10),
          i = o.measure(50),
          a = sw(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = K_(e[l] - t.get()),
              d = r.get() - t.get(),
              f = a.constrain(u / i);
            r.subtract(d * f), !o && K_(d) < s && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function dw(e, t, r, n) {
        const o = t.min + .1,
          s = t.max + .1,
          {
            reachedMin: i,
            reachedMax: a
          } = sw(o, s),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? a(r.get()) : -1 === e && i(r.get())
                }(t)) return;
              const o = e * (-1 * t);
              n.forEach(e => e.add(o))
            }
          };
        return l
      }

      function fw(e) {
        let t = e;

        function r(e) {
          return G_(e) ? e : e.get()
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

      function hw(e, t) {
        const r = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          n = t.style;
        let o = null,
          s = !1;
        return {
          clear: function() {
            s || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (s) return;
            const i = (a = e.direction(t), Math.round(100 * a) / 100);
            var a;
            i !== o && (n.transform = r(i), o = i)
          },
          toggleActive: function(e) {
            s = !e
          }
        }
      }

      function pw(e, t, r, n, o, s, i, a, l) {
        const c = $_(o),
          u = $_(o).reverse(),
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
            return s.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(i);
          return o.map(t => {
            const n = c ? 0 : -r,
              o = c ? r : 0,
              s = c ? "end" : "start",
              i = u[t][s];
            return {
              index: t,
              loopPoint: i,
              slideLocation: fw(-1),
              translate: hw(e, l[t]),
              target: () => a.get() > i ? n : o
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

      function mw(e, t, r) {
        let n, o = !1;
        return {
          init: function(s) {
            r && (n = new MutationObserver(e => {
              o || (q_(r) || r(s, e)) && function(e) {
                for (const r of e)
                  if ("childList" === r.type) {
                    s.reInit(), t.emit("slidesChanged");
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

      function vw(e, t, r, n, o, s, i) {
        const {
          align: a,
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
          watchFocus: x
        } = s, E = {
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
        }, C = E.measure(t), P = r.map(E.measure), S = function(e, t) {
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
        }(l, c), O = S.measureSize(C), T = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(O), j = function(e, t) {
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
              return U_(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(a, O), N = !d && !!g, R = d || !!g, {
          slideSizes: I,
          slideSizesWithGaps: k,
          startGap: D,
          endGap: L
        } = function(e, t, r, n, o, s) {
          const {
            measureSize: i,
            startEdge: a,
            endEdge: l
          } = e, c = r[0] && o, u = function() {
            if (!c) return 0;
            const e = r[0];
            return K_(t[a] - e[a])
          }(), d = function() {
            if (!c) return 0;
            const e = s.getComputedStyle(Y_(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(i), h = r.map((e, t, r) => {
            const n = !t,
              o = J_(r, t);
            return n ? f[t] + u : o ? f[t] + d : r[t + 1][a] - e[a]
          }).map(K_);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: u,
            endGap: d
          }
        }(S, C, P, r, R, o), A = function(e, t, r, n, o, s, i, a, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, f = G_(r), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return $_(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? $_(e).reduce((r, f, h) => {
                  const p = Y_(r) || 0,
                    m = 0 === p,
                    v = f === Q_(e),
                    y = o[c] - s[p][c],
                    g = o[c] - s[f][u],
                    b = !n && m ? d(i) : 0,
                    _ = K_(g - (!n && v ? d(a) : 0) - (y + b));
                  return h && _ > t + l && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return h
        }(S, O, v, d, C, P, D, L, 2), {
          snaps: M,
          snapsAligned: B
        } = function(e, t, r, n, o) {
          const {
            startEdge: s,
            endEdge: i
          } = e, {
            groupSlides: a
          } = o, l = a(n).map(e => Y_(e)[i] - e[0][s]).map(K_).map(t.measure), c = n.map(e => r[s] - e[s]).map(e => -K_(e)), u = a(c).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: c,
            snapsAligned: u
          }
        }(S, j, C, P, A), H = -Y_(M) + Y_(k), {
          snapsContained: z,
          scrollContainLimit: V
        } = function(e, t, r, n) {
          const o = sw(-t + e, 0),
            s = r.map((e, t) => {
              const {
                min: n,
                max: s
              } = o, i = o.constrain(e), l = !t, c = J_(r, t);
              return l ? s : c || a(n, i) ? n : a(s, i) ? s : i
            }).map(e => parseFloat(e.toFixed(3))),
            i = function() {
              const e = s[0],
                t = Y_(s);
              return sw(s.lastIndexOf(e), s.indexOf(t) + 1)
            }();

          function a(e, t) {
            return Z_(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === n) return s;
              const {
                min: r,
                max: a
              } = i;
              return s.slice(r, a)
            }(),
            scrollContainLimit: i
          }
        }(O, H, B, g), F = N ? z : B, {
          limit: G
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: sw(r ? n - e : Y_(t), n)
          }
        }(H, F, d), U = iw(Q_(F), u, d), q = U.clone(), X = $_(r), K = function(e, t, r, n) {
          const o = ow(),
            s = 1e3 / 60;
          let i = null,
            a = 0,
            l = 0;

          function c(e) {
            if (!l) return;
            i || (i = e, r(), r());
            const o = e - i;
            for (i = e, a += o; a >= s;) r(), a -= s;
            n(a / s), l && (l = t.requestAnimationFrame(c))
          }

          function u() {
            t.cancelAnimationFrame(l), i = null, a = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", () => {
                e.hidden && (i = null, a = 0)
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
        })(ae), e => (({
          scrollBody: e,
          translate: t,
          location: r,
          offsetLocation: n,
          previousLocation: o,
          scrollLooper: s,
          slideLooper: i,
          dragHandler: a,
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
            v = m && !a.pointerDown();
          v && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), d && (s.loop(e.direction()), i.loop()), t.to(n.get()), v && c.emit("settle"), m || c.emit("scroll")
        })(ae, e)), W = F[U.get()], Z = fw(W), $ = fw(W), Y = fw(W), Q = fw(W), J = function(e, t, r, n, o) {
          let s = 0,
            i = 0,
            a = o,
            l = .68,
            c = e.get(),
            u = 0;

          function d(e) {
            return a = e, h
          }

          function f(e) {
            return l = e, h
          }
          const h = {
            direction: function() {
              return i
            },
            duration: function() {
              return a
            },
            velocity: function() {
              return s
            },
            seek: function() {
              const t = n.get() - e.get();
              let o = 0;
              return a ? (r.set(e), s += t / a, s *= l, c += s, e.add(s), o = c - u) : (s = 0, r.set(n), e.set(n), o = t), i = W_(o), u = c, h
            },
            settled: function() {
              return K_(n.get() - t.get()) < .001
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
            reachedAny: s,
            removeOffset: i,
            constrain: a
          } = n;

          function l(e) {
            return e.concat().sort((e, t) => K_(e) - K_(t))[0]
          }

          function c(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const s = o.filter(e => W_(e) === n);
            return s.length ? l(s) : Y_(o) - r
          }
          const u = {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: u,
                  distance: d
                } = function(r) {
                  const n = e ? i(r) : a(r),
                    o = t.map((e, t) => ({
                      diff: c(e - n, 0),
                      index: t
                    })).sort((e, t) => K_(e.diff) - K_(t.diff)),
                    {
                      index: s
                    } = o[0];
                  return {
                    index: s,
                    distance: n
                  }
                }(l),
                f = !e && s(l);
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
        }(d, F, H, G, Q), te = function(e, t, r, n, o, s, i) {
          function a(o) {
            const a = o.distance,
              l = o.index !== t.get();
            s.add(a), a && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (r.set(t.get()), t.set(o.index), i.emit("select"))
          }
          const l = {
            distance: function(e, t) {
              a(o.byDistance(e, t))
            },
            index: function(e, r) {
              const n = t.clone().set(e);
              a(o.byIndex(n.get(), r))
            }
          };
          return l
        }(K, U, q, J, ee, Q, i), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(G), ne = ow(), oe = function(e, t, r, n) {
          const o = {};
          let s, i = null,
            a = null,
            l = !1;
          const c = {
            init: function() {
              s = new IntersectionObserver(e => {
                l || (e.forEach(e => {
                  const r = t.indexOf(e.target);
                  o[r] = e
                }), i = null, a = null, r.emit("slidesInView"))
              }, {
                root: e.parentElement,
                threshold: n
              }), t.forEach(e => s.observe(e))
            },
            destroy: function() {
              s && s.disconnect(), l = !0
            },
            get: function(e = !0) {
              if (e && i) return i;
              if (!e && a) return a;
              const t = function(e) {
                return tw(o).reduce((t, r) => {
                  const n = parseInt(r),
                    {
                      isIntersecting: s
                    } = o[n];
                  return (e && s || !e && !s) && t.push(n), t
                }, [])
              }(e);
              return e && (i = t), e || (a = t), t
            }
          };
          return c
        }(t, r, i, m), {
          slideRegistry: se
        } = function(e, t, r, n, o, s) {
          const {
            groupSlides: i
          } = o, {
            min: a,
            max: l
          } = n, c = function() {
            const n = i(s),
              o = !e || "keepSnaps" === t;
            return 1 === r.length ? [s] : o ? n : n.slice(a, l).map((e, t, r) => {
              const n = !t,
                o = J_(r, t);
              return n ? ew(Y_(r[0]) + 1) : o ? ew(Q_(s) - Y_(r)[0] + 1, Y_(r)[0]) : e
            })
          }();
          return {
            slideRegistry: c
          }
        }(N, g, F, V, A, X), ie = function(e, t, r, n, o, s, i, a) {
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
              a && (s.add(document, "keydown", u, !1), t.forEach((t, u) => {
                s.add(t, "focus", t => {
                  (q_(a) || a(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    i.emit("slideFocusStart"), e.scrollLeft = 0;
                    const s = r.findIndex(e => e.includes(t));
                    G_(s) && (o.useDuration(0), n.index(s, 0), i.emit("slideFocus"))
                  }(u)
                }, l)
              }))
            }
          };
          return d
        }(e, r, se, te, J, ne, i, x), ae = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: i,
          containerRect: C,
          slideRects: P,
          animation: K,
          axis: S,
          dragHandler: aw(S, e, n, o, Q, lw(S, o), Z, K, te, J, ee, U, i, T, h, p, y, .68, w),
          eventStore: ne,
          percentOfView: T,
          index: U,
          indexPrevious: q,
          limit: G,
          location: Z,
          offsetLocation: Y,
          previousLocation: $,
          options: s,
          resizeHandler: cw(t, i, o, r, S, b, E),
          scrollBody: J,
          scrollBounds: uw(G, Y, Q, J, T),
          scrollLooper: dw(H, G, Y, [Z, Y, $, Q]),
          scrollProgress: re,
          scrollSnapList: F.map(re.get),
          scrollSnaps: F,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: pw(S, O, H, I, k, M, F, Y, r),
          slideFocus: ie,
          slidesHandler: mw(t, i, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: se,
          slidesToScroll: A,
          target: Q,
          translate: hw(S, t)
        };
        return ae
      }
      const yw = {
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

      function gw(e) {
        function t(e, t) {
          return rw(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = tw(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => tw(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function bw(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          s = gw(o),
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
          }(s),
          a = ow(),
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
          } = s,
          {
            on: f,
            off: h,
            emit: p
          } = l,
          m = S;
        let v, y, g, b, _ = !1,
          w = c(yw, bw.globalOptions),
          x = c(w),
          E = [];

        function C(t) {
          const r = vw(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? C(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function P(t, r) {
          _ || (w = c(w, t), x = u(w), E = r || E, function() {
            const {
              container: t,
              slides: r
            } = x, n = U_(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = U_(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = C(x), d([w, ...E.map(({
            options: e
          }) => e)]).forEach(e => a.add(e, "change", S)), x.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(N), v.eventHandler.init(N), v.resizeHandler.init(N), v.slidesHandler.init(N), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(N), y = i.init(N, E)))
        }

        function S(e, t) {
          const r = j();
          O(), P(c({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function O() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), i.destroy(), a.clear()
        }

        function T(e, t, r) {
          x.active && !_ && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), v.scrollTo.index(e, r || 0))
        }

        function j() {
          return v.index.get()
        }
        const N = {
          canScrollNext: function() {
            return v.index.add(1).get() !== j()
          },
          canScrollPrev: function() {
            return v.index.add(-1).get() !== j()
          },
          containerNode: function() {
            return g
          },
          internalEngine: function() {
            return v
          },
          destroy: function() {
            _ || (_ = !0, a.clear(), O(), l.emit("destroy"), l.clear())
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
          selectedScrollSnap: j,
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
        return P(t, r), setTimeout(() => l.emit("init"), 0), N
      }

      function _w(e = {}, t = []) {
        const r = (0, F.useRef)(e),
          n = (0, F.useRef)(t),
          [o, s] = (0, F.useState)(),
          [i, a] = (0, F.useState)(),
          l = (0, F.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, F.useEffect)(() => {
          V_(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, F.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = F_(e),
              n = F_(t);
            return r.every((e, t) => V_(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, F.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && i) {
            bw.globalOptions = _w.globalOptions;
            const e = bw(i, r.current, n.current);
            return s(e), () => e.destroy()
          }
          s(void 0)
        }, [i, s]), [a, o]
      }

      function ww(e = {}) {
        let t, r = [];
        const n = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          return n ? n.map(e => r[e]).reduce((e, t) => Math.max(e, t), 0) : null
        }

        function s() {
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
            "y" !== o && (r = i.map(e => e.height), n.forEach(e => t.on(e, s)), s())
          },
          destroy: function() {
            n.forEach(e => t.off(e, s));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      bw.globalOptions = void 0, _w.globalOptions = void 0, ww.globalOptions = void 0;
      const xw = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function Ew(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function Cw(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Pw(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Sw(e = {}) {
        let t, r, n, o, s = [],
          i = [];
        const a = ["select"],
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
          ("pointerDown" === t ? Pw : Cw)(n, u.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            s = e.map(e => o[e]);
          return n.forEach(e => Cw(e, r)), s.forEach(e => Pw(e, r)), e
        }

        function h() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          s = f(t, s, u.snapped)
        }

        function p() {
          const e = r.slidesInView();
          i = f(e, i, u.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(s, i) {
            r = s;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = i, v = f(xw, Sw.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (u.loop = Ew(t.loop), Pw(n, u.loop)), t.draggable && _ && (u.draggable = Ew(t.draggable), Pw(n, u.draggable)), t.dragging && (u.dragging = Ew(t.dragging), l.forEach(e => r.on(e, d))), t.snapped && (u.snapped = Ew(t.snapped), a.forEach(e => r.on(e, h)), h()), t.inView && (u.inView = Ew(t.inView), c.forEach(e => r.on(e, p)), p())
          },
          destroy: function() {
            l.forEach(e => r.off(e, d)), a.forEach(e => r.off(e, h)), c.forEach(e => r.off(e, p)), Cw(n, u.loop), Cw(n, u.draggable), Cw(n, u.dragging), f([], s, u.snapped), f([], i, u.inView), Object.keys(u).forEach(e => {
              u[e] = []
            })
          }
        };
        return m
      }
      Sw.globalOptions = void 0;

      function Ow(e) {
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

      function Tw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function jw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tw(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ow(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Nw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Rw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Iw = "foundry_qmpv6yv",
        kw = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = jw(jw({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Rw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Nw(e.variantClassNames, e => Nw(e, e => e.split(" ")[0]))
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
      const Dw = (0, F.createContext)(null);

      function Lw() {
        const e = (0, F.useContext)(Dw);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Aw = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: s,
          align: i = "left",
          ...a
        }, l) => {
          const c = (({
              loopPagination: e = !0
            }) => {
              const t = (0, W.rl)(),
                r = (0, W.jt)(),
                [n, o] = (0, F.useState)([]),
                s = n.length,
                [i, a] = (0, F.useState)(0),
                [l, c] = _w({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && s > 1
                }, [ww(), Sw()]),
                u = (0, F.useRef)(0),
                d = (0, F.useRef)(!1),
                f = n[i],
                h = (0, F.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), a(t), d.current = !0
                }, [c]),
                p = (0, F.useCallback)(e => {
                  u.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, F.useCallback)((e, t) => {
                  const r = e.internalEngine(),
                    n = e.scrollProgress(),
                    o = e.slidesInView(),
                    s = "scroll" === t;
                  e.scrollSnapList().forEach((t, i) => {
                    let a = t - n;
                    r.slideRegistry[i].forEach(i => {
                      if (s && !o.includes(i)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                        const r = e.target();
                        if (i === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (a = t - (1 + n)), 1 === e && (a = t + (1 - n))
                        }
                      });
                      const l = (c = 1 - Math.abs(a * u.current), Math.min(Math.max(c, 0), 1)).toString();
                      var c;
                      e.slideNodes()[i].style.opacity = l
                    })
                  })
                }, []);
              return (0, F.useEffect)(() => {
                c && (p(c), m(c), c.on("reInit", p).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [c, m]), (0, F.useEffect)(() => {
                c && (h(c), c.on("select", h).on("reInit", h))
              }, [c, h]), {
                setAlerts: o,
                alerts: n,
                numAlerts: s,
                emblaRef: l,
                prevAlert: () => c?.scrollPrev(r),
                nextAlert: () => c?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: i,
                setCurrentAlertIndex: a,
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
          (0, F.useEffect)(() => {
            o && s && f([{
              status: o,
              background: s,
              align: i
            }])
          }, []);
          const p = h > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            m = (0, q.v6)({
              className: kw(u)
            }, p, a),
            v = e ? Z.DX : "div";
          return (0, P.jsx)(Dw.Provider, {
            value: c,
            children: (0, P.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        }),
        Mw = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Bw = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Lw();
          if (!e && !n || !n?.status) return null;
          const o = e || Mw[n.status],
            s = fe[o],
            i = (0, q.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, P.jsx)(s, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...i
          })
        }),
        Hw = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        zw = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...s
        }, i) => {
          const a = e ? Z.DX : "div",
            l = (0, q.v6)({
              className: "foundry_qmpv6yo"
            }, s);
          return (0, P.jsx)(a, {
            ref: i,
            "data-testid": t,
            ...l
          })
        }),
        Vw = (0, F.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: s
          } = Lw(), i = (0, q.v6)({
            className: "foundry_qmpv6ym"
          }, r), a = (0, W.UP)(s, n), l = F.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, F.useEffect)(() => {
            l && o(l)
          }, []), (0, P.jsx)("div", {
            ref: a,
            "data-testid": e,
            ...i,
            children: (0, P.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Fw = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, F.useRef)(null),
            i = (0, W.UP)(s, o),
            a = e ? Z.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = c_(n, s),
            u = (0, q.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, P.jsx)(a, {
            "data-pressed": c,
            "data-testid": r,
            ref: i,
            ...l,
            ...u,
            children: t
          })
        }),
        Gw = (0, F.forwardRef)((e, t) => {
          const r = (0, q.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, P.jsx)(y_, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Uw = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const s = e ? Z.DX : "div",
            i = (0, q.v6)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...i,
            children: r
          })
        }),
        qw = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Lw(), s = (0, q.v6)({
            className: Iw
          }, t);
          return (0, P.jsx)(ke, {
            ref: r,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...s
          })
        }),
        Xw = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Lw(), s = (0, q.v6)({
            className: Iw
          }, t);
          return (0, P.jsx)(ke, {
            ref: r,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...s
          })
        }),
        Kw = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Lw(), s = (0, q.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn foundry_tdsdcdr"
          }, t);
          return (0, P.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...s,
            children: [n + 1, "/", o]
          })
        });

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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ww(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
        Jw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $w($w({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
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
        },
        ex = Jw({
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
        tx = Jw({
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
        rx = Jw({
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
      const nx = (0, F.createContext)(null);

      function ox() {
        const e = (0, F.useContext)(nx);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const sx = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: s,
          hasBorder: i,
          isDisabled: a,
          ...l
        }, c) => {
          const u = {
              size: n,
              background: o,
              color: s,
              hasBorder: i,
              isDisabled: a
            },
            d = (0, q.v6)({
              className: tx(u)
            }, l),
            f = e ? Z.DX : "div";
          return (0, P.jsx)(nx.Provider, {
            value: u,
            children: (0, P.jsx)(f, {
              ref: c,
              "data-testid": r,
              "aria-disabled": a,
              ...d,
              children: t
            })
          })
        }),
        ix = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = ox(), i = e ? Z.DX : "div", a = (0, q.v6)({
            className: rx({
              size: s
            })
          }, n);
          return (0, P.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        ax = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = fe[e],
            o = (0, q.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, P.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        lx = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = ox(), s = (0, q.v6)({
            className: ex({
              background: n
            })
          }, t);
          return (0, P.jsx)(ke, {
            ref: r,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: o,
            ...s
          })
        });
      var cx = F.forwardRef((e, t) => {
        const {
          container: r,
          ...n
        } = e, [o, s] = F.useState(!1);
        (0, qu.N)(() => s(!0), []);
        const i = r || o && globalThis?.document?.body;
        return i ? lu.createPortal((0, P.jsx)(Vu.sG.div, {
          ...n,
          ref: t
        }), i) : null
      });
      cx.displayName = "Portal";
      var ux = Object.freeze({
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
        dx = F.forwardRef((e, t) => (0, P.jsx)(Vu.sG.span, {
          ...e,
          ref: t,
          style: {
            ...ux,
            ...e.style
          }
        }));
      dx.displayName = "VisuallyHidden";
      var fx = "ToastProvider",
        [hx, px, mx] = (0, hf.N)("Toast"),
        [vx, yx] = (0, Pu.A)("Toast", [mx]),
        [gx, bx] = vx(fx),
        _x = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            children: i
          } = e, [a, l] = F.useState(null), [c, u] = F.useState(0), d = F.useRef(!1), f = F.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${fx}\`. Expected non-empty \`string\`.`), (0, P.jsx)(hx.Provider, {
            scope: t,
            children: (0, P.jsx)(gx, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: s,
              toastCount: c,
              viewport: a,
              onViewportChange: l,
              onToastAdd: F.useCallback(() => u(e => e + 1), []),
              onToastRemove: F.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: i
            })
          })
        };
      _x.displayName = fx;
      var wx = "ToastViewport",
        xx = ["F8"],
        Ex = "toast.viewportPause",
        Cx = "toast.viewportResume",
        Px = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = xx,
            label: o = "Notifications ({hotkey})",
            ...s
          } = e, i = bx(wx, r), a = px(r), l = F.useRef(null), c = F.useRef(null), u = F.useRef(null), d = F.useRef(null), f = (0, Cu.s)(t, d, i.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), p = i.toastCount > 0;
          F.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && d.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), F.useEffect(() => {
            const e = l.current,
              t = d.current;
            if (p && e && t) {
              const r = () => {
                  if (!i.isClosePausedRef.current) {
                    const e = new CustomEvent(Ex);
                    t.dispatchEvent(e), i.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (i.isClosePausedRef.current) {
                    const e = new CustomEvent(Cx);
                    t.dispatchEvent(e), i.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && n()
                },
                s = () => {
                  e.contains(document.activeElement) || n()
                };
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", s), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", s), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [p, i.isClosePausedRef]);
          const m = F.useCallback(({
            tabbingDirection: e
          }) => {
            const t = a().map(t => {
              const r = t.ref.current,
                n = [r, ...Gx(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [a]);
          return F.useEffect(() => {
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
                    s = o.findIndex(e => e === r);
                  Ux(o.slice(s + 1)) ? t.preventDefault() : n ? c.current?.focus() : u.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, m]), (0, P.jsxs)(Su.lg, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", h),
            tabIndex: -1,
            style: {
              pointerEvents: p ? void 0 : "none"
            },
            children: [p && (0, P.jsx)(Ox, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Ux(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, P.jsx)(hx.Slot, {
              scope: r,
              children: (0, P.jsx)(Vu.sG.ol, {
                tabIndex: -1,
                ...s,
                ref: f
              })
            }), p && (0, P.jsx)(Ox, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                Ux(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      Px.displayName = wx;
      var Sx = "ToastFocusProxy",
        Ox = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, s = bx(Sx, r);
          return (0, P.jsx)(dx, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !s.viewport?.contains(t) && n()
            }
          })
        });
      Ox.displayName = Sx;
      var Tx = "Toast",
        jx = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            ...i
          } = e, [a, l] = (0, gd.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: s,
            caller: Tx
          });
          return (0, P.jsx)(vd.C, {
            present: r || a,
            children: (0, P.jsx)(Ix, {
              open: a,
              ...i,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Uu.c)(e.onPause),
              onResume: (0, Uu.c)(e.onResume),
              onSwipeStart: (0, Eu.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Eu.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, Eu.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Eu.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      jx.displayName = Tx;
      var [Nx, Rx] = vx(Tx, {
        onClose() {}
      }), Ix = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: s,
          onClose: i,
          onEscapeKeyDown: a,
          onPause: l,
          onResume: c,
          onSwipeStart: u,
          onSwipeMove: d,
          onSwipeCancel: f,
          onSwipeEnd: h,
          ...p
        } = e, m = bx(Tx, r), [v, y] = F.useState(null), g = (0, Cu.s)(t, e => y(e)), b = F.useRef(null), _ = F.useRef(null), w = o || m.duration, x = F.useRef(0), E = F.useRef(w), C = F.useRef(0), {
          onToastAdd: S,
          onToastRemove: O
        } = m, T = (0, Uu.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), i()
        }), j = F.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), x.current = (new Date).getTime(), C.current = window.setTimeout(T, e))
        }, [T]);
        F.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                j(E.current), c?.()
              },
              r = () => {
                const e = (new Date).getTime() - x.current;
                E.current = E.current - e, window.clearTimeout(C.current), l?.()
              };
            return e.addEventListener(Ex, r), e.addEventListener(Cx, t), () => {
              e.removeEventListener(Ex, r), e.removeEventListener(Cx, t)
            }
          }
        }, [m.viewport, w, l, c, j]), F.useEffect(() => {
          s && !m.isClosePausedRef.current && j(w)
        }, [s, w, m.isClosePausedRef, j]), F.useEffect(() => (S(), () => O()), [S, O]);
        const N = F.useMemo(() => v ? zx(v) : null, [v]);
        return m.viewport ? (0, P.jsxs)(P.Fragment, {
          children: [N && (0, P.jsx)(kx, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: N
          }), (0, P.jsx)(Nx, {
            scope: r,
            onClose: T,
            children: lu.createPortal((0, P.jsx)(hx.ItemSlot, {
              scope: r,
              children: (0, P.jsx)(Su.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, Eu.mK)(a, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || T(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, P.jsx)(Vu.sG.li, {
                  tabIndex: 0,
                  "data-state": s ? "open" : "closed",
                  "data-swipe-direction": m.swipeDirection,
                  ...p,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, Eu.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (a?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, T()))
                  }),
                  onPointerDown: (0, Eu.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, Eu.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(_.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      s = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      i = o ? s(0, t) : 0,
                      a = o ? 0 : s(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      c = {
                        x: i,
                        y: a
                      },
                      f = {
                        originalEvent: e,
                        delta: c
                      };
                    n ? (_.current = c, Vx("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : Fx(c, m.swipeDirection, l) ? (_.current = c, Vx("toast.swipeStart", u, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: (0, Eu.mK)(e.onPointerUp, e => {
                    const t = _.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), _.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Fx(t, m.swipeDirection, m.swipeThreshold) ? Vx("toast.swipeEnd", h, n, {
                        discrete: !0
                      }) : Vx("toast.swipeCancel", f, n, {
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
      }), kx = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = bx(Tx, t), [s, i] = F.useState(!1), [a, l] = F.useState(!1);
        return function(e = () => {}) {
          const t = (0, Uu.c)(e);
          (0, qu.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => i(!0)), F.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, P.jsx)(cx, {
          asChild: !0,
          children: (0, P.jsx)(dx, {
            ...n,
            children: s && (0, P.jsxs)(P.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, P.jsx)(Vu.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Dx = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, P.jsx)(Vu.sG.div, {
          ...n,
          ref: t
        })
      });
      Dx.displayName = "ToastDescription";
      var Lx = "ToastAction",
        Ax = F.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, P.jsx)(Hx, {
            altText: r,
            asChild: !0,
            children: (0, P.jsx)(Bx, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Lx}\`. Expected non-empty \`string\`.`), null)
        });
      Ax.displayName = Lx;
      var Mx = "ToastClose",
        Bx = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Rx(Mx, r);
          return (0, P.jsx)(Hx, {
            asChild: !0,
            children: (0, P.jsx)(Vu.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, Eu.mK)(e.onClick, o.onClose)
            })
          })
        });
      Bx.displayName = Mx;
      var Hx = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, P.jsx)(Vu.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function zx(e) {
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
              } else t.push(...zx(e))
          }
        }), t
      }

      function Vx(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.currentTarget,
          s = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, Vu.hO)(o, s) : o.dispatchEvent(s)
      }
      var Fx = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          s = n > o;
        return "left" === t || "right" === t ? s && n > r : !s && o > r
      };

      function Gx(e) {
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

      function Ux(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var qx = _x,
        Xx = Px,
        Kx = jx,
        Wx = Dx,
        Zx = Ax,
        $x = Bx;

      function Yx(e) {
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

      function Qx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Jx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qx(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Yx(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function eE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var tE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        rE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Jx(Jx({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) tE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return eE(e.variantClassNames, e => eE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        nE = rE({
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
        oE = rE({
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
        sE = rE({
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
      const iE = ({
          testId: e,
          ...t
        }) => (0, P.jsx)(qx, {
          "data-testid": e,
          ...t
        }),
        aE = (0, F.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const s = (0, q.v6)({
            className: sE({
              position: r
            })
          }, n);
          return (0, P.jsx)(Xx, {
            ref: o,
            "data-testid": t,
            ...s,
            children: e
          })
        }),
        lE = (0, F.createContext)(null);

      function cE() {
        const e = (0, F.useContext)(lE);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const uE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, s) => {
          const i = e ? Z.DX : Kx,
            a = (0, q.v6)({
              className: oE({
                appearance: n
              })
            }, o);
          return (0, P.jsx)(lE.Provider, {
            value: {
              appearance: n
            },
            children: (0, P.jsx)(i, {
              ref: s,
              "data-testid": r,
              ...a,
              children: t
            })
          })
        }),
        dE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? Z.DX : Wx,
            i = (0, q.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        fE = {
          danger: fe.CircleX,
          information: fe.Info,
          success: fe.CircleCheck,
          warning: fe.TriangleAlert,
          avocado: fe.CircleCheck
        },
        hE = (0, F.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = cE(), o = e ? Z.DX : fE[n], s = (0, q.v6)({
            className: nE({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, P.jsx)(o, {
            ref: r,
            ...s
          })
        }),
        pE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, P.jsx)(Zx, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, P.jsx)(Z.DX, {
              children: t
            }) : (0, P.jsx)(Ee, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        mE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, s) => {
          const i = (0, q.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, P.jsx)($x, {
            ref: s,
            "data-testid": r,
            ...i,
            children: e ? (0, P.jsx)(Z.DX, {
              children: t
            }) : (0, P.jsx)(y_, {
              size: "SM",
              label: n
            })
          })
        });

      function vE(e) {
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

      function yE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yE(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = vE(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function bE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _E = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gE(gE({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) _E(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bE(e.variantClassNames, e => bE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        xE = wE({
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
        EE = wE({
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
        CE = wE({
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

      function PE() {
        const e = (0, F.useContext)(SE);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const SE = (0, F.createContext)(null),
        OE = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, s) => {
          const i = (0, q.v6)({
              className: CE({
                size: n
              })
            }, o),
            a = r ? Z.DX : "ol";
          return (0, P.jsx)(SE.Provider, {
            value: {
              size: n
            },
            children: (0, P.jsx)(a, {
              ref: s,
              "data-testid": t,
              ...i,
              children: e
            })
          })
        }),
        TE = (0, F.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, s) => {
          const i = (0, F.useRef)(null),
            {
              size: a
            } = PE(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: r,
                isDisabled: n,
                "aria-current": o,
                elementType: s = "a",
                ...i
              } = e, {
                linkProps: a
              } = c_({
                isDisabled: n || r,
                elementType: s,
                ...i
              }, t), l = {};
              return /^h[1-6]$/.test(s) || (l = a), r && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": n,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, i),
            c = r ? Z.DX : "a",
            u = (0, q.v6)({
              className: (0, de.clsx)(xE({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, P.jsx)("li", {
            className: EE({
              size: a
            }),
            ref: s,
            children: (0, P.jsx)(c, {
              ref: i,
              ...u,
              children: t
            })
          })
        }),
        jE = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = fe[e];
          return (0, P.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        NE = (0, F.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, s) => {
          const [i, a] = (0, F.useState)(r), {
            size: l
          } = PE(), c = (0, q.v6)({
            className: EE({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, P.jsx)("li", {
            ref: s,
            ...c,
            children: (0, P.jsxs)(Tm, {
              open: i,
              onOpenChange: () => a(!i),
              children: [(0, P.jsx)(jm, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, P.jsx)(Im, {
                children: (0, P.jsx)(km, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, P.jsx)(Dm, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        RE = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = t ? Z.DX : Lm,
            i = (0, q.v6)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, P.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        });

      function IE(e) {
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

      function kE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function DE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? kE(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = IE(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function LE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var AE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ME = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = DE(DE({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) AE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return LE(e.variantClassNames, e => LE(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_18omk9t1",
          variantClassNames: {
            appearance: {
              primary: "foundry_18omk9t2",
              secondary: "foundry_18omk9t3",
              tertiary: "foundry_18omk9t4"
            },
            size: {
              SM: "foundry_18omk9t5 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdr foundry_tdsdcdo",
              MD: "foundry_18omk9t6 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdr foundry_tdsdcdn"
            },
            type: {
              text: "foundry_18omk9t7",
              number: "foundry_18omk9t8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const BE = (0, F.createContext)(null);

      function HE() {
        const e = (0, F.useContext)(BE);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const zE = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...s
        }, i) => {
          const a = e ? Z.DX : "div",
            l = (0, q.v6)({
              className: ME({
                appearance: r,
                type: o,
                size: n
              })
            }, s);
          return (0, P.jsx)(BE.Provider, {
            value: {
              type: o
            },
            children: (0, P.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...l
            })
          })
        }),
        VE = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            ...s
          })
        }),
        FE = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = fe[e],
            o = (0, q.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, P.jsx)(n, {
            ref: r,
            ...o
          })
        });
      var GE = /^--/;

      function UE(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || GE.test(e) || XE.hasOwnProperty(e) && XE[e] ? ("" + t).trim() : t + "px"
      }
      var qE = {},
        XE = {
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
        KE = ["Webkit", "Ms", "Moz", "O"];
      XE = Object.keys(XE).reduce((e, t) => (KE.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), XE);
      var WE = /^(matrix|translate|scale|rotate|skew)/,
        ZE = /^(translate)/,
        $E = /^(rotate|skew)/,
        YE = (e, t) => da.num(e) && 0 !== e ? e + t : e,
        QE = (e, t) => da.arr(e) ? e.every(e => QE(e, t)) : da.num(e) ? e === t : parseFloat(e) === t,
        JE = class extends ql {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              s = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), s.push(e => [`translate3d(${e.map(e=>YE(e,"px")).join(",")})`, QE(e, 0)])), pa(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), s.push(e => [e, "" === e]);
              else if (WE.test(t)) {
                if (delete n[t], da.und(e)) return;
                const r = ZE.test(t) ? "px" : $E.test(t) ? "deg" : "";
                o.push(ma(e)), s.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${YE(o,r)})`, QE(o, 0)] : e => [`${t}(${e.map(e=>YE(e,r)).join(",")})`, QE(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new eC(o, s)), super(n)
          }
        },
        eC = class extends hl {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return ha(this.inputs, (r, n) => {
              const o = ul(r[0]),
                [s, i] = this.transforms[n](da.arr(o) ? o : r.map(ul));
              e += " " + s, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && ha(this.inputs, e => ha(e, e => cl(e) && ml(e, this)))
          }
          observerRemoved(e) {
            0 == e && ha(this.inputs, e => ha(e, e => cl(e) && vl(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), fl(this, e)
          }
        };
      ca.assign({
        batchedUpdates: lu.unstable_batchedUpdates,
        createStringInterpolator: Ol,
        colors: Da
      });
      var tC = Ql(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: s,
                scrollTop: i,
                scrollLeft: a,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : qE[t] || (qE[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== s && (e.textContent = s);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = UE(t, o[t]);
                GE.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new JE(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        rC = tC.animated;

      function nC(e) {
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

      function oC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function sC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? oC(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = nC(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function iC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var aC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        lC = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sC(sC({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) aC(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return iC(e.variantClassNames, e => iC(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_hwzz174",
          variantClassNames: {
            isTouchDevice: {
              true: "foundry_hwzz175"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const cC = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, P.jsx)(ap, {
            ref: r,
            ...n
          })
        }),
        uC = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz172",
            tabIndex: 0
          }, t);
          return (0, P.jsx)(lp, {
            ref: r,
            ...n
          })
        }),
        dC = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, P.jsx)(cp, {
            ref: r,
            ...n
          })
        }),
        fC = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.rl)(),
            o = (0, q.v6)({
              "data-testid": e,
              className: lC({
                isTouchDevice: n
              })
            }, t);
          return (0, P.jsx)(up, {
            ref: r,
            ...o
          })
        }),
        hC = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(dp, {
            ref: r,
            ...n
          })
        }),
        pC = () => {
          const e = (0, W.Ub)(q.fi.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `translate(-50%, -50%) scale(${.95+t/100*.05})`
          }
        },
        mC = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function vC(e) {
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

      function yC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yC(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = vC(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function bC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _C = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gC(gC({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) _C(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bC(e.variantClassNames, e => bC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        xC = "foundry_8kowh41",
        EC = wC({
          defaultClassName: "foundry_xov33n5",
          variantClassNames: {
            headerAlign: {
              left: "foundry_xov33n6",
              center: "foundry_xov33n7"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        CC = wC({
          defaultClassName: "foundry_xov33n9",
          variantClassNames: {
            align: {
              left: "foundry_xov33na",
              center: "foundry_xov33nb"
            },
            appearance: {
              sentence: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
              uppercase: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm foundry_tdsdcdr"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const PC = (0, F.createContext)({
        isControlled: !1,
        openImmediately: !1,
        setIsOpen: () => {},
        contentId: "",
        descriptionId: "",
        triggerRef: (0, F.createRef)(),
        dialogSpringRef: Jc(),
        overlaySpringRef: Jc(),
        headerAlign: "center",
        setHeaderAlign: () => {}
      });

      function SC() {
        const e = (0, F.useContext)(PC);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const OC = ({
          testId: e,
          defaultOpen: t,
          onOpenChange: r,
          isOpen: n,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: s,
          onCloseTransitionStart: i,
          onCloseTransitionComplete: a,
          ...l
        }) => {
          const [c, u] = (0, F.useState)("center"), d = (0, q.v6)({
            "data-testid": e
          }, l), [f, h] = (0, W.ic)({
            prop: n,
            defaultProp: t ?? !1,
            onChange: r
          }), p = (0, W.ZC)(f);
          return (0, P.jsx)(PC.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== n,
              openImmediately: !(void 0 !== p || !t),
              setIsOpen: h,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: s,
              onCloseTransitionStart: i,
              onCloseTransitionComplete: a,
              contentId: (0, F.useId)(),
              descriptionId: (0, F.useId)(),
              triggerRef: (0, F.useRef)(null),
              dialogSpringRef: tu(),
              overlaySpringRef: tu(),
              headerAlign: c,
              setHeaderAlign: u
            },
            children: (0, P.jsx)(qf.bL, {
              open: f,
              onOpenChange: h,
              ...d
            })
          })
        },
        TC = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: s
          } = SC(), i = mC(), a = (0, W.jt)(), l = ru(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: i(0),
            enter: i(100),
            leave: i(0),
            config: fc.stiff,
            immediate: a || s
          }), c = (0, q.v6)({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), u = rC(qf.hJ);
          return (0, F.useEffect)(() => {
            o.start()
          }, [n]), l((e, t) => t ? (0, P.jsx)(u, {
            forceMount: !0,
            ref: r,
            ...c,
            style: e
          }) : null)
        }),
        jC = (0, F.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, s) => {
          const {
            isOpen: i,
            setIsOpen: a,
            openImmediately: l,
            contentId: c,
            triggerRef: u,
            onOpenTransitionStart: d,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: h,
            onCloseTransitionComplete: p,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = SC(), y = (0, W.rl)(), g = (0, W.jt)(), b = (0, F.useRef)(null), _ = pC(), {
            bindDrag: w
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const s = mC(),
              i = pC(),
              a = (0, F.useRef)();
            var l;
            return {
              bindDrag: (l = ({
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
                if (h && (a.current = function(e, t) {
                    for (; e;) {
                      if (e.scrollHeight > e.clientHeight) {
                        if (0 !== e.scrollTop) return !1;
                        if (t < 0) return !1;
                        if ("dialog" === e.getAttribute("role")) return !0
                      }
                      e = e.parentNode
                    }
                  }(p, u)), (!a.current || c < -70) && d(), a.current) {
                  const e = 100 * (m - c) / m;
                  r.start({
                    ...s(e),
                    immediate: !0
                  }), t.start({
                    ...i(e),
                    immediate: !0
                  })
                }
                f && (c > .5 * m || l > .5 && u > 0 ? (t.start({
                  ...i(0),
                  immediate: !1,
                  config: fc.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...s(0),
                  immediate: !1,
                  config: fc.stiff
                })) : (t.start({
                  ...i(100),
                  immediate: !1,
                  config: fc.stiff
                }), r.start({
                  ...s(100),
                  immediate: !1,
                  config: fc.stiff
                })))
              }, ir(ar), Er({
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
            overlaySpringRef: v,
            dialogSpringRef: m,
            onCloseTransitionStart: () => {
              a(!1), h?.()
            },
            onCloseTransitionComplete: p
          }), x = ru(i, {
            from: _(0),
            enter: _(100),
            leave: _(0),
            delay: i ? 100 : 0,
            config: fc.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? d?.() : h?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : p?.()
            }
          });
          (0, F.useEffect)(() => {
            m.start()
          }, [i]);
          const E = (0, W.UP)(b, s),
            C = y && !g && !n && w(),
            S = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33ne",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: c
            }, C || {}, o),
            O = rC(qf.UC);
          return x((t, r) => r ? (0, P.jsx)(O, {
            forceMount: !0,
            ref: E,
            ...S,
            style: t,
            children: e
          }) : null)
        }),
        NC = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_xov33n4 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, P.jsx)(qf.hE, {
            ref: n,
            ...o,
            children: e
          })
        }),
        RC = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t
          }, r);
          return (0, P.jsx)(qf.VY, {
            ref: n,
            ...o,
            children: e
          })
        }),
        IC = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_xov33ni",
            "data-testid": t
          }, r);
          return (0, P.jsxs)(cC, {
            ref: n,
            ...o,
            children: [(0, P.jsx)(uC, {
              className: "foundry_xov33nj",
              children: e
            }), (0, P.jsx)(dC, {
              className: "foundry_xov33nk",
              orientation: "vertical",
              children: (0, P.jsx)(fC, {
                className: "foundry_xov33nl"
              })
            })]
          })
        }),
        kC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_xov33nf"
            }, n),
            i = e ? Z.DX : "div";
          return (0, P.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        DC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            headerAlign: s
          } = (0, F.useContext)(PC), i = (0, q.v6)({
            "data-testid": r,
            className: EC({
              headerAlign: s
            })
          }, n), a = e ? Z.DX : "header";
          return (0, P.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        }),
        LC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n = "left",
          appearance: o = "sentence",
          ...s
        }, i) => {
          const {
            setHeaderAlign: a
          } = (0, F.useContext)(PC);
          (0, F.useEffect)(() => {
            a(n)
          }, [n]);
          const l = (0, q.v6)({
              "data-testid": r,
              className: CC({
                align: n,
                appearance: o
              })
            }, s),
            c = e ? Z.DX : qf.hE;
          return (0, P.jsx)(c, {
            ref: i,
            ...l,
            children: t
          })
        }),
        AC = (0, F.forwardRef)(({
          onPress: e,
          onClick: t,
          ...r
        }, n) => {
          const {
            isControlled: o,
            setIsOpen: s
          } = SC(), i = (0, q.v6)({
            className: (0, de.clsx)("foundry_xov33n8", "foundry_xov33n1"),
            onPress: function(r) {
              e?.(r) ?? t?.(r), !o && s(!1)
            }
          }, r);
          return (0, P.jsx)(y_, {
            ...i,
            size: "LG",
            ref: n
          })
        }),
        MC = (0, F.forwardRef)((e, t) => {
          const r = (0, q.v6)({
            className: "foundry_xov33n2"
          }, e);
          return (0, P.jsx)(ke, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        BC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, n),
            i = e ? Z.DX : "div";
          return (0, P.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        HC = (0, F.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: s,
            setIsOpen: i
          } = SC(), a = (0, q.v6)({
            className: xC,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !s && i(!1)
            }
          }, n);
          return (0, P.jsx)(Ee, {
            ref: o,
            ...a,
            children: e
          })
        }),
        zC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_xov33nh"
            }, n),
            i = e ? Z.DX : "footer";
          return (0, P.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        VC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          onPress: r,
          onClick: n,
          ...o
        }, s) => {
          const {
            isControlled: i,
            setIsOpen: a,
            isOpen: l,
            contentId: c,
            triggerRef: u
          } = SC(), d = (0, W.UP)(u, s), f = (0, q.v6)({
            className: xC,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !i && a(!0)
            }
          }, o), h = e ? Z.DX : qf.l9;
          return (0, P.jsx)(h, {
            ...f,
            ref: d,
            children: t
          })
        }),
        FC = ({
          testId: e,
          ...t
        }) => {
          const r = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(qf.ZL, {
            forceMount: !0,
            ...r
          })
        };

      function GC(...e) {
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
            return F.useMemo(() => ({
              [`__scope${t.scopeName}`]: n
            }), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }
      var UC = r(39447),
        qC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = (0, UC.TL)(`Primitive.${t}`),
            n = F.forwardRef((e, n) => {
              const {
                asChild: o,
                ...s
              } = e, i = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, P.jsx)(i, {
                ...s,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {}),
        XC = r(36553);

      function KC() {
        return () => {}
      }
      var WC = "Avatar",
        [ZC, $C] = function(e, t = []) {
          let r = [];
          const n = () => {
            const t = r.map(e => F.createContext(e));
            return function(r) {
              const n = r?.[e] || t;
              return F.useMemo(() => ({
                [`__scope${e}`]: {
                  ...r,
                  [e]: n
                }
              }), [r, n])
            }
          };
          return n.scopeName = e, [function(t, n) {
            const o = F.createContext(n);
            o.displayName = t + "Context";
            const s = r.length;
            r = [...r, n];
            const i = t => {
              const {
                scope: r,
                children: n,
                ...i
              } = t, a = r?.[e]?.[s] || o, l = F.useMemo(() => i, Object.values(i));
              return (0, P.jsx)(a.Provider, {
                value: l,
                children: n
              })
            };
            return i.displayName = t + "Provider", [i, function(r, i) {
              const a = i?.[e]?.[s] || o,
                l = F.useContext(a);
              if (l) return l;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, GC(n, ...t)]
        }(WC),
        [YC, QC] = ZC(WC),
        JC = F.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, s] = F.useState("idle");
          return (0, P.jsx)(YC, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: s,
            children: (0, P.jsx)(qC.span, {
              ...n,
              ref: t
            })
          })
        });
      JC.displayName = WC;
      var eP = "AvatarImage",
        tP = F.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...s
          } = e, i = QC(eP, r), a = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, XC.useSyncExternalStore)(KC, () => !0, () => !1),
              o = F.useRef(null),
              s = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [i, a] = F.useState(() => nP(s, e));
            return (0, qu.N)(() => {
              a(nP(s, e))
            }, [s, e]), (0, qu.N)(() => {
              const e = e => () => {
                a(e)
              };
              if (!s) return;
              const n = e("loaded"),
                o = e("error");
              return s.addEventListener("load", n), s.addEventListener("error", o), t && (s.referrerPolicy = t), "string" == typeof r && (s.crossOrigin = r), () => {
                s.removeEventListener("load", n), s.removeEventListener("error", o)
              }
            }, [s, r, t]), i
          }(n, s), l = (0, Uu.c)(e => {
            o(e), i.onImageLoadingStatusChange(e)
          });
          return (0, qu.N)(() => {
            "idle" !== a && l(a)
          }, [a, l]), "loaded" === a ? (0, P.jsx)(qC.img, {
            ...s,
            ref: t,
            src: n
          }) : null
        });
      tP.displayName = eP;
      var rP = "AvatarFallback";

      function nP(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      F.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, s = QC(rP, r), [i, a] = F.useState(void 0 === n);
        return F.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => a(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), i && "loaded" !== s.imageLoadingStatus ? (0, P.jsx)(qC.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = rP;
      var oP = JC,
        sP = tP;

      function iP(e) {
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

      function aP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? aP(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = iP(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var uP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dP = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lP(lP({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) uP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cP(e.variantClassNames, e => cP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        fP = dP({
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
        hP = "var(--foundry_v912w22)",
        pP = "var(--foundry_v912w23)",
        mP = dP({
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
        vP = dP({
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
        yP = "var(--foundry_v912w21)",
        gP = "var(--foundry_v912w20)",
        bP = dP({
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
      const _P = (0, F.createContext)(null);

      function wP() {
        const e = (0, F.useContext)(_P);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const xP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: s = !1,
          ...i
        }, a) => {
          const l = (0, q.v6)({
            "data-testid": r,
            "aria-disabled": s,
            className: fP({
              isDisabled: s
            }),
            asChild: e
          }, i);
          return (0, P.jsx)(_P.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: s
            },
            children: (0, P.jsx)(oP, {
              ref: a,
              ...l,
              children: t
            })
          })
        }),
        EP = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: s,
            isDisabled: i
          } = wP(), [a, l] = (0, F.useState)(!1);
          (0, F.useEffect)(() => {
            l(!1)
          }, [r]);
          const c = a || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            u = (0, q.v6)({
              className: mP({
                isDisabled: i
              }),
              src: c,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, n);
          return (0, P.jsx)("span", {
            className: vP({
              size: s,
              isDisabled: i,
              isFallback: a
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, P.jsx)(sP, {
              ref: o,
              ...u
            })
          })
        }),
        CP = (0, F.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, F.useRef)(null),
            {
              size: s,
              status: i,
              isDisabled: a
            } = wP(),
            l = (0, W.UP)(o, n),
            c = (0, q.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: bP({
                status: i,
                size: s,
                isDisabled: a
              }),
              style: (0, G.DI)({
                [gP]: t?.online,
                [yP]: t?.offline,
                [hP]: t?.away,
                [pP]: t?.busy
              })
            }, r);
          return (0, P.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function PP(e) {
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

      function SP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function OP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? SP(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = PP(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : SP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function TP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var jP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        NP = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = OP(OP({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) jP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return TP(e.variantClassNames, e => TP(e, e => e.split(" ")[0]))
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
      const RP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            i = e ? Z.DX : "nav";
          return (0, P.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        IP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            i = e ? Z.DX : "div";
          return (0, P.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        kP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, s) => {
          const i = (0, F.useRef)(null),
            a = (0, W.UP)(i, s),
            {
              linkProps: l,
              isPressed: c
            } = c_(o, i),
            u = (0, q.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": c,
              "data-active": r,
              className: (0, de.clsx)(NP({
                isActive: r
              }))
            }, l),
            d = e ? Z.DX : "a";
          return (0, P.jsx)(d, {
            ref: a,
            ...u,
            children: t
          })
        }),
        DP = (0, F.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, P.jsx)(kP, {
            ref: n,
            ...o,
            children: (0, P.jsx)(fe.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        LP = (0, F.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, P.jsx)(kP, {
            ref: n,
            ...o,
            children: (0, P.jsx)(fe.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        AP = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, q.v6)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            }, n),
            s = e ? Z.DX : "span";
          return (0, P.jsx)(s, {
            ...o,
            children: t || "..."
          })
        },
        MP = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            s = e ? Z.DX : "div";
          return (0, P.jsx)(s, {
            ...o,
            children: t
          })
        },
        BP = (0, F.createContext)(null);

      function HP() {
        const e = (0, F.useContext)(BP);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const zP = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, F.useId)(),
            s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            i = e ? Z.DX : "div";
          return (0, P.jsx)(BP.Provider, {
            value: {
              labelId: o
            },
            children: (0, P.jsx)(i, {
              ...s,
              children: t
            })
          })
        },
        VP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = HP(), i = (0, q.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, n), a = e ? Z.DX : "label";
          return (0, P.jsx)(a, {
            ref: o,
            id: s,
            ...i,
            children: t
          })
        }),
        FP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = HP(), i = (0, q.v6)({
            "aria-labelledby": s,
            className: "foundry_2jlbztc"
          }, n), a = e ? Z.DX : Ym;
          return (0, P.jsxs)(a, {
            ...i,
            children: [(0, P.jsxs)(ev, {
              ref: o,
              children: [(0, P.jsx)(tv, {
                placeholder: r
              }), (0, P.jsx)(rv, {})]
            }), (0, P.jsx)(cv, {
              children: (0, P.jsx)(Qm, {
                children: (0, P.jsx)(Jm, {
                  children: t
                })
              })
            })]
          })
        }),
        GP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r
            }, n),
            i = e ? Z.DX : iv;
          return (0, P.jsx)(i, {
            ...s,
            ref: o,
            children: (0, P.jsx)(av, {
              children: t
            })
          })
        }),
        UP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, n),
            i = e ? Z.DX : "p";
          return (0, P.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        });
      var qP = "rovingFocusGroup.onEntryFocus",
        XP = {
          bubbles: !1,
          cancelable: !0
        },
        KP = "RovingFocusGroup",
        [WP, ZP, $P] = (0, hf.N)(KP),
        [YP, QP] = (0, Pu.A)(KP, [$P]),
        [JP, eS] = YP(KP),
        tS = F.forwardRef((e, t) => (0, P.jsx)(WP.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, P.jsx)(WP.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, P.jsx)(rS, {
              ...e,
              ref: t
            })
          })
        }));
      tS.displayName = KP;
      var rS = F.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: s,
            currentTabStopId: i,
            defaultCurrentTabStopId: a,
            onCurrentTabStopIdChange: l,
            onEntryFocus: c,
            preventScrollOnEntryFocus: u = !1,
            ...d
          } = e, f = F.useRef(null), h = (0, Cu.s)(t, f), p = (0, df.jH)(s), [m, v] = (0, gd.i)({
            prop: i,
            defaultProp: a ?? null,
            onChange: l,
            caller: KP
          }), [y, g] = F.useState(!1), b = (0, Uu.c)(c), _ = ZP(r), w = F.useRef(!1), [x, E] = F.useState(0);
          return F.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(qP, b), () => e.removeEventListener(qP, b)
          }, [b]), (0, P.jsx)(JP, {
            scope: r,
            orientation: n,
            dir: p,
            loop: o,
            currentTabStopId: m,
            onItemFocus: F.useCallback(e => v(e), [v]),
            onItemShiftTab: F.useCallback(() => g(!0), []),
            onFocusableItemAdd: F.useCallback(() => E(e => e + 1), []),
            onFocusableItemRemove: F.useCallback(() => E(e => e - 1), []),
            children: (0, P.jsx)(Vu.sG.div, {
              tabIndex: y || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...d,
              ref: h,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, Eu.mK)(e.onMouseDown, () => {
                w.current = !0
              }),
              onFocus: (0, Eu.mK)(e.onFocus, e => {
                const t = !w.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(qP, XP);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = _().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === m),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    iS(n, u)
                  }
                }
                w.current = !1
              }),
              onBlur: (0, Eu.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        nS = "RovingFocusGroupItem",
        oS = F.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: s,
            children: i,
            ...a
          } = e, l = (0, Ou.B)(), c = s || l, u = eS(nS, r), d = u.currentTabStopId === c, f = ZP(r), {
            onFocusableItemAdd: h,
            onFocusableItemRemove: p,
            currentTabStopId: m
          } = u;
          return F.useEffect(() => {
            if (n) return h(), () => p()
          }, [n, h, p]), (0, P.jsx)(WP.ItemSlot, {
            scope: r,
            id: c,
            focusable: n,
            active: o,
            children: (0, P.jsx)(Vu.sG.span, {
              tabIndex: d ? 0 : -1,
              "data-orientation": u.orientation,
              ...a,
              ref: t,
              onMouseDown: (0, Eu.mK)(e.onMouseDown, e => {
                n ? u.onItemFocus(c) : e.preventDefault()
              }),
              onFocus: (0, Eu.mK)(e.onFocus, () => u.onItemFocus(c)),
              onKeyDown: (0, Eu.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void u.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : sS[n]
                }(e, u.orientation, u.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = f().filter(e => e.focusable);
                  let s = o.map(e => e.ref.current);
                  if ("last" === t) s.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && s.reverse();
                    const o = s.indexOf(e.currentTarget);
                    s = u.loop ? (n = o + 1, (r = s).map((e, t) => r[(n + t) % r.length])) : s.slice(o + 1)
                  }
                  setTimeout(() => iS(s))
                }
                var r, n
              }),
              children: "function" == typeof i ? i({
                isCurrentTabStop: d,
                hasTabStop: null != m
              }) : i
            })
          })
        });
      oS.displayName = nS;
      var sS = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function iS(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var aS = tS,
        lS = oS,
        cS = "Toggle",
        uS = F.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...s
          } = e, [i, a] = (0, gd.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: cS
          });
          return (0, P.jsx)(Vu.sG.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...s,
            ref: t,
            onClick: (0, Eu.mK)(e.onClick, () => {
              e.disabled || a(!i)
            })
          })
        });
      uS.displayName = cS;
      var dS = "ToggleGroup",
        [fS, hS] = (0, Pu.A)(dS, [QP]),
        pS = QP(),
        mS = F.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, P.jsx)(gS, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, P.jsx)(bS, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${dS}\``)
        });
      mS.displayName = dS;
      var [vS, yS] = fS(dS), gS = F.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [i, a] = (0, gd.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: dS
        });
        return (0, P.jsx)(vS, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: F.useMemo(() => i ? [i] : [], [i]),
          onItemActivate: a,
          onItemDeactivate: F.useCallback(() => a(""), [a]),
          children: (0, P.jsx)(xS, {
            ...s,
            ref: t
          })
        })
      }), bS = F.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [i, a] = (0, gd.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: dS
        }), l = F.useCallback(e => a((t = []) => [...t, e]), [a]), c = F.useCallback(e => a((t = []) => t.filter(t => t !== e)), [a]);
        return (0, P.jsx)(vS, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: i,
          onItemActivate: l,
          onItemDeactivate: c,
          children: (0, P.jsx)(xS, {
            ...s,
            ref: t
          })
        })
      });
      mS.displayName = dS;
      var [_S, wS] = fS(dS), xS = F.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: s,
          dir: i,
          loop: a = !0,
          ...l
        } = e, c = pS(r), u = (0, df.jH)(i), d = {
          role: "group",
          dir: u,
          ...l
        };
        return (0, P.jsx)(_S, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, P.jsx)(aS, {
            asChild: !0,
            ...c,
            orientation: s,
            dir: u,
            loop: a,
            children: (0, P.jsx)(Vu.sG.div, {
              ...d,
              ref: t
            })
          }) : (0, P.jsx)(Vu.sG.div, {
            ...d,
            ref: t
          })
        })
      }), ES = "ToggleGroupItem", CS = F.forwardRef((e, t) => {
        const r = yS(ES, e.__scopeToggleGroup),
          n = wS(ES, e.__scopeToggleGroup),
          o = pS(e.__scopeToggleGroup),
          s = r.value.includes(e.value),
          i = n.disabled || e.disabled,
          a = {
            ...e,
            pressed: s,
            disabled: i
          },
          l = F.useRef(null);
        return n.rovingFocus ? (0, P.jsx)(lS, {
          asChild: !0,
          ...o,
          focusable: !i,
          active: s,
          ref: l,
          children: (0, P.jsx)(PS, {
            ...a,
            ref: t
          })
        }) : (0, P.jsx)(PS, {
          ...a,
          ref: t
        })
      });
      CS.displayName = ES;
      var PS = F.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, s = yS(ES, r), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, a = "single" === s.type ? i : void 0;
          return (0, P.jsx)(uS, {
            ...a,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? s.onItemActivate(n) : s.onItemDeactivate(n)
            }
          })
        }),
        SS = mS,
        OS = CS;

      function TS(e) {
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

      function jS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function NS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jS(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = TS(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function RS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var IS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = NS(NS({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) IS(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return RS(e.variantClassNames, e => RS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        DS = "var(--foundry_zxwkyk2)",
        LS = "var(--foundry_zxwkyk3)",
        AS = kS({
          defaultClassName: "foundry_zxwkyk4",
          variantClassNames: {
            size: {
              SM: "foundry_zxwkyk5",
              MD: "foundry_zxwkyk6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        MS = kS({
          defaultClassName: "foundry_zxwkyk8 foundry_8kowh41 foundry_1d5mo5m0 foundry_zxwkyk7",
          variantClassNames: {
            size: {
              SM: "foundry_zxwkyk9",
              MD: "foundry_zxwkyka"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        BS = kS({
          defaultClassName: "foundry_zxwkykh",
          variantClassNames: {
            variant: {
              default: "foundry_zxwkyki",
              number: "foundry_zxwkykj"
            },
            size: {
              SM: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        HS = "var(--foundry_zxwkyk1)",
        zS = "var(--foundry_zxwkyk0)",
        VS = kS({
          defaultClassName: "foundry_zxwkykc",
          variantClassNames: {
            status: {
              online: "foundry_zxwkykd",
              offline: "foundry_zxwkyke",
              away: "foundry_zxwkykf",
              busy: "foundry_zxwkykg"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const FS = (0, F.createContext)(null);

      function GS() {
        const e = (0, F.useContext)(FS);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const US = (0, F.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const s = (0, q.v6)({
            "data-testid": e,
            className: AS({
              size: t
            }),
            type: r
          }, n);
          return (0, P.jsx)(FS.Provider, {
            value: {
              size: t
            },
            children: (0, P.jsx)(SS, {
              ref: o,
              ...s
            })
          })
        }),
        qS = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = GS(), o = (0, q.v6)({
            "data-testid": e,
            className: MS({
              size: n
            })
          }, t);
          return (0, P.jsx)(OS, {
            ref: r,
            ...o
          })
        }),
        XS = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = GS(), o = fe[e];
          return (0, P.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        KS = (0, F.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
            "data-testid": e,
            className: VS({
              status: r
            }),
            style: (0, G.DI)({
              [zS]: t?.online,
              [HS]: t?.offline,
              [DS]: t?.away,
              [LS]: t?.busy
            })
          }, n);
          return (0, P.jsx)("span", {
            ref: o,
            ...s
          })
        }),
        WS = (0, F.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = GS(), s = (0, q.v6)({
            "data-testid": e,
            className: BS({
              variant: t,
              size: o
            })
          }, r);
          return (0, P.jsx)("span", {
            ref: n,
            ...s
          })
        });
      var ZS = "focusScope.autoFocusOnMount",
        $S = "focusScope.autoFocusOnUnmount",
        YS = {
          bubbles: !1,
          cancelable: !0
        },
        QS = F.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            ...i
          } = e, [a, l] = F.useState(null), c = (0, Uu.c)(o), u = (0, Uu.c)(s), d = F.useRef(null), f = (0, Cu.s)(t, e => l(e)), h = F.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          F.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (h.paused || !a) return;
                  const t = e.target;
                  a.contains(t) ? d.current = t : rO(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || rO(d.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && rO(a)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return a && n.observe(a, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }, [n, a, h.paused]), F.useEffect(() => {
            if (a) {
              nO.add(h);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(ZS, YS);
                a.addEventListener(ZS, c), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (rO(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(JS(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && rO(a))
              }
              return () => {
                a.removeEventListener(ZS, c), setTimeout(() => {
                  const t = new CustomEvent($S, YS);
                  a.addEventListener($S, u), a.dispatchEvent(t), t.defaultPrevented || rO(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener($S, u), nO.remove(h)
                }, 0)
              }
            }
          }, [a, c, u, h]);
          const p = F.useCallback(e => {
            if (!r && !n) return;
            if (h.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, s] = function(e) {
                  const t = JS(e);
                  return [eO(t, e), eO(t.reverse(), e)]
                }(t);
              n && s ? e.shiftKey || o !== s ? e.shiftKey && o === n && (e.preventDefault(), r && rO(s, {
                select: !0
              })) : (e.preventDefault(), r && rO(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, h.paused]);
          return (0, P.jsx)(Vu.sG.div, {
            tabIndex: -1,
            ...i,
            ref: f,
            onKeyDown: p
          })
        });

      function JS(e) {
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

      function eO(e, t) {
        for (const r of e)
          if (!tO(r, {
              upTo: t
            })) return r
      }

      function tO(e, {
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

      function rO(e, {
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
      QS.displayName = "FocusScope";
      var nO = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = oO(e, t), e.unshift(t)
          },
          remove(t) {
            e = oO(e, t), e[0]?.resume()
          }
        }
      }();

      function oO(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var sO = F.forwardRef((e, t) => {
        const {
          container: r,
          ...n
        } = e, [o, s] = F.useState(!1);
        (0, qu.N)(() => s(!0), []);
        const i = r || o && globalThis?.document?.body;
        return i ? lu.createPortal((0, P.jsx)(Vu.sG.div, {
          ...n,
          ref: t
        }), i) : null
      });

      function iO(e) {
        const t = F.forwardRef((e, t) => {
          const {
            children: r,
            ...n
          } = e;
          if (F.isValidElement(r)) {
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
                    s = t[n];
                  /^on[A-Z]/.test(n) ? o && s ? r[n] = (...e) => {
                    const t = s(...e);
                    return o(...e), t
                  } : o && (r[n] = o) : "style" === n ? r[n] = {
                    ...o,
                    ...s
                  } : "className" === n && (r[n] = [o, s].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== F.Fragment && (o.ref = t ? (0, Cu.t)(t, e) : e), F.cloneElement(r, o)
          }
          return F.Children.count(r) > 1 ? F.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      sO.displayName = "Portal";
      var aO = Symbol("radix.slottable");

      function lO(e) {
        return F.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === aO
      }
      var cO = "Popover",
        [uO, dO] = (0, Pu.A)(cO, [Zu]),
        fO = Zu(),
        [hO, pO] = uO(cO),
        mO = e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: i = !1
          } = e, a = fO(t), l = F.useRef(null), [c, u] = F.useState(!1), [d, f] = (0, gd.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: cO
          });
          return (0, P.jsx)(dd, {
            ...a,
            children: (0, P.jsx)(hO, {
              scope: t,
              contentId: (0, Ou.B)(),
              triggerRef: l,
              open: d,
              onOpenChange: f,
              onOpenToggle: F.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: c,
              onCustomAnchorAdd: F.useCallback(() => u(!0), []),
              onCustomAnchorRemove: F.useCallback(() => u(!1), []),
              modal: i,
              children: r
            })
          })
        };
      mO.displayName = cO;
      var vO = "PopoverAnchor",
        yO = F.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = pO(vO, r), s = fO(r), {
            onCustomAnchorAdd: i,
            onCustomAnchorRemove: a
          } = o;
          return F.useEffect(() => (i(), () => a()), [i, a]), (0, P.jsx)(fd, {
            ...s,
            ...n,
            ref: t
          })
        });
      yO.displayName = vO;
      var gO = "PopoverTrigger",
        bO = F.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = pO(gO, r), s = fO(r), i = (0, Cu.s)(t, o.triggerRef), a = (0, P.jsx)(Vu.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": kO(o.open),
            ...n,
            ref: i,
            onClick: (0, Eu.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? a : (0, P.jsx)(fd, {
            asChild: !0,
            ...s,
            children: a
          })
        });
      bO.displayName = gO;
      var _O = "PopoverPortal",
        [wO, xO] = uO(_O, {
          forceMount: void 0
        }),
        EO = e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = pO(_O, t);
          return (0, P.jsx)(wO, {
            scope: t,
            forceMount: r,
            children: (0, P.jsx)(vd.C, {
              present: r || s.open,
              children: (0, P.jsx)(sO, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      EO.displayName = _O;
      var CO = "PopoverContent",
        PO = F.forwardRef((e, t) => {
          const r = xO(CO, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = pO(CO, e.__scopePopover);
          return (0, P.jsx)(vd.C, {
            present: n || s.open,
            children: s.modal ? (0, P.jsx)(OO, {
              ...o,
              ref: t
            }) : (0, P.jsx)(TO, {
              ...o,
              ref: t
            })
          })
        });
      PO.displayName = CO;
      var SO = function(e) {
          const t = iO(e),
            r = F.forwardRef((e, r) => {
              const {
                children: n,
                ...o
              } = e, s = F.Children.toArray(n), i = s.find(lO);
              if (i) {
                const e = i.props.children,
                  n = s.map(t => t === i ? F.Children.count(e) > 1 ? F.Children.only(null) : F.isValidElement(e) ? e.props.children : null : t);
                return (0, P.jsx)(t, {
                  ...o,
                  ref: r,
                  children: F.isValidElement(e) ? F.cloneElement(e, void 0, n) : null
                })
              }
              return (0, P.jsx)(t, {
                ...o,
                ref: r,
                children: n
              })
            });
          return r.displayName = `${e}.Slot`, r
        }("PopoverContent.RemoveScroll"),
        OO = F.forwardRef((e, t) => {
          const r = pO(CO, e.__scopePopover),
            n = F.useRef(null),
            o = (0, Cu.s)(t, n),
            s = F.useRef(!1);
          return F.useEffect(() => {
            const e = n.current;
            if (e) return (0, Tp.Eq)(e)
          }, []), (0, P.jsx)(jp.A, {
            as: SO,
            allowPinchZoom: !0,
            children: (0, P.jsx)(jO, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, Eu.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), s.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, Eu.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                s.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, Eu.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        TO = F.forwardRef((e, t) => {
          const r = pO(CO, e.__scopePopover),
            n = F.useRef(!1),
            o = F.useRef(!1);
          return (0, P.jsx)(jO, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const s = t.target,
                i = r.triggerRef.current?.contains(s);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        jO = F.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onInteractOutside: u,
            ...d
          } = e, f = pO(CO, r), h = fO(r);
          return (0, fp.Oh)(), (0, P.jsx)(QS, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: (0, P.jsx)(Su.qW, {
              asChild: !0,
              disableOutsidePointerEvents: i,
              onInteractOutside: u,
              onEscapeKeyDown: a,
              onPointerDownOutside: l,
              onFocusOutside: c,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, P.jsx)(hd, {
                "data-state": kO(f.open),
                role: "dialog",
                id: f.contentId,
                ...h,
                ...d,
                ref: t,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              })
            })
          })
        }),
        NO = "PopoverClose",
        RO = F.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = pO(NO, r);
          return (0, P.jsx)(Vu.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, Eu.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      RO.displayName = NO;
      var IO = F.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = fO(r);
        return (0, P.jsx)(pd, {
          ...o,
          ...n,
          ref: t
        })
      });

      function kO(e) {
        return e ? "open" : "closed"
      }
      IO.displayName = "PopoverArrow";
      var DO = mO,
        LO = yO,
        AO = bO,
        MO = EO,
        BO = PO,
        HO = RO,
        zO = IO;

      function VO(e) {
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

      function FO(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function GO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? FO(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = VO(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : FO(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function UO(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qO = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        XO = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = GO(GO({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) qO(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return UO(e.variantClassNames, e => UO(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_lroh6l1 foundry_8kowh41 foundry_1d5mo5m0 foundry_1qqcnuao foundry_1qqcnuar",
          variantClassNames: {
            size: {
              SM: "foundry_lroh6l2 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
              MD: "foundry_lroh6l3 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde",
              LG: "foundry_lroh6l4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd",
              XL: "foundry_lroh6l5 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const KO = (0, F.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        WO = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, s] = (0, W.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), i = (0, q.v6)({
            open: o,
            onOpenChange: s
          }, n);
          return (0, P.jsx)(KO.Provider, {
            value: {
              open: o,
              setOpen: s
            },
            children: (0, P.jsx)(DO, {
              ...i
            })
          })
        },
        ZO = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, P.jsx)(AO, {
            ref: r,
            ...n
          })
        }),
        $O = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        YO = (0, F.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: s
          } = (0, F.useContext)(KO), i = (0, F.useRef)(null), a = (0, W.UP)(i, o), {
            buttonProps: l
          } = (0, W.sL)(n, i), c = (0, q.v6)({
            "data-testid": r,
            className: XO({
              size: t
            })
          }, l), u = s ? fe.ChevronUp : fe.ChevronDown;
          return (0, P.jsxs)("button", {
            ref: a,
            ...c,
            children: [e, (0, P.jsx)(u, {
              label: "",
              size: $O[t]
            })]
          })
        }),
        QO = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(LO, {
            ref: r,
            ...n
          })
        }),
        JO = (0, F.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, P.jsx)(BO, {
            ref: n,
            ...o
          })
        }),
        eT = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, P.jsx)(zO, {
            ref: r,
            ...n
          })
        }),
        tT = e => (0, P.jsx)(MO, {
          ...e
        }),
        rT = e => (0, P.jsx)(HO, {
          ...e
        })
    },
    71753(e, t, r) {
      r.d(t, {
        b: () => a
      });
      var n = r(71127),
        o = r(48989),
        s = r(42295),
        i = ({
          children: e,
          label: t
        }) => {
          const r = n.Children.only(e);
          return (0, s.jsxs)(s.Fragment, {
            children: [n.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, s.jsx)(o.bL, {
              children: t
            })]
          })
        };
      i.displayName = "AccessibleIcon";
      var a = i
    }
  }
]);