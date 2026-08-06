try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "23170a52-ced7-4009-a216-a952fbc7552a", e._sentryDebugIdIdentifier = "sentry-dbid-23170a52-ced7-4009-a216-a952fbc7552a")
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
  [3833], {
    93833(e, t, r) {
      r.r(t), r.d(t, {
        Accordion: () => O,
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => _,
        Badge: () => g,
        Body: () => ot,
        Breadcrumbs: () => y,
        Button: () => Ce,
        Checkbox: () => d,
        ChipGroup: () => x,
        Code: () => at,
        Dialog: () => w,
        Display: () => it,
        Divider: () => Ae,
        Dropdown: () => s,
        Heading: () => lt,
        IconButton: () => Ie,
        Label: () => ut,
        Lightbox: () => o,
        Loader: () => $e,
        Pagination: () => C,
        PlatformButton: () => k,
        Popover: () => j,
        ProgressBar: () => P,
        RadioGroup: () => u,
        ScrollArea: () => b,
        Spinner: () => le,
        Switch: () => a,
        Tag: () => m,
        Text: () => ht,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => pt,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => cd,
        Content: () => ld,
        Portal: () => ud,
        Root: () => id,
        Trigger: () => dd,
        useTooltipContext: () => ad
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => hl,
        Close: () => bl,
        Content: () => ll,
        Controls: () => ml,
        CssVars: () => Cl,
        Download: () => _l,
        Image: () => pl,
        Keyboard: () => yl,
        LightboxContext: () => el,
        OpenIcon: () => al,
        Overlay: () => dl,
        Portal: () => il,
        Reset: () => wl,
        Root: () => tl,
        RootImplContext: () => rl,
        Thumbnail: () => sl,
        Trigger: () => ol,
        Zoom: () => gl,
        ZoomPan: () => cl
      });
      var s = {};
      r.r(s), r.d(s, {
        Content: () => Ku,
        Description: () => ef,
        Hint: () => tf,
        Label: () => Ju,
        Option: () => rf,
        OptionIcon: () => of,
        OptionText: () => nf,
        Portal: () => sf,
        Root: () => Gu,
        ScrollArea: () => Wu,
        StatusIcon: () => df,
        StatusRoot: () => af,
        StatusText: () => lf,
        Trigger: () => $u,
        TriggerIcon: () => Yu,
        TriggerText: () => Qu,
        Viewport: () => Uu,
        useDropdownContext: () => Xu
      });
      var a = {};
      r.r(a), r.d(a, {
        Description: () => Qf,
        Input: () => Wf,
        Label: () => $f,
        Root: () => Uf,
        useSwitchContext: () => Kf
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Jf,
        CheckMD: () => Yf,
        CheckXL: () => ep,
        DashLG: () => rp,
        DashMD: () => tp,
        DashXL: () => np
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => _p,
        ErrorText: () => Cp,
        Group: () => Pp,
        GroupDescription: () => Sp,
        GroupErrorText: () => Rp,
        GroupItems: () => kp,
        GroupLabel: () => Op,
        Input: () => bp,
        Label: () => wp,
        Root: () => gp,
        useGroupContext: () => jp
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Xp,
        Hint: () => Gp,
        Input: () => Zp,
        Label: () => Bp,
        Root: () => Fp,
        RootContext: () => qp,
        StatusIcon: () => Up,
        StatusRoot: () => Kp,
        StatusText: () => Wp,
        useTextAreaContext: () => Hp
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => Xh,
        DotMD: () => Zh,
        DotXL: () => Gh
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => zh,
        Input: () => Uh,
        Label: () => Lh,
        Option: () => Kh,
        OptionDescription: () => $h,
        OptionLabel: () => Wh,
        Options: () => Eh,
        Root: () => Th,
        StatusIcon: () => Vh,
        StatusRoot: () => Mh,
        StatusText: () => Ah,
        useRadioGroupContext: () => Ih
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Jm,
        Control: () => $m,
        Description: () => tv,
        Hint: () => Wm,
        Icon: () => Ym,
        Input: () => Qm,
        Label: () => Um,
        PasswordButton: () => ev,
        Root: () => Km,
        StatusIcon: () => nv,
        StatusRoot: () => rv,
        StatusText: () => ov
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => kv,
        CloseButton: () => zv,
        Description: () => Iv,
        ErrorText: () => Lv,
        Footer: () => Ev,
        Header: () => Sv,
        Icon: () => Nv,
        Link: () => Tv,
        Root: () => Ov,
        RootContext: () => jv,
        Title: () => Dv,
        iconStatusMap: () => Rv,
        useAlertContext: () => Pv
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => My,
        CloseButton: () => qy,
        Description: () => zy,
        Icon: () => Ly,
        Link: () => Ay,
        PaginationCounter: () => Zy,
        PaginationNav: () => Hy,
        PaginationNextButton: () => Fy,
        PaginationPrevButton: () => By,
        PaginationViewport: () => Vy,
        Root: () => Ty,
        RootContext: () => Dy,
        iconStatusMap: () => Ey,
        useAlertBannerContext: () => Iy
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => sg,
        Icon: () => og,
        Label: () => ng,
        Root: () => rg,
        RootContext: () => eg,
        useTagContext: () => tg
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => db,
        CloseButton: () => lb,
        Description: () => sb,
        Icon: () => ib,
        Provider: () => eb,
        Root: () => ob,
        RootContext: () => rb,
        Viewport: () => tb,
        iconAppearanceMap: () => ab,
        useToastContext: () => nb
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => xb,
        Item: () => Cb,
        OverflowMenu: () => jb,
        OverflowMenuItem: () => Pb,
        Root: () => _b,
        RootContext: () => wb,
        useBreadcrumbsContext: () => bb
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => zb,
        Label: () => Lb,
        Root: () => Eb,
        useBadgeContext: () => Tb
      });
      var b = {};
      r.r(b), r.d(b, {
        Corner: () => Wb,
        Root: () => Xb,
        Scrollbar: () => Kb,
        Thumb: () => Ub,
        Viewport: () => Gb
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => bw,
        CloseButton: () => gw,
        Content: () => cw,
        Description: () => fw,
        Footer: () => ww,
        Header: () => mw,
        HeaderButton: () => yw,
        HeaderTitle: () => vw,
        Layout: () => hw,
        Overlay: () => lw,
        Portal: () => dw,
        Root: () => sw,
        ScrollArea: () => pw,
        Title: () => uw,
        Trigger: () => iw
      });
      var _ = {};
      r.r(_), r.d(_, {
        Image: () => Ww,
        Root: () => Uw,
        StatusIndicator: () => $w,
        useAvatarContext: () => Kw
      });
      var C = {};
      r.r(C), r.d(C, {
        Controls: () => l_,
        Dropdown: () => h_,
        DropdownLabel: () => p_,
        Ellipsis: () => d_,
        Item: () => s_,
        Label: () => v_,
        Next: () => i_,
        Option: () => m_,
        Pages: () => o_,
        Prev: () => a_,
        ResultsPerPage: () => f_,
        Root: () => n_
      });
      var x = {};
      r.r(x), r.d(x, {
        Icon: () => wC,
        Item: () => bC,
        Label: () => CC,
        Root: () => gC,
        StatusIndicator: () => _C,
        useChipGroupContext: () => yC
      });
      var j = {};
      r.r(j), r.d(j, {
        Anchor: () => LC,
        Arrow: () => MC,
        Close: () => AC,
        Content: () => zC,
        Portal: () => VC,
        Root: () => DC,
        RootContext: () => NC,
        Trigger: () => IC,
        TriggerButton: () => EC
      });
      var P = {};
      r.r(P), r.d(P, {
        Indicator: () => gx,
        Label: () => bx,
        Root: () => mx,
        Track: () => yx,
        UnitLabel: () => wx
      });
      var O = {};
      r.r(O), r.d(O, {
        Content: () => Vx,
        Header: () => Ex,
        Icon: () => zx,
        Item: () => Tx,
        Root: () => Dx,
        Trigger: () => Lx,
        TriggerIcon: () => Mx
      });
      var S = {};
      r.r(S), r.d(S, {
        PC: () => Fx,
        PS4: () => qx,
        PS5: () => Hx,
        XboxOne: () => Bx,
        XboxSeriesXS: () => Zx
      });
      var k = {};
      r.r(k), r.d(k, {
        PlatformButton: () => Qx
      });
      var R = r(39793);

      function N(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class D extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }

      function I(e) {
        if ("string" != typeof e) throw new D(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = q.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = E[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new D(e);
          return `#${r}`
        }(e) : e;
        const r = z.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(L(e, 2), 16)), parseInt(L(e[3] || "f", 2), 16) / 255]
        }
        const n = M.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = V.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const s = A.exec(t);
        if (s) {
          const [t, r, n, o] = Array.from(s).slice(1).map(parseFloat);
          if (N(0, 100, r) !== r) throw new D(e);
          if (N(0, 100, n) !== n) throw new D(e);
          return [...F(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new D(e)
      }
      const T = e => parseInt(e.replace(/_/g, ""), 36),
        E = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = T(t.substring(0, 3)),
            n = T(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        L = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        z = new RegExp(`^#${L("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        M = new RegExp(`^#${L("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        V = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${L(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        A = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        q = /^[a-z]+$/i,
        H = e => Math.round(255 * e),
        F = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(H);
          const o = (e % 360 + 360) % 360 / 60,
            s = (1 - Math.abs(2 * n - 1)) * (t / 100),
            a = s * (1 - Math.abs(o % 2 - 1));
          let i = 0,
            d = 0,
            l = 0;
          o >= 0 && o < 1 ? (i = s, d = a) : o >= 1 && o < 2 ? (i = a, d = s) : o >= 2 && o < 3 ? (d = s, l = a) : o >= 3 && o < 4 ? (d = a, l = s) : o >= 4 && o < 5 ? (i = a, l = s) : o >= 5 && o < 6 && (i = s, l = a);
          const c = n - s / 2;
          return [i + c, d + c, l + c].map(H)
        };

      function B(e, t) {
        const [r, n, o, s] = function(e) {
          const [t, r, n, o] = I(e).map((e, t) => 3 === t ? e : e / 255), s = Math.max(t, r, n), a = Math.min(t, r, n), i = (s + a) / 2;
          if (s === a) return [0, 0, i, o];
          const d = s - a;
          return [60 * (t === s ? (r - n) / d + (r < n ? 6 : 0) : r === s ? (n - t) / d + 2 : (t - r) / d + 4), i > .5 ? d / (2 - s - a) : d / (s + a), i, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${N(0,100,100*t).toFixed()}%, ${N(0,100,100*r).toFixed()}%, ${parseFloat(N(0,1,n).toFixed(3))})`
        }(r, n, o - t, s)
      }

      function Z(e, t) {
        return B(e, -t)
      }
      var X = r(4637),
        G = r.t(X, 2),
        K = r(14550),
        U = r(67015),
        W = r(95229);
      const $ = {
          enabled: {
            background: (0, K.Tm)(U.no.enabled.background),
            border: (0, K.Tm)(U.no.enabled.border),
            text: (0, K.Tm)(U.no.enabled.text),
            outline: (0, K.Tm)(U.no.enabled.outline)
          },
          hover: {
            background: (0, K.Tm)(U.no.hover.background),
            border: (0, K.Tm)(U.no.hover.border),
            text: (0, K.Tm)(U.no.hover.text),
            outline: (0, K.Tm)(U.no.hover.outline)
          },
          focus: {
            background: (0, K.Tm)(U.no.focus.background),
            border: (0, K.Tm)(U.no.focus.border),
            text: (0, K.Tm)(U.no.focus.text),
            outline: (0, K.Tm)(U.no.focus.outline)
          },
          pressed: {
            background: (0, K.Tm)(U.no.pressed.background),
            border: (0, K.Tm)(U.no.pressed.border),
            text: (0, K.Tm)(U.no.pressed.text),
            outline: (0, K.Tm)(U.no.pressed.outline)
          },
          disabled: {
            background: (0, K.Tm)(U.no.disabled.background),
            border: (0, K.Tm)(U.no.disabled.border),
            text: (0, K.Tm)(U.no.disabled.text),
            outline: (0, K.Tm)(U.no.disabled.outline)
          },
          loading: {
            background: (0, K.Tm)(U.no.loading.background),
            border: (0, K.Tm)(U.no.loading.border),
            text: (0, K.Tm)(U.no.loading.text),
            outline: (0, K.Tm)(U.no.loading.outline)
          }
        },
        Q = ({
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
            hoverColor: a,
            pressedColor: i,
            textColor: d
          },
          enabled: l = !1
        }, c = []) => {
          (0, X.useEffect)(() => {
            if (!e.current || !s || !l) return;
            const c = `${s}:${t}:${r}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, W.getOrSet)(c, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = I(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(s);
                return {
                  text: d || (e > t ? K.LU.global.color.black.static[100] : K.LU.global.color.white.static[100]),
                  hover: a || (e >= r ? B(s, n) : Z(s, n)),
                  pressed: i || (e >= r ? B(s, o) : Z(s, o))
                }
              });
            return e.current.style.setProperty($.enabled.background, s), e.current.style.setProperty($.enabled.border, s), e.current.style.setProperty($.enabled.text, u), e.current.style.setProperty($.hover.background, f), e.current.style.setProperty($.hover.border, f), e.current.style.setProperty($.hover.text, u), e.current.style.setProperty($.focus.background, f), e.current.style.setProperty($.focus.border, f), e.current.style.setProperty($.focus.text, u), e.current.style.setProperty($.pressed.background, p), e.current.style.setProperty($.pressed.border, p), e.current.style.setProperty($.pressed.text, u), e.current.style.setProperty($.loading.background, f), e.current.style.setProperty($.loading.border, f), e.current.style.setProperty($.loading.text, u), () => {
              e.current?.style.removeProperty($.enabled.background), e.current?.style.removeProperty($.enabled.border), e.current?.style.removeProperty($.enabled.text), e.current?.style.removeProperty($.hover.background), e.current?.style.removeProperty($.hover.border), e.current?.style.removeProperty($.hover.text), e.current?.style.removeProperty($.focus.background), e.current?.style.removeProperty($.focus.border), e.current?.style.removeProperty($.focus.text), e.current?.style.removeProperty($.pressed.background), e.current?.style.removeProperty($.pressed.border), e.current?.style.removeProperty($.pressed.text), e.current?.style.removeProperty($.loading.background), e.current?.style.removeProperty($.loading.border), e.current?.style.removeProperty($.loading.text)
            }
          }, [e.current, t, r, n, o, s, a, i, d, l, ...c])
        };
      var Y = r(67008),
        J = r(73532),
        ee = r(55200),
        te = r(51817);

      function re(e) {
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

      function ne(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ne(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = re(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ne(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function se(e, t) {
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
        ie = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = oe(oe({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ae(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return se(e.variantClassNames, e => se(e, e => e.split(" ")[0]))
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
      const de = "pageMD",
        le = (0, X.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = de,
          testId: n,
          ...o
        }, s) => {
          const a = (0, ee.zQ)(),
            i = "string" == typeof r ? r : r?.[a] ?? r.default ?? de,
            d = (0, W.mergeProps)({
              className: ie({
                size: i
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, R.jsx)(te.b, {
            label: e,
            children: (0, R.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...d,
              ref: s,
              viewBox: "0 0 16 16",
              children: [!t && (0, R.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, R.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var ce = r(81270),
        ue = r(33762);

      function fe(e) {
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

      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pe(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = fe(o)) in n ? Object.defineProperty(n, o, {
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

      function me(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ve = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ye = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = he(he({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ve(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return me(e.variantClassNames, e => me(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ge = ye({
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
              SM: "foundry_17pcofya foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj",
              MD: "foundry_17pcofyb foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
              LG: "foundry_17pcofyc foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
              XL: "foundry_17pcofyd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            },
            fullWidth: {
              true: "foundry_17pcofye",
              false: "foundry_17pcofyf"
            },
            iconLeft: {
              true: "foundry_17pcofyg",
              false: "foundry_17pcofyh"
            },
            iconRight: {
              true: "foundry_17pcofyi",
              false: "foundry_17pcofyj"
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
              size: "XL",
              iconLeft: !0
            }, "foundry_17pcofyq"],
            [{
              size: "XL",
              iconRight: !0
            }, "foundry_17pcofyr"]
          ]
        });
      ye({
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
      var be = ye({
          defaultClassName: "foundry_17pcofyw",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofyx",
              MD: "foundry_17pcofyy",
              LG: "foundry_17pcofyz",
              XL: "foundry_17pcofy10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        we = ye({
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
        _e = ye({
          defaultClassName: "foundry_17pcofy17",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofy18",
              MD: "foundry_17pcofy19",
              LG: "foundry_17pcofy1a",
              XL: "foundry_17pcofy1b"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ce = (0, X.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconLeftElement: s,
        iconRight: a,
        iconRightLabel: i,
        iconRightElement: d,
        appearance: l,
        size: c = "MD",
        fullWidth: u = !1,
        isLoading: f = !1,
        spinnerLabel: p,
        preventFocusOnPress: h = !1,
        override_darkenLuminance: m = .035,
        override_textLuminance: v = .179,
        override_hoverLuminance: y = .08,
        override_pressedLuminance: g = .15,
        override_backgroundColor: b,
        override_hoverColor: w,
        override_pressedColor: _,
        override_textColor: C,
        ...x
      }, j) => {
        const P = (0, X.useRef)(null),
          O = (0, Y.UP)(P, j),
          S = (0, ee.zQ)(),
          k = "string" == typeof c ? c : c?.[S] ?? c.default ?? "MD",
          {
            buttonProps: N
          } = (0, Y.sL)((0, W.mergeProps)(x, {
            isLoading: f,
            preventFocusOnPress: h
          }), P);
        Q({
          refs: {
            buttonRef: P
          },
          config: {
            textLuminance: v,
            darkenLuminance: m,
            hoverLuminance: y,
            pressedLuminance: g
          },
          overrides: {
            backgroundColor: b,
            hoverColor: w,
            pressedColor: _,
            textColor: C
          },
          enabled: "accent" === l
        }, [t]);
        const D = (0, W.mergeProps)({
            className: ge({
              appearance: l,
              size: k,
              fullWidth: u,
              iconLeft: !!n,
              iconRight: !!a
            }),
            "data-testid": e
          }, N),
          I = s || (n && ue[n] ? ue[n] : null),
          T = d || (a && ue[a] ? ue[a] : null),
          E = t ? J.DX : "button",
          L = u && (T || T && I);
        return (0, R.jsxs)(E, {
          ref: O,
          ...D,
          children: [L && (0, R.jsx)("div", {
            className: "foundry_17pcofy15"
          }), I && (0, R.jsx)(I, {
            label: o || "",
            size: k,
            className: (0, ce.clsx)(be({
              size: k
            }), "foundry_17pcofy11")
          }), (0, R.jsx)(J.xV, {
            children: r
          }), T && (0, R.jsx)(T, {
            label: i || "",
            size: k,
            className: (0, ce.clsx)(be({
              size: k
            }), we({
              fullWidth: u
            }))
          }), f && (0, R.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, R.jsx)(le, {
              label: p || "",
              size: "inline" + ("XL" === k ? "LG" : "MD"),
              hideTrack: !0,
              className: _e({
                size: k
              })
            })
          })]
        })
      });

      function xe(e) {
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

      function je(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? je(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = xe(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach(function(t) {
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
      var Se = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ke = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Pe(Pe({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Se(l, n, e.defaultVariants) && (r += " " + c);
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
        Re = ke({
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
        Ne = ke({
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
        De = ke({
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
      const Ie = (0, X.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        iconElement: n,
        label: o,
        appearance: s,
        fullWidth: a = !1,
        size: i = "LG",
        children: d,
        isLoading: l = !1,
        spinnerLabel: c,
        preventFocusOnPress: u = !1,
        override_darkenLuminance: f = .035,
        override_textLuminance: p = .179,
        override_hoverLuminance: h = .08,
        override_pressedLuminance: m = .15,
        override_backgroundColor: v,
        override_hoverColor: y,
        override_pressedColor: g,
        override_textColor: b,
        ...w
      }, _) => {
        const C = (0, X.useRef)(null),
          x = (0, Y.UP)(C, _),
          j = (0, ee.zQ)(),
          P = "string" == typeof i ? i : i?.[j] ?? i.default ?? "LG",
          {
            buttonProps: O
          } = (0, Y.sL)((0, W.mergeProps)(w, {
            isLoading: l,
            preventFocusOnPress: u
          }), C);
        Q({
          refs: {
            buttonRef: C
          },
          config: {
            textLuminance: p,
            darkenLuminance: f,
            hoverLuminance: h,
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
        const S = (0, W.mergeProps)({
            className: Ne({
              appearance: s,
              size: P,
              fullWidth: a
            }),
            "data-testid": e
          }, O),
          k = n || (r ? ue[r] : null),
          N = t ? J.DX : "button";
        return (0, R.jsxs)(N, {
          ref: x,
          ...S,
          children: [k && (0, R.jsx)(k, {
            label: o || "",
            size: P,
            className: Re({
              size: P
            })
          }), (0, R.jsx)(J.xV, {
            children: d
          }), l && (0, R.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, R.jsx)(le, {
              label: c || "",
              size: P && "SM" !== P ? `inline${P}` : "inlineMD",
              hideTrack: !0,
              className: De({
                size: P
              })
            })
          })]
        })
      });

      function Te(e) {
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

      function Ee(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ee(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Te(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ee(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ze(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Me = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ve = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Le(Le({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Me(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ze(e.variantClassNames, e => ze(e, e => e.split(" ")[0]))
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
      const Ae = (0, X.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: s,
        ...a
      }, i) => {
        const d = "horizontal" !== t || n ? "div" : "hr",
          l = n || "hr" === d ? void 0 : "separator",
          c = o ? J.DX : d;
        return (0, R.jsx)(c, {
          ref: i,
          className: (0, ce.clsx)(Ve({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": s,
          ...a
        })
      });

      function qe(e) {
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

      function He(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? He(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = qe(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : He(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Be(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ze = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xe = "var(--foundry_9dxgbc2)",
        Ge = "var(--foundry_9dxgbc3)",
        Ke = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Fe(Fe({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ze(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Be(e.variantClassNames, e => Be(e, e => e.split(" ")[0]))
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
        Ue = "var(--foundry_9dxgbc0)",
        We = "var(--foundry_9dxgbc1)";
      const $e = (0, X.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: s = "MD",
        ...a
      }, i) => {
        const d = (0, ee.zQ)(),
          l = "string" == typeof s ? s : s?.[d] ?? s.default ?? "MD",
          c = (0, W.mergeProps)({
            className: Ke({
              size: l
            }),
            "data-testid": t,
            style: (0, K.DI)({
              [Ue]: n?.pulseColorBackground,
              [We]: n?.pulseColorForeground,
              [Xe]: n?.gradientColorBackground,
              [Ge]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, a),
          u = e ? J.DX : "div";
        return (0, R.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, R.jsx)(J.xV, {
            children: r
          }) : (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, R.jsx)("div", {
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

      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ye(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Qe(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ye(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) tt(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return et(e.variantClassNames, e => et(e, e => e.split(" ")[0]))
            }
          }, t
        },
        nt = rt({
          defaultClassName: "foundry_1gea4150",
          variantClassNames: {
            size: {
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd",
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
              SM: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf",
              XS: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg"
            },
            appearance: {
              default: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              bold: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
              hyperlink: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ot = (0, X.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? J.DX : "p",
          i = (0, W.mergeProps)({
            className: nt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, R.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var st = rt({
        defaultClassName: "foundry_ujgffp0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdw",
            bold: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const at = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const s = e ? J.DX : "p",
            a = (0, W.mergeProps)({
              className: st({
                appearance: r
              })
            }, n);
          return (0, R.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        it = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? J.DX : "h1",
            s = (0, W.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        });
      var dt = rt({
        defaultClassName: "foundry_11wb5e70",
        variantClassNames: {
          level: {
            1: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd4",
            2: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5",
            3: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6",
            4: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd7",
            5: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
            6: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9",
            7: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const lt = (0, X.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? J.DX : `h${7===t?6:t}`,
          a = (0, W.mergeProps)(n, {
            className: dt({
              level: t
            })
          });
        return (0, R.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...a
        })
      });
      var ct = rt({
        defaultClassName: "foundry_370tab0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdn",
            MD: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdo",
            SM: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp",
            XS: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdq",
            XXS: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdr"
          },
          appearance: {
            default: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcds",
            bold: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdt"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const ut = (0, X.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? J.DX : "p",
          i = (0, W.mergeProps)({
            className: ct({
              size: n,
              appearance: r
            })
          }, o);
        return (0, R.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var ft = rt({
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
        ht = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const s = e ? J.DX : pt[r] || "span",
            a = (0, W.mergeProps)(n, {
              className: ft({
                semantic: r
              })
            });
          return (0, R.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        });
      var mt = r(35812);
      let vt = "undefined" != typeof document ? X.useLayoutEffect : X.useEffect,
        yt = e => e && !Array.isArray(e) && "object" == typeof e,
        gt = [],
        bt = {},
        wt = mt.default;
      const _t = (e, t = gt) => {
        let r = bt;
        yt(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : gt) : yt(t) && (r = t, t = "dependencies" in r ? r.dependencies : gt), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, s = (0, X.useRef)(!1), a = (0, X.useRef)(wt.context(() => {}, n)), i = (0, X.useRef)(e => a.current.add(null, e)), d = t && t.length && !o;
        return d && vt(() => (s.current = !0, () => a.current.revert()), gt), vt(() => {
          if (e && a.current.add(e, n), !d || !s.current) return () => a.current.revert()
        }, t), {
          context: a.current,
          contextSafe: i.current
        }
      };
      _t.register = e => {
        wt = e
      }, _t.headless = !0;
      const Ct = {
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

      function xt(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function jt(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -xt(t - e, r - t, n) + t : e > r ? +xt(e - r, r - t, n) + r : e
      }

      function Pt(e, t, r) {
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

      function Ot(e, t) {
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
          t % 2 ? Ot(Object(r), !0).forEach(function(t) {
            Pt(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ot(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const kt = {
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

      function Rt(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const Nt = ["enter", "leave"];
      const Dt = ["gotpointercapture", "lostpointercapture"];

      function It(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = Dt.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function Tt(e) {
        return "touches" in e
      }

      function Et(e) {
        return Tt(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Lt(e) {
        return Tt(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function zt(e, t) {
        try {
          const r = t.clientX - e.clientX,
            n = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            s = (t.clientY + e.clientY) / 2,
            a = Math.hypot(r, n);
          return {
            angle: -180 * Math.atan2(r, n) / Math.PI,
            distance: a,
            origin: [o, s]
          }
        } catch (e) {}
        return null
      }

      function Mt(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return zt(r, n)
      }

      function Vt(e) {
        const t = Lt(e);
        return Tt(e) ? t.identifier : t.pointerId
      }

      function At(e) {
        const t = Lt(e);
        return [t.clientX, t.clientY]
      }

      function qt(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function Ht(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Ft() {}

      function Bt(...e) {
        return 0 === e.length ? Ft : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function Zt(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Xt {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Ht(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            Ct.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [s, a] = t._movement, [i, d] = r.threshold, {
            _step: l,
            values: c
          } = t;
          if (r.hasCustomTransform ? (!1 === l[0] && (l[0] = Math.abs(s) >= i && c[0]), !1 === l[1] && (l[1] = Math.abs(a) >= d && c[1])) : (!1 === l[0] && (l[0] = Math.abs(s) >= i && Math.sign(s) * i), !1 === l[1] && (l[1] = Math.abs(a) >= d && Math.sign(a) * d)), t.intentional = !1 !== l[0] || !1 !== l[1], !t.intentional) return;
          const u = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = c;
            u[0] = !1 !== l[0] ? e - l[0] : 0, u[1] = !1 !== l[1] ? t - l[1] : 0
          } else u[0] = !1 !== l[0] ? s - l[0] : 0, u[1] = !1 !== l[1] ? a - l[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(u);
          const f = t.offset,
            p = t._active && !t._blocked || t.active;
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Ht(r.bounds, t)), this.setup && this.setup()), t.movement = u, this.computeOffset()));
          const [h, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [h < v ? -1 : h > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [s, a],
                [i, d]
              ] = e;
              return [jt(t, s, a, n), jt(r, i, d, o)]
            }(t._bounds, t.offset, w), t.delta = Ct.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = Ct.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Ct.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(St(St(St({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Gt extends Xt {
        constructor(...e) {
          super(...e), Pt(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Ct.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Ct.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Et(e)] : r.axisThreshold;
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
      const Kt = e => e,
        Ut = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => St(St({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return Ct.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Ct.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Kt
          },
          threshold: e => Ct.toVector(e, 0)
        },
        Wt = St(St({}, Ut), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Wt.bounds(e(t));
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
        $t = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Qt = "undefined" != typeof window && window.document && window.document.createElement;

      function Yt() {
        return Qt && "ontouchstart" in window
      }
      const Jt = {
          isBrowser: Qt,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Yt(),
          touchscreen: Yt() || Qt && window.navigator.maxTouchPoints > 1,
          pointer: Qt && "onpointerdown" in window,
          pointerLock: Qt && "exitPointerLock" in window.document
        },
        er = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        tr = St(St({}, Wt), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Jt.pointerLock, Jt.touch && r ? "touch" : this.pointerLock ? "mouse" : Jt.pointer && !o ? "pointer" : Jt.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Jt.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const s = Ct.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, s
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(Ct.toVector(e)),
              distance: this.transform(Ct.toVector(t)),
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
          axisThreshold: e => e ? St(St({}, er), e) : er,
          keyboardDisplacement: (e = 10) => e
        });

      function rr(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [s, a] = e._direction;
        (t < 0 && n > 0 && s < 0 || t > 0 && n < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && a < 0 || r > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const nr = St(St({}, Ut), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Jt.touch && Jt.gesture) return "gesture";
            if (Jt.touch && n) return "touch";
            if (Jt.touchscreen) {
              if (Jt.pointer) return "pointer";
              if (Jt.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = Zt(Ht(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              s = e => {
                const t = Zt(Ht(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), s()] : e => [o(e), s(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, Ct.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        or = St(St({}, Wt), {}, {
          mouseOnly: (e = !0) => e
        }),
        sr = Wt,
        ar = Wt,
        ir = St(St({}, Wt), {}, {
          mouseOnly: (e = !0) => e
        }),
        dr = new Map,
        lr = new Map;

      function cr(e) {
        dr.set(e.key, e.engine), lr.set(e.key, e.resolver)
      }
      const ur = {
          key: "drag",
          engine: class extends Gt {
            constructor(...e) {
              super(...e), Pt(this, "ingKey", "dragging")
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
                e._bounds = Wt.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Vt(e), r._pointerActive = !0, this.computeValues(At(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Et(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Vt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = At(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Ct.sub(o, t._values), this.computeValues(o)), Ct.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = Vt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, s] = t._distance;
              if (t.tap = o <= r.tapsThreshold && s <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, s] = t._movement, [a, i] = r.swipe.velocity, [d, l] = r.swipe.distance, c = r.swipe.duration;
                if (t.elapsedTime < c) {
                  const r = Math.abs(e / t.timeDelta),
                    c = Math.abs(n / t.timeDelta);
                  r > a && Math.abs(o) > d && (t.swipe[0] = Math.sign(e)), c > i && Math.abs(s) > l && (t.swipe[1] = Math.sign(n))
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
              const t = $t[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, Ct.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in $t && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: tr
        },
        fr = {
          key: "hover",
          engine: class extends Gt {
            constructor(...e) {
              super(...e), Pt(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(At(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = At(e);
              t._movement = t._delta = Ct.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: ir
        },
        pr = {
          key: "move",
          engine: class extends Gt {
            constructor(...e) {
              super(...e), Pt(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(At(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = At(e),
                r = this.state;
              r._delta = Ct.sub(t, r._values), Ct.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: or
        },
        hr = {
          key: "pinch",
          engine: class extends Xt {
            constructor(...e) {
              super(...e), Pt(this, "ingKey", "pinching"), Pt(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? Ct.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = Mt(e, t._touchIds);
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
              const o = zt(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Mt(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = zt(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = Ct.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-qt(e)[1] / 100 * t.offset[0], 0], Ct.addTo(t._movement, t._delta), rr(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: nr
        },
        mr = {
          key: "scroll",
          engine: class extends Gt {
            constructor(...e) {
              super(...e), Pt(this, "ingKey", "scrolling")
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
                    scrollTop: a
                  } = e.currentTarget;
                  return [null !== (t = null != n ? n : s) && void 0 !== t ? t : 0, null !== (r = null != o ? o : a) && void 0 !== r ? r : 0]
                }(e);
              t._delta = Ct.sub(r, t._values), Ct.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: sr
        },
        vr = {
          key: "wheel",
          engine: class extends Gt {
            constructor(...e) {
              super(...e), Pt(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = qt(e), Ct.addTo(t._movement, t._delta), rr(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: ar
        };
      const yr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Jt.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        gr = ["target", "eventOptions", "window", "enabled", "transform"];

      function br(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = br(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class wr {
        constructor(e, t) {
          Pt(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const s = this._listeners,
            a = function(e, t = "") {
              const r = kt[e];
              return e + (r && r[t] || t)
            }(t, r),
            i = St(St({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(a, n, i);
          const d = () => {
            e.removeEventListener(a, n, i), s.delete(d)
          };
          return s.add(d), d
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class _r {
        constructor() {
          Pt(this, "_timeouts", new Map)
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
      class Cr {
        constructor(e) {
          var t, r;
          Pt(this, "gestures", new Set), Pt(this, "_targetEventStore", new wr(this)), Pt(this, "gestureEventStores", {}), Pt(this, "gestureTimeoutStores", {}), Pt(this, "handlers", {}), Pt(this, "config", {}), Pt(this, "pointerIds", new Set), Pt(this, "touchIds", new Set), Pt(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && xr(t, "drag"), r.wheel && xr(t, "wheel"), r.scroll && xr(t, "scroll"), r.move && xr(t, "move"), r.pinch && xr(t, "pinch"), r.hover && xr(t, "hover")
        }
        setEventIds(e) {
          return Tt(e) ? (this.touchIds = new Set(function(e) {
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
                window: a,
                enabled: i,
                transform: d
              } = n,
              l = function(e, t) {
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
              }(n, gr);
            if (r.shared = br({
                target: o,
                eventOptions: s,
                window: a,
                enabled: i,
                transform: d
              }, yr), t) {
              const e = lr.get(t);
              r[t] = br(St({
                shared: r.shared
              }, l), e)
            } else
              for (const e in l) {
                const t = lr.get(e);
                t && (r[e] = br(St({
                  shared: r.shared
                }, l[e]), t))
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
                  s = jr(r, o.eventOptions, !!n);
                o.enabled && new(dr.get(t))(this, e, t).bind(s)
              }
              const o = jr(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](St(St({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = Bt(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: s
              } = It(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: s
              })
            }
          }
        }
      }

      function xr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new wr(e, t), e.gestureTimeoutStores[t] = new _r
      }
      const jr = (e, t, r) => (n, o, s, a = {}, i = !1) => {
          var d, l;
          const c = null !== (d = a.capture) && void 0 !== d ? d : t.capture,
            u = null !== (l = a.passive) && void 0 !== l ? l : t.passive;
          let f = i ? n : function(e, t = "", r = !1) {
            const n = kt[e],
              o = n && n[t] || t;
            return "on" + Rt(e) + Rt(o) + (function(e = !1, t) {
              return e && !Nt.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && u && (f += "Passive"), e[f] = e[f] || [], e[f].push(s)
        },
        Pr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Or(e, t, r, n, o, s) {
        if (!e.has(r)) return;
        if (!dr.has(n)) return;
        const a = r + "Start",
          i = r + "End";
        o[n] = e => {
          let n;
          return e.first && a in t && t[a](e), r in t && (n = t[r](e)), e.last && i in t && t[i](e), n
        }, s[n] = s[n] || {}
      }

      function Sr(e, t = {}, r, n) {
        const o = X.useMemo(() => new Cr(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), X.useEffect(o.effect.bind(o)), X.useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function kr(e, t) {
        const r = ([ur, hr, mr, vr, pr, fr].forEach(cr), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) Pr.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), s = {};
            return Or(o, r, "onDrag", "drag", s, t), Or(o, r, "onWheel", "wheel", s, t), Or(o, r, "onScroll", "scroll", s, t), Or(o, r, "onPinch", "pinch", s, t), Or(o, r, "onMove", "move", s, t), Or(o, r, "onHover", "hover", s, t), {
              handlers: s,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return Sr(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const Rr = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Nr = ([e, t]) => ({
        x: e,
        y: t
      }), Dr = (e, t) => (e.x = t.x, e.y = t.y, e), Ir = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Tr = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Er = (e, t, r) => Math.min(Math.max(e, t), r);

      function Lr() {
        return Lr = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Lr.apply(null, arguments)
      }
      var zr = ["shift", "alt", "meta", "mod", "ctrl"],
        Mr = {
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

      function Vr(e) {
        return (e && Mr[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Ar(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function qr(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return Vr(e)
        });
        return Lr({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !zr.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && Br([Vr(e.key), Vr(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && Zr([Vr(e.key), Vr(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Hr.clear()
      });
      var Hr = new Set;

      function Fr(e) {
        return Array.isArray(e)
      }

      function Br(e) {
        var t = Array.isArray(e) ? e : [e];
        Hr.has("meta") && Hr.forEach(function(e) {
          return ! function(e) {
            return zr.includes(e)
          }(e) && Hr.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Hr.add(e.toLowerCase())
        })
      }

      function Zr(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Hr.clear() : t.forEach(function(e) {
          return Hr.delete(e.toLowerCase())
        })
      }

      function Xr(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          s = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && s ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Fr(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Gr = (0, X.createContext)(void 0);

      function Kr(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, R.jsx)(Gr.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Ur(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Ur(e[n], t[n])
        }, !0) : e === t
      }
      var Wr = (0, X.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        $r = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, X.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            s = o[0],
            a = o[1],
            i = (0, X.useState)([]),
            d = i[0],
            l = i[1],
            c = (0, X.useCallback)(function(e) {
              a(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            u = (0, X.useCallback)(function(e) {
              a(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, X.useCallback)(function(e) {
              a(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            p = (0, X.useCallback)(function(e) {
              l(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            h = (0, X.useCallback)(function(e) {
              l(function(t) {
                return t.filter(function(t) {
                  return !Ur(t, e)
                })
              })
            }, []);
          return (0, R.jsx)(Wr.Provider, {
            value: {
              enabledScopes: s,
              hotkeys: d,
              enableScope: c,
              disableScope: u,
              toggleScope: f
            },
            children: (0, R.jsx)(Kr, {
              addHotkey: p,
              removeHotkey: h,
              children: n
            })
          })
        },
        Qr = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Yr = "undefined" != typeof window ? X.useLayoutEffect : X.useEffect;

      function Jr(e, t, r, n) {
        var o = (0, X.useState)(null),
          s = o[0],
          a = o[1],
          i = (0, X.useRef)(!1),
          d = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          l = Fr(e) ? e.join(null == d ? void 0 : d.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          u = (0, X.useCallback)(t, null != c ? c : []),
          f = (0, X.useRef)(u);
        f.current = c ? u : t;
        var p = function(e) {
            var t = (0, X.useRef)(void 0);
            return Ur(t.current, e) || (t.current = e), t.current
          }(d),
          h = (0, X.useContext)(Wr).enabledScopes,
          m = (0, X.useContext)(Gr);
        return Yr(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Xr(e, ["input", "textarea", "select"]) || Xr(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== s) {
                    var n = s.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== s && !s.contains(n.activeElement)) return void Qr(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && Ar(l, null == p ? void 0 : p.splitKey).forEach(function(r) {
                    var n, o = qr(r, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, s = t.alt,
                          a = t.meta,
                          i = t.mod,
                          d = t.shift,
                          l = t.ctrl,
                          c = t.keys,
                          u = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = Vr(f),
                          g = u.toLowerCase();
                        if (!(null != c && c.includes(y) || null != c && c.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (s === !v && "alt" !== g) return !1;
                          if (d === !m && "shift" !== g) return !1;
                          if (i) {
                            if (!h && !p) return !1
                          } else {
                            if (a === !h && "meta" !== g && "os" !== g) return !1;
                            if (l === !p && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (Fr(n = c) ? n : n.split(o)).every(function(e) {
                          return Hr.has(e.trim().toLowerCase())
                        })) : !c)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && i.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void Qr(e);
                      f.current(e, o), t || (i.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (Br(Vr(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Zr(Vr(e.code)), i.current = !1, null != p && p.keyup && r(e, !0))
              },
              a = s || (null == d ? void 0 : d.document) || document;
            return a.addEventListener("keyup", o, null == d ? void 0 : d.eventListenerOptions), a.addEventListener("keydown", n, null == d ? void 0 : d.eventListenerOptions), m && Ar(l, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return m.addHotkey(qr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                a.removeEventListener("keyup", o, null == d ? void 0 : d.eventListenerOptions), a.removeEventListener("keydown", n, null == d ? void 0 : d.eventListenerOptions), m && Ar(l, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return m.removeHotkey(qr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [s, l, p, h]), a
      }

      function en(e) {
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

      function tn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function rn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tn(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = en(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function nn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var on = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sn = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rn(rn({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) on(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nn(e.variantClassNames, e => nn(e, e => e.split(" ")[0]))
            }
          }, t
        },
        an = sn({
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
        dn = sn({
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
      mt.gsap.registerPlugin(_t);
      const ln = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        cn = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        un = (0, K.Tm)("var(--foundry_1a74xwb0)");
      var fn = r(46344),
        pn = r(14376),
        hn = r(68925);
      const mn = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, s] = (0, X.useState)(null);
          return (0, X.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              s(e.default)
            })
          }, [r]), o ? (0, R.jsx)(fn.A, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        vn = {
          "en-US": r.e(3633).then(r.bind(r, 63633)),
          "de-DE": r.e(4590).then(r.bind(r, 44590)),
          "es-ES": r.e(1020).then(r.bind(r, 51020)),
          "es-MX": r.e(7861).then(r.bind(r, 77861)),
          "fr-FR": r.e(4632).then(r.bind(r, 74632)),
          "it-IT": r.e(9206).then(r.bind(r, 89206)),
          "ja-JP": r.e(4497).then(r.bind(r, 24497)),
          "ko-KR": r.e(4711).then(r.bind(r, 24711)),
          "pl-PL": r.e(3852).then(r.bind(r, 83852)),
          "pt-BR": r.e(788).then(r.bind(r, 20788)),
          "ru-RU": r.e(5962).then(r.bind(r, 55962)),
          "zh-CN": r.e(8511).then(r.bind(r, 58511)),
          "zh-TW": r.e(3275).then(r.bind(r, 93275))
        };
      class yn {
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
            r = this.slide.panAreaSize["x" === e ? "w" : "h"],
            n = this.slide.panAreaSize.safeArea["x" === e ? "w" : "h"] + 2 * this.slide.panAreaSize.safeArea[e];
          this.center[e] = this.currZoomLevel === this.slide.zoomLevels.initial ? Math.round((r - t - (r - n)) / 2) : Math.round((r - t) / 2), this.max[e] = t > r ? Math.round(r - t) : this.center[e], this.min[e] = t > r ? 0 : this.center[e]
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
          return r ? t : Er(t, this.max[e], this.min[e])
        }
      }
      class gn {
        panAreaSize = {
          w: 0,
          h: 0
        };
        elementSize = {
          w: 0,
          h: 0
        };
        vFill = 1;
        initial = 1;
        max = 1;
        min = 1;
        step = 1;
        steps = 1;
        options;
        slide;
        constructor({
          options: e,
          slide: t
        }) {
          this.options = e, this.slide = t
        }
        update(e) {
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Tr(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return Tr(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Tr(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class bn {
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
      class wn {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Dr(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Dr(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(n, o), this.clearTapTimer()
          }, s))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, n]
          } = t, o = "x" === e ? r : n, s = this.slide.pan[e], a = s + o;
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(s),
              t = this.getVerticalDragRatio(a);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const i = this.slide.bounds.correctPan(e, a);
          s !== i && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = i)
        }
        setPanWithFriction(e, t, r) {
          if (this.slide.bounds.correctPan(e, t) !== t || r) {
            const n = Math.round(t - this.slide.pan[e]);
            this.slide.pan[e] += n * (r || .35)
          } else this.slide.pan[e] = t
        }
        getVerticalDragRatio(e) {
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.h / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class _n {
        slide;
        trigger = null;
        thumbnail = null;
        containerOpacity = "1";
        containerBounds = null;
        containerRadius = "";
        containerClip = "";
        placeholderFit = "";
        placeholderClip = "";
        placeholderPosition = "";
        placeholderScale = "";
        placeholderTransform = "";
        placeholderRadius = "";
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
        update(e) {
          this.thumbnail = e, this.correctImageSize(), this.setTriggerBounds(), this.setTriggerStyles(), this.setThumbStyles()
        }
        resize() {
          this.setTriggerBounds(), this.setThumbStyles(), this.correctImageSize()
        }
        async loadPlaceholder(e) {
          e.src = this.thumbnail.currentSrc ?? "", await Rr(e)
        }
        setTriggerBounds() {
          this.containerBounds = (e => {
            const t = e?.getBoundingClientRect() ?? {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            return {
              x: t.x,
              y: t.y,
              w: t.width,
              h: t.height
            }
          })(this.trigger)
        }
        setThumbStyles() {
          if (this.thumbnail) {
            const e = getComputedStyle(this.thumbnail);
            this.placeholderFit = e.objectFit, this.placeholderPosition = e.objectPosition, this.placeholderScale = "none" === e.scale ? void 0 : e.scale, this.placeholderTransform = e.transform, this.placeholderClip = "none" === e.clipPath ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : e.clipPath, this.placeholderRadius = e.borderRadius || `${e.borderTopLeftRadius} ${e.borderTopRightRadius} ${e.borderBottomRightRadius} ${e.borderBottomLeftRadius}`
          }
        }
        setTriggerStyles() {
          if (this.trigger) {
            const e = getComputedStyle(this.trigger);
            this.containerOpacity = e.opacity, this.containerClip = "none" === e.clipPath ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : e.clipPath, this.containerRadius = e.borderRadius || `${e.borderTopLeftRadius} ${e.borderTopRightRadius} ${e.borderBottomRightRadius} ${e.borderBottomLeftRadius}`
          }
        }
        correctImageSize() {
          if (this.thumbnail) {
            const e = this.thumbnail.naturalWidth,
              t = this.thumbnail.naturalHeight,
              r = this.slide.panAreaSize.w / e,
              n = this.slide.panAreaSize.h / t;
            this.width = n > r ? this.slide.panAreaSize.w : e * n, this.height = r > n ? this.slide.panAreaSize.h : t * r
          }
        }
      }
      class Cn {
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
      class xn extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class jn extends bn {
        slide;
        options;
        constructor({
          slide: e,
          options: t
        }) {
          super(), this.slide = e, this.options = t
        }
        updateOptions(e) {
          this.options = e
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
          if (!this.dispatch(e, new xn(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class Pn {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Nr(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Dr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Nr(e);
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
            s = Dr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let a = Dr({
            x: 0,
            y: 0
          }, s);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Dr(this.startPan, s)), n && (a = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), a = {
            x: this.slide.bounds.correctPan("x", a.x),
            y: this.slide.bounds.correctPan("y", a.y)
          }, this.slide.setZoomLevel(t, !1), d = s, ((i = a).x !== d.x || i.y !== d.y || n || o) && (Dr(this.slide.pan, a), this.slide.setZoomLevel(r))
        }
      }
      class On {
        target;
        safeAreaTarget;
        constructor({
          options: e
        } = {}) {
          this.target = e?.panArea, this.safeAreaTarget = e?.safeArea
        }
        setup(e) {
          this.safeAreaTarget = e
        }
        get w() {
          return this.target ? this.target.clientWidth : window.innerWidth
        }
        get h() {
          return this.target ? this.target.clientHeight : window.innerHeight
        }
        get safeArea() {
          return this.safeAreaTarget ? (e => {
            const t = window.getComputedStyle(e, null),
              r = e.getBoundingClientRect();
            return {
              x: r.left + parseFloat(t.paddingLeft),
              y: r.top + parseFloat(t.paddingTop),
              w: r.width - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight),
              h: r.height - parseFloat(t.paddingTop) - parseFloat(t.paddingBottom)
            }
          })(this.safeAreaTarget) : {
            w: this.w,
            h: this.h,
            x: 0,
            y: 0
          }
        }
      }
      class Sn extends bn {
        overlayOpacity = 1;
        controlsOpacity = 1;
        width;
        height;
        closing = !1;
        opening = !0;
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
        constructor({
          width: e = 0,
          height: t = 0,
          zoomLevelOptions: r,
          actionOptions: n,
          panAreaOptions: o,
          dragOptions: s
        }) {
          super(), this.width = e, this.height = t, this.opener = new _n({
            slide: this
          }), this.bounds = new yn({
            slide: this
          }), this.dragHandler = new wn({
            options: s,
            slide: this
          }), this.scrollWheel = new Cn({
            slide: this
          }), this.zoomHandler = new Pn({
            slide: this
          }), this.zoomLevels = new gn({
            options: r,
            slide: this
          }), this.tapHandler = new jn({
            options: n,
            slide: this
          }), this.panAreaSize = new On({
            options: o
          })
        }
        setup(e, t, r) {
          this.panAreaSize.setup(r), this.opener.setup(e, t), this.dragHandler.setup(), this.closing = !1, this.width = this.opener.width, this.height = this.opener.height, this.controlsVisible = !0, this.controlsOpacity = 1, this.calculateSize(), this.bounds.update(this.currZoomLevel)
        }
        updateImage(e) {
          this.opener.update(e), this.resize()
        }
        resize() {
          this.opener.resize(), this.width = this.opener.width, this.height = this.opener.height, this.currZoomLevel === this.zoomLevels.initial ? (this.calculateSize(), this.zoomAndPanToInitial(), this.getUpdatedContentSize()) : (this.calculateSize(), this.bounds.update(this.currZoomLevel), this.panTo(this.pan.x, this.pan.y)), this.dispatch("resize")
        }
        close() {
          this.closing = !0, this.opener.resize()
        }
        panTo(e, t, r) {
          this.pan.x = this.bounds.correctPan("x", e, r), this.pan.y = this.bounds.correctPan("y", t, r)
        }
        zoomTo(e, t, r) {
          const n = this.currZoomLevel;
          e = Tr(e), r || (e = Er(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Ir(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Ir(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Dr(this.pan, this.bounds.center)
        }
        toggleControls() {
          this.controlsVisible = !this.controlsVisible, this.controlsOpacity = this.controlsVisible ? 1 : 0
        }
        getControlsVisible() {
          return this.controlsVisible
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
            w: this.width,
            h: this.height
          })
        }
        calculateZoomToPanOffset(e, t, r) {
          if (0 === this.bounds.max[e] - this.bounds.min[e]) return this.bounds.center[e];
          t || (t = this.getPanAreaCenterPoint()), r || (r = this.zoomLevels.initial);
          const n = this.currZoomLevel / r;
          return this.bounds.correctPan(e, (this.pan[e] - t[e]) * n + t[e])
        }
        getCurrentScale() {
          return this.currZoomLevel / 1
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
          return {
            width: Math.round(1 * this.width) || this.panAreaSize.w,
            height: Math.round(1 * this.height) || this.panAreaSize.h
          }
        }
        getPanAreaCenterPoint() {
          return {
            x: this.panAreaSize.w / 2,
            y: this.panAreaSize.h / 2
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
      var kn = r(9408);
      const Rn = (0, pn.YK)({
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
      var Nn = "foundry_bc732x1";
      const Dn = (0, X.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Jr(e, e => r?.(e), [r]), (0, R.jsx)(ot, {
        size: "XS",
        className: (0, ce.clsx)("foundry_bc732x0", {
          [Nn]: t
        }),
        asChild: !0,
        children: (0, R.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var In = Object.defineProperty,
        Tn = (e, t) => {
          let r = {};
          for (var n in e) In(r, n, {
            get: e[n],
            enumerable: !0
          });
          return t || In(r, Symbol.toStringTag, {
            value: "Module"
          }), r
        };
      let En = $n();
      const Ln = e => Gn(e, En);
      let zn = $n();
      Ln.write = e => Gn(e, zn);
      let Mn = $n();
      Ln.onStart = e => Gn(e, Mn);
      let Vn = $n();
      Ln.onFrame = e => Gn(e, Vn);
      let An = $n();
      Ln.onFinish = e => Gn(e, An);
      let qn = [];
      Ln.setTimeout = (e, t) => {
        const r = Ln.now() + t,
          n = () => {
            const e = qn.findIndex(e => e.cancel == n);
            ~e && qn.splice(e, 1), Zn -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return qn.splice(Hn(r), 0, o), Zn += 1, Kn(), o
      };
      const Hn = e => ~(~qn.findIndex(t => t.time > e) || ~qn.length);
      Ln.cancel = e => {
        Mn.delete(e), Vn.delete(e), An.delete(e), En.delete(e), zn.delete(e)
      }, Ln.sync = e => {
        Xn = !0, Ln.batchedUpdates(e), Xn = !1
      }, Ln.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Ln.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Mn.delete(r), t = null
        }, n
      };
      let Fn = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Ln.use = e => Fn = e, Ln.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Ln.batchedUpdates = e => e(), Ln.catch = console.error, Ln.frameLoop = "always", Ln.onDemand = () => {}, Ln.advance = () => {
        "demand" !== Ln.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Wn()
      };
      let Bn = -1,
        Zn = 0,
        Xn = !1;

      function Gn(e, t) {
        Xn ? (t.delete(e), e(0)) : (t.add(e), Kn(), "demand" === Ln.frameLoop && Ln.onDemand())
      }

      function Kn() {
        Bn < 0 && (Bn = 0, "demand" !== Ln.frameLoop && Fn(Un))
      }

      function Un() {
        ~Bn && (Fn(Un), Ln.batchedUpdates(Wn))
      }

      function Wn() {
        const e = Bn;
        Bn = Ln.now();
        const t = Hn(Bn);
        t && (Qn(qn.splice(0, t), e => e.handler()), Zn -= t), Zn ? (Mn.flush(), En.flush(e ? Math.min(64, Bn - e) : 16.667), Vn.flush(), zn.flush(), An.flush(), "demand" === Ln.frameLoop && Zn > 0 && Ln.onDemand()) : Bn = -1
      }

      function $n() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Zn += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Zn -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Zn -= t.size, Qn(t, t => t(r) && e.add(t)), Zn += e.size, t = e)
          }
        }
      }

      function Qn(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Ln.catch(e)
          }
        })
      }

      function Yn() {}
      const Jn = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function eo(e, t) {
        if (Jn.arr(e)) {
          if (!Jn.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      const to = (e, t) => e.forEach(t);

      function ro(e, t, r) {
        if (Jn.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      const no = e => Jn.und(e) ? [] : Jn.arr(e) ? e : [e];

      function oo(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), to(r, t)
        }
      }
      const so = (e, ...t) => oo(e, e => e(...t)),
        ao = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
      var io = Tn({
        assign: () => ho,
        colors: () => uo,
        createStringInterpolator: () => lo,
        skipAnimation: () => fo,
        to: () => co,
        willAdvance: () => po
      });
      let lo, co, uo = null,
        fo = !1,
        po = Yn;
      const ho = e => {
          e.to && (co = e.to), e.now && (Ln.now = e.now), void 0 !== e.colors && (uo = e.colors), null != e.skipAnimation && (fo = e.skipAnimation), e.createStringInterpolator && (lo = e.createStringInterpolator), e.requestAnimationFrame && Ln.use(e.requestAnimationFrame), e.batchedUpdates && (Ln.batchedUpdates = e.batchedUpdates), e.willAdvance && (po = e.willAdvance), e.frameLoop && (Ln.frameLoop = e.frameLoop), e.onDemand && (Ln.onDemand = e.onDemand)
        },
        mo = new Set;
      let vo = [],
        yo = [],
        go = 0;
      const bo = {
        get idle() {
          return !mo.size && !vo.length
        },
        start(e) {
          go > e.priority ? (mo.add(e), Ln.onStart(wo)) : (_o(e), Ln(xo))
        },
        advance: xo,
        sort(e) {
          if (go) Ln.onFrame(() => bo.sort(e));
          else {
            const t = vo.indexOf(e);
            ~t && (vo.splice(t, 1), Co(e))
          }
        },
        clear() {
          vo = [], mo.clear()
        }
      };

      function wo() {
        mo.forEach(_o), mo.clear(), Ln(xo)
      }

      function _o(e) {
        vo.includes(e) || Co(e)
      }

      function Co(e) {
        vo.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(vo), 0, e)
      }

      function xo(e) {
        const t = yo;
        for (let r = 0; r < vo.length; r++) {
          const n = vo[r];
          go = n.priority, n.idle || (po(n), n.advance(e), n.idle || t.push(n))
        }
        return go = 0, yo = vo, yo.length = 0, vo = t, vo.length > 0
      }
      const jo = "[-+]?\\d*\\.?\\d+",
        Po = "[-+]?\\d*\\.?\\d+%";

      function Oo(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      const So = new RegExp("rgb" + Oo(jo, jo, jo)),
        ko = new RegExp("rgba" + Oo(jo, jo, jo, jo)),
        Ro = new RegExp("hsl" + Oo(jo, Po, Po)),
        No = new RegExp("hsla" + Oo(jo, Po, Po, jo)),
        Do = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Io = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        To = /^#([0-9a-fA-F]{6})$/,
        Eo = /^#([0-9a-fA-F]{8})$/;

      function Lo(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function zo(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          s = Lo(o, n, e + 1 / 3),
          a = Lo(o, n, e),
          i = Lo(o, n, e - 1 / 3);
        return Math.round(255 * s) << 24 | Math.round(255 * a) << 16 | Math.round(255 * i) << 8
      }

      function Mo(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Vo(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Ao(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function qo(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Ho(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = To.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : uo && void 0 !== uo[e] ? uo[e] : (t = So.exec(e)) ? (Mo(t[1]) << 24 | Mo(t[2]) << 16 | Mo(t[3]) << 8 | 255) >>> 0 : (t = ko.exec(e)) ? (Mo(t[1]) << 24 | Mo(t[2]) << 16 | Mo(t[3]) << 8 | Ao(t[4])) >>> 0 : (t = Do.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Eo.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Io.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Ro.exec(e)) ? (255 | zo(Vo(t[1]), qo(t[2]), qo(t[3]))) >>> 0 : (t = No.exec(e)) ? (zo(Vo(t[1]), qo(t[2]), qo(t[3])) | Ao(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      const Fo = (e, t, r) => {
          if (Jn.fun(e)) return e;
          if (Jn.arr(e)) return Fo({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Jn.str(e.output[0])) return lo(e);
          const n = e,
            o = n.output,
            s = n.range || [0, 1],
            a = n.extrapolateLeft || n.extrapolate || "extend",
            i = n.extrapolateRight || n.extrapolate || "extend",
            d = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, s);
            return function(e, t, r, n, o, s, a, i, d) {
              let l = d ? d(e) : e;
              if (l < t) {
                if ("identity" === a) return l;
                "clamp" === a && (l = t)
              }
              if (l > r) {
                if ("identity" === i) return l;
                "clamp" === i && (l = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? l = -l : r === 1 / 0 ? l -= t : l = (l - t) / (r - t), l = s(l), n === -1 / 0 ? l = -l : o === 1 / 0 ? l += n : l = l * (o - n) + n, l)
            }(e, s[t], s[t + 1], o[t], o[t + 1], d, a, i, n.map)
          }
        },
        Bo = 1.70158,
        Zo = 1.525 * Bo,
        Xo = 2.70158,
        Go = 2 * Math.PI / 3,
        Ko = 2 * Math.PI / 4.5,
        Uo = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Wo = {
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
          easeInBack: e => Xo * e * e * e - Bo * e * e,
          easeOutBack: e => 1 + Xo * Math.pow(e - 1, 3) + Bo * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Zo) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + Zo) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Go),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Go) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ko) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ko) / 2 + 1,
          easeInBounce: e => 1 - Uo(1 - e),
          easeOutBounce: Uo,
          easeInOutBounce: e => e < .5 ? (1 - Uo(1 - 2 * e)) / 2 : (1 + Uo(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        $o = Symbol.for("FluidValue.get"),
        Qo = Symbol.for("FluidValue.observers"),
        Yo = e => Boolean(e && e[$o]),
        Jo = e => e && e[$o] ? e[$o]() : e,
        es = e => e[Qo] || null;

      function ts(e, t) {
        const r = e[Qo];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var rs = class {
        constructor(e) {
          if (!e && !(e = this.get)) throw Error("Unknown getter");
          ns(this, e)
        }
      };
      const ns = (e, t) => as(e, $o, t);

      function os(e, t) {
        if (e[$o]) {
          let r = e[Qo];
          r || as(e, Qo, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function ss(e, t) {
        const r = e[Qo];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Qo] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      const as = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        is = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ds = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ls = new RegExp(`(${is.source})(%|[a-z]+)`, "i"),
        cs = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        us = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        fs = e => {
          const [t, r] = ps(e);
          if (!t || ao()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && us.test(r) ? fs(r) : r || e
        },
        ps = e => {
          const t = us.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        };
      let hs;
      const ms = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        vs = e => e.match(is) ?? [],
        ys = e => {
          hs || (hs = uo ? new RegExp(`(${Object.keys(uo).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => Jo(e).replace(us, fs).replace(ds, Ho).replace(hs, Ho)),
            r = t.map(e => vs(e).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })).map(t => Fo({
              ...e,
              output: t
            })),
            o = e.range || [0, 1],
            s = t.map(e => vs(e)),
            a = s[0].map((e, t) => {
              const r = s.map(e => {
                const r = e[t],
                  n = r.indexOf(".");
                return -1 === n ? 0 : r.length - n - 1
              });
              return r.every(e => e === r[0]) && r[0] > 0 ? r[0] : null
            });
          return e => {
            const r = o.indexOf(e);
            if (-1 !== r) return t[r];
            const s = !ls.test(t[0]) && t.find(e => ls.test(e))?.replace(is, "");
            let i = 0;
            return t[0].replace(is, () => {
              const t = i++,
                r = n[t](e),
                o = a[t];
              return `${null!=o?r.toFixed(o):r}${s||""}`
            }).replace(cs, ms)
          }
        },
        gs = "react-spring: ",
        bs = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${gs}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        ws = bs(console.warn),
        _s = bs(console.warn);

      function Cs(e) {
        return Jn.str(e) && ("#" == e[0] || /\d/.test(e) || !ao() && us.test(e) || e in (uo || {}))
      }
      const xs = ao() ? X.useEffect : X.useLayoutEffect;

      function js() {
        const e = (0, X.useState)()[1],
          t = (() => {
            const e = (0, X.useRef)(!1);
            return xs(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      const Ps = e => (0, X.useEffect)(e, Os),
        Os = [],
        Ss = Symbol.for("Animated:node"),
        ks = e => e && e[Ss],
        Rs = (e, t) => {
          return r = e, n = Ss, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Ns = e => e && e[Ss] && e[Ss].getPayload();
      var Ds = class {
          constructor() {
            Rs(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Is = class e extends Ds {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Jn.num(this._value) && (this.lastPosition = this._value)
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
            return Jn.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Jn.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Ts = class e extends Is {
          constructor(e) {
            super(0), this._string = null, this._toString = Fo({
              output: [e, e]
            })
          }
          static create(t) {
            return new e(t)
          }
          getValue() {
            return this._string ?? (this._string = this._toString(this._value))
          }
          setValue(e) {
            if (Jn.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Fo({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        };
      const Es = {
        dependencies: null
      };
      var Ls = class extends Ds {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return ro(this.source, (r, n) => {
              var o;
              (o = r) && o[Ss] === o ? t[n] = r.getValue(e) : Yo(r) ? t[n] = Jo(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && to(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return ro(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Es.dependencies && Yo(e) && Es.dependencies.add(e);
            const t = Ns(e);
            t && to(t, e => this.add(e))
          }
        },
        zs = class e extends Ls {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Ms)), !0)
          }
        };

      function Ms(e) {
        return (Cs(e) ? Ts : Is).create(e)
      }

      function Vs(e) {
        const t = ks(e);
        return t ? t.constructor : Jn.arr(e) ? zs : Cs(e) ? Ts : Is
      }
      const As = (e, t) => {
        const r = !Jn.fun(e) || e.prototype && e.prototype.isReactComponent;
        return (0, X.forwardRef)((n, o) => {
          const s = (0, X.useRef)(null),
            a = r && (0, X.useCallback)(e => {
              s.current = function(e, t) {
                return e && (Jn.fun(e) ? e(t) : e.current = t), t
              }(o, e)
            }, [o]),
            [i, d] = function(e, t) {
              const r = new Set;
              return Es.dependencies = r, e.style && (e = {
                ...e,
                style: t.createAnimatedStyle(e.style)
              }), e = new Ls(e), Es.dependencies = null, [e, r]
            }(n, t),
            l = js(),
            c = () => {
              const e = s.current;
              r && !e || !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && l()
            },
            u = new qs(c, d),
            f = (0, X.useRef)(void 0);
          xs(() => (f.current = u, to(d, e => os(e, u)), () => {
            f.current && (to(f.current.deps, e => ss(e, f.current)), Ln.cancel(f.current.update))
          })), (0, X.useEffect)(c, []), Ps(() => () => {
            const e = f.current;
            to(e.deps, t => ss(t, e))
          });
          const p = t.getComponentProps(i.getValue());
          return X.createElement(e, {
            ...p,
            ref: a
          })
        })
      };
      var qs = class {
        constructor(e, t) {
          this.update = e, this.deps = t
        }
        eventObserved(e) {
          "change" == e.type && Ln.write(this.update)
        }
      };
      const Hs = Symbol.for("AnimatedComponent"),
        Fs = new WeakMap,
        Bs = e => Jn.str(e) ? e : e && Jn.str(e.displayName) ? e.displayName : Jn.fun(e) && e.name || null;

      function Zs(e, ...t) {
        return Jn.fun(e) ? e(...t) : e
      }
      const Xs = (e, t) => !0 === e || !!(t && e && (Jn.fun(e) ? e(t) : no(e).includes(t))),
        Gs = (e, t) => Jn.obj(e) ? t && e[t] : e,
        Ks = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Us = e => e,
        Ws = (e, t = Us) => {
          let r = $s;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Jn.und(r) || (n[o] = r)
          }
          return n
        },
        $s = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Qs = {
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

      function Ys(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (ro(e, (e, n) => {
              Qs[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return ro(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function Js(e) {
        const t = Jo(e);
        return Jn.arr(t) ? t.map(Js) : Cs(t) ? io.createStringInterpolator({
          range: [0, 1],
          output: [t, t]
        })(1) : t
      }

      function ea(e) {
        return Jn.fun(e) || Jn.arr(e) && Jn.obj(e[0])
      }

      function ta(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      const ra = {
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
        na = {
          ...ra.default,
          mass: 1,
          damping: 1,
          easing: Wo.linear,
          clamp: !1
        };
      var oa = class {
        constructor() {
          this.velocity = 0, Object.assign(this, na)
        }
      };

      function sa(e, t) {
        if (Jn.und(t.decay)) {
          const r = !Jn.und(t.tension) || !Jn.und(t.friction);
          !r && Jn.und(t.frequency) && Jn.und(t.damping) && Jn.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      const aa = [];
      var ia = class {
        constructor() {
          this.changed = !1, this.values = aa, this.toValues = null, this.fromValues = aa, this.config = new oa, this.immediate = !1
        }
      };

      function da(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: s
      }) {
        return new Promise((a, i) => {
          let d, l, c = Xs(r.cancel ?? n?.cancel, t);
          if (c) p();
          else {
            Jn.und(r.pause) || (o.paused = Xs(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Xs(e, t)), d = Zs(r.delay || 0, t), e ? (o.resumeQueue.add(f), s.pause()) : (s.resume(), f())
          }

          function u() {
            o.resumeQueue.add(f), o.timeouts.delete(l), l.cancel(), d = l.time - Ln.now()
          }

          function f() {
            d > 0 && !io.skipAnimation ? (o.delayed = !0, l = Ln.setTimeout(p, d), o.pauseQueue.add(u), o.timeouts.add(l)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(u), o.timeouts.delete(l), e <= (o.cancelId || 0) && (c = !0);
            try {
              s.start({
                ...r,
                callId: e,
                cancel: c
              }, a)
            } catch (e) {
              i(e)
            }
          }
        })
      }
      const la = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? fa(e.get()) : t.every(e => e.noop) ? ca(e.get()) : ua(e.get(), t.every(e => e.finished)),
        ca = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        ua = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        fa = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function pa(e, t, r, n) {
        const {
          callId: o,
          parentId: s,
          onRest: a
        } = t, {
          asyncTo: i,
          promise: d
        } = r;
        return s || e !== i || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const l = Ws(t, (e, t) => "onRest" === t ? void 0 : e);
          let c, u;
          const f = new Promise((e, t) => (c = e, u = t)),
            p = e => {
              const t = o <= (r.cancelId || 0) && fa(n) || o !== r.asyncId && ua(n, !1);
              if (t) throw e.result = t, u(e), e
            };
          let h = 0;
          const m = (e, t) => {
            const s = new ma,
              a = new va;
            return (async () => {
              p(s);
              const i = Jn.obj(e) ? {
                ...e
              } : {
                ...t,
                to: e
              };
              if (i.parentId = o, ro(l, (e, t) => {
                  Jn.und(i[t]) && (i[t] = e)
                }), io.skipAnimation) {
                if (++h > 1024) throw ha(r), a.result = ua(n, !1), u(a), a;
                return i.immediate = !0, await n.start(i)
              }
              const d = await n.start(i);
              return p(s), r.paused && await new Promise(e => {
                r.resumeQueue.add(e)
              }), d
            })()
          };
          let v;
          try {
            let t;
            t = Jn.arr(e) ? (async e => {
              for (const t of e) await m(t)
            })(e) : Promise.resolve(e(m, n.stop.bind(n))), await Promise.all([t.then(c), f]), v = ua(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof ma) v = e.result;
            else {
              if (!(e instanceof va)) throw e;
              v = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = s, r.asyncTo = s ? i : void 0, r.promise = s ? d : void 0)
          }
          return Jn.fun(a) && Ln.batchedUpdates(() => {
            a(v, n, n.item)
          }), v
        })() : d
      }

      function ha(e, t) {
        oo(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var ma = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        va = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        };
      const ya = e => e instanceof ba;
      let ga = 1;
      var ba = class extends rs {
        constructor(...e) {
          super(...e), this.id = ga++, this._priority = 0
        }
        get priority() {
          return this._priority
        }
        set priority(e) {
          this._priority != e && (this._priority = e, this._onPriorityChange(e))
        }
        get() {
          const e = ks(this);
          return e && e.getValue()
        }
        to(...e) {
          return io.to(this, e)
        }
        interpolate(...e) {
          return ws(`${gs}The "interpolate" function is deprecated in v9 (use "to" instead)`), io.to(this, e)
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
          ts(this, {
            type: "change",
            parent: this,
            value: e,
            idle: t
          })
        }
        _onPriorityChange(e) {
          this.idle || bo.sort(this), ts(this, {
            type: "priority",
            parent: this,
            priority: e
          })
        }
      };
      const wa = Symbol.for("SpringPhase"),
        _a = e => (1 & e[wa]) > 0,
        Ca = e => (2 & e[wa]) > 0,
        xa = e => (4 & e[wa]) > 0,
        ja = (e, t) => t ? e[wa] |= 3 : e[wa] &= -3,
        Pa = (e, t) => t ? e[wa] |= 4 : e[wa] &= -5;
      var Oa = class extends ba {
        constructor(e, t) {
          if (super(), this.animation = new ia, this.defaultProps = {}, this._state = {
              paused: !1,
              delayed: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Jn.und(e) || !Jn.und(t)) {
            const r = Jn.obj(e) ? {
              ...e
            } : {
              ...t,
              from: e
            };
            Jn.und(r.default) && (r.default = !0), this.start(r)
          }
        }
        get idle() {
          return !(Ca(this) || this._state.asyncTo) || xa(this)
        }
        get goal() {
          return Jo(this.animation.to)
        }
        get velocity() {
          const e = ks(this);
          return e instanceof Is ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
        }
        get hasAnimated() {
          return _a(this)
        }
        get isAnimating() {
          return Ca(this)
        }
        get isPaused() {
          return xa(this)
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
          } = n, a = Ns(n.to);
          !a && Yo(n.to) && (o = no(Jo(n.to))), n.values.forEach((i, d) => {
            if (i.done) return;
            const l = i.constructor == Ts ? 1 : a ? a[d].lastPosition : o[d];
            let c = n.immediate,
              u = l;
            if (!c) {
              if (u = i.lastPosition, s.tension <= 0) return void(i.done = !0);
              let t = i.elapsedTime += e;
              const r = n.fromValues[d],
                o = null != i.v0 ? i.v0 : i.v0 = Jn.arr(s.velocity) ? s.velocity[d] : s.velocity;
              let a;
              const f = s.precision || (r == l ? .005 : Math.max(Math.max(Math.abs(l), Math.abs(r), 1) * Number.EPSILON, Math.min(1, .001 * Math.abs(l - r))));
              if (Jn.und(s.duration))
                if (s.decay) {
                  const e = !0 === s.decay ? .998 : s.decay,
                    n = Math.exp(-(1 - e) * t);
                  u = r + o / (1 - e) * (1 - n), c = Math.abs(i.lastPosition - u) <= f, a = o * n
                } else {
                  a = null == i.lastVelocity ? o : i.lastVelocity;
                  const t = s.restVelocity || f / 10,
                    n = s.clamp ? 0 : s.bounce,
                    d = !Jn.und(n),
                    p = r == l ? i.v0 > 0 : r < l;
                  let h, m = !1;
                  const v = 1,
                    y = Math.ceil(e / v);
                  for (let e = 0; e < y && (h = Math.abs(a) > t, h || (c = Math.abs(l - u) <= f, !c)); ++e) d && (m = u == l || u > l == p, m && (a = -a * n, u = l)), a += (1e-6 * -s.tension * (u - l) + .001 * -s.friction * a) / s.mass * v, u += a * v
                }
              else {
                let n = 1;
                s.duration > 0 && (this._memoizedDuration !== s.duration && (this._memoizedDuration = s.duration, i.durationProgress > 0 && (i.elapsedTime = s.duration * i.durationProgress, t = i.elapsedTime += e)), n = (s.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, i.durationProgress = n), u = r + s.easing(n) * (l - r), a = (u - i.lastPosition) / e, c = 1 == n
              }
              i.lastVelocity = a, Number.isNaN(u) && (console.warn("Got NaN while animating:", this), c = !0)
            }
            a && !a[d].done && (c = !1), c ? i.done = !0 : t = !1, i.setValue(u, s.round) && (r = !0)
          });
          const i = ks(this),
            d = i.getValue();
          if (t) {
            const e = Jo(n.to);
            d === e && !r || s.decay ? r && s.decay && this._onChange(d) : (i.setValue(e), this._onChange(e)), this._stop()
          } else r && this._onChange(d)
        }
        set(e) {
          return Ln.batchedUpdates(() => {
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
          if (Ca(this)) {
            const {
              to: e,
              config: t
            } = this.animation;
            Ln.batchedUpdates(() => {
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
          return Jn.und(e) ? (r = this.queue || [], this.queue = []) : r = [Jn.obj(e) ? e : {
            ...t,
            to: e
          }], Promise.all(r.map(e => this._update(e))).then(e => la(this, e))
        }
        stop(e) {
          const {
            to: t
          } = this.animation;
          return Jn.und(t) || this._focus(this.get()), ha(this._state, e && this._lastCallId), Ln.batchedUpdates(() => this._stop(t, e)), this
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
          r = Jn.obj(r) ? r[t] : r, (null == r || ea(r)) && (r = void 0), n = Jn.obj(n) ? n[t] : n, null == n && (n = void 0);
          const o = {
            to: r,
            from: n
          };
          return _a(this) || (e.reverse && ([r, n] = [n, r]), n = Jo(n), Jn.und(n) ? ks(this) || this._set(r) : this._set(n)), o
        }
        _update({
          ...e
        }, t) {
          const {
            key: r,
            defaultProps: n
          } = this;
          e.default && Object.assign(n, Ws(e, (e, t) => /^on/.test(t) ? Gs(e, r) : e)), Ia(this, e, "onProps"), Ta(this, "onProps", e, this);
          const o = this._prepareNode(e);
          if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
          const s = this._state;
          return da(++this._lastCallId, {
            key: r,
            props: e,
            defaultProps: n,
            state: s,
            actions: {
              pause: () => {
                xa(this) || (Pa(this, !0), so(s.pauseQueue), Ta(this, "onPause", ua(this, Sa(this, this.animation.to)), this))
              },
              resume: () => {
                xa(this) && (Pa(this, !1), Ca(this) && this._resume(), so(s.resumeQueue), Ta(this, "onResume", ua(this, Sa(this, this.animation.to)), this))
              },
              start: this._merge.bind(this, o)
            }
          }).then(r => {
            if (e.loop && r.finished && (!t || !r.noop)) {
              const t = ka(e);
              if (t) return this._update(t, !0)
            }
            return r
          })
        }
        _merge(e, t, r) {
          if (t.cancel) return this.stop(!0), r(fa(this));
          const n = !Jn.und(e.to),
            o = !Jn.und(e.from);
          if (n || o) {
            if (!(t.callId > this._lastToId)) return r(fa(this));
            this._lastToId = t.callId
          }
          const {
            key: s,
            defaultProps: a,
            animation: i
          } = this, {
            to: d,
            from: l
          } = i;
          let {
            to: c = d,
            from: u = l
          } = e;
          !o || n || t.default && !Jn.und(c) || (c = u), t.reverse && ([c, u] = [u, c]);
          const f = !eo(u, l);
          f && (i.from = u), u = Jo(u);
          const p = !eo(c, d);
          p && this._focus(c);
          const h = ea(t.to),
            {
              config: m
            } = i,
            {
              decay: v,
              velocity: y
            } = m;
          !n && !o || m.decay || (m.velocity = 0), t.config && !h && function(e, t, r) {
            r && (sa(r = {
              ...r
            }, t), t = {
              ...r,
              ...t
            }), sa(e, t), Object.assign(e, t);
            for (const t in na) null == e[t] && (e[t] = na[t]);
            let {
              frequency: n,
              damping: o
            } = e;
            const {
              mass: s
            } = e;
            Jn.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * s, e.friction = 4 * Math.PI * o * s / n)
          }(m, Zs(t.config, s), t.config !== a.config ? Zs(a.config, s) : void 0);
          let g = ks(this);
          if (!g || Jn.und(c)) return r(ua(this, !0));
          const b = Jn.und(t.reset) ? o && !t.default : !Jn.und(u) && Xs(t.reset, s),
            w = b ? u : this.get(),
            _ = Js(c),
            C = Jn.num(_) || Jn.arr(_) || Cs(_),
            x = !h && (!C || Xs(a.immediate || t.immediate, s));
          if (p) {
            const e = Vs(c);
            if (e !== g.constructor) {
              if (!x) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
              g = this._set(_)
            }
          }
          const j = g.constructor;
          let P = Yo(c),
            O = !1;
          if (!P) {
            const e = b || !_a(this) && f;
            (p || e) && (O = eo(Js(w), _), P = !O), (eo(i.immediate, x) || x) && eo(m.decay, v) && eo(m.velocity, y) || (P = !0)
          }
          if (O && Ca(this) && (i.changed && !b ? P = !0 : P || this._stop(d)), !h && ((P || Yo(d)) && (i.values = g.getPayload(), i.toValues = Yo(c) ? null : j == Ts ? [1] : no(_)), i.immediate != x && (i.immediate = x, x || b || this._set(d)), P)) {
            const {
              onRest: e
            } = i;
            to(Da, e => Ia(this, t, e));
            const n = ua(this, Sa(this, d));
            so(this._pendingCalls, n), this._pendingCalls.add(r), i.changed && Ln.batchedUpdates(() => {
              i.changed = !b, e?.(n, this), b ? Zs(a.onRest, n) : i.onStart?.(n, this)
            })
          }
          b && this._set(w), h ? r(pa(t.to, t, this._state, this)) : P ? this._start() : Ca(this) && !p ? this._pendingCalls.add(r) : r(ca(w))
        }
        _focus(e) {
          const t = this.animation;
          e !== t.to && (es(this) && this._detach(), t.to = e, es(this) && this._attach())
        }
        _attach() {
          let e = 0;
          const {
            to: t
          } = this.animation;
          Yo(t) && (os(t, this), ya(t) && (e = t.priority + 1)), this.priority = e
        }
        _detach() {
          const {
            to: e
          } = this.animation;
          Yo(e) && ss(e, this)
        }
        _set(e, t = !0) {
          const r = Jo(e);
          if (!Jn.und(r)) {
            const e = ks(this);
            if (!e || !eo(r, e.getValue())) {
              const n = Vs(r);
              e && e.constructor == n ? e.setValue(r) : Rs(this, n.create(r)), e && Ln.batchedUpdates(() => {
                this._onChange(r, t)
              })
            }
          }
          return ks(this)
        }
        _onStart() {
          const e = this.animation;
          e.changed || (e.changed = !0, Ta(this, "onStart", ua(this, Sa(this, e.to)), this))
        }
        _onChange(e, t) {
          const r = ua(e, !1);
          t || (this._onStart(), Zs(this.animation.onChange, r, this)), Zs(this.defaultProps.onChange, r, this), super._onChange(e, t)
        }
        _start() {
          const e = this.animation;
          ks(this).reset(Jo(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Ca(this) || (ja(this, !0), xa(this) || this._resume())
        }
        _resume() {
          io.skipAnimation ? this.finish() : bo.start(this)
        }
        _stop(e, t) {
          if (Ca(this)) {
            ja(this, !1);
            const r = this.animation;
            to(r.values, e => {
              e.done = !0
            }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ts(this, {
              type: "idle",
              parent: this
            });
            const n = t ? fa(this.get()) : ua(this.get(), Sa(this, e ?? r.to));
            so(this._pendingCalls, n), r.changed = !1, Ta(this, "onRest", n, this)
          }
        }
      };

      function Sa(e, t) {
        const r = Js(t);
        return eo(Js(e.get()), r)
      }

      function ka(e, t = e.loop, r = e.to) {
        const n = Zs(t);
        if (n) {
          const o = !0 !== n && Ys(n),
            s = (o || e).reverse,
            a = !o || o.reset;
          return Ra({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !s || ea(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function Ra(e) {
        const {
          to: t,
          from: r
        } = e = Ys(e), n = new Set;
        return Jn.obj(t) && Na(t, n), Jn.obj(r) && Na(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Na(e, t) {
        ro(e, (e, r) => null != e && t.add(r))
      }
      const Da = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Ia(e, t, r) {
        e.animation[r] = t[r] !== Ks(t, r) ? Gs(t[r], e.key) : void 0
      }

      function Ta(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      const Ea = ["onStart", "onChange", "onRest"];
      let La = 1;
      var za = class {
        constructor(e, t) {
          this.id = La++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._lastLoopId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            Jn.und(r) || this.springs[t].set(r)
          }
        }
        update(e) {
          return e && this.queue.push(Ra(e)), this
        }
        start(e) {
          let {
            queue: t
          } = this;
          return e ? t = no(e).map(Ra) : this.queue = [], this._flush ? this._flush(this, t) : (Ha(this, t), function(e, t) {
            return Promise.all(t.map(t => Ma(e, t))).then(t => la(e, t))
          }(this, t))
        }
        stop(e, t) {
          if (e !== !!e && (t = e), t) {
            const r = this.springs;
            to(no(t), t => r[t].stop(!!e))
          } else ha(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
          return this
        }
        pause(e) {
          if (Jn.und(e)) this.start({
            pause: !0
          });
          else {
            const t = this.springs;
            to(no(e), e => t[e].pause())
          }
          return this
        }
        resume(e) {
          if (Jn.und(e)) this.start({
            pause: !1
          });
          else {
            const t = this.springs;
            to(no(e), e => t[e].resume())
          }
          return this
        }
        each(e) {
          ro(this.springs, e)
        }
        onLoopReset(e) {
          const t = this._onLoopReset ?? (this._onLoopReset = new Set);
          return t.add(e), () => {
            t.delete(e)
          }
        }
        _onFrame() {
          const {
            onStart: e,
            onChange: t,
            onRest: r
          } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
          (n && !this._started || o && !this._started) && (this._started = !0, oo(e, ([e, t]) => {
            t.value = this.get(), e(t, this, this._item)
          }));
          const s = !n && this._started,
            a = o || s && r.size ? this.get() : null;
          o && t.size && oo(t, ([e, t]) => {
            t.value = a, e(t, this, this._item)
          }), s && (this._started = !1, oo(r, ([e, t]) => {
            t.value = a, e(t, this, this._item)
          }))
        }
        eventObserved(e) {
          if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
          else {
            if ("idle" != e.type) return;
            this._active.delete(e.parent)
          }
          Ln.onFrame(this._onFrame)
        }
      };
      async function Ma(e, t, r) {
        const {
          keys: n,
          to: o,
          from: s,
          loop: a,
          onRest: i,
          onResolve: d
        } = t, l = Jn.obj(t.default) && t.default;
        a && (t.loop = !1);
        const c = t,
          u = r || c.parentId || !("loop" in t) ? r ? c.loopId : e._lastLoopId : ++e._lastLoopId;
        !1 === o && (t.to = null), !1 === s && (t.from = null);
        const f = Jn.arr(o) || Jn.fun(o) ? o : void 0;
        f ? (t.to = void 0, t.onRest = void 0, l && (l.onRest = void 0)) : to(Ea, r => {
          const n = t[r];
          if (Jn.fun(n)) {
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
            }, l && (l[r] = t[r])
          }
        });
        const p = e._state;
        t.pause === !p.paused ? (p.paused = t.pause, so(t.pause ? p.pauseQueue : p.resumeQueue)) : p.paused && (t.pause = !0);
        const h = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          m = !0 === t.cancel || !0 === Ks(t, "cancel");
        (f || m && p.asyncId) && h.push(da(++e._lastAsyncId, {
          props: t,
          state: p,
          actions: {
            pause: Yn,
            resume: Yn,
            start(t, r) {
              m ? (ha(p, e._lastAsyncId), r(fa(e))) : (t.onRest = i, r(pa(f, t, p, e)))
            }
          }
        })), p.paused && await new Promise(e => {
          p.resumeQueue.add(e)
        });
        const v = la(e, await Promise.all(h));
        if (a && v.finished && (!r || !v.noop) && u === e._lastLoopId) {
          const r = ka(t, a, o);
          if (r) return r.loopId = u, e._onLoopReset?.forEach(e => e()), Ha(e, [r]), Ma(e, r, !0)
        }
        return d && Ln.batchedUpdates(() => d(v, e, e.item)), v
      }

      function Va(e, t) {
        const r = {
          ...e.springs
        };
        return t && to(no(t), e => {
            Jn.und(e.keys) && (e = Ra(e)), Jn.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), qa(r, e, e => Aa(e))
          }),
          function(e, t) {
            ro(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, os(t, e))
            })
          }(e, r), r
      }

      function Aa(e, t) {
        const r = new Oa;
        return r.key = e, t && os(r, t), r
      }

      function qa(e, t, r) {
        t.keys && to(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Ha(e, t) {
        to(t, t => {
          qa(e.springs, t, t => Aa(t, e))
        })
      }
      const Fa = X.createContext({
          pause: !1,
          immediate: !1
        }),
        Ba = () => {
          const e = [],
            t = function(t) {
              _s(`${gs}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return to(e, (e, o) => {
                if (Jn.und(t)) n.push(e.start());
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
            return to(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return to(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            to(e, (e, r) => {
              const n = Jn.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return to(e, (e, n) => {
              if (Jn.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return to(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return to(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return Jn.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        Za = () => Ba(),
        Xa = () => (0, X.useState)(Za)[0];

      function Ga(e, t, r) {
        const n = Jn.fun(t) && t,
          {
            reset: o,
            sort: s,
            trail: a = 0,
            reverse: i = !1,
            expires: d = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: c,
            ref: u,
            config: f
          } = n ? n() : t,
          p = (0, X.useMemo)(() => n || 3 == arguments.length ? Ba() : void 0, []),
          h = no(e),
          m = [],
          v = (0, X.useRef)(null),
          y = o ? null : v.current;
        xs(() => {
          v.current = m
        }), Ps(() => (to(m, e => {
          p?.add(e.ctrl), e.ctrl.ref = void 0
        }), () => {
          to(v.current, e => {
            e.expired && clearTimeout(e.expirationId), ta(e.ctrl, p), e.ctrl.stop(!0)
          })
        }));
        const g = function(e, {
            key: t,
            keys: r = t
          }, n) {
            if (null === r) {
              const t = new Set;
              return e.map(e => {
                const r = n && n.find(r => r.item === e && "leave" !== r.phase && !t.has(r));
                return r ? (t.add(r), r.key) : Ka++
              })
            }
            return Jn.und(r) ? e : Jn.fun(r) ? e.map(r) : no(r)
          }(h, n ? n() : t, y),
          b = o && v.current || [];
        xs(() => to(b, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          ta(e, p), Zs(c, t, r)
        }));
        const w = [];
        if (y && to(y, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = w[t] = g.indexOf(e.key)) && (m[t] = e)
          }), to(h, (e, t) => {
            m[t] || (m[t] = {
              key: g[t],
              item: e,
              phase: "mount",
              ctrl: new za
            }, m[t].ctrl.item = e)
          }), w.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          to(w, (t, n) => {
            const o = y[n];
            ~t ? (e = m.indexOf(o), m[e] = {
              ...o,
              item: h[t]
            }) : r && m.splice(++e, 0, o)
          })
        }
        Jn.fun(s) && m.sort((e, t) => s(e.item, t.item));
        let _ = -a;
        const C = [],
          x = js(),
          j = Ws(t),
          P = new Map,
          O = (0, X.useRef)(new Map),
          S = (0, X.useRef)(!1);
        if (to(m, (e, r) => {
            const o = e.key,
              s = e.phase,
              i = n ? n() : t;
            let c, p;
            const h = Zs(i.delay || 0, o);
            if ("mount" == s) c = i.enter, p = "enter";
            else {
              const e = g.indexOf(o) < 0;
              if ("leave" != s)
                if (e) c = i.leave, p = "leave";
                else {
                  if (!(c = i.update)) return;
                  p = "update"
                }
              else {
                if (e) return;
                c = i.enter, p = "enter"
              }
            }
            if (c = Zs(c, e.item, r), c = Jn.obj(c) ? Ys(c) : {
                to: c
              }, !c.config) {
              const t = f || j.config;
              c.config = Zs(t, e.item, r, p)
            }
            _ += a;
            const m = {
              ...j,
              delay: h + _,
              ref: u,
              immediate: i.immediate,
              reset: !1,
              ...c
            };
            if ("enter" == p && Jn.und(m.from)) {
              const o = n ? n() : t;
              m.from = Zs(Jn.und(o.initial) || y ? o.from : o.initial, e.item, r)
            }
            const {
              onResolve: b
            } = m;
            m.onResolve = e => {
              Zs(b, e);
              const t = v.current,
                r = t.find(e => e.key === o);
              if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
                const e = t.every(e => e.ctrl.idle);
                if ("leave" == r.phase) {
                  O.current.delete(r);
                  const t = Zs(d, r.item);
                  if (!1 !== t) {
                    const n = !0 === t ? 0 : t;
                    if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(x, n)))
                  }
                }
                e && t.some(e => e.expired) && (l && (S.current = !0), x())
              }
            };
            const w = Va(e.ctrl, m);
            C.push({
              payload: m,
              propsDelay: h
            }), "leave" === p && l ? O.current.set(e, {
              phase: p,
              springs: w,
              payload: m
            }) : P.set(e, {
              phase: p,
              springs: w,
              payload: m
            })
          }), i && a) {
          const e = C.length;
          to(C, ({
            payload: t,
            propsDelay: r
          }, n) => {
            t.delay = r + (e - 1 - n) * a
          })
        }
        const k = (0, X.useContext)(Fa),
          R = k !== function(e) {
            const t = (0, X.useRef)(void 0);
            return (0, X.useEffect)(() => {
              t.current = e
            }), t.current
          }(k) && function(e) {
            for (const t in e) return !0;
            return !1
          }(k);
        xs(() => {
          R && to(m, e => {
            e.ctrl.start({
              default: k
            })
          })
        }, [k]), to(P, (e, t) => {
          if (O.current.size) {
            const e = m.findIndex(e => e.key === t.key);
            m.splice(e, 1)
          }
        }), xs(() => {
          to(O.current.size ? O.current : P, ({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, p?.add(n), R && "enter" == e && n.start({
              default: k
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), n.ref && !S.current ? n.update(t) : (n.start(t), S.current && (S.current = !1)))
          })
        }, o ? void 0 : r);
        const N = e => X.createElement(X.Fragment, null, m.map((t, r) => {
          const n = P.get(t) || O.current.get(t),
            {
              springs: o
            } = n || t.ctrl,
            s = n ? {
              ...t,
              phase: n.phase
            } : t,
            a = e({
              ...o
            }, t.item, s, r),
            i = Jn.str(t.key) || Jn.num(t.key) ? t.key : t.ctrl.id,
            d = X.version < "19.0.0",
            l = a?.props ?? {},
            c = d ? a?.ref : l?.ref;
          return a && a.type ? X.createElement(a.type, {
            ...l,
            key: i,
            ref: c
          }) : a
        }));
        return p ? [N, p] : N
      }
      let Ka = 1;
      var Ua = class extends ba {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Fo(...t);
          const r = this._get(),
            n = Vs(r);
          Rs(this, n.create(r))
        }
        advance(e) {
          const t = this._get();
          eo(t, this.get()) || (ks(this).setValue(t), this._onChange(t, this.idle)), !this.idle && $a(this._active) && Qa(this)
        }
        _get() {
          const e = Jn.arr(this.source) ? this.source.map(Jo) : no(Jo(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !$a(this._active) && (this.idle = !1, to(Ns(this), e => {
            e.done = !1
          }), io.skipAnimation ? (Ln.batchedUpdates(() => this.advance()), Qa(this)) : bo.start(this))
        }
        _attach() {
          let e = 1;
          to(no(this.source), t => {
            Yo(t) && os(t, this), ya(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          }), this.priority = e, this._start()
        }
        _detach() {
          to(no(this.source), e => {
            Yo(e) && ss(e, this)
          }), this._active.clear(), Qa(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = no(this.source).reduce((e, t) => Math.max(e, (ya(t) ? t.priority : 0) + 1), 0))
        }
      };

      function Wa(e) {
        return !1 !== e.idle
      }

      function $a(e) {
        return !e.size || Array.from(e).every(Wa)
      }

      function Qa(e) {
        e.idle || (e.idle = !0, to(Ns(e), e => {
          e.done = !0
        }), ts(e, {
          type: "idle",
          parent: e
        }))
      }
      io.assign({
        createStringInterpolator: ys,
        to: (e, t) => new Ua(e, t)
      }), bo.advance;
      var Ya = r(84017);
      const Ja = /^--/;

      function ei(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Ja.test(e) || ri.hasOwnProperty(e) && ri[e] ? ("" + t).trim() : t + "px"
      }
      const ti = {};
      let ri = {
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
      };
      const ni = ["Webkit", "Ms", "Moz", "O"];
      ri = Object.keys(ri).reduce((e, t) => (ni.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), ri);
      const oi = /^(matrix3d|matrix|translate3d|translate[XYZ]?|scale3d|scale[XYZ]?|rotate3d|rotate[XYZ]?|skew[XY]?)$/,
        si = /^(translate)/,
        ai = /^(rotate|skew)/,
        ii = (e, t) => Jn.num(e) && 0 !== e ? e + t : e,
        di = (e, t) => Jn.arr(e) ? e.every(e => di(e, t)) : Jn.num(e) ? e === t : parseFloat(e) === t;
      var li = class extends Ls {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              s = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), s.push(e => [`translate3d(${e.map(e=>ii(e,"px")).join(",")})`, di(e, 0)])), ro(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), s.push(e => [e, "" === e]);
              else if (oi.test(t)) {
                if (delete n[t], Jn.und(e)) return;
                const r = si.test(t) ? "px" : ai.test(t) ? "deg" : "";
                o.push(no(e)), s.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${ii(o,r)})`, di(o, 0)] : e => [`${t}(${e.map(e=>ii(e,r)).join(",")})`, di(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new ci(o, s)), super(n)
          }
        },
        ci = class extends rs {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return to(this.inputs, (r, n) => {
              const o = Jo(r[0]),
                [s, a] = this.transforms[n](Jn.arr(o) ? o : r.map(Jo));
              e += " " + s, t = t && a
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && to(this.inputs, e => to(e, e => Yo(e) && os(e, this)))
          }
          observerRemoved(e) {
            0 == e && to(this.inputs, e => to(e, e => Yo(e) && ss(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ts(this, e)
          }
        };
      io.assign({
        batchedUpdates: Ya.unstable_batchedUpdates,
        createStringInterpolator: ys,
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
      const ui = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Ls(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            s = e => {
              const t = Bs(e) || "Anonymous";
              if (Jn.str(e)) e = s[e] || (s[e] = As(e, o));
              else {
                let t = e[Hs] ?? Fs.get(e);
                if (!t) {
                  t = As(e, o);
                  try {
                    e[Hs] = t
                  } catch {}
                  Fs.set(e, t)
                }
                e = t
              }
              return e.displayName = `Animated(${t})`, e
            };
          return ro(e, (t, r) => {
            Jn.arr(e) && (r = Bs(t)), s[r] = s(t)
          }), {
            animated: s
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute || !e.removeAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: s,
                scrollTop: a,
                scrollLeft: i,
                viewBox: d,
                ...l
              } = t,
              c = Object.values(l),
              u = Object.keys(l).map(t => r || e.hasAttribute(t) ? t : ti[t] || (ti[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            t.hasOwnProperty("children") && (e.textContent = s);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = ei(t, o[t]);
                Ja.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach((t, r) => {
              const n = c[r];
              void 0 !== n ? e.setAttribute(t, n) : e.removeAttribute(t)
            }), t.hasOwnProperty("className") && (void 0 !== n ? e.className = n : e.removeAttribute("class")), void 0 !== a && (e.scrollTop = a), void 0 !== i && (e.scrollLeft = i), t.hasOwnProperty("viewBox") && (void 0 !== d ? e.setAttribute("viewBox", d) : e.removeAttribute("viewBox"))
          },
          createAnimatedStyle: e => new li(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        fi = ui.animated;
      var pi = r(2458),
        hi = r(64239),
        mi = r(1913),
        vi = r(64334),
        yi = r(82449),
        gi = r(78595),
        bi = r(64190),
        wi = r(7470),
        _i = r(31270),
        Ci = r(50486),
        xi = r(92939),
        ji = r(91479),
        [Pi, Oi] = (0, mi.A)("Tooltip", [gi.Bk]),
        Si = (0, gi.Bk)(),
        ki = "TooltipProvider",
        Ri = 700,
        Ni = "tooltip.open",
        [Di, Ii] = Pi(ki),
        Ti = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Ri,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: s
          } = e, a = X.useRef(!0), i = X.useRef(!1), d = X.useRef(0);
          return X.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, R.jsx)(Di, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: X.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), a.current = !1)
            }, [n]),
            onClose: X.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => a.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: X.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: s
          })
        };
      Ti.displayName = ki;
      var Ei = "Tooltip",
        [Li, zi] = Pi(Ei),
        Mi = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: a,
            delayDuration: i
          } = e, d = Ii(Ei, e.__scopeTooltip), l = Si(t), [c, u] = X.useState(null), f = (0, yi.useId)(), p = X.useRef(0), h = a ?? d.disableHoverableContent, m = i ?? d.delayDuration, v = X.useRef(!1), [y, g] = (0, xi.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Ni))) : d.onClose(), s?.(e)
            },
            caller: Ei
          }), b = X.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), w = X.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, v.current = !1, g(!0)
          }, [g]), _ = X.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), C = X.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              v.current = !0, g(!0), p.current = 0
            }, m)
          }, [m, g]);
          return X.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, R.jsx)(gi.bL, {
            ...l,
            children: (0, R.jsx)(Li, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: X.useCallback(() => {
                d.isOpenDelayedRef.current ? C() : w()
              }, [d.isOpenDelayedRef, C, w]),
              onTriggerLeave: X.useCallback(() => {
                h ? _() : (window.clearTimeout(p.current), p.current = 0)
              }, [_, h]),
              onOpen: w,
              onClose: _,
              disableHoverableContent: h,
              children: r
            })
          })
        };
      Mi.displayName = Ei;
      var Vi = "TooltipTrigger",
        Ai = X.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = zi(Vi, r), s = Ii(Vi, r), a = Si(r), i = X.useRef(null), d = (0, hi.s)(t, i, o.onTriggerChange), l = X.useRef(!1), c = X.useRef(!1), u = X.useCallback(() => l.current = !1, []);
          return X.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, R.jsx)(gi.Mz, {
            asChild: !0,
            ...a,
            children: (0, R.jsx)(_i.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, pi.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || s.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, pi.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, pi.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, pi.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, pi.mK)(e.onBlur, o.onClose),
              onClick: (0, pi.mK)(e.onClick, o.onClose)
            })
          })
        });
      Ai.displayName = Vi;
      var qi = "TooltipPortal",
        [Hi, Fi] = Pi(qi, {
          forceMount: void 0
        }),
        Bi = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = zi(qi, t);
          return (0, R.jsx)(Hi, {
            scope: t,
            forceMount: r,
            children: (0, R.jsx)(wi.C, {
              present: r || s.open,
              children: (0, R.jsx)(bi.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Bi.displayName = qi;
      var Zi = "TooltipContent",
        Xi = X.forwardRef((e, t) => {
          const r = Fi(Zi, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...s
            } = e,
            a = zi(Zi, e.__scopeTooltip);
          return (0, R.jsx)(wi.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, R.jsx)($i, {
              side: o,
              ...s,
              ref: t
            }) : (0, R.jsx)(Gi, {
              side: o,
              ...s,
              ref: t
            })
          })
        }),
        Gi = X.forwardRef((e, t) => {
          const r = zi(Zi, e.__scopeTooltip),
            n = Ii(Zi, e.__scopeTooltip),
            o = X.useRef(null),
            s = (0, hi.s)(t, o),
            [a, i] = X.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = X.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = X.useCallback((e, t) => {
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
              i(s), u(!0)
            }, [u]);
          return X.useEffect(() => () => f(), [f]), X.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                t = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), X.useEffect(() => {
            if (a) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = d?.contains(t) || c?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: r,
                      y: n
                    } = e;
                    let o = !1;
                    for (let e = 0, s = t.length - 1; e < t.length; s = e++) {
                      const a = t[e],
                        i = t[s],
                        d = a.x,
                        l = a.y,
                        c = i.x,
                        u = i.y;
                      l > n != u > n && r < (c - d) * (n - l) / (u - l) + d && (o = !o)
                    }
                    return o
                  }(r, a);
                n ? f() : o && (f(), l())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [d, c, a, l, f]), (0, R.jsx)($i, {
            ...e,
            ref: s
          })
        }),
        [Ki, Ui] = Pi(Ei, {
          isInside: !1
        }),
        Wi = (0, Ci.createSlottable)("TooltipContent"),
        $i = X.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            ...i
          } = e, d = zi(Zi, r), l = Si(r), {
            onClose: c
          } = d;
          return X.useEffect(() => (document.addEventListener(Ni, c), () => document.removeEventListener(Ni, c)), [c]), X.useEffect(() => {
            if (d.trigger) {
              const e = e => {
                e.target instanceof Node && e.target.contains(d.trigger) && c()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, c]), (0, R.jsx)(vi.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, R.jsxs)(gi.UC, {
              "data-state": d.stateAttribute,
              ...l,
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
              children: [(0, R.jsx)(Wi, {
                children: n
              }), (0, R.jsx)(Ki, {
                scope: r,
                isInside: !0,
                children: (0, R.jsx)(ji.Root, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Xi.displayName = Zi;
      var Qi = "TooltipArrow",
        Yi = X.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Si(r);
          return Ui(Qi, r).isInside ? null : (0, R.jsx)(gi.i3, {
            ...o,
            ...n,
            ref: t
          })
        });
      Yi.displayName = Qi;
      var Ji = Ti,
        ed = Mi,
        td = Ai,
        rd = Bi,
        nd = Xi,
        od = Yi;
      const sd = (0, X.createContext)(null);

      function ad() {
        const e = (0, X.useContext)(sd);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const id = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [s = !1, a] = (0, Y.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, R.jsx)(Ji, {
            delayDuration: t,
            children: (0, R.jsx)(sd.Provider, {
              value: {
                isOpen: s,
                ...o
              },
              children: (0, R.jsx)(ed, {
                open: s,
                onOpenChange: a,
                children: e
              })
            })
          })
        },
        dd = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, R.jsx)(td, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        ld = (0, X.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: s = !0,
          sticky: a = "partial",
          ...i
        }, d) => {
          const {
            isOpen: l
          } = ad(), c = (0, Y.jt)(), u = fi(nd), f = Ga(l, {
            delay: l ? 0 : 200,
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            },
            config: ra.stiff,
            immediate: c
          }), p = (0, W.mergeProps)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: a,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: s,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, R.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        cd = (0, X.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, W.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, R.jsx)(od, {
            ...r,
            ref: t
          })
        }),
        ud = rd;

      function fd(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var pd = r(99136),
        hd = r(52184),
        md = r(5024),
        vd = r(85920),
        yd = ["PageUp", "PageDown"],
        gd = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        bd = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        wd = "Slider",
        [_d, Cd, xd] = (0, vd.N)(wd),
        [jd, Pd] = (0, mi.A)(wd, [xd]),
        [Od, Sd] = jd(wd),
        kd = X.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: s = 1,
            orientation: a = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: d = 0,
            defaultValue: l = [n],
            value: c,
            onValueChange: u = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: h,
            ...m
          } = e, v = X.useRef(new Set), y = X.useRef(0), g = X.useRef(!1), b = "horizontal" === a ? Dd : Id, [w, _] = X.useState(null), C = (0, hi.s)(t, _), [x = [], j] = (0, xi.useControllableState)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus({
                preventScroll: !0,
                focusVisible: g.current
              }), g.current = !1, u(e)
            }
          }), P = X.useRef(x), O = X.useRef(x);

          function S(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = $d(s),
              i = fd(Qd(Math.round((e - n) / s) * s + n, a), [n, o]);
            j((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort((e, t) => e - t)
              }(e, i, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map((t, r) => e[r + 1] - t)
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, d * s)) {
                y.current = n.indexOf(i);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return X.useEffect(() => {
            const e = h ? w?.ownerDocument.getElementById(h) : w?.closest("form");
            if (e instanceof HTMLFormElement) {
              const t = () => j(O.current);
              return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
            }
          }, [w, h, j]), (0, R.jsx)(Od, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: x,
            orientation: a,
            form: h,
            children: (0, R.jsx)(_d.Provider, {
              scope: e.__scopeSlider,
              children: (0, R.jsx)(_d.Slot, {
                scope: e.__scopeSlider,
                children: (0, R.jsx)(b, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...m,
                  ref: C,
                  onPointerDown: (0, pi.mK)(m.onPointerDown, () => {
                    i || (P.current = x, g.current = !1)
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
                    }(x, e);
                    S(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    S(e, y.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = P.current[y.current];
                    x[y.current] !== e && f(x)
                  },
                  onHomeKeyDown: () => {
                    i || (g.current = !0, S(n, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (g.current = !0, S(o, x.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      g.current = !0;
                      const r = yd.includes(e.key) || e.shiftKey && gd.includes(e.key) ? 10 : 1,
                        o = y.current,
                        a = function(e, {
                          min: t,
                          step: r,
                          direction: n,
                          multiplier: o
                        }) {
                          const s = $d(r),
                            a = (e - t) / r,
                            i = Math.round(a);
                          let d;
                          return d = Qd(i * r + t, s) === Qd(e, s) ? i + o * n : n > 0 ? Math.ceil(a) : Math.floor(a), Qd(d * r + t, s)
                        }(x[o], {
                          min: n,
                          step: s,
                          direction: t,
                          multiplier: r
                        });
                      S(a, o, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      kd.displayName = wd;
      var [Rd, Nd] = jd(wd, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Dd = X.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: s,
          onSlideStart: a,
          onSlideMove: i,
          onSlideEnd: d,
          onStepKeyDown: l,
          ...c
        } = e, [u, f] = X.useState(null), p = (0, hi.s)(t, f), h = X.useRef(void 0), m = (0, pd.jH)(o), v = "ltr" === m, y = v && !s || !v && s;

        function g(e) {
          const t = h.current || u.getBoundingClientRect(),
            o = Wd([0, t.width], y ? [r, n] : [n, r]);
          return h.current = t, o(e - t.left)
        }
        return (0, R.jsx)(Rd, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, R.jsx)(Td, {
            dir: m,
            "data-orientation": "horizontal",
            ...c,
            ref: p,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = g(e.clientX);
              a?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientX);
              i?.(t)
            },
            onSlideEnd: () => {
              h.current = void 0, d?.()
            },
            onStepKeyDown: e => {
              const t = bd[y ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Id = X.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = X.useRef(null), u = (0, hi.s)(t, c), f = X.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Wd([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, R.jsx)(Rd, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, R.jsx)(Td, {
            "data-orientation": "vertical",
            ...l,
            ref: u,
            style: {
              ...l.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = h(e.clientY);
              s?.(t)
            },
            onSlideMove: e => {
              const t = h(e.clientY);
              a?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, i?.()
            },
            onStepKeyDown: e => {
              const t = bd[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Td = X.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: s,
          onHomeKeyDown: a,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = Sd(wd, r);
        return (0, R.jsx)(_i.sG.span, {
          ...l,
          ref: t,
          onKeyDown: (0, pi.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : yd.concat(gd).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, pi.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus({
              preventScroll: !0,
              focusVisible: !1
            }) : n(e)
          }),
          onPointerMove: (0, pi.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, pi.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
          })
        })
      }), Ed = "SliderTrack", Ld = X.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Sd(Ed, r);
        return (0, R.jsx)(_i.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Ld.displayName = Ed;
      var zd = "SliderRange",
        Md = X.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Sd(zd, r), s = Nd(zd, r), a = X.useRef(null), i = (0, hi.s)(t, a), d = o.values.length, l = o.values.map(e => Ud(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, R.jsx)(_i.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: i,
            style: {
              ...e.style,
              [s.startEdge]: c + "%",
              [s.endEdge]: u + "%"
            }
          })
        });
      Md.displayName = zd;
      var Vd = "SliderThumb",
        [Ad, qd] = jd(Vd),
        Hd = "SliderThumbProvider";

      function Fd(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, s = Sd(Hd, t), a = Cd(t), [i, d] = X.useState(null), l = X.useMemo(() => i ? a().findIndex(e => e.ref.current === i) : -1, [a, i]), c = (0, md.X)(i), u = !i || !!s.form || !!i.closest("form"), f = s.values[l], p = r ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0), h = void 0 === f ? 0 : Ud(f, s.min, s.max);
        X.useEffect(() => {
          if (i) return s.thumbs.add(i), () => {
            s.thumbs.delete(i)
          }
        }, [i, s.thumbs]);
        const m = {
          value: f,
          name: p,
          form: s.form,
          isFormControl: u,
          index: l,
          thumb: i,
          onThumbChange: d,
          percent: h,
          size: c
        };
        return (0, R.jsx)(Ad, {
          scope: t,
          ...m,
          children: Yd(o) ? o(m) : n
        })
      }
      Fd.displayName = Hd;
      var Bd = "SliderThumbTrigger",
        Zd = X.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Sd(Bd, r), s = Nd(Bd, r), {
            index: a,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = qd(Bd, r), u = (0, hi.s)(t, c), f = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(a, o.values.length), p = l?.[s.size], h = p ? function(e, t, r) {
            const n = e / 2;
            return (n - Wd([0, 50], [0, n])(t) * r) * r
          }(p, d, s.direction) : 0;
          return (0, R.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${d}% + ${h}px)`
            },
            children: (0, R.jsx)(_d.ItemSlot, {
              scope: r,
              children: (0, R.jsx)(_i.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || f,
                "aria-valuemin": o.min,
                "aria-valuenow": i,
                "aria-valuemax": o.max,
                "aria-orientation": o.orientation,
                "data-orientation": o.orientation,
                "data-disabled": o.disabled ? "" : void 0,
                tabIndex: o.disabled ? void 0 : 0,
                ...n,
                ref: u,
                style: void 0 === i ? {
                  display: "none"
                } : e.style,
                onFocus: (0, pi.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = a
                })
              })
            })
          })
        });
      Zd.displayName = Bd;
      var Xd = X.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          name: n,
          ...o
        } = e;
        return (0, R.jsx)(Fd, {
          __scopeSlider: r,
          name: n,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: n
          }) => (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(Zd, {
              ...o,
              ref: t,
              __scopeSlider: r
            }), n ? (0, R.jsx)(Kd, {
              __scopeSlider: r
            }, e) : null]
          })
        })
      });
      Xd.displayName = Vd;
      var Gd = "SliderBubbleInput",
        Kd = X.forwardRef(({
          __scopeSlider: e,
          ...t
        }, r) => {
          const {
            value: n,
            name: o,
            form: s
          } = qd(Gd, e), a = X.useRef(null), i = (0, hi.s)(a, r), d = (0, hd.Z)(n);
          return X.useEffect(() => {
            const e = a.current;
            if (!e) return;
            const t = window.HTMLInputElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (d !== n && r) {
              const t = new Event("input", {
                bubbles: !0
              });
              r.call(e, n), e.dispatchEvent(t)
            }
          }, [d, n]), (0, R.jsx)(_i.sG.input, {
            style: {
              display: "none"
            },
            name: o,
            form: s,
            ...t,
            ref: i,
            defaultValue: n
          })
        });

      function Ud(e, t, r) {
        return fd(100 / (r - t) * (e - t), [0, 100])
      }

      function Wd(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function $d(e) {
        if (!Number.isFinite(e)) return 0;
        const t = e.toString();
        if (t.includes("e")) {
          const [e, r] = t.split("e"), n = e.split(".")[1] || "", o = Number(r);
          return Math.max(0, n.length - o)
        }
        const r = t.split(".")[1];
        return r ? r.length : 0
      }

      function Qd(e, t) {
        const r = Math.pow(10, t);
        return Math.round(e * r) / r
      }

      function Yd(e) {
        return "function" == typeof e
      }
      Kd.displayName = Gd;
      var Jd = r(6195);
      const el = (0, X.createContext)({
          triggerRef: (0, X.createRef)(),
          triggerBorderRef: (0, X.createRef)(),
          thumbnailRef: (0, X.createRef)(),
          openIconRef: (0, X.createRef)(),
          overlayRef: (0, X.createRef)(),
          contentRef: (0, X.createRef)(),
          containerRef: (0, X.createRef)(),
          imageRef: (0, X.createRef)(),
          placeholderRef: (0, X.createRef)(),
          zoomPanRef: (0, X.createRef)(),
          captionRef: (0, X.createRef)(),
          controlsRef: (0, X.createRef)(),
          closeRef: (0, X.createRef)(),
          zoomRef: (0, X.createRef)(),
          zoomInRef: (0, X.createRef)(),
          zoomSliderRef: (0, X.createRef)(),
          zoomOutRef: (0, X.createRef)(),
          resetRef: (0, X.createRef)(),
          downloadRef: (0, X.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        tl = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: s = 300,
          zoomLevelStep: a = 100,
          clickAction: i = "close",
          doubleTapAction: d,
          tapAction: l,
          hideTrigger: c = !0,
          ...u
        }) => {
          const f = (0, ee.Ym)(),
            p = (0, Y.rl)(),
            h = (0, X.useRef)(null),
            m = (0, X.useRef)(null),
            v = (0, X.useRef)(null),
            y = (0, X.useRef)(null),
            g = (0, X.useRef)(null),
            b = (0, X.useRef)(null),
            w = (0, X.useRef)(null),
            _ = (0, X.useRef)(null),
            C = (0, X.useRef)(null),
            x = (0, X.useRef)(null),
            j = (0, X.useRef)(null),
            P = (0, X.useRef)(null),
            O = (0, X.useRef)(null),
            S = (0, X.useRef)(null),
            k = (0, X.useRef)(null),
            N = (0, X.useRef)(null),
            D = (0, X.useRef)(null),
            I = (0, X.useRef)(null),
            T = (0, X.useRef)(null),
            [E = !1, L] = (0, Y.ic)({
              prop: t || n,
              onChange: r
            }),
            z = (0, X.useRef)(null);
          return z.current || (z.current = new Sn({
            zoomLevelOptions: {
              max: s,
              min: o,
              step: a
            },
            actionOptions: {
              click: i,
              tap: l || (p ? "toggle-controls" : "close"),
              doubleTap: d || (p ? "zoom" : "none")
            }
          })), (0, R.jsx)(mn, {
            messages: vn,
            locale: f,
            children: (0, R.jsx)(el.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: m,
                thumbnailRef: v,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: _,
                imageRef: C,
                placeholderRef: x,
                captionRef: j,
                controlsRef: P,
                closeRef: O,
                zoomRef: S,
                zoomInRef: k,
                zoomSliderRef: N,
                zoomOutRef: D,
                resetRef: I,
                downloadRef: T,
                open: E,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: z.current
              },
              children: (0, R.jsx)(nl, {
                ...u
              })
            })
          })
        },
        rl = (0, X.createContext)({
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
        nl = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, X.useContext)(el), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = _t(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: s,
              triggerRef: a,
              triggerBorderRef: i,
              thumbnailRef: d,
              containerRef: l,
              zoomPanRef: c,
              placeholderRef: u,
              imageRef: f
            } = (0, X.useContext)(el), p = (0, X.useRef)(null);
            p.current || (p.current = mt.gsap.timeline({
              defaults: ln
            }));
            const h = (0, X.useCallback)(e => {
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
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), mt.gsap.set([u.current, f.current], {
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
                }), mt.gsap.set([f.current], {
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
                }), p.current.to([l.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), n && p.current.to([a.current, i.current], {
                  opacity: 0,
                  duration: 0
                }), p.current.to([u.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  borderRadius: t.opener.placeholderRadius,
                  clipPath: t.opener.placeholderClip,
                  duration: 0
                }), p.current.fromTo([l.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  borderRadius: () => t.opener.placeholderRadius
                }, {
                  x: 0,
                  y: 0,
                  width: () => t.panAreaSize.w,
                  height: () => t.panAreaSize.h,
                  borderRadius: 0,
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
                  opacity: t.opener.containerOpacity,
                  borderRadius: () => t.opener.placeholderRadius,
                  clipPath: () => t.opener.placeholderClip
                }, {
                  opacity: 1,
                  borderRadius: 0,
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
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
                }, 0), p.current.fromTo([s.current], {
                  opacity: 0,
                  [un]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [un]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Rr(f.current), t.closing || (mt.gsap.set([f.current], {
                  visibility: "visible",
                  ...cn
                }), mt.gsap.set([u.current], {
                  visibility: "hidden",
                  ...cn
                }))))
              }),
              v = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              y = (0, X.useCallback)(async e => {
                e || (window.addEventListener("click", h), await v(), window.removeEventListener("click", h)), r(e)
              }, [r]),
              g = (0, X.useCallback)(() => y(!1), [y]);
            return {
              onOpenChange: y,
              openAnim: m,
              close: g
            }
          })(), {
            update: s,
            zoomIn: a,
            zoomOut: i,
            zoomTo: d,
            resetZoom: l,
            toggleControls: c
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = _t(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: s,
              containerRef: a,
              placeholderRef: i
            } = (0, X.useContext)(el), d = t(async e => {
              r.zoomTo(e), mt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...cn
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), mt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...cn
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), mt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...cn
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), mt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...cn
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              mt.gsap.to([s.current], {
                opacity: e,
                [un]: t,
                ...cn
              })
            }), p = t(async () => {
              mt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...cn
              })
            }), h = (0, X.useCallback)(() => {
              n.current && o.current && (mt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...cn
              }), mt.gsap.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...cn
              }), mt.gsap.set([a.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, X.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", h), window.addEventListener("resize", r.resize.bind(r)), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", p), r.removeEventListener("toggle-controls", f), r.removeEventListener("resize", h), window.removeEventListener("resize", r.resize.bind(r))
            }), []), {
              zoomIn: l,
              zoomOut: c,
              zoomTo: d,
              resetZoom: u,
              toggleControls: f,
              update: p
            }
          })({
            close: o
          }), u = (0, W.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, R.jsx)(rl.Provider, {
            value: {
              update: s,
              openAnim: n,
              close: o,
              zoomIn: a,
              zoomOut: i,
              zoomTo: d,
              resetZoom: l,
              toggleControls: c,
              onOpenChange: r
            },
            children: (0, R.jsx)(Jd.Root, {
              ...u
            })
          })
        },
        ol = (0, X.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, hn.A)(),
            {
              triggerRef: s,
              triggerBorderRef: a,
              altText: i
            } = (0, X.useContext)(el),
            d = (0, Y.UP)(s, n),
            l = (0, W.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Rn.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, R.jsx)(Jd.Trigger, {
            ref: d,
            ...l,
            children: (0, R.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: a,
              children: (0, R.jsx)(J.xV, {
                children: t
              })
            })
          })
        }),
        sl = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, X.useContext)(el), s = (0, Y.UP)(o, n), a = (0, W.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? J.DX : "img";
          return (0, R.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        al = (0, X.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, X.useContext)(el), o = (0, Y.UP)(n, r), s = (0, W.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), a = e ? J.DX : ue.Maximize2;
          return (0, R.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        il = ({
          ...e
        }) => (0, R.jsx)(Jd.Portal, {
          ...e
        }),
        dl = (0, X.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, X.useContext)(el), o = (0, Y.UP)(n, r), s = (0, W.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, R.jsx)(Jd.Overlay, {
            ref: o,
            ...s
          })
        }),
        ll = (0, X.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, X.useContext)(rl), {
            contentRef: s,
            altText: a,
            triggerRef: i
          } = (0, X.useContext)(el), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, X.useContext)(el), [t, r] = (0, X.useState)(e.getCursor()), n = (0, X.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, X.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = (0, kn.m)("dark"), c = (0, Y.UP)(s, n), u = (0, W.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, ce.clsx)("foundry_1a74xwb9", l),
            style: {
              cursor: d
            }
          });
          return (0, R.jsxs)(Jd.Content, {
            ref: c,
            ...u,
            children: [(0, R.jsx)(J.s6, {
              children: (0, R.jsx)(Jd.Title, {
                children: a
              })
            }), t]
          })
        }),
        cl = (0, X.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, X.useContext)(el);
          (() => {
            const {
              contextSafe: e
            } = _t(), {
              toggleControls: t
            } = (0, X.useContext)(rl), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: s,
              slide: a
            } = (0, X.useContext)(el), i = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.dragHandler.handleDrag(e), a.dragHandler.animate && !a.closing && (mt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...cn
              }), mt.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...cn
              }), mt.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...cn
              })))
            }), d = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.scrollWheel.handleWheel(e), a.closing || mt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...cn
              }))
            }), l = e(e => {
              !e.pinching && !a.zoomHandler.pinching || a.dragHandler.dragging || (a.zoomHandler.handleZoom(e), a.zoomHandler.animate && !a.closing && (mt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...cn
              }), mt.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...cn
              }), mt.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...cn
              })))
            }), c = (0, X.useCallback)(() => {
              a.controlsVisible || t()
            }, [, t]);
            (0, Y.iQ)({
              ref: s,
              onFocusIn: c
            }), kr({
              onWheel: d,
              onDrag: i,
              onPinch: l
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
          const s = (0, Y.UP)(o, n),
            a = (0, W.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, R.jsx)("div", {
            ref: s,
            ...a,
            children: (0, R.jsxs)(ul, {
              children: [(0, R.jsx)(fl, {}), t]
            })
          })
        }),
        ul = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, X.useContext)(el), s = (0, Y.UP)(o, n), a = (0, W.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? J.DX : "div";
          return (0, R.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        fl = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, X.useContext)(el), s = (0, Y.UP)(o, n), a = (0, W.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? J.DX : "img";
          return (0, R.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        pl = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, X.useContext)(el), s = (0, Y.UP)(o, n), a = (0, W.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? J.DX : "img";
          return (0, R.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        hl = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, X.useContext)(el), s = (0, Y.UP)(o, n), a = (0, W.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? J.DX : "p";
          return (0, R.jsx)(Jd.Description, {
            asChild: !0,
            children: (0, R.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        ml = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, X.useContext)(el);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, X.useContext)(rl);
            Jr(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), Jr(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), Jr("r", n, {
              enabled: e,
              preventDefault: !0
            }), Jr("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const s = (0, Y.UP)(o, n),
            a = (0, W.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? J.DX : "div";
          return (0, R.jsx)($r, {
            children: (0, R.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        vl = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, R.jsx)(R.Fragment, {
            children: n
          });
          const s = (0, W.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, R.jsxs)(id, {
            delayDuration: 0,
            children: [(0, R.jsx)(dd, {
              children: n
            }), (0, R.jsxs)(ld, {
              ...s,
              children: [(0, R.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, R.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, R.jsx)(cd, {})]
            })]
          })
        },
        yl = (0, X.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, W.mergeProps)(e, {
            isInline: !0
          });
          return (0, R.jsx)(Dn, {
            ref: t,
            ...r
          })
        }),
        gl = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, s) {
          const a = (0, hn.A)(),
            {
              zoomRef: i
            } = (0, X.useContext)(el),
            {
              canZoomIn: d,
              zoomIn: l,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: h,
              zoomTo: m
            } = (() => {
              const {
                slide: e
              } = (0, X.useContext)(el), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, X.useContext)(rl), [o, s] = (0, X.useState)(!1), [a, i] = (0, X.useState)(!1), [d, l] = (0, X.useState)(0), [c, u] = (0, X.useState)(0), [f, p] = (0, X.useState)(0), h = (0, X.useCallback)(() => {
                s(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, X.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, X.useEffect)(() => (e.addEventListener("zoom", h), () => {
                e.removeEventListener("zoom", h)
              }), [h]), {
                zoomTo: m,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: a,
                zoomProgress: d,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            v = (0, Y.UP)(i, s),
            y = (0, W.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? J.DX : "div";
          return (0, R.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, R.jsx)(vl, {
              side: "left",
              enabled: r,
              content: a.formatMessage(Rn.ZoomInButtonLabel),
              metadata: a.formatMessage(Rn.ZoomInButtonTooltip, {
                shortcut: (0, R.jsx)(yl, {
                  shortcut: "+"
                })
              }),
              children: (0, R.jsx)(Ie, {
                label: a.formatMessage(Rn.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: dn({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, R.jsxs)(kd, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, R.jsx)(Ld, {
                className: "foundry_1a74xwbu",
                children: (0, R.jsx)(Md, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, R.jsx)(vl, {
                side: "left",
                enabled: r,
                content: a.formatMessage(Rn.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, R.jsx)(Xd, {
                  className: "foundry_1a74xwbw",
                  children: (0, R.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, R.jsx)(vl, {
              side: "left",
              enabled: r,
              content: a.formatMessage(Rn.ZoomOutButtonLabel),
              metadata: a.formatMessage(Rn.ZoomOutButtonTooltip, {
                shortcut: (0, R.jsx)(yl, {
                  shortcut: "-"
                })
              }),
              children: (0, R.jsx)(Ie, {
                label: a.formatMessage(Rn.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: dn({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, R.jsx)(J.xV, {
              children: n
            })]
          })
        }),
        bl = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const s = (0, hn.A)(),
            {
              closeRef: a
            } = (0, X.useContext)(el),
            i = (0, Y.UP)(a, o),
            d = (0, W.mergeProps)(n, {
              "data-testid": e,
              className: an({
                styled: !t
              })
            }),
            l = t ? (0, R.jsx)(J.DX, {
              ref: i,
              ...d
            }) : (0, R.jsx)(Ie, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: s.formatMessage(Rn.CloseButtonLabel)
            });
          return (0, R.jsx)(vl, {
            side: "right",
            enabled: r,
            content: s.formatMessage(Rn.CloseButtonLabel),
            metadata: s.formatMessage(Rn.CloseButtonTooltip, {
              shortcut: (0, R.jsx)(yl, {
                shortcut: "Esc"
              })
            }),
            children: (0, R.jsx)(Jd.Close, {
              asChild: !0,
              children: l
            })
          })
        }),
        wl = (0, X.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, hn.A)(),
            s = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, X.useContext)(el), {
                contextSafe: r
              } = _t(), {
                resetZoom: n
              } = (0, X.useContext)(rl), [o, s] = (0, X.useState)(e.currZoomLevel !== e.zoomLevels.initial), a = r(e => {
                mt.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...cn
                })
              }), i = (0, X.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                s(t), a(t)
              }, [s]);
              return (0, X.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: a
            } = (0, X.useContext)(el),
            i = (0, Y.UP)(a, n),
            d = (0, W.mergeProps)(r, s, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, R.jsx)(vl, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Rn.ResetZoomButtonLabel),
            metadata: o.formatMessage(Rn.ResetZoomButtonTooltip, {
              shortcut: (0, R.jsx)(yl, {
                shortcut: "R"
              })
            }),
            children: (0, R.jsx)(Ie, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Rn.ResetZoomButtonLabel)
            })
          })
        }),
        _l = (0, X.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, hn.A)(),
            {
              downloadRef: s,
              imageRef: a
            } = (0, X.useContext)(el),
            i = (0, Y.UP)(s, n),
            d = (0, W.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, R.jsx)(vl, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Rn.DownloadButtonTooltip),
            children: (0, R.jsx)(Ie, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Rn.DownloadButtonTooltip),
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
              })(a.current)
            })
          })
        }),
        Cl = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var xl = r(98905);

      function jl(e) {
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

      function Pl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ol(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pl(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = jl(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Sl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var kl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rl = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ol(Ol({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) kl(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sl(e.variantClassNames, e => Sl(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_i6k0ds0 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
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
      const Nl = (0, X.createContext)(null);

      function Dl() {
        const e = (0, X.useContext)(Nl);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Il = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: s = "neutral",
          ...a
        }, i) => {
          const d = (0, W.mergeProps)({
              className: Rl({
                status: s
              }),
              "data-testid": t
            }, a),
            l = r ? J.DX : "div";
          return (0, R.jsx)(Nl.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: s,
              ...a
            },
            children: (0, R.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        Tl = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Dl(), s = (0, W.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: ue.Check,
            invalid: ue.X,
            neutral: ue.TriangleAlert
          }, i = t ? J.DX : a[o];
          return (0, R.jsx)(i, {
            ref: n,
            ...s
          })
        }),
        El = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            errorId: a
          } = Dl(), i = (0, W.mergeProps)({
            "data-testid": t,
            id: a || s
          }, n), d = r ? J.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var Ll = r(94660),
        zl = r(10198),
        Ml = "ScrollArea",
        [Vl, Al] = (0, mi.A)(Ml),
        [ql, Hl] = Vl(Ml),
        Fl = X.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...a
          } = e, [i, d] = X.useState(null), [l, c] = X.useState(null), [u, f] = X.useState(null), [p, h] = X.useState(null), [m, v] = X.useState(null), [y, g] = X.useState(0), [b, w] = X.useState(0), [_, C] = X.useState(!1), [x, j] = X.useState(!1), P = (0, hi.s)(t, d), O = (0, pd.jH)(o);
          return (0, R.jsx)(ql, {
            scope: r,
            type: n,
            dir: O,
            scrollHideDelay: s,
            scrollArea: i,
            viewport: l,
            onViewportChange: c,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: h,
            scrollbarXEnabled: _,
            onScrollbarXEnabledChange: C,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: x,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, R.jsx)(_i.sG.div, {
              dir: O,
              ...a,
              ref: P,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        });
      Fl.displayName = Ml;
      var Bl = "ScrollAreaViewport",
        Zl = X.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...s
          } = e, a = Hl(Bl, r), i = X.useRef(null), d = (0, hi.s)(t, i, a.onViewportChange);
          return (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(Xl, {
              nonce: o
            }), (0, R.jsx)(_i.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: d,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, R.jsx)("div", {
                ref: a.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        });
      Zl.displayName = Bl;
      var Xl = X.memo(({
          nonce: e
        }) => (0, R.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, t) => e.nonce === t.nonce),
        Gl = "ScrollAreaScrollbar",
        Kl = X.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Hl(Gl, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: a
          } = o, i = "horizontal" === e.orientation;
          return X.useEffect(() => (i ? s(!0) : a(!0), () => {
            i ? s(!1) : a(!1)
          }), [i, s, a]), "hover" === o.type ? (0, R.jsx)(Ul, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, R.jsx)(Wl, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, R.jsx)($l, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, R.jsx)(Ql, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        });
      Kl.displayName = Gl;
      var Ul = X.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Hl(Gl, e.__scopeScrollArea), [s, a] = X.useState(!1);
          return X.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), a(!0)
                },
                n = () => {
                  t = window.setTimeout(() => a(!1), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, R.jsx)(wi.C, {
            present: r || s,
            children: (0, R.jsx)($l, {
              "data-state": s ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Wl = X.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Hl(Gl, e.__scopeScrollArea), s = "horizontal" === e.orientation, a = vc(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, X.useReducer((e, t) => l[e][t] ?? e, "hidden"));
          var l;
          return X.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), X.useEffect(() => {
            const e = o.viewport,
              t = s ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (d("SCROLL"), a()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, s, d, a]), (0, R.jsx)(wi.C, {
            present: r || "hidden" !== i,
            children: (0, R.jsx)(Ql, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, pi.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, pi.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        $l = X.forwardRef((e, t) => {
          const r = Hl(Gl, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [s, a] = X.useState(!1),
            i = "horizontal" === e.orientation,
            d = vc(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(i ? e : t)
              }
            }, 10);
          return yc(r.viewport, d), yc(r.content, d), (0, R.jsx)(wi.C, {
            present: n || s,
            children: (0, R.jsx)(Ql, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Ql = X.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Hl(Gl, e.__scopeScrollArea), s = X.useRef(null), a = X.useRef(0), [i, d] = X.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = cc(i.viewport, i.content), c = {
            ...n,
            sizes: i,
            onSizesChange: d,
            hasThumb: Boolean(l > 0 && l < 1),
            onThumbChange: e => s.current = e,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: e => a.current = e
          };

          function u(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = uc(r),
                s = t || o / 2,
                a = o - s,
                i = r.scrollbar.paddingStart + s,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                l = r.content - r.viewport;
              return pc([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, a.current, i, t)
          }
          return "horizontal" === r ? (0, R.jsx)(Yl, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = fc(o.viewport.scrollLeft, i, o.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, R.jsx)(Jl, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = fc(o.viewport.scrollTop, i);
                s.current.style.transform = `translate3d(0, ${e}px, 0)`
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
        Yl = X.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = Hl(Gl, e.__scopeScrollArea), [a, i] = X.useState(), d = X.useRef(null), l = (0, hi.s)(t, d, s.onScrollbarXChange);
          return X.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, R.jsx)(rc, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": uc(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), hc(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: lc(a.paddingLeft),
                  paddingEnd: lc(a.paddingRight)
                }
              })
            }
          })
        }),
        Jl = X.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = Hl(Gl, e.__scopeScrollArea), [a, i] = X.useState(), d = X.useRef(null), l = (0, hi.s)(t, d, s.onScrollbarYChange);
          return X.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, R.jsx)(rc, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": uc(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), hc(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: lc(a.paddingTop),
                  paddingEnd: lc(a.paddingBottom)
                }
              })
            }
          })
        }),
        [ec, tc] = Vl(Gl),
        rc = X.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: s,
            onThumbPointerUp: a,
            onThumbPointerDown: i,
            onThumbPositionChange: d,
            onDragScroll: l,
            onWheelScroll: c,
            onResize: u,
            ...f
          } = e, p = Hl(Gl, r), [h, m] = X.useState(null), v = (0, hi.s)(t, m), y = X.useRef(null), g = X.useRef(""), b = p.viewport, w = n.content - n.viewport, _ = (0, Ll.c)(c), C = (0, Ll.c)(d), x = vc(u, 10);

          function j(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              l({
                x: t,
                y: r
              })
            }
          }
          return X.useEffect(() => {
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
          }, [b, h, w, _]), X.useEffect(C, [n, C]), yc(h, x), yc(p.content, x), (0, R.jsx)(ec, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, Ll.c)(s),
            onThumbPointerUp: (0, Ll.c)(a),
            onThumbPositionChange: C,
            onThumbPointerDown: (0, Ll.c)(i),
            children: (0, R.jsx)(_i.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, pi.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, pi.mK)(e.onPointerMove, j),
              onPointerUp: (0, pi.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        nc = "ScrollAreaThumb",
        oc = X.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = tc(nc, e.__scopeScrollArea);
          return (0, R.jsx)(wi.C, {
            present: r || o.hasThumb,
            children: (0, R.jsx)(sc, {
              ref: t,
              ...n
            })
          })
        }),
        sc = X.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, s = Hl(nc, r), a = tc(nc, r), {
            onThumbPositionChange: i
          } = a, d = (0, hi.s)(t, a.onThumbChange), l = X.useRef(void 0), c = vc(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return X.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = mc(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [s.viewport, c, i]), (0, R.jsx)(_i.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, pi.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, pi.mK)(e.onPointerUp, a.onThumbPointerUp)
          })
        });
      oc.displayName = nc;
      var ac = "ScrollAreaCorner",
        ic = X.forwardRef((e, t) => {
          const r = Hl(ac, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, R.jsx)(dc, {
            ...e,
            ref: t
          }) : null
        });
      ic.displayName = ac;
      var dc = X.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Hl(ac, r), [s, a] = X.useState(0), [i, d] = X.useState(0), l = Boolean(s && i), {
          onCornerWidthChange: c,
          onCornerHeightChange: u
        } = o;
        return yc(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), yc(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        }), X.useEffect(() => () => {
          c(0), u(0)
        }, [c, u]), l ? (0, R.jsx)(_i.sG.div, {
          ...n,
          ref: t,
          style: {
            width: s,
            height: i,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function lc(e) {
        return e ? parseInt(e, 10) : 0
      }

      function cc(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function uc(e) {
        const t = cc(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function fc(e, t, r = "ltr") {
        const n = uc(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          s = t.scrollbar.size - o,
          a = t.content - t.viewport,
          i = s - n,
          d = fd(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return pc([0, a], [0, i])(d)
      }

      function pc(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function hc(e, t) {
        return e > 0 && e < t
      }
      var mc = (e, t = () => {}) => {
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
            a = r.left !== s.left,
            i = r.top !== s.top;
          (a || i) && t(), r = s, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function vc(e, t) {
        const r = (0, Ll.c)(e),
          n = X.useRef(0);
        return X.useEffect(() => () => window.clearTimeout(n.current), []), X.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function yc(e, t) {
        const r = (0, Ll.c)(t);
        (0, zl.N)(() => {
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
      var gc = Fl,
        bc = Zl,
        wc = Kl,
        _c = oc,
        Cc = ic,
        xc = r(38174),
        jc = r(95745),
        Pc = r(45787),
        Oc = r(59113),
        Sc = [" ", "Enter", "ArrowUp", "ArrowDown"],
        kc = [" ", "Enter"],
        Rc = "Select",
        [Nc, Dc, Ic] = (0, vd.N)(Rc),
        [Tc, Ec] = (0, mi.A)(Rc, [Ic, gi.Bk]),
        Lc = (0, gi.Bk)(),
        [zc, Mc] = Tc(Rc),
        [Vc, Ac] = Tc(Rc);

      function qc(e) {
        const {
          __scopeSelect: t,
          children: r,
          open: n,
          defaultOpen: o,
          onOpenChange: s,
          value: a,
          defaultValue: i,
          onValueChange: d,
          dir: l,
          name: c,
          autoComplete: u,
          disabled: f,
          required: p,
          form: h,
          internal_do_not_use_render: m
        } = e, v = Lc(t), [y, g] = X.useState(null), [b, w] = X.useState(null), [_, C] = X.useState(!1), x = (0, pd.jH)(l), [j, P] = (0, xi.useControllableState)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: s,
          caller: Rc
        }), [O, S] = (0, xi.useControllableState)({
          prop: a,
          defaultProp: i,
          onChange: d,
          caller: Rc
        }), k = X.useRef(null), N = X.useRef(O);
        X.useEffect(() => {
          const e = h ? y?.ownerDocument.getElementById(h) : y?.form;
          if (e instanceof HTMLFormElement) {
            const t = () => S(N.current);
            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
          }
        }, [h, y, S]);
        const D = !y || !!h || !!y.closest("form"),
          [I, T] = X.useState(new Set),
          E = (0, yi.useId)(),
          L = Array.from(I).map(e => e.props.value).join(";"),
          z = X.useCallback(e => {
            T(t => new Set(t).add(e))
          }, []),
          M = X.useCallback(e => {
            T(t => {
              const r = new Set(t);
              return r.delete(e), r
            })
          }, []),
          V = {
            required: p,
            trigger: y,
            onTriggerChange: g,
            valueNode: b,
            onValueNodeChange: w,
            valueNodeHasChildren: _,
            onValueNodeHasChildrenChange: C,
            contentId: E,
            value: O,
            onValueChange: S,
            open: j,
            onOpenChange: P,
            dir: x,
            triggerPointerDownPosRef: k,
            disabled: f,
            name: c,
            autoComplete: u,
            form: h,
            nativeOptions: I,
            nativeSelectKey: L,
            isFormControl: D
          };
        return (0, R.jsx)(gi.bL, {
          ...v,
          children: (0, R.jsx)(zc, {
            scope: t,
            ...V,
            children: (0, R.jsx)(Nc.Provider, {
              scope: t,
              children: (0, R.jsx)(Vc, {
                scope: t,
                onNativeOptionAdd: z,
                onNativeOptionRemove: M,
                children: ku(m) ? m(V) : r
              })
            })
          })
        })
      }
      qc.displayName = "SelectProvider";
      var Hc = e => {
        const {
          __scopeSelect: t,
          children: r,
          ...n
        } = e;
        return (0, R.jsx)(qc, {
          __scopeSelect: t,
          ...n,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, R.jsxs)(R.Fragment, {
            children: [r, e ? (0, R.jsx)(Su, {
              __scopeSelect: t
            }) : null]
          })
        })
      };
      Hc.displayName = Rc;
      var Fc = "SelectTrigger",
        Bc = X.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, s = Lc(r), a = Mc(Fc, r), i = a.disabled || n, d = (0, hi.s)(t, a.onTriggerChange), l = Dc(r), c = X.useRef("touch"), [u, f, p] = Nu(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === a.value),
              n = Du(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          }), h = e => {
            i || (a.onOpenChange(!0), p()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, R.jsx)(gi.Mz, {
            asChild: !0,
            ...s,
            children: (0, R.jsx)(_i.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": a.open ? a.contentId : void 0,
              "aria-expanded": a.open,
              "aria-required": a.required,
              "aria-autocomplete": "none",
              dir: a.dir,
              "data-state": a.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": Ru(a.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, pi.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && h(e)
              }),
              onPointerDown: (0, pi.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: (0, pi.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Sc.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      Bc.displayName = Fc;
      var Zc = "SelectValue",
        Xc = X.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: s,
            placeholder: a = "",
            ...i
          } = e, d = Mc(Zc, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== s, u = (0, hi.s)(t, d.onValueNodeChange);
          (0, zl.N)(() => {
            l(c)
          }, [l, c]);
          const f = Ru(d.value);
          return (0, R.jsx)(_i.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, R.jsx)(X.Fragment, {
              children: f ? a : s
            }, f ? "placeholder" : "value")
          })
        });
      Xc.displayName = Zc;
      var Gc = X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, R.jsx)(_i.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Gc.displayName = "SelectIcon";
      var Kc = "SelectPortal",
        [Uc, Wc] = Tc(Kc, {
          forceMount: void 0
        }),
        $c = e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, R.jsx)(Uc, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, R.jsx)(bi.Portal, {
              asChild: !0,
              ...n
            })
          })
        };
      $c.displayName = Kc;
      var Qc = "SelectContent",
        Yc = X.forwardRef((e, t) => {
          const r = Wc(Qc, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Mc(Qc, e.__scopeSelect),
            [a, i] = X.useState();
          return (0, zl.N)(() => {
            i(new DocumentFragment)
          }, []), (0, R.jsx)(wi.C, {
            present: n || s.open,
            children: ({
              present: e
            }) => e ? (0, R.jsx)(ou, {
              ...o,
              ref: t
            }) : (0, R.jsx)(Jc, {
              ...o,
              fragment: a
            })
          })
        });
      Yc.displayName = Qc;
      var Jc = X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          fragment: o
        } = e;
        return o ? Ya.createPortal((0, R.jsx)(tu, {
          scope: r,
          children: (0, R.jsx)(Nc.Slot, {
            scope: r,
            children: (0, R.jsx)("div", {
              ref: t,
              children: n
            })
          })
        }), o) : null
      });
      Jc.displayName = "SelectContentFragment";
      var eu = 10,
        [tu, ru] = Tc(Qc),
        nu = (0, Ci.createSlot)("SelectContent.RemoveScroll"),
        ou = X.forwardRef((e, t) => {
          const {
            __scopeSelect: r
          } = e, {
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
          } = e, g = Mc(Qc, r), [b, w] = X.useState(null), [_, C] = X.useState(null), x = (0, hi.s)(t, w), [j, P] = X.useState(null), [O, S] = X.useState(null), k = Dc(r), [N, D] = X.useState(!1), I = X.useRef(!1);
          X.useEffect(() => {
            if (b) return (0, Pc.Eq)(b)
          }, [b]), (0, xc.Oh)();
          const T = X.useCallback(e => {
              const [t, ...r] = k().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && _ && (_.scrollTop = 0), r === n && _ && (_.scrollTop = _.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [k, _]),
            E = X.useCallback(() => T([j, b]), [T, j, b]);
          X.useEffect(() => {
            N && E()
          }, [N, E]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: z
          } = g;
          X.useEffect(() => {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : r.composedPath().includes(b) || L(!1), document.removeEventListener("pointermove", t), z.current = null
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
          }, [b, L, z]), X.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [M, V] = Nu(e => {
            const t = k().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Du(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), A = X.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (P(e), n && (I.current = !0))
          }, [g.value]), q = X.useCallback(() => b?.focus(), [b]), H = X.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && S(e)
          }, [g.value]), F = "popper" === n ? au : su, B = F === au ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v
          } : {};
          return (0, R.jsx)(tu, {
            scope: r,
            content: b,
            viewport: _,
            onViewportChange: C,
            itemRefCallback: A,
            selectedItem: j,
            onItemLeave: q,
            itemTextRefCallback: H,
            focusSelectedItem: E,
            selectedItemText: O,
            position: n,
            isPositioned: N,
            searchRef: M,
            children: (0, R.jsx)(Oc.RemoveScroll, {
              as: nu,
              allowPinchZoom: !0,
              children: (0, R.jsx)(jc.FocusScope, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, pi.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, R.jsx)(vi.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, R.jsx)(F, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...B,
                    onPlaced: () => D(!0),
                    ref: x,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, pi.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || V(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = k().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => T(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      ou.displayName = "SelectContentImpl";
      var su = X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, s = Mc(Qc, r), a = ru(Qc, r), [i, d] = X.useState(null), [l, c] = X.useState(null), u = (0, hi.s)(t, c), f = Dc(r), p = X.useRef(!1), h = X.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = a, b = X.useCallback(() => {
          if (s.trigger && s.valueNode && i && l && m && v && y) {
            const e = s.trigger.getBoundingClientRect(),
              t = l.getBoundingClientRect(),
              r = s.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== s.dir) {
              const n = o.left - t.left,
                s = r.left - n,
                a = e.left - s,
                d = e.width + a,
                l = Math.max(d, t.width),
                c = window.innerWidth - eu,
                u = fd(s, [eu, Math.max(eu, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                s = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - s,
                d = e.width + a,
                l = Math.max(d, t.width),
                c = window.innerWidth - eu,
                u = fd(s, [eu, Math.max(eu, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const a = f(),
              d = window.innerHeight - 2 * eu,
              c = m.scrollHeight,
              u = window.getComputedStyle(l),
              h = parseInt(u.borderTopWidth, 10),
              g = parseInt(u.paddingTop, 10),
              b = parseInt(u.borderBottomWidth, 10),
              w = h + g + c + parseInt(u.paddingBottom, 10) + b,
              _ = Math.min(5 * v.offsetHeight, w),
              C = window.getComputedStyle(m),
              x = parseInt(C.paddingTop, 10),
              j = parseInt(C.paddingBottom, 10),
              P = e.top + e.height / 2 - eu,
              O = d - P,
              S = v.offsetHeight / 2,
              k = h + g + (v.offsetTop + S),
              R = w - k;
            if (k <= P) {
              const e = a.length > 0 && v === a[a.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = l.clientHeight - m.offsetTop - m.offsetHeight,
                r = k + Math.max(O, S + (e ? j : 0) + t + b);
              i.style.height = r + "px"
            } else {
              const e = a.length > 0 && v === a[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(P, h + m.offsetTop + (e ? x : 0) + S) + R;
              i.style.height = t + "px", m.scrollTop = k - P + m.offsetTop
            }
            i.style.margin = `${eu}px 0`, i.style.minHeight = _ + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, s.trigger, s.valueNode, i, l, m, v, y, s.dir, n]);
        (0, zl.N)(() => b(), [b]);
        const [w, _] = X.useState();
        (0, zl.N)(() => {
          l && _(window.getComputedStyle(l).zIndex)
        }, [l]);
        const C = X.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, R.jsx)(iu, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: C,
          children: (0, R.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, R.jsx)(_i.sG.div, {
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
      su.displayName = "SelectItemAlignedPosition";
      var au = X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = eu,
          ...s
        } = e, a = Lc(r);
        return (0, R.jsx)(gi.UC, {
          ...a,
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
      au.displayName = "SelectPopperPosition";
      var [iu, du] = Tc(Qc, {}), lu = "SelectViewport", cu = X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, s = ru(lu, r), a = du(lu, r), i = (0, hi.s)(t, s.onViewportChange), d = X.useRef(0);
        return (0, R.jsxs)(R.Fragment, {
          children: [(0, R.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, R.jsx)(Nc.Slot, {
            scope: r,
            children: (0, R.jsx)(_i.sG.div, {
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
              onScroll: (0, pi.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * eu,
                      o = parseFloat(r.style.minHeight),
                      s = parseFloat(r.style.height),
                      a = Math.max(o, s);
                    if (a < n) {
                      const o = a + e,
                        s = Math.min(n, o),
                        i = o - s;
                      r.style.height = s + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                d.current = t.scrollTop
              })
            })
          })]
        })
      });
      cu.displayName = lu;
      var uu = "SelectGroup",
        [fu, pu] = Tc(uu);
      X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, yi.useId)();
        return (0, R.jsx)(fu, {
          scope: r,
          id: o,
          children: (0, R.jsx)(_i.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = uu;
      var hu = "SelectLabel";
      X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = pu(hu, r);
        return (0, R.jsx)(_i.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = hu;
      var mu = "SelectItem",
        [vu, yu] = Tc(mu),
        gu = X.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: s,
            ...a
          } = e, i = Mc(mu, r), d = ru(mu, r), l = i.value === n, [c, u] = X.useState(s ?? ""), [f, p] = X.useState(!1), h = (0, Ll.c)(e => d.itemRefCallback?.(e, n, o)), m = (0, hi.s)(t, h), v = (0, yi.useId)(), y = X.useRef("touch"), g = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          return (0, R.jsx)(vu, {
            scope: r,
            value: n,
            disabled: o,
            textId: v,
            isSelected: l,
            onItemTextChange: X.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, R.jsx)(Nc.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, R.jsx)(_i.sG.div, {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": l && f,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: m,
                onFocus: (0, pi.mK)(a.onFocus, () => p(!0)),
                onBlur: (0, pi.mK)(a.onBlur, () => p(!1)),
                onClick: (0, pi.mK)(a.onClick, () => {
                  "mouse" !== y.current && g()
                }),
                onPointerUp: (0, pi.mK)(a.onPointerUp, () => {
                  "mouse" === y.current && g()
                }),
                onPointerDown: (0, pi.mK)(a.onPointerDown, e => {
                  y.current = e.pointerType
                }),
                onPointerMove: (0, pi.mK)(a.onPointerMove, e => {
                  y.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, pi.mK)(a.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, pi.mK)(a.onKeyDown, e => {
                  o || e.target !== e.currentTarget || "" !== d.searchRef?.current && " " === e.key || (kc.includes(e.key) && g(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      gu.displayName = mu;
      var bu = "SelectItemText",
        wu = X.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...s
          } = e, a = Mc(bu, r), i = ru(bu, r), d = yu(bu, r), l = Ac(bu, r), [c, u] = X.useState(null), f = (0, Ll.c)(e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = (0, hi.s)(t, u, d.onItemTextChange, f), h = c?.textContent, m = X.useMemo(() => (0, R.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: h
          }, d.value), [d.disabled, d.value, h]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: y
          } = l;
          return (0, zl.N)(() => (v(m), () => y(m)), [v, y, m]), (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(_i.sG.span, {
              id: d.textId,
              ...s,
              ref: p
            }), d.isSelected && a.valueNode && !a.valueNodeHasChildren && !Ru(a.value) ? Ya.createPortal(s.children, a.valueNode) : null]
          })
        });
      wu.displayName = bu;
      var _u = "SelectItemIndicator";
      X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return yu(_u, r).isSelected ? (0, R.jsx)(_i.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = _u;
      var Cu = "SelectScrollUpButton";
      X.forwardRef((e, t) => {
        const r = ru(Cu, e.__scopeSelect),
          n = du(Cu, e.__scopeSelect),
          [o, s] = X.useState(!1),
          a = (0, hi.s)(t, n.onScrollButtonChange);
        return (0, zl.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              s(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, R.jsx)(ju, {
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
      }).displayName = Cu;
      var xu = "SelectScrollDownButton";
      X.forwardRef((e, t) => {
        const r = ru(xu, e.__scopeSelect),
          n = du(xu, e.__scopeSelect),
          [o, s] = X.useState(!1),
          a = (0, hi.s)(t, n.onScrollButtonChange);
        return (0, zl.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              s(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, R.jsx)(ju, {
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
      }).displayName = xu;
      var ju = X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, s = ru("SelectScrollButton", r), a = X.useRef(null), i = Dc(r), d = X.useCallback(() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }, []);
        return X.useEffect(() => () => d(), [d]), (0, zl.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, R.jsx)(_i.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, pi.mK)(o.onPointerDown, () => {
            null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, pi.mK)(o.onPointerMove, () => {
            s.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, pi.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, R.jsx)(_i.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Pu = "SelectArrow";
      X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Lc(r);
        return "popper" === ru(Pu, r).position ? (0, R.jsx)(gi.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Pu;
      var Ou = "SelectBubbleInput",
        Su = X.forwardRef(({
          __scopeSelect: e,
          ...t
        }, r) => {
          const n = Mc(Ou, e),
            {
              value: o,
              onValueChange: s,
              required: a,
              disabled: i,
              name: d,
              autoComplete: l,
              form: c
            } = n,
            {
              nativeOptions: u,
              nativeSelectKey: f
            } = n,
            p = X.useRef(null),
            h = (0, hi.s)(r, p),
            m = o ?? "",
            v = (0, hd.Z)(m),
            y = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return X.useEffect(() => {
            const e = p.current;
            if (!e) return;
            const t = window.HTMLSelectElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (v !== m && r) {
              const t = new Event("change", {
                bubbles: !0
              });
              r.call(e, m), e.dispatchEvent(t)
            }
          }, [v, m]), (0, R.jsxs)(_i.sG.select, {
            "aria-hidden": !0,
            required: a,
            tabIndex: -1,
            name: d,
            autoComplete: l,
            disabled: i,
            form: c,
            onChange: e => s(e.target.value),
            ...t,
            style: {
              ...ji.VISUALLY_HIDDEN_STYLES,
              ...t.style
            },
            ref: h,
            defaultValue: m,
            children: [Ru(o) && !y ? (0, R.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function ku(e) {
        return "function" == typeof e
      }

      function Ru(e) {
        return "" === e || void 0 === e
      }

      function Nu(e) {
        const t = (0, Ll.c)(e),
          r = X.useRef(""),
          n = X.useRef(0),
          o = X.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          s = X.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return X.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s]
      }

      function Du(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let s = (a = e, i = Math.max(o, 0), a.map((e, t) => a[(i + t) % a.length]));
        var a, i;
        1 === n.length && (s = s.filter(e => e !== r));
        const d = s.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }

      function Iu(e) {
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

      function Tu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Eu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tu(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Iu(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Lu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Su.displayName = Ou;
      var zu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Eu(Eu({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lu(e.variantClassNames, e => Lu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Vu = Mu({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Au = Mu({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qu = Mu({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hu = Mu({
          defaultClassName: "foundry_uaq1gw1 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
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
        Fu = Mu({
          defaultClassName: "foundry_uaq1gw6 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
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
        Bu = Mu({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Zu = (0, X.createContext)(null);

      function Xu() {
        const e = (0, X.useContext)(Zu);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Gu = (0, X.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: s,
          onValueChange: a,
          name: i,
          value: d,
          defaultOpen: l,
          onOpenChange: c,
          isOpen: u,
          size: f = "MD",
          status: p = "neutral",
          ...h
        }, m) => {
          const v = (0, X.useRef)(null),
            y = (0, Y.UP)(v, m),
            g = (0, X.useId)(),
            b = (0, X.useId)(),
            w = (0, X.useId)(),
            _ = (0, X.useId)(),
            C = (0, X.useId)(),
            x = (0, X.useId)(),
            j = (0, X.useRef)(null),
            P = (0, X.useRef)(null),
            O = (0, X.useRef)(null),
            [S = !1, k] = (0, Y.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            N = (0, W.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, R.jsx)(Zu.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: x,
              hintId: _,
              popoverId: C,
              labelRef: j,
              descriptionRef: P,
              hintRef: O,
              defaultValue: s,
              onValueChange: a,
              value: d,
              isOpen: S,
              setIsOpen: k,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, R.jsx)(Hc, {
              required: r,
              disabled: n,
              open: S,
              onOpenChange: () => k(!o && !S),
              value: d,
              defaultValue: s,
              onValueChange: a,
              name: i,
              children: (0, R.jsx)("div", {
                ref: y,
                ...N,
                children: e
              })
            })
          })
        }),
        Ku = (0, X.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: s
          } = Xu(), a = (0, W.mergeProps)({
            id: s,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Vu({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, R.jsx)(Yc, {
            ...a,
            ref: o,
            children: (0, R.jsx)(cu, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Uu = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e
          }, t);
          return (0, R.jsx)(cu, {
            ref: r,
            ...n
          })
        }),
        Wu = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, R.jsxs)(gc, {
            ...o,
            ref: n,
            children: [(0, R.jsx)(Uu, {
              asChild: !0,
              children: (0, R.jsx)(bc, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, R.jsx)(wc, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, R.jsx)(_c, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        $u = (0, X.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...s
        }, a) => {
          const {
            isReadOnly: i,
            status: d,
            isDisabled: l,
            labelId: c,
            hintId: u,
            triggerId: f,
            popoverId: p,
            descriptionId: h,
            labelRef: m,
            descriptionRef: v,
            hintRef: y,
            isOpen: g,
            size: b
          } = Xu(), {
            isPressed: w,
            pressProps: _
          } = (0, xl.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [C, x] = (0, X.useState)(!1), [j, P] = (0, X.useState)(!1);
          (0, X.useEffect)(() => {
            x(!!m.current || !!y.current), P(!!v.current)
          }, []);
          const O = (0, W.mergeProps)({
              id: f,
              className: Fu({
                size: b,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!w,
                isDisabled: !!l
              }),
              "aria-labelledby": C ? (0, W.joinStrings)(r, c, u) : r,
              "aria-describedby": j ? (0, W.joinStrings)(n, h) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": g ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!w
            }, (0, W.omit)(_, "onKeyDown"), s),
            S = o ? J.DX : Bc;
          return (0, R.jsx)(S, {
            ...O,
            ref: a,
            children: e
          })
        }),
        Qu = (0, X.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            a = t ? J.DX : "span";
          return (0, R.jsx)(a, {
            ...s,
            ref: o,
            children: (0, R.jsx)(Xc, {
              placeholder: e
            })
          })
        }),
        Yu = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: s,
            isOpen: a
          } = Xu(), i = a ? ue.ChevronUp : ue.ChevronDown, d = (0, W.mergeProps)({
            asChild: !0,
            className: Bu({
              isDisabled: s || o
            }),
            "data-testid": t
          }, r);
          return (0, R.jsx)(Gc, {
            ...d,
            ref: n,
            children: e || (0, R.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Ju = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, a) => {
          const {
            isRequired: i,
            isDisabled: d,
            labelId: l,
            labelRef: c,
            triggerId: u
          } = Xu(), f = i && !o, p = (0, Y.UP)(c, a), h = (0, W.mergeProps)({
            id: s.id || l,
            htmlFor: u,
            "data-testid": e,
            className: Hu({
              showAsterisk: f,
              isDisabled: d
            })
          }, s), m = t ? J.DX : "label";
          return (0, R.jsx)(J.s6, {
            enabled: n,
            children: (0, R.jsx)(m, {
              ...h,
              ref: p,
              children: r
            })
          })
        }),
        ef = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a,
            descriptionRef: i
          } = Xu(), d = (0, Y.UP)(i, o), l = (0, W.mergeProps)({
            className: Au({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), c = r ? J.DX : "div";
          return (0, R.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        tf = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            hintRef: a,
            isDisabled: i
          } = Xu(), d = (0, Y.UP)(a, o), l = (0, W.mergeProps)({
            className: qu({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? J.DX : "div";
          return (0, R.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        rf = (0, X.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, X.useRef)(null),
            i = (0, Y.UP)(a, s),
            d = (0, W.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, R.jsx)(gu, {
            ref: i,
            ...d,
            children: e
          })
        }),
        nf = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, R.jsx)(wu, {
            ref: n,
            asChild: !0,
            children: (0, R.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        of = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, R.jsx)(Gc, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        sf = $c,
        af = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Xu(), i = (0, W.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? J.DX : Il;
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        df = Tl,
        lf = El;
      var cf = r(56570),
        uf = r(53406),
        ff = r(2544),
        pf = r(42027),
        hf = r(24304);

      function mf(e, t, r) {
        let n = (0, hf.J)(e => {
          r && !e.defaultPrevented && r(t)
        });
        (0, X.useEffect)(() => {
          let t = e?.current?.form;
          return t?.addEventListener("reset", n), () => {
            t?.removeEventListener("reset", n)
          }
        }, [e])
      }
      var vf = r(18601),
        yf = r(42942);

      function gf(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, yf.N)(() => {
          if ("native" === n && r?.current && "setCustomValidity" in r.current && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: bf(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let s = (0, X.useRef)(!1),
          a = (0, hf.J)(() => {
            s.current || t.resetValidation()
          }),
          i = (0, hf.J)(e => {
            t.displayValidation.isInvalid || t.commitValidation();
            let n = r?.current?.form;
            !e.defaultPrevented && r && n && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!1 === r.validity?.valid) return r
              }
              return null
            }(n) === r.current && (o ? o() : r.current?.focus(), (0, vf.Cl)("keyboard")), e.preventDefault()
          }),
          d = (0, hf.J)(() => {
            t.commitValidation()
          });
        (0, X.useEffect)(() => {
          let e = r?.current;
          if (!e) return;
          let t = e.form,
            n = t?.reset;
          return t && (t.reset = () => {
            s.current = !window.event || "message" === window.event.type && (0, uf.wt)(window.event) instanceof MessagePort, n?.call(t), s.current = !1
          }), e.addEventListener("invalid", i), e.addEventListener("change", d), t?.addEventListener("reset", a), () => {
            e.removeEventListener("invalid", i), e.removeEventListener("change", d), t?.removeEventListener("reset", a), t && (t.reset = n)
          }
        }, [r, n])
      }

      function bf(e) {
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
      var wf = r(36052);

      function _f(e = !0) {
        let t = (0, wf.Bi)(),
          [r, n] = function(e = !0) {
            let [t, r] = (0, X.useState)(e), n = (0, X.useRef)(!1), o = (0, X.useCallback)(e => {
              n.current = !0, r(!!e)
            }, []);
            return (0, yf.N)(() => {
              n.current || r(!1)
            }, []), [o, t]
          }(e);
        return {
          id: n ? t : void 0,
          ref: r
        }
      }
      const Cf = {
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
        xf = {
          ...Cf,
          customError: !0,
          valid: !1
        },
        jf = {
          isInvalid: !1,
          validationDetails: Cf,
          validationErrors: []
        },
        Pf = (0, X.createContext)({}),
        Of = "__reactAriaFormValidationState";

      function Sf(e) {
        if (e[Of]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: s
          } = e[Of];
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
            validate: a,
            validationBehavior: i = "aria"
          } = e;
          r && (t ||= "invalid" === r);
          let d = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: xf
            } : null,
            l = (0, X.useMemo)(() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return kf(r)
                }
                return []
              }(a, o);
              return Rf(e)
            }, [a, o]);
          s?.validationDetails.valid && (s = void 0);
          let c = (0, X.useContext)(Pf),
            u = (0, X.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => kf(c[e])) : kf(c[n]) : [], [c, n]),
            [f, p] = (0, X.useState)(c),
            [h, m] = (0, X.useState)(!1);
          c !== f && (p(c), m(!1));
          let v = (0, X.useMemo)(() => Rf(h ? [] : u), [h, u]),
            y = (0, X.useRef)(jf),
            [g, b] = (0, X.useState)(jf),
            w = (0, X.useRef)(jf),
            [_, C] = (0, X.useState)(!1);
          return (0, X.useEffect)(() => {
            if (!_) return;
            C(!1);
            let e = l || s || y.current;
            Nf(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: d || v || l || s || jf,
            displayValidation: "native" === i ? d || v || g : d || v || l || s || g,
            updateValidation(e) {
              "aria" !== i || Nf(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = jf;
              Nf(e, w.current) || (w.current = e, b(e)), "native" === i && C(!1), m(!0)
            },
            commitValidation() {
              "native" === i && C(!0), m(!0)
            }
          }
        }(e)
      }

      function kf(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Rf(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: xf
        } : null
      }

      function Nf(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }

      function Df(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: s,
          name: a,
          form: i,
          children: d,
          isRequired: l,
          validationBehavior: c = "aria",
          "aria-label": u,
          "aria-labelledby": f,
          "aria-describedby": p,
          onPressStart: h,
          onPressEnd: m,
          onPressChange: v,
          onPress: y,
          onPressUp: g,
          onClick: b
        } = e, w = Sf({
          ...e,
          value: t.isSelected
        }), {
          isInvalid: _,
          validationErrors: C,
          validationDetails: x
        } = w.displayValidation;
        gf(e, w, r);
        let {
          pressProps: j,
          isPressed: P
        } = (0, xl.d)({
          onPressStart: h,
          onPressEnd: m,
          onPressChange: v,
          onPress: y,
          onPressUp: g,
          onClick: b,
          isDisabled: n
        }), [O, S] = (0, X.useState)(!1), {
          pressProps: k
        } = (0, xl.d)({
          onPressStart(e) {
            "keyboard" !== e.pointerType && "virtual" !== e.pointerType ? (h?.(e), v?.(!0), S(!0)) : e.continuePropagation()
          },
          onPressEnd(e) {
            "keyboard" !== e.pointerType && "virtual" !== e.pointerType ? (m?.(e), v?.(!1), S(!1)) : e.continuePropagation()
          },
          onPressUp(e) {
            "keyboard" !== e.pointerType && "virtual" !== e.pointerType ? g?.(e) : e.continuePropagation()
          },
          onClick: b,
          onPress(n) {
            if ("keyboard" === n.pointerType || "virtual" === n.pointerType) return void n.continuePropagation();
            y?.(n), t.toggle(), r.current?.focus();
            let {
              [Of]: o
            } = e, {
              commitValidation: s
            } = o || w;
            s()
          },
          isDisabled: n || o
        }), {
          focusableProps: R
        } = (0, pf.Wc)(e, r), N = (0, ff.v)(j, R), D = (0, cf.$)(e, {
          labelable: !0
        });
        mf(r, t.defaultSelected, t.setSelected);
        let I = _f(),
          T = _f();
        return {
          labelProps: (0, ff.v)(k, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, ff.v)(D, {
            checked: t.isSelected,
            "aria-required": l && "aria" === c || void 0,
            required: l && "native" === c,
            "aria-invalid": _ || "invalid" === e.validationState || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            "aria-describedby": [I.id, T.id, p].filter(Boolean).join(" ") || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected((0, uf.wt)(e).checked)
            },
            disabled: n,
            ...null == s ? {} : {
              value: s
            },
            name: a,
            form: i,
            type: "checkbox",
            ...N
          }),
          descriptionProps: I,
          errorMessageProps: T,
          isSelected: t.isSelected,
          isPressed: P || O,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: _ || "invalid" === e.validationState,
          validationErrors: C,
          validationDetails: x
        }
      }
      const If = "undefined" != typeof document ? X.useInsertionEffect ?? X.useLayoutEffect : () => {};

      function Tf(e, t, r) {
        let [n, o] = (0, X.useState)(e || t), s = (0, X.useRef)(n), a = (0, X.useRef)(void 0 !== e), i = void 0 !== e;
        (0, X.useEffect)(() => {
          a.current, a.current = i
        }, [i]);
        let d = i ? e : n;
        If(() => {
          s.current = d
        });
        let [, l] = (0, X.useReducer)(() => ({}), {}), c = (0, X.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(s.current) : e;
          Object.is(s.current, n) || (s.current = n, o(n), l(), r?.(n, ...t))
        }, [r]);
        return [d, c]
      }

      function Ef(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = Tf(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, X.useState)(r);
        return {
          isSelected: r,
          defaultSelected: e.defaultSelected ?? o,
          setSelected: function(e) {
            t || n(e)
          },
          toggle: function() {
            t || n(!r)
          }
        }
      }

      function Lf(e) {
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

      function zf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zf(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Lf(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Af = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mf(Mf({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Af(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vf(e.variantClassNames, e => Vf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Hf = qf({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ff = qf({
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
        Bf = qf({
          defaultClassName: "foundry_okz6z2b",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            },
            isDisabled: {
              true: "foundry_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zf = qf({
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
        Xf = qf({
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
      const Gf = (0, X.createContext)(null);

      function Kf() {
        const e = (0, X.useContext)(Gf);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Uf = (0, X.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: s = !1,
          isReadOnly: a = !1,
          ...i
        }, d) => {
          const l = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? J.DX : "div",
            u = (0, X.useId)(),
            f = (0, X.useId)(),
            p = (0, X.useId)();
          return (0, R.jsx)(Gf.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: f,
              inputId: p,
              isDisabled: s,
              isReadOnly: a,
              ...i
            },
            children: (0, R.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        Wf = (0, X.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: s,
          isSelected: a,
          defaultSelected: i,
          onSelectedChange: d,
          name: l,
          value: c,
          ...u
        }, f) => {
          const p = (0, X.useRef)(null),
            h = (0, Y.UP)(p, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: _
            } = Kf(),
            C = Ef({
              isDisabled: w,
              isReadOnly: _,
              isSelected: a,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: x
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: s,
                ...a
              } = Df(e, t, r);
              return {
                labelProps: n,
                inputProps: {
                  ...o,
                  role: "switch",
                  checked: s
                },
                isSelected: s,
                ...a
              }
            }({
              id: s || y,
              "aria-labelledby": (0, W.joinStrings)(n, g),
              "aria-describedby": (0, W.joinStrings)(o, b),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: _
            }, C, p),
            j = (0, W.mergeProps)({
              className: Xf({
                appearance: v
              }),
              "data-state": C.isSelected ? "selected" : "unselected",
              "data-disabled": w || _,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || _ || C.toggle()
              }
            }, u);
          return (0, R.jsxs)("div", {
            ...j,
            children: [(0, R.jsx)(J.s6, {
              children: (0, R.jsx)("input", {
                ...x,
                ref: h
              })
            }), (0, R.jsx)("div", {
              className: Zf({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, R.jsx)("div", {
                className: Ff({
                  size: m,
                  isSelected: C.isSelected
                })
              })
            })]
          })
        }),
        $f = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            isDisabled: a,
            labelId: i,
            inputId: d,
            size: l
          } = Kf(), c = (0, W.mergeProps)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Bf({
              isDisabled: a,
              size: l
            })
          }, o), u = t ? J.DX : "label";
          return (0, R.jsx)(J.s6, {
            enabled: n,
            children: (0, R.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Qf = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Kf(), i = n.id || a, d = (0, W.mergeProps)({
            className: Hf({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? J.DX : "div";
          return (0, R.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        Yf = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Jf = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        ep = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        tp = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        rp = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        np = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function op(e) {
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

      function sp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ap(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = op(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ip(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var dp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        lp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ap(ap({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) dp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ip(e.variantClassNames, e => ip(e, e => e.split(" ")[0]))
            }
          }, t
        },
        cp = lp({
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
        up = lp({
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
        fp = lp({
          defaultClassName: "foundry_11gbdtyj foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_11gbdtyk",
              true: "foundry_11gbdtyl"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pp = lp({
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
        hp = lp({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        mp = lp({
          defaultClassName: "foundry_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              LG: "foundry_11gbdtyf foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
              XL: "foundry_11gbdtyg foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
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
      const vp = (0, X.createContext)(null);

      function yp() {
        const e = (0, X.useContext)(vp);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const gp = (0, X.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...s
        }, a) => {
          const i = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, W.omit)(s, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? J.DX : "div",
            l = (0, X.useId)(),
            c = (0, X.useId)(),
            u = (0, X.useId)();
          return (0, R.jsx)(vp.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...s
            },
            children: (0, R.jsx)(d, {
              ...i,
              ref: a,
              children: o
            })
          })
        }),
        bp = (0, X.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: s,
          onClick: a,
          "aria-describedby": d,
          "aria-errormessage": l,
          "aria-labelledby": c,
          className: u,
          ...f
        }, p) => {
          const {
            size: h,
            appearance: m,
            isIndeterminate: v,
            isRequired: y,
            descriptionId: g,
            labelId: b,
            inputId: w,
            ..._
          } = yp(), C = (0, X.useRef)(null), x = f.id || w, {
            isPressed: j,
            pressProps: P
          } = (0, xl.d)({
            ref: C
          }), {
            setSelected: O,
            toggle: S,
            ...k
          } = Ef({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: N,
            isSelected: D,
            isDisabled: I,
            isReadOnly: T
          } = function(e, t, r) {
            let {
              labelProps: n,
              inputProps: o,
              descriptionProps: s,
              errorMessageProps: a,
              isSelected: i,
              isPressed: d,
              isDisabled: l,
              isReadOnly: c,
              isInvalid: u,
              validationErrors: f,
              validationDetails: p
            } = Df(e, t, r), {
              isIndeterminate: h
            } = e;
            return (0, X.useEffect)(() => {
              r.current && (r.current.indeterminate = !!h)
            }), {
              labelProps: (0, ff.v)(n, (0, X.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: o,
              descriptionProps: s,
              errorMessageProps: a,
              isSelected: i,
              isPressed: d,
              isDisabled: l,
              isReadOnly: c,
              isInvalid: u,
              validationErrors: f,
              validationDetails: p
            }
          }({
            "aria-label": "",
            id: x,
            name: o,
            ..._
          }, {
            ...k,
            toggle: S,
            setSelected: _.isReadOnly ? () => !1 : O
          }, C), E = (0, W.mergeProps)({
            className: up({
              size: h
            }),
            onClick: e => {
              s?.(e) ?? a?.(e), e.defaultPrevented || I || T || S()
            }
          }, P, f), L = (0, W.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, W.joinStrings)(c, b),
            "aria-describedby": (0, W.joinStrings)(d, g),
            "aria-errormessage": (0, W.joinStrings)(l, _.isInvalid ? g : void 0),
            "aria-required": y,
            required: y
          }, N), z = v ? i[`Dash${h}`] : i[`Check${h}`];
          return (0, R.jsxs)("div", {
            ...E,
            children: [(0, R.jsx)(J.s6, {
              children: (0, R.jsx)("input", {
                ...L,
                ref: p
              })
            }), (0, R.jsx)("div", {
              className: (0, ce.clsx)(cp({
                size: h,
                appearance: m
              }), u),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : D ? "checked" : "unchecked",
              "data-disabled": I || T,
              "data-testid": e,
              "data-pressed": j,
              children: (0, R.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (D || v) && (0, R.jsx)(z, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        wp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...s
        }, a) => {
          const {
            size: i,
            labelId: d,
            inputId: l,
            isRequired: c
          } = yp(), u = s.id || d, f = c && !o, p = (0, W.mergeProps)({
            className: mp({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: s.htmlFor || l
          }, s), h = t ? J.DX : "label";
          return (0, R.jsx)(J.s6, {
            enabled: n,
            children: (0, R.jsx)(h, {
              ...p,
              ref: a,
              children: e
            })
          })
        }),
        _p = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = yp(), i = n.id || a, d = (0, W.mergeProps)({
            className: fp({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? J.DX : "div";
          return (0, R.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        Cp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = yp(), a = n.id || s, i = (0, W.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: a
          }, n), d = t ? J.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        xp = (0, X.createContext)(null);

      function jp() {
        const e = (0, X.useContext)(xp);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Pp = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...s
        }, a) => {
          const [i, d] = (0, X.useState)(null), [l, c] = (0, X.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, W.mergeProps)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, s), p = t ? J.DX : "fieldset";
          return (0, R.jsx)(xp.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, R.jsx)(p, {
              ...f,
              ref: a,
              children: r
            })
          })
        }),
        Op = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          optionalText: n = "optional",
          hideVisually: o = !1,
          hideRequiredAsterisk: s,
          ...a
        }, i) => {
          const {
            isRequired: d
          } = jp(), l = d && !s, c = (0, W.mergeProps)({
            "data-testid": r,
            className: hp({
              showAsterisk: l
            })
          }, a), u = t ? J.DX : "legend";
          return (0, R.jsx)(J.s6, {
            enabled: o,
            children: (0, R.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, R.jsx)(J.xV, {
                children: e
              }), !d && (0, R.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        Sp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: s
          } = jp(), a = (0, X.useId)(), i = n.id || a;
          (0, X.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = t ? J.DX : "div";
          return (0, R.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        kp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = jp(), a = (0, W.mergeProps)({
            "data-testid": r,
            className: pp({
              size: s
            })
          }, n), i = t ? J.DX : "div";
          return (0, R.jsx)(i, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Rp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: s
          } = jp(), a = (0, X.useId)(), i = n.id || a;
          (0, X.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, W.mergeProps)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = ue.X,
            c = t ? J.DX : "div";
          return (0, R.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, R.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, R.jsx)(J.xV, {
              children: e
            })]
          })
        });

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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Np(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Tp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ep = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Lp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ip(Ip({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ep(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tp(e.variantClassNames, e => Tp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zp = Lp({
          defaultClassName: "foundry_vq8c3j6 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_vq8c3j7",
              true: "foundry_vq8c3j8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mp = Lp({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vp = Lp({
          defaultClassName: "foundry_vq8c3j1 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
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
        Ap = Lp({
          defaultClassName: "foundry_vq8c3j9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
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
      const qp = (0, X.createContext)(null);

      function Hp() {
        const e = (0, X.useContext)(qp);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Fp = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const l = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? J.DX : "div",
            u = (0, X.useId)(),
            f = (0, X.useId)(),
            p = (0, X.useId)(),
            h = (0, X.useId)();
          return (0, R.jsx)(qp.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: h,
              isDisabled: n,
              isReadOnly: o,
              isRequired: s,
              status: a,
              ...i
            },
            children: (0, R.jsx)(c, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        Bp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, a) => {
          const {
            labelId: i,
            inputId: d,
            isDisabled: l,
            isRequired: c
          } = Hp(), u = (0, W.mergeProps)({
            className: Vp({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, s), f = t ? J.DX : "label";
          return (0, R.jsx)(J.s6, {
            enabled: n,
            children: (0, R.jsx)(f, {
              ...u,
              ref: a,
              children: e
            })
          })
        }),
        Zp = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: s,
          placeholder: a = " ",
          "aria-labelledby": i,
          "aria-describedby": d,
          ...l
        }, c) => {
          const {
            descriptionId: u,
            labelId: f,
            inputId: p,
            hintId: h,
            isDisabled: m,
            isRequired: v,
            isReadOnly: y,
            status: g
          } = Hp(), b = (0, X.useRef)(null), w = (0, Y.UP)(b, c), _ = (0, W.mergeProps)({
            className: Ap({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isSuccess: "success" === g
            }),
            name: s,
            id: l.id || p,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: a,
            "aria-labelledby": (0, W.joinStrings)(l.id, f, h, i),
            "aria-describedby": (0, W.joinStrings)(u, d),
            "data-testid": r,
            ..."invalid" === g && {
              "aria-invalid": !0,
              "aria-errormessage": u
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
          }, l), C = e ? J.DX : "textarea";
          return (0, R.jsx)(C, {
            ref: w,
            ..._,
            children: t
          })
        }),
        Xp = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Hp(), i = (0, W.mergeProps)({
            className: zp({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? J.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Gp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = Hp(), i = (0, W.mergeProps)({
            className: Mp({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? J.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Kp = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Hp(), i = (0, W.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? J.DX : Il;
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Up = Tl,
        Wp = El;
      let $p = Math.round(1e10 * Math.random()),
        Qp = 0;
      var Yp = r(37486);
      class Jp {
        constructor(e, t, r, n) {
          this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
            if (e.nodeType === Node.ELEMENT_NODE) {
              const t = e.shadowRoot;
              if (t) {
                const e = this._doc.createTreeWalker(t, this.whatToShow, {
                  acceptNode: this._acceptNode
                });
                return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
              }
              if ("function" == typeof this.filter) return this.filter(e);
              if (this.filter?.acceptNode) return this.filter.acceptNode(e);
              if (null === this.filter) return NodeFilter.FILTER_ACCEPT
            }
            return NodeFilter.FILTER_SKIP
          }, this._doc = e, this.root = t, this.filter = n ?? null, this.whatToShow = r ?? NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
          const o = t.shadowRoot;
          if (o) {
            const e = this._doc.createTreeWalker(o, this.whatToShow, {
              acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(e)
          }
        }
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, uf.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, uf.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
        }
        lastChild() {
          let e = this._walkerStack[0].lastChild();
          return e && (this.currentNode = e), e
        }
        nextNode() {
          const e = this._walkerStack[0].nextNode();
          if (e) {
            if (e.shadowRoot) {
              let t;
              if ("function" == typeof this.filter ? t = this.filter(e) : this.filter?.acceptNode && (t = this.filter.acceptNode(e)), t === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
              let r = this.nextNode();
              return r && (this.currentNode = r), r
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
              let e;
              if ("function" == typeof this.filter ? e = this.filter(t) : this.filter?.acceptNode && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
              let r = this.lastChild();
              return r && (this.currentNode = r), r
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
      }
      var eh = r(66801),
        th = r(53903);

      function rh(e, t) {
        return !!e && !!t && t.some(t => (0, uf.sD)(t, e))
      }

      function nh(e, t, r) {
        let n = t?.tabbable ? th.A : th.t,
          o = e?.nodeType === Node.ELEMENT_NODE ? e : null,
          s = (0, eh.TW)(o),
          a = function(e, t, r, n) {
            return (0, Yp.Nf)() ? new Jp(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(s, e || s, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if ((0, uf.sD)(t?.from, e)) return NodeFilter.FILTER_REJECT;
              if (t?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from((0, eh.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let r = (0, eh.mD)(e);
                      return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === a.currentNode.tagName && "radio" === a.currentNode.type && a.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !rh(e, r) || t?.accept && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return t?.from && (a.currentNode = t.from), a
      }
      class oh {
        constructor() {
          this.fastMap = new Map, this.root = new sh({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(t ?? null);
          if (!n) return;
          let o = new sh({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && rh(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          let e = new oh;
          for (let t of this.traverse()) e.addTreeNode(t.scopeRef, t.parent?.scopeRef ?? null, t.nodeToRestore);
          return e
        }
      }
      class sh {
        constructor(e) {
          this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
        addChild(e) {
          this.children.add(e), e.parent = this
        }
        removeChild(e) {
          this.children.delete(e), e.parent = void 0
        }
      }
      new oh;
      const ah = new WeakMap;

      function ih(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, wf.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function dh(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: s,
          fieldProps: a
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: s = "label"
          } = e;
          t = (0, wf.Bi)(t);
          let a = (0, wf.Bi)(),
            i = {};
          return r && (n = n ? `${a} ${n}` : a, i = {
            id: a,
            htmlFor: "label" === s ? t : void 0
          }), {
            labelProps: i,
            fieldProps: ih({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), i = (0, wf.X1)([Boolean(t), Boolean(r), n, o]), d = (0, wf.X1)([Boolean(t), Boolean(r), n, o]);
        return a = (0, ff.v)(a, {
          "aria-describedby": [i, d, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: s,
          fieldProps: a,
          descriptionProps: {
            id: i
          },
          errorMessageProps: {
            id: d
          }
        }
      }
      var lh = r(58085),
        ch = r(18125);
      const uh = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        fh = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function ph(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return uh.has(t.script)
        }
        let t = e.split("-")[0];
        return fh.has(t)
      }
      var hh = r(44014);
      const mh = Symbol.for("react-aria.i18n.locale");

      function vh() {
        let e = "undefined" != typeof window && window[mh] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: ph(e) ? "rtl" : "ltr"
        }
      }
      let yh = vh(),
        gh = new Set;

      function bh() {
        yh = vh();
        for (let e of gh) e(yh)
      }
      const wh = X.createContext(null);

      function _h() {
        let e = function() {
          let e = (0, hh.wR)(),
            [t, r] = (0, X.useState)(yh);
          return (0, X.useEffect)(() => (0 === gh.size && window.addEventListener("languagechange", bh), gh.add(r), () => {
            gh.delete(r), 0 === gh.size && window.removeEventListener("languagechange", bh)
          }), []), e ? {
            locale: "undefined" != typeof window && window[mh] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, X.useContext)(wh) || e
      }

      function Ch(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: s,
          isDisabled: a,
          orientation: i = "vertical",
          validationBehavior: d = "aria"
        } = e, {
          direction: l
        } = _h(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: m,
          errorMessageProps: v
        } = dh({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), y = (0, cf.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, s = (0, X.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: i
          } = (0, ch.A)(), d = (0, X.useCallback)(e => {
            (0, uf.sD)(e.currentTarget, (0, uf.wt)(e)) && s.current.isFocusWithin && !(0, uf.sD)(e.currentTarget, e.relatedTarget) && (s.current.isFocusWithin = !1, i(), r && r(e), o && o(!1))
          }, [r, o, s, i]), l = (0, lh.yB)(d), c = (0, X.useCallback)(e => {
            if (!(0, uf.sD)(e.currentTarget, (0, uf.wt)(e))) return;
            let t = (0, uf.wt)(e);
            const r = (0, eh.TW)(t),
              i = (0, uf.bq)(r);
            if (!s.current.isFocusWithin && i === t) {
              n && n(e), o && o(!0), s.current.isFocusWithin = !0, l(e);
              let t = e.currentTarget;
              a(r, "focus", e => {
                let n = (0, uf.wt)(e);
                if (s.current.isFocusWithin && !(0, uf.sD)(t, n)) {
                  let e = new r.defaultView.FocusEvent("blur", {
                    relatedTarget: n
                  });
                  (0, lh.o1)(e, t);
                  let o = (0, lh.eg)(e);
                  d(o)
                }
              }, {
                capture: !0
              })
            }
          }, [n, o, l, a, d]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: c,
              onBlur: d
            }
          }
        }({
          onBlurWithin(r) {
            e.onBlur?.(r), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = (0, wf.Bi)(r);
        return ah.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: d
        }), {
          radioGroupProps: (0, ff.v)(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === l && "vertical" !== i ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === l && "vertical" !== i ? "next" : "prev";
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
              let n, o = nh(e.currentTarget, {
                from: (0, uf.wt)(e),
                accept: e => e instanceof(0, eh.mD)(e).HTMLInputElement && "radio" === e.type
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": s || void 0,
            "aria-disabled": a || void 0,
            "aria-orientation": i,
            ...h,
            ...g
          }),
          labelProps: p,
          descriptionProps: m,
          errorMessageProps: v,
          isInvalid: c,
          validationErrors: u,
          validationDetails: f
        }
      }

      function xh(e) {
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

      function jh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ph(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jh(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = xh(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Oh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Sh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kh = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ph(Ph({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Sh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Oh(e.variantClassNames, e => Oh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Rh = kh({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Nh = kh({
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
      const Dh = (0, X.createContext)(null);

      function Ih() {
        const e = (0, X.useContext)(Dh);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Th = (0, X.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: s,
          "aria-labelledby": a,
          "aria-describedby": i,
          "aria-errormessage": d,
          status: l = "neutral",
          ...c
        }, u) => {
          const f = (0, X.useRef)(null),
            p = (0, Y.UP)(f, u),
            h = (0, X.useId)(),
            m = (0, X.useId)(),
            v = (0, X.useId)(),
            y = function(e) {
              let t = (0, X.useMemo)(() => e.name || `radio-group-${$p}-${++Qp}`, [e.name]),
                [r, n] = Tf(e.value, e.defaultValue ?? null, e.onChange),
                [o] = (0, X.useState)(r),
                [s, a] = (0, X.useState)(null),
                i = Sf({
                  ...e,
                  value: r
                }),
                d = i.displayValidation.isInvalid;
              return {
                ...i,
                name: t,
                selectedValue: r,
                defaultSelectedValue: void 0 !== e.value ? o : e.defaultValue ?? null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (n(t), i.commitValidation())
                },
                lastFocusedValue: s,
                setLastFocusedValue: a,
                isDisabled: e.isDisabled || !1,
                isReadOnly: e.isReadOnly || !1,
                isRequired: e.isRequired || !1,
                validationState: e.validationState || (d ? "invalid" : null),
                isInvalid: d
              }
            }({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: g
            } = Ch({
              ...c,
              orientation: r,
              "aria-labelledby": (0, W.joinStrings)(h, a),
              "aria-describedby": (0, W.joinStrings)(m, v, i),
              "aria-errormessage": (0, W.joinStrings)(v, d)
            }, y),
            b = (0, W.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, W.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = s ? J.DX : "div";
          return (0, R.jsx)(Dh.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: m,
              labelId: h,
              errorId: v,
              status: l,
              ...c
            },
            children: (0, R.jsx)(w, {
              ref: p,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        Eh = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: s,
            orientation: a
          } = Ih(), i = (0, W.mergeProps)({
            "data-testid": e,
            className: Nh({
              size: s,
              orientation: a
            })
          }, n), d = t ? J.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        Lh = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, a) => {
          const {
            isRequired: i,
            labelId: d
          } = Ih(), l = i && !o, c = (0, W.mergeProps)({
            id: s.id || d,
            "data-testid": e,
            className: Rh({
              showAsterisk: l
            })
          }, s), u = t ? J.DX : "div";
          return (0, R.jsx)(J.s6, {
            enabled: n,
            children: (0, R.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        zh = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = Ih(), a = (0, W.mergeProps)({
            id: s,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? J.DX : "div";
          return (0, R.jsx)(i, {
            ...a,
            ref: o,
            children: r
          })
        }),
        Mh = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: s,
            status: a
          } = Ih(), i = (0, W.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: s,
            status: a
          }, n), d = r ? J.DX : Il;
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Vh = Tl,
        Ah = El;
      var qh = kh({
          defaultClassName: "foundry_1pfduetf foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_1pfduetg",
              true: "foundry_1pfdueth"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hh = kh({
          defaultClassName: "foundry_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              LG: "foundry_1pfduetc foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
              XL: "foundry_1pfduetd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            },
            isDisabled: {
              true: "foundry_1pfduete"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fh = kh({
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
        Bh = kh({
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
      const Zh = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, R.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Xh = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, R.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Gh = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, R.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        Kh = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? J.DX : "label";
          return (0, R.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Uh = (0, X.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, X.useRef)(null),
            s = (0, Y.UP)(o, n),
            a = (0, X.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = Ih(),
            {
              isPressed: p,
              pressProps: h
            } = (0, xl.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: m
            } = function(e, t, r) {
              let {
                value: n,
                children: o,
                "aria-label": s,
                "aria-labelledby": a,
                onPressStart: i,
                onPressEnd: d,
                onPressChange: l,
                onPress: c,
                onPressUp: u,
                onClick: f
              } = e;
              const p = e.isDisabled || t.isDisabled;
              let h = t.selectedValue === n,
                {
                  pressProps: m,
                  isPressed: v
                } = (0, xl.d)({
                  onPressStart: i,
                  onPressEnd: d,
                  onPressChange: l,
                  onPress: c,
                  onPressUp: u,
                  onClick: f,
                  isDisabled: p
                }),
                {
                  pressProps: y,
                  isPressed: g
                } = (0, xl.d)({
                  onPressStart: i,
                  onPressEnd: d,
                  onPressChange: l,
                  onPressUp: u,
                  onClick: f,
                  isDisabled: p,
                  onPress(e) {
                    c?.(e), t.setSelectedValue(n), r.current?.focus()
                  }
                }),
                {
                  focusableProps: b
                } = (0, pf.Wc)((0, ff.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                w = (0, ff.v)(m, b),
                _ = (0, cf.$)(e, {
                  labelable: !0
                }),
                C = -1;
              null != t.selectedValue ? t.selectedValue === n && (C = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (C = 0), p && (C = void 0);
              let {
                name: x,
                form: j,
                descriptionId: P,
                errorMessageId: O,
                validationBehavior: S
              } = ah.get(t);
              mf(r, t.defaultSelectedValue, t.setSelectedValue), gf({
                validationBehavior: S
              }, t, r);
              let k = _f();
              return {
                labelProps: (0, ff.v)(y, (0, X.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, ff.v)(_, {
                  ...w,
                  type: "radio",
                  name: x,
                  form: j,
                  tabIndex: C,
                  disabled: p,
                  required: t.isRequired && "native" === S,
                  checked: h,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], k.id, t.isInvalid ? O : null, P].filter(Boolean).join(" ") || void 0
                }),
                descriptionProps: k,
                isDisabled: p,
                isSelected: h,
                isPressed: v || g
              }
            }({
              ...r,
              id: a,
              value: t,
              "aria-label": ""
            }, i, o),
            v = m.checked,
            y = m.disabled || i?.isReadOnly,
            g = (0, W.mergeProps)(m, {
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
            b = c[`Dot${l}`];
          return (0, R.jsxs)("div", {
            className: Bh({
              size: l
            }),
            children: [(0, R.jsx)(J.s6, {
              children: (0, R.jsx)("input", {
                type: "radio",
                ...g,
                ref: s,
                className: "foundry_1pfduet1"
              })
            }), (0, R.jsx)("div", {
              className: Fh({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": p,
              ...h,
              children: (0, R.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, R.jsx)(b, {})
              })
            })]
          })
        }),
        Wh = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            size: a,
            state: i
          } = Ih(), d = (0, X.useId)(), l = (0, W.mergeProps)({
            id: d,
            "data-testid": e,
            className: Hh({
              size: a,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? J.DX : "div";
          return (0, R.jsx)(J.s6, {
            enabled: n,
            children: (0, R.jsx)(c, {
              ...l,
              ref: s,
              children: r
            })
          })
        }),
        $h = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Ih(), a = (0, W.mergeProps)({
            "data-testid": e,
            className: qh({
              isDisabled: s
            })
          }, n), i = t ? J.DX : "span";
          return (0, R.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        });

      function Qh(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Yh(e, t, r) {
        return t = tm(t),
          function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, rm() ? Reflect.construct(t, r || [], tm(e).constructor) : t.apply(e, r))
      }

      function Jh(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return Qh(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Qh(e, t) : void 0
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
        var s, a = !0,
          i = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return a = e.done, e
          },
          e: function(e) {
            i = !0, s = e
          },
          f: function() {
            try {
              a || null == r.return || r.return()
            } finally {
              if (i) throw s
            }
          }
        }
      }

      function em(e, t, r) {
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

      function tm(e) {
        return tm = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, tm(e)
      }

      function rm() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (rm = function() {
          return !!e
        })()
      }

      function nm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function om(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nm(Object(r), !0).forEach(function(t) {
            em(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sm(e, t) {
        return sm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, sm(e, t)
      }

      function am(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          s = t.separate,
          a = n,
          i = "",
          d = Jh(e);
        try {
          for (d.s(); !(r = d.n()).done;) {
            var l, c = r.value,
              u = !Object.prototype.hasOwnProperty.call(o, c) && (null === (l = o[a[0]]) || void 0 === l ? void 0 : l.test(c));
            (s && c === a[0] || u) && (a = a.slice(1), i += c)
          }
        } catch (e) {
          d.e(e)
        } finally {
          d.f()
        }
        return i
      }

      function im(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          s = t.separate,
          a = t.showMask,
          i = 0,
          d = "",
          l = Jh(n);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var c = r.value;
            if (!a && void 0 === e[i]) break;
            Object.prototype.hasOwnProperty.call(o, c) && void 0 !== e[i] ? d += e[i++] : d += c
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        if (s && !a) {
          for (var u = n.length - 1; u >= 0 && d[u] === n[u]; u--);
          d = d.slice(0, u + 1)
        }
        return d
      }

      function dm(e, t) {
        for (var r = t.mask, n = t.replacement, o = [], s = 0; s < r.length; s++) {
          var a, i = null !== (a = e[s]) && void 0 !== a ? a : r[s],
            d = Object.prototype.hasOwnProperty.call(n, i) ? "replacement" : void 0 !== e[s] && e[s] !== r[s] ? "input" : "mask";
          o.push({
            type: d,
            value: i,
            index: s
          })
        }
        return o
      }

      function lm(e) {
        return e.length > 0 ? em({}, e, /./) : {}
      }

      function cm(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, s = t.mask, a = t.replacement, i = t.separate, d = e.slice(n, o), l = s.slice(n, o), c = "", u = 0; u < l.length; u++) {
          var f = Object.prototype.hasOwnProperty.call(a, l[u]);
          f && void 0 !== d[u] && d[u] !== l[u] ? c += d[u] : f && i && (c += l[u])
        }
        return c
      }

      function um(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? lm(n) : n,
          s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return im(am(e, {
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
      var fm = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function pm(e) {
        return fm.includes(e) ? "\\".concat(e) : e
      }

      function hm(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function mm(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function vm(e, t, r) {
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

      function ym(e) {
        return ym = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, ym(e)
      }

      function gm() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (gm = function() {
          return !!e
        })()
      }

      function bm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function wm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bm(Object(r), !0).forEach(function(t) {
            vm(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function _m(e, t) {
        return _m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, _m(e, t)
      }

      function Cm(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Cm = function(e) {
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
              if (gm()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && _m(o, r.prototype), o
            }(e, arguments, ym(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), _m(r, e)
        }, Cm(e)
      }
      var xm, jm = function(e) {
          function t(e) {
            var r;
            return hm(this, t), (r = function(e, t, r) {
              return t = ym(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, gm() ? Reflect.construct(t, r || [], ym(e).constructor) : t.apply(e, r))
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
            }), t && _m(e, t)
          }(t, e), mm(t)
        }(Cm(Error)),
        Pm = ["options"],
        Om = ["text", "email", "tel", "search", "url"],
        Sm = mm(function e(t) {
          var r = t.init,
            n = t.tracking;
          hm(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Om.includes(e.type)) {
              var s = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                a = s.initialValue,
                i = void 0 === a ? "" : a,
                d = s.controlled,
                l = void 0 !== d && d,
                c = r({
                  initialValue: e.value || i,
                  controlled: l
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
                m = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                v = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", wm(wm({}, v), {}, {
                set: function(t) {
                  var r;
                  m.value = t, null == v || null === (r = v.set) || void 0 === r || r.call(e, t)
                }
              })), e.value = u;
              var y = function() {
                  var t = function() {
                    var r, n;
                    m.selectionStart = null !== (r = e.selectionStart) && void 0 !== r ? r : 0, m.selectionEnd = null !== (n = e.selectionEnd) && void 0 !== n ? n : 0, h.id = window.setTimeout(t)
                  };
                  h.id = window.setTimeout(t)
                },
                g = function() {
                  window.clearTimeout(h.id), h.id = -1, h.cachedId = -1
                },
                b = function(t) {
                  try {
                    var r, o;
                    if (h.cachedId === h.id) throw new jm("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var s = e.value,
                      a = e.selectionStart,
                      i = e.selectionEnd;
                    if (null === a || null === i) throw new jm("The selection attributes have not been initialized.");
                    var d, l = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = l.length), a > m.selectionStart ? d = "insert" : a <= m.selectionStart && a < m.selectionEnd ? d = "deleteBackward" : a === m.selectionEnd && s.length < l.length && (d = "deleteForward"), void 0 === d || ("deleteBackward" === d || "deleteForward" === d) && s.length > l.length) throw new jm("Input type detection error.");
                    var c = "",
                      u = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === d) c = s.slice(m.selectionStart, a);
                    else {
                      var v = l.length - s.length;
                      u = a, f = a + v
                    }
                    p.value !== l ? p.options = p.fallbackOptions : p.fallbackOptions = p.options;
                    var y = p.options,
                      g = n({
                        inputType: d,
                        previousValue: l,
                        previousOptions: y,
                        value: s,
                        addedValue: c,
                        changeStart: u,
                        changeEnd: f,
                        selectionStart: a,
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
                          var s = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < s.length; n++) r = s[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                      }(g, Pm);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), p.value = w.value, p.options = b, m.selectionStart = w.selectionStart, m.selectionEnd = w.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, l)
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
      xm = Sm, Object.defineProperty(xm.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var km, Rm = ["track", "modify"];

      function Nm(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? lm(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Dm = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = Yh(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = Nm(r),
                s = o.mask,
                a = o.replacement,
                i = o.separate,
                d = o.showMask;
              return {
                value: t = n || t ? t : d ? s : "",
                options: {
                  mask: s,
                  replacement: a,
                  separate: i
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                n = e.previousValue,
                o = e.previousOptions,
                s = e.addedValue,
                a = e.changeStart,
                i = e.changeEnd,
                d = Nm(r),
                l = d.track,
                c = d.modify,
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
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                  }
                  return o
                }(d, Rm),
                f = u.mask,
                p = u.replacement,
                h = u.showMask,
                m = u.separate,
                v = om(om({}, "insert" === t ? {
                  inputType: t,
                  data: s
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: n,
                  selectionStart: a,
                  selectionEnd: i
                }),
                y = null == l ? void 0 : l(v);
              if (!1 === y) throw new jm("Custom tracking stop.");
              null === y ? s = "" : !0 !== y && void 0 !== y && (s = y);
              var g = null == c ? void 0 : c(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? lm(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = cm(n, om({
                  end: a
                }, o)),
                w = cm(n, om({
                  start: i
                }, o)),
                _ = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                C = f.replace(_, "");
              if (b && (b = am(b, {
                  replacementChars: C,
                  replacement: p,
                  separate: m
                }), C = C.slice(b.length)), s && (s = am(s, {
                  replacementChars: C,
                  replacement: p,
                  separate: !1
                }), C = C.slice(s.length)), "insert" === t && "" === s) throw new jm("The character does not match the key value of the `replacement` object.");
              if (m) {
                var x = f.slice(a, i).replace(_, ""),
                  j = x.length - s.length;
                j < 0 ? w = w.slice(-j) : j > 0 && (w = x.slice(-j) + w)
              }
              w && (w = am(w, {
                replacementChars: C,
                replacement: p,
                separate: m
              }));
              var P = im(b + s + w, {
                  mask: f,
                  replacement: p,
                  separate: m,
                  showMask: h
                }),
                O = function(e) {
                  var t, r, n, o = e.inputType,
                    s = e.value,
                    a = e.addedValue,
                    i = e.beforeChangeValue,
                    d = e.replacement,
                    l = e.separate,
                    c = dm(s, {
                      mask: e.mask,
                      replacement: d
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || l && "replacement" === t
                    }),
                    u = null === (t = c[i.length + a.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = c[i.length - 1]) || void 0 === r ? void 0 : r.index,
                    p = null === (n = c[i.length + a.length]) || void 0 === n ? void 0 : n.index;
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
                  var h = s.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(d, e)
                  });
                  return -1 !== h ? h : s.length
                }({
                  inputType: t,
                  value: P,
                  addedValue: s,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: p,
                  separate: m
                });
              return {
                value: P,
                selectionStart: O,
                selectionEnd: O,
                options: {
                  mask: f,
                  replacement: p,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return um(e, Nm(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? lm(n) : n;
              return dm(um(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, Nm(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? lm(n) : n,
                s = cm(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return am(s, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, Nm(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? lm(n) : n, s = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, i = "", d = 0; d < r.length; d++) {
                var l = r[d];
                0 === d && (i = "^"), s && (i += "("), i += Object.prototype.hasOwnProperty.call(o, l) ? "".concat(a ? "(?!".concat(pm(l), ")") : "", "(").concat(o[l].source, ")") : pm(l), d === r.length - 1 && (s && (i += ")?".repeat(r.length)), i += "$")
              }
              return i
            }(e, Nm(r))
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
            }), t && sm(e, t)
          }(e, Sm),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function Im(e) {
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

      function Tm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Em(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tm(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Im(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Lm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      km = Dm, Object.defineProperty(km.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var zm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Em(Em({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zm(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lm(e.variantClassNames, e => Lm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Vm = Mm({
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
        Am = Mm({
          defaultClassName: "foundry_8oytzo10 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo11",
              true: "foundry_8oytzo12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qm = Mm({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hm = Mm({
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
        Fm = Mm({
          defaultClassName: "foundry_8oytzon foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
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
        Bm = Mm({
          defaultClassName: "foundry_8oytzo5 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
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
      const Zm = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Xm = (0, X.createContext)(null);

      function Gm() {
        const e = (0, X.useContext)(Xm);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Km = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, X.useState)("text"), u = `${(0,X.useId)()}-label`, f = `${(0,X.useId)()}-input`, p = `${(0,X.useId)()}-description`, h = (0, X.useRef)(null), m = (0, X.useRef)(Zm), v = (0, W.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), y = e ? J.DX : "div";
          return (0, R.jsx)(Xm.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: s,
              status: a,
              labelId: u,
              inputId: f,
              descriptionId: p,
              type: l,
              setType: c,
              inputRef: h,
              focusState: m,
              ...i
            },
            children: (0, R.jsx)(y, {
              ref: d,
              ...v,
              children: t
            })
          })
        }),
        Um = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...s
        }, a) => {
          const {
            isDisabled: i,
            isRequired: d,
            inputId: l,
            labelId: c
          } = Gm(), u = d && !o, f = (0, W.mergeProps)({
            id: s.id || c,
            htmlFor: s.htmlFor || l,
            "data-testid": e,
            className: Bm({
              showAsterisk: u,
              isDisabled: i
            })
          }, s), p = t ? J.DX : "label";
          return (0, R.jsx)(J.s6, {
            enabled: n,
            children: (0, R.jsx)(p, {
              ref: a,
              ...f,
              children: r
            })
          })
        }),
        Wm = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Gm(), a = (0, W.mergeProps)({
            "data-testid": e,
            className: qm({
              isDisabled: s
            })
          }, n), i = t ? J.DX : "span";
          return (0, R.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        }),
        $m = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            isReadOnly: a,
            status: i
          } = Gm(), d = (0, W.mergeProps)({
            "data-testid": e,
            className: (0, ce.clsx)(Vm({
              isDisabled: s,
              isReadOnly: a,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? J.DX : "div";
          return (0, R.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        Qm = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: s,
          placeholder: a = " ",
          "aria-labelledby": i,
          "aria-describedby": d,
          type: l = "text",
          ...c
        }, u) => {
          const {
            isDisabled: f,
            isReadOnly: p,
            isRequired: h,
            status: m,
            labelId: v,
            inputId: y,
            descriptionId: g,
            setType: b,
            type: w,
            inputRef: _,
            focusState: C
          } = Gm();
          (0, X.useEffect)(() => b(l), []);
          const x = "invalid" === m,
            j = (0, W.mergeProps)({
              disabled: f,
              readOnly: p,
              required: h,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, W.joinStrings)(v, i),
              "aria-describedby": (0, W.joinStrings)(g, d),
              "data-testid": e,
              className: (0, ce.clsx)(Fm({
                isDisabled: f,
                isReadOnly: p
              }), "foundry_8oytzo2"),
              onBlur: e => {
                if (C.current) {
                  const {
                    selectionStart: t,
                    selectionEnd: r
                  } = e.currentTarget;
                  C.current.selectionStart = t, C.current.selectionEnd = r
                }
              },
              ...x && {
                "aria-invalid": !0,
                "aria-errormessage": g
              },
              ..."success" === m && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...h && {
                "aria-required": !0
              }
            }, c),
            P = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                s = e.track,
                a = e.modify,
                i = (0, X.useRef)(null),
                d = (0, X.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: s,
                  modify: a
                });
              return d.current.mask = t, d.current.replacement = r, d.current.showMask = n, d.current.separate = o, d.current.track = s, d.current.modify = a, (0, X.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(i, new Dm(d.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: s
            }),
            O = (0, Y.UP)(r && n ? P : null, _, u),
            S = t ? J.DX : "input";
          return (0, R.jsx)(S, {
            ref: O,
            ...j
          })
        }),
        Ym = (0, X.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, s) => {
          const {
            isDisabled: a
          } = Gm(), i = (0, W.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, ce.clsx)(Hm({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), d = t ? J.DX : ue[e];
          return (0, R.jsx)(d, {
            ref: s,
            ...i
          })
        }),
        Jm = (0, X.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Gm(), n = (0, W.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, ce.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, R.jsx)(Ie, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        ev = (0, X.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: s,
            inputRef: a,
            focusState: i
          } = Gm(), d = "password" === o, l = d ? e : t;
          (0, X.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, W.mergeProps)({
            label: l,
            icon: d ? "Eye" : "EyeOff",
            onPress: () => {
              s(d ? "text" : "password");
              const e = a.current;
              if (i.current && e) {
                const {
                  selectionStart: t,
                  selectionEnd: r
                } = i.current;
                e.focus(), null === t && null === r || requestAnimationFrame(() => {
                  e.ownerDocument.activeElement === e && (e.selectionStart = t, e.selectionEnd = r)
                })
              }
            },
            preventFocusOnPress: !0
          }, r);
          return (0, R.jsxs)(id, {
            children: [(0, R.jsx)(dd, {
              children: (0, R.jsx)(Jm, {
                ref: n,
                ...c
              })
            }), (0, R.jsxs)(ld, {
              side: "bottom",
              align: "end",
              children: [l, (0, R.jsx)(cd, {})]
            })]
          })
        }),
        tv = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Gm(), i = (0, W.mergeProps)({
            className: Am({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? J.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        rv = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Gm(), i = (0, W.mergeProps)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? J.DX : Il;
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        nv = Tl,
        ov = El;
      var sv = r(58134);

      function av(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: s,
          onClick: a,
          isDisabled: i,
          ...d
        } = e, l = {};
        "a" !== r && (l = {
          role: "link",
          tabIndex: i ? void 0 : 0
        });
        let {
          focusableProps: c
        } = (0, pf.Wc)(e, t), {
          pressProps: u,
          isPressed: f
        } = (0, xl.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: s,
          onClick: a,
          isDisabled: i,
          ref: t
        }), p = (0, cf.$)(d, {
          labelable: !0
        }), h = (0, ff.v)(c, u), m = (0, sv.rd)(), v = (0, sv._h)(e);
        return {
          isPressed: f,
          linkProps: (0, ff.v)(p, v, {
            ...h,
            ...l,
            "aria-disabled": i || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              u.onClick?.(t), (0, sv.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function iv(e) {
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

      function dv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dv(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = iv(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var uv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lv(lv({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) uv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cv(e.variantClassNames, e => cv(e, e => e.split(" ")[0]))
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
      const pv = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        hv = (0, X.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const s = (0, X.useRef)(null),
            a = (0, Y.UP)(s, o),
            {
              buttonProps: i
            } = (0, Y.sL)(n, s),
            d = (0, W.mergeProps)({
              "data-testid": r,
              className: fv({
                size: t
              })
            }, i);
          return (0, R.jsx)("button", {
            ref: a,
            ...d,
            children: (0, R.jsx)(ue.X, {
              label: e,
              size: pv[t]
            })
          })
        });

      function mv(e) {
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

      function vv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vv(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = mv(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yv(yv({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gv(e.variantClassNames, e => gv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _v = wv({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Cv = wv({
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
        xv = wv({
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
      const jv = (0, X.createContext)(null);

      function Pv() {
        const e = (0, X.useContext)(jv);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Ov = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, s) => {
          const a = e ? J.DX : "div",
            i = (0, W.mergeProps)({
              className: xv({
                status: r,
                background: n
              })
            }, o);
          return (0, R.jsx)(jv.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, R.jsx)(a, {
              ref: s,
              "data-testid": t,
              ...i
            })
          })
        }),
        Sv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? J.DX : "div",
            s = (0, W.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        kv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? J.DX : "div",
            s = (0, W.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Rv = {
          danger: ue.CircleX,
          information: ue.Info,
          success: ue.CircleCheck,
          warning: ue.TriangleAlert
        },
        Nv = (0, X.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Pv(), s = e ? J.DX : Rv[o], a = (0, W.mergeProps)({
            className: Cv({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, R.jsx)(s, {
            label: "",
            ref: n,
            ...a
          })
        }),
        Dv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? J.DX : "div",
            s = (0, W.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Iv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? J.DX : "div",
            s = (0, W.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Tv = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, X.useRef)(null),
            a = (0, Y.UP)(s, o),
            i = e ? J.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = av(n, s),
            c = (0, W.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, R.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...c,
            children: t
          })
        }),
        Ev = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? J.DX : "div",
            a = (0, W.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, R.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        Lv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const s = e ? J.DX : "div";
          return (0, R.jsx)(s, {
            ref: o,
            "data-testid": t,
            className: (0, ce.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        zv = (0, X.forwardRef)((e, t) => {
          const {
            background: r
          } = Pv(), n = "none" !== r, o = (0, W.mergeProps)({
            className: _v({
              hasBackground: n
            })
          }, e);
          return (0, R.jsx)(hv, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function Mv(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Vv(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : Mv(n) && Mv(o) ? Vv(n, o) : n === o
        }))
      }

      function Av(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function qv(e) {
        return "number" == typeof e
      }

      function Hv(e) {
        return "string" == typeof e
      }

      function Fv(e) {
        return "boolean" == typeof e
      }

      function Bv(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function Zv(e) {
        return Math.abs(e)
      }

      function Xv(e) {
        return Math.sign(e)
      }

      function Gv(e, t) {
        return Zv(e - t)
      }

      function Kv(e) {
        return Yv(e).map(Number)
      }

      function Uv(e) {
        return e[Wv(e)]
      }

      function Wv(e) {
        return Math.max(0, e.length - 1)
      }

      function $v(e, t) {
        return t === Wv(e)
      }

      function Qv(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function Yv(e) {
        return Object.keys(e)
      }

      function Jv(e, t) {
        return [e, t].reduce((e, t) => (Yv(t).forEach(r => {
          const n = e[r],
            o = t[r],
            s = Bv(n) && Bv(o);
          e[r] = s ? Jv(n, o) : o
        }), e), {})
      }

      function ey(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function ty() {
        let e = [];
        const t = {
          add: function(r, n, o, s = {
            passive: !0
          }) {
            let a;
            if ("addEventListener" in r) r.addEventListener(n, o, s), a = () => r.removeEventListener(n, o, s);
            else {
              const e = r;
              e.addListener(o), a = () => e.removeListener(o)
            }
            return e.push(a), t
          },
          clear: function() {
            e = e.filter(e => e())
          }
        };
        return t
      }

      function ry(e = 0, t = 0) {
        const r = Zv(e - t);

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

      function ny(e, t, r) {
        const {
          constrain: n
        } = ry(0, e), o = e + 1;
        let s = a(t);

        function a(e) {
          return r ? Zv((o + e) % o) : n(e)
        }

        function i() {
          return s
        }

        function d() {
          return ny(e, i(), r)
        }
        const l = {
          get: i,
          set: function(e) {
            return s = a(e), l
          },
          add: function(e) {
            return d().set(i() + e)
          },
          clone: d
        };
        return l
      }

      function oy(e, t, r, n, o, s, a, i, d, l, c, u, f, p, h, m, v, y, g) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], C = {
          passive: !1
        }, x = ty(), j = ty(), P = ry(50, 225).constrain(p.measure(20)), O = {
          mouse: 300,
          touch: 400
        }, S = {
          mouse: 500,
          touch: 600
        }, k = h ? 43 : 25;
        let R = !1,
          N = 0,
          D = 0,
          I = !1,
          T = !1,
          E = !1,
          L = !1;

        function z(e) {
          if (!ey(e, n) && e.touches.length >= 2) return M(e);
          const t = s.readPoint(e),
            r = s.readPoint(e, b),
            a = Gv(t, N),
            d = Gv(r, D);
          if (!T && !L) {
            if (!e.cancelable) return M(e);
            if (T = a > d, !T) return M(e)
          }
          const c = s.pointerMove(e);
          a > m && (E = !0), l.useFriction(.3).useDuration(.75), i.start(), o.add(w(c)), e.preventDefault()
        }

        function M(e) {
          const t = c.byDistance(0, !1).index !== u.get(),
            r = s.pointerUp(e) * (h ? S : O)[L ? "mouse" : "touch"],
            n = function(e, t) {
              const r = u.add(-1 * Xv(e)),
                n = c.byDistance(e, !h).distance;
              return h || Zv(e) < P ? n : v && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(w(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (Zv(e) <= Zv(t)) return 0;
              const r = Gv(Zv(e), Zv(t));
              return Zv(r / e)
            }(r, n),
            a = k - 10 * o,
            i = y + o / 50;
          T = !1, I = !1, j.clear(), l.useDuration(a).useFriction(i), d.distance(n, !h), L = !1, f.emit("pointerUp")
        }

        function V(e) {
          E && (e.stopPropagation(), e.preventDefault(), E = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function i(i) {
              (Fv(g) || g(e, i)) && function(e) {
                const i = ey(e, n);
                L = i, E = h && i && !e.buttons && R, R = Gv(o.get(), a.get()) >= 2, i && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (I = !0, s.pointerDown(e), l.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = L ? r : t;
                  j.add(e, "touchmove", z, C).add(e, "touchend", M).add(e, "mousemove", z, C).add(e, "mouseup", M)
                }(), N = s.readPoint(e), D = s.readPoint(e, b), f.emit("pointerDown"))
              }(i)
            }
            const d = t;
            x.add(d, "dragstart", e => e.preventDefault(), C).add(d, "touchmove", () => {}, C).add(d, "touchend", () => {}).add(d, "touchstart", i).add(d, "mousedown", i).add(d, "touchcancel", M).add(d, "contextmenu", M).add(d, "click", V, !0)
          },
          destroy: function() {
            x.clear(), j.clear()
          },
          pointerDown: function() {
            return I
          }
        }
      }

      function sy(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function s(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (ey(r, t) ? r : r.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return r = e, n = e, s(e)
          },
          pointerMove: function(e) {
            const t = s(e) - s(n),
              a = o(e) - o(r) > 170;
            return n = e, a && (r = e), t
          },
          pointerUp: function(e) {
            if (!r || !n) return 0;
            const t = s(n) - s(r),
              a = o(e) - o(r),
              i = o(e) - o(n) > 170,
              d = t / a;
            return a && !i && Zv(d) > .1 ? d : 0
          },
          readPoint: s
        }
      }

      function ay(e, t, r, n, o, s, a) {
        const i = [e].concat(n);
        let d, l, c = [],
          u = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            s && (l = f(e), c = n.map(f), d = new ResizeObserver(r => {
              (Fv(s) || s(o, r)) && function(r) {
                for (const s of r) {
                  if (u) return;
                  const r = s.target === e,
                    a = n.indexOf(s.target),
                    i = r ? l : c[a];
                  if (Zv(f(r ? e : n[a]) - i) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(r)
            }), r.requestAnimationFrame(() => {
              i.forEach(e => d.observe(e))
            }))
          },
          destroy: function() {
            u = !0, d && d.disconnect()
          }
        }
      }

      function iy(e, t, r, n, o) {
        const s = o.measure(10),
          a = o.measure(50),
          i = ry(.1, .99);
        let d = !1;

        function l() {
          return !d && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: l,
          constrain: function(o) {
            if (!l()) return;
            const d = e.reachedMin(t.get()) ? "min" : "max",
              c = Zv(e[d] - t.get()),
              u = r.get() - t.get(),
              f = i.constrain(c / a);
            r.subtract(u * f), !o && Zv(u) < s && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            d = !e
          }
        }
      }

      function dy(e, t, r, n) {
        const o = t.min + .1,
          s = t.max + .1,
          {
            reachedMin: a,
            reachedMax: i
          } = ry(o, s),
          d = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? i(r.get()) : -1 === e && a(r.get())
                }(t)) return;
              const o = e * (-1 * t);
              n.forEach(e => e.add(o))
            }
          };
        return d
      }

      function ly(e) {
        let t = e;

        function r(e) {
          return qv(e) ? e : e.get()
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

      function cy(e, t) {
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
            const a = (i = e.direction(t), Math.round(100 * i) / 100);
            var i;
            a !== o && (n.transform = r(a), o = a)
          },
          toggleActive: function(e) {
            s = !e
          }
        }
      }

      function uy(e, t, r, n, o, s, a, i, d) {
        const l = Kv(o),
          c = Kv(o).reverse(),
          u = function() {
            const e = a[0];
            return h(p(c, e), r, !1)
          }().concat(function() {
            const e = t - a[0] - 1;
            return h(p(l, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function p(e, t) {
          return e.reduce((e, r) => f(e, t) > 0 ? e.concat([r]) : e, [])
        }

        function h(o, a, l) {
          const c = function(e) {
            return s.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(a);
          return o.map(t => {
            const n = l ? 0 : -r,
              o = l ? r : 0,
              s = l ? "end" : "start",
              a = c[t][s];
            return {
              index: t,
              loopPoint: a,
              slideLocation: ly(-1),
              translate: cy(e, d[t]),
              target: () => i.get() > a ? n : o
            }
          })
        }
        const m = {
          canLoop: function() {
            return u.every(({
              index: e
            }) => {
              const r = l.filter(t => t !== e);
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
        return m
      }

      function fy(e, t, r) {
        let n, o = !1;
        return {
          init: function(s) {
            r && (n = new MutationObserver(e => {
              o || (Fv(r) || r(s, e)) && function(e) {
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

      function py(e, t, r, n, o, s, a) {
        const {
          align: i,
          axis: d,
          direction: l,
          startIndex: c,
          loop: u,
          duration: f,
          dragFree: p,
          dragThreshold: h,
          inViewThreshold: m,
          slidesToScroll: v,
          skipSnaps: y,
          containScroll: g,
          watchResize: b,
          watchSlides: w,
          watchDrag: _,
          watchFocus: C
        } = s, x = {
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
        }, j = x.measure(t), P = r.map(x.measure), O = function(e, t) {
          const r = "rtl" === t,
            n = "y" === e,
            o = !n && r ? -1 : 1,
            s = {
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
            };
          return s
        }(d, l), S = O.measureSize(j), k = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(S), R = function(e, t) {
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
              return Hv(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(i, S), N = !u && !!g, D = u || !!g, {
          slideSizes: I,
          slideSizesWithGaps: T,
          startGap: E,
          endGap: L
        } = function(e, t, r, n, o, s) {
          const {
            measureSize: a,
            startEdge: i,
            endEdge: d
          } = e, l = r[0] && o, c = function() {
            if (!l) return 0;
            const e = r[0];
            return Zv(t[i] - e[i])
          }(), u = function() {
            if (!l) return 0;
            const e = s.getComputedStyle(Uv(n));
            return parseFloat(e.getPropertyValue(`margin-${d}`))
          }(), f = r.map(a), p = r.map((e, t, r) => {
            const n = !t,
              o = $v(r, t);
            return n ? f[t] + c : o ? f[t] + u : r[t + 1][i] - e[i]
          }).map(Zv);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: c,
            endGap: u
          }
        }(O, j, P, r, D, o), z = function(e, t, r, n, o, s, a, i, d) {
          const {
            startEdge: l,
            endEdge: c,
            direction: u
          } = e, f = qv(r), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return Kv(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? Kv(e).reduce((r, f, p) => {
                  const h = Uv(r) || 0,
                    m = 0 === h,
                    v = f === Wv(e),
                    y = o[l] - s[h][l],
                    g = o[l] - s[f][c],
                    b = !n && m ? u(a) : 0,
                    w = Zv(g - (!n && v ? u(i) : 0) - (y + b));
                  return p && w > t + d && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(O, S, v, u, j, P, E, L, 2), {
          snaps: M,
          snapsAligned: V
        } = function(e, t, r, n, o) {
          const {
            startEdge: s,
            endEdge: a
          } = e, {
            groupSlides: i
          } = o, d = i(n).map(e => Uv(e)[a] - e[0][s]).map(Zv).map(t.measure), l = n.map(e => r[s] - e[s]).map(e => -Zv(e)), c = i(l).map(e => e[0]).map((e, t) => e + d[t]);
          return {
            snaps: l,
            snapsAligned: c
          }
        }(O, R, j, P, z), A = -Uv(M) + Uv(T), {
          snapsContained: q,
          scrollContainLimit: H
        } = function(e, t, r, n) {
          const o = ry(-t + e, 0),
            s = r.map((e, t) => {
              const {
                min: n,
                max: s
              } = o, a = o.constrain(e), d = !t, l = $v(r, t);
              return d ? s : l || i(n, a) ? n : i(s, a) ? s : a
            }).map(e => parseFloat(e.toFixed(3))),
            a = function() {
              const e = s[0],
                t = Uv(s);
              return ry(s.lastIndexOf(e), s.indexOf(t) + 1)
            }();

          function i(e, t) {
            return Gv(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === n) return s;
              const {
                min: r,
                max: i
              } = a;
              return s.slice(r, i)
            }(),
            scrollContainLimit: a
          }
        }(S, A, V, g), F = N ? q : V, {
          limit: B
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: ry(r ? n - e : Uv(t), n)
          }
        }(A, F, u), Z = ny(Wv(F), c, u), X = Z.clone(), G = Kv(r), K = function(e, t, r, n) {
          const o = ty(),
            s = 1e3 / 60;
          let a = null,
            i = 0,
            d = 0;

          function l(e) {
            if (!d) return;
            a || (a = e, r(), r());
            const o = e - a;
            for (a = e, i += o; i >= s;) r(), i -= s;
            n(i / s), d && (d = t.requestAnimationFrame(l))
          }

          function c() {
            t.cancelAnimationFrame(d), a = null, i = 0, d = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", () => {
                e.hidden && (a = null, i = 0)
              })
            },
            destroy: function() {
              c(), o.clear()
            },
            start: function() {
              d || (d = t.requestAnimationFrame(l))
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
          scrollLooper: s,
          slideLooper: a,
          dragHandler: i,
          animation: d,
          eventHandler: l,
          scrollBounds: c,
          options: {
            loop: u
          }
        }, f) => {
          const p = e.settled(),
            h = !c.shouldConstrain(),
            m = u ? p : p && h,
            v = m && !i.pointerDown();
          v && d.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), u && (s.loop(e.direction()), a.loop()), t.to(n.get()), v && l.emit("settle"), m || l.emit("scroll")
        })(ie, e)), U = F[Z.get()], W = ly(U), $ = ly(U), Q = ly(U), Y = ly(U), J = function(e, t, r, n, o) {
          let s = 0,
            a = 0,
            i = o,
            d = .68,
            l = e.get(),
            c = 0;

          function u(e) {
            return i = e, p
          }

          function f(e) {
            return d = e, p
          }
          const p = {
            direction: function() {
              return a
            },
            duration: function() {
              return i
            },
            velocity: function() {
              return s
            },
            seek: function() {
              const t = n.get() - e.get();
              let o = 0;
              return i ? (r.set(e), s += t / i, s *= d, l += s, e.add(s), o = l - c) : (s = 0, r.set(n), e.set(n), o = t), a = Xv(o), c = l, p
            },
            settled: function() {
              return Zv(n.get() - t.get()) < .001
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
        }(W, Q, $, Y, f), ee = function(e, t, r, n, o) {
          const {
            reachedAny: s,
            removeOffset: a,
            constrain: i
          } = n;

          function d(e) {
            return e.concat().sort((e, t) => Zv(e) - Zv(t))[0]
          }

          function l(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return d(o);
            const s = o.filter(e => Xv(e) === n);
            return s.length ? d(s) : Uv(o) - r
          }
          return {
            byDistance: function(r, n) {
              const d = o.get() + r,
                {
                  index: c,
                  distance: u
                } = function(r) {
                  const n = e ? a(r) : i(r),
                    o = t.map((e, t) => ({
                      diff: l(e - n, 0),
                      index: t
                    })).sort((e, t) => Zv(e.diff) - Zv(t.diff)),
                    {
                      index: s
                    } = o[0];
                  return {
                    index: s,
                    distance: n
                  }
                }(d),
                f = !e && s(d);
              return !n || f ? {
                index: c,
                distance: r
              } : {
                index: c,
                distance: r + l(t[c] - u, 0)
              }
            },
            byIndex: function(e, r) {
              return {
                index: e,
                distance: l(t[e] - o.get(), r)
              }
            },
            shortcut: l
          }
        }(u, F, A, B, Y), te = function(e, t, r, n, o, s, a) {
          function i(o) {
            const i = o.distance,
              d = o.index !== t.get();
            s.add(i), i && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), d && (r.set(t.get()), t.set(o.index), a.emit("select"))
          }
          const d = {
            distance: function(e, t) {
              i(o.byDistance(e, t))
            },
            index: function(e, r) {
              const n = t.clone().set(e);
              i(o.byIndex(n.get(), r))
            }
          };
          return d
        }(K, Z, X, J, ee, Y, a), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(B), ne = ty(), oe = function(e, t, r, n) {
          const o = {};
          let s, a = null,
            i = null,
            d = !1;
          return {
            init: function() {
              s = new IntersectionObserver(e => {
                d || (e.forEach(e => {
                  const r = t.indexOf(e.target);
                  o[r] = e
                }), a = null, i = null, r.emit("slidesInView"))
              }, {
                root: e.parentElement,
                threshold: n
              }), t.forEach(e => s.observe(e))
            },
            destroy: function() {
              s && s.disconnect(), d = !0
            },
            get: function(e = !0) {
              if (e && a) return a;
              if (!e && i) return i;
              const t = function(e) {
                return Yv(o).reduce((t, r) => {
                  const n = parseInt(r),
                    {
                      isIntersecting: s
                    } = o[n];
                  return (e && s || !e && !s) && t.push(n), t
                }, [])
              }(e);
              return e && (a = t), e || (i = t), t
            }
          }
        }(t, r, a, m), {
          slideRegistry: se
        } = function(e, t, r, n, o, s) {
          const {
            groupSlides: a
          } = o, {
            min: i,
            max: d
          } = n, l = function() {
            const n = a(s),
              o = !e || "keepSnaps" === t;
            return 1 === r.length ? [s] : o ? n : n.slice(i, d).map((e, t, r) => {
              const n = !t,
                o = $v(r, t);
              return n ? Qv(Uv(r[0]) + 1) : o ? Qv(Wv(s) - Uv(r)[0] + 1, Uv(r)[0]) : e
            })
          }();
          return {
            slideRegistry: l
          }
        }(N, g, F, H, z, G), ae = function(e, t, r, n, o, s, a, i) {
          const d = {
            passive: !0,
            capture: !0
          };
          let l = 0;

          function c(e) {
            "Tab" === e.code && (l = (new Date).getTime())
          }
          return {
            init: function(u) {
              i && (s.add(document, "keydown", c, !1), t.forEach((t, c) => {
                s.add(t, "focus", t => {
                  (Fv(i) || i(u, t)) && function(t) {
                    if ((new Date).getTime() - l > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const s = r.findIndex(e => e.includes(t));
                    qv(s) && (o.useDuration(0), n.index(s, 0), a.emit("slideFocus"))
                  }(c)
                }, d)
              }))
            }
          }
        }(e, r, se, te, J, ne, a, C), ie = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: a,
          containerRect: j,
          slideRects: P,
          animation: K,
          axis: O,
          dragHandler: oy(O, e, n, o, Y, sy(O, o), W, K, te, J, ee, Z, a, k, p, h, y, .68, _),
          eventStore: ne,
          percentOfView: k,
          index: Z,
          indexPrevious: X,
          limit: B,
          location: W,
          offsetLocation: Q,
          previousLocation: $,
          options: s,
          resizeHandler: ay(t, a, o, r, O, b, x),
          scrollBody: J,
          scrollBounds: iy(B, Q, Y, J, k),
          scrollLooper: dy(A, B, Q, [W, Q, $, Y]),
          scrollProgress: re,
          scrollSnapList: F.map(re.get),
          scrollSnaps: F,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: uy(O, S, A, I, T, M, F, Q, r),
          slideFocus: ae,
          slidesHandler: fy(t, a, w),
          slidesInView: oe,
          slideIndexes: G,
          slideRegistry: se,
          slidesToScroll: z,
          target: Y,
          translate: cy(O, t)
        };
        return ie
      }
      const hy = {
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

      function my(e) {
        function t(e, t) {
          return Jv(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = Yv(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => Yv(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function vy(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          s = my(o),
          a = function(e) {
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
          i = ty(),
          d = function() {
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
            mergeOptions: l,
            optionsAtMedia: c,
            optionsMediaQueries: u
          } = s,
          {
            on: f,
            off: p,
            emit: h
          } = d,
          m = O;
        let v, y, g, b, w = !1,
          _ = l(hy, vy.globalOptions),
          C = l(_),
          x = [];

        function j(t) {
          const r = py(e, g, b, n, o, t, d);
          return t.loop && !r.slideLooper.canLoop() ? j(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function P(t, r) {
          w || (_ = l(_, t), C = c(_), x = r || x, function() {
            const {
              container: t,
              slides: r
            } = C, n = Hv(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = Hv(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = j(C), u([_, ...x.map(({
            options: e
          }) => e)]).forEach(e => i.add(e, "change", O)), C.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(N), v.eventHandler.init(N), v.resizeHandler.init(N), v.slidesHandler.init(N), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(N), y = a.init(N, x)))
        }

        function O(e, t) {
          const r = R();
          S(), P(l({
            startIndex: r
          }, e), t), d.emit("reInit")
        }

        function S() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), a.destroy(), i.clear()
        }

        function k(e, t, r) {
          C.active && !w && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : C.duration), v.scrollTo.index(e, r || 0))
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
            w || (w = !0, i.clear(), S(), d.emit("destroy"), d.clear())
          },
          off: p,
          on: f,
          emit: h,
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
            k(v.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            k(v.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return v.scrollProgress.get(v.offsetLocation.get())
          },
          scrollSnapList: function() {
            return v.scrollSnapList
          },
          scrollTo: k,
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
        return P(t, r), setTimeout(() => d.emit("init"), 0), N
      }

      function yy(e = {}, t = []) {
        const r = (0, X.useRef)(e),
          n = (0, X.useRef)(t),
          [o, s] = (0, X.useState)(),
          [a, i] = (0, X.useState)(),
          d = (0, X.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, X.useEffect)(() => {
          Vv(r.current, e) || (r.current = e, d())
        }, [e, d]), (0, X.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = Av(e),
              n = Av(t);
            return r.every((e, t) => Vv(e, n[t]))
          })(n.current, t) || (n.current = t, d())
        }, [t, d]), (0, X.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            vy.globalOptions = yy.globalOptions;
            const e = vy(a, r.current, n.current);
            return s(e), () => e.destroy()
          }
          s(void 0)
        }, [a, s]), [i, o]
      }

      function gy(e = {}) {
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
              slideRects: a
            } = t.internalEngine();
            "y" !== o && (r = a.map(e => e.height), n.forEach(e => t.on(e, s)), s())
          },
          destroy: function() {
            n.forEach(e => t.off(e, s));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      vy.globalOptions = void 0, yy.globalOptions = void 0, gy.globalOptions = void 0;
      const by = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function wy(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function _y(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Cy(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function xy(e = {}) {
        let t, r, n, o, s = [],
          a = [];
        const i = ["select"],
          d = ["pointerDown", "pointerUp"],
          l = ["slidesInView"],
          c = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function u(e, t) {
          ("pointerDown" === t ? Cy : _y)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            s = e.map(e => o[e]);
          return n.forEach(e => _y(e, r)), s.forEach(e => Cy(e, r)), e
        }

        function p() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          s = f(t, s, c.snapped)
        }

        function h() {
          const e = r.slidesInView();
          a = f(e, a, c.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(s, a) {
            r = s;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = a, v = f(by, xy.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, w = !!g;
            t.loop && b && (c.loop = wy(t.loop), Cy(n, c.loop)), t.draggable && w && (c.draggable = wy(t.draggable), Cy(n, c.draggable)), t.dragging && (c.dragging = wy(t.dragging), d.forEach(e => r.on(e, u))), t.snapped && (c.snapped = wy(t.snapped), i.forEach(e => r.on(e, p)), p()), t.inView && (c.inView = wy(t.inView), l.forEach(e => r.on(e, h)), h())
          },
          destroy: function() {
            d.forEach(e => r.off(e, u)), i.forEach(e => r.off(e, p)), l.forEach(e => r.off(e, h)), _y(n, c.loop), _y(n, c.draggable), _y(n, c.dragging), f([], s, c.snapped), f([], a, c.inView), Object.keys(c).forEach(e => {
              c[e] = []
            })
          }
        };
        return m
      }
      xy.globalOptions = void 0;

      function jy(e) {
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

      function Py(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Oy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Py(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = jy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Py(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Sy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ky = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ry = "foundry_qmpv6yv",
        Ny = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Oy(Oy({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ky(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sy(e.variantClassNames, e => Sy(e, e => e.split(" ")[0]))
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
      const Dy = (0, X.createContext)(null);

      function Iy() {
        const e = (0, X.useContext)(Dy);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Ty = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: s,
          align: a = "left",
          ...i
        }, d) => {
          const l = (({
              loopPagination: e = !0
            }) => {
              const t = (0, Y.rl)(),
                r = (0, Y.jt)(),
                [n, o] = (0, X.useState)([]),
                s = n.length,
                [a, i] = (0, X.useState)(0),
                [d, l] = yy({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && s > 1
                }, [gy(), xy()]),
                c = (0, X.useRef)(0),
                u = (0, X.useRef)(!1),
                f = n[a],
                p = (0, X.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                h = (0, X.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, X.useCallback)((e, t) => {
                  const r = e.internalEngine(),
                    n = e.scrollProgress(),
                    o = e.slidesInView(),
                    s = "scroll" === t;
                  e.scrollSnapList().forEach((t, a) => {
                    let i = t - n;
                    r.slideRegistry[a].forEach(a => {
                      if (s && !o.includes(a)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                        const r = e.target();
                        if (a === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (i = t - (1 + n)), 1 === e && (i = t + (1 - n))
                        }
                      });
                      const d = (l = 1 - Math.abs(i * c.current), Math.min(Math.max(l, 0), 1)).toString();
                      var l;
                      e.slideNodes()[a].style.opacity = d
                    })
                  })
                }, []);
              return (0, X.useEffect)(() => {
                l && (h(l), m(l), l.on("reInit", h).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [l, m]), (0, X.useEffect)(() => {
                l && (p(l), l.on("select", p).on("reInit", p))
              }, [l, p]), {
                setAlerts: o,
                alerts: n,
                numAlerts: s,
                emblaRef: d,
                emblaApi: l,
                prevAlert: () => l?.scrollPrev(r),
                nextAlert: () => l?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: a,
                setCurrentAlertIndex: i,
                isInitialized: u.current,
                loopPagination: e,
                canScrollNext: () => l?.canScrollNext() || !1,
                canScrollPrev: () => l?.canScrollPrev() || !1
              }
            })({
              loopPagination: n
            }),
            {
              currentAlert: c,
              isInitialized: u,
              setAlerts: f,
              numAlerts: p
            } = l;
          (0, X.useEffect)(() => {
            o && s && f([{
              status: o,
              background: s,
              align: a
            }])
          }, []);
          const h = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            m = (0, W.mergeProps)({
              className: Ny(c)
            }, h, i),
            v = e ? J.DX : "div";
          return (0, R.jsx)(Dy.Provider, {
            value: l,
            children: (0, R.jsx)(v, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...m,
              children: t
            })
          })
        }),
        Ey = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Ly = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Iy();
          if (!e && !n || !n?.status) return null;
          const o = e || Ey[n.status],
            s = ue[o],
            a = (0, W.mergeProps)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, R.jsx)(s, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...a
          })
        }),
        zy = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? J.DX : "div",
            s = (0, W.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        My = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...s
        }, a) => {
          const i = e ? J.DX : "div",
            d = (0, W.mergeProps)({
              className: "foundry_qmpv6yo"
            }, s);
          return (0, R.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...d
          })
        }),
        Vy = (0, X.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: s,
            emblaApi: a
          } = Iy(), i = (0, W.mergeProps)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, Y.UP)(s, n), l = X.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, X.useEffect)(() => {
            l && o(l)
          }, []), a?.on("slidesChanged", () => {
            l && o(l)
          }), (0, R.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, R.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Ay = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, X.useRef)(null),
            a = (0, Y.UP)(s, o),
            i = e ? J.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = av(n, s),
            c = (0, W.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, R.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...d,
            ...c,
            children: t
          })
        }),
        qy = (0, X.forwardRef)((e, t) => {
          const r = (0, W.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, R.jsx)(hv, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Hy = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const s = e ? J.DX : "div",
            a = (0, W.mergeProps)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, R.jsx)(s, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...a,
            children: r
          })
        }),
        Fy = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Iy(), s = (0, W.mergeProps)({
            className: Ry
          }, t);
          return (0, R.jsx)(Ie, {
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
        By = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Iy(), s = (0, W.mergeProps)({
            className: Ry
          }, t);
          return (0, R.jsx)(Ie, {
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
        Zy = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Iy(), s = (0, W.mergeProps)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, R.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...s,
            children: [n + 1, "/", o]
          })
        });

      function Xy(e) {
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

      function Gy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ky(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gy(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Xy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Uy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Wy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $y = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ky(Ky({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Wy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Uy(e.variantClassNames, e => Uy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Qy = $y({
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
        Yy = $y({
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
        Jy = $y({
          defaultClassName: "foundry_oahh58z",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const eg = (0, X.createContext)(null);

      function tg() {
        const e = (0, X.useContext)(eg);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const rg = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: s,
          hasBorder: a,
          isDisabled: i,
          ...d
        }, l) => {
          const c = {
              size: n,
              background: o,
              color: s,
              hasBorder: a,
              isDisabled: i
            },
            u = (0, W.mergeProps)({
              className: Yy(c)
            }, d),
            f = e ? J.DX : "div";
          return (0, R.jsx)(eg.Provider, {
            value: c,
            children: (0, R.jsx)(f, {
              ref: l,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        ng = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = tg(), a = e ? J.DX : "div", i = (0, W.mergeProps)({
            className: Jy({
              size: s
            })
          }, n);
          return (0, R.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        og = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ue[e],
            o = (0, W.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, R.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        sg = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = tg(), s = (0, W.mergeProps)({
            className: Qy({
              background: n
            })
          }, t);
          return (0, R.jsx)(Ie, {
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
      var ag = "ToastProvider",
        [ig, dg, lg] = (0, vd.N)("Toast"),
        [cg, ug] = (0, mi.A)("Toast", [lg]),
        [fg, pg] = cg(ag),
        hg = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            announcerContainer: a,
            children: i
          } = e, [d, l] = X.useState(null), [c, u] = X.useState(0), f = X.useRef(!1), p = X.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${ag}\`. Expected non-empty \`string\`.`), (0, R.jsx)(ig.Provider, {
            scope: t,
            children: (0, R.jsx)(fg, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: s,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: X.useCallback(() => u(e => e + 1), []),
              onToastRemove: X.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: f,
              isClosePausedRef: p,
              announcerContainer: a,
              children: i
            })
          })
        };
      hg.displayName = ag;
      var mg = "ToastViewport",
        vg = ["F8"],
        yg = "toast.viewportPause",
        gg = "toast.viewportResume",
        bg = X.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = vg,
            label: o = "Notifications ({hotkey})",
            ...s
          } = e, a = pg(mg, r), i = dg(r), d = X.useRef(null), l = X.useRef(null), c = X.useRef(null), u = X.useRef(null), f = (0, hi.s)(t, u, a.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = a.toastCount > 0;
          X.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), X.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (h && e && t) {
              const r = () => {
                  if (!a.isClosePausedRef.current) {
                    const e = new CustomEvent(yg);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (a.isClosePausedRef.current) {
                    const e = new CustomEvent(gg);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !1
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
          }, [h, a.isClosePausedRef]);
          const m = X.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Mg(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return X.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void l.current?.focus();
                  const o = m({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    s = o.findIndex(e => e === r);
                  Vg(o.slice(s + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, m]), (0, R.jsxs)(vi.lg, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, R.jsx)(_g, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                Vg(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, R.jsx)(ig.Slot, {
              scope: r,
              children: (0, R.jsx)(_i.sG.ol, {
                tabIndex: -1,
                ...s,
                ref: f
              })
            }), h && (0, R.jsx)(_g, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Vg(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      bg.displayName = mg;
      var wg = "ToastFocusProxy",
        _g = X.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, s = pg(wg, r);
          return (0, R.jsx)(ji.VisuallyHidden, {
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
      _g.displayName = wg;
      var Cg = "Toast",
        xg = X.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            ...a
          } = e, [i, d] = (0, xi.useControllableState)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: s,
            caller: Cg
          });
          return (0, R.jsx)(wi.C, {
            present: r || i,
            children: (0, R.jsx)(Og, {
              open: i,
              ...a,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, Ll.c)(e.onPause),
              onResume: (0, Ll.c)(e.onResume),
              onSwipeStart: (0, pi.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, pi.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, pi.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, pi.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        });
      xg.displayName = Cg;
      var [jg, Pg] = cg(Cg, {
        onClose() {}
      }), Og = X.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: s,
          onClose: a,
          onEscapeKeyDown: i,
          onPause: d,
          onResume: l,
          onSwipeStart: c,
          onSwipeMove: u,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...h
        } = e, m = pg(Cg, r), [v, y] = X.useState(null), g = (0, hi.s)(t, y), b = X.useRef(null), w = X.useRef(null), _ = o || m.duration, C = X.useRef(0), x = X.useRef(_), j = X.useRef(0), {
          onToastAdd: P,
          onToastRemove: O
        } = m, S = (0, Ll.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), a()
        }), k = X.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(j.current), C.current = (new Date).getTime(), j.current = window.setTimeout(S, e))
        }, [S]);
        X.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                k(x.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - C.current;
                x.current = x.current - e, window.clearTimeout(j.current), d?.()
              };
            return e.addEventListener(yg, r), e.addEventListener(gg, t), () => {
              e.removeEventListener(yg, r), e.removeEventListener(gg, t)
            }
          }
        }, [m.viewport, _, d, l, k]), X.useEffect(() => {
          s && !m.isClosePausedRef.current && k(_)
        }, [s, _, m.isClosePausedRef, k]), X.useEffect(() => () => {
          window.clearTimeout(j.current)
        }, []), X.useEffect(() => (P(), () => O()), [P, O]);
        const N = X.useMemo(() => v ? Eg(v) : null, [v]);
        return m.viewport ? (0, R.jsxs)(R.Fragment, {
          children: [N && (0, R.jsx)(Sg, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: N
          }), (0, R.jsx)(jg, {
            scope: r,
            onClose: S,
            children: Ya.createPortal((0, R.jsx)(ig.ItemSlot, {
              scope: r,
              children: (0, R.jsx)(vi.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, pi.mK)(i, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || S(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, R.jsx)(_i.sG.li, {
                  tabIndex: 0,
                  "data-state": s ? "open" : "closed",
                  "data-swipe-direction": m.swipeDirection,
                  ...h,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, pi.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, S()))
                  }),
                  onPointerDown: (0, pi.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, pi.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      s = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      a = o ? s(0, t) : 0,
                      i = o ? 0 : s(0, r),
                      d = "touch" === e.pointerType ? 10 : 2,
                      l = {
                        x: a,
                        y: i
                      },
                      f = {
                        originalEvent: e,
                        delta: l
                      };
                    n ? (w.current = l, Lg("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : zg(l, m.swipeDirection, d) ? (w.current = l, Lg("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (b.current = null)
                  }),
                  onPointerUp: (0, pi.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      zg(t, m.swipeDirection, m.swipeThreshold) ? Lg("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : Lg("toast.swipeCancel", f, n, {
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
      }), Sg = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = pg(Cg, t), [s, a] = X.useState(!1), [i, d] = X.useState(!1);
        return function(e = () => {}) {
          const t = (0, Ll.c)(e);
          (0, zl.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => a(!0)), X.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, R.jsx)(bi.Portal, {
          asChild: !0,
          container: o.announcerContainer || void 0,
          children: (0, R.jsx)(ji.VisuallyHidden, {
            ...n,
            children: s && (0, R.jsxs)(R.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      X.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, R.jsx)(_i.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var kg = X.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, R.jsx)(_i.sG.div, {
          ...n,
          ref: t
        })
      });
      kg.displayName = "ToastDescription";
      var Rg = "ToastAction",
        Ng = X.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, R.jsx)(Tg, {
            altText: r,
            asChild: !0,
            children: (0, R.jsx)(Ig, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Rg}\`. Expected non-empty \`string\`.`), null)
        });
      Ng.displayName = Rg;
      var Dg = "ToastClose",
        Ig = X.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Pg(Dg, r);
          return (0, R.jsx)(Tg, {
            asChild: !0,
            children: (0, R.jsx)(_i.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, pi.mK)(e.onClick, o.onClose)
            })
          })
        });
      Ig.displayName = Dg;
      var Tg = X.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, R.jsx)(_i.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function Eg(e) {
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
              } else t.push(...Eg(e))
          }
        }), t
      }

      function Lg(e, t, r, {
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
        }), n ? (0, _i.hO)(o, s) : o.dispatchEvent(s)
      }
      var zg = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          s = n > o;
        return "left" === t || "right" === t ? s && n > r : !s && o > r
      };

      function Mg(e) {
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

      function Vg(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var Ag = hg,
        qg = bg,
        Hg = xg,
        Fg = kg,
        Bg = Ng,
        Zg = Ig;

      function Xg(e) {
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

      function Gg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Kg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gg(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Xg(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ug(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Wg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $g = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Kg(Kg({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Wg(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ug(e.variantClassNames, e => Ug(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Qg = $g({
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
        Yg = $g({
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
        Jg = $g({
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
      const eb = ({
          testId: e,
          ...t
        }) => (0, R.jsx)(Ag, {
          "data-testid": e,
          ...t
        }),
        tb = (0, X.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
            className: Jg({
              position: r
            })
          }, n);
          return (0, R.jsx)(qg, {
            ref: o,
            "data-testid": t,
            ...s,
            children: e
          })
        }),
        rb = (0, X.createContext)(null);

      function nb() {
        const e = (0, X.useContext)(rb);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const ob = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, s) => {
          const a = e ? J.DX : Hg,
            i = (0, W.mergeProps)({
              className: Yg({
                appearance: n
              })
            }, o);
          return (0, R.jsx)(rb.Provider, {
            value: {
              appearance: n
            },
            children: (0, R.jsx)(a, {
              ref: s,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        sb = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? J.DX : Fg,
            a = (0, W.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, R.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        ab = {
          danger: ue.CircleX,
          information: ue.Info,
          success: ue.CircleCheck,
          warning: ue.TriangleAlert,
          avocado: ue.CircleCheck
        },
        ib = (0, X.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = nb(), o = e ? J.DX : ab[n], s = (0, W.mergeProps)({
            className: Qg({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, R.jsx)(o, {
            ref: r,
            ...s
          })
        }),
        db = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, R.jsx)(Bg, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, R.jsx)(J.DX, {
              children: t
            }) : (0, R.jsx)(Ce, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        lb = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, s) => {
          const a = (0, W.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, R.jsx)(Zg, {
            ref: s,
            "data-testid": r,
            ...a,
            children: e ? (0, R.jsx)(J.DX, {
              children: t
            }) : (0, R.jsx)(hv, {
              size: "SM",
              label: n
            })
          })
        });

      function cb(e) {
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

      function ub(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function fb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ub(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = cb(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ub(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function pb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        mb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fb(fb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) hb(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pb(e.variantClassNames, e => pb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        vb = mb({
          defaultClassName: "foundry_m1icrx6 foundry_1d5mo5m0",
          variantClassNames: {
            size: {
              MD: "foundry_m1icrx7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
              LG: "foundry_m1icrx8 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yb = mb({
          defaultClassName: "foundry_m1icrx3",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gb = mb({
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

      function bb() {
        const e = (0, X.useContext)(wb);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const wb = (0, X.createContext)(null),
        _b = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, s) => {
          const a = (0, W.mergeProps)({
              className: gb({
                size: n
              })
            }, o),
            i = r ? J.DX : "ol";
          return (0, R.jsx)(wb.Provider, {
            value: {
              size: n
            },
            children: (0, R.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        }),
        Cb = (0, X.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, X.useRef)(null),
            {
              size: i
            } = bb(),
            {
              itemProps: d
            } = function(e, t) {
              let {
                isCurrent: r,
                isDisabled: n,
                "aria-current": o,
                elementType: s = "a",
                ...a
              } = e, {
                linkProps: i
              } = av({
                isDisabled: n || r,
                elementType: s,
                ...a
              }, t), d = {};
              return /^h[1-6]$/.test(s) || (d = i), r && (d["aria-current"] = o || "page", d.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": n,
                  ...d
                }
              }
            }({
              isCurrent: e,
              children: t
            }, a),
            l = r ? J.DX : "a",
            c = (0, W.mergeProps)({
              className: (0, ce.clsx)(vb({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, R.jsx)("li", {
            className: yb({
              size: i
            }),
            ref: s,
            children: (0, R.jsx)(l, {
              ref: a,
              ...c,
              children: t
            })
          })
        }),
        xb = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ue[e];
          return (0, R.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        jb = (0, X.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, s) => {
          const [a, i] = (0, X.useState)(r), {
            size: d
          } = bb(), l = (0, W.mergeProps)({
            className: yb({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, R.jsx)("li", {
            ref: s,
            ...l,
            children: (0, R.jsxs)(Hc, {
              open: a,
              onOpenChange: () => i(!a),
              children: [(0, R.jsx)(Bc, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, R.jsx)($c, {
                children: (0, R.jsx)(Yc, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, R.jsx)(cu, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Pb = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = t ? J.DX : gu,
            a = (0, W.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, R.jsx)(s, {
            ref: o,
            ...a,
            children: e
          })
        });

      function Ob(e) {
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

      function Sb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sb(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ob(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Rb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Nb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Db = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kb(kb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Nb(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rb(e.variantClassNames, e => Rb(e, e => e.split(" ")[0]))
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
              SM: "foundry_18omk9t5 foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdt foundry_tdsdcdq",
              MD: "foundry_18omk9t6 foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdt foundry_tdsdcdp"
            },
            type: {
              text: "foundry_18omk9t7",
              number: "foundry_18omk9t8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ib = (0, X.createContext)(null);

      function Tb() {
        const e = (0, X.useContext)(Ib);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Eb = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...s
        }, a) => {
          const i = e ? J.DX : "div",
            d = (0, W.mergeProps)({
              className: Db({
                appearance: r,
                type: o,
                size: n
              })
            }, s);
          return (0, R.jsx)(Ib.Provider, {
            value: {
              type: o
            },
            children: (0, R.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...d
            })
          })
        }),
        Lb = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? J.DX : "div",
            s = (0, W.mergeProps)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, R.jsx)(o, {
            ref: n,
            ...s
          })
        }),
        zb = (0, X.forwardRef)(({
          icon: e,
          iconElement: t,
          label: r,
          ...n
        }, o) => {
          const s = t || (e ? ue[e] : null),
            a = (0, W.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: r || ""
            }, n);
          return s && (0, R.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        Mb = () => {
          const e = (0, Y.Ub)(W.breakpoints.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Vb = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Ab(e) {
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

      function qb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Hb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qb(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ab(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Bb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Zb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Hb(Hb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Bb(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fb(e.variantClassNames, e => Fb(e, e => e.split(" ")[0]))
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
      const Xb = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, R.jsx)(gc, {
            ref: r,
            ...n
          })
        }),
        Gb = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, R.jsx)(bc, {
            ref: r,
            ...n
          })
        }),
        Kb = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, R.jsx)(wc, {
            ref: r,
            ...n
          })
        }),
        Ub = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Y.rl)(),
            o = (0, W.mergeProps)({
              "data-testid": e,
              className: Zb({
                isTouchDevice: n
              })
            }, t);
          return (0, R.jsx)(_c, {
            ref: r,
            ...o
          })
        }),
        Wb = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e
          }, t);
          return (0, R.jsx)(Cc, {
            ref: r,
            ...n
          })
        });

      function $b(e) {
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

      function Qb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Yb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qb(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = $b(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Jb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ew = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Yb(Yb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ew(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jb(e.variantClassNames, e => Jb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rw = tw({
          defaultClassName: "foundry_xov33n6",
          variantClassNames: {
            align: {
              left: "foundry_xov33n7",
              center: "foundry_xov33n8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nw = tw({
          defaultClassName: "foundry_xov33na",
          variantClassNames: {
            appearance: {
              sentence: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
              uppercase: "foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdo foundry_tdsdcdt"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ow = (0, X.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, X.createRef)(),
          dialogSpringRef: Ba(),
          overlaySpringRef: Ba()
        }),
        sw = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: a,
          ...i
        }) => {
          const [d, l] = (0, Y.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, Y.ZC)(d);
          return (0, R.jsx)(ow.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: a,
              contentId: (0, X.useId)(),
              descriptionId: (0, X.useId)(),
              triggerRef: (0, X.useRef)(null),
              dialogSpringRef: Xa(),
              overlaySpringRef: Xa()
            },
            children: (0, R.jsx)(aw, {
              ...i
            })
          })
        },
        aw = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, X.useContext)(ow), n = (0, W.mergeProps)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, R.jsx)(Jd.Root, {
            ...n
          })
        },
        iw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, X.useContext)(ow), s = (0, Y.UP)(o, r), a = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, R.jsx)(Jd.Trigger, {
            ...a,
            ref: s
          })
        }),
        dw = e => (0, R.jsx)(Jd.Portal, {
          forceMount: !0,
          ...e
        }),
        lw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: s
          } = (0, X.useContext)(ow), a = Vb(), i = (0, Y.jt)(), d = Ga(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: ra.stiff,
            immediate: i || s
          }), l = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = fi(Jd.Overlay);
          return (0, X.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, R.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        cw = (0, X.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, s) => {
          const {
            isOpen: a,
            setIsOpen: i,
            openImmediately: d,
            contentId: l,
            triggerRef: c,
            onOpenTransitionStart: u,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: h,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = (0, X.useContext)(ow), y = (0, Y.rl)(), g = (0, Y.jt)(), b = (0, X.useRef)(null), w = Mb(), {
            bindDrag: _
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const s = Vb(),
              a = Mb(),
              i = (0, X.useRef)();
            var d;
            return {
              bindDrag: (d = ({
                velocity: [, d],
                offset: [, l],
                direction: [, c],
                cancel: u,
                last: f,
                first: p,
                target: h
              }) => {
                const {
                  height: m
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
                  }(h, c)), (!i.current || l < -70) && u(), i.current) {
                  const e = 100 * (m - l) / m;
                  r.start({
                    ...s(e),
                    immediate: !0
                  }), t.start({
                    ...a(e),
                    immediate: !0
                  })
                }
                f && (l > .5 * m || d > .5 && c > 0 ? (t.start({
                  ...a(0),
                  immediate: !1,
                  config: ra.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...s(0),
                  immediate: !1,
                  config: ra.stiff
                })) : (t.start({
                  ...a(100),
                  immediate: !1,
                  config: ra.stiff
                }), r.start({
                  ...s(100),
                  immediate: !1,
                  config: ra.stiff
                })))
              }, cr(ur), Sr({
                drag: d
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
              i(!1), p?.()
            },
            onCloseTransitionComplete: h
          }), C = Ga(a, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: a ? 100 : 0,
            config: ra.stiff,
            ref: m,
            immediate: g || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : h?.()
            }
          });
          (0, X.useEffect)(() => {
            m.start()
          }, [a]);
          const x = (0, Y.UP)(b, s),
            j = y && !g && !n && _(),
            P = (0, W.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, j || {}, o),
            O = fi(Jd.Content);
          return C((t, r) => r ? (0, R.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, R.jsx)(O, {
              forceMount: !0,
              ref: x,
              ...P,
              style: t,
              children: e
            })
          }) : null)
        }),
        uw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }, t);
          return (0, R.jsx)(Jd.Title, {
            ref: r,
            ...n
          })
        }),
        fw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e
          }, t);
          return (0, R.jsx)(Jd.Description, {
            ref: r,
            ...n
          })
        }),
        pw = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, R.jsxs)(Xb, {
            ref: n,
            ...o,
            children: [(0, R.jsx)(Gb, {
              className: "foundry_xov33ni",
              children: e
            }), (0, R.jsx)(Kb, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, R.jsx)(Ub, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        hw = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            s = e ? J.DX : "div";
          return (0, R.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        mw = (0, X.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
              "data-testid": r,
              className: rw({
                align: e
              })
            }, n),
            a = t ? J.DX : "header";
          return (0, R.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        vw = (0, X.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            "data-testid": e,
            className: nw({
              appearance: t
            })
          }, r);
          return (0, R.jsx)(Jd.Title, {
            ref: n,
            ...o
          })
        }),
        yw = (0, X.forwardRef)((e, t) => {
          const r = (0, W.mergeProps)({
            className: "foundry_xov33n4"
          }, e);
          return (0, R.jsx)(Ie, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        gw = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            s = t ? (0, R.jsx)(J.DX, {
              ref: n,
              ...o
            }) : (0, R.jsx)(hv, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, R.jsx)(Jd.Close, {
            asChild: !0,
            children: s
          })
        }),
        bw = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            s = e ? J.DX : "div";
          return (0, R.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        ww = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            s = e ? J.DX : "footer";
          return (0, R.jsx)(s, {
            ref: n,
            ...o
          })
        });
      var _w = "Avatar",
        [Cw, xw] = (0, mi.A)(_w),
        jw = [0, () => {}],
        [Pw, Ow] = Cw(_w),
        Sw = X.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, s] = X.useState("idle"), [a, i] = function() {
            let e = jw; {
              e = X.useState(0);
              const [t] = e, r = X.useRef(!1);
              X.useEffect(() => {
                t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [t])
            }
            return e
          }();
          return (0, R.jsx)(Pw, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: s,
            imageCount: a,
            setImageCount: i,
            children: (0, R.jsx)(_i.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      Sw.displayName = _w;
      var kw = "AvatarImage",
        Rw = X.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...s
          } = e, a = Ow(kw, r);
          var i;
          i = a.setImageCount, X.useEffect(() => (i(e => e + 1), () => {
            i(e => e - 1)
          }), [i]);
          const d = function(e, {
              loadingStatus: t,
              setLoadingStatus: r,
              referrerPolicy: n,
              crossOrigin: o
            }) {
              return (0, zl.N)(() => {
                if (!e) return void r("error");
                const t = new window.Image,
                  s = e => {
                    const t = e.currentTarget;
                    r(Dw(t))
                  },
                  a = () => r("error");
                return t.addEventListener("load", s), t.addEventListener("error", a), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(Dw(t)), () => {
                  t.removeEventListener("load", s), t.removeEventListener("error", a), r("idle")
                }
              }, [e, o, n, r]), t
            }(n, {
              referrerPolicy: s.referrerPolicy,
              crossOrigin: s.crossOrigin,
              loadingStatus: a.imageLoadingStatus,
              setLoadingStatus: a.setImageLoadingStatus
            }),
            l = (0, Ll.c)(e => {
              o?.(e)
            }),
            c = X.useRef(d);
          return (0, zl.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, R.jsx)(_i.sG.img, {
            ...s,
            ref: t,
            src: n
          }) : null
        });
      Rw.displayName = kw;
      var Nw = "AvatarFallback";

      function Dw(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function Iw(e) {
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

      function Ew(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tw(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Iw(o)) in n ? Object.defineProperty(n, o, {
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

      function Lw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      X.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, s = Ow(Nw, r), [a, i] = X.useState(void 0 === n);
        return X.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), a && "loaded" !== s.imageLoadingStatus ? (0, R.jsx)(_i.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Nw;
      var zw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ew(Ew({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zw(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lw(e.variantClassNames, e => Lw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Vw = Mw({
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
        Aw = "var(--foundry_v912w22)",
        qw = "var(--foundry_v912w23)",
        Hw = Mw({
          defaultClassName: "foundry_v912w2i",
          variantClassNames: {
            isDisabled: {
              true: "foundry_v912w2j",
              false: "foundry_v912w2k"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fw = Mw({
          defaultClassName: "foundry_v912w27",
          variantClassNames: {
            size: {
              XS: "foundry_v912w28",
              SM: "foundry_v912w29",
              MD: "foundry_v912w2a",
              LG: "foundry_v912w2b",
              XL: "foundry_v912w2c"
            },
            isDisabled: {
              true: "foundry_v912w2d",
              false: "foundry_v912w2e"
            },
            isFallback: {
              true: "foundry_v912w2f",
              false: "foundry_v912w2g"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !0,
              isFallback: !0
            }, "foundry_v912w2h"]
          ]
        }),
        Bw = "var(--foundry_v912w21)",
        Zw = "var(--foundry_v912w20)",
        Xw = Mw({
          defaultClassName: "foundry_v912w2l",
          variantClassNames: {
            status: {
              online: "foundry_v912w2m",
              offline: "foundry_v912w2n",
              away: "foundry_v912w2o",
              busy: "foundry_v912w2p"
            },
            size: {
              XS: "foundry_v912w2q",
              SM: "foundry_v912w2r",
              MD: "foundry_v912w2s",
              LG: "foundry_v912w2t",
              XL: "foundry_v912w2u"
            },
            isDisabled: {
              true: "foundry_v912w2v",
              false: "foundry_v912w2w"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Gw = (0, X.createContext)(null);

      function Kw() {
        const e = (0, X.useContext)(Gw);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Uw = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: s = !1,
          ...a
        }, i) => {
          const d = (0, W.mergeProps)({
            "data-testid": r,
            "aria-disabled": s,
            className: Vw({
              isDisabled: s
            }),
            asChild: e
          }, a);
          return (0, R.jsx)(Gw.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: s
            },
            children: (0, R.jsx)(Sw, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        Ww = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: s,
            isDisabled: a
          } = Kw(), [i, d] = (0, X.useState)(!1);
          (0, X.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, W.mergeProps)({
              className: Hw({
                isDisabled: a
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, R.jsx)("span", {
            className: Fw({
              size: s,
              isDisabled: a,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, R.jsx)(Rw, {
              ref: o,
              ...c
            })
          })
        }),
        $w = (0, X.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, X.useRef)(null),
            {
              size: s,
              status: a,
              isDisabled: i
            } = Kw(),
            d = a || "online",
            l = (0, Y.UP)(o, n),
            c = (0, W.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Xw({
                status: d,
                size: s,
                isDisabled: i
              }),
              style: (0, K.DI)({
                [Zw]: t?.online,
                [Bw]: t?.offline,
                [Aw]: t?.away,
                [qw]: t?.busy
              })
            }, r);
          return (0, R.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function Qw(e) {
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
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Jw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yw(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Qw(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
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
        r_ = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Jw(Jw({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) t_(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return e_(e.variantClassNames, e => e_(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_2jlbzt2 foundry_8kowh41 foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            isActive: {
              true: "foundry_2jlbzt3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const n_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            a = e ? J.DX : "nav";
          return (0, R.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        o_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            a = e ? J.DX : "div";
          return (0, R.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        s_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, X.useRef)(null),
            i = (0, Y.UP)(a, s),
            {
              linkProps: d,
              isPressed: l
            } = av(o, a),
            c = (0, W.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, ce.clsx)(r_({
                isActive: r
              }))
            }, d),
            u = e ? J.DX : "a";
          return (0, R.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        a_ = (0, X.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, R.jsx)(s_, {
            ref: n,
            ...o,
            children: (0, R.jsx)(ue.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        i_ = (0, X.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, R.jsx)(s_, {
            ref: n,
            ...o,
            children: (0, R.jsx)(ue.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        d_ = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, W.mergeProps)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, n),
            s = e ? J.DX : "span";
          return (0, R.jsx)(s, {
            ...o,
            children: t || "..."
          })
        },
        l_ = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            s = e ? J.DX : "div";
          return (0, R.jsx)(s, {
            ...o,
            children: t
          })
        },
        c_ = (0, X.createContext)(null);

      function u_() {
        const e = (0, X.useContext)(c_);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const f_ = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, X.useId)(),
            s = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            a = e ? J.DX : "div";
          return (0, R.jsx)(c_.Provider, {
            value: {
              labelId: o
            },
            children: (0, R.jsx)(a, {
              ...s,
              children: t
            })
          })
        },
        p_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = u_(), a = (0, W.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? J.DX : "label";
          return (0, R.jsx)(i, {
            ref: o,
            id: s,
            ...a,
            children: t
          })
        }),
        h_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = u_(), a = (0, W.mergeProps)({
            "aria-labelledby": s,
            className: "foundry_2jlbztc"
          }, n), i = e ? J.DX : Gu;
          return (0, R.jsxs)(i, {
            ...a,
            children: [(0, R.jsxs)($u, {
              ref: o,
              children: [(0, R.jsx)(Qu, {
                placeholder: r
              }), (0, R.jsx)(Yu, {})]
            }), (0, R.jsx)(sf, {
              children: (0, R.jsx)(Ku, {
                children: (0, R.jsx)(Wu, {
                  children: t
                })
              })
            })]
          })
        }),
        m_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
              "data-testid": r
            }, n),
            a = e ? J.DX : rf;
          return (0, R.jsx)(a, {
            ...s,
            ref: o,
            children: (0, R.jsx)(nf, {
              children: t
            })
          })
        }),
        v_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            a = e ? J.DX : "p";
          return (0, R.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        });
      var y_ = !1,
        g_ = G[" useSyncExternalStore ".trim().toString()];

      function b_() {
        return () => {}
      }
      var w_ = "function" == typeof g_ ? function() {
          return g_(b_, () => !0, () => !1)
        } : function() {
          const [e, t] = X.useState(y_);
          return X.useEffect(() => {
            y_ || (y_ = !0, t(!0))
          }, []), e
        },
        __ = "rovingFocusGroup.onEntryFocus",
        C_ = {
          bubbles: !1,
          cancelable: !0
        },
        x_ = "RovingFocusGroup",
        [j_, P_, O_] = (0, vd.N)(x_),
        [S_, k_] = (0, mi.A)(x_, [O_]),
        [R_, N_] = S_(x_),
        D_ = X.forwardRef((e, t) => (0, R.jsx)(j_.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, R.jsx)(j_.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, R.jsx)(I_, {
              ...e,
              ref: t
            })
          })
        }));
      D_.displayName = x_;
      var I_ = X.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: s,
            currentTabStopId: a,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: d,
            onEntryFocus: l,
            preventScrollOnEntryFocus: c = !1,
            ...u
          } = e, f = X.useRef(null), p = (0, hi.s)(t, f), h = (0, pd.jH)(s), [m, v] = (0, xi.useControllableState)({
            prop: a,
            defaultProp: i ?? null,
            onChange: d,
            caller: x_
          }), [y, g] = X.useState(!1), b = (0, Ll.c)(l), w = P_(r), _ = X.useRef(!1), [C, x] = X.useState(0);
          return X.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(__, b), () => e.removeEventListener(__, b)
          }, [b]), (0, R.jsx)(R_, {
            scope: r,
            orientation: n,
            dir: h,
            loop: o,
            currentTabStopId: m,
            onItemFocus: X.useCallback(e => v(e), [v]),
            onItemShiftTab: X.useCallback(() => g(!0), []),
            onFocusableItemAdd: X.useCallback(() => x(e => e + 1), []),
            onFocusableItemRemove: X.useCallback(() => x(e => e - 1), []),
            children: (0, R.jsx)(_i.sG.div, {
              tabIndex: y || 0 === C ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, pi.mK)(e.onMouseDown, () => {
                _.current = !0
              }),
              onFocus: (0, pi.mK)(e.onFocus, e => {
                const t = !_.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(__, C_);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === m),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    z_(n, c)
                  }
                }
                _.current = !1
              }),
              onBlur: (0, pi.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        T_ = "RovingFocusGroupItem",
        E_ = X.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: s,
            children: a,
            ...i
          } = e, d = (0, yi.useId)(), l = s || d, c = N_(T_, r), u = c.currentTabStopId === l, f = P_(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: m
          } = c, v = w_();
          return (0, zl.N)(() => {
            if (v && n) return p(), () => h()
          }, [v, n, p, h]), X.useEffect(() => {
            if (!v && n) return p(), () => h()
          }, [v, n, p, h]), (0, R.jsx)(j_.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, R.jsx)(_i.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, pi.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, pi.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, pi.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : L_[n]
                }(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = f().filter(e => e.focusable);
                  let s = o.map(e => e.ref.current);
                  if ("last" === t) s.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && s.reverse();
                    const o = s.indexOf(e.currentTarget);
                    s = c.loop ? (n = o + 1, (r = s).map((e, t) => r[(n + t) % r.length])) : s.slice(o + 1)
                  }
                  setTimeout(() => z_(s))
                }
                var r, n
              }),
              children: "function" == typeof a ? a({
                isCurrentTabStop: u,
                hasTabStop: null != m
              }) : a
            })
          })
        });
      E_.displayName = T_;
      var L_ = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function z_(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var M_ = D_,
        V_ = E_,
        A_ = "Toggle",
        q_ = X.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...s
          } = e, [a, i] = (0, xi.useControllableState)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: A_
          });
          return (0, R.jsx)(_i.sG.button, {
            type: "button",
            "aria-pressed": a,
            "data-state": a ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...s,
            ref: t,
            onClick: (0, pi.mK)(e.onClick, () => {
              e.disabled || i(!a)
            })
          })
        });
      q_.displayName = A_;
      var H_ = "ToggleGroup",
        [F_, B_] = (0, mi.A)(H_, [k_]),
        Z_ = k_(),
        X_ = X.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, R.jsx)(U_, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, R.jsx)(W_, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${H_}\``)
        });
      X_.displayName = H_;
      var [G_, K_] = F_(H_), U_ = X.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, xi.useControllableState)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: H_
        });
        return (0, R.jsx)(G_, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: X.useMemo(() => a ? [a] : [], [a]),
          onItemActivate: i,
          onItemDeactivate: X.useCallback(() => i(""), [i]),
          children: (0, R.jsx)(Y_, {
            ...s,
            ref: t
          })
        })
      }), W_ = X.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, xi.useControllableState)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: H_
        }), d = X.useCallback(e => i((t = []) => [...t, e]), [i]), l = X.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, R.jsx)(G_, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: a,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, R.jsx)(Y_, {
            ...s,
            ref: t
          })
        })
      });
      X_.displayName = H_;
      var [$_, Q_] = F_(H_), Y_ = X.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: s,
          dir: a,
          loop: i = !0,
          ...d
        } = e, l = Z_(r), c = (0, pd.jH)(a), u = {
          dir: c,
          ...d
        };
        return (0, R.jsx)($_, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, R.jsx)(M_, {
            asChild: !0,
            ...l,
            orientation: s,
            dir: c,
            loop: i,
            children: (0, R.jsx)(_i.sG.div, {
              ...u,
              ref: t
            })
          }) : (0, R.jsx)(_i.sG.div, {
            ...u,
            ref: t
          })
        })
      }), J_ = "ToggleGroupItem", eC = X.forwardRef((e, t) => {
        const r = K_(J_, e.__scopeToggleGroup),
          n = Q_(J_, e.__scopeToggleGroup),
          o = Z_(e.__scopeToggleGroup),
          s = r.value.includes(e.value),
          a = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: s,
            disabled: a
          },
          d = X.useRef(null);
        return n.rovingFocus ? (0, R.jsx)(V_, {
          asChild: !0,
          ...o,
          focusable: !a,
          active: s,
          ref: d,
          children: (0, R.jsx)(tC, {
            ...i,
            ref: t
          })
        }) : (0, R.jsx)(tC, {
          ...i,
          ref: t
        })
      });
      eC.displayName = J_;
      var tC = X.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          value: n,
          ...o
        } = e, s = K_(J_, r), a = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === s.type ? a : void 0;
        return (0, R.jsx)(q_, {
          ...i,
          ...o,
          ref: t,
          onPressedChange: e => {
            e ? s.onItemActivate(n) : s.onItemDeactivate(n)
          }
        })
      });

      function rC(e) {
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

      function nC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function oC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nC(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = rC(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sC(e, t) {
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
        iC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = oC(oC({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) aC(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sC(e.variantClassNames, e => sC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        dC = "var(--foundry_zxwkyk2)",
        lC = "var(--foundry_zxwkyk3)",
        cC = iC({
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
        uC = iC({
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
        fC = iC({
          defaultClassName: "foundry_zxwkykh",
          variantClassNames: {
            variant: {
              default: "foundry_zxwkyki",
              number: "foundry_zxwkykj"
            },
            size: {
              SM: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pC = "var(--foundry_zxwkyk1)",
        hC = "var(--foundry_zxwkyk0)",
        mC = iC({
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
      const vC = (0, X.createContext)(null);

      function yC() {
        const e = (0, X.useContext)(vC);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const gC = (0, X.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
            "data-testid": e,
            className: cC({
              size: t
            }),
            type: r
          }, n);
          return (0, R.jsx)(vC.Provider, {
            value: {
              size: t
            },
            children: (0, R.jsx)(X_, {
              ref: o,
              ...s
            })
          })
        }),
        bC = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = yC(), o = (0, W.mergeProps)({
            "data-testid": e,
            className: uC({
              size: n
            })
          }, t);
          return (0, R.jsx)(eC, {
            ref: r,
            ...o
          })
        }),
        wC = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = yC(), o = ue[e];
          return (0, R.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        _C = (0, X.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
            "data-testid": e,
            className: mC({
              status: r
            }),
            style: (0, K.DI)({
              [hC]: t?.online,
              [pC]: t?.offline,
              [dC]: t?.away,
              [lC]: t?.busy
            })
          }, n);
          return (0, R.jsx)("span", {
            ref: o,
            ...s
          })
        }),
        CC = (0, X.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = yC(), s = (0, W.mergeProps)({
            "data-testid": e,
            className: fC({
              variant: t,
              size: o
            })
          }, r);
          return (0, R.jsx)("span", {
            ref: n,
            ...s
          })
        });
      var xC = r(51858);

      function jC(e) {
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

      function PC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function OC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? PC(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = jC(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : PC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function SC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var kC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        RC = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = OC(OC({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) kC(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return SC(e.variantClassNames, e => SC(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_lroh6l1 foundry_8kowh41 foundry_1d5mo5m0 foundry_1qqcnuao foundry_1qqcnuar",
          variantClassNames: {
            size: {
              SM: "foundry_lroh6l2 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
              MD: "foundry_lroh6l3 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf",
              LG: "foundry_lroh6l4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
              XL: "foundry_lroh6l5 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const NC = (0, X.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        DC = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, s] = (0, Y.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), a = (0, W.mergeProps)({
            open: o,
            onOpenChange: s
          }, n);
          return (0, R.jsx)(NC.Provider, {
            value: {
              open: o,
              setOpen: s
            },
            children: (0, R.jsx)(xC.Root, {
              ...a
            })
          })
        },
        IC = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, R.jsx)(xC.Trigger, {
            ref: r,
            ...n
          })
        }),
        TC = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        EC = (0, X.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: s
          } = (0, X.useContext)(NC), a = (0, X.useRef)(null), i = (0, Y.UP)(a, o), {
            buttonProps: d
          } = (0, Y.sL)(n, a), l = (0, W.mergeProps)({
            "data-testid": r,
            className: RC({
              size: t
            })
          }, d), c = s ? ue.ChevronUp : ue.ChevronDown;
          return (0, R.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, R.jsx)(c, {
              label: "",
              size: TC[t]
            })]
          })
        }),
        LC = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e
          }, t);
          return (0, R.jsx)(xC.Anchor, {
            ref: r,
            ...n
          })
        }),
        zC = (0, X.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, R.jsx)(xC.Content, {
            ref: n,
            ...o
          })
        }),
        MC = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, R.jsx)(xC.Arrow, {
            ref: r,
            ...n
          })
        }),
        VC = e => (0, R.jsx)(xC.Portal, {
          ...e
        }),
        AC = e => (0, R.jsx)(xC.Close, {
          ...e
        });

      function qC(e) {
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

      function HC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function FC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? HC(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = qC(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : HC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function BC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ZC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        XC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = FC(FC({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ZC(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return BC(e.variantClassNames, e => BC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        GC = "var(--foundry_rmorls2)",
        KC = XC({
          defaultClassName: "foundry_rmorlsa",
          variantClassNames: {
            size: {
              SM: "foundry_rmorlsb foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj",
              MD: "foundry_rmorlsc foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
              LG: "foundry_rmorlsd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        UC = "var(--foundry_rmorls0)",
        WC = XC({
          defaultClassName: "foundry_rmorls5",
          variantClassNames: {
            size: {
              SM: "foundry_rmorls6",
              MD: "foundry_rmorls7",
              LG: "foundry_rmorls8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $C = "var(--foundry_rmorls3)",
        QC = "var(--foundry_rmorls1)",
        YC = XC({
          defaultClassName: "foundry_rmorlse",
          variantClassNames: {
            size: {
              SM: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdh foundry_tdsdcdj",
              MD: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj",
              LG: "foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        JC = "Progress",
        [ex, tx] = (0, mi.A)(JC),
        [rx, nx] = ex(JC),
        ox = X.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: s = ix,
            ...a
          } = e;
          !o && 0 !== o || cx(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = cx(o) ? o : 100;
          null === n || ux(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = ux(n, i) ? n : null,
            l = lx(d) ? s(d, i) : void 0;
          return (0, R.jsx)(rx, {
            scope: r,
            value: d,
            max: i,
            children: (0, R.jsx)(_i.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": lx(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": dx(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...a,
              ref: t
            })
          })
        });
      ox.displayName = JC;
      var sx = "ProgressIndicator",
        ax = X.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = nx(sx, r);
          return (0, R.jsx)(_i.sG.div, {
            "data-state": dx(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function ix(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function dx(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function lx(e) {
        return "number" == typeof e
      }

      function cx(e) {
        return lx(e) && !isNaN(e) && e > 0
      }

      function ux(e, t) {
        return lx(e) && !isNaN(e) && e <= t && e >= 0
      }
      ax.displayName = sx;
      var fx = ox,
        px = ax;
      const hx = (0, X.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        mx = (0, X.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const s = Math.round(r / t * 100),
            a = "number" != typeof r || "number" != typeof t;
          return (0, R.jsx)(hx.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: s,
              isInvalid: a
            },
            children: (0, R.jsx)(vx, {
              ...n,
              ref: o
            })
          })
        }),
        vx = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            s = t ? J.DX : "div";
          return (0, R.jsx)(s, {
            ...o,
            ref: n
          })
        }),
        yx = (0, X.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: s,
            size: a
          } = (0, X.useContext)(hx), i = (0, W.mergeProps)({
            "data-testid": e,
            className: WC({
              size: a
            }),
            value: o,
            max: s,
            style: (0, K.DI)({
              [$C]: t
            }),
            "data-track": !0
          }, r);
          return (0, R.jsx)(fx, {
            ref: n,
            ...i
          })
        }),
        gx = (0, X.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: s,
            isInvalid: a
          } = (0, X.useContext)(hx), i = a ? "-100%" : `-${100-s}%`, d = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, K.DI)({
              [UC]: i,
              [QC]: `${t}ms`,
              [GC]: r
            })
          }, n);
          return (0, R.jsx)(px, {
            ref: o,
            ...d
          })
        }),
        bx = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, X.useContext)(hx), s = (0, W.mergeProps)({
            "data-testid": t,
            className: KC({
              size: o
            }),
            "aria-hidden": !0
          }, r), a = e ? J.DX : "span";
          return (0, R.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        wx = (0, X.forwardRef)(({
          testId: e,
          format: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: s,
            size: a,
            percentage: i,
            isInvalid: d
          } = (0, X.useContext)(hx), l = (0, W.mergeProps)({
            "data-testid": e,
            className: KC({
              size: a
            }),
            "aria-hidden": !0
          }, r);
          return d ? (0, R.jsx)("span", {
            ref: n,
            ...l
          }) : "percentage" === t ? (0, R.jsxs)("span", {
            ref: n,
            ...l,
            children: [i, " ", (0, R.jsx)("span", {
              className: YC({
                size: a
              }),
              children: "%"
            })]
          }) : (0, R.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", s]
          })
        });
      var _x = r(14046);

      function Cx(e) {
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

      function xx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function jx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xx(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Cx(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Px(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ox = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Sx = "foundry_1vzsjid2",
        kx = "foundry_1vzsjidm",
        Rx = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = jx(jx({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ox(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Px(e.variantClassNames, e => Px(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1vzsjid5",
          variantClassNames: {
            mode: {
              solid: "foundry_1vzsjid6",
              alpha: "foundry_1vzsjid7"
            },
            layer: {
              0: "foundry_1vzsjid8",
              1: "foundry_1vzsjid9",
              2: "foundry_1vzsjida",
              3: "foundry_1vzsjidb"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              mode: "alpha",
              layer: 0
            }, "foundry_1vzsjidc"],
            [{
              mode: "alpha",
              layer: 1
            }, "foundry_1vzsjidd"],
            [{
              mode: "alpha",
              layer: 2
            }, "foundry_1vzsjide"],
            [{
              mode: "alpha",
              layer: 3
            }, "foundry_1vzsjidf"]
          ]
        });
      const Nx = (0, X.createContext)({
          mode: "solid",
          layer: 0
        }),
        Dx = (0, X.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, R.jsx)(Nx.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, R.jsx)(Ix, {
            ...n,
            ref: o,
            type: r
          })
        })),
        Ix = (0, X.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            "data-testid": e,
            type: t
          }, r);
          return (0, R.jsx)(_x.Root, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        Tx = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, X.useContext)(Nx), s = (0, W.mergeProps)({
            className: Rx({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, R.jsx)(_x.Item, {
            ref: r,
            ...s
          })
        }),
        Ex = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, R.jsx)(_x.Header, {
            ref: r,
            ...n
          })
        }),
        Lx = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, R.jsx)(_x.Trigger, {
            ref: n,
            ...o,
            children: r.asChild && (0, X.isValidElement)(e) ? (0, X.cloneElement)(e, {
              children: (0, R.jsx)("span", {
                className: Sx,
                children: e.props.children
              })
            }) : (0, R.jsx)("span", {
              className: Sx,
              children: e
            })
          })
        }),
        zx = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ue[e],
            o = (0, W.mergeProps)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, R.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        Mx = (0, X.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = ue[e],
            o = (0, W.mergeProps)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, R.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        Vx = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": r,
            asChild: t
          }, n);
          return (0, R.jsx)(_x.Content, {
            ref: o,
            ...s,
            children: t && (0, X.isValidElement)(e) ? (0, X.cloneElement)(e, {
              children: (0, R.jsx)("div", {
                className: kx,
                children: e.props.children
              })
            }) : (0, R.jsx)("div", {
              className: kx,
              children: e
            })
          })
        }),
        Ax = {
          MD: K.LU.global.spacing.dimensions[200],
          LG: K.LU.global.spacing.dimensions[250],
          XL: K.LU.global.spacing.dimensions[300]
        },
        qx = (0, X.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, R.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Ax[t],
          viewBox: "0 0 93 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, R.jsx)("path", {
            d: "M70.062 5.19368V4.08909C70.062 4.04208 70.015 3.99508 69.968 3.99508H62.1183C59.8387 3.99508 58.7341 5.40519 58.7341 7.21484V12.7613C58.7341 13.8894 58.1935 14.712 57.0654 14.712H49.7093C49.6623 14.712 49.6153 14.759 49.6153 14.806V15.9106C49.6153 15.9576 49.6623 16.0046 49.7093 16.0046H57.935C60.2147 16.0046 61.3193 14.618 61.3193 12.7848V7.23835C61.3193 6.11025 61.8598 5.28768 62.9879 5.28768H69.968C70.015 5.28768 70.062 5.24068 70.062 5.19368Z",
            fill: e
          }), (0, R.jsx)("path", {
            d: "M46.8421 3.99508H32.6704C32.6234 3.99508 32.5764 4.04208 32.5764 4.08909V5.19368C32.5764 5.24068 32.6234 5.28768 32.6704 5.28768H45.996C47.1241 5.28768 47.6647 6.11025 47.6647 7.23835C47.6647 8.36644 47.1241 9.18901 45.996 9.18901H35.4436C33.7985 9.18901 32.5764 10.5756 32.5764 12.3853V15.9341C32.5764 15.9811 32.6234 16.0281 32.6704 16.0281H35.0676C35.1146 16.0281 35.1616 15.9811 35.1616 15.9341V12.3853C35.1616 11.2572 35.8197 10.4581 36.7362 10.4581H46.8421C49.1218 10.4581 50.2264 9.0715 50.2264 7.23835C50.2264 5.4052 49.1218 4.01858 46.8421 4.01858V3.99508Z",
            fill: e
          }), (0, R.jsx)("path", {
            d: "M86.1844 13.4194C86.1374 13.4194 86.0903 13.3724 86.0903 13.3253V5.26418C86.0903 4.01858 85.2443 3.61905 84.0222 4.37111L69.5685 13.2548C69.0044 13.6074 68.8164 14.0069 68.9574 14.2889C69.0749 14.5475 69.3805 14.712 70.015 14.712H83.4346C83.4816 14.712 83.5051 14.7355 83.5051 14.7825V15.9106C83.5051 15.9576 83.5521 16.0046 83.5991 16.0046H86.0198C86.0668 16.0046 86.1138 15.9576 86.1138 15.9106V14.806C86.1138 14.759 86.1609 14.712 86.2079 14.712H88.6051C88.6521 14.712 88.6991 14.665 88.6991 14.618V13.5134C88.6991 13.4664 88.6521 13.4194 88.6051 13.4194H86.1844ZM83.5286 13.3253C83.5286 13.3724 83.4816 13.4194 83.4346 13.4194H72.1772C72.0832 13.4194 72.0362 13.3959 72.0362 13.3724C72.0362 13.3254 72.0362 13.2783 72.1302 13.2313L83.3171 6.34527C83.3876 6.29827 83.5286 6.29827 83.5286 6.46278V13.3489V13.3253Z",
            fill: e
          }), (0, R.jsx)("path", {
            d: "M91.0246 13.9838C91.6121 13.9838 92.0117 14.4304 92.0117 14.9944C92.0117 15.5585 91.6121 16.005 91.0246 16.005C90.437 16.005 90.014 15.5585 90.014 14.9944C90.014 14.4304 90.4135 13.9838 91.0246 13.9838ZM91.0246 15.8405C91.5181 15.8405 91.8707 15.4645 91.8707 14.9944C91.8707 14.5244 91.5416 14.1484 91.0246 14.1484C90.5075 14.1484 90.1785 14.5244 90.1785 14.9944C90.1785 15.4645 90.5075 15.8405 91.0246 15.8405ZM90.6251 14.4069H91.0716C91.2831 14.4069 91.4476 14.4774 91.4476 14.7124C91.4476 14.9474 91.3771 14.9474 91.2361 14.9944C91.3066 15.0179 91.3536 15.0649 91.4006 15.2059C91.4476 15.3235 91.4711 15.4645 91.5181 15.5585H91.3066C91.2831 15.4645 91.2361 15.3235 91.2126 15.253C91.1891 15.1119 91.1421 15.0884 90.9776 15.0884H90.8366V15.582H90.6251V14.4069ZM90.8366 14.9239H91.0246C91.1656 14.9239 91.2596 14.8769 91.2596 14.7359C91.2596 14.5949 91.1421 14.5479 91.0481 14.5479H90.8601V14.9239H90.8366Z",
            fill: e
          }), (0, R.jsx)("path", {
            d: "M15.5833 4.88841V11.1399C18.2155 12.409 20.2837 11.1399 20.2837 7.77915C20.2837 4.41837 19.0616 2.82023 15.4893 1.59813C14.0791 1.12809 11.4704 0.329027 9.68428 0V18.637L13.9146 19.9767V4.34786C13.9146 3.6193 14.2437 3.12576 14.7607 3.29027C15.4423 3.47829 15.5833 4.15985 15.5833 4.88841Z",
            fill: e
          }), (0, R.jsx)("path", {
            d: "M23.9735 13.0906C22.2108 12.4325 19.9546 12.1975 18.1215 12.409C16.2883 12.597 14.9722 13.0671 14.9722 13.0671L14.7137 13.1611V15.6993L19.2261 14.1012C20.0016 13.8191 21.1297 13.7721 21.7643 13.9602C22.3753 14.1717 22.2578 14.5477 21.5058 14.8297L14.7137 17.2504V19.6946L23.9265 16.3809C23.9265 16.3809 25.1721 15.9108 25.6656 15.2763C26.1591 14.6417 25.9476 13.7016 23.95 13.0671L23.9735 13.0906Z",
            fill: e
          }), (0, R.jsx)("path", {
            d: "M0.495017 14.5242C-0.445061 15.2293 -0.0925317 16.4279 1.95214 16.9919C4.13782 17.7205 6.3705 17.8615 8.46218 17.509C8.60319 17.509 8.7442 17.462 8.88521 17.4384V15.2528L6.79354 16.0048C6.01797 16.2869 4.91338 16.3574 4.27883 16.1458C3.66778 15.9343 3.78529 15.5583 4.53735 15.2763L8.88521 13.7251V11.2809L2.84521 13.4431C2.84521 13.4431 1.38809 13.9132 0.518519 14.5477L0.495017 14.5242Z",
            fill: e
          }), (0, R.jsx)("path", {
            d: "M24.467 18.9896C24.608 18.9426 24.6785 18.8486 24.6785 18.7076C24.6785 18.4725 24.514 18.402 24.3025 18.402H23.856V19.5536H24.0675V19.0601H24.2085C24.373 19.0601 24.42 19.1071 24.4435 19.2246C24.467 19.2951 24.514 19.4596 24.5375 19.5301H24.749C24.7255 19.4126 24.6785 19.2951 24.6315 19.1776C24.5845 19.0366 24.5375 18.9896 24.467 18.9661V18.9896ZM24.232 18.9191H24.044V18.543H24.232C24.3495 18.543 24.4435 18.5665 24.4435 18.7311C24.4435 18.8956 24.3495 18.9191 24.2085 18.9191H24.232Z",
            fill: e
          }), (0, R.jsx)("path", {
            d: "M24.2555 17.979C23.6679 17.979 23.2449 18.4255 23.2449 18.9896C23.2449 19.5536 23.6444 20.0002 24.2555 20.0002C24.8665 20.0002 25.2426 19.5536 25.2426 18.9896C25.2426 18.4255 24.843 17.979 24.2555 17.979ZM24.2555 19.8356C23.7384 19.8356 23.4094 19.4596 23.4094 18.9896C23.4094 18.5195 23.7384 18.1435 24.2555 18.1435C24.7725 18.1435 25.1016 18.5195 25.1016 18.9896C25.1016 19.4596 24.7725 19.8356 24.2555 19.8356Z",
            fill: e
          })]
        })),
        Hx = (0, X.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Ax[t],
          viewBox: "0 0 92 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, R.jsx)("path", {
            d: "M9.58333 0C11.3552 0.328638 13.9663 1.12676 15.3418 1.59624C18.8854 2.8169 20.0977 4.34272 20.0977 7.76995C20.0977 11.1972 18.0461 12.3944 15.435 11.1268V4.88263C15.435 4.15493 15.2951 3.47418 14.6191 3.28639C14.1062 3.12207 13.7798 3.61502 13.7798 4.34272V19.9531L9.58333 18.615V0ZM14.5724 19.6948L23.7113 16.385C23.7113 16.385 24.947 15.9155 25.4365 15.2817C25.9261 14.6479 25.7163 13.7089 23.7347 13.0986C21.9861 12.4413 19.748 12.2066 17.9296 12.4178C16.1111 12.6056 14.8056 13.0751 14.8056 13.0751L14.5491 13.169V15.7042L19.0253 14.108C19.7947 13.8263 20.9137 13.7793 21.5432 13.9671C22.1493 14.1784 22.0328 14.554 21.2867 14.8357L14.5491 17.2535V19.6948H14.5724ZM1.91317 16.9953C4.08133 17.723 6.29612 17.8638 8.37103 17.5117C8.51091 17.5117 8.65079 17.4648 8.79067 17.4413V15.2582L6.71576 16.0094C5.94642 16.2911 4.85068 16.3615 4.22122 16.1502C3.61506 15.939 3.73163 15.5634 4.47766 15.2817L8.79067 13.7324V11.2911L2.79909 13.4507C2.79909 13.4507 1.35365 13.9202 0.491048 14.554C-0.441493 15.2582 -0.0917898 16.4554 1.93649 17.0188M24.0377 17.9812C23.4549 17.9812 23.0352 18.4272 23.0352 18.9906C23.0352 19.554 23.4316 20 24.0377 20C24.6439 20 25.0169 19.554 25.0169 18.9906C25.0169 18.4272 24.6206 17.9812 24.0377 17.9812ZM24.0377 19.8122C23.5248 19.8122 23.1984 19.4366 23.1984 18.9671C23.1984 18.4977 23.5248 18.1221 24.0377 18.1221C24.5506 18.1221 24.877 18.4977 24.877 18.9671C24.877 19.4366 24.5506 19.8122 24.0377 19.8122ZM23.6414 19.554H23.8512V19.061H23.9911C24.1543 19.061 24.2009 19.108 24.2242 19.2254C24.2476 19.2958 24.2942 19.4601 24.3175 19.5305H24.5273C24.504 19.4131 24.4574 19.2958 24.4107 19.1784C24.3641 19.0376 24.3175 18.9906 24.2476 18.9671C24.3874 18.9202 24.4574 18.8263 24.4574 18.6854C24.4574 18.4507 24.2942 18.3803 24.0844 18.3803H23.6414V19.5305V19.554ZM23.8279 18.5446H24.0144C24.131 18.5446 24.2242 18.5681 24.2242 18.7324C24.2242 18.8967 24.131 18.9202 23.9911 18.9202H23.8046V18.5446H23.8279ZM56.4436 15.9859C58.2154 15.9859 59.6375 14.554 59.6375 12.77V7.23005C59.6375 6.15024 60.5001 5.28169 61.5725 5.28169H67.7739C67.8206 5.28169 67.8672 5.23474 67.8672 5.18779V4.08451C67.8672 4.03756 67.8206 3.99061 67.7739 3.99061H60.2903C58.5185 3.99061 57.0963 5.42253 57.0963 7.20657V12.7465C57.0963 13.8263 56.2337 14.6948 55.1613 14.6948H49.0532C49.0065 14.6948 48.9599 14.7418 48.9599 14.7887V15.892C48.9599 15.939 49.0065 15.9859 49.0532 15.9859H56.4436ZM70.4084 8.49765C70.4084 9.57746 71.271 10.446 72.3434 10.446H83.2774C84.4431 10.446 85.4223 11.4085 85.399 12.5822C85.399 13.7559 84.4431 14.6948 83.2774 14.6948C83.2774 14.6948 73.6956 14.6948 70.5016 14.6948C70.455 14.6948 70.4084 14.7418 70.4084 14.7887V15.892C70.4084 15.939 70.455 15.9859 70.5016 15.9859H84.5597C86.4248 15.9859 87.9402 14.4601 87.9402 12.5822C87.9402 10.7042 86.4248 9.1784 84.5597 9.1784H73.8821C73.3692 9.1784 72.9729 8.75587 72.9729 8.26291V5.37559C72.9729 5.32864 73.0195 5.28169 73.0661 5.28169H87.4273C87.4739 5.28169 87.5205 5.23474 87.5205 5.18779V4.08451C87.5205 4.03756 87.4739 3.99061 87.4273 3.99061H70.5249C70.4783 3.99061 70.4317 4.03756 70.4317 4.08451C70.4317 4.74178 70.4317 6.87793 70.4317 8.49765M35.4847 9.15493C33.7128 9.15493 32.2907 10.5869 32.2907 12.3709C32.2907 12.3709 32.2907 14.9296 32.2907 15.892C32.2907 15.939 32.3373 15.9859 32.384 15.9859H34.762C34.8086 15.9859 34.8552 15.939 34.8552 15.892V12.3709C34.8552 11.2911 35.7178 10.4225 36.7902 10.4225H46.6286C48.4004 10.4225 49.8225 8.99061 49.8225 7.20657C49.8225 5.42253 48.4004 3.99061 46.6286 3.99061H32.4073C32.3607 3.99061 32.314 4.03756 32.314 4.08451V5.18779C32.314 5.23474 32.3607 5.28169 32.4073 5.28169H45.3696C46.442 5.28169 47.3046 6.15024 47.3046 7.23005C47.3046 8.30986 46.442 9.1784 45.3696 9.1784H35.5313L35.4847 9.15493ZM91.2507 14.9531C91.2507 15.5164 90.8543 15.9624 90.2715 15.9624C89.6887 15.9624 89.269 15.5164 89.269 14.9531C89.269 14.3897 89.6654 13.9437 90.2715 13.9437C90.8777 13.9437 91.2507 14.3897 91.2507 14.9531ZM91.0875 14.9531C91.0875 14.4836 90.7611 14.108 90.2482 14.108C89.7353 14.108 89.4089 14.4836 89.4089 14.9531C89.4089 15.4225 89.7353 15.7981 90.2482 15.7981C90.7611 15.7981 91.0875 15.4225 91.0875 14.9531ZM90.6445 15.1643C90.6912 15.2817 90.7145 15.4225 90.7611 15.5164H90.5513C90.528 15.4225 90.4813 15.2817 90.458 15.2113C90.4347 15.0704 90.3881 15.0469 90.2249 15.0469H90.085V15.5399H89.8752V14.3897H90.3181C90.528 14.3897 90.6912 14.4601 90.6912 14.6948C90.6912 14.9296 90.6212 14.9296 90.4813 14.9765C90.5513 15 90.5979 15.0469 90.6445 15.1878V15.1643ZM90.4813 14.6948C90.4813 14.5305 90.3648 14.507 90.2715 14.507H90.085V14.8826H90.2715C90.4114 14.8826 90.5046 14.8357 90.5046 14.6948H90.4813Z",
            fill: e
          })
        })),
        Fx = (0, X.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, R.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Ax[t],
          viewBox: "0 0 33 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, R.jsx)("path", {
            d: "M7.34117 9.61429C7.7883 9.61536 8.23491 9.59031 8.6778 9.53928C9.07276 9.49838 9.45591 9.40006 9.80952 9.24891C10.1317 9.10768 10.4019 8.89726 10.5916 8.63973C10.7887 8.3776 10.8873 8.03424 10.8873 7.60959C10.8873 7.18494 10.7887 6.8413 10.5916 6.57878C10.4014 6.32174 10.1314 6.1116 9.80952 5.97026C9.45578 5.81934 9.0727 5.72107 8.6778 5.6799C8.23491 5.6292 7.78824 5.6041 7.34117 5.60488H4.2033V9.61429H7.34117ZM8.44707 3.31884C9.59417 3.31884 10.5713 3.44063 11.3785 3.68422C12.1856 3.9278 12.8415 4.24941 13.3463 4.64907C13.8357 5.02963 14.2139 5.49737 14.4522 6.01681C14.9152 7.04079 14.9152 8.16864 14.4522 9.19267C14.2163 9.71592 13.8379 10.1872 13.3463 10.5701C12.84 10.9698 12.184 11.2913 11.3785 11.5349C10.5729 11.7785 9.59574 11.9003 8.44707 11.9003H4.2033V16.6968H0.166016V3.31884H8.44707Z",
            fill: e
          }), (0, R.jsx)("path", {
            d: "M28.2135 6.88796C27.966 6.60113 27.6617 6.35099 27.3133 6.14813C26.9401 5.9306 26.5279 5.76298 26.0916 5.65149C25.6303 5.53153 25.1494 5.4709 24.6658 5.47171C23.7565 5.47171 22.9848 5.59975 22.3508 5.85586C21.7447 6.09295 21.2157 6.44606 20.8077 6.886C20.4087 7.32589 20.1165 7.82544 19.9473 8.35721C19.7656 8.91334 19.674 9.48701 19.6752 10.0631C19.6741 10.6173 19.7652 11.1689 19.9457 11.7025C20.1182 12.2215 20.4104 12.7081 20.8061 13.1355C21.2166 13.5712 21.7452 13.9209 22.3492 14.1566C22.9838 14.4127 23.7555 14.5408 24.6643 14.5408C25.8974 14.5408 26.862 14.2659 27.5581 13.7163C28.2542 13.1666 28.6786 12.4421 28.8314 11.5428H32.742C32.6546 12.3356 32.382 13.1068 31.9395 13.8139C31.5214 14.4778 30.9439 15.0642 30.2423 15.5373C29.5097 16.0253 28.6718 16.3942 27.7732 16.6244C26.766 16.8824 25.7163 17.009 24.6619 16.9994C23.2542 16.9994 21.9895 16.8214 20.8679 16.4653C19.7463 16.1092 18.7992 15.6188 18.0265 14.9941C17.2558 14.3717 16.6513 13.6227 16.2518 12.7954C15.8351 11.9261 15.6265 10.9982 15.6379 10.0631C15.6275 9.11222 15.8369 8.16835 16.255 7.28242C16.6534 6.44298 17.2577 5.68074 18.0296 5.0436C18.8039 4.40641 19.751 3.9063 20.871 3.5433C21.991 3.1803 23.2559 2.99923 24.6658 3.00009C25.6348 2.99561 26.5999 3.10292 27.5331 3.3189C28.3948 3.51672 29.2114 3.82999 29.9506 4.24624C30.6544 4.64619 31.2534 5.15931 31.7119 5.75497C32.1855 6.3795 32.4842 7.08365 32.5863 7.81592H28.6757C28.6086 7.48158 28.4511 7.16421 28.2135 6.88796Z",
            fill: e
          })]
        })),
        Bx = (0, X.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Ax[t],
          viewBox: "0 0 104 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, R.jsx)("path", {
            d: "M9.97484 8.02222C9.98593 8.02222 10.0026 8.03333 10.0081 8.03889C12.9895 10.3111 18.0988 15.9389 16.5416 17.5278C14.7849 19.0667 12.4907 20 9.97484 20C7.45897 20 5.16475 19.0667 3.40807 17.5278C1.85089 15.9389 6.96022 10.3111 9.94159 8.03889C9.94713 8.03333 9.96376 8.02222 9.97484 8.02222ZM15.1728 1.46111C13.6434 0.55 11.992 0 9.97484 0C7.95771 0 6.30632 0.555556 4.77684 1.46111C4.76022 1.47222 4.74913 1.49444 4.76022 1.51111C4.76576 1.52778 4.78792 1.53333 4.81009 1.52778C6.7441 1.11111 9.6756 2.78333 9.95268 2.95C9.95822 2.95 9.96376 2.95556 9.97484 2.95556C9.98593 2.95556 9.99147 2.95556 9.99701 2.95C10.2741 2.78333 13.2111 1.11111 15.1396 1.52778C15.1618 1.52778 15.1784 1.52778 15.1895 1.51111C15.2006 1.49444 15.1895 1.47222 15.1728 1.46111ZM2.99245 2.86667C2.97583 2.87778 2.9592 2.88889 2.94812 2.9C1.13048 4.71111 0 7.22222 0 9.99444C0 12.7667 0.759196 14.3722 2.0393 16.0556C2.05038 16.0722 2.07255 16.0833 2.09472 16.0722C2.11134 16.0611 2.11134 16.0389 2.1058 16.0222C1.3466 13.6667 5.23125 7.95 7.24284 5.55556C7.24838 5.55 7.25393 5.53889 7.25393 5.52778C7.25393 5.51667 7.24839 5.50556 7.2373 5.49444C4.19498 2.46111 3.16424 2.78333 2.99245 2.86667ZM12.7179 5.49444C12.7068 5.5 12.7013 5.51111 12.7013 5.52778C12.7013 5.54444 12.7068 5.55 12.7124 5.55556C14.7184 7.95 18.6086 13.6667 17.8494 16.0222C17.8439 16.0389 17.8439 16.0611 17.8605 16.0722C17.8771 16.0833 17.8993 16.0722 17.9159 16.0556C19.196 14.3722 19.9552 12.2778 19.9552 9.99444C19.9552 7.71111 18.8247 4.71111 17.0071 2.9C16.996 2.88889 16.9794 2.87222 16.9628 2.86667C16.7965 2.77778 15.7603 2.45556 12.7179 5.49444ZM34.7125 16.1611H32.6731L29.1598 11.3111L25.6464 16.1611H23.6071L28.1401 9.90555L23.9618 4.13889H26.0011L29.1598 8.49444L32.3185 4.13889H34.3578L30.1794 9.90555L34.7125 16.1611ZM45.3079 12.7444C45.3079 13.8 44.9588 14.6444 44.2717 15.25C43.5845 15.8556 42.5815 16.1611 41.2958 16.1611H35.6711V10.8056H33.0001L34.114 9.27222H35.6767V4.13889H41.0631C42.2712 4.13889 43.2077 4.42778 43.8561 5C44.4989 5.57222 44.8258 6.33889 44.8258 7.26667C44.8258 8.19444 44.3049 9.3 43.2742 9.87222C43.9392 10.1278 44.449 10.5111 44.7926 11C45.1417 11.5 45.3135 12.0833 45.3135 12.7333L45.3079 12.7444ZM37.5054 9.27222H40.9412C41.6339 9.27222 42.1603 9.11667 42.5039 8.81111C42.8475 8.50556 43.0248 8.03889 43.0248 7.42222C43.0248 6.80556 42.8419 6.47222 42.4873 6.17222C42.1271 5.87222 41.6117 5.72222 40.9467 5.72222H37.5109V9.27222H37.5054ZM43.4626 12.7056C43.4626 12.0722 43.2742 11.5944 42.8974 11.2778C42.5205 10.9611 41.9498 10.8 41.1961 10.8H37.5054V14.5667H41.1961C41.9276 14.5667 42.4928 14.4056 42.8807 14.0833C43.2687 13.7611 43.4626 13.3 43.4626 12.7V12.7056ZM57.6269 10.15C57.6269 11.0778 57.4939 11.9333 57.2279 12.6833C56.9619 13.4389 56.5574 14.1111 56.0254 14.6889C55.4878 15.2667 54.8616 15.7056 54.1579 15.9944C53.4541 16.2833 52.6561 16.4278 51.7861 16.4278C50.916 16.4278 50.1014 16.2833 49.3976 15.9944C48.6939 15.7056 48.0677 15.2667 47.5467 14.6889C47.0092 14.1167 46.6047 13.4444 46.3331 12.6944C46.0671 11.9389 45.9286 11.0833 45.9286 10.15C45.9286 9.21667 46.0671 8.36667 46.3331 7.61111C46.5991 6.85556 47.0092 6.17778 47.5467 5.59445C48.0732 5.02222 48.6939 4.58889 49.3976 4.3C50.1014 4.01667 50.9049 3.87222 51.7861 3.87222C52.6672 3.87222 53.4541 4.01667 54.1579 4.3C54.8616 4.58333 55.4934 5.02222 56.0254 5.59445C56.5574 6.17778 56.9619 6.85556 57.2279 7.61111C57.4939 8.36667 57.6269 9.22222 57.6269 10.15ZM47.8183 10.15C47.8183 11.5667 48.184 12.7 48.9044 13.5222C49.6138 14.3556 50.5835 14.7778 51.7805 14.7778C52.9775 14.7778 53.9473 14.3556 54.6566 13.5222C55.3659 12.7111 55.7261 11.5778 55.7261 10.15C55.7261 8.72222 55.3659 7.58333 54.6566 6.76111C53.9362 5.93889 52.9664 5.52222 51.7805 5.52222C50.5946 5.52222 49.6248 5.93889 48.9044 6.76111C48.184 7.60556 47.8183 8.74444 47.8183 10.15ZM63.4123 9.90555L67.5906 4.13889H65.5513L62.3926 8.49444L59.2339 4.13889H57.1946L61.373 9.90555L56.84 16.1611H58.8793L62.3926 11.3111L65.906 16.1611H67.9453L63.4123 9.90555ZM81.4169 7.61111C81.1509 6.85556 80.7463 6.17778 80.2144 5.59445C79.6768 5.02222 79.0506 4.58889 78.3468 4.3C77.6431 4.01667 76.8451 3.87222 75.9751 3.87222C75.105 3.87222 74.2904 4.01667 73.5866 4.3C72.8829 4.58333 72.2567 5.02222 71.7357 5.59445C71.1982 6.17778 70.7937 6.85556 70.5221 7.61111C70.2561 8.36667 70.1176 9.22222 70.1176 10.15C70.1176 11.0778 70.2561 11.9389 70.5221 12.6944C70.7881 13.45 71.1982 14.1222 71.7357 14.6889C72.2622 15.2667 72.8829 15.7056 73.5866 15.9944C74.2904 16.2833 75.0939 16.4278 75.9751 16.4278C76.8562 16.4278 77.6431 16.2833 78.3468 15.9944C79.0506 15.7056 79.6824 15.2667 80.2144 14.6889C80.7463 14.1111 81.1509 13.4389 81.4169 12.6833C81.6829 11.9278 81.8159 11.0778 81.8159 10.15C81.8159 9.22222 81.6829 8.36667 81.4169 7.61111ZM78.8456 13.5222C78.1363 14.3556 77.1665 14.7778 75.9695 14.7778C74.7725 14.7778 73.8027 14.3556 73.0934 13.5222C72.373 12.7 72.0073 11.5667 72.0073 10.15C72.0073 8.73333 72.373 7.60556 73.0934 6.76111C73.8138 5.93889 74.7836 5.52222 75.9695 5.52222C77.1554 5.52222 78.1252 5.93889 78.8456 6.76111C79.5549 7.58333 79.9151 8.72222 79.9151 10.15C79.9151 11.5778 79.5549 12.7111 78.8456 13.5222ZM96.7504 5.78889V9.27222H102.708V10.8056H96.7504V14.5056H103.483V16.1556H94.9162V4.13333H103.483V5.78333H96.7504V5.78889ZM93.0874 4.13889V16.1611H90.9872C90.9872 16.1556 87.3076 10.3444 87.3076 10.3444C86.3101 8.77778 85.5564 7.54445 85.0743 6.67222V16.1611H83.2955V4.13889H85.3957C85.3957 4.14444 89.092 9.95556 89.092 9.95556C90.0285 11.4389 90.7766 12.6833 91.3252 13.65V4.13889H93.0874Z",
            fill: e
          })
        })),
        Zx = (0, X.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Ax[t],
          viewBox: "0 0 158 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, R.jsx)("path", {
            d: "M10.02 8.01603C13.0261 10.3006 18.1563 15.9519 16.5932 17.515C14.8297 19.0381 12.5451 20 9.97996 20C7.41483 20 5.13026 19.0782 3.36673 17.515C1.80361 15.9118 6.93387 10.3006 9.93988 8.01603H10.02ZM15.2305 1.48297C13.7074 0.561122 12.024 0 10.02 0C8.01603 0 6.33266 0.561122 4.80962 1.48297C4.80962 1.48297 4.80962 1.48297 4.80962 1.52305C4.80962 1.52305 4.80962 1.52305 4.8497 1.52305C6.77355 1.12224 9.73948 2.76553 10.02 2.92585C10.3006 2.76553 13.2265 1.08216 15.1904 1.52305C15.1904 1.52305 15.1904 1.52305 15.2305 1.52305C15.2305 1.52305 15.2305 1.52305 15.2305 1.48297ZM3.00601 2.88577C3.00601 2.88577 3.00601 2.88577 2.96593 2.88577C1.12224 4.72946 0 7.25451 0 10.02C0 12.7856 0.761523 14.3888 2.04409 16.1122C2.04409 16.1122 2.04409 16.1122 2.08417 16.1122C2.08417 16.1122 2.08417 16.1122 2.08417 16.0721C1.32265 13.7074 5.21042 7.97595 7.25451 5.57114C4.20842 2.48497 3.16633 2.80561 3.00601 2.88577ZM12.7856 5.49098C14.7896 7.89579 18.7174 13.6273 17.9559 15.992C17.9559 15.992 17.9559 15.992 17.9559 16.0321C17.9559 16.0321 17.9559 16.0321 17.996 16.0321C19.2786 14.3487 20.0401 12.2244 20.0401 9.97996C20.0401 7.73547 18.9178 4.68938 17.0741 2.88577C17.0741 2.88577 17.0741 2.88577 17.0341 2.88577C16.8737 2.80561 15.8317 2.48497 12.7856 5.53106V5.49098ZM34.8697 16.1924H32.8256L29.2986 11.3427L25.7715 16.1924H23.7275L28.2966 9.93988L24.0882 4.16834H26.1323L29.2986 8.53707L32.4649 4.16834H34.509L30.3006 9.93988L34.8697 16.1924ZM45.5311 12.7856C45.5311 13.8277 45.1703 14.6693 44.489 15.3106C43.8076 15.9118 42.8056 16.2325 41.483 16.2325H35.8317V10.8617H33.1463L34.2685 9.33868H35.8317V4.20842H41.2425C42.4449 4.20842 43.4068 4.48898 44.0481 5.09018C44.6894 5.6513 45.01 6.41283 45.01 7.37475C45.01 8.33667 44.489 9.41884 43.4469 9.97996C44.1283 10.2204 44.6092 10.6212 44.9699 11.1022C45.3307 11.5832 45.491 12.1844 45.491 12.8257L45.5311 12.7856ZM37.6753 9.2986H41.1222C41.8036 9.2986 42.3647 9.13828 42.6854 8.81764C43.0461 8.49699 43.2064 8.05611 43.2064 7.41483C43.2064 6.77355 43.0461 6.45291 42.6854 6.17234C42.3246 5.8517 41.8036 5.73146 41.1222 5.73146H37.6753V9.2986ZM43.6473 12.7455C43.6473 12.1042 43.4469 11.6232 43.0862 11.3026C42.7254 10.982 42.1242 10.8216 41.3627 10.8216H37.6753V14.5892H41.3627C42.0842 14.5892 42.6453 14.4289 43.0461 14.1082C43.4469 13.7876 43.6473 13.3066 43.6473 12.7054V12.7455ZM57.8757 10.1804C57.8757 11.1022 57.7555 11.984 57.4749 12.7054C57.1944 13.4669 56.7936 14.1483 56.2725 14.7094C55.7515 15.2705 55.1102 15.7114 54.3888 16.0321C53.6673 16.3126 52.8657 16.4729 52.024 16.4729C51.1824 16.4729 50.3407 16.3126 49.6192 16.0321C48.8978 15.7515 48.2966 15.3106 47.7755 14.7094C47.2545 14.1483 46.8136 13.4669 46.5731 12.7054C46.3327 11.9439 46.1723 11.1022 46.1723 10.1403C46.1723 9.17836 46.2926 8.33667 46.5731 7.57515C46.8537 6.81363 47.2545 6.13226 47.7755 5.57114C48.2966 5.01002 48.9379 4.56914 49.6593 4.28858C50.3808 4.00802 51.1824 3.8477 52.0641 3.8477C52.9459 3.8477 53.7475 4.00802 54.4289 4.28858C55.1503 4.56914 55.7515 5.01002 56.3126 5.57114C56.8337 6.17234 57.2345 6.81363 57.515 7.57515C57.7956 8.33667 57.9158 9.17836 57.9158 10.1403L57.8757 10.1804ZM48.016 10.1804C48.016 11.5832 48.3768 12.7455 49.0982 13.5471C49.8196 14.3888 50.7816 14.7896 51.984 14.7896C53.1864 14.7896 54.1483 14.3487 54.8697 13.5471C55.5912 12.7455 55.9519 11.5832 55.9519 10.1804C55.9519 8.77756 55.5912 7.61523 54.8697 6.77355C54.1483 5.93186 53.1864 5.53106 51.984 5.53106C50.7816 5.53106 49.8196 5.93186 49.0982 6.77355C48.3768 7.61523 48.016 8.77756 48.016 10.1804ZM63.6874 9.93988L67.8958 4.16834H65.8517L62.6854 8.53707L59.519 4.16834H57.4749L61.6834 9.93988L57.1142 16.1924H59.1583L62.6854 11.3427L66.2124 16.1924H68.2565L63.6874 9.93988ZM83.5671 5.81162V9.2986H89.5391V10.8216H83.5671V14.509H90.3407V16.1523H81.7234V4.16834H90.3407V5.81162H83.5671ZM79.3186 10.6212C78.7174 10.0601 77.7154 9.65932 76.3527 9.33868L75.3106 9.13828C74.3086 8.93788 73.6272 8.65731 73.2665 8.37675C72.9058 8.09619 72.7054 7.69539 72.7054 7.13427C72.7054 6.57315 72.9058 6.17234 73.3066 5.89178C73.7074 5.61122 74.3086 5.4509 75.1102 5.4509C75.9118 5.4509 76.8337 5.6513 77.3146 6.01202C77.7555 6.37275 78.0361 6.93387 78.0761 7.69539H79.9198C79.9198 6.49299 79.479 5.57114 78.6774 4.88978C77.8757 4.20842 76.6733 3.88778 75.1102 3.88778C73.5471 3.88778 72.7455 4.20842 71.984 4.76954C71.2224 5.33066 70.8216 6.17234 70.8216 7.17435C70.8216 8.17635 71.1423 8.93788 71.7836 9.499C72.4248 10.0601 73.3467 10.4609 74.5892 10.7014L75.6313 10.9018C76.6333 11.1423 77.3547 11.3828 77.7555 11.6633C78.1563 11.9439 78.3166 12.3447 78.3166 12.8657C78.3166 13.3868 78.0761 13.988 77.5952 14.3487C77.1142 14.6693 76.4329 14.8697 75.5511 14.8697C74.6693 14.8697 73.6673 14.6293 73.1463 14.1884C72.6252 13.7475 72.3046 13.0661 72.3046 12.1844H70.4609C70.4609 13.5872 70.9419 14.6693 71.8236 15.3507C72.7054 16.0321 73.9479 16.4329 75.5511 16.4329C77.1543 16.4329 78.1563 16.1122 78.998 15.4709C79.8397 14.8297 80.2405 13.9479 80.2405 12.8257C80.2405 11.7034 79.9198 11.1423 79.3186 10.5812V10.6212ZM101.403 14.7094L101.283 12.8257C101.283 12.1443 101.122 11.6232 100.842 11.2224C100.561 10.8216 100.16 10.5411 99.5992 10.3808C100.2 10.1804 100.721 9.81964 101.042 9.33868C101.403 8.85772 101.563 8.21643 101.563 7.49499C101.563 6.45291 101.202 5.6513 100.441 5.0501C99.7194 4.4489 98.6773 4.16834 97.3948 4.16834H92.1443V16.1924H93.988V11.2625H97.4749C98.1563 11.2625 98.6773 11.4228 98.998 11.7435C99.3186 12.0641 99.479 12.6253 99.519 13.3868V14.6693C99.5992 15.3507 99.7194 15.8717 99.9198 16.1924H101.804C101.603 15.7916 101.443 15.3106 101.403 14.7094ZM94.0281 5.73146H97.3547C98.1162 5.73146 98.7174 5.89178 99.1182 6.21242C99.519 6.53307 99.7194 7.01403 99.7194 7.65531C99.7194 8.29659 99.519 8.81763 99.1182 9.17836C98.7174 9.53908 98.1563 9.6994 97.4749 9.6994H94.0281V5.73146ZM103.246 16.1924H105.09V4.16834H103.246V16.2325V16.1924ZM115.551 5.81162V4.16834H106.934V16.1924H115.551V14.5491H108.778V10.8617H114.749V9.33868H108.778V5.8517H115.551V5.81162ZM125.331 10.6212C124.729 10.0601 123.727 9.65932 122.365 9.33868L121.323 9.13828C120.321 8.93788 119.639 8.65731 119.279 8.37675C118.918 8.09619 118.717 7.69539 118.717 7.13427C118.717 6.57315 118.918 6.17234 119.319 5.89178C119.719 5.61122 120.321 5.4509 121.122 5.4509C121.924 5.4509 122.846 5.6513 123.327 6.01202C123.808 6.37275 124.048 6.93387 124.088 7.69539H125.892C125.892 6.49299 125.451 5.57114 124.649 4.88978C123.848 4.20842 122.645 3.88778 121.082 3.88778C119.519 3.88778 118.717 4.20842 117.956 4.76954C117.194 5.33066 116.794 6.17234 116.794 7.17435C116.794 8.17635 117.114 8.93788 117.755 9.499C118.397 10.0601 119.319 10.4609 120.561 10.7014L121.603 10.9018C122.605 11.1423 123.327 11.3828 123.727 11.6633C124.128 11.9439 124.329 12.3447 124.329 12.8657C124.329 13.3868 124.088 13.988 123.607 14.3487C123.126 14.6693 122.445 14.8697 121.563 14.8697C120.681 14.8697 119.679 14.6293 119.158 14.1884C118.637 13.7475 118.357 13.0661 118.317 12.1844H116.473C116.473 13.5872 116.954 14.6693 117.836 15.3507C118.717 16.0721 119.96 16.4329 121.563 16.4329C123.166 16.4329 124.168 16.1122 125.01 15.4709C125.852 14.8297 126.252 13.9479 126.252 12.8257C126.252 11.7034 125.932 11.1423 125.331 10.5812V10.6212ZM144.93 2.64529H144.008V17.7154H144.93V2.64529ZM136.513 9.93988L140.721 4.16834H138.677L135.511 8.53707L132.345 4.16834H130.301L134.509 9.93988L129.94 16.1924H131.984L135.511 11.3427L139.038 16.1924H141.082L136.513 9.93988ZM156.713 10.6212C156.112 10.0601 155.11 9.65932 153.747 9.33868L152.705 9.13828C151.703 8.93788 151.022 8.65731 150.661 8.37675C150.301 8.09619 150.1 7.69539 150.1 7.13427C150.1 6.57315 150.301 6.17234 150.701 5.89178C151.102 5.61122 151.703 5.4509 152.505 5.4509C153.307 5.4509 154.228 5.6513 154.709 6.01202C155.19 6.37275 155.431 6.93387 155.471 7.69539H157.275C157.275 6.49299 156.834 5.57114 156.032 4.88978C155.23 4.20842 154.028 3.88778 152.465 3.88778C150.902 3.88778 150.1 4.20842 149.339 4.76954C148.577 5.33066 148.176 6.17234 148.176 7.17435C148.176 8.17635 148.497 8.93788 149.138 9.499C149.78 10.0601 150.701 10.4609 151.944 10.7014L152.986 10.9018C153.988 11.1423 154.709 11.3828 155.11 11.6633C155.511 11.9439 155.711 12.3447 155.711 12.8657C155.711 13.3868 155.471 13.988 154.99 14.3487C154.509 14.6693 153.828 14.8697 152.946 14.8697C152.064 14.8697 151.062 14.6293 150.541 14.1884C150.02 13.7475 149.739 13.0661 149.699 12.1844H147.856C147.856 13.5872 148.337 14.6693 149.218 15.3507C150.1 16.0721 151.343 16.4329 152.946 16.4329C154.549 16.4329 155.551 16.1122 156.393 15.4709C157.234 14.8297 157.635 13.9479 157.635 12.8257C157.635 11.7034 157.315 11.1423 156.713 10.5812V10.6212Z",
            fill: e
          })
        }));

      function Xx(e) {
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

      function Gx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Kx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gx(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Xx(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ux(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Wx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $x = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Kx(Kx({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Wx(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ux(e.variantClassNames, e => Ux(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1lhhotm0",
          variantClassNames: {
            size: {
              MD: "foundry_1lhhotm1",
              LG: "foundry_1lhhotm2",
              XL: "foundry_1lhhotm3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Qx = (0, X.forwardRef)(({
        logo: e,
        size: t,
        asChild: r,
        children: n,
        ...o
      }, s) => {
        const a = (0, W.mergeProps)({
            className: $x({
              size: t
            }),
            size: t
          }, o),
          i = S[e];
        if (r && (0, X.isValidElement)(n)) {
          const e = (0, X.cloneElement)(n, n.props, (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(i, {
              size: t,
              "aria-hidden": !0
            }), n.props.children]
          }));
          return (0, R.jsx)(Ce, {
            asChild: !0,
            size: t,
            ref: s,
            ...o,
            children: e
          })
        }
        return (0, R.jsx)(Ce, {
          ...a,
          ref: s,
          children: (0, R.jsx)(i, {
            size: t,
            "aria-hidden": !0
          })
        })
      })
    },
    51817(e, t, r) {
      r.d(t, {
        b: () => i
      });
      var n = r(4637),
        o = r(91479),
        s = r(39793),
        a = ({
          children: e,
          label: t
        }) => {
          const r = n.Children.only(e);
          return (0, s.jsxs)(s.Fragment, {
            children: [n.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, s.jsx)(o.Root, {
              children: t
            })]
          })
        };
      a.displayName = "AccessibleIcon";
      var i = a
    },
    85920(e, t, r) {
      r.d(t, {
        N: () => d
      });
      var n = r(4637),
        o = r(1913),
        s = r(64239),
        a = r(50486),
        i = r(39793);

      function d(e) {
        const t = e + "CollectionProvider",
          [r, d] = (0, o.A)(t),
          [l, c] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          u = e => {
            const {
              scope: t,
              children: r
            } = e, o = n.useRef(null), s = n.useRef(new Map).current;
            return (0, i.jsx)(l, {
              scope: t,
              itemMap: s,
              collectionRef: o,
              children: r
            })
          };
        u.displayName = t;
        const f = e + "CollectionSlot",
          p = (0, a.createSlot)(f),
          h = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = c(f, r), a = (0, s.s)(t, o.collectionRef);
            return (0, i.jsx)(p, {
              ref: a,
              children: n
            })
          });
        h.displayName = f;
        const m = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          y = (0, a.createSlot)(m),
          g = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: o,
              ...a
            } = e, d = n.useRef(null), l = (0, s.s)(t, d), u = c(m, r);
            return n.useEffect(() => (u.itemMap.set(d, {
              ref: d,
              ...a
            }), () => {
              u.itemMap.delete(d)
            })), (0, i.jsx)(y, {
              [v]: "",
              ref: l,
              children: o
            })
          });
        return g.displayName = m, [{
          Provider: u,
          Slot: h,
          ItemSlot: g
        }, function(t) {
          const r = c(e + "CollectionConsumer", t);
          return n.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${v}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }, d]
      }
      Map
    },
    99136(e, t, r) {
      r.d(t, {
        jH: () => s
      });
      var n = r(4637),
        o = (r(39793), n.createContext(void 0));

      function s(e) {
        const t = n.useContext(o);
        return e || t || "ltr"
      }
    },
    52184(e, t, r) {
      r.d(t, {
        Z: () => o
      });
      var n = r(4637);

      function o(e) {
        const t = n.useRef({
          value: e,
          previous: e
        });
        return n.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
    }
  }
]);