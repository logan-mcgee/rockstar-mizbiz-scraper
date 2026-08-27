try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a158027b-d0a0-4e11-9500-74c2c53eeccb", e._sentryDebugIdIdentifier = "sentry-dbid-a158027b-d0a0-4e11-9500-74c2c53eeccb")
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
  [5739], {
    15739(e, t, r) {
      r.r(t), r.d(t, {
        Accordion: () => O,
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => C,
        Badge: () => g,
        Body: () => ot,
        Breadcrumbs: () => y,
        Button: () => _e,
        Checkbox: () => l,
        ChipGroup: () => x,
        Code: () => at,
        Dialog: () => w,
        Display: () => it,
        Divider: () => Ae,
        Dropdown: () => s,
        Heading: () => dt,
        IconButton: () => Ne,
        Label: () => ut,
        Lightbox: () => o,
        Loader: () => $e,
        Pagination: () => _,
        PlatformButton: () => k,
        Popover: () => j,
        ProgressBar: () => P,
        RadioGroup: () => u,
        ScrollArea: () => b,
        Spinner: () => de,
        Switch: () => a,
        Tag: () => m,
        Text: () => ht,
        TextArea: () => d,
        TextField: () => f,
        TextSemantics: () => pt,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => ml,
        Content: () => hl,
        Portal: () => vl,
        Root: () => fl,
        Trigger: () => pl,
        useTooltipContext: () => ul
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => jd,
        Close: () => Rd,
        Content: () => bd,
        Controls: () => Pd,
        CssVars: () => Nd,
        Download: () => Dd,
        Image: () => xd,
        Keyboard: () => Sd,
        LightboxContext: () => cd,
        OpenIcon: () => vd,
        Overlay: () => gd,
        Portal: () => yd,
        Reset: () => Id,
        Root: () => ud,
        RootImplContext: () => fd,
        Thumbnail: () => md,
        Trigger: () => hd,
        Zoom: () => kd,
        ZoomPan: () => wd
      });
      var s = {};
      r.r(s), r.d(s, {
        Content: () => Qu,
        Description: () => of,
        Hint: () => sf,
        Label: () => nf,
        Option: () => af,
        OptionIcon: () => df,
        OptionText: () => lf,
        Portal: () => cf,
        Root: () => $u,
        ScrollArea: () => Ju,
        StatusIcon: () => ff,
        StatusRoot: () => uf,
        StatusText: () => pf,
        Trigger: () => ef,
        TriggerIcon: () => rf,
        TriggerText: () => tf,
        Viewport: () => Yu,
        useDropdownContext: () => Wu
      });
      var a = {};
      r.r(a), r.d(a, {
        Description: () => tp,
        Input: () => Jf,
        Label: () => ep,
        Root: () => Yf,
        useSwitchContext: () => Qf
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => np,
        CheckMD: () => rp,
        CheckXL: () => op,
        DashLG: () => ap,
        DashMD: () => sp,
        DashXL: () => ip
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Pp,
        ErrorText: () => Op,
        Group: () => Rp,
        GroupDescription: () => Dp,
        GroupErrorText: () => Tp,
        GroupItems: () => Np,
        GroupLabel: () => Ip,
        Input: () => xp,
        Label: () => jp,
        Root: () => _p,
        useGroupContext: () => kp
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => Wp,
        Hint: () => $p,
        Input: () => Up,
        Label: () => Kp,
        Root: () => Gp,
        RootContext: () => Zp,
        StatusIcon: () => Yp,
        StatusRoot: () => Qp,
        StatusText: () => Jp,
        useTextAreaContext: () => Xp
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => $h,
        DotMD: () => Wh,
        DotXL: () => Qh
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => Fh,
        Input: () => Jh,
        Label: () => qh,
        Option: () => Yh,
        OptionDescription: () => tm,
        OptionLabel: () => em,
        Options: () => Ah,
        Root: () => Mh,
        StatusIcon: () => Bh,
        StatusRoot: () => Hh,
        StatusText: () => Zh,
        useRadioGroupContext: () => Vh
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => ov,
        Control: () => tv,
        Description: () => av,
        Hint: () => ev,
        Icon: () => nv,
        Input: () => rv,
        Label: () => Jm,
        PasswordButton: () => sv,
        Root: () => Ym,
        StatusIcon: () => lv,
        StatusRoot: () => iv,
        StatusText: () => dv
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => Tv,
        CloseButton: () => Fv,
        Description: () => Vv,
        ErrorText: () => qv,
        Footer: () => Av,
        Header: () => Nv,
        Icon: () => zv,
        Link: () => Mv,
        Root: () => Dv,
        RootContext: () => Rv,
        Title: () => Lv,
        iconStatusMap: () => Ev,
        useAlertContext: () => Iv
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => Hy,
        CloseButton: () => Xy,
        Description: () => Fy,
        Icon: () => qy,
        Link: () => Zy,
        PaginationCounter: () => Wy,
        PaginationNav: () => Gy,
        PaginationNextButton: () => Ky,
        PaginationPrevButton: () => Uy,
        PaginationViewport: () => By,
        Root: () => My,
        RootContext: () => Ly,
        iconStatusMap: () => Ay,
        useAlertBannerContext: () => Vy
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => cg,
        Icon: () => dg,
        Label: () => lg,
        Root: () => ig,
        RootContext: () => sg,
        useTagContext: () => ag
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => pb,
        CloseButton: () => hb,
        Description: () => cb,
        Icon: () => fb,
        Provider: () => sb,
        Root: () => db,
        RootContext: () => ib,
        Viewport: () => ab,
        iconAppearanceMap: () => ub,
        useToastContext: () => lb
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => kb,
        Item: () => Sb,
        OverflowMenu: () => Rb,
        OverflowMenuItem: () => Ib,
        Root: () => Ob,
        RootContext: () => Pb,
        useBreadcrumbsContext: () => jb
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => Fb,
        Label: () => qb,
        Root: () => Ab,
        useBadgeContext: () => Mb
      });
      var b = {};
      r.r(b), r.d(b, {
        Corner: () => ew,
        Root: () => $b,
        Scrollbar: () => Yb,
        Thumb: () => Jb,
        Viewport: () => Qb
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => jw,
        CloseButton: () => xw,
        Content: () => mw,
        Description: () => yw,
        Footer: () => Pw,
        Header: () => ww,
        HeaderButton: () => _w,
        HeaderTitle: () => Cw,
        Layout: () => bw,
        Overlay: () => hw,
        Portal: () => pw,
        Root: () => cw,
        ScrollArea: () => gw,
        Title: () => vw,
        Trigger: () => fw
      });
      var C = {};
      r.r(C), r.d(C, {
        Image: () => oC,
        Root: () => nC,
        StatusIndicator: () => sC,
        useAvatarContext: () => rC
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => gC,
        Dropdown: () => xC,
        DropdownLabel: () => _C,
        Ellipsis: () => yC,
        Item: () => hC,
        Label: () => PC,
        Next: () => vC,
        Option: () => jC,
        Pages: () => pC,
        Prev: () => mC,
        ResultsPerPage: () => CC,
        Root: () => fC
      });
      var x = {};
      r.r(x), r.d(x, {
        Icon: () => q_,
        Item: () => A_,
        Label: () => H_,
        Root: () => M_,
        StatusIndicator: () => F_,
        useChipGroupContext: () => V_
      });
      var j = {};
      r.r(j), r.d(j, {
        Anchor: () => tx,
        Arrow: () => nx,
        Close: () => sx,
        Content: () => rx,
        Portal: () => ox,
        Root: () => Q_,
        RootContext: () => $_,
        Trigger: () => Y_,
        TriggerButton: () => ex
      });
      var P = {};
      r.r(P), r.d(P, {
        Indicator: () => Fx,
        Label: () => Hx,
        Root: () => Mx,
        Track: () => qx,
        UnitLabel: () => Bx
      });
      var O = {};
      r.r(O), r.d(O, {
        Content: () => ij,
        Header: () => nj,
        Icon: () => sj,
        Item: () => rj,
        Root: () => ej,
        Trigger: () => oj,
        TriggerIcon: () => aj
      });
      var S = {};
      r.r(S), r.d(S, {
        PC: () => uj,
        PS4: () => dj,
        PS5: () => cj,
        XboxOne: () => fj,
        XboxSeriesXS: () => pj
      });
      var k = {};
      r.r(k), r.d(k, {
        PlatformButton: () => wj
      });
      var R = r(39793);

      function I(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class D extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }

      function N(e) {
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
        const r = L.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(z(e, 2), 16)), parseInt(z(e[3] || "f", 2), 16) / 255]
        }
        const n = V.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = M.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const s = A.exec(t);
        if (s) {
          const [t, r, n, o] = Array.from(s).slice(1).map(parseFloat);
          if (I(0, 100, r) !== r) throw new D(e);
          if (I(0, 100, n) !== n) throw new D(e);
          return [...H(t, r, n), Number.isNaN(o) ? 1 : o]
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
        z = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        L = new RegExp(`^#${z("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        V = new RegExp(`^#${z("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        M = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${z(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        A = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        q = /^[a-z]+$/i,
        F = e => Math.round(255 * e),
        H = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(F);
          const o = (e % 360 + 360) % 360 / 60,
            s = (1 - Math.abs(2 * n - 1)) * (t / 100),
            a = s * (1 - Math.abs(o % 2 - 1));
          let i = 0,
            l = 0,
            d = 0;
          o >= 0 && o < 1 ? (i = s, l = a) : o >= 1 && o < 2 ? (i = a, l = s) : o >= 2 && o < 3 ? (l = s, d = a) : o >= 3 && o < 4 ? (l = a, d = s) : o >= 4 && o < 5 ? (i = a, d = s) : o >= 5 && o < 6 && (i = s, d = a);
          const c = n - s / 2;
          return [i + c, l + c, d + c].map(F)
        };

      function B(e, t) {
        const [r, n, o, s] = function(e) {
          const [t, r, n, o] = N(e).map((e, t) => 3 === t ? e : e / 255), s = Math.max(t, r, n), a = Math.min(t, r, n), i = (s + a) / 2;
          if (s === a) return [0, 0, i, o];
          const l = s - a;
          return [60 * (t === s ? (r - n) / l + (r < n ? 6 : 0) : r === s ? (n - t) / l + 2 : (t - r) / l + 4), i > .5 ? l / (2 - s - a) : l / (s + a), i, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${I(0,100,100*t).toFixed()}%, ${I(0,100,100*r).toFixed()}%, ${parseFloat(I(0,1,n).toFixed(3))})`
        }(r, n, o - t, s)
      }

      function Z(e, t) {
        return B(e, -t)
      }
      var X = r(4637),
        G = r.t(X, 2),
        K = r(29379),
        U = r(86889),
        W = r(32874);
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
            textColor: l
          },
          enabled: d = !1
        }, c = []) => {
          (0, X.useEffect)(() => {
            if (!e.current || !s || !d) return;
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
                  const [r, n, o] = N(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(s);
                return {
                  text: l || (e > t ? K.LU.global.color.black.static[100] : K.LU.global.color.white.static[100]),
                  hover: a || (e >= r ? B(s, n) : Z(s, n)),
                  pressed: i || (e >= r ? B(s, o) : Z(s, o))
                }
              });
            return e.current.style.setProperty($.enabled.background, s), e.current.style.setProperty($.enabled.border, s), e.current.style.setProperty($.enabled.text, u), e.current.style.setProperty($.hover.background, f), e.current.style.setProperty($.hover.border, f), e.current.style.setProperty($.hover.text, u), e.current.style.setProperty($.focus.background, f), e.current.style.setProperty($.focus.border, f), e.current.style.setProperty($.focus.text, u), e.current.style.setProperty($.pressed.background, p), e.current.style.setProperty($.pressed.border, p), e.current.style.setProperty($.pressed.text, u), e.current.style.setProperty($.loading.background, f), e.current.style.setProperty($.loading.border, f), e.current.style.setProperty($.loading.text, u), () => {
              e.current?.style.removeProperty($.enabled.background), e.current?.style.removeProperty($.enabled.border), e.current?.style.removeProperty($.enabled.text), e.current?.style.removeProperty($.hover.background), e.current?.style.removeProperty($.hover.border), e.current?.style.removeProperty($.hover.text), e.current?.style.removeProperty($.focus.background), e.current?.style.removeProperty($.focus.border), e.current?.style.removeProperty($.focus.text), e.current?.style.removeProperty($.pressed.background), e.current?.style.removeProperty($.pressed.border), e.current?.style.removeProperty($.pressed.text), e.current?.style.removeProperty($.loading.background), e.current?.style.removeProperty($.loading.border), e.current?.style.removeProperty($.loading.text)
            }
          }, [e.current, t, r, n, o, s, a, i, l, d, ...c])
        };
      var Y = r(56166),
        J = r(55267),
        ee = r(37494),
        te = r(81299);

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
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) ae(d, n, e.defaultVariants) && (r += " " + c);
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
      const le = "pageMD",
        de = (0, X.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = le,
          testId: n,
          ...o
        }, s) => {
          const a = (0, ee.zQ)(),
            i = "string" == typeof r ? r : r?.[a] ?? r.default ?? le,
            l = (0, W.mergeProps)({
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
              ...l,
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
        ue = r(45866);

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
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) ve(d, n, e.defaultVariants) && (r += " " + c);
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
        Ce = ye({
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
      const _e = (0, X.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconLeftElement: s,
        iconRight: a,
        iconRightLabel: i,
        iconRightElement: l,
        appearance: d,
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
        override_pressedColor: C,
        override_textColor: _,
        ...x
      }, j) => {
        const P = (0, X.useRef)(null),
          O = (0, Y.UP)(P, j),
          S = (0, ee.zQ)(),
          k = "string" == typeof c ? c : c?.[S] ?? c.default ?? "MD",
          {
            buttonProps: I
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
            pressedColor: C,
            textColor: _
          },
          enabled: "accent" === d
        }, [t]);
        const D = (0, W.mergeProps)({
            className: ge({
              appearance: d,
              size: k,
              fullWidth: u,
              iconLeft: !!n,
              iconRight: !!a
            }),
            "data-testid": e
          }, I),
          N = s || (n && ue[n] ? ue[n] : null),
          T = l || (a && ue[a] ? ue[a] : null),
          E = t ? J.DX : "button",
          z = u && (T || T && N);
        return (0, R.jsxs)(E, {
          ref: O,
          ...D,
          children: [z && (0, R.jsx)("div", {
            className: "foundry_17pcofy15"
          }), N && (0, R.jsx)(N, {
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
            children: (0, R.jsx)(de, {
              label: p || "",
              size: "inline" + ("XL" === k ? "LG" : "MD"),
              hideTrack: !0,
              className: Ce({
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
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Se(d, n, e.defaultVariants) && (r += " " + c);
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
        Ie = ke({
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
      const Ne = (0, X.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        iconElement: n,
        label: o,
        appearance: s,
        fullWidth: a = !1,
        size: i = "LG",
        children: l,
        isLoading: d = !1,
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
      }, C) => {
        const _ = (0, X.useRef)(null),
          x = (0, Y.UP)(_, C),
          j = (0, ee.zQ)(),
          P = "string" == typeof i ? i : i?.[j] ?? i.default ?? "LG",
          {
            buttonProps: O
          } = (0, Y.sL)((0, W.mergeProps)(w, {
            isLoading: d,
            preventFocusOnPress: u
          }), _);
        Q({
          refs: {
            buttonRef: _
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
            className: Ie({
              appearance: s,
              size: P,
              fullWidth: a
            }),
            "data-testid": e
          }, O),
          k = n || (r ? ue[r] : null),
          I = t ? J.DX : "button";
        return (0, R.jsxs)(I, {
          ref: x,
          ...S,
          children: [k && (0, R.jsx)(k, {
            label: o || "",
            size: P,
            className: Re({
              size: P
            })
          }), (0, R.jsx)(J.xV, {
            children: l
          }), d && (0, R.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, R.jsx)(de, {
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

      function ze(e) {
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

      function Le(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ve = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Me = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ze(ze({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Ve(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Le(e.variantClassNames, e => Le(e, e => e.split(" ")[0]))
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
        const l = "horizontal" !== t || n ? "div" : "hr",
          d = n || "hr" === l ? void 0 : "separator",
          c = o ? J.DX : l;
        return (0, R.jsx)(c, {
          ref: i,
          className: (0, ce.clsx)(Me({
            thickness: r,
            orientation: t
          }), e),
          role: d,
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

      function He(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fe(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = qe(o)) in n ? Object.defineProperty(n, o, {
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
              n = He(He({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Ze(d, n, e.defaultVariants) && (r += " " + c);
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
        const l = (0, ee.zQ)(),
          d = "string" == typeof s ? s : s?.[l] ?? s.default ?? "MD",
          c = (0, W.mergeProps)({
            className: Ke({
              size: d
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
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) tt(d, n, e.defaultVariants) && (r += " " + c);
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
      var lt = rt({
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
      const dt = (0, X.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? J.DX : `h${7===t?6:t}`,
          a = (0, W.mergeProps)(n, {
            className: lt({
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
      const Ct = (e, t = gt) => {
        let r = bt;
        yt(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : gt) : yt(t) && (r = t, t = "dependencies" in r ? r.dependencies : gt), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, s = (0, X.useRef)(!1), a = (0, X.useRef)(wt.context(() => {}, n)), i = (0, X.useRef)(e => a.current.add(null, e)), l = t && t.length && !o;
        return l && vt(() => (s.current = !0, () => a.current.revert()), gt), vt(() => {
          if (e && a.current.add(e, n), !l || !s.current) return () => a.current.revert()
        }, t), {
          context: a.current,
          contextSafe: i.current
        }
      };
      Ct.register = e => {
        wt = e
      }, Ct.headless = !0;
      const _t = {
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
      const It = ["enter", "leave"];
      const Dt = ["gotpointercapture", "lostpointercapture"];

      function Nt(e) {
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

      function zt(e) {
        return Tt(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Lt(e, t) {
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

      function Vt(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return Lt(r, n)
      }

      function Mt(e) {
        const t = zt(e);
        return Tt(e) ? t.identifier : t.pointerId
      }

      function At(e) {
        const t = zt(e);
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

      function Ft(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Ht() {}

      function Bt(...e) {
        return 0 === e.length ? Ht : 1 === e.length ? e[0] : function() {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Ft(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            _t.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [s, a] = t._movement, [i, l] = r.threshold, {
            _step: d,
            values: c
          } = t;
          if (r.hasCustomTransform ? (!1 === d[0] && (d[0] = Math.abs(s) >= i && c[0]), !1 === d[1] && (d[1] = Math.abs(a) >= l && c[1])) : (!1 === d[0] && (d[0] = Math.abs(s) >= i && Math.sign(s) * i), !1 === d[1] && (d[1] = Math.abs(a) >= l && Math.sign(a) * l)), t.intentional = !1 !== d[0] || !1 !== d[1], !t.intentional) return;
          const u = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = c;
            u[0] = !1 !== d[0] ? e - d[0] : 0, u[1] = !1 !== d[1] ? t - d[1] : 0
          } else u[0] = !1 !== d[0] ? s - d[0] : 0, u[1] = !1 !== d[1] ? a - d[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(u);
          const f = t.offset,
            p = t._active && !t._blocked || t.active;
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Ft(r.bounds, t)), this.setup && this.setup()), t.movement = u, this.computeOffset()));
          const [h, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [h < v ? -1 : h > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [s, a],
                [i, l]
              ] = e;
              return [jt(t, s, a, n), jt(r, i, l, o)]
            }(t._bounds, t.offset, w), t.delta = _t.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = _t.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            _t.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
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
          this.state.offset = _t.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = _t.sub(this.state.offset, this.state.lastOffset)
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
                return _t.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? _t.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Kt
          },
          threshold: e => _t.toVector(e, 0)
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
            const s = _t.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, s
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(_t.toVector(e)),
              distance: this.transform(_t.toVector(t)),
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
                const t = Zt(Ft(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              s = e => {
                const t = Zt(Ft(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), s()] : e => [o(e), s(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, _t.toVector(e, this.lockDirection ? [.1, 3] : 0)
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
        lr = new Map,
        dr = new Map;

      function cr(e) {
        lr.set(e.key, e.engine), dr.set(e.key, e.resolver)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Mt(e), r._pointerActive = !0, this.computeValues(At(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Et(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Mt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = At(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = _t.sub(o, t._values), this.computeValues(o)), _t.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = Mt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, s] = t._distance;
              if (t.tap = o <= r.tapsThreshold && s <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, s] = t._movement, [a, i] = r.swipe.velocity, [l, d] = r.swipe.distance, c = r.swipe.duration;
                if (t.elapsedTime < c) {
                  const r = Math.abs(e / t.timeDelta),
                    c = Math.abs(n / t.timeDelta);
                  r > a && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), c > i && Math.abs(s) > d && (t.swipe[1] = Math.sign(n))
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
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, _t.addTo(r._movement, r._delta), this.compute(e), this.emit()
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
              t._movement = t._delta = _t.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
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
              r._delta = _t.sub(t, r._values), _t.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
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
              this.state.offset = "wheel" === e ? _t.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = Vt(e, t._touchIds);
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
              const o = Lt(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Vt(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = Lt(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = _t.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-qt(e)[1] / 100 * t.offset[0], 0], _t.addTo(t._movement, t._delta), rr(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
              t._delta = _t.sub(r, t._values), _t.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
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
              t._delta = qt(e), _t.addTo(t._movement, t._delta), rr(t), this.compute(e), this.emit()
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
          const l = () => {
            e.removeEventListener(a, n, i), s.delete(l)
          };
          return s.add(l), l
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class Cr {
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
      class _r {
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
                transform: l
              } = n,
              d = function(e, t) {
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
                transform: l
              }, yr), t) {
              const e = dr.get(t);
              r[t] = br(St({
                shared: r.shared
              }, d), e)
            } else
              for (const e in d) {
                const t = dr.get(e);
                t && (r[e] = br(St({
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
                  s = jr(r, o.eventOptions, !!n);
                o.enabled && new(lr.get(t))(this, e, t).bind(s)
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
              } = Nt(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: s
              })
            }
          }
        }
      }

      function xr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new wr(e, t), e.gestureTimeoutStores[t] = new Cr
      }
      const jr = (e, t, r) => (n, o, s, a = {}, i = !1) => {
          var l, d;
          const c = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            u = null !== (d = a.passive) && void 0 !== d ? d : t.passive;
          let f = i ? n : function(e, t = "", r = !1) {
            const n = kt[e],
              o = n && n[t] || t;
            return "on" + Rt(e) + Rt(o) + (function(e = !1, t) {
              return e && !It.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && u && (f += "Passive"), e[f] = e[f] || [], e[f].push(s)
        },
        Pr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Or(e, t, r, n, o, s) {
        if (!e.has(r)) return;
        if (!lr.has(n)) return;
        const a = r + "Start",
          i = r + "End";
        o[n] = e => {
          let n;
          return e.first && a in t && t[a](e), r in t && (n = t[r](e)), e.last && i in t && t[i](e), n
        }, s[n] = s[n] || {}
      }

      function Sr(e, t = {}, r, n) {
        const o = X.useMemo(() => new _r(e), []);
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
      }), Ir = ([e, t]) => ({
        x: e,
        y: t
      }), Dr = (e, t) => (e.x = t.x, e.y = t.y, e), Nr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Tr = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Er = (e, t, r) => Math.min(Math.max(e, t), r);

      function zr() {
        return zr = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, zr.apply(null, arguments)
      }
      var Lr = ["shift", "alt", "meta", "mod", "ctrl"],
        Vr = {
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

      function Mr(e) {
        return (e && Vr[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Ar(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function qr(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return Mr(e)
        });
        return zr({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Lr.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && Br([Mr(e.key), Mr(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && Zr([Mr(e.key), Mr(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Fr.clear()
      });
      var Fr = new Set;

      function Hr(e) {
        return Array.isArray(e)
      }

      function Br(e) {
        var t = Array.isArray(e) ? e : [e];
        Fr.has("meta") && Fr.forEach(function(e) {
          return ! function(e) {
            return Lr.includes(e)
          }(e) && Fr.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Fr.add(e.toLowerCase())
        })
      }

      function Zr(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Fr.clear() : t.forEach(function(e) {
          return Fr.delete(e.toLowerCase())
        })
      }

      function Xr(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          s = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && s ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Hr(t) ? Boolean(n && t && t.some(function(e) {
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
            l = i[0],
            d = i[1],
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
              d(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            h = (0, X.useCallback)(function(e) {
              d(function(t) {
                return t.filter(function(t) {
                  return !Ur(t, e)
                })
              })
            }, []);
          return (0, R.jsx)(Wr.Provider, {
            value: {
              enabledScopes: s,
              hotkeys: l,
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
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          d = Hr(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          u = (0, X.useCallback)(t, null != c ? c : []),
          f = (0, X.useRef)(u);
        f.current = c ? u : t;
        var p = function(e) {
            var t = (0, X.useRef)(void 0);
            return Ur(t.current, e) || (t.current = e), t.current
          }(l),
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
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && Ar(d, null == p ? void 0 : p.splitKey).forEach(function(r) {
                    var n, o = qr(r, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, s = t.alt,
                          a = t.meta,
                          i = t.mod,
                          l = t.shift,
                          d = t.ctrl,
                          c = t.keys,
                          u = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = Mr(f),
                          g = u.toLowerCase();
                        if (!(null != c && c.includes(y) || null != c && c.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (s === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (i) {
                            if (!h && !p) return !1
                          } else {
                            if (a === !h && "meta" !== g && "os" !== g) return !1;
                            if (d === !p && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (Hr(n = c) ? n : n.split(o)).every(function(e) {
                          return Fr.has(e.trim().toLowerCase())
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
                void 0 !== e.key && (Br(Mr(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Zr(Mr(e.code)), i.current = !1, null != p && p.keyup && r(e, !0))
              },
              a = s || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Ar(d, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return m.addHotkey(qr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Ar(d, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return m.removeHotkey(qr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [s, d, p, h]), a
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
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) on(d, n, e.defaultVariants) && (r += " " + c);
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
        ln = sn({
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
      mt.gsap.registerPlugin(Ct);
      const dn = {
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
          "en-US": r.e(8696).then(r.bind(r, 68696)),
          "de-DE": r.e(5847).then(r.bind(r, 25847)),
          "es-ES": r.e(9269).then(r.bind(r, 69269)),
          "es-MX": r.e(9708).then(r.bind(r, 79708)),
          "fr-FR": r.e(9933).then(r.bind(r, 79933)),
          "it-IT": r.e(4607).then(r.bind(r, 64607)),
          "ja-JP": r.e(2656).then(r.bind(r, 62656)),
          "ko-KR": r.e(7110).then(r.bind(r, 87110)),
          "pl-PL": r.e(5529).then(r.bind(r, 25529)),
          "pt-BR": r.e(6405).then(r.bind(r, 36405)),
          "ru-RU": r.e(9103).then(r.bind(r, 99103)),
          "zh-CN": r.e(4962).then(r.bind(r, 54962)),
          "zh-TW": r.e(7602).then(r.bind(r, 37602))
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
      class Cn {
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
      class _n {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Ir(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Dr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Ir(e);
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
          var i, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Dr(this.startPan, s)), n && (a = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), a = {
            x: this.slide.bounds.correctPan("x", a.x),
            y: this.slide.bounds.correctPan("y", a.y)
          }, this.slide.setZoomLevel(t, !1), l = s, ((i = a).x !== l.x || i.y !== l.y || n || o) && (Dr(this.slide.pan, a), this.slide.setZoomLevel(r))
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
          super(), this.width = e, this.height = t, this.opener = new Cn({
            slide: this
          }), this.bounds = new yn({
            slide: this
          }), this.dragHandler = new wn({
            options: s,
            slide: this
          }), this.scrollWheel = new _n({
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
          e = Tr(e), r || (e = Er(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Nr(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Nr(this.pan)
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
      var kn = r(14414);
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
      var In = "foundry_bc732x1";
      const Dn = (0, X.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Jr(e, e => r?.(e), [r]), (0, R.jsx)(ot, {
        size: "XS",
        className: (0, ce.clsx)("foundry_bc732x0", {
          [In]: t
        }),
        asChild: !0,
        children: (0, R.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Nn = Object.defineProperty,
        Tn = (e, t) => {
          let r = {};
          for (var n in e) Nn(r, n, {
            get: e[n],
            enumerable: !0
          });
          return t || Nn(r, Symbol.toStringTag, {
            value: "Module"
          }), r
        };
      let En = $n();
      const zn = e => Gn(e, En);
      let Ln = $n();
      zn.write = e => Gn(e, Ln);
      let Vn = $n();
      zn.onStart = e => Gn(e, Vn);
      let Mn = $n();
      zn.onFrame = e => Gn(e, Mn);
      let An = $n();
      zn.onFinish = e => Gn(e, An);
      let qn = [];
      zn.setTimeout = (e, t) => {
        const r = zn.now() + t,
          n = () => {
            const e = qn.findIndex(e => e.cancel == n);
            ~e && qn.splice(e, 1), Zn -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return qn.splice(Fn(r), 0, o), Zn += 1, Kn(), o
      };
      const Fn = e => ~(~qn.findIndex(t => t.time > e) || ~qn.length);
      zn.cancel = e => {
        Vn.delete(e), Mn.delete(e), An.delete(e), En.delete(e), Ln.delete(e)
      }, zn.sync = e => {
        Xn = !0, zn.batchedUpdates(e), Xn = !1
      }, zn.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, zn.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Vn.delete(r), t = null
        }, n
      };
      let Hn = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      zn.use = e => Hn = e, zn.now = "undefined" != typeof performance ? () => performance.now() : Date.now, zn.batchedUpdates = e => e(), zn.catch = console.error, zn.frameLoop = "always", zn.onDemand = () => {}, zn.advance = () => {
        "demand" !== zn.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Wn()
      };
      let Bn = -1,
        Zn = 0,
        Xn = !1;

      function Gn(e, t) {
        Xn ? (t.delete(e), e(0)) : (t.add(e), Kn(), "demand" === zn.frameLoop && zn.onDemand())
      }

      function Kn() {
        Bn < 0 && (Bn = 0, "demand" !== zn.frameLoop && Hn(Un))
      }

      function Un() {
        ~Bn && (Hn(Un), zn.batchedUpdates(Wn))
      }

      function Wn() {
        const e = Bn;
        Bn = zn.now();
        const t = Fn(Bn);
        t && (Qn(qn.splice(0, t), e => e.handler()), Zn -= t), Zn ? (Vn.flush(), En.flush(e ? Math.min(64, Bn - e) : 16.667), Mn.flush(), Ln.flush(), An.flush(), "demand" === zn.frameLoop && Zn > 0 && zn.onDemand()) : Bn = -1
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
            zn.catch(e)
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
          e.to && (co = e.to), e.now && (zn.now = e.now), void 0 !== e.colors && (uo = e.colors), null != e.skipAnimation && (fo = e.skipAnimation), e.createStringInterpolator && (lo = e.createStringInterpolator), e.requestAnimationFrame && zn.use(e.requestAnimationFrame), e.batchedUpdates && (zn.batchedUpdates = e.batchedUpdates), e.willAdvance && (po = e.willAdvance), e.frameLoop && (zn.frameLoop = e.frameLoop), e.onDemand && (zn.onDemand = e.onDemand)
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
          go > e.priority ? (mo.add(e), zn.onStart(wo)) : (Co(e), zn(xo))
        },
        advance: xo,
        sort(e) {
          if (go) zn.onFrame(() => bo.sort(e));
          else {
            const t = vo.indexOf(e);
            ~t && (vo.splice(t, 1), _o(e))
          }
        },
        clear() {
          vo = [], mo.clear()
        }
      };

      function wo() {
        mo.forEach(Co), mo.clear(), zn(xo)
      }

      function Co(e) {
        vo.includes(e) || _o(e)
      }

      function _o(e) {
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
        Io = new RegExp("hsla" + Oo(jo, Po, Po, jo)),
        Do = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        No = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        To = /^#([0-9a-fA-F]{6})$/,
        Eo = /^#([0-9a-fA-F]{8})$/;

      function zo(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Lo(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          s = zo(o, n, e + 1 / 3),
          a = zo(o, n, e),
          i = zo(o, n, e - 1 / 3);
        return Math.round(255 * s) << 24 | Math.round(255 * a) << 16 | Math.round(255 * i) << 8
      }

      function Vo(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Mo(e) {
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

      function Fo(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = To.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : uo && void 0 !== uo[e] ? uo[e] : (t = So.exec(e)) ? (Vo(t[1]) << 24 | Vo(t[2]) << 16 | Vo(t[3]) << 8 | 255) >>> 0 : (t = ko.exec(e)) ? (Vo(t[1]) << 24 | Vo(t[2]) << 16 | Vo(t[3]) << 8 | Ao(t[4])) >>> 0 : (t = Do.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Eo.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = No.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Ro.exec(e)) ? (255 | Lo(Mo(t[1]), qo(t[2]), qo(t[3]))) >>> 0 : (t = Io.exec(e)) ? (Lo(Mo(t[1]), qo(t[2]), qo(t[3])) | Ao(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      const Ho = (e, t, r) => {
          if (Jn.fun(e)) return e;
          if (Jn.arr(e)) return Ho({
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
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, s);
            return function(e, t, r, n, o, s, a, i, l) {
              let d = l ? l(e) : e;
              if (d < t) {
                if ("identity" === a) return d;
                "clamp" === a && (d = t)
              }
              if (d > r) {
                if ("identity" === i) return d;
                "clamp" === i && (d = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? d = -d : r === 1 / 0 ? d -= t : d = (d - t) / (r - t), d = s(d), n === -1 / 0 ? d = -d : o === 1 / 0 ? d += n : d = d * (o - n) + n, d)
            }(e, s[t], s[t + 1], o[t], o[t + 1], l, a, i, n.map)
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
        ls = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ds = new RegExp(`(${is.source})(%|[a-z]+)`, "i"),
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
          const t = e.output.map(e => Jo(e).replace(us, fs).replace(ls, Fo).replace(hs, Fo)),
            r = t.map(e => vs(e).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })).map(t => Ho({
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
            const s = !ds.test(t[0]) && t.find(e => ds.test(e))?.replace(is, "");
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
        Cs = bs(console.warn);

      function _s(e) {
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
        Is = e => e && e[Ss] && e[Ss].getPayload();
      var Ds = class {
          constructor() {
            Rs(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Ns = class e extends Ds {
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
        Ts = class e extends Ns {
          constructor(e) {
            super(0), this._string = null, this._toString = Ho({
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
            e && (this._toString = Ho({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        };
      const Es = {
        dependencies: null
      };
      var zs = class extends Ds {
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
            const t = Is(e);
            t && to(t, e => this.add(e))
          }
        },
        Ls = class e extends zs {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Vs)), !0)
          }
        };

      function Vs(e) {
        return (_s(e) ? Ts : Ns).create(e)
      }

      function Ms(e) {
        const t = ks(e);
        return t ? t.constructor : Jn.arr(e) ? Ls : _s(e) ? Ts : Ns
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
            [i, l] = function(e, t) {
              const r = new Set;
              return Es.dependencies = r, e.style && (e = {
                ...e,
                style: t.createAnimatedStyle(e.style)
              }), e = new zs(e), Es.dependencies = null, [e, r]
            }(n, t),
            d = js(),
            c = () => {
              const e = s.current;
              r && !e || !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && d()
            },
            u = new qs(c, l),
            f = (0, X.useRef)(void 0);
          xs(() => (f.current = u, to(l, e => os(e, u)), () => {
            f.current && (to(f.current.deps, e => ss(e, f.current)), zn.cancel(f.current.update))
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
          "change" == e.type && zn.write(this.update)
        }
      };
      const Fs = Symbol.for("AnimatedComponent"),
        Hs = new WeakMap,
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
        return Jn.arr(t) ? t.map(Js) : _s(t) ? io.createStringInterpolator({
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

      function la(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: s
      }) {
        return new Promise((a, i) => {
          let l, d, c = Xs(r.cancel ?? n?.cancel, t);
          if (c) p();
          else {
            Jn.und(r.pause) || (o.paused = Xs(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Xs(e, t)), l = Zs(r.delay || 0, t), e ? (o.resumeQueue.add(f), s.pause()) : (s.resume(), f())
          }

          function u() {
            o.resumeQueue.add(f), o.timeouts.delete(d), d.cancel(), l = d.time - zn.now()
          }

          function f() {
            l > 0 && !io.skipAnimation ? (o.delayed = !0, d = zn.setTimeout(p, l), o.pauseQueue.add(u), o.timeouts.add(d)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(u), o.timeouts.delete(d), e <= (o.cancelId || 0) && (c = !0);
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
      const da = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? fa(e.get()) : t.every(e => e.noop) ? ca(e.get()) : ua(e.get(), t.every(e => e.finished)),
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
          promise: l
        } = r;
        return s || e !== i || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const d = Ws(t, (e, t) => "onRest" === t ? void 0 : e);
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
              if (i.parentId = o, ro(d, (e, t) => {
                  Jn.und(i[t]) && (i[t] = e)
                }), io.skipAnimation) {
                if (++h > 1024) throw ha(r), a.result = ua(n, !1), u(a), a;
                return i.immediate = !0, await n.start(i)
              }
              const l = await n.start(i);
              return p(s), r.paused && await new Promise(e => {
                r.resumeQueue.add(e)
              }), l
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
            o == r.asyncId && (r.asyncId = s, r.asyncTo = s ? i : void 0, r.promise = s ? l : void 0)
          }
          return Jn.fun(a) && zn.batchedUpdates(() => {
            a(v, n, n.item)
          }), v
        })() : l
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
        Ca = e => (1 & e[wa]) > 0,
        _a = e => (2 & e[wa]) > 0,
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
          return !(_a(this) || this._state.asyncTo) || xa(this)
        }
        get goal() {
          return Jo(this.animation.to)
        }
        get velocity() {
          const e = ks(this);
          return e instanceof Ns ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
        }
        get hasAnimated() {
          return Ca(this)
        }
        get isAnimating() {
          return _a(this)
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
          } = n, a = Is(n.to);
          !a && Yo(n.to) && (o = no(Jo(n.to))), n.values.forEach((i, l) => {
            if (i.done) return;
            const d = i.constructor == Ts ? 1 : a ? a[l].lastPosition : o[l];
            let c = n.immediate,
              u = d;
            if (!c) {
              if (u = i.lastPosition, s.tension <= 0) return void(i.done = !0);
              let t = i.elapsedTime += e;
              const r = n.fromValues[l],
                o = null != i.v0 ? i.v0 : i.v0 = Jn.arr(s.velocity) ? s.velocity[l] : s.velocity;
              let a;
              const f = s.precision || (r == d ? .005 : Math.max(Math.max(Math.abs(d), Math.abs(r), 1) * Number.EPSILON, Math.min(1, .001 * Math.abs(d - r))));
              if (Jn.und(s.duration))
                if (s.decay) {
                  const e = !0 === s.decay ? .998 : s.decay,
                    n = Math.exp(-(1 - e) * t);
                  u = r + o / (1 - e) * (1 - n), c = Math.abs(i.lastPosition - u) <= f, a = o * n
                } else {
                  a = null == i.lastVelocity ? o : i.lastVelocity;
                  const t = s.restVelocity || f / 10,
                    n = s.clamp ? 0 : s.bounce,
                    l = !Jn.und(n),
                    p = r == d ? i.v0 > 0 : r < d;
                  let h, m = !1;
                  const v = 1,
                    y = Math.ceil(e / v);
                  for (let e = 0; e < y && (h = Math.abs(a) > t, h || (c = Math.abs(d - u) <= f, !c)); ++e) l && (m = u == d || u > d == p, m && (a = -a * n, u = d)), a += (1e-6 * -s.tension * (u - d) + .001 * -s.friction * a) / s.mass * v, u += a * v
                }
              else {
                let n = 1;
                s.duration > 0 && (this._memoizedDuration !== s.duration && (this._memoizedDuration = s.duration, i.durationProgress > 0 && (i.elapsedTime = s.duration * i.durationProgress, t = i.elapsedTime += e)), n = (s.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, i.durationProgress = n), u = r + s.easing(n) * (d - r), a = (u - i.lastPosition) / e, c = 1 == n
              }
              i.lastVelocity = a, Number.isNaN(u) && (console.warn("Got NaN while animating:", this), c = !0)
            }
            a && !a[l].done && (c = !1), c ? i.done = !0 : t = !1, i.setValue(u, s.round) && (r = !0)
          });
          const i = ks(this),
            l = i.getValue();
          if (t) {
            const e = Jo(n.to);
            l === e && !r || s.decay ? r && s.decay && this._onChange(l) : (i.setValue(e), this._onChange(e)), this._stop()
          } else r && this._onChange(l)
        }
        set(e) {
          return zn.batchedUpdates(() => {
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
          if (_a(this)) {
            const {
              to: e,
              config: t
            } = this.animation;
            zn.batchedUpdates(() => {
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
          }], Promise.all(r.map(e => this._update(e))).then(e => da(this, e))
        }
        stop(e) {
          const {
            to: t
          } = this.animation;
          return Jn.und(t) || this._focus(this.get()), ha(this._state, e && this._lastCallId), zn.batchedUpdates(() => this._stop(t, e)), this
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
          return Ca(this) || (e.reverse && ([r, n] = [n, r]), n = Jo(n), Jn.und(n) ? ks(this) || this._set(r) : this._set(n)), o
        }
        _update({
          ...e
        }, t) {
          const {
            key: r,
            defaultProps: n
          } = this;
          e.default && Object.assign(n, Ws(e, (e, t) => /^on/.test(t) ? Gs(e, r) : e)), Na(this, e, "onProps"), Ta(this, "onProps", e, this);
          const o = this._prepareNode(e);
          if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
          const s = this._state;
          return la(++this._lastCallId, {
            key: r,
            props: e,
            defaultProps: n,
            state: s,
            actions: {
              pause: () => {
                xa(this) || (Pa(this, !0), so(s.pauseQueue), Ta(this, "onPause", ua(this, Sa(this, this.animation.to)), this))
              },
              resume: () => {
                xa(this) && (Pa(this, !1), _a(this) && this._resume(), so(s.resumeQueue), Ta(this, "onResume", ua(this, Sa(this, this.animation.to)), this))
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
            to: l,
            from: d
          } = i;
          let {
            to: c = l,
            from: u = d
          } = e;
          !o || n || t.default && !Jn.und(c) || (c = u), t.reverse && ([c, u] = [u, c]);
          const f = !eo(u, d);
          f && (i.from = u), u = Jo(u);
          const p = !eo(c, l);
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
            C = Js(c),
            _ = Jn.num(C) || Jn.arr(C) || _s(C),
            x = !h && (!_ || Xs(a.immediate || t.immediate, s));
          if (p) {
            const e = Ms(c);
            if (e !== g.constructor) {
              if (!x) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
              g = this._set(C)
            }
          }
          const j = g.constructor;
          let P = Yo(c),
            O = !1;
          if (!P) {
            const e = b || !Ca(this) && f;
            (p || e) && (O = eo(Js(w), C), P = !O), (eo(i.immediate, x) || x) && eo(m.decay, v) && eo(m.velocity, y) || (P = !0)
          }
          if (O && _a(this) && (i.changed && !b ? P = !0 : P || this._stop(l)), !h && ((P || Yo(l)) && (i.values = g.getPayload(), i.toValues = Yo(c) ? null : j == Ts ? [1] : no(C)), i.immediate != x && (i.immediate = x, x || b || this._set(l)), P)) {
            const {
              onRest: e
            } = i;
            to(Da, e => Na(this, t, e));
            const n = ua(this, Sa(this, l));
            so(this._pendingCalls, n), this._pendingCalls.add(r), i.changed && zn.batchedUpdates(() => {
              i.changed = !b, e?.(n, this), b ? Zs(a.onRest, n) : i.onStart?.(n, this)
            })
          }
          b && this._set(w), h ? r(pa(t.to, t, this._state, this)) : P ? this._start() : _a(this) && !p ? this._pendingCalls.add(r) : r(ca(w))
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
              const n = Ms(r);
              e && e.constructor == n ? e.setValue(r) : Rs(this, n.create(r)), e && zn.batchedUpdates(() => {
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
          ks(this).reset(Jo(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), _a(this) || (ja(this, !0), xa(this) || this._resume())
        }
        _resume() {
          io.skipAnimation ? this.finish() : bo.start(this)
        }
        _stop(e, t) {
          if (_a(this)) {
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
        return Jn.obj(t) && Ia(t, n), Jn.obj(r) && Ia(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Ia(e, t) {
        ro(e, (e, r) => null != e && t.add(r))
      }
      const Da = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Na(e, t, r) {
        e.animation[r] = t[r] !== Ks(t, r) ? Gs(t[r], e.key) : void 0
      }

      function Ta(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      const Ea = ["onStart", "onChange", "onRest"];
      let za = 1;
      var La = class {
        constructor(e, t) {
          this.id = za++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._lastLoopId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
          return e ? t = no(e).map(Ra) : this.queue = [], this._flush ? this._flush(this, t) : (Fa(this, t), function(e, t) {
            return Promise.all(t.map(t => Va(e, t))).then(t => da(e, t))
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
          zn.onFrame(this._onFrame)
        }
      };
      async function Va(e, t, r) {
        const {
          keys: n,
          to: o,
          from: s,
          loop: a,
          onRest: i,
          onResolve: l
        } = t, d = Jn.obj(t.default) && t.default;
        a && (t.loop = !1);
        const c = t,
          u = r || c.parentId || !("loop" in t) ? r ? c.loopId : e._lastLoopId : ++e._lastLoopId;
        !1 === o && (t.to = null), !1 === s && (t.from = null);
        const f = Jn.arr(o) || Jn.fun(o) ? o : void 0;
        f ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : to(Ea, r => {
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
            }, d && (d[r] = t[r])
          }
        });
        const p = e._state;
        t.pause === !p.paused ? (p.paused = t.pause, so(t.pause ? p.pauseQueue : p.resumeQueue)) : p.paused && (t.pause = !0);
        const h = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          m = !0 === t.cancel || !0 === Ks(t, "cancel");
        (f || m && p.asyncId) && h.push(la(++e._lastAsyncId, {
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
        const v = da(e, await Promise.all(h));
        if (a && v.finished && (!r || !v.noop) && u === e._lastLoopId) {
          const r = ka(t, a, o);
          if (r) return r.loopId = u, e._onLoopReset?.forEach(e => e()), Fa(e, [r]), Va(e, r, !0)
        }
        return l && zn.batchedUpdates(() => l(v, e, e.item)), v
      }

      function Ma(e, t) {
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

      function Fa(e, t) {
        to(t, t => {
          qa(e.springs, t, t => Aa(t, e))
        })
      }
      const Ha = X.createContext({
          pause: !1,
          immediate: !1
        }),
        Ba = () => {
          const e = [],
            t = function(t) {
              Cs(`${gs}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
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
            expires: l = !0,
            exitBeforeEnter: d = !1,
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
              ctrl: new La
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
        let C = -a;
        const _ = [],
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
            C += a;
            const m = {
              ...j,
              delay: h + C,
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
                  const t = Zs(l, r.item);
                  if (!1 !== t) {
                    const n = !0 === t ? 0 : t;
                    if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(x, n)))
                  }
                }
                e && t.some(e => e.expired) && (d && (S.current = !0), x())
              }
            };
            const w = Ma(e.ctrl, m);
            _.push({
              payload: m,
              propsDelay: h
            }), "leave" === p && d ? O.current.set(e, {
              phase: p,
              springs: w,
              payload: m
            }) : P.set(e, {
              phase: p,
              springs: w,
              payload: m
            })
          }), i && a) {
          const e = _.length;
          to(_, ({
            payload: t,
            propsDelay: r
          }, n) => {
            t.delay = r + (e - 1 - n) * a
          })
        }
        const k = (0, X.useContext)(Ha),
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
        const I = e => X.createElement(X.Fragment, null, m.map((t, r) => {
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
            l = X.version < "19.0.0",
            d = a?.props ?? {},
            c = l ? a?.ref : d?.ref;
          return a && a.type ? X.createElement(a.type, {
            ...d,
            key: i,
            ref: c
          }) : a
        }));
        return p ? [I, p] : I
      }
      let Ka = 1;
      var Ua = class extends ba {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Ho(...t);
          const r = this._get(),
            n = Ms(r);
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
          this.idle && !$a(this._active) && (this.idle = !1, to(Is(this), e => {
            e.done = !1
          }), io.skipAnimation ? (zn.batchedUpdates(() => this.advance()), Qa(this)) : bo.start(this))
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
        e.idle || (e.idle = !0, to(Is(e), e => {
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
        li = (e, t) => Jn.arr(e) ? e.every(e => li(e, t)) : Jn.num(e) ? e === t : parseFloat(e) === t;
      var di = class extends zs {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              s = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), s.push(e => [`translate3d(${e.map(e=>ii(e,"px")).join(",")})`, li(e, 0)])), ro(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), s.push(e => [e, "" === e]);
              else if (oi.test(t)) {
                if (delete n[t], Jn.und(e)) return;
                const r = si.test(t) ? "px" : ai.test(t) ? "deg" : "";
                o.push(no(e)), s.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${ii(o,r)})`, li(o, 0)] : e => [`${t}(${e.map(e=>ii(e,r)).join(",")})`, li(e, t.startsWith("scale") ? 1 : 0)])
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
          createAnimatedStyle: r = e => new zs(e),
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
                let t = e[Fs] ?? Hs.get(e);
                if (!t) {
                  t = As(e, o);
                  try {
                    e[Fs] = t
                  } catch {}
                  Hs.set(e, t)
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
                viewBox: l,
                ...d
              } = t,
              c = Object.values(d),
              u = Object.keys(d).map(t => r || e.hasAttribute(t) ? t : ti[t] || (ti[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            t.hasOwnProperty("children") && (e.textContent = s);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = ei(t, o[t]);
                Ja.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach((t, r) => {
              const n = c[r];
              void 0 !== n ? e.setAttribute(t, n) : e.removeAttribute(t)
            }), t.hasOwnProperty("className") && (void 0 !== n ? e.className = n : e.removeAttribute("class")), void 0 !== a && (e.scrollTop = a), void 0 !== i && (e.scrollLeft = i), t.hasOwnProperty("viewBox") && (void 0 !== l ? e.setAttribute("viewBox", l) : e.removeAttribute("viewBox"))
          },
          createAnimatedStyle: e => new di(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        fi = ui.animated;
      var pi = r(44752),
        hi = r(85049),
        mi = r(72579),
        vi = r(78077),
        yi = r(31431),
        gi = r(78961),
        bi = r(743),
        wi = r(81432),
        Ci = r(41988),
        _i = r(49481),
        xi = r(44622),
        ji = r(9608),
        Pi = r(68565),
        Oi = Object.defineProperty,
        Si = (e, t) => Oi(e, "name", {
          value: t,
          configurable: !0
        }),
        [ki, Ri] = (0, mi.A)("Tooltip", [gi.Bk]),
        Ii = (0, gi.Bk)(),
        Di = 700,
        Ni = "tooltip.open",
        [Ti, Ei] = ki("TooltipProvider"),
        zi = Si(e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Di,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: s
          } = e, a = X.useRef(!0), i = X.useRef(!1), l = X.useRef(0);
          return X.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, R.jsx)(Ti, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: X.useCallback(() => {
              n <= 0 || (window.clearTimeout(l.current), a.current = !1)
            }, [n]),
            onClose: X.useCallback(() => {
              n <= 0 || (window.clearTimeout(l.current), l.current = window.setTimeout(() => a.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: X.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: s
          })
        }, "TooltipProvider"),
        Li = "Tooltip",
        [Vi, Mi] = ki(Li),
        Ai = Si(e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: a,
            delayDuration: i
          } = e, l = Ei(Li, e.__scopeTooltip), d = Ii(t), [c, u] = X.useState(null), [f, p] = X.useState(void 0), h = (0, yi.useId)(), m = X.useRef(0), v = a ?? l.disableHoverableContent, y = i ?? l.delayDuration, g = X.useRef(!1), [b, w] = (0, xi.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: Si(e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ni))) : l.onClose(), s?.(e)
            }, "onChange"),
            caller: Li
          }), C = X.useMemo(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [b]), _ = X.useCallback(() => {
            window.clearTimeout(m.current), m.current = 0, g.current = !1, w(!0)
          }, [w]), x = X.useCallback(() => {
            window.clearTimeout(m.current), m.current = 0, w(!1)
          }, [w]), j = X.useCallback(() => {
            window.clearTimeout(m.current), m.current = window.setTimeout(() => {
              g.current = !0, w(!0), m.current = 0
            }, y)
          }, [y, w]);
          X.useEffect(() => () => {
            m.current && (window.clearTimeout(m.current), m.current = 0)
          }, []);
          const P = f ?? h;
          return (0, R.jsx)(gi.bL, {
            ...d,
            children: (0, R.jsx)(Vi, {
              scope: t,
              contentId: P,
              setContentId: p,
              open: b,
              stateAttribute: C,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: X.useCallback(() => {
                l.isOpenDelayedRef.current ? j() : _()
              }, [l.isOpenDelayedRef, j, _]),
              onTriggerLeave: X.useCallback(() => {
                v ? x() : (window.clearTimeout(m.current), m.current = 0)
              }, [x, v]),
              onOpen: _,
              onClose: x,
              disableHoverableContent: v,
              children: r
            })
          })
        }, "Tooltip"),
        qi = "TooltipTrigger",
        Fi = X.forwardRef(Si(function(e, t) {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Mi(qi, r), s = Ei(qi, r), a = Ii(r), i = X.useRef(null), l = (0, hi.s)(t, i, o.onTriggerChange), d = X.useRef(!1), c = X.useRef(!1), u = X.useCallback(() => d.current = !1, []);
          return X.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, R.jsx)(gi.Mz, {
            asChild: !0,
            ...a,
            children: (0, R.jsx)(Ci.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, pi.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || s.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, pi.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, pi.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, pi.mK)(e.onFocus, () => {
                d.current || o.onOpen()
              }),
              onBlur: (0, pi.mK)(e.onBlur, o.onClose),
              onClick: (0, pi.mK)(e.onClick, o.onClose)
            })
          })
        }, "TooltipTrigger")),
        Hi = "TooltipPortal",
        [Bi, Zi] = ki(Hi, {
          forceMount: void 0
        }),
        Xi = Si(e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = Mi(Hi, t);
          return (0, R.jsx)(Bi, {
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
        }, "TooltipPortal"),
        Gi = "TooltipContent",
        Ki = X.forwardRef(Si(function(e, t) {
          const r = Zi(Gi, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...s
            } = e,
            a = Mi(Gi, e.__scopeTooltip);
          return (0, R.jsx)(wi.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, R.jsx)($i, {
              side: o,
              ...s,
              ref: t
            }) : (0, R.jsx)(Ui, {
              side: o,
              ...s,
              ref: t
            })
          })
        }, "TooltipContent")),
        Ui = X.forwardRef(Si(function(e, t) {
          const r = Mi(Gi, e.__scopeTooltip),
            n = Ei(Gi, e.__scopeTooltip),
            o = X.useRef(null),
            s = (0, hi.s)(t, o),
            [a, i] = X.useState(null),
            {
              trigger: l,
              onClose: d
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
                o = rl([...Ji(n, Yi(n, r.getBoundingClientRect())), ...el(t.getBoundingClientRect())]);
              i(o), u(!0)
            }, [u]);
          return X.useEffect(() => () => f(), [f]), X.useEffect(() => {
            if (l && c) {
              const e = Si(e => p(e, c), "handleTriggerLeave"),
                t = Si(e => p(e, l), "handleContentLeave");
              return l.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [l, c, p, f]), X.useEffect(() => {
            if (a) {
              const e = Si(e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = l?.contains(t) || c?.contains(t),
                  o = !tl(r, a);
                n ? f() : o && (f(), d())
              }, "handleTrackPointerGrace");
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, c, a, d, f]), (0, R.jsx)($i, {
            ...e,
            ref: s
          })
        }, "TooltipContentHoverable")),
        Wi = (0, _i.createSlottable)("TooltipContent"),
        $i = X.forwardRef(Si(function(e, t) {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            id: s,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            ...l
          } = e, d = Mi(Gi, r), c = Ii(r), {
            onClose: u
          } = d;
          X.useEffect(() => (document.addEventListener(Ni, u), () => document.removeEventListener(Ni, u)), [u]), X.useEffect(() => {
            if (d.trigger) {
              const e = Si(e => {
                e.target instanceof Node && e.target.contains(d.trigger) && u()
              }, "handleScroll");
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, u]);
          const {
            setContentId: f
          } = d;
          return (0, ji.N)(() => (f(s), () => {
            f(void 0)
          }), [s, f]), (0, R.jsx)(vi.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, R.jsxs)(gi.UC, {
              "data-state": d.stateAttribute,
              role: o ? void 0 : "tooltip",
              id: o ? void 0 : d.contentId,
              ...c,
              ...l,
              ref: t,
              style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, R.jsx)(Wi, {
                children: n
              }), o ? (0, R.jsx)(Pi.Root, {
                id: d.contentId,
                role: "tooltip",
                children: o
              }) : null]
            })
          })
        }, "TooltipContentImpl")),
        Qi = X.forwardRef(Si(function(e, t) {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Ii(r);
          return (0, R.jsx)(gi.i3, {
            ...o,
            ...n,
            ref: t
          })
        }, "TooltipArrow"));

      function Yi(e, t) {
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
      }

      function Ji(e, t, r = 5) {
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
      }

      function el(e) {
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
      }

      function tl(e, t) {
        const {
          x: r,
          y: n
        } = e;
        let o = !1;
        for (let e = 0, s = t.length - 1; e < t.length; s = e++) {
          const a = t[e],
            i = t[s],
            l = a.x,
            d = a.y,
            c = i.x,
            u = i.y;
          d > n != u > n && r < (c - l) * (n - d) / (u - d) + l && (o = !o)
        }
        return o
      }

      function rl(e) {
        const t = e.slice();
        return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0), nl(t)
      }

      function nl(e) {
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
      }
      Si(Yi, "getExitSideFromRect"), Si(Ji, "getPaddedExitPoints"), Si(el, "getPointsFromRect"), Si(tl, "isPointInPolygon"), Si(rl, "getHull"), Si(nl, "getHullPresorted");
      var ol = zi,
        sl = Ai,
        al = Fi,
        il = Xi,
        ll = Ki,
        dl = Qi;
      const cl = (0, X.createContext)(null);

      function ul() {
        const e = (0, X.useContext)(cl);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const fl = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          isDisabled: o,
          ...s
        }) => {
          const [a = !1, i] = (0, Y.ic)({
            defaultProp: r,
            prop: !o && s.isOpen,
            onChange: n
          });
          return (0, R.jsx)(ol, {
            delayDuration: t,
            children: (0, R.jsx)(cl.Provider, {
              value: {
                isOpen: a,
                ...s
              },
              children: (0, R.jsx)(sl, {
                open: a,
                onOpenChange: i,
                children: e
              })
            })
          })
        },
        pl = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, R.jsx)(al, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        hl = (0, X.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: s = !0,
          sticky: a = "partial",
          ...i
        }, l) => {
          const {
            isOpen: d
          } = ul(), c = (0, Y.jt)(), u = fi(ll), f = Ga(d, {
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
            ref: l
          }))
        }),
        ml = (0, X.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, W.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, R.jsx)(dl, {
            ...r,
            ref: t
          })
        }),
        vl = il;

      function yl(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }(0, Object.defineProperty)(yl, "name", {
        value: "clamp",
        configurable: !0
      });
      var gl = r(90049),
        bl = r(19046),
        wl = r(7078),
        Cl = r(97620),
        _l = Object.defineProperty,
        xl = (e, t) => _l(e, "name", {
          value: t,
          configurable: !0
        }),
        jl = ["PageUp", "PageDown"],
        Pl = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Ol = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Sl = "Slider",
        [kl, Rl, Il] = (0, Cl.N)(Sl),
        [Dl, Nl] = (0, mi.A)(Sl, [Il]),
        [Tl, El] = Dl(Sl),
        zl = X.forwardRef(xl(function(e, t) {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: s = 1,
            orientation: a = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: d = [n],
            value: c,
            onValueChange: u = xl(() => {}, "onValueChange"),
            onValueCommit: f = xl(() => {}, "onValueCommit"),
            inverted: p = !1,
            form: h,
            ...m
          } = e, v = X.useRef(new Set), y = X.useRef(0), g = X.useRef(!1), b = "horizontal" === a ? Ml : Al, [w, C] = X.useState(null), _ = (0, hi.s)(t, C), [x = [], j] = (0, xi.useControllableState)({
            prop: c,
            defaultProp: d,
            onChange: xl(e => {
              const t = [...v.current];
              t[y.current]?.focus({
                preventScroll: !0,
                focusVisible: g.current
              }), g.current = !1, u(e)
            }, "onChange")
          }), P = X.useRef(x), O = X.useRef(x);

          function S(e) {
            D(e, ed(x, e))
          }

          function k(e) {
            D(e, y.current)
          }

          function I() {
            String(x) !== String(P.current) && f(x)
          }

          function D(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = sd(s),
              i = yl(ad(Math.round((e - n) / s) * s + n, a), [n, o]);
            j((e = []) => {
              const n = Ql(e, i, t);
              if (nd(n, l * s)) {
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
              const t = xl(() => j(O.current), "reset");
              return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
            }
          }, [w, h, j]), xl(S, "handleSlideStart"), xl(k, "handleSlideMove"), xl(I, "handleSlideEnd"), xl(D, "updateValues"), (0, R.jsx)(Tl, {
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
            children: (0, R.jsx)(kl.Provider, {
              scope: e.__scopeSlider,
              children: (0, R.jsx)(kl.Slot, {
                scope: e.__scopeSlider,
                children: (0, R.jsx)(b, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...m,
                  ref: _,
                  onPointerDown: (0, pi.mK)(m.onPointerDown, () => {
                    i || (P.current = x, g.current = !1)
                  }),
                  min: n,
                  max: o,
                  inverted: p,
                  onSlideStart: i ? void 0 : S,
                  onSlideMove: i ? void 0 : k,
                  onSlideEnd: i ? void 0 : I,
                  onHomeKeyDown: () => {
                    i || (g.current = !0, D(n, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (g.current = !0, D(o, x.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      g.current = !0;
                      const r = jl.includes(e.key) || e.shiftKey && Pl.includes(e.key) ? 10 : 1,
                        o = y.current;
                      D(id(x[o], {
                        min: n,
                        step: s,
                        direction: t,
                        multiplier: r
                      }), o, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }, "Slider")),
        [Ll, Vl] = Dl(Sl, {
          startEdge: "left",
          endEdge: "right",
          size: "width",
          direction: 1
        }),
        Ml = X.forwardRef(xl(function(e, t) {
          const {
            min: r,
            max: n,
            dir: o,
            inverted: s,
            onSlideStart: a,
            onSlideMove: i,
            onSlideEnd: l,
            onStepKeyDown: d,
            ...c
          } = e, [u, f] = X.useState(null), p = (0, hi.s)(t, f), h = X.useRef(void 0), m = (0, gl.jH)(o), v = "ltr" === m, y = v && !s || !v && s;

          function g(e) {
            const t = h.current || u.getBoundingClientRect(),
              o = od([0, t.width], y ? [r, n] : [n, r]);
            return h.current = t, o(e - t.left)
          }
          return xl(g, "getValueFromPointer"), (0, R.jsx)(Ll, {
            scope: e.__scopeSlider,
            startEdge: y ? "left" : "right",
            endEdge: y ? "right" : "left",
            direction: y ? 1 : -1,
            size: "width",
            children: (0, R.jsx)(ql, {
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
                h.current = void 0, l?.()
              },
              onStepKeyDown: e => {
                const t = Ol[y ? "from-left" : "from-right"].includes(e.key);
                d?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderHorizontal")),
        Al = X.forwardRef(xl(function(e, t) {
          const {
            min: r,
            max: n,
            inverted: o,
            onSlideStart: s,
            onSlideMove: a,
            onSlideEnd: i,
            onStepKeyDown: l,
            ...d
          } = e, c = X.useRef(null), u = (0, hi.s)(t, c), f = X.useRef(void 0), p = !o;

          function h(e) {
            const t = f.current || c.current.getBoundingClientRect(),
              o = od([0, t.height], p ? [n, r] : [r, n]);
            return f.current = t, o(e - t.top)
          }
          return xl(h, "getValueFromPointer"), (0, R.jsx)(Ll, {
            scope: e.__scopeSlider,
            startEdge: p ? "bottom" : "top",
            endEdge: p ? "top" : "bottom",
            size: "height",
            direction: p ? 1 : -1,
            children: (0, R.jsx)(ql, {
              "data-orientation": "vertical",
              ...d,
              ref: u,
              style: {
                ...d.style,
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
                const t = Ol[p ? "from-bottom" : "from-top"].includes(e.key);
                l?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderVertical")),
        ql = X.forwardRef(xl(function(e, t) {
          const {
            __scopeSlider: r,
            onSlideStart: n,
            onSlideMove: o,
            onSlideEnd: s,
            onHomeKeyDown: a,
            onEndKeyDown: i,
            onStepKeyDown: l,
            ...d
          } = e, c = El(Sl, r);
          return (0, R.jsx)(Ci.sG.span, {
            ...d,
            ref: t,
            onKeyDown: (0, pi.mK)(e.onKeyDown, e => {
              "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : jl.concat(Pl).includes(e.key) && (l(e), e.preventDefault())
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
        }, "SliderImpl")),
        Fl = X.forwardRef(xl(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = El("SliderTrack", r);
          return (0, R.jsx)(Ci.sG.span, {
            "data-disabled": o.disabled ? "" : void 0,
            "data-orientation": o.orientation,
            ...n,
            ref: t
          })
        }, "SliderTrack")),
        Hl = "SliderRange",
        Bl = X.forwardRef(xl(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = El(Hl, r), s = Vl(Hl, r), a = X.useRef(null), i = (0, hi.s)(t, a), l = o.values.length, d = o.values.map(e => Yl(e, o.min, o.max)), c = l > 1 ? Math.min(...d) : 0, u = 100 - Math.max(...d);
          return (0, R.jsx)(Ci.sG.span, {
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
        }, "SliderRange")),
        [Zl, Xl] = Dl("SliderThumb");

      function Gl(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, s = El("SliderThumbProvider", t), a = Rl(t), [i, l] = X.useState(null), d = X.useMemo(() => i ? a().findIndex(e => e.ref.current === i) : -1, [a, i]), c = (0, wl.X)(i), u = !i || !!s.form || !!i.closest("form"), f = s.values[d], p = r ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0), h = void 0 === f ? 0 : Yl(f, s.min, s.max);
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
          index: d,
          thumb: i,
          onThumbChange: l,
          percent: h,
          size: c
        };
        return (0, R.jsx)(Zl, {
          scope: t,
          ...m,
          children: ld(o) ? o(m) : n
        })
      }
      xl(Gl, "SliderThumbProvider");
      var Kl = "SliderThumbTrigger",
        Ul = X.forwardRef(xl(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = El(Kl, r), s = Vl(Kl, r), {
            index: a,
            value: i,
            percent: l,
            size: d,
            onThumbChange: c
          } = Xl(Kl, r), u = (0, hi.s)(t, c), f = Jl(a, o.values.length), p = d?.[s.size], h = p ? td(p, l, s.direction) : 0;
          return (0, R.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${l}% + ${h}px)`
            },
            children: (0, R.jsx)(kl.ItemSlot, {
              scope: r,
              children: (0, R.jsx)(Ci.sG.span, {
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
        }, "SliderThumbTrigger")),
        Wl = X.forwardRef(xl(function(e, t) {
          const {
            __scopeSlider: r,
            name: n,
            ...o
          } = e;
          return (0, R.jsx)(Gl, {
            __scopeSlider: r,
            name: n,
            internal_do_not_use_render: ({
              index: e,
              isFormControl: n
            }) => (0, R.jsxs)(R.Fragment, {
              children: [(0, R.jsx)(Ul, {
                ...o,
                ref: t,
                __scopeSlider: r
              }), n ? (0, R.jsx)($l, {
                __scopeSlider: r
              }, e) : null]
            })
          })
        }, "SliderThumb")),
        $l = X.forwardRef(xl(function({
          __scopeSlider: e,
          ...t
        }, r) {
          const {
            value: n,
            name: o,
            form: s
          } = Xl("SliderBubbleInput", e), a = X.useRef(null), i = (0, hi.s)(a, r), l = (0, bl.Z)(n);
          return X.useEffect(() => {
            const e = a.current;
            if (!e) return;
            const t = window.HTMLInputElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (l !== n && r) {
              const t = new Event("input", {
                bubbles: !0
              });
              r.call(e, n), e.dispatchEvent(t)
            }
          }, [l, n]), (0, R.jsx)(Ci.sG.input, {
            style: {
              display: "none"
            },
            name: o,
            form: s,
            ...t,
            ref: i,
            defaultValue: n
          })
        }, "SliderBubbleInput"));

      function Ql(e = [], t, r) {
        const n = [...e];
        return n[r] = t, n.sort((e, t) => e - t)
      }

      function Yl(e, t, r) {
        return yl(100 / (r - t) * (e - t), [0, 100])
      }

      function Jl(e, t) {
        return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
      }

      function ed(e, t) {
        if (1 === e.length) return 0;
        const r = e.map(e => Math.abs(e - t)),
          n = Math.min(...r);
        return r.indexOf(n)
      }

      function td(e, t, r) {
        const n = e / 2;
        return (n - od([0, 50], [0, n])(t) * r) * r
      }

      function rd(e) {
        return e.slice(0, -1).map((t, r) => e[r + 1] - t)
      }

      function nd(e, t) {
        if (t > 0) {
          const r = rd(e);
          return Math.min(...r) >= t
        }
        return !0
      }

      function od(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function sd(e) {
        if (!Number.isFinite(e)) return 0;
        const t = e.toString();
        if (t.includes("e")) {
          const [e, r] = t.split("e"), n = e.split(".")[1] || "", o = Number(r);
          return Math.max(0, n.length - o)
        }
        const r = t.split(".")[1];
        return r ? r.length : 0
      }

      function ad(e, t) {
        const r = Math.pow(10, t);
        return Math.round(e * r) / r
      }

      function id(e, {
        min: t,
        step: r,
        direction: n,
        multiplier: o
      }) {
        const s = sd(r),
          a = (e - t) / r,
          i = Math.round(a);
        let l;
        return l = ad(i * r + t, s) === ad(e, s) ? i + o * n : n > 0 ? Math.ceil(a) : Math.floor(a), ad(l * r + t, s)
      }

      function ld(e) {
        return "function" == typeof e
      }
      xl(Ql, "getNextSortedValues"), xl(Yl, "convertValueToPercentage"), xl(Jl, "getLabel"), xl(ed, "getClosestValueIndex"), xl(td, "getThumbInBoundsOffset"), xl(rd, "getStepsBetweenValues"), xl(nd, "hasMinStepsBetweenValues"), xl(od, "linearScale"), xl(sd, "getDecimalCount"), xl(ad, "roundValue"), xl(id, "getNextStepValue"), xl(ld, "isFunction");
      var dd = r(11706);
      const cd = (0, X.createContext)({
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
        ud = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: s = 300,
          zoomLevelStep: a = 100,
          clickAction: i = "close",
          doubleTapAction: l,
          tapAction: d,
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
            C = (0, X.useRef)(null),
            _ = (0, X.useRef)(null),
            x = (0, X.useRef)(null),
            j = (0, X.useRef)(null),
            P = (0, X.useRef)(null),
            O = (0, X.useRef)(null),
            S = (0, X.useRef)(null),
            k = (0, X.useRef)(null),
            I = (0, X.useRef)(null),
            D = (0, X.useRef)(null),
            N = (0, X.useRef)(null),
            T = (0, X.useRef)(null),
            [E = !1, z] = (0, Y.ic)({
              prop: t || n,
              onChange: r
            }),
            L = (0, X.useRef)(null);
          return L.current || (L.current = new Sn({
            zoomLevelOptions: {
              max: s,
              min: o,
              step: a
            },
            actionOptions: {
              click: i,
              tap: d || (p ? "toggle-controls" : "close"),
              doubleTap: l || (p ? "zoom" : "none")
            }
          })), (0, R.jsx)(mn, {
            messages: vn,
            locale: f,
            children: (0, R.jsx)(cd.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: m,
                thumbnailRef: v,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: C,
                imageRef: _,
                placeholderRef: x,
                captionRef: j,
                controlsRef: P,
                closeRef: O,
                zoomRef: S,
                zoomInRef: k,
                zoomSliderRef: I,
                zoomOutRef: D,
                resetRef: N,
                downloadRef: T,
                open: E,
                setOpen: z,
                altText: e,
                hideTrigger: c,
                slide: L.current
              },
              children: (0, R.jsx)(pd, {
                ...u
              })
            })
          })
        },
        fd = (0, X.createContext)({
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
        pd = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, X.useContext)(cd), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = Ct(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: s,
              triggerRef: a,
              triggerBorderRef: i,
              thumbnailRef: l,
              containerRef: d,
              zoomPanRef: c,
              placeholderRef: u,
              imageRef: f
            } = (0, X.useContext)(cd), p = (0, X.useRef)(null);
            p.current || (p.current = mt.gsap.timeline({
              defaults: dn
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
                }), l.current && i.current && (t.opening = !0, t.setup(i.current, l.current), t.zoomAndPanToInitial(), mt.gsap.set([u.current, f.current], {
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
                }), p.current.to([d.current], {
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
                }), p.current.fromTo([d.current], {
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
            zoomTo: l,
            resetZoom: d,
            toggleControls: c
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = Ct(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: s,
              containerRef: a,
              placeholderRef: i
            } = (0, X.useContext)(cd), l = t(async e => {
              r.zoomTo(e), mt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...cn
              })
            }), d = t(async () => {
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
              zoomIn: d,
              zoomOut: c,
              zoomTo: l,
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
          return (0, R.jsx)(fd.Provider, {
            value: {
              update: s,
              openAnim: n,
              close: o,
              zoomIn: a,
              zoomOut: i,
              zoomTo: l,
              resetZoom: d,
              toggleControls: c,
              onOpenChange: r
            },
            children: (0, R.jsx)(dd.Root, {
              ...u
            })
          })
        },
        hd = (0, X.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, hn.A)(),
            {
              triggerRef: s,
              triggerBorderRef: a,
              altText: i
            } = (0, X.useContext)(cd),
            l = (0, Y.UP)(s, n),
            d = (0, W.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Rn.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, R.jsx)(dd.Trigger, {
            ref: l,
            ...d,
            children: (0, R.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: a,
              children: (0, R.jsx)(J.xV, {
                children: t
              })
            })
          })
        }),
        md = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, X.useContext)(cd), s = (0, Y.UP)(o, n), a = (0, W.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? J.DX : "img";
          return (0, R.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        vd = (0, X.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, X.useContext)(cd), o = (0, Y.UP)(n, r), s = (0, W.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), a = e ? J.DX : ue.Maximize2;
          return (0, R.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        yd = ({
          ...e
        }) => (0, R.jsx)(dd.Portal, {
          ...e
        }),
        gd = (0, X.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, X.useContext)(cd), o = (0, Y.UP)(n, r), s = (0, W.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, R.jsx)(dd.Overlay, {
            ref: o,
            ...s
          })
        }),
        bd = (0, X.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, X.useContext)(fd), {
            contentRef: s,
            altText: a,
            triggerRef: i
          } = (0, X.useContext)(cd), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, X.useContext)(cd), [t, r] = (0, X.useState)(e.getCursor()), n = (0, X.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, X.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), d = (0, kn.m)("dark"), c = (0, Y.UP)(s, n), u = (0, W.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, ce.clsx)("foundry_1a74xwb9", d),
            style: {
              cursor: l
            }
          });
          return (0, R.jsxs)(dd.Content, {
            ref: c,
            ...u,
            children: [(0, R.jsx)(J.s6, {
              children: (0, R.jsx)(dd.Title, {
                children: a
              })
            }), t]
          })
        }),
        wd = (0, X.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, X.useContext)(cd);
          (() => {
            const {
              contextSafe: e
            } = Ct(), {
              toggleControls: t
            } = (0, X.useContext)(fd), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: s,
              slide: a
            } = (0, X.useContext)(cd), i = e(e => {
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
            }), l = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.scrollWheel.handleWheel(e), a.closing || mt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...cn
              }))
            }), d = e(e => {
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
          const s = (0, Y.UP)(o, n),
            a = (0, W.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, R.jsx)("div", {
            ref: s,
            ...a,
            children: (0, R.jsxs)(Cd, {
              children: [(0, R.jsx)(_d, {}), t]
            })
          })
        }),
        Cd = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, X.useContext)(cd), s = (0, Y.UP)(o, n), a = (0, W.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? J.DX : "div";
          return (0, R.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        _d = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, X.useContext)(cd), s = (0, Y.UP)(o, n), a = (0, W.mergeProps)(r, {
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
        xd = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, X.useContext)(cd), s = (0, Y.UP)(o, n), a = (0, W.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? J.DX : "img";
          return (0, R.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        jd = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, X.useContext)(cd), s = (0, Y.UP)(o, n), a = (0, W.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? J.DX : "p";
          return (0, R.jsx)(dd.Description, {
            asChild: !0,
            children: (0, R.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        Pd = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, X.useContext)(cd);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, X.useContext)(fd);
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
        Od = ({
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
          return (0, R.jsxs)(fl, {
            delayDuration: 0,
            children: [(0, R.jsx)(pl, {
              children: n
            }), (0, R.jsxs)(hl, {
              ...s,
              children: [(0, R.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, R.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, R.jsx)(ml, {})]
            })]
          })
        },
        Sd = (0, X.forwardRef)(function({
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
        kd = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, s) {
          const a = (0, hn.A)(),
            {
              zoomRef: i
            } = (0, X.useContext)(cd),
            {
              canZoomIn: l,
              zoomIn: d,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: h,
              zoomTo: m
            } = (() => {
              const {
                slide: e
              } = (0, X.useContext)(cd), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, X.useContext)(fd), [o, s] = (0, X.useState)(!1), [a, i] = (0, X.useState)(!1), [l, d] = (0, X.useState)(0), [c, u] = (0, X.useState)(0), [f, p] = (0, X.useState)(0), h = (0, X.useCallback)(() => {
                s(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), d(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
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
                zoomProgress: l,
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
            children: [(0, R.jsx)(Od, {
              side: "left",
              enabled: r,
              content: a.formatMessage(Rn.ZoomInButtonLabel),
              metadata: a.formatMessage(Rn.ZoomInButtonTooltip, {
                shortcut: (0, R.jsx)(Sd, {
                  shortcut: "+"
                })
              }),
              children: (0, R.jsx)(Ne, {
                label: a.formatMessage(Rn.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: ln({
                  position: "top"
                }),
                onPress: d,
                isDisabled: !l
              })
            }), (0, R.jsxs)(zl, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, R.jsx)(Fl, {
                className: "foundry_1a74xwbu",
                children: (0, R.jsx)(Bl, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, R.jsx)(Od, {
                side: "left",
                enabled: r,
                content: a.formatMessage(Rn.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, R.jsx)(Wl, {
                  className: "foundry_1a74xwbw",
                  children: (0, R.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, R.jsx)(Od, {
              side: "left",
              enabled: r,
              content: a.formatMessage(Rn.ZoomOutButtonLabel),
              metadata: a.formatMessage(Rn.ZoomOutButtonTooltip, {
                shortcut: (0, R.jsx)(Sd, {
                  shortcut: "-"
                })
              }),
              children: (0, R.jsx)(Ne, {
                label: a.formatMessage(Rn.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: ln({
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
        Rd = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const s = (0, hn.A)(),
            {
              closeRef: a
            } = (0, X.useContext)(cd),
            i = (0, Y.UP)(a, o),
            l = (0, W.mergeProps)(n, {
              "data-testid": e,
              className: an({
                styled: !t
              })
            }),
            d = t ? (0, R.jsx)(J.DX, {
              ref: i,
              ...l
            }) : (0, R.jsx)(Ne, {
              ref: i,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: s.formatMessage(Rn.CloseButtonLabel)
            });
          return (0, R.jsx)(Od, {
            side: "right",
            enabled: r,
            content: s.formatMessage(Rn.CloseButtonLabel),
            metadata: s.formatMessage(Rn.CloseButtonTooltip, {
              shortcut: (0, R.jsx)(Sd, {
                shortcut: "Esc"
              })
            }),
            children: (0, R.jsx)(dd.Close, {
              asChild: !0,
              children: d
            })
          })
        }),
        Id = (0, X.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, hn.A)(),
            s = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, X.useContext)(cd), {
                contextSafe: r
              } = Ct(), {
                resetZoom: n
              } = (0, X.useContext)(fd), [o, s] = (0, X.useState)(e.currZoomLevel !== e.zoomLevels.initial), a = r(e => {
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
            } = (0, X.useContext)(cd),
            i = (0, Y.UP)(a, n),
            l = (0, W.mergeProps)(r, s, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, R.jsx)(Od, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Rn.ResetZoomButtonLabel),
            metadata: o.formatMessage(Rn.ResetZoomButtonTooltip, {
              shortcut: (0, R.jsx)(Sd, {
                shortcut: "R"
              })
            }),
            children: (0, R.jsx)(Ne, {
              ref: i,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Rn.ResetZoomButtonLabel)
            })
          })
        }),
        Dd = (0, X.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, hn.A)(),
            {
              downloadRef: s,
              imageRef: a
            } = (0, X.useContext)(cd),
            i = (0, Y.UP)(s, n),
            l = (0, W.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, R.jsx)(Od, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Rn.DownloadButtonTooltip),
            children: (0, R.jsx)(Ne, {
              ref: i,
              ...l,
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
        Nd = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Td = r(63368);

      function Ed(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function zd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ld(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zd(Object(r), !0).forEach(function(t) {
            Ed(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Md = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ad = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ld(Ld({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Md(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vd(e.variantClassNames, e => Vd(e, e => e.split(" ")[0]))
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
      const qd = (0, X.createContext)(null);

      function Fd() {
        const e = (0, X.useContext)(qd);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Hd = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: s = "neutral",
          ...a
        }, i) => {
          const l = (0, W.mergeProps)({
              className: Ad({
                status: s
              }),
              "data-testid": t
            }, a),
            d = r ? J.DX : "div";
          return (0, R.jsx)(qd.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: s,
              ...a
            },
            children: (0, R.jsx)(d, {
              ...l,
              ref: i,
              children: e
            })
          })
        }),
        Bd = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Fd(), s = (0, W.mergeProps)({
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
        Zd = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            errorId: a
          } = Fd(), i = (0, W.mergeProps)({
            "data-testid": t,
            id: a || s
          }, n), l = r ? J.DX : "div";
          return (0, R.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        });
      var Xd = r(7198),
        Gd = Object.defineProperty,
        Kd = (e, t) => Gd(e, "name", {
          value: t,
          configurable: !0
        });

      function Ud(e, t) {
        return X.useReducer((e, r) => t[e][r] ?? e, e)
      }
      Kd(Ud, "useStateMachine");
      var Wd = "ScrollArea",
        [$d, Qd] = (0, mi.A)(Wd),
        [Yd, Jd] = $d(Wd),
        ec = X.forwardRef(Kd(function(e, t) {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...a
          } = e, [i, l] = X.useState(null), [d, c] = X.useState(null), [u, f] = X.useState(null), [p, h] = X.useState(null), [m, v] = X.useState(null), [y, g] = X.useState(0), [b, w] = X.useState(0), [C, _] = X.useState(!1), [x, j] = X.useState(!1), P = (0, hi.s)(t, l), O = (0, gl.jH)(o);
          return (0, R.jsx)(Yd, {
            scope: r,
            type: n,
            dir: O,
            scrollHideDelay: s,
            scrollArea: i,
            viewport: d,
            onViewportChange: c,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: h,
            scrollbarXEnabled: C,
            onScrollbarXEnabledChange: _,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: x,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, R.jsx)(Ci.sG.div, {
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
        }, "ScrollArea")),
        tc = X.forwardRef(Kd(function(e, t) {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...s
          } = e, a = Jd("ScrollAreaViewport", r), i = X.useRef(null), l = (0, hi.s)(t, i, a.onViewportChange);
          return (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(rc, {
              nonce: o
            }), (0, R.jsx)(Ci.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: l,
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
        }, "ScrollAreaViewport")),
        rc = X.memo(Kd(function({
          nonce: e
        }) {
          return (0, R.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: e
          })
        }, "ScrollAreaViewportStyle"), (e, t) => e.nonce === t.nonce),
        nc = "ScrollAreaScrollbar",
        oc = X.forwardRef(Kd(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = Jd(nc, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: a
          } = o, i = "horizontal" === e.orientation;
          return X.useEffect(() => (i ? s(!0) : a(!0), () => {
            i ? s(!1) : a(!1)
          }), [i, s, a]), "hover" === o.type ? (0, R.jsx)(sc, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, R.jsx)(ac, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, R.jsx)(ic, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, R.jsx)(lc, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        }, "ScrollAreaScrollbar")),
        sc = X.forwardRef(Kd(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = Jd(nc, e.__scopeScrollArea), [s, a] = X.useState(!1);
          return X.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = Kd(() => {
                  window.clearTimeout(t), a(!0)
                }, "handlePointerEnter"),
                n = Kd(() => {
                  t = window.setTimeout(() => a(!1), o.scrollHideDelay)
                }, "handlePointerLeave");
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, R.jsx)(wi.C, {
            present: r || s,
            children: (0, R.jsx)(ic, {
              "data-state": s ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarHover")),
        ac = X.forwardRef(Kd(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = Jd(nc, e.__scopeScrollArea), s = "horizontal" === e.orientation, a = kc(() => l("SCROLL_END"), 100), [i, l] = Ud("hidden", {
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
          });
          return X.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, l]), X.useEffect(() => {
            const e = o.viewport,
              t = s ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = Kd(() => {
                const n = e[t];
                r !== n && (l("SCROLL"), a()), r = n
              }, "handleScroll");
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, s, l, a]), (0, R.jsx)(wi.C, {
            present: r || "hidden" !== i,
            children: (0, R.jsx)(lc, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, pi.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, pi.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }, "ScrollAreaScrollbarScroll")),
        ic = X.forwardRef(Kd(function(e, t) {
          const r = Jd(nc, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [s, a] = X.useState(!1),
            i = "horizontal" === e.orientation,
            l = kc(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(i ? e : t)
              }
            }, 10);
          return Rc(r.viewport, l), Rc(r.content, l), (0, R.jsx)(wi.C, {
            present: n || s,
            children: (0, R.jsx)(lc, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarAuto")),
        lc = X.forwardRef(Kd(function(e, t) {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Jd(nc, e.__scopeScrollArea), s = X.useRef(null), a = X.useRef(0), [i, l] = X.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = Cc(i.viewport, i.content), c = {
            ...n,
            sizes: i,
            onSizesChange: l,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: Kd(e => s.current = e, "onThumbChange"),
            onThumbPointerUp: Kd(() => a.current = 0, "onThumbPointerUp"),
            onThumbPointerDown: Kd(e => a.current = e, "onThumbPointerDown")
          };

          function u(e, t) {
            return xc(e, a.current, i, t)
          }
          return Kd(u, "getScrollPosition"), "horizontal" === r ? (0, R.jsx)(dc, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = jc(o.viewport.scrollLeft, i, o.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, R.jsx)(cc, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = jc(o.viewport.scrollTop, i);
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
        }, "ScrollAreaScrollbarVisible")),
        dc = X.forwardRef(Kd(function(e, t) {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = Jd(nc, e.__scopeScrollArea), [a, i] = X.useState(), l = X.useRef(null), d = (0, hi.s)(t, l, s.onScrollbarXChange);
          return X.useEffect(() => {
            l.current && i(getComputedStyle(l.current))
          }, [l]), (0, R.jsx)(pc, {
            "data-orientation": "horizontal",
            ...o,
            ref: d,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": _c(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Oc(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && s.viewport && a && n({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: wc(a.paddingLeft),
                  paddingEnd: wc(a.paddingRight)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarX")),
        cc = X.forwardRef(Kd(function(e, t) {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = Jd(nc, e.__scopeScrollArea), [a, i] = X.useState(), l = X.useRef(null), d = (0, hi.s)(t, l, s.onScrollbarYChange);
          return X.useEffect(() => {
            l.current && i(getComputedStyle(l.current))
          }, [l]), (0, R.jsx)(pc, {
            "data-orientation": "vertical",
            ...o,
            ref: d,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": _c(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Oc(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && s.viewport && a && n({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: wc(a.paddingTop),
                  paddingEnd: wc(a.paddingBottom)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarY")),
        [uc, fc] = $d(nc),
        pc = X.forwardRef(Kd(function(e, t) {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: s,
            onThumbPointerUp: a,
            onThumbPointerDown: i,
            onThumbPositionChange: l,
            onDragScroll: d,
            onWheelScroll: c,
            onResize: u,
            ...f
          } = e, p = Jd(nc, r), [h, m] = X.useState(null), v = (0, hi.s)(t, m), y = X.useRef(null), g = X.useRef(""), b = p.viewport, w = n.content - n.viewport, C = (0, Xd.c)(c), _ = (0, Xd.c)(l), x = kc(u, 10);

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
          return Kd(j, "handleDragScroll"), X.useEffect(() => {
            const e = Kd(e => {
              const t = e.target,
                r = h?.contains(t);
              r && C(e, w)
            }, "handleWheel");
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, h, w, C]), X.useEffect(_, [n, _]), Rc(h, x), Rc(p.content, x), (0, R.jsx)(uc, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, Xd.c)(s),
            onThumbPointerUp: (0, Xd.c)(a),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, Xd.c)(i),
            children: (0, R.jsx)(Ci.sG.div, {
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
        }, "ScrollAreaScrollbarImpl")),
        hc = "ScrollAreaThumb",
        mc = X.forwardRef(Kd(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = fc(hc, e.__scopeScrollArea);
          return (0, R.jsx)(wi.C, {
            present: r || o.hasThumb,
            children: (0, R.jsx)(vc, {
              ref: t,
              ...n
            })
          })
        }, "ScrollAreaThumb")),
        vc = X.forwardRef(Kd(function(e, t) {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, s = Jd(hc, r), a = fc(hc, r), {
            onThumbPositionChange: i
          } = a, l = (0, hi.s)(t, a.onThumbChange), d = X.useRef(void 0), c = kc(() => {
            d.current && (d.current(), d.current = void 0)
          }, 100);
          return X.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const t = Kd(() => {
                if (c(), !d.current) {
                  const t = Sc(e, i);
                  d.current = t, i()
                }
              }, "handleScroll");
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [s.viewport, c, i]), (0, R.jsx)(Ci.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
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
        }, "ScrollAreaThumbImpl")),
        yc = "ScrollAreaCorner",
        gc = X.forwardRef(Kd(function(e, t) {
          const r = Jd(yc, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, R.jsx)(bc, {
            ...e,
            ref: t
          }) : null
        }, "ScrollAreaCorner")),
        bc = X.forwardRef(Kd(function(e, t) {
          const {
            __scopeScrollArea: r,
            ...n
          } = e, o = Jd(yc, r), [s, a] = X.useState(0), [i, l] = X.useState(0), d = Boolean(s && i), {
            onCornerWidthChange: c,
            onCornerHeightChange: u
          } = o;
          return Rc(o.scrollbarX, () => {
            const e = o.scrollbarX?.offsetHeight || 0;
            o.onCornerHeightChange(e), l(e)
          }), Rc(o.scrollbarY, () => {
            const e = o.scrollbarY?.offsetWidth || 0;
            o.onCornerWidthChange(e), a(e)
          }), X.useEffect(() => () => {
            c(0), u(0)
          }, [c, u]), d ? (0, R.jsx)(Ci.sG.div, {
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
        }, "ScrollAreaCornerImpl"));

      function wc(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Cc(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function _c(e) {
        const t = Cc(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function xc(e, t, r, n = "ltr") {
        const o = _c(r),
          s = t || o / 2,
          a = o - s,
          i = r.scrollbar.paddingStart + s,
          l = r.scrollbar.size - r.scrollbar.paddingEnd - a,
          d = r.content - r.viewport;
        return Pc([i, l], "ltr" === n ? [0, d] : [-1 * d, 0])(e)
      }

      function jc(e, t, r = "ltr") {
        const n = _c(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          s = t.scrollbar.size - o,
          a = t.content - t.viewport,
          i = s - n,
          l = yl(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return Pc([0, a], [0, i])(l)
      }

      function Pc(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Oc(e, t) {
        return e > 0 && e < t
      }
      Kd(wc, "toInt"), Kd(Cc, "getThumbRatio"), Kd(_c, "getThumbSize"), Kd(xc, "getScrollPositionFromPointer"), Kd(jc, "getThumbOffsetFromScroll"), Kd(Pc, "linearScale"), Kd(Oc, "isScrollingWithinScrollbarBounds");
      var Sc = Kd((e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return Kd(function o() {
          const s = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = r.left !== s.left,
            i = r.top !== s.top;
          (a || i) && t(), r = s, n = window.requestAnimationFrame(o)
        }, "loop")(), () => window.cancelAnimationFrame(n)
      }, "addUnlinkedScrollListener");

      function kc(e, t) {
        const r = (0, Xd.c)(e),
          n = X.useRef(0);
        return X.useEffect(() => () => window.clearTimeout(n.current), []), X.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Rc(e, t) {
        const r = (0, Xd.c)(t);
        (0, ji.N)(() => {
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
      Kd(kc, "useDebounceCallback"), Kd(Rc, "useResizeObserver");
      var Ic = ec,
        Dc = tc,
        Nc = oc,
        Tc = mc,
        Ec = gc,
        zc = r(86187),
        Lc = r(93778),
        Vc = r(45787),
        Mc = r(59113),
        Ac = Object.defineProperty,
        qc = (e, t) => Ac(e, "name", {
          value: t,
          configurable: !0
        }),
        Fc = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Hc = [" ", "Enter"],
        Bc = "Select",
        [Zc, Xc, Gc] = (0, Cl.N)(Bc),
        [Kc, Uc] = (0, mi.A)(Bc, [Gc, gi.Bk]),
        Wc = (0, gi.Bk)(),
        [$c, Qc] = Kc(Bc),
        [Yc, Jc] = Kc(Bc);

      function eu(e) {
        const {
          __scopeSelect: t,
          children: r,
          open: n,
          defaultOpen: o,
          onOpenChange: s,
          value: a,
          defaultValue: i,
          onValueChange: l,
          dir: d,
          name: c,
          autoComplete: u,
          disabled: f,
          required: p,
          form: h,
          internal_do_not_use_render: m
        } = e, v = Wc(t), [y, g] = X.useState(null), [b, w] = X.useState(null), [C, _] = X.useState(!1), x = (0, gl.jH)(d), [j, P] = (0, xi.useControllableState)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: s,
          caller: Bc
        }), [O, S] = (0, xi.useControllableState)({
          prop: a,
          defaultProp: i,
          onChange: l,
          caller: Bc
        }), k = X.useRef(null), I = X.useRef(O);
        X.useEffect(() => {
          const e = h ? y?.ownerDocument.getElementById(h) : y?.form;
          if (e instanceof HTMLFormElement) {
            const t = qc(() => S(I.current), "reset");
            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
          }
        }, [h, y, S]);
        const D = !y || !!h || !!y.closest("form"),
          [N, T] = X.useState(new Set),
          E = (0, yi.useId)(),
          z = Array.from(N).map(e => e.props.value).join(";"),
          L = X.useCallback(e => {
            T(t => new Set(t).add(e))
          }, []),
          V = X.useCallback(e => {
            T(t => {
              const r = new Set(t);
              return r.delete(e), r
            })
          }, []),
          M = {
            required: p,
            trigger: y,
            onTriggerChange: g,
            valueNode: b,
            onValueNodeChange: w,
            valueNodeHasChildren: C,
            onValueNodeHasChildrenChange: _,
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
            nativeOptions: N,
            nativeSelectKey: z,
            isFormControl: D
          };
        return (0, R.jsx)(gi.bL, {
          ...v,
          children: (0, R.jsx)($c, {
            scope: t,
            ...M,
            children: (0, R.jsx)(Zc.Provider, {
              scope: t,
              children: (0, R.jsx)(Yc, {
                scope: t,
                onNativeOptionAdd: L,
                onNativeOptionRemove: V,
                children: Du(m) ? m(M) : r
              })
            })
          })
        })
      }
      qc(eu, "SelectProvider");
      var tu = qc(e => {
          const {
            __scopeSelect: t,
            children: r,
            ...n
          } = e;
          return (0, R.jsx)(eu, {
            __scopeSelect: t,
            ...n,
            internal_do_not_use_render: ({
              isFormControl: e
            }) => (0, R.jsxs)(R.Fragment, {
              children: [r, e ? (0, R.jsx)(Iu, {
                __scopeSelect: t
              }) : null]
            })
          })
        }, "Select"),
        ru = X.forwardRef(qc(function(e, t) {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, s = Wc(r), a = Qc("SelectTrigger", r), i = a.disabled || n, l = (0, hi.s)(t, a.onTriggerChange), d = Xc(r), c = X.useRef("touch"), [u, f, p] = Tu(e => {
            const t = d().filter(e => !e.disabled),
              r = t.find(e => e.value === a.value),
              n = Eu(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          }), h = qc(e => {
            i || (a.onOpenChange(!0), p()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          }, "handleOpen");
          return (0, R.jsx)(gi.Mz, {
            asChild: !0,
            ...s,
            children: (0, R.jsx)(Ci.sG.button, {
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
              "data-placeholder": Nu(a.value) ? "" : void 0,
              ...o,
              ref: l,
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
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Fc.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        }, "SelectTrigger")),
        nu = X.forwardRef(qc(function(e, t) {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: s,
            placeholder: a = "",
            ...i
          } = e, l = Qc("SelectValue", r), {
            onValueNodeHasChildrenChange: d
          } = l, c = void 0 !== s, u = (0, hi.s)(t, l.onValueNodeChange);
          (0, ji.N)(() => {
            d(c)
          }, [d, c]);
          const f = Nu(l.value);
          return (0, R.jsx)(Ci.sG.span, {
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
        }, "SelectValue")),
        ou = X.forwardRef(qc(function(e, t) {
          const {
            __scopeSelect: r,
            children: n,
            ...o
          } = e;
          return (0, R.jsx)(Ci.sG.span, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            children: n || "▼"
          })
        }, "SelectIcon")),
        [su, au] = Kc("SelectPortal", {
          forceMount: void 0
        }),
        iu = qc(e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, R.jsx)(su, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, R.jsx)(bi.Portal, {
              asChild: !0,
              ...n
            })
          })
        }, "SelectPortal"),
        lu = "SelectContent",
        du = X.forwardRef(qc(function(e, t) {
          const r = au(lu, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Qc(lu, e.__scopeSelect),
            [a, i] = X.useState();
          return (0, ji.N)(() => {
            i(new DocumentFragment)
          }, []), (0, R.jsx)(wi.C, {
            present: n || s.open,
            children: ({
              present: e
            }) => e ? (0, R.jsx)(mu, {
              ...o,
              ref: t
            }) : (0, R.jsx)(cu, {
              ...o,
              fragment: a
            })
          })
        }, "SelectContent")),
        cu = X.forwardRef(qc(function(e, t) {
          const {
            __scopeSelect: r,
            children: n,
            fragment: o
          } = e;
          return o ? Ya.createPortal((0, R.jsx)(fu, {
            scope: r,
            children: (0, R.jsx)(Zc.Slot, {
              scope: r,
              children: (0, R.jsx)("div", {
                ref: t,
                children: n
              })
            })
          }), o) : null
        }, "SelectContentFragment")),
        uu = 10,
        [fu, pu] = Kc(lu),
        hu = (0, _i.createSlot)("SelectContent.RemoveScroll"),
        mu = X.forwardRef(qc(function(e, t) {
          const {
            __scopeSelect: r
          } = e, {
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            side: i,
            sideOffset: l,
            align: d,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
          } = e, g = Qc(lu, r), [b, w] = X.useState(null), [C, _] = X.useState(null), x = (0, hi.s)(t, w), [j, P] = X.useState(null), [O, S] = X.useState(null), k = Xc(r), [I, D] = X.useState(!1), N = X.useRef(!1);
          X.useEffect(() => {
            if (b) return (0, Vc.Eq)(b)
          }, [b]), (0, zc.Oh)();
          const T = X.useCallback(e => {
              const [t, ...r] = k().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && C && (C.scrollTop = 0), r === n && C && (C.scrollTop = C.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [k, C]),
            E = X.useCallback(() => T([j, b]), [T, j, b]);
          X.useEffect(() => {
            I && E()
          }, [I, E]);
          const {
            onOpenChange: z,
            triggerPointerDownPosRef: L
          } = g;
          X.useEffect(() => {
            if (b) {
              let e = {
                x: 0,
                y: 0
              };
              const t = qc(t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (L.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (L.current?.y ?? 0))
                  }
                }, "handlePointerMove"),
                r = qc(r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : r.composedPath().includes(b) || z(!1), document.removeEventListener("pointermove", t), L.current = null
                }, "handlePointerUp");
              return null !== L.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [b, z, L]), X.useEffect(() => {
            const e = qc(() => z(!1), "close");
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [z]);
          const [V, M] = Tu(e => {
            const t = k().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Eu(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), A = X.useCallback((e, t, r) => {
            const n = !N.current && !r;
            (void 0 !== g.value && g.value === t || n) && (P(e), n && (N.current = !0))
          }, [g.value]), q = X.useCallback(() => b?.focus(), [b]), F = X.useCallback((e, t, r) => {
            const n = !N.current && !r;
            (void 0 !== g.value && g.value === t || n) && S(e)
          }, [g.value]), H = "popper" === n ? yu : vu, B = H === yu ? {
            side: i,
            sideOffset: l,
            align: d,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: m,
            avoidCollisions: v
          } : {};
          return (0, R.jsx)(fu, {
            scope: r,
            content: b,
            viewport: C,
            onViewportChange: _,
            itemRefCallback: A,
            selectedItem: j,
            onItemLeave: q,
            itemTextRefCallback: F,
            focusSelectedItem: E,
            selectedItemText: O,
            position: n,
            isPositioned: I,
            searchRef: V,
            children: (0, R.jsx)(Mc.RemoveScroll, {
              as: hu,
              allowPinchZoom: !0,
              children: (0, R.jsx)(Lc.FocusScope, {
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
                  children: (0, R.jsx)(H, {
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
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
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
        }, "SelectContentImpl")),
        vu = X.forwardRef(qc(function(e, t) {
          const {
            __scopeSelect: r,
            onPlaced: n,
            ...o
          } = e, s = Qc(lu, r), a = pu(lu, r), [i, l] = X.useState(null), [d, c] = X.useState(null), u = (0, hi.s)(t, c), f = Xc(r), p = X.useRef(!1), h = X.useRef(!0), {
            viewport: m,
            selectedItem: v,
            selectedItemText: y,
            focusSelectedItem: g
          } = a, b = X.useCallback(() => {
            if (s.trigger && s.valueNode && i && d && m && v && y) {
              const e = s.trigger.getBoundingClientRect(),
                t = d.getBoundingClientRect(),
                r = s.valueNode.getBoundingClientRect(),
                o = y.getBoundingClientRect();
              if ("rtl" !== s.dir) {
                const n = o.left - t.left,
                  s = r.left - n,
                  a = e.left - s,
                  l = e.width + a,
                  d = Math.max(l, t.width),
                  c = window.innerWidth - uu,
                  u = yl(s, [uu, Math.max(uu, c - d)]);
                i.style.minWidth = l + "px", i.style.left = u + "px"
              } else {
                const n = t.right - o.right,
                  s = window.innerWidth - r.right - n,
                  a = window.innerWidth - e.right - s,
                  l = e.width + a,
                  d = Math.max(l, t.width),
                  c = window.innerWidth - uu,
                  u = yl(s, [uu, Math.max(uu, c - d)]);
                i.style.minWidth = l + "px", i.style.right = u + "px"
              }
              const a = f(),
                l = window.innerHeight - 2 * uu,
                c = m.scrollHeight,
                u = window.getComputedStyle(d),
                h = parseInt(u.borderTopWidth, 10),
                g = parseInt(u.paddingTop, 10),
                b = parseInt(u.borderBottomWidth, 10),
                w = h + g + c + parseInt(u.paddingBottom, 10) + b,
                C = Math.min(5 * v.offsetHeight, w),
                _ = window.getComputedStyle(m),
                x = parseInt(_.paddingTop, 10),
                j = parseInt(_.paddingBottom, 10),
                P = e.top + e.height / 2 - uu,
                O = l - P,
                S = v.offsetHeight / 2,
                k = h + g + (v.offsetTop + S),
                R = w - k;
              if (k <= P) {
                const e = a.length > 0 && v === a[a.length - 1].ref.current;
                i.style.bottom = "0px";
                const t = d.clientHeight - m.offsetTop - m.offsetHeight,
                  r = k + Math.max(O, S + (e ? j : 0) + t + b);
                i.style.height = r + "px"
              } else {
                const e = a.length > 0 && v === a[0].ref.current;
                i.style.top = "0px";
                const t = Math.max(P, h + m.offsetTop + (e ? x : 0) + S) + R;
                i.style.height = t + "px", m.scrollTop = k - P + m.offsetTop
              }
              i.style.margin = `${uu}px 0`, i.style.minHeight = C + "px", i.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => p.current = !0)
            }
          }, [f, s.trigger, s.valueNode, i, d, m, v, y, s.dir, n]);
          (0, ji.N)(() => b(), [b]);
          const [w, C] = X.useState();
          (0, ji.N)(() => {
            d && C(window.getComputedStyle(d).zIndex)
          }, [d]);
          const _ = X.useCallback(e => {
            e && !0 === h.current && (b(), g?.(), h.current = !1)
          }, [b, g]);
          return (0, R.jsx)(gu, {
            scope: r,
            contentWrapper: i,
            shouldExpandOnScrollRef: p,
            onScrollButtonChange: _,
            children: (0, R.jsx)("div", {
              ref: l,
              style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: w
              },
              children: (0, R.jsx)(Ci.sG.div, {
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
        }, "SelectItemAlignedPosition")),
        yu = X.forwardRef(qc(function(e, t) {
          const {
            __scopeSelect: r,
            align: n = "start",
            collisionPadding: o = uu,
            ...s
          } = e, a = Wc(r);
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
        }, "SelectPopperPosition")),
        [gu, bu] = Kc(lu, {}),
        wu = "SelectViewport",
        Cu = X.forwardRef(qc(function(e, t) {
          const {
            __scopeSelect: r,
            nonce: n,
            ...o
          } = e, s = pu(wu, r), a = bu(wu, r), i = (0, hi.s)(t, s.onViewportChange), l = X.useRef(0);
          return (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: n
            }), (0, R.jsx)(Zc.Slot, {
              scope: r,
              children: (0, R.jsx)(Ci.sG.div, {
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
                    const e = Math.abs(l.current - t.scrollTop);
                    if (e > 0) {
                      const n = window.innerHeight - 2 * uu,
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
                  l.current = t.scrollTop
                })
              })
            })]
          })
        }, "SelectViewport")),
        [_u, xu] = Kc("SelectGroup"),
        ju = "SelectItem",
        [Pu, Ou] = Kc(ju),
        Su = X.forwardRef(qc(function(e, t) {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: s,
            ...a
          } = e, i = Qc(ju, r), l = pu(ju, r), d = i.value === n, [c, u] = X.useState(s ?? ""), [f, p] = X.useState(!1), h = (0, Xd.c)(e => l.itemRefCallback?.(e, n, o)), m = (0, hi.s)(t, h), v = (0, yi.useId)(), y = X.useRef("touch"), g = qc(() => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          }, "handleSelect");
          return (0, R.jsx)(Pu, {
            scope: r,
            value: n,
            disabled: o,
            textId: v,
            isSelected: d,
            onItemTextChange: X.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, R.jsx)(Zc.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, R.jsx)(Ci.sG.div, {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": d && f,
                "data-state": d ? "checked" : "unchecked",
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
                  y.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, pi.mK)(a.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, pi.mK)(a.onKeyDown, e => {
                  o || e.target !== e.currentTarget || "" !== l.searchRef?.current && " " === e.key || (Hc.includes(e.key) && g(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        }, "SelectItem")),
        ku = "SelectItemText",
        Ru = X.forwardRef(qc(function(e, t) {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...s
          } = e, a = Qc(ku, r), i = pu(ku, r), l = Ou(ku, r), d = Jc(ku, r), [c, u] = X.useState(null), f = (0, Xd.c)(e => i.itemTextRefCallback?.(e, l.value, l.disabled)), p = (0, hi.s)(t, u, l.onItemTextChange, f), h = c?.textContent, m = X.useMemo(() => (0, R.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value), [l.disabled, l.value, h]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: y
          } = d;
          return (0, ji.N)(() => (v(m), () => y(m)), [v, y, m]), (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(Ci.sG.span, {
              id: l.textId,
              ...s,
              ref: p
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren && !Nu(a.value) ? Ya.createPortal(s.children, a.valueNode) : null]
          })
        }, "SelectItemText")),
        Iu = X.forwardRef(qc(function({
          __scopeSelect: e,
          ...t
        }, r) {
          const n = Qc("SelectBubbleInput", e),
            {
              value: o,
              onValueChange: s,
              required: a,
              disabled: i,
              name: l,
              autoComplete: d,
              form: c
            } = n,
            {
              nativeOptions: u,
              nativeSelectKey: f
            } = n,
            p = X.useRef(null),
            h = (0, hi.s)(r, p),
            m = o ?? "",
            v = (0, bl.Z)(m),
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
          }, [v, m]), (0, R.jsxs)(Ci.sG.select, {
            "aria-hidden": !0,
            required: a,
            tabIndex: -1,
            name: l,
            autoComplete: d,
            disabled: i,
            form: c,
            onChange: e => s(e.target.value),
            ...t,
            style: {
              ...Pi.VISUALLY_HIDDEN_STYLES,
              ...t.style
            },
            ref: h,
            defaultValue: m,
            children: [Nu(o) && !y ? (0, R.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        }, "SelectBubbleInput"));

      function Du(e) {
        return "function" == typeof e
      }

      function Nu(e) {
        return "" === e || void 0 === e
      }

      function Tu(e) {
        const t = (0, Xd.c)(e),
          r = X.useRef(""),
          n = X.useRef(0),
          o = X.useCallback(e => {
            const o = r.current + e;
            t(o), qc(function e(t) {
              r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
            }, "updateSearch")(o)
          }, [t]),
          s = X.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return X.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s]
      }

      function Eu(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let s = zu(e, Math.max(o, 0));
        1 === n.length && (s = s.filter(e => e !== r));
        const a = s.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return a !== r ? a : void 0
      }

      function zu(e, t) {
        return e.map((r, n) => e[(t + n) % e.length])
      }

      function Lu(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Vu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vu(Object(r), !0).forEach(function(t) {
            Lu(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Au(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      qc(Du, "isFunction"), qc(Nu, "shouldShowPlaceholder"), qc(Tu, "useTypeaheadSearch"), qc(Eu, "findNextItem"), qc(zu, "wrapArray");
      var qu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mu(Mu({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) qu(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Au(e.variantClassNames, e => Au(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Hu = Fu({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Bu = Fu({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zu = Fu({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xu = Fu({
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
        Gu = Fu({
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
        Ku = Fu({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Uu = (0, X.createContext)(null);

      function Wu() {
        const e = (0, X.useContext)(Uu);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const $u = (0, X.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: s,
          onValueChange: a,
          name: i,
          value: l,
          defaultOpen: d,
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
            C = (0, X.useId)(),
            _ = (0, X.useId)(),
            x = (0, X.useId)(),
            j = (0, X.useRef)(null),
            P = (0, X.useRef)(null),
            O = (0, X.useRef)(null),
            [S = !1, k] = (0, Y.ic)({
              prop: u,
              defaultProp: d,
              onChange: c
            }),
            I = (0, W.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, R.jsx)(Uu.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: x,
              hintId: C,
              popoverId: _,
              labelRef: j,
              descriptionRef: P,
              hintRef: O,
              defaultValue: s,
              onValueChange: a,
              value: l,
              isOpen: S,
              setIsOpen: k,
              defaultOpen: d,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, R.jsx)(tu, {
              required: r,
              disabled: n,
              open: S,
              onOpenChange: () => k(!o && !S),
              value: l,
              defaultValue: s,
              onValueChange: a,
              name: i,
              children: (0, R.jsx)("div", {
                ref: y,
                ...I,
                children: e
              })
            })
          })
        }),
        Qu = (0, X.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: s
          } = Wu(), a = (0, W.mergeProps)({
            id: s,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Hu({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, R.jsx)(du, {
            ...a,
            ref: o,
            children: (0, R.jsx)(Cu, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Yu = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e
          }, t);
          return (0, R.jsx)(Cu, {
            ref: r,
            ...n
          })
        }),
        Ju = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, R.jsxs)(Ic, {
            ...o,
            ref: n,
            children: [(0, R.jsx)(Yu, {
              asChild: !0,
              children: (0, R.jsx)(Dc, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, R.jsx)(Nc, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, R.jsx)(Tc, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        ef = (0, X.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...s
        }, a) => {
          const {
            isReadOnly: i,
            status: l,
            isDisabled: d,
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
          } = Wu(), {
            isPressed: w,
            pressProps: C
          } = (0, Td.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [_, x] = (0, X.useState)(!1), [j, P] = (0, X.useState)(!1);
          (0, X.useEffect)(() => {
            x(!!m.current || !!y.current), P(!!v.current)
          }, []);
          const O = (0, W.mergeProps)({
              id: f,
              className: Gu({
                size: b,
                isReadOnly: !!i,
                isInvalid: "invalid" === l,
                isPressed: !!w,
                isDisabled: !!d
              }),
              "aria-labelledby": _ ? (0, W.joinStrings)(r, c, u) : r,
              "aria-describedby": j ? (0, W.joinStrings)(n, h) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === l,
              "data-state": g ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!w
            }, (0, W.omit)(C, "onKeyDown"), s),
            S = o ? J.DX : ru;
          return (0, R.jsx)(S, {
            ...O,
            ref: a,
            children: e
          })
        }),
        tf = (0, X.forwardRef)(({
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
            children: (0, R.jsx)(nu, {
              placeholder: e
            })
          })
        }),
        rf = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: s,
            isOpen: a
          } = Wu(), i = a ? ue.ChevronUp : ue.ChevronDown, l = (0, W.mergeProps)({
            asChild: !0,
            className: Ku({
              isDisabled: s || o
            }),
            "data-testid": t
          }, r);
          return (0, R.jsx)(ou, {
            ...l,
            ref: n,
            children: e || (0, R.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        nf = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, a) => {
          const {
            isRequired: i,
            isDisabled: l,
            labelId: d,
            labelRef: c,
            triggerId: u
          } = Wu(), f = i && !o, p = (0, Y.UP)(c, a), h = (0, W.mergeProps)({
            id: s.id || d,
            htmlFor: u,
            "data-testid": e,
            className: Xu({
              showAsterisk: f,
              isDisabled: l
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
        of = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a,
            descriptionRef: i
          } = Wu(), l = (0, Y.UP)(i, o), d = (0, W.mergeProps)({
            className: Bu({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), c = r ? J.DX : "div";
          return (0, R.jsx)(c, {
            ...d,
            ref: l,
            children: e
          })
        }),
        sf = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            hintRef: a,
            isDisabled: i
          } = Wu(), l = (0, Y.UP)(a, o), d = (0, W.mergeProps)({
            className: Zu({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? J.DX : "div";
          return (0, R.jsx)(c, {
            ...d,
            ref: l,
            children: e
          })
        }),
        af = (0, X.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, X.useRef)(null),
            i = (0, Y.UP)(a, s),
            l = (0, W.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, R.jsx)(Su, {
            ref: i,
            ...l,
            children: e
          })
        }),
        lf = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, R.jsx)(Ru, {
            ref: n,
            asChild: !0,
            children: (0, R.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        df = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, R.jsx)(ou, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        cf = iu,
        uf = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Wu(), i = (0, W.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), l = r ? J.DX : Hd;
          return (0, R.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ff = Bd,
        pf = Zd;
      var hf = r(70995),
        mf = r(65911),
        vf = r(96283),
        yf = r(10453),
        gf = r(43353);

      function bf(e, t, r) {
        let n = (0, gf.J)(e => {
          r && !e.defaultPrevented && r(t)
        });
        (0, X.useEffect)(() => {
          let t = e?.current?.form;
          return t?.addEventListener("reset", n), () => {
            t?.removeEventListener("reset", n)
          }
        }, [e])
      }
      var wf = r(15812),
        Cf = r(76721);

      function _f(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, Cf.N)(() => {
          if ("native" === n && r?.current && "setCustomValidity" in r.current && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: xf(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let s = (0, X.useRef)(!1),
          a = (0, gf.J)(() => {
            s.current || t.resetValidation()
          }),
          i = (0, gf.J)(e => {
            t.displayValidation.isInvalid || t.commitValidation();
            let n = r?.current?.form;
            !e.defaultPrevented && r && n && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!1 === r.validity?.valid) return r
              }
              return null
            }(n) === r.current && (o ? o() : r.current?.focus(), (0, wf.Cl)("keyboard")), e.preventDefault()
          }),
          l = (0, gf.J)(() => {
            t.commitValidation()
          });
        (0, X.useEffect)(() => {
          let e = r?.current;
          if (!e) return;
          let t = e.form,
            n = t?.reset;
          return t && (t.reset = () => {
            s.current = !window.event || "message" === window.event.type && (0, mf.wt)(window.event) instanceof MessagePort, n?.call(t), s.current = !1
          }), e.addEventListener("invalid", i), e.addEventListener("change", l), t?.addEventListener("reset", a), () => {
            e.removeEventListener("invalid", i), e.removeEventListener("change", l), t?.removeEventListener("reset", a), t && (t.reset = n)
          }
        }, [r, n])
      }

      function xf(e) {
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
      var jf = r(69089);

      function Pf(e = !0) {
        let t = (0, jf.Bi)(),
          [r, n] = function(e = !0) {
            let [t, r] = (0, X.useState)(e), n = (0, X.useRef)(!1), o = (0, X.useCallback)(e => {
              n.current = !0, r(!!e)
            }, []);
            return (0, Cf.N)(() => {
              n.current || r(!1)
            }, []), [o, t]
          }(e);
        return {
          id: n ? t : void 0,
          ref: r
        }
      }
      const Of = {
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
        Sf = {
          ...Of,
          customError: !0,
          valid: !1
        },
        kf = {
          isInvalid: !1,
          validationDetails: Of,
          validationErrors: []
        },
        Rf = (0, X.createContext)({}),
        If = "__reactAriaFormValidationState";

      function Df(e) {
        if (e[If]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: s
          } = e[If];
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
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: Sf
            } : null,
            d = (0, X.useMemo)(() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return Nf(r)
                }
                return []
              }(a, o);
              return Tf(e)
            }, [a, o]);
          s?.validationDetails.valid && (s = void 0);
          let c = (0, X.useContext)(Rf),
            u = (0, X.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => Nf(c[e])) : Nf(c[n]) : [], [c, n]),
            [f, p] = (0, X.useState)(c),
            [h, m] = (0, X.useState)(!1);
          c !== f && (p(c), m(!1));
          let v = (0, X.useMemo)(() => Tf(h ? [] : u), [h, u]),
            y = (0, X.useRef)(kf),
            [g, b] = (0, X.useState)(kf),
            w = (0, X.useRef)(kf),
            [C, _] = (0, X.useState)(!1);
          return (0, X.useEffect)(() => {
            if (!C) return;
            _(!1);
            let e = d || s || y.current;
            Ef(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: l || v || d || s || kf,
            displayValidation: "native" === i ? l || v || g : l || v || d || s || g,
            updateValidation(e) {
              "aria" !== i || Ef(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = kf;
              Ef(e, w.current) || (w.current = e, b(e)), "native" === i && _(!1), m(!0)
            },
            commitValidation() {
              "native" === i && _(!0), m(!0)
            }
          }
        }(e)
      }

      function Nf(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Tf(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Sf
        } : null
      }

      function Ef(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }

      function zf(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: s,
          name: a,
          form: i,
          children: l,
          isRequired: d,
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
        } = e, w = Df({
          ...e,
          value: t.isSelected
        }), {
          isInvalid: C,
          validationErrors: _,
          validationDetails: x
        } = w.displayValidation;
        _f(e, w, r);
        let {
          pressProps: j,
          isPressed: P
        } = (0, Td.d)({
          onPressStart: h,
          onPressEnd: m,
          onPressChange: v,
          onPress: y,
          onPressUp: g,
          onClick: b,
          isDisabled: n
        }), [O, S] = (0, X.useState)(!1), {
          pressProps: k
        } = (0, Td.d)({
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
              [If]: o
            } = e, {
              commitValidation: s
            } = o || w;
            s()
          },
          isDisabled: n || o
        }), {
          focusableProps: R
        } = (0, yf.Wc)(e, r), I = (0, vf.v)(j, R), D = (0, hf.$)(e, {
          labelable: !0
        });
        bf(r, t.defaultSelected, t.setSelected);
        let N = Pf(),
          T = Pf();
        return {
          labelProps: (0, vf.v)(k, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, vf.v)(D, {
            checked: t.isSelected,
            "aria-required": d && "aria" === c || void 0,
            required: d && "native" === c,
            "aria-invalid": C || "invalid" === e.validationState || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            "aria-describedby": [N.id, T.id, p].filter(Boolean).join(" ") || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected((0, mf.wt)(e).checked)
            },
            disabled: n,
            ...null == s ? {} : {
              value: s
            },
            name: a,
            form: i,
            type: "checkbox",
            ...I
          }),
          descriptionProps: N,
          errorMessageProps: T,
          isSelected: t.isSelected,
          isPressed: P || O,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: C || "invalid" === e.validationState,
          validationErrors: _,
          validationDetails: x
        }
      }
      const Lf = "undefined" != typeof document ? X.useInsertionEffect ?? X.useLayoutEffect : () => {};

      function Vf(e, t, r) {
        let [n, o] = (0, X.useState)(e || t), s = (0, X.useRef)(n), a = (0, X.useRef)(void 0 !== e), i = void 0 !== e;
        (0, X.useEffect)(() => {
          a.current, a.current = i
        }, [i]);
        let l = i ? e : n;
        Lf(() => {
          s.current = l
        });
        let [, d] = (0, X.useReducer)(() => ({}), {}), c = (0, X.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(s.current) : e;
          Object.is(s.current, n) || (s.current = n, o(n), d(), r?.(n, ...t))
        }, [r]);
        return [l, c]
      }

      function Mf(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = Vf(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, X.useState)(r);
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

      function Af(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function qf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ff(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qf(Object(r), !0).forEach(function(t) {
            Af(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Hf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Bf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Zf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ff(Ff({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Bf(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hf(e.variantClassNames, e => Hf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Xf = Zf({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gf = Zf({
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
        Kf = Zf({
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
        Uf = Zf({
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
        Wf = Zf({
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
      const $f = (0, X.createContext)(null);

      function Qf() {
        const e = (0, X.useContext)($f);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Yf = (0, X.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: s = !1,
          isReadOnly: a = !1,
          ...i
        }, l) => {
          const d = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? J.DX : "div",
            u = (0, X.useId)(),
            f = (0, X.useId)(),
            p = (0, X.useId)();
          return (0, R.jsx)($f.Provider, {
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
              ...d,
              ref: l,
              children: o
            })
          })
        }),
        Jf = (0, X.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: s,
          isSelected: a,
          defaultSelected: i,
          onSelectedChange: l,
          name: d,
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
              isReadOnly: C
            } = Qf(),
            _ = Mf({
              isDisabled: w,
              isReadOnly: C,
              isSelected: a,
              defaultSelected: i,
              onChange: l
            }),
            {
              inputProps: x
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: s,
                ...a
              } = zf(e, t, r);
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
              name: d,
              value: c,
              isDisabled: w,
              isReadOnly: C
            }, _, p),
            j = (0, W.mergeProps)({
              className: Wf({
                appearance: v
              }),
              "data-state": _.isSelected ? "selected" : "unselected",
              "data-disabled": w || C,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || C || _.toggle()
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
              className: Uf({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, R.jsx)("div", {
                className: Gf({
                  size: m,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        ep = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            isDisabled: a,
            labelId: i,
            inputId: l,
            size: d
          } = Qf(), c = (0, W.mergeProps)({
            id: o.id || i,
            htmlFor: l,
            "data-testid": e,
            className: Kf({
              isDisabled: a,
              size: d
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
        tp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Qf(), i = n.id || a, l = (0, W.mergeProps)({
            className: Xf({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), d = t ? J.DX : "div";
          return (0, R.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        }),
        rp = ({
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
        np = ({
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
        op = ({
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
        sp = ({
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
        ap = ({
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
        ip = ({
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

      function lp(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function dp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function cp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dp(Object(r), !0).forEach(function(t) {
            lp(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function up(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var fp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = cp(cp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) fp(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return up(e.variantClassNames, e => up(e, e => e.split(" ")[0]))
            }
          }, t
        },
        hp = pp({
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
        mp = pp({
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
        vp = pp({
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
        yp = pp({
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
        gp = pp({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bp = pp({
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
      const wp = (0, X.createContext)(null);

      function Cp() {
        const e = (0, X.useContext)(wp);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const _p = (0, X.forwardRef)(({
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
            l = n ? J.DX : "div",
            d = (0, X.useId)(),
            c = (0, X.useId)(),
            u = (0, X.useId)();
          return (0, R.jsx)(wp.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: c,
              inputId: u,
              ...s
            },
            children: (0, R.jsx)(l, {
              ...i,
              ref: a,
              children: o
            })
          })
        }),
        xp = (0, X.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: s,
          onClick: a,
          "aria-describedby": l,
          "aria-errormessage": d,
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
            ...C
          } = Cp(), _ = (0, X.useRef)(null), x = f.id || w, {
            isPressed: j,
            pressProps: P
          } = (0, Td.d)({
            ref: _
          }), {
            setSelected: O,
            toggle: S,
            ...k
          } = Mf({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: I,
            isSelected: D,
            isDisabled: N,
            isReadOnly: T
          } = function(e, t, r) {
            let {
              labelProps: n,
              inputProps: o,
              descriptionProps: s,
              errorMessageProps: a,
              isSelected: i,
              isPressed: l,
              isDisabled: d,
              isReadOnly: c,
              isInvalid: u,
              validationErrors: f,
              validationDetails: p
            } = zf(e, t, r), {
              isIndeterminate: h
            } = e;
            return (0, X.useEffect)(() => {
              r.current && (r.current.indeterminate = !!h)
            }), {
              labelProps: (0, vf.v)(n, (0, X.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: o,
              descriptionProps: s,
              errorMessageProps: a,
              isSelected: i,
              isPressed: l,
              isDisabled: d,
              isReadOnly: c,
              isInvalid: u,
              validationErrors: f,
              validationDetails: p
            }
          }({
            "aria-label": "",
            id: x,
            name: o,
            ...C
          }, {
            ...k,
            toggle: S,
            setSelected: C.isReadOnly ? () => !1 : O
          }, _), E = (0, W.mergeProps)({
            className: mp({
              size: h
            }),
            onClick: e => {
              s?.(e) ?? a?.(e), e.defaultPrevented || N || T || S()
            }
          }, P, f), z = (0, W.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, W.joinStrings)(c, b),
            "aria-describedby": (0, W.joinStrings)(l, g),
            "aria-errormessage": (0, W.joinStrings)(d, C.isInvalid ? g : void 0),
            "aria-required": y,
            required: y
          }, I), L = v ? i[`Dash${h}`] : i[`Check${h}`];
          return (0, R.jsxs)("div", {
            ...E,
            children: [(0, R.jsx)(J.s6, {
              children: (0, R.jsx)("input", {
                ...z,
                ref: p
              })
            }), (0, R.jsx)("div", {
              className: (0, ce.clsx)(hp({
                size: h,
                appearance: m
              }), u),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : D ? "checked" : "unchecked",
              "data-disabled": N || T,
              "data-testid": e,
              "data-pressed": j,
              children: (0, R.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (D || v) && (0, R.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        jp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...s
        }, a) => {
          const {
            size: i,
            labelId: l,
            inputId: d,
            isRequired: c
          } = Cp(), u = s.id || l, f = c && !o, p = (0, W.mergeProps)({
            className: bp({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: s.htmlFor || d
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
        Pp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Cp(), i = n.id || a, l = (0, W.mergeProps)({
            className: vp({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), d = t ? J.DX : "div";
          return (0, R.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Op = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = Cp(), a = n.id || s, i = (0, W.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: a
          }, n), l = t ? J.DX : "div";
          return (0, R.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Sp = (0, X.createContext)(null);

      function kp() {
        const e = (0, X.useContext)(Sp);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Rp = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...s
        }, a) => {
          const [i, l] = (0, X.useState)(null), [d, c] = (0, X.useState)(null), u = [i, d].filter(Boolean).join(" "), f = (0, W.mergeProps)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, s), p = t ? J.DX : "fieldset";
          return (0, R.jsx)(Sp.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: d,
              setDescriptionId: l,
              setErrorTextId: c
            },
            children: (0, R.jsx)(p, {
              ...f,
              ref: a,
              children: r
            })
          })
        }),
        Ip = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          optionalText: n = "optional",
          hideVisually: o = !1,
          hideRequiredAsterisk: s,
          ...a
        }, i) => {
          const {
            isRequired: l
          } = kp(), d = l && !s, c = (0, W.mergeProps)({
            "data-testid": r,
            className: gp({
              showAsterisk: d
            })
          }, a), u = t ? J.DX : "legend";
          return (0, R.jsx)(J.s6, {
            enabled: o,
            children: (0, R.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, R.jsx)(J.xV, {
                children: e
              }), !l && (0, R.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        Dp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: s
          } = kp(), a = (0, X.useId)(), i = n.id || a;
          (0, X.useEffect)(() => {
            s(i)
          }, [s, i]);
          const l = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            d = t ? J.DX : "div";
          return (0, R.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Np = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = kp(), a = (0, W.mergeProps)({
            "data-testid": r,
            className: yp({
              size: s
            })
          }, n), i = t ? J.DX : "div";
          return (0, R.jsx)(i, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Tp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: s
          } = kp(), a = (0, X.useId)(), i = n.id || a;
          (0, X.useEffect)(() => {
            s(i)
          }, [s, i]);
          const l = (0, W.mergeProps)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            d = ue.X,
            c = t ? J.DX : "div";
          return (0, R.jsxs)(c, {
            ...l,
            ref: o,
            children: [(0, R.jsx)(d, {
              label: "",
              size: "SM"
            }), (0, R.jsx)(J.xV, {
              children: e
            })]
          })
        });

      function Ep(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function zp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Lp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zp(Object(r), !0).forEach(function(t) {
            Ep(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Mp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ap = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Lp(Lp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Mp(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vp(e.variantClassNames, e => Vp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        qp = Ap({
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
        Fp = Ap({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hp = Ap({
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
        Bp = Ap({
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
      const Zp = (0, X.createContext)(null);

      function Xp() {
        const e = (0, X.useContext)(Zp);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Gp = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, l) => {
          const d = (0, W.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? J.DX : "div",
            u = (0, X.useId)(),
            f = (0, X.useId)(),
            p = (0, X.useId)(),
            h = (0, X.useId)();
          return (0, R.jsx)(Zp.Provider, {
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
              ref: l,
              ...d,
              children: t
            })
          })
        }),
        Kp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, a) => {
          const {
            labelId: i,
            inputId: l,
            isDisabled: d,
            isRequired: c
          } = Xp(), u = (0, W.mergeProps)({
            className: Hp({
              isDisabled: d,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: l
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
        Up = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: s,
          placeholder: a = " ",
          "aria-labelledby": i,
          "aria-describedby": l,
          ...d
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
          } = Xp(), b = (0, X.useRef)(null), w = (0, Y.UP)(b, c), C = (0, W.mergeProps)({
            className: Bp({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isSuccess: "success" === g
            }),
            name: s,
            id: d.id || p,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: a,
            "aria-labelledby": (0, W.joinStrings)(d.id, f, h, i),
            "aria-describedby": (0, W.joinStrings)(u, l),
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
          }, d), _ = e ? J.DX : "textarea";
          return (0, R.jsx)(_, {
            ref: w,
            ...C,
            children: t
          })
        }),
        Wp = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Xp(), i = (0, W.mergeProps)({
            className: qp({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? J.DX : "div";
          return (0, R.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        $p = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = Xp(), i = (0, W.mergeProps)({
            className: Fp({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), l = t ? J.DX : "div";
          return (0, R.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Qp = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Xp(), i = (0, W.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), l = r ? J.DX : Hd;
          return (0, R.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Yp = Bd,
        Jp = Zd;
      let eh = Math.round(1e10 * Math.random()),
        th = 0;
      var rh = r(65045);
      class nh {
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
          if (!(0, mf.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, mf.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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
      var oh = r(83540),
        sh = r(27046);

      function ah(e, t) {
        return !!e && !!t && t.some(t => (0, mf.sD)(t, e))
      }

      function ih(e, t, r) {
        let n = t?.tabbable ? sh.A : sh.t,
          o = e?.nodeType === Node.ELEMENT_NODE ? e : null,
          s = (0, oh.TW)(o),
          a = function(e, t, r, n) {
            return (0, rh.Nf)() ? new nh(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(s, e || s, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if ((0, mf.sD)(t?.from, e)) return NodeFilter.FILTER_REJECT;
              if (t?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from((0, oh.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let r = (0, oh.mD)(e);
                      return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === a.currentNode.tagName && "radio" === a.currentNode.type && a.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !ah(e, r) || t?.accept && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return t?.from && (a.currentNode = t.from), a
      }
      class lh {
        constructor() {
          this.fastMap = new Map, this.root = new dh({
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
          let o = new dh({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && ah(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          let e = new lh;
          for (let t of this.traverse()) e.addTreeNode(t.scopeRef, t.parent?.scopeRef ?? null, t.nodeToRestore);
          return e
        }
      }
      class dh {
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
      new lh;
      const ch = new WeakMap;

      function uh(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, jf.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function fh(e) {
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
          t = (0, jf.Bi)(t);
          let a = (0, jf.Bi)(),
            i = {};
          return r && (n = n ? `${a} ${n}` : a, i = {
            id: a,
            htmlFor: "label" === s ? t : void 0
          }), {
            labelProps: i,
            fieldProps: uh({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), i = (0, jf.X1)([Boolean(t), Boolean(r), n, o]), l = (0, jf.X1)([Boolean(t), Boolean(r), n, o]);
        return a = (0, vf.v)(a, {
          "aria-describedby": [i, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: s,
          fieldProps: a,
          descriptionProps: {
            id: i
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      var ph = r(28148),
        hh = r(92772);
      var mh = r(82835);
      const vh = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        yh = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function gh(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return vh.has(t.script)
        }
        let t = e.split("-")[0];
        return yh.has(t)
      }
      var bh = r(22825);
      const wh = Symbol.for("react-aria.i18n.locale");

      function Ch() {
        let e = "undefined" != typeof window && window[wh] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: gh(e) ? "rtl" : "ltr"
        }
      }
      let _h = Ch(),
        xh = new Set;

      function jh() {
        _h = Ch();
        for (let e of xh) e(_h)
      }
      const Ph = X.createContext(null);

      function Oh() {
        let e = function() {
          let e = (0, bh.wR)(),
            [t, r] = (0, X.useState)(_h);
          return (0, X.useEffect)(() => (0 === xh.size && window.addEventListener("languagechange", jh), xh.add(r), () => {
            xh.delete(r), 0 === xh.size && window.removeEventListener("languagechange", jh)
          }), []), e ? {
            locale: "undefined" != typeof window && window[wh] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, X.useContext)(Ph) || e
      }

      function Sh(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: s,
          isDisabled: a,
          orientation: i = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: d
        } = Oh(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: m,
          errorMessageProps: v
        } = fh({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), y = (0, hf.$)(e, {
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
          } = (0, hh.A)(), l = (0, X.useCallback)(e => {
            (0, mf.sD)(e.currentTarget, (0, mf.wt)(e)) && s.current.isFocusWithin && !(0, mf.sD)(e.currentTarget, e.relatedTarget) && (s.current.isFocusWithin = !1, i(), r && r(e), o && o(!1))
          }, [r, o, s, i]), d = (0, ph.yB)(l), c = (0, X.useCallback)(e => {
            if (!(0, mf.sD)(e.currentTarget, (0, mf.wt)(e))) return;
            let t = (0, mf.wt)(e);
            const r = (0, oh.TW)(t),
              i = (0, mf.bq)(r);
            if (!s.current.isFocusWithin && i === t) {
              n && n(e), o && o(!0), s.current.isFocusWithin = !0, d(e);
              let t = e.currentTarget;
              a(r, "focus", e => {
                let n = (0, mf.wt)(e);
                if (s.current.isFocusWithin && !(0, mf.sD)(t, n)) {
                  let e = new r.defaultView.FocusEvent("blur", {
                    relatedTarget: n
                  });
                  (0, ph.o1)(e, t);
                  let o = (0, ph.eg)(e);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [n, o, d, a, l]);
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
            e.onBlur?.(r), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        });

        function b(e, r) {
          let n, o = ih(r.currentTarget, {
            from: (0, mf.wt)(r),
            accept: e => e instanceof(0, oh.mD)(e).HTMLInputElement && "radio" === e.type
          });
          return "next" === e ? (n = o.nextNode(), n || (o.currentNode = r.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = r.currentTarget, n = o.lastChild())), !!n && (n.focus(), t.setSelectedValue(n.value), !0)
        }
        let {
          keyboardProps: w
        } = (0, mh.d)({
          shortcuts: {
            ArrowRight: e => b("rtl" === d && "vertical" !== i ? "prev" : "next", e),
            ArrowLeft: e => b("rtl" === d && "vertical" !== i ? "next" : "prev", e),
            ArrowDown: e => b("next", e),
            ArrowUp: e => b("prev", e)
          },
          allowRepeats: !0
        }), C = (0, jf.Bi)(r);
        return ch.set(t, {
          name: C,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: (0, vf.v)(y, {
            role: "radiogroup",
            ...w,
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

      function kh(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Rh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ih(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rh(Object(r), !0).forEach(function(t) {
            kh(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Nh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Th = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ih(Ih({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Nh(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dh(e.variantClassNames, e => Dh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Eh = Th({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zh = Th({
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
      const Lh = (0, X.createContext)(null);

      function Vh() {
        const e = (0, X.useContext)(Lh);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Mh = (0, X.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: s,
          "aria-labelledby": a,
          "aria-describedby": i,
          "aria-errormessage": l,
          status: d = "neutral",
          ...c
        }, u) => {
          const f = (0, X.useRef)(null),
            p = (0, Y.UP)(f, u),
            h = (0, X.useId)(),
            m = (0, X.useId)(),
            v = (0, X.useId)(),
            y = function(e) {
              let t = (0, X.useMemo)(() => e.name || `radio-group-${eh}-${++th}`, [e.name]),
                [r, n] = Vf(e.value, e.defaultValue ?? null, e.onChange),
                [o] = (0, X.useState)(r),
                [s, a] = (0, X.useState)(null),
                i = Df({
                  ...e,
                  value: r
                }),
                l = i.displayValidation.isInvalid;
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
                validationState: e.validationState || (l ? "invalid" : null),
                isInvalid: l
              }
            }({
              ...c,
              isInvalid: "invalid" === d
            }),
            {
              radioGroupProps: g
            } = Sh({
              ...c,
              orientation: r,
              "aria-labelledby": (0, W.joinStrings)(h, a),
              "aria-describedby": (0, W.joinStrings)(m, v, i),
              "aria-errormessage": (0, W.joinStrings)(v, l)
            }, y),
            b = (0, W.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, W.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = s ? J.DX : "div";
          return (0, R.jsx)(Lh.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: m,
              labelId: h,
              errorId: v,
              status: d,
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
        Ah = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: s,
            orientation: a
          } = Vh(), i = (0, W.mergeProps)({
            "data-testid": e,
            className: zh({
              size: s,
              orientation: a
            })
          }, n), l = t ? J.DX : "div";
          return (0, R.jsx)(l, {
            ...i,
            ref: o,
            children: r
          })
        }),
        qh = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, a) => {
          const {
            isRequired: i,
            labelId: l
          } = Vh(), d = i && !o, c = (0, W.mergeProps)({
            id: s.id || l,
            "data-testid": e,
            className: Eh({
              showAsterisk: d
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
        Fh = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = Vh(), a = (0, W.mergeProps)({
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
        Hh = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: s,
            status: a
          } = Vh(), i = (0, W.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: s,
            status: a
          }, n), l = r ? J.DX : Hd;
          return (0, R.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Bh = Bd,
        Zh = Zd;
      var Xh = Th({
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
        Gh = Th({
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
        Kh = Th({
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
        Uh = Th({
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
      const Wh = ({
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
        $h = ({
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
        Qh = ({
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
        Yh = (0, X.forwardRef)(({
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
        Jh = (0, X.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, X.useRef)(null),
            s = (0, Y.UP)(o, n),
            a = (0, X.useId)(),
            {
              state: i,
              appearance: l,
              size: d,
              isReadOnly: u,
              isRequired: f
            } = Vh(),
            {
              isPressed: p,
              pressProps: h
            } = (0, Td.d)({
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
                onPressEnd: l,
                onPressChange: d,
                onPress: c,
                onPressUp: u,
                onClick: f
              } = e;
              const p = e.isDisabled || t.isDisabled;
              let h = t.selectedValue === n,
                {
                  pressProps: m,
                  isPressed: v
                } = (0, Td.d)({
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
                } = (0, Td.d)({
                  onPressStart: i,
                  onPressEnd: l,
                  onPressChange: d,
                  onPressUp: u,
                  onClick: f,
                  isDisabled: p,
                  onPress(e) {
                    c?.(e), t.setSelectedValue(n), r.current?.focus()
                  }
                }),
                {
                  focusableProps: b
                } = (0, yf.Wc)((0, vf.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                w = (0, vf.v)(m, b),
                C = (0, hf.$)(e, {
                  labelable: !0
                }),
                _ = -1;
              null != t.selectedValue ? t.selectedValue === n && (_ = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (_ = 0), p && (_ = void 0);
              let {
                name: x,
                form: j,
                descriptionId: P,
                errorMessageId: O,
                validationBehavior: S
              } = ch.get(t);
              bf(r, t.defaultSelectedValue, t.setSelectedValue), _f({
                validationBehavior: S
              }, t, r);
              let k = Pf();
              return {
                labelProps: (0, vf.v)(y, (0, X.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, vf.v)(C, {
                  ...w,
                  type: "radio",
                  name: x,
                  form: j,
                  tabIndex: _,
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
            b = c[`Dot${d}`];
          return (0, R.jsxs)("div", {
            className: Uh({
              size: d
            }),
            children: [(0, R.jsx)(J.s6, {
              children: (0, R.jsx)("input", {
                type: "radio",
                ...g,
                ref: s,
                className: "foundry_1pfduet1"
              })
            }), (0, R.jsx)("div", {
              className: Kh({
                appearance: l
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
        em = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            size: a,
            state: i
          } = Vh(), l = (0, X.useId)(), d = (0, W.mergeProps)({
            id: l,
            "data-testid": e,
            className: Gh({
              size: a,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? J.DX : "div";
          return (0, R.jsx)(J.s6, {
            enabled: n,
            children: (0, R.jsx)(c, {
              ...d,
              ref: s,
              children: r
            })
          })
        }),
        tm = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Vh(), a = (0, W.mergeProps)({
            "data-testid": e,
            className: Xh({
              isDisabled: s
            })
          }, n), i = t ? J.DX : "span";
          return (0, R.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        });

      function rm(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function nm(e, t, r) {
        return t = am(t),
          function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, im() ? Reflect.construct(t, r || [], am(e).constructor) : t.apply(e, r))
      }

      function om(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return rm(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? rm(e, t) : void 0
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

      function sm(e, t, r) {
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

      function am(e) {
        return am = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, am(e)
      }

      function im() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (im = function() {
          return !!e
        })()
      }

      function lm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function dm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? lm(Object(r), !0).forEach(function(t) {
            sm(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cm(e, t) {
        return cm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, cm(e, t)
      }

      function um(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          s = t.separate,
          a = n,
          i = "",
          l = om(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var d, c = r.value,
              u = !Object.prototype.hasOwnProperty.call(o, c) && (null === (d = o[a[0]]) || void 0 === d ? void 0 : d.test(c));
            (s && c === a[0] || u) && (a = a.slice(1), i += c)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return i
      }

      function fm(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          s = t.separate,
          a = t.showMask,
          i = 0,
          l = "",
          d = om(n);
        try {
          for (d.s(); !(r = d.n()).done;) {
            var c = r.value;
            if (!a && void 0 === e[i]) break;
            Object.prototype.hasOwnProperty.call(o, c) && void 0 !== e[i] ? l += e[i++] : l += c
          }
        } catch (e) {
          d.e(e)
        } finally {
          d.f()
        }
        if (s && !a) {
          for (var u = n.length - 1; u >= 0 && l[u] === n[u]; u--);
          l = l.slice(0, u + 1)
        }
        return l
      }

      function pm(e, t) {
        for (var r = t.mask, n = t.replacement, o = [], s = 0; s < r.length; s++) {
          var a, i = null !== (a = e[s]) && void 0 !== a ? a : r[s],
            l = Object.prototype.hasOwnProperty.call(n, i) ? "replacement" : void 0 !== e[s] && e[s] !== r[s] ? "input" : "mask";
          o.push({
            type: l,
            value: i,
            index: s
          })
        }
        return o
      }

      function hm(e) {
        return e.length > 0 ? sm({}, e, /./) : {}
      }

      function mm(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, s = t.mask, a = t.replacement, i = t.separate, l = e.slice(n, o), d = s.slice(n, o), c = "", u = 0; u < d.length; u++) {
          var f = Object.prototype.hasOwnProperty.call(a, d[u]);
          f && void 0 !== l[u] && l[u] !== d[u] ? c += l[u] : f && i && (c += d[u])
        }
        return c
      }

      function vm(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? hm(n) : n,
          s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return fm(um(e, {
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
      var ym = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function gm(e) {
        return ym.includes(e) ? "\\".concat(e) : e
      }

      function bm(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function wm(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Cm(e, t, r) {
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

      function _m(e) {
        return _m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, _m(e)
      }

      function xm() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (xm = function() {
          return !!e
        })()
      }

      function jm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Pm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jm(Object(r), !0).forEach(function(t) {
            Cm(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Om(e, t) {
        return Om = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Om(e, t)
      }

      function Sm(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Sm = function(e) {
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
              if (xm()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && Om(o, r.prototype), o
            }(e, arguments, _m(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Om(r, e)
        }, Sm(e)
      }
      var km, Rm = function(e) {
          function t(e) {
            var r;
            return bm(this, t), (r = function(e, t, r) {
              return t = _m(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, xm() ? Reflect.construct(t, r || [], _m(e).constructor) : t.apply(e, r))
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
            }), t && Om(e, t)
          }(t, e), wm(t)
        }(Sm(Error)),
        Im = ["options"],
        Dm = ["text", "email", "tel", "search", "url"],
        Nm = wm(function e(t) {
          var r = t.init,
            n = t.tracking;
          bm(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Dm.includes(e.type)) {
              var s = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                a = s.initialValue,
                i = void 0 === a ? "" : a,
                l = s.controlled,
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
                m = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                v = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", Pm(Pm({}, v), {}, {
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
                    if (h.cachedId === h.id) throw new Rm("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var s = e.value,
                      a = e.selectionStart,
                      i = e.selectionEnd;
                    if (null === a || null === i) throw new Rm("The selection attributes have not been initialized.");
                    var l, d = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = d.length), a > m.selectionStart ? l = "insert" : a <= m.selectionStart && a < m.selectionEnd ? l = "deleteBackward" : a === m.selectionEnd && s.length < d.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && s.length > d.length) throw new Rm("Input type detection error.");
                    var c = "",
                      u = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) c = s.slice(m.selectionStart, a);
                    else {
                      var v = d.length - s.length;
                      u = a, f = a + v
                    }
                    p.value !== d ? p.options = p.fallbackOptions : p.fallbackOptions = p.options;
                    var y = p.options,
                      g = n({
                        inputType: l,
                        previousValue: d,
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
                      }(g, Im);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), p.value = w.value, p.options = b, m.selectionStart = w.selectionStart, m.selectionEnd = w.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, d)
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
      km = Nm, Object.defineProperty(km.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Tm, Em = ["track", "modify"];

      function zm(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? hm(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Lm = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = nm(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = zm(r),
                s = o.mask,
                a = o.replacement,
                i = o.separate,
                l = o.showMask;
              return {
                value: t = n || t ? t : l ? s : "",
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
                l = zm(r),
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
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                  }
                  return o
                }(l, Em),
                f = u.mask,
                p = u.replacement,
                h = u.showMask,
                m = u.separate,
                v = dm(dm({}, "insert" === t ? {
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
                y = null == d ? void 0 : d(v);
              if (!1 === y) throw new Rm("Custom tracking stop.");
              null === y ? s = "" : !0 !== y && void 0 !== y && (s = y);
              var g = null == c ? void 0 : c(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? hm(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = mm(n, dm({
                  end: a
                }, o)),
                w = mm(n, dm({
                  start: i
                }, o)),
                C = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                _ = f.replace(C, "");
              if (b && (b = um(b, {
                  replacementChars: _,
                  replacement: p,
                  separate: m
                }), _ = _.slice(b.length)), s && (s = um(s, {
                  replacementChars: _,
                  replacement: p,
                  separate: !1
                }), _ = _.slice(s.length)), "insert" === t && "" === s) throw new Rm("The character does not match the key value of the `replacement` object.");
              if (m) {
                var x = f.slice(a, i).replace(C, ""),
                  j = x.length - s.length;
                j < 0 ? w = w.slice(-j) : j > 0 && (w = x.slice(-j) + w)
              }
              w && (w = um(w, {
                replacementChars: _,
                replacement: p,
                separate: m
              }));
              var P = fm(b + s + w, {
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
                    l = e.replacement,
                    d = e.separate,
                    c = pm(s, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || d && "replacement" === t
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
                    return Object.prototype.hasOwnProperty.call(l, e)
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
            return vm(e, zm(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? hm(n) : n;
              return pm(vm(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, zm(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? hm(n) : n,
                s = mm(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return um(s, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, zm(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? hm(n) : n, s = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, i = "", l = 0; l < r.length; l++) {
                var d = r[l];
                0 === l && (i = "^"), s && (i += "("), i += Object.prototype.hasOwnProperty.call(o, d) ? "".concat(a ? "(?!".concat(gm(d), ")") : "", "(").concat(o[d].source, ")") : gm(d), l === r.length - 1 && (s && (i += ")?".repeat(r.length)), i += "$")
              }
              return i
            }(e, zm(r))
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
            }), t && cm(e, t)
          }(e, Nm),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function Vm(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Mm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Am(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mm(Object(r), !0).forEach(function(t) {
            Vm(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function qm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Tm = Lm, Object.defineProperty(Tm.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Fm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Am(Am({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Fm(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qm(e.variantClassNames, e => qm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Bm = Hm({
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
        Zm = Hm({
          defaultClassName: "foundry_8oytzo11 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo12",
              true: "foundry_8oytzo13"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xm = Hm({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gm = Hm({
          defaultClassName: "foundry_8oytzou",
          variantClassNames: {
            side: {
              left: "foundry_8oytzov",
              right: "foundry_8oytzow"
            },
            isDisabled: {
              false: "foundry_8oytzox",
              true: "foundry_8oytzoy"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Km = Hm({
          defaultClassName: "foundry_8oytzop foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzoq",
              true: "foundry_8oytzor"
            },
            isReadOnly: {
              false: "foundry_8oytzos",
              true: "foundry_8oytzot"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Um = Hm({
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
      const Wm = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        $m = (0, X.createContext)(null);

      function Qm() {
        const e = (0, X.useContext)($m);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Ym = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, l) => {
          const [d, c] = (0, X.useState)("text"), u = `${(0,X.useId)()}-label`, f = `${(0,X.useId)()}-input`, p = `${(0,X.useId)()}-description`, h = (0, X.useRef)(null), m = (0, X.useRef)(Wm), v = (0, W.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), y = e ? J.DX : "div";
          return (0, R.jsx)($m.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: s,
              status: a,
              labelId: u,
              inputId: f,
              descriptionId: p,
              type: d,
              setType: c,
              inputRef: h,
              focusState: m,
              ...i
            },
            children: (0, R.jsx)(y, {
              ref: l,
              ...v,
              children: t
            })
          })
        }),
        Jm = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...s
        }, a) => {
          const {
            isDisabled: i,
            isRequired: l,
            inputId: d,
            labelId: c
          } = Qm(), u = l && !o, f = (0, W.mergeProps)({
            id: s.id || c,
            htmlFor: s.htmlFor || d,
            "data-testid": e,
            className: Um({
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
        ev = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Qm(), a = (0, W.mergeProps)({
            "data-testid": e,
            className: Xm({
              isDisabled: s
            })
          }, n), i = t ? J.DX : "span";
          return (0, R.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        }),
        tv = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            isReadOnly: a,
            status: i
          } = Qm(), l = (0, W.mergeProps)({
            "data-testid": e,
            className: (0, ce.clsx)(Bm({
              isDisabled: s,
              isReadOnly: a,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), d = t ? J.DX : "div";
          return (0, R.jsx)(d, {
            ref: o,
            ...l,
            children: r
          })
        }),
        rv = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: s,
          placeholder: a = " ",
          "aria-labelledby": i,
          "aria-describedby": l,
          type: d = "text",
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
            inputRef: C,
            focusState: _
          } = Qm();
          (0, X.useEffect)(() => b(d), []);
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
              "aria-describedby": (0, W.joinStrings)(g, l),
              "data-testid": e,
              className: (0, ce.clsx)(Km({
                isDisabled: f,
                isReadOnly: p
              }), "foundry_8oytzo2"),
              onBlur: e => {
                if (_.current) {
                  const {
                    selectionStart: t,
                    selectionEnd: r
                  } = e.currentTarget;
                  _.current.selectionStart = t, _.current.selectionEnd = r
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
                l = (0, X.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: s,
                  modify: a
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = s, l.current.modify = a, (0, X.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(i, new Lm(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: s
            }),
            O = (0, Y.UP)(r && n ? P : null, C, u),
            S = t ? J.DX : "input";
          return (0, R.jsx)(S, {
            ref: O,
            ...j
          })
        }),
        nv = (0, X.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, s) => {
          const {
            isDisabled: a
          } = Qm(), i = (0, W.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, ce.clsx)(Gm({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), l = t ? J.DX : ue[e];
          return (0, R.jsx)(l, {
            ref: s,
            ...i
          })
        }),
        ov = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          icon: r,
          iconElement: n,
          label: o,
          testId: s,
          preventFocusOnPress: a = !0,
          ...i
        }, l) => {
          const d = (0, X.useRef)(null),
            c = (0, Y.UP)(d, l),
            {
              isDisabled: u
            } = Qm(),
            {
              buttonProps: f
            } = (0, Y.sL)((0, W.mergeProps)(i, {
              isDisabled: u,
              preventFocusOnPress: a
            }), d),
            p = (0, W.mergeProps)({
              className: (0, ce.clsx)("foundry_8oytzon foundry_8kowh41 foundry_1d5mo5m0", "foundry_8oytzo3"),
              "data-testid": s
            }, f),
            h = n || (r ? ue[r] : null),
            m = e ? J.DX : "button";
          return (0, R.jsxs)(m, {
            ref: c,
            ...p,
            children: [h && (0, R.jsx)(h, {
              label: o || "",
              size: "LG",
              className: "foundry_8oytzoo"
            }), (0, R.jsx)(J.xV, {
              children: t
            })]
          })
        }),
        sv = (0, X.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: s,
            inputRef: a,
            focusState: i,
            isDisabled: l
          } = Qm(), d = "password" === o, c = d ? e : t;
          (0, X.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const u = (0, W.mergeProps)({
            label: c,
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
          return (0, R.jsxs)(fl, {
            isDisabled: l,
            children: [(0, R.jsx)(pl, {
              children: (0, R.jsx)(ov, {
                ref: n,
                ...u
              })
            }), (0, R.jsxs)(hl, {
              side: "bottom",
              align: "end",
              children: [c, (0, R.jsx)(ml, {})]
            })]
          })
        }),
        av = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Qm(), i = (0, W.mergeProps)({
            className: Zm({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? J.DX : "div";
          return (0, R.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        iv = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Qm(), i = (0, W.mergeProps)({
            className: "foundry_8oytzo14",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), l = r ? J.DX : Hd;
          return (0, R.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        lv = Bd,
        dv = Zd;
      var cv = r(15815);

      function uv(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: s,
          onPressChange: a,
          onClick: i,
          isDisabled: l,
          ...d
        } = e, c = {};
        "a" !== r && (c = {
          role: "link",
          tabIndex: l ? void 0 : 0
        });
        let {
          focusableProps: u
        } = (0, yf.Wc)(e, t), {
          pressProps: f,
          isPressed: p
        } = (0, Td.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: s,
          onPressChange: a,
          onClick: i,
          isDisabled: l,
          ref: t
        }), h = (0, hf.$)(d, {
          labelable: !0
        }), m = (0, vf.v)(u, f), v = (0, cv.rd)(), y = (0, cv._h)(e);
        return {
          isPressed: p,
          linkProps: (0, vf.v)(h, y, {
            ...m,
            ...c,
            "aria-disabled": l || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              f.onClick?.(t), (0, cv.PJ)(t, v, e.href, e.routerOptions)
            }
          })
        }
      }

      function fv(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function pv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pv(Object(r), !0).forEach(function(t) {
            fv(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var vv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        yv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hv(hv({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) vv(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mv(e.variantClassNames, e => mv(e, e => e.split(" ")[0]))
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
      const gv = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        bv = (0, X.forwardRef)(({
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
            l = (0, W.mergeProps)({
              "data-testid": r,
              className: yv({
                size: t
              })
            }, i);
          return (0, R.jsx)("button", {
            ref: a,
            ...l,
            children: (0, R.jsx)(ue.X, {
              label: e,
              size: gv[t]
            })
          })
        });

      function wv(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Cv(e, t) {
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
          t % 2 ? Cv(Object(r), !0).forEach(function(t) {
            wv(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var jv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _v(_v({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) jv(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xv(e.variantClassNames, e => xv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ov = Pv({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sv = Pv({
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
        kv = Pv({
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
      const Rv = (0, X.createContext)(null);

      function Iv() {
        const e = (0, X.useContext)(Rv);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Dv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, s) => {
          const a = e ? J.DX : "div",
            i = (0, W.mergeProps)({
              className: kv({
                status: r,
                background: n
              })
            }, o);
          return (0, R.jsx)(Rv.Provider, {
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
        Nv = (0, X.forwardRef)(({
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
        Tv = (0, X.forwardRef)(({
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
        Ev = {
          danger: ue.CircleX,
          information: ue.Info,
          success: ue.CircleCheck,
          warning: ue.TriangleAlert
        },
        zv = (0, X.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Iv(), s = e ? J.DX : Ev[o], a = (0, W.mergeProps)({
            className: Sv({
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
        Lv = (0, X.forwardRef)(({
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
        Vv = (0, X.forwardRef)(({
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
        Mv = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, X.useRef)(null),
            a = (0, Y.UP)(s, o),
            i = e ? J.DX : "a",
            {
              linkProps: l,
              isPressed: d
            } = uv(n, s),
            c = (0, W.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, l);
          return (0, R.jsx)(i, {
            "data-pressed": d,
            "data-testid": r,
            ref: a,
            ...c,
            children: t
          })
        }),
        Av = (0, X.forwardRef)(({
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
        qv = (0, X.forwardRef)(({
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
        Fv = (0, X.forwardRef)((e, t) => {
          const {
            background: r
          } = Iv(), n = "none" !== r, o = (0, W.mergeProps)({
            className: Ov({
              hasBackground: n
            })
          }, e);
          return (0, R.jsx)(bv, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function Hv(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Bv(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : Hv(n) && Hv(o) ? Bv(n, o) : n === o
        }))
      }

      function Zv(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function Xv(e) {
        return "number" == typeof e
      }

      function Gv(e) {
        return "string" == typeof e
      }

      function Kv(e) {
        return "boolean" == typeof e
      }

      function Uv(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function Wv(e) {
        return Math.abs(e)
      }

      function $v(e) {
        return Math.sign(e)
      }

      function Qv(e, t) {
        return Wv(e - t)
      }

      function Yv(e) {
        return ny(e).map(Number)
      }

      function Jv(e) {
        return e[ey(e)]
      }

      function ey(e) {
        return Math.max(0, e.length - 1)
      }

      function ty(e, t) {
        return t === ey(e)
      }

      function ry(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function ny(e) {
        return Object.keys(e)
      }

      function oy(e, t) {
        return [e, t].reduce((e, t) => (ny(t).forEach(r => {
          const n = e[r],
            o = t[r],
            s = Uv(n) && Uv(o);
          e[r] = s ? oy(n, o) : o
        }), e), {})
      }

      function sy(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function ay() {
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

      function iy(e = 0, t = 0) {
        const r = Wv(e - t);

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

      function ly(e, t, r) {
        const {
          constrain: n
        } = iy(0, e), o = e + 1;
        let s = a(t);

        function a(e) {
          return r ? Wv((o + e) % o) : n(e)
        }

        function i() {
          return s
        }

        function l() {
          return ly(e, i(), r)
        }
        const d = {
          get: i,
          set: function(e) {
            return s = a(e), d
          },
          add: function(e) {
            return l().set(i() + e)
          },
          clone: l
        };
        return d
      }

      function dy(e, t, r, n, o, s, a, i, l, d, c, u, f, p, h, m, v, y, g) {
        const {
          cross: b,
          direction: w
        } = e, C = ["INPUT", "SELECT", "TEXTAREA"], _ = {
          passive: !1
        }, x = ay(), j = ay(), P = iy(50, 225).constrain(p.measure(20)), O = {
          mouse: 300,
          touch: 400
        }, S = {
          mouse: 500,
          touch: 600
        }, k = h ? 43 : 25;
        let R = !1,
          I = 0,
          D = 0,
          N = !1,
          T = !1,
          E = !1,
          z = !1;

        function L(e) {
          if (!sy(e, n) && e.touches.length >= 2) return V(e);
          const t = s.readPoint(e),
            r = s.readPoint(e, b),
            a = Qv(t, I),
            l = Qv(r, D);
          if (!T && !z) {
            if (!e.cancelable) return V(e);
            if (T = a > l, !T) return V(e)
          }
          const c = s.pointerMove(e);
          a > m && (E = !0), d.useFriction(.3).useDuration(.75), i.start(), o.add(w(c)), e.preventDefault()
        }

        function V(e) {
          const t = c.byDistance(0, !1).index !== u.get(),
            r = s.pointerUp(e) * (h ? S : O)[z ? "mouse" : "touch"],
            n = function(e, t) {
              const r = u.add(-1 * $v(e)),
                n = c.byDistance(e, !h).distance;
              return h || Wv(e) < P ? n : v && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(w(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (Wv(e) <= Wv(t)) return 0;
              const r = Qv(Wv(e), Wv(t));
              return Wv(r / e)
            }(r, n),
            a = k - 10 * o,
            i = y + o / 50;
          T = !1, N = !1, j.clear(), d.useDuration(a).useFriction(i), l.distance(n, !h), z = !1, f.emit("pointerUp")
        }

        function M(e) {
          E && (e.stopPropagation(), e.preventDefault(), E = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function i(i) {
              (Kv(g) || g(e, i)) && function(e) {
                const i = sy(e, n);
                z = i, E = h && i && !e.buttons && R, R = Qv(o.get(), a.get()) >= 2, i && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return C.includes(t)
                }(e.target) || (N = !0, s.pointerDown(e), d.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = z ? r : t;
                  j.add(e, "touchmove", L, _).add(e, "touchend", V).add(e, "mousemove", L, _).add(e, "mouseup", V)
                }(), I = s.readPoint(e), D = s.readPoint(e, b), f.emit("pointerDown"))
              }(i)
            }
            const l = t;
            x.add(l, "dragstart", e => e.preventDefault(), _).add(l, "touchmove", () => {}, _).add(l, "touchend", () => {}).add(l, "touchstart", i).add(l, "mousedown", i).add(l, "touchcancel", V).add(l, "contextmenu", V).add(l, "click", M, !0)
          },
          destroy: function() {
            x.clear(), j.clear()
          },
          pointerDown: function() {
            return N
          }
        }
      }

      function cy(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function s(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (sy(r, t) ? r : r.touches[0])[o]
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
              l = t / a;
            return a && !i && Wv(l) > .1 ? l : 0
          },
          readPoint: s
        }
      }

      function uy(e, t, r, n, o, s, a) {
        const i = [e].concat(n);
        let l, d, c = [],
          u = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            s && (d = f(e), c = n.map(f), l = new ResizeObserver(r => {
              (Kv(s) || s(o, r)) && function(r) {
                for (const s of r) {
                  if (u) return;
                  const r = s.target === e,
                    a = n.indexOf(s.target),
                    i = r ? d : c[a];
                  if (Wv(f(r ? e : n[a]) - i) >= .5) {
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

      function fy(e, t, r, n, o) {
        const s = o.measure(10),
          a = o.measure(50),
          i = iy(.1, .99);
        let l = !1;

        function d() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: d,
          constrain: function(o) {
            if (!d()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = Wv(e[l] - t.get()),
              u = r.get() - t.get(),
              f = i.constrain(c / a);
            r.subtract(u * f), !o && Wv(u) < s && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function py(e, t, r, n) {
        const o = t.min + .1,
          s = t.max + .1,
          {
            reachedMin: a,
            reachedMax: i
          } = iy(o, s),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? i(r.get()) : -1 === e && a(r.get())
                }(t)) return;
              const o = e * (-1 * t);
              n.forEach(e => e.add(o))
            }
          };
        return l
      }

      function hy(e) {
        let t = e;

        function r(e) {
          return Xv(e) ? e : e.get()
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

      function my(e, t) {
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

      function vy(e, t, r, n, o, s, a, i, l) {
        const d = Yv(o),
          c = Yv(o).reverse(),
          u = function() {
            const e = a[0];
            return h(p(c, e), r, !1)
          }().concat(function() {
            const e = t - a[0] - 1;
            return h(p(d, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function p(e, t) {
          return e.reduce((e, r) => f(e, t) > 0 ? e.concat([r]) : e, [])
        }

        function h(o, a, d) {
          const c = function(e) {
            return s.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(a);
          return o.map(t => {
            const n = d ? 0 : -r,
              o = d ? r : 0,
              s = d ? "end" : "start",
              a = c[t][s];
            return {
              index: t,
              loopPoint: a,
              slideLocation: hy(-1),
              translate: my(e, l[t]),
              target: () => i.get() > a ? n : o
            }
          })
        }
        const m = {
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
        return m
      }

      function yy(e, t, r) {
        let n, o = !1;
        return {
          init: function(s) {
            r && (n = new MutationObserver(e => {
              o || (Kv(r) || r(s, e)) && function(e) {
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

      function gy(e, t, r, n, o, s, a) {
        const {
          align: i,
          axis: l,
          direction: d,
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
          watchDrag: C,
          watchFocus: _
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
        }(l, d), S = O.measureSize(j), k = function(e) {
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
              return Gv(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(i, S), I = !u && !!g, D = u || !!g, {
          slideSizes: N,
          slideSizesWithGaps: T,
          startGap: E,
          endGap: z
        } = function(e, t, r, n, o, s) {
          const {
            measureSize: a,
            startEdge: i,
            endEdge: l
          } = e, d = r[0] && o, c = function() {
            if (!d) return 0;
            const e = r[0];
            return Wv(t[i] - e[i])
          }(), u = function() {
            if (!d) return 0;
            const e = s.getComputedStyle(Jv(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(a), p = r.map((e, t, r) => {
            const n = !t,
              o = ty(r, t);
            return n ? f[t] + c : o ? f[t] + u : r[t + 1][i] - e[i]
          }).map(Wv);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: c,
            endGap: u
          }
        }(O, j, P, r, D, o), L = function(e, t, r, n, o, s, a, i, l) {
          const {
            startEdge: d,
            endEdge: c,
            direction: u
          } = e, f = Xv(r), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return Yv(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? Yv(e).reduce((r, f, p) => {
                  const h = Jv(r) || 0,
                    m = 0 === h,
                    v = f === ey(e),
                    y = o[d] - s[h][d],
                    g = o[d] - s[f][c],
                    b = !n && m ? u(a) : 0,
                    w = Wv(g - (!n && v ? u(i) : 0) - (y + b));
                  return p && w > t + l && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(O, S, v, u, j, P, E, z, 2), {
          snaps: V,
          snapsAligned: M
        } = function(e, t, r, n, o) {
          const {
            startEdge: s,
            endEdge: a
          } = e, {
            groupSlides: i
          } = o, l = i(n).map(e => Jv(e)[a] - e[0][s]).map(Wv).map(t.measure), d = n.map(e => r[s] - e[s]).map(e => -Wv(e)), c = i(d).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: d,
            snapsAligned: c
          }
        }(O, R, j, P, L), A = -Jv(V) + Jv(T), {
          snapsContained: q,
          scrollContainLimit: F
        } = function(e, t, r, n) {
          const o = iy(-t + e, 0),
            s = r.map((e, t) => {
              const {
                min: n,
                max: s
              } = o, a = o.constrain(e), l = !t, d = ty(r, t);
              return l ? s : d || i(n, a) ? n : i(s, a) ? s : a
            }).map(e => parseFloat(e.toFixed(3))),
            a = function() {
              const e = s[0],
                t = Jv(s);
              return iy(s.lastIndexOf(e), s.indexOf(t) + 1)
            }();

          function i(e, t) {
            return Qv(e, t) <= 1
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
        }(S, A, M, g), H = I ? q : M, {
          limit: B
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: iy(r ? n - e : Jv(t), n)
          }
        }(A, H, u), Z = ly(ey(H), c, u), X = Z.clone(), G = Yv(r), K = function(e, t, r, n) {
          const o = ay(),
            s = 1e3 / 60;
          let a = null,
            i = 0,
            l = 0;

          function d(e) {
            if (!l) return;
            a || (a = e, r(), r());
            const o = e - a;
            for (a = e, i += o; i >= s;) r(), i -= s;
            n(i / s), l && (l = t.requestAnimationFrame(d))
          }

          function c() {
            t.cancelAnimationFrame(l), a = null, i = 0, l = 0
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
          scrollLooper: s,
          slideLooper: a,
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
            m = u ? p : p && h,
            v = m && !i.pointerDown();
          v && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), u && (s.loop(e.direction()), a.loop()), t.to(n.get()), v && d.emit("settle"), m || d.emit("scroll")
        })(ie, e)), U = H[Z.get()], W = hy(U), $ = hy(U), Q = hy(U), Y = hy(U), J = function(e, t, r, n, o) {
          let s = 0,
            a = 0,
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
              return i ? (r.set(e), s += t / i, s *= l, d += s, e.add(s), o = d - c) : (s = 0, r.set(n), e.set(n), o = t), a = $v(o), c = d, p
            },
            settled: function() {
              return Wv(n.get() - t.get()) < .001
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

          function l(e) {
            return e.concat().sort((e, t) => Wv(e) - Wv(t))[0]
          }

          function d(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const s = o.filter(e => $v(e) === n);
            return s.length ? l(s) : Jv(o) - r
          }
          return {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: c,
                  distance: u
                } = function(r) {
                  const n = e ? a(r) : i(r),
                    o = t.map((e, t) => ({
                      diff: d(e - n, 0),
                      index: t
                    })).sort((e, t) => Wv(e.diff) - Wv(t.diff)),
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
        }(u, H, A, B, Y), te = function(e, t, r, n, o, s, a) {
          function i(o) {
            const i = o.distance,
              l = o.index !== t.get();
            s.add(i), i && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (r.set(t.get()), t.set(o.index), a.emit("select"))
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
        }(B), ne = ay(), oe = function(e, t, r, n) {
          const o = {};
          let s, a = null,
            i = null,
            l = !1;
          return {
            init: function() {
              s = new IntersectionObserver(e => {
                l || (e.forEach(e => {
                  const r = t.indexOf(e.target);
                  o[r] = e
                }), a = null, i = null, r.emit("slidesInView"))
              }, {
                root: e.parentElement,
                threshold: n
              }), t.forEach(e => s.observe(e))
            },
            destroy: function() {
              s && s.disconnect(), l = !0
            },
            get: function(e = !0) {
              if (e && a) return a;
              if (!e && i) return i;
              const t = function(e) {
                return ny(o).reduce((t, r) => {
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
            max: l
          } = n, d = function() {
            const n = a(s),
              o = !e || "keepSnaps" === t;
            return 1 === r.length ? [s] : o ? n : n.slice(i, l).map((e, t, r) => {
              const n = !t,
                o = ty(r, t);
              return n ? ry(Jv(r[0]) + 1) : o ? ry(ey(s) - Jv(r)[0] + 1, Jv(r)[0]) : e
            })
          }();
          return {
            slideRegistry: d
          }
        }(I, g, H, F, L, G), ae = function(e, t, r, n, o, s, a, i) {
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
              i && (s.add(document, "keydown", c, !1), t.forEach((t, c) => {
                s.add(t, "focus", t => {
                  (Kv(i) || i(u, t)) && function(t) {
                    if ((new Date).getTime() - d > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const s = r.findIndex(e => e.includes(t));
                    Xv(s) && (o.useDuration(0), n.index(s, 0), a.emit("slideFocus"))
                  }(c)
                }, l)
              }))
            }
          }
        }(e, r, se, te, J, ne, a, _), ie = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: a,
          containerRect: j,
          slideRects: P,
          animation: K,
          axis: O,
          dragHandler: dy(O, e, n, o, Y, cy(O, o), W, K, te, J, ee, Z, a, k, p, h, y, .68, C),
          eventStore: ne,
          percentOfView: k,
          index: Z,
          indexPrevious: X,
          limit: B,
          location: W,
          offsetLocation: Q,
          previousLocation: $,
          options: s,
          resizeHandler: uy(t, a, o, r, O, b, x),
          scrollBody: J,
          scrollBounds: fy(B, Q, Y, J, k),
          scrollLooper: py(A, B, Q, [W, Q, $, Y]),
          scrollProgress: re,
          scrollSnapList: H.map(re.get),
          scrollSnaps: H,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: vy(O, S, A, N, T, V, H, Q, r),
          slideFocus: ae,
          slidesHandler: yy(t, a, w),
          slidesInView: oe,
          slideIndexes: G,
          slideRegistry: se,
          slidesToScroll: L,
          target: Y,
          translate: my(O, t)
        };
        return ie
      }
      const by = {
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

      function wy(e) {
        function t(e, t) {
          return oy(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = ny(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => ny(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function Cy(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          s = wy(o),
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
          i = ay(),
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
          } = s,
          {
            on: f,
            off: p,
            emit: h
          } = l,
          m = O;
        let v, y, g, b, w = !1,
          C = d(by, Cy.globalOptions),
          _ = d(C),
          x = [];

        function j(t) {
          const r = gy(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? j(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function P(t, r) {
          w || (C = d(C, t), _ = c(C), x = r || x, function() {
            const {
              container: t,
              slides: r
            } = _, n = Gv(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = Gv(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = j(_), u([C, ...x.map(({
            options: e
          }) => e)]).forEach(e => i.add(e, "change", O)), _.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(I), v.eventHandler.init(I), v.resizeHandler.init(I), v.slidesHandler.init(I), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(I), y = a.init(I, x)))
        }

        function O(e, t) {
          const r = R();
          S(), P(d({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function S() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), a.destroy(), i.clear()
        }

        function k(e, t, r) {
          _.active && !w && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : _.duration), v.scrollTo.index(e, r || 0))
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
            w || (w = !0, i.clear(), S(), l.emit("destroy"), l.clear())
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
        return P(t, r), setTimeout(() => l.emit("init"), 0), I
      }

      function _y(e = {}, t = []) {
        const r = (0, X.useRef)(e),
          n = (0, X.useRef)(t),
          [o, s] = (0, X.useState)(),
          [a, i] = (0, X.useState)(),
          l = (0, X.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, X.useEffect)(() => {
          Bv(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, X.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = Zv(e),
              n = Zv(t);
            return r.every((e, t) => Bv(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, X.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            Cy.globalOptions = _y.globalOptions;
            const e = Cy(a, r.current, n.current);
            return s(e), () => e.destroy()
          }
          s(void 0)
        }, [a, s]), [i, o]
      }

      function xy(e = {}) {
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
      Cy.globalOptions = void 0, _y.globalOptions = void 0, xy.globalOptions = void 0;
      const jy = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function Py(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function Oy(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Sy(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function ky(e = {}) {
        let t, r, n, o, s = [],
          a = [];
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
          ("pointerDown" === t ? Sy : Oy)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            s = e.map(e => o[e]);
          return n.forEach(e => Oy(e, r)), s.forEach(e => Sy(e, r)), e
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
            } = a, v = f(jy, ky.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, w = !!g;
            t.loop && b && (c.loop = Py(t.loop), Sy(n, c.loop)), t.draggable && w && (c.draggable = Py(t.draggable), Sy(n, c.draggable)), t.dragging && (c.dragging = Py(t.dragging), l.forEach(e => r.on(e, u))), t.snapped && (c.snapped = Py(t.snapped), i.forEach(e => r.on(e, p)), p()), t.inView && (c.inView = Py(t.inView), d.forEach(e => r.on(e, h)), h())
          },
          destroy: function() {
            l.forEach(e => r.off(e, u)), i.forEach(e => r.off(e, p)), d.forEach(e => r.off(e, h)), Oy(n, c.loop), Oy(n, c.draggable), Oy(n, c.dragging), f([], s, c.snapped), f([], a, c.inView), Object.keys(c).forEach(e => {
              c[e] = []
            })
          }
        };
        return m
      }
      ky.globalOptions = void 0;

      function Ry(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Iy(e, t) {
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
          t % 2 ? Iy(Object(r), !0).forEach(function(t) {
            Ry(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ny(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ty = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ey = "foundry_qmpv6yv",
        zy = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Dy(Dy({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Ty(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ny(e.variantClassNames, e => Ny(e, e => e.split(" ")[0]))
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
      const Ly = (0, X.createContext)(null);

      function Vy() {
        const e = (0, X.useContext)(Ly);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const My = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: s,
          align: a = "left",
          ...i
        }, l) => {
          const d = (({
              loopPagination: e = !0
            }) => {
              const t = (0, Y.rl)(),
                r = (0, Y.jt)(),
                [n, o] = (0, X.useState)([]),
                s = n.length,
                [a, i] = (0, X.useState)(0),
                [l, d] = _y({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && s > 1
                }, [xy(), ky()]),
                c = (0, X.useRef)(0),
                u = (0, X.useRef)(!1),
                f = n[a],
                p = (0, X.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [d]),
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
                      const l = (d = 1 - Math.abs(i * c.current), Math.min(Math.max(d, 0), 1)).toString();
                      var d;
                      e.slideNodes()[a].style.opacity = l
                    })
                  })
                }, []);
              return (0, X.useEffect)(() => {
                d && (h(d), m(d), d.on("reInit", h).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [d, m]), (0, X.useEffect)(() => {
                d && (p(d), d.on("select", p).on("reInit", p))
              }, [d, p]), {
                setAlerts: o,
                alerts: n,
                numAlerts: s,
                emblaRef: l,
                emblaApi: d,
                prevAlert: () => d?.scrollPrev(r),
                nextAlert: () => d?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: a,
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
              className: zy(c)
            }, h, i),
            v = e ? J.DX : "div";
          return (0, R.jsx)(Ly.Provider, {
            value: d,
            children: (0, R.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": u,
              ...m,
              children: t
            })
          })
        }),
        Ay = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        qy = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Vy();
          if (!e && !n || !n?.status) return null;
          const o = e || Ay[n.status],
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
        Fy = (0, X.forwardRef)(({
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
        Hy = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...s
        }, a) => {
          const i = e ? J.DX : "div",
            l = (0, W.mergeProps)({
              className: "foundry_qmpv6yo"
            }, s);
          return (0, R.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...l
          })
        }),
        By = (0, X.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: s,
            emblaApi: a
          } = Vy(), i = (0, W.mergeProps)({
            className: "foundry_qmpv6ym"
          }, r), l = (0, Y.UP)(s, n), d = X.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, X.useEffect)(() => {
            d && o(d)
          }, []), a?.on("slidesChanged", () => {
            d && o(d)
          }), (0, R.jsx)("div", {
            ref: l,
            "data-testid": e,
            ...i,
            children: (0, R.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Zy = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, X.useRef)(null),
            a = (0, Y.UP)(s, o),
            i = e ? J.DX : "a",
            {
              linkProps: l,
              isPressed: d
            } = uv(n, s),
            c = (0, W.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, R.jsx)(i, {
            "data-pressed": d,
            "data-testid": r,
            ref: a,
            ...l,
            ...c,
            children: t
          })
        }),
        Xy = (0, X.forwardRef)((e, t) => {
          const r = (0, W.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, R.jsx)(bv, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Gy = (0, X.forwardRef)(({
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
        Ky = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Vy(), s = (0, W.mergeProps)({
            className: Ey
          }, t);
          return (0, R.jsx)(Ne, {
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
        Uy = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Vy(), s = (0, W.mergeProps)({
            className: Ey
          }, t);
          return (0, R.jsx)(Ne, {
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
        Wy = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Vy(), s = (0, W.mergeProps)({
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

      function $y(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Qy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Yy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qy(Object(r), !0).forEach(function(t) {
            $y(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Jy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var eg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Yy(Yy({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) eg(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jy(e.variantClassNames, e => Jy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rg = tg({
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
        ng = tg({
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
        og = tg({
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
      const sg = (0, X.createContext)(null);

      function ag() {
        const e = (0, X.useContext)(sg);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const ig = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: s,
          hasBorder: a,
          isDisabled: i,
          ...l
        }, d) => {
          const c = {
              size: n,
              background: o,
              color: s,
              hasBorder: a,
              isDisabled: i
            },
            u = (0, W.mergeProps)({
              className: ng(c)
            }, l),
            f = e ? J.DX : "div";
          return (0, R.jsx)(sg.Provider, {
            value: c,
            children: (0, R.jsx)(f, {
              ref: d,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        lg = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = ag(), a = e ? J.DX : "div", i = (0, W.mergeProps)({
            className: og({
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
        dg = (0, X.forwardRef)(({
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
        cg = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = ag(), s = (0, W.mergeProps)({
            className: rg({
              background: n
            })
          }, t);
          return (0, R.jsx)(Ne, {
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
      var ug = Object.defineProperty,
        fg = (e, t) => ug(e, "name", {
          value: t,
          configurable: !0
        }),
        pg = "ToastProvider",
        [hg, mg, vg] = (0, Cl.N)("Toast"),
        [yg, gg] = (0, mi.A)("Toast", [vg]),
        [bg, wg] = yg(pg),
        Cg = fg(e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            announcerContainer: a,
            children: i
          } = e, [l, d] = X.useState(null), [c, u] = X.useState(0), f = X.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${pg}\`. Expected non-empty \`string\`.`), (0, R.jsx)(hg.Provider, {
            scope: t,
            children: (0, R.jsx)(bg, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: s,
              toastCount: c,
              viewport: l,
              onViewportChange: d,
              onToastAdd: X.useCallback(() => u(e => e + 1), []),
              onToastRemove: X.useCallback(() => u(e => e - 1), []),
              isClosePausedRef: f,
              announcerContainer: a,
              children: i
            })
          })
        }, "ToastProvider"),
        _g = ["F8"],
        xg = "toast.viewportPause",
        jg = "toast.viewportResume",
        Pg = X.forwardRef(fg(function(e, t) {
          const {
            __scopeToast: r,
            hotkey: n = _g,
            label: o = "Notifications ({hotkey})",
            ...s
          } = e, a = wg("ToastViewport", r), i = mg(r), l = X.useRef(null), d = X.useRef(null), c = X.useRef(null), u = X.useRef(null), f = (0, hi.s)(t, u, a.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = a.toastCount > 0;
          X.useEffect(() => {
            const e = fg(e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            }, "handleKeyDown");
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), X.useEffect(() => {
            const e = l.current,
              t = u.current;
            if (h && e && t) {
              const r = fg(() => {
                  if (!a.isClosePausedRef.current) {
                    const e = new CustomEvent(xg);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !0
                  }
                }, "handlePause"),
                n = fg(() => {
                  if (a.isClosePausedRef.current) {
                    const e = new CustomEvent(jg);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !1
                  }
                }, "handleResume"),
                o = fg(t => {
                  !e.contains(t.relatedTarget) && n()
                }, "handleFocusOutResume"),
                s = fg(() => {
                  e.contains(document.activeElement) || n()
                }, "handlePointerLeaveResume");
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
                n = [r, ...Hg(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return X.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = fg(t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void d.current?.focus();
                  const o = m({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    s = o.findIndex(e => e === r);
                  Bg(o.slice(s + 1)) ? t.preventDefault() : n ? d.current?.focus() : c.current?.focus()
                }
              }, "handleKeyDown");
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, m]), (0, R.jsxs)(vi.lg, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, R.jsx)(Og, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                Bg(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, R.jsx)(hg.Slot, {
              scope: r,
              children: (0, R.jsx)(Ci.sG.ol, {
                tabIndex: -1,
                ...s,
                ref: f
              })
            }), h && (0, R.jsx)(Og, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Bg(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        }, "ToastViewport")),
        Og = X.forwardRef(fg(function(e, t) {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, s = wg("ToastFocusProxy", r);
          return (0, R.jsx)(Pi.VisuallyHidden, {
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
        }, "ToastFocusProxy")),
        Sg = "Toast",
        kg = X.forwardRef(fg(function(e, t) {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            ...a
          } = e, [i, l] = (0, xi.useControllableState)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: s,
            caller: Sg
          });
          return (0, R.jsx)(wi.C, {
            present: r || i,
            children: (0, R.jsx)(Dg, {
              open: i,
              ...a,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Xd.c)(e.onPause),
              onResume: (0, Xd.c)(e.onResume),
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
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        }, "Toast")),
        [Rg, Ig] = yg(Sg, {
          onClose() {}
        }),
        Dg = X.forwardRef(fg(function(e, t) {
          const {
            __scopeToast: r,
            type: n = "foreground",
            duration: o,
            open: s,
            onClose: a,
            onEscapeKeyDown: i,
            onPause: l,
            onResume: d,
            onSwipeStart: c,
            onSwipeMove: u,
            onSwipeCancel: f,
            onSwipeEnd: p,
            ...h
          } = e, m = wg(Sg, r), v = mg(r), [y, g] = X.useState(null), b = (0, hi.s)(t, g), w = X.useRef(null), C = X.useRef(null), _ = o || m.duration, x = X.useRef(0), j = X.useRef(_), P = X.useRef(0), {
            onToastAdd: O,
            onToastRemove: S
          } = m, k = (0, Xd.c)(() => {
            const e = y?.contains(document.activeElement);
            e && m.viewport?.focus(), a()
          }), I = X.useCallback(e => {
            e && e !== 1 / 0 && (window.clearTimeout(P.current), x.current = (new Date).getTime(), P.current = window.setTimeout(k, e))
          }, [k]);
          X.useEffect(() => {
            const e = m.viewport;
            if (e) {
              const t = fg(() => {
                  I(j.current), d?.()
                }, "handleResume"),
                r = fg(() => {
                  const e = (new Date).getTime() - x.current;
                  j.current = j.current - e, window.clearTimeout(P.current), l?.()
                }, "handlePause");
              return e.addEventListener(xg, r), e.addEventListener(jg, t), () => {
                e.removeEventListener(xg, r), e.removeEventListener(jg, t)
              }
            }
          }, [m.viewport, _, l, d, I]), X.useEffect(() => {
            s && !m.isClosePausedRef.current && I(_)
          }, [s, _, m.isClosePausedRef, I]), X.useEffect(() => () => {
            window.clearTimeout(P.current)
          }, []), X.useEffect(() => (O(), () => S()), [O, S]);
          const D = X.useMemo(() => y ? Vg(y) : null, [y]);
          return m.viewport ? (0, R.jsxs)(R.Fragment, {
            children: [D && (0, R.jsx)(Ng, {
              __scopeToast: r,
              role: "status",
              "aria-live": "foreground" === n ? "assertive" : "polite",
              children: D
            }), (0, R.jsx)(Rg, {
              scope: r,
              onClose: k,
              children: Ya.createPortal((0, R.jsx)(hg.ItemSlot, {
                scope: r,
                children: (0, R.jsx)(vi.bL, {
                  asChild: !0,
                  onEscapeKeyDown: (0, pi.mK)(i, e => {
                    const t = v().some(t => t.ref.current?.contains(e.target));
                    t || k()
                  }),
                  children: (0, R.jsx)(Ci.sG.li, {
                    tabIndex: 0,
                    "data-state": s ? "open" : "closed",
                    "data-swipe-direction": m.swipeDirection,
                    ...h,
                    ref: b,
                    style: {
                      userSelect: "none",
                      touchAction: "none",
                      ...e.style
                    },
                    onKeyDown: (0, pi.mK)(e.onKeyDown, e => {
                      "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || k())
                    }),
                    onPointerDown: (0, pi.mK)(e.onPointerDown, e => {
                      0 === e.button && (w.current = {
                        x: e.clientX,
                        y: e.clientY
                      })
                    }),
                    onPointerMove: (0, pi.mK)(e.onPointerMove, e => {
                      if (!w.current) return;
                      const t = e.clientX - w.current.x,
                        r = e.clientY - w.current.y,
                        n = Boolean(C.current),
                        o = ["left", "right"].includes(m.swipeDirection),
                        s = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                        a = o ? s(0, t) : 0,
                        i = o ? 0 : s(0, r),
                        l = "touch" === e.pointerType ? 10 : 2,
                        d = {
                          x: a,
                          y: i
                        },
                        f = {
                          originalEvent: e,
                          delta: d
                        };
                      n ? (C.current = d, Mg("toast.swipeMove", u, f, {
                        discrete: !1
                      })) : Ag(d, m.swipeDirection, l) ? (C.current = d, Mg("toast.swipeStart", c, f, {
                        discrete: !1
                      }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (w.current = null)
                    }),
                    onPointerUp: (0, pi.mK)(e.onPointerUp, e => {
                      const t = C.current,
                        r = e.target;
                      if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), C.current = null, w.current = null, t) {
                        const r = e.currentTarget,
                          n = {
                            originalEvent: e,
                            delta: t
                          };
                        Ag(t, m.swipeDirection, m.swipeThreshold) ? Mg("toast.swipeEnd", p, n, {
                          discrete: !0
                        }) : Mg("toast.swipeCancel", f, n, {
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
        }, "ToastImpl")),
        Ng = fg(e => {
          const {
            __scopeToast: t,
            children: r,
            ...n
          } = e, o = wg(Sg, t), [s, a] = X.useState(!1), [i, l] = X.useState(!1);
          return qg(() => a(!0)), X.useEffect(() => {
            const e = window.setTimeout(() => l(!0), 1e3);
            return () => window.clearTimeout(e)
          }, []), i ? null : (0, R.jsx)(bi.Portal, {
            asChild: !0,
            container: o.announcerContainer || void 0,
            children: (0, R.jsx)(Pi.VisuallyHidden, {
              ...n,
              children: s && (0, R.jsxs)(R.Fragment, {
                children: [o.label, " ", r]
              })
            })
          })
        }, "ToastAnnounce"),
        Tg = X.forwardRef(fg(function(e, t) {
          const {
            __scopeToast: r,
            ...n
          } = e;
          return (0, R.jsx)(Ci.sG.div, {
            ...n,
            ref: t
          })
        }, "ToastDescription")),
        Eg = X.forwardRef(fg(function(e, t) {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, R.jsx)(Lg, {
            altText: r,
            asChild: !0,
            children: (0, R.jsx)(zg, {
              ...n,
              ref: t
            })
          }) : (console.error("Invalid prop `altText` supplied to `ToastAction`. Expected non-empty `string`."), null)
        }, "ToastAction")),
        zg = X.forwardRef(fg(function(e, t) {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Ig("ToastClose", r);
          return (0, R.jsx)(Lg, {
            asChild: !0,
            children: (0, R.jsx)(Ci.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, pi.mK)(e.onClick, o.onClose)
            })
          })
        }, "ToastClose")),
        Lg = X.forwardRef(fg(function(e, t) {
          const {
            __scopeToast: r,
            altText: n,
            ...o
          } = e;
          return (0, R.jsx)(Ci.sG.div, {
            "data-radix-toast-announce-exclude": "",
            "data-radix-toast-announce-alt": n || void 0,
            ...o,
            ref: t
          })
        }, "ToastAnnounceExclude"));

      function Vg(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), Fg(e)) {
            const r = e.ariaHidden || e.hidden || "none" === e.style.display,
              n = "" === e.dataset.radixToastAnnounceExclude;
            if (!r)
              if (n) {
                const r = e.dataset.radixToastAnnounceAlt;
                r && t.push(r)
              } else t.push(...Vg(e))
          }
        }), t
      }

      function Mg(e, t, r, {
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
        }), n ? (0, Ci.hO)(o, s) : o.dispatchEvent(s)
      }
      fg(Vg, "getAnnounceTextContent"), fg(Mg, "handleAndDispatchCustomEvent");
      var Ag = fg((e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          s = n > o;
        return "left" === t || "right" === t ? s && n > r : !s && o > r
      }, "isDeltaInDirection");

      function qg(e = () => {}) {
        const t = (0, Xd.c)(e);
        (0, ji.N)(() => {
          let e = 0,
            r = 0;
          return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
          }
        }, [t])
      }

      function Fg(e) {
        return e.nodeType === e.ELEMENT_NODE
      }

      function Hg(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: fg(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function Bg(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      fg(qg, "useNextFrame"), fg(Fg, "isHTMLElement"), fg(Hg, "getTabbableCandidates"), fg(Bg, "focusFirst");
      var Zg = Cg,
        Xg = Pg,
        Gg = kg,
        Kg = Tg,
        Ug = Eg,
        Wg = zg;

      function $g(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Qg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Yg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qg(Object(r), !0).forEach(function(t) {
            $g(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qg(Object(r)).forEach(function(t) {
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
              n = Yg(Yg({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) eb(d, n, e.defaultVariants) && (r += " " + c);
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
        nb = tb({
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
        ob = tb({
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
      const sb = ({
          testId: e,
          ...t
        }) => (0, R.jsx)(Zg, {
          "data-testid": e,
          ...t
        }),
        ab = (0, X.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
            className: ob({
              position: r
            })
          }, n);
          return (0, R.jsx)(Xg, {
            ref: o,
            "data-testid": t,
            ...s,
            children: e
          })
        }),
        ib = (0, X.createContext)(null);

      function lb() {
        const e = (0, X.useContext)(ib);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const db = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, s) => {
          const a = e ? J.DX : Gg,
            i = (0, W.mergeProps)({
              className: nb({
                appearance: n
              })
            }, o);
          return (0, R.jsx)(ib.Provider, {
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
        cb = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? J.DX : Kg,
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
        ub = {
          danger: ue.CircleX,
          information: ue.Info,
          success: ue.CircleCheck,
          warning: ue.TriangleAlert,
          avocado: ue.CircleCheck
        },
        fb = (0, X.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = lb(), o = e ? J.DX : ub[n], s = (0, W.mergeProps)({
            className: rb({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, R.jsx)(o, {
            ref: r,
            ...s
          })
        }),
        pb = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, R.jsx)(Ug, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, R.jsx)(J.DX, {
              children: t
            }) : (0, R.jsx)(_e, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        hb = (0, X.forwardRef)(({
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
          return (0, R.jsx)(Wg, {
            ref: s,
            "data-testid": r,
            ...a,
            children: e ? (0, R.jsx)(J.DX, {
              children: t
            }) : (0, R.jsx)(bv, {
              size: "SM",
              label: n
            })
          })
        });

      function mb(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function vb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vb(Object(r), !0).forEach(function(t) {
            mb(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yb(yb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) bb(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gb(e.variantClassNames, e => gb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Cb = wb({
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
        _b = wb({
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
        xb = wb({
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

      function jb() {
        const e = (0, X.useContext)(Pb);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Pb = (0, X.createContext)(null),
        Ob = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, s) => {
          const a = (0, W.mergeProps)({
              className: xb({
                size: n
              })
            }, o),
            i = r ? J.DX : "ol";
          return (0, R.jsx)(Pb.Provider, {
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
        Sb = (0, X.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, X.useRef)(null),
            {
              size: i
            } = jb(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: r,
                isDisabled: n,
                "aria-current": o,
                elementType: s = "a",
                ...a
              } = e, {
                linkProps: i
              } = uv({
                isDisabled: n || r,
                elementType: s,
                ...a
              }, t), l = {};
              return /^h[1-6]$/.test(s) || (l = i), r && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": n,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, a),
            d = r ? J.DX : "a",
            c = (0, W.mergeProps)({
              className: (0, ce.clsx)(Cb({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, R.jsx)("li", {
            className: _b({
              size: i
            }),
            ref: s,
            children: (0, R.jsx)(d, {
              ref: a,
              ...c,
              children: t
            })
          })
        }),
        kb = (0, X.forwardRef)(({
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
        Rb = (0, X.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, s) => {
          const [a, i] = (0, X.useState)(r), {
            size: l
          } = jb(), d = (0, W.mergeProps)({
            className: _b({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, R.jsx)("li", {
            ref: s,
            ...d,
            children: (0, R.jsxs)(tu, {
              open: a,
              onOpenChange: () => i(!a),
              children: [(0, R.jsx)(ru, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, R.jsx)(iu, {
                children: (0, R.jsx)(du, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, R.jsx)(Cu, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Ib = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = t ? J.DX : Su,
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

      function Db(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Nb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Tb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nb(Object(r), !0).forEach(function(t) {
            Db(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Eb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var zb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Lb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Tb(Tb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) zb(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Eb(e.variantClassNames, e => Eb(e, e => e.split(" ")[0]))
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
      const Vb = (0, X.createContext)(null);

      function Mb() {
        const e = (0, X.useContext)(Vb);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Ab = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...s
        }, a) => {
          const i = e ? J.DX : "div",
            l = (0, W.mergeProps)({
              className: Lb({
                appearance: r,
                type: o,
                size: n
              })
            }, s);
          return (0, R.jsx)(Vb.Provider, {
            value: {
              type: o
            },
            children: (0, R.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...l
            })
          })
        }),
        qb = (0, X.forwardRef)(({
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
        Fb = (0, X.forwardRef)(({
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
        Hb = () => {
          const e = (0, Y.Ub)(W.breakpoints.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Bb = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Zb(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Xb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Gb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xb(Object(r), !0).forEach(function(t) {
            Zb(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xb(Object(r)).forEach(function(t) {
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
      var Ub = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gb(Gb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Ub(d, n, e.defaultVariants) && (r += " " + c);
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
      const $b = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, R.jsx)(Ic, {
            ref: r,
            ...n
          })
        }),
        Qb = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, R.jsx)(Dc, {
            ref: r,
            ...n
          })
        }),
        Yb = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, R.jsx)(Nc, {
            ref: r,
            ...n
          })
        }),
        Jb = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Y.rl)(),
            o = (0, W.mergeProps)({
              "data-testid": e,
              className: Wb({
                isTouchDevice: n
              })
            }, t);
          return (0, R.jsx)(Tc, {
            ref: r,
            ...o
          })
        }),
        ew = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e
          }, t);
          return (0, R.jsx)(Ec, {
            ref: r,
            ...n
          })
        });

      function tw(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function rw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function nw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rw(Object(r), !0).forEach(function(t) {
            tw(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ow(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        aw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = nw(nw({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) sw(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ow(e.variantClassNames, e => ow(e, e => e.split(" ")[0]))
            }
          }, t
        },
        iw = aw({
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
        lw = aw({
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
      const dw = (0, X.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, X.createRef)(),
          dialogSpringRef: Ba(),
          overlaySpringRef: Ba()
        }),
        cw = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: a,
          ...i
        }) => {
          const [l, d] = (0, Y.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, Y.ZC)(l);
          return (0, R.jsx)(dw.Provider, {
            value: {
              isOpen: l,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: d,
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
            children: (0, R.jsx)(uw, {
              ...i
            })
          })
        },
        uw = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, X.useContext)(dw), n = (0, W.mergeProps)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, R.jsx)(dd.Root, {
            ...n
          })
        },
        fw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, X.useContext)(dw), s = (0, Y.UP)(o, r), a = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, R.jsx)(dd.Trigger, {
            ...a,
            ref: s
          })
        }),
        pw = e => (0, R.jsx)(dd.Portal, {
          forceMount: !0,
          ...e
        }),
        hw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: s
          } = (0, X.useContext)(dw), a = Bb(), i = (0, Y.jt)(), l = Ga(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: ra.stiff,
            immediate: i || s
          }), d = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = fi(dd.Overlay);
          return (0, X.useEffect)(() => {
            o.start()
          }, [n]), l((e, t) => t ? (0, R.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...d,
            style: e
          }) : null)
        }),
        mw = (0, X.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, s) => {
          const {
            isOpen: a,
            setIsOpen: i,
            openImmediately: l,
            contentId: d,
            triggerRef: c,
            onOpenTransitionStart: u,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: h,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = (0, X.useContext)(dw), y = (0, Y.rl)(), g = (0, Y.jt)(), b = (0, X.useRef)(null), w = Hb(), {
            bindDrag: C
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const s = Bb(),
              a = Hb(),
              i = (0, X.useRef)();
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
                  }(h, c)), (!i.current || d < -70) && u(), i.current) {
                  const e = 100 * (m - d) / m;
                  r.start({
                    ...s(e),
                    immediate: !0
                  }), t.start({
                    ...a(e),
                    immediate: !0
                  })
                }
                f && (d > .5 * m || l > .5 && c > 0 ? (t.start({
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
              i(!1), p?.()
            },
            onCloseTransitionComplete: h
          }), _ = Ga(a, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: a ? 100 : 0,
            config: ra.stiff,
            ref: m,
            immediate: g || l,
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
            j = y && !g && !n && C(),
            P = (0, W.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: d
            }, j || {}, o),
            O = fi(dd.Content);
          return _((t, r) => r ? (0, R.jsx)("div", {
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
        vw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }, t);
          return (0, R.jsx)(dd.Title, {
            ref: r,
            ...n
          })
        }),
        yw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e
          }, t);
          return (0, R.jsx)(dd.Description, {
            ref: r,
            ...n
          })
        }),
        gw = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, R.jsxs)($b, {
            ref: n,
            ...o,
            children: [(0, R.jsx)(Qb, {
              className: "foundry_xov33ni",
              children: e
            }), (0, R.jsx)(Yb, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, R.jsx)(Jb, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        bw = (0, X.forwardRef)(({
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
        ww = (0, X.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
              "data-testid": r,
              className: iw({
                align: e
              })
            }, n),
            a = t ? J.DX : "header";
          return (0, R.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        Cw = (0, X.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            "data-testid": e,
            className: lw({
              appearance: t
            })
          }, r);
          return (0, R.jsx)(dd.Title, {
            ref: n,
            ...o
          })
        }),
        _w = (0, X.forwardRef)((e, t) => {
          const r = (0, W.mergeProps)({
            className: "foundry_xov33n4"
          }, e);
          return (0, R.jsx)(Ne, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        xw = (0, X.forwardRef)(({
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
            }) : (0, R.jsx)(bv, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, R.jsx)(dd.Close, {
            asChild: !0,
            children: s
          })
        }),
        jw = (0, X.forwardRef)(({
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
        Pw = (0, X.forwardRef)(({
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
      var Ow = r(76733),
        Sw = Object.defineProperty,
        kw = (e, t) => Sw(e, "name", {
          value: t,
          configurable: !0
        }),
        Rw = "Avatar",
        [Iw, Dw] = (0, mi.A)(Rw),
        Nw = [0, () => {}],
        [Tw, Ew] = Iw(Rw),
        zw = X.forwardRef(kw(function(e, t) {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, s] = X.useState("idle"), [a, i] = Aw();
          return (0, R.jsx)(Tw, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: s,
            imageCount: a,
            setImageCount: i,
            children: (0, R.jsx)(Ci.sG.span, {
              ...n,
              ref: t
            })
          })
        }, "Avatar")),
        Lw = X.forwardRef(kw(function(e, t) {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...s
          } = e, a = Ew("AvatarImage", r);
          qw(a.setImageCount);
          const i = Vw(n, {
              referrerPolicy: s.referrerPolicy,
              crossOrigin: s.crossOrigin,
              loadingStatus: a.imageLoadingStatus,
              setLoadingStatus: a.setImageLoadingStatus
            }),
            l = (0, Xd.c)(e => {
              o?.(e)
            }),
            d = X.useRef(i);
          return (0, ji.N)(() => {
            const e = d.current;
            d.current = i, i !== e && l(i)
          }, [i, l]), "loaded" === i ? (0, R.jsx)(Ci.sG.img, {
            ...s,
            ref: t,
            src: n
          }) : null
        }, "AvatarImage"));

      function Vw(e, {
        loadingStatus: t,
        setLoadingStatus: r,
        referrerPolicy: n,
        crossOrigin: o
      }) {
        return (0, ji.N)(() => {
          if (!e) return void r("error");
          const t = new window.Image,
            s = kw(e => {
              const t = e.currentTarget;
              r(Mw(t))
            }, "handleLoad"),
            a = kw(() => r("error"), "handleError");
          return t.addEventListener("load", s), t.addEventListener("error", a), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(Mw(t)), () => {
            t.removeEventListener("load", s), t.removeEventListener("error", a), r("idle")
          }
        }, [e, o, n, r]), t
      }

      function Mw(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function Aw() {
        let e = Nw;
        if (Ow.D) {
          e = X.useState(0);
          const [t] = e, r = X.useRef(!1);
          X.useEffect(() => {
            t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
          }, [t])
        }
        return e
      }

      function qw(e) {
        Ow.D && X.useEffect(() => (e(e => e + 1), () => {
          e(e => e - 1)
        }), [e])
      }

      function Fw(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Hw(e, t) {
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
          t % 2 ? Hw(Object(r), !0).forEach(function(t) {
            Fw(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Zw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      kw(Vw, "useImageLoadingStatus"), kw(Mw, "getImageLoadingStatus"), kw(Aw, "useImageCount"), kw(qw, "useUpdateImageCount");
      var Xw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Bw(Bw({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Xw(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zw(e.variantClassNames, e => Zw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Kw = Gw({
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
        Uw = "var(--foundry_v912w22)",
        Ww = "var(--foundry_v912w23)",
        $w = Gw({
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
        Qw = Gw({
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
        Yw = "var(--foundry_v912w21)",
        Jw = "var(--foundry_v912w20)",
        eC = Gw({
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
      const tC = (0, X.createContext)(null);

      function rC() {
        const e = (0, X.useContext)(tC);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const nC = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: s = !1,
          ...a
        }, i) => {
          const l = (0, W.mergeProps)({
            "data-testid": r,
            "aria-disabled": s,
            className: Kw({
              isDisabled: s
            }),
            asChild: e
          }, a);
          return (0, R.jsx)(tC.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: s
            },
            children: (0, R.jsx)(zw, {
              ref: i,
              ...l,
              children: t
            })
          })
        }),
        oC = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: s,
            isDisabled: a
          } = rC(), [i, l] = (0, X.useState)(!1);
          (0, X.useEffect)(() => {
            l(!1)
          }, [r]);
          const d = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, W.mergeProps)({
              className: $w({
                isDisabled: a
              }),
              src: d,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, n);
          return (0, R.jsx)("span", {
            className: Qw({
              size: s,
              isDisabled: a,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, R.jsx)(Lw, {
              ref: o,
              ...c
            })
          })
        }),
        sC = (0, X.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, X.useRef)(null),
            {
              size: s,
              status: a,
              isDisabled: i
            } = rC(),
            l = a || "online",
            d = (0, Y.UP)(o, n),
            c = (0, W.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: eC({
                status: l,
                size: s,
                isDisabled: i
              }),
              style: (0, K.DI)({
                [Jw]: t?.online,
                [Yw]: t?.offline,
                [Uw]: t?.away,
                [Ww]: t?.busy
              })
            }, r);
          return (0, R.jsx)("span", {
            ref: d,
            ...c
          })
        });

      function aC(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function iC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? iC(Object(r), !0).forEach(function(t) {
            aC(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function dC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var cC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        uC = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lC(lC({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) cC(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dC(e.variantClassNames, e => dC(e, e => e.split(" ")[0]))
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
      const fC = (0, X.forwardRef)(({
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
        pC = (0, X.forwardRef)(({
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
        hC = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, X.useRef)(null),
            i = (0, Y.UP)(a, s),
            {
              linkProps: l,
              isPressed: d
            } = uv(o, a),
            c = (0, W.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": d,
              "data-active": r,
              className: (0, ce.clsx)(uC({
                isActive: r
              }))
            }, l),
            u = e ? J.DX : "a";
          return (0, R.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        mC = (0, X.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, R.jsx)(hC, {
            ref: n,
            ...o,
            children: (0, R.jsx)(ue.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        vC = (0, X.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, R.jsx)(hC, {
            ref: n,
            ...o,
            children: (0, R.jsx)(ue.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        yC = ({
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
        gC = ({
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
        bC = (0, X.createContext)(null);

      function wC() {
        const e = (0, X.useContext)(bC);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const CC = ({
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
          return (0, R.jsx)(bC.Provider, {
            value: {
              labelId: o
            },
            children: (0, R.jsx)(a, {
              ...s,
              children: t
            })
          })
        },
        _C = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = wC(), a = (0, W.mergeProps)({
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
        xC = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = wC(), a = (0, W.mergeProps)({
            "aria-labelledby": s,
            className: "foundry_2jlbztc"
          }, n), i = e ? J.DX : $u;
          return (0, R.jsxs)(i, {
            ...a,
            children: [(0, R.jsxs)(ef, {
              ref: o,
              children: [(0, R.jsx)(tf, {
                placeholder: r
              }), (0, R.jsx)(rf, {})]
            }), (0, R.jsx)(cf, {
              children: (0, R.jsx)(Qu, {
                children: (0, R.jsx)(Ju, {
                  children: t
                })
              })
            })]
          })
        }),
        jC = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
              "data-testid": r
            }, n),
            a = e ? J.DX : af;
          return (0, R.jsx)(a, {
            ...s,
            ref: o,
            children: (0, R.jsx)(lf, {
              children: t
            })
          })
        }),
        PC = (0, X.forwardRef)(({
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
      var OC = Object.defineProperty,
        SC = (e, t) => OC(e, "name", {
          value: t,
          configurable: !0
        }),
        kC = !1;

      function RC() {
        const [e, t] = X.useState(kC);
        return X.useEffect(() => {
          kC || (kC = !0, t(!0))
        }, []), e
      }
      SC(RC, "useIsHydrated");
      var IC = G[" useSyncExternalStore ".trim().toString()];

      function DC() {
        return () => {}
      }

      function NC() {
        return IC(DC, () => !0, () => !1)
      }
      SC(DC, "subscribe"), SC(NC, "useIsHydratedModern");
      var TC = "function" == typeof IC ? NC : RC,
        EC = Object.defineProperty,
        zC = (e, t) => EC(e, "name", {
          value: t,
          configurable: !0
        }),
        LC = "rovingFocusGroup.onEntryFocus",
        VC = {
          bubbles: !1,
          cancelable: !0
        },
        MC = "RovingFocusGroup",
        [AC, qC, FC] = (0, Cl.N)(MC),
        [HC, BC] = (0, mi.A)(MC, [FC]),
        [ZC, XC] = HC(MC),
        GC = X.forwardRef(zC(function(e, t) {
          return (0, R.jsx)(AC.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, R.jsx)(AC.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, R.jsx)(KC, {
                ...e,
                ref: t
              })
            })
          })
        }, "RovingFocusGroup")),
        KC = X.forwardRef(zC(function(e, t) {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: s,
            currentTabStopId: a,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: l,
            onEntryFocus: d,
            preventScrollOnEntryFocus: c = !1,
            ...u
          } = e, f = X.useRef(null), p = (0, hi.s)(t, f), h = (0, gl.jH)(s), [m, v] = (0, xi.useControllableState)({
            prop: a,
            defaultProp: i ?? null,
            onChange: l,
            caller: MC
          }), [y, g] = X.useState(!1), b = (0, Xd.c)(d), w = qC(r), C = X.useRef(!1), [_, x] = X.useState(0);
          return X.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(LC, b), () => e.removeEventListener(LC, b)
          }, [b]), (0, R.jsx)(ZC, {
            scope: r,
            orientation: n,
            dir: h,
            loop: o,
            currentTabStopId: m,
            onItemFocus: X.useCallback(e => v(e), [v]),
            onItemShiftTab: X.useCallback(() => g(!0), []),
            onFocusableItemAdd: X.useCallback(() => x(e => e + 1), []),
            onFocusableItemRemove: X.useCallback(() => x(e => e - 1), []),
            children: (0, R.jsx)(Ci.sG.div, {
              tabIndex: y || 0 === _ ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, pi.mK)(e.onMouseDown, () => {
                C.current = !0
              }),
              onFocus: (0, pi.mK)(e.onFocus, e => {
                const t = !C.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(LC, VC);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === m),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    YC(n, c)
                  }
                }
                C.current = !1
              }),
              onBlur: (0, pi.mK)(e.onBlur, () => g(!1))
            })
          })
        }, "RovingFocusGroupImpl")),
        UC = X.forwardRef(zC(function(e, t) {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: s,
            children: a,
            ...i
          } = e, l = (0, yi.useId)(), d = s || l, c = XC("RovingFocusGroupItem", r), u = c.currentTabStopId === d, f = qC(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: m
          } = c, v = TC();
          return (0, ji.N)(() => {
            if (v && n) return p(), () => h()
          }, [v, n, p, h]), X.useEffect(() => {
            if (!v && n) return p(), () => h()
          }, [v, n, p, h]), (0, R.jsx)(AC.ItemSlot, {
            scope: r,
            id: d,
            focusable: n,
            active: o,
            children: (0, R.jsx)(Ci.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, pi.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(d) : e.preventDefault()
              }),
              onFocus: (0, pi.mK)(e.onFocus, () => c.onItemFocus(d)),
              onKeyDown: (0, pi.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = QC(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const r = f().filter(e => e.focusable);
                  let n = r.map(e => e.ref.current);
                  if ("last" === t) n.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && n.reverse();
                    const r = n.indexOf(e.currentTarget);
                    n = c.loop ? JC(n, r + 1) : n.slice(r + 1)
                  }
                  setTimeout(() => YC(n))
                }
              }),
              children: "function" == typeof a ? a({
                isCurrentTabStop: u,
                hasTabStop: null != m
              }) : a
            })
          })
        }, "RovingFocusGroupItem")),
        WC = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last"
        };

      function $C(e, t) {
        return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
      }

      function QC(e, t, r) {
        const n = $C(e.key, r);
        if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n))) return WC[n]
      }

      function YC(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }

      function JC(e, t) {
        return e.map((r, n) => e[(t + n) % e.length])
      }
      zC($C, "getDirectionAwareKey"), zC(QC, "getFocusIntent"), zC(YC, "focusFirst"), zC(JC, "wrapArray");
      var e_ = GC,
        t_ = UC,
        r_ = Object.defineProperty,
        n_ = (e, t) => r_(e, "name", {
          value: t,
          configurable: !0
        }),
        o_ = X.forwardRef(n_(function(e, t) {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...s
          } = e, [a, i] = (0, xi.useControllableState)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: "Toggle"
          });
          return (0, R.jsx)(Ci.sG.button, {
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
        }, "Toggle")),
        s_ = Object.defineProperty,
        a_ = (e, t) => s_(e, "name", {
          value: t,
          configurable: !0
        }),
        i_ = "ToggleGroup",
        [l_, d_] = (0, mi.A)(i_, [BC]),
        c_ = BC(),
        u_ = X.forwardRef(a_(function(e, t) {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, R.jsx)(h_, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, R.jsx)(m_, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${i_}\``)
        }, "ToggleGroup")),
        [f_, p_] = l_(i_),
        h_ = X.forwardRef(a_(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = a_(() => {}, "onValueChange"),
            ...s
          } = e, [a, i] = (0, xi.useControllableState)({
            prop: r,
            defaultProp: n ?? "",
            onChange: o,
            caller: i_
          });
          return (0, R.jsx)(f_, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: X.useMemo(() => a ? [a] : [], [a]),
            onItemActivate: i,
            onItemDeactivate: X.useCallback(() => i(""), [i]),
            children: (0, R.jsx)(g_, {
              ...s,
              ref: t
            })
          })
        }, "ToggleGroupImplSingle")),
        m_ = X.forwardRef(a_(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = a_(() => {}, "onValueChange"),
            ...s
          } = e, [a, i] = (0, xi.useControllableState)({
            prop: r,
            defaultProp: n ?? [],
            onChange: o,
            caller: i_
          }), l = X.useCallback(e => i((t = []) => [...t, e]), [i]), d = X.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
          return (0, R.jsx)(f_, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: a,
            onItemActivate: l,
            onItemDeactivate: d,
            children: (0, R.jsx)(g_, {
              ...s,
              ref: t
            })
          })
        }, "ToggleGroupImplMultiple")),
        [v_, y_] = l_(i_),
        g_ = X.forwardRef(a_(function(e, t) {
          const {
            __scopeToggleGroup: r,
            disabled: n = !1,
            rovingFocus: o = !0,
            orientation: s,
            dir: a,
            loop: i = !0,
            ...l
          } = e, d = c_(r), c = (0, gl.jH)(a), u = {
            dir: c,
            ...l
          };
          return (0, R.jsx)(v_, {
            scope: r,
            rovingFocus: o,
            disabled: n,
            children: o ? (0, R.jsx)(e_, {
              asChild: !0,
              ...d,
              orientation: s,
              dir: c,
              loop: i,
              children: (0, R.jsx)(Ci.sG.div, {
                ...u,
                ref: t
              })
            }) : (0, R.jsx)(Ci.sG.div, {
              ...u,
              ref: t
            })
          })
        }, "ToggleGroupImpl")),
        b_ = "ToggleGroupItem",
        w_ = X.forwardRef(a_(function(e, t) {
          const r = p_(b_, e.__scopeToggleGroup),
            n = y_(b_, e.__scopeToggleGroup),
            o = c_(e.__scopeToggleGroup),
            s = r.value.includes(e.value),
            a = n.disabled || e.disabled,
            i = {
              ...e,
              pressed: s,
              disabled: a
            },
            l = X.useRef(null);
          return n.rovingFocus ? (0, R.jsx)(t_, {
            asChild: !0,
            ...o,
            focusable: !a,
            active: s,
            ref: l,
            children: (0, R.jsx)(C_, {
              ...i,
              ref: t
            })
          }) : (0, R.jsx)(C_, {
            ...i,
            ref: t
          })
        }, "ToggleGroupItem")),
        C_ = X.forwardRef(a_(function(e, t) {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, s = p_(b_, r), a = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === s.type ? a : void 0;
          return (0, R.jsx)(o_, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? s.onItemActivate(n) : s.onItemDeactivate(n)
            }
          })
        }, "ToggleGroupItemImpl"));

      function __(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
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

      function j_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? x_(Object(r), !0).forEach(function(t) {
            __(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function P_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var O_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        S_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = j_(j_({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) O_(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return P_(e.variantClassNames, e => P_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        k_ = "var(--foundry_zxwkyk2)",
        R_ = "var(--foundry_zxwkyk3)",
        I_ = S_({
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
        D_ = S_({
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
        N_ = S_({
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
        T_ = "var(--foundry_zxwkyk1)",
        E_ = "var(--foundry_zxwkyk0)",
        z_ = S_({
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
      const L_ = (0, X.createContext)(null);

      function V_() {
        const e = (0, X.useContext)(L_);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const M_ = (0, X.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
            "data-testid": e,
            className: I_({
              size: t
            }),
            type: r
          }, n);
          return (0, R.jsx)(L_.Provider, {
            value: {
              size: t
            },
            children: (0, R.jsx)(u_, {
              ref: o,
              ...s
            })
          })
        }),
        A_ = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = V_(), o = (0, W.mergeProps)({
            "data-testid": e,
            className: D_({
              size: n
            })
          }, t);
          return (0, R.jsx)(w_, {
            ref: r,
            ...o
          })
        }),
        q_ = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = V_(), o = ue[e];
          return (0, R.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        F_ = (0, X.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const s = (0, W.mergeProps)({
            "data-testid": e,
            className: z_({
              status: r
            }),
            style: (0, K.DI)({
              [E_]: t?.online,
              [T_]: t?.offline,
              [k_]: t?.away,
              [R_]: t?.busy
            })
          }, n);
          return (0, R.jsx)("span", {
            ref: o,
            ...s
          })
        }),
        H_ = (0, X.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = V_(), s = (0, W.mergeProps)({
            "data-testid": e,
            className: N_({
              variant: t,
              size: o
            })
          }, r);
          return (0, R.jsx)("span", {
            ref: n,
            ...s
          })
        });
      var B_ = r(1309);

      function Z_(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function X_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function G_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? X_(Object(r), !0).forEach(function(t) {
            Z_(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function K_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var U_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        W_ = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = G_(G_({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) U_(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return K_(e.variantClassNames, e => K_(e, e => e.split(" ")[0]))
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
      const $_ = (0, X.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        Q_ = ({
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
          return (0, R.jsx)($_.Provider, {
            value: {
              open: o,
              setOpen: s
            },
            children: (0, R.jsx)(B_.Root, {
              ...a
            })
          })
        },
        Y_ = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, R.jsx)(B_.Trigger, {
            ref: r,
            ...n
          })
        }),
        J_ = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        ex = (0, X.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: s
          } = (0, X.useContext)($_), a = (0, X.useRef)(null), i = (0, Y.UP)(a, o), {
            buttonProps: l
          } = (0, Y.sL)(n, a), d = (0, W.mergeProps)({
            "data-testid": r,
            className: W_({
              size: t
            })
          }, l), c = s ? ue.ChevronUp : ue.ChevronDown;
          return (0, R.jsxs)("button", {
            ref: i,
            ...d,
            children: [e, (0, R.jsx)(c, {
              label: "",
              size: J_[t]
            })]
          })
        }),
        tx = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e
          }, t);
          return (0, R.jsx)(B_.Anchor, {
            ref: r,
            ...n
          })
        }),
        rx = (0, X.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, R.jsx)(B_.Content, {
            ref: n,
            ...o
          })
        }),
        nx = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, R.jsx)(B_.Arrow, {
            ref: r,
            ...n
          })
        }),
        ox = e => (0, R.jsx)(B_.Portal, {
          ...e
        }),
        sx = e => (0, R.jsx)(B_.Close, {
          ...e
        });

      function ax(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function ix(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ix(Object(r), !0).forEach(function(t) {
            ax(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ix(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function dx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var cx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ux = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lx(lx({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) cx(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dx(e.variantClassNames, e => dx(e, e => e.split(" ")[0]))
            }
          }, t
        },
        fx = "var(--foundry_rmorls2)",
        px = ux({
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
        hx = "var(--foundry_rmorls0)",
        mx = ux({
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
        vx = "var(--foundry_rmorls3)",
        yx = "var(--foundry_rmorls1)",
        gx = ux({
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
        bx = Object.defineProperty,
        wx = (e, t) => bx(e, "name", {
          value: t,
          configurable: !0
        }),
        Cx = "Progress",
        [_x, xx] = (0, mi.A)(Cx),
        [jx, Px] = _x(Cx),
        Ox = X.forwardRef(wx(function(e, t) {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: s = kx,
            ...a
          } = e;
          !o && 0 !== o || Dx(o) || console.error(Tx(`${o}`, "Progress"));
          const i = Dx(o) ? o : 100;
          null === n || Nx(n, i) || console.error(Ex(`${n}`, "Progress"));
          const l = Nx(n, i) ? n : null,
            d = Ix(l) ? s(l, i) : void 0;
          return (0, R.jsx)(jx, {
            scope: r,
            value: l,
            max: i,
            children: (0, R.jsx)(Ci.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": Ix(l) ? l : void 0,
              "aria-valuetext": d,
              role: "progressbar",
              "data-state": Rx(l, i),
              "data-value": l ?? void 0,
              "data-max": i,
              ...a,
              ref: t
            })
          })
        }, "Progress")),
        Sx = X.forwardRef(wx(function(e, t) {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = Px("ProgressIndicator", r);
          return (0, R.jsx)(Ci.sG.div, {
            "data-state": Rx(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        }, "ProgressIndicator"));

      function kx(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function Rx(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function Ix(e) {
        return "number" == typeof e
      }

      function Dx(e) {
        return Ix(e) && !isNaN(e) && e > 0
      }

      function Nx(e, t) {
        return Ix(e) && !isNaN(e) && e <= t && e >= 0
      }

      function Tx(e, t) {
        return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`
      }

      function Ex(e, t) {
        return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`
      }
      wx(kx, "defaultGetValueLabel"), wx(Rx, "getProgressState"), wx(Ix, "isNumber"), wx(Dx, "isValidMaxNumber"), wx(Nx, "isValidValueNumber"), wx(Tx, "getInvalidMaxError"), wx(Ex, "getInvalidValueError");
      var zx = Ox,
        Lx = Sx;
      const Vx = (0, X.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Mx = (0, X.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const s = Math.round(r / t * 100),
            a = "number" != typeof r || "number" != typeof t;
          return (0, R.jsx)(Vx.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: s,
              isInvalid: a
            },
            children: (0, R.jsx)(Ax, {
              ...n,
              ref: o
            })
          })
        }),
        Ax = (0, X.forwardRef)(({
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
        qx = (0, X.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: s,
            size: a
          } = (0, X.useContext)(Vx), i = (0, W.mergeProps)({
            "data-testid": e,
            className: mx({
              size: a
            }),
            value: o,
            max: s,
            style: (0, K.DI)({
              [vx]: t
            }),
            "data-track": !0
          }, r);
          return (0, R.jsx)(zx, {
            ref: n,
            ...i
          })
        }),
        Fx = (0, X.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: s,
            isInvalid: a
          } = (0, X.useContext)(Vx), i = a ? "-100%" : `-${100-s}%`, l = (0, W.mergeProps)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, K.DI)({
              [hx]: i,
              [yx]: `${t}ms`,
              [fx]: r
            })
          }, n);
          return (0, R.jsx)(Lx, {
            ref: o,
            ...l
          })
        }),
        Hx = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, X.useContext)(Vx), s = (0, W.mergeProps)({
            "data-testid": t,
            className: px({
              size: o
            }),
            "aria-hidden": !0
          }, r), a = e ? J.DX : "span";
          return (0, R.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        Bx = (0, X.forwardRef)(({
          testId: e,
          format: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: s,
            size: a,
            percentage: i,
            isInvalid: l
          } = (0, X.useContext)(Vx), d = (0, W.mergeProps)({
            "data-testid": e,
            className: px({
              size: a
            }),
            "aria-hidden": !0
          }, r);
          return l ? (0, R.jsx)("span", {
            ref: n,
            ...d
          }) : "percentage" === t ? (0, R.jsxs)("span", {
            ref: n,
            ...d,
            children: [i, " ", (0, R.jsx)("span", {
              className: gx({
                size: a
              }),
              children: "%"
            })]
          }) : (0, R.jsxs)("span", {
            ref: n,
            ...d,
            children: [o, "/", s]
          })
        });
      var Zx = r(74557);

      function Xx(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
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
            Xx(e, t, r[t])
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
        $x = "foundry_1vzsjid2",
        Qx = "foundry_1vzsjidm",
        Yx = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Kx(Kx({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Wx(d, n, e.defaultVariants) && (r += " " + c);
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
      const Jx = (0, X.createContext)({
          mode: "solid",
          layer: 0
        }),
        ej = (0, X.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, R.jsx)(Jx.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, R.jsx)(tj, {
            ...n,
            ref: o,
            type: r
          })
        })),
        tj = (0, X.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            "data-testid": e,
            type: t
          }, r);
          return (0, R.jsx)(Zx.Root, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        rj = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, X.useContext)(Jx), s = (0, W.mergeProps)({
            className: Yx({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, R.jsx)(Zx.Item, {
            ref: r,
            ...s
          })
        }),
        nj = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.mergeProps)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, R.jsx)(Zx.Header, {
            ref: r,
            ...n
          })
        }),
        oj = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, W.mergeProps)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, R.jsx)(Zx.Trigger, {
            ref: n,
            ...o,
            children: r.asChild && (0, X.isValidElement)(e) ? (0, X.cloneElement)(e, {
              children: (0, R.jsx)("span", {
                className: $x,
                children: e.props.children
              })
            }) : (0, R.jsx)("span", {
              className: $x,
              children: e
            })
          })
        }),
        sj = (0, X.forwardRef)(({
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
        aj = (0, X.forwardRef)(({
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
        ij = (0, X.forwardRef)(({
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
          return (0, R.jsx)(Zx.Content, {
            ref: o,
            ...s,
            children: t && (0, X.isValidElement)(e) ? (0, X.cloneElement)(e, {
              children: (0, R.jsx)("div", {
                className: Qx,
                children: e.props.children
              })
            }) : (0, R.jsx)("div", {
              className: Qx,
              children: e
            })
          })
        }),
        lj = {
          MD: K.LU.global.spacing.dimensions[200],
          LG: K.LU.global.spacing.dimensions[250],
          XL: K.LU.global.spacing.dimensions[300]
        },
        dj = (0, X.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, R.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: lj[t],
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
        cj = (0, X.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: lj[t],
          viewBox: "0 0 92 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, R.jsx)("path", {
            d: "M9.58333 0C11.3552 0.328638 13.9663 1.12676 15.3418 1.59624C18.8854 2.8169 20.0977 4.34272 20.0977 7.76995C20.0977 11.1972 18.0461 12.3944 15.435 11.1268V4.88263C15.435 4.15493 15.2951 3.47418 14.6191 3.28639C14.1062 3.12207 13.7798 3.61502 13.7798 4.34272V19.9531L9.58333 18.615V0ZM14.5724 19.6948L23.7113 16.385C23.7113 16.385 24.947 15.9155 25.4365 15.2817C25.9261 14.6479 25.7163 13.7089 23.7347 13.0986C21.9861 12.4413 19.748 12.2066 17.9296 12.4178C16.1111 12.6056 14.8056 13.0751 14.8056 13.0751L14.5491 13.169V15.7042L19.0253 14.108C19.7947 13.8263 20.9137 13.7793 21.5432 13.9671C22.1493 14.1784 22.0328 14.554 21.2867 14.8357L14.5491 17.2535V19.6948H14.5724ZM1.91317 16.9953C4.08133 17.723 6.29612 17.8638 8.37103 17.5117C8.51091 17.5117 8.65079 17.4648 8.79067 17.4413V15.2582L6.71576 16.0094C5.94642 16.2911 4.85068 16.3615 4.22122 16.1502C3.61506 15.939 3.73163 15.5634 4.47766 15.2817L8.79067 13.7324V11.2911L2.79909 13.4507C2.79909 13.4507 1.35365 13.9202 0.491048 14.554C-0.441493 15.2582 -0.0917898 16.4554 1.93649 17.0188M24.0377 17.9812C23.4549 17.9812 23.0352 18.4272 23.0352 18.9906C23.0352 19.554 23.4316 20 24.0377 20C24.6439 20 25.0169 19.554 25.0169 18.9906C25.0169 18.4272 24.6206 17.9812 24.0377 17.9812ZM24.0377 19.8122C23.5248 19.8122 23.1984 19.4366 23.1984 18.9671C23.1984 18.4977 23.5248 18.1221 24.0377 18.1221C24.5506 18.1221 24.877 18.4977 24.877 18.9671C24.877 19.4366 24.5506 19.8122 24.0377 19.8122ZM23.6414 19.554H23.8512V19.061H23.9911C24.1543 19.061 24.2009 19.108 24.2242 19.2254C24.2476 19.2958 24.2942 19.4601 24.3175 19.5305H24.5273C24.504 19.4131 24.4574 19.2958 24.4107 19.1784C24.3641 19.0376 24.3175 18.9906 24.2476 18.9671C24.3874 18.9202 24.4574 18.8263 24.4574 18.6854C24.4574 18.4507 24.2942 18.3803 24.0844 18.3803H23.6414V19.5305V19.554ZM23.8279 18.5446H24.0144C24.131 18.5446 24.2242 18.5681 24.2242 18.7324C24.2242 18.8967 24.131 18.9202 23.9911 18.9202H23.8046V18.5446H23.8279ZM56.4436 15.9859C58.2154 15.9859 59.6375 14.554 59.6375 12.77V7.23005C59.6375 6.15024 60.5001 5.28169 61.5725 5.28169H67.7739C67.8206 5.28169 67.8672 5.23474 67.8672 5.18779V4.08451C67.8672 4.03756 67.8206 3.99061 67.7739 3.99061H60.2903C58.5185 3.99061 57.0963 5.42253 57.0963 7.20657V12.7465C57.0963 13.8263 56.2337 14.6948 55.1613 14.6948H49.0532C49.0065 14.6948 48.9599 14.7418 48.9599 14.7887V15.892C48.9599 15.939 49.0065 15.9859 49.0532 15.9859H56.4436ZM70.4084 8.49765C70.4084 9.57746 71.271 10.446 72.3434 10.446H83.2774C84.4431 10.446 85.4223 11.4085 85.399 12.5822C85.399 13.7559 84.4431 14.6948 83.2774 14.6948C83.2774 14.6948 73.6956 14.6948 70.5016 14.6948C70.455 14.6948 70.4084 14.7418 70.4084 14.7887V15.892C70.4084 15.939 70.455 15.9859 70.5016 15.9859H84.5597C86.4248 15.9859 87.9402 14.4601 87.9402 12.5822C87.9402 10.7042 86.4248 9.1784 84.5597 9.1784H73.8821C73.3692 9.1784 72.9729 8.75587 72.9729 8.26291V5.37559C72.9729 5.32864 73.0195 5.28169 73.0661 5.28169H87.4273C87.4739 5.28169 87.5205 5.23474 87.5205 5.18779V4.08451C87.5205 4.03756 87.4739 3.99061 87.4273 3.99061H70.5249C70.4783 3.99061 70.4317 4.03756 70.4317 4.08451C70.4317 4.74178 70.4317 6.87793 70.4317 8.49765M35.4847 9.15493C33.7128 9.15493 32.2907 10.5869 32.2907 12.3709C32.2907 12.3709 32.2907 14.9296 32.2907 15.892C32.2907 15.939 32.3373 15.9859 32.384 15.9859H34.762C34.8086 15.9859 34.8552 15.939 34.8552 15.892V12.3709C34.8552 11.2911 35.7178 10.4225 36.7902 10.4225H46.6286C48.4004 10.4225 49.8225 8.99061 49.8225 7.20657C49.8225 5.42253 48.4004 3.99061 46.6286 3.99061H32.4073C32.3607 3.99061 32.314 4.03756 32.314 4.08451V5.18779C32.314 5.23474 32.3607 5.28169 32.4073 5.28169H45.3696C46.442 5.28169 47.3046 6.15024 47.3046 7.23005C47.3046 8.30986 46.442 9.1784 45.3696 9.1784H35.5313L35.4847 9.15493ZM91.2507 14.9531C91.2507 15.5164 90.8543 15.9624 90.2715 15.9624C89.6887 15.9624 89.269 15.5164 89.269 14.9531C89.269 14.3897 89.6654 13.9437 90.2715 13.9437C90.8777 13.9437 91.2507 14.3897 91.2507 14.9531ZM91.0875 14.9531C91.0875 14.4836 90.7611 14.108 90.2482 14.108C89.7353 14.108 89.4089 14.4836 89.4089 14.9531C89.4089 15.4225 89.7353 15.7981 90.2482 15.7981C90.7611 15.7981 91.0875 15.4225 91.0875 14.9531ZM90.6445 15.1643C90.6912 15.2817 90.7145 15.4225 90.7611 15.5164H90.5513C90.528 15.4225 90.4813 15.2817 90.458 15.2113C90.4347 15.0704 90.3881 15.0469 90.2249 15.0469H90.085V15.5399H89.8752V14.3897H90.3181C90.528 14.3897 90.6912 14.4601 90.6912 14.6948C90.6912 14.9296 90.6212 14.9296 90.4813 14.9765C90.5513 15 90.5979 15.0469 90.6445 15.1878V15.1643ZM90.4813 14.6948C90.4813 14.5305 90.3648 14.507 90.2715 14.507H90.085V14.8826H90.2715C90.4114 14.8826 90.5046 14.8357 90.5046 14.6948H90.4813Z",
            fill: e
          })
        })),
        uj = (0, X.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, R.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: lj[t],
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
        fj = (0, X.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: lj[t],
          viewBox: "0 0 104 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, R.jsx)("path", {
            d: "M9.97484 8.02222C9.98593 8.02222 10.0026 8.03333 10.0081 8.03889C12.9895 10.3111 18.0988 15.9389 16.5416 17.5278C14.7849 19.0667 12.4907 20 9.97484 20C7.45897 20 5.16475 19.0667 3.40807 17.5278C1.85089 15.9389 6.96022 10.3111 9.94159 8.03889C9.94713 8.03333 9.96376 8.02222 9.97484 8.02222ZM15.1728 1.46111C13.6434 0.55 11.992 0 9.97484 0C7.95771 0 6.30632 0.555556 4.77684 1.46111C4.76022 1.47222 4.74913 1.49444 4.76022 1.51111C4.76576 1.52778 4.78792 1.53333 4.81009 1.52778C6.7441 1.11111 9.6756 2.78333 9.95268 2.95C9.95822 2.95 9.96376 2.95556 9.97484 2.95556C9.98593 2.95556 9.99147 2.95556 9.99701 2.95C10.2741 2.78333 13.2111 1.11111 15.1396 1.52778C15.1618 1.52778 15.1784 1.52778 15.1895 1.51111C15.2006 1.49444 15.1895 1.47222 15.1728 1.46111ZM2.99245 2.86667C2.97583 2.87778 2.9592 2.88889 2.94812 2.9C1.13048 4.71111 0 7.22222 0 9.99444C0 12.7667 0.759196 14.3722 2.0393 16.0556C2.05038 16.0722 2.07255 16.0833 2.09472 16.0722C2.11134 16.0611 2.11134 16.0389 2.1058 16.0222C1.3466 13.6667 5.23125 7.95 7.24284 5.55556C7.24838 5.55 7.25393 5.53889 7.25393 5.52778C7.25393 5.51667 7.24839 5.50556 7.2373 5.49444C4.19498 2.46111 3.16424 2.78333 2.99245 2.86667ZM12.7179 5.49444C12.7068 5.5 12.7013 5.51111 12.7013 5.52778C12.7013 5.54444 12.7068 5.55 12.7124 5.55556C14.7184 7.95 18.6086 13.6667 17.8494 16.0222C17.8439 16.0389 17.8439 16.0611 17.8605 16.0722C17.8771 16.0833 17.8993 16.0722 17.9159 16.0556C19.196 14.3722 19.9552 12.2778 19.9552 9.99444C19.9552 7.71111 18.8247 4.71111 17.0071 2.9C16.996 2.88889 16.9794 2.87222 16.9628 2.86667C16.7965 2.77778 15.7603 2.45556 12.7179 5.49444ZM34.7125 16.1611H32.6731L29.1598 11.3111L25.6464 16.1611H23.6071L28.1401 9.90555L23.9618 4.13889H26.0011L29.1598 8.49444L32.3185 4.13889H34.3578L30.1794 9.90555L34.7125 16.1611ZM45.3079 12.7444C45.3079 13.8 44.9588 14.6444 44.2717 15.25C43.5845 15.8556 42.5815 16.1611 41.2958 16.1611H35.6711V10.8056H33.0001L34.114 9.27222H35.6767V4.13889H41.0631C42.2712 4.13889 43.2077 4.42778 43.8561 5C44.4989 5.57222 44.8258 6.33889 44.8258 7.26667C44.8258 8.19444 44.3049 9.3 43.2742 9.87222C43.9392 10.1278 44.449 10.5111 44.7926 11C45.1417 11.5 45.3135 12.0833 45.3135 12.7333L45.3079 12.7444ZM37.5054 9.27222H40.9412C41.6339 9.27222 42.1603 9.11667 42.5039 8.81111C42.8475 8.50556 43.0248 8.03889 43.0248 7.42222C43.0248 6.80556 42.8419 6.47222 42.4873 6.17222C42.1271 5.87222 41.6117 5.72222 40.9467 5.72222H37.5109V9.27222H37.5054ZM43.4626 12.7056C43.4626 12.0722 43.2742 11.5944 42.8974 11.2778C42.5205 10.9611 41.9498 10.8 41.1961 10.8H37.5054V14.5667H41.1961C41.9276 14.5667 42.4928 14.4056 42.8807 14.0833C43.2687 13.7611 43.4626 13.3 43.4626 12.7V12.7056ZM57.6269 10.15C57.6269 11.0778 57.4939 11.9333 57.2279 12.6833C56.9619 13.4389 56.5574 14.1111 56.0254 14.6889C55.4878 15.2667 54.8616 15.7056 54.1579 15.9944C53.4541 16.2833 52.6561 16.4278 51.7861 16.4278C50.916 16.4278 50.1014 16.2833 49.3976 15.9944C48.6939 15.7056 48.0677 15.2667 47.5467 14.6889C47.0092 14.1167 46.6047 13.4444 46.3331 12.6944C46.0671 11.9389 45.9286 11.0833 45.9286 10.15C45.9286 9.21667 46.0671 8.36667 46.3331 7.61111C46.5991 6.85556 47.0092 6.17778 47.5467 5.59445C48.0732 5.02222 48.6939 4.58889 49.3976 4.3C50.1014 4.01667 50.9049 3.87222 51.7861 3.87222C52.6672 3.87222 53.4541 4.01667 54.1579 4.3C54.8616 4.58333 55.4934 5.02222 56.0254 5.59445C56.5574 6.17778 56.9619 6.85556 57.2279 7.61111C57.4939 8.36667 57.6269 9.22222 57.6269 10.15ZM47.8183 10.15C47.8183 11.5667 48.184 12.7 48.9044 13.5222C49.6138 14.3556 50.5835 14.7778 51.7805 14.7778C52.9775 14.7778 53.9473 14.3556 54.6566 13.5222C55.3659 12.7111 55.7261 11.5778 55.7261 10.15C55.7261 8.72222 55.3659 7.58333 54.6566 6.76111C53.9362 5.93889 52.9664 5.52222 51.7805 5.52222C50.5946 5.52222 49.6248 5.93889 48.9044 6.76111C48.184 7.60556 47.8183 8.74444 47.8183 10.15ZM63.4123 9.90555L67.5906 4.13889H65.5513L62.3926 8.49444L59.2339 4.13889H57.1946L61.373 9.90555L56.84 16.1611H58.8793L62.3926 11.3111L65.906 16.1611H67.9453L63.4123 9.90555ZM81.4169 7.61111C81.1509 6.85556 80.7463 6.17778 80.2144 5.59445C79.6768 5.02222 79.0506 4.58889 78.3468 4.3C77.6431 4.01667 76.8451 3.87222 75.9751 3.87222C75.105 3.87222 74.2904 4.01667 73.5866 4.3C72.8829 4.58333 72.2567 5.02222 71.7357 5.59445C71.1982 6.17778 70.7937 6.85556 70.5221 7.61111C70.2561 8.36667 70.1176 9.22222 70.1176 10.15C70.1176 11.0778 70.2561 11.9389 70.5221 12.6944C70.7881 13.45 71.1982 14.1222 71.7357 14.6889C72.2622 15.2667 72.8829 15.7056 73.5866 15.9944C74.2904 16.2833 75.0939 16.4278 75.9751 16.4278C76.8562 16.4278 77.6431 16.2833 78.3468 15.9944C79.0506 15.7056 79.6824 15.2667 80.2144 14.6889C80.7463 14.1111 81.1509 13.4389 81.4169 12.6833C81.6829 11.9278 81.8159 11.0778 81.8159 10.15C81.8159 9.22222 81.6829 8.36667 81.4169 7.61111ZM78.8456 13.5222C78.1363 14.3556 77.1665 14.7778 75.9695 14.7778C74.7725 14.7778 73.8027 14.3556 73.0934 13.5222C72.373 12.7 72.0073 11.5667 72.0073 10.15C72.0073 8.73333 72.373 7.60556 73.0934 6.76111C73.8138 5.93889 74.7836 5.52222 75.9695 5.52222C77.1554 5.52222 78.1252 5.93889 78.8456 6.76111C79.5549 7.58333 79.9151 8.72222 79.9151 10.15C79.9151 11.5778 79.5549 12.7111 78.8456 13.5222ZM96.7504 5.78889V9.27222H102.708V10.8056H96.7504V14.5056H103.483V16.1556H94.9162V4.13333H103.483V5.78333H96.7504V5.78889ZM93.0874 4.13889V16.1611H90.9872C90.9872 16.1556 87.3076 10.3444 87.3076 10.3444C86.3101 8.77778 85.5564 7.54445 85.0743 6.67222V16.1611H83.2955V4.13889H85.3957C85.3957 4.14444 89.092 9.95556 89.092 9.95556C90.0285 11.4389 90.7766 12.6833 91.3252 13.65V4.13889H93.0874Z",
            fill: e
          })
        })),
        pj = (0, X.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: lj[t],
          viewBox: "0 0 158 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, R.jsx)("path", {
            d: "M10.02 8.01603C13.0261 10.3006 18.1563 15.9519 16.5932 17.515C14.8297 19.0381 12.5451 20 9.97996 20C7.41483 20 5.13026 19.0782 3.36673 17.515C1.80361 15.9118 6.93387 10.3006 9.93988 8.01603H10.02ZM15.2305 1.48297C13.7074 0.561122 12.024 0 10.02 0C8.01603 0 6.33266 0.561122 4.80962 1.48297C4.80962 1.48297 4.80962 1.48297 4.80962 1.52305C4.80962 1.52305 4.80962 1.52305 4.8497 1.52305C6.77355 1.12224 9.73948 2.76553 10.02 2.92585C10.3006 2.76553 13.2265 1.08216 15.1904 1.52305C15.1904 1.52305 15.1904 1.52305 15.2305 1.52305C15.2305 1.52305 15.2305 1.52305 15.2305 1.48297ZM3.00601 2.88577C3.00601 2.88577 3.00601 2.88577 2.96593 2.88577C1.12224 4.72946 0 7.25451 0 10.02C0 12.7856 0.761523 14.3888 2.04409 16.1122C2.04409 16.1122 2.04409 16.1122 2.08417 16.1122C2.08417 16.1122 2.08417 16.1122 2.08417 16.0721C1.32265 13.7074 5.21042 7.97595 7.25451 5.57114C4.20842 2.48497 3.16633 2.80561 3.00601 2.88577ZM12.7856 5.49098C14.7896 7.89579 18.7174 13.6273 17.9559 15.992C17.9559 15.992 17.9559 15.992 17.9559 16.0321C17.9559 16.0321 17.9559 16.0321 17.996 16.0321C19.2786 14.3487 20.0401 12.2244 20.0401 9.97996C20.0401 7.73547 18.9178 4.68938 17.0741 2.88577C17.0741 2.88577 17.0741 2.88577 17.0341 2.88577C16.8737 2.80561 15.8317 2.48497 12.7856 5.53106V5.49098ZM34.8697 16.1924H32.8256L29.2986 11.3427L25.7715 16.1924H23.7275L28.2966 9.93988L24.0882 4.16834H26.1323L29.2986 8.53707L32.4649 4.16834H34.509L30.3006 9.93988L34.8697 16.1924ZM45.5311 12.7856C45.5311 13.8277 45.1703 14.6693 44.489 15.3106C43.8076 15.9118 42.8056 16.2325 41.483 16.2325H35.8317V10.8617H33.1463L34.2685 9.33868H35.8317V4.20842H41.2425C42.4449 4.20842 43.4068 4.48898 44.0481 5.09018C44.6894 5.6513 45.01 6.41283 45.01 7.37475C45.01 8.33667 44.489 9.41884 43.4469 9.97996C44.1283 10.2204 44.6092 10.6212 44.9699 11.1022C45.3307 11.5832 45.491 12.1844 45.491 12.8257L45.5311 12.7856ZM37.6753 9.2986H41.1222C41.8036 9.2986 42.3647 9.13828 42.6854 8.81764C43.0461 8.49699 43.2064 8.05611 43.2064 7.41483C43.2064 6.77355 43.0461 6.45291 42.6854 6.17234C42.3246 5.8517 41.8036 5.73146 41.1222 5.73146H37.6753V9.2986ZM43.6473 12.7455C43.6473 12.1042 43.4469 11.6232 43.0862 11.3026C42.7254 10.982 42.1242 10.8216 41.3627 10.8216H37.6753V14.5892H41.3627C42.0842 14.5892 42.6453 14.4289 43.0461 14.1082C43.4469 13.7876 43.6473 13.3066 43.6473 12.7054V12.7455ZM57.8757 10.1804C57.8757 11.1022 57.7555 11.984 57.4749 12.7054C57.1944 13.4669 56.7936 14.1483 56.2725 14.7094C55.7515 15.2705 55.1102 15.7114 54.3888 16.0321C53.6673 16.3126 52.8657 16.4729 52.024 16.4729C51.1824 16.4729 50.3407 16.3126 49.6192 16.0321C48.8978 15.7515 48.2966 15.3106 47.7755 14.7094C47.2545 14.1483 46.8136 13.4669 46.5731 12.7054C46.3327 11.9439 46.1723 11.1022 46.1723 10.1403C46.1723 9.17836 46.2926 8.33667 46.5731 7.57515C46.8537 6.81363 47.2545 6.13226 47.7755 5.57114C48.2966 5.01002 48.9379 4.56914 49.6593 4.28858C50.3808 4.00802 51.1824 3.8477 52.0641 3.8477C52.9459 3.8477 53.7475 4.00802 54.4289 4.28858C55.1503 4.56914 55.7515 5.01002 56.3126 5.57114C56.8337 6.17234 57.2345 6.81363 57.515 7.57515C57.7956 8.33667 57.9158 9.17836 57.9158 10.1403L57.8757 10.1804ZM48.016 10.1804C48.016 11.5832 48.3768 12.7455 49.0982 13.5471C49.8196 14.3888 50.7816 14.7896 51.984 14.7896C53.1864 14.7896 54.1483 14.3487 54.8697 13.5471C55.5912 12.7455 55.9519 11.5832 55.9519 10.1804C55.9519 8.77756 55.5912 7.61523 54.8697 6.77355C54.1483 5.93186 53.1864 5.53106 51.984 5.53106C50.7816 5.53106 49.8196 5.93186 49.0982 6.77355C48.3768 7.61523 48.016 8.77756 48.016 10.1804ZM63.6874 9.93988L67.8958 4.16834H65.8517L62.6854 8.53707L59.519 4.16834H57.4749L61.6834 9.93988L57.1142 16.1924H59.1583L62.6854 11.3427L66.2124 16.1924H68.2565L63.6874 9.93988ZM83.5671 5.81162V9.2986H89.5391V10.8216H83.5671V14.509H90.3407V16.1523H81.7234V4.16834H90.3407V5.81162H83.5671ZM79.3186 10.6212C78.7174 10.0601 77.7154 9.65932 76.3527 9.33868L75.3106 9.13828C74.3086 8.93788 73.6272 8.65731 73.2665 8.37675C72.9058 8.09619 72.7054 7.69539 72.7054 7.13427C72.7054 6.57315 72.9058 6.17234 73.3066 5.89178C73.7074 5.61122 74.3086 5.4509 75.1102 5.4509C75.9118 5.4509 76.8337 5.6513 77.3146 6.01202C77.7555 6.37275 78.0361 6.93387 78.0761 7.69539H79.9198C79.9198 6.49299 79.479 5.57114 78.6774 4.88978C77.8757 4.20842 76.6733 3.88778 75.1102 3.88778C73.5471 3.88778 72.7455 4.20842 71.984 4.76954C71.2224 5.33066 70.8216 6.17234 70.8216 7.17435C70.8216 8.17635 71.1423 8.93788 71.7836 9.499C72.4248 10.0601 73.3467 10.4609 74.5892 10.7014L75.6313 10.9018C76.6333 11.1423 77.3547 11.3828 77.7555 11.6633C78.1563 11.9439 78.3166 12.3447 78.3166 12.8657C78.3166 13.3868 78.0761 13.988 77.5952 14.3487C77.1142 14.6693 76.4329 14.8697 75.5511 14.8697C74.6693 14.8697 73.6673 14.6293 73.1463 14.1884C72.6252 13.7475 72.3046 13.0661 72.3046 12.1844H70.4609C70.4609 13.5872 70.9419 14.6693 71.8236 15.3507C72.7054 16.0321 73.9479 16.4329 75.5511 16.4329C77.1543 16.4329 78.1563 16.1122 78.998 15.4709C79.8397 14.8297 80.2405 13.9479 80.2405 12.8257C80.2405 11.7034 79.9198 11.1423 79.3186 10.5812V10.6212ZM101.403 14.7094L101.283 12.8257C101.283 12.1443 101.122 11.6232 100.842 11.2224C100.561 10.8216 100.16 10.5411 99.5992 10.3808C100.2 10.1804 100.721 9.81964 101.042 9.33868C101.403 8.85772 101.563 8.21643 101.563 7.49499C101.563 6.45291 101.202 5.6513 100.441 5.0501C99.7194 4.4489 98.6773 4.16834 97.3948 4.16834H92.1443V16.1924H93.988V11.2625H97.4749C98.1563 11.2625 98.6773 11.4228 98.998 11.7435C99.3186 12.0641 99.479 12.6253 99.519 13.3868V14.6693C99.5992 15.3507 99.7194 15.8717 99.9198 16.1924H101.804C101.603 15.7916 101.443 15.3106 101.403 14.7094ZM94.0281 5.73146H97.3547C98.1162 5.73146 98.7174 5.89178 99.1182 6.21242C99.519 6.53307 99.7194 7.01403 99.7194 7.65531C99.7194 8.29659 99.519 8.81763 99.1182 9.17836C98.7174 9.53908 98.1563 9.6994 97.4749 9.6994H94.0281V5.73146ZM103.246 16.1924H105.09V4.16834H103.246V16.2325V16.1924ZM115.551 5.81162V4.16834H106.934V16.1924H115.551V14.5491H108.778V10.8617H114.749V9.33868H108.778V5.8517H115.551V5.81162ZM125.331 10.6212C124.729 10.0601 123.727 9.65932 122.365 9.33868L121.323 9.13828C120.321 8.93788 119.639 8.65731 119.279 8.37675C118.918 8.09619 118.717 7.69539 118.717 7.13427C118.717 6.57315 118.918 6.17234 119.319 5.89178C119.719 5.61122 120.321 5.4509 121.122 5.4509C121.924 5.4509 122.846 5.6513 123.327 6.01202C123.808 6.37275 124.048 6.93387 124.088 7.69539H125.892C125.892 6.49299 125.451 5.57114 124.649 4.88978C123.848 4.20842 122.645 3.88778 121.082 3.88778C119.519 3.88778 118.717 4.20842 117.956 4.76954C117.194 5.33066 116.794 6.17234 116.794 7.17435C116.794 8.17635 117.114 8.93788 117.755 9.499C118.397 10.0601 119.319 10.4609 120.561 10.7014L121.603 10.9018C122.605 11.1423 123.327 11.3828 123.727 11.6633C124.128 11.9439 124.329 12.3447 124.329 12.8657C124.329 13.3868 124.088 13.988 123.607 14.3487C123.126 14.6693 122.445 14.8697 121.563 14.8697C120.681 14.8697 119.679 14.6293 119.158 14.1884C118.637 13.7475 118.357 13.0661 118.317 12.1844H116.473C116.473 13.5872 116.954 14.6693 117.836 15.3507C118.717 16.0721 119.96 16.4329 121.563 16.4329C123.166 16.4329 124.168 16.1122 125.01 15.4709C125.852 14.8297 126.252 13.9479 126.252 12.8257C126.252 11.7034 125.932 11.1423 125.331 10.5812V10.6212ZM144.93 2.64529H144.008V17.7154H144.93V2.64529ZM136.513 9.93988L140.721 4.16834H138.677L135.511 8.53707L132.345 4.16834H130.301L134.509 9.93988L129.94 16.1924H131.984L135.511 11.3427L139.038 16.1924H141.082L136.513 9.93988ZM156.713 10.6212C156.112 10.0601 155.11 9.65932 153.747 9.33868L152.705 9.13828C151.703 8.93788 151.022 8.65731 150.661 8.37675C150.301 8.09619 150.1 7.69539 150.1 7.13427C150.1 6.57315 150.301 6.17234 150.701 5.89178C151.102 5.61122 151.703 5.4509 152.505 5.4509C153.307 5.4509 154.228 5.6513 154.709 6.01202C155.19 6.37275 155.431 6.93387 155.471 7.69539H157.275C157.275 6.49299 156.834 5.57114 156.032 4.88978C155.23 4.20842 154.028 3.88778 152.465 3.88778C150.902 3.88778 150.1 4.20842 149.339 4.76954C148.577 5.33066 148.176 6.17234 148.176 7.17435C148.176 8.17635 148.497 8.93788 149.138 9.499C149.78 10.0601 150.701 10.4609 151.944 10.7014L152.986 10.9018C153.988 11.1423 154.709 11.3828 155.11 11.6633C155.511 11.9439 155.711 12.3447 155.711 12.8657C155.711 13.3868 155.471 13.988 154.99 14.3487C154.509 14.6693 153.828 14.8697 152.946 14.8697C152.064 14.8697 151.062 14.6293 150.541 14.1884C150.02 13.7475 149.739 13.0661 149.699 12.1844H147.856C147.856 13.5872 148.337 14.6693 149.218 15.3507C150.1 16.0721 151.343 16.4329 152.946 16.4329C154.549 16.4329 155.551 16.1122 156.393 15.4709C157.234 14.8297 157.635 13.9479 157.635 12.8257C157.635 11.7034 157.315 11.1423 156.713 10.5812V10.6212Z",
            fill: e
          })
        }));

      function hj(e, t, r) {
        return (t = function(e) {
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
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function mj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mj(Object(r), !0).forEach(function(t) {
            hj(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gj = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bj = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vj(vj({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) gj(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yj(e.variantClassNames, e => yj(e, e => e.split(" ")[0]))
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
      const wj = (0, X.forwardRef)(({
        logo: e,
        size: t,
        asChild: r,
        children: n,
        ...o
      }, s) => {
        const a = (0, W.mergeProps)({
            className: bj({
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
          return (0, R.jsx)(_e, {
            asChild: !0,
            size: t,
            ref: s,
            ...o,
            children: e
          })
        }
        return (0, R.jsx)(_e, {
          ...a,
          ref: s,
          children: (0, R.jsx)(i, {
            size: t,
            "aria-hidden": !0
          })
        })
      })
    },
    76733(e, t, r) {
      r.d(t, {
        D: () => n
      });
      var n = !1
    },
    81299(e, t, r) {
      r.d(t, {
        b: () => i
      });
      var n = r(4637),
        o = r(68565),
        s = r(39793),
        a = Object.defineProperty,
        i = (() => a(({
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
        }, "name", {
          value: "AccessibleIcon",
          configurable: !0
        }))()
    },
    97620(e, t, r) {
      r.d(t, {
        N: () => c
      });
      var n = r(4637),
        o = r(72579),
        s = r(85049),
        a = r(49481),
        i = r(39793),
        l = Object.defineProperty,
        d = (e, t) => l(e, "name", {
          value: t,
          configurable: !0
        });

      function c(e) {
        const t = e + "CollectionProvider",
          [r, l] = (0, o.A)(t),
          [c, u] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          f = d(e => {
            const {
              scope: t,
              children: r
            } = e, o = n.useRef(null), s = n.useRef(new Map).current;
            return (0, i.jsx)(c, {
              scope: t,
              itemMap: s,
              collectionRef: o,
              children: r
            })
          }, "CollectionProvider");
        f.displayName = t;
        const p = e + "CollectionSlot",
          h = (0, a.createSlot)(p),
          m = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = u(p, r), a = (0, s.s)(t, o.collectionRef);
            return (0, i.jsx)(h, {
              ref: a,
              children: n
            })
          });
        m.displayName = p;
        const v = e + "CollectionItemSlot",
          y = "data-radix-collection-item",
          g = (0, a.createSlot)(v),
          b = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: o,
              ...a
            } = e, l = n.useRef(null), d = (0, s.s)(t, l), c = u(v, r);
            return n.useEffect(() => (c.itemMap.set(l, {
              ref: l,
              ...a
            }), () => {
              c.itemMap.delete(l)
            })), (0, i.jsx)(g, {
              [y]: "",
              ref: d,
              children: o
            })
          });

        function w(t) {
          const r = u(e + "CollectionConsumer", t);
          return n.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${y}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }
        return b.displayName = v, d(w, "useCollection"), [{
          Provider: f,
          Slot: m,
          ItemSlot: b
        }, w, l]
      }
      d(c, "createCollection");
      var u = new WeakMap,
        f = class e extends Map {
          static {
            d(this, "OrderedDict")
          }
          #e;
          constructor(e) {
            super(e), this.#e = [...super.keys()], u.set(this, !0)
          }
          set(e, t) {
            return u.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
          }
          insert(e, t, r) {
            const n = this.has(t),
              o = this.#e.length,
              s = m(e);
            let a = s >= 0 ? s : o + s;
            const i = a < 0 || a >= o ? -1 : a;
            if (i === this.size || n && i === this.size - 1 || -1 === i) return this.set(t, r), this;
            const l = this.size + (n ? 0 : 1);
            s < 0 && a++;
            const d = [...this.#e];
            let c, u = !1;
            for (let e = a; e < l; e++)
              if (a === e) {
                let o = d[e];
                d[e] === t && (o = d[e + 1]), n && this.delete(t), c = this.get(o), this.set(t, r)
              } else {
                u || d[e - 1] !== t || (u = !0);
                const r = d[u ? e : e - 1],
                  n = c;
                c = this.get(r), this.delete(r), this.set(r, n)
              } return this
          }
          with(t, r, n) {
            const o = new e(this);
            return o.insert(t, r, n), o
          }
          before(e) {
            const t = this.#e.indexOf(e) - 1;
            if (!(t < 0)) return this.entryAt(t)
          }
          setBefore(e, t, r) {
            const n = this.#e.indexOf(e);
            return -1 === n ? this : this.insert(n, t, r)
          }
          after(e) {
            let t = this.#e.indexOf(e);
            if (t = -1 === t || t === this.size - 1 ? -1 : t + 1, -1 !== t) return this.entryAt(t)
          }
          setAfter(e, t, r) {
            const n = this.#e.indexOf(e);
            return -1 === n ? this : this.insert(n + 1, t, r)
          }
          first() {
            return this.entryAt(0)
          }
          last() {
            return this.entryAt(-1)
          }
          clear() {
            return this.#e = [], super.clear()
          }
          delete(e) {
            const t = super.delete(e);
            return t && this.#e.splice(this.#e.indexOf(e), 1), t
          }
          deleteAt(e) {
            const t = this.keyAt(e);
            return void 0 !== t && this.delete(t)
          }
          at(e) {
            const t = p(this.#e, e);
            if (void 0 !== t) return this.get(t)
          }
          entryAt(e) {
            const t = p(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
          }
          indexOf(e) {
            return this.#e.indexOf(e)
          }
          keyAt(e) {
            return p(this.#e, e)
          }
          from(e, t) {
            const r = this.indexOf(e);
            if (-1 === r) return;
            let n = r + t;
            return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n)
          }
          keyFrom(e, t) {
            const r = this.indexOf(e);
            if (-1 === r) return;
            let n = r + t;
            return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n)
          }
          find(e, t) {
            let r = 0;
            for (const n of this) {
              if (Reflect.apply(e, t, [n, r, this])) return n;
              r++
            }
          }
          findIndex(e, t) {
            let r = 0;
            for (const n of this) {
              if (Reflect.apply(e, t, [n, r, this])) return r;
              r++
            }
            return -1
          }
          filter(t, r) {
            const n = [];
            let o = 0;
            for (const e of this) Reflect.apply(t, r, [e, o, this]) && n.push(e), o++;
            return new e(n)
          }
          map(t, r) {
            const n = [];
            let o = 0;
            for (const e of this) n.push([e[0], Reflect.apply(t, r, [e, o, this])]), o++;
            return new e(n)
          }
          reduce(...e) {
            const [t, r] = e;
            let n = 0,
              o = r ?? this.at(0);
            for (const r of this) o = 0 === n && 1 === e.length ? r : Reflect.apply(t, this, [o, r, n, this]), n++;
            return o
          }
          reduceRight(...e) {
            const [t, r] = e;
            let n = r ?? this.at(-1);
            for (let r = this.size - 1; r >= 0; r--) {
              const o = this.at(r);
              n = r === this.size - 1 && 1 === e.length ? o : Reflect.apply(t, this, [n, o, r, this])
            }
            return n
          }
          toSorted(t) {
            const r = [...this.entries()].sort(t);
            return new e(r)
          }
          toReversed() {
            const t = new e;
            for (let e = this.size - 1; e >= 0; e--) {
              const r = this.keyAt(e),
                n = this.get(r);
              t.set(r, n)
            }
            return t
          }
          toSpliced(...t) {
            const r = [...this.entries()];
            return r.splice(...t), new e(r)
          }
          slice(t, r) {
            const n = new e;
            let o = this.size - 1;
            if (void 0 === t) return n;
            t < 0 && (t += this.size), void 0 !== r && r > 0 && (o = r - 1);
            for (let e = t; e <= o; e++) {
              const t = this.keyAt(e),
                r = this.get(t);
              n.set(t, r)
            }
            return n
          }
          every(e, t) {
            let r = 0;
            for (const n of this) {
              if (!Reflect.apply(e, t, [n, r, this])) return !1;
              r++
            }
            return !0
          }
          some(e, t) {
            let r = 0;
            for (const n of this) {
              if (Reflect.apply(e, t, [n, r, this])) return !0;
              r++
            }
            return !1
          }
        };

      function p(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const r = h(e, t);
        return -1 === r ? void 0 : e[r]
      }

      function h(e, t) {
        const r = e.length,
          n = m(t),
          o = n >= 0 ? n : r + n;
        return o < 0 || o >= r ? -1 : o
      }

      function m(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }

      function v(e, t) {
        if (e === t) return !0;
        if ("object" != typeof e || "object" != typeof t) return !1;
        if (null == e || null == t) return !1;
        const r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (const n of r) {
          if (!Object.prototype.hasOwnProperty.call(t, n)) return !1;
          if (e[n] !== t[n]) return !1
        }
        return !0
      }

      function y(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
      }

      function g(e, t) {
        return e[1].element && t[1].element ? y(e[1].element, t[1].element) ? -1 : 1 : 0
      }

      function b(e) {
        return new MutationObserver(t => {
          for (const r of t)
            if ("childList" === r.type) return void e()
        })
      }
      d(p, "at"), d(h, "toSafeIndex"), d(m, "toSafeInteger"), d(function(e) {
        const t = e + "CollectionProvider",
          [r, l] = (0, o.A)(t),
          [c, u] = r(t, {
            collectionElement: null,
            collectionRef: {
              current: null
            },
            collectionRefObject: {
              current: null
            },
            itemMap: new f,
            setItemMap: d(() => {}, "setItemMap")
          }),
          p = d(({
            state: e,
            ...t
          }) => e ? (0, i.jsx)(m, {
            ...t,
            state: e
          }) : (0, i.jsx)(h, {
            ...t
          }), "CollectionProvider");
        p.displayName = t;
        const h = d(e => {
          const t = O();
          return (0, i.jsx)(m, {
            ...e,
            state: t
          })
        }, "CollectionInit");
        h.displayName = t + "Init";
        const m = d(e => {
          const {
            scope: t,
            children: r,
            state: o
          } = e, a = n.useRef(null), [l, d] = n.useState(null), u = (0, s.s)(a, d), [f, p] = o;
          return n.useEffect(() => {
            if (!l) return;
            const e = b(() => {});
            return e.observe(l, {
              childList: !0,
              subtree: !0
            }), () => {
              e.disconnect()
            }
          }, [l]), (0, i.jsx)(c, {
            scope: t,
            itemMap: f,
            setItemMap: p,
            collectionRef: u,
            collectionRefObject: a,
            collectionElement: l,
            children: r
          })
        }, "CollectionProviderImpl");
        m.displayName = t + "Impl";
        const y = e + "CollectionSlot",
          w = (0, a.createSlot)(y),
          C = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = u(y, r), a = (0, s.s)(t, o.collectionRef);
            return (0, i.jsx)(w, {
              ref: a,
              children: n
            })
          });
        C.displayName = y;
        const _ = e + "CollectionItemSlot",
          x = "data-radix-collection-item",
          j = (0, a.createSlot)(_),
          P = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: o,
              ...a
            } = e, l = n.useRef(null), [d, c] = n.useState(null), p = (0, s.s)(t, l, c), h = u(_, r), {
              setItemMap: m
            } = h, y = n.useRef(a);
            v(y.current, a) || (y.current = a);
            const b = y.current;
            return n.useEffect(() => {
              const e = b;
              return m(t => d ? t.has(d) ? t.set(d, {
                ...e,
                element: d
              }).toSorted(g) : (t.set(d, {
                ...e,
                element: d
              }), t.toSorted(g)) : t), () => {
                m(e => d && e.has(d) ? (e.delete(d), new f(e)) : e)
              }
            }, [d, b, m]), (0, i.jsx)(j, {
              [x]: "",
              ref: p,
              children: o
            })
          });

        function O() {
          return n.useState(new f)
        }

        function S(t) {
          const {
            itemMap: r
          } = u(e + "CollectionConsumer", t);
          return r
        }
        return P.displayName = _, d(O, "useInitCollection"), d(S, "useCollection"), [{
          Provider: p,
          Slot: C,
          ItemSlot: P
        }, {
          createCollectionScope: l,
          useCollection: S,
          useInitCollection: O
        }]
      }, "createCollection"), d(v, "shallowEqual"), d(y, "isElementPreceding"), d(g, "sortByDocumentPosition"), d(b, "getChildListObserver")
    },
    90049(e, t, r) {
      r.d(t, {
        jH: () => a
      });
      var n = r(4637),
        o = (r(39793), Object.defineProperty),
        s = n.createContext(void 0);

      function a(e) {
        const t = n.useContext(s);
        return e || t || "ltr"
      }
      o(a, "name", {
        value: "useDirection",
        configurable: !0
      })
    },
    19046(e, t, r) {
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
      }(0, Object.defineProperty)(o, "name", {
        value: "usePrevious",
        configurable: !0
      })
    }
  }
]);