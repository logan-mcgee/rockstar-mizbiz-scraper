try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7e6f0156-e181-4f3d-b869-d15026263686", e._sentryDebugIdIdentifier = "sentry-dbid-7e6f0156-e181-4f3d-b869-d15026263686")
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
  [8826], {
    76445(e, t, r) {
      r.r(t), r.d(t, {
        Accordion: () => O,
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => _,
        Badge: () => g,
        Body: () => rt,
        Breadcrumbs: () => y,
        Button: () => we,
        Checkbox: () => d,
        ChipGroup: () => j,
        Code: () => ot,
        Dialog: () => w,
        Display: () => st,
        Divider: () => Me,
        Dropdown: () => s,
        Heading: () => it,
        IconButton: () => Ne,
        Label: () => lt,
        Lightbox: () => o,
        Loader: () => Ue,
        Pagination: () => x,
        Popover: () => C,
        ProgressBar: () => P,
        RadioGroup: () => u,
        ScrollArea: () => b,
        Spinner: () => ie,
        Switch: () => a,
        Tag: () => m,
        Text: () => ft,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => ut,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => dd,
        Content: () => id,
        Portal: () => ld,
        Root: () => sd,
        Trigger: () => ad,
        useTooltipContext: () => od
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => cl,
        Close: () => ml,
        Content: () => sl,
        Controls: () => ul,
        CssVars: () => gl,
        Download: () => yl,
        Image: () => ll,
        Keyboard: () => pl,
        LightboxContext: () => $d,
        OpenIcon: () => rl,
        Overlay: () => ol,
        Portal: () => nl,
        Reset: () => vl,
        Root: () => Qd,
        RootImplContext: () => Yd,
        Thumbnail: () => tl,
        Trigger: () => el,
        Zoom: () => hl,
        ZoomPan: () => al
      });
      var s = {};
      r.r(s), r.d(s, {
        Content: () => Xu,
        Description: () => $u,
        Hint: () => Qu,
        Label: () => Wu,
        Option: () => Yu,
        OptionIcon: () => ef,
        OptionText: () => Ju,
        Portal: () => tf,
        Root: () => Bu,
        ScrollArea: () => Ku,
        StatusIcon: () => nf,
        StatusRoot: () => rf,
        StatusText: () => of,
        Trigger: () => Hu,
        TriggerIcon: () => Uu,
        TriggerText: () => Zu,
        Viewport: () => Gu,
        useDropdownContext: () => Fu
      });
      var a = {};
      r.r(a), r.d(a, {
        Description: () => Zf,
        Input: () => Kf,
        Label: () => Hf,
        Root: () => Gf,
        useSwitchContext: () => Xf
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Wf,
        CheckMD: () => Uf,
        CheckXL: () => $f,
        DashLG: () => Yf,
        DashMD: () => Qf,
        DashXL: () => Jf
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => yp,
        ErrorText: () => gp,
        Group: () => _p,
        GroupDescription: () => jp,
        GroupErrorText: () => Pp,
        GroupItems: () => Cp,
        GroupLabel: () => xp,
        Input: () => mp,
        Label: () => vp,
        Root: () => hp,
        useGroupContext: () => wp
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Fp,
        Hint: () => Bp,
        Input: () => qp,
        Label: () => Ap,
        Root: () => Vp,
        RootContext: () => Lp,
        StatusIcon: () => Gp,
        StatusRoot: () => Xp,
        StatusText: () => Kp,
        useTextAreaContext: () => Mp
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => Fh,
        DotMD: () => qh,
        DotXL: () => Bh
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => Ih,
        Input: () => Gh,
        Label: () => Dh,
        Option: () => Xh,
        OptionDescription: () => Hh,
        OptionLabel: () => Kh,
        Options: () => Nh,
        Root: () => Rh,
        StatusIcon: () => Eh,
        StatusRoot: () => Th,
        StatusText: () => zh,
        useRadioGroupContext: () => kh
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Wm,
        Control: () => Hm,
        Description: () => Qm,
        Hint: () => Km,
        Icon: () => Um,
        Input: () => Zm,
        Label: () => Gm,
        PasswordButton: () => $m,
        Root: () => Xm,
        StatusIcon: () => Jm,
        StatusRoot: () => Ym,
        StatusText: () => ev
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => Cv,
        CloseButton: () => Iv,
        Description: () => kv,
        ErrorText: () => Dv,
        Footer: () => Nv,
        Header: () => jv,
        Icon: () => Ov,
        Link: () => Rv,
        Root: () => xv,
        RootContext: () => wv,
        Title: () => Sv,
        iconStatusMap: () => Pv,
        useAlertContext: () => _v
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => Ty,
        CloseButton: () => Ly,
        Description: () => Iy,
        Icon: () => Dy,
        Link: () => zy,
        PaginationCounter: () => qy,
        PaginationNav: () => My,
        PaginationNextButton: () => Vy,
        PaginationPrevButton: () => Ay,
        PaginationViewport: () => Ey,
        Root: () => Ry,
        RootContext: () => Sy,
        iconStatusMap: () => Ny,
        useAlertBannerContext: () => ky
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => tg,
        Icon: () => eg,
        Label: () => Jy,
        Root: () => Yy,
        RootContext: () => $y,
        useTagContext: () => Qy
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => ob,
        CloseButton: () => sb,
        Description: () => tb,
        Icon: () => nb,
        Provider: () => $g,
        Root: () => eb,
        RootContext: () => Yg,
        Viewport: () => Qg,
        iconAppearanceMap: () => rb,
        useToastContext: () => Jg
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => bb,
        Item: () => gb,
        OverflowMenu: () => wb,
        OverflowMenuItem: () => _b,
        Root: () => yb,
        RootContext: () => vb,
        useBreadcrumbsContext: () => mb
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => Ib,
        Label: () => Db,
        Root: () => Nb,
        useBadgeContext: () => Rb
      });
      var b = {};
      r.r(b), r.d(b, {
        Corner: () => Kb,
        Root: () => Fb,
        Scrollbar: () => Xb,
        Thumb: () => Gb,
        Viewport: () => Bb
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => mw,
        CloseButton: () => hw,
        Content: () => aw,
        Description: () => dw,
        Footer: () => vw,
        Header: () => uw,
        HeaderButton: () => pw,
        HeaderTitle: () => fw,
        Layout: () => cw,
        Overlay: () => sw,
        Portal: () => ow,
        Root: () => tw,
        ScrollArea: () => lw,
        Title: () => iw,
        Trigger: () => nw
      });
      var _ = {};
      r.r(_), r.d(_, {
        Image: () => Kw,
        Root: () => Gw,
        StatusIndicator: () => Hw,
        useAvatarContext: () => Xw
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => s_,
        Dropdown: () => c_,
        DropdownLabel: () => l_,
        Ellipsis: () => o_,
        Item: () => t_,
        Label: () => f_,
        Next: () => n_,
        Option: () => u_,
        Pages: () => e_,
        Prev: () => r_,
        ResultsPerPage: () => d_,
        Root: () => Jw
      });
      var j = {};
      r.r(j), r.d(j, {
        Icon: () => fx,
        Item: () => ux,
        Label: () => hx,
        Root: () => cx,
        StatusIndicator: () => px,
        useChipGroupContext: () => lx
      });
      var C = {};
      r.r(C), r.d(C, {
        Anchor: () => Sx,
        Arrow: () => Rx,
        Close: () => Dx,
        Content: () => kx,
        Portal: () => Nx,
        Root: () => jx,
        RootContext: () => xx,
        Trigger: () => Cx,
        TriggerButton: () => Ox
      });
      var P = {};
      r.r(P), r.d(P, {
        Indicator: () => cj,
        Label: () => uj,
        Root: () => ij,
        Track: () => lj,
        UnitLabel: () => fj
      });
      var O = {};
      r.r(O), r.d(O, {
        Content: () => Nj,
        Header: () => Oj,
        Icon: () => kj,
        Item: () => Pj,
        Root: () => jj,
        Trigger: () => Sj,
        TriggerIcon: () => Rj
      });
      var S = r(39793);

      function k(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class R extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var N = R;

      function D(e) {
        if ("string" != typeof e) throw new N(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = A.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = T[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new N(e);
          return `#${r}`
        }(e) : e;
        const r = z.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(E(e, 2), 16)), parseInt(E(e[3] || "f", 2), 16) / 255]
        }
        const n = L.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = M.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const s = V.exec(t);
        if (s) {
          const [t, r, n, o] = Array.from(s).slice(1).map(parseFloat);
          if (k(0, 100, r) !== r) throw new N(e);
          if (k(0, 100, n) !== n) throw new N(e);
          return [...F(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new N(e)
      }
      const I = e => parseInt(e.replace(/_/g, ""), 36),
        T = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = I(t.substring(0, 3)),
            n = I(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        E = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        z = new RegExp(`^#${E("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        L = new RegExp(`^#${E("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        M = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${E(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        V = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        A = /^[a-z]+$/i,
        q = e => Math.round(255 * e),
        F = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(q);
          const o = (e % 360 + 360) % 360 / 60,
            s = (1 - Math.abs(2 * n - 1)) * (t / 100),
            a = s * (1 - Math.abs(o % 2 - 1));
          let i = 0,
            d = 0,
            l = 0;
          o >= 0 && o < 1 ? (i = s, d = a) : o >= 1 && o < 2 ? (i = a, d = s) : o >= 2 && o < 3 ? (d = s, l = a) : o >= 3 && o < 4 ? (d = a, l = s) : o >= 4 && o < 5 ? (i = a, l = s) : o >= 5 && o < 6 && (i = s, l = a);
          const c = n - s / 2;
          return [i + c, d + c, l + c].map(q)
        };

      function B(e, t) {
        const [r, n, o, s] = function(e) {
          const [t, r, n, o] = D(e).map((e, t) => 3 === t ? e : e / 255), s = Math.max(t, r, n), a = Math.min(t, r, n), i = (s + a) / 2;
          if (s === a) return [0, 0, i, o];
          const d = s - a;
          return [60 * (t === s ? (r - n) / d + (r < n ? 6 : 0) : r === s ? (n - t) / d + 2 : (t - r) / d + 4), i > .5 ? d / (2 - s - a) : d / (s + a), i, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${k(0,100,100*t).toFixed()}%, ${k(0,100,100*r).toFixed()}%, ${parseFloat(k(0,1,n).toFixed(3))})`
        }(r, n, o - t, s)
      }

      function X(e, t) {
        return B(e, -t)
      }
      var G = r(4637),
        K = r(67838),
        H = r(98065),
        Z = r(39628);
      const U = {
          enabled: {
            background: (0, K.Tm)(H.no.enabled.background),
            border: (0, K.Tm)(H.no.enabled.border),
            text: (0, K.Tm)(H.no.enabled.text),
            outline: (0, K.Tm)(H.no.enabled.outline)
          },
          hover: {
            background: (0, K.Tm)(H.no.hover.background),
            border: (0, K.Tm)(H.no.hover.border),
            text: (0, K.Tm)(H.no.hover.text),
            outline: (0, K.Tm)(H.no.hover.outline)
          },
          focus: {
            background: (0, K.Tm)(H.no.focus.background),
            border: (0, K.Tm)(H.no.focus.border),
            text: (0, K.Tm)(H.no.focus.text),
            outline: (0, K.Tm)(H.no.focus.outline)
          },
          pressed: {
            background: (0, K.Tm)(H.no.pressed.background),
            border: (0, K.Tm)(H.no.pressed.border),
            text: (0, K.Tm)(H.no.pressed.text),
            outline: (0, K.Tm)(H.no.pressed.outline)
          },
          disabled: {
            background: (0, K.Tm)(H.no.disabled.background),
            border: (0, K.Tm)(H.no.disabled.border),
            text: (0, K.Tm)(H.no.disabled.text),
            outline: (0, K.Tm)(H.no.disabled.outline)
          },
          loading: {
            background: (0, K.Tm)(H.no.loading.background),
            border: (0, K.Tm)(H.no.loading.border),
            text: (0, K.Tm)(H.no.loading.text),
            outline: (0, K.Tm)(H.no.loading.outline)
          }
        },
        W = ({
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
          (0, G.useEffect)(() => {
            if (!e.current || !s || !l) return;
            const c = `${s}:${t}:${r}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, Z.getOrSet)(c, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = D(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(s);
                return {
                  text: d || (e > t ? K.LU.global.color.black.static[100] : K.LU.global.color.white.static[100]),
                  hover: a || (e >= r ? B(s, n) : X(s, n)),
                  pressed: i || (e >= r ? B(s, o) : X(s, o))
                }
              });
            return e.current.style.setProperty(U.enabled.background, s), e.current.style.setProperty(U.enabled.border, s), e.current.style.setProperty(U.enabled.text, u), e.current.style.setProperty(U.hover.background, f), e.current.style.setProperty(U.hover.border, f), e.current.style.setProperty(U.hover.text, u), e.current.style.setProperty(U.focus.background, f), e.current.style.setProperty(U.focus.border, f), e.current.style.setProperty(U.focus.text, u), e.current.style.setProperty(U.pressed.background, p), e.current.style.setProperty(U.pressed.border, p), e.current.style.setProperty(U.pressed.text, u), e.current.style.setProperty(U.loading.background, f), e.current.style.setProperty(U.loading.border, f), e.current.style.setProperty(U.loading.text, u), () => {
              e.current?.style.removeProperty(U.enabled.background), e.current?.style.removeProperty(U.enabled.border), e.current?.style.removeProperty(U.enabled.text), e.current?.style.removeProperty(U.hover.background), e.current?.style.removeProperty(U.hover.border), e.current?.style.removeProperty(U.hover.text), e.current?.style.removeProperty(U.focus.background), e.current?.style.removeProperty(U.focus.border), e.current?.style.removeProperty(U.focus.text), e.current?.style.removeProperty(U.pressed.background), e.current?.style.removeProperty(U.pressed.border), e.current?.style.removeProperty(U.pressed.text), e.current?.style.removeProperty(U.loading.background), e.current?.style.removeProperty(U.loading.border), e.current?.style.removeProperty(U.loading.text)
            }
          }, [e.current, t, r, n, o, s, a, i, d, l, ...c])
        };
      var $ = r(53953),
        Q = r(86361),
        Y = r(43870),
        J = r(36551);

      function ee(e) {
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

      function te(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? te(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ee(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : te(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ne(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var oe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        se = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = re(re({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) oe(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ne(e.variantClassNames, e => ne(e, e => e.split(" ")[0]))
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
      const ae = "pageMD",
        ie = (0, G.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = ae,
          testId: n,
          ...o
        }, s) => {
          const a = (0, Y.zQ)(),
            i = "string" == typeof r ? r : r?.[a] ?? r.default ?? ae,
            d = (0, Z.mergeProps)({
              className: se({
                size: i
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, S.jsx)(J.b, {
            label: e,
            children: (0, S.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...d,
              ref: s,
              viewBox: "0 0 16 16",
              children: [!t && (0, S.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, S.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var de = r(81270),
        le = r(20357);

      function ce(e) {
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

      function ue(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ue(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ce(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ue(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function pe(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var he = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        me = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fe(fe({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) he(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pe(e.variantClassNames, e => pe(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ve = me({
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
      me({
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
      var ye = me({
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
        ge = me({
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
        be = me({
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
      const we = (0, G.forwardRef)(({
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
        const j = (0, G.useRef)(null),
          C = (0, $.UP)(j, x),
          P = (0, Y.zQ)(),
          O = "string" == typeof d ? d : d?.[P] ?? d.default ?? "MD",
          {
            buttonProps: k
          } = (0, $.sL)((0, Z.mergeProps)(_, {
            isLoading: c,
            preventFocusOnPress: f
          }), j);
        W({
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
        const R = (0, Z.mergeProps)({
            className: ve({
              appearance: i,
              size: O,
              fullWidth: l,
              iconLeft: !!n,
              iconRight: !!s
            }),
            "data-testid": e
          }, k),
          N = n && le[n],
          D = s && le[s],
          I = t ? Q.DX : "button",
          T = l && (D || D && N);
        return (0, S.jsxs)(I, {
          ref: C,
          ...R,
          children: [T && (0, S.jsx)("div", {
            className: "foundry_17pcofy15"
          }), N && (0, S.jsx)(N, {
            label: o || "",
            size: O,
            className: (0, de.clsx)(ye({
              size: O
            }), "foundry_17pcofy11")
          }), (0, S.jsx)(Q.xV, {
            children: r
          }), D && (0, S.jsx)(D, {
            label: a || "",
            size: O,
            className: (0, de.clsx)(ye({
              size: O
            }), ge({
              fullWidth: l
            }))
          }), c && (0, S.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, S.jsx)(ie, {
              label: u || "",
              size: "inline" + ("XL" === O ? "LG" : "MD"),
              hideTrack: !0,
              className: be({
                size: O
              })
            })
          })]
        })
      });

      function _e(e) {
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

      function xe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xe(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = _e(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xe(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ce(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Pe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Oe = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = je(je({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Pe(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ce(e.variantClassNames, e => Ce(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Se = Oe({
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
        ke = Oe({
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
        Re = Oe({
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
      const Ne = (0, G.forwardRef)(({
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
        const _ = (0, G.useRef)(null),
          x = (0, $.UP)(_, w),
          j = (0, Y.zQ)(),
          C = "string" == typeof a ? a : a?.[j] ?? a.default ?? "LG",
          {
            buttonProps: P
          } = (0, $.sL)((0, Z.mergeProps)(b, {
            isLoading: d,
            preventFocusOnPress: c
          }), _);
        W({
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
        const O = (0, Z.mergeProps)({
            className: ke({
              appearance: o,
              size: C,
              fullWidth: s
            }),
            "data-testid": e
          }, P),
          k = le[r],
          R = t ? Q.DX : "button";
        return (0, S.jsxs)(R, {
          ref: x,
          ...O,
          children: [k && (0, S.jsx)(k, {
            label: n || "",
            size: C,
            className: Se({
              size: C
            })
          }), (0, S.jsx)(Q.xV, {
            children: i
          }), d && (0, S.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, S.jsx)(ie, {
              label: l || "",
              size: C && "SM" !== C ? `inline${C}` : "inlineMD",
              hideTrack: !0,
              className: Re({
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

      function Ie(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ie(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = De(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ie(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ee(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ze = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Le = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Te(Te({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ze(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ee(e.variantClassNames, e => Ee(e, e => e.split(" ")[0]))
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
      const Me = (0, G.forwardRef)(({
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
          c = o ? Q.DX : d;
        return (0, S.jsx)(c, {
          ref: i,
          className: (0, de.clsx)(Le({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": s,
          ...a
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

      function Ae(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ae(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ve(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ae(Object(r)).forEach(function(t) {
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
      var Be = (e, t, r) => {
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
              n = qe(qe({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Be(l, n, e.defaultVariants) && (r += " " + c);
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
        He = "var(--foundry_9dxgbc0)",
        Ze = "var(--foundry_9dxgbc1)";
      const Ue = (0, G.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: s = "MD",
        ...a
      }, i) => {
        const d = (0, Y.zQ)(),
          l = "string" == typeof s ? s : s?.[d] ?? s.default ?? "MD",
          c = (0, Z.mergeProps)({
            className: Ke({
              size: l
            }),
            "data-testid": t,
            style: (0, K.DI)({
              [He]: n?.pulseColorBackground,
              [Ze]: n?.pulseColorForeground,
              [Xe]: n?.gradientColorBackground,
              [Ge]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, a),
          u = e ? Q.DX : "div";
        return (0, S.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, S.jsx)(Q.xV, {
            children: r
          }) : (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, S.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function We(e) {
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

      function $e(e, t) {
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
          t % 2 ? $e(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = We(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ye(e, t) {
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
        et = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qe(Qe({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Je(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ye(e.variantClassNames, e => Ye(e, e => e.split(" ")[0]))
            }
          }, t
        },
        tt = et({
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
      const rt = (0, G.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? Q.DX : "p",
          i = (0, Z.mergeProps)({
            className: tt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, S.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var nt = et({
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
      const ot = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const s = e ? Q.DX : "p",
            a = (0, Z.mergeProps)({
              className: nt({
                appearance: r
              })
            }, n);
          return (0, S.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        st = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Q.DX : "h1",
            s = (0, Z.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        });
      var at = et({
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
      const it = (0, G.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? Q.DX : `h${7===t?6:t}`,
          a = (0, Z.mergeProps)(n, {
            className: at({
              level: t
            })
          });
        return (0, S.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...a
        })
      });
      var dt = et({
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
      const lt = (0, G.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? Q.DX : "p",
          i = (0, Z.mergeProps)({
            className: dt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, S.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var ct = et({
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
      const ut = {
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
        ft = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const s = e ? Q.DX : ut[r] || "span",
            a = (0, Z.mergeProps)(n, {
              className: ct({
                semantic: r
              })
            });
          return (0, S.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        });
      var pt = r(35812);
      let ht = "undefined" != typeof document ? G.useLayoutEffect : G.useEffect,
        mt = e => e && !Array.isArray(e) && "object" == typeof e,
        vt = [],
        yt = {},
        gt = pt.default;
      const bt = (e, t = vt) => {
        let r = yt;
        mt(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : vt) : mt(t) && (r = t, t = "dependencies" in r ? r.dependencies : vt), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, s = (0, G.useRef)(!1), a = (0, G.useRef)(gt.context(() => {}, n)), i = (0, G.useRef)(e => a.current.add(null, e)), d = t && t.length && !o;
        return d && ht(() => (s.current = !0, () => a.current.revert()), vt), ht(() => {
          if (e && a.current.add(e, n), !d || !s.current) return () => a.current.revert()
        }, t), {
          context: a.current,
          contextSafe: i.current
        }
      };
      bt.register = e => {
        gt = e
      }, bt.headless = !0;
      const wt = {
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

      function _t(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function xt(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -_t(t - e, r - t, n) + t : e > r ? +_t(e - r, r - t, n) + r : e
      }

      function jt(e, t, r) {
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

      function Pt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ct(Object(r), !0).forEach(function(t) {
            jt(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ct(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const Ot = {
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

      function St(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const kt = ["enter", "leave"];
      const Rt = ["gotpointercapture", "lostpointercapture"];

      function Nt(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = Rt.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function Dt(e) {
        return "touches" in e
      }

      function It(e) {
        return Dt(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Tt(e) {
        return Dt(e) ? function(e) {
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

      function zt(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return Et(r, n)
      }

      function Lt(e) {
        const t = Tt(e);
        return Dt(e) ? t.identifier : t.pointerId
      }

      function Mt(e) {
        const t = Tt(e);
        return [t.clientX, t.clientY]
      }

      function Vt(e) {
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

      function qt() {}

      function Ft(...e) {
        return 0 === e.length ? qt : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function Bt(e, t) {
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
            wt.addTo(t._distance, e)
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
              return [xt(t, s, a, n), xt(r, i, d, o)]
            }(t._bounds, t.offset, w), t.delta = wt.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = wt.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            wt.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(Pt(Pt(Pt({}, t), e), {}, {
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
          super(...e), jt(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = wt.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = wt.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[It(e)] : r.axisThreshold;
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
        Ht = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => Pt(Pt({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return wt.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? wt.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Kt
          },
          threshold: e => wt.toVector(e, 0)
        },
        Zt = Pt(Pt({}, Ht), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Zt.bounds(e(t));
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
        Wt = "undefined" != typeof window && window.document && window.document.createElement;

      function $t() {
        return Wt && "ontouchstart" in window
      }
      const Qt = {
          isBrowser: Wt,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: $t(),
          touchscreen: $t() || Wt && window.navigator.maxTouchPoints > 1,
          pointer: Wt && "onpointerdown" in window,
          pointerLock: Wt && "exitPointerLock" in window.document
        },
        Yt = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Jt = Pt(Pt({}, Zt), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Qt.pointerLock, Qt.touch && r ? "touch" : this.pointerLock ? "mouse" : Qt.pointer && !o ? "pointer" : Qt.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Qt.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const s = wt.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, s
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(wt.toVector(e)),
              distance: this.transform(wt.toVector(t)),
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
          axisThreshold: e => e ? Pt(Pt({}, Yt), e) : Yt,
          keyboardDisplacement: (e = 10) => e
        });

      function er(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [s, a] = e._direction;
        (t < 0 && n > 0 && s < 0 || t > 0 && n < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && a < 0 || r > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const tr = Pt(Pt({}, Ht), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Qt.touch && Qt.gesture) return "gesture";
            if (Qt.touch && n) return "touch";
            if (Qt.touchscreen) {
              if (Qt.pointer) return "pointer";
              if (Qt.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = Bt(At(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              s = e => {
                const t = Bt(At(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), s()] : e => [o(e), s(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, wt.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        rr = Pt(Pt({}, Zt), {}, {
          mouseOnly: (e = !0) => e
        }),
        nr = Zt,
        or = Zt,
        sr = Pt(Pt({}, Zt), {}, {
          mouseOnly: (e = !0) => e
        }),
        ar = new Map,
        ir = new Map;

      function dr(e) {
        ar.set(e.key, e.engine), ir.set(e.key, e.resolver)
      }
      const lr = {
          key: "drag",
          engine: class extends Gt {
            constructor(...e) {
              super(...e), jt(this, "ingKey", "dragging")
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
                e._bounds = Zt.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Lt(e), r._pointerActive = !0, this.computeValues(Mt(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== It(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Lt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Mt(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = wt.sub(o, t._values), this.computeValues(o)), wt.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = Lt(e);
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
              const t = Ut[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, wt.addTo(r._movement, r._delta), this.compute(e), this.emit()
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
          resolver: Jt
        },
        cr = {
          key: "hover",
          engine: class extends Gt {
            constructor(...e) {
              super(...e), jt(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Mt(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Mt(e);
              t._movement = t._delta = wt.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: sr
        },
        ur = {
          key: "move",
          engine: class extends Gt {
            constructor(...e) {
              super(...e), jt(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Mt(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Mt(e),
                r = this.state;
              r._delta = wt.sub(t, r._values), wt.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: rr
        },
        fr = {
          key: "pinch",
          engine: class extends Xt {
            constructor(...e) {
              super(...e), jt(this, "ingKey", "pinching"), jt(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? wt.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = zt(e, t._touchIds);
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
              const t = zt(e, this.state._touchIds);
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
              t._movement = [e.scale - 1, e.rotation], t._delta = wt.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-Vt(e)[1] / 100 * t.offset[0], 0], wt.addTo(t._movement, t._delta), er(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: tr
        },
        pr = {
          key: "scroll",
          engine: class extends Gt {
            constructor(...e) {
              super(...e), jt(this, "ingKey", "scrolling")
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
              t._delta = wt.sub(r, t._values), wt.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: nr
        },
        hr = {
          key: "wheel",
          engine: class extends Gt {
            constructor(...e) {
              super(...e), jt(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Vt(e), wt.addTo(t._movement, t._delta), er(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: or
        };
      const mr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Qt.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        vr = ["target", "eventOptions", "window", "enabled", "transform"];

      function yr(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = yr(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class gr {
        constructor(e, t) {
          jt(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const s = this._listeners,
            a = function(e, t = "") {
              const r = Ot[e];
              return e + (r && r[t] || t)
            }(t, r),
            i = Pt(Pt({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class br {
        constructor() {
          jt(this, "_timeouts", new Map)
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
      class wr {
        constructor(e) {
          var t, r;
          jt(this, "gestures", new Set), jt(this, "_targetEventStore", new gr(this)), jt(this, "gestureEventStores", {}), jt(this, "gestureTimeoutStores", {}), jt(this, "handlers", {}), jt(this, "config", {}), jt(this, "pointerIds", new Set), jt(this, "touchIds", new Set), jt(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && _r(t, "drag"), r.wheel && _r(t, "wheel"), r.scroll && _r(t, "scroll"), r.move && _r(t, "move"), r.pinch && _r(t, "pinch"), r.hover && _r(t, "hover")
        }
        setEventIds(e) {
          return Dt(e) ? (this.touchIds = new Set(function(e) {
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
              }(n, vr);
            if (r.shared = yr({
                target: o,
                eventOptions: s,
                window: a,
                enabled: i,
                transform: d
              }, mr), t) {
              const e = ir.get(t);
              r[t] = yr(Pt({
                shared: r.shared
              }, l), e)
            } else
              for (const e in l) {
                const t = ir.get(e);
                t && (r[e] = yr(Pt({
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
                  s = xr(r, o.eventOptions, !!n);
                o.enabled && new(ar.get(t))(this, e, t).bind(s)
              }
              const o = xr(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](Pt(Pt({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = Ft(...r[e]);
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

      function _r(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new gr(e, t), e.gestureTimeoutStores[t] = new br
      }
      const xr = (e, t, r) => (n, o, s, a = {}, i = !1) => {
          var d, l;
          const c = null !== (d = a.capture) && void 0 !== d ? d : t.capture,
            u = null !== (l = a.passive) && void 0 !== l ? l : t.passive;
          let f = i ? n : function(e, t = "", r = !1) {
            const n = Ot[e],
              o = n && n[t] || t;
            return "on" + St(e) + St(o) + (function(e = !1, t) {
              return e && !kt.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && u && (f += "Passive"), e[f] = e[f] || [], e[f].push(s)
        },
        jr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Cr(e, t, r, n, o, s) {
        if (!e.has(r)) return;
        if (!ar.has(n)) return;
        const a = r + "Start",
          i = r + "End";
        o[n] = e => {
          let n;
          return e.first && a in t && t[a](e), r in t && (n = t[r](e)), e.last && i in t && t[i](e), n
        }, s[n] = s[n] || {}
      }

      function Pr(e, t = {}, r, n) {
        const o = G.useMemo(() => new wr(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), G.useEffect(o.effect.bind(o)), G.useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function Or(e, t) {
        const r = ([lr, fr, pr, hr, ur, cr].forEach(dr), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) jr.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), s = {};
            return Cr(o, r, "onDrag", "drag", s, t), Cr(o, r, "onWheel", "wheel", s, t), Cr(o, r, "onScroll", "scroll", s, t), Cr(o, r, "onPinch", "pinch", s, t), Cr(o, r, "onMove", "move", s, t), Cr(o, r, "onHover", "hover", s, t), {
              handlers: s,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return Pr(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const Sr = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), kr = ([e, t]) => ({
        x: e,
        y: t
      }), Rr = (e, t) => (e.x = t.x, e.y = t.y, e), Nr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Dr = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Ir = (e, t, r) => Math.min(Math.max(e, t), r);

      function Tr() {
        return Tr = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Tr.apply(null, arguments)
      }
      var Er = ["shift", "alt", "meta", "mod", "ctrl"],
        zr = {
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

      function Lr(e) {
        return (e && zr[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Mr(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Vr(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return Lr(e)
        });
        return Tr({}, {
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
        void 0 !== e.key && Fr([Lr(e.key), Lr(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && Br([Lr(e.key), Lr(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Ar.clear()
      });
      var Ar = new Set;

      function qr(e) {
        return Array.isArray(e)
      }

      function Fr(e) {
        var t = Array.isArray(e) ? e : [e];
        Ar.has("meta") && Ar.forEach(function(e) {
          return ! function(e) {
            return Er.includes(e)
          }(e) && Ar.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Ar.add(e.toLowerCase())
        })
      }

      function Br(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Ar.clear() : t.forEach(function(e) {
          return Ar.delete(e.toLowerCase())
        })
      }

      function Xr(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          s = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && s ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, qr(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Gr = (0, G.createContext)(void 0);

      function Kr(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, S.jsx)(Gr.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Hr(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Hr(e[n], t[n])
        }, !0) : e === t
      }
      var Zr = (0, G.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Ur = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, G.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            s = o[0],
            a = o[1],
            i = (0, G.useState)([]),
            d = i[0],
            l = i[1],
            c = (0, G.useCallback)(function(e) {
              a(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            u = (0, G.useCallback)(function(e) {
              a(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, G.useCallback)(function(e) {
              a(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            p = (0, G.useCallback)(function(e) {
              l(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            h = (0, G.useCallback)(function(e) {
              l(function(t) {
                return t.filter(function(t) {
                  return !Hr(t, e)
                })
              })
            }, []);
          return (0, S.jsx)(Zr.Provider, {
            value: {
              enabledScopes: s,
              hotkeys: d,
              enableScope: c,
              disableScope: u,
              toggleScope: f
            },
            children: (0, S.jsx)(Kr, {
              addHotkey: p,
              removeHotkey: h,
              children: n
            })
          })
        },
        Wr = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        $r = "undefined" != typeof window ? G.useLayoutEffect : G.useEffect;

      function Qr(e, t, r, n) {
        var o = (0, G.useState)(null),
          s = o[0],
          a = o[1],
          i = (0, G.useRef)(!1),
          d = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          l = qr(e) ? e.join(null == d ? void 0 : d.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          u = (0, G.useCallback)(t, null != c ? c : []),
          f = (0, G.useRef)(u);
        f.current = c ? u : t;
        var p = function(e) {
            var t = (0, G.useRef)(void 0);
            return Hr(t.current, e) || (t.current = e), t.current
          }(d),
          h = (0, G.useContext)(Zr).enabledScopes,
          m = (0, G.useContext)(Gr);
        return $r(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Xr(e, ["input", "textarea", "select"]) || Xr(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== s) {
                    var n = s.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== s && !s.contains(n.activeElement)) return void Wr(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && Mr(l, null == p ? void 0 : p.splitKey).forEach(function(r) {
                    var n, o = Vr(r, null == p ? void 0 : p.combinationKey);
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
                          y = Lr(f),
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
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (qr(n = c) ? n : n.split(o)).every(function(e) {
                          return Ar.has(e.trim().toLowerCase())
                        })) : !c)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && i.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void Wr(e);
                      f.current(e, o), t || (i.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (Fr(Lr(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Br(Lr(e.code)), i.current = !1, null != p && p.keyup && r(e, !0))
              },
              a = s || (null == d ? void 0 : d.document) || document;
            return a.addEventListener("keyup", o, null == d ? void 0 : d.eventListenerOptions), a.addEventListener("keydown", n, null == d ? void 0 : d.eventListenerOptions), m && Mr(l, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return m.addHotkey(Vr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                a.removeEventListener("keyup", o, null == d ? void 0 : d.eventListenerOptions), a.removeEventListener("keydown", n, null == d ? void 0 : d.eventListenerOptions), m && Mr(l, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return m.removeHotkey(Vr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [s, l, p, h]), a
      }

      function Yr(e) {
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

      function Jr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function en(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Jr(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Yr(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function tn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var rn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        nn = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = en(en({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) rn(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tn(e.variantClassNames, e => tn(e, e => e.split(" ")[0]))
            }
          }, t
        },
        on = nn({
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
        sn = nn({
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
      pt.gsap.registerPlugin(bt);
      const an = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        dn = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        ln = (0, K.Tm)("var(--foundry_1a74xwb0)");
      var cn = r(46344),
        un = r(14376),
        fn = r(68925);
      const pn = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, s] = (0, G.useState)(null);
          return (0, G.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              s(e.default)
            })
          }, [r]), o ? (0, S.jsx)(cn.A, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        hn = {
          "en-US": r.e(6984).then(r.bind(r, 56984)),
          "de-DE": r.e(7783).then(r.bind(r, 97783)),
          "es-ES": r.e(1205).then(r.bind(r, 41205)),
          "es-MX": r.e(1644).then(r.bind(r, 51644)),
          "fr-FR": r.e(1869).then(r.bind(r, 51869)),
          "it-IT": r.e(6543).then(r.bind(r, 36543)),
          "ja-JP": r.e(4592).then(r.bind(r, 34592)),
          "ko-KR": r.e(9046).then(r.bind(r, 59046)),
          "pl-PL": r.e(7465).then(r.bind(r, 97465)),
          "pt-BR": r.e(4693).then(r.bind(r, 24693)),
          "ru-RU": r.e(1039).then(r.bind(r, 71039)),
          "zh-CN": r.e(6898).then(r.bind(r, 26898)),
          "zh-TW": r.e(9538).then(r.bind(r, 9538))
        };
      class mn {
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
          return r ? t : Ir(t, this.max[e], this.min[e])
        }
      }
      class vn {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Dr(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return Dr(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Dr(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class yn {
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
      class gn {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Rr(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Rr(this.prevTap, {
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
      class bn {
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
          e.src = this.thumbnail.currentSrc ?? "", await Sr(e)
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
      class wn {
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
      class _n extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class xn extends yn {
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
          if (!this.dispatch(e, new _n(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class jn {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = kr(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Rr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = kr(e);
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
            s = Rr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let a = Rr({
            x: 0,
            y: 0
          }, s);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Rr(this.startPan, s)), n && (a = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), a = {
            x: this.slide.bounds.correctPan("x", a.x),
            y: this.slide.bounds.correctPan("y", a.y)
          }, this.slide.setZoomLevel(t, !1), d = s, ((i = a).x !== d.x || i.y !== d.y || n || o) && (Rr(this.slide.pan, a), this.slide.setZoomLevel(r))
        }
      }
      class Cn {
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
      class Pn extends yn {
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
          super(), this.width = e, this.height = t, this.opener = new bn({
            slide: this
          }), this.bounds = new mn({
            slide: this
          }), this.dragHandler = new gn({
            options: s,
            slide: this
          }), this.scrollWheel = new wn({
            slide: this
          }), this.zoomHandler = new jn({
            slide: this
          }), this.zoomLevels = new vn({
            options: r,
            slide: this
          }), this.tapHandler = new xn({
            options: n,
            slide: this
          }), this.panAreaSize = new Cn({
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
          e = Dr(e), r || (e = Ir(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Nr(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Nr(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Rr(this.pan, this.bounds.center)
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
      var On = r(56550);
      const Sn = (0, un.YK)({
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
      var kn = "foundry_bc732x1";
      const Rn = (0, G.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Qr(e, e => r?.(e), [r]), (0, S.jsx)(rt, {
        size: "XS",
        className: (0, de.clsx)("foundry_bc732x0", {
          [kn]: t
        }),
        asChild: !0,
        children: (0, S.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Nn = Object.defineProperty,
        Dn = (e, t) => {
          let r = {};
          for (var n in e) Nn(r, n, {
            get: e[n],
            enumerable: !0
          });
          return t || Nn(r, Symbol.toStringTag, {
            value: "Module"
          }), r
        };
      let In = Un();
      const Tn = e => Gn(e, In);
      let En = Un();
      Tn.write = e => Gn(e, En);
      let zn = Un();
      Tn.onStart = e => Gn(e, zn);
      let Ln = Un();
      Tn.onFrame = e => Gn(e, Ln);
      let Mn = Un();
      Tn.onFinish = e => Gn(e, Mn);
      let Vn = [];
      Tn.setTimeout = (e, t) => {
        const r = Tn.now() + t,
          n = () => {
            const e = Vn.findIndex(e => e.cancel == n);
            ~e && Vn.splice(e, 1), Bn -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Vn.splice(An(r), 0, o), Bn += 1, Kn(), o
      };
      const An = e => ~(~Vn.findIndex(t => t.time > e) || ~Vn.length);
      Tn.cancel = e => {
        zn.delete(e), Ln.delete(e), Mn.delete(e), In.delete(e), En.delete(e)
      }, Tn.sync = e => {
        Xn = !0, Tn.batchedUpdates(e), Xn = !1
      }, Tn.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Tn.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          zn.delete(r), t = null
        }, n
      };
      let qn = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Tn.use = e => qn = e, Tn.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Tn.batchedUpdates = e => e(), Tn.catch = console.error, Tn.frameLoop = "always", Tn.onDemand = () => {}, Tn.advance = () => {
        "demand" !== Tn.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Zn()
      };
      let Fn = -1,
        Bn = 0,
        Xn = !1;

      function Gn(e, t) {
        Xn ? (t.delete(e), e(0)) : (t.add(e), Kn(), "demand" === Tn.frameLoop && Tn.onDemand())
      }

      function Kn() {
        Fn < 0 && (Fn = 0, "demand" !== Tn.frameLoop && qn(Hn))
      }

      function Hn() {
        ~Fn && (qn(Hn), Tn.batchedUpdates(Zn))
      }

      function Zn() {
        const e = Fn;
        Fn = Tn.now();
        const t = An(Fn);
        t && (Wn(Vn.splice(0, t), e => e.handler()), Bn -= t), Bn ? (zn.flush(), In.flush(e ? Math.min(64, Fn - e) : 16.667), Ln.flush(), En.flush(), Mn.flush(), "demand" === Tn.frameLoop && Bn > 0 && Tn.onDemand()) : Fn = -1
      }

      function Un() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Bn += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Bn -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Bn -= t.size, Wn(t, t => t(r) && e.add(t)), Bn += e.size, t = e)
          }
        }
      }

      function Wn(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Tn.catch(e)
          }
        })
      }

      function $n() {}
      const Qn = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Yn(e, t) {
        if (Qn.arr(e)) {
          if (!Qn.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      const Jn = (e, t) => e.forEach(t);

      function eo(e, t, r) {
        if (Qn.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      const to = e => Qn.und(e) ? [] : Qn.arr(e) ? e : [e];

      function ro(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Jn(r, t)
        }
      }
      const no = (e, ...t) => ro(e, e => e(...t)),
        oo = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
      var so = Dn({
        assign: () => fo,
        colors: () => lo,
        createStringInterpolator: () => ao,
        skipAnimation: () => co,
        to: () => io,
        willAdvance: () => uo
      });
      let ao, io, lo = null,
        co = !1,
        uo = $n;
      const fo = e => {
          e.to && (io = e.to), e.now && (Tn.now = e.now), void 0 !== e.colors && (lo = e.colors), null != e.skipAnimation && (co = e.skipAnimation), e.createStringInterpolator && (ao = e.createStringInterpolator), e.requestAnimationFrame && Tn.use(e.requestAnimationFrame), e.batchedUpdates && (Tn.batchedUpdates = e.batchedUpdates), e.willAdvance && (uo = e.willAdvance), e.frameLoop && (Tn.frameLoop = e.frameLoop), e.onDemand && (Tn.onDemand = e.onDemand)
        },
        po = new Set;
      let ho = [],
        mo = [],
        vo = 0;
      const yo = {
        get idle() {
          return !po.size && !ho.length
        },
        start(e) {
          vo > e.priority ? (po.add(e), Tn.onStart(go)) : (bo(e), Tn(_o))
        },
        advance: _o,
        sort(e) {
          if (vo) Tn.onFrame(() => yo.sort(e));
          else {
            const t = ho.indexOf(e);
            ~t && (ho.splice(t, 1), wo(e))
          }
        },
        clear() {
          ho = [], po.clear()
        }
      };

      function go() {
        po.forEach(bo), po.clear(), Tn(_o)
      }

      function bo(e) {
        ho.includes(e) || wo(e)
      }

      function wo(e) {
        ho.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(ho), 0, e)
      }

      function _o(e) {
        const t = mo;
        for (let r = 0; r < ho.length; r++) {
          const n = ho[r];
          vo = n.priority, n.idle || (uo(n), n.advance(e), n.idle || t.push(n))
        }
        return vo = 0, mo = ho, mo.length = 0, ho = t, ho.length > 0
      }
      const xo = "[-+]?\\d*\\.?\\d+",
        jo = "[-+]?\\d*\\.?\\d+%";

      function Co(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      const Po = new RegExp("rgb" + Co(xo, xo, xo)),
        Oo = new RegExp("rgba" + Co(xo, xo, xo, xo)),
        So = new RegExp("hsl" + Co(xo, jo, jo)),
        ko = new RegExp("hsla" + Co(xo, jo, jo, xo)),
        Ro = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        No = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Do = /^#([0-9a-fA-F]{6})$/,
        Io = /^#([0-9a-fA-F]{8})$/;

      function To(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Eo(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          s = To(o, n, e + 1 / 3),
          a = To(o, n, e),
          i = To(o, n, e - 1 / 3);
        return Math.round(255 * s) << 24 | Math.round(255 * a) << 16 | Math.round(255 * i) << 8
      }

      function zo(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Lo(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Mo(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Vo(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Ao(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Do.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : lo && void 0 !== lo[e] ? lo[e] : (t = Po.exec(e)) ? (zo(t[1]) << 24 | zo(t[2]) << 16 | zo(t[3]) << 8 | 255) >>> 0 : (t = Oo.exec(e)) ? (zo(t[1]) << 24 | zo(t[2]) << 16 | zo(t[3]) << 8 | Mo(t[4])) >>> 0 : (t = Ro.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Io.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = No.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = So.exec(e)) ? (255 | Eo(Lo(t[1]), Vo(t[2]), Vo(t[3]))) >>> 0 : (t = ko.exec(e)) ? (Eo(Lo(t[1]), Vo(t[2]), Vo(t[3])) | Mo(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      const qo = (e, t, r) => {
          if (Qn.fun(e)) return e;
          if (Qn.arr(e)) return qo({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Qn.str(e.output[0])) return ao(e);
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
        Fo = 1.70158,
        Bo = 1.525 * Fo,
        Xo = 2.70158,
        Go = 2 * Math.PI / 3,
        Ko = 2 * Math.PI / 4.5,
        Ho = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Zo = {
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
          easeInBack: e => Xo * e * e * e - Fo * e * e,
          easeOutBack: e => 1 + Xo * Math.pow(e - 1, 3) + Fo * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Bo) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + Bo) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Go),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Go) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ko) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ko) / 2 + 1,
          easeInBounce: e => 1 - Ho(1 - e),
          easeOutBounce: Ho,
          easeInOutBounce: e => e < .5 ? (1 - Ho(1 - 2 * e)) / 2 : (1 + Ho(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Uo = Symbol.for("FluidValue.get"),
        Wo = Symbol.for("FluidValue.observers"),
        $o = e => Boolean(e && e[Uo]),
        Qo = e => e && e[Uo] ? e[Uo]() : e,
        Yo = e => e[Wo] || null;

      function Jo(e, t) {
        const r = e[Wo];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var es = class {
        constructor(e) {
          if (!e && !(e = this.get)) throw Error("Unknown getter");
          ts(this, e)
        }
      };
      const ts = (e, t) => os(e, Uo, t);

      function rs(e, t) {
        if (e[Uo]) {
          let r = e[Wo];
          r || os(e, Wo, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function ns(e, t) {
        const r = e[Wo];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Wo] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      const os = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        ss = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        as = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        is = new RegExp(`(${ss.source})(%|[a-z]+)`, "i"),
        ds = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        ls = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        cs = e => {
          const [t, r] = us(e);
          if (!t || oo()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && ls.test(r) ? cs(r) : r || e
        },
        us = e => {
          const t = ls.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        };
      let fs;
      const ps = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        hs = e => e.match(ss) ?? [],
        ms = e => {
          fs || (fs = lo ? new RegExp(`(${Object.keys(lo).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => Qo(e).replace(ls, cs).replace(as, Ao).replace(fs, Ao)),
            r = t.map(e => hs(e).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })).map(t => qo({
              ...e,
              output: t
            })),
            o = e.range || [0, 1],
            s = t.map(e => hs(e)),
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
            const s = !is.test(t[0]) && t.find(e => is.test(e))?.replace(ss, "");
            let i = 0;
            return t[0].replace(ss, () => {
              const t = i++,
                r = n[t](e),
                o = a[t];
              return `${null!=o?r.toFixed(o):r}${s||""}`
            }).replace(ds, ps)
          }
        },
        vs = "react-spring: ",
        ys = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${vs}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        gs = ys(console.warn),
        bs = ys(console.warn);

      function ws(e) {
        return Qn.str(e) && ("#" == e[0] || /\d/.test(e) || !oo() && ls.test(e) || e in (lo || {}))
      }
      const _s = oo() ? G.useEffect : G.useLayoutEffect;

      function xs() {
        const e = (0, G.useState)()[1],
          t = (() => {
            const e = (0, G.useRef)(!1);
            return _s(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      const js = e => (0, G.useEffect)(e, Cs),
        Cs = [],
        Ps = Symbol.for("Animated:node"),
        Os = e => e && e[Ps],
        Ss = (e, t) => {
          return r = e, n = Ps, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        ks = e => e && e[Ps] && e[Ps].getPayload();
      var Rs = class {
          constructor() {
            Ss(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Ns = class e extends Rs {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Qn.num(this._value) && (this.lastPosition = this._value)
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
            return Qn.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Qn.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Ds = class e extends Ns {
          constructor(e) {
            super(0), this._string = null, this._toString = qo({
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
            if (Qn.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = qo({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        };
      const Is = {
        dependencies: null
      };
      var Ts = class extends Rs {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return eo(this.source, (r, n) => {
              var o;
              (o = r) && o[Ps] === o ? t[n] = r.getValue(e) : $o(r) ? t[n] = Qo(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Jn(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return eo(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Is.dependencies && $o(e) && Is.dependencies.add(e);
            const t = ks(e);
            t && Jn(t, e => this.add(e))
          }
        },
        Es = class e extends Ts {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(zs)), !0)
          }
        };

      function zs(e) {
        return (ws(e) ? Ds : Ns).create(e)
      }

      function Ls(e) {
        const t = Os(e);
        return t ? t.constructor : Qn.arr(e) ? Es : ws(e) ? Ds : Ns
      }
      const Ms = (e, t) => {
        const r = !Qn.fun(e) || e.prototype && e.prototype.isReactComponent;
        return (0, G.forwardRef)((n, o) => {
          const s = (0, G.useRef)(null),
            a = r && (0, G.useCallback)(e => {
              s.current = function(e, t) {
                return e && (Qn.fun(e) ? e(t) : e.current = t), t
              }(o, e)
            }, [o]),
            [i, d] = function(e, t) {
              const r = new Set;
              return Is.dependencies = r, e.style && (e = {
                ...e,
                style: t.createAnimatedStyle(e.style)
              }), e = new Ts(e), Is.dependencies = null, [e, r]
            }(n, t),
            l = xs(),
            c = () => {
              const e = s.current;
              r && !e || !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && l()
            },
            u = new Vs(c, d),
            f = (0, G.useRef)(void 0);
          _s(() => (f.current = u, Jn(d, e => rs(e, u)), () => {
            f.current && (Jn(f.current.deps, e => ns(e, f.current)), Tn.cancel(f.current.update))
          })), (0, G.useEffect)(c, []), js(() => () => {
            const e = f.current;
            Jn(e.deps, t => ns(t, e))
          });
          const p = t.getComponentProps(i.getValue());
          return G.createElement(e, {
            ...p,
            ref: a
          })
        })
      };
      var Vs = class {
        constructor(e, t) {
          this.update = e, this.deps = t
        }
        eventObserved(e) {
          "change" == e.type && Tn.write(this.update)
        }
      };
      const As = Symbol.for("AnimatedComponent"),
        qs = new WeakMap,
        Fs = e => Qn.str(e) ? e : e && Qn.str(e.displayName) ? e.displayName : Qn.fun(e) && e.name || null;

      function Bs(e, ...t) {
        return Qn.fun(e) ? e(...t) : e
      }
      const Xs = (e, t) => !0 === e || !!(t && e && (Qn.fun(e) ? e(t) : to(e).includes(t))),
        Gs = (e, t) => Qn.obj(e) ? t && e[t] : e,
        Ks = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Hs = e => e,
        Zs = (e, t = Hs) => {
          let r = Us;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Qn.und(r) || (n[o] = r)
          }
          return n
        },
        Us = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Ws = {
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

      function $s(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (eo(e, (e, n) => {
              Ws[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return eo(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function Qs(e) {
        const t = Qo(e);
        return Qn.arr(t) ? t.map(Qs) : ws(t) ? so.createStringInterpolator({
          range: [0, 1],
          output: [t, t]
        })(1) : t
      }

      function Ys(e) {
        return Qn.fun(e) || Qn.arr(e) && Qn.obj(e[0])
      }

      function Js(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      const ea = {
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
        ta = {
          ...ea.default,
          mass: 1,
          damping: 1,
          easing: Zo.linear,
          clamp: !1
        };
      var ra = class {
        constructor() {
          this.velocity = 0, Object.assign(this, ta)
        }
      };

      function na(e, t) {
        if (Qn.und(t.decay)) {
          const r = !Qn.und(t.tension) || !Qn.und(t.friction);
          !r && Qn.und(t.frequency) && Qn.und(t.damping) && Qn.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      const oa = [];
      var sa = class {
        constructor() {
          this.changed = !1, this.values = oa, this.toValues = null, this.fromValues = oa, this.config = new ra, this.immediate = !1
        }
      };

      function aa(e, {
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
            Qn.und(r.pause) || (o.paused = Xs(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Xs(e, t)), d = Bs(r.delay || 0, t), e ? (o.resumeQueue.add(f), s.pause()) : (s.resume(), f())
          }

          function u() {
            o.resumeQueue.add(f), o.timeouts.delete(l), l.cancel(), d = l.time - Tn.now()
          }

          function f() {
            d > 0 && !so.skipAnimation ? (o.delayed = !0, l = Tn.setTimeout(p, d), o.pauseQueue.add(u), o.timeouts.add(l)) : p()
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
      const ia = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? ca(e.get()) : t.every(e => e.noop) ? da(e.get()) : la(e.get(), t.every(e => e.finished)),
        da = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        la = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        ca = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function ua(e, t, r, n) {
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
          const l = Zs(t, (e, t) => "onRest" === t ? void 0 : e);
          let c, u;
          const f = new Promise((e, t) => (c = e, u = t)),
            p = e => {
              const t = o <= (r.cancelId || 0) && ca(n) || o !== r.asyncId && la(n, !1);
              if (t) throw e.result = t, u(e), e
            };
          let h = 0;
          const m = (e, t) => {
            const s = new pa,
              a = new ha;
            return (async () => {
              p(s);
              const i = Qn.obj(e) ? {
                ...e
              } : {
                ...t,
                to: e
              };
              if (i.parentId = o, eo(l, (e, t) => {
                  Qn.und(i[t]) && (i[t] = e)
                }), so.skipAnimation) {
                if (++h > 1024) throw fa(r), a.result = la(n, !1), u(a), a;
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
            t = Qn.arr(e) ? (async e => {
              for (const t of e) await m(t)
            })(e) : Promise.resolve(e(m, n.stop.bind(n))), await Promise.all([t.then(c), f]), v = la(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof pa) v = e.result;
            else {
              if (!(e instanceof ha)) throw e;
              v = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = s, r.asyncTo = s ? i : void 0, r.promise = s ? d : void 0)
          }
          return Qn.fun(a) && Tn.batchedUpdates(() => {
            a(v, n, n.item)
          }), v
        })() : d
      }

      function fa(e, t) {
        ro(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var pa = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        ha = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        };
      const ma = e => e instanceof ya;
      let va = 1;
      var ya = class extends es {
        constructor(...e) {
          super(...e), this.id = va++, this._priority = 0
        }
        get priority() {
          return this._priority
        }
        set priority(e) {
          this._priority != e && (this._priority = e, this._onPriorityChange(e))
        }
        get() {
          const e = Os(this);
          return e && e.getValue()
        }
        to(...e) {
          return so.to(this, e)
        }
        interpolate(...e) {
          return gs(`${vs}The "interpolate" function is deprecated in v9 (use "to" instead)`), so.to(this, e)
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
          Jo(this, {
            type: "change",
            parent: this,
            value: e,
            idle: t
          })
        }
        _onPriorityChange(e) {
          this.idle || yo.sort(this), Jo(this, {
            type: "priority",
            parent: this,
            priority: e
          })
        }
      };
      const ga = Symbol.for("SpringPhase"),
        ba = e => (1 & e[ga]) > 0,
        wa = e => (2 & e[ga]) > 0,
        _a = e => (4 & e[ga]) > 0,
        xa = (e, t) => t ? e[ga] |= 3 : e[ga] &= -3,
        ja = (e, t) => t ? e[ga] |= 4 : e[ga] &= -5;
      var Ca = class extends ya {
        constructor(e, t) {
          if (super(), this.animation = new sa, this.defaultProps = {}, this._state = {
              paused: !1,
              delayed: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Qn.und(e) || !Qn.und(t)) {
            const r = Qn.obj(e) ? {
              ...e
            } : {
              ...t,
              from: e
            };
            Qn.und(r.default) && (r.default = !0), this.start(r)
          }
        }
        get idle() {
          return !(wa(this) || this._state.asyncTo) || _a(this)
        }
        get goal() {
          return Qo(this.animation.to)
        }
        get velocity() {
          const e = Os(this);
          return e instanceof Ns ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
        }
        get hasAnimated() {
          return ba(this)
        }
        get isAnimating() {
          return wa(this)
        }
        get isPaused() {
          return _a(this)
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
          } = n, a = ks(n.to);
          !a && $o(n.to) && (o = to(Qo(n.to))), n.values.forEach((i, d) => {
            if (i.done) return;
            const l = i.constructor == Ds ? 1 : a ? a[d].lastPosition : o[d];
            let c = n.immediate,
              u = l;
            if (!c) {
              if (u = i.lastPosition, s.tension <= 0) return void(i.done = !0);
              let t = i.elapsedTime += e;
              const r = n.fromValues[d],
                o = null != i.v0 ? i.v0 : i.v0 = Qn.arr(s.velocity) ? s.velocity[d] : s.velocity;
              let a;
              const f = s.precision || (r == l ? .005 : Math.max(Math.max(Math.abs(l), Math.abs(r), 1) * Number.EPSILON, Math.min(1, .001 * Math.abs(l - r))));
              if (Qn.und(s.duration))
                if (s.decay) {
                  const e = !0 === s.decay ? .998 : s.decay,
                    n = Math.exp(-(1 - e) * t);
                  u = r + o / (1 - e) * (1 - n), c = Math.abs(i.lastPosition - u) <= f, a = o * n
                } else {
                  a = null == i.lastVelocity ? o : i.lastVelocity;
                  const t = s.restVelocity || f / 10,
                    n = s.clamp ? 0 : s.bounce,
                    d = !Qn.und(n),
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
          const i = Os(this),
            d = i.getValue();
          if (t) {
            const e = Qo(n.to);
            d === e && !r || s.decay ? r && s.decay && this._onChange(d) : (i.setValue(e), this._onChange(e)), this._stop()
          } else r && this._onChange(d)
        }
        set(e) {
          return Tn.batchedUpdates(() => {
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
          if (wa(this)) {
            const {
              to: e,
              config: t
            } = this.animation;
            Tn.batchedUpdates(() => {
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
          return Qn.und(e) ? (r = this.queue || [], this.queue = []) : r = [Qn.obj(e) ? e : {
            ...t,
            to: e
          }], Promise.all(r.map(e => this._update(e))).then(e => ia(this, e))
        }
        stop(e) {
          const {
            to: t
          } = this.animation;
          return Qn.und(t) || this._focus(this.get()), fa(this._state, e && this._lastCallId), Tn.batchedUpdates(() => this._stop(t, e)), this
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
          r = Qn.obj(r) ? r[t] : r, (null == r || Ys(r)) && (r = void 0), n = Qn.obj(n) ? n[t] : n, null == n && (n = void 0);
          const o = {
            to: r,
            from: n
          };
          return ba(this) || (e.reverse && ([r, n] = [n, r]), n = Qo(n), Qn.und(n) ? Os(this) || this._set(r) : this._set(n)), o
        }
        _update({
          ...e
        }, t) {
          const {
            key: r,
            defaultProps: n
          } = this;
          e.default && Object.assign(n, Zs(e, (e, t) => /^on/.test(t) ? Gs(e, r) : e)), Na(this, e, "onProps"), Da(this, "onProps", e, this);
          const o = this._prepareNode(e);
          if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
          const s = this._state;
          return aa(++this._lastCallId, {
            key: r,
            props: e,
            defaultProps: n,
            state: s,
            actions: {
              pause: () => {
                _a(this) || (ja(this, !0), no(s.pauseQueue), Da(this, "onPause", la(this, Pa(this, this.animation.to)), this))
              },
              resume: () => {
                _a(this) && (ja(this, !1), wa(this) && this._resume(), no(s.resumeQueue), Da(this, "onResume", la(this, Pa(this, this.animation.to)), this))
              },
              start: this._merge.bind(this, o)
            }
          }).then(r => {
            if (e.loop && r.finished && (!t || !r.noop)) {
              const t = Oa(e);
              if (t) return this._update(t, !0)
            }
            return r
          })
        }
        _merge(e, t, r) {
          if (t.cancel) return this.stop(!0), r(ca(this));
          const n = !Qn.und(e.to),
            o = !Qn.und(e.from);
          if (n || o) {
            if (!(t.callId > this._lastToId)) return r(ca(this));
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
          !o || n || t.default && !Qn.und(c) || (c = u), t.reverse && ([c, u] = [u, c]);
          const f = !Yn(u, l);
          f && (i.from = u), u = Qo(u);
          const p = !Yn(c, d);
          p && this._focus(c);
          const h = Ys(t.to),
            {
              config: m
            } = i,
            {
              decay: v,
              velocity: y
            } = m;
          !n && !o || m.decay || (m.velocity = 0), t.config && !h && function(e, t, r) {
            r && (na(r = {
              ...r
            }, t), t = {
              ...r,
              ...t
            }), na(e, t), Object.assign(e, t);
            for (const t in ta) null == e[t] && (e[t] = ta[t]);
            let {
              frequency: n,
              damping: o
            } = e;
            const {
              mass: s
            } = e;
            Qn.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * s, e.friction = 4 * Math.PI * o * s / n)
          }(m, Bs(t.config, s), t.config !== a.config ? Bs(a.config, s) : void 0);
          let g = Os(this);
          if (!g || Qn.und(c)) return r(la(this, !0));
          const b = Qn.und(t.reset) ? o && !t.default : !Qn.und(u) && Xs(t.reset, s),
            w = b ? u : this.get(),
            _ = Qs(c),
            x = Qn.num(_) || Qn.arr(_) || ws(_),
            j = !h && (!x || Xs(a.immediate || t.immediate, s));
          if (p) {
            const e = Ls(c);
            if (e !== g.constructor) {
              if (!j) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
              g = this._set(_)
            }
          }
          const C = g.constructor;
          let P = $o(c),
            O = !1;
          if (!P) {
            const e = b || !ba(this) && f;
            (p || e) && (O = Yn(Qs(w), _), P = !O), (Yn(i.immediate, j) || j) && Yn(m.decay, v) && Yn(m.velocity, y) || (P = !0)
          }
          if (O && wa(this) && (i.changed && !b ? P = !0 : P || this._stop(d)), !h && ((P || $o(d)) && (i.values = g.getPayload(), i.toValues = $o(c) ? null : C == Ds ? [1] : to(_)), i.immediate != j && (i.immediate = j, j || b || this._set(d)), P)) {
            const {
              onRest: e
            } = i;
            Jn(Ra, e => Na(this, t, e));
            const n = la(this, Pa(this, d));
            no(this._pendingCalls, n), this._pendingCalls.add(r), i.changed && Tn.batchedUpdates(() => {
              i.changed = !b, e?.(n, this), b ? Bs(a.onRest, n) : i.onStart?.(n, this)
            })
          }
          b && this._set(w), h ? r(ua(t.to, t, this._state, this)) : P ? this._start() : wa(this) && !p ? this._pendingCalls.add(r) : r(da(w))
        }
        _focus(e) {
          const t = this.animation;
          e !== t.to && (Yo(this) && this._detach(), t.to = e, Yo(this) && this._attach())
        }
        _attach() {
          let e = 0;
          const {
            to: t
          } = this.animation;
          $o(t) && (rs(t, this), ma(t) && (e = t.priority + 1)), this.priority = e
        }
        _detach() {
          const {
            to: e
          } = this.animation;
          $o(e) && ns(e, this)
        }
        _set(e, t = !0) {
          const r = Qo(e);
          if (!Qn.und(r)) {
            const e = Os(this);
            if (!e || !Yn(r, e.getValue())) {
              const n = Ls(r);
              e && e.constructor == n ? e.setValue(r) : Ss(this, n.create(r)), e && Tn.batchedUpdates(() => {
                this._onChange(r, t)
              })
            }
          }
          return Os(this)
        }
        _onStart() {
          const e = this.animation;
          e.changed || (e.changed = !0, Da(this, "onStart", la(this, Pa(this, e.to)), this))
        }
        _onChange(e, t) {
          const r = la(e, !1);
          t || (this._onStart(), Bs(this.animation.onChange, r, this)), Bs(this.defaultProps.onChange, r, this), super._onChange(e, t)
        }
        _start() {
          const e = this.animation;
          Os(this).reset(Qo(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), wa(this) || (xa(this, !0), _a(this) || this._resume())
        }
        _resume() {
          so.skipAnimation ? this.finish() : yo.start(this)
        }
        _stop(e, t) {
          if (wa(this)) {
            xa(this, !1);
            const r = this.animation;
            Jn(r.values, e => {
              e.done = !0
            }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Jo(this, {
              type: "idle",
              parent: this
            });
            const n = t ? ca(this.get()) : la(this.get(), Pa(this, e ?? r.to));
            no(this._pendingCalls, n), r.changed = !1, Da(this, "onRest", n, this)
          }
        }
      };

      function Pa(e, t) {
        const r = Qs(t);
        return Yn(Qs(e.get()), r)
      }

      function Oa(e, t = e.loop, r = e.to) {
        const n = Bs(t);
        if (n) {
          const o = !0 !== n && $s(n),
            s = (o || e).reverse,
            a = !o || o.reset;
          return Sa({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !s || Ys(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function Sa(e) {
        const {
          to: t,
          from: r
        } = e = $s(e), n = new Set;
        return Qn.obj(t) && ka(t, n), Qn.obj(r) && ka(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function ka(e, t) {
        eo(e, (e, r) => null != e && t.add(r))
      }
      const Ra = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Na(e, t, r) {
        e.animation[r] = t[r] !== Ks(t, r) ? Gs(t[r], e.key) : void 0
      }

      function Da(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      const Ia = ["onStart", "onChange", "onRest"];
      let Ta = 1;
      var Ea = class {
        constructor(e, t) {
          this.id = Ta++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._lastLoopId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            Qn.und(r) || this.springs[t].set(r)
          }
        }
        update(e) {
          return e && this.queue.push(Sa(e)), this
        }
        start(e) {
          let {
            queue: t
          } = this;
          return e ? t = to(e).map(Sa) : this.queue = [], this._flush ? this._flush(this, t) : (Aa(this, t), function(e, t) {
            return Promise.all(t.map(t => za(e, t))).then(t => ia(e, t))
          }(this, t))
        }
        stop(e, t) {
          if (e !== !!e && (t = e), t) {
            const r = this.springs;
            Jn(to(t), t => r[t].stop(!!e))
          } else fa(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
          return this
        }
        pause(e) {
          if (Qn.und(e)) this.start({
            pause: !0
          });
          else {
            const t = this.springs;
            Jn(to(e), e => t[e].pause())
          }
          return this
        }
        resume(e) {
          if (Qn.und(e)) this.start({
            pause: !1
          });
          else {
            const t = this.springs;
            Jn(to(e), e => t[e].resume())
          }
          return this
        }
        each(e) {
          eo(this.springs, e)
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
          (n && !this._started || o && !this._started) && (this._started = !0, ro(e, ([e, t]) => {
            t.value = this.get(), e(t, this, this._item)
          }));
          const s = !n && this._started,
            a = o || s && r.size ? this.get() : null;
          o && t.size && ro(t, ([e, t]) => {
            t.value = a, e(t, this, this._item)
          }), s && (this._started = !1, ro(r, ([e, t]) => {
            t.value = a, e(t, this, this._item)
          }))
        }
        eventObserved(e) {
          if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
          else {
            if ("idle" != e.type) return;
            this._active.delete(e.parent)
          }
          Tn.onFrame(this._onFrame)
        }
      };
      async function za(e, t, r) {
        const {
          keys: n,
          to: o,
          from: s,
          loop: a,
          onRest: i,
          onResolve: d
        } = t, l = Qn.obj(t.default) && t.default;
        a && (t.loop = !1);
        const c = t,
          u = r || c.parentId || !("loop" in t) ? r ? c.loopId : e._lastLoopId : ++e._lastLoopId;
        !1 === o && (t.to = null), !1 === s && (t.from = null);
        const f = Qn.arr(o) || Qn.fun(o) ? o : void 0;
        f ? (t.to = void 0, t.onRest = void 0, l && (l.onRest = void 0)) : Jn(Ia, r => {
          const n = t[r];
          if (Qn.fun(n)) {
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
        t.pause === !p.paused ? (p.paused = t.pause, no(t.pause ? p.pauseQueue : p.resumeQueue)) : p.paused && (t.pause = !0);
        const h = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          m = !0 === t.cancel || !0 === Ks(t, "cancel");
        (f || m && p.asyncId) && h.push(aa(++e._lastAsyncId, {
          props: t,
          state: p,
          actions: {
            pause: $n,
            resume: $n,
            start(t, r) {
              m ? (fa(p, e._lastAsyncId), r(ca(e))) : (t.onRest = i, r(ua(f, t, p, e)))
            }
          }
        })), p.paused && await new Promise(e => {
          p.resumeQueue.add(e)
        });
        const v = ia(e, await Promise.all(h));
        if (a && v.finished && (!r || !v.noop) && u === e._lastLoopId) {
          const r = Oa(t, a, o);
          if (r) return r.loopId = u, e._onLoopReset?.forEach(e => e()), Aa(e, [r]), za(e, r, !0)
        }
        return d && Tn.batchedUpdates(() => d(v, e, e.item)), v
      }

      function La(e, t) {
        const r = {
          ...e.springs
        };
        return t && Jn(to(t), e => {
            Qn.und(e.keys) && (e = Sa(e)), Qn.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), Va(r, e, e => Ma(e))
          }),
          function(e, t) {
            eo(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, rs(t, e))
            })
          }(e, r), r
      }

      function Ma(e, t) {
        const r = new Ca;
        return r.key = e, t && rs(r, t), r
      }

      function Va(e, t, r) {
        t.keys && Jn(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Aa(e, t) {
        Jn(t, t => {
          Va(e.springs, t, t => Ma(t, e))
        })
      }
      const qa = G.createContext({
          pause: !1,
          immediate: !1
        }),
        Fa = () => {
          const e = [],
            t = function(t) {
              bs(`${vs}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return Jn(e, (e, o) => {
                if (Qn.und(t)) n.push(e.start());
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
            return Jn(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return Jn(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            Jn(e, (e, r) => {
              const n = Qn.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return Jn(e, (e, n) => {
              if (Qn.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return Jn(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return Jn(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return Qn.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        Ba = () => Fa(),
        Xa = () => (0, G.useState)(Ba)[0];

      function Ga(e, t, r) {
        const n = Qn.fun(t) && t,
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
          p = (0, G.useMemo)(() => n || 3 == arguments.length ? Fa() : void 0, []),
          h = to(e),
          m = [],
          v = (0, G.useRef)(null),
          y = o ? null : v.current;
        _s(() => {
          v.current = m
        }), js(() => (Jn(m, e => {
          p?.add(e.ctrl), e.ctrl.ref = void 0
        }), () => {
          Jn(v.current, e => {
            e.expired && clearTimeout(e.expirationId), Js(e.ctrl, p), e.ctrl.stop(!0)
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
            return Qn.und(r) ? e : Qn.fun(r) ? e.map(r) : to(r)
          }(h, n ? n() : t, y),
          b = o && v.current || [];
        _s(() => Jn(b, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          Js(e, p), Bs(c, t, r)
        }));
        const w = [];
        if (y && Jn(y, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = w[t] = g.indexOf(e.key)) && (m[t] = e)
          }), Jn(h, (e, t) => {
            m[t] || (m[t] = {
              key: g[t],
              item: e,
              phase: "mount",
              ctrl: new Ea
            }, m[t].ctrl.item = e)
          }), w.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          Jn(w, (t, n) => {
            const o = y[n];
            ~t ? (e = m.indexOf(o), m[e] = {
              ...o,
              item: h[t]
            }) : r && m.splice(++e, 0, o)
          })
        }
        Qn.fun(s) && m.sort((e, t) => s(e.item, t.item));
        let _ = -a;
        const x = [],
          j = xs(),
          C = Zs(t),
          P = new Map,
          O = (0, G.useRef)(new Map),
          S = (0, G.useRef)(!1);
        if (Jn(m, (e, r) => {
            const o = e.key,
              s = e.phase,
              i = n ? n() : t;
            let c, p;
            const h = Bs(i.delay || 0, o);
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
            if (c = Bs(c, e.item, r), c = Qn.obj(c) ? $s(c) : {
                to: c
              }, !c.config) {
              const t = f || C.config;
              c.config = Bs(t, e.item, r, p)
            }
            _ += a;
            const m = {
              ...C,
              delay: h + _,
              ref: u,
              immediate: i.immediate,
              reset: !1,
              ...c
            };
            if ("enter" == p && Qn.und(m.from)) {
              const o = n ? n() : t;
              m.from = Bs(Qn.und(o.initial) || y ? o.from : o.initial, e.item, r)
            }
            const {
              onResolve: b
            } = m;
            m.onResolve = e => {
              Bs(b, e);
              const t = v.current,
                r = t.find(e => e.key === o);
              if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
                const e = t.every(e => e.ctrl.idle);
                if ("leave" == r.phase) {
                  O.current.delete(r);
                  const t = Bs(d, r.item);
                  if (!1 !== t) {
                    const n = !0 === t ? 0 : t;
                    if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(j, n)))
                  }
                }
                e && t.some(e => e.expired) && (l && (S.current = !0), j())
              }
            };
            const w = La(e.ctrl, m);
            x.push({
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
          const e = x.length;
          Jn(x, ({
            payload: t,
            propsDelay: r
          }, n) => {
            t.delay = r + (e - 1 - n) * a
          })
        }
        const k = (0, G.useContext)(qa),
          R = k !== function(e) {
            const t = (0, G.useRef)(void 0);
            return (0, G.useEffect)(() => {
              t.current = e
            }), t.current
          }(k) && function(e) {
            for (const t in e) return !0;
            return !1
          }(k);
        _s(() => {
          R && Jn(m, e => {
            e.ctrl.start({
              default: k
            })
          })
        }, [k]), Jn(P, (e, t) => {
          if (O.current.size) {
            const e = m.findIndex(e => e.key === t.key);
            m.splice(e, 1)
          }
        }), _s(() => {
          Jn(O.current.size ? O.current : P, ({
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
        const N = e => G.createElement(G.Fragment, null, m.map((t, r) => {
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
            i = Qn.str(t.key) || Qn.num(t.key) ? t.key : t.ctrl.id,
            d = G.version < "19.0.0",
            l = a?.props ?? {},
            c = d ? a?.ref : l?.ref;
          return a && a.type ? G.createElement(a.type, {
            ...l,
            key: i,
            ref: c
          }) : a
        }));
        return p ? [N, p] : N
      }
      let Ka = 1;
      var Ha = class extends ya {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = qo(...t);
          const r = this._get(),
            n = Ls(r);
          Ss(this, n.create(r))
        }
        advance(e) {
          const t = this._get();
          Yn(t, this.get()) || (Os(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Ua(this._active) && Wa(this)
        }
        _get() {
          const e = Qn.arr(this.source) ? this.source.map(Qo) : to(Qo(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !Ua(this._active) && (this.idle = !1, Jn(ks(this), e => {
            e.done = !1
          }), so.skipAnimation ? (Tn.batchedUpdates(() => this.advance()), Wa(this)) : yo.start(this))
        }
        _attach() {
          let e = 1;
          Jn(to(this.source), t => {
            $o(t) && rs(t, this), ma(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          }), this.priority = e, this._start()
        }
        _detach() {
          Jn(to(this.source), e => {
            $o(e) && ns(e, this)
          }), this._active.clear(), Wa(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = to(this.source).reduce((e, t) => Math.max(e, (ma(t) ? t.priority : 0) + 1), 0))
        }
      };

      function Za(e) {
        return !1 !== e.idle
      }

      function Ua(e) {
        return !e.size || Array.from(e).every(Za)
      }

      function Wa(e) {
        e.idle || (e.idle = !0, Jn(ks(e), e => {
          e.done = !0
        }), Jo(e, {
          type: "idle",
          parent: e
        }))
      }
      so.assign({
        createStringInterpolator: ms,
        to: (e, t) => new Ha(e, t)
      }), yo.advance;
      var $a = r(84017);
      const Qa = /^--/;

      function Ya(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Qa.test(e) || ei.hasOwnProperty(e) && ei[e] ? ("" + t).trim() : t + "px"
      }
      const Ja = {};
      let ei = {
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
      const ti = ["Webkit", "Ms", "Moz", "O"];
      ei = Object.keys(ei).reduce((e, t) => (ti.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), ei);
      const ri = /^(matrix3d|matrix|translate3d|translate[XYZ]?|scale3d|scale[XYZ]?|rotate3d|rotate[XYZ]?|skew[XY]?)$/,
        ni = /^(translate)/,
        oi = /^(rotate|skew)/,
        si = (e, t) => Qn.num(e) && 0 !== e ? e + t : e,
        ai = (e, t) => Qn.arr(e) ? e.every(e => ai(e, t)) : Qn.num(e) ? e === t : parseFloat(e) === t;
      var ii = class extends Ts {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              s = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), s.push(e => [`translate3d(${e.map(e=>si(e,"px")).join(",")})`, ai(e, 0)])), eo(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), s.push(e => [e, "" === e]);
              else if (ri.test(t)) {
                if (delete n[t], Qn.und(e)) return;
                const r = ni.test(t) ? "px" : oi.test(t) ? "deg" : "";
                o.push(to(e)), s.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${si(o,r)})`, ai(o, 0)] : e => [`${t}(${e.map(e=>si(e,r)).join(",")})`, ai(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new di(o, s)), super(n)
          }
        },
        di = class extends es {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Jn(this.inputs, (r, n) => {
              const o = Qo(r[0]),
                [s, a] = this.transforms[n](Qn.arr(o) ? o : r.map(Qo));
              e += " " + s, t = t && a
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Jn(this.inputs, e => Jn(e, e => $o(e) && rs(e, this)))
          }
          observerRemoved(e) {
            0 == e && Jn(this.inputs, e => Jn(e, e => $o(e) && ns(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Jo(this, e)
          }
        };
      so.assign({
        batchedUpdates: $a.unstable_batchedUpdates,
        createStringInterpolator: ms,
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
      const li = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Ts(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            s = e => {
              const t = Fs(e) || "Anonymous";
              if (Qn.str(e)) e = s[e] || (s[e] = Ms(e, o));
              else {
                let t = e[As] ?? qs.get(e);
                if (!t) {
                  t = Ms(e, o);
                  try {
                    e[As] = t
                  } catch {}
                  qs.set(e, t)
                }
                e = t
              }
              return e.displayName = `Animated(${t})`, e
            };
          return eo(e, (t, r) => {
            Qn.arr(e) && (r = Fs(t)), s[r] = s(t)
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
              u = Object.keys(l).map(t => r || e.hasAttribute(t) ? t : Ja[t] || (Ja[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            t.hasOwnProperty("children") && (e.textContent = s);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = Ya(t, o[t]);
                Qa.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach((t, r) => {
              const n = c[r];
              void 0 !== n ? e.setAttribute(t, n) : e.removeAttribute(t)
            }), t.hasOwnProperty("className") && (void 0 !== n ? e.className = n : e.removeAttribute("class")), void 0 !== a && (e.scrollTop = a), void 0 !== i && (e.scrollLeft = i), t.hasOwnProperty("viewBox") && (void 0 !== d ? e.setAttribute("viewBox", d) : e.removeAttribute("viewBox"))
          },
          createAnimatedStyle: e => new ii(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        ci = li.animated;
      var ui = r(39467),
        fi = r(64239),
        pi = r(54958),
        hi = r(13588),
        mi = r(82449),
        vi = r(21680),
        yi = r(2272),
        gi = r(66624),
        bi = r(80082),
        wi = r(50486),
        _i = r(92939),
        xi = r(80373),
        [ji, Ci] = (0, pi.A)("Tooltip", [vi.Bk]),
        Pi = (0, vi.Bk)(),
        Oi = "TooltipProvider",
        Si = 700,
        ki = "tooltip.open",
        [Ri, Ni] = ji(Oi),
        Di = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Si,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: s
          } = e, a = G.useRef(!0), i = G.useRef(!1), d = G.useRef(0);
          return G.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, S.jsx)(Ri, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: G.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), a.current = !1)
            }, [n]),
            onClose: G.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => a.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: G.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: s
          })
        };
      Di.displayName = Oi;
      var Ii = "Tooltip",
        [Ti, Ei] = ji(Ii),
        zi = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: a,
            delayDuration: i
          } = e, d = Ni(Ii, e.__scopeTooltip), l = Pi(t), [c, u] = G.useState(null), f = (0, mi.useId)(), p = G.useRef(0), h = a ?? d.disableHoverableContent, m = i ?? d.delayDuration, v = G.useRef(!1), [y, g] = (0, _i.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(ki))) : d.onClose(), s?.(e)
            },
            caller: Ii
          }), b = G.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), w = G.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, v.current = !1, g(!0)
          }, [g]), _ = G.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), x = G.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              v.current = !0, g(!0), p.current = 0
            }, m)
          }, [m, g]);
          return G.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, S.jsx)(vi.bL, {
            ...l,
            children: (0, S.jsx)(Ti, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: G.useCallback(() => {
                d.isOpenDelayedRef.current ? x() : w()
              }, [d.isOpenDelayedRef, x, w]),
              onTriggerLeave: G.useCallback(() => {
                h ? _() : (window.clearTimeout(p.current), p.current = 0)
              }, [_, h]),
              onOpen: w,
              onClose: _,
              disableHoverableContent: h,
              children: r
            })
          })
        };
      zi.displayName = Ii;
      var Li = "TooltipTrigger",
        Mi = G.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Ei(Li, r), s = Ni(Li, r), a = Pi(r), i = G.useRef(null), d = (0, fi.s)(t, i, o.onTriggerChange), l = G.useRef(!1), c = G.useRef(!1), u = G.useCallback(() => l.current = !1, []);
          return G.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, S.jsx)(vi.Mz, {
            asChild: !0,
            ...a,
            children: (0, S.jsx)(bi.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, ui.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || s.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, ui.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, ui.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, ui.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, ui.mK)(e.onBlur, o.onClose),
              onClick: (0, ui.mK)(e.onClick, o.onClose)
            })
          })
        });
      Mi.displayName = Li;
      var Vi = "TooltipPortal",
        [Ai, qi] = ji(Vi, {
          forceMount: void 0
        }),
        Fi = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = Ei(Vi, t);
          return (0, S.jsx)(Ai, {
            scope: t,
            forceMount: r,
            children: (0, S.jsx)(gi.C, {
              present: r || s.open,
              children: (0, S.jsx)(yi.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Fi.displayName = Vi;
      var Bi = "TooltipContent",
        Xi = G.forwardRef((e, t) => {
          const r = qi(Bi, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...s
            } = e,
            a = Ei(Bi, e.__scopeTooltip);
          return (0, S.jsx)(gi.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, S.jsx)(Ui, {
              side: o,
              ...s,
              ref: t
            }) : (0, S.jsx)(Gi, {
              side: o,
              ...s,
              ref: t
            })
          })
        }),
        Gi = G.forwardRef((e, t) => {
          const r = Ei(Bi, e.__scopeTooltip),
            n = Ni(Bi, e.__scopeTooltip),
            o = G.useRef(null),
            s = (0, fi.s)(t, o),
            [a, i] = G.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = G.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = G.useCallback((e, t) => {
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
          return G.useEffect(() => () => f(), [f]), G.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                t = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), G.useEffect(() => {
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
          }, [d, c, a, l, f]), (0, S.jsx)(Ui, {
            ...e,
            ref: s
          })
        }),
        [Ki, Hi] = ji(Ii, {
          isInside: !1
        }),
        Zi = (0, wi.createSlottable)("TooltipContent"),
        Ui = G.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            ...i
          } = e, d = Ei(Bi, r), l = Pi(r), {
            onClose: c
          } = d;
          return G.useEffect(() => (document.addEventListener(ki, c), () => document.removeEventListener(ki, c)), [c]), G.useEffect(() => {
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
          }, [d.trigger, c]), (0, S.jsx)(hi.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, S.jsxs)(vi.UC, {
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
              children: [(0, S.jsx)(Zi, {
                children: n
              }), (0, S.jsx)(Ki, {
                scope: r,
                isInside: !0,
                children: (0, S.jsx)(xi.Root, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Xi.displayName = Bi;
      var Wi = "TooltipArrow",
        $i = G.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Pi(r);
          return Hi(Wi, r).isInside ? null : (0, S.jsx)(vi.i3, {
            ...o,
            ...n,
            ref: t
          })
        });
      $i.displayName = Wi;
      var Qi = Di,
        Yi = zi,
        Ji = Mi,
        ed = Fi,
        td = Xi,
        rd = $i;
      const nd = (0, G.createContext)(null);

      function od() {
        const e = (0, G.useContext)(nd);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const sd = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [s = !1, a] = (0, $.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, S.jsx)(Qi, {
            delayDuration: t,
            children: (0, S.jsx)(nd.Provider, {
              value: {
                isOpen: s,
                ...o
              },
              children: (0, S.jsx)(Yi, {
                open: s,
                onOpenChange: a,
                children: e
              })
            })
          })
        },
        ad = (0, G.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, S.jsx)(Ji, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        id = (0, G.forwardRef)(({
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
          } = od(), c = (0, $.jt)(), u = ci(td), f = Ga(l, {
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
            config: ea.stiff,
            immediate: c
          }), p = (0, Z.mergeProps)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: a,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: s,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, S.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        dd = (0, G.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, Z.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, S.jsx)(rd, {
            ...r,
            ref: t
          })
        }),
        ld = ed;

      function cd(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var ud = r(99136),
        fd = r(52184),
        pd = r(5024),
        hd = r(65324),
        md = ["PageUp", "PageDown"],
        vd = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        yd = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        gd = "Slider",
        [bd, wd, _d] = (0, hd.N)(gd),
        [xd, jd] = (0, pi.A)(gd, [_d]),
        [Cd, Pd] = xd(gd),
        Od = G.forwardRef((e, t) => {
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
          } = e, v = G.useRef(new Set), y = G.useRef(0), g = G.useRef(!1), b = "horizontal" === a ? Rd : Nd, [w = [], _] = (0, _i.useControllableState)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus({
                preventScroll: !0,
                focusVisible: g.current
              }), g.current = !1, u(e)
            }
          }), x = G.useRef(w);

          function j(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = function(e) {
                if (!Number.isFinite(e)) return 0;
                const t = e.toString();
                if (t.includes("e")) {
                  const [e, r] = t.split("e"), n = e.split(".")[1] || "", o = Number(r);
                  return Math.max(0, n.length - o)
                }
                const r = t.split(".")[1];
                return r ? r.length : 0
              }(s),
              i = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / s) * s + n, a),
              l = cd(i, [n, o]);
            _((e = []) => {
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
          return (0, S.jsx)(Cd, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: w,
            orientation: a,
            form: h,
            children: (0, S.jsx)(bd.Provider, {
              scope: e.__scopeSlider,
              children: (0, S.jsx)(bd.Slot, {
                scope: e.__scopeSlider,
                children: (0, S.jsx)(b, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, ui.mK)(m.onPointerDown, () => {
                    i || (x.current = w, g.current = !1)
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
                    }(w, e);
                    j(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    j(e, y.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = x.current[y.current];
                    w[y.current] !== e && f(w)
                  },
                  onHomeKeyDown: () => {
                    i || (g.current = !0, j(n, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (g.current = !0, j(o, w.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      g.current = !0;
                      const r = md.includes(e.key) || e.shiftKey && vd.includes(e.key) ? 10 : 1,
                        n = y.current;
                      j(w[n] + s * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      Od.displayName = gd;
      var [Sd, kd] = xd(gd, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Rd = G.forwardRef((e, t) => {
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
        } = e, [u, f] = G.useState(null), p = (0, fi.s)(t, e => f(e)), h = G.useRef(void 0), m = (0, ud.jH)(o), v = "ltr" === m, y = v && !s || !v && s;

        function g(e) {
          const t = h.current || u.getBoundingClientRect(),
            o = Zd([0, t.width], y ? [r, n] : [n, r]);
          return h.current = t, o(e - t.left)
        }
        return (0, S.jsx)(Sd, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, S.jsx)(Dd, {
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
              const t = yd[y ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Nd = G.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = G.useRef(null), u = (0, fi.s)(t, c), f = G.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Zd([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, S.jsx)(Sd, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, S.jsx)(Dd, {
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
              const t = yd[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Dd = G.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: s,
          onHomeKeyDown: a,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = Pd(gd, r);
        return (0, S.jsx)(bi.sG.span, {
          ...l,
          ref: t,
          onKeyDown: (0, ui.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : md.concat(vd).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, ui.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus({
              preventScroll: !0,
              focusVisible: !1
            }) : n(e)
          }),
          onPointerMove: (0, ui.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, ui.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
          })
        })
      }), Id = "SliderTrack", Td = G.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Pd(Id, r);
        return (0, S.jsx)(bi.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Td.displayName = Id;
      var Ed = "SliderRange",
        zd = G.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Pd(Ed, r), s = kd(Ed, r), a = G.useRef(null), i = (0, fi.s)(t, a), d = o.values.length, l = o.values.map(e => Hd(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, S.jsx)(bi.sG.span, {
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
      zd.displayName = Ed;
      var Ld = "SliderThumb",
        [Md, Vd] = xd(Ld),
        Ad = "SliderThumbProvider";

      function qd(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, s = Pd(Ad, t), a = wd(t), [i, d] = G.useState(null), l = G.useMemo(() => i ? a().findIndex(e => e.ref.current === i) : -1, [a, i]), c = (0, pd.X)(i), u = !i || !!s.form || !!i.closest("form"), f = s.values[l], p = r ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0), h = void 0 === f ? 0 : Hd(f, s.min, s.max);
        G.useEffect(() => {
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
        return (0, S.jsx)(Md, {
          scope: t,
          ...m,
          children: Ud(o) ? o(m) : n
        })
      }
      qd.displayName = Ad;
      var Fd = "SliderThumbTrigger",
        Bd = G.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Pd(Fd, r), s = kd(Fd, r), {
            index: a,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = Vd(Fd, r), u = (0, fi.s)(t, e => c(e)), f = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(a, o.values.length), p = l?.[s.size], h = p ? function(e, t, r) {
            const n = e / 2;
            return (n - Zd([0, 50], [0, n])(t) * r) * r
          }(p, d, s.direction) : 0;
          return (0, S.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${d}% + ${h}px)`
            },
            children: (0, S.jsx)(bd.ItemSlot, {
              scope: r,
              children: (0, S.jsx)(bi.sG.span, {
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
                onFocus: (0, ui.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = a
                })
              })
            })
          })
        });
      Bd.displayName = Fd;
      var Xd = G.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          name: n,
          ...o
        } = e;
        return (0, S.jsx)(qd, {
          __scopeSlider: r,
          name: n,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: n
          }) => (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(Bd, {
              ...o,
              ref: t,
              __scopeSlider: r
            }), n ? (0, S.jsx)(Kd, {
              __scopeSlider: r
            }, e) : null]
          })
        })
      });
      Xd.displayName = Ld;
      var Gd = "SliderBubbleInput",
        Kd = G.forwardRef(({
          __scopeSlider: e,
          ...t
        }, r) => {
          const {
            value: n,
            name: o,
            form: s
          } = Vd(Gd, e), a = G.useRef(null), i = (0, fi.s)(a, r), d = (0, fd.Z)(n);
          return G.useEffect(() => {
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
          }, [d, n]), (0, S.jsx)(bi.sG.input, {
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

      function Hd(e, t, r) {
        return cd(100 / (r - t) * (e - t), [0, 100])
      }

      function Zd(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Ud(e) {
        return "function" == typeof e
      }
      Kd.displayName = Gd;
      var Wd = r(372);
      const $d = (0, G.createContext)({
          triggerRef: (0, G.createRef)(),
          triggerBorderRef: (0, G.createRef)(),
          thumbnailRef: (0, G.createRef)(),
          openIconRef: (0, G.createRef)(),
          overlayRef: (0, G.createRef)(),
          contentRef: (0, G.createRef)(),
          containerRef: (0, G.createRef)(),
          imageRef: (0, G.createRef)(),
          placeholderRef: (0, G.createRef)(),
          zoomPanRef: (0, G.createRef)(),
          captionRef: (0, G.createRef)(),
          controlsRef: (0, G.createRef)(),
          closeRef: (0, G.createRef)(),
          zoomRef: (0, G.createRef)(),
          zoomInRef: (0, G.createRef)(),
          zoomSliderRef: (0, G.createRef)(),
          zoomOutRef: (0, G.createRef)(),
          resetRef: (0, G.createRef)(),
          downloadRef: (0, G.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        Qd = ({
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
          const f = (0, Y.Ym)(),
            p = (0, $.rl)(),
            h = (0, G.useRef)(null),
            m = (0, G.useRef)(null),
            v = (0, G.useRef)(null),
            y = (0, G.useRef)(null),
            g = (0, G.useRef)(null),
            b = (0, G.useRef)(null),
            w = (0, G.useRef)(null),
            _ = (0, G.useRef)(null),
            x = (0, G.useRef)(null),
            j = (0, G.useRef)(null),
            C = (0, G.useRef)(null),
            P = (0, G.useRef)(null),
            O = (0, G.useRef)(null),
            k = (0, G.useRef)(null),
            R = (0, G.useRef)(null),
            N = (0, G.useRef)(null),
            D = (0, G.useRef)(null),
            I = (0, G.useRef)(null),
            T = (0, G.useRef)(null),
            [E = !1, z] = (0, $.ic)({
              prop: t || n,
              onChange: r
            }),
            L = (0, G.useRef)(null);
          return L.current || (L.current = new Pn({
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
          })), (0, S.jsx)(pn, {
            messages: hn,
            locale: f,
            children: (0, S.jsx)($d.Provider, {
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
                closeRef: O,
                zoomRef: k,
                zoomInRef: R,
                zoomSliderRef: N,
                zoomOutRef: D,
                resetRef: I,
                downloadRef: T,
                open: E,
                setOpen: z,
                altText: e,
                hideTrigger: c,
                slide: L.current
              },
              children: (0, S.jsx)(Jd, {
                ...u
              })
            })
          })
        },
        Yd = (0, G.createContext)({
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
        Jd = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, G.useContext)($d), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = bt(), {
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
            } = (0, G.useContext)($d), p = (0, G.useRef)(null);
            p.current || (p.current = pt.gsap.timeline({
              defaults: an
            }));
            const h = (0, G.useCallback)(e => {
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
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), pt.gsap.set([u.current, f.current], {
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
                }), pt.gsap.set([f.current], {
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
                  [ln]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [ln]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Sr(f.current), t.closing || (pt.gsap.set([f.current], {
                  visibility: "visible",
                  ...dn
                }), pt.gsap.set([u.current], {
                  visibility: "hidden",
                  ...dn
                }))))
              }),
              v = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              y = (0, G.useCallback)(async e => {
                e || (window.addEventListener("click", h), await v(), window.removeEventListener("click", h)), r(e)
              }, [r]),
              g = (0, G.useCallback)(() => y(!1), [y]);
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
            } = bt(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: s,
              containerRef: a,
              placeholderRef: i
            } = (0, G.useContext)($d), d = t(async e => {
              r.zoomTo(e), pt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...dn
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), pt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...dn
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), pt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...dn
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), pt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...dn
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              pt.gsap.to([s.current], {
                opacity: e,
                [ln]: t,
                ...dn
              })
            }), p = t(async () => {
              pt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...dn
              })
            }), h = (0, G.useCallback)(() => {
              n.current && o.current && (pt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...dn
              }), pt.gsap.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...dn
              }), pt.gsap.set([a.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, G.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", h), window.addEventListener("resize", r.resize.bind(r)), () => {
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
          }), u = (0, Z.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, S.jsx)(Yd.Provider, {
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
            children: (0, S.jsx)(Wd.Root, {
              ...u
            })
          })
        },
        el = (0, G.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, fn.A)(),
            {
              triggerRef: s,
              triggerBorderRef: a,
              altText: i
            } = (0, G.useContext)($d),
            d = (0, $.UP)(s, n),
            l = (0, Z.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Sn.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, S.jsx)(Wd.Trigger, {
            ref: d,
            ...l,
            children: (0, S.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: a,
              children: (0, S.jsx)(Q.xV, {
                children: t
              })
            })
          })
        }),
        tl = (0, G.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, G.useContext)($d), s = (0, $.UP)(o, n), a = (0, Z.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? Q.DX : "img";
          return (0, S.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        rl = (0, G.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, G.useContext)($d), o = (0, $.UP)(n, r), s = (0, Z.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), a = e ? Q.DX : le.Maximize2;
          return (0, S.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        nl = ({
          ...e
        }) => (0, S.jsx)(Wd.Portal, {
          ...e
        }),
        ol = (0, G.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, G.useContext)($d), o = (0, $.UP)(n, r), s = (0, Z.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, S.jsx)(Wd.Overlay, {
            ref: o,
            ...s
          })
        }),
        sl = (0, G.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, G.useContext)(Yd), {
            contentRef: s,
            altText: a,
            triggerRef: i
          } = (0, G.useContext)($d), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, G.useContext)($d), [t, r] = (0, G.useState)(e.getCursor()), n = (0, G.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, G.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = (0, On.m)("dark"), c = (0, $.UP)(s, n), u = (0, Z.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, de.clsx)("foundry_1a74xwb9", l),
            style: {
              cursor: d
            }
          });
          return (0, S.jsxs)(Wd.Content, {
            ref: c,
            ...u,
            children: [(0, S.jsx)(Q.s6, {
              children: (0, S.jsx)(Wd.Title, {
                children: a
              })
            }), t]
          })
        }),
        al = (0, G.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, G.useContext)($d);
          (() => {
            const {
              contextSafe: e
            } = bt(), {
              toggleControls: t
            } = (0, G.useContext)(Yd), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: s,
              slide: a
            } = (0, G.useContext)($d), i = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.dragHandler.handleDrag(e), a.dragHandler.animate && !a.closing && (pt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...dn
              }), pt.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...dn
              }), pt.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...dn
              })))
            }), d = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.scrollWheel.handleWheel(e), a.closing || pt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...dn
              }))
            }), l = e(e => {
              !e.pinching && !a.zoomHandler.pinching || a.dragHandler.dragging || (a.zoomHandler.handleZoom(e), a.zoomHandler.animate && !a.closing && (pt.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...dn
              }), pt.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...dn
              }), pt.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...dn
              })))
            }), c = (0, G.useCallback)(() => {
              a.controlsVisible || t()
            }, [, t]);
            (0, $.iQ)({
              ref: s,
              onFocusIn: c
            }), Or({
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
          const s = (0, $.UP)(o, n),
            a = (0, Z.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, S.jsx)("div", {
            ref: s,
            ...a,
            children: (0, S.jsxs)(il, {
              children: [(0, S.jsx)(dl, {}), t]
            })
          })
        }),
        il = (0, G.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, G.useContext)($d), s = (0, $.UP)(o, n), a = (0, Z.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? Q.DX : "div";
          return (0, S.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        dl = (0, G.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, G.useContext)($d), s = (0, $.UP)(o, n), a = (0, Z.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? Q.DX : "img";
          return (0, S.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        ll = (0, G.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, G.useContext)($d), s = (0, $.UP)(o, n), a = (0, Z.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? Q.DX : "img";
          return (0, S.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        cl = (0, G.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, G.useContext)($d), s = (0, $.UP)(o, n), a = (0, Z.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? Q.DX : "p";
          return (0, S.jsx)(Wd.Description, {
            asChild: !0,
            children: (0, S.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        ul = (0, G.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, G.useContext)($d);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, G.useContext)(Yd);
            Qr(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), Qr(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), Qr("r", n, {
              enabled: e,
              preventDefault: !0
            }), Qr("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const s = (0, $.UP)(o, n),
            a = (0, Z.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? Q.DX : "div";
          return (0, S.jsx)(Ur, {
            children: (0, S.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        fl = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, S.jsx)(S.Fragment, {
            children: n
          });
          const s = (0, Z.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, S.jsxs)(sd, {
            delayDuration: 0,
            children: [(0, S.jsx)(ad, {
              children: n
            }), (0, S.jsxs)(id, {
              ...s,
              children: [(0, S.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, S.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, S.jsx)(dd, {})]
            })]
          })
        },
        pl = (0, G.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, Z.mergeProps)(e, {
            isInline: !0
          });
          return (0, S.jsx)(Rn, {
            ref: t,
            ...r
          })
        }),
        hl = (0, G.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, s) {
          const a = (0, fn.A)(),
            {
              zoomRef: i
            } = (0, G.useContext)($d),
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
              } = (0, G.useContext)($d), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, G.useContext)(Yd), [o, s] = (0, G.useState)(!1), [a, i] = (0, G.useState)(!1), [d, l] = (0, G.useState)(0), [c, u] = (0, G.useState)(0), [f, p] = (0, G.useState)(0), h = (0, G.useCallback)(() => {
                s(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, G.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, G.useEffect)(() => (e.addEventListener("zoom", h), () => {
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
            v = (0, $.UP)(i, s),
            y = (0, Z.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? Q.DX : "div";
          return (0, S.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, S.jsx)(fl, {
              side: "left",
              enabled: r,
              content: a.formatMessage(Sn.ZoomInButtonLabel),
              metadata: a.formatMessage(Sn.ZoomInButtonTooltip, {
                shortcut: (0, S.jsx)(pl, {
                  shortcut: "+"
                })
              }),
              children: (0, S.jsx)(Ne, {
                label: a.formatMessage(Sn.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: sn({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, S.jsxs)(Od, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, S.jsx)(Td, {
                className: "foundry_1a74xwbu",
                children: (0, S.jsx)(zd, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, S.jsx)(fl, {
                side: "left",
                enabled: r,
                content: a.formatMessage(Sn.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, S.jsx)(Xd, {
                  className: "foundry_1a74xwbw",
                  children: (0, S.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, S.jsx)(fl, {
              side: "left",
              enabled: r,
              content: a.formatMessage(Sn.ZoomOutButtonLabel),
              metadata: a.formatMessage(Sn.ZoomOutButtonTooltip, {
                shortcut: (0, S.jsx)(pl, {
                  shortcut: "-"
                })
              }),
              children: (0, S.jsx)(Ne, {
                label: a.formatMessage(Sn.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: sn({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, S.jsx)(Q.xV, {
              children: n
            })]
          })
        }),
        ml = (0, G.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const s = (0, fn.A)(),
            {
              closeRef: a
            } = (0, G.useContext)($d),
            i = (0, $.UP)(a, o),
            d = (0, Z.mergeProps)(n, {
              "data-testid": e,
              className: on({
                styled: !t
              })
            }),
            l = t ? (0, S.jsx)(Q.DX, {
              ref: i,
              ...d
            }) : (0, S.jsx)(Ne, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: s.formatMessage(Sn.CloseButtonLabel)
            });
          return (0, S.jsx)(fl, {
            side: "right",
            enabled: r,
            content: s.formatMessage(Sn.CloseButtonLabel),
            metadata: s.formatMessage(Sn.CloseButtonTooltip, {
              shortcut: (0, S.jsx)(pl, {
                shortcut: "Esc"
              })
            }),
            children: (0, S.jsx)(Wd.Close, {
              asChild: !0,
              children: l
            })
          })
        }),
        vl = (0, G.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, fn.A)(),
            s = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, G.useContext)($d), {
                contextSafe: r
              } = bt(), {
                resetZoom: n
              } = (0, G.useContext)(Yd), [o, s] = (0, G.useState)(e.currZoomLevel !== e.zoomLevels.initial), a = r(e => {
                pt.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...dn
                })
              }), i = (0, G.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                s(t), a(t)
              }, [s]);
              return (0, G.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: a
            } = (0, G.useContext)($d),
            i = (0, $.UP)(a, n),
            d = (0, Z.mergeProps)(r, s, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, S.jsx)(fl, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Sn.ResetZoomButtonLabel),
            metadata: o.formatMessage(Sn.ResetZoomButtonTooltip, {
              shortcut: (0, S.jsx)(pl, {
                shortcut: "R"
              })
            }),
            children: (0, S.jsx)(Ne, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Sn.ResetZoomButtonLabel)
            })
          })
        }),
        yl = (0, G.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, fn.A)(),
            {
              downloadRef: s,
              imageRef: a
            } = (0, G.useContext)($d),
            i = (0, $.UP)(s, n),
            d = (0, Z.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, S.jsx)(fl, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Sn.DownloadButtonTooltip),
            children: (0, S.jsx)(Ne, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Sn.DownloadButtonTooltip),
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
        gl = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var bl = r(98905);

      function wl(e) {
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

      function _l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function xl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _l(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = wl(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _l(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Cl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pl = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xl(xl({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cl(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jl(e.variantClassNames, e => jl(e, e => e.split(" ")[0]))
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
      const Ol = (0, G.createContext)(null);

      function Sl() {
        const e = (0, G.useContext)(Ol);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const kl = (0, G.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: s = "neutral",
          ...a
        }, i) => {
          const d = (0, Z.mergeProps)({
              className: Pl({
                status: s
              }),
              "data-testid": t
            }, a),
            l = r ? Q.DX : "div";
          return (0, S.jsx)(Ol.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: s,
              ...a
            },
            children: (0, S.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        Rl = (0, G.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Sl(), s = (0, Z.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: le.Check,
            invalid: le.X,
            neutral: le.TriangleAlert
          }, i = t ? Q.DX : a[o];
          return (0, S.jsx)(i, {
            ref: n,
            ...s
          })
        }),
        Nl = (0, G.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            errorId: a
          } = Sl(), i = (0, Z.mergeProps)({
            "data-testid": t,
            id: a || s
          }, n), d = r ? Q.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var Dl = r(94660),
        Il = r(10198),
        Tl = "ScrollArea",
        [El, zl] = (0, pi.A)(Tl),
        [Ll, Ml] = El(Tl),
        Vl = G.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...a
          } = e, [i, d] = G.useState(null), [l, c] = G.useState(null), [u, f] = G.useState(null), [p, h] = G.useState(null), [m, v] = G.useState(null), [y, g] = G.useState(0), [b, w] = G.useState(0), [_, x] = G.useState(!1), [j, C] = G.useState(!1), P = (0, fi.s)(t, e => d(e)), O = (0, ud.jH)(o);
          return (0, S.jsx)(Ll, {
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
            onScrollbarXEnabledChange: x,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, S.jsx)(bi.sG.div, {
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
      Vl.displayName = Tl;
      var Al = "ScrollAreaViewport",
        ql = G.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...s
          } = e, a = Ml(Al, r), i = G.useRef(null), d = (0, fi.s)(t, i, a.onViewportChange);
          return (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(Fl, {
              nonce: o
            }), (0, S.jsx)(bi.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: d,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, S.jsx)("div", {
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
      ql.displayName = Al;
      var Fl = G.memo(({
          nonce: e
        }) => (0, S.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, t) => e.nonce === t.nonce),
        Bl = "ScrollAreaScrollbar",
        Xl = G.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ml(Bl, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: a
          } = o, i = "horizontal" === e.orientation;
          return G.useEffect(() => (i ? s(!0) : a(!0), () => {
            i ? s(!1) : a(!1)
          }), [i, s, a]), "hover" === o.type ? (0, S.jsx)(Gl, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, S.jsx)(Kl, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, S.jsx)(Hl, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, S.jsx)(Zl, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        });
      Xl.displayName = Bl;
      var Gl = G.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ml(Bl, e.__scopeScrollArea), [s, a] = G.useState(!1);
          return G.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, S.jsx)(gi.C, {
            present: r || s,
            children: (0, S.jsx)(Hl, {
              "data-state": s ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Kl = G.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ml(Bl, e.__scopeScrollArea), s = "horizontal" === e.orientation, a = fc(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, G.useReducer((e, t) => l[e][t] ?? e, "hidden"));
          var l;
          return G.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), G.useEffect(() => {
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
          }, [o.viewport, s, d, a]), (0, S.jsx)(gi.C, {
            present: r || "hidden" !== i,
            children: (0, S.jsx)(Zl, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, ui.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, ui.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Hl = G.forwardRef((e, t) => {
          const r = Ml(Bl, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [s, a] = G.useState(!1),
            i = "horizontal" === e.orientation,
            d = fc(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(i ? e : t)
              }
            }, 10);
          return pc(r.viewport, d), pc(r.content, d), (0, S.jsx)(gi.C, {
            present: n || s,
            children: (0, S.jsx)(Zl, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Zl = G.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Ml(Bl, e.__scopeScrollArea), s = G.useRef(null), a = G.useRef(0), [i, d] = G.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = ac(i.viewport, i.content), c = {
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
              const o = ic(r),
                s = t || o / 2,
                a = o - s,
                i = r.scrollbar.paddingStart + s,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                l = r.content - r.viewport;
              return lc([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, a.current, i, t)
          }
          return "horizontal" === r ? (0, S.jsx)(Ul, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = dc(o.viewport.scrollLeft, i, o.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, S.jsx)(Wl, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = dc(o.viewport.scrollTop, i);
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
        Ul = G.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = Ml(Bl, e.__scopeScrollArea), [a, i] = G.useState(), d = G.useRef(null), l = (0, fi.s)(t, d, s.onScrollbarXChange);
          return G.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, S.jsx)(Yl, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": ic(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), cc(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: sc(a.paddingLeft),
                  paddingEnd: sc(a.paddingRight)
                }
              })
            }
          })
        }),
        Wl = G.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = Ml(Bl, e.__scopeScrollArea), [a, i] = G.useState(), d = G.useRef(null), l = (0, fi.s)(t, d, s.onScrollbarYChange);
          return G.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, S.jsx)(Yl, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": ic(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), cc(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: sc(a.paddingTop),
                  paddingEnd: sc(a.paddingBottom)
                }
              })
            }
          })
        }),
        [$l, Ql] = El(Bl),
        Yl = G.forwardRef((e, t) => {
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
          } = e, p = Ml(Bl, r), [h, m] = G.useState(null), v = (0, fi.s)(t, e => m(e)), y = G.useRef(null), g = G.useRef(""), b = p.viewport, w = n.content - n.viewport, _ = (0, Dl.c)(c), x = (0, Dl.c)(d), j = fc(u, 10);

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
          return G.useEffect(() => {
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
          }, [b, h, w, _]), G.useEffect(x, [n, x]), pc(h, j), pc(p.content, j), (0, S.jsx)($l, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, Dl.c)(s),
            onThumbPointerUp: (0, Dl.c)(a),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, Dl.c)(i),
            children: (0, S.jsx)(bi.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, ui.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, ui.mK)(e.onPointerMove, C),
              onPointerUp: (0, ui.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        Jl = "ScrollAreaThumb",
        ec = G.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ql(Jl, e.__scopeScrollArea);
          return (0, S.jsx)(gi.C, {
            present: r || o.hasThumb,
            children: (0, S.jsx)(tc, {
              ref: t,
              ...n
            })
          })
        }),
        tc = G.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, s = Ml(Jl, r), a = Ql(Jl, r), {
            onThumbPositionChange: i
          } = a, d = (0, fi.s)(t, e => a.onThumbChange(e)), l = G.useRef(void 0), c = fc(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return G.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = uc(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [s.viewport, c, i]), (0, S.jsx)(bi.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, ui.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, ui.mK)(e.onPointerUp, a.onThumbPointerUp)
          })
        });
      ec.displayName = Jl;
      var rc = "ScrollAreaCorner",
        nc = G.forwardRef((e, t) => {
          const r = Ml(rc, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, S.jsx)(oc, {
            ...e,
            ref: t
          }) : null
        });
      nc.displayName = rc;
      var oc = G.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Ml(rc, r), [s, a] = G.useState(0), [i, d] = G.useState(0), l = Boolean(s && i);
        return pc(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), pc(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        }), l ? (0, S.jsx)(bi.sG.div, {
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

      function sc(e) {
        return e ? parseInt(e, 10) : 0
      }

      function ac(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function ic(e) {
        const t = ac(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function dc(e, t, r = "ltr") {
        const n = ic(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          s = t.scrollbar.size - o,
          a = t.content - t.viewport,
          i = s - n,
          d = cd(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return lc([0, a], [0, i])(d)
      }

      function lc(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function cc(e, t) {
        return e > 0 && e < t
      }
      var uc = (e, t = () => {}) => {
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

      function fc(e, t) {
        const r = (0, Dl.c)(e),
          n = G.useRef(0);
        return G.useEffect(() => () => window.clearTimeout(n.current), []), G.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function pc(e, t) {
        const r = (0, Dl.c)(t);
        (0, Il.N)(() => {
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
      var hc = Vl,
        mc = ql,
        vc = Xl,
        yc = ec,
        gc = nc,
        bc = r(38174),
        wc = r(76765),
        _c = r(45787),
        xc = r(59113),
        jc = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Cc = [" ", "Enter"],
        Pc = "Select",
        [Oc, Sc, kc] = (0, hd.N)(Pc),
        [Rc, Nc] = (0, pi.A)(Pc, [kc, vi.Bk]),
        Dc = (0, vi.Bk)(),
        [Ic, Tc] = Rc(Pc),
        [Ec, zc] = Rc(Pc);

      function Lc(e) {
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
        } = e, v = Dc(t), [y, g] = G.useState(null), [b, w] = G.useState(null), [_, x] = G.useState(!1), j = (0, ud.jH)(l), [C, P] = (0, _i.useControllableState)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: s,
          caller: Pc
        }), [O, k] = (0, _i.useControllableState)({
          prop: a,
          defaultProp: i,
          onChange: d,
          caller: Pc
        }), R = G.useRef(null), N = !y || !!h || !!y.closest("form"), [D, I] = G.useState(new Set), T = (0, mi.useId)(), E = Array.from(D).map(e => e.props.value).join(";"), z = G.useCallback(e => {
          I(t => new Set(t).add(e))
        }, []), L = G.useCallback(e => {
          I(t => {
            const r = new Set(t);
            return r.delete(e), r
          })
        }, []), M = {
          required: p,
          trigger: y,
          onTriggerChange: g,
          valueNode: b,
          onValueNodeChange: w,
          valueNodeHasChildren: _,
          onValueNodeHasChildrenChange: x,
          contentId: T,
          value: O,
          onValueChange: k,
          open: C,
          onOpenChange: P,
          dir: j,
          triggerPointerDownPosRef: R,
          disabled: f,
          name: c,
          autoComplete: u,
          form: h,
          nativeOptions: D,
          nativeSelectKey: E,
          isFormControl: N
        };
        return (0, S.jsx)(vi.bL, {
          ...v,
          children: (0, S.jsx)(Ic, {
            scope: t,
            ...M,
            children: (0, S.jsx)(Oc.Provider, {
              scope: t,
              children: (0, S.jsx)(Ec, {
                scope: t,
                onNativeOptionAdd: z,
                onNativeOptionRemove: L,
                children: Cu(m) ? m(M) : r
              })
            })
          })
        })
      }
      Lc.displayName = "SelectProvider";
      var Mc = e => {
        const {
          __scopeSelect: t,
          children: r,
          ...n
        } = e;
        return (0, S.jsx)(Lc, {
          __scopeSelect: t,
          ...n,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, S.jsxs)(S.Fragment, {
            children: [r, e ? (0, S.jsx)(ju, {
              __scopeSelect: t
            }) : null]
          })
        })
      };
      Mc.displayName = Pc;
      var Vc = "SelectTrigger",
        Ac = G.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, s = Dc(r), a = Tc(Vc, r), i = a.disabled || n, d = (0, fi.s)(t, a.onTriggerChange), l = Sc(r), c = G.useRef("touch"), [u, f, p] = Ou(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === a.value),
              n = Su(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          }), h = e => {
            i || (a.onOpenChange(!0), p()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, S.jsx)(vi.Mz, {
            asChild: !0,
            ...s,
            children: (0, S.jsx)(bi.sG.button, {
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
              "data-placeholder": Pu(a.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, ui.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && h(e)
              }),
              onPointerDown: (0, ui.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: (0, ui.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || jc.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      Ac.displayName = Vc;
      var qc = "SelectValue",
        Fc = G.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: s,
            placeholder: a = "",
            ...i
          } = e, d = Tc(qc, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== s, u = (0, fi.s)(t, d.onValueNodeChange);
          (0, Il.N)(() => {
            l(c)
          }, [l, c]);
          const f = Pu(d.value);
          return (0, S.jsx)(bi.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, S.jsx)(G.Fragment, {
              children: f ? a : s
            }, f ? "placeholder" : "value")
          })
        });
      Fc.displayName = qc;
      var Bc = G.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, S.jsx)(bi.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Bc.displayName = "SelectIcon";
      var Xc = "SelectPortal",
        [Gc, Kc] = Rc(Xc, {
          forceMount: void 0
        }),
        Hc = e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, S.jsx)(Gc, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, S.jsx)(yi.Portal, {
              asChild: !0,
              ...n
            })
          })
        };
      Hc.displayName = Xc;
      var Zc = "SelectContent",
        Uc = G.forwardRef((e, t) => {
          const r = Kc(Zc, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Tc(Zc, e.__scopeSelect),
            [a, i] = G.useState();
          return (0, Il.N)(() => {
            i(new DocumentFragment)
          }, []), (0, S.jsx)(gi.C, {
            present: n || s.open,
            children: ({
              present: e
            }) => e ? (0, S.jsx)(eu, {
              ...o,
              ref: t
            }) : (0, S.jsx)(Wc, {
              ...o,
              fragment: a
            })
          })
        });
      Uc.displayName = Zc;
      var Wc = G.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          fragment: o
        } = e;
        return o ? $a.createPortal((0, S.jsx)(Qc, {
          scope: r,
          children: (0, S.jsx)(Oc.Slot, {
            scope: r,
            children: (0, S.jsx)("div", {
              ref: t,
              children: n
            })
          })
        }), o) : null
      });
      Wc.displayName = "SelectContentFragment";
      var $c = 10,
        [Qc, Yc] = Rc(Zc),
        Jc = (0, wi.createSlot)("SelectContent.RemoveScroll"),
        eu = G.forwardRef((e, t) => {
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
          } = e, g = Tc(Zc, r), [b, w] = G.useState(null), [_, x] = G.useState(null), j = (0, fi.s)(t, e => w(e)), [C, P] = G.useState(null), [O, k] = G.useState(null), R = Sc(r), [N, D] = G.useState(!1), I = G.useRef(!1);
          G.useEffect(() => {
            if (b) return (0, _c.Eq)(b)
          }, [b]), (0, bc.Oh)();
          const T = G.useCallback(e => {
              const [t, ...r] = R().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && _ && (_.scrollTop = 0), r === n && _ && (_.scrollTop = _.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [R, _]),
            E = G.useCallback(() => T([C, b]), [T, C, b]);
          G.useEffect(() => {
            N && E()
          }, [N, E]);
          const {
            onOpenChange: z,
            triggerPointerDownPosRef: L
          } = g;
          G.useEffect(() => {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : r.composedPath().includes(b) || z(!1), document.removeEventListener("pointermove", t), L.current = null
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
          }, [b, z, L]), G.useEffect(() => {
            const e = () => z(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [z]);
          const [M, V] = Ou(e => {
            const t = R().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Su(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), A = G.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (P(e), n && (I.current = !0))
          }, [g.value]), q = G.useCallback(() => b?.focus(), [b]), F = G.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && k(e)
          }, [g.value]), B = "popper" === n ? ru : tu, X = B === ru ? {
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
          return (0, S.jsx)(Qc, {
            scope: r,
            content: b,
            viewport: _,
            onViewportChange: x,
            itemRefCallback: A,
            selectedItem: C,
            onItemLeave: q,
            itemTextRefCallback: F,
            focusSelectedItem: E,
            selectedItemText: O,
            position: n,
            isPositioned: N,
            searchRef: M,
            children: (0, S.jsx)(xc.RemoveScroll, {
              as: Jc,
              allowPinchZoom: !0,
              children: (0, S.jsx)(wc.FocusScope, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, ui.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, S.jsx)(hi.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, S.jsx)(B, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...X,
                    onPlaced: () => D(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, ui.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || V(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = R().filter(e => !e.disabled);
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
      eu.displayName = "SelectContentImpl";
      var tu = G.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, s = Tc(Zc, r), a = Yc(Zc, r), [i, d] = G.useState(null), [l, c] = G.useState(null), u = (0, fi.s)(t, e => c(e)), f = Sc(r), p = G.useRef(!1), h = G.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = a, b = G.useCallback(() => {
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
                c = window.innerWidth - $c,
                u = cd(s, [$c, Math.max($c, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                s = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - s,
                d = e.width + a,
                l = Math.max(d, t.width),
                c = window.innerWidth - $c,
                u = cd(s, [$c, Math.max($c, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const a = f(),
              d = window.innerHeight - 2 * $c,
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
              P = e.top + e.height / 2 - $c,
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
            i.style.margin = `${$c}px 0`, i.style.minHeight = _ + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, s.trigger, s.valueNode, i, l, m, v, y, s.dir, n]);
        (0, Il.N)(() => b(), [b]);
        const [w, _] = G.useState();
        (0, Il.N)(() => {
          l && _(window.getComputedStyle(l).zIndex)
        }, [l]);
        const x = G.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, S.jsx)(nu, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: x,
          children: (0, S.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, S.jsx)(bi.sG.div, {
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
      tu.displayName = "SelectItemAlignedPosition";
      var ru = G.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = $c,
          ...s
        } = e, a = Dc(r);
        return (0, S.jsx)(vi.UC, {
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
      ru.displayName = "SelectPopperPosition";
      var [nu, ou] = Rc(Zc, {}), su = "SelectViewport", au = G.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, s = Yc(su, r), a = ou(su, r), i = (0, fi.s)(t, s.onViewportChange), d = G.useRef(0);
        return (0, S.jsxs)(S.Fragment, {
          children: [(0, S.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, S.jsx)(Oc.Slot, {
            scope: r,
            children: (0, S.jsx)(bi.sG.div, {
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
              onScroll: (0, ui.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * $c,
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
      au.displayName = su;
      var iu = "SelectGroup",
        [du, lu] = Rc(iu);
      G.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, mi.useId)();
        return (0, S.jsx)(du, {
          scope: r,
          id: o,
          children: (0, S.jsx)(bi.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = iu;
      var cu = "SelectLabel";
      G.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = lu(cu, r);
        return (0, S.jsx)(bi.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = cu;
      var uu = "SelectItem",
        [fu, pu] = Rc(uu),
        hu = G.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: s,
            ...a
          } = e, i = Tc(uu, r), d = Yc(uu, r), l = i.value === n, [c, u] = G.useState(s ?? ""), [f, p] = G.useState(!1), h = (0, fi.s)(t, e => d.itemRefCallback?.(e, n, o)), m = (0, mi.useId)(), v = G.useRef("touch"), y = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          return (0, S.jsx)(fu, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: l,
            onItemTextChange: G.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, S.jsx)(Oc.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, S.jsx)(bi.sG.div, {
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
                onFocus: (0, ui.mK)(a.onFocus, () => p(!0)),
                onBlur: (0, ui.mK)(a.onBlur, () => p(!1)),
                onClick: (0, ui.mK)(a.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: (0, ui.mK)(a.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: (0, ui.mK)(a.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: (0, ui.mK)(a.onPointerMove, e => {
                  v.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, ui.mK)(a.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, ui.mK)(a.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (Cc.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      hu.displayName = uu;
      var mu = "SelectItemText",
        vu = G.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...s
          } = e, a = Tc(mu, r), i = Yc(mu, r), d = pu(mu, r), l = zc(mu, r), [c, u] = G.useState(null), f = (0, fi.s)(t, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, h = G.useMemo(() => (0, S.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = l;
          return (0, Il.N)(() => (m(h), () => v(h)), [m, v, h]), (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(bi.sG.span, {
              id: d.textId,
              ...s,
              ref: f
            }), d.isSelected && a.valueNode && !a.valueNodeHasChildren && !Pu(a.value) ? $a.createPortal(s.children, a.valueNode) : null]
          })
        });
      vu.displayName = mu;
      var yu = "SelectItemIndicator";
      G.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return pu(yu, r).isSelected ? (0, S.jsx)(bi.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = yu;
      var gu = "SelectScrollUpButton";
      G.forwardRef((e, t) => {
        const r = Yc(gu, e.__scopeSelect),
          n = ou(gu, e.__scopeSelect),
          [o, s] = G.useState(!1),
          a = (0, fi.s)(t, n.onScrollButtonChange);
        return (0, Il.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              s(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, S.jsx)(wu, {
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
      }).displayName = gu;
      var bu = "SelectScrollDownButton";
      G.forwardRef((e, t) => {
        const r = Yc(bu, e.__scopeSelect),
          n = ou(bu, e.__scopeSelect),
          [o, s] = G.useState(!1),
          a = (0, fi.s)(t, n.onScrollButtonChange);
        return (0, Il.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              s(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, S.jsx)(wu, {
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
      }).displayName = bu;
      var wu = G.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, s = Yc("SelectScrollButton", r), a = G.useRef(null), i = Sc(r), d = G.useCallback(() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }, []);
        return G.useEffect(() => () => d(), [d]), (0, Il.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, S.jsx)(bi.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, ui.mK)(o.onPointerDown, () => {
            null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, ui.mK)(o.onPointerMove, () => {
            s.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, ui.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      G.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, S.jsx)(bi.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var _u = "SelectArrow";
      G.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Dc(r);
        return "popper" === Yc(_u, r).position ? (0, S.jsx)(vi.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = _u;
      var xu = "SelectBubbleInput",
        ju = G.forwardRef(({
          __scopeSelect: e,
          ...t
        }, r) => {
          const n = Tc(xu, e),
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
            p = G.useRef(null),
            h = (0, fi.s)(r, p),
            m = o ?? "",
            v = (0, fd.Z)(m),
            y = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return G.useEffect(() => {
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
          }, [v, m]), (0, S.jsxs)(bi.sG.select, {
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
              ...xi.VISUALLY_HIDDEN_STYLES,
              ...t.style
            },
            ref: h,
            defaultValue: m,
            children: [Pu(o) && !y ? (0, S.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function Cu(e) {
        return "function" == typeof e
      }

      function Pu(e) {
        return "" === e || void 0 === e
      }

      function Ou(e) {
        const t = (0, Dl.c)(e),
          r = G.useRef(""),
          n = G.useRef(0),
          o = G.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          s = G.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return G.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s]
      }

      function Su(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let s = (a = e, i = Math.max(o, 0), a.map((e, t) => a[(i + t) % a.length]));
        var a, i;
        1 === n.length && (s = s.filter(e => e !== r));
        const d = s.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }

      function ku(e) {
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

      function Ru(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Nu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ru(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ku(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ru(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Du(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      ju.displayName = xu;
      var Iu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Nu(Nu({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Iu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Du(e.variantClassNames, e => Du(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Eu = Tu({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zu = Tu({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Lu = Tu({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mu = Tu({
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
        Vu = Tu({
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
        Au = Tu({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const qu = (0, G.createContext)(null);

      function Fu() {
        const e = (0, G.useContext)(qu);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Bu = (0, G.forwardRef)(({
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
          const v = (0, G.useRef)(null),
            y = (0, $.UP)(v, m),
            g = (0, G.useId)(),
            b = (0, G.useId)(),
            w = (0, G.useId)(),
            _ = (0, G.useId)(),
            x = (0, G.useId)(),
            j = (0, G.useId)(),
            C = (0, G.useRef)(null),
            P = (0, G.useRef)(null),
            O = (0, G.useRef)(null),
            [k = !1, R] = (0, $.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            N = (0, Z.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, S.jsx)(qu.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: j,
              hintId: _,
              popoverId: x,
              labelRef: C,
              descriptionRef: P,
              hintRef: O,
              defaultValue: s,
              onValueChange: a,
              value: d,
              isOpen: k,
              setIsOpen: R,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, S.jsx)(Mc, {
              required: r,
              disabled: n,
              open: k,
              onOpenChange: () => R(!o && !k),
              value: d,
              defaultValue: s,
              onValueChange: a,
              name: i,
              children: (0, S.jsx)("div", {
                ref: y,
                ...N,
                children: e
              })
            })
          })
        }),
        Xu = (0, G.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: s
          } = Fu(), a = (0, Z.mergeProps)({
            id: s,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Eu({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, S.jsx)(Uc, {
            ...a,
            ref: o,
            children: (0, S.jsx)(au, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Gu = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.mergeProps)({
            "data-testid": e
          }, t);
          return (0, S.jsx)(au, {
            ref: r,
            ...n
          })
        }),
        Ku = (0, G.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, S.jsxs)(hc, {
            ...o,
            ref: n,
            children: [(0, S.jsx)(Gu, {
              asChild: !0,
              children: (0, S.jsx)(mc, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, S.jsx)(vc, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, S.jsx)(yc, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Hu = (0, G.forwardRef)(({
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
          } = Fu(), {
            isPressed: w,
            pressProps: _
          } = (0, bl.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [x, j] = (0, G.useState)(!1), [C, P] = (0, G.useState)(!1);
          (0, G.useEffect)(() => {
            j(!!m.current || !!y.current), P(!!v.current)
          }, []);
          const O = (0, Z.mergeProps)({
              id: f,
              className: Vu({
                size: b,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!w,
                isDisabled: !!l
              }),
              "aria-labelledby": x ? (0, Z.joinStrings)(r, c, u) : r,
              "aria-describedby": C ? (0, Z.joinStrings)(n, h) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": g ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!w
            }, (0, Z.omit)(_, "onKeyDown"), s),
            k = o ? Q.DX : Ac;
          return (0, S.jsx)(k, {
            ...O,
            ref: a,
            children: e
          })
        }),
        Zu = (0, G.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            a = t ? Q.DX : "span";
          return (0, S.jsx)(a, {
            ...s,
            ref: o,
            children: (0, S.jsx)(Fc, {
              placeholder: e
            })
          })
        }),
        Uu = (0, G.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: s,
            isOpen: a
          } = Fu(), i = a ? le.ChevronUp : le.ChevronDown, d = (0, Z.mergeProps)({
            asChild: !0,
            className: Au({
              isDisabled: s || o
            }),
            "data-testid": t
          }, r);
          return (0, S.jsx)(Bc, {
            ...d,
            ref: n,
            children: e || (0, S.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Wu = (0, G.forwardRef)(({
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
          } = Fu(), f = i && !o, p = (0, $.UP)(c, a), h = (0, Z.mergeProps)({
            id: s.id || l,
            htmlFor: u,
            "data-testid": e,
            className: Mu({
              showAsterisk: f,
              isDisabled: d
            })
          }, s), m = t ? Q.DX : "label";
          return (0, S.jsx)(Q.s6, {
            enabled: n,
            children: (0, S.jsx)(m, {
              ...h,
              ref: p,
              children: r
            })
          })
        }),
        $u = (0, G.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a,
            descriptionRef: i
          } = Fu(), d = (0, $.UP)(i, o), l = (0, Z.mergeProps)({
            className: zu({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), c = r ? Q.DX : "div";
          return (0, S.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        Qu = (0, G.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            hintRef: a,
            isDisabled: i
          } = Fu(), d = (0, $.UP)(a, o), l = (0, Z.mergeProps)({
            className: Lu({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? Q.DX : "div";
          return (0, S.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        Yu = (0, G.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, G.useRef)(null),
            i = (0, $.UP)(a, s),
            d = (0, Z.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, S.jsx)(hu, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Ju = (0, G.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, S.jsx)(vu, {
            ref: n,
            asChild: !0,
            children: (0, S.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        ef = (0, G.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, S.jsx)(Bc, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        tf = Hc,
        rf = (0, G.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Fu(), i = (0, Z.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? Q.DX : kl;
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        nf = Rl,
        of = Nl;
      var sf = r(56570),
        af = r(53406),
        df = r(2544),
        lf = r(42027),
        cf = r(24304);

      function uf(e, t, r) {
        let n = (0, cf.J)(e => {
          r && !e.defaultPrevented && r(t)
        });
        (0, G.useEffect)(() => {
          let t = e?.current?.form;
          return t?.addEventListener("reset", n), () => {
            t?.removeEventListener("reset", n)
          }
        }, [e])
      }
      var ff = r(18601),
        pf = r(42942);

      function hf(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, pf.N)(() => {
          if ("native" === n && r?.current && "setCustomValidity" in r.current && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: mf(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let s = (0, G.useRef)(!1),
          a = (0, cf.J)(() => {
            s.current || t.resetValidation()
          }),
          i = (0, cf.J)(e => {
            t.displayValidation.isInvalid || t.commitValidation();
            let n = r?.current?.form;
            !e.defaultPrevented && r && n && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!1 === r.validity?.valid) return r
              }
              return null
            }(n) === r.current && (o ? o() : r.current?.focus(), (0, ff.Cl)("keyboard")), e.preventDefault()
          }),
          d = (0, cf.J)(() => {
            t.commitValidation()
          });
        (0, G.useEffect)(() => {
          let e = r?.current;
          if (!e) return;
          let t = e.form,
            n = t?.reset;
          return t && (t.reset = () => {
            s.current = !window.event || "message" === window.event.type && (0, af.wt)(window.event) instanceof MessagePort, n?.call(t), s.current = !1
          }), e.addEventListener("invalid", i), e.addEventListener("change", d), t?.addEventListener("reset", a), () => {
            e.removeEventListener("invalid", i), e.removeEventListener("change", d), t?.removeEventListener("reset", a), t && (t.reset = n)
          }
        }, [r, n])
      }

      function mf(e) {
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
      var vf = r(36052);

      function yf(e = !0) {
        let t = (0, vf.Bi)(),
          [r, n] = function(e = !0) {
            let [t, r] = (0, G.useState)(e), n = (0, G.useRef)(!1), o = (0, G.useCallback)(e => {
              n.current = !0, r(!!e)
            }, []);
            return (0, pf.N)(() => {
              n.current || r(!1)
            }, []), [o, t]
          }(e);
        return {
          id: n ? t : void 0,
          ref: r
        }
      }
      const gf = {
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
        bf = {
          ...gf,
          customError: !0,
          valid: !1
        },
        wf = {
          isInvalid: !1,
          validationDetails: gf,
          validationErrors: []
        },
        _f = (0, G.createContext)({}),
        xf = "__reactAriaFormValidationState";

      function jf(e) {
        if (e[xf]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: s
          } = e[xf];
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
              validationDetails: bf
            } : null,
            l = (0, G.useMemo)(() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return Cf(r)
                }
                return []
              }(a, o);
              return Pf(e)
            }, [a, o]);
          s?.validationDetails.valid && (s = void 0);
          let c = (0, G.useContext)(_f),
            u = (0, G.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => Cf(c[e])) : Cf(c[n]) : [], [c, n]),
            [f, p] = (0, G.useState)(c),
            [h, m] = (0, G.useState)(!1);
          c !== f && (p(c), m(!1));
          let v = (0, G.useMemo)(() => Pf(h ? [] : u), [h, u]),
            y = (0, G.useRef)(wf),
            [g, b] = (0, G.useState)(wf),
            w = (0, G.useRef)(wf),
            [_, x] = (0, G.useState)(!1);
          return (0, G.useEffect)(() => {
            if (!_) return;
            x(!1);
            let e = l || s || y.current;
            Of(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: d || v || l || s || wf,
            displayValidation: "native" === i ? d || v || g : d || v || l || s || g,
            updateValidation(e) {
              "aria" !== i || Of(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = wf;
              Of(e, w.current) || (w.current = e, b(e)), "native" === i && x(!1), m(!0)
            },
            commitValidation() {
              "native" === i && x(!0), m(!0)
            }
          }
        }(e)
      }

      function Cf(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Pf(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: bf
        } : null
      }

      function Of(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }

      function Sf(e, t, r) {
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
        } = e, w = jf({
          ...e,
          value: t.isSelected
        }), {
          isInvalid: _,
          validationErrors: x,
          validationDetails: j
        } = w.displayValidation;
        hf(e, w, r);
        let {
          pressProps: C,
          isPressed: P
        } = (0, bl.d)({
          onPressStart: h,
          onPressEnd: m,
          onPressChange: v,
          onPress: y,
          onPressUp: g,
          onClick: b,
          isDisabled: n
        }), [O, S] = (0, G.useState)(!1), {
          pressProps: k
        } = (0, bl.d)({
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
              [xf]: o
            } = e, {
              commitValidation: s
            } = o || w;
            s()
          },
          isDisabled: n || o
        }), {
          focusableProps: R
        } = (0, lf.Wc)(e, r), N = (0, df.v)(C, R), D = (0, sf.$)(e, {
          labelable: !0
        });
        uf(r, t.defaultSelected, t.setSelected);
        let I = yf(),
          T = yf();
        return {
          labelProps: (0, df.v)(k, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, df.v)(D, {
            checked: t.isSelected,
            "aria-required": l && "aria" === c || void 0,
            required: l && "native" === c,
            "aria-invalid": _ || "invalid" === e.validationState || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            "aria-describedby": [I.id, T.id, p].filter(Boolean).join(" ") || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected((0, af.wt)(e).checked)
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
          validationErrors: x,
          validationDetails: j
        }
      }
      const kf = "undefined" != typeof document ? G.useInsertionEffect ?? G.useLayoutEffect : () => {};

      function Rf(e, t, r) {
        let [n, o] = (0, G.useState)(e || t), s = (0, G.useRef)(n), a = (0, G.useRef)(void 0 !== e), i = void 0 !== e;
        (0, G.useEffect)(() => {
          a.current, a.current = i
        }, [i]);
        let d = i ? e : n;
        kf(() => {
          s.current = d
        });
        let [, l] = (0, G.useReducer)(() => ({}), {}), c = (0, G.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(s.current) : e;
          Object.is(s.current, n) || (s.current = n, o(n), l(), r?.(n, ...t))
        }, [r]);
        return [d, c]
      }

      function Nf(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = Rf(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, G.useState)(r);
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

      function Df(e) {
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

      function If(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Tf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? If(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Df(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : If(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ef(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var zf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Lf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Tf(Tf({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ef(e.variantClassNames, e => Ef(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Mf = Lf({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vf = Lf({
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
        Af = Lf({
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
        qf = Lf({
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
        Ff = Lf({
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
      const Bf = (0, G.createContext)(null);

      function Xf() {
        const e = (0, G.useContext)(Bf);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Gf = (0, G.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: s = !1,
          isReadOnly: a = !1,
          ...i
        }, d) => {
          const l = (0, Z.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? Q.DX : "div",
            u = (0, G.useId)(),
            f = (0, G.useId)(),
            p = (0, G.useId)();
          return (0, S.jsx)(Bf.Provider, {
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
            children: (0, S.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        Kf = (0, G.forwardRef)(({
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
          const p = (0, G.useRef)(null),
            h = (0, $.UP)(p, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: _
            } = Xf(),
            x = Nf({
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
                ...a
              } = Sf(e, t, r);
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
              "aria-labelledby": (0, Z.joinStrings)(n, g),
              "aria-describedby": (0, Z.joinStrings)(o, b),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: _
            }, x, p),
            C = (0, Z.mergeProps)({
              className: Ff({
                appearance: v
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": w || _,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || _ || x.toggle()
              }
            }, u);
          return (0, S.jsxs)("div", {
            ...C,
            children: [(0, S.jsx)(Q.s6, {
              children: (0, S.jsx)("input", {
                ...j,
                ref: h
              })
            }), (0, S.jsx)("div", {
              className: qf({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, S.jsx)("div", {
                className: Vf({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        Hf = (0, G.forwardRef)(({
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
          } = Xf(), c = (0, Z.mergeProps)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Af({
              isDisabled: a,
              size: l
            })
          }, o), u = t ? Q.DX : "label";
          return (0, S.jsx)(Q.s6, {
            enabled: n,
            children: (0, S.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Zf = (0, G.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Xf(), i = n.id || a, d = (0, Z.mergeProps)({
            className: Mf({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? Q.DX : "div";
          return (0, S.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        Uf = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Wf = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        $f = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Qf = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Yf = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Jf = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function ep(e) {
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

      function tp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function rp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ep(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
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
        sp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rp(rp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) op(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return np(e.variantClassNames, e => np(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ap = sp({
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
        ip = sp({
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
        dp = sp({
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
        lp = sp({
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
        cp = sp({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        up = sp({
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
      const fp = (0, G.createContext)(null);

      function pp() {
        const e = (0, G.useContext)(fp);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const hp = (0, G.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...s
        }, a) => {
          const i = (0, Z.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, Z.omit)(s, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? Q.DX : "div",
            l = (0, G.useId)(),
            c = (0, G.useId)(),
            u = (0, G.useId)();
          return (0, S.jsx)(fp.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...s
            },
            children: (0, S.jsx)(d, {
              ...i,
              ref: a,
              children: o
            })
          })
        }),
        mp = (0, G.forwardRef)(({
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
          } = pp(), x = (0, G.useRef)(null), j = f.id || w, {
            isPressed: C,
            pressProps: P
          } = (0, bl.d)({
            ref: x
          }), {
            setSelected: O,
            toggle: k,
            ...R
          } = Nf({
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
            } = Sf(e, t, r), {
              isIndeterminate: h
            } = e;
            return (0, G.useEffect)(() => {
              r.current && (r.current.indeterminate = !!h)
            }), {
              labelProps: (0, df.v)(n, (0, G.useMemo)(() => ({
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
            id: j,
            name: o,
            ..._
          }, {
            ...R,
            toggle: k,
            setSelected: _.isReadOnly ? () => !1 : O
          }, x), E = (0, Z.mergeProps)({
            className: ip({
              size: h
            }),
            onClick: e => {
              s?.(e) ?? a?.(e), e.defaultPrevented || I || T || k()
            }
          }, P, f), z = (0, Z.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, Z.joinStrings)(c, b),
            "aria-describedby": (0, Z.joinStrings)(d, g),
            "aria-errormessage": (0, Z.joinStrings)(l, _.isInvalid ? g : void 0),
            "aria-required": y,
            required: y
          }, N), L = v ? i[`Dash${h}`] : i[`Check${h}`];
          return (0, S.jsxs)("div", {
            ...E,
            children: [(0, S.jsx)(Q.s6, {
              children: (0, S.jsx)("input", {
                ...z,
                ref: p
              })
            }), (0, S.jsx)("div", {
              className: (0, de.clsx)(ap({
                size: h,
                appearance: m
              }), u),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : D ? "checked" : "unchecked",
              "data-disabled": I || T,
              "data-testid": e,
              "data-pressed": C,
              children: (0, S.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (D || v) && (0, S.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        vp = (0, G.forwardRef)(({
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
          } = pp(), u = s.id || d, f = c && !o, p = (0, Z.mergeProps)({
            className: up({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: s.htmlFor || l
          }, s), h = t ? Q.DX : "label";
          return (0, S.jsx)(Q.s6, {
            enabled: n,
            children: (0, S.jsx)(h, {
              ...p,
              ref: a,
              children: e
            })
          })
        }),
        yp = (0, G.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = pp(), i = n.id || a, d = (0, Z.mergeProps)({
            className: dp({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? Q.DX : "div";
          return (0, S.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        gp = (0, G.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = pp(), a = n.id || s, i = (0, Z.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: a
          }, n), d = t ? Q.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        bp = (0, G.createContext)(null);

      function wp() {
        const e = (0, G.useContext)(bp);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const _p = (0, G.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...s
        }, a) => {
          const [i, d] = (0, G.useState)(null), [l, c] = (0, G.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, Z.mergeProps)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, s), p = t ? Q.DX : "fieldset";
          return (0, S.jsx)(bp.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, S.jsx)(p, {
              ...f,
              ref: a,
              children: r
            })
          })
        }),
        xp = (0, G.forwardRef)(({
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
          } = wp(), l = d && !s, c = (0, Z.mergeProps)({
            "data-testid": r,
            className: cp({
              showAsterisk: l
            })
          }, a), u = t ? Q.DX : "legend";
          return (0, S.jsx)(Q.s6, {
            enabled: o,
            children: (0, S.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, S.jsx)(Q.xV, {
                children: e
              }), !d && (0, S.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        jp = (0, G.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: s
          } = wp(), a = (0, G.useId)(), i = n.id || a;
          (0, G.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, Z.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = t ? Q.DX : "div";
          return (0, S.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        Cp = (0, G.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = wp(), a = (0, Z.mergeProps)({
            "data-testid": r,
            className: lp({
              size: s
            })
          }, n), i = t ? Q.DX : "div";
          return (0, S.jsx)(i, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Pp = (0, G.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: s
          } = wp(), a = (0, G.useId)(), i = n.id || a;
          (0, G.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, Z.mergeProps)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = le.X,
            c = t ? Q.DX : "div";
          return (0, S.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, S.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, S.jsx)(Q.xV, {
              children: e
            })]
          })
        });

      function Op(e) {
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

      function Sp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Op(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Rp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Np = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Dp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kp(kp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Np(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rp(e.variantClassNames, e => Rp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ip = Dp({
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
        Tp = Dp({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ep = Dp({
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
        zp = Dp({
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
      const Lp = (0, G.createContext)(null);

      function Mp() {
        const e = (0, G.useContext)(Lp);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Vp = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const l = (0, Z.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? Q.DX : "div",
            u = (0, G.useId)(),
            f = (0, G.useId)(),
            p = (0, G.useId)(),
            h = (0, G.useId)();
          return (0, S.jsx)(Lp.Provider, {
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
            children: (0, S.jsx)(c, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        Ap = (0, G.forwardRef)(({
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
          } = Mp(), u = (0, Z.mergeProps)({
            className: Ep({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, s), f = t ? Q.DX : "label";
          return (0, S.jsx)(Q.s6, {
            enabled: n,
            children: (0, S.jsx)(f, {
              ...u,
              ref: a,
              children: e
            })
          })
        }),
        qp = (0, G.forwardRef)(({
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
          } = Mp(), b = (0, G.useRef)(null), w = (0, $.UP)(b, c), _ = (0, Z.mergeProps)({
            className: zp({
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
            "aria-labelledby": (0, Z.joinStrings)(l.id, f, h, i),
            "aria-describedby": (0, Z.joinStrings)(u, d),
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
          }, l), x = e ? Q.DX : "textarea";
          return (0, S.jsx)(x, {
            ref: w,
            ..._,
            children: t
          })
        }),
        Fp = (0, G.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Mp(), i = (0, Z.mergeProps)({
            className: Ip({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? Q.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Bp = (0, G.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = Mp(), i = (0, Z.mergeProps)({
            className: Tp({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? Q.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Xp = (0, G.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Mp(), i = (0, Z.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? Q.DX : kl;
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Gp = Rl,
        Kp = Nl;
      let Hp = Math.round(1e10 * Math.random()),
        Zp = 0;
      var Up = r(37486);
      class Wp {
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
          if (!(0, af.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, af.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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
      var $p = r(66801),
        Qp = r(53903);

      function Yp(e, t) {
        return !!e && !!t && t.some(t => (0, af.sD)(t, e))
      }

      function Jp(e, t, r) {
        let n = t?.tabbable ? Qp.A : Qp.t,
          o = e?.nodeType === Node.ELEMENT_NODE ? e : null,
          s = (0, $p.TW)(o),
          a = function(e, t, r, n) {
            return (0, Up.Nf)() ? new Wp(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(s, e || s, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if ((0, af.sD)(t?.from, e)) return NodeFilter.FILTER_REJECT;
              if (t?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from((0, $p.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let r = (0, $p.mD)(e);
                      return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === a.currentNode.tagName && "radio" === a.currentNode.type && a.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !Yp(e, r) || t?.accept && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return t?.from && (a.currentNode = t.from), a
      }
      class eh {
        constructor() {
          this.fastMap = new Map, this.root = new th({
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
          let o = new th({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Yp(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          let e = new eh;
          for (let t of this.traverse()) e.addTreeNode(t.scopeRef, t.parent?.scopeRef ?? null, t.nodeToRestore);
          return e
        }
      }
      class th {
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
      new eh;
      const rh = new WeakMap;

      function nh(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, vf.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function oh(e) {
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
          t = (0, vf.Bi)(t);
          let a = (0, vf.Bi)(),
            i = {};
          return r && (n = n ? `${a} ${n}` : a, i = {
            id: a,
            htmlFor: "label" === s ? t : void 0
          }), {
            labelProps: i,
            fieldProps: nh({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), i = (0, vf.X1)([Boolean(t), Boolean(r), n, o]), d = (0, vf.X1)([Boolean(t), Boolean(r), n, o]);
        return a = (0, df.v)(a, {
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
      var sh = r(58085),
        ah = r(18125);
      const ih = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        dh = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function lh(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return ih.has(t.script)
        }
        let t = e.split("-")[0];
        return dh.has(t)
      }
      var ch = r(44014);
      const uh = Symbol.for("react-aria.i18n.locale");

      function fh() {
        let e = "undefined" != typeof window && window[uh] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: lh(e) ? "rtl" : "ltr"
        }
      }
      let ph = fh(),
        hh = new Set;

      function mh() {
        ph = fh();
        for (let e of hh) e(ph)
      }
      const vh = G.createContext(null);

      function yh() {
        let e = function() {
          let e = (0, ch.wR)(),
            [t, r] = (0, G.useState)(ph);
          return (0, G.useEffect)(() => (0 === hh.size && window.addEventListener("languagechange", mh), hh.add(r), () => {
            hh.delete(r), 0 === hh.size && window.removeEventListener("languagechange", mh)
          }), []), e ? {
            locale: "undefined" != typeof window && window[uh] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, G.useContext)(vh) || e
      }

      function gh(e, t) {
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
        } = yh(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: m,
          errorMessageProps: v
        } = oh({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), y = (0, sf.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, s = (0, G.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: i
          } = (0, ah.A)(), d = (0, G.useCallback)(e => {
            (0, af.sD)(e.currentTarget, (0, af.wt)(e)) && s.current.isFocusWithin && !(0, af.sD)(e.currentTarget, e.relatedTarget) && (s.current.isFocusWithin = !1, i(), r && r(e), o && o(!1))
          }, [r, o, s, i]), l = (0, sh.yB)(d), c = (0, G.useCallback)(e => {
            if (!(0, af.sD)(e.currentTarget, (0, af.wt)(e))) return;
            let t = (0, af.wt)(e);
            const r = (0, $p.TW)(t),
              i = (0, af.bq)(r);
            if (!s.current.isFocusWithin && i === t) {
              n && n(e), o && o(!0), s.current.isFocusWithin = !0, l(e);
              let t = e.currentTarget;
              a(r, "focus", e => {
                let n = (0, af.wt)(e);
                if (s.current.isFocusWithin && !(0, af.sD)(t, n)) {
                  let e = new r.defaultView.FocusEvent("blur", {
                    relatedTarget: n
                  });
                  (0, sh.o1)(e, t);
                  let o = (0, sh.eg)(e);
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
        }), b = (0, vf.Bi)(r);
        return rh.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: d
        }), {
          radioGroupProps: (0, df.v)(y, {
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
              let n, o = Jp(e.currentTarget, {
                from: (0, af.wt)(e),
                accept: e => e instanceof(0, $p.mD)(e).HTMLInputElement && "radio" === e.type
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

      function bh(e) {
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

      function wh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wh(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = bh(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var jh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ch = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _h(_h({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) jh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xh(e.variantClassNames, e => xh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ph = Ch({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Oh = Ch({
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
      const Sh = (0, G.createContext)(null);

      function kh() {
        const e = (0, G.useContext)(Sh);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Rh = (0, G.forwardRef)(({
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
          const f = (0, G.useRef)(null),
            p = (0, $.UP)(f, u),
            h = (0, G.useId)(),
            m = (0, G.useId)(),
            v = (0, G.useId)(),
            y = function(e) {
              let t = (0, G.useMemo)(() => e.name || `radio-group-${Hp}-${++Zp}`, [e.name]),
                [r, n] = Rf(e.value, e.defaultValue ?? null, e.onChange),
                [o] = (0, G.useState)(r),
                [s, a] = (0, G.useState)(null),
                i = jf({
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
            } = gh({
              ...c,
              orientation: r,
              "aria-labelledby": (0, Z.joinStrings)(h, a),
              "aria-describedby": (0, Z.joinStrings)(m, v, i),
              "aria-errormessage": (0, Z.joinStrings)(v, d)
            }, y),
            b = (0, Z.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, Z.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = s ? Q.DX : "div";
          return (0, S.jsx)(Sh.Provider, {
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
            children: (0, S.jsx)(w, {
              ref: p,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        Nh = (0, G.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: s,
            orientation: a
          } = kh(), i = (0, Z.mergeProps)({
            "data-testid": e,
            className: Oh({
              size: s,
              orientation: a
            })
          }, n), d = t ? Q.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        Dh = (0, G.forwardRef)(({
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
          } = kh(), l = i && !o, c = (0, Z.mergeProps)({
            id: s.id || d,
            "data-testid": e,
            className: Ph({
              showAsterisk: l
            })
          }, s), u = t ? Q.DX : "div";
          return (0, S.jsx)(Q.s6, {
            enabled: n,
            children: (0, S.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Ih = (0, G.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = kh(), a = (0, Z.mergeProps)({
            id: s,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? Q.DX : "div";
          return (0, S.jsx)(i, {
            ...a,
            ref: o,
            children: r
          })
        }),
        Th = (0, G.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: s,
            status: a
          } = kh(), i = (0, Z.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: s,
            status: a
          }, n), d = r ? Q.DX : kl;
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Eh = Rl,
        zh = Nl;
      var Lh = Ch({
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
        Mh = Ch({
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
        Vh = Ch({
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
        Ah = Ch({
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
      const qh = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, S.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Fh = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, S.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Bh = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, S.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        Xh = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? Q.DX : "label";
          return (0, S.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Gh = (0, G.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, G.useRef)(null),
            s = (0, $.UP)(o, n),
            a = (0, G.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = kh(),
            {
              isPressed: p,
              pressProps: h
            } = (0, bl.d)({
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
                } = (0, bl.d)({
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
                } = (0, bl.d)({
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
                } = (0, lf.Wc)((0, df.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                w = (0, df.v)(m, b),
                _ = (0, sf.$)(e, {
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
              } = rh.get(t);
              uf(r, t.defaultSelectedValue, t.setSelectedValue), hf({
                validationBehavior: S
              }, t, r);
              let k = yf();
              return {
                labelProps: (0, df.v)(y, (0, G.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, df.v)(_, {
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
            g = (0, Z.mergeProps)(m, {
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
          return (0, S.jsxs)("div", {
            className: Ah({
              size: l
            }),
            children: [(0, S.jsx)(Q.s6, {
              children: (0, S.jsx)("input", {
                type: "radio",
                ...g,
                ref: s,
                className: "foundry_1pfduet1"
              })
            }), (0, S.jsx)("div", {
              className: Vh({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": p,
              ...h,
              children: (0, S.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, S.jsx)(b, {})
              })
            })]
          })
        }),
        Kh = (0, G.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            size: a,
            state: i
          } = kh(), d = (0, G.useId)(), l = (0, Z.mergeProps)({
            id: d,
            "data-testid": e,
            className: Mh({
              size: a,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? Q.DX : "div";
          return (0, S.jsx)(Q.s6, {
            enabled: n,
            children: (0, S.jsx)(c, {
              ...l,
              ref: s,
              children: r
            })
          })
        }),
        Hh = (0, G.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = kh(), a = (0, Z.mergeProps)({
            "data-testid": e,
            className: Lh({
              isDisabled: s
            })
          }, n), i = t ? Q.DX : "span";
          return (0, S.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        });

      function Zh(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Uh(e, t, r) {
        return t = Qh(t),
          function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, Yh() ? Reflect.construct(t, r || [], Qh(e).constructor) : t.apply(e, r))
      }

      function Wh(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return Zh(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Zh(e, t) : void 0
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

      function $h(e, t, r) {
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

      function Qh(e) {
        return Qh = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Qh(e)
      }

      function Yh() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (Yh = function() {
          return !!e
        })()
      }

      function Jh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function em(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Jh(Object(r), !0).forEach(function(t) {
            $h(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function tm(e, t) {
        return tm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, tm(e, t)
      }

      function rm(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          s = t.separate,
          a = n,
          i = "",
          d = Wh(e);
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

      function nm(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          s = t.separate,
          a = t.showMask,
          i = 0,
          d = "",
          l = Wh(n);
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

      function om(e, t) {
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

      function sm(e) {
        return e.length > 0 ? $h({}, e, /./) : {}
      }

      function am(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, s = t.mask, a = t.replacement, i = t.separate, d = e.slice(n, o), l = s.slice(n, o), c = "", u = 0; u < l.length; u++) {
          var f = Object.prototype.hasOwnProperty.call(a, l[u]);
          f && void 0 !== d[u] && d[u] !== l[u] ? c += d[u] : f && i && (c += l[u])
        }
        return c
      }

      function im(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? sm(n) : n,
          s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return nm(rm(e, {
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
      var dm = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function lm(e) {
        return dm.includes(e) ? "\\".concat(e) : e
      }

      function cm(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function um(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function fm(e, t, r) {
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

      function pm(e) {
        return pm = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, pm(e)
      }

      function hm() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (hm = function() {
          return !!e
        })()
      }

      function mm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mm(Object(r), !0).forEach(function(t) {
            fm(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ym(e, t) {
        return ym = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, ym(e, t)
      }

      function gm(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return gm = function(e) {
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
              if (hm()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && ym(o, r.prototype), o
            }(e, arguments, pm(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), ym(r, e)
        }, gm(e)
      }
      var bm, wm = function(e) {
          function t(e) {
            var r;
            return cm(this, t), (r = function(e, t, r) {
              return t = pm(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, hm() ? Reflect.construct(t, r || [], pm(e).constructor) : t.apply(e, r))
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
            }), t && ym(e, t)
          }(t, e), um(t)
        }(gm(Error)),
        _m = ["options"],
        xm = ["text", "email", "tel", "search", "url"],
        jm = um(function e(t) {
          var r = t.init,
            n = t.tracking;
          cm(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (xm.includes(e.type)) {
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
              Object.defineProperty(e, "value", vm(vm({}, v), {}, {
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
                    if (h.cachedId === h.id) throw new wm("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var s = e.value,
                      a = e.selectionStart,
                      i = e.selectionEnd;
                    if (null === a || null === i) throw new wm("The selection attributes have not been initialized.");
                    var d, l = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = l.length), a > m.selectionStart ? d = "insert" : a <= m.selectionStart && a < m.selectionEnd ? d = "deleteBackward" : a === m.selectionEnd && s.length < l.length && (d = "deleteForward"), void 0 === d || ("deleteBackward" === d || "deleteForward" === d) && s.length > l.length) throw new wm("Input type detection error.");
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
                      }(g, _m);
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
      bm = jm, Object.defineProperty(bm.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Cm, Pm = ["track", "modify"];

      function Om(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? sm(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Sm = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = Uh(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = Om(r),
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
                d = Om(r),
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
                }(d, Pm),
                f = u.mask,
                p = u.replacement,
                h = u.showMask,
                m = u.separate,
                v = em(em({}, "insert" === t ? {
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
              if (!1 === y) throw new wm("Custom tracking stop.");
              null === y ? s = "" : !0 !== y && void 0 !== y && (s = y);
              var g = null == c ? void 0 : c(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? sm(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = am(n, em({
                  end: a
                }, o)),
                w = am(n, em({
                  start: i
                }, o)),
                _ = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                x = f.replace(_, "");
              if (b && (b = rm(b, {
                  replacementChars: x,
                  replacement: p,
                  separate: m
                }), x = x.slice(b.length)), s && (s = rm(s, {
                  replacementChars: x,
                  replacement: p,
                  separate: !1
                }), x = x.slice(s.length)), "insert" === t && "" === s) throw new wm("The character does not match the key value of the `replacement` object.");
              if (m) {
                var j = f.slice(a, i).replace(_, ""),
                  C = j.length - s.length;
                C < 0 ? w = w.slice(-C) : C > 0 && (w = j.slice(-C) + w)
              }
              w && (w = rm(w, {
                replacementChars: x,
                replacement: p,
                separate: m
              }));
              var P = nm(b + s + w, {
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
                    c = om(s, {
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
            return im(e, Om(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? sm(n) : n;
              return om(im(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, Om(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? sm(n) : n,
                s = am(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return rm(s, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, Om(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? sm(n) : n, s = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, i = "", d = 0; d < r.length; d++) {
                var l = r[d];
                0 === d && (i = "^"), s && (i += "("), i += Object.prototype.hasOwnProperty.call(o, l) ? "".concat(a ? "(?!".concat(lm(l), ")") : "", "(").concat(o[l].source, ")") : lm(l), d === r.length - 1 && (s && (i += ")?".repeat(r.length)), i += "$")
              }
              return i
            }(e, Om(r))
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
            }), t && tm(e, t)
          }(e, jm),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function km(e) {
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

      function Rm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Nm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rm(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = km(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Cm = Sm, Object.defineProperty(Cm.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Im = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Nm(Nm({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Im(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dm(e.variantClassNames, e => Dm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Em = Tm({
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
        zm = Tm({
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
        Lm = Tm({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mm = Tm({
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
        Vm = Tm({
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
        Am = Tm({
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
      const qm = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Fm = (0, G.createContext)(null);

      function Bm() {
        const e = (0, G.useContext)(Fm);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Xm = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, G.useState)("text"), u = `${(0,G.useId)()}-label`, f = `${(0,G.useId)()}-input`, p = `${(0,G.useId)()}-description`, h = (0, G.useRef)(null), m = (0, G.useRef)(qm), v = (0, Z.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), y = e ? Q.DX : "div";
          return (0, S.jsx)(Fm.Provider, {
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
            children: (0, S.jsx)(y, {
              ref: d,
              ...v,
              children: t
            })
          })
        }),
        Gm = (0, G.forwardRef)(({
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
          } = Bm(), u = d && !o, f = (0, Z.mergeProps)({
            id: s.id || c,
            htmlFor: s.htmlFor || l,
            "data-testid": e,
            className: Am({
              showAsterisk: u,
              isDisabled: i
            })
          }, s), p = t ? Q.DX : "label";
          return (0, S.jsx)(Q.s6, {
            enabled: n,
            children: (0, S.jsx)(p, {
              ref: a,
              ...f,
              children: r
            })
          })
        }),
        Km = (0, G.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Bm(), a = (0, Z.mergeProps)({
            "data-testid": e,
            className: Lm({
              isDisabled: s
            })
          }, n), i = t ? Q.DX : "span";
          return (0, S.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        }),
        Hm = (0, G.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            isReadOnly: a,
            status: i
          } = Bm(), d = (0, Z.mergeProps)({
            "data-testid": e,
            className: (0, de.clsx)(Em({
              isDisabled: s,
              isReadOnly: a,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? Q.DX : "div";
          return (0, S.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        Zm = (0, G.forwardRef)(({
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
          } = Bm();
          (0, G.useEffect)(() => b(l), []);
          const j = "invalid" === m,
            C = (0, Z.mergeProps)({
              disabled: f,
              readOnly: p,
              required: h,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, Z.joinStrings)(v, i),
              "aria-describedby": (0, Z.joinStrings)(g, d),
              "data-testid": e,
              className: (0, de.clsx)(Vm({
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
                i = (0, G.useRef)(null),
                d = (0, G.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: s,
                  modify: a
                });
              return d.current.mask = t, d.current.replacement = r, d.current.showMask = n, d.current.separate = o, d.current.track = s, d.current.modify = a, (0, G.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(i, new Sm(d.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: s
            }),
            O = (0, $.UP)(r && n ? P : null, _, u),
            k = t ? Q.DX : "input";
          return (0, S.jsx)(k, {
            ref: O,
            ...C
          })
        }),
        Um = (0, G.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, s) => {
          const {
            isDisabled: a
          } = Bm(), i = (0, Z.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, de.clsx)(Mm({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), d = t ? Q.DX : le[e];
          return (0, S.jsx)(d, {
            ref: s,
            ...i
          })
        }),
        Wm = (0, G.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Bm(), n = (0, Z.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, de.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, S.jsx)(Ne, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        $m = (0, G.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: s,
            inputRef: a,
            focusState: i
          } = Bm(), d = "password" === o, l = d ? e : t;
          (0, G.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, Z.mergeProps)({
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
          return (0, S.jsxs)(sd, {
            children: [(0, S.jsx)(ad, {
              children: (0, S.jsx)(Wm, {
                ref: n,
                ...c
              })
            }), (0, S.jsxs)(id, {
              side: "bottom",
              align: "end",
              children: [l, (0, S.jsx)(dd, {})]
            })]
          })
        }),
        Qm = (0, G.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Bm(), i = (0, Z.mergeProps)({
            className: zm({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? Q.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ym = (0, G.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Bm(), i = (0, Z.mergeProps)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? Q.DX : kl;
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Jm = Rl,
        ev = Nl;
      var tv = r(58134);

      function rv(e, t) {
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
        } = (0, lf.Wc)(e, t), {
          pressProps: u,
          isPressed: f
        } = (0, bl.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: s,
          onClick: a,
          isDisabled: i,
          ref: t
        }), p = (0, sf.$)(d, {
          labelable: !0
        }), h = (0, df.v)(c, u), m = (0, tv.rd)(), v = (0, tv._h)(e);
        return {
          isPressed: f,
          linkProps: (0, df.v)(p, v, {
            ...h,
            ...l,
            "aria-disabled": i || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              u.onClick?.(t), (0, tv.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function nv(e) {
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

      function ov(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function sv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ov(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = nv(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ov(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function av(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var iv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sv(sv({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) iv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return av(e.variantClassNames, e => av(e, e => e.split(" ")[0]))
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
      const lv = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        cv = (0, G.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const s = (0, G.useRef)(null),
            a = (0, $.UP)(s, o),
            {
              buttonProps: i
            } = (0, $.sL)(n, s),
            d = (0, Z.mergeProps)({
              "data-testid": r,
              className: dv({
                size: t
              })
            }, i);
          return (0, S.jsx)("button", {
            ref: a,
            ...d,
            children: (0, S.jsx)(le.X, {
              label: e,
              size: lv[t]
            })
          })
        });

      function uv(e) {
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
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function pv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fv(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = uv(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function hv(e, t) {
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
        vv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = pv(pv({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) mv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hv(e.variantClassNames, e => hv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        yv = vv({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gv = vv({
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
        bv = vv({
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
      const wv = (0, G.createContext)(null);

      function _v() {
        const e = (0, G.useContext)(wv);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const xv = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, s) => {
          const a = e ? Q.DX : "div",
            i = (0, Z.mergeProps)({
              className: bv({
                status: r,
                background: n
              })
            }, o);
          return (0, S.jsx)(wv.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, S.jsx)(a, {
              ref: s,
              "data-testid": t,
              ...i
            })
          })
        }),
        jv = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Q.DX : "div",
            s = (0, Z.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Cv = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Q.DX : "div",
            s = (0, Z.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Pv = {
          danger: le.CircleX,
          information: le.Info,
          success: le.CircleCheck,
          warning: le.TriangleAlert
        },
        Ov = (0, G.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = _v(), s = e ? Q.DX : Pv[o], a = (0, Z.mergeProps)({
            className: gv({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, S.jsx)(s, {
            label: "",
            ref: n,
            ...a
          })
        }),
        Sv = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Q.DX : "div",
            s = (0, Z.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        kv = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Q.DX : "div",
            s = (0, Z.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Rv = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, G.useRef)(null),
            a = (0, $.UP)(s, o),
            i = e ? Q.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = rv(n, s),
            c = (0, Z.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, S.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...c,
            children: t
          })
        }),
        Nv = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? Q.DX : "div",
            a = (0, Z.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, S.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        Dv = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const s = e ? Q.DX : "div";
          return (0, S.jsx)(s, {
            ref: o,
            "data-testid": t,
            className: (0, de.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        Iv = (0, G.forwardRef)((e, t) => {
          const {
            background: r
          } = _v(), n = "none" !== r, o = (0, Z.mergeProps)({
            className: yv({
              hasBackground: n
            })
          }, e);
          return (0, S.jsx)(cv, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function Tv(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Ev(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : Tv(n) && Tv(o) ? Ev(n, o) : n === o
        }))
      }

      function zv(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function Lv(e) {
        return "number" == typeof e
      }

      function Mv(e) {
        return "string" == typeof e
      }

      function Vv(e) {
        return "boolean" == typeof e
      }

      function Av(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function qv(e) {
        return Math.abs(e)
      }

      function Fv(e) {
        return Math.sign(e)
      }

      function Bv(e, t) {
        return qv(e - t)
      }

      function Xv(e) {
        return Uv(e).map(Number)
      }

      function Gv(e) {
        return e[Kv(e)]
      }

      function Kv(e) {
        return Math.max(0, e.length - 1)
      }

      function Hv(e, t) {
        return t === Kv(e)
      }

      function Zv(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function Uv(e) {
        return Object.keys(e)
      }

      function Wv(e, t) {
        return [e, t].reduce((e, t) => (Uv(t).forEach(r => {
          const n = e[r],
            o = t[r],
            s = Av(n) && Av(o);
          e[r] = s ? Wv(n, o) : o
        }), e), {})
      }

      function $v(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function Qv() {
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

      function Yv(e = 0, t = 0) {
        const r = qv(e - t);

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

      function Jv(e, t, r) {
        const {
          constrain: n
        } = Yv(0, e), o = e + 1;
        let s = a(t);

        function a(e) {
          return r ? qv((o + e) % o) : n(e)
        }

        function i() {
          return s
        }

        function d() {
          return Jv(e, i(), r)
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

      function ey(e, t, r, n, o, s, a, i, d, l, c, u, f, p, h, m, v, y, g) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, j = Qv(), C = Qv(), P = Yv(50, 225).constrain(p.measure(20)), O = {
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
          z = !1;

        function L(e) {
          if (!$v(e, n) && e.touches.length >= 2) return M(e);
          const t = s.readPoint(e),
            r = s.readPoint(e, b),
            a = Bv(t, N),
            d = Bv(r, D);
          if (!T && !z) {
            if (!e.cancelable) return M(e);
            if (T = a > d, !T) return M(e)
          }
          const c = s.pointerMove(e);
          a > m && (E = !0), l.useFriction(.3).useDuration(.75), i.start(), o.add(w(c)), e.preventDefault()
        }

        function M(e) {
          const t = c.byDistance(0, !1).index !== u.get(),
            r = s.pointerUp(e) * (h ? S : O)[z ? "mouse" : "touch"],
            n = function(e, t) {
              const r = u.add(-1 * Fv(e)),
                n = c.byDistance(e, !h).distance;
              return h || qv(e) < P ? n : v && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(w(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (qv(e) <= qv(t)) return 0;
              const r = Bv(qv(e), qv(t));
              return qv(r / e)
            }(r, n),
            a = k - 10 * o,
            i = y + o / 50;
          T = !1, I = !1, C.clear(), l.useDuration(a).useFriction(i), d.distance(n, !h), z = !1, f.emit("pointerUp")
        }

        function V(e) {
          E && (e.stopPropagation(), e.preventDefault(), E = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function i(i) {
              (Vv(g) || g(e, i)) && function(e) {
                const i = $v(e, n);
                z = i, E = h && i && !e.buttons && R, R = Bv(o.get(), a.get()) >= 2, i && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (I = !0, s.pointerDown(e), l.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = z ? r : t;
                  C.add(e, "touchmove", L, x).add(e, "touchend", M).add(e, "mousemove", L, x).add(e, "mouseup", M)
                }(), N = s.readPoint(e), D = s.readPoint(e, b), f.emit("pointerDown"))
              }(i)
            }
            const d = t;
            j.add(d, "dragstart", e => e.preventDefault(), x).add(d, "touchmove", () => {}, x).add(d, "touchend", () => {}).add(d, "touchstart", i).add(d, "mousedown", i).add(d, "touchcancel", M).add(d, "contextmenu", M).add(d, "click", V, !0)
          },
          destroy: function() {
            j.clear(), C.clear()
          },
          pointerDown: function() {
            return I
          }
        }
      }

      function ty(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function s(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return ($v(r, t) ? r : r.touches[0])[o]
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
            return a && !i && qv(d) > .1 ? d : 0
          },
          readPoint: s
        }
      }

      function ry(e, t, r, n, o, s, a) {
        const i = [e].concat(n);
        let d, l, c = [],
          u = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            s && (l = f(e), c = n.map(f), d = new ResizeObserver(r => {
              (Vv(s) || s(o, r)) && function(r) {
                for (const s of r) {
                  if (u) return;
                  const r = s.target === e,
                    a = n.indexOf(s.target),
                    i = r ? l : c[a];
                  if (qv(f(r ? e : n[a]) - i) >= .5) {
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

      function ny(e, t, r, n, o) {
        const s = o.measure(10),
          a = o.measure(50),
          i = Yv(.1, .99);
        let d = !1;

        function l() {
          return !d && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: l,
          constrain: function(o) {
            if (!l()) return;
            const d = e.reachedMin(t.get()) ? "min" : "max",
              c = qv(e[d] - t.get()),
              u = r.get() - t.get(),
              f = i.constrain(c / a);
            r.subtract(u * f), !o && qv(u) < s && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            d = !e
          }
        }
      }

      function oy(e, t, r, n) {
        const o = t.min + .1,
          s = t.max + .1,
          {
            reachedMin: a,
            reachedMax: i
          } = Yv(o, s),
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

      function sy(e) {
        let t = e;

        function r(e) {
          return Lv(e) ? e : e.get()
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

      function ay(e, t) {
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

      function iy(e, t, r, n, o, s, a, i, d) {
        const l = Xv(o),
          c = Xv(o).reverse(),
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
              slideLocation: sy(-1),
              translate: ay(e, d[t]),
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

      function dy(e, t, r) {
        let n, o = !1;
        return {
          init: function(s) {
            r && (n = new MutationObserver(e => {
              o || (Vv(r) || r(s, e)) && function(e) {
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

      function ly(e, t, r, n, o, s, a) {
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
              return Mv(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(i, S), N = !u && !!g, D = u || !!g, {
          slideSizes: I,
          slideSizesWithGaps: T,
          startGap: E,
          endGap: z
        } = function(e, t, r, n, o, s) {
          const {
            measureSize: a,
            startEdge: i,
            endEdge: d
          } = e, l = r[0] && o, c = function() {
            if (!l) return 0;
            const e = r[0];
            return qv(t[i] - e[i])
          }(), u = function() {
            if (!l) return 0;
            const e = s.getComputedStyle(Gv(n));
            return parseFloat(e.getPropertyValue(`margin-${d}`))
          }(), f = r.map(a), p = r.map((e, t, r) => {
            const n = !t,
              o = Hv(r, t);
            return n ? f[t] + c : o ? f[t] + u : r[t + 1][i] - e[i]
          }).map(qv);
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
          } = e, f = Lv(r), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return Xv(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? Xv(e).reduce((r, f, p) => {
                  const h = Gv(r) || 0,
                    m = 0 === h,
                    v = f === Kv(e),
                    y = o[l] - s[h][l],
                    g = o[l] - s[f][c],
                    b = !n && m ? u(a) : 0,
                    w = qv(g - (!n && v ? u(i) : 0) - (y + b));
                  return p && w > t + d && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(O, S, v, u, C, P, E, z, 2), {
          snaps: M,
          snapsAligned: V
        } = function(e, t, r, n, o) {
          const {
            startEdge: s,
            endEdge: a
          } = e, {
            groupSlides: i
          } = o, d = i(n).map(e => Gv(e)[a] - e[0][s]).map(qv).map(t.measure), l = n.map(e => r[s] - e[s]).map(e => -qv(e)), c = i(l).map(e => e[0]).map((e, t) => e + d[t]);
          return {
            snaps: l,
            snapsAligned: c
          }
        }(O, R, C, P, L), A = -Gv(M) + Gv(T), {
          snapsContained: q,
          scrollContainLimit: F
        } = function(e, t, r, n) {
          const o = Yv(-t + e, 0),
            s = r.map((e, t) => {
              const {
                min: n,
                max: s
              } = o, a = o.constrain(e), d = !t, l = Hv(r, t);
              return d ? s : l || i(n, a) ? n : i(s, a) ? s : a
            }).map(e => parseFloat(e.toFixed(3))),
            a = function() {
              const e = s[0],
                t = Gv(s);
              return Yv(s.lastIndexOf(e), s.indexOf(t) + 1)
            }();

          function i(e, t) {
            return Bv(e, t) <= 1
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
        }(S, A, V, g), B = N ? q : V, {
          limit: X
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: Yv(r ? n - e : Gv(t), n)
          }
        }(A, B, u), G = Jv(Kv(B), c, u), K = G.clone(), H = Xv(r), Z = function(e, t, r, n) {
          const o = Qv(),
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
        })(ie, e)), U = B[G.get()], W = sy(U), $ = sy(U), Q = sy(U), Y = sy(U), J = function(e, t, r, n, o) {
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
              return i ? (r.set(e), s += t / i, s *= d, l += s, e.add(s), o = l - c) : (s = 0, r.set(n), e.set(n), o = t), a = Fv(o), c = l, p
            },
            settled: function() {
              return qv(n.get() - t.get()) < .001
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
            return e.concat().sort((e, t) => qv(e) - qv(t))[0]
          }

          function l(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return d(o);
            const s = o.filter(e => Fv(e) === n);
            return s.length ? d(s) : Gv(o) - r
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
                    })).sort((e, t) => qv(e.diff) - qv(t.diff)),
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
        }(u, B, A, X, Y), te = function(e, t, r, n, o, s, a) {
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
        }(X), ne = Qv(), oe = function(e, t, r, n) {
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
                return Uv(o).reduce((t, r) => {
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
                o = Hv(r, t);
              return n ? Zv(Gv(r[0]) + 1) : o ? Zv(Kv(s) - Gv(r)[0] + 1, Gv(r)[0]) : e
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
                  (Vv(i) || i(u, t)) && function(t) {
                    if ((new Date).getTime() - l > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const s = r.findIndex(e => e.includes(t));
                    Lv(s) && (o.useDuration(0), n.index(s, 0), a.emit("slideFocus"))
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
          dragHandler: ey(O, e, n, o, Y, ty(O, o), W, Z, te, J, ee, G, a, k, p, h, y, .68, _),
          eventStore: ne,
          percentOfView: k,
          index: G,
          indexPrevious: K,
          limit: X,
          location: W,
          offsetLocation: Q,
          previousLocation: $,
          options: s,
          resizeHandler: ry(t, a, o, r, O, b, j),
          scrollBody: J,
          scrollBounds: ny(X, Q, Y, J, k),
          scrollLooper: oy(A, X, Q, [W, Q, $, Y]),
          scrollProgress: re,
          scrollSnapList: B.map(re.get),
          scrollSnaps: B,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: iy(O, S, A, I, T, M, B, Q, r),
          slideFocus: ae,
          slidesHandler: dy(t, a, w),
          slidesInView: oe,
          slideIndexes: H,
          slideRegistry: se,
          slidesToScroll: L,
          target: Y,
          translate: ay(O, t)
        };
        return ie
      }
      const cy = {
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

      function uy(e) {
        function t(e, t) {
          return Wv(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = Uv(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => Uv(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function fy(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          s = uy(o),
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
          i = Qv(),
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
          _ = l(cy, fy.globalOptions),
          x = l(_),
          j = [];

        function C(t) {
          const r = ly(e, g, b, n, o, t, d);
          return t.loop && !r.slideLooper.canLoop() ? C(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function P(t, r) {
          w || (_ = l(_, t), x = c(_), j = r || j, function() {
            const {
              container: t,
              slides: r
            } = x, n = Mv(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = Mv(r) ? g.querySelectorAll(r) : r;
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

      function py(e = {}, t = []) {
        const r = (0, G.useRef)(e),
          n = (0, G.useRef)(t),
          [o, s] = (0, G.useState)(),
          [a, i] = (0, G.useState)(),
          d = (0, G.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, G.useEffect)(() => {
          Ev(r.current, e) || (r.current = e, d())
        }, [e, d]), (0, G.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = zv(e),
              n = zv(t);
            return r.every((e, t) => Ev(e, n[t]))
          })(n.current, t) || (n.current = t, d())
        }, [t, d]), (0, G.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            fy.globalOptions = py.globalOptions;
            const e = fy(a, r.current, n.current);
            return s(e), () => e.destroy()
          }
          s(void 0)
        }, [a, s]), [i, o]
      }

      function hy(e = {}) {
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
      fy.globalOptions = void 0, py.globalOptions = void 0, hy.globalOptions = void 0;
      const my = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function vy(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function yy(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function gy(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function by(e = {}) {
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
          ("pointerDown" === t ? gy : yy)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            s = e.map(e => o[e]);
          return n.forEach(e => yy(e, r)), s.forEach(e => gy(e, r)), e
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
            } = a, v = f(my, by.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, w = !!g;
            t.loop && b && (c.loop = vy(t.loop), gy(n, c.loop)), t.draggable && w && (c.draggable = vy(t.draggable), gy(n, c.draggable)), t.dragging && (c.dragging = vy(t.dragging), d.forEach(e => r.on(e, u))), t.snapped && (c.snapped = vy(t.snapped), i.forEach(e => r.on(e, p)), p()), t.inView && (c.inView = vy(t.inView), l.forEach(e => r.on(e, h)), h())
          },
          destroy: function() {
            d.forEach(e => r.off(e, u)), i.forEach(e => r.off(e, p)), l.forEach(e => r.off(e, h)), yy(n, c.loop), yy(n, c.draggable), yy(n, c.dragging), f([], s, c.snapped), f([], a, c.inView), Object.keys(c).forEach(e => {
              c[e] = []
            })
          }
        };
        return m
      }
      by.globalOptions = void 0;

      function wy(e) {
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

      function _y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function xy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _y(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = wy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _y(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Cy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Py = "foundry_qmpv6yv",
        Oy = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xy(xy({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jy(e.variantClassNames, e => jy(e, e => e.split(" ")[0]))
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
      const Sy = (0, G.createContext)(null);

      function ky() {
        const e = (0, G.useContext)(Sy);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Ry = (0, G.forwardRef)(({
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
              const t = (0, $.rl)(),
                r = (0, $.jt)(),
                [n, o] = (0, G.useState)([]),
                s = n.length,
                [a, i] = (0, G.useState)(0),
                [d, l] = py({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && s > 1
                }, [hy(), by()]),
                c = (0, G.useRef)(0),
                u = (0, G.useRef)(!1),
                f = n[a],
                p = (0, G.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                h = (0, G.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, G.useCallback)((e, t) => {
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
              return (0, G.useEffect)(() => {
                l && (h(l), m(l), l.on("reInit", h).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [l, m]), (0, G.useEffect)(() => {
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
          (0, G.useEffect)(() => {
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
            m = (0, Z.mergeProps)({
              className: Oy(c)
            }, h, i),
            v = e ? Q.DX : "div";
          return (0, S.jsx)(Sy.Provider, {
            value: l,
            children: (0, S.jsx)(v, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...m,
              children: t
            })
          })
        }),
        Ny = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Dy = (0, G.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = ky();
          if (!e && !n || !n?.status) return null;
          const o = e || Ny[n.status],
            s = le[o],
            a = (0, Z.mergeProps)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, S.jsx)(s, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...a
          })
        }),
        Iy = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Q.DX : "div",
            s = (0, Z.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Ty = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...s
        }, a) => {
          const i = e ? Q.DX : "div",
            d = (0, Z.mergeProps)({
              className: "foundry_qmpv6yo"
            }, s);
          return (0, S.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...d
          })
        }),
        Ey = (0, G.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: s,
            emblaApi: a
          } = ky(), i = (0, Z.mergeProps)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, $.UP)(s, n), l = G.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, G.useEffect)(() => {
            l && o(l)
          }, []), a?.on("slidesChanged", () => {
            l && o(l)
          }), (0, S.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, S.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        zy = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, G.useRef)(null),
            a = (0, $.UP)(s, o),
            i = e ? Q.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = rv(n, s),
            c = (0, Z.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, S.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...d,
            ...c,
            children: t
          })
        }),
        Ly = (0, G.forwardRef)((e, t) => {
          const r = (0, Z.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, S.jsx)(cv, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        My = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const s = e ? Q.DX : "div",
            a = (0, Z.mergeProps)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, S.jsx)(s, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...a,
            children: r
          })
        }),
        Vy = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = ky(), s = (0, Z.mergeProps)({
            className: Py
          }, t);
          return (0, S.jsx)(Ne, {
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
        Ay = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = ky(), s = (0, Z.mergeProps)({
            className: Py
          }, t);
          return (0, S.jsx)(Ne, {
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
        qy = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = ky(), s = (0, Z.mergeProps)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, S.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...s,
            children: [n + 1, "/", o]
          })
        });

      function Fy(e) {
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

      function By(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Xy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? By(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Fy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : By(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Gy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ky = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Xy(Xy({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ky(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gy(e.variantClassNames, e => Gy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Zy = Hy({
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
        Uy = Hy({
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
        Wy = Hy({
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
      const $y = (0, G.createContext)(null);

      function Qy() {
        const e = (0, G.useContext)($y);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Yy = (0, G.forwardRef)(({
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
            u = (0, Z.mergeProps)({
              className: Uy(c)
            }, d),
            f = e ? Q.DX : "div";
          return (0, S.jsx)($y.Provider, {
            value: c,
            children: (0, S.jsx)(f, {
              ref: l,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        Jy = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = Qy(), a = e ? Q.DX : "div", i = (0, Z.mergeProps)({
            className: Wy({
              size: s
            })
          }, n);
          return (0, S.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        eg = (0, G.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = le[e],
            o = (0, Z.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, S.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        tg = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = Qy(), s = (0, Z.mergeProps)({
            className: Zy({
              background: n
            })
          }, t);
          return (0, S.jsx)(Ne, {
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
      var rg = "ToastProvider",
        [ng, og, sg] = (0, hd.N)("Toast"),
        [ag, ig] = (0, pi.A)("Toast", [sg]),
        [dg, lg] = ag(rg),
        cg = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            announcerContainer: a,
            children: i
          } = e, [d, l] = G.useState(null), [c, u] = G.useState(0), f = G.useRef(!1), p = G.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${rg}\`. Expected non-empty \`string\`.`), (0, S.jsx)(ng.Provider, {
            scope: t,
            children: (0, S.jsx)(dg, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: s,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: G.useCallback(() => u(e => e + 1), []),
              onToastRemove: G.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: f,
              isClosePausedRef: p,
              announcerContainer: a,
              children: i
            })
          })
        };
      cg.displayName = rg;
      var ug = "ToastViewport",
        fg = ["F8"],
        pg = "toast.viewportPause",
        hg = "toast.viewportResume",
        mg = G.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = fg,
            label: o = "Notifications ({hotkey})",
            ...s
          } = e, a = lg(ug, r), i = og(r), d = G.useRef(null), l = G.useRef(null), c = G.useRef(null), u = G.useRef(null), f = (0, fi.s)(t, u, a.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = a.toastCount > 0;
          G.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), G.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (h && e && t) {
              const r = () => {
                  if (!a.isClosePausedRef.current) {
                    const e = new CustomEvent(pg);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (a.isClosePausedRef.current) {
                    const e = new CustomEvent(hg);
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
          const m = G.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Tg(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return G.useEffect(() => {
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
                  Eg(o.slice(s + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, m]), (0, S.jsxs)(hi.lg, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, S.jsx)(yg, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                Eg(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, S.jsx)(ng.Slot, {
              scope: r,
              children: (0, S.jsx)(bi.sG.ol, {
                tabIndex: -1,
                ...s,
                ref: f
              })
            }), h && (0, S.jsx)(yg, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Eg(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      mg.displayName = ug;
      var vg = "ToastFocusProxy",
        yg = G.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, s = lg(vg, r);
          return (0, S.jsx)(xi.VisuallyHidden, {
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
      yg.displayName = vg;
      var gg = "Toast",
        bg = G.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            ...a
          } = e, [i, d] = (0, _i.useControllableState)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: s,
            caller: gg
          });
          return (0, S.jsx)(gi.C, {
            present: r || i,
            children: (0, S.jsx)(xg, {
              open: i,
              ...a,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, Dl.c)(e.onPause),
              onResume: (0, Dl.c)(e.onResume),
              onSwipeStart: (0, ui.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, ui.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, ui.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, ui.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        });
      bg.displayName = gg;
      var [wg, _g] = ag(gg, {
        onClose() {}
      }), xg = G.forwardRef((e, t) => {
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
        } = e, m = lg(gg, r), [v, y] = G.useState(null), g = (0, fi.s)(t, e => y(e)), b = G.useRef(null), w = G.useRef(null), _ = o || m.duration, x = G.useRef(0), j = G.useRef(_), C = G.useRef(0), {
          onToastAdd: P,
          onToastRemove: O
        } = m, k = (0, Dl.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), a()
        }), R = G.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), x.current = (new Date).getTime(), C.current = window.setTimeout(k, e))
        }, [k]);
        G.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                R(j.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - x.current;
                j.current = j.current - e, window.clearTimeout(C.current), d?.()
              };
            return e.addEventListener(pg, r), e.addEventListener(hg, t), () => {
              e.removeEventListener(pg, r), e.removeEventListener(hg, t)
            }
          }
        }, [m.viewport, _, d, l, R]), G.useEffect(() => {
          s && !m.isClosePausedRef.current && R(_)
        }, [s, _, m.isClosePausedRef, R]), G.useEffect(() => (P(), () => O()), [P, O]);
        const N = G.useMemo(() => v ? Ng(v) : null, [v]);
        return m.viewport ? (0, S.jsxs)(S.Fragment, {
          children: [N && (0, S.jsx)(jg, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: N
          }), (0, S.jsx)(wg, {
            scope: r,
            onClose: k,
            children: $a.createPortal((0, S.jsx)(ng.ItemSlot, {
              scope: r,
              children: (0, S.jsx)(hi.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, ui.mK)(i, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || k(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, S.jsx)(bi.sG.li, {
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
                  onKeyDown: (0, ui.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, k()))
                  }),
                  onPointerDown: (0, ui.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, ui.mK)(e.onPointerMove, e => {
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
                    n ? (w.current = l, Dg("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : Ig(l, m.swipeDirection, d) ? (w.current = l, Dg("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (b.current = null)
                  }),
                  onPointerUp: (0, ui.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Ig(t, m.swipeDirection, m.swipeThreshold) ? Dg("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : Dg("toast.swipeCancel", f, n, {
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
      }), jg = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = lg(gg, t), [s, a] = G.useState(!1), [i, d] = G.useState(!1);
        return function(e = () => {}) {
          const t = (0, Dl.c)(e);
          (0, Il.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => a(!0)), G.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, S.jsx)(yi.Portal, {
          asChild: !0,
          container: o.announcerContainer || void 0,
          children: (0, S.jsx)(xi.VisuallyHidden, {
            ...n,
            children: s && (0, S.jsxs)(S.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      G.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, S.jsx)(bi.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Cg = G.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, S.jsx)(bi.sG.div, {
          ...n,
          ref: t
        })
      });
      Cg.displayName = "ToastDescription";
      var Pg = "ToastAction",
        Og = G.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, S.jsx)(Rg, {
            altText: r,
            asChild: !0,
            children: (0, S.jsx)(kg, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Pg}\`. Expected non-empty \`string\`.`), null)
        });
      Og.displayName = Pg;
      var Sg = "ToastClose",
        kg = G.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = _g(Sg, r);
          return (0, S.jsx)(Rg, {
            asChild: !0,
            children: (0, S.jsx)(bi.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, ui.mK)(e.onClick, o.onClose)
            })
          })
        });
      kg.displayName = Sg;
      var Rg = G.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, S.jsx)(bi.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function Ng(e) {
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
              } else t.push(...Ng(e))
          }
        }), t
      }

      function Dg(e, t, r, {
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
        }), n ? (0, bi.hO)(o, s) : o.dispatchEvent(s)
      }
      var Ig = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          s = n > o;
        return "left" === t || "right" === t ? s && n > r : !s && o > r
      };

      function Tg(e) {
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

      function Eg(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var zg = cg,
        Lg = mg,
        Mg = bg,
        Vg = Cg,
        Ag = Og,
        qg = kg;

      function Fg(e) {
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

      function Bg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Xg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bg(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Fg(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Gg(e, t) {
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
        Hg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Xg(Xg({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Kg(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gg(e.variantClassNames, e => Gg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Zg = Hg({
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
        Ug = Hg({
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
        Wg = Hg({
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
      const $g = ({
          testId: e,
          ...t
        }) => (0, S.jsx)(zg, {
          "data-testid": e,
          ...t
        }),
        Qg = (0, G.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
            className: Wg({
              position: r
            })
          }, n);
          return (0, S.jsx)(Lg, {
            ref: o,
            "data-testid": t,
            ...s,
            children: e
          })
        }),
        Yg = (0, G.createContext)(null);

      function Jg() {
        const e = (0, G.useContext)(Yg);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const eb = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, s) => {
          const a = e ? Q.DX : Mg,
            i = (0, Z.mergeProps)({
              className: Ug({
                appearance: n
              })
            }, o);
          return (0, S.jsx)(Yg.Provider, {
            value: {
              appearance: n
            },
            children: (0, S.jsx)(a, {
              ref: s,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        tb = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? Q.DX : Vg,
            a = (0, Z.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, S.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        rb = {
          danger: le.CircleX,
          information: le.Info,
          success: le.CircleCheck,
          warning: le.TriangleAlert,
          avocado: le.CircleCheck
        },
        nb = (0, G.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = Jg(), o = e ? Q.DX : rb[n], s = (0, Z.mergeProps)({
            className: Zg({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, S.jsx)(o, {
            ref: r,
            ...s
          })
        }),
        ob = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, S.jsx)(Ag, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, S.jsx)(Q.DX, {
              children: t
            }) : (0, S.jsx)(we, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        sb = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, s) => {
          const a = (0, Z.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, S.jsx)(qg, {
            ref: s,
            "data-testid": r,
            ...a,
            children: e ? (0, S.jsx)(Q.DX, {
              children: t
            }) : (0, S.jsx)(cv, {
              size: "SM",
              label: n
            })
          })
        });

      function ab(e) {
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

      function db(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ib(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ab(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ib(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function lb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
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
              n = db(db({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) cb(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lb(e.variantClassNames, e => lb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        fb = ub({
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
        pb = ub({
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
        hb = ub({
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

      function mb() {
        const e = (0, G.useContext)(vb);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const vb = (0, G.createContext)(null),
        yb = (0, G.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, s) => {
          const a = (0, Z.mergeProps)({
              className: hb({
                size: n
              })
            }, o),
            i = r ? Q.DX : "ol";
          return (0, S.jsx)(vb.Provider, {
            value: {
              size: n
            },
            children: (0, S.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        }),
        gb = (0, G.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, G.useRef)(null),
            {
              size: i
            } = mb(),
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
              } = rv({
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
            l = r ? Q.DX : "a",
            c = (0, Z.mergeProps)({
              className: (0, de.clsx)(fb({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, S.jsx)("li", {
            className: pb({
              size: i
            }),
            ref: s,
            children: (0, S.jsx)(l, {
              ref: a,
              ...c,
              children: t
            })
          })
        }),
        bb = (0, G.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = le[e];
          return (0, S.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        wb = (0, G.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, s) => {
          const [a, i] = (0, G.useState)(r), {
            size: d
          } = mb(), l = (0, Z.mergeProps)({
            className: pb({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, S.jsx)("li", {
            ref: s,
            ...l,
            children: (0, S.jsxs)(Mc, {
              open: a,
              onOpenChange: () => i(!a),
              children: [(0, S.jsx)(Ac, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, S.jsx)(Hc, {
                children: (0, S.jsx)(Uc, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, S.jsx)(au, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        _b = (0, G.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = t ? Q.DX : hu,
            a = (0, Z.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, S.jsx)(s, {
            ref: o,
            ...a,
            children: e
          })
        });

      function xb(e) {
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

      function jb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Cb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jb(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = xb(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Pb(e, t) {
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
        Sb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Cb(Cb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ob(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Pb(e.variantClassNames, e => Pb(e, e => e.split(" ")[0]))
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
      const kb = (0, G.createContext)(null);

      function Rb() {
        const e = (0, G.useContext)(kb);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Nb = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...s
        }, a) => {
          const i = e ? Q.DX : "div",
            d = (0, Z.mergeProps)({
              className: Sb({
                appearance: r,
                type: o,
                size: n
              })
            }, s);
          return (0, S.jsx)(kb.Provider, {
            value: {
              type: o
            },
            children: (0, S.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...d
            })
          })
        }),
        Db = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Q.DX : "div",
            s = (0, Z.mergeProps)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            ...s
          })
        }),
        Ib = (0, G.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = le[e],
            o = (0, Z.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, S.jsx)(n, {
            ref: r,
            ...o
          })
        }),
        Tb = () => {
          const e = (0, $.Ub)(Z.breakpoints.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Eb = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function zb(e) {
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

      function Lb(e, t) {
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
          t % 2 ? Lb(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = zb(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ab = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mb(Mb({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ab(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vb(e.variantClassNames, e => Vb(e, e => e.split(" ")[0]))
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
      const Fb = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, S.jsx)(hc, {
            ref: r,
            ...n
          })
        }),
        Bb = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, S.jsx)(mc, {
            ref: r,
            ...n
          })
        }),
        Xb = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, S.jsx)(vc, {
            ref: r,
            ...n
          })
        }),
        Gb = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, $.rl)(),
            o = (0, Z.mergeProps)({
              "data-testid": e,
              className: qb({
                isTouchDevice: n
              })
            }, t);
          return (0, S.jsx)(yc, {
            ref: r,
            ...o
          })
        }),
        Kb = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.mergeProps)({
            "data-testid": e
          }, t);
          return (0, S.jsx)(gc, {
            ref: r,
            ...n
          })
        });

      function Hb(e) {
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

      function Zb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ub(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zb(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Hb(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Wb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var $b = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Qb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ub(Ub({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) $b(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wb(e.variantClassNames, e => Wb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Yb = Qb({
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
        Jb = Qb({
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
      const ew = (0, G.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, G.createRef)(),
          dialogSpringRef: Fa(),
          overlaySpringRef: Fa()
        }),
        tw = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: a,
          ...i
        }) => {
          const [d, l] = (0, $.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, $.ZC)(d);
          return (0, S.jsx)(ew.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: a,
              contentId: (0, G.useId)(),
              descriptionId: (0, G.useId)(),
              triggerRef: (0, G.useRef)(null),
              dialogSpringRef: Xa(),
              overlaySpringRef: Xa()
            },
            children: (0, S.jsx)(rw, {
              ...i
            })
          })
        },
        rw = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, G.useContext)(ew), n = (0, Z.mergeProps)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, S.jsx)(Wd.Root, {
            ...n
          })
        },
        nw = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, G.useContext)(ew), s = (0, $.UP)(o, r), a = (0, Z.mergeProps)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, S.jsx)(Wd.Trigger, {
            ...a,
            ref: s
          })
        }),
        ow = e => (0, S.jsx)(Wd.Portal, {
          forceMount: !0,
          ...e
        }),
        sw = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: s
          } = (0, G.useContext)(ew), a = Eb(), i = (0, $.jt)(), d = Ga(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: ea.stiff,
            immediate: i || s
          }), l = (0, Z.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = ci(Wd.Overlay);
          return (0, G.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, S.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        aw = (0, G.forwardRef)(({
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
          } = (0, G.useContext)(ew), y = (0, $.rl)(), g = (0, $.jt)(), b = (0, G.useRef)(null), w = Tb(), {
            bindDrag: _
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const s = Eb(),
              a = Tb(),
              i = (0, G.useRef)();
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
                  config: ea.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...s(0),
                  immediate: !1,
                  config: ea.stiff
                })) : (t.start({
                  ...a(100),
                  immediate: !1,
                  config: ea.stiff
                }), r.start({
                  ...s(100),
                  immediate: !1,
                  config: ea.stiff
                })))
              }, dr(lr), Pr({
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
          }), x = Ga(a, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: a ? 100 : 0,
            config: ea.stiff,
            ref: m,
            immediate: g || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : h?.()
            }
          });
          (0, G.useEffect)(() => {
            m.start()
          }, [a]);
          const j = (0, $.UP)(b, s),
            C = y && !g && !n && _(),
            P = (0, Z.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, C || {}, o),
            O = ci(Wd.Content);
          return x((t, r) => r ? (0, S.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, S.jsx)(O, {
              forceMount: !0,
              ref: j,
              ...P,
              style: t,
              children: e
            })
          }) : null)
        }),
        iw = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, t);
          return (0, S.jsx)(Wd.Title, {
            ref: r,
            ...n
          })
        }),
        dw = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.mergeProps)({
            "data-testid": e
          }, t);
          return (0, S.jsx)(Wd.Description, {
            ref: r,
            ...n
          })
        }),
        lw = (0, G.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, S.jsxs)(Fb, {
            ref: n,
            ...o,
            children: [(0, S.jsx)(Bb, {
              className: "foundry_xov33ni",
              children: e
            }), (0, S.jsx)(Xb, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, S.jsx)(Gb, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        cw = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            s = e ? Q.DX : "div";
          return (0, S.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        uw = (0, G.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
              "data-testid": r,
              className: Yb({
                align: e
              })
            }, n),
            a = t ? Q.DX : "header";
          return (0, S.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        fw = (0, G.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
            "data-testid": e,
            className: Jb({
              appearance: t
            })
          }, r);
          return (0, S.jsx)(Wd.Title, {
            ref: n,
            ...o
          })
        }),
        pw = (0, G.forwardRef)((e, t) => {
          const r = (0, Z.mergeProps)({
            className: "foundry_xov33n4"
          }, e);
          return (0, S.jsx)(Ne, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        hw = (0, G.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            s = t ? (0, S.jsx)(Q.DX, {
              ref: n,
              ...o
            }) : (0, S.jsx)(cv, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, S.jsx)(Wd.Close, {
            asChild: !0,
            children: s
          })
        }),
        mw = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            s = e ? Q.DX : "div";
          return (0, S.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        vw = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            s = e ? Q.DX : "footer";
          return (0, S.jsx)(s, {
            ref: n,
            ...o
          })
        });
      var yw = "Avatar",
        [gw, bw] = (0, pi.A)(yw),
        ww = [0, () => {}],
        [_w, xw] = gw(yw),
        jw = G.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, s] = G.useState("idle"), [a, i] = function() {
            let e = ww; {
              e = G.useState(0);
              const [t] = e, r = G.useRef(!1);
              G.useEffect(() => {
                t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [t])
            }
            return e
          }();
          return (0, S.jsx)(_w, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: s,
            imageCount: a,
            setImageCount: i,
            children: (0, S.jsx)(bi.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      jw.displayName = yw;
      var Cw = "AvatarImage",
        Pw = G.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...s
          } = e, a = xw(Cw, r);
          var i;
          i = a.setImageCount, G.useEffect(() => (i(e => e + 1), () => {
            i(e => e - 1)
          }), [i]);
          const d = function(e, {
              loadingStatus: t,
              setLoadingStatus: r,
              referrerPolicy: n,
              crossOrigin: o
            }) {
              return (0, Il.N)(() => {
                if (!e) return void r("error");
                const t = new window.Image,
                  s = e => {
                    const t = e.currentTarget;
                    r(Sw(t))
                  },
                  a = () => r("error");
                return t.addEventListener("load", s), t.addEventListener("error", a), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(Sw(t)), () => {
                  t.removeEventListener("load", s), t.removeEventListener("error", a), r("idle")
                }
              }, [e, o, n, r]), t
            }(n, {
              referrerPolicy: s.referrerPolicy,
              crossOrigin: s.crossOrigin,
              loadingStatus: a.imageLoadingStatus,
              setLoadingStatus: a.setImageLoadingStatus
            }),
            l = (0, Dl.c)(e => {
              o?.(e)
            }),
            c = G.useRef(d);
          return (0, Il.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, S.jsx)(bi.sG.img, {
            ...s,
            ref: t,
            src: n
          }) : null
        });
      Pw.displayName = Cw;
      var Ow = "AvatarFallback";

      function Sw(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function kw(e) {
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

      function Rw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Nw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rw(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = kw(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      G.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, s = xw(Ow, r), [a, i] = G.useState(void 0 === n);
        return G.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), a && "loaded" !== s.imageLoadingStatus ? (0, S.jsx)(bi.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Ow;
      var Iw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Nw(Nw({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Iw(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dw(e.variantClassNames, e => Dw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ew = Tw({
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
        zw = "var(--foundry_v912w22)",
        Lw = "var(--foundry_v912w23)",
        Mw = Tw({
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
        Vw = Tw({
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
        Aw = "var(--foundry_v912w21)",
        qw = "var(--foundry_v912w20)",
        Fw = Tw({
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
      const Bw = (0, G.createContext)(null);

      function Xw() {
        const e = (0, G.useContext)(Bw);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Gw = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: s = !1,
          ...a
        }, i) => {
          const d = (0, Z.mergeProps)({
            "data-testid": r,
            "aria-disabled": s,
            className: Ew({
              isDisabled: s
            }),
            asChild: e
          }, a);
          return (0, S.jsx)(Bw.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: s
            },
            children: (0, S.jsx)(jw, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        Kw = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: s,
            isDisabled: a
          } = Xw(), [i, d] = (0, G.useState)(!1);
          (0, G.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, Z.mergeProps)({
              className: Mw({
                isDisabled: a
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, S.jsx)("span", {
            className: Vw({
              size: s,
              isDisabled: a,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, S.jsx)(Pw, {
              ref: o,
              ...c
            })
          })
        }),
        Hw = (0, G.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, G.useRef)(null),
            {
              size: s,
              status: a,
              isDisabled: i
            } = Xw(),
            d = a || "online",
            l = (0, $.UP)(o, n),
            c = (0, Z.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Fw({
                status: d,
                size: s,
                isDisabled: i
              }),
              style: (0, K.DI)({
                [qw]: t?.online,
                [Aw]: t?.offline,
                [zw]: t?.away,
                [Lw]: t?.busy
              })
            }, r);
          return (0, S.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function Zw(e) {
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

      function Uw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ww(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uw(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Zw(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $w(e, t) {
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
        Yw = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ww(Ww({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Qw(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $w(e.variantClassNames, e => $w(e, e => e.split(" ")[0]))
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
      const Jw = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            a = e ? Q.DX : "nav";
          return (0, S.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        e_ = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            a = e ? Q.DX : "div";
          return (0, S.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        t_ = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, G.useRef)(null),
            i = (0, $.UP)(a, s),
            {
              linkProps: d,
              isPressed: l
            } = rv(o, a),
            c = (0, Z.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, de.clsx)(Yw({
                isActive: r
              }))
            }, d),
            u = e ? Q.DX : "a";
          return (0, S.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        r_ = (0, G.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, S.jsx)(t_, {
            ref: n,
            ...o,
            children: (0, S.jsx)(le.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        n_ = (0, G.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, S.jsx)(t_, {
            ref: n,
            ...o,
            children: (0, S.jsx)(le.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        o_ = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, Z.mergeProps)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, n),
            s = e ? Q.DX : "span";
          return (0, S.jsx)(s, {
            ...o,
            children: t || "..."
          })
        },
        s_ = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, Z.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            s = e ? Q.DX : "div";
          return (0, S.jsx)(s, {
            ...o,
            children: t
          })
        },
        a_ = (0, G.createContext)(null);

      function i_() {
        const e = (0, G.useContext)(a_);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const d_ = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, G.useId)(),
            s = (0, Z.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            a = e ? Q.DX : "div";
          return (0, S.jsx)(a_.Provider, {
            value: {
              labelId: o
            },
            children: (0, S.jsx)(a, {
              ...s,
              children: t
            })
          })
        },
        l_ = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = i_(), a = (0, Z.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? Q.DX : "label";
          return (0, S.jsx)(i, {
            ref: o,
            id: s,
            ...a,
            children: t
          })
        }),
        c_ = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = i_(), a = (0, Z.mergeProps)({
            "aria-labelledby": s,
            className: "foundry_2jlbztc"
          }, n), i = e ? Q.DX : Bu;
          return (0, S.jsxs)(i, {
            ...a,
            children: [(0, S.jsxs)(Hu, {
              ref: o,
              children: [(0, S.jsx)(Zu, {
                placeholder: r
              }), (0, S.jsx)(Uu, {})]
            }), (0, S.jsx)(tf, {
              children: (0, S.jsx)(Xu, {
                children: (0, S.jsx)(Ku, {
                  children: t
                })
              })
            })]
          })
        }),
        u_ = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
              "data-testid": r
            }, n),
            a = e ? Q.DX : Yu;
          return (0, S.jsx)(a, {
            ...s,
            ref: o,
            children: (0, S.jsx)(Ju, {
              children: t
            })
          })
        }),
        f_ = (0, G.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            a = e ? Q.DX : "p";
          return (0, S.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        });
      var p_ = "rovingFocusGroup.onEntryFocus",
        h_ = {
          bubbles: !1,
          cancelable: !0
        },
        m_ = "RovingFocusGroup",
        [v_, y_, g_] = (0, hd.N)(m_),
        [b_, w_] = (0, pi.A)(m_, [g_]),
        [__, x_] = b_(m_),
        j_ = G.forwardRef((e, t) => (0, S.jsx)(v_.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, S.jsx)(v_.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, S.jsx)(C_, {
              ...e,
              ref: t
            })
          })
        }));
      j_.displayName = m_;
      var C_ = G.forwardRef((e, t) => {
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
          } = e, f = G.useRef(null), p = (0, fi.s)(t, f), h = (0, ud.jH)(s), [m, v] = (0, _i.useControllableState)({
            prop: a,
            defaultProp: i ?? null,
            onChange: d,
            caller: m_
          }), [y, g] = G.useState(!1), b = (0, Dl.c)(l), w = y_(r), _ = G.useRef(!1), [x, j] = G.useState(0);
          return G.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(p_, b), () => e.removeEventListener(p_, b)
          }, [b]), (0, S.jsx)(__, {
            scope: r,
            orientation: n,
            dir: h,
            loop: o,
            currentTabStopId: m,
            onItemFocus: G.useCallback(e => v(e), [v]),
            onItemShiftTab: G.useCallback(() => g(!0), []),
            onFocusableItemAdd: G.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: G.useCallback(() => j(e => e - 1), []),
            children: (0, S.jsx)(bi.sG.div, {
              tabIndex: y || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, ui.mK)(e.onMouseDown, () => {
                _.current = !0
              }),
              onFocus: (0, ui.mK)(e.onFocus, e => {
                const t = !_.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(p_, h_);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === m),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    k_(n, c)
                  }
                }
                _.current = !1
              }),
              onBlur: (0, ui.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        P_ = "RovingFocusGroupItem",
        O_ = G.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: s,
            children: a,
            ...i
          } = e, d = (0, mi.useId)(), l = s || d, c = x_(P_, r), u = c.currentTabStopId === l, f = y_(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: m
          } = c;
          return G.useEffect(() => {
            if (n) return p(), () => h()
          }, [n, p, h]), (0, S.jsx)(v_.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, S.jsx)(bi.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, ui.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, ui.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, ui.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : S_[n]
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
                  setTimeout(() => k_(s))
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
      O_.displayName = P_;
      var S_ = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function k_(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var R_ = j_,
        N_ = O_,
        D_ = "Toggle",
        I_ = G.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...s
          } = e, [a, i] = (0, _i.useControllableState)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: D_
          });
          return (0, S.jsx)(bi.sG.button, {
            type: "button",
            "aria-pressed": a,
            "data-state": a ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...s,
            ref: t,
            onClick: (0, ui.mK)(e.onClick, () => {
              e.disabled || i(!a)
            })
          })
        });
      I_.displayName = D_;
      var T_ = "ToggleGroup",
        [E_, z_] = (0, pi.A)(T_, [w_]),
        L_ = w_(),
        M_ = G.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, S.jsx)(q_, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, S.jsx)(F_, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${T_}\``)
        });
      M_.displayName = T_;
      var [V_, A_] = E_(T_), q_ = G.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, _i.useControllableState)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: T_
        });
        return (0, S.jsx)(V_, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: G.useMemo(() => a ? [a] : [], [a]),
          onItemActivate: i,
          onItemDeactivate: G.useCallback(() => i(""), [i]),
          children: (0, S.jsx)(G_, {
            ...s,
            ref: t
          })
        })
      }), F_ = G.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, _i.useControllableState)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: T_
        }), d = G.useCallback(e => i((t = []) => [...t, e]), [i]), l = G.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, S.jsx)(V_, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: a,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, S.jsx)(G_, {
            ...s,
            ref: t
          })
        })
      });
      M_.displayName = T_;
      var [B_, X_] = E_(T_), G_ = G.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: s,
          dir: a,
          loop: i = !0,
          ...d
        } = e, l = L_(r), c = (0, ud.jH)(a), u = {
          dir: c,
          ...d
        };
        return (0, S.jsx)(B_, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, S.jsx)(R_, {
            asChild: !0,
            ...l,
            orientation: s,
            dir: c,
            loop: i,
            children: (0, S.jsx)(bi.sG.div, {
              ...u,
              ref: t
            })
          }) : (0, S.jsx)(bi.sG.div, {
            ...u,
            ref: t
          })
        })
      }), K_ = "ToggleGroupItem", H_ = G.forwardRef((e, t) => {
        const r = A_(K_, e.__scopeToggleGroup),
          n = X_(K_, e.__scopeToggleGroup),
          o = L_(e.__scopeToggleGroup),
          s = r.value.includes(e.value),
          a = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: s,
            disabled: a
          },
          d = G.useRef(null);
        return n.rovingFocus ? (0, S.jsx)(N_, {
          asChild: !0,
          ...o,
          focusable: !a,
          active: s,
          ref: d,
          children: (0, S.jsx)(Z_, {
            ...i,
            ref: t
          })
        }) : (0, S.jsx)(Z_, {
          ...i,
          ref: t
        })
      });
      H_.displayName = K_;
      var Z_ = G.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          value: n,
          ...o
        } = e, s = A_(K_, r), a = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === s.type ? a : void 0;
        return (0, S.jsx)(I_, {
          ...i,
          ...o,
          ref: t,
          onPressedChange: e => {
            e ? s.onItemActivate(n) : s.onItemDeactivate(n)
          }
        })
      });

      function U_(e) {
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

      function $_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? W_(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = U_(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Q_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Y_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        J_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $_($_({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Y_(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Q_(e.variantClassNames, e => Q_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ex = "var(--foundry_zxwkyk2)",
        tx = "var(--foundry_zxwkyk3)",
        rx = J_({
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
        nx = J_({
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
        ox = J_({
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
        sx = "var(--foundry_zxwkyk1)",
        ax = "var(--foundry_zxwkyk0)",
        ix = J_({
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
      const dx = (0, G.createContext)(null);

      function lx() {
        const e = (0, G.useContext)(dx);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const cx = (0, G.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
            "data-testid": e,
            className: rx({
              size: t
            }),
            type: r
          }, n);
          return (0, S.jsx)(dx.Provider, {
            value: {
              size: t
            },
            children: (0, S.jsx)(M_, {
              ref: o,
              ...s
            })
          })
        }),
        ux = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = lx(), o = (0, Z.mergeProps)({
            "data-testid": e,
            className: nx({
              size: n
            })
          }, t);
          return (0, S.jsx)(H_, {
            ref: r,
            ...o
          })
        }),
        fx = (0, G.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = lx(), o = le[e];
          return (0, S.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        px = (0, G.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
            "data-testid": e,
            className: ix({
              status: r
            }),
            style: (0, K.DI)({
              [ax]: t?.online,
              [sx]: t?.offline,
              [ex]: t?.away,
              [tx]: t?.busy
            })
          }, n);
          return (0, S.jsx)("span", {
            ref: o,
            ...s
          })
        }),
        hx = (0, G.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = lx(), s = (0, Z.mergeProps)({
            "data-testid": e,
            className: ox({
              variant: t,
              size: o
            })
          }, r);
          return (0, S.jsx)("span", {
            ref: n,
            ...s
          })
        });
      var mx = r(42913);

      function vx(e) {
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

      function yx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yx(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = vx(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function bx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        _x = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gx(gx({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) wx(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bx(e.variantClassNames, e => bx(e, e => e.split(" ")[0]))
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
      const xx = (0, G.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        jx = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, s] = (0, $.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), a = (0, Z.mergeProps)({
            open: o,
            onOpenChange: s
          }, n);
          return (0, S.jsx)(xx.Provider, {
            value: {
              open: o,
              setOpen: s
            },
            children: (0, S.jsx)(mx.Root, {
              ...a
            })
          })
        },
        Cx = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, S.jsx)(mx.Trigger, {
            ref: r,
            ...n
          })
        }),
        Px = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        Ox = (0, G.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: s
          } = (0, G.useContext)(xx), a = (0, G.useRef)(null), i = (0, $.UP)(a, o), {
            buttonProps: d
          } = (0, $.sL)(n, a), l = (0, Z.mergeProps)({
            "data-testid": r,
            className: _x({
              size: t
            })
          }, d), c = s ? le.ChevronUp : le.ChevronDown;
          return (0, S.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, S.jsx)(c, {
              label: "",
              size: Px[t]
            })]
          })
        }),
        Sx = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.mergeProps)({
            "data-testid": e
          }, t);
          return (0, S.jsx)(mx.Anchor, {
            ref: r,
            ...n
          })
        }),
        kx = (0, G.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, S.jsx)(mx.Content, {
            ref: n,
            ...o
          })
        }),
        Rx = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, S.jsx)(mx.Arrow, {
            ref: r,
            ...n
          })
        }),
        Nx = e => (0, S.jsx)(mx.Portal, {
          ...e
        }),
        Dx = e => (0, S.jsx)(mx.Close, {
          ...e
        });

      function Ix(e) {
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

      function Tx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ex(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tx(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ix(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function zx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Lx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ex(Ex({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Lx(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zx(e.variantClassNames, e => zx(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Vx = "var(--foundry_rmorls2)",
        Ax = Mx({
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
        qx = "var(--foundry_rmorls0)",
        Fx = Mx({
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
        Bx = "var(--foundry_rmorls3)",
        Xx = "var(--foundry_rmorls1)",
        Gx = Mx({
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
        Kx = "Progress",
        [Hx, Zx] = (0, pi.A)(Kx),
        [Ux, Wx] = Hx(Kx),
        $x = G.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: s = Jx,
            ...a
          } = e;
          !o && 0 !== o || rj(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = rj(o) ? o : 100;
          null === n || nj(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = nj(n, i) ? n : null,
            l = tj(d) ? s(d, i) : void 0;
          return (0, S.jsx)(Ux, {
            scope: r,
            value: d,
            max: i,
            children: (0, S.jsx)(bi.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": tj(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": ej(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...a,
              ref: t
            })
          })
        });
      $x.displayName = Kx;
      var Qx = "ProgressIndicator",
        Yx = G.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = Wx(Qx, r);
          return (0, S.jsx)(bi.sG.div, {
            "data-state": ej(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function Jx(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function ej(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function tj(e) {
        return "number" == typeof e
      }

      function rj(e) {
        return tj(e) && !isNaN(e) && e > 0
      }

      function nj(e, t) {
        return tj(e) && !isNaN(e) && e <= t && e >= 0
      }
      Yx.displayName = Qx;
      var oj = $x,
        sj = Yx;
      const aj = (0, G.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        ij = (0, G.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const s = Math.round(r / t * 100),
            a = "number" != typeof r || "number" != typeof t;
          return (0, S.jsx)(aj.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: s,
              isInvalid: a
            },
            children: (0, S.jsx)(dj, {
              ...n,
              ref: o
            })
          })
        }),
        dj = (0, G.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            s = t ? Q.DX : "div";
          return (0, S.jsx)(s, {
            ...o,
            ref: n
          })
        }),
        lj = (0, G.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: s,
            size: a
          } = (0, G.useContext)(aj), i = (0, Z.mergeProps)({
            "data-testid": e,
            className: Fx({
              size: a
            }),
            value: o,
            max: s,
            style: (0, K.DI)({
              [Bx]: t
            }),
            "data-track": !0
          }, r);
          return (0, S.jsx)(oj, {
            ref: n,
            ...i
          })
        }),
        cj = (0, G.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: s,
            isInvalid: a
          } = (0, G.useContext)(aj), i = a ? "-100%" : `-${100-s}%`, d = (0, Z.mergeProps)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, K.DI)({
              [qx]: i,
              [Xx]: `${t}ms`,
              [Vx]: r
            })
          }, n);
          return (0, S.jsx)(sj, {
            ref: o,
            ...d
          })
        }),
        uj = (0, G.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, G.useContext)(aj), s = (0, Z.mergeProps)({
            "data-testid": t,
            className: Ax({
              size: o
            }),
            "aria-hidden": !0
          }, r), a = e ? Q.DX : "span";
          return (0, S.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        fj = (0, G.forwardRef)(({
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
          } = (0, G.useContext)(aj), l = (0, Z.mergeProps)({
            "data-testid": e,
            className: Ax({
              size: a
            }),
            "aria-hidden": !0
          }, r);
          return d ? (0, S.jsx)("span", {
            ref: n,
            ...l
          }) : "percentage" === t ? (0, S.jsxs)("span", {
            ref: n,
            ...l,
            children: [i, " ", (0, S.jsx)("span", {
              className: Gx({
                size: a
              }),
              children: "%"
            })]
          }) : (0, S.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", s]
          })
        });
      var pj = r(41488);

      function hj(e) {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = hj(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
        bj = "foundry_1vzsjid2",
        wj = "foundry_1vzsjidm",
        _j = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vj(vj({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gj(l, n, e.defaultVariants) && (r += " " + c);
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
      const xj = (0, G.createContext)({
          mode: "solid",
          layer: 0
        }),
        jj = (0, G.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, S.jsx)(xj.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, S.jsx)(Cj, {
            ...n,
            ref: o,
            type: r
          })
        })),
        Cj = (0, G.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
            "data-testid": e,
            type: t
          }, r);
          return (0, S.jsx)(pj.Root, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        Pj = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, G.useContext)(xj), s = (0, Z.mergeProps)({
            className: _j({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, S.jsx)(pj.Item, {
            ref: r,
            ...s
          })
        }),
        Oj = (0, G.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Z.mergeProps)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, S.jsx)(pj.Header, {
            ref: r,
            ...n
          })
        }),
        Sj = (0, G.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Z.mergeProps)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, S.jsx)(pj.Trigger, {
            ref: n,
            ...o,
            children: r.asChild && (0, G.isValidElement)(e) ? (0, G.cloneElement)(e, {
              children: (0, S.jsx)("span", {
                className: bj,
                children: e.props.children
              })
            }) : (0, S.jsx)("span", {
              className: bj,
              children: e
            })
          })
        }),
        kj = (0, G.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = le[e],
            o = (0, Z.mergeProps)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, S.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        Rj = (0, G.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = le[e],
            o = (0, Z.mergeProps)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, S.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        Nj = (0, G.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, Z.mergeProps)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": r,
            asChild: t
          }, n);
          return (0, S.jsx)(pj.Content, {
            ref: o,
            ...s,
            children: t && (0, G.isValidElement)(e) ? (0, G.cloneElement)(e, {
              children: (0, S.jsx)("div", {
                className: wj,
                children: e.props.children
              })
            }) : (0, S.jsx)("div", {
              className: wj,
              children: e
            })
          })
        })
    },
    36551(e, t, r) {
      r.d(t, {
        b: () => i
      });
      var n = r(4637),
        o = r(80373),
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
    65324(e, t, r) {
      r.d(t, {
        N: () => d
      });
      var n = r(4637),
        o = r(54958),
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