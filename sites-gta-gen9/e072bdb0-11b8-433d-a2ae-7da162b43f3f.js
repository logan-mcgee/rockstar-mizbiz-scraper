try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e072bdb0-11b8-433d-a2ae-7da162b43f3f", e._sentryDebugIdIdentifier = "sentry-dbid-e072bdb0-11b8-433d-a2ae-7da162b43f3f")
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
  [5247], {
    63133(e, t, r) {
      var n = r(93082),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        s = n.useState,
        a = n.useEffect,
        i = n.useLayoutEffect,
        d = n.useDebugValue;

      function l(e) {
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
          n = s({
            inst: {
              value: r,
              getSnapshot: t
            }
          }),
          o = n[0].inst,
          c = n[1];
        return i(function() {
          o.value = r, o.getSnapshot = t, l(o) && c({
            inst: o
          })
        }, [e, r, t]), a(function() {
          return l(o) && c({
            inst: o
          }), e(function() {
            l(o) && c({
              inst: o
            })
          })
        }, [e]), d(r), r
      };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
    },
    89104(e, t, r) {
      e.exports = r(63133)
    },
    45247(e, t, r) {
      r.r(t), r.d(t, {
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => _,
        Badge: () => g,
        Body: () => at,
        Breadcrumbs: () => y,
        Button: () => Ce,
        Checkbox: () => d,
        ChipGroup: () => j,
        Code: () => dt,
        Dialog: () => w,
        Display: () => lt,
        Divider: () => Fe,
        Dropdown: () => s,
        Heading: () => ut,
        IconButton: () => Te,
        Label: () => pt,
        Lightbox: () => o,
        Loader: () => Ye,
        Pagination: () => x,
        Popover: () => C,
        ProgressBar: () => P,
        RadioGroup: () => u,
        ScrollArea: () => b,
        Spinner: () => ue,
        Switch: () => a,
        Tag: () => m,
        Text: () => vt,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => mt,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Td,
        Content: () => Ed,
        Portal: () => zd,
        Root: () => Dd,
        Trigger: () => Id,
        useTooltipContext: () => Nd
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Il,
        Close: () => Ml,
        Content: () => Sl,
        Controls: () => El,
        CssVars: () => ql,
        Download: () => Vl,
        Image: () => Dl,
        Keyboard: () => zl,
        LightboxContext: () => gl,
        OpenIcon: () => Cl,
        Overlay: () => Ol,
        Portal: () => Pl,
        Reset: () => Al,
        Root: () => bl,
        RootImplContext: () => wl,
        Thumbnail: () => jl,
        Trigger: () => xl,
        Zoom: () => Ll,
        ZoomPan: () => kl
      });
      var s = {};
      r.r(s), r.d(s, {
        Content: () => uf,
        Description: () => gf,
        Hint: () => bf,
        Label: () => yf,
        Option: () => wf,
        OptionIcon: () => xf,
        OptionText: () => _f,
        Portal: () => jf,
        Root: () => cf,
        ScrollArea: () => pf,
        StatusIcon: () => Pf,
        StatusRoot: () => Cf,
        StatusText: () => Of,
        Trigger: () => hf,
        TriggerIcon: () => vf,
        TriggerText: () => mf,
        Viewport: () => ff,
        useDropdownContext: () => lf
      });
      var a = {};
      r.r(a), r.d(a, {
        Description: () => Jf,
        Input: () => Qf,
        Label: () => Yf,
        Root: () => $f,
        useSwitchContext: () => Wf
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => hp,
        CheckMD: () => pp,
        CheckXL: () => mp,
        DashLG: () => yp,
        DashMD: () => vp,
        DashXL: () => gp
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => Lp,
        ErrorText: () => Mp,
        Group: () => qp,
        GroupDescription: () => Bp,
        GroupErrorText: () => Gp,
        GroupItems: () => Xp,
        GroupLabel: () => Fp,
        Input: () => Tp,
        Label: () => zp,
        Root: () => Ep,
        useGroupContext: () => Vp
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => ah,
        Hint: () => ih,
        Input: () => sh,
        Label: () => oh,
        Root: () => nh,
        RootContext: () => th,
        StatusIcon: () => lh,
        StatusRoot: () => dh,
        StatusText: () => ch,
        useTextAreaContext: () => rh
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => im,
        DotMD: () => am,
        DotXL: () => dm
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => Yh,
        Input: () => cm,
        Label: () => Qh,
        Option: () => lm,
        OptionDescription: () => fm,
        OptionLabel: () => um,
        Options: () => $h,
        Root: () => Wh,
        StatusIcon: () => em,
        StatusRoot: () => Jh,
        StatusText: () => tm,
        useRadioGroupContext: () => Uh
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => mv,
        Control: () => fv,
        Description: () => yv,
        Hint: () => uv,
        Icon: () => hv,
        Input: () => pv,
        Label: () => cv,
        PasswordButton: () => vv,
        Root: () => lv,
        StatusIcon: () => bv,
        StatusRoot: () => gv,
        StatusText: () => wv
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => Gv,
        CloseButton: () => Yv,
        Description: () => Uv,
        ErrorText: () => Qv,
        Footer: () => $v,
        Header: () => Xv,
        Icon: () => Hv,
        Link: () => Wv,
        Root: () => Bv,
        RootContext: () => qv,
        Title: () => Zv,
        iconStatusMap: () => Kv,
        useAlertContext: () => Fv
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => Jy,
        CloseButton: () => rg,
        Description: () => Yy,
        Icon: () => Qy,
        Link: () => tg,
        PaginationCounter: () => ag,
        PaginationNav: () => ng,
        PaginationNextButton: () => og,
        PaginationPrevButton: () => sg,
        PaginationViewport: () => eg,
        Root: () => Wy,
        RootContext: () => Zy,
        iconStatusMap: () => $y,
        useAlertBannerContext: () => Uy
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => _g,
        Icon: () => wg,
        Label: () => bg,
        Root: () => gg,
        RootContext: () => vg,
        useTagContext: () => yg
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => Cb,
        CloseButton: () => Pb,
        Description: () => _b,
        Icon: () => jb,
        Provider: () => vb,
        Root: () => wb,
        RootContext: () => gb,
        Viewport: () => yb,
        iconAppearanceMap: () => xb,
        useToastContext: () => bb
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => Vb,
        Item: () => Ab,
        OverflowMenu: () => qb,
        OverflowMenuItem: () => Fb,
        Root: () => Mb,
        RootContext: () => Lb,
        useBreadcrumbsContext: () => zb
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => Yb,
        Label: () => Qb,
        Root: () => $b,
        useBadgeContext: () => Wb
      });
      var b = {};
      r.r(b), r.d(b, {
        Corner: () => uw,
        Root: () => iw,
        Scrollbar: () => lw,
        Thumb: () => cw,
        Viewport: () => dw
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => zw,
        CloseButton: () => Tw,
        Content: () => Ow,
        Description: () => kw,
        Footer: () => Lw,
        Header: () => Dw,
        HeaderButton: () => Ew,
        HeaderTitle: () => Iw,
        Layout: () => Nw,
        Overlay: () => Pw,
        Portal: () => Cw,
        Root: () => _w,
        ScrollArea: () => Rw,
        Title: () => Sw,
        Trigger: () => jw
      });
      var _ = {};
      r.r(_), r.d(_, {
        Image: () => y_,
        Root: () => v_,
        StatusIndicator: () => g_,
        useAvatarContext: () => m_
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => D_,
        Dropdown: () => L_,
        DropdownLabel: () => z_,
        Ellipsis: () => N_,
        Item: () => S_,
        Label: () => A_,
        Next: () => R_,
        Option: () => M_,
        Pages: () => O_,
        Prev: () => k_,
        ResultsPerPage: () => T_,
        Root: () => P_
      });
      var j = {};
      r.r(j), r.d(j, {
        Icon: () => qx,
        Item: () => Vx,
        Label: () => Bx,
        Root: () => Ax,
        StatusIndicator: () => Fx,
        useChipGroupContext: () => Mx
      });
      var C = {};
      r.r(C), r.d(C, {
        Anchor: () => Ij,
        Arrow: () => Tj,
        Close: () => Lj,
        Content: () => Ej,
        Portal: () => zj,
        Root: () => kj,
        RootContext: () => Sj,
        Trigger: () => Rj,
        TriggerButton: () => Dj
      });
      var P = {};
      r.r(P), r.d(P, {
        Indicator: () => mC,
        Label: () => vC,
        Root: () => fC,
        Track: () => hC,
        UnitLabel: () => yC
      });
      var O = r(39793);

      function S(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class k extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var R = k;

      function N(e) {
        if ("string" != typeof e) throw new R(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = A.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = I[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new R(e);
          return `#${r}`
        }(e) : e;
        const r = T.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(E(e, 2), 16)), parseInt(E(e[3] || "f", 2), 16) / 255]
        }
        const n = z.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = L.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const s = M.exec(t);
        if (s) {
          const [t, r, n, o] = Array.from(s).slice(1).map(parseFloat);
          if (S(0, 100, r) !== r) throw new R(e);
          if (S(0, 100, n) !== n) throw new R(e);
          return [...q(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new R(e)
      }
      const D = e => parseInt(e.replace(/_/g, ""), 36),
        I = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = D(t.substring(0, 3)),
            n = D(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        E = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        T = new RegExp(`^#${E("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        z = new RegExp(`^#${E("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        L = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${E(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        M = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        A = /^[a-z]+$/i,
        V = e => Math.round(255 * e),
        q = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(V);
          const o = (e % 360 + 360) % 360 / 60,
            s = (1 - Math.abs(2 * n - 1)) * (t / 100),
            a = s * (1 - Math.abs(o % 2 - 1));
          let i = 0,
            d = 0,
            l = 0;
          o >= 0 && o < 1 ? (i = s, d = a) : o >= 1 && o < 2 ? (i = a, d = s) : o >= 2 && o < 3 ? (d = s, l = a) : o >= 3 && o < 4 ? (d = a, l = s) : o >= 4 && o < 5 ? (i = a, l = s) : o >= 5 && o < 6 && (i = s, l = a);
          const c = n - s / 2;
          return [i + c, d + c, l + c].map(V)
        };

      function F(e, t) {
        const [r, n, o, s] = function(e) {
          const [t, r, n, o] = N(e).map((e, t) => 3 === t ? e : e / 255), s = Math.max(t, r, n), a = Math.min(t, r, n), i = (s + a) / 2;
          if (s === a) return [0, 0, i, o];
          const d = s - a;
          return [60 * (t === s ? (r - n) / d + (r < n ? 6 : 0) : r === s ? (n - t) / d + 2 : (t - r) / d + 4), i > .5 ? d / (2 - s - a) : d / (s + a), i, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${S(0,100,100*t).toFixed()}%, ${S(0,100,100*r).toFixed()}%, ${parseFloat(S(0,1,n).toFixed(3))})`
        }(r, n, o - t, s)
      }

      function B(e, t) {
        return F(e, -t)
      }
      var X = r(93082),
        G = r(30740),
        K = r(21423),
        H = r(59236);
      const Z = {
          enabled: {
            background: (0, G.Tm)(K.no.enabled.background),
            border: (0, G.Tm)(K.no.enabled.border),
            text: (0, G.Tm)(K.no.enabled.text),
            outline: (0, G.Tm)(K.no.enabled.outline)
          },
          hover: {
            background: (0, G.Tm)(K.no.hover.background),
            border: (0, G.Tm)(K.no.hover.border),
            text: (0, G.Tm)(K.no.hover.text),
            outline: (0, G.Tm)(K.no.hover.outline)
          },
          focus: {
            background: (0, G.Tm)(K.no.focus.background),
            border: (0, G.Tm)(K.no.focus.border),
            text: (0, G.Tm)(K.no.focus.text),
            outline: (0, G.Tm)(K.no.focus.outline)
          },
          pressed: {
            background: (0, G.Tm)(K.no.pressed.background),
            border: (0, G.Tm)(K.no.pressed.border),
            text: (0, G.Tm)(K.no.pressed.text),
            outline: (0, G.Tm)(K.no.pressed.outline)
          },
          disabled: {
            background: (0, G.Tm)(K.no.disabled.background),
            border: (0, G.Tm)(K.no.disabled.border),
            text: (0, G.Tm)(K.no.disabled.text),
            outline: (0, G.Tm)(K.no.disabled.outline)
          },
          loading: {
            background: (0, G.Tm)(K.no.loading.background),
            border: (0, G.Tm)(K.no.loading.border),
            text: (0, G.Tm)(K.no.loading.text),
            outline: (0, G.Tm)(K.no.loading.outline)
          }
        },
        U = ({
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
              } = (0, H.getOrSet)(c, () => {
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
                  text: d || (e > t ? G.LU.global.color.black.static[100] : G.LU.global.color.white.static[100]),
                  hover: a || (e >= r ? F(s, n) : B(s, n)),
                  pressed: i || (e >= r ? F(s, o) : B(s, o))
                }
              });
            return e.current.style.setProperty(Z.enabled.background, s), e.current.style.setProperty(Z.enabled.border, s), e.current.style.setProperty(Z.enabled.text, u), e.current.style.setProperty(Z.hover.background, f), e.current.style.setProperty(Z.hover.border, f), e.current.style.setProperty(Z.hover.text, u), e.current.style.setProperty(Z.focus.background, f), e.current.style.setProperty(Z.focus.border, f), e.current.style.setProperty(Z.focus.text, u), e.current.style.setProperty(Z.pressed.background, p), e.current.style.setProperty(Z.pressed.border, p), e.current.style.setProperty(Z.pressed.text, u), e.current.style.setProperty(Z.loading.background, f), e.current.style.setProperty(Z.loading.border, f), e.current.style.setProperty(Z.loading.text, u), () => {
              e.current?.style.removeProperty(Z.enabled.background), e.current?.style.removeProperty(Z.enabled.border), e.current?.style.removeProperty(Z.enabled.text), e.current?.style.removeProperty(Z.hover.background), e.current?.style.removeProperty(Z.hover.border), e.current?.style.removeProperty(Z.hover.text), e.current?.style.removeProperty(Z.focus.background), e.current?.style.removeProperty(Z.focus.border), e.current?.style.removeProperty(Z.focus.text), e.current?.style.removeProperty(Z.pressed.background), e.current?.style.removeProperty(Z.pressed.border), e.current?.style.removeProperty(Z.pressed.text), e.current?.style.removeProperty(Z.loading.background), e.current?.style.removeProperty(Z.loading.border), e.current?.style.removeProperty(Z.loading.text)
            }
          }, [e.current, t, r, n, o, s, a, i, d, l, ...c])
        };
      var W = r(31821),
        $ = r(84173);
      r(77278);
      const Q = (0, X.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        Y = () => (0, X.useContext)(Q),
        J = () => {
          const {
            platformScale: e
          } = Y();
          return e
        };
      var ee = r(8789);
      const te = e => "dark" === e ? ee.xW.dark : ee.xW.light;
      const re = () => H.IS_SERVER ? null : document.body;
      (0, X.forwardRef)(({
        children: e,
        className: t,
        container: r = re(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: s,
        defaultPlatformScale: a,
        platformScale: i,
        onPlatformScaleChange: d,
        locale: l = "en-US"
      }, c) => {
        const u = (0, X.useRef)(null),
          f = (0, W.UP)(u, c),
          p = (0, X.useRef)(r),
          {
            ratio: h,
            scale: m
          } = function(e) {
            const [t, r] = (0, X.useState)(e.platformScale || e.defaultPlatformScale), n = (0, X.useCallback)(t => {
              r(t), e.onPlatformScaleChange?.(t)
            }, [e.onPlatformScaleChange]), o = (0, X.useRef)([]), s = () => {
              if (!H.IS_SERVER) {
                for (const {
                    handler: e,
                    matchMedia: t
                  }
                  of o.current) t.removeEventListener("change", e);
                o.current = []
              }
            };
            return (0, X.useEffect)(() => (e.platformScale ? n(e.platformScale) : (() => {
              if (!H.IS_SERVER) {
                s();
                for (const e in ee.wj) {
                  const t = window.matchMedia(ee.wj[e]),
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
              ratio: ee.nz[t]
            }
          }({
            onPlatformScaleChange: d,
            defaultPlatformScale: a,
            platformScale: i
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
              s = (0, X.useMemo)(() => te(o), [o]),
              a = (0, X.useMemo)(() => (e => {
                const t = te(e);
                return [ee.xW.light, ee.xW.dark].filter(e => e !== t)
              })(o), [o]);
            return {
              appearanceClass: s,
              otherAppearanceClasses: a,
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
          const a = (0, W.ZC)(s),
            i = (0, W.ZC)(e.current);
          (0, X.useEffect)(() => {
            e.current?.classList.contains(ee.X6) || e.current?.classList.add(ee.X6), e.current?.classList.contains(ee.yU) || e.current?.classList.add(ee.yU), e.current?.classList.contains(ee.Np) || e.current?.classList.add(ee.Np), e.current?.classList.add(r), e.current?.classList.remove(...n), a && s && e.current?.classList.contains(a) ? e.current?.classList.replace(a, s) : a && !s && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : s && e.current?.classList.add(s)
          }, [r, s]), (0, X.useEffect)(() => {
            e.current?.setAttribute("lang", o)
          }, [o]), (0, X.useEffect)(() => (t && e.current?.style.setProperty(ee.HZ, t.toString()), () => {
            e.current?.style.removeProperty(ee.HZ)
          }), [t]), (0, X.useEffect)(() => {
            i?.classList.remove(ee.X6), i?.classList.remove(ee.yU), i?.classList.remove(r), i?.style.removeProperty(ee.HZ), s && i?.classList.remove(s)
          }, [i])
        })({
          locale: l,
          className: t,
          appearanceClass: v,
          otherAppearanceClasses: y,
          currentScale: i ? h : -0,
          container: n ? u : p
        }), (0, O.jsx)(Q.Provider, {
          value: {
            locale: l,
            defaultColorScheme: s,
            colorScheme: g,
            defaultPlatformScale: a,
            platformScale: m
          },
          children: n ? (0, O.jsx)($.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var ne = r(66892);

      function oe(e) {
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

      function se(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? se(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = oe(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : se(Object(r)).forEach(function(t) {
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
      var de = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        le = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ae(ae({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) de(l, n, e.defaultVariants) && (r += " " + c);
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
        ue = (0, X.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = ce,
          testId: n,
          ...o
        }, s) => {
          const a = J(),
            i = "string" == typeof r ? r : r?.[a] ?? r.default ?? ce,
            d = (0, H.mergeProps)({
              className: le({
                size: i
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, O.jsx)(ne.b, {
            label: e,
            children: (0, O.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...d,
              ref: s,
              viewBox: "0 0 16 16",
              children: [!t && (0, O.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, O.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var fe = r(81270),
        pe = r(66760);

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

      function me(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? me(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = he(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : me(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ye(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ge = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        be = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ve(ve({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ge(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ye(e.variantClassNames, e => ye(e, e => e.split(" ")[0]))
            }
          }, t
        },
        we = be({
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
      be({
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
      var _e = be({
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
        xe = be({
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
        je = be({
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
        iconRight: s,
        iconRightLabel: a,
        appearance: i,
        size: d = "MD",
        fullWidth: l = !1,
        isLoading: c = !1,
        spinnerLabel: u,
        preventFocusOnPress: f = !1,
        override_darkenLuminance: p = .035,
        override_textLuminance: h = .179,
        override_hoverLuminance: m = .08,
        override_pressedLuminance: v = .15,
        override_backgroundColor: y,
        override_hoverColor: g,
        override_pressedColor: b,
        override_textColor: w,
        ..._
      }, x) => {
        const j = (0, X.useRef)(null),
          C = (0, W.UP)(j, x),
          P = J(),
          S = "string" == typeof d ? d : d?.[P] ?? d.default ?? "MD",
          {
            buttonProps: k
          } = (0, W.sL)((0, H.mergeProps)(_, {
            isLoading: c,
            preventFocusOnPress: f
          }), j);
        U({
          refs: {
            buttonRef: j
          },
          config: {
            textLuminance: h,
            darkenLuminance: p,
            hoverLuminance: m,
            pressedLuminance: v
          },
          overrides: {
            backgroundColor: y,
            hoverColor: g,
            pressedColor: b,
            textColor: w
          },
          enabled: "accent" === i
        }, [t]);
        const R = (0, H.mergeProps)({
            className: we({
              appearance: i,
              size: S,
              fullWidth: l,
              iconLeft: !!n,
              iconRight: !!s
            }),
            "data-testid": e
          }, k),
          N = n && pe[n],
          D = s && pe[s],
          I = t ? $.DX : "button",
          E = l && (D || D && N);
        return (0, O.jsxs)(I, {
          ref: C,
          ...R,
          children: [E && (0, O.jsx)("div", {
            className: "foundry_17pcofy15"
          }), N && (0, O.jsx)(N, {
            label: o || "",
            size: S,
            className: (0, fe.clsx)(_e({
              size: S
            }), "foundry_17pcofy11")
          }), (0, O.jsx)($.xV, {
            children: r
          }), D && (0, O.jsx)(D, {
            label: a || "",
            size: S,
            className: (0, fe.clsx)(_e({
              size: S
            }), xe({
              fullWidth: l
            }))
          }), c && (0, O.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, O.jsx)(ue, {
              label: u || "",
              size: "inline" + ("XL" === S ? "LG" : "MD"),
              hideTrack: !0,
              className: je({
                size: S
              })
            })
          })]
        })
      });

      function Pe(e) {
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

      function Oe(e, t) {
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
          t % 2 ? Oe(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Pe(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oe(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ke(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Re = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ne = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Se(Se({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Re(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ke(e.variantClassNames, e => ke(e, e => e.split(" ")[0]))
            }
          }, t
        },
        De = Ne({
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
        Ie = Ne({
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
        Ee = Ne({
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
      const Te = (0, X.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: s = !1,
        size: a = "LG",
        children: i,
        isLoading: d = !1,
        spinnerLabel: l,
        preventFocusOnPress: c = !1,
        override_darkenLuminance: u = .035,
        override_textLuminance: f = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: m,
        override_hoverColor: v,
        override_pressedColor: y,
        override_textColor: g,
        ...b
      }, w) => {
        const _ = (0, X.useRef)(null),
          x = (0, W.UP)(_, w),
          j = J(),
          C = "string" == typeof a ? a : a?.[j] ?? a.default ?? "LG",
          {
            buttonProps: P
          } = (0, W.sL)((0, H.mergeProps)(b, {
            isLoading: d,
            preventFocusOnPress: c
          }), _);
        U({
          refs: {
            buttonRef: _
          },
          config: {
            textLuminance: f,
            darkenLuminance: u,
            hoverLuminance: p,
            pressedLuminance: h
          },
          overrides: {
            backgroundColor: m,
            hoverColor: v,
            pressedColor: y,
            textColor: g
          },
          enabled: "accent" === o
        }, [t]);
        const S = (0, H.mergeProps)({
            className: Ie({
              appearance: o,
              size: C,
              fullWidth: s
            }),
            "data-testid": e
          }, P),
          k = pe[r],
          R = t ? $.DX : "button";
        return (0, O.jsxs)(R, {
          ref: x,
          ...S,
          children: [k && (0, O.jsx)(k, {
            label: n || "",
            size: C,
            className: De({
              size: C
            })
          }), (0, O.jsx)($.xV, {
            children: i
          }), d && (0, O.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, O.jsx)(ue, {
              label: l || "",
              size: C && "SM" !== C ? `inline${C}` : "inlineMD",
              hideTrack: !0,
              className: Ee({
                size: C
              })
            })
          })]
        })
      });

      function ze(e) {
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

      function Me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Le(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ze(o)) in n ? Object.defineProperty(n, o, {
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

      function Ae(e, t) {
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
        qe = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Me(Me({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ve(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ae(e.variantClassNames, e => Ae(e, e => e.split(" ")[0]))
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
      const Fe = (0, X.forwardRef)(({
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
          c = o ? $.DX : d;
        return (0, O.jsx)(c, {
          ref: i,
          className: (0, fe.clsx)(qe({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": s,
          ...a
        })
      });

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

      function Xe(e, t) {
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
          t % 2 ? Xe(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Be(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xe(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ke(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var He = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ze = "var(--foundry_9dxgbc2)",
        Ue = "var(--foundry_9dxgbc3)",
        We = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ge(Ge({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) He(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ke(e.variantClassNames, e => Ke(e, e => e.split(" ")[0]))
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
        $e = "var(--foundry_9dxgbc0)",
        Qe = "var(--foundry_9dxgbc1)";
      const Ye = (0, X.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: s = "MD",
        ...a
      }, i) => {
        const d = J(),
          l = "string" == typeof s ? s : s?.[d] ?? s.default ?? "MD",
          c = (0, H.mergeProps)({
            className: We({
              size: l
            }),
            "data-testid": t,
            style: (0, G.DI)({
              [$e]: n?.pulseColorBackground,
              [Qe]: n?.pulseColorForeground,
              [Ze]: n?.gradientColorBackground,
              [Ue]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, a),
          u = e ? $.DX : "div";
        return (0, O.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, O.jsx)($.xV, {
            children: r
          }) : (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, O.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function Je(e) {
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

      function et(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? et(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Je(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : et(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function rt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var nt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ot = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = tt(tt({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) nt(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rt(e.variantClassNames, e => rt(e, e => e.split(" ")[0]))
            }
          }, t
        },
        st = ot({
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
      const at = (0, X.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? $.DX : "p",
          i = (0, H.mergeProps)({
            className: st({
              size: n,
              appearance: r
            })
          }, o);
        return (0, O.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var it = ot({
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
      const dt = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const s = e ? $.DX : "p",
            a = (0, H.mergeProps)({
              className: it({
                appearance: r
              })
            }, n);
          return (0, O.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        lt = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "h1",
            s = (0, H.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        });
      var ct = ot({
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
      const ut = (0, X.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? $.DX : `h${7===t?6:t}`,
          a = (0, H.mergeProps)(n, {
            className: ct({
              level: t
            })
          });
        return (0, O.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...a
        })
      });
      var ft = ot({
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
      const pt = (0, X.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? $.DX : "p",
          i = (0, H.mergeProps)({
            className: ft({
              size: n,
              appearance: r
            })
          }, o);
        return (0, O.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var ht = ot({
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
      const mt = {
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
        vt = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const s = e ? $.DX : mt[r] || "span",
            a = (0, H.mergeProps)(n, {
              className: ht({
                semantic: r
              })
            });
          return (0, O.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        });
      var yt = r(35812),
        gt = r(67347);
      const bt = {
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

      function wt(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function _t(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -wt(t - e, r - t, n) + t : e > r ? +wt(e - r, r - t, n) + r : e
      }

      function xt(e, t, r) {
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

      function jt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jt(Object(r), !0).forEach(function(t) {
            xt(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const Pt = {
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

      function Ot(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const St = ["enter", "leave"];
      const kt = ["gotpointercapture", "lostpointercapture"];

      function Rt(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = kt.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function Nt(e) {
        return "touches" in e
      }

      function Dt(e) {
        return Nt(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function It(e) {
        return Nt(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Et(e, t) {
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

      function Tt(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return Et(r, n)
      }

      function zt(e) {
        const t = It(e);
        return Nt(e) ? t.identifier : t.pointerId
      }

      function Lt(e) {
        const t = It(e);
        return [t.clientX, t.clientY]
      }

      function Mt(e) {
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

      function Vt() {}

      function qt(...e) {
        return 0 === e.length ? Vt : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function Ft(e, t) {
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
            bt.addTo(t._distance, e)
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
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = At(r.bounds, t)), this.setup && this.setup()), t.movement = u, this.computeOffset()));
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
              return [_t(t, s, a, n), _t(r, i, d, o)]
            }(t._bounds, t.offset, w), t.delta = bt.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = bt.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            bt.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(Ct(Ct(Ct({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Xt extends Bt {
        constructor(...e) {
          super(...e), xt(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = bt.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = bt.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Dt(e)] : r.axisThreshold;
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
        Kt = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => Ct(Ct({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return bt.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? bt.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Gt
          },
          threshold: e => bt.toVector(e, 0)
        },
        Ht = Ct(Ct({}, Kt), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Ht.bounds(e(t));
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
        Zt = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Ut = "undefined" != typeof window && window.document && window.document.createElement;

      function Wt() {
        return Ut && "ontouchstart" in window
      }
      const $t = {
          isBrowser: Ut,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Wt(),
          touchscreen: Wt() || Ut && window.navigator.maxTouchPoints > 1,
          pointer: Ut && "onpointerdown" in window,
          pointerLock: Ut && "exitPointerLock" in window.document
        },
        Qt = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Yt = Ct(Ct({}, Ht), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && $t.pointerLock, $t.touch && r ? "touch" : this.pointerLock ? "mouse" : $t.pointer && !o ? "pointer" : $t.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, $t.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const s = bt.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, s
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(bt.toVector(e)),
              distance: this.transform(bt.toVector(t)),
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
          axisThreshold: e => e ? Ct(Ct({}, Qt), e) : Qt,
          keyboardDisplacement: (e = 10) => e
        });

      function Jt(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [s, a] = e._direction;
        (t < 0 && n > 0 && s < 0 || t > 0 && n < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && a < 0 || r > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const er = Ct(Ct({}, Kt), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !$t.touch && $t.gesture) return "gesture";
            if ($t.touch && n) return "touch";
            if ($t.touchscreen) {
              if ($t.pointer) return "pointer";
              if ($t.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = Ft(At(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              s = e => {
                const t = Ft(At(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), s()] : e => [o(e), s(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, bt.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        tr = Ct(Ct({}, Ht), {}, {
          mouseOnly: (e = !0) => e
        }),
        rr = Ht,
        nr = Ht,
        or = Ct(Ct({}, Ht), {}, {
          mouseOnly: (e = !0) => e
        }),
        sr = new Map,
        ar = new Map;

      function ir(e) {
        sr.set(e.key, e.engine), ar.set(e.key, e.resolver)
      }
      const dr = {
          key: "drag",
          engine: class extends Xt {
            constructor(...e) {
              super(...e), xt(this, "ingKey", "dragging")
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
                e._bounds = Ht.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = zt(e), r._pointerActive = !0, this.computeValues(Lt(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Dt(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = zt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Lt(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = bt.sub(o, t._values), this.computeValues(o)), bt.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = zt(e);
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
              const t = Zt[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, bt.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Zt && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
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
          engine: class extends Xt {
            constructor(...e) {
              super(...e), xt(this, "ingKey", "hovering")
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
              t._movement = t._delta = bt.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: or
        },
        cr = {
          key: "move",
          engine: class extends Xt {
            constructor(...e) {
              super(...e), xt(this, "ingKey", "moving")
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
              r._delta = bt.sub(t, r._values), bt.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: tr
        },
        ur = {
          key: "pinch",
          engine: class extends Bt {
            constructor(...e) {
              super(...e), xt(this, "ingKey", "pinching"), xt(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? bt.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = Tt(e, t._touchIds);
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
              const o = Et(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Tt(e, this.state._touchIds);
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
              t._movement = [e.scale - 1, e.rotation], t._delta = bt.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-Mt(e)[1] / 100 * t.offset[0], 0], bt.addTo(t._movement, t._delta), Jt(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: er
        },
        fr = {
          key: "scroll",
          engine: class extends Xt {
            constructor(...e) {
              super(...e), xt(this, "ingKey", "scrolling")
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
              t._delta = bt.sub(r, t._values), bt.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: rr
        },
        pr = {
          key: "wheel",
          engine: class extends Xt {
            constructor(...e) {
              super(...e), xt(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Mt(e), bt.addTo(t._movement, t._delta), Jt(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: nr
        };
      const hr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = ($t.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        mr = ["target", "eventOptions", "window", "enabled", "transform"];

      function vr(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = vr(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class yr {
        constructor(e, t) {
          xt(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const s = this._listeners,
            a = function(e, t = "") {
              const r = Pt[e];
              return e + (r && r[t] || t)
            }(t, r),
            i = Ct(Ct({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class gr {
        constructor() {
          xt(this, "_timeouts", new Map)
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
      class br {
        constructor(e) {
          var t, r;
          xt(this, "gestures", new Set), xt(this, "_targetEventStore", new yr(this)), xt(this, "gestureEventStores", {}), xt(this, "gestureTimeoutStores", {}), xt(this, "handlers", {}), xt(this, "config", {}), xt(this, "pointerIds", new Set), xt(this, "touchIds", new Set), xt(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && wr(t, "drag"), r.wheel && wr(t, "wheel"), r.scroll && wr(t, "scroll"), r.move && wr(t, "move"), r.pinch && wr(t, "pinch"), r.hover && wr(t, "hover")
        }
        setEventIds(e) {
          return Nt(e) ? (this.touchIds = new Set(function(e) {
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
              }(n, mr);
            if (r.shared = vr({
                target: o,
                eventOptions: s,
                window: a,
                enabled: i,
                transform: d
              }, hr), t) {
              const e = ar.get(t);
              r[t] = vr(Ct({
                shared: r.shared
              }, l), e)
            } else
              for (const e in l) {
                const t = ar.get(e);
                t && (r[e] = vr(Ct({
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
                  s = _r(r, o.eventOptions, !!n);
                o.enabled && new(sr.get(t))(this, e, t).bind(s)
              }
              const o = _r(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](Ct(Ct({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = qt(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: s
              } = Rt(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: s
              })
            }
          }
        }
      }

      function wr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new yr(e, t), e.gestureTimeoutStores[t] = new gr
      }
      const _r = (e, t, r) => (n, o, s, a = {}, i = !1) => {
          var d, l;
          const c = null !== (d = a.capture) && void 0 !== d ? d : t.capture,
            u = null !== (l = a.passive) && void 0 !== l ? l : t.passive;
          let f = i ? n : function(e, t = "", r = !1) {
            const n = Pt[e],
              o = n && n[t] || t;
            return "on" + Ot(e) + Ot(o) + (function(e = !1, t) {
              return e && !St.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && u && (f += "Passive"), e[f] = e[f] || [], e[f].push(s)
        },
        xr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function jr(e, t, r, n, o, s) {
        if (!e.has(r)) return;
        if (!sr.has(n)) return;
        const a = r + "Start",
          i = r + "End";
        o[n] = e => {
          let n;
          return e.first && a in t && t[a](e), r in t && (n = t[r](e)), e.last && i in t && t[i](e), n
        }, s[n] = s[n] || {}
      }

      function Cr(e, t = {}, r, n) {
        const o = X.useMemo(() => new br(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), X.useEffect(o.effect.bind(o)), X.useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function Pr(e, t) {
        const r = ([dr, ur, fr, pr, cr, lr].forEach(ir), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) xr.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), s = {};
            return jr(o, r, "onDrag", "drag", s, t), jr(o, r, "onWheel", "wheel", s, t), jr(o, r, "onScroll", "scroll", s, t), jr(o, r, "onPinch", "pinch", s, t), jr(o, r, "onMove", "move", s, t), jr(o, r, "onHover", "hover", s, t), {
              handlers: s,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return Cr(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const Or = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Sr = ([e, t]) => ({
        x: e,
        y: t
      }), kr = (e, t) => (e.x = t.x, e.y = t.y, e), Rr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Nr = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Dr = (e, t, r) => Math.min(Math.max(e, t), r);

      function Ir() {
        return Ir = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Ir.apply(null, arguments)
      }
      var Er = ["shift", "alt", "meta", "mod", "ctrl"],
        Tr = {
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

      function zr(e) {
        return (e && Tr[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Lr(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Mr(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return zr(e)
        });
        return Ir({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Er.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && qr([zr(e.key), zr(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && Fr([zr(e.key), zr(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Ar.clear()
      });
      var Ar = new Set;

      function Vr(e) {
        return Array.isArray(e)
      }

      function qr(e) {
        var t = Array.isArray(e) ? e : [e];
        Ar.has("meta") && Ar.forEach(function(e) {
          return ! function(e) {
            return Er.includes(e)
          }(e) && Ar.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Ar.add(e.toLowerCase())
        })
      }

      function Fr(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Ar.clear() : t.forEach(function(e) {
          return Ar.delete(e.toLowerCase())
        })
      }

      function Br(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          s = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && s ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Vr(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Xr = (0, X.createContext)(void 0);

      function Gr(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, O.jsx)(Xr.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Kr(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Kr(e[n], t[n])
        }, !0) : e === t
      }
      var Hr = (0, X.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Zr = function(e) {
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
                  return !Kr(t, e)
                })
              })
            }, []);
          return (0, O.jsx)(Hr.Provider, {
            value: {
              enabledScopes: s,
              hotkeys: d,
              enableScope: c,
              disableScope: u,
              toggleScope: f
            },
            children: (0, O.jsx)(Gr, {
              addHotkey: p,
              removeHotkey: h,
              children: n
            })
          })
        },
        Ur = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Wr = "undefined" != typeof window ? X.useLayoutEffect : X.useEffect;

      function $r(e, t, r, n) {
        var o = (0, X.useState)(null),
          s = o[0],
          a = o[1],
          i = (0, X.useRef)(!1),
          d = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          l = Vr(e) ? e.join(null == d ? void 0 : d.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          u = (0, X.useCallback)(t, null != c ? c : []),
          f = (0, X.useRef)(u);
        f.current = c ? u : t;
        var p = function(e) {
            var t = (0, X.useRef)(void 0);
            return Kr(t.current, e) || (t.current = e), t.current
          }(d),
          h = (0, X.useContext)(Hr).enabledScopes,
          m = (0, X.useContext)(Xr);
        return Wr(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Br(e, ["input", "textarea", "select"]) || Br(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== s) {
                    var n = s.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== s && !s.contains(n.activeElement)) return void Ur(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && Lr(l, null == p ? void 0 : p.splitKey).forEach(function(r) {
                    var n, o = Mr(r, null == p ? void 0 : p.combinationKey);
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
                          y = zr(f),
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
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (Vr(n = c) ? n : n.split(o)).every(function(e) {
                          return Ar.has(e.trim().toLowerCase())
                        })) : !c)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && i.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void Ur(e);
                      f.current(e, o), t || (i.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (qr(zr(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Fr(zr(e.code)), i.current = !1, null != p && p.keyup && r(e, !0))
              },
              a = s || (null == d ? void 0 : d.document) || document;
            return a.addEventListener("keyup", o, null == d ? void 0 : d.eventListenerOptions), a.addEventListener("keydown", n, null == d ? void 0 : d.eventListenerOptions), m && Lr(l, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return m.addHotkey(Mr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                a.removeEventListener("keyup", o, null == d ? void 0 : d.eventListenerOptions), a.removeEventListener("keydown", n, null == d ? void 0 : d.eventListenerOptions), m && Lr(l, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return m.removeHotkey(Mr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [s, l, p, h]), a
      }

      function Qr(e) {
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

      function Yr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Jr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yr(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Qr(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function en(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var tn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        rn = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Jr(Jr({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) tn(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return en(e.variantClassNames, e => en(e, e => e.split(" ")[0]))
            }
          }, t
        },
        nn = rn({
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
        on = rn({
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
      yt.gsap.registerPlugin(gt.useGSAP);
      const sn = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        an = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        dn = (0, G.Tm)("var(--foundry_1a74xwb0)");
      var ln = r(54422),
        cn = r(57338),
        un = r(74775);
      const fn = ({
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
          }, [r]), o ? (0, O.jsx)(ln.A, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        pn = {
          "en-US": r.e(4974).then(r.bind(r, 84974)),
          "de-DE": r.e(5389).then(r.bind(r, 55389)),
          "es-ES": r.e(4235).then(r.bind(r, 4235)),
          "es-MX": r.e(5038).then(r.bind(r, 85038)),
          "fr-FR": r.e(9947).then(r.bind(r, 59947)),
          "it-IT": r.e(2837).then(r.bind(r, 72837)),
          "ja-JP": r.e(622).then(r.bind(r, 90622)),
          "ko-KR": r.e(4756).then(r.bind(r, 4756)),
          "pl-PL": r.e(9447).then(r.bind(r, 69447)),
          "pt-BR": r.e(8915).then(r.bind(r, 8915)),
          "ru-RU": r.e(6501).then(r.bind(r, 26501)),
          "zh-CN": r.e(4572).then(r.bind(r, 74572)),
          "zh-TW": r.e(4144).then(r.bind(r, 34144))
        };
      class hn {
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
          return r ? t : Dr(t, this.max[e], this.min[e])
        }
      }
      class mn {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Nr(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return Nr(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Nr(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class vn {
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
      class yn {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", kr(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (kr(this.prevTap, {
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
      class gn {
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
          e.src = this.thumbnail.currentSrc ?? "", await Or(e)
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
      class bn {
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
      class wn extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class _n extends vn {
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
          if (!this.dispatch(e, new wn(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class xn {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Sr(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, kr(this.startPan, this.slide.pan)
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
            s = kr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let a = kr({
            x: 0,
            y: 0
          }, s);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, kr(this.startPan, s)), n && (a = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), a = {
            x: this.slide.bounds.correctPan("x", a.x),
            y: this.slide.bounds.correctPan("y", a.y)
          }, this.slide.setZoomLevel(t, !1), d = s, ((i = a).x !== d.x || i.y !== d.y || n || o) && (kr(this.slide.pan, a), this.slide.setZoomLevel(r))
        }
      }
      class jn {
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
      class Cn extends vn {
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
          super(), this.width = e, this.height = t, this.opener = new gn({
            slide: this
          }), this.bounds = new hn({
            slide: this
          }), this.dragHandler = new yn({
            options: s,
            slide: this
          }), this.scrollWheel = new bn({
            slide: this
          }), this.zoomHandler = new xn({
            slide: this
          }), this.zoomLevels = new mn({
            options: r,
            slide: this
          }), this.tapHandler = new _n({
            options: n,
            slide: this
          }), this.panAreaSize = new jn({
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
          e = Nr(e), r || (e = Dr(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Rr(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Rr(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), kr(this.pan, this.bounds.center)
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
      var Pn = r(18552);
      const On = (0, cn.YK)({
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
      var Sn = "foundry_bc732x1";
      const kn = (0, X.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ($r(e, e => r?.(e), [r]), (0, O.jsx)(at, {
        size: "XS",
        className: (0, fe.clsx)("foundry_bc732x0", {
          [Sn]: t
        }),
        asChild: !0,
        children: (0, O.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Rn = Kn(),
        Nn = e => Fn(e, Rn),
        Dn = Kn();
      Nn.write = e => Fn(e, Dn);
      var In = Kn();
      Nn.onStart = e => Fn(e, In);
      var En = Kn();
      Nn.onFrame = e => Fn(e, En);
      var Tn = Kn();
      Nn.onFinish = e => Fn(e, Tn);
      var zn = [];
      Nn.setTimeout = (e, t) => {
        const r = Nn.now() + t,
          n = () => {
            const e = zn.findIndex(e => e.cancel == n);
            ~e && zn.splice(e, 1), Vn -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return zn.splice(Ln(r), 0, o), Vn += 1, Bn(), o
      };
      var Ln = e => ~(~zn.findIndex(t => t.time > e) || ~zn.length);
      Nn.cancel = e => {
        In.delete(e), En.delete(e), Tn.delete(e), Rn.delete(e), Dn.delete(e)
      }, Nn.sync = e => {
        qn = !0, Nn.batchedUpdates(e), qn = !1
      }, Nn.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Nn.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          In.delete(r), t = null
        }, n
      };
      var Mn = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Nn.use = e => Mn = e, Nn.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Nn.batchedUpdates = e => e(), Nn.catch = console.error, Nn.frameLoop = "always", Nn.advance = () => {
        "demand" !== Nn.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Gn()
      };
      var An = -1,
        Vn = 0,
        qn = !1;

      function Fn(e, t) {
        qn ? (t.delete(e), e(0)) : (t.add(e), Bn())
      }

      function Bn() {
        An < 0 && (An = 0, "demand" !== Nn.frameLoop && Mn(Xn))
      }

      function Xn() {
        ~An && (Mn(Xn), Nn.batchedUpdates(Gn))
      }

      function Gn() {
        const e = An;
        An = Nn.now();
        const t = Ln(An);
        t && (Hn(zn.splice(0, t), e => e.handler()), Vn -= t), Vn ? (In.flush(), Rn.flush(e ? Math.min(64, An - e) : 16.667), En.flush(), Dn.flush(), Tn.flush()) : An = -1
      }

      function Kn() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Vn += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Vn -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Vn -= t.size, Hn(t, t => t(r) && e.add(t)), Vn += e.size, t = e)
          }
        }
      }

      function Hn(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Nn.catch(e)
          }
        })
      }
      var Zn = Object.defineProperty,
        Un = {};

      function Wn() {}((e, t) => {
        for (var r in t) Zn(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Un, {
        assign: () => co,
        colors: () => ao,
        createStringInterpolator: () => ro,
        skipAnimation: () => io,
        to: () => no,
        willAdvance: () => lo
      });
      var $n = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Qn(e, t) {
        if ($n.arr(e)) {
          if (!$n.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var Yn = (e, t) => e.forEach(t);

      function Jn(e, t, r) {
        if ($n.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var eo = e => $n.und(e) ? [] : $n.arr(e) ? e : [e];

      function to(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Yn(r, t)
        }
      }
      var ro, no, oo = (e, ...t) => to(e, e => e(...t)),
        so = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        ao = null,
        io = !1,
        lo = Wn,
        co = e => {
          e.to && (no = e.to), e.now && (Nn.now = e.now), void 0 !== e.colors && (ao = e.colors), null != e.skipAnimation && (io = e.skipAnimation), e.createStringInterpolator && (ro = e.createStringInterpolator), e.requestAnimationFrame && Nn.use(e.requestAnimationFrame), e.batchedUpdates && (Nn.batchedUpdates = e.batchedUpdates), e.willAdvance && (lo = e.willAdvance), e.frameLoop && (Nn.frameLoop = e.frameLoop)
        },
        uo = new Set,
        fo = [],
        po = [],
        ho = 0,
        mo = {
          get idle() {
            return !uo.size && !fo.length
          },
          start(e) {
            ho > e.priority ? (uo.add(e), Nn.onStart(vo)) : (yo(e), Nn(bo))
          },
          advance: bo,
          sort(e) {
            if (ho) Nn.onFrame(() => mo.sort(e));
            else {
              const t = fo.indexOf(e);
              ~t && (fo.splice(t, 1), go(e))
            }
          },
          clear() {
            fo = [], uo.clear()
          }
        };

      function vo() {
        uo.forEach(yo), uo.clear(), Nn(bo)
      }

      function yo(e) {
        fo.includes(e) || go(e)
      }

      function go(e) {
        fo.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(fo), 0, e)
      }

      function bo(e) {
        const t = po;
        for (let r = 0; r < fo.length; r++) {
          const n = fo[r];
          ho = n.priority, n.idle || (lo(n), n.advance(e), n.idle || t.push(n))
        }
        return ho = 0, (po = fo).length = 0, (fo = t).length > 0
      }
      var wo = "[-+]?\\d*\\.?\\d+",
        _o = wo + "%";

      function xo(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var jo = new RegExp("rgb" + xo(wo, wo, wo)),
        Co = new RegExp("rgba" + xo(wo, wo, wo, wo)),
        Po = new RegExp("hsl" + xo(wo, _o, _o)),
        Oo = new RegExp("hsla" + xo(wo, _o, _o, wo)),
        So = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ko = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ro = /^#([0-9a-fA-F]{6})$/,
        No = /^#([0-9a-fA-F]{8})$/;

      function Do(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Io(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          s = Do(o, n, e + 1 / 3),
          a = Do(o, n, e),
          i = Do(o, n, e - 1 / 3);
        return Math.round(255 * s) << 24 | Math.round(255 * a) << 16 | Math.round(255 * i) << 8
      }

      function Eo(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function To(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function zo(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Lo(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Mo(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Ro.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : ao && void 0 !== ao[e] ? ao[e] : (t = jo.exec(e)) ? (Eo(t[1]) << 24 | Eo(t[2]) << 16 | Eo(t[3]) << 8 | 255) >>> 0 : (t = Co.exec(e)) ? (Eo(t[1]) << 24 | Eo(t[2]) << 16 | Eo(t[3]) << 8 | zo(t[4])) >>> 0 : (t = So.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = No.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ko.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Po.exec(e)) ? (255 | Io(To(t[1]), Lo(t[2]), Lo(t[3]))) >>> 0 : (t = Oo.exec(e)) ? (Io(To(t[1]), Lo(t[2]), Lo(t[3])) | zo(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Ao = (e, t, r) => {
          if ($n.fun(e)) return e;
          if ($n.arr(e)) return Ao({
            range: e,
            output: t,
            extrapolate: r
          });
          if ($n.str(e.output[0])) return ro(e);
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
        Vo = 1.70158,
        qo = 1.525 * Vo,
        Fo = Vo + 1,
        Bo = 2 * Math.PI / 3,
        Xo = 2 * Math.PI / 4.5,
        Go = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Ko = {
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
          easeInBack: e => Fo * e * e * e - Vo * e * e,
          easeOutBack: e => 1 + Fo * Math.pow(e - 1, 3) + Vo * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - qo) / 2 : (Math.pow(2 * e - 2, 2) * ((qo + 1) * (2 * e - 2) + qo) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Bo),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Bo) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Xo) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Xo) / 2 + 1,
          easeInBounce: e => 1 - Go(1 - e),
          easeOutBounce: Go,
          easeInOutBounce: e => e < .5 ? (1 - Go(1 - 2 * e)) / 2 : (1 + Go(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Ho = Symbol.for("FluidValue.get"),
        Zo = Symbol.for("FluidValue.observers"),
        Uo = e => Boolean(e && e[Ho]),
        Wo = e => e && e[Ho] ? e[Ho]() : e,
        $o = e => e[Zo] || null;

      function Qo(e, t) {
        const r = e[Zo];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var Yo = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Jo(this, e)
          }
        },
        Jo = (e, t) => ns(e, Ho, t);

      function es(e, t) {
        if (e[Ho]) {
          let r = e[Zo];
          r || ns(e, Zo, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function ts(e, t) {
        const r = e[Zo];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Zo] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var rs, ns = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        os = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ss = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        as = new RegExp(`(${os.source})(%|[a-z]+)`, "i"),
        is = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        ds = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        ls = e => {
          const [t, r] = cs(e);
          if (!t || so()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && ds.test(r) ? ls(r) : r || e
        },
        cs = e => {
          const t = ds.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        us = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        fs = e => {
          rs || (rs = ao ? new RegExp(`(${Object.keys(ao).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => Wo(e).replace(ds, ls).replace(ss, Mo).replace(rs, Mo)),
            r = t.map(e => e.match(os).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => Ao({
              ...e,
              output: t
            }));
          return e => {
            const r = !as.test(t[0]) && t.find(e => as.test(e))?.replace(os, "");
            let n = 0;
            return t[0].replace(os, () => `${o[n++](e)}${r||""}`).replace(is, us)
          }
        },
        ps = "react-spring: ",
        hs = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${ps}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        ms = hs(console.warn),
        vs = hs(console.warn);

      function ys(e) {
        return $n.str(e) && ("#" == e[0] || /\d/.test(e) || !so() && ds.test(e) || e in (ao || {}))
      }
      var gs = so() ? X.useEffect : X.useLayoutEffect;

      function bs() {
        const e = (0, X.useState)()[1],
          t = (() => {
            const e = (0, X.useRef)(!1);
            return gs(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var ws = e => (0, X.useEffect)(e, _s),
        _s = [],
        xs = Symbol.for("Animated:node"),
        js = e => e && e[xs],
        Cs = (e, t) => {
          return r = e, n = xs, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Ps = e => e && e[xs] && e[xs].getPayload(),
        Os = class {
          constructor() {
            Cs(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Ss = class e extends Os {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, $n.num(this._value) && (this.lastPosition = this._value)
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
            return $n.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, $n.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        ks = class e extends Ss {
          constructor(e) {
            super(0), this._string = null, this._toString = Ao({
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
            if ($n.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Ao({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Rs = {
          dependencies: null
        },
        Ns = class extends Os {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Jn(this.source, (r, n) => {
              var o;
              (o = r) && o[xs] === o ? t[n] = r.getValue(e) : Uo(r) ? t[n] = Wo(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Yn(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Jn(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Rs.dependencies && Uo(e) && Rs.dependencies.add(e);
            const t = Ps(e);
            t && Yn(t, e => this.add(e))
          }
        },
        Ds = class e extends Ns {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Is)), !0)
          }
        };

      function Is(e) {
        return (ys(e) ? ks : Ss).create(e)
      }

      function Es(e) {
        const t = js(e);
        return t ? t.constructor : $n.arr(e) ? Ds : ys(e) ? ks : Ss
      }
      var Ts = (e, t) => {
          const r = !$n.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, X.forwardRef)((n, o) => {
            const s = (0, X.useRef)(null),
              a = r && (0, X.useCallback)(e => {
                s.current = function(e, t) {
                  return e && ($n.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [i, d] = function(e, t) {
                const r = new Set;
                return Rs.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Ns(e), Rs.dependencies = null, [e, r]
              }(n, t),
              l = bs(),
              c = () => {
                const e = s.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && l()
              },
              u = new zs(c, d),
              f = (0, X.useRef)(void 0);
            gs(() => (f.current = u, Yn(d, e => es(e, u)), () => {
              f.current && (Yn(f.current.deps, e => ts(e, f.current)), Nn.cancel(f.current.update))
            })), (0, X.useEffect)(c, []), ws(() => () => {
              const e = f.current;
              Yn(e.deps, t => ts(t, e))
            });
            const p = t.getComponentProps(i.getValue());
            return X.createElement(e, {
              ...p,
              ref: a
            })
          })
        },
        zs = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Nn.write(this.update)
          }
        },
        Ls = Symbol.for("AnimatedComponent"),
        Ms = e => $n.str(e) ? e : e && $n.str(e.displayName) ? e.displayName : $n.fun(e) && e.name || null;

      function As(e, ...t) {
        return $n.fun(e) ? e(...t) : e
      }
      var Vs = (e, t) => !0 === e || !!(t && e && ($n.fun(e) ? e(t) : eo(e).includes(t))),
        qs = (e, t) => $n.obj(e) ? t && e[t] : e,
        Fs = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Bs = e => e,
        Xs = (e, t = Bs) => {
          let r = Gs;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            $n.und(r) || (n[o] = r)
          }
          return n
        },
        Gs = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Ks = {
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

      function Hs(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Jn(e, (e, n) => {
              Ks[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Jn(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function Zs(e) {
        return e = Wo(e), $n.arr(e) ? e.map(Zs) : ys(e) ? Un.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Us(e) {
        return $n.fun(e) || $n.arr(e) && $n.obj(e[0])
      }

      function Ws(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var $s = {
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
        Qs = {
          ...$s.default,
          mass: 1,
          damping: 1,
          easing: Ko.linear,
          clamp: !1
        },
        Ys = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Qs)
          }
        };

      function Js(e, t) {
        if ($n.und(t.decay)) {
          const r = !$n.und(t.tension) || !$n.und(t.friction);
          !r && $n.und(t.frequency) && $n.und(t.damping) && $n.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var ea = [],
        ta = class {
          constructor() {
            this.changed = !1, this.values = ea, this.toValues = null, this.fromValues = ea, this.config = new Ys, this.immediate = !1
          }
        };

      function ra(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: s
      }) {
        return new Promise((a, i) => {
          let d, l, c = Vs(r.cancel ?? n?.cancel, t);
          if (c) p();
          else {
            $n.und(r.pause) || (o.paused = Vs(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Vs(e, t)), d = As(r.delay || 0, t), e ? (o.resumeQueue.add(f), s.pause()) : (s.resume(), f())
          }

          function u() {
            o.resumeQueue.add(f), o.timeouts.delete(l), l.cancel(), d = l.time - Nn.now()
          }

          function f() {
            d > 0 && !Un.skipAnimation ? (o.delayed = !0, l = Nn.setTimeout(p, d), o.pauseQueue.add(u), o.timeouts.add(l)) : p()
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
      var na = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? aa(e.get()) : t.every(e => e.noop) ? oa(e.get()) : sa(e.get(), t.every(e => e.finished)),
        oa = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        sa = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        aa = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function ia(e, t, r, n) {
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
          const l = Xs(t, (e, t) => "onRest" === t ? void 0 : e);
          let c, u;
          const f = new Promise((e, t) => (c = e, u = t)),
            p = e => {
              const t = o <= (r.cancelId || 0) && aa(n) || o !== r.asyncId && sa(n, !1);
              if (t) throw e.result = t, u(e), e
            },
            h = (e, t) => {
              const s = new la,
                a = new ca;
              return (async () => {
                if (Un.skipAnimation) throw da(r), a.result = sa(n, !1), u(a), a;
                p(s);
                const i = $n.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                i.parentId = o, Jn(l, (e, t) => {
                  $n.und(i[t]) && (i[t] = e)
                });
                const d = await n.start(i);
                return p(s), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), d
              })()
            };
          let m;
          if (Un.skipAnimation) return da(r), sa(n, !1);
          try {
            let t;
            t = $n.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, n.stop.bind(n))), await Promise.all([t.then(c), f]), m = sa(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof la) m = e.result;
            else {
              if (!(e instanceof ca)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = s, r.asyncTo = s ? i : void 0, r.promise = s ? d : void 0)
          }
          return $n.fun(a) && Nn.batchedUpdates(() => {
            a(m, n, n.item)
          }), m
        })() : d
      }

      function da(e, t) {
        to(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var la = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        ca = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        ua = e => e instanceof pa,
        fa = 1,
        pa = class extends Yo {
          constructor() {
            super(...arguments), this.id = fa++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = js(this);
            return e && e.getValue()
          }
          to(...e) {
            return Un.to(this, e)
          }
          interpolate(...e) {
            return ms(`${ps}The "interpolate" function is deprecated in v9 (use "to" instead)`), Un.to(this, e)
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
            Qo(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || mo.sort(this), Qo(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        ha = Symbol.for("SpringPhase"),
        ma = e => (1 & e[ha]) > 0,
        va = e => (2 & e[ha]) > 0,
        ya = e => (4 & e[ha]) > 0,
        ga = (e, t) => t ? e[ha] |= 3 : e[ha] &= -3,
        ba = (e, t) => t ? e[ha] |= 4 : e[ha] &= -5,
        wa = class extends pa {
          constructor(e, t) {
            if (super(), this.animation = new ta, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !$n.und(e) || !$n.und(t)) {
              const r = $n.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              $n.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(va(this) || this._state.asyncTo) || ya(this)
          }
          get goal() {
            return Wo(this.animation.to)
          }
          get velocity() {
            const e = js(this);
            return e instanceof Ss ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return ma(this)
          }
          get isAnimating() {
            return va(this)
          }
          get isPaused() {
            return ya(this)
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
            } = n, a = Ps(n.to);
            !a && Uo(n.to) && (o = eo(Wo(n.to))), n.values.forEach((i, d) => {
              if (i.done) return;
              const l = i.constructor == ks ? 1 : a ? a[d].lastPosition : o[d];
              let c = n.immediate,
                u = l;
              if (!c) {
                if (u = i.lastPosition, s.tension <= 0) return void(i.done = !0);
                let t = i.elapsedTime += e;
                const r = n.fromValues[d],
                  o = null != i.v0 ? i.v0 : i.v0 = $n.arr(s.velocity) ? s.velocity[d] : s.velocity;
                let a;
                const f = s.precision || (r == l ? .005 : Math.min(1, .001 * Math.abs(l - r)));
                if ($n.und(s.duration))
                  if (s.decay) {
                    const e = !0 === s.decay ? .998 : s.decay,
                      n = Math.exp(-(1 - e) * t);
                    u = r + o / (1 - e) * (1 - n), c = Math.abs(i.lastPosition - u) <= f, a = o * n
                  } else {
                    a = null == i.lastVelocity ? o : i.lastVelocity;
                    const t = s.restVelocity || f / 10,
                      n = s.clamp ? 0 : s.bounce,
                      d = !$n.und(n),
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
            const i = js(this),
              d = i.getValue();
            if (t) {
              const e = Wo(n.to);
              d === e && !r || s.decay ? r && s.decay && this._onChange(d) : (i.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(d)
          }
          set(e) {
            return Nn.batchedUpdates(() => {
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
            if (va(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Nn.batchedUpdates(() => {
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
            return $n.und(e) ? (r = this.queue || [], this.queue = []) : r = [$n.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => na(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), da(this._state, e && this._lastCallId), Nn.batchedUpdates(() => this._stop(t, e)), this
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
            r = $n.obj(r) ? r[t] : r, (null == r || Us(r)) && (r = void 0), n = $n.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return ma(this) || (e.reverse && ([r, n] = [n, r]), n = Wo(n), $n.und(n) ? js(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, Xs(e, (e, t) => /^on/.test(t) ? qs(e, r) : e)), Oa(this, e, "onProps"), Sa(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const s = this._state;
            return ra(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: s,
              actions: {
                pause: () => {
                  ya(this) || (ba(this, !0), oo(s.pauseQueue), Sa(this, "onPause", sa(this, _a(this, this.animation.to)), this))
                },
                resume: () => {
                  ya(this) && (ba(this, !1), va(this) && this._resume(), oo(s.resumeQueue), Sa(this, "onResume", sa(this, _a(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = xa(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(aa(this));
            const n = !$n.und(e.to),
              o = !$n.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(aa(this));
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
            !o || n || t.default && !$n.und(c) || (c = u), t.reverse && ([c, u] = [u, c]);
            const f = !Qn(u, l);
            f && (i.from = u), u = Wo(u);
            const p = !Qn(c, d);
            p && this._focus(c);
            const h = Us(t.to),
              {
                config: m
              } = i,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !h && function(e, t, r) {
              r && (Js(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Js(e, t), Object.assign(e, t);
              for (const t in Qs) null == e[t] && (e[t] = Qs[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: s
              } = e;
              $n.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * s, e.friction = 4 * Math.PI * o * s / n)
            }(m, As(t.config, s), t.config !== a.config ? As(a.config, s) : void 0);
            let g = js(this);
            if (!g || $n.und(c)) return r(sa(this, !0));
            const b = $n.und(t.reset) ? o && !t.default : !$n.und(u) && Vs(t.reset, s),
              w = b ? u : this.get(),
              _ = Zs(c),
              x = $n.num(_) || $n.arr(_) || ys(_),
              j = !h && (!x || Vs(a.immediate || t.immediate, s));
            if (p) {
              const e = Es(c);
              if (e !== g.constructor) {
                if (!j) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const C = g.constructor;
            let P = Uo(c),
              O = !1;
            if (!P) {
              const e = b || !ma(this) && f;
              (p || e) && (O = Qn(Zs(w), _), P = !O), (Qn(i.immediate, j) || j) && Qn(m.decay, v) && Qn(m.velocity, y) || (P = !0)
            }
            if (O && va(this) && (i.changed && !b ? P = !0 : P || this._stop(d)), !h && ((P || Uo(d)) && (i.values = g.getPayload(), i.toValues = Uo(c) ? null : C == ks ? [1] : eo(_)), i.immediate != j && (i.immediate = j, j || b || this._set(d)), P)) {
              const {
                onRest: e
              } = i;
              Yn(Pa, e => Oa(this, t, e));
              const n = sa(this, _a(this, d));
              oo(this._pendingCalls, n), this._pendingCalls.add(r), i.changed && Nn.batchedUpdates(() => {
                i.changed = !b, e?.(n, this), b ? As(a.onRest, n) : i.onStart?.(n, this)
              })
            }
            b && this._set(w), h ? r(ia(t.to, t, this._state, this)) : P ? this._start() : va(this) && !p ? this._pendingCalls.add(r) : r(oa(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && ($o(this) && this._detach(), t.to = e, $o(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Uo(t) && (es(t, this), ua(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Uo(e) && ts(e, this)
          }
          _set(e, t = !0) {
            const r = Wo(e);
            if (!$n.und(r)) {
              const e = js(this);
              if (!e || !Qn(r, e.getValue())) {
                const n = Es(r);
                e && e.constructor == n ? e.setValue(r) : Cs(this, n.create(r)), e && Nn.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return js(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Sa(this, "onStart", sa(this, _a(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), As(this.animation.onChange, e, this)), As(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            js(this).reset(Wo(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), va(this) || (ga(this, !0), ya(this) || this._resume())
          }
          _resume() {
            Un.skipAnimation ? this.finish() : mo.start(this)
          }
          _stop(e, t) {
            if (va(this)) {
              ga(this, !1);
              const r = this.animation;
              Yn(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Qo(this, {
                type: "idle",
                parent: this
              });
              const n = t ? aa(this.get()) : sa(this.get(), _a(this, e ?? r.to));
              oo(this._pendingCalls, n), r.changed && (r.changed = !1, Sa(this, "onRest", n, this))
            }
          }
        };

      function _a(e, t) {
        const r = Zs(t);
        return Qn(Zs(e.get()), r)
      }

      function xa(e, t = e.loop, r = e.to) {
        const n = As(t);
        if (n) {
          const o = !0 !== n && Hs(n),
            s = (o || e).reverse,
            a = !o || o.reset;
          return ja({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !s || Us(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function ja(e) {
        const {
          to: t,
          from: r
        } = e = Hs(e), n = new Set;
        return $n.obj(t) && Ca(t, n), $n.obj(r) && Ca(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Ca(e, t) {
        Jn(e, (e, r) => null != e && t.add(r))
      }
      var Pa = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Oa(e, t, r) {
        e.animation[r] = t[r] !== Fs(t, r) ? qs(t[r], e.key) : void 0
      }

      function Sa(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var ka = ["onStart", "onChange", "onRest"],
        Ra = 1,
        Na = class {
          constructor(e, t) {
            this.id = Ra++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              $n.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(ja(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = eo(e).map(ja) : this.queue = [], this._flush ? this._flush(this, t) : (za(this, t), function(e, t) {
              return Promise.all(t.map(t => Da(e, t))).then(t => na(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              Yn(eo(t), t => r[t].stop(!!e))
            } else da(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if ($n.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Yn(eo(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if ($n.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Yn(eo(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            Jn(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, to(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const s = !n && this._started,
              a = o || s && r.size ? this.get() : null;
            o && t.size && to(t, ([e, t]) => {
              t.value = a, e(t, this, this._item)
            }), s && (this._started = !1, to(r, ([e, t]) => {
              t.value = a, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Nn.onFrame(this._onFrame)
          }
        };
      async function Da(e, t, r) {
        const {
          keys: n,
          to: o,
          from: s,
          loop: a,
          onRest: i,
          onResolve: d
        } = t, l = $n.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === s && (t.from = null);
        const c = $n.arr(o) || $n.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, l && (l.onRest = void 0)) : Yn(ka, r => {
          const n = t[r];
          if ($n.fun(n)) {
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
        const u = e._state;
        t.pause === !u.paused ? (u.paused = t.pause, oo(t.pause ? u.pauseQueue : u.resumeQueue)) : u.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          p = !0 === t.cancel || !0 === Fs(t, "cancel");
        (c || p && u.asyncId) && f.push(ra(++e._lastAsyncId, {
          props: t,
          state: u,
          actions: {
            pause: Wn,
            resume: Wn,
            start(t, r) {
              p ? (da(u, e._lastAsyncId), r(aa(e))) : (t.onRest = i, r(ia(c, t, u, e)))
            }
          }
        })), u.paused && await new Promise(e => {
          u.resumeQueue.add(e)
        });
        const h = na(e, await Promise.all(f));
        if (a && h.finished && (!r || !h.noop)) {
          const r = xa(t, a, o);
          if (r) return za(e, [r]), Da(e, r, !0)
        }
        return d && Nn.batchedUpdates(() => d(h, e, e.item)), h
      }

      function Ia(e, t) {
        const r = {
          ...e.springs
        };
        return t && Yn(eo(t), e => {
            $n.und(e.keys) && (e = ja(e)), $n.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), Ta(r, e, e => Ea(e))
          }),
          function(e, t) {
            Jn(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, es(t, e))
            })
          }(e, r), r
      }

      function Ea(e, t) {
        const r = new wa;
        return r.key = e, t && es(r, t), r
      }

      function Ta(e, t, r) {
        t.keys && Yn(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function za(e, t) {
        Yn(t, t => {
          Ta(e.springs, t, t => Ea(t, e))
        })
      }
      var La = X.createContext({
          pause: !1,
          immediate: !1
        }),
        Ma = () => {
          const e = [],
            t = function(t) {
              vs(`${ps}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return Yn(e, (e, o) => {
                if ($n.und(t)) n.push(e.start());
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
            return Yn(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return Yn(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            Yn(e, (e, r) => {
              const n = $n.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return Yn(e, (e, n) => {
              if ($n.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return Yn(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return Yn(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return $n.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        Aa = () => Ma(),
        Va = () => (0, X.useState)(Aa)[0];

      function qa(e, t, r) {
        const n = $n.fun(t) && t,
          {
            reset: o,
            sort: s,
            trail: a = 0,
            expires: i = !0,
            exitBeforeEnter: d = !1,
            onDestroyed: l,
            ref: c,
            config: u
          } = n ? n() : t,
          f = (0, X.useMemo)(() => n || 3 == arguments.length ? Ma() : void 0, []),
          p = eo(e),
          h = [],
          m = (0, X.useRef)(null),
          v = o ? null : m.current;
        gs(() => {
          m.current = h
        }), ws(() => (Yn(h, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          Yn(m.current, e => {
            e.expired && clearTimeout(e.expirationId), Ws(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : Fa++
              })
            }
            return $n.und(r) ? e : $n.fun(r) ? e.map(r) : eo(r)
          }(p, n ? n() : t, v),
          g = o && m.current || [];
        gs(() => Yn(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          Ws(e, f), As(l, t, r)
        }));
        const b = [];
        if (v && Yn(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (h[t] = e)
          }), Yn(p, (e, t) => {
            h[t] || (h[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new Na
            }, h[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          Yn(b, (t, n) => {
            const o = v[n];
            ~t ? (e = h.indexOf(o), h[e] = {
              ...o,
              item: p[t]
            }) : r && h.splice(++e, 0, o)
          })
        }
        $n.fun(s) && h.sort((e, t) => s(e.item, t.item));
        let w = -a;
        const _ = bs(),
          x = Xs(t),
          j = new Map,
          C = (0, X.useRef)(new Map),
          P = (0, X.useRef)(!1);
        Yn(h, (e, r) => {
          const o = e.key,
            s = e.phase,
            l = n ? n() : t;
          let f, p;
          const h = As(l.delay || 0, o);
          if ("mount" == s) f = l.enter, p = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != s)
              if (e) f = l.leave, p = "leave";
              else {
                if (!(f = l.update)) return;
                p = "update"
              }
            else {
              if (e) return;
              f = l.enter, p = "enter"
            }
          }
          if (f = As(f, e.item, r), f = $n.obj(f) ? Hs(f) : {
              to: f
            }, !f.config) {
            const t = u || x.config;
            f.config = As(t, e.item, r, p)
          }
          w += a;
          const g = {
            ...x,
            delay: h + w,
            ref: c,
            immediate: l.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == p && $n.und(g.from)) {
            const o = n ? n() : t,
              s = $n.und(o.initial) || v ? o.from : o.initial;
            g.from = As(s, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            As(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = As(i, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(_, n)))
                }
              }
              e && t.some(e => e.expired) && (C.current.delete(r), d && (P.current = !0), _())
            }
          };
          const O = Ia(e.ctrl, g);
          "leave" === p && d ? C.current.set(e, {
            phase: p,
            springs: O,
            payload: g
          }) : j.set(e, {
            phase: p,
            springs: O,
            payload: g
          })
        });
        const O = (0, X.useContext)(La),
          S = function(e) {
            const t = (0, X.useRef)(void 0);
            return (0, X.useEffect)(() => {
              t.current = e
            }), t.current
          }(O),
          k = O !== S && function(e) {
            for (const t in e) return !0;
            return !1
          }(O);
        gs(() => {
          k && Yn(h, e => {
            e.ctrl.start({
              default: O
            })
          })
        }, [O]), Yn(j, (e, t) => {
          if (C.current.size) {
            const e = h.findIndex(e => e.key === t.key);
            h.splice(e, 1)
          }
        }), gs(() => {
          Yn(C.current.size ? C.current : j, ({
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
            }(n, t.ref), !n.ref && !f || P.current ? (n.start(t), P.current && (P.current = !1)) : n.update(t))
          })
        }, o ? void 0 : r);
        const R = e => X.createElement(X.Fragment, null, h.map((t, r) => {
          const {
            springs: n
          } = j.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), s = $n.str(t.key) || $n.num(t.key) ? t.key : t.ctrl.id, a = X.version < "19.0.0", i = o?.props ?? {}, d = a ? o?.ref : i?.ref;
          return o && o.type ? X.createElement(o.type, {
            ...i,
            key: s,
            ref: d
          }) : o
        }));
        return f ? [R, f] : R
      }
      var Fa = 1,
        Ba = class extends pa {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Ao(...t);
            const r = this._get(),
              n = Es(r);
            Cs(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            Qn(t, this.get()) || (js(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Ga(this._active) && Ka(this)
          }
          _get() {
            const e = $n.arr(this.source) ? this.source.map(Wo) : eo(Wo(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Ga(this._active) && (this.idle = !1, Yn(Ps(this), e => {
              e.done = !1
            }), Un.skipAnimation ? (Nn.batchedUpdates(() => this.advance()), Ka(this)) : mo.start(this))
          }
          _attach() {
            let e = 1;
            Yn(eo(this.source), t => {
              Uo(t) && es(t, this), ua(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            Yn(eo(this.source), e => {
              Uo(e) && ts(e, this)
            }), this._active.clear(), Ka(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = eo(this.source).reduce((e, t) => Math.max(e, (ua(t) ? t.priority : 0) + 1), 0))
          }
        };

      function Xa(e) {
        return !1 !== e.idle
      }

      function Ga(e) {
        return !e.size || Array.from(e).every(Xa)
      }

      function Ka(e) {
        e.idle || (e.idle = !0, Yn(Ps(e), e => {
          e.done = !0
        }), Qo(e, {
          type: "idle",
          parent: e
        }))
      }
      Un.assign({
        createStringInterpolator: fs,
        to: (e, t) => new Ba(e, t)
      }), mo.advance;
      var Ha = r(84017),
        Za = /^--/;

      function Ua(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Za.test(e) || $a.hasOwnProperty(e) && $a[e] ? ("" + t).trim() : t + "px"
      }
      var Wa = {},
        $a = {
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
      $a = Object.keys($a).reduce((e, t) => (Qa.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), $a);
      var Ya = /^(matrix|translate|scale|rotate|skew)/,
        Ja = /^(translate)/,
        ei = /^(rotate|skew)/,
        ti = (e, t) => $n.num(e) && 0 !== e ? e + t : e,
        ri = (e, t) => $n.arr(e) ? e.every(e => ri(e, t)) : $n.num(e) ? e === t : parseFloat(e) === t,
        ni = class extends Ns {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              s = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), s.push(e => [`translate3d(${e.map(e=>ti(e,"px")).join(",")})`, ri(e, 0)])), Jn(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), s.push(e => [e, "" === e]);
              else if (Ya.test(t)) {
                if (delete n[t], $n.und(e)) return;
                const r = Ja.test(t) ? "px" : ei.test(t) ? "deg" : "";
                o.push(eo(e)), s.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${ti(o,r)})`, ri(o, 0)] : e => [`${t}(${e.map(e=>ti(e,r)).join(",")})`, ri(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new oi(o, s)), super(n)
          }
        },
        oi = class extends Yo {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Yn(this.inputs, (r, n) => {
              const o = Wo(r[0]),
                [s, a] = this.transforms[n]($n.arr(o) ? o : r.map(Wo));
              e += " " + s, t = t && a
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Yn(this.inputs, e => Yn(e, e => Uo(e) && es(e, this)))
          }
          observerRemoved(e) {
            0 == e && Yn(this.inputs, e => Yn(e, e => Uo(e) && ts(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Qo(this, e)
          }
        };
      Un.assign({
        batchedUpdates: Ha.unstable_batchedUpdates,
        createStringInterpolator: fs,
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
      var si = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Ns(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            s = e => {
              const t = Ms(e) || "Anonymous";
              return (e = $n.str(e) ? s[e] || (s[e] = Ts(e, o)) : e[Ls] || (e[Ls] = Ts(e, o))).displayName = `Animated(${t})`, e
            };
          return Jn(e, (t, r) => {
            $n.arr(e) && (r = Ms(t)), s[r] = s(t)
          }), {
            animated: s
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
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
              u = Object.keys(l).map(t => r || e.hasAttribute(t) ? t : Wa[t] || (Wa[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== s && (e.textContent = s);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = Ua(t, o[t]);
                Za.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== i && (e.scrollLeft = i), void 0 !== d && e.setAttribute("viewBox", d)
          },
          createAnimatedStyle: e => new ni(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        ai = si.animated,
        ii = r(8316),
        di = r(50446),
        li = r(31201),
        ci = r(17028),
        ui = r(96883),
        fi = r(17966),
        pi = r(45750),
        hi = r(66704),
        mi = X.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...s
          } = e;
          return (0, O.jsx)(hi.sG.svg, {
            ...s,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, O.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      mi.displayName = "Arrow";
      var vi = mi,
        yi = r(38351),
        gi = r(86627);

      function bi(e) {
        const [t, r] = X.useState(void 0);
        return (0, gi.N)(() => {
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
      var wi = "Popper",
        [_i, xi] = (0, li.A)(wi),
        [ji, Ci] = _i(wi),
        Pi = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = X.useState(null);
          return (0, O.jsx)(ji, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      Pi.displayName = wi;
      var Oi = "PopperAnchor",
        Si = X.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, s = Ci(Oi, r), a = X.useRef(null), i = (0, di.s)(t, a), d = X.useRef(null);
          return X.useEffect(() => {
            const e = d.current;
            d.current = n?.current || a.current, e !== d.current && s.onAnchorChange(d.current)
          }), n ? null : (0, O.jsx)(hi.sG.div, {
            ...o,
            ref: i
          })
        });
      Si.displayName = Oi;
      var ki = "PopperContent",
        [Ri, Ni] = _i(ki),
        Di = X.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: s = "center",
            alignOffset: a = 0,
            arrowPadding: i = 0,
            avoidCollisions: d = !0,
            collisionBoundary: l = [],
            collisionPadding: c = 0,
            sticky: u = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: h,
            ...m
          } = e, v = Ci(ki, r), [y, g] = X.useState(null), b = (0, di.s)(t, e => g(e)), [w, _] = X.useState(null), x = bi(w), j = x?.width ?? 0, C = x?.height ?? 0, P = n + ("center" !== s ? "-" + s : ""), S = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, k = Array.isArray(l) ? l : [l], R = k.length > 0, N = {
            padding: S,
            boundary: k.filter(zi),
            altBoundary: R
          }, {
            refs: D,
            floatingStyles: I,
            placement: E,
            isPositioned: T,
            middlewareData: z
          } = (0, fi.we)({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...e) => (0, pi.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [(0, fi.cY)({
              mainAxis: o + C,
              alignmentAxis: a
            }), d && (0, fi.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, fi.ER)() : void 0,
              ...N
            }), d && (0, fi.UU)({
              ...N
            }), (0, fi.Ej)({
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
                } = t.reference, a = e.floating.style;
                a.setProperty("--radix-popper-available-width", `${r}px`), a.setProperty("--radix-popper-available-height", `${n}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${s}px`)
              }
            }), w && (0, fi.UE)({
              element: w,
              padding: i
            }), Li({
              arrowWidth: j,
              arrowHeight: C
            }), f && (0, fi.jD)({
              strategy: "referenceHidden",
              ...N
            })]
          }), [L, M] = Mi(E), A = (0, yi.c)(h);
          (0, gi.N)(() => {
            T && A?.()
          }, [T, A]);
          const V = z.arrow?.x,
            q = z.arrow?.y,
            F = 0 !== z.arrow?.centerOffset,
            [B, G] = X.useState();
          return (0, gi.N)(() => {
            y && G(window.getComputedStyle(y).zIndex)
          }, [y]), (0, O.jsx)("div", {
            ref: D.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: T ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: B,
              "--radix-popper-transform-origin": [z.transformOrigin?.x, z.transformOrigin?.y].join(" "),
              ...z.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, O.jsx)(Ri, {
              scope: r,
              placedSide: L,
              onArrowChange: _,
              arrowX: V,
              arrowY: q,
              shouldHideArrow: F,
              children: (0, O.jsx)(hi.sG.div, {
                "data-side": L,
                "data-align": M,
                ...m,
                ref: b,
                style: {
                  ...m.style,
                  animation: T ? void 0 : "none"
                }
              })
            })
          })
        });
      Di.displayName = ki;
      var Ii = "PopperArrow",
        Ei = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Ti = X.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = Ni(Ii, r), s = Ei[o.placedSide];
          return (0, O.jsx)("span", {
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
            children: (0, O.jsx)(vi, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function zi(e) {
        return null !== e
      }
      Ti.displayName = Ii;
      var Li = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, s = 0 !== o.arrow?.centerOffset, a = s ? 0 : e.arrowWidth, i = s ? 0 : e.arrowHeight, [d, l] = Mi(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], u = (o.arrow?.x ?? 0) + a / 2, f = (o.arrow?.y ?? 0) + i / 2;
          let p = "",
            h = "";
          return "bottom" === d ? (p = s ? c : `${u}px`, h = -i + "px") : "top" === d ? (p = s ? c : `${u}px`, h = `${n.floating.height+i}px`) : "right" === d ? (p = -i + "px", h = s ? c : `${f}px`) : "left" === d && (p = `${n.floating.width+i}px`, h = s ? c : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function Mi(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Ai = Pi,
        Vi = Si,
        qi = Di,
        Fi = Ti,
        Bi = r(2823),
        Xi = r(47306),
        Gi = r(2976),
        Ki = r(1531),
        Hi = Object.freeze({
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
        Zi = X.forwardRef((e, t) => (0, O.jsx)(hi.sG.span, {
          ...e,
          ref: t,
          style: {
            ...Hi,
            ...e.style
          }
        }));
      Zi.displayName = "VisuallyHidden";
      var Ui = Zi,
        [Wi, $i] = (0, li.A)("Tooltip", [xi]),
        Qi = xi(),
        Yi = "TooltipProvider",
        Ji = 700,
        ed = "tooltip.open",
        [td, rd] = Wi(Yi),
        nd = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Ji,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: s
          } = e, a = X.useRef(!0), i = X.useRef(!1), d = X.useRef(0);
          return X.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, O.jsx)(td, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: X.useCallback(() => {
              window.clearTimeout(d.current), a.current = !1
            }, []),
            onClose: X.useCallback(() => {
              window.clearTimeout(d.current), d.current = window.setTimeout(() => a.current = !0, n)
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: X.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: s
          })
        };
      nd.displayName = Yi;
      var od = "Tooltip",
        [sd, ad] = Wi(od),
        id = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: a,
            delayDuration: i
          } = e, d = rd(od, e.__scopeTooltip), l = Qi(t), [c, u] = X.useState(null), f = (0, ui.B)(), p = X.useRef(0), h = a ?? d.disableHoverableContent, m = i ?? d.delayDuration, v = X.useRef(!1), [y, g] = (0, Ki.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(ed))) : d.onClose(), s?.(e)
            },
            caller: od
          }), b = X.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), w = X.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, v.current = !1, g(!0)
          }, [g]), _ = X.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), x = X.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              v.current = !0, g(!0), p.current = 0
            }, m)
          }, [m, g]);
          return X.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, O.jsx)(Ai, {
            ...l,
            children: (0, O.jsx)(sd, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: X.useCallback(() => {
                d.isOpenDelayedRef.current ? x() : w()
              }, [d.isOpenDelayedRef, x, w]),
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
      id.displayName = od;
      var dd = "TooltipTrigger",
        ld = X.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = ad(dd, r), s = rd(dd, r), a = Qi(r), i = X.useRef(null), d = (0, di.s)(t, i, o.onTriggerChange), l = X.useRef(!1), c = X.useRef(!1), u = X.useCallback(() => l.current = !1, []);
          return X.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, O.jsx)(Vi, {
            asChild: !0,
            ...a,
            children: (0, O.jsx)(hi.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, ii.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || s.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, ii.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, ii.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, ii.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, ii.mK)(e.onBlur, o.onClose),
              onClick: (0, ii.mK)(e.onClick, o.onClose)
            })
          })
        });
      ld.displayName = dd;
      var cd = "TooltipPortal",
        [ud, fd] = Wi(cd, {
          forceMount: void 0
        }),
        pd = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = ad(cd, t);
          return (0, O.jsx)(ud, {
            scope: t,
            forceMount: r,
            children: (0, O.jsx)(Xi.C, {
              present: r || s.open,
              children: (0, O.jsx)(Bi.Z, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      pd.displayName = cd;
      var hd = "TooltipContent",
        md = X.forwardRef((e, t) => {
          const r = fd(hd, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...s
            } = e,
            a = ad(hd, e.__scopeTooltip);
          return (0, O.jsx)(Xi.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, O.jsx)(wd, {
              side: o,
              ...s,
              ref: t
            }) : (0, O.jsx)(vd, {
              side: o,
              ...s,
              ref: t
            })
          })
        }),
        vd = X.forwardRef((e, t) => {
          const r = ad(hd, e.__scopeTooltip),
            n = rd(hd, e.__scopeTooltip),
            o = X.useRef(null),
            s = (0, di.s)(t, o),
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
          }, [d, c, a, l, f]), (0, O.jsx)(wd, {
            ...e,
            ref: s
          })
        }),
        [yd, gd] = Wi(od, {
          isInside: !1
        }),
        bd = (0, Gi.Dc)("TooltipContent"),
        wd = X.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            ...i
          } = e, d = ad(hd, r), l = Qi(r), {
            onClose: c
          } = d;
          return X.useEffect(() => (document.addEventListener(ed, c), () => document.removeEventListener(ed, c)), [c]), X.useEffect(() => {
            if (d.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(d.trigger) && c()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, c]), (0, O.jsx)(ci.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, O.jsxs)(qi, {
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
              children: [(0, O.jsx)(bd, {
                children: n
              }), (0, O.jsx)(yd, {
                scope: r,
                isInside: !0,
                children: (0, O.jsx)(Ui, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      md.displayName = hd;
      var _d = "TooltipArrow",
        xd = X.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Qi(r);
          return gd(_d, r).isInside ? null : (0, O.jsx)(Fi, {
            ...o,
            ...n,
            ref: t
          })
        });
      xd.displayName = _d;
      var jd = nd,
        Cd = id,
        Pd = ld,
        Od = pd,
        Sd = md,
        kd = xd;
      const Rd = (0, X.createContext)(null);

      function Nd() {
        const e = (0, X.useContext)(Rd);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Dd = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [s = !1, a] = (0, W.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, O.jsx)(jd, {
            delayDuration: t,
            children: (0, O.jsx)(Rd.Provider, {
              value: {
                isOpen: s,
                ...o
              },
              children: (0, O.jsx)(Cd, {
                open: s,
                onOpenChange: a,
                children: e
              })
            })
          })
        },
        Id = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, O.jsx)(Pd, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        Ed = (0, X.forwardRef)(({
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
          } = Nd(), c = (0, W.jt)(), u = ai(Sd), f = qa(l, {
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
            config: $s.stiff,
            immediate: c
          }), p = (0, H.mergeProps)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: a,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: s,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, O.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        Td = (0, X.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, H.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, O.jsx)(kd, {
            ...r,
            ref: t
          })
        }),
        zd = Od;

      function Ld(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var Md = r(93689);

      function Ad(e) {
        const t = X.useRef({
          value: e,
          previous: e
        });
        return X.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
      var Vd = r(23028),
        qd = ["PageUp", "PageDown"],
        Fd = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Bd = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Xd = "Slider",
        [Gd, Kd, Hd] = (0, Vd.N)(Xd),
        [Zd, Ud] = (0, li.A)(Xd, [Hd]),
        [Wd, $d] = Zd(Xd),
        Qd = X.forwardRef((e, t) => {
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
          } = e, v = X.useRef(new Set), y = X.useRef(0), g = "horizontal" === a ? el : tl, [b = [], w] = (0, Ki.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), u(e)
            }
          }), _ = X.useRef(b);

          function x(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = function(e) {
                return (String(e).split(".")[1] || "").length
              }(s),
              i = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / s) * s + n, a),
              l = Ld(i, [n, o]);
            w((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort((e, t) => e - t)
              }(e, l, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map((t, r) => e[r + 1] - t)
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, d * s)) {
                y.current = n.indexOf(l);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, O.jsx)(Wd, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: b,
            orientation: a,
            form: h,
            children: (0, O.jsx)(Gd.Provider, {
              scope: e.__scopeSlider,
              children: (0, O.jsx)(Gd.Slot, {
                scope: e.__scopeSlider,
                children: (0, O.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, ii.mK)(m.onPointerDown, () => {
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
                    x(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    x(e, y.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = _.current[y.current];
                    b[y.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !i && x(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !i && x(o, b.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      const r = qd.includes(e.key) || e.shiftKey && Fd.includes(e.key) ? 10 : 1,
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
      Qd.displayName = Xd;
      var [Yd, Jd] = Zd(Xd, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), el = X.forwardRef((e, t) => {
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
        } = e, [u, f] = X.useState(null), p = (0, di.s)(t, e => f(e)), h = X.useRef(void 0), m = (0, Md.jH)(o), v = "ltr" === m, y = v && !s || !v && s;

        function g(e) {
          const t = h.current || u.getBoundingClientRect(),
            o = fl([0, t.width], y ? [r, n] : [n, r]);
          return h.current = t, o(e - t.left)
        }
        return (0, O.jsx)(Yd, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, O.jsx)(rl, {
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
              const t = Bd[y ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), tl = X.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = X.useRef(null), u = (0, di.s)(t, c), f = X.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = fl([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, O.jsx)(Yd, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, O.jsx)(rl, {
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
              const t = Bd[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), rl = X.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: s,
          onHomeKeyDown: a,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = $d(Xd, r);
        return (0, O.jsx)(hi.sG.span, {
          ...l,
          ref: t,
          onKeyDown: (0, ii.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : qd.concat(Fd).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, ii.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, ii.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, ii.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
          })
        })
      }), nl = "SliderTrack", ol = X.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = $d(nl, r);
        return (0, O.jsx)(hi.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      ol.displayName = nl;
      var sl = "SliderRange",
        al = X.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = $d(sl, r), s = Jd(sl, r), a = X.useRef(null), i = (0, di.s)(t, a), d = o.values.length, l = o.values.map(e => ul(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, O.jsx)(hi.sG.span, {
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
      al.displayName = sl;
      var il = "SliderThumb",
        dl = X.forwardRef((e, t) => {
          const r = Kd(e.__scopeSlider),
            [n, o] = X.useState(null),
            s = (0, di.s)(t, e => o(e)),
            a = X.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, O.jsx)(ll, {
            ...e,
            ref: s,
            index: a
          })
        }),
        ll = X.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...s
          } = e, a = $d(il, r), i = Jd(il, r), [d, l] = X.useState(null), c = (0, di.s)(t, e => l(e)), u = !d || a.form || !!d.closest("form"), f = bi(d), p = a.values[n], h = void 0 === p ? 0 : ul(p, a.min, a.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, a.values.length), v = f?.[i.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - fl([0, 50], [0, n])(t) * r) * r
          }(v, h, i.direction) : 0;
          return X.useEffect(() => {
            if (d) return a.thumbs.add(d), () => {
              a.thumbs.delete(d)
            }
          }, [d, a.thumbs]), (0, O.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${h}% + ${y}px)`
            },
            children: [(0, O.jsx)(Gd.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, O.jsx)(hi.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": a.min,
                "aria-valuenow": p,
                "aria-valuemax": a.max,
                "aria-orientation": a.orientation,
                "data-orientation": a.orientation,
                "data-disabled": a.disabled ? "" : void 0,
                tabIndex: a.disabled ? void 0 : 0,
                ...s,
                ref: c,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: (0, ii.mK)(e.onFocus, () => {
                  a.valueIndexToChangeRef.current = n
                })
              })
            }), u && (0, O.jsx)(cl, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: p
            }, n)]
          })
        });
      dl.displayName = il;
      var cl = X.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = X.useRef(null),
          s = (0, di.s)(o, n),
          a = Ad(t);
        return X.useEffect(() => {
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
        }, [a, t]), (0, O.jsx)(hi.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: s,
          defaultValue: t
        })
      });

      function ul(e, t, r) {
        return Ld(100 / (r - t) * (e - t), [0, 100])
      }

      function fl(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      cl.displayName = "RadioBubbleInput";
      var pl = Qd,
        hl = ol,
        ml = al,
        vl = dl,
        yl = r(88819);
      const gl = (0, X.createContext)({
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
        bl = ({
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
          const f = (() => {
              const {
                locale: e
              } = Y();
              return e
            })(),
            p = (0, W.rl)(),
            h = (0, X.useRef)(null),
            m = (0, X.useRef)(null),
            v = (0, X.useRef)(null),
            y = (0, X.useRef)(null),
            g = (0, X.useRef)(null),
            b = (0, X.useRef)(null),
            w = (0, X.useRef)(null),
            _ = (0, X.useRef)(null),
            x = (0, X.useRef)(null),
            j = (0, X.useRef)(null),
            C = (0, X.useRef)(null),
            P = (0, X.useRef)(null),
            S = (0, X.useRef)(null),
            k = (0, X.useRef)(null),
            R = (0, X.useRef)(null),
            N = (0, X.useRef)(null),
            D = (0, X.useRef)(null),
            I = (0, X.useRef)(null),
            E = (0, X.useRef)(null),
            [T = !1, z] = (0, W.ic)({
              prop: t || n,
              onChange: r
            }),
            L = (0, X.useRef)(null);
          return L.current || (L.current = new Cn({
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
          })), (0, O.jsx)(fn, {
            messages: pn,
            locale: f,
            children: (0, O.jsx)(gl.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: m,
                thumbnailRef: v,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: _,
                imageRef: x,
                placeholderRef: j,
                captionRef: C,
                controlsRef: P,
                closeRef: S,
                zoomRef: k,
                zoomInRef: R,
                zoomSliderRef: N,
                zoomOutRef: D,
                resetRef: I,
                downloadRef: E,
                open: T,
                setOpen: z,
                altText: e,
                hideTrigger: c,
                slide: L.current
              },
              children: (0, O.jsx)(_l, {
                ...u
              })
            })
          })
        },
        wl = (0, X.createContext)({
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
        _l = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, X.useContext)(gl), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, gt.useGSAP)(), {
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
            } = (0, X.useContext)(gl), p = (0, X.useRef)(null);
            p.current || (p.current = yt.gsap.timeline({
              defaults: sn
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
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), yt.gsap.set([u.current, f.current], {
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
                }), yt.gsap.set([f.current], {
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
                  [dn]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [dn]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Or(f.current), t.closing || (yt.gsap.set([f.current], {
                  visibility: "visible",
                  ...an
                }), yt.gsap.set([u.current], {
                  visibility: "hidden",
                  ...an
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
            } = (0, gt.useGSAP)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: s,
              containerRef: a,
              placeholderRef: i
            } = (0, X.useContext)(gl), d = t(async e => {
              r.zoomTo(e), yt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...an
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), yt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...an
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), yt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...an
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), yt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...an
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              yt.gsap.to([s.current], {
                opacity: e,
                [dn]: t,
                ...an
              })
            }), p = t(async () => {
              yt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...an
              })
            }), h = (0, X.useCallback)(() => {
              n.current && o.current && (yt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...an
              }), yt.gsap.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...an
              }), yt.gsap.set([a.current], {
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
          }), u = (0, H.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, O.jsx)(wl.Provider, {
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
            children: (0, O.jsx)(yl.bL, {
              ...u
            })
          })
        },
        xl = (0, X.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, un.A)(),
            {
              triggerRef: s,
              triggerBorderRef: a,
              altText: i
            } = (0, X.useContext)(gl),
            d = (0, W.UP)(s, n),
            l = (0, H.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(On.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, O.jsx)(yl.l9, {
            ref: d,
            ...l,
            children: (0, O.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: a,
              children: (0, O.jsx)($.xV, {
                children: t
              })
            })
          })
        }),
        jl = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, X.useContext)(gl), s = (0, W.UP)(o, n), a = (0, H.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? $.DX : "img";
          return (0, O.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Cl = (0, X.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, X.useContext)(gl), o = (0, W.UP)(n, r), s = (0, H.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), a = e ? $.DX : pe.Maximize2;
          return (0, O.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        Pl = ({
          ...e
        }) => (0, O.jsx)(yl.ZL, {
          ...e
        }),
        Ol = (0, X.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, X.useContext)(gl), o = (0, W.UP)(n, r), s = (0, H.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, O.jsx)(yl.hJ, {
            ref: o,
            ...s
          })
        }),
        Sl = (0, X.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, X.useContext)(wl), {
            contentRef: s,
            altText: a,
            triggerRef: i
          } = (0, X.useContext)(gl), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, X.useContext)(gl), [t, r] = (0, X.useState)(e.getCursor()), n = (0, X.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, X.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = (0, Pn.m)("dark"), c = (0, W.UP)(s, n), u = (0, H.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, fe.clsx)("foundry_1a74xwb9", l),
            style: {
              cursor: d
            }
          });
          return (0, O.jsxs)(yl.UC, {
            ref: c,
            ...u,
            children: [(0, O.jsx)($.s6, {
              children: (0, O.jsx)(yl.hE, {
                children: a
              })
            }), t]
          })
        }),
        kl = (0, X.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, X.useContext)(gl);
          (() => {
            const {
              contextSafe: e
            } = (0, gt.useGSAP)(), {
              toggleControls: t
            } = (0, X.useContext)(wl), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: s,
              slide: a
            } = (0, X.useContext)(gl), i = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.dragHandler.handleDrag(e), a.dragHandler.animate && !a.closing && (yt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...an
              }), yt.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...an
              }), yt.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...an
              })))
            }), d = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.scrollWheel.handleWheel(e), a.closing || yt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...an
              }))
            }), l = e(e => {
              !e.pinching && !a.zoomHandler.pinching || a.dragHandler.dragging || (a.zoomHandler.handleZoom(e), a.zoomHandler.animate && !a.closing && (yt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...an
              }), yt.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...an
              }), yt.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...an
              })))
            }), c = (0, X.useCallback)(() => {
              a.controlsVisible || t()
            }, [, t]);
            (0, W.iQ)({
              ref: s,
              onFocusIn: c
            }), Pr({
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
          const s = (0, W.UP)(o, n),
            a = (0, H.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, O.jsx)("div", {
            ref: s,
            ...a,
            children: (0, O.jsxs)(Rl, {
              children: [(0, O.jsx)(Nl, {}), t]
            })
          })
        }),
        Rl = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, X.useContext)(gl), s = (0, W.UP)(o, n), a = (0, H.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? $.DX : "div";
          return (0, O.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Nl = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, X.useContext)(gl), s = (0, W.UP)(o, n), a = (0, H.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? $.DX : "img";
          return (0, O.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Dl = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, X.useContext)(gl), s = (0, W.UP)(o, n), a = (0, H.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? $.DX : "img";
          return (0, O.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Il = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, X.useContext)(gl), s = (0, W.UP)(o, n), a = (0, H.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? $.DX : "p";
          return (0, O.jsx)(yl.VY, {
            asChild: !0,
            children: (0, O.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        El = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, X.useContext)(gl);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, X.useContext)(wl);
            $r(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), $r(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), $r("r", n, {
              enabled: e,
              preventDefault: !0
            }), $r("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const s = (0, W.UP)(o, n),
            a = (0, H.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? $.DX : "div";
          return (0, O.jsx)(Zr, {
            children: (0, O.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        Tl = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, O.jsx)(O.Fragment, {
            children: n
          });
          const s = (0, H.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, O.jsxs)(Dd, {
            delayDuration: 0,
            children: [(0, O.jsx)(Id, {
              children: n
            }), (0, O.jsxs)(Ed, {
              ...s,
              children: [(0, O.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, O.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, O.jsx)(Td, {})]
            })]
          })
        },
        zl = (0, X.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, H.mergeProps)(e, {
            isInline: !0
          });
          return (0, O.jsx)(kn, {
            ref: t,
            ...r
          })
        }),
        Ll = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, s) {
          const a = (0, un.A)(),
            {
              zoomRef: i
            } = (0, X.useContext)(gl),
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
              } = (0, X.useContext)(gl), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, X.useContext)(wl), [o, s] = (0, X.useState)(!1), [a, i] = (0, X.useState)(!1), [d, l] = (0, X.useState)(0), [c, u] = (0, X.useState)(0), [f, p] = (0, X.useState)(0), h = (0, X.useCallback)(() => {
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
            v = (0, W.UP)(i, s),
            y = (0, H.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? $.DX : "div";
          return (0, O.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, O.jsx)(Tl, {
              side: "left",
              enabled: r,
              content: a.formatMessage(On.ZoomInButtonLabel),
              metadata: a.formatMessage(On.ZoomInButtonTooltip, {
                shortcut: (0, O.jsx)(zl, {
                  shortcut: "+"
                })
              }),
              children: (0, O.jsx)(Te, {
                label: a.formatMessage(On.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: on({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, O.jsxs)(pl, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, O.jsx)(hl, {
                className: "foundry_1a74xwbu",
                children: (0, O.jsx)(ml, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, O.jsx)(Tl, {
                side: "left",
                enabled: r,
                content: a.formatMessage(On.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, O.jsx)(vl, {
                  className: "foundry_1a74xwbw",
                  children: (0, O.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, O.jsx)(Tl, {
              side: "left",
              enabled: r,
              content: a.formatMessage(On.ZoomOutButtonLabel),
              metadata: a.formatMessage(On.ZoomOutButtonTooltip, {
                shortcut: (0, O.jsx)(zl, {
                  shortcut: "-"
                })
              }),
              children: (0, O.jsx)(Te, {
                label: a.formatMessage(On.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: on({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, O.jsx)($.xV, {
              children: n
            })]
          })
        }),
        Ml = (0, X.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const s = (0, un.A)(),
            {
              closeRef: a
            } = (0, X.useContext)(gl),
            i = (0, W.UP)(a, o),
            d = (0, H.mergeProps)(n, {
              "data-testid": e,
              className: nn({
                styled: !t
              })
            }),
            l = t ? (0, O.jsx)($.DX, {
              ref: i,
              ...d
            }) : (0, O.jsx)(Te, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: s.formatMessage(On.CloseButtonLabel)
            });
          return (0, O.jsx)(Tl, {
            side: "right",
            enabled: r,
            content: s.formatMessage(On.CloseButtonLabel),
            metadata: s.formatMessage(On.CloseButtonTooltip, {
              shortcut: (0, O.jsx)(zl, {
                shortcut: "Esc"
              })
            }),
            children: (0, O.jsx)(yl.bm, {
              asChild: !0,
              children: l
            })
          })
        }),
        Al = (0, X.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, un.A)(),
            s = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, X.useContext)(gl), {
                contextSafe: r
              } = (0, gt.useGSAP)(), {
                resetZoom: n
              } = (0, X.useContext)(wl), [o, s] = (0, X.useState)(e.currZoomLevel !== e.zoomLevels.initial), a = r(e => {
                yt.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...an
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
            } = (0, X.useContext)(gl),
            i = (0, W.UP)(a, n),
            d = (0, H.mergeProps)(r, s, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, O.jsx)(Tl, {
            side: "left",
            enabled: t,
            content: o.formatMessage(On.ResetZoomButtonLabel),
            metadata: o.formatMessage(On.ResetZoomButtonTooltip, {
              shortcut: (0, O.jsx)(zl, {
                shortcut: "R"
              })
            }),
            children: (0, O.jsx)(Te, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(On.ResetZoomButtonLabel)
            })
          })
        }),
        Vl = (0, X.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, un.A)(),
            {
              downloadRef: s,
              imageRef: a
            } = (0, X.useContext)(gl),
            i = (0, W.UP)(s, n),
            d = (0, H.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, O.jsx)(Tl, {
            side: "left",
            enabled: t,
            content: o.formatMessage(On.DownloadButtonTooltip),
            children: (0, O.jsx)(Te, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(On.DownloadButtonTooltip),
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
        ql = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Fl = r(13258);

      function Bl(e) {
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

      function Xl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Gl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xl(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Bl(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Kl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Hl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Zl = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gl(Gl({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Hl(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kl(e.variantClassNames, e => Kl(e, e => e.split(" ")[0]))
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
      const Ul = (0, X.createContext)(null);

      function Wl() {
        const e = (0, X.useContext)(Ul);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const $l = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: s = "neutral",
          ...a
        }, i) => {
          const d = (0, H.mergeProps)({
              className: Zl({
                status: s
              }),
              "data-testid": t
            }, a),
            l = r ? $.DX : "div";
          return (0, O.jsx)(Ul.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: s,
              ...a
            },
            children: (0, O.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        Ql = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Wl(), s = (0, H.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: pe.Check,
            invalid: pe.X,
            neutral: pe.TriangleAlert
          }, i = t ? $.DX : a[o];
          return (0, O.jsx)(i, {
            ref: n,
            ...s
          })
        }),
        Yl = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            errorId: a
          } = Wl(), i = (0, H.mergeProps)({
            "data-testid": t,
            id: a || s
          }, n), d = r ? $.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var Jl = "ScrollArea",
        [ec, tc] = (0, li.A)(Jl),
        [rc, nc] = ec(Jl),
        oc = X.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...a
          } = e, [i, d] = X.useState(null), [l, c] = X.useState(null), [u, f] = X.useState(null), [p, h] = X.useState(null), [m, v] = X.useState(null), [y, g] = X.useState(0), [b, w] = X.useState(0), [_, x] = X.useState(!1), [j, C] = X.useState(!1), P = (0, di.s)(t, e => d(e)), S = (0, Md.jH)(o);
          return (0, O.jsx)(rc, {
            scope: r,
            type: n,
            dir: S,
            scrollHideDelay: s,
            scrollArea: i,
            viewport: l,
            onViewportChange: c,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: h,
            scrollbarXEnabled: _,
            onScrollbarXEnabledChange: x,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, O.jsx)(hi.sG.div, {
              dir: S,
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
      oc.displayName = Jl;
      var sc = "ScrollAreaViewport",
        ac = X.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...s
          } = e, a = nc(sc, r), i = X.useRef(null), d = (0, di.s)(t, i, a.onViewportChange);
          return (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, O.jsx)(hi.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: d,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, O.jsx)("div", {
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
      ac.displayName = sc;
      var ic = "ScrollAreaScrollbar",
        dc = X.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = nc(ic, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: a
          } = o, i = "horizontal" === e.orientation;
          return X.useEffect(() => (i ? s(!0) : a(!0), () => {
            i ? s(!1) : a(!1)
          }), [i, s, a]), "hover" === o.type ? (0, O.jsx)(lc, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, O.jsx)(cc, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, O.jsx)(uc, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, O.jsx)(fc, {
            ...n,
            ref: t
          }) : null
        });
      dc.displayName = ic;
      var lc = X.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = nc(ic, e.__scopeScrollArea), [s, a] = X.useState(!1);
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, O.jsx)(Xi.C, {
            present: r || s,
            children: (0, O.jsx)(uc, {
              "data-state": s ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        cc = X.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = nc(ic, e.__scopeScrollArea), s = "horizontal" === e.orientation, a = Dc(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, [o.viewport, s, d, a]), (0, O.jsx)(Xi.C, {
            present: r || "hidden" !== i,
            children: (0, O.jsx)(fc, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, ii.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, ii.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        uc = X.forwardRef((e, t) => {
          const r = nc(ic, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [s, a] = X.useState(!1),
            i = "horizontal" === e.orientation,
            d = Dc(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(i ? e : t)
              }
            }, 10);
          return Ic(r.viewport, d), Ic(r.content, d), (0, O.jsx)(Xi.C, {
            present: n || s,
            children: (0, O.jsx)(fc, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        fc = X.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = nc(ic, e.__scopeScrollArea), s = X.useRef(null), a = X.useRef(0), [i, d] = X.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = Pc(i.viewport, i.content), c = {
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
              const o = Oc(r),
                s = t || o / 2,
                a = o - s,
                i = r.scrollbar.paddingStart + s,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                l = r.content - r.viewport;
              return kc([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, a.current, i, t)
          }
          return "horizontal" === r ? (0, O.jsx)(pc, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = Sc(o.viewport.scrollLeft, i, o.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, O.jsx)(hc, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = Sc(o.viewport.scrollTop, i);
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
        pc = X.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = nc(ic, e.__scopeScrollArea), [a, i] = X.useState(), d = X.useRef(null), l = (0, di.s)(t, d, s.onScrollbarXChange);
          return X.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, O.jsx)(yc, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Oc(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Rc(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Cc(a.paddingLeft),
                  paddingEnd: Cc(a.paddingRight)
                }
              })
            }
          })
        }),
        hc = X.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = nc(ic, e.__scopeScrollArea), [a, i] = X.useState(), d = X.useRef(null), l = (0, di.s)(t, d, s.onScrollbarYChange);
          return X.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, O.jsx)(yc, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Oc(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Rc(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Cc(a.paddingTop),
                  paddingEnd: Cc(a.paddingBottom)
                }
              })
            }
          })
        }),
        [mc, vc] = ec(ic),
        yc = X.forwardRef((e, t) => {
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
          } = e, p = nc(ic, r), [h, m] = X.useState(null), v = (0, di.s)(t, e => m(e)), y = X.useRef(null), g = X.useRef(""), b = p.viewport, w = n.content - n.viewport, _ = (0, yi.c)(c), x = (0, yi.c)(d), j = Dc(u, 10);

          function C(e) {
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
          }, [b, h, w, _]), X.useEffect(x, [n, x]), Ic(h, j), Ic(p.content, j), (0, O.jsx)(mc, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, yi.c)(s),
            onThumbPointerUp: (0, yi.c)(a),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, yi.c)(i),
            children: (0, O.jsx)(hi.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, ii.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, ii.mK)(e.onPointerMove, C),
              onPointerUp: (0, ii.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        gc = "ScrollAreaThumb",
        bc = X.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = vc(gc, e.__scopeScrollArea);
          return (0, O.jsx)(Xi.C, {
            present: r || o.hasThumb,
            children: (0, O.jsx)(wc, {
              ref: t,
              ...n
            })
          })
        }),
        wc = X.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, s = nc(gc, r), a = vc(gc, r), {
            onThumbPositionChange: i
          } = a, d = (0, di.s)(t, e => a.onThumbChange(e)), l = X.useRef(void 0), c = Dc(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return X.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = Nc(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [s.viewport, c, i]), (0, O.jsx)(hi.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, ii.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, ii.mK)(e.onPointerUp, a.onThumbPointerUp)
          })
        });
      bc.displayName = gc;
      var _c = "ScrollAreaCorner",
        xc = X.forwardRef((e, t) => {
          const r = nc(_c, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, O.jsx)(jc, {
            ...e,
            ref: t
          }) : null
        });
      xc.displayName = _c;
      var jc = X.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = nc(_c, r), [s, a] = X.useState(0), [i, d] = X.useState(0), l = Boolean(s && i);
        return Ic(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), Ic(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        }), l ? (0, O.jsx)(hi.sG.div, {
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

      function Cc(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Pc(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Oc(e) {
        const t = Pc(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Sc(e, t, r = "ltr") {
        const n = Oc(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          s = t.scrollbar.size - o,
          a = t.content - t.viewport,
          i = s - n,
          d = Ld(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return kc([0, a], [0, i])(d)
      }

      function kc(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Rc(e, t) {
        return e > 0 && e < t
      }
      var Nc = (e, t = () => {}) => {
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

      function Dc(e, t) {
        const r = (0, yi.c)(e),
          n = X.useRef(0);
        return X.useEffect(() => () => window.clearTimeout(n.current), []), X.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Ic(e, t) {
        const r = (0, yi.c)(t);
        (0, gi.N)(() => {
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
      var Ec = oc,
        Tc = ac,
        zc = dc,
        Lc = bc,
        Mc = xc,
        Ac = r(91685),
        Vc = r(83876),
        qc = r(45787),
        Fc = r(35328),
        Bc = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Xc = [" ", "Enter"],
        Gc = "Select",
        [Kc, Hc, Zc] = (0, Vd.N)(Gc),
        [Uc, Wc] = (0, li.A)(Gc, [Zc, xi]),
        $c = xi(),
        [Qc, Yc] = Uc(Gc),
        [Jc, eu] = Uc(Gc),
        tu = e => {
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
            form: h
          } = e, m = $c(t), [v, y] = X.useState(null), [g, b] = X.useState(null), [w, _] = X.useState(!1), x = (0, Md.jH)(l), [j, C] = (0, Ki.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Gc
          }), [P, S] = (0, Ki.i)({
            prop: a,
            defaultProp: i,
            onChange: d,
            caller: Gc
          }), k = X.useRef(null), R = !v || h || !!v.closest("form"), [N, D] = X.useState(new Set), I = Array.from(N).map(e => e.props.value).join(";");
          return (0, O.jsx)(Ai, {
            ...m,
            children: (0, O.jsxs)(Qc, {
              required: p,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: _,
              contentId: (0, ui.B)(),
              value: P,
              onValueChange: S,
              open: j,
              onOpenChange: C,
              dir: x,
              triggerPointerDownPosRef: k,
              disabled: f,
              children: [(0, O.jsx)(Kc.Provider, {
                scope: t,
                children: (0, O.jsx)(Jc, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: X.useCallback(e => {
                    D(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: X.useCallback(e => {
                    D(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), R ? (0, O.jsxs)(Lu, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: c,
                autoComplete: u,
                value: P,
                onChange: e => S(e.target.value),
                disabled: f,
                form: h,
                children: [void 0 === P ? (0, O.jsx)("option", {
                  value: ""
                }) : null, Array.from(N)]
              }, I) : null]
            })
          })
        };
      tu.displayName = Gc;
      var ru = "SelectTrigger",
        nu = X.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, s = $c(r), a = Yc(ru, r), i = a.disabled || n, d = (0, di.s)(t, a.onTriggerChange), l = Hc(r), c = X.useRef("touch"), [u, f, p] = Au(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === a.value),
              n = Vu(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          }), h = e => {
            i || (a.onOpenChange(!0), p()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, O.jsx)(Vi, {
            asChild: !0,
            ...s,
            children: (0, O.jsx)(hi.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": a.contentId,
              "aria-expanded": a.open,
              "aria-required": a.required,
              "aria-autocomplete": "none",
              dir: a.dir,
              "data-state": a.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": Mu(a.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, ii.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && h(e)
              }),
              onPointerDown: (0, ii.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: (0, ii.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Bc.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      nu.displayName = ru;
      var ou = "SelectValue",
        su = X.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: s,
            placeholder: a = "",
            ...i
          } = e, d = Yc(ou, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== s, u = (0, di.s)(t, d.onValueNodeChange);
          return (0, gi.N)(() => {
            l(c)
          }, [l, c]), (0, O.jsx)(hi.sG.span, {
            ...i,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: Mu(d.value) ? (0, O.jsx)(O.Fragment, {
              children: a
            }) : s
          })
        });
      su.displayName = ou;
      var au = X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, O.jsx)(hi.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      au.displayName = "SelectIcon";
      var iu = e => (0, O.jsx)(Bi.Z, {
        asChild: !0,
        ...e
      });
      iu.displayName = "SelectPortal";
      var du = "SelectContent",
        lu = X.forwardRef((e, t) => {
          const r = Yc(du, e.__scopeSelect),
            [n, o] = X.useState();
          if ((0, gi.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? Ha.createPortal((0, O.jsx)(uu, {
              scope: e.__scopeSelect,
              children: (0, O.jsx)(Kc.Slot, {
                scope: e.__scopeSelect,
                children: (0, O.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, O.jsx)(hu, {
            ...e,
            ref: t
          })
        });
      lu.displayName = du;
      var cu = 10,
        [uu, fu] = Uc(du),
        pu = (0, Gi.TL)("SelectContent.RemoveScroll"),
        hu = X.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
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
          } = e, g = Yc(du, r), [b, w] = X.useState(null), [_, x] = X.useState(null), j = (0, di.s)(t, e => w(e)), [C, P] = X.useState(null), [S, k] = X.useState(null), R = Hc(r), [N, D] = X.useState(!1), I = X.useRef(!1);
          X.useEffect(() => {
            if (b) return (0, qc.Eq)(b)
          }, [b]), (0, Ac.Oh)();
          const E = X.useCallback(e => {
              const [t, ...r] = R().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && _ && (_.scrollTop = 0), r === n && _ && (_.scrollTop = _.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [R, _]),
            T = X.useCallback(() => E([C, b]), [E, C, b]);
          X.useEffect(() => {
            N && T()
          }, [N, T]);
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
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (L.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (L.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || z(!1), document.removeEventListener("pointermove", t), L.current = null
                };
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
            const e = () => z(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [z]);
          const [M, A] = Au(e => {
            const t = R().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Vu(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), V = X.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (P(e), n && (I.current = !0))
          }, [g.value]), q = X.useCallback(() => b?.focus(), [b]), F = X.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && k(e)
          }, [g.value]), B = "popper" === n ? vu : mu, G = B === vu ? {
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
          return (0, O.jsx)(uu, {
            scope: r,
            content: b,
            viewport: _,
            onViewportChange: x,
            itemRefCallback: V,
            selectedItem: C,
            onItemLeave: q,
            itemTextRefCallback: F,
            focusSelectedItem: T,
            selectedItemText: S,
            position: n,
            isPositioned: N,
            searchRef: M,
            children: (0, O.jsx)(Fc.A, {
              as: pu,
              allowPinchZoom: !0,
              children: (0, O.jsx)(Vc.n, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, ii.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, O.jsx)(ci.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, O.jsx)(B, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...G,
                    onPlaced: () => D(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, ii.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || A(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = R().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => E(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      hu.displayName = "SelectContentImpl";
      var mu = X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, s = Yc(du, r), a = fu(du, r), [i, d] = X.useState(null), [l, c] = X.useState(null), u = (0, di.s)(t, e => c(e)), f = Hc(r), p = X.useRef(!1), h = X.useRef(!0), {
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
                c = window.innerWidth - cu,
                u = Ld(s, [cu, Math.max(cu, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                s = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - s,
                d = e.width + a,
                l = Math.max(d, t.width),
                c = window.innerWidth - cu,
                u = Ld(s, [cu, Math.max(cu, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const a = f(),
              d = window.innerHeight - 2 * cu,
              c = m.scrollHeight,
              u = window.getComputedStyle(l),
              h = parseInt(u.borderTopWidth, 10),
              g = parseInt(u.paddingTop, 10),
              b = parseInt(u.borderBottomWidth, 10),
              w = h + g + c + parseInt(u.paddingBottom, 10) + b,
              _ = Math.min(5 * v.offsetHeight, w),
              x = window.getComputedStyle(m),
              j = parseInt(x.paddingTop, 10),
              C = parseInt(x.paddingBottom, 10),
              P = e.top + e.height / 2 - cu,
              O = d - P,
              S = v.offsetHeight / 2,
              k = h + g + (v.offsetTop + S),
              R = w - k;
            if (k <= P) {
              const e = a.length > 0 && v === a[a.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = l.clientHeight - m.offsetTop - m.offsetHeight,
                r = k + Math.max(O, S + (e ? C : 0) + t + b);
              i.style.height = r + "px"
            } else {
              const e = a.length > 0 && v === a[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(P, h + m.offsetTop + (e ? j : 0) + S) + R;
              i.style.height = t + "px", m.scrollTop = k - P + m.offsetTop
            }
            i.style.margin = `${cu}px 0`, i.style.minHeight = _ + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, s.trigger, s.valueNode, i, l, m, v, y, s.dir, n]);
        (0, gi.N)(() => b(), [b]);
        const [w, _] = X.useState();
        (0, gi.N)(() => {
          l && _(window.getComputedStyle(l).zIndex)
        }, [l]);
        const x = X.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, O.jsx)(yu, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: x,
          children: (0, O.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, O.jsx)(hi.sG.div, {
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
      mu.displayName = "SelectItemAlignedPosition";
      var vu = X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = cu,
          ...s
        } = e, a = $c(r);
        return (0, O.jsx)(qi, {
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
      vu.displayName = "SelectPopperPosition";
      var [yu, gu] = Uc(du, {}), bu = "SelectViewport", wu = X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, s = fu(bu, r), a = gu(bu, r), i = (0, di.s)(t, s.onViewportChange), d = X.useRef(0);
        return (0, O.jsxs)(O.Fragment, {
          children: [(0, O.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, O.jsx)(Kc.Slot, {
            scope: r,
            children: (0, O.jsx)(hi.sG.div, {
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
              onScroll: (0, ii.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * cu,
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
      wu.displayName = bu;
      var _u = "SelectGroup",
        [xu, ju] = Uc(_u);
      X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, ui.B)();
        return (0, O.jsx)(xu, {
          scope: r,
          id: o,
          children: (0, O.jsx)(hi.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = _u;
      var Cu = "SelectLabel";
      X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = ju(Cu, r);
        return (0, O.jsx)(hi.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Cu;
      var Pu = "SelectItem",
        [Ou, Su] = Uc(Pu),
        ku = X.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: s,
            ...a
          } = e, i = Yc(Pu, r), d = fu(Pu, r), l = i.value === n, [c, u] = X.useState(s ?? ""), [f, p] = X.useState(!1), h = (0, di.s)(t, e => d.itemRefCallback?.(e, n, o)), m = (0, ui.B)(), v = X.useRef("touch"), y = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, O.jsx)(Ou, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: l,
            onItemTextChange: X.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, O.jsx)(Kc.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, O.jsx)(hi.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": l && f,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: h,
                onFocus: (0, ii.mK)(a.onFocus, () => p(!0)),
                onBlur: (0, ii.mK)(a.onBlur, () => p(!1)),
                onClick: (0, ii.mK)(a.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: (0, ii.mK)(a.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: (0, ii.mK)(a.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: (0, ii.mK)(a.onPointerMove, e => {
                  v.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, ii.mK)(a.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, ii.mK)(a.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (Xc.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      ku.displayName = Pu;
      var Ru = "SelectItemText",
        Nu = X.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...s
          } = e, a = Yc(Ru, r), i = fu(Ru, r), d = Su(Ru, r), l = eu(Ru, r), [c, u] = X.useState(null), f = (0, di.s)(t, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, h = X.useMemo(() => (0, O.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = l;
          return (0, gi.N)(() => (m(h), () => v(h)), [m, v, h]), (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)(hi.sG.span, {
              id: d.textId,
              ...s,
              ref: f
            }), d.isSelected && a.valueNode && !a.valueNodeHasChildren ? Ha.createPortal(s.children, a.valueNode) : null]
          })
        });
      Nu.displayName = Ru;
      var Du = "SelectItemIndicator";
      X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Su(Du, r).isSelected ? (0, O.jsx)(hi.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = Du;
      var Iu = "SelectScrollUpButton";
      X.forwardRef((e, t) => {
        const r = fu(Iu, e.__scopeSelect),
          n = gu(Iu, e.__scopeSelect),
          [o, s] = X.useState(!1),
          a = (0, di.s)(t, n.onScrollButtonChange);
        return (0, gi.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              s(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, O.jsx)(Tu, {
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
      }).displayName = Iu;
      var Eu = "SelectScrollDownButton";
      X.forwardRef((e, t) => {
        const r = fu(Eu, e.__scopeSelect),
          n = gu(Eu, e.__scopeSelect),
          [o, s] = X.useState(!1),
          a = (0, di.s)(t, n.onScrollButtonChange);
        return (0, gi.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              s(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, O.jsx)(Tu, {
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
      }).displayName = Eu;
      var Tu = X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, s = fu("SelectScrollButton", r), a = X.useRef(null), i = Hc(r), d = X.useCallback(() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }, []);
        return X.useEffect(() => () => d(), [d]), (0, gi.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, O.jsx)(hi.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, ii.mK)(o.onPointerDown, () => {
            null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, ii.mK)(o.onPointerMove, () => {
            s.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, ii.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, O.jsx)(hi.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var zu = "SelectArrow";
      X.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = $c(r), s = Yc(zu, r), a = fu(zu, r);
        return s.open && "popper" === a.position ? (0, O.jsx)(Fi, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = zu;
      var Lu = X.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = X.useRef(null),
          s = (0, di.s)(n, o),
          a = Ad(t);
        return X.useEffect(() => {
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
        }, [a, t]), (0, O.jsx)(hi.sG.select, {
          ...r,
          style: {
            ...Hi,
            ...r.style
          },
          ref: s,
          defaultValue: t
        })
      });

      function Mu(e) {
        return "" === e || void 0 === e
      }

      function Au(e) {
        const t = (0, yi.c)(e),
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

      function Vu(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let s = (a = e, i = Math.max(o, 0), a.map((e, t) => a[(i + t) % a.length]));
        var a, i;
        1 === n.length && (s = s.filter(e => e !== r));
        const d = s.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }
      Lu.displayName = "SelectBubbleInput";
      var qu = tu,
        Fu = nu,
        Bu = su,
        Xu = au,
        Gu = iu,
        Ku = lu,
        Hu = wu,
        Zu = ku,
        Uu = Nu;

      function Wu(e) {
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

      function $u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Qu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $u(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Wu(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $u(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Yu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ju = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ef = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qu(Qu({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ju(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yu(e.variantClassNames, e => Yu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        tf = ef({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        rf = ef({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nf = ef({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        of = ef({
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
        sf = ef({
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
        af = ef({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const df = (0, X.createContext)(null);

      function lf() {
        const e = (0, X.useContext)(df);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const cf = (0, X.forwardRef)(({
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
            y = (0, W.UP)(v, m),
            g = (0, X.useId)(),
            b = (0, X.useId)(),
            w = (0, X.useId)(),
            _ = (0, X.useId)(),
            x = (0, X.useId)(),
            j = (0, X.useId)(),
            [C = !1, P] = (0, W.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            S = (0, H.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, O.jsx)(df.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: j,
              hintId: _,
              popoverId: x,
              defaultValue: s,
              onValueChange: a,
              value: d,
              isOpen: C,
              setIsOpen: P,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, O.jsx)(qu, {
              required: r,
              disabled: n,
              open: C,
              onOpenChange: () => P(!o && !C),
              value: d,
              defaultValue: s,
              onValueChange: a,
              name: i,
              children: (0, O.jsx)("div", {
                ref: y,
                ...S,
                children: e
              })
            })
          })
        }),
        uf = (0, X.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: s
          } = lf(), a = (0, H.mergeProps)({
            id: s,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: tf({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, O.jsx)(Ku, {
            ...a,
            ref: o,
            children: (0, O.jsx)(Hu, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        ff = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, H.mergeProps)({
            "data-testid": e
          }, t);
          return (0, O.jsx)(Hu, {
            ref: r,
            ...n
          })
        }),
        pf = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, O.jsxs)(Ec, {
            ...o,
            ref: n,
            children: [(0, O.jsx)(ff, {
              asChild: !0,
              children: (0, O.jsx)(Tc, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, O.jsx)(zc, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, O.jsx)(Lc, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        hf = (0, X.forwardRef)(({
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
            isOpen: m,
            value: v,
            size: y
          } = lf(), {
            isPressed: g,
            pressProps: b
          } = (0, Fl.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, H.mergeProps)({
            id: f,
            className: sf({
              size: y,
              isReadOnly: !!i,
              isInvalid: "invalid" === d,
              isPressed: !!g,
              isDisabled: !!l
            }),
            "aria-labelledby": (0, H.joinStrings)(r, c, u),
            "aria-describedby": (0, H.joinStrings)(n, h),
            "aria-activedescendant": v,
            "aria-controls": p,
            "aria-invalid": "invalid" === d,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, H.omit)(b, "onKeyDown"), s), _ = o ? $.DX : Fu;
          return (0, O.jsx)(_, {
            ...w,
            ref: a,
            children: e
          })
        }),
        mf = (0, X.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.mergeProps)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            a = t ? $.DX : "span";
          return (0, O.jsx)(a, {
            ...s,
            ref: o,
            children: (0, O.jsx)(Bu, {
              placeholder: e
            })
          })
        }),
        vf = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: s,
            isOpen: a
          } = lf(), i = a ? pe.ChevronUp : pe.ChevronDown, d = (0, H.mergeProps)({
            asChild: !0,
            className: af({
              isDisabled: s || o
            }),
            "data-testid": t
          }, r);
          return (0, O.jsx)(Xu, {
            ...d,
            ref: n,
            children: e || (0, O.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        yf = (0, X.forwardRef)(({
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
            triggerId: c
          } = lf(), u = i && !o, f = (0, H.mergeProps)({
            id: s.id || l,
            htmlFor: c,
            "data-testid": e,
            className: of({
              showAsterisk: u,
              isDisabled: d
            })
          }, s), p = t ? $.DX : "label";
          return (0, O.jsx)($.s6, {
            enabled: n,
            children: (0, O.jsx)(p, {
              ...f,
              ref: a,
              children: r
            })
          })
        }),
        gf = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = lf(), i = (0, H.mergeProps)({
            className: rf({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? $.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        bf = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = lf(), i = (0, H.mergeProps)({
            className: nf({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? $.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        wf = (0, X.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, X.useRef)(null),
            i = (0, W.UP)(a, s),
            d = (0, H.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, O.jsx)(Zu, {
            ref: i,
            ...d,
            children: e
          })
        }),
        _f = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, O.jsx)(Uu, {
            ref: n,
            asChild: !0,
            children: (0, O.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        xf = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, O.jsx)(Xu, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        jf = Gu,
        Cf = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = lf(), i = (0, H.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? $.DX : $l;
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Pf = Ql,
        Of = Yl;
      var Sf = r(42069),
        kf = r(14961),
        Rf = r(37013),
        Nf = r(38140),
        Df = r(96187);

      function If(e, t, r) {
        let n = (0, Df.J)(e => {
          r && !e.defaultPrevented && r(t)
        });
        (0, X.useEffect)(() => {
          let t = e?.current?.form;
          return t?.addEventListener("reset", n), () => {
            t?.removeEventListener("reset", n)
          }
        }, [e])
      }

      function Ef(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: s,
          name: a,
          form: i,
          children: d,
          "aria-label": l,
          "aria-labelledby": c,
          validationState: u = "valid",
          isInvalid: f,
          onPressStart: p,
          onPressEnd: h,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g
        } = e, {
          pressProps: b,
          isPressed: w
        } = (0, Fl.d)({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g,
          isDisabled: n
        }), {
          pressProps: _,
          isPressed: x
        } = (0, Fl.d)({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: m,
          onPressUp: y,
          onClick: g,
          onPress(e) {
            v?.(e), t.toggle(), r.current?.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: j
        } = (0, Nf.Wc)(e, r), C = (0, Rf.v)(b, j), P = (0, Sf.$)(e, {
          labelable: !0
        });
        return If(r, t.defaultSelected, t.setSelected), {
          labelProps: (0, Rf.v)(_, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, Rf.v)(P, {
            "aria-invalid": f || "invalid" === u || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected((0, kf.wt)(e).checked)
            },
            disabled: n,
            ...null == s ? {} : {
              value: s
            },
            name: a,
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
      const Tf = "undefined" != typeof document ? X.useInsertionEffect ?? X.useLayoutEffect : () => {};

      function zf(e, t, r) {
        let [n, o] = (0, X.useState)(e || t), s = (0, X.useRef)(n), a = (0, X.useRef)(void 0 !== e), i = void 0 !== e;
        (0, X.useEffect)(() => {
          a.current, a.current = i
        }, [i]);
        let d = i ? e : n;
        Tf(() => {
          s.current = d
        });
        let [, l] = (0, X.useReducer)(() => ({}), {}), c = (0, X.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(s.current) : e;
          Object.is(s.current, n) || (s.current = n, o(n), l(), r?.(n, ...t))
        }, [r]);
        return [d, c]
      }

      function Lf(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = zf(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, X.useState)(r);
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

      function Mf(e) {
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

      function Af(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Af(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Mf(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Af(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function qf(e, t) {
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
        Bf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vf(Vf({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ff(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qf(e.variantClassNames, e => qf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Xf = Bf({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gf = Bf({
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
        Kf = Bf({
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
        Hf = Bf({
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
        Zf = Bf({
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
      const Uf = (0, X.createContext)(null);

      function Wf() {
        const e = (0, X.useContext)(Uf);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const $f = (0, X.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: s = !1,
          isReadOnly: a = !1,
          ...i
        }, d) => {
          const l = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? $.DX : "div",
            u = (0, X.useId)(),
            f = (0, X.useId)(),
            p = (0, X.useId)();
          return (0, O.jsx)(Uf.Provider, {
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
            children: (0, O.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        Qf = (0, X.forwardRef)(({
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
            h = (0, W.UP)(p, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: _
            } = Wf(),
            x = Lf({
              isDisabled: w,
              isReadOnly: _,
              isSelected: a,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: j
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: s,
                isPressed: a,
                isDisabled: i,
                isReadOnly: d
              } = Ef(e, t, r);
              return {
                labelProps: n,
                inputProps: {
                  ...o,
                  role: "switch",
                  checked: s
                },
                isSelected: s,
                isPressed: a,
                isDisabled: i,
                isReadOnly: d
              }
            }({
              id: s || y,
              "aria-labelledby": (0, H.joinStrings)(n, g),
              "aria-describedby": (0, H.joinStrings)(o, b),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: _
            }, x, p),
            C = (0, H.mergeProps)({
              className: Zf({
                appearance: v
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": w || _,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || _ || x.toggle()
              }
            }, u);
          return (0, O.jsxs)("div", {
            ...C,
            children: [(0, O.jsx)($.s6, {
              children: (0, O.jsx)("input", {
                ...j,
                ref: h
              })
            }), (0, O.jsx)("div", {
              className: Hf({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, O.jsx)("div", {
                className: Gf({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        Yf = (0, X.forwardRef)(({
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
          } = Wf(), c = (0, H.mergeProps)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Kf({
              isDisabled: a,
              size: l
            })
          }, o), u = t ? $.DX : "label";
          return (0, O.jsx)($.s6, {
            enabled: n,
            children: (0, O.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Jf = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Wf(), i = n.id || a, d = (0, H.mergeProps)({
            className: Xf({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? $.DX : "div";
          return (0, O.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var ep = r(99386),
        tp = r(58907);

      function rp(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, tp.N)(() => {
          if ("native" === n && r?.current && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: np(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let s = (0, X.useRef)(!1),
          a = (0, Df.J)(() => {
            s.current || t.resetValidation()
          }),
          i = (0, Df.J)(e => {
            t.displayValidation.isInvalid || t.commitValidation();
            let n = r?.current?.form;
            !e.defaultPrevented && r && n && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!1 === r.validity?.valid) return r
              }
              return null
            }(n) === r.current && (o ? o() : r.current?.focus(), (0, ep.Cl)("keyboard")), e.preventDefault()
          }),
          d = (0, Df.J)(() => {
            t.commitValidation()
          });
        (0, X.useEffect)(() => {
          let e = r?.current;
          if (!e) return;
          let t = e.form,
            n = t?.reset;
          return t && (t.reset = () => {
            s.current = !window.event || "message" === window.event.type && (0, kf.wt)(window.event) instanceof MessagePort, n?.call(t), s.current = !1
          }), e.addEventListener("invalid", i), e.addEventListener("change", d), t?.addEventListener("reset", a), () => {
            e.removeEventListener("invalid", i), e.removeEventListener("change", d), t?.removeEventListener("reset", a), t && (t.reset = n)
          }
        }, [r, n])
      }

      function np(e) {
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
      const op = {
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
        sp = {
          ...op,
          customError: !0,
          valid: !1
        },
        ap = {
          isInvalid: !1,
          validationDetails: op,
          validationErrors: []
        },
        ip = (0, X.createContext)({}),
        dp = "__reactAriaFormValidationState";

      function lp(e) {
        if (e[dp]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: s
          } = e[dp];
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
              validationDetails: sp
            } : null,
            l = (0, X.useMemo)(() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return cp(r)
                }
                return []
              }(a, o);
              return up(e)
            }, [a, o]);
          s?.validationDetails.valid && (s = void 0);
          let c = (0, X.useContext)(ip),
            u = (0, X.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => cp(c[e])) : cp(c[n]) : [], [c, n]),
            [f, p] = (0, X.useState)(c),
            [h, m] = (0, X.useState)(!1);
          c !== f && (p(c), m(!1));
          let v = (0, X.useMemo)(() => up(h ? [] : u), [h, u]),
            y = (0, X.useRef)(ap),
            [g, b] = (0, X.useState)(ap),
            w = (0, X.useRef)(ap),
            [_, x] = (0, X.useState)(!1);
          return (0, X.useEffect)(() => {
            if (!_) return;
            x(!1);
            let e = l || s || y.current;
            fp(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: d || v || l || s || ap,
            displayValidation: "native" === i ? d || v || g : d || v || l || s || g,
            updateValidation(e) {
              "aria" !== i || fp(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = ap;
              fp(e, w.current) || (w.current = e, b(e)), "native" === i && x(!1), m(!0)
            },
            commitValidation() {
              "native" === i && x(!0), m(!0)
            }
          }
        }(e)
      }

      function cp(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function up(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: sp
        } : null
      }

      function fp(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }
      const pp = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        hp = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        mp = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        vp = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        yp = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        gp = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function bp(e) {
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

      function wp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = bp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var jp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _p(_p({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) jp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xp(e.variantClassNames, e => xp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Pp = Cp({
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
        Op = Cp({
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
        Sp = Cp({
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
        kp = Cp({
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
        Rp = Cp({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Np = Cp({
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
      const Dp = (0, X.createContext)(null);

      function Ip() {
        const e = (0, X.useContext)(Dp);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Ep = (0, X.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...s
        }, a) => {
          const i = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, H.omit)(s, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? $.DX : "div",
            l = (0, X.useId)(),
            c = (0, X.useId)(),
            u = (0, X.useId)();
          return (0, O.jsx)(Dp.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...s
            },
            children: (0, O.jsx)(d, {
              ...i,
              ref: a,
              children: o
            })
          })
        }),
        Tp = (0, X.forwardRef)(({
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
          } = Ip(), x = (0, X.useRef)(null), j = f.id || w, {
            isPressed: C,
            pressProps: P
          } = (0, Fl.d)({
            ref: x
          }), {
            setSelected: S,
            toggle: k,
            ...R
          } = Lf({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: N,
            isSelected: D,
            isDisabled: I,
            isReadOnly: E
          } = function(e, t, r) {
            let n = lp({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: s,
                validationDetails: a
              } = n.displayValidation,
              {
                labelProps: i,
                inputProps: d,
                isSelected: l,
                isPressed: c,
                isDisabled: u,
                isReadOnly: f
              } = Ef({
                ...e,
                isInvalid: o
              }, t, r);
            rp(e, n, r);
            let {
              isIndeterminate: p,
              isRequired: h,
              validationBehavior: m = "aria"
            } = e;
            (0, X.useEffect)(() => {
              r.current && (r.current.indeterminate = !!p)
            });
            let {
              pressProps: v
            } = (0, Fl.d)({
              isDisabled: u || f,
              onPress() {
                let {
                  [dp]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: (0, Rf.v)(i, v, (0, X.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...d,
                checked: l,
                "aria-required": h && "aria" === m || void 0,
                required: h && "native" === m
              },
              isSelected: l,
              isPressed: c,
              isDisabled: u,
              isReadOnly: f,
              isInvalid: o,
              validationErrors: s,
              validationDetails: a
            }
          }({
            "aria-label": "",
            id: j,
            name: o,
            ..._
          }, {
            ...R,
            toggle: k,
            setSelected: _.isReadOnly ? () => !1 : S
          }, x), T = (0, H.mergeProps)({
            className: Op({
              size: h
            }),
            onClick: e => {
              s?.(e) ?? a?.(e), e.defaultPrevented || I || E || k()
            }
          }, P, f), z = (0, H.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, H.joinStrings)(c, b),
            "aria-describedby": (0, H.joinStrings)(d, g),
            "aria-errormessage": (0, H.joinStrings)(l, _.isInvalid ? g : void 0),
            "aria-required": y,
            required: y
          }, N), L = v ? i[`Dash${h}`] : i[`Check${h}`];
          return (0, O.jsxs)("div", {
            ...T,
            children: [(0, O.jsx)($.s6, {
              children: (0, O.jsx)("input", {
                ...z,
                ref: p
              })
            }), (0, O.jsx)("div", {
              className: (0, fe.clsx)(Pp({
                size: h,
                appearance: m
              }), u),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : D ? "checked" : "unchecked",
              "data-disabled": I || E,
              "data-testid": e,
              "data-pressed": C,
              children: (0, O.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (D || v) && (0, O.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        zp = (0, X.forwardRef)(({
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
          } = Ip(), u = s.id || d, f = c && !o, p = (0, H.mergeProps)({
            className: Np({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: s.htmlFor || l
          }, s), h = t ? $.DX : "label";
          return (0, O.jsx)($.s6, {
            enabled: n,
            children: (0, O.jsx)(h, {
              ...p,
              ref: a,
              children: e
            })
          })
        }),
        Lp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Ip(), i = n.id || a, d = (0, H.mergeProps)({
            className: Sp({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? $.DX : "div";
          return (0, O.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        Mp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = Ip(), a = n.id || s, i = (0, H.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: a
          }, n), d = t ? $.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ap = (0, X.createContext)(null);

      function Vp() {
        const e = (0, X.useContext)(Ap);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const qp = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...s
        }, a) => {
          const [i, d] = (0, X.useState)(null), [l, c] = (0, X.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, H.mergeProps)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, s), p = t ? $.DX : "fieldset";
          return (0, O.jsx)(Ap.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, O.jsx)(p, {
              ...f,
              ref: a,
              children: r
            })
          })
        }),
        Fp = (0, X.forwardRef)(({
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
          } = Vp(), l = d && !s, c = (0, H.mergeProps)({
            "data-testid": r,
            className: Rp({
              showAsterisk: l
            })
          }, a), u = t ? $.DX : "legend";
          return (0, O.jsx)($.s6, {
            enabled: o,
            children: (0, O.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, O.jsx)($.xV, {
                children: e
              }), !d && (0, O.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        Bp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: s
          } = Vp(), a = (0, X.useId)(), i = n.id || a;
          (0, X.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = t ? $.DX : "div";
          return (0, O.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        Xp = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = Vp(), a = (0, H.mergeProps)({
            "data-testid": r,
            className: kp({
              size: s
            })
          }, n), i = t ? $.DX : "div";
          return (0, O.jsx)(i, {
            ...a,
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
            setErrorTextId: s
          } = Vp(), a = (0, X.useId)(), i = n.id || a;
          (0, X.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, H.mergeProps)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = pe.X,
            c = t ? $.DX : "div";
          return (0, O.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, O.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, O.jsx)($.xV, {
              children: e
            })]
          })
        });

      function Kp(e) {
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

      function Hp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Zp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Kp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Up(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Wp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $p = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Zp(Zp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Wp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Up(e.variantClassNames, e => Up(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Qp = $p({
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
        Yp = $p({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Jp = $p({
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
        eh = $p({
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
      const th = (0, X.createContext)(null);

      function rh() {
        const e = (0, X.useContext)(th);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const nh = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const l = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? $.DX : "div",
            u = (0, X.useId)(),
            f = (0, X.useId)(),
            p = (0, X.useId)(),
            h = (0, X.useId)();
          return (0, O.jsx)(th.Provider, {
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
            children: (0, O.jsx)(c, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        oh = (0, X.forwardRef)(({
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
          } = rh(), u = (0, H.mergeProps)({
            className: Jp({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, s), f = t ? $.DX : "label";
          return (0, O.jsx)($.s6, {
            enabled: n,
            children: (0, O.jsx)(f, {
              ...u,
              ref: a,
              children: e
            })
          })
        }),
        sh = (0, X.forwardRef)(({
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
          } = rh(), b = (0, X.useRef)(null), w = (0, W.UP)(b, c), _ = (0, H.mergeProps)({
            className: eh({
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
            "aria-labelledby": (0, H.joinStrings)(l.id, f, h, i),
            "aria-describedby": (0, H.joinStrings)(u, d),
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
          }, l), x = e ? $.DX : "textarea";
          return (0, O.jsx)(x, {
            ref: w,
            ..._,
            children: t
          })
        }),
        ah = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = rh(), i = (0, H.mergeProps)({
            className: Qp({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? $.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ih = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = rh(), i = (0, H.mergeProps)({
            className: Yp({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? $.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        dh = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = rh(), i = (0, H.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? $.DX : $l;
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        lh = Ql,
        ch = Yl;
      let uh = Math.round(1e10 * Math.random()),
        fh = 0;
      var ph = r(67892);
      class hh {
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
          if (!(0, kf.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, kf.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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
      var mh = r(28562),
        vh = r(1360);

      function yh(e, t) {
        return !!e && !!t && t.some(t => (0, kf.sD)(t, e))
      }

      function gh(e, t, r) {
        let n = t?.tabbable ? vh.A : vh.t,
          o = e?.nodeType === Node.ELEMENT_NODE ? e : null,
          s = (0, mh.TW)(o),
          a = function(e, t, r, n) {
            return (0, ph.Nf)() ? new hh(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(s, e || s, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if ((0, kf.sD)(t?.from, e)) return NodeFilter.FILTER_REJECT;
              if (t?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from((0, mh.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let r = (0, mh.mD)(e);
                      return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === a.currentNode.tagName && "radio" === a.currentNode.type && a.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !yh(e, r) || t?.accept && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return t?.from && (a.currentNode = t.from), a
      }
      class bh {
        constructor() {
          this.fastMap = new Map, this.root = new wh({
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
          let o = new wh({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && yh(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          let e = new bh;
          for (let t of this.traverse()) e.addTreeNode(t.scopeRef, t.parent?.scopeRef ?? null, t.nodeToRestore);
          return e
        }
      }
      class wh {
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
      new bh;
      const _h = new WeakMap;
      var xh = r(13087);

      function jh(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, xh.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Ch(e) {
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
          t = (0, xh.Bi)(t);
          let a = (0, xh.Bi)(),
            i = {};
          return r && (n = n ? `${a} ${n}` : a, i = {
            id: a,
            htmlFor: "label" === s ? t : void 0
          }), {
            labelProps: i,
            fieldProps: jh({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), i = (0, xh.X1)([Boolean(t), Boolean(r), n, o]), d = (0, xh.X1)([Boolean(t), Boolean(r), n, o]);
        return a = (0, Rf.v)(a, {
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
      var Ph = r(14142),
        Oh = r(87478);
      const Sh = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        kh = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Rh(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return Sh.has(t.script)
        }
        let t = e.split("-")[0];
        return kh.has(t)
      }
      var Nh = r(6859);
      const Dh = Symbol.for("react-aria.i18n.locale");

      function Ih() {
        let e = "undefined" != typeof window && window[Dh] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Rh(e) ? "rtl" : "ltr"
        }
      }
      let Eh = Ih(),
        Th = new Set;

      function zh() {
        Eh = Ih();
        for (let e of Th) e(Eh)
      }
      const Lh = X.createContext(null);

      function Mh() {
        let e = function() {
          let e = (0, Nh.wR)(),
            [t, r] = (0, X.useState)(Eh);
          return (0, X.useEffect)(() => (0 === Th.size && window.addEventListener("languagechange", zh), Th.add(r), () => {
            Th.delete(r), 0 === Th.size && window.removeEventListener("languagechange", zh)
          }), []), e ? {
            locale: "undefined" != typeof window && window[Dh] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, X.useContext)(Lh) || e
      }

      function Ah(e, t) {
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
        } = Mh(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: m,
          errorMessageProps: v
        } = Ch({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), y = (0, Sf.$)(e, {
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
          } = (0, Oh.A)(), d = (0, X.useCallback)(e => {
            (0, kf.sD)(e.currentTarget, (0, kf.wt)(e)) && s.current.isFocusWithin && !(0, kf.sD)(e.currentTarget, e.relatedTarget) && (s.current.isFocusWithin = !1, i(), r && r(e), o && o(!1))
          }, [r, o, s, i]), l = (0, Ph.yB)(d), c = (0, X.useCallback)(e => {
            if (!(0, kf.sD)(e.currentTarget, (0, kf.wt)(e))) return;
            let t = (0, kf.wt)(e);
            const r = (0, mh.TW)(t),
              i = (0, kf.bq)(r);
            if (!s.current.isFocusWithin && i === t) {
              n && n(e), o && o(!0), s.current.isFocusWithin = !0, l(e);
              let t = e.currentTarget;
              a(r, "focus", e => {
                let n = (0, kf.wt)(e);
                if (s.current.isFocusWithin && !(0, kf.sD)(t, n)) {
                  let e = new r.defaultView.FocusEvent("blur", {
                    relatedTarget: n
                  });
                  (0, Ph.o1)(e, t);
                  let o = (0, Ph.eg)(e);
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
        }), b = (0, xh.Bi)(r);
        return _h.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: d
        }), {
          radioGroupProps: (0, Rf.v)(y, {
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
              let n, o = gh(e.currentTarget, {
                from: (0, kf.wt)(e),
                accept: e => e instanceof(0, mh.mD)(e).HTMLInputElement && "radio" === e.type
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

      function Vh(e) {
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

      function qh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Fh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qh(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Vh(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Bh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gh = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Fh(Fh({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bh(e.variantClassNames, e => Bh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Kh = Gh({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hh = Gh({
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
      const Zh = (0, X.createContext)(null);

      function Uh() {
        const e = (0, X.useContext)(Zh);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Wh = (0, X.forwardRef)(({
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
            p = (0, W.UP)(f, u),
            h = (0, X.useId)(),
            m = (0, X.useId)(),
            v = (0, X.useId)(),
            y = function(e) {
              let t = (0, X.useMemo)(() => e.name || `radio-group-${uh}-${++fh}`, [e.name]),
                [r, n] = zf(e.value, e.defaultValue ?? null, e.onChange),
                [o] = (0, X.useState)(r),
                [s, a] = (0, X.useState)(null),
                i = lp({
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
            } = Ah({
              ...c,
              orientation: r,
              "aria-labelledby": (0, H.joinStrings)(h, a),
              "aria-describedby": (0, H.joinStrings)(m, v, i),
              "aria-errormessage": (0, H.joinStrings)(v, d)
            }, y),
            b = (0, H.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, H.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = s ? $.DX : "div";
          return (0, O.jsx)(Zh.Provider, {
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
            children: (0, O.jsx)(w, {
              ref: p,
              "data-testid": o,
              ...b,
              children: n
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
            size: s,
            orientation: a
          } = Uh(), i = (0, H.mergeProps)({
            "data-testid": e,
            className: Hh({
              size: s,
              orientation: a
            })
          }, n), d = t ? $.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        Qh = (0, X.forwardRef)(({
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
          } = Uh(), l = i && !o, c = (0, H.mergeProps)({
            id: s.id || d,
            "data-testid": e,
            className: Kh({
              showAsterisk: l
            })
          }, s), u = t ? $.DX : "div";
          return (0, O.jsx)($.s6, {
            enabled: n,
            children: (0, O.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Yh = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = Uh(), a = (0, H.mergeProps)({
            id: s,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? $.DX : "div";
          return (0, O.jsx)(i, {
            ...a,
            ref: o,
            children: r
          })
        }),
        Jh = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: s,
            status: a
          } = Uh(), i = (0, H.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: s,
            status: a
          }, n), d = r ? $.DX : $l;
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        em = Ql,
        tm = Yl;
      var rm = Gh({
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
        nm = Gh({
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
        om = Gh({
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
        sm = Gh({
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
      const am = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, O.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        im = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, O.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        dm = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, O.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        lm = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? $.DX : "label";
          return (0, O.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        cm = (0, X.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, X.useRef)(null),
            s = (0, W.UP)(o, n),
            a = (0, X.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = Uh(),
            {
              isPressed: p,
              pressProps: h
            } = (0, Fl.d)({
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
                } = (0, Fl.d)({
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
                } = (0, Fl.d)({
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
                } = (0, Nf.Wc)((0, Rf.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                w = (0, Rf.v)(m, b),
                _ = (0, Sf.$)(e, {
                  labelable: !0
                }),
                x = -1;
              null != t.selectedValue ? t.selectedValue === n && (x = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (x = 0), p && (x = void 0);
              let {
                name: j,
                form: C,
                descriptionId: P,
                errorMessageId: O,
                validationBehavior: S
              } = _h.get(t);
              return If(r, t.defaultSelectedValue, t.setSelectedValue), rp({
                validationBehavior: S
              }, t, r), {
                labelProps: (0, Rf.v)(y, (0, X.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, Rf.v)(_, {
                  ...w,
                  type: "radio",
                  name: j,
                  form: C,
                  tabIndex: x,
                  disabled: p,
                  required: t.isRequired && "native" === S,
                  checked: h,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? O : null, P].filter(Boolean).join(" ") || void 0
                }),
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
            g = (0, H.mergeProps)(m, {
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
          return (0, O.jsxs)("div", {
            className: sm({
              size: l
            }),
            children: [(0, O.jsx)($.s6, {
              children: (0, O.jsx)("input", {
                type: "radio",
                ...g,
                ref: s,
                className: "foundry_1pfduet1"
              })
            }), (0, O.jsx)("div", {
              className: om({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": p,
              ...h,
              children: (0, O.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, O.jsx)(b, {})
              })
            })]
          })
        }),
        um = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            size: a,
            state: i
          } = Uh(), d = (0, X.useId)(), l = (0, H.mergeProps)({
            id: d,
            "data-testid": e,
            className: nm({
              size: a,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? $.DX : "div";
          return (0, O.jsx)($.s6, {
            enabled: n,
            children: (0, O.jsx)(c, {
              ...l,
              ref: s,
              children: r
            })
          })
        }),
        fm = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Uh(), a = (0, H.mergeProps)({
            "data-testid": e,
            className: rm({
              isDisabled: s
            })
          }, n), i = t ? $.DX : "span";
          return (0, O.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        });

      function pm(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function hm(e, t, r) {
        return t = ym(t),
          function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, gm() ? Reflect.construct(t, r || [], ym(e).constructor) : t.apply(e, r))
      }

      function mm(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return pm(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? pm(e, t) : void 0
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

      function xm(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          s = t.separate,
          a = n,
          i = "",
          d = mm(e);
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

      function jm(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          s = t.separate,
          a = t.showMask,
          i = 0,
          d = "",
          l = mm(n);
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

      function Cm(e, t) {
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

      function Pm(e) {
        return e.length > 0 ? vm({}, e, /./) : {}
      }

      function Om(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, s = t.mask, a = t.replacement, i = t.separate, d = e.slice(n, o), l = s.slice(n, o), c = "", u = 0; u < l.length; u++) {
          var f = Object.prototype.hasOwnProperty.call(a, l[u]);
          f && void 0 !== d[u] && d[u] !== l[u] ? c += d[u] : f && i && (c += l[u])
        }
        return c
      }

      function Sm(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? Pm(n) : n,
          s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return jm(xm(e, {
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
      var km = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Rm(e) {
        return km.includes(e) ? "\\".concat(e) : e
      }

      function Nm(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Dm(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Im(e, t, r) {
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

      function Em(e) {
        return Em = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Em(e)
      }

      function Tm() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (Tm = function() {
          return !!e
        })()
      }

      function zm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Lm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zm(Object(r), !0).forEach(function(t) {
            Im(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Mm(e, t) {
        return Mm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Mm(e, t)
      }

      function Am(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Am = function(e) {
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
              if (Tm()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && Mm(o, r.prototype), o
            }(e, arguments, Em(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Mm(r, e)
        }, Am(e)
      }
      var Vm, qm = function(e) {
          function t(e) {
            var r;
            return Nm(this, t), (r = function(e, t, r) {
              return t = Em(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, Tm() ? Reflect.construct(t, r || [], Em(e).constructor) : t.apply(e, r))
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
            }), t && Mm(e, t)
          }(t, e), Dm(t)
        }(Am(Error)),
        Fm = ["options"],
        Bm = ["text", "email", "tel", "search", "url"],
        Xm = Dm(function e(t) {
          var r = t.init,
            n = t.tracking;
          Nm(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Bm.includes(e.type)) {
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
              Object.defineProperty(e, "value", Lm(Lm({}, v), {}, {
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
                    if (h.cachedId === h.id) throw new qm("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var s = e.value,
                      a = e.selectionStart,
                      i = e.selectionEnd;
                    if (null === a || null === i) throw new qm("The selection attributes have not been initialized.");
                    var d, l = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = l.length), a > m.selectionStart ? d = "insert" : a <= m.selectionStart && a < m.selectionEnd ? d = "deleteBackward" : a === m.selectionEnd && s.length < l.length && (d = "deleteForward"), void 0 === d || ("deleteBackward" === d || "deleteForward" === d) && s.length > l.length) throw new qm("Input type detection error.");
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
                      }(g, Fm);
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
      Vm = Xm, Object.defineProperty(Vm.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Gm, Km = ["track", "modify"];

      function Hm(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? Pm(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Zm = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = hm(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = Hm(r),
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
                d = Hm(r),
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
                }(d, Km),
                f = u.mask,
                p = u.replacement,
                h = u.showMask,
                m = u.separate,
                v = wm(wm({}, "insert" === t ? {
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
              if (!1 === y) throw new qm("Custom tracking stop.");
              null === y ? s = "" : !0 !== y && void 0 !== y && (s = y);
              var g = null == c ? void 0 : c(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? Pm(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = Om(n, wm({
                  end: a
                }, o)),
                w = Om(n, wm({
                  start: i
                }, o)),
                _ = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                x = f.replace(_, "");
              if (b && (b = xm(b, {
                  replacementChars: x,
                  replacement: p,
                  separate: m
                }), x = x.slice(b.length)), s && (s = xm(s, {
                  replacementChars: x,
                  replacement: p,
                  separate: !1
                }), x = x.slice(s.length)), "insert" === t && "" === s) throw new qm("The character does not match the key value of the `replacement` object.");
              if (m) {
                var j = f.slice(a, i).replace(_, ""),
                  C = j.length - s.length;
                C < 0 ? w = w.slice(-C) : C > 0 && (w = j.slice(-C) + w)
              }
              w && (w = xm(w, {
                replacementChars: x,
                replacement: p,
                separate: m
              }));
              var P = jm(b + s + w, {
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
                    c = Cm(s, {
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
            return Sm(e, Hm(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Pm(n) : n;
              return Cm(Sm(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, Hm(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Pm(n) : n,
                s = Om(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return xm(s, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, Hm(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? Pm(n) : n, s = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, i = "", d = 0; d < r.length; d++) {
                var l = r[d];
                0 === d && (i = "^"), s && (i += "("), i += Object.prototype.hasOwnProperty.call(o, l) ? "".concat(a ? "(?!".concat(Rm(l), ")") : "", "(").concat(o[l].source, ")") : Rm(l), d === r.length - 1 && (s && (i += ")?".repeat(r.length)), i += "$")
              }
              return i
            }(e, Hm(r))
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
            }), t && _m(e, t)
          }(e, Xm),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function Um(e) {
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

      function Wm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Wm(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Um(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Qm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Gm = Zm, Object.defineProperty(Gm.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Ym = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $m($m({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ym(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qm(e.variantClassNames, e => Qm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ev = Jm({
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
        tv = Jm({
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
        rv = Jm({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nv = Jm({
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
        ov = Jm({
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
        sv = Jm({
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
      const av = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        iv = (0, X.createContext)(null);

      function dv() {
        const e = (0, X.useContext)(iv);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const lv = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, X.useState)("text"), u = `${(0,X.useId)()}-label`, f = `${(0,X.useId)()}-input`, p = `${(0,X.useId)()}-description`, h = (0, X.useRef)(null), m = (0, X.useRef)(av), v = (0, H.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), y = e ? $.DX : "div";
          return (0, O.jsx)(iv.Provider, {
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
            children: (0, O.jsx)(y, {
              ref: d,
              ...v,
              children: t
            })
          })
        }),
        cv = (0, X.forwardRef)(({
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
          } = dv(), u = d && !o, f = (0, H.mergeProps)({
            id: s.id || c,
            htmlFor: s.htmlFor || l,
            "data-testid": e,
            className: sv({
              showAsterisk: u,
              isDisabled: i
            })
          }, s), p = t ? $.DX : "label";
          return (0, O.jsx)($.s6, {
            enabled: n,
            children: (0, O.jsx)(p, {
              ref: a,
              ...f,
              children: r
            })
          })
        }),
        uv = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = dv(), a = (0, H.mergeProps)({
            "data-testid": e,
            className: rv({
              isDisabled: s
            })
          }, n), i = t ? $.DX : "span";
          return (0, O.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        }),
        fv = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            isReadOnly: a,
            status: i
          } = dv(), d = (0, H.mergeProps)({
            "data-testid": e,
            className: (0, fe.clsx)(ev({
              isDisabled: s,
              isReadOnly: a,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? $.DX : "div";
          return (0, O.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        pv = (0, X.forwardRef)(({
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
            focusState: x
          } = dv();
          (0, X.useEffect)(() => b(l), []);
          const j = "invalid" === m,
            C = (0, H.mergeProps)({
              disabled: f,
              readOnly: p,
              required: h,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, H.joinStrings)(v, i),
              "aria-describedby": (0, H.joinStrings)(g, d),
              "data-testid": e,
              className: (0, fe.clsx)(ov({
                isDisabled: f,
                isReadOnly: p
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
              ...j && {
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
                }(i, new Zm(d.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: s
            }),
            S = (0, W.UP)(r && n ? P : null, _, u),
            k = t ? $.DX : "input";
          return (0, O.jsx)(k, {
            ref: S,
            ...C
          })
        }),
        hv = (0, X.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, s) => {
          const {
            isDisabled: a
          } = dv(), i = (0, H.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, fe.clsx)(nv({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), d = t ? $.DX : pe[e];
          return (0, O.jsx)(d, {
            ref: s,
            ...i
          })
        }),
        mv = (0, X.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = dv(), n = (0, H.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, fe.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, O.jsx)(Te, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        vv = (0, X.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: s,
            inputRef: a,
            focusState: i
          } = dv(), d = "password" === o, l = d ? e : t;
          (0, X.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, H.mergeProps)({
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
          return (0, O.jsxs)(Dd, {
            children: [(0, O.jsx)(Id, {
              children: (0, O.jsx)(mv, {
                ref: n,
                ...c
              })
            }), (0, O.jsxs)(Ed, {
              side: "bottom",
              align: "end",
              children: [l, (0, O.jsx)(Td, {})]
            })]
          })
        }),
        yv = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = dv(), i = (0, H.mergeProps)({
            className: tv({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? $.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        gv = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = dv(), i = (0, H.mergeProps)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? $.DX : $l;
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        bv = Ql,
        wv = Yl;
      var _v = r(2577);

      function xv(e, t) {
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
        } = (0, Nf.Wc)(e, t), {
          pressProps: u,
          isPressed: f
        } = (0, Fl.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: s,
          onClick: a,
          isDisabled: i,
          ref: t
        }), p = (0, Sf.$)(d, {
          labelable: !0
        }), h = (0, Rf.v)(c, u), m = (0, _v.rd)(), v = (0, _v._h)(e);
        return {
          isPressed: f,
          linkProps: (0, Rf.v)(p, v, {
            ...h,
            ...l,
            "aria-disabled": i || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              u.onClick?.(t), (0, _v.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function jv(e) {
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

      function Pv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cv(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = jv(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cv(Object(r)).forEach(function(t) {
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
      var Sv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Pv(Pv({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Sv(l, n, e.defaultVariants) && (r += " " + c);
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
      const Rv = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        Nv = (0, X.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const s = (0, X.useRef)(null),
            a = (0, W.UP)(s, o),
            {
              buttonProps: i
            } = (0, W.sL)(n, s),
            d = (0, H.mergeProps)({
              "data-testid": r,
              className: kv({
                size: t
              })
            }, i);
          return (0, O.jsx)("button", {
            ref: a,
            ...d,
            children: (0, O.jsx)(pe.X, {
              label: e,
              size: Rv[t]
            })
          })
        });

      function Dv(e) {
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

      function Iv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ev(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Iv(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Dv(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Tv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var zv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Lv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ev(Ev({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tv(e.variantClassNames, e => Tv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Mv = Lv({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Av = Lv({
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
        Vv = Lv({
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
      const qv = (0, X.createContext)(null);

      function Fv() {
        const e = (0, X.useContext)(qv);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Bv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, s) => {
          const a = e ? $.DX : "div",
            i = (0, H.mergeProps)({
              className: Vv({
                status: r,
                background: n
              })
            }, o);
          return (0, O.jsx)(qv.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, O.jsx)(a, {
              ref: s,
              "data-testid": t,
              ...i
            })
          })
        }),
        Xv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "div",
            s = (0, H.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Gv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "div",
            s = (0, H.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Kv = {
          danger: pe.CircleX,
          information: pe.Info,
          success: pe.CircleCheck,
          warning: pe.TriangleAlert
        },
        Hv = (0, X.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Fv(), s = e ? $.DX : Kv[o], a = (0, H.mergeProps)({
            className: Av({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, O.jsx)(s, {
            label: "",
            ref: n,
            ...a
          })
        }),
        Zv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "div",
            s = (0, H.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Uv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "div",
            s = (0, H.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Wv = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, X.useRef)(null),
            a = (0, W.UP)(s, o),
            i = e ? $.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = xv(n, s),
            c = (0, H.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, O.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...c,
            children: t
          })
        }),
        $v = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? $.DX : "div",
            a = (0, H.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, O.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        Qv = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const s = e ? $.DX : "div";
          return (0, O.jsx)(s, {
            ref: o,
            "data-testid": t,
            className: (0, fe.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        Yv = (0, X.forwardRef)((e, t) => {
          const {
            background: r
          } = Fv(), n = "none" !== r, o = (0, H.mergeProps)({
            className: Mv({
              hasBackground: n
            })
          }, e);
          return (0, O.jsx)(Nv, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function Jv(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function ey(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : Jv(n) && Jv(o) ? ey(n, o) : n === o
        }))
      }

      function ty(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function ry(e) {
        return "number" == typeof e
      }

      function ny(e) {
        return "string" == typeof e
      }

      function oy(e) {
        return "boolean" == typeof e
      }

      function sy(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function ay(e) {
        return Math.abs(e)
      }

      function iy(e) {
        return Math.sign(e)
      }

      function dy(e, t) {
        return ay(e - t)
      }

      function ly(e) {
        return hy(e).map(Number)
      }

      function cy(e) {
        return e[uy(e)]
      }

      function uy(e) {
        return Math.max(0, e.length - 1)
      }

      function fy(e, t) {
        return t === uy(e)
      }

      function py(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function hy(e) {
        return Object.keys(e)
      }

      function my(e, t) {
        return [e, t].reduce((e, t) => (hy(t).forEach(r => {
          const n = e[r],
            o = t[r],
            s = sy(n) && sy(o);
          e[r] = s ? my(n, o) : o
        }), e), {})
      }

      function vy(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function yy() {
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

      function gy(e = 0, t = 0) {
        const r = ay(e - t);

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

      function by(e, t, r) {
        const {
          constrain: n
        } = gy(0, e), o = e + 1;
        let s = a(t);

        function a(e) {
          return r ? ay((o + e) % o) : n(e)
        }

        function i() {
          return s
        }

        function d() {
          return by(e, i(), r)
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

      function wy(e, t, r, n, o, s, a, i, d, l, c, u, f, p, h, m, v, y, g) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, j = yy(), C = yy(), P = gy(50, 225).constrain(p.measure(20)), O = {
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
          E = !1,
          T = !1,
          z = !1;

        function L(e) {
          if (!vy(e, n) && e.touches.length >= 2) return M(e);
          const t = s.readPoint(e),
            r = s.readPoint(e, b),
            a = dy(t, N),
            d = dy(r, D);
          if (!E && !z) {
            if (!e.cancelable) return M(e);
            if (E = a > d, !E) return M(e)
          }
          const c = s.pointerMove(e);
          a > m && (T = !0), l.useFriction(.3).useDuration(.75), i.start(), o.add(w(c)), e.preventDefault()
        }

        function M(e) {
          const t = c.byDistance(0, !1).index !== u.get(),
            r = s.pointerUp(e) * (h ? S : O)[z ? "mouse" : "touch"],
            n = function(e, t) {
              const r = u.add(-1 * iy(e)),
                n = c.byDistance(e, !h).distance;
              return h || ay(e) < P ? n : v && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(w(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (ay(e) <= ay(t)) return 0;
              const r = dy(ay(e), ay(t));
              return ay(r / e)
            }(r, n),
            a = k - 10 * o,
            i = y + o / 50;
          E = !1, I = !1, C.clear(), l.useDuration(a).useFriction(i), d.distance(n, !h), z = !1, f.emit("pointerUp")
        }

        function A(e) {
          T && (e.stopPropagation(), e.preventDefault(), T = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function i(i) {
              (oy(g) || g(e, i)) && function(e) {
                const i = vy(e, n);
                z = i, T = h && i && !e.buttons && R, R = dy(o.get(), a.get()) >= 2, i && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (I = !0, s.pointerDown(e), l.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = z ? r : t;
                  C.add(e, "touchmove", L, x).add(e, "touchend", M).add(e, "mousemove", L, x).add(e, "mouseup", M)
                }(), N = s.readPoint(e), D = s.readPoint(e, b), f.emit("pointerDown"))
              }(i)
            }
            const d = t;
            j.add(d, "dragstart", e => e.preventDefault(), x).add(d, "touchmove", () => {}, x).add(d, "touchend", () => {}).add(d, "touchstart", i).add(d, "mousedown", i).add(d, "touchcancel", M).add(d, "contextmenu", M).add(d, "click", A, !0)
          },
          destroy: function() {
            j.clear(), C.clear()
          },
          pointerDown: function() {
            return I
          }
        }
      }

      function _y(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function s(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (vy(r, t) ? r : r.touches[0])[o]
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
            return a && !i && ay(d) > .1 ? d : 0
          },
          readPoint: s
        }
      }

      function xy(e, t, r, n, o, s, a) {
        const i = [e].concat(n);
        let d, l, c = [],
          u = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            s && (l = f(e), c = n.map(f), d = new ResizeObserver(r => {
              (oy(s) || s(o, r)) && function(r) {
                for (const s of r) {
                  if (u) return;
                  const r = s.target === e,
                    a = n.indexOf(s.target),
                    i = r ? l : c[a];
                  if (ay(f(r ? e : n[a]) - i) >= .5) {
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

      function jy(e, t, r, n, o) {
        const s = o.measure(10),
          a = o.measure(50),
          i = gy(.1, .99);
        let d = !1;

        function l() {
          return !d && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: l,
          constrain: function(o) {
            if (!l()) return;
            const d = e.reachedMin(t.get()) ? "min" : "max",
              c = ay(e[d] - t.get()),
              u = r.get() - t.get(),
              f = i.constrain(c / a);
            r.subtract(u * f), !o && ay(u) < s && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            d = !e
          }
        }
      }

      function Cy(e, t, r, n) {
        const o = t.min + .1,
          s = t.max + .1,
          {
            reachedMin: a,
            reachedMax: i
          } = gy(o, s),
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

      function Py(e) {
        let t = e;

        function r(e) {
          return ry(e) ? e : e.get()
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

      function Oy(e, t) {
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

      function Sy(e, t, r, n, o, s, a, i, d) {
        const l = ly(o),
          c = ly(o).reverse(),
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
              slideLocation: Py(-1),
              translate: Oy(e, d[t]),
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

      function ky(e, t, r) {
        let n, o = !1;
        return {
          init: function(s) {
            r && (n = new MutationObserver(e => {
              o || (oy(r) || r(s, e)) && function(e) {
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

      function Ry(e, t, r, n, o, s, a) {
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
          watchFocus: x
        } = s, j = {
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
        }, C = j.measure(t), P = r.map(j.measure), O = function(e, t) {
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
        }(d, l), S = O.measureSize(C), k = function(e) {
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
              return ny(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(i, S), N = !u && !!g, D = u || !!g, {
          slideSizes: I,
          slideSizesWithGaps: E,
          startGap: T,
          endGap: z
        } = function(e, t, r, n, o, s) {
          const {
            measureSize: a,
            startEdge: i,
            endEdge: d
          } = e, l = r[0] && o, c = function() {
            if (!l) return 0;
            const e = r[0];
            return ay(t[i] - e[i])
          }(), u = function() {
            if (!l) return 0;
            const e = s.getComputedStyle(cy(n));
            return parseFloat(e.getPropertyValue(`margin-${d}`))
          }(), f = r.map(a), p = r.map((e, t, r) => {
            const n = !t,
              o = fy(r, t);
            return n ? f[t] + c : o ? f[t] + u : r[t + 1][i] - e[i]
          }).map(ay);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: c,
            endGap: u
          }
        }(O, C, P, r, D, o), L = function(e, t, r, n, o, s, a, i, d) {
          const {
            startEdge: l,
            endEdge: c,
            direction: u
          } = e, f = ry(r), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return ly(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? ly(e).reduce((r, f, p) => {
                  const h = cy(r) || 0,
                    m = 0 === h,
                    v = f === uy(e),
                    y = o[l] - s[h][l],
                    g = o[l] - s[f][c],
                    b = !n && m ? u(a) : 0,
                    w = ay(g - (!n && v ? u(i) : 0) - (y + b));
                  return p && w > t + d && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(O, S, v, u, C, P, T, z, 2), {
          snaps: M,
          snapsAligned: A
        } = function(e, t, r, n, o) {
          const {
            startEdge: s,
            endEdge: a
          } = e, {
            groupSlides: i
          } = o, d = i(n).map(e => cy(e)[a] - e[0][s]).map(ay).map(t.measure), l = n.map(e => r[s] - e[s]).map(e => -ay(e)), c = i(l).map(e => e[0]).map((e, t) => e + d[t]);
          return {
            snaps: l,
            snapsAligned: c
          }
        }(O, R, C, P, L), V = -cy(M) + cy(E), {
          snapsContained: q,
          scrollContainLimit: F
        } = function(e, t, r, n) {
          const o = gy(-t + e, 0),
            s = r.map((e, t) => {
              const {
                min: n,
                max: s
              } = o, a = o.constrain(e), d = !t, l = fy(r, t);
              return d ? s : l || i(n, a) ? n : i(s, a) ? s : a
            }).map(e => parseFloat(e.toFixed(3))),
            a = function() {
              const e = s[0],
                t = cy(s);
              return gy(s.lastIndexOf(e), s.indexOf(t) + 1)
            }();

          function i(e, t) {
            return dy(e, t) <= 1
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
        }(S, V, A, g), B = N ? q : A, {
          limit: X
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: gy(r ? n - e : cy(t), n)
          }
        }(V, B, u), G = by(uy(B), c, u), K = G.clone(), H = ly(r), Z = function(e, t, r, n) {
          const o = yy(),
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
        })(ie, e)), U = B[G.get()], W = Py(U), $ = Py(U), Q = Py(U), Y = Py(U), J = function(e, t, r, n, o) {
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
              return i ? (r.set(e), s += t / i, s *= d, l += s, e.add(s), o = l - c) : (s = 0, r.set(n), e.set(n), o = t), a = iy(o), c = l, p
            },
            settled: function() {
              return ay(n.get() - t.get()) < .001
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
            return e.concat().sort((e, t) => ay(e) - ay(t))[0]
          }

          function l(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return d(o);
            const s = o.filter(e => iy(e) === n);
            return s.length ? d(s) : cy(o) - r
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
                    })).sort((e, t) => ay(e.diff) - ay(t.diff)),
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
        }(u, B, V, X, Y), te = function(e, t, r, n, o, s, a) {
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
        }(Z, G, K, J, ee, Y, a), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(X), ne = yy(), oe = function(e, t, r, n) {
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
                return hy(o).reduce((t, r) => {
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
                o = fy(r, t);
              return n ? py(cy(r[0]) + 1) : o ? py(uy(s) - cy(r)[0] + 1, cy(r)[0]) : e
            })
          }();
          return {
            slideRegistry: l
          }
        }(N, g, B, F, L, H), ae = function(e, t, r, n, o, s, a, i) {
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
                  (oy(i) || i(u, t)) && function(t) {
                    if ((new Date).getTime() - l > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const s = r.findIndex(e => e.includes(t));
                    ry(s) && (o.useDuration(0), n.index(s, 0), a.emit("slideFocus"))
                  }(c)
                }, d)
              }))
            }
          }
        }(e, r, se, te, J, ne, a, x), ie = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: a,
          containerRect: C,
          slideRects: P,
          animation: Z,
          axis: O,
          dragHandler: wy(O, e, n, o, Y, _y(O, o), W, Z, te, J, ee, G, a, k, p, h, y, .68, _),
          eventStore: ne,
          percentOfView: k,
          index: G,
          indexPrevious: K,
          limit: X,
          location: W,
          offsetLocation: Q,
          previousLocation: $,
          options: s,
          resizeHandler: xy(t, a, o, r, O, b, j),
          scrollBody: J,
          scrollBounds: jy(X, Q, Y, J, k),
          scrollLooper: Cy(V, X, Q, [W, Q, $, Y]),
          scrollProgress: re,
          scrollSnapList: B.map(re.get),
          scrollSnaps: B,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: Sy(O, S, V, I, E, M, B, Q, r),
          slideFocus: ae,
          slidesHandler: ky(t, a, w),
          slidesInView: oe,
          slideIndexes: H,
          slideRegistry: se,
          slidesToScroll: L,
          target: Y,
          translate: Oy(O, t)
        };
        return ie
      }
      const Ny = {
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

      function Dy(e) {
        function t(e, t) {
          return my(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = hy(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => hy(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function Iy(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          s = Dy(o),
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
          i = yy(),
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
          _ = l(Ny, Iy.globalOptions),
          x = l(_),
          j = [];

        function C(t) {
          const r = Ry(e, g, b, n, o, t, d);
          return t.loop && !r.slideLooper.canLoop() ? C(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function P(t, r) {
          w || (_ = l(_, t), x = c(_), j = r || j, function() {
            const {
              container: t,
              slides: r
            } = x, n = ny(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = ny(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = C(x), u([_, ...j.map(({
            options: e
          }) => e)]).forEach(e => i.add(e, "change", O)), x.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(N), v.eventHandler.init(N), v.resizeHandler.init(N), v.slidesHandler.init(N), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(N), y = a.init(N, j)))
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
          x.active && !w && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), v.scrollTo.index(e, r || 0))
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

      function Ey(e = {}, t = []) {
        const r = (0, X.useRef)(e),
          n = (0, X.useRef)(t),
          [o, s] = (0, X.useState)(),
          [a, i] = (0, X.useState)(),
          d = (0, X.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, X.useEffect)(() => {
          ey(r.current, e) || (r.current = e, d())
        }, [e, d]), (0, X.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = ty(e),
              n = ty(t);
            return r.every((e, t) => ey(e, n[t]))
          })(n.current, t) || (n.current = t, d())
        }, [t, d]), (0, X.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            Iy.globalOptions = Ey.globalOptions;
            const e = Iy(a, r.current, n.current);
            return s(e), () => e.destroy()
          }
          s(void 0)
        }, [a, s]), [i, o]
      }

      function Ty(e = {}) {
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
      Iy.globalOptions = void 0, Ey.globalOptions = void 0, Ty.globalOptions = void 0;
      const zy = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function Ly(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function My(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Ay(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Vy(e = {}) {
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
          ("pointerDown" === t ? Ay : My)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            s = e.map(e => o[e]);
          return n.forEach(e => My(e, r)), s.forEach(e => Ay(e, r)), e
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
            } = a, v = f(zy, Vy.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, w = !!g;
            t.loop && b && (c.loop = Ly(t.loop), Ay(n, c.loop)), t.draggable && w && (c.draggable = Ly(t.draggable), Ay(n, c.draggable)), t.dragging && (c.dragging = Ly(t.dragging), d.forEach(e => r.on(e, u))), t.snapped && (c.snapped = Ly(t.snapped), i.forEach(e => r.on(e, p)), p()), t.inView && (c.inView = Ly(t.inView), l.forEach(e => r.on(e, h)), h())
          },
          destroy: function() {
            d.forEach(e => r.off(e, u)), i.forEach(e => r.off(e, p)), l.forEach(e => r.off(e, h)), My(n, c.loop), My(n, c.draggable), My(n, c.dragging), f([], s, c.snapped), f([], a, c.inView), Object.keys(c).forEach(e => {
              c[e] = []
            })
          }
        };
        return m
      }
      Vy.globalOptions = void 0;

      function qy(e) {
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

      function Fy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function By(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fy(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = qy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Xy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Gy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ky = "foundry_qmpv6yv",
        Hy = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = By(By({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Gy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xy(e.variantClassNames, e => Xy(e, e => e.split(" ")[0]))
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
      const Zy = (0, X.createContext)(null);

      function Uy() {
        const e = (0, X.useContext)(Zy);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Wy = (0, X.forwardRef)(({
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
              const t = (0, W.rl)(),
                r = (0, W.jt)(),
                [n, o] = (0, X.useState)([]),
                s = n.length,
                [a, i] = (0, X.useState)(0),
                [d, l] = Ey({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && s > 1
                }, [Ty(), Vy()]),
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
            m = (0, H.mergeProps)({
              className: Hy(c)
            }, h, i),
            v = e ? $.DX : "div";
          return (0, O.jsx)(Zy.Provider, {
            value: l,
            children: (0, O.jsx)(v, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...m,
              children: t
            })
          })
        }),
        $y = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Qy = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Uy();
          if (!e && !n || !n?.status) return null;
          const o = e || $y[n.status],
            s = pe[o],
            a = (0, H.mergeProps)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, O.jsx)(s, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...a
          })
        }),
        Yy = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "div",
            s = (0, H.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Jy = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...s
        }, a) => {
          const i = e ? $.DX : "div",
            d = (0, H.mergeProps)({
              className: "foundry_qmpv6yo"
            }, s);
          return (0, O.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...d
          })
        }),
        eg = (0, X.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: s,
            emblaApi: a
          } = Uy(), i = (0, H.mergeProps)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, W.UP)(s, n), l = X.Children.map(t, e => {
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
          }), (0, O.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, O.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        tg = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, X.useRef)(null),
            a = (0, W.UP)(s, o),
            i = e ? $.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = xv(n, s),
            c = (0, H.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, O.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...d,
            ...c,
            children: t
          })
        }),
        rg = (0, X.forwardRef)((e, t) => {
          const r = (0, H.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, O.jsx)(Nv, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        ng = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const s = e ? $.DX : "div",
            a = (0, H.mergeProps)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, O.jsx)(s, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...a,
            children: r
          })
        }),
        og = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Uy(), s = (0, H.mergeProps)({
            className: Ky
          }, t);
          return (0, O.jsx)(Te, {
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
        sg = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Uy(), s = (0, H.mergeProps)({
            className: Ky
          }, t);
          return (0, O.jsx)(Te, {
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
        ag = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Uy(), s = (0, H.mergeProps)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, O.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...s,
            children: [n + 1, "/", o]
          })
        });

      function ig(e) {
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

      function dg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dg(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ig(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
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
        fg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lg(lg({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ug(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cg(e.variantClassNames, e => cg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        pg = fg({
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
        hg = fg({
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
        mg = fg({
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
      const vg = (0, X.createContext)(null);

      function yg() {
        const e = (0, X.useContext)(vg);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const gg = (0, X.forwardRef)(({
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
            u = (0, H.mergeProps)({
              className: hg(c)
            }, d),
            f = e ? $.DX : "div";
          return (0, O.jsx)(vg.Provider, {
            value: c,
            children: (0, O.jsx)(f, {
              ref: l,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        bg = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = yg(), a = e ? $.DX : "div", i = (0, H.mergeProps)({
            className: mg({
              size: s
            })
          }, n);
          return (0, O.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        wg = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = pe[e],
            o = (0, H.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, O.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        _g = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = yg(), s = (0, H.mergeProps)({
            className: pg({
              background: n
            })
          }, t);
          return (0, O.jsx)(Te, {
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
      var xg = "ToastProvider",
        [jg, Cg, Pg] = (0, Vd.N)("Toast"),
        [Og, Sg] = (0, li.A)("Toast", [Pg]),
        [kg, Rg] = Og(xg),
        Ng = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            children: a
          } = e, [i, d] = X.useState(null), [l, c] = X.useState(0), u = X.useRef(!1), f = X.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${xg}\`. Expected non-empty \`string\`.`), (0, O.jsx)(jg.Provider, {
            scope: t,
            children: (0, O.jsx)(kg, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: s,
              toastCount: l,
              viewport: i,
              onViewportChange: d,
              onToastAdd: X.useCallback(() => c(e => e + 1), []),
              onToastRemove: X.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: u,
              isClosePausedRef: f,
              children: a
            })
          })
        };
      Ng.displayName = xg;
      var Dg = "ToastViewport",
        Ig = ["F8"],
        Eg = "toast.viewportPause",
        Tg = "toast.viewportResume",
        zg = X.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = Ig,
            label: o = "Notifications ({hotkey})",
            ...s
          } = e, a = Rg(Dg, r), i = Cg(r), d = X.useRef(null), l = X.useRef(null), c = X.useRef(null), u = X.useRef(null), f = (0, di.s)(t, u, a.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = a.toastCount > 0;
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
                    const e = new CustomEvent(Eg);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (a.isClosePausedRef.current) {
                    const e = new CustomEvent(Tg);
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
                n = [r, ...Jg(r)];
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
                  eb(o.slice(s + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, m]), (0, O.jsxs)(ci.lg, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, O.jsx)(Mg, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                eb(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, O.jsx)(jg.Slot, {
              scope: r,
              children: (0, O.jsx)(hi.sG.ol, {
                tabIndex: -1,
                ...s,
                ref: f
              })
            }), h && (0, O.jsx)(Mg, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                eb(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      zg.displayName = Dg;
      var Lg = "ToastFocusProxy",
        Mg = X.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, s = Rg(Lg, r);
          return (0, O.jsx)(Zi, {
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
      Mg.displayName = Lg;
      var Ag = "Toast",
        Vg = X.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            ...a
          } = e, [i, d] = (0, Ki.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: s,
            caller: Ag
          });
          return (0, O.jsx)(Xi.C, {
            present: r || i,
            children: (0, O.jsx)(Bg, {
              open: i,
              ...a,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, yi.c)(e.onPause),
              onResume: (0, yi.c)(e.onResume),
              onSwipeStart: (0, ii.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, ii.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, ii.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, ii.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        });
      Vg.displayName = Ag;
      var [qg, Fg] = Og(Ag, {
        onClose() {}
      }), Bg = X.forwardRef((e, t) => {
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
        } = e, m = Rg(Ag, r), [v, y] = X.useState(null), g = (0, di.s)(t, e => y(e)), b = X.useRef(null), w = X.useRef(null), _ = o || m.duration, x = X.useRef(0), j = X.useRef(_), C = X.useRef(0), {
          onToastAdd: P,
          onToastRemove: S
        } = m, k = (0, yi.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), a()
        }), R = X.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), x.current = (new Date).getTime(), C.current = window.setTimeout(k, e))
        }, [k]);
        X.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                R(j.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - x.current;
                j.current = j.current - e, window.clearTimeout(C.current), d?.()
              };
            return e.addEventListener(Eg, r), e.addEventListener(Tg, t), () => {
              e.removeEventListener(Eg, r), e.removeEventListener(Tg, t)
            }
          }
        }, [m.viewport, _, d, l, R]), X.useEffect(() => {
          s && !m.isClosePausedRef.current && R(_)
        }, [s, _, m.isClosePausedRef, R]), X.useEffect(() => (P(), () => S()), [P, S]);
        const N = X.useMemo(() => v ? $g(v) : null, [v]);
        return m.viewport ? (0, O.jsxs)(O.Fragment, {
          children: [N && (0, O.jsx)(Xg, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: N
          }), (0, O.jsx)(qg, {
            scope: r,
            onClose: k,
            children: Ha.createPortal((0, O.jsx)(jg.ItemSlot, {
              scope: r,
              children: (0, O.jsx)(ci.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, ii.mK)(i, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || k(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, O.jsx)(hi.sG.li, {
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
                  onKeyDown: (0, ii.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, k()))
                  }),
                  onPointerDown: (0, ii.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, ii.mK)(e.onPointerMove, e => {
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
                    n ? (w.current = l, Qg("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : Yg(l, m.swipeDirection, d) ? (w.current = l, Qg("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (b.current = null)
                  }),
                  onPointerUp: (0, ii.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Yg(t, m.swipeDirection, m.swipeThreshold) ? Qg("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : Qg("toast.swipeCancel", f, n, {
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
      }), Xg = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = Rg(Ag, t), [s, a] = X.useState(!1), [i, d] = X.useState(!1);
        return function(e = () => {}) {
          const t = (0, yi.c)(e);
          (0, gi.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => a(!0)), X.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, O.jsx)(Bi.Z, {
          asChild: !0,
          children: (0, O.jsx)(Zi, {
            ...n,
            children: s && (0, O.jsxs)(O.Fragment, {
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
        return (0, O.jsx)(hi.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Gg = X.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, O.jsx)(hi.sG.div, {
          ...n,
          ref: t
        })
      });
      Gg.displayName = "ToastDescription";
      var Kg = "ToastAction",
        Hg = X.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, O.jsx)(Wg, {
            altText: r,
            asChild: !0,
            children: (0, O.jsx)(Ug, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Kg}\`. Expected non-empty \`string\`.`), null)
        });
      Hg.displayName = Kg;
      var Zg = "ToastClose",
        Ug = X.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Fg(Zg, r);
          return (0, O.jsx)(Wg, {
            asChild: !0,
            children: (0, O.jsx)(hi.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, ii.mK)(e.onClick, o.onClose)
            })
          })
        });
      Ug.displayName = Zg;
      var Wg = X.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, O.jsx)(hi.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function $g(e) {
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
              } else t.push(...$g(e))
          }
        }), t
      }

      function Qg(e, t, r, {
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
        }), n ? (0, hi.hO)(o, s) : o.dispatchEvent(s)
      }
      var Yg = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          s = n > o;
        return "left" === t || "right" === t ? s && n > r : !s && o > r
      };

      function Jg(e) {
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

      function eb(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var tb = Ng,
        rb = zg,
        nb = Vg,
        ob = Gg,
        sb = Hg,
        ab = Ug;

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

      function db(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? db(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ib(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : db(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ub = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lb(lb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ub(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cb(e.variantClassNames, e => cb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        pb = fb({
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
        hb = fb({
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
        mb = fb({
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
      const vb = ({
          testId: e,
          ...t
        }) => (0, O.jsx)(tb, {
          "data-testid": e,
          ...t
        }),
        yb = (0, X.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const s = (0, H.mergeProps)({
            className: mb({
              position: r
            })
          }, n);
          return (0, O.jsx)(rb, {
            ref: o,
            "data-testid": t,
            ...s,
            children: e
          })
        }),
        gb = (0, X.createContext)(null);

      function bb() {
        const e = (0, X.useContext)(gb);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const wb = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, s) => {
          const a = e ? $.DX : nb,
            i = (0, H.mergeProps)({
              className: hb({
                appearance: n
              })
            }, o);
          return (0, O.jsx)(gb.Provider, {
            value: {
              appearance: n
            },
            children: (0, O.jsx)(a, {
              ref: s,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        _b = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? $.DX : ob,
            a = (0, H.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, O.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        xb = {
          danger: pe.CircleX,
          information: pe.Info,
          success: pe.CircleCheck,
          warning: pe.TriangleAlert,
          avocado: pe.CircleCheck
        },
        jb = (0, X.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = bb(), o = e ? $.DX : xb[n], s = (0, H.mergeProps)({
            className: pb({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, O.jsx)(o, {
            ref: r,
            ...s
          })
        }),
        Cb = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, O.jsx)(sb, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, O.jsx)($.DX, {
              children: t
            }) : (0, O.jsx)(Ce, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Pb = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, s) => {
          const a = (0, H.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, O.jsx)(ab, {
            ref: s,
            "data-testid": r,
            ...a,
            children: e ? (0, O.jsx)($.DX, {
              children: t
            }) : (0, O.jsx)(Nv, {
              size: "SM",
              label: n
            })
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
        Db = e => {
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
        },
        Ib = Db({
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
        Eb = Db({
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
        Tb = Db({
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

      function zb() {
        const e = (0, X.useContext)(Lb);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Lb = (0, X.createContext)(null),
        Mb = (0, X.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, s) => {
          const a = (0, H.mergeProps)({
              className: Tb({
                size: n
              })
            }, o),
            i = r ? $.DX : "ol";
          return (0, O.jsx)(Lb.Provider, {
            value: {
              size: n
            },
            children: (0, O.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        }),
        Ab = (0, X.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, X.useRef)(null),
            {
              size: i
            } = zb(),
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
              } = xv({
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
            l = r ? $.DX : "a",
            c = (0, H.mergeProps)({
              className: (0, fe.clsx)(Ib({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, O.jsx)("li", {
            className: Eb({
              size: i
            }),
            ref: s,
            children: (0, O.jsx)(l, {
              ref: a,
              ...c,
              children: t
            })
          })
        }),
        Vb = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = pe[e];
          return (0, O.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        qb = (0, X.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, s) => {
          const [a, i] = (0, X.useState)(r), {
            size: d
          } = zb(), l = (0, H.mergeProps)({
            className: Eb({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, O.jsx)("li", {
            ref: s,
            ...l,
            children: (0, O.jsxs)(qu, {
              open: a,
              onOpenChange: () => i(!a),
              children: [(0, O.jsx)(Fu, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, O.jsx)(Gu, {
                children: (0, O.jsx)(Ku, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, O.jsx)(Hu, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Fb = (0, X.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = t ? $.DX : Zu,
            a = (0, H.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, O.jsx)(s, {
            ref: o,
            ...a,
            children: e
          })
        });

      function Bb(e) {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Bb(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
      var Hb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Zb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gb(Gb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Hb(l, n, e.defaultVariants) && (r += " " + c);
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
      const Ub = (0, X.createContext)(null);

      function Wb() {
        const e = (0, X.useContext)(Ub);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const $b = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...s
        }, a) => {
          const i = e ? $.DX : "div",
            d = (0, H.mergeProps)({
              className: Zb({
                appearance: r,
                type: o,
                size: n
              })
            }, s);
          return (0, O.jsx)(Ub.Provider, {
            value: {
              type: o
            },
            children: (0, O.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...d
            })
          })
        }),
        Qb = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $.DX : "div",
            s = (0, H.mergeProps)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            ...s
          })
        }),
        Yb = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = pe[e],
            o = (0, H.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, O.jsx)(n, {
            ref: r,
            ...o
          })
        }),
        Jb = () => {
          const e = (0, W.Ub)(H.breakpoints.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        ew = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function tw(e) {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = tw(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
        aw = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = nw(nw({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sw(l, n, e.defaultVariants) && (r += " " + c);
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
      const iw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, H.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, O.jsx)(Ec, {
            ref: r,
            ...n
          })
        }),
        dw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, H.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, O.jsx)(Tc, {
            ref: r,
            ...n
          })
        }),
        lw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, H.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, O.jsx)(zc, {
            ref: r,
            ...n
          })
        }),
        cw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.rl)(),
            o = (0, H.mergeProps)({
              "data-testid": e,
              className: aw({
                isTouchDevice: n
              })
            }, t);
          return (0, O.jsx)(Lc, {
            ref: r,
            ...o
          })
        }),
        uw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, H.mergeProps)({
            "data-testid": e
          }, t);
          return (0, O.jsx)(Mc, {
            ref: r,
            ...n
          })
        });

      function fw(e) {
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

      function pw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pw(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = fw(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var vw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        yw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hw(hw({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) vw(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mw(e.variantClassNames, e => mw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        gw = yw({
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
        bw = yw({
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
      const ww = (0, X.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, X.createRef)(),
          dialogSpringRef: Ma(),
          overlaySpringRef: Ma()
        }),
        _w = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: a,
          ...i
        }) => {
          const [d, l] = (0, W.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, W.ZC)(d);
          return (0, O.jsx)(ww.Provider, {
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
              dialogSpringRef: Va(),
              overlaySpringRef: Va()
            },
            children: (0, O.jsx)(xw, {
              ...i
            })
          })
        },
        xw = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, X.useContext)(ww), n = (0, H.mergeProps)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, O.jsx)(yl.bL, {
            ...n
          })
        },
        jw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, X.useContext)(ww), s = (0, W.UP)(o, r), a = (0, H.mergeProps)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, O.jsx)(yl.l9, {
            ...a,
            ref: s
          })
        }),
        Cw = e => (0, O.jsx)(yl.ZL, {
          forceMount: !0,
          ...e
        }),
        Pw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: s
          } = (0, X.useContext)(ww), a = ew(), i = (0, W.jt)(), d = qa(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: $s.stiff,
            immediate: i || s
          }), l = (0, H.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = ai(yl.hJ);
          return (0, X.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, O.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        Ow = (0, X.forwardRef)(({
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
          } = (0, X.useContext)(ww), y = (0, W.rl)(), g = (0, W.jt)(), b = (0, X.useRef)(null), w = Jb(), {
            bindDrag: _
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const s = ew(),
              a = Jb(),
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
                  config: $s.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...s(0),
                  immediate: !1,
                  config: $s.stiff
                })) : (t.start({
                  ...a(100),
                  immediate: !1,
                  config: $s.stiff
                }), r.start({
                  ...s(100),
                  immediate: !1,
                  config: $s.stiff
                })))
              }, ir(dr), Cr({
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
          }), x = qa(a, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: a ? 100 : 0,
            config: $s.stiff,
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
          const j = (0, W.UP)(b, s),
            C = y && !g && !n && _(),
            P = (0, H.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, C || {}, o),
            S = ai(yl.UC);
          return x((t, r) => r ? (0, O.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, O.jsx)(S, {
              forceMount: !0,
              ref: j,
              ...P,
              style: t,
              children: e
            })
          }) : null)
        }),
        Sw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, H.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, t);
          return (0, O.jsx)(yl.hE, {
            ref: r,
            ...n
          })
        }),
        kw = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, H.mergeProps)({
            "data-testid": e
          }, t);
          return (0, O.jsx)(yl.VY, {
            ref: r,
            ...n
          })
        }),
        Rw = (0, X.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, O.jsxs)(iw, {
            ref: n,
            ...o,
            children: [(0, O.jsx)(dw, {
              className: "foundry_xov33ni",
              children: e
            }), (0, O.jsx)(lw, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, O.jsx)(cw, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        Nw = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            s = e ? $.DX : "div";
          return (0, O.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        Dw = (0, X.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.mergeProps)({
              "data-testid": r,
              className: gw({
                align: e
              })
            }, n),
            a = t ? $.DX : "header";
          return (0, O.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        Iw = (0, X.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            "data-testid": e,
            className: bw({
              appearance: t
            })
          }, r);
          return (0, O.jsx)(yl.hE, {
            ref: n,
            ...o
          })
        }),
        Ew = (0, X.forwardRef)((e, t) => {
          const r = (0, H.mergeProps)({
            className: "foundry_xov33n4"
          }, e);
          return (0, O.jsx)(Te, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        Tw = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            s = t ? (0, O.jsx)($.DX, {
              ref: n,
              ...o
            }) : (0, O.jsx)(Nv, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, O.jsx)(yl.bm, {
            asChild: !0,
            children: s
          })
        }),
        zw = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            s = e ? $.DX : "div";
          return (0, O.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        Lw = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            s = e ? $.DX : "footer";
          return (0, O.jsx)(s, {
            ref: n,
            ...o
          })
        });

      function Mw(e, t = []) {
        let r = [];
        const n = () => {
          const t = r.map(e => X.createContext(e));
          return function(r) {
            const n = r?.[e] || t;
            return X.useMemo(() => ({
              [`__scope${e}`]: {
                ...r,
                [e]: n
              }
            }), [r, n])
          }
        };
        return n.scopeName = e, [function(t, n) {
          const o = X.createContext(n);
          o.displayName = t + "Context";
          const s = r.length;
          r = [...r, n];
          const a = t => {
            const {
              scope: r,
              children: n,
              ...a
            } = t, i = r?.[e]?.[s] || o, d = X.useMemo(() => a, Object.values(a));
            return (0, O.jsx)(i.Provider, {
              value: d,
              children: n
            })
          };
          return a.displayName = t + "Provider", [a, function(r, a) {
            const i = a?.[e]?.[s] || o,
              d = X.useContext(i);
            if (d) return d;
            if (void 0 !== n) return n;
            throw new Error(`\`${r}\` must be used within \`${t}\``)
          }]
        }, Aw(n, ...t)]
      }

      function Aw(...e) {
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
            return X.useMemo(() => ({
              [`__scope${t.scopeName}`]: n
            }), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }
      var Vw = r(20972),
        qw = r(89104);

      function Fw() {
        return () => {}
      }
      var Bw = "Avatar",
        [Xw, Gw] = Mw(Bw),
        [Kw, Hw] = Xw(Bw),
        Zw = X.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, s] = X.useState("idle");
          return (0, O.jsx)(Kw, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: s,
            children: (0, O.jsx)(Vw.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      Zw.displayName = Bw;
      var Uw = "AvatarImage",
        Ww = X.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...s
          } = e, a = Hw(Uw, r), i = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, qw.useSyncExternalStore)(Fw, () => !0, () => !1),
              o = X.useRef(null),
              s = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [a, i] = X.useState(() => Qw(s, e));
            return (0, gi.N)(() => {
              i(Qw(s, e))
            }, [s, e]), (0, gi.N)(() => {
              const e = e => () => {
                i(e)
              };
              if (!s) return;
              const n = e("loaded"),
                o = e("error");
              return s.addEventListener("load", n), s.addEventListener("error", o), t && (s.referrerPolicy = t), "string" == typeof r && (s.crossOrigin = r), () => {
                s.removeEventListener("load", n), s.removeEventListener("error", o)
              }
            }, [s, r, t]), a
          }(n, s), d = (0, yi.c)(e => {
            o(e), a.onImageLoadingStatusChange(e)
          });
          return (0, gi.N)(() => {
            "idle" !== i && d(i)
          }, [i, d]), "loaded" === i ? (0, O.jsx)(Vw.sG.img, {
            ...s,
            ref: t,
            src: n
          }) : null
        });
      Ww.displayName = Uw;
      var $w = "AvatarFallback";

      function Qw(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      X.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, s = Hw($w, r), [a, i] = X.useState(void 0 === n);
        return X.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), a && "loaded" !== s.imageLoadingStatus ? (0, O.jsx)(Vw.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = $w;
      var Yw = Zw,
        Jw = Ww;

      function e_(e) {
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

      function t_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function r_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? t_(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = e_(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function n_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var o_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        s_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = r_(r_({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) o_(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return n_(e.variantClassNames, e => n_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        a_ = s_({
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
        i_ = "var(--foundry_v912w22)",
        d_ = "var(--foundry_v912w23)",
        l_ = s_({
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
        c_ = s_({
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
        u_ = "var(--foundry_v912w21)",
        f_ = "var(--foundry_v912w20)",
        p_ = s_({
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
      const h_ = (0, X.createContext)(null);

      function m_() {
        const e = (0, X.useContext)(h_);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const v_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: s = !1,
          ...a
        }, i) => {
          const d = (0, H.mergeProps)({
            "data-testid": r,
            "aria-disabled": s,
            className: a_({
              isDisabled: s
            }),
            asChild: e
          }, a);
          return (0, O.jsx)(h_.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: s
            },
            children: (0, O.jsx)(Yw, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        y_ = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: s,
            isDisabled: a
          } = m_(), [i, d] = (0, X.useState)(!1);
          (0, X.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, H.mergeProps)({
              className: l_({
                isDisabled: a
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, O.jsx)("span", {
            className: c_({
              size: s,
              isDisabled: a,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, O.jsx)(Jw, {
              ref: o,
              ...c
            })
          })
        }),
        g_ = (0, X.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, X.useRef)(null),
            {
              size: s,
              status: a,
              isDisabled: i
            } = m_(),
            d = a || "online",
            l = (0, W.UP)(o, n),
            c = (0, H.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: p_({
                status: d,
                size: s,
                isDisabled: i
              }),
              style: (0, G.DI)({
                [f_]: t?.online,
                [u_]: t?.offline,
                [i_]: t?.away,
                [d_]: t?.busy
              })
            }, r);
          return (0, O.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function b_(e) {
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

      function w_(e, t) {
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
          t % 2 ? w_(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = b_(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function x_(e, t) {
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
        C_ = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = __(__({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) j_(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return x_(e.variantClassNames, e => x_(e, e => e.split(" ")[0]))
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
      const P_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            a = e ? $.DX : "nav";
          return (0, O.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        O_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.mergeProps)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            a = e ? $.DX : "div";
          return (0, O.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        S_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, X.useRef)(null),
            i = (0, W.UP)(a, s),
            {
              linkProps: d,
              isPressed: l
            } = xv(o, a),
            c = (0, H.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, fe.clsx)(C_({
                isActive: r
              }))
            }, d),
            u = e ? $.DX : "a";
          return (0, O.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        k_ = (0, X.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, O.jsx)(S_, {
            ref: n,
            ...o,
            children: (0, O.jsx)(pe.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        R_ = (0, X.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, O.jsx)(S_, {
            ref: n,
            ...o,
            children: (0, O.jsx)(pe.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        N_ = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, H.mergeProps)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, n),
            s = e ? $.DX : "span";
          return (0, O.jsx)(s, {
            ...o,
            children: t || "..."
          })
        },
        D_ = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            s = e ? $.DX : "div";
          return (0, O.jsx)(s, {
            ...o,
            children: t
          })
        },
        I_ = (0, X.createContext)(null);

      function E_() {
        const e = (0, X.useContext)(I_);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const T_ = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, X.useId)(),
            s = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            a = e ? $.DX : "div";
          return (0, O.jsx)(I_.Provider, {
            value: {
              labelId: o
            },
            children: (0, O.jsx)(a, {
              ...s,
              children: t
            })
          })
        },
        z_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = E_(), a = (0, H.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? $.DX : "label";
          return (0, O.jsx)(i, {
            ref: o,
            id: s,
            ...a,
            children: t
          })
        }),
        L_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = E_(), a = (0, H.mergeProps)({
            "aria-labelledby": s,
            className: "foundry_2jlbztc"
          }, n), i = e ? $.DX : cf;
          return (0, O.jsxs)(i, {
            ...a,
            children: [(0, O.jsxs)(hf, {
              ref: o,
              children: [(0, O.jsx)(mf, {
                placeholder: r
              }), (0, O.jsx)(vf, {})]
            }), (0, O.jsx)(jf, {
              children: (0, O.jsx)(uf, {
                children: (0, O.jsx)(pf, {
                  children: t
                })
              })
            })]
          })
        }),
        M_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.mergeProps)({
              "data-testid": r
            }, n),
            a = e ? $.DX : wf;
          return (0, O.jsx)(a, {
            ...s,
            ref: o,
            children: (0, O.jsx)(_f, {
              children: t
            })
          })
        }),
        A_ = (0, X.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            a = e ? $.DX : "p";
          return (0, O.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        });
      var V_ = "rovingFocusGroup.onEntryFocus",
        q_ = {
          bubbles: !1,
          cancelable: !0
        },
        F_ = "RovingFocusGroup",
        [B_, X_, G_] = (0, Vd.N)(F_),
        [K_, H_] = (0, li.A)(F_, [G_]),
        [Z_, U_] = K_(F_),
        W_ = X.forwardRef((e, t) => (0, O.jsx)(B_.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, O.jsx)(B_.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, O.jsx)($_, {
              ...e,
              ref: t
            })
          })
        }));
      W_.displayName = F_;
      var $_ = X.forwardRef((e, t) => {
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
          } = e, f = X.useRef(null), p = (0, di.s)(t, f), h = (0, Md.jH)(s), [m, v] = (0, Ki.i)({
            prop: a,
            defaultProp: i ?? null,
            onChange: d,
            caller: F_
          }), [y, g] = X.useState(!1), b = (0, yi.c)(l), w = X_(r), _ = X.useRef(!1), [x, j] = X.useState(0);
          return X.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(V_, b), () => e.removeEventListener(V_, b)
          }, [b]), (0, O.jsx)(Z_, {
            scope: r,
            orientation: n,
            dir: h,
            loop: o,
            currentTabStopId: m,
            onItemFocus: X.useCallback(e => v(e), [v]),
            onItemShiftTab: X.useCallback(() => g(!0), []),
            onFocusableItemAdd: X.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: X.useCallback(() => j(e => e - 1), []),
            children: (0, O.jsx)(hi.sG.div, {
              tabIndex: y || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, ii.mK)(e.onMouseDown, () => {
                _.current = !0
              }),
              onFocus: (0, ii.mK)(e.onFocus, e => {
                const t = !_.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(V_, q_);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === m),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    ex(n, c)
                  }
                }
                _.current = !1
              }),
              onBlur: (0, ii.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        Q_ = "RovingFocusGroupItem",
        Y_ = X.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: s,
            children: a,
            ...i
          } = e, d = (0, ui.B)(), l = s || d, c = U_(Q_, r), u = c.currentTabStopId === l, f = X_(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: m
          } = c;
          return X.useEffect(() => {
            if (n) return p(), () => h()
          }, [n, p, h]), (0, O.jsx)(B_.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, O.jsx)(hi.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, ii.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, ii.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, ii.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : J_[n]
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
                  setTimeout(() => ex(s))
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
      Y_.displayName = Q_;
      var J_ = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function ex(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var tx = W_,
        rx = Y_,
        nx = "Toggle",
        ox = X.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...s
          } = e, [a, i] = (0, Ki.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: nx
          });
          return (0, O.jsx)(hi.sG.button, {
            type: "button",
            "aria-pressed": a,
            "data-state": a ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...s,
            ref: t,
            onClick: (0, ii.mK)(e.onClick, () => {
              e.disabled || i(!a)
            })
          })
        });
      ox.displayName = nx;
      var sx = "ToggleGroup",
        [ax, ix] = (0, li.A)(sx, [H_]),
        dx = H_(),
        lx = X.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, O.jsx)(fx, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, O.jsx)(px, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${sx}\``)
        });
      lx.displayName = sx;
      var [cx, ux] = ax(sx), fx = X.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, Ki.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: sx
        });
        return (0, O.jsx)(cx, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: X.useMemo(() => a ? [a] : [], [a]),
          onItemActivate: i,
          onItemDeactivate: X.useCallback(() => i(""), [i]),
          children: (0, O.jsx)(vx, {
            ...s,
            ref: t
          })
        })
      }), px = X.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, Ki.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: sx
        }), d = X.useCallback(e => i((t = []) => [...t, e]), [i]), l = X.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, O.jsx)(cx, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: a,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, O.jsx)(vx, {
            ...s,
            ref: t
          })
        })
      });
      lx.displayName = sx;
      var [hx, mx] = ax(sx), vx = X.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: s,
          dir: a,
          loop: i = !0,
          ...d
        } = e, l = dx(r), c = (0, Md.jH)(a), u = {
          role: "group",
          dir: c,
          ...d
        };
        return (0, O.jsx)(hx, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, O.jsx)(tx, {
            asChild: !0,
            ...l,
            orientation: s,
            dir: c,
            loop: i,
            children: (0, O.jsx)(hi.sG.div, {
              ...u,
              ref: t
            })
          }) : (0, O.jsx)(hi.sG.div, {
            ...u,
            ref: t
          })
        })
      }), yx = "ToggleGroupItem", gx = X.forwardRef((e, t) => {
        const r = ux(yx, e.__scopeToggleGroup),
          n = mx(yx, e.__scopeToggleGroup),
          o = dx(e.__scopeToggleGroup),
          s = r.value.includes(e.value),
          a = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: s,
            disabled: a
          },
          d = X.useRef(null);
        return n.rovingFocus ? (0, O.jsx)(rx, {
          asChild: !0,
          ...o,
          focusable: !a,
          active: s,
          ref: d,
          children: (0, O.jsx)(bx, {
            ...i,
            ref: t
          })
        }) : (0, O.jsx)(bx, {
          ...i,
          ref: t
        })
      });
      gx.displayName = yx;
      var bx = X.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, s = ux(yx, r), a = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === s.type ? a : void 0;
          return (0, O.jsx)(ox, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? s.onItemActivate(n) : s.onItemDeactivate(n)
            }
          })
        }),
        wx = lx,
        _x = gx;

      function xx(e) {
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

      function jx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Cx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jx(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = xx(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jx(Object(r)).forEach(function(t) {
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
        Sx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Cx(Cx({}, e.defaultVariants), t);
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
        },
        kx = "var(--foundry_zxwkyk2)",
        Rx = "var(--foundry_zxwkyk3)",
        Nx = Sx({
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
        Dx = Sx({
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
        Ix = Sx({
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
        Ex = "var(--foundry_zxwkyk1)",
        Tx = "var(--foundry_zxwkyk0)",
        zx = Sx({
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
      const Lx = (0, X.createContext)(null);

      function Mx() {
        const e = (0, X.useContext)(Lx);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const Ax = (0, X.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const s = (0, H.mergeProps)({
            "data-testid": e,
            className: Nx({
              size: t
            }),
            type: r
          }, n);
          return (0, O.jsx)(Lx.Provider, {
            value: {
              size: t
            },
            children: (0, O.jsx)(wx, {
              ref: o,
              ...s
            })
          })
        }),
        Vx = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = Mx(), o = (0, H.mergeProps)({
            "data-testid": e,
            className: Dx({
              size: n
            })
          }, t);
          return (0, O.jsx)(_x, {
            ref: r,
            ...o
          })
        }),
        qx = (0, X.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = Mx(), o = pe[e];
          return (0, O.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        Fx = (0, X.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const s = (0, H.mergeProps)({
            "data-testid": e,
            className: zx({
              status: r
            }),
            style: (0, G.DI)({
              [Tx]: t?.online,
              [Ex]: t?.offline,
              [kx]: t?.away,
              [Rx]: t?.busy
            })
          }, n);
          return (0, O.jsx)("span", {
            ref: o,
            ...s
          })
        }),
        Bx = (0, X.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = Mx(), s = (0, H.mergeProps)({
            "data-testid": e,
            className: Ix({
              variant: t,
              size: o
            })
          }, r);
          return (0, O.jsx)("span", {
            ref: n,
            ...s
          })
        });
      var Xx = "Popover",
        [Gx, Kx] = (0, li.A)(Xx, [xi]),
        Hx = xi(),
        [Zx, Ux] = Gx(Xx),
        Wx = e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !1
          } = e, i = Hx(t), d = X.useRef(null), [l, c] = X.useState(!1), [u, f] = (0, Ki.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Xx
          });
          return (0, O.jsx)(Ai, {
            ...i,
            children: (0, O.jsx)(Zx, {
              scope: t,
              contentId: (0, ui.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: X.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: X.useCallback(() => c(!0), []),
              onCustomAnchorRemove: X.useCallback(() => c(!1), []),
              modal: a,
              children: r
            })
          })
        };
      Wx.displayName = Xx;
      var $x = "PopoverAnchor",
        Qx = X.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Ux($x, r), s = Hx(r), {
            onCustomAnchorAdd: a,
            onCustomAnchorRemove: i
          } = o;
          return X.useEffect(() => (a(), () => i()), [a, i]), (0, O.jsx)(Vi, {
            ...s,
            ...n,
            ref: t
          })
        });
      Qx.displayName = $x;
      var Yx = "PopoverTrigger",
        Jx = X.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Ux(Yx, r), s = Hx(r), a = (0, di.s)(t, o.triggerRef), i = (0, O.jsx)(hi.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": pj(o.open),
            ...n,
            ref: a,
            onClick: (0, ii.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, O.jsx)(Vi, {
            asChild: !0,
            ...s,
            children: i
          })
        });
      Jx.displayName = Yx;
      var ej = "PopoverPortal",
        [tj, rj] = Gx(ej, {
          forceMount: void 0
        }),
        nj = e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = Ux(ej, t);
          return (0, O.jsx)(tj, {
            scope: t,
            forceMount: r,
            children: (0, O.jsx)(Xi.C, {
              present: r || s.open,
              children: (0, O.jsx)(Bi.Z, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      nj.displayName = ej;
      var oj = "PopoverContent",
        sj = X.forwardRef((e, t) => {
          const r = rj(oj, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Ux(oj, e.__scopePopover);
          return (0, O.jsx)(Xi.C, {
            present: n || s.open,
            children: s.modal ? (0, O.jsx)(ij, {
              ...o,
              ref: t
            }) : (0, O.jsx)(dj, {
              ...o,
              ref: t
            })
          })
        });
      sj.displayName = oj;
      var aj = (0, Gi.TL)("PopoverContent.RemoveScroll"),
        ij = X.forwardRef((e, t) => {
          const r = Ux(oj, e.__scopePopover),
            n = X.useRef(null),
            o = (0, di.s)(t, n),
            s = X.useRef(!1);
          return X.useEffect(() => {
            const e = n.current;
            if (e) return (0, qc.Eq)(e)
          }, []), (0, O.jsx)(Fc.A, {
            as: aj,
            allowPinchZoom: !0,
            children: (0, O.jsx)(lj, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, ii.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), s.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, ii.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                s.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, ii.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        dj = X.forwardRef((e, t) => {
          const r = Ux(oj, e.__scopePopover),
            n = X.useRef(!1),
            o = X.useRef(!1);
          return (0, O.jsx)(lj, {
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
                a = r.triggerRef.current?.contains(s);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        lj = X.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: i,
            onPointerDownOutside: d,
            onFocusOutside: l,
            onInteractOutside: c,
            ...u
          } = e, f = Ux(oj, r), p = Hx(r);
          return (0, Ac.Oh)(), (0, O.jsx)(Vc.n, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: (0, O.jsx)(ci.qW, {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, O.jsx)(qi, {
                "data-state": pj(f.open),
                role: "dialog",
                id: f.contentId,
                ...p,
                ...u,
                ref: t,
                style: {
                  ...u.style,
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
        cj = "PopoverClose",
        uj = X.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Ux(cj, r);
          return (0, O.jsx)(hi.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, ii.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      uj.displayName = cj;
      var fj = X.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = Hx(r);
        return (0, O.jsx)(Fi, {
          ...o,
          ...n,
          ref: t
        })
      });

      function pj(e) {
        return e ? "open" : "closed"
      }
      fj.displayName = "PopoverArrow";
      var hj = Wx,
        mj = Qx,
        vj = Jx,
        yj = nj,
        gj = sj,
        bj = uj,
        wj = fj;

      function _j(e) {
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

      function xj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function jj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xj(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = _j(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Cj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Pj = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Oj = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = jj(jj({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Pj(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cj(e.variantClassNames, e => Cj(e, e => e.split(" ")[0]))
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
      const Sj = (0, X.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        kj = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, s] = (0, W.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), a = (0, H.mergeProps)({
            open: o,
            onOpenChange: s
          }, n);
          return (0, O.jsx)(Sj.Provider, {
            value: {
              open: o,
              setOpen: s
            },
            children: (0, O.jsx)(hj, {
              ...a
            })
          })
        },
        Rj = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, H.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, O.jsx)(vj, {
            ref: r,
            ...n
          })
        }),
        Nj = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        Dj = (0, X.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: s
          } = (0, X.useContext)(Sj), a = (0, X.useRef)(null), i = (0, W.UP)(a, o), {
            buttonProps: d
          } = (0, W.sL)(n, a), l = (0, H.mergeProps)({
            "data-testid": r,
            className: Oj({
              size: t
            })
          }, d), c = s ? pe.ChevronUp : pe.ChevronDown;
          return (0, O.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, O.jsx)(c, {
              label: "",
              size: Nj[t]
            })]
          })
        }),
        Ij = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, H.mergeProps)({
            "data-testid": e
          }, t);
          return (0, O.jsx)(mj, {
            ref: r,
            ...n
          })
        }),
        Ej = (0, X.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, O.jsx)(gj, {
            ref: n,
            ...o
          })
        }),
        Tj = (0, X.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, H.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, O.jsx)(wj, {
            ref: r,
            ...n
          })
        }),
        zj = e => (0, O.jsx)(yj, {
          ...e
        }),
        Lj = e => (0, O.jsx)(bj, {
          ...e
        });

      function Mj(e) {
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

      function Aj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Aj(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Mj(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Aj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function qj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Fj = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Bj = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vj(Vj({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Fj(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qj(e.variantClassNames, e => qj(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Xj = "var(--foundry_rmorls2)",
        Gj = Bj({
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
        Kj = "var(--foundry_rmorls0)",
        Hj = Bj({
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
        Zj = "var(--foundry_rmorls3)",
        Uj = "var(--foundry_rmorls1)",
        Wj = Bj({
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
        $j = "Progress",
        [Qj, Yj] = Mw($j),
        [Jj, eC] = Qj($j),
        tC = X.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: s = oC,
            ...a
          } = e;
          !o && 0 !== o || iC(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = iC(o) ? o : 100;
          null === n || dC(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = dC(n, i) ? n : null,
            l = aC(d) ? s(d, i) : void 0;
          return (0, O.jsx)(Jj, {
            scope: r,
            value: d,
            max: i,
            children: (0, O.jsx)(Vw.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": aC(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": sC(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...a,
              ref: t
            })
          })
        });
      tC.displayName = $j;
      var rC = "ProgressIndicator",
        nC = X.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = eC(rC, r);
          return (0, O.jsx)(Vw.sG.div, {
            "data-state": sC(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function oC(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function sC(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function aC(e) {
        return "number" == typeof e
      }

      function iC(e) {
        return aC(e) && !isNaN(e) && e > 0
      }

      function dC(e, t) {
        return aC(e) && !isNaN(e) && e <= t && e >= 0
      }
      nC.displayName = rC;
      var lC = tC,
        cC = nC;
      const uC = (0, X.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        fC = (0, X.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const s = Math.round(r / t * 100),
            a = "number" != typeof r || "number" != typeof t;
          return (0, O.jsx)(uC.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: s,
              isInvalid: a
            },
            children: (0, O.jsx)(pC, {
              ...n,
              ref: o
            })
          })
        }),
        pC = (0, X.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, H.mergeProps)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            s = t ? $.DX : "div";
          return (0, O.jsx)(s, {
            ...o,
            ref: n
          })
        }),
        hC = (0, X.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: s,
            size: a
          } = (0, X.useContext)(uC), i = (0, H.mergeProps)({
            "data-testid": e,
            className: Hj({
              size: a
            }),
            value: o,
            max: s,
            style: (0, G.DI)({
              [Zj]: t
            }),
            "data-track": !0
          }, r);
          return (0, O.jsx)(lC, {
            ref: n,
            ...i
          })
        }),
        mC = (0, X.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: s,
            isInvalid: a
          } = (0, X.useContext)(uC), i = a ? "-100%" : `-${100-s}%`, d = (0, H.mergeProps)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, G.DI)({
              [Kj]: i,
              [Uj]: `${t}ms`,
              [Xj]: r
            })
          }, n);
          return (0, O.jsx)(cC, {
            ref: o,
            ...d
          })
        }),
        vC = (0, X.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, X.useContext)(uC), s = (0, H.mergeProps)({
            "data-testid": t,
            className: Gj({
              size: o
            }),
            "aria-hidden": !0
          }, r), a = e ? $.DX : "span";
          return (0, O.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        yC = (0, X.forwardRef)(({
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
          } = (0, X.useContext)(uC), l = (0, H.mergeProps)({
            "data-testid": e,
            className: Gj({
              size: a
            }),
            "aria-hidden": !0
          }, r);
          return d ? (0, O.jsx)("span", {
            ref: n,
            ...l
          }) : "percentage" === t ? (0, O.jsxs)("span", {
            ref: n,
            ...l,
            children: [i, " ", (0, O.jsx)("span", {
              className: Wj({
                size: a
              }),
              children: "%"
            })]
          }) : (0, O.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", s]
          })
        })
    },
    66892(e, t, r) {
      r.d(t, {
        b: () => i
      });
      var n = r(93082),
        o = r(3541),
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
            }), (0, s.jsx)(o.bL, {
              children: t
            })]
          })
        };
      a.displayName = "AccessibleIcon";
      var i = a
    },
    23028(e, t, r) {
      r.d(t, {
        N: () => d
      });
      var n = r(93082),
        o = r(31201),
        s = r(50446),
        a = r(2976),
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
          p = (0, a.TL)(f),
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
          y = (0, a.TL)(m),
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
    93689(e, t, r) {
      r.d(t, {
        jH: () => s
      });
      var n = r(93082),
        o = (r(39793), n.createContext(void 0));

      function s(e) {
        const t = n.useContext(o);
        return e || t || "ltr"
      }
    }
  }
]);