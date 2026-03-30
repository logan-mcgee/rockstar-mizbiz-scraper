try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c11ea152-6fb1-4e52-a268-a34accb3c705", e._sentryDebugIdIdentifier = "sentry-dbid-c11ea152-6fb1-4e52-a268-a34accb3c705")
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
  [3517], {
    7045: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => w,
        Badge: () => g,
        Body: () => xt,
        Breadcrumbs: () => y,
        Button: () => Fe,
        Checkbox: () => l,
        Code: () => jt,
        Dialog: () => b,
        Display: () => Pt,
        Divider: () => nt,
        Dropdown: () => s,
        Heading: () => St,
        IconButton: () => $e,
        Label: () => Et,
        Lightbox: () => o,
        Loader: () => ht,
        Pagination: () => _,
        RadioGroup: () => u,
        Spinner: () => Se,
        Switch: () => i,
        Tag: () => v,
        Text: () => Tt,
        TextArea: () => d,
        TextField: () => f,
        TextSemantics: () => Dt,
        Toast: () => m,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => vd,
        Content: () => hd,
        Portal: () => md,
        Root: () => fd,
        Trigger: () => pd,
        useTooltipContext: () => ud
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => hu,
        Close: () => bu,
        Content: () => du,
        Controls: () => vu,
        CssVars: () => xu,
        Download: () => _u,
        Image: () => pu,
        Keyboard: () => yu,
        LightboxContext: () => eu,
        OpenIcon: () => iu,
        Overlay: () => lu,
        Portal: () => au,
        Reset: () => wu,
        Root: () => tu,
        RootImplContext: () => ru,
        Thumbnail: () => su,
        Trigger: () => ou,
        Zoom: () => gu,
        ZoomPan: () => cu
      });
      var s = {};
      r.r(s), r.d(s, {
        Content: () => bv,
        Description: () => Pv,
        Hint: () => Ov,
        Label: () => jv,
        Option: () => Sv,
        OptionIcon: () => Ev,
        OptionText: () => kv,
        Portal: () => Rv,
        Root: () => gv,
        ScrollArea: () => wv,
        StatusIcon: () => Tv,
        StatusRoot: () => Dv,
        StatusText: () => Nv,
        Trigger: () => _v,
        TriggerIcon: () => Cv,
        TriggerText: () => xv,
        useDropdownContext: () => yv
      });
      var i = {};
      r.r(i), r.d(i, {
        Description: () => Om,
        Input: () => jm,
        Label: () => Pm,
        Root: () => Cm,
        useSwitchContext: () => xm
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => Vm,
        CheckMD: () => Am,
        CheckXL: () => Fm,
        DashLG: () => Bm,
        DashMD: () => qm,
        DashXL: () => Km
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => sy,
        ErrorText: () => iy,
        Input: () => ny,
        Label: () => oy,
        Root: () => ry
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => xy,
        Hint: () => Cy,
        Input: () => _y,
        Label: () => wy,
        Root: () => by,
        RootContext: () => yy,
        StatusIcon: () => Py,
        StatusRoot: () => jy,
        StatusText: () => Oy,
        useTextAreaContext: () => gy
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => mg,
        DotMD: () => vg,
        DotXL: () => yg
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => ag,
        Input: () => bg,
        Label: () => ig,
        Option: () => gg,
        OptionDescription: () => _g,
        OptionLabel: () => wg,
        Options: () => sg,
        Root: () => og,
        StatusIcon: () => dg,
        StatusRoot: () => lg,
        StatusText: () => cg,
        useRadioGroupContext: () => ng
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => xb,
        Control: () => bb,
        Description: () => jb,
        Hint: () => gb,
        Icon: () => _b,
        Input: () => wb,
        Label: () => yb,
        PasswordButton: () => Cb,
        Root: () => mb,
        StatusIcon: () => Ob,
        StatusRoot: () => Pb,
        StatusText: () => Sb
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => Zb,
        CloseButton: () => nw,
        Description: () => Jb,
        ErrorText: () => rw,
        Footer: () => tw,
        Header: () => Ub,
        Icon: () => Qb,
        Link: () => ew,
        Root: () => Gb,
        RootContext: () => Wb,
        Title: () => Yb,
        iconStatusMap: () => $b,
        useAlertContext: () => Xb
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => o_,
        CloseButton: () => a_,
        Description: () => n_,
        Icon: () => r_,
        Link: () => i_,
        PaginationCounter: () => u_,
        PaginationNav: () => l_,
        PaginationNextButton: () => d_,
        PaginationPrevButton: () => c_,
        PaginationViewport: () => s_,
        Root: () => e_,
        RootContext: () => Yw,
        iconStatusMap: () => t_,
        useAlertBannerContext: () => Jw
      });
      var v = {};
      r.r(v), r.d(v, {
        CloseButton: () => O_,
        Icon: () => P_,
        Label: () => j_,
        Root: () => C_,
        RootContext: () => __,
        useTagContext: () => x_
      });
      var m = {};
      r.r(m), r.d(m, {
        Action: () => Ex,
        CloseButton: () => Rx,
        Description: () => Ox,
        Icon: () => kx,
        Provider: () => _x,
        Root: () => Px,
        RootContext: () => Cx,
        Viewport: () => xx,
        iconAppearanceMap: () => Sx,
        useToastContext: () => jx
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => Hx,
        Item: () => Kx,
        OverflowMenu: () => Wx,
        OverflowMenuItem: () => Xx,
        Root: () => Bx,
        RootContext: () => qx,
        useBreadcrumbsContext: () => Fx
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => tC,
        Label: () => eC,
        Root: () => Jx
      });
      var b = {};
      r.r(b), r.d(b, {
        ActionArea: () => wj,
        Button: () => Oj,
        CloseButton: () => jj,
        Content: () => hj,
        Description: () => yj,
        Footer: () => xj,
        Header: () => _j,
        HeaderButton: () => Pj,
        HeaderTitle: () => Cj,
        Layout: () => bj,
        Overlay: () => pj,
        Portal: () => vj,
        Root: () => fj,
        ScrollArea: () => gj,
        Title: () => mj,
        Trigger: () => Sj,
        useDialogContext: () => uj
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => pP,
        Root: () => fP,
        StatusIndicator: () => hP,
        useAvatarContext: () => uP
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => SP,
        Dropdown: () => TP,
        DropdownLabel: () => DP,
        Ellipsis: () => OP,
        Item: () => CP,
        Label: () => IP,
        Next: () => PP,
        Option: () => NP,
        Pages: () => xP,
        Prev: () => jP,
        ResultsPerPage: () => RP,
        Root: () => _P
      });
      var x = r(42295);

      function C(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class j extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var P = j;

      function O(e) {
        if ("string" != typeof e) throw new P(e);
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
          if (!r) throw new P(e);
          return `#${r}`
        }(e) : e;
        const r = R.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(E(e, 2), 16)), parseInt(E(e[3] || "f", 2), 16) / 255]
        }
        const n = D.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = T.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const s = N.exec(t);
        if (s) {
          const [t, r, n, o] = Array.from(s).slice(1).map(parseFloat);
          if (C(0, 100, r) !== r) throw new P(e);
          if (C(0, 100, n) !== n) throw new P(e);
          return [...z(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new P(e)
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
        D = new RegExp(`^#${E("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        T = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${E(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        N = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        I = /^[a-z]+$/i,
        L = e => Math.round(255 * e),
        z = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(L);
          const o = (e % 360 + 360) % 360 / 60,
            s = (1 - Math.abs(2 * n - 1)) * (t / 100),
            i = s * (1 - Math.abs(o % 2 - 1));
          let a = 0,
            l = 0,
            d = 0;
          o >= 0 && o < 1 ? (a = s, l = i) : o >= 1 && o < 2 ? (a = i, l = s) : o >= 2 && o < 3 ? (l = s, d = i) : o >= 3 && o < 4 ? (l = i, d = s) : o >= 4 && o < 5 ? (a = i, d = s) : o >= 5 && o < 6 && (a = s, d = i);
          const c = n - s / 2;
          return [a + c, l + c, d + c].map(L)
        };

      function M(e, t) {
        const [r, n, o, s] = function(e) {
          const [t, r, n, o] = O(e).map((e, t) => 3 === t ? e : e / 255), s = Math.max(t, r, n), i = Math.min(t, r, n), a = (s + i) / 2;
          if (s === i) return [0, 0, a, o];
          const l = s - i;
          return [60 * (t === s ? (r - n) / l + (r < n ? 6 : 0) : r === s ? (n - t) / l + 2 : (t - r) / l + 4), a > .5 ? l / (2 - s - i) : l / (s + i), a, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${C(0,100,100*t).toFixed()}%, ${C(0,100,100*r).toFixed()}%, ${parseFloat(C(0,1,n).toFixed(3))})`
        }(r, n, o - t, s)
      }

      function A(e, t) {
        return M(e, -t)
      }
      var V = r(71127),
        F = r.t(V, 2),
        q = r.n(V),
        B = r(93715),
        K = r(57461),
        H = r(75523);
      const W = {
          enabled: {
            background: (0, B.Tm)(K.no.enabled.background),
            border: (0, B.Tm)(K.no.enabled.border),
            text: (0, B.Tm)(K.no.enabled.text),
            outline: (0, B.Tm)(K.no.enabled.outline)
          },
          hover: {
            background: (0, B.Tm)(K.no.hover.background),
            border: (0, B.Tm)(K.no.hover.border),
            text: (0, B.Tm)(K.no.hover.text),
            outline: (0, B.Tm)(K.no.hover.outline)
          },
          focus: {
            background: (0, B.Tm)(K.no.focus.background),
            border: (0, B.Tm)(K.no.focus.border),
            text: (0, B.Tm)(K.no.focus.text),
            outline: (0, B.Tm)(K.no.focus.outline)
          },
          pressed: {
            background: (0, B.Tm)(K.no.pressed.background),
            border: (0, B.Tm)(K.no.pressed.border),
            text: (0, B.Tm)(K.no.pressed.text),
            outline: (0, B.Tm)(K.no.pressed.outline)
          },
          disabled: {
            background: (0, B.Tm)(K.no.disabled.background),
            border: (0, B.Tm)(K.no.disabled.border),
            text: (0, B.Tm)(K.no.disabled.text),
            outline: (0, B.Tm)(K.no.disabled.outline)
          },
          loading: {
            background: (0, B.Tm)(K.no.loading.background),
            border: (0, B.Tm)(K.no.loading.border),
            text: (0, B.Tm)(K.no.loading.text),
            outline: (0, B.Tm)(K.no.loading.outline)
          }
        },
        X = ({
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
          enabled: d = !1
        }, c = []) => {
          (0, V.useEffect)(() => {
            if (!e.current || !s || !d) return;
            const c = `${s}:${t}:${r}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, H.IO)(c, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = O(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(s);
                return {
                  text: l || (e > t ? B.LU.global.color.black.static[100] : B.LU.global.color.white.static[100]),
                  hover: i || (e >= r ? M(s, n) : A(s, n)),
                  pressed: a || (e >= r ? M(s, o) : A(s, o))
                }
              });
            return e.current.style.setProperty(W.enabled.background, s), e.current.style.setProperty(W.enabled.border, s), e.current.style.setProperty(W.enabled.text, u), e.current.style.setProperty(W.hover.background, f), e.current.style.setProperty(W.hover.border, f), e.current.style.setProperty(W.hover.text, u), e.current.style.setProperty(W.focus.background, f), e.current.style.setProperty(W.focus.border, f), e.current.style.setProperty(W.focus.text, u), e.current.style.setProperty(W.pressed.background, p), e.current.style.setProperty(W.pressed.border, p), e.current.style.setProperty(W.pressed.text, u), e.current.style.setProperty(W.loading.background, f), e.current.style.setProperty(W.loading.border, f), e.current.style.setProperty(W.loading.text, u), () => {
              e.current?.style.removeProperty(W.enabled.background), e.current?.style.removeProperty(W.enabled.border), e.current?.style.removeProperty(W.enabled.text), e.current?.style.removeProperty(W.hover.background), e.current?.style.removeProperty(W.hover.border), e.current?.style.removeProperty(W.hover.text), e.current?.style.removeProperty(W.focus.background), e.current?.style.removeProperty(W.focus.border), e.current?.style.removeProperty(W.focus.text), e.current?.style.removeProperty(W.pressed.background), e.current?.style.removeProperty(W.pressed.border), e.current?.style.removeProperty(W.pressed.text), e.current?.style.removeProperty(W.loading.background), e.current?.style.removeProperty(W.loading.border), e.current?.style.removeProperty(W.loading.text)
            }
          }, [e.current, t, r, n, o, s, i, a, l, d, ...c])
        };
      var G = r(19403),
        U = r(4408);
      r(84735);
      const Z = (0, V.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        $ = () => (0, V.useContext)(Z),
        Q = () => {
          const {
            platformScale: e
          } = $();
          return e
        };
      var Y = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        J = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        ee = {
          dark: "foundry_nu8bkp6",
          light: "foundry_nu8bkp5",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3"
        },
        te = "--foundry-platform-scales-ratio-65afb887",
        re = "foundry_nu8bkp4",
        ne = "foundry_nu8bkp3";
      const oe = e => "dark" === e ? ee.dark : ee.light;
      const se = () => H.X3 ? null : document.body;
      (0, V.forwardRef)(({
        children: e,
        className: t,
        container: r = se(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: s,
        defaultPlatformScale: i,
        platformScale: a,
        onPlatformScaleChange: l,
        locale: d = "en-US"
      }, c) => {
        const u = (0, V.useRef)(null),
          f = (0, G.UP)(u, c),
          p = (0, V.useRef)(r),
          {
            ratio: h,
            scale: v
          } = function(e) {
            const [t, r] = (0, V.useState)(e.platformScale || e.defaultPlatformScale), n = (0, V.useCallback)(t => {
              r(t), e.onPlatformScaleChange?.(t)
            }, [e.onPlatformScaleChange]), o = (0, V.useRef)([]), s = () => {
              if (!H.X3) {
                for (const {
                    handler: e,
                    matchMedia: t
                  }
                  of o.current) t.removeEventListener("change", e);
                o.current = []
              }
            };
            return (0, V.useEffect)(() => (e.platformScale ? n(e.platformScale) : (() => {
              if (!H.X3) {
                s();
                for (const e in J) {
                  const t = window.matchMedia(J[e]),
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
              ratio: Y[t]
            }
          }({
            onPlatformScaleChange: l,
            defaultPlatformScale: i,
            platformScale: a
          }),
          {
            appearanceClass: m,
            otherAppearanceClasses: y,
            providerColor: g
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark"
          }) {
            const r = (0, G.Ub)("(prefers-color-scheme: light)"),
              n = (0, G.Ub)("(prefers-color-scheme: dark)"),
              o = "system" !== e && e || r && "light" || n && "dark" || t,
              s = (0, V.useMemo)(() => oe(o), [o]),
              i = (0, V.useMemo)(() => (e => {
                const t = oe(e);
                return [ee.light, ee.dark].filter(e => e !== t)
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
          const i = (0, G.ZC)(s),
            a = (0, G.ZC)(e.current);
          (0, V.useEffect)(() => {
            e.current?.classList.contains(re) || e.current?.classList.add(re), e.current?.classList.contains(ne) || e.current?.classList.add(ne), e.current?.classList.add(r), e.current?.classList.remove(...n), i && s && e.current?.classList.contains(i) ? e.current?.classList.replace(i, s) : i && !s && e.current?.classList.contains(i) ? e.current?.classList.remove(i) : s && e.current?.classList.add(s)
          }, [r, s]), (0, V.useEffect)(() => {
            e.current?.setAttribute("lang", o)
          }, [o]), (0, V.useEffect)(() => (t && e.current?.style.setProperty(te, t.toString()), () => {
            e.current?.style.removeProperty(te)
          }), [t]), (0, V.useEffect)(() => {
            a?.classList.remove(re), a?.classList.remove(ne), a?.classList.remove(r), a?.style.removeProperty(te), s && a?.classList.remove(s)
          }, [a])
        })({
          locale: d,
          className: t,
          appearanceClass: m,
          otherAppearanceClasses: y,
          currentScale: a ? h : -0,
          container: n ? u : p
        }), (0, x.jsx)(Z.Provider, {
          value: {
            locale: d,
            defaultColorScheme: s,
            colorScheme: g,
            defaultPlatformScale: i,
            platformScale: v
          },
          children: n ? (0, x.jsx)(U.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var ie = r(18429),
        ae = r(95362),
        le = Symbol.for("react.lazy"),
        de = F[" use ".trim().toString()];

      function ce(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === le && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function ue(e) {
        const t = V.forwardRef((e, t) => {
          let {
            children: r,
            ...n
          } = e;
          if (ce(r) && "function" == typeof de && (r = de(r._payload)), V.isValidElement(r)) {
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
            return r.type !== V.Fragment && (o.ref = t ? (0, ae.t)(t, e) : e), V.cloneElement(r, o)
          }
          return V.Children.count(r) > 1 ? V.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var fe = Symbol("radix.slottable");

      function pe(e) {
        return V.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === fe
      }
      var he = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = function(e) {
              const t = ue(e),
                r = V.forwardRef((e, r) => {
                  let {
                    children: n,
                    ...o
                  } = e;
                  ce(n) && "function" == typeof de && (n = de(n._payload));
                  const s = V.Children.toArray(n),
                    i = s.find(pe);
                  if (i) {
                    const e = i.props.children,
                      n = s.map(t => t === i ? V.Children.count(e) > 1 ? V.Children.only(null) : V.isValidElement(e) ? e.props.children : null : t);
                    return (0, x.jsx)(t, {
                      ...o,
                      ref: r,
                      children: V.isValidElement(e) ? V.cloneElement(e, void 0, n) : null
                    })
                  }
                  return (0, x.jsx)(t, {
                    ...o,
                    ref: r,
                    children: n
                  })
                });
              return r.displayName = `${e}.Slot`, r
            }(`Primitive.${t}`),
            n = V.forwardRef((e, n) => {
              const {
                asChild: o,
                ...s
              } = e, i = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, x.jsx)(i, {
                ...s,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {}),
        ve = Object.freeze({
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
        me = V.forwardRef((e, t) => (0, x.jsx)(he.span, {
          ...e,
          ref: t,
          style: {
            ...ve,
            ...e.style
          }
        }));
      me.displayName = "VisuallyHidden";
      var ye = me,
        ge = ({
          children: e,
          label: t
        }) => {
          const r = V.Children.only(e);
          return (0, x.jsxs)(x.Fragment, {
            children: [V.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, x.jsx)(ye, {
              children: t
            })]
          })
        };
      ge.displayName = "AccessibleIcon";
      var be = ge;

      function we(e) {
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

      function _e(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _e(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = we(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _e(Object(r)).forEach(function(t) {
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
      var je = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pe = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xe(xe({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) je(d, n, e.defaultVariants) && (r += " " + c);
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
      const Oe = "pageMD",
        Se = (0, V.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = Oe,
          testId: n,
          ...o
        }, s) => {
          const i = Q(),
            a = "string" == typeof r ? r : r?.[i] ?? r.default ?? Oe,
            l = (0, H.v6)({
              className: Pe({
                size: a
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, x.jsx)(be, {
            label: e,
            children: (0, x.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: s,
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
      var ke = r(1556),
        Ee = r(34232);

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

      function De(e, t) {
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
          t % 2 ? De(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Re(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : De(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ne(e, t) {
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
        Le = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Te(Te({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
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
              return Ne(e.variantClassNames, e => Ne(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ze = Le({
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
      Le({
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
      var Me = Le({
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
        Ae = Le({
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
        Ve = Le({
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
      const Fe = (0, V.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: s,
        iconRightLabel: i,
        appearance: a,
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
        const C = (0, V.useRef)(null),
          j = (0, G.UP)(C, _),
          P = Q(),
          O = "string" == typeof l ? l : l?.[P] ?? l.default ?? "MD",
          {
            buttonProps: S
          } = (0, G.sL)((0, H.v6)(w, {
            isLoading: c
          }), C);
        X({
          refs: {
            buttonRef: C
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
          enabled: "accent" === a
        }, [t]);
        const k = (0, H.v6)({
            className: ze({
              appearance: a,
              size: O,
              fullWidth: d,
              iconLeft: !!n,
              iconRight: !!s,
              isLoading: c
            }),
            "data-testid": e
          }, S),
          E = n && Ee[n],
          R = s && Ee[s],
          D = t ? U.DX : "button",
          T = d && (R || R && E);
        return (0, x.jsxs)(D, {
          ref: j,
          ...k,
          children: [T && (0, x.jsx)("div", {
            className: "foundry_17pcofy15"
          }), E && (0, x.jsx)(E, {
            label: o || "",
            size: O,
            className: (0, ke.clsx)(Me({
              size: O
            }), "foundry_17pcofy11")
          }), (0, x.jsx)(U.xV, {
            children: r
          }), R && (0, x.jsx)(R, {
            label: i || "",
            size: O,
            className: (0, ke.clsx)(Me({
              size: O
            }), Ae({
              fullWidth: d
            }))
          }), c && (0, x.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, x.jsx)(Se, {
              label: u || "",
              size: "inline" + ("LG" === O ? "LG" : "MD"),
              hideTrack: !0,
              className: Ve({
                size: O
              })
            })
          })]
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = qe(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
      var We = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xe = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ke(Ke({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) We(d, n, e.defaultVariants) && (r += " " + c);
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
        Ge = Xe({
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
        Ue = Xe({
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
        Ze = Xe({
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
      const $e = (0, V.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: s = !1,
        size: i = "LG",
        children: a,
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
          _ = (0, G.UP)(w, b),
          C = Q(),
          j = "string" == typeof i ? i : i?.[C] ?? i.default ?? "LG",
          {
            buttonProps: P
          } = (0, G.sL)((0, H.v6)(g, {
            isLoading: l
          }), w);
        X({
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
        const O = (0, H.v6)({
            className: Ue({
              appearance: o,
              size: j,
              fullWidth: s,
              isLoading: l
            }),
            "data-testid": e
          }, P),
          S = Ee[r],
          k = t ? U.DX : "button";
        return (0, x.jsxs)(k, {
          ref: _,
          ...O,
          children: [S && (0, x.jsx)(S, {
            label: n || "",
            size: j,
            className: Ge({
              size: j
            })
          }), (0, x.jsx)(U.xV, {
            children: a
          }), l && (0, x.jsx)("div", {
            className: "foundry_a5x3khl",
            children: (0, x.jsx)(Se, {
              label: d || "",
              size: j && "SM" !== j ? `inline${j}` : "inlineMD",
              hideTrack: !0,
              className: Ze({
                size: j
              })
            })
          })]
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
        rt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Je(Je({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
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
      const nt = (0, V.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: s,
        ...i
      }, a) => {
        const l = "horizontal" !== t || n ? "div" : "hr",
          d = n || "hr" === l ? void 0 : "separator",
          c = o ? U.DX : l;
        return (0, x.jsx)(c, {
          ref: a,
          className: (0, ke.clsx)(rt({
            thickness: r,
            orientation: t
          }), e),
          role: d,
          "aria-orientation": t,
          "data-testid": s,
          ...i
        })
      });

      function ot(e) {
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

      function it(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? st(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ot(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : st(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function at(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var lt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dt = "var(--foundry_9dxgbc2)",
        ct = "var(--foundry_9dxgbc3)",
        ut = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = it(it({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) lt(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return at(e.variantClassNames, e => at(e, e => e.split(" ")[0]))
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
        ft = "var(--foundry_9dxgbc0)",
        pt = "var(--foundry_9dxgbc1)";
      const ht = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: s = "MD",
        ...i
      }, a) => {
        const l = Q(),
          d = "string" == typeof s ? s : s?.[l] ?? s.default ?? "MD",
          c = (0, H.v6)({
            className: ut({
              size: d
            }),
            "data-testid": t,
            style: (0, B.DI)({
              [ft]: n?.pulseColorBackground,
              [pt]: n?.pulseColorForeground,
              [dt]: n?.gradientColorBackground,
              [ct]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, i),
          u = e ? U.DX : "div";
        return (0, x.jsx)(u, {
          ref: a,
          ...c,
          children: e ? (0, x.jsx)(U.xV, {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = vt(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
        wt = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yt(yt({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
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
        },
        _t = wt({
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
      const xt = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const i = e ? U.DX : "p",
          a = (0, H.v6)({
            className: _t({
              size: n,
              appearance: r
            })
          }, o);
        return (0, x.jsx)(i, {
          ref: s,
          "data-testid": t,
          ...a
        })
      });
      var Ct = wt({
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
      const jt = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const s = e ? U.DX : "p",
            i = (0, H.v6)({
              className: Ct({
                appearance: r
              })
            }, n);
          return (0, x.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...i
          })
        }),
        Pt = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? U.DX : "h1",
            s = (0, H.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        });
      var Ot = wt({
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
      const St = (0, V.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? U.DX : `h${t}`,
          i = (0, H.v6)(n, {
            className: Ot({
              level: t
            })
          });
        return (0, x.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...i
        })
      });
      var kt = wt({
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
      const Et = (0, V.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const i = e ? U.DX : "p",
          a = (0, H.v6)({
            className: kt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, x.jsx)(i, {
          ref: s,
          "data-testid": t,
          ...a
        })
      });
      var Rt = wt({
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
      const Dt = {
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
        Tt = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const s = e ? U.DX : Dt[r] || "span",
            i = (0, H.v6)(n, {
              className: Rt({
                semantic: r
              })
            });
          return (0, x.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...i
          })
        });
      var Nt = r(7911),
        It = r(94875);
      const Lt = {
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

      function zt(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function Mt(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -zt(t - e, r - t, n) + t : e > r ? +zt(e - r, r - t, n) + r : e
      }

      function At(e, t, r) {
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

      function Vt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vt(Object(r), !0).forEach(function(t) {
            At(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const qt = {
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

      function Bt(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const Kt = ["enter", "leave"];
      const Ht = ["gotpointercapture", "lostpointercapture"];

      function Wt(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = Ht.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function Xt(e) {
        return "touches" in e
      }

      function Gt(e) {
        return Xt(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Ut(e) {
        return Xt(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Zt(e, t) {
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

      function $t(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return Zt(r, n)
      }

      function Qt(e) {
        const t = Ut(e);
        return Xt(e) ? t.identifier : t.pointerId
      }

      function Yt(e) {
        const t = Ut(e);
        return [t.clientX, t.clientY]
      }

      function Jt(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function er(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function tr() {}

      function rr(...e) {
        return 0 === e.length ? tr : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function nr(e, t) {
        return Object.assign({}, t, e || {})
      }
      class or {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? er(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            Lt.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [s, i] = t._movement, [a, l] = r.threshold, {
            _step: d,
            values: c
          } = t;
          if (r.hasCustomTransform ? (!1 === d[0] && (d[0] = Math.abs(s) >= a && c[0]), !1 === d[1] && (d[1] = Math.abs(i) >= l && c[1])) : (!1 === d[0] && (d[0] = Math.abs(s) >= a && Math.sign(s) * a), !1 === d[1] && (d[1] = Math.abs(i) >= l && Math.sign(i) * l)), t.intentional = !1 !== d[0] || !1 !== d[1], !t.intentional) return;
          const u = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = c;
            u[0] = !1 !== d[0] ? e - d[0] : 0, u[1] = !1 !== d[1] ? t - d[1] : 0
          } else u[0] = !1 !== d[0] ? s - d[0] : 0, u[1] = !1 !== d[1] ? i - d[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(u);
          const f = t.offset,
            p = t._active && !t._blocked || t.active;
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = er(r.bounds, t)), this.setup && this.setup()), t.movement = u, this.computeOffset()));
          const [h, v] = t.offset, [
            [m, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [h < m ? -1 : h > y ? 1 : 0, v < g ? -1 : v > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [s, i],
                [a, l]
              ] = e;
              return [Mt(t, s, i, n), Mt(r, a, l, o)]
            }(t._bounds, t.offset, w), t.delta = Lt.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = Lt.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Lt.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(Ft(Ft(Ft({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class sr extends or {
        constructor(...e) {
          super(...e), At(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Lt.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Lt.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Gt(e)] : r.axisThreshold;
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
      const ir = e => e,
        ar = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => Ft(Ft({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return Lt.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Lt.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || ir
          },
          threshold: e => Lt.toVector(e, 0)
        },
        lr = Ft(Ft({}, ar), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => lr.bounds(e(t));
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
        dr = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        cr = "undefined" != typeof window && window.document && window.document.createElement;

      function ur() {
        return cr && "ontouchstart" in window
      }
      const fr = {
          isBrowser: cr,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: ur(),
          touchscreen: ur() || cr && window.navigator.maxTouchPoints > 1,
          pointer: cr && "onpointerdown" in window,
          pointerLock: cr && "exitPointerLock" in window.document
        },
        pr = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        hr = Ft(Ft({}, lr), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && fr.pointerLock, fr.touch && r ? "touch" : this.pointerLock ? "mouse" : fr.pointer && !o ? "pointer" : fr.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, fr.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const s = Lt.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, s
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(Lt.toVector(e)),
              distance: this.transform(Lt.toVector(t)),
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
          axisThreshold: e => e ? Ft(Ft({}, pr), e) : pr,
          keyboardDisplacement: (e = 10) => e
        });

      function vr(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [s, i] = e._direction;
        (t < 0 && n > 0 && s < 0 || t > 0 && n < 0 && s > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && i < 0 || r > 0 && o < 0 && i > 0) && (e._movement[1] = e._movementBound[1])
      }
      const mr = Ft(Ft({}, ar), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !fr.touch && fr.gesture) return "gesture";
            if (fr.touch && n) return "touch";
            if (fr.touchscreen) {
              if (fr.pointer) return "pointer";
              if (fr.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = nr(er(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              s = e => {
                const t = nr(er(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), s()] : e => [o(e), s(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, Lt.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        yr = Ft(Ft({}, lr), {}, {
          mouseOnly: (e = !0) => e
        }),
        gr = lr,
        br = lr,
        wr = Ft(Ft({}, lr), {}, {
          mouseOnly: (e = !0) => e
        }),
        _r = new Map,
        xr = new Map;

      function Cr(e) {
        _r.set(e.key, e.engine), xr.set(e.key, e.resolver)
      }
      const jr = {
          key: "drag",
          engine: class extends sr {
            constructor(...e) {
              super(...e), At(this, "ingKey", "dragging")
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
                e._bounds = lr.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Qt(e), r._pointerActive = !0, this.computeValues(Yt(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Gt(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Qt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Yt(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Lt.sub(o, t._values), this.computeValues(o)), Lt.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = Qt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, s] = t._distance;
              if (t.tap = o <= r.tapsThreshold && s <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, s] = t._movement, [i, a] = r.swipe.velocity, [l, d] = r.swipe.distance, c = r.swipe.duration;
                if (t.elapsedTime < c) {
                  const r = Math.abs(e / t.timeDelta),
                    c = Math.abs(n / t.timeDelta);
                  r > i && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), c > a && Math.abs(s) > d && (t.swipe[1] = Math.sign(n))
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
              const t = dr[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, Lt.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in dr && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: hr
        },
        Pr = {
          key: "hover",
          engine: class extends sr {
            constructor(...e) {
              super(...e), At(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Yt(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Yt(e);
              t._movement = t._delta = Lt.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: wr
        },
        Or = {
          key: "move",
          engine: class extends sr {
            constructor(...e) {
              super(...e), At(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Yt(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Yt(e),
                r = this.state;
              r._delta = Lt.sub(t, r._values), Lt.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: yr
        },
        Sr = {
          key: "pinch",
          engine: class extends or {
            constructor(...e) {
              super(...e), At(this, "ingKey", "pinching"), At(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? Lt.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = $t(e, t._touchIds);
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
              const o = Zt(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = $t(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = Zt(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = Lt.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-Jt(e)[1] / 100 * t.offset[0], 0], Lt.addTo(t._movement, t._delta), vr(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: mr
        },
        kr = {
          key: "scroll",
          engine: class extends sr {
            constructor(...e) {
              super(...e), At(this, "ingKey", "scrolling")
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
              t._delta = Lt.sub(r, t._values), Lt.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: gr
        },
        Er = {
          key: "wheel",
          engine: class extends sr {
            constructor(...e) {
              super(...e), At(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Jt(e), Lt.addTo(t._movement, t._delta), vr(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: br
        };
      const Rr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (fr.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Dr = ["target", "eventOptions", "window", "enabled", "transform"];

      function Tr(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = Tr(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class Nr {
        constructor(e, t) {
          At(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const s = this._listeners,
            i = function(e, t = "") {
              const r = qt[e];
              return e + (r && r[t] || t)
            }(t, r),
            a = Ft(Ft({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class Ir {
        constructor() {
          At(this, "_timeouts", new Map)
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
      class Lr {
        constructor(e) {
          var t, r;
          At(this, "gestures", new Set), At(this, "_targetEventStore", new Nr(this)), At(this, "gestureEventStores", {}), At(this, "gestureTimeoutStores", {}), At(this, "handlers", {}), At(this, "config", {}), At(this, "pointerIds", new Set), At(this, "touchIds", new Set), At(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && zr(t, "drag"), r.wheel && zr(t, "wheel"), r.scroll && zr(t, "scroll"), r.move && zr(t, "move"), r.pinch && zr(t, "pinch"), r.hover && zr(t, "hover")
        }
        setEventIds(e) {
          return Xt(e) ? (this.touchIds = new Set(function(e) {
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
              }(n, Dr);
            if (r.shared = Tr({
                target: o,
                eventOptions: s,
                window: i,
                enabled: a,
                transform: l
              }, Rr), t) {
              const e = xr.get(t);
              r[t] = Tr(Ft({
                shared: r.shared
              }, d), e)
            } else
              for (const e in d) {
                const t = xr.get(e);
                t && (r[e] = Tr(Ft({
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
                  s = Mr(r, o.eventOptions, !!n);
                o.enabled && new(_r.get(t))(this, e, t).bind(s)
              }
              const o = Mr(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](Ft(Ft({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = rr(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: s
              } = Wt(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: s
              })
            }
          }
        }
      }

      function zr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Nr(e, t), e.gestureTimeoutStores[t] = new Ir
      }
      const Mr = (e, t, r) => (n, o, s, i = {}, a = !1) => {
          var l, d;
          const c = null !== (l = i.capture) && void 0 !== l ? l : t.capture,
            u = null !== (d = i.passive) && void 0 !== d ? d : t.passive;
          let f = a ? n : function(e, t = "", r = !1) {
            const n = qt[e],
              o = n && n[t] || t;
            return "on" + Bt(e) + Bt(o) + (function(e = !1, t) {
              return e && !Kt.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && u && (f += "Passive"), e[f] = e[f] || [], e[f].push(s)
        },
        Ar = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Vr(e, t, r, n, o, s) {
        if (!e.has(r)) return;
        if (!_r.has(n)) return;
        const i = r + "Start",
          a = r + "End";
        o[n] = e => {
          let n;
          return e.first && i in t && t[i](e), r in t && (n = t[r](e)), e.last && a in t && t[a](e), n
        }, s[n] = s[n] || {}
      }

      function Fr(e, t = {}, r, n) {
        const o = q().useMemo(() => new Lr(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), q().useEffect(o.effect.bind(o)), q().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function qr(e, t) {
        const r = ([jr, Sr, kr, Er, Or, Pr].forEach(Cr), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) Ar.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), s = {};
            return Vr(o, r, "onDrag", "drag", s, t), Vr(o, r, "onWheel", "wheel", s, t), Vr(o, r, "onScroll", "scroll", s, t), Vr(o, r, "onPinch", "pinch", s, t), Vr(o, r, "onMove", "move", s, t), Vr(o, r, "onHover", "hover", s, t), {
              handlers: s,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return Fr(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const Br = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Kr = ([e, t]) => ({
        x: e,
        y: t
      }), Hr = (e, t) => (e.x = t.x, e.y = t.y, e), Wr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Xr = (e, t, r) => Math.min(Math.max(e, t), r);

      function Gr() {
        return Gr = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Gr.apply(null, arguments)
      }
      var Ur = ["shift", "alt", "meta", "mod", "ctrl"],
        Zr = {
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

      function $r(e) {
        return (e && Zr[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Qr(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Yr(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return $r(e)
        });
        return Gr({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Ur.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && tn([$r(e.key), $r(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && rn([$r(e.key), $r(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Jr.clear()
      });
      var Jr = new Set;

      function en(e) {
        return Array.isArray(e)
      }

      function tn(e) {
        var t = Array.isArray(e) ? e : [e];
        Jr.has("meta") && Jr.forEach(function(e) {
          return ! function(e) {
            return Ur.includes(e)
          }(e) && Jr.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Jr.add(e.toLowerCase())
        })
      }

      function rn(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Jr.clear() : t.forEach(function(e) {
          return Jr.delete(e.toLowerCase())
        })
      }

      function nn(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          s = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && s ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, en(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var on = (0, V.createContext)(void 0);

      function sn(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, x.jsx)(on.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function an(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && an(e[n], t[n])
        }, !0) : e === t
      }
      var ln = (0, V.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        dn = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, V.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            s = o[0],
            i = o[1],
            a = (0, V.useState)([]),
            l = a[0],
            d = a[1],
            c = (0, V.useCallback)(function(e) {
              i(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            u = (0, V.useCallback)(function(e) {
              i(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, V.useCallback)(function(e) {
              i(function(t) {
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
                  return !an(t, e)
                })
              })
            }, []);
          return (0, x.jsx)(ln.Provider, {
            value: {
              enabledScopes: s,
              hotkeys: l,
              enableScope: c,
              disableScope: u,
              toggleScope: f
            },
            children: (0, x.jsx)(sn, {
              addHotkey: p,
              removeHotkey: h,
              children: n
            })
          })
        },
        cn = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        un = "undefined" != typeof window ? V.useLayoutEffect : V.useEffect;

      function fn(e, t, r, n) {
        var o = (0, V.useState)(null),
          s = o[0],
          i = o[1],
          a = (0, V.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          d = en(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          u = (0, V.useCallback)(t, null != c ? c : []),
          f = (0, V.useRef)(u);
        f.current = c ? u : t;
        var p = function(e) {
            var t = (0, V.useRef)(void 0);
            return an(t.current, e) || (t.current = e), t.current
          }(l),
          h = (0, V.useContext)(ln).enabledScopes,
          v = (0, V.useContext)(on);
        return un(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !nn(e, ["input", "textarea", "select"]) || nn(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== s) {
                    var n = s.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== s && !s.contains(n.activeElement)) return void cn(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && Qr(d, null == p ? void 0 : p.splitKey).forEach(function(r) {
                    var n, o = Yr(r, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, s = t.alt,
                          i = t.meta,
                          a = t.mod,
                          l = t.shift,
                          d = t.ctrl,
                          c = t.keys,
                          u = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          v = e.shiftKey,
                          m = e.altKey,
                          y = $r(f),
                          g = u.toLowerCase();
                        if (!(null != c && c.includes(y) || null != c && c.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (s === !m && "alt" !== g) return !1;
                          if (l === !v && "shift" !== g) return !1;
                          if (a) {
                            if (!h && !p) return !1
                          } else {
                            if (i === !h && "meta" !== g && "os" !== g) return !1;
                            if (d === !p && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (en(n = c) ? n : n.split(o)).every(function(e) {
                          return Jr.has(e.trim().toLowerCase())
                        })) : !c)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void cn(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (tn($r(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (rn($r(e.code)), a.current = !1, null != p && p.keyup && r(e, !0))
              },
              i = s || (null == l ? void 0 : l.document) || document;
            return i.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), i.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), v && Qr(d, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return v.addHotkey(Yr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                i.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), i.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), v && Qr(d, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return v.removeHotkey(Yr(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [s, d, p, h]), i
      }

      function pn(e) {
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

      function hn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hn(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = pn(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mn(e, t) {
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
        gn = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vn(vn({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) yn(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mn(e.variantClassNames, e => mn(e, e => e.split(" ")[0]))
            }
          }, t
        },
        bn = gn({
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
        wn = gn({
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
      Nt.gsap.registerPlugin(It.useGSAP);
      const _n = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        xn = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Cn = (0, B.Tm)("var(--foundry_1a74xwb0)");
      var jn = r(9872),
        Pn = r(24944),
        On = r(30597);
      const Sn = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, s] = (0, V.useState)(null);
          return (0, V.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              s(e.default)
            })
          }, [r]), o ? (0, x.jsx)(jn.A, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        kn = {
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
      class En {
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
          return r ? t : Xr(t, this.max[e], this.min[e])
        }
      }
      class Rn {
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
      class Dn {
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
      class Tn {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Hr(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Hr(this.prevTap, {
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
          if (this.slide.getOverlayOpacity() < 1 && "y" === e) {
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
      class Nn {
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
          e.src = this.thumbnail.currentSrc ?? "", await Br(e)
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
      class In {
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
      class Ln extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class zn extends Dn {
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
          if (!this.dispatch(e, new Ln(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class Mn {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Kr(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Hr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Kr(e);
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
            s = Hr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let i = Hr({
            x: 0,
            y: 0
          }, s);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Hr(this.startPan, s)), n && (i = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), i = {
            x: this.slide.bounds.correctPan("x", i.x),
            y: this.slide.bounds.correctPan("y", i.y)
          }, this.slide.setZoomLevel(t, !1), l = s, ((a = i).x !== l.x || a.y !== l.y || n || o) && (Hr(this.slide.pan, i), this.slide.setZoomLevel(r))
        }
      }
      class An extends Dn {
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
          super(), this.width = e, this.height = t, this.opener = new Nn({
            slide: this
          }), this.bounds = new En({
            slide: this
          }), this.dragHandler = new Tn({
            slide: this
          }), this.scrollWheel = new In({
            slide: this
          }), this.zoomHandler = new Mn({
            slide: this
          }), this.zoomLevels = new Rn({
            options: r
          }), this.tapHandler = new zn({
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
          r || (e = Xr(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Wr(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Wr(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Hr(this.pan, this.bounds.center)
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
      const Vn = e => "dark" === e ? ee.dark : ee.light,
        Fn = (0, Pn.YK)({
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
      var qn = "foundry_bc732x1";
      const Bn = (0, V.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (fn(e, e => r?.(e), [r]), (0, x.jsx)(xt, {
        size: "XS",
        className: (0, ke.clsx)("foundry_bc732x0", {
          [qn]: t
        }),
        asChild: !0,
        children: (0, x.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Kn = so(),
        Hn = e => to(e, Kn),
        Wn = so();
      Hn.write = e => to(e, Wn);
      var Xn = so();
      Hn.onStart = e => to(e, Xn);
      var Gn = so();
      Hn.onFrame = e => to(e, Gn);
      var Un = so();
      Hn.onFinish = e => to(e, Un);
      var Zn = [];
      Hn.setTimeout = (e, t) => {
        const r = Hn.now() + t,
          n = () => {
            const e = Zn.findIndex(e => e.cancel == n);
            ~e && Zn.splice(e, 1), Jn -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Zn.splice($n(r), 0, o), Jn += 1, ro(), o
      };
      var $n = e => ~(~Zn.findIndex(t => t.time > e) || ~Zn.length);
      Hn.cancel = e => {
        Xn.delete(e), Gn.delete(e), Un.delete(e), Kn.delete(e), Wn.delete(e)
      }, Hn.sync = e => {
        eo = !0, Hn.batchedUpdates(e), eo = !1
      }, Hn.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Hn.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Xn.delete(r), t = null
        }, n
      };
      var Qn = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Hn.use = e => Qn = e, Hn.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Hn.batchedUpdates = e => e(), Hn.catch = console.error, Hn.frameLoop = "always", Hn.advance = () => {
        "demand" !== Hn.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : oo()
      };
      var Yn = -1,
        Jn = 0,
        eo = !1;

      function to(e, t) {
        eo ? (t.delete(e), e(0)) : (t.add(e), ro())
      }

      function ro() {
        Yn < 0 && (Yn = 0, "demand" !== Hn.frameLoop && Qn(no))
      }

      function no() {
        ~Yn && (Qn(no), Hn.batchedUpdates(oo))
      }

      function oo() {
        const e = Yn;
        Yn = Hn.now();
        const t = $n(Yn);
        t && (io(Zn.splice(0, t), e => e.handler()), Jn -= t), Jn ? (Xn.flush(), Kn.flush(e ? Math.min(64, Yn - e) : 16.667), Gn.flush(), Wn.flush(), Un.flush()) : Yn = -1
      }

      function so() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Jn += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Jn -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Jn -= t.size, io(t, t => t(r) && e.add(t)), Jn += e.size, t = e)
          }
        }
      }

      function io(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Hn.catch(e)
          }
        })
      }
      var ao = Object.defineProperty,
        lo = {};

      function co() {}((e, t) => {
        for (var r in t) ao(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(lo, {
        assign: () => jo,
        colors: () => _o,
        createStringInterpolator: () => yo,
        skipAnimation: () => xo,
        to: () => go,
        willAdvance: () => Co
      });
      var uo = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function fo(e, t) {
        if (uo.arr(e)) {
          if (!uo.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var po = (e, t) => e.forEach(t);

      function ho(e, t, r) {
        if (uo.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var vo = e => uo.und(e) ? [] : uo.arr(e) ? e : [e];

      function mo(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), po(r, t)
        }
      }
      var yo, go, bo = (e, ...t) => mo(e, e => e(...t)),
        wo = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        _o = null,
        xo = !1,
        Co = co,
        jo = e => {
          e.to && (go = e.to), e.now && (Hn.now = e.now), void 0 !== e.colors && (_o = e.colors), null != e.skipAnimation && (xo = e.skipAnimation), e.createStringInterpolator && (yo = e.createStringInterpolator), e.requestAnimationFrame && Hn.use(e.requestAnimationFrame), e.batchedUpdates && (Hn.batchedUpdates = e.batchedUpdates), e.willAdvance && (Co = e.willAdvance), e.frameLoop && (Hn.frameLoop = e.frameLoop)
        },
        Po = new Set,
        Oo = [],
        So = [],
        ko = 0,
        Eo = {
          get idle() {
            return !Po.size && !Oo.length
          },
          start(e) {
            ko > e.priority ? (Po.add(e), Hn.onStart(Ro)) : (Do(e), Hn(No))
          },
          advance: No,
          sort(e) {
            if (ko) Hn.onFrame(() => Eo.sort(e));
            else {
              const t = Oo.indexOf(e);
              ~t && (Oo.splice(t, 1), To(e))
            }
          },
          clear() {
            Oo = [], Po.clear()
          }
        };

      function Ro() {
        Po.forEach(Do), Po.clear(), Hn(No)
      }

      function Do(e) {
        Oo.includes(e) || To(e)
      }

      function To(e) {
        Oo.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(Oo), 0, e)
      }

      function No(e) {
        const t = So;
        for (let r = 0; r < Oo.length; r++) {
          const n = Oo[r];
          ko = n.priority, n.idle || (Co(n), n.advance(e), n.idle || t.push(n))
        }
        return ko = 0, (So = Oo).length = 0, (Oo = t).length > 0
      }
      var Io = {
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
        Lo = "[-+]?\\d*\\.?\\d+",
        zo = Lo + "%";

      function Mo(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Ao = new RegExp("rgb" + Mo(Lo, Lo, Lo)),
        Vo = new RegExp("rgba" + Mo(Lo, Lo, Lo, Lo)),
        Fo = new RegExp("hsl" + Mo(Lo, zo, zo)),
        qo = new RegExp("hsla" + Mo(Lo, zo, zo, Lo)),
        Bo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ko = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ho = /^#([0-9a-fA-F]{6})$/,
        Wo = /^#([0-9a-fA-F]{8})$/;

      function Xo(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Go(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          s = Xo(o, n, e + 1 / 3),
          i = Xo(o, n, e),
          a = Xo(o, n, e - 1 / 3);
        return Math.round(255 * s) << 24 | Math.round(255 * i) << 16 | Math.round(255 * a) << 8
      }

      function Uo(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Zo(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function $o(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Qo(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Yo(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Ho.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : _o && void 0 !== _o[e] ? _o[e] : (t = Ao.exec(e)) ? (Uo(t[1]) << 24 | Uo(t[2]) << 16 | Uo(t[3]) << 8 | 255) >>> 0 : (t = Vo.exec(e)) ? (Uo(t[1]) << 24 | Uo(t[2]) << 16 | Uo(t[3]) << 8 | $o(t[4])) >>> 0 : (t = Bo.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Wo.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Ko.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Fo.exec(e)) ? (255 | Go(Zo(t[1]), Qo(t[2]), Qo(t[3]))) >>> 0 : (t = qo.exec(e)) ? (Go(Zo(t[1]), Qo(t[2]), Qo(t[3])) | $o(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Jo = (e, t, r) => {
          if (uo.fun(e)) return e;
          if (uo.arr(e)) return Jo({
            range: e,
            output: t,
            extrapolate: r
          });
          if (uo.str(e.output[0])) return yo(e);
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
              let d = l ? l(e) : e;
              if (d < t) {
                if ("identity" === i) return d;
                "clamp" === i && (d = t)
              }
              if (d > r) {
                if ("identity" === a) return d;
                "clamp" === a && (d = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? d = -d : r === 1 / 0 ? d -= t : d = (d - t) / (r - t), d = s(d), n === -1 / 0 ? d = -d : o === 1 / 0 ? d += n : d = d * (o - n) + n, d)
            }(e, s[t], s[t + 1], o[t], o[t + 1], l, i, a, n.map)
          }
        },
        es = 1.70158,
        ts = 1.525 * es,
        rs = es + 1,
        ns = 2 * Math.PI / 3,
        os = 2 * Math.PI / 4.5,
        ss = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        is = {
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
          easeInBack: e => rs * e * e * e - es * e * e,
          easeOutBack: e => 1 + rs * Math.pow(e - 1, 3) + es * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - ts) / 2 : (Math.pow(2 * e - 2, 2) * ((ts + 1) * (2 * e - 2) + ts) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ns),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ns) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * os) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * os) / 2 + 1,
          easeInBounce: e => 1 - ss(1 - e),
          easeOutBounce: ss,
          easeInOutBounce: e => e < .5 ? (1 - ss(1 - 2 * e)) / 2 : (1 + ss(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        as = Symbol.for("FluidValue.get"),
        ls = Symbol.for("FluidValue.observers"),
        ds = e => Boolean(e && e[as]),
        cs = e => e && e[as] ? e[as]() : e,
        us = e => e[ls] || null;

      function fs(e, t) {
        const r = e[ls];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var ps = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            hs(this, e)
          }
        },
        hs = (e, t) => gs(e, as, t);

      function vs(e, t) {
        if (e[as]) {
          let r = e[ls];
          r || gs(e, ls, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function ms(e, t) {
        const r = e[ls];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[ls] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var ys, gs = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        bs = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ws = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        _s = new RegExp(`(${bs.source})(%|[a-z]+)`, "i"),
        xs = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Cs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        js = e => {
          const [t, r] = Ps(e);
          if (!t || wo()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && Cs.test(r) ? js(r) : r || e
        },
        Ps = e => {
          const t = Cs.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        Os = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        Ss = e => {
          ys || (ys = _o ? new RegExp(`(${Object.keys(_o).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => cs(e).replace(Cs, js).replace(ws, Yo).replace(ys, Yo)),
            r = t.map(e => e.match(bs).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => Jo({
              ...e,
              output: t
            }));
          return e => {
            const r = !_s.test(t[0]) && t.find(e => _s.test(e))?.replace(bs, "");
            let n = 0;
            return t[0].replace(bs, () => `${o[n++](e)}${r||""}`).replace(xs, Os)
          }
        },
        ks = "react-spring: ",
        Es = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${ks}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Rs = Es(console.warn),
        Ds = Es(console.warn);

      function Ts(e) {
        return uo.str(e) && ("#" == e[0] || /\d/.test(e) || !wo() && Cs.test(e) || e in (_o || {}))
      }
      var Ns = wo() ? V.useEffect : V.useLayoutEffect;

      function Is() {
        const e = (0, V.useState)()[1],
          t = (() => {
            const e = (0, V.useRef)(!1);
            return Ns(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Ls = e => (0, V.useEffect)(e, zs),
        zs = [],
        Ms = Symbol.for("Animated:node"),
        As = e => e && e[Ms],
        Vs = (e, t) => {
          return r = e, n = Ms, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Fs = e => e && e[Ms] && e[Ms].getPayload(),
        qs = class {
          constructor() {
            Vs(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Bs = class e extends qs {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, uo.num(this._value) && (this.lastPosition = this._value)
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
            return uo.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, uo.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Ks = class e extends Bs {
          constructor(e) {
            super(0), this._string = null, this._toString = Jo({
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
            if (uo.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Jo({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Hs = {
          dependencies: null
        },
        Ws = class extends qs {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return ho(this.source, (r, n) => {
              var o;
              (o = r) && o[Ms] === o ? t[n] = r.getValue(e) : ds(r) ? t[n] = cs(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && po(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return ho(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Hs.dependencies && ds(e) && Hs.dependencies.add(e);
            const t = Fs(e);
            t && po(t, e => this.add(e))
          }
        },
        Xs = class e extends Ws {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Gs)), !0)
          }
        };

      function Gs(e) {
        return (Ts(e) ? Ks : Bs).create(e)
      }

      function Us(e) {
        const t = As(e);
        return t ? t.constructor : uo.arr(e) ? Xs : Ts(e) ? Ks : Bs
      }
      var Zs = (e, t) => {
          const r = !uo.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, V.forwardRef)((n, o) => {
            const s = (0, V.useRef)(null),
              i = r && (0, V.useCallback)(e => {
                s.current = function(e, t) {
                  return e && (uo.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const r = new Set;
                return Hs.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Ws(e), Hs.dependencies = null, [e, r]
              }(n, t),
              d = Is(),
              c = () => {
                const e = s.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && d()
              },
              u = new $s(c, l),
              f = (0, V.useRef)(void 0);
            Ns(() => (f.current = u, po(l, e => vs(e, u)), () => {
              f.current && (po(f.current.deps, e => ms(e, f.current)), Hn.cancel(f.current.update))
            })), (0, V.useEffect)(c, []), Ls(() => () => {
              const e = f.current;
              po(e.deps, t => ms(t, e))
            });
            const p = t.getComponentProps(a.getValue());
            return V.createElement(e, {
              ...p,
              ref: i
            })
          })
        },
        $s = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Hn.write(this.update)
          }
        },
        Qs = Symbol.for("AnimatedComponent"),
        Ys = (e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Ws(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            s = e => {
              const t = Js(e) || "Anonymous";
              return (e = uo.str(e) ? s[e] || (s[e] = Zs(e, o)) : e[Qs] || (e[Qs] = Zs(e, o))).displayName = `Animated(${t})`, e
            };
          return ho(e, (t, r) => {
            uo.arr(e) && (r = Js(t)), s[r] = s(t)
          }), {
            animated: s
          }
        },
        Js = e => uo.str(e) ? e : e && uo.str(e.displayName) ? e.displayName : uo.fun(e) && e.name || null;

      function ei(e, ...t) {
        return uo.fun(e) ? e(...t) : e
      }
      var ti = (e, t) => !0 === e || !!(t && e && (uo.fun(e) ? e(t) : vo(e).includes(t))),
        ri = (e, t) => uo.obj(e) ? t && e[t] : e,
        ni = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        oi = e => e,
        si = (e, t = oi) => {
          let r = ii;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            uo.und(r) || (n[o] = r)
          }
          return n
        },
        ii = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        ai = {
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

      function li(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (ho(e, (e, n) => {
              ai[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return ho(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function di(e) {
        return e = cs(e), uo.arr(e) ? e.map(di) : Ts(e) ? lo.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function ci(e) {
        return uo.fun(e) || uo.arr(e) && uo.obj(e[0])
      }

      function ui(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var fi = {
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
        pi = {
          ...fi.default,
          mass: 1,
          damping: 1,
          easing: is.linear,
          clamp: !1
        },
        hi = class {
          constructor() {
            this.velocity = 0, Object.assign(this, pi)
          }
        };

      function vi(e, t) {
        if (uo.und(t.decay)) {
          const r = !uo.und(t.tension) || !uo.und(t.friction);
          !r && uo.und(t.frequency) && uo.und(t.damping) && uo.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var mi = [],
        yi = class {
          constructor() {
            this.changed = !1, this.values = mi, this.toValues = null, this.fromValues = mi, this.config = new hi, this.immediate = !1
          }
        };

      function gi(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: s
      }) {
        return new Promise((i, a) => {
          let l, d, c = ti(r.cancel ?? n?.cancel, t);
          if (c) p();
          else {
            uo.und(r.pause) || (o.paused = ti(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || ti(e, t)), l = ei(r.delay || 0, t), e ? (o.resumeQueue.add(f), s.pause()) : (s.resume(), f())
          }

          function u() {
            o.resumeQueue.add(f), o.timeouts.delete(d), d.cancel(), l = d.time - Hn.now()
          }

          function f() {
            l > 0 && !lo.skipAnimation ? (o.delayed = !0, d = Hn.setTimeout(p, l), o.pauseQueue.add(u), o.timeouts.add(d)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(u), o.timeouts.delete(d), e <= (o.cancelId || 0) && (c = !0);
            try {
              s.start({
                ...r,
                callId: e,
                cancel: c
              }, i)
            } catch (e) {
              a(e)
            }
          }
        })
      }
      var bi = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? xi(e.get()) : t.every(e => e.noop) ? wi(e.get()) : _i(e.get(), t.every(e => e.finished)),
        wi = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        _i = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        xi = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Ci(e, t, r, n) {
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
          const d = si(t, (e, t) => "onRest" === t ? void 0 : e);
          let c, u;
          const f = new Promise((e, t) => (c = e, u = t)),
            p = e => {
              const t = o <= (r.cancelId || 0) && xi(n) || o !== r.asyncId && _i(n, !1);
              if (t) throw e.result = t, u(e), e
            },
            h = (e, t) => {
              const s = new Pi,
                i = new Oi;
              return (async () => {
                if (lo.skipAnimation) throw ji(r), i.result = _i(n, !1), u(i), i;
                p(s);
                const a = uo.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, ho(d, (e, t) => {
                  uo.und(a[t]) && (a[t] = e)
                });
                const l = await n.start(a);
                return p(s), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let v;
          if (lo.skipAnimation) return ji(r), _i(n, !1);
          try {
            let t;
            t = uo.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, n.stop.bind(n))), await Promise.all([t.then(c), f]), v = _i(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof Pi) v = e.result;
            else {
              if (!(e instanceof Oi)) throw e;
              v = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = s, r.asyncTo = s ? a : void 0, r.promise = s ? l : void 0)
          }
          return uo.fun(i) && Hn.batchedUpdates(() => {
            i(v, n, n.item)
          }), v
        })() : l
      }

      function ji(e, t) {
        mo(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Pi = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Oi = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Si = e => e instanceof Ei,
        ki = 1,
        Ei = class extends ps {
          constructor() {
            super(...arguments), this.id = ki++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = As(this);
            return e && e.getValue()
          }
          to(...e) {
            return lo.to(this, e)
          }
          interpolate(...e) {
            return Rs(`${ks}The "interpolate" function is deprecated in v9 (use "to" instead)`), lo.to(this, e)
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
            fs(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Eo.sort(this), fs(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Ri = Symbol.for("SpringPhase"),
        Di = e => (1 & e[Ri]) > 0,
        Ti = e => (2 & e[Ri]) > 0,
        Ni = e => (4 & e[Ri]) > 0,
        Ii = (e, t) => t ? e[Ri] |= 3 : e[Ri] &= -3,
        Li = (e, t) => t ? e[Ri] |= 4 : e[Ri] &= -5,
        zi = class extends Ei {
          constructor(e, t) {
            if (super(), this.animation = new yi, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !uo.und(e) || !uo.und(t)) {
              const r = uo.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              uo.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Ti(this) || this._state.asyncTo) || Ni(this)
          }
          get goal() {
            return cs(this.animation.to)
          }
          get velocity() {
            const e = As(this);
            return e instanceof Bs ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return Di(this)
          }
          get isAnimating() {
            return Ti(this)
          }
          get isPaused() {
            return Ni(this)
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
            } = n, i = Fs(n.to);
            !i && ds(n.to) && (o = vo(cs(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const d = a.constructor == Ks ? 1 : i ? i[l].lastPosition : o[l];
              let c = n.immediate,
                u = d;
              if (!c) {
                if (u = a.lastPosition, s.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = uo.arr(s.velocity) ? s.velocity[l] : s.velocity;
                let i;
                const f = s.precision || (r == d ? .005 : Math.min(1, .001 * Math.abs(d - r)));
                if (uo.und(s.duration))
                  if (s.decay) {
                    const e = !0 === s.decay ? .998 : s.decay,
                      n = Math.exp(-(1 - e) * t);
                    u = r + o / (1 - e) * (1 - n), c = Math.abs(a.lastPosition - u) <= f, i = o * n
                  } else {
                    i = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = s.restVelocity || f / 10,
                      n = s.clamp ? 0 : s.bounce,
                      l = !uo.und(n),
                      p = r == d ? a.v0 > 0 : r < d;
                    let h, v = !1;
                    const m = 1,
                      y = Math.ceil(e / m);
                    for (let e = 0; e < y && (h = Math.abs(i) > t, h || (c = Math.abs(d - u) <= f, !c)); ++e) l && (v = u == d || u > d == p, v && (i = -i * n, u = d)), i += (1e-6 * -s.tension * (u - d) + .001 * -s.friction * i) / s.mass * m, u += i * m
                  }
                else {
                  let n = 1;
                  s.duration > 0 && (this._memoizedDuration !== s.duration && (this._memoizedDuration = s.duration, a.durationProgress > 0 && (a.elapsedTime = s.duration * a.durationProgress, t = a.elapsedTime += e)), n = (s.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, a.durationProgress = n), u = r + s.easing(n) * (d - r), i = (u - a.lastPosition) / e, c = 1 == n
                }
                a.lastVelocity = i, Number.isNaN(u) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              i && !i[l].done && (c = !1), c ? a.done = !0 : t = !1, a.setValue(u, s.round) && (r = !0)
            });
            const a = As(this),
              l = a.getValue();
            if (t) {
              const e = cs(n.to);
              l === e && !r || s.decay ? r && s.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Hn.batchedUpdates(() => {
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
            if (Ti(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Hn.batchedUpdates(() => {
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
            return uo.und(e) ? (r = this.queue || [], this.queue = []) : r = [uo.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => bi(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), ji(this._state, e && this._lastCallId), Hn.batchedUpdates(() => this._stop(t, e)), this
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
            r = uo.obj(r) ? r[t] : r, (null == r || ci(r)) && (r = void 0), n = uo.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return Di(this) || (e.reverse && ([r, n] = [n, r]), n = cs(n), uo.und(n) ? As(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, si(e, (e, t) => /^on/.test(t) ? ri(e, r) : e)), Bi(this, e, "onProps"), Ki(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const s = this._state;
            return gi(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: s,
              actions: {
                pause: () => {
                  Ni(this) || (Li(this, !0), bo(s.pauseQueue), Ki(this, "onPause", _i(this, Mi(this, this.animation.to)), this))
                },
                resume: () => {
                  Ni(this) && (Li(this, !1), Ti(this) && this._resume(), bo(s.resumeQueue), Ki(this, "onResume", _i(this, Mi(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Ai(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(xi(this));
            const n = !uo.und(e.to),
              o = !uo.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(xi(this));
              this._lastToId = t.callId
            }
            const {
              key: s,
              defaultProps: i,
              animation: a
            } = this, {
              to: l,
              from: d
            } = a;
            let {
              to: c = l,
              from: u = d
            } = e;
            !o || n || t.default && !uo.und(c) || (c = u), t.reverse && ([c, u] = [u, c]);
            const f = !fo(u, d);
            f && (a.from = u), u = cs(u);
            const p = !fo(c, l);
            p && this._focus(c);
            const h = ci(t.to),
              {
                config: v
              } = a,
              {
                decay: m,
                velocity: y
              } = v;
            (n || o) && (v.velocity = 0), t.config && !h && function(e, t, r) {
              r && (vi(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), vi(e, t), Object.assign(e, t);
              for (const t in pi) null == e[t] && (e[t] = pi[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: s
              } = e;
              uo.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * s, e.friction = 4 * Math.PI * o * s / n)
            }(v, ei(t.config, s), t.config !== i.config ? ei(i.config, s) : void 0);
            let g = As(this);
            if (!g || uo.und(c)) return r(_i(this, !0));
            const b = uo.und(t.reset) ? o && !t.default : !uo.und(u) && ti(t.reset, s),
              w = b ? u : this.get(),
              _ = di(c),
              x = uo.num(_) || uo.arr(_) || Ts(_),
              C = !h && (!x || ti(i.immediate || t.immediate, s));
            if (p) {
              const e = Us(c);
              if (e !== g.constructor) {
                if (!C) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const j = g.constructor;
            let P = ds(c),
              O = !1;
            if (!P) {
              const e = b || !Di(this) && f;
              (p || e) && (O = fo(di(w), _), P = !O), (fo(a.immediate, C) || C) && fo(v.decay, m) && fo(v.velocity, y) || (P = !0)
            }
            if (O && Ti(this) && (a.changed && !b ? P = !0 : P || this._stop(l)), !h && ((P || ds(l)) && (a.values = g.getPayload(), a.toValues = ds(c) ? null : j == Ks ? [1] : vo(_)), a.immediate != C && (a.immediate = C, C || b || this._set(l)), P)) {
              const {
                onRest: e
              } = a;
              po(qi, e => Bi(this, t, e));
              const n = _i(this, Mi(this, l));
              bo(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && Hn.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? ei(i.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(w), h ? r(Ci(t.to, t, this._state, this)) : P ? this._start() : Ti(this) && !p ? this._pendingCalls.add(r) : r(wi(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (us(this) && this._detach(), t.to = e, us(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ds(t) && (vs(t, this), Si(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ds(e) && ms(e, this)
          }
          _set(e, t = !0) {
            const r = cs(e);
            if (!uo.und(r)) {
              const e = As(this);
              if (!e || !fo(r, e.getValue())) {
                const n = Us(r);
                e && e.constructor == n ? e.setValue(r) : Vs(this, n.create(r)), e && Hn.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return As(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Ki(this, "onStart", _i(this, Mi(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), ei(this.animation.onChange, e, this)), ei(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            As(this).reset(cs(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Ti(this) || (Ii(this, !0), Ni(this) || this._resume())
          }
          _resume() {
            lo.skipAnimation ? this.finish() : Eo.start(this)
          }
          _stop(e, t) {
            if (Ti(this)) {
              Ii(this, !1);
              const r = this.animation;
              po(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), fs(this, {
                type: "idle",
                parent: this
              });
              const n = t ? xi(this.get()) : _i(this.get(), Mi(this, e ?? r.to));
              bo(this._pendingCalls, n), r.changed && (r.changed = !1, Ki(this, "onRest", n, this))
            }
          }
        };

      function Mi(e, t) {
        const r = di(t);
        return fo(di(e.get()), r)
      }

      function Ai(e, t = e.loop, r = e.to) {
        const n = ei(t);
        if (n) {
          const o = !0 !== n && li(n),
            s = (o || e).reverse,
            i = !o || o.reset;
          return Vi({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !s || ci(r) ? r : void 0,
            from: i ? e.from : void 0,
            reset: i,
            ...o
          })
        }
      }

      function Vi(e) {
        const {
          to: t,
          from: r
        } = e = li(e), n = new Set;
        return uo.obj(t) && Fi(t, n), uo.obj(r) && Fi(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Fi(e, t) {
        ho(e, (e, r) => null != e && t.add(r))
      }
      var qi = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Bi(e, t, r) {
        e.animation[r] = t[r] !== ni(t, r) ? ri(t[r], e.key) : void 0
      }

      function Ki(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Hi = ["onStart", "onChange", "onRest"],
        Wi = 1,
        Xi = class {
          constructor(e, t) {
            this.id = Wi++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              uo.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(Vi(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = vo(e).map(Vi) : this.queue = [], this._flush ? this._flush(this, t) : (Qi(this, t), function(e, t) {
              return Promise.all(t.map(t => Gi(e, t))).then(t => bi(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              po(vo(t), t => r[t].stop(!!e))
            } else ji(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (uo.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              po(vo(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (uo.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              po(vo(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            ho(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, mo(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const s = !n && this._started,
              i = o || s && r.size ? this.get() : null;
            o && t.size && mo(t, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }), s && (this._started = !1, mo(r, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Hn.onFrame(this._onFrame)
          }
        };
      async function Gi(e, t, r) {
        const {
          keys: n,
          to: o,
          from: s,
          loop: i,
          onRest: a,
          onResolve: l
        } = t, d = uo.obj(t.default) && t.default;
        i && (t.loop = !1), !1 === o && (t.to = null), !1 === s && (t.from = null);
        const c = uo.arr(o) || uo.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : po(Hi, r => {
          const n = t[r];
          if (uo.fun(n)) {
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
        t.pause === !u.paused ? (u.paused = t.pause, bo(t.pause ? u.pauseQueue : u.resumeQueue)) : u.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          p = !0 === t.cancel || !0 === ni(t, "cancel");
        (c || p && u.asyncId) && f.push(gi(++e._lastAsyncId, {
          props: t,
          state: u,
          actions: {
            pause: co,
            resume: co,
            start(t, r) {
              p ? (ji(u, e._lastAsyncId), r(xi(e))) : (t.onRest = a, r(Ci(c, t, u, e)))
            }
          }
        })), u.paused && await new Promise(e => {
          u.resumeQueue.add(e)
        });
        const h = bi(e, await Promise.all(f));
        if (i && h.finished && (!r || !h.noop)) {
          const r = Ai(t, i, o);
          if (r) return Qi(e, [r]), Gi(e, r, !0)
        }
        return l && Hn.batchedUpdates(() => l(h, e, e.item)), h
      }

      function Ui(e, t) {
        const r = {
          ...e.springs
        };
        return t && po(vo(t), e => {
            uo.und(e.keys) && (e = Vi(e)), uo.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), $i(r, e, e => Zi(e))
          }),
          function(e, t) {
            ho(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, vs(t, e))
            })
          }(e, r), r
      }

      function Zi(e, t) {
        const r = new zi;
        return r.key = e, t && vs(r, t), r
      }

      function $i(e, t, r) {
        t.keys && po(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Qi(e, t) {
        po(t, t => {
          $i(e.springs, t, t => Zi(t, e))
        })
      }
      var Yi = V.createContext({
          pause: !1,
          immediate: !1
        }),
        Ji = () => {
          const e = [],
            t = function(t) {
              Ds(`${ks}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return po(e, (e, o) => {
                if (uo.und(t)) n.push(e.start());
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
            return po(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return po(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            po(e, (e, r) => {
              const n = uo.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return po(e, (e, n) => {
              if (uo.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return po(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return po(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return uo.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        ea = () => Ji(),
        ta = () => (0, V.useState)(ea)[0];

      function ra(e, t, r) {
        const n = uo.fun(t) && t,
          {
            reset: o,
            sort: s,
            trail: i = 0,
            expires: a = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: d,
            ref: c,
            config: u
          } = n ? n() : t,
          f = (0, V.useMemo)(() => n || 3 == arguments.length ? Ji() : void 0, []),
          p = vo(e),
          h = [],
          v = (0, V.useRef)(null),
          m = o ? null : v.current;
        Ns(() => {
          v.current = h
        }), Ls(() => (po(h, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          po(v.current, e => {
            e.expired && clearTimeout(e.expirationId), ui(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : na++
              })
            }
            return uo.und(r) ? e : uo.fun(r) ? e.map(r) : vo(r)
          }(p, n ? n() : t, m),
          g = o && v.current || [];
        Ns(() => po(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          ui(e, f), ei(d, t, r)
        }));
        const b = [];
        if (m && po(m, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (h[t] = e)
          }), po(p, (e, t) => {
            h[t] || (h[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new Xi
            }, h[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          po(b, (t, n) => {
            const o = m[n];
            ~t ? (e = h.indexOf(o), h[e] = {
              ...o,
              item: p[t]
            }) : r && h.splice(++e, 0, o)
          })
        }
        uo.fun(s) && h.sort((e, t) => s(e.item, t.item));
        let w = -i;
        const _ = Is(),
          x = si(t),
          C = new Map,
          j = (0, V.useRef)(new Map),
          P = (0, V.useRef)(!1);
        po(h, (e, r) => {
          const o = e.key,
            s = e.phase,
            d = n ? n() : t;
          let f, p;
          const h = ei(d.delay || 0, o);
          if ("mount" == s) f = d.enter, p = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != s)
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
          if (f = ei(f, e.item, r), f = uo.obj(f) ? li(f) : {
              to: f
            }, !f.config) {
            const t = u || x.config;
            f.config = ei(t, e.item, r, p)
          }
          w += i;
          const g = {
            ...x,
            delay: h + w,
            ref: c,
            immediate: d.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == p && uo.und(g.from)) {
            const o = n ? n() : t,
              s = uo.und(o.initial) || m ? o.from : o.initial;
            g.from = ei(s, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            ei(b, e);
            const t = v.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = ei(a, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(_, n)))
                }
              }
              e && t.some(e => e.expired) && (j.current.delete(r), l && (P.current = !0), _())
            }
          };
          const O = Ui(e.ctrl, g);
          "leave" === p && l ? j.current.set(e, {
            phase: p,
            springs: O,
            payload: g
          }) : C.set(e, {
            phase: p,
            springs: O,
            payload: g
          })
        });
        const O = (0, V.useContext)(Yi),
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
        Ns(() => {
          k && po(h, e => {
            e.ctrl.start({
              default: O
            })
          })
        }, [O]), po(C, (e, t) => {
          if (j.current.size) {
            const e = h.findIndex(e => e.key === t.key);
            h.splice(e, 1)
          }
        }), Ns(() => {
          po(j.current.size ? j.current : C, ({
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
        const E = e => V.createElement(V.Fragment, null, h.map((t, r) => {
          const {
            springs: n
          } = C.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), s = uo.str(t.key) || uo.num(t.key) ? t.key : t.ctrl.id, i = V.version < "19.0.0", a = o?.props ?? {}, l = i ? o?.ref : a?.ref;
          return o && o.type ? V.createElement(o.type, {
            ...a,
            key: s,
            ref: l
          }) : o
        }));
        return f ? [E, f] : E
      }
      var na = 1,
        oa = class extends Ei {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Jo(...t);
            const r = this._get(),
              n = Us(r);
            Vs(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            fo(t, this.get()) || (As(this).setValue(t), this._onChange(t, this.idle)), !this.idle && ia(this._active) && aa(this)
          }
          _get() {
            const e = uo.arr(this.source) ? this.source.map(cs) : vo(cs(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !ia(this._active) && (this.idle = !1, po(Fs(this), e => {
              e.done = !1
            }), lo.skipAnimation ? (Hn.batchedUpdates(() => this.advance()), aa(this)) : Eo.start(this))
          }
          _attach() {
            let e = 1;
            po(vo(this.source), t => {
              ds(t) && vs(t, this), Si(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            po(vo(this.source), e => {
              ds(e) && ms(e, this)
            }), this._active.clear(), aa(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = vo(this.source).reduce((e, t) => Math.max(e, (Si(t) ? t.priority : 0) + 1), 0))
          }
        };

      function sa(e) {
        return !1 !== e.idle
      }

      function ia(e) {
        return !e.size || Array.from(e).every(sa)
      }

      function aa(e) {
        e.idle || (e.idle = !0, po(Fs(e), e => {
          e.done = !0
        }), fs(e, {
          type: "idle",
          parent: e
        }))
      }
      lo.assign({
        createStringInterpolator: Ss,
        to: (e, t) => new oa(e, t)
      }), Eo.advance;
      var la = /^--/;

      function da(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || la.test(e) || ua.hasOwnProperty(e) && ua[e] ? ("" + t).trim() : t + "px"
      }
      var ca = {},
        ua = {
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
        fa = ["Webkit", "Ms", "Moz", "O"];
      ua = Object.keys(ua).reduce((e, t) => (fa.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), ua);
      var pa = /^(matrix|translate|scale|rotate|skew)/,
        ha = /^(translate)/,
        va = /^(rotate|skew)/,
        ma = (e, t) => uo.num(e) && 0 !== e ? e + t : e,
        ya = (e, t) => uo.arr(e) ? e.every(e => ya(e, t)) : uo.num(e) ? e === t : parseFloat(e) === t,
        ga = class extends Ws {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              s = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), s.push(e => [`translate3d(${e.map(e=>ma(e,"px")).join(",")})`, ya(e, 0)])), ho(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), s.push(e => [e, "" === e]);
              else if (pa.test(t)) {
                if (delete n[t], uo.und(e)) return;
                const r = ha.test(t) ? "px" : va.test(t) ? "deg" : "";
                o.push(vo(e)), s.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${ma(o,r)})`, ya(o, 0)] : e => [`${t}(${e.map(e=>ma(e,r)).join(",")})`, ya(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new ba(o, s)), super(n)
          }
        },
        ba = class extends ps {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return po(this.inputs, (r, n) => {
              const o = cs(r[0]),
                [s, i] = this.transforms[n](uo.arr(o) ? o : r.map(cs));
              e += " " + s, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && po(this.inputs, e => po(e, e => ds(e) && vs(e, this)))
          }
          observerRemoved(e) {
            0 == e && po(this.inputs, e => po(e, e => ds(e) && ms(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), fs(this, e)
          }
        };
      lo.assign({
        batchedUpdates: ie.unstable_batchedUpdates,
        createStringInterpolator: Ss,
        colors: Io
      });
      var wa, _a = Ys(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
                ...d
              } = t,
              c = Object.values(d),
              u = Object.keys(d).map(t => r || e.hasAttribute(t) ? t : ca[t] || (ca[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== s && (e.textContent = s);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = da(t, o[t]);
                la.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new ga(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        xa = _a.animated,
        Ca = r(94118),
        ja = r(85426),
        Pa = r(78004),
        Oa = r(76286),
        Sa = r(94040),
        ka = "dismissableLayer.update",
        Ea = V.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Ra = V.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: a,
            ...l
          } = e, d = V.useContext(Ea), [c, u] = V.useState(null), f = c?.ownerDocument ?? globalThis?.document, [, p] = V.useState({}), h = (0, ae.s)(t, e => u(e)), v = Array.from(d.layers), [m] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(m), g = c ? v.indexOf(c) : -1, b = d.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= y, _ = function(e, t = globalThis?.document) {
            const r = (0, Oa.c)(e),
              n = V.useRef(!1),
              o = V.useRef(() => {});
            return V.useEffect(() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Na("dismissableLayer.pointerDownOutside", r, s, {
                        discrete: !0
                      })
                    };
                    const s = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = n, t.addEventListener("click", o.current, {
                      once: !0
                    })) : n()
                  } else t.removeEventListener("click", o.current);
                  n.current = !1
                },
                s = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(s), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }, [t, r]), {
              onPointerDownCapture: () => n.current = !0
            }
          }(e => {
            const t = e.target,
              r = [...d.branches].some(e => e.contains(t));
            w && !r && (o?.(e), i?.(e), e.defaultPrevented || a?.())
          }, f), C = function(e, t = globalThis?.document) {
            const r = (0, Oa.c)(e),
              n = V.useRef(!1);
            return V.useEffect(() => {
              const e = e => {
                e.target && !n.current && Na("dismissableLayer.focusOutside", r, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, r]), {
              onFocusCapture: () => n.current = !0,
              onBlurCapture: () => n.current = !1
            }
          }(e => {
            const t = e.target;
            [...d.branches].some(e => e.contains(t)) || (s?.(e), i?.(e), e.defaultPrevented || a?.())
          }, f);
          return (0, Sa.U)(e => {
            g === d.layers.size - 1 && (n?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), V.useEffect(() => {
            if (c) return r && (0 === d.layersWithOutsidePointerEventsDisabled.size && (wa = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(c)), d.layers.add(c), Ta(), () => {
              r && 1 === d.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = wa)
            }
          }, [c, f, r, d]), V.useEffect(() => () => {
            c && (d.layers.delete(c), d.layersWithOutsidePointerEventsDisabled.delete(c), Ta())
          }, [c, d]), V.useEffect(() => {
            const e = () => p({});
            return document.addEventListener(ka, e), () => document.removeEventListener(ka, e)
          }, []), (0, x.jsx)(Pa.sG.div, {
            ...l,
            ref: h,
            style: {
              pointerEvents: b ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, Ca.mK)(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: (0, Ca.mK)(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: (0, Ca.mK)(e.onPointerDownCapture, _.onPointerDownCapture)
          })
        });
      Ra.displayName = "DismissableLayer";
      var Da = V.forwardRef((e, t) => {
        const r = V.useContext(Ea),
          n = V.useRef(null),
          o = (0, ae.s)(t, n);
        return V.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, x.jsx)(Pa.sG.div, {
          ...e,
          ref: o
        })
      });

      function Ta() {
        const e = new CustomEvent(ka);
        document.dispatchEvent(e)
      }

      function Na(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.target,
          s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, Pa.hO)(o, s) : o.dispatchEvent(s)
      }
      Da.displayName = "DismissableLayerBranch";
      var Ia = Ra,
        La = Da,
        za = r(86126),
        Ma = r(64728),
        Aa = "undefined" != typeof document ? V.useLayoutEffect : function() {};

      function Va(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 !== n--;)
              if (!Va(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 !== n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 !== n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || Va(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Fa(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function qa(e, t) {
        const r = Fa(e);
        return Math.round(t * r) / r
      }

      function Ba(e) {
        const t = V.useRef(e);
        return Aa(() => {
          t.current = e
        }), t
      }
      const Ka = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: r,
              padding: n
            } = "function" == typeof e ? e(t) : e;
            return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? (0, Ma.UE)({
              element: r.current,
              padding: n
            }).fn(t) : {} : r ? (0, Ma.UE)({
              element: r,
              padding: n
            }).fn(t) : {};
            var o
          }
        }),
        Ha = (e, t) => ({
          ...(0, Ma.cY)(e),
          options: [e, t]
        }),
        Wa = (e, t) => ({
          ...(0, Ma.BN)(e),
          options: [e, t]
        }),
        Xa = (e, t) => ({
          ...(0, Ma.ER)(e),
          options: [e, t]
        }),
        Ga = (e, t) => ({
          ...(0, Ma.UU)(e),
          options: [e, t]
        }),
        Ua = (e, t) => ({
          ...(0, Ma.Ej)(e),
          options: [e, t]
        }),
        Za = (e, t) => ({
          ...(0, Ma.jD)(e),
          options: [e, t]
        }),
        $a = (e, t) => ({
          ...Ka(e),
          options: [e, t]
        });
      var Qa = V.forwardRef((e, t) => {
        const {
          children: r,
          width: n = 10,
          height: o = 5,
          ...s
        } = e;
        return (0, x.jsx)(Pa.sG.svg, {
          ...s,
          ref: t,
          width: n,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? r : (0, x.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      });
      Qa.displayName = "Arrow";
      var Ya = Qa,
        Ja = r(63155);

      function el(e) {
        const [t, r] = V.useState(void 0);
        return (0, Ja.N)(() => {
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
      var tl = "Popper",
        [rl, nl] = (0, ja.A)(tl),
        [ol, sl] = rl(tl),
        il = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = V.useState(null);
          return (0, x.jsx)(ol, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      il.displayName = tl;
      var al = "PopperAnchor",
        ll = V.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, s = sl(al, r), i = V.useRef(null), a = (0, ae.s)(t, i), l = V.useRef(null);
          return V.useEffect(() => {
            const e = l.current;
            l.current = n?.current || i.current, e !== l.current && s.onAnchorChange(l.current)
          }), n ? null : (0, x.jsx)(Pa.sG.div, {
            ...o,
            ref: a
          })
        });
      ll.displayName = al;
      var dl = "PopperContent",
        [cl, ul] = rl(dl),
        fl = V.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: s = "center",
            alignOffset: i = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: d = [],
            collisionPadding: c = 0,
            sticky: u = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: h,
            ...v
          } = e, m = sl(dl, r), [y, g] = V.useState(null), b = (0, ae.s)(t, e => g(e)), [w, _] = V.useState(null), C = el(w), j = C?.width ?? 0, P = C?.height ?? 0, O = n + ("center" !== s ? "-" + s : ""), S = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, k = Array.isArray(d) ? d : [d], E = k.length > 0, R = {
            padding: S,
            boundary: k.filter(ml),
            altBoundary: E
          }, {
            refs: D,
            floatingStyles: T,
            placement: N,
            isPositioned: I,
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
              open: d
            } = e, [c, u] = V.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, p] = V.useState(n);
            Va(f, n) || p(n);
            const [h, v] = V.useState(null), [m, y] = V.useState(null), g = V.useCallback(e => {
              e !== x.current && (x.current = e, v(e))
            }, []), b = V.useCallback(e => {
              e !== C.current && (C.current = e, y(e))
            }, []), w = s || h, _ = i || m, x = V.useRef(null), C = V.useRef(null), j = V.useRef(c), P = null != l, O = Ba(l), S = Ba(o), k = Ba(d), E = V.useCallback(() => {
              if (!x.current || !C.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              S.current && (e.platform = S.current), (0, Ma.rD)(x.current, C.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== k.current
                };
                R.current && !Va(j.current, t) && (j.current = t, ie.flushSync(() => {
                  u(t)
                }))
              })
            }, [f, t, r, S, k]);
            Aa(() => {
              !1 === d && j.current.isPositioned && (j.current.isPositioned = !1, u(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [d]);
            const R = V.useRef(!1);
            Aa(() => (R.current = !0, () => {
              R.current = !1
            }), []), Aa(() => {
              if (w && (x.current = w), _ && (C.current = _), w && _) {
                if (O.current) return O.current(w, _, E);
                E()
              }
            }, [w, _, E, O, P]);
            const D = V.useMemo(() => ({
                reference: x,
                floating: C,
                setReference: g,
                setFloating: b
              }), [g, b]),
              T = V.useMemo(() => ({
                reference: w,
                floating: _
              }), [w, _]),
              N = V.useMemo(() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!T.floating) return e;
                const t = qa(T.floating, c.x),
                  n = qa(T.floating, c.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...Fa(T.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }, [r, a, T.floating, c.x, c.y]);
            return V.useMemo(() => ({
              ...c,
              update: E,
              refs: D,
              elements: T,
              floatingStyles: N
            }), [c, E, D, T, N])
          }({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => (0, Ma.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: m.anchor
            },
            middleware: [Ha({
              mainAxis: o + P,
              alignmentAxis: i
            }), l && Wa({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? Xa() : void 0,
              ...R
            }), l && Ga({
              ...R
            }), Ua({
              ...R,
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
            }), w && $a({
              element: w,
              padding: a
            }), yl({
              arrowWidth: j,
              arrowHeight: P
            }), f && Za({
              strategy: "referenceHidden",
              ...R
            })]
          }), [z, M] = gl(N), A = (0, Oa.c)(h);
          (0, Ja.N)(() => {
            I && A?.()
          }, [I, A]);
          const F = L.arrow?.x,
            q = L.arrow?.y,
            B = 0 !== L.arrow?.centerOffset,
            [K, H] = V.useState();
          return (0, Ja.N)(() => {
            y && H(window.getComputedStyle(y).zIndex)
          }, [y]), (0, x.jsx)("div", {
            ref: D.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...T,
              transform: I ? T.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: K,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, x.jsx)(cl, {
              scope: r,
              placedSide: z,
              onArrowChange: _,
              arrowX: F,
              arrowY: q,
              shouldHideArrow: B,
              children: (0, x.jsx)(Pa.sG.div, {
                "data-side": z,
                "data-align": M,
                ...v,
                ref: b,
                style: {
                  ...v.style,
                  animation: I ? void 0 : "none"
                }
              })
            })
          })
        });
      fl.displayName = dl;
      var pl = "PopperArrow",
        hl = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        vl = V.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = ul(pl, r), s = hl[o.placedSide];
          return (0, x.jsx)("span", {
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
            children: (0, x.jsx)(Ya, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function ml(e) {
        return null !== e
      }
      vl.displayName = pl;
      var yl = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, s = 0 !== o.arrow?.centerOffset, i = s ? 0 : e.arrowWidth, a = s ? 0 : e.arrowHeight, [l, d] = gl(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [d], u = (o.arrow?.x ?? 0) + i / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let p = "",
            h = "";
          return "bottom" === l ? (p = s ? c : `${u}px`, h = -a + "px") : "top" === l ? (p = s ? c : `${u}px`, h = `${n.floating.height+a}px`) : "right" === l ? (p = -a + "px", h = s ? c : `${f}px`) : "left" === l && (p = `${n.floating.width+a}px`, h = s ? c : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function gl(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var bl = il,
        wl = ll,
        _l = fl,
        xl = vl,
        Cl = V.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, s] = V.useState(!1);
          (0, Ja.N)(() => s(!0), []);
          const i = r || o && globalThis?.document?.body;
          return i ? ie.createPortal((0, x.jsx)(Pa.sG.div, {
            ...n,
            ref: t
          }), i) : null
        });
      Cl.displayName = "Portal";
      var jl = r(53146),
        Pl = r(39447),
        Ol = r(53054),
        Sl = Object.freeze({
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
        kl = V.forwardRef((e, t) => (0, x.jsx)(Pa.sG.span, {
          ...e,
          ref: t,
          style: {
            ...Sl,
            ...e.style
          }
        }));
      kl.displayName = "VisuallyHidden";
      var El = kl,
        [Rl, Dl] = (0, ja.A)("Tooltip", [nl]),
        Tl = nl(),
        Nl = "TooltipProvider",
        Il = 700,
        Ll = "tooltip.open",
        [zl, Ml] = Rl(Nl),
        Al = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Il,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: s
          } = e, i = V.useRef(!0), a = V.useRef(!1), l = V.useRef(0);
          return V.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, x.jsx)(zl, {
            scope: t,
            isOpenDelayedRef: i,
            delayDuration: r,
            onOpen: V.useCallback(() => {
              window.clearTimeout(l.current), i.current = !1
            }, []),
            onClose: V.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => i.current = !0, n)
            }, [n]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: V.useCallback(e => {
              a.current = e
            }, []),
            disableHoverableContent: o,
            children: s
          })
        };
      Al.displayName = Nl;
      var Vl = "Tooltip",
        [Fl, ql] = Rl(Vl),
        Bl = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: i,
            delayDuration: a
          } = e, l = Ml(Vl, e.__scopeTooltip), d = Tl(t), [c, u] = V.useState(null), f = (0, za.B)(), p = V.useRef(0), h = i ?? l.disableHoverableContent, v = a ?? l.delayDuration, m = V.useRef(!1), [y, g] = (0, Ol.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ll))) : l.onClose(), s?.(e)
            },
            caller: Vl
          }), b = V.useMemo(() => y ? m.current ? "delayed-open" : "instant-open" : "closed", [y]), w = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, m.current = !1, g(!0)
          }, [g]), _ = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), C = V.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              m.current = !0, g(!0), p.current = 0
            }, v)
          }, [v, g]);
          return V.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, x.jsx)(bl, {
            ...d,
            children: (0, x.jsx)(Fl, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: V.useCallback(() => {
                l.isOpenDelayedRef.current ? C() : w()
              }, [l.isOpenDelayedRef, C, w]),
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
      Bl.displayName = Vl;
      var Kl = "TooltipTrigger",
        Hl = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = ql(Kl, r), s = Ml(Kl, r), i = Tl(r), a = V.useRef(null), l = (0, ae.s)(t, a, o.onTriggerChange), d = V.useRef(!1), c = V.useRef(!1), u = V.useCallback(() => d.current = !1, []);
          return V.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, x.jsx)(wl, {
            asChild: !0,
            ...i,
            children: (0, x.jsx)(Pa.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, Ca.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || s.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, Ca.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, Ca.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, Ca.mK)(e.onFocus, () => {
                d.current || o.onOpen()
              }),
              onBlur: (0, Ca.mK)(e.onBlur, o.onClose),
              onClick: (0, Ca.mK)(e.onClick, o.onClose)
            })
          })
        });
      Hl.displayName = Kl;
      var Wl = "TooltipPortal",
        [Xl, Gl] = Rl(Wl, {
          forceMount: void 0
        }),
        Ul = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = ql(Wl, t);
          return (0, x.jsx)(Xl, {
            scope: t,
            forceMount: r,
            children: (0, x.jsx)(jl.C, {
              present: r || s.open,
              children: (0, x.jsx)(Cl, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Ul.displayName = Wl;
      var Zl = "TooltipContent",
        $l = V.forwardRef((e, t) => {
          const r = Gl(Zl, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...s
            } = e,
            i = ql(Zl, e.__scopeTooltip);
          return (0, x.jsx)(jl.C, {
            present: n || i.open,
            children: i.disableHoverableContent ? (0, x.jsx)(td, {
              side: o,
              ...s,
              ref: t
            }) : (0, x.jsx)(Ql, {
              side: o,
              ...s,
              ref: t
            })
          })
        }),
        Ql = V.forwardRef((e, t) => {
          const r = ql(Zl, e.__scopeTooltip),
            n = Ml(Zl, e.__scopeTooltip),
            o = V.useRef(null),
            s = (0, ae.s)(t, o),
            [i, a] = V.useState(null),
            {
              trigger: l,
              onClose: d
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = V.useCallback(() => {
              a(null), u(!1)
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
              a(s), u(!0)
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
            if (i) {
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
                    for (let e = 0, s = t.length - 1; e < t.length; s = e++) {
                      const i = t[e],
                        a = t[s],
                        l = i.x,
                        d = i.y,
                        c = a.x,
                        u = a.y;
                      d > n != u > n && r < (c - l) * (n - d) / (u - d) + l && (o = !o)
                    }
                    return o
                  }(r, i);
                n ? f() : o && (f(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, c, i, d, f]), (0, x.jsx)(td, {
            ...e,
            ref: s
          })
        }),
        [Yl, Jl] = Rl(Vl, {
          isInside: !1
        }),
        ed = (0, Pl.Dc)("TooltipContent"),
        td = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            ...a
          } = e, l = ql(Zl, r), d = Tl(r), {
            onClose: c
          } = l;
          return V.useEffect(() => (document.addEventListener(Ll, c), () => document.removeEventListener(Ll, c)), [c]), V.useEffect(() => {
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
          }, [l.trigger, c]), (0, x.jsx)(Ra, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, x.jsxs)(_l, {
              "data-state": l.stateAttribute,
              ...d,
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
              children: [(0, x.jsx)(ed, {
                children: n
              }), (0, x.jsx)(Yl, {
                scope: r,
                isInside: !0,
                children: (0, x.jsx)(El, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      $l.displayName = Zl;
      var rd = "TooltipArrow",
        nd = V.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Tl(r);
          return Jl(rd, r).isInside ? null : (0, x.jsx)(xl, {
            ...o,
            ...n,
            ref: t
          })
        });
      nd.displayName = rd;
      var od = Al,
        sd = Bl,
        id = Hl,
        ad = Ul,
        ld = $l,
        dd = nd;
      const cd = (0, V.createContext)(null);

      function ud() {
        const e = (0, V.useContext)(cd);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const fd = ({
          children: e,
          delayDuration: t,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [s = !1, i] = (0, G.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, x.jsx)(od, {
            delayDuration: t,
            children: (0, x.jsx)(cd.Provider, {
              value: {
                isOpen: s,
                ...o
              },
              children: (0, x.jsx)(sd, {
                open: s,
                onOpenChange: i,
                children: e
              })
            })
          })
        },
        pd = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, x.jsx)(id, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        hd = (0, V.forwardRef)(({
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
            isOpen: d
          } = ud(), c = (0, G.jt)(), u = xa(ld), f = ra(d, {
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
            config: fi.stiff,
            immediate: c
          }), p = (0, H.v6)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: i,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: s,
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, a);
          return f(e => (0, x.jsx)(u, {
            ...p,
            style: e,
            ref: l
          }))
        }),
        vd = (0, V.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, H.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, x.jsx)(dd, {
            ...r,
            ref: t
          })
        }),
        md = ad;

      function yd(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var gd = r(77768);

      function bd(e) {
        const t = V.useRef({
          value: e,
          previous: e
        });
        return V.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
      var wd = r(20027),
        _d = ["PageUp", "PageDown"],
        xd = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Cd = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        jd = "Slider",
        [Pd, Od, Sd] = (0, wd.N)(jd),
        [kd, Ed] = (0, ja.A)(jd, [Sd]),
        [Rd, Dd] = kd(jd),
        Td = V.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: s = 1,
            orientation: i = "horizontal",
            disabled: a = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: d = [n],
            value: c,
            onValueChange: u = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: h,
            ...v
          } = e, m = V.useRef(new Set), y = V.useRef(0), g = "horizontal" === i ? Ld : zd, [b = [], w] = (0, Ol.i)({
            prop: c,
            defaultProp: d,
            onChange: e => {
              const t = [...m.current];
              t[y.current]?.focus(), u(e)
            }
          }), _ = V.useRef(b);

          function C(e, t, {
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
              d = yd(a, [n, o]);
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
                }(n, l * s)) {
                y.current = n.indexOf(d);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, x.jsx)(Rd, {
            scope: e.__scopeSlider,
            name: r,
            disabled: a,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: m.current,
            values: b,
            orientation: i,
            form: h,
            children: (0, x.jsx)(Pd.Provider, {
              scope: e.__scopeSlider,
              children: (0, x.jsx)(Pd.Slot, {
                scope: e.__scopeSlider,
                children: (0, x.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: (0, Ca.mK)(v.onPointerDown, () => {
                    a || (_.current = b)
                  }),
                  min: n,
                  max: o,
                  inverted: p,
                  onSlideStart: a ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map(e => Math.abs(e - t)),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(b, e);
                    C(e, t)
                  },
                  onSlideMove: a ? void 0 : function(e) {
                    C(e, y.current)
                  },
                  onSlideEnd: a ? void 0 : function() {
                    const e = _.current[y.current];
                    b[y.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !a && C(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !a && C(o, b.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!a) {
                      const r = _d.includes(e.key) || e.shiftKey && xd.includes(e.key) ? 10 : 1,
                        n = y.current;
                      C(b[n] + s * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      Td.displayName = jd;
      var [Nd, Id] = kd(jd, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Ld = V.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: s,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: l,
          onStepKeyDown: d,
          ...c
        } = e, [u, f] = V.useState(null), p = (0, ae.s)(t, e => f(e)), h = V.useRef(void 0), v = (0, gd.jH)(o), m = "ltr" === v, y = m && !s || !m && s;

        function g(e) {
          const t = h.current || u.getBoundingClientRect(),
            o = Gd([0, t.width], y ? [r, n] : [n, r]);
          return h.current = t, o(e - t.left)
        }
        return (0, x.jsx)(Nd, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, x.jsx)(Md, {
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
              i?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientX);
              a?.(t)
            },
            onSlideEnd: () => {
              h.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = Cd[y ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), zd = V.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: s,
          onSlideMove: i,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...d
        } = e, c = V.useRef(null), u = (0, ae.s)(t, c), f = V.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Gd([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, x.jsx)(Nd, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, x.jsx)(Md, {
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
              i?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, a?.()
            },
            onStepKeyDown: e => {
              const t = Cd[p ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Md = V.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: s,
          onHomeKeyDown: i,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...d
        } = e, c = Dd(jd, r);
        return (0, x.jsx)(Pa.sG.span, {
          ...d,
          ref: t,
          onKeyDown: (0, Ca.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (i(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : _d.concat(xd).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, Ca.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, Ca.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, Ca.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
          })
        })
      }), Ad = "SliderTrack", Vd = V.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Dd(Ad, r);
        return (0, x.jsx)(Pa.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Vd.displayName = Ad;
      var Fd = "SliderRange",
        qd = V.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Dd(Fd, r), s = Id(Fd, r), i = V.useRef(null), a = (0, ae.s)(t, i), l = o.values.length, d = o.values.map(e => Xd(e, o.min, o.max)), c = l > 1 ? Math.min(...d) : 0, u = 100 - Math.max(...d);
          return (0, x.jsx)(Pa.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: a,
            style: {
              ...e.style,
              [s.startEdge]: c + "%",
              [s.endEdge]: u + "%"
            }
          })
        });
      qd.displayName = Fd;
      var Bd = "SliderThumb",
        Kd = V.forwardRef((e, t) => {
          const r = Od(e.__scopeSlider),
            [n, o] = V.useState(null),
            s = (0, ae.s)(t, e => o(e)),
            i = V.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, x.jsx)(Hd, {
            ...e,
            ref: s,
            index: i
          })
        }),
        Hd = V.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...s
          } = e, i = Dd(Bd, r), a = Id(Bd, r), [l, d] = V.useState(null), c = (0, ae.s)(t, e => d(e)), u = !l || i.form || !!l.closest("form"), f = el(l), p = i.values[n], h = void 0 === p ? 0 : Xd(p, i.min, i.max), v = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, i.values.length), m = f?.[a.size], y = m ? function(e, t, r) {
            const n = e / 2;
            return (n - Gd([0, 50], [0, n])(t) * r) * r
          }(m, h, a.direction) : 0;
          return V.useEffect(() => {
            if (l) return i.thumbs.add(l), () => {
              i.thumbs.delete(l)
            }
          }, [l, i.thumbs]), (0, x.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${h}% + ${y}px)`
            },
            children: [(0, x.jsx)(Pd.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, x.jsx)(Pa.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || v,
                "aria-valuemin": i.min,
                "aria-valuenow": p,
                "aria-valuemax": i.max,
                "aria-orientation": i.orientation,
                "data-orientation": i.orientation,
                "data-disabled": i.disabled ? "" : void 0,
                tabIndex: i.disabled ? void 0 : 0,
                ...s,
                ref: c,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: (0, Ca.mK)(e.onFocus, () => {
                  i.valueIndexToChangeRef.current = n
                })
              })
            }), u && (0, x.jsx)(Wd, {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: p
            }, n)]
          })
        });
      Kd.displayName = Bd;
      var Wd = V.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = V.useRef(null),
          s = (0, ae.s)(o, n),
          i = bd(t);
        return V.useEffect(() => {
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
        }, [i, t]), (0, x.jsx)(Pa.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: s,
          defaultValue: t
        })
      });

      function Xd(e, t, r) {
        return yd(100 / (r - t) * (e - t), [0, 100])
      }

      function Gd(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      Wd.displayName = "RadioBubbleInput";
      var Ud = Td,
        Zd = Vd,
        $d = qd,
        Qd = Kd,
        Yd = "focusScope.autoFocusOnMount",
        Jd = "focusScope.autoFocusOnUnmount",
        ec = {
          bubbles: !1,
          cancelable: !0
        },
        tc = V.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            ...i
          } = e, [a, l] = V.useState(null), d = (0, Oa.c)(o), c = (0, Oa.c)(s), u = V.useRef(null), f = (0, ae.s)(t, e => l(e)), p = V.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          V.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (p.paused || !a) return;
                  const t = e.target;
                  a.contains(t) ? u.current = t : sc(u.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || sc(u.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && sc(a)
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
          }, [n, a, p.paused]), V.useEffect(() => {
            if (a) {
              ic.add(p);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(Yd, ec);
                a.addEventListener(Yd, d), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (sc(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(rc(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && sc(a))
              }
              return () => {
                a.removeEventListener(Yd, d), setTimeout(() => {
                  const t = new CustomEvent(Jd, ec);
                  a.addEventListener(Jd, c), a.dispatchEvent(t), t.defaultPrevented || sc(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(Jd, c), ic.remove(p)
                }, 0)
              }
            }
          }, [a, d, c, p]);
          const h = V.useCallback(e => {
            if (!r && !n) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, s] = function(e) {
                  const t = rc(e);
                  return [nc(t, e), nc(t.reverse(), e)]
                }(t);
              n && s ? e.shiftKey || o !== s ? e.shiftKey && o === n && (e.preventDefault(), r && sc(s, {
                select: !0
              })) : (e.preventDefault(), r && sc(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, x.jsx)(Pa.sG.div, {
            tabIndex: -1,
            ...i,
            ref: f,
            onKeyDown: h
          })
        });

      function rc(e) {
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

      function nc(e, t) {
        for (const r of e)
          if (!oc(r, {
              upTo: t
            })) return r
      }

      function oc(e, {
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

      function sc(e, {
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
      tc.displayName = "FocusScope";
      var ic = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = ac(e, t), e.unshift(t)
          },
          remove(t) {
            e = ac(e, t), e[0]?.resume()
          }
        }
      }();

      function ac(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var lc = 0;

      function dc() {
        V.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? cc()), document.body.insertAdjacentElement("beforeend", e[1] ?? cc()), lc++, () => {
            1 === lc && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), lc--
          }
        }, [])
      }

      function cc() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var uc = r(97359),
        fc = r(94926),
        pc = "Dialog",
        [hc, vc] = (0, ja.A)(pc),
        [mc, yc] = hc(pc),
        gc = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: i = !0
          } = e, a = V.useRef(null), l = V.useRef(null), [d, c] = (0, Ol.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: pc
          });
          return (0, x.jsx)(mc, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: (0, za.B)(),
            titleId: (0, za.B)(),
            descriptionId: (0, za.B)(),
            open: d,
            onOpenChange: c,
            onOpenToggle: V.useCallback(() => c(e => !e), [c]),
            modal: i,
            children: r
          })
        };
      gc.displayName = pc;
      var bc = "DialogTrigger",
        wc = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = yc(bc, r), s = (0, ae.s)(t, o.triggerRef);
          return (0, x.jsx)(Pa.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Fc(o.open),
            ...n,
            ref: s,
            onClick: (0, Ca.mK)(e.onClick, o.onOpenToggle)
          })
        });
      wc.displayName = bc;
      var _c = "DialogPortal",
        [xc, Cc] = hc(_c, {
          forceMount: void 0
        }),
        jc = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = yc(_c, t);
          return (0, x.jsx)(xc, {
            scope: t,
            forceMount: r,
            children: V.Children.map(n, e => (0, x.jsx)(jl.C, {
              present: r || s.open,
              children: (0, x.jsx)(Cl, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      jc.displayName = _c;
      var Pc = "DialogOverlay",
        Oc = V.forwardRef((e, t) => {
          const r = Cc(Pc, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = yc(Pc, e.__scopeDialog);
          return s.modal ? (0, x.jsx)(jl.C, {
            present: n || s.open,
            children: (0, x.jsx)(kc, {
              ...o,
              ref: t
            })
          }) : null
        });
      Oc.displayName = Pc;
      var Sc = (0, Pl.TL)("DialogOverlay.RemoveScroll"),
        kc = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = yc(Pc, r);
          return (0, x.jsx)(uc.A, {
            as: Sc,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, x.jsx)(Pa.sG.div, {
              "data-state": Fc(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        Ec = "DialogContent",
        Rc = V.forwardRef((e, t) => {
          const r = Cc(Ec, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = yc(Ec, e.__scopeDialog);
          return (0, x.jsx)(jl.C, {
            present: n || s.open,
            children: s.modal ? (0, x.jsx)(Dc, {
              ...o,
              ref: t
            }) : (0, x.jsx)(Tc, {
              ...o,
              ref: t
            })
          })
        });
      Rc.displayName = Ec;
      var Dc = V.forwardRef((e, t) => {
          const r = yc(Ec, e.__scopeDialog),
            n = V.useRef(null),
            o = (0, ae.s)(t, r.contentRef, n);
          return V.useEffect(() => {
            const e = n.current;
            if (e) return (0, fc.Eq)(e)
          }, []), (0, x.jsx)(Nc, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, Ca.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, Ca.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, Ca.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        Tc = V.forwardRef((e, t) => {
          const r = yc(Ec, e.__scopeDialog),
            n = V.useRef(!1),
            o = V.useRef(!1);
          return (0, x.jsx)(Nc, {
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
        Nc = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            ...i
          } = e, a = yc(Ec, r), l = V.useRef(null), d = (0, ae.s)(t, l);
          return dc(), (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(tc, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: s,
              children: (0, x.jsx)(Ra, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Fc(a.open),
                ...i,
                ref: d,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, x.jsxs)(x.Fragment, {
              children: [(0, x.jsx)(Hc, {
                titleId: a.titleId
              }), (0, x.jsx)(Wc, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        Ic = "DialogTitle",
        Lc = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = yc(Ic, r);
          return (0, x.jsx)(Pa.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      Lc.displayName = Ic;
      var zc = "DialogDescription",
        Mc = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = yc(zc, r);
          return (0, x.jsx)(Pa.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      Mc.displayName = zc;
      var Ac = "DialogClose",
        Vc = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = yc(Ac, r);
          return (0, x.jsx)(Pa.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, Ca.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function Fc(e) {
        return e ? "open" : "closed"
      }
      Vc.displayName = Ac;
      var qc = "DialogTitleWarning",
        [Bc, Kc] = (0, ja.q)(qc, {
          contentName: Ec,
          titleName: Ic,
          docsSlug: "dialog"
        }),
        Hc = ({
          titleId: e
        }) => {
          const t = Kc(qc),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return V.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        Wc = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Kc("DialogDescriptionWarning").contentName}}.`;
          return V.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        Xc = gc,
        Gc = wc,
        Uc = jc,
        Zc = Oc,
        $c = Rc,
        Qc = Lc,
        Yc = Mc,
        Jc = Vc;
      const eu = (0, V.createContext)({
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
        tu = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: s = 300,
          zoomLevelStep: i = 100,
          clickAction: a = "close",
          doubleTapAction: l,
          tapAction: d,
          hideTrigger: c = !0,
          ...u
        }) => {
          const f = (() => {
              const {
                locale: e
              } = $();
              return e
            })(),
            p = (0, G.rl)(),
            h = (0, V.useRef)(null),
            v = (0, V.useRef)(null),
            m = (0, V.useRef)(null),
            y = (0, V.useRef)(null),
            g = (0, V.useRef)(null),
            b = (0, V.useRef)(null),
            w = (0, V.useRef)(null),
            _ = (0, V.useRef)(null),
            C = (0, V.useRef)(null),
            j = (0, V.useRef)(null),
            P = (0, V.useRef)(null),
            O = (0, V.useRef)(null),
            S = (0, V.useRef)(null),
            k = (0, V.useRef)(null),
            E = (0, V.useRef)(null),
            R = (0, V.useRef)(null),
            D = (0, V.useRef)(null),
            T = (0, V.useRef)(null),
            N = (0, V.useRef)(null),
            [I = !1, L] = (0, G.ic)({
              prop: t || n,
              onChange: r
            }),
            z = (0, V.useRef)(null);
          return z.current || (z.current = new An({
            width: 0,
            height: 0,
            zoomLevelOptions: {
              max: s,
              min: o,
              step: i
            },
            actionOptions: {
              click: a,
              tap: d || p ? "toggle-controls" : "close",
              doubleTap: l || p ? "zoom" : "none"
            }
          })), (0, x.jsx)(Sn, {
            messages: kn,
            locale: f,
            children: (0, x.jsx)(eu.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: v,
                thumbnailRef: m,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: _,
                imageRef: C,
                placeholderRef: j,
                captionRef: P,
                controlsRef: O,
                closeRef: S,
                zoomRef: k,
                zoomInRef: E,
                zoomSliderRef: R,
                zoomOutRef: D,
                resetRef: T,
                downloadRef: N,
                open: I,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: z.current
              },
              children: (0, x.jsx)(nu, {
                ...u
              })
            })
          })
        },
        ru = (0, V.createContext)({
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
        nu = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, V.useContext)(eu), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, It.useGSAP)(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: s,
              triggerRef: i,
              triggerBorderRef: a,
              thumbnailRef: l,
              containerRef: d,
              zoomPanRef: c,
              placeholderRef: u,
              imageRef: f
            } = (0, V.useContext)(eu), p = (0, V.useRef)(null);
            p.current || (p.current = Nt.gsap.timeline({
              defaults: _n
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
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), Nt.gsap.set([u.current, f.current], {
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
                }), Nt.gsap.set([f.current], {
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
                }), n && p.current.to([i.current, a.current], {
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
                }, 0), p.current.fromTo([s.current], {
                  opacity: 0,
                  [Cn]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Cn]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Br(f.current), t.closing || (Nt.gsap.set([f.current], {
                  visibility: "visible",
                  ...xn
                }), Nt.gsap.set([u.current], {
                  visibility: "hidden",
                  ...xn
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
            update: s,
            zoomIn: i,
            zoomOut: a,
            zoomTo: l,
            resetZoom: d,
            toggleControls: c
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = (0, It.useGSAP)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: s,
              containerRef: i,
              placeholderRef: a
            } = (0, V.useContext)(eu), l = t(async e => {
              r.zoomTo(e), Nt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...xn
              })
            }), d = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), Nt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...xn
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), Nt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...xn
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), Nt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...xn
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              Nt.gsap.to([s.current], {
                opacity: e,
                [Cn]: t,
                ...xn
              })
            }), p = t(async () => {
              Nt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...xn
              })
            }), h = (0, V.useCallback)(() => {
              n.current && o.current && (r.resize(), Nt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...xn
              }), Nt.gsap.set([n.current, a.current], {
                ...r.getUpdatedContentSize(),
                ...xn
              }), Nt.gsap.set([i.current], {
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
          }), u = (0, H.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, x.jsx)(ru.Provider, {
            value: {
              update: s,
              openAnim: n,
              close: o,
              zoomIn: i,
              zoomOut: a,
              zoomTo: l,
              resetZoom: d,
              toggleControls: c,
              onOpenChange: r
            },
            children: (0, x.jsx)(Xc, {
              ...u
            })
          })
        },
        ou = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, On.A)(),
            {
              triggerRef: s,
              triggerBorderRef: i,
              altText: a
            } = (0, V.useContext)(eu),
            l = (0, G.UP)(s, n),
            d = (0, H.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Fn.OpenButtonLabel, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, x.jsx)(Gc, {
            ref: l,
            ...d,
            children: (0, x.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: i,
              children: (0, x.jsx)(U.xV, {
                children: t
              })
            })
          })
        }),
        su = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, V.useContext)(eu), s = (0, G.UP)(o, n), i = (0, H.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? U.DX : "img";
          return (0, x.jsx)(a, {
            ref: s,
            ...i
          })
        }),
        iu = (0, V.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, V.useContext)(eu), o = (0, G.UP)(n, r), s = (0, H.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), i = e ? U.DX : Ee.Maximize2;
          return (0, x.jsx)(i, {
            ref: o,
            ...s
          })
        }),
        au = ({
          ...e
        }) => (0, x.jsx)(Uc, {
          ...e
        }),
        lu = (0, V.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, V.useContext)(eu), o = (0, G.UP)(n, r), s = (0, H.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, x.jsx)(Zc, {
            ref: o,
            ...s
          })
        }),
        du = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, V.useContext)(ru), {
            contentRef: s,
            altText: i,
            triggerRef: a
          } = (0, V.useContext)(eu), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, V.useContext)(eu), [t, r] = (0, V.useState)(e.getCursor()), n = (0, V.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, V.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), d = [ee.tokens, ee.typography, Vn("dark")].join(" ");
          const c = (0, G.UP)(s, n),
            u = (0, H.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, a),
              className: (0, ke.clsx)("foundry_1a74xwb9", d),
              style: {
                cursor: l
              }
            });
          return (0, x.jsxs)($c, {
            ref: c,
            ...u,
            children: [(0, x.jsx)(U.s6, {
              children: (0, x.jsx)(Qc, {
                children: i
              })
            }), t]
          })
        }),
        cu = (0, V.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, V.useContext)(eu);
          (() => {
            const {
              contextSafe: e
            } = (0, It.useGSAP)(), {
              toggleControls: t
            } = (0, V.useContext)(ru), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: s,
              slide: i
            } = (0, V.useContext)(eu), a = e(e => {
              e.pinching || i.zoomHandler.pinching || (i.dragHandler.handleDrag(e), i.dragHandler.animate && !i.closing && (Nt.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...xn
              }), Nt.gsap.to([o.current], {
                opacity: i.getOverlayOpacity(),
                ...xn
              }), Nt.gsap.to([s.current], {
                opacity: i.getControlsOpacity(),
                ...xn
              })))
            }), l = e(e => {
              e.pinching || i.zoomHandler.pinching || (i.scrollWheel.handleWheel(e), i.closing || Nt.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...xn
              }))
            }), d = e(e => {
              !e.pinching && !i.zoomHandler.pinching || i.dragHandler.dragging || (i.zoomHandler.handleZoom(e), i.zoomHandler.animate && !i.closing && (Nt.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...xn
              }), Nt.gsap.to([o.current], {
                opacity: i.getOverlayOpacity(),
                ...xn
              }), Nt.gsap.to([s.current], {
                opacity: i.getControlsOpacity(),
                ...xn
              })))
            }), c = (0, V.useCallback)(() => {
              i.controlsVisible || t()
            }, [, t]);
            (0, G.iQ)({
              ref: s,
              onFocusIn: c
            }), qr({
              onWheel: l,
              onDrag: a,
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
          const s = (0, G.UP)(o, n),
            i = (0, H.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, x.jsx)("div", {
            ref: s,
            ...i,
            children: (0, x.jsxs)(uu, {
              children: [(0, x.jsx)(fu, {}), t]
            })
          })
        }),
        uu = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, V.useContext)(eu), s = (0, G.UP)(o, n), i = (0, H.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? U.DX : "div";
          return (0, x.jsx)(a, {
            ref: s,
            ...i
          })
        }),
        fu = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, V.useContext)(eu), s = (0, G.UP)(o, n), i = (0, H.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), a = t ? U.DX : "img";
          return (0, x.jsx)(a, {
            ref: s,
            ...i
          })
        }),
        pu = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, V.useContext)(eu), s = (0, G.UP)(o, n), i = (0, H.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? U.DX : "img";
          return (0, x.jsx)(a, {
            ref: s,
            ...i
          })
        }),
        hu = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, V.useContext)(eu), s = (0, G.UP)(o, n), i = (0, H.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), a = t ? U.DX : "p";
          return (0, x.jsx)(Yc, {
            asChild: !0,
            children: (0, x.jsx)(a, {
              ref: s,
              ...i
            })
          })
        }),
        vu = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, V.useContext)(eu);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, V.useContext)(ru);
            fn(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), fn(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), fn("r", n, {
              enabled: e,
              preventDefault: !0
            }), fn("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const s = (0, G.UP)(o, n),
            i = (0, H.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            a = t ? U.DX : "div";
          return (0, x.jsx)(dn, {
            children: (0, x.jsx)(a, {
              ref: s,
              ...i
            })
          })
        }),
        mu = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, x.jsx)(x.Fragment, {
            children: n
          });
          const s = (0, H.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, x.jsxs)(fd, {
            delayDuration: 0,
            children: [(0, x.jsx)(pd, {
              children: n
            }), (0, x.jsxs)(hd, {
              ...s,
              children: [(0, x.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, x.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, x.jsx)(vd, {})]
            })]
          })
        },
        yu = (0, V.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, H.v6)(e, {
            isInline: !0
          });
          return (0, x.jsx)(Bn, {
            ref: t,
            ...r
          })
        }),
        gu = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, s) {
          const i = (0, On.A)(),
            {
              zoomRef: a
            } = (0, V.useContext)(eu),
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
              } = (0, V.useContext)(eu), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, V.useContext)(ru), [o, s] = (0, V.useState)(!1), [i, a] = (0, V.useState)(!1), [l, d] = (0, V.useState)(0), [c, u] = (0, V.useState)(0), [f, p] = (0, V.useState)(0), h = (0, V.useCallback)(() => {
                s(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), d(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
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
                canZoomOut: i,
                zoomProgress: l,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            m = (0, G.UP)(a, s),
            y = (0, H.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? U.DX : "div";
          return (0, x.jsxs)(g, {
            ref: m,
            ...y,
            children: [(0, x.jsx)(mu, {
              side: "left",
              enabled: r,
              content: i.formatMessage(Fn.ZoomInButtonLabel),
              metadata: i.formatMessage(Fn.ZoomInButtonTooltip, {
                shortcut: (0, x.jsx)(yu, {
                  shortcut: "+"
                })
              }),
              children: (0, x.jsx)($e, {
                label: i.formatMessage(Fn.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: wn({
                  position: "top"
                }),
                onPress: d,
                isDisabled: !l
              })
            }), (0, x.jsxs)(Ud, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: v,
              children: [(0, x.jsx)(Zd, {
                className: "foundry_1a74xwbu",
                children: (0, x.jsx)($d, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, x.jsx)(mu, {
                side: "left",
                enabled: r,
                content: i.formatMessage(Fn.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, x.jsx)(Qd, {
                  className: "foundry_1a74xwbw",
                  children: (0, x.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, x.jsx)(mu, {
              side: "left",
              enabled: r,
              content: i.formatMessage(Fn.ZoomOutButtonLabel),
              metadata: i.formatMessage(Fn.ZoomOutButtonTooltip, {
                shortcut: (0, x.jsx)(yu, {
                  shortcut: "-"
                })
              }),
              children: (0, x.jsx)($e, {
                label: i.formatMessage(Fn.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: wn({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, x.jsx)(U.xV, {
              children: n
            })]
          })
        }),
        bu = (0, V.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const s = (0, On.A)(),
            {
              closeRef: i
            } = (0, V.useContext)(eu),
            a = (0, G.UP)(i, o),
            l = (0, H.v6)(n, {
              "data-testid": e,
              className: bn({
                styled: !t
              })
            }),
            d = t ? (0, x.jsx)(U.DX, {
              ref: a,
              ...l
            }) : (0, x.jsx)($e, {
              ref: a,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: s.formatMessage(Fn.CloseButtonLabel)
            });
          return (0, x.jsx)(mu, {
            side: "right",
            enabled: r,
            content: s.formatMessage(Fn.CloseButtonLabel),
            metadata: s.formatMessage(Fn.CloseButtonTooltip, {
              shortcut: (0, x.jsx)(yu, {
                shortcut: "Esc"
              })
            }),
            children: (0, x.jsx)(Jc, {
              asChild: !0,
              children: d
            })
          })
        }),
        wu = (0, V.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, On.A)(),
            s = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, V.useContext)(eu), {
                contextSafe: r
              } = (0, It.useGSAP)(), {
                resetZoom: n
              } = (0, V.useContext)(ru), [o, s] = (0, V.useState)(e.currZoomLevel !== e.zoomLevels.initial), i = r(e => {
                Nt.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...xn
                })
              }), a = (0, V.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                s(t), i(t)
              }, [s]);
              return (0, V.useEffect)(() => (e.addEventListener("zoom", a), () => {
                e.removeEventListener("zoom", a)
              }), [a]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: i
            } = (0, V.useContext)(eu),
            a = (0, G.UP)(i, n),
            l = (0, H.v6)(r, s, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, x.jsx)(mu, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Fn.ResetZoomButtonLabel),
            metadata: o.formatMessage(Fn.ResetZoomButtonTooltip, {
              shortcut: (0, x.jsx)(yu, {
                shortcut: "R"
              })
            }),
            children: (0, x.jsx)($e, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Fn.ResetZoomButtonLabel)
            })
          })
        }),
        _u = (0, V.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, On.A)(),
            {
              downloadRef: s,
              imageRef: i
            } = (0, V.useContext)(eu),
            a = (0, G.UP)(s, n),
            l = (0, H.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, x.jsx)(mu, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Fn.DownloadButtonTooltip),
            children: (0, x.jsx)($e, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Fn.DownloadButtonTooltip),
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
        xu = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        },
        Cu = "undefined" != typeof document ? V.useLayoutEffect : () => {},
        ju = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Pu = e => e && "window" in e && e.window === e ? e : ju(e).defaultView || window;

      function Ou(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
      const Su = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function ku(e, t) {
        return Su ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = Pu(e);
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
        }(e, t) && (!e.parentElement || ku(e.parentElement, e))
      }
      const Eu = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        Ru = Eu.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Eu.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const Du = Eu.join(':not([hidden]):not([tabindex="-1"]),');

      function Tu(e) {
        return e.matches(Ru) && ku(e) && !Iu(e)
      }

      function Nu(e) {
        return e.matches(Du) && ku(e) && !Iu(e)
      }

      function Iu(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }

      function Lu(e) {
        if (function() {
            if (null == zu) {
              zu = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return zu = !0, !0
                  }
                })
              } catch {}
            }
            return zu
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
      let zu = null;

      function Mu(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function Au(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function Vu(e) {
        let t = (0, V.useRef)({
          isFocused: !1,
          observer: null
        });
        return Cu(() => {
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
                  let t = Mu(r);
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
      let Fu = !1;

      function qu(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let r = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(r) && r.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function Bu(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Ku(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Hu = Ku(function() {
          return Bu(/^Mac/i)
        }),
        Wu = Ku(function() {
          return Bu(/^iPhone/i)
        }),
        Xu = Ku(function() {
          return Bu(/^iPad/i) || Hu() && navigator.maxTouchPoints > 1
        }),
        Gu = Ku(function() {
          return Wu() || Xu()
        }),
        Uu = (Ku(function() {
          return Hu() || Gu()
        }), Ku(function() {
          return qu(/AppleWebKit/i) && !Zu()
        })),
        Zu = Ku(function() {
          return qu(/Chrome/i)
        }),
        $u = Ku(function() {
          return qu(/Android/i)
        }),
        Qu = Ku(function() {
          return qu(/Firefox/i)
        });
      let Yu = new Map,
        Ju = new Set;

      function ef() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = Yu.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), Yu.delete(r.target)), 0 === Yu.size)) {
            for (let e of Ju) e();
            Ju.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = Yu.get(r.target);
          n || (n = new Set, Yu.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function tf(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of Yu) "isConnected" in e && !e.isConnected && Yu.delete(e)
          }(), 0 === Yu.size ? e() : Ju.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? ef() : document.addEventListener("DOMContentLoaded", ef));
      let rf = "default",
        nf = "",
        of = new WeakMap;

      function sf(e) {
        if (Gu()) {
          if ("disabled" !== rf) return;
          rf = "restoring", setTimeout(() => {
            tf(() => {
              if ("restoring" === rf) {
                const t = ju(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = nf || ""), nf = "", rf = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && of.has(e)) {
          let t = of.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), of.delete(e)
        }
      }
      const af = V.createContext({
        register: () => {}
      });
      af.displayName = "PressResponderContext";
      var lf = r(88842),
        df = r(57178),
        cf = r(72562);

      function uf(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const ff = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        pf = V.createContext(ff),
        hf = V.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let vf = new WeakMap;
      const mf = "function" == typeof V.useId ? function(e) {
        let t = V.useId(),
          [r] = (0, V.useState)(wf());
        return e || `${r?"react-aria":`react-aria${ff.prefix}`}-${t}`
      } : function(e) {
        let t = (0, V.useContext)(pf),
          r = function(e = !1) {
            let t = (0, V.useContext)(pf),
              r = (0, V.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = vf.get(e);
                null == r ? vf.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, vf.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function yf() {
        return !1
      }

      function gf() {
        return !0
      }

      function bf(e) {
        return () => {}
      }

      function wf() {
        return "function" == typeof V.useSyncExternalStore ? V.useSyncExternalStore(bf, yf, gf) : (0, V.useContext)(hf)
      }
      let _f, xf = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Cf = new Map;

      function jf(e) {
        let [t, r] = (0, V.useState)(e), n = (0, V.useRef)(null), o = mf(t), s = (0, V.useRef)(null);
        if (_f && _f.register(s, o), xf) {
          const e = Cf.get(o);
          e && !e.includes(n) ? e.push(n) : Cf.set(o, [n])
        }
        return Cu(() => {
          let e = o;
          return () => {
            _f && _f.unregister(s), Cf.delete(e)
          }
        }, [o]), (0, V.useEffect)(() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        }), o
      }

      function Pf(e, t) {
        if (e === t) return e;
        let r = Cf.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = Cf.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function Of(e = []) {
        let t = jf(),
          [r, n] = function(e) {
            let [t, r] = (0, V.useState)(e), n = (0, V.useRef)(t), o = (0, V.useRef)(null), s = (0, V.useRef)(() => {
              if (!o.current) return;
              let e = o.current.next();
              e.done ? o.current = null : n.current === e.value ? s.current() : r(e.value)
            });
            Cu(() => {
              n.current = t, o.current && s.current()
            });
            let i = (0, V.useCallback)(e => {
              o.current = e(n.current), s.current()
            }, [s]);
            return [t, i]
          }(t),
          o = (0, V.useCallback)(() => {
            n(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, n]);
        return Cu(o, [t, o, ...e]), r
      }

      function Sf(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
          let r = !1;
          const n = e.map(e => {
            const n = kf(e, t);
            return r || (r = "function" == typeof n), n
          });
          if (r) return () => {
            n.forEach((t, r) => {
              "function" == typeof t ? t() : kf(e[r], null)
            })
          }
        }
      }

      function kf(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function Ef(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = uf(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Pf(r, o) : "ref" === e && r && o ? t.ref = Sf(r, o) : t[e] = void 0 !== o ? o : r : t[e] = ke(r, o)
          }
        }
        return t
      }

      function Rf(e, t) {
        Cu(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }

      function Df() {
        let e = (0, V.useRef)(new Map),
          t = (0, V.useCallback)((t, r, n, o) => {
            let s = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(n), n(...t)
            } : n;
            e.current.set(n, {
              type: r,
              eventTarget: t,
              fn: s,
              options: o
            }), t.addEventListener(r, s, o)
          }, []),
          r = (0, V.useCallback)((t, r, n, o) => {
            var s;
            let i = (null === (s = e.current.get(n)) || void 0 === s ? void 0 : s.fn) || n;
            t.removeEventListener(r, i, o), e.current.delete(n)
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
      var Tf;
      "undefined" != typeof FinalizationRegistry && (_f = new FinalizationRegistry(e => {
        Cf.delete(e)
      }));
      const Nf = null !== (Tf = V.useInsertionEffect) && void 0 !== Tf ? Tf : Cu;

      function If(e) {
        const t = (0, V.useRef)(null);
        return Nf(() => {
          t.current = e
        }, [e]), (0, V.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      var Lf = r(35412);

      function zf(e, t) {
        if (!(0, Lf.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let r = t;
        for (; null !== r;) {
          if (r === e) return !0;
          r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : Ou(r) ? r.host : r.parentNode
        }
        return !1
      }
      const Mf = (e = document) => {
        var t;
        if (!(0, Lf.Nf)()) return e.activeElement;
        let r = e.activeElement;
        for (; r && "shadowRoot" in r && (null === (t = r.shadowRoot) || void 0 === t ? void 0 : t.activeElement);) r = r.shadowRoot.activeElement;
        return r
      };

      function Af(e) {
        return (0, Lf.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }
      const Vf = (0, V.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, e => qf(e, t))
        },
        useHref: e => e
      });

      function Ff() {
        return (0, V.useContext)(Vf)
      }

      function qf(e, t, r = !0) {
        var n, o;
        let {
          metaKey: s,
          ctrlKey: i,
          altKey: a,
          shiftKey: l
        } = t;
        Qu() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Hu() ? s = !0 : i = !0);
        let d = Uu() && Hu() && !Xu() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: s,
          ctrlKey: i,
          altKey: a,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: s,
          ctrlKey: i,
          altKey: a,
          shiftKey: l,
          detail: 1,
          bubbles: !0,
          cancelable: !0
        });
        qf.isOpening = r, Lu(e), e.dispatchEvent(d), qf.isOpening = !1
      }

      function Bf(e) {
        var t;
        const r = Ff().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function Kf(e, t, r, n) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let r = e.getAttribute("target");
          return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && r && (e.preventDefault(), t.open(e.currentTarget, e, r, n))
      }

      function Hf(e) {
        return !("" !== e.pointerType || !e.isTrusted) || ($u() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      qf.isOpening = !1;
      var Wf = new WeakMap;
      class Xf {
        continuePropagation() {
          (0, cf._)(this, Wf, !1)
        }
        get shouldStopPropagation() {
          return (0, lf._)(this, Wf)
        }
        constructor(e, t, r, n) {
          var o;
          (0, df._)(this, Wf, {
            writable: !0,
            value: void 0
          }), (0, cf._)(this, Wf, !0);
          let s = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const i = null == s ? void 0 : s.getBoundingClientRect();
          let a, l, d = 0,
            c = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, c = r.clientY), i && (null != l && null != c ? (a = l - i.left, d = c - i.top) : (a = i.width / 2, d = i.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = a, this.y = d, this.key = r.key
        }
      }
      const Gf = Symbol("linkClicked"),
        Uf = "react-aria-pressable-style",
        Zf = "data-react-aria-pressable";

      function $f(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: s,
          onClick: i,
          isDisabled: a,
          isPressed: l,
          preventFocusOnPress: d,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: u,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, V.useContext)(af);
          if (t) {
            let {
              register: r,
              ref: n,
              ...o
            } = t;
            e = Ef(o, e), r()
          }
          return Rf(t, e.ref), e
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
        } = Df(), w = (0, V.useCallback)((e, t) => {
          let o = m.current;
          if (a || o.didFirePressStart) return !1;
          let s = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new Xf("pressstart", t, e);
            n(r), s = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, v(!0), s
        }, [a, n, r]), _ = (0, V.useCallback)((e, n, s = !0) => {
          let i = m.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Xf("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), v(!1), t && s && !a) {
            let r = new Xf("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, l
        }, [a, o, r, t]), x = If(_), C = (0, V.useCallback)((e, t) => {
          let r = m.current;
          if (a) return !1;
          if (s) {
            r.isTriggeringEvent = !0;
            let n = new Xf("pressup", t, e);
            return s(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }, [a, s]), j = If(C), P = (0, V.useCallback)(e => {
          let t = m.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(Jf(t.target, e), t.pointerType, !1), t.isPressed = !1, I(null), t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), u || sf(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [u, g, _]), O = If(P), S = (0, V.useCallback)(e => {
          c && P(e)
        }, [c, P]), k = (0, V.useCallback)(e => {
          a || null == i || i(e)
        }, [a, i]), E = (0, V.useCallback)((e, t) => {
          if (!a && i) {
            let r = new MouseEvent("click", e);
            Au(r, t), i(Mu(r))
          }
        }, [a, i]), R = If(E), [D, T] = (0, V.useState)(!1);
        Cu(() => {
          let e = m.current;
          if (D) {
            let t = t => {
                var r;
                if (e.isPressed && e.target && Yf(t, e.target)) {
                  var n;
                  ep(Af(t), t.key) && t.preventDefault();
                  let r = Af(t),
                    o = zf(e.target, Af(t));
                  x(Jf(e.target, t), "keyboard", o), o && R(t, e.target), g(), "Enter" !== t.key && Qf(e.target) && zf(e.target, r) && !t[Gf] && (t[Gf] = !0, qf(e.target, t, !1)), e.isPressed = !1, T(!1), null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
                } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                  var o;
                  let t = e.metaKeyEvents;
                  e.metaKeyEvents = void 0;
                  for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
                }
              },
              r = e.target,
              n = t => {
                r && Yf(t, r) && !t.repeat && zf(r, Af(t)) && e.target && j(Jf(e.target, t), "keyboard")
              },
              o = uf(n, t);
            return y(ju(e.target), "keyup", o, !0), () => {
              b(ju(e.target), "keyup", o, !0)
            }
          }
        }, [D, y, g, b]);
        let [N, I] = (0, V.useState)(null);
        Cu(() => {
          let e = m.current;
          if ("pointer" === N) {
            let t = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (zf(e.target, Af(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? O(t) : (Lu(e.target), e.target.click()))
                      }, 80);
                    y(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else O(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                O(e)
              };
            return y(ju(e.target), "pointerup", t, !1), y(ju(e.target), "pointercancel", r, !1), () => {
              b(ju(e.target), "pointerup", t, !1), b(ju(e.target), "pointercancel", r, !1)
            }
          }
        }, [N, y, b]);
        let L = (0, V.useMemo)(() => {
          let e = m.current,
            t = {
              onKeyDown(t) {
                if (Yf(t.nativeEvent, t.currentTarget) && zf(t.currentTarget, Af(t.nativeEvent))) {
                  var r;
                  ep(Af(t.nativeEvent), t.key) && t.preventDefault();
                  let n = !0;
                  e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, T(!0), e.pointerType = "keyboard", n = w(t, "keyboard")), n && t.stopPropagation(), t.metaKey && Hu() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || zf(t.currentTarget, Af(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !qf.isOpening) {
                  let r = !0;
                  if (a && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Hf(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = C(Jf(t.currentTarget, t), n),
                        s = _(Jf(t.currentTarget, t), n, !0);
                      r = o && s, e.isOverTarget = !1, k(t), P(t)
                    }
                  } else {
                    let e = w(t, "virtual"),
                      n = C(t, "virtual"),
                      o = _(t, "virtual");
                    k(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            };
          return "undefined" != typeof PointerEvent && (t.onPointerDown = t => {
            if (0 !== t.button || !zf(t.currentTarget, Af(t.nativeEvent))) return;
            if (r = t.nativeEvent, !$u() && 0 === r.width && 0 === r.height || 1 === r.width && 1 === r.height && 0 === r.pressure && 0 === r.detail && "mouse" === r.pointerType) return void(e.pointerType = "virtual");
            var r;
            e.pointerType = t.pointerType;
            let n = !0;
            if (!e.isPressed) {
              e.isPressed = !0, I("pointer"), e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, u || function(e) {
                if (Gu()) {
                  if ("default" === rf) {
                    const t = ju(e);
                    nf = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                  }
                  rf = "disabled"
                } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                  let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                  of.set(e, e.style[t]), e.style[t] = "none"
                }
              }(e.target), n = w(t, e.pointerType);
              let r = Af(t.nativeEvent);
              "releasePointerCapture" in r && ("hasPointerCapture" in r ? r.hasPointerCapture(t.pointerId) && r.releasePointerCapture(t.pointerId) : r.releasePointerCapture(t.pointerId))
            }
            n && t.stopPropagation()
          }, t.onMouseDown = t => {
            if (zf(t.currentTarget, Af(t.nativeEvent)) && 0 === t.button) {
              if (d) {
                let r = function(e) {
                  for (; e && !Tu(e);) e = e.parentElement;
                  let t = Pu(e),
                    r = t.document.activeElement;
                  if (!r || r === e) return;
                  Fu = !0;
                  let n = !1,
                    o = e => {
                      (e.target === r || n) && e.stopImmediatePropagation()
                    },
                    s = t => {
                      (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, Lu(r), l()))
                    },
                    i = t => {
                      (t.target === e || n) && t.stopImmediatePropagation()
                    },
                    a = t => {
                      (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, Lu(r), l()))
                    };
                  t.addEventListener("blur", o, !0), t.addEventListener("focusout", s, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", i, !0);
                  let l = () => {
                      cancelAnimationFrame(d), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", s, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", i, !0), Fu = !1, n = !1
                    },
                    d = requestAnimationFrame(l);
                  return l
                }(t.target);
                r && e.disposables.push(r)
              }
              t.stopPropagation()
            }
          }, t.onPointerUp = t => {
            zf(t.currentTarget, Af(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || C(t, e.pointerType || t.pointerType))
          }, t.onPointerEnter = t => {
            t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, w(Jf(e.target, t), e.pointerType))
          }, t.onPointerLeave = t => {
            t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(Jf(e.target, t), e.pointerType, !1), S(t))
          }, t.onDragStart = e => {
            zf(e.currentTarget, Af(e.nativeEvent)) && P(e)
          }), t
        }, [a, d, g, u, P, S, _, w, C, k, E]);
        return (0, V.useEffect)(() => {
          if (!f) return;
          const e = ju(f.current);
          if (!e || !e.head || e.getElementById(Uf)) return;
          const t = e.createElement("style");
          t.id = Uf, t.textContent = `\n@layer {\n  [${Zf}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, V.useEffect)(() => {
          let e = m.current;
          return () => {
            var t;
            u || sf(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [u]), {
          isPressed: l || h,
          pressProps: Ef(p, L, {
            [Zf]: !0
          })
        }
      }

      function Qf(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Yf(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, s = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Pu(o).HTMLInputElement && !rp(o, r) || o instanceof Pu(o).HTMLTextAreaElement || o.isContentEditable || ("link" === s || !s && Qf(o)) && "Enter" !== r)
      }

      function Jf(e, t) {
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

      function ep(e, t) {
        return e instanceof HTMLInputElement ? !rp(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Qf(e)))
        }(e)
      }
      const tp = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function rp(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : tp.has(e.type)
      }

      function np(e) {
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

      function op(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function sp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? op(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = np(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : op(Object(r)).forEach(function(t) {
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
      var ap = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        lp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sp(sp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) ap(d, n, e.defaultVariants) && (r += " " + c);
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
      const dp = (0, V.createContext)(null);

      function cp() {
        const e = (0, V.useContext)(dp);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const up = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: s = "neutral",
          ...i
        }, a) => {
          const l = (0, H.v6)({
              className: lp({
                status: s
              }),
              "data-testid": t
            }, i),
            d = r ? U.DX : "div";
          return (0, x.jsx)(dp.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: s,
              ...i
            },
            children: (0, x.jsx)(d, {
              ...l,
              ref: a,
              children: e
            })
          })
        }),
        fp = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = cp(), s = (0, H.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), i = {
            success: Ee.Check,
            invalid: Ee.X,
            neutral: Ee.TriangleAlert
          }, a = t ? U.DX : i[o];
          return (0, x.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        pp = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            errorId: i
          } = cp(), a = (0, H.v6)({
            "data-testid": t,
            id: i || s
          }, n), l = r ? U.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });
      var hp = "ScrollArea",
        [vp, mp] = (0, ja.A)(hp),
        [yp, gp] = vp(hp),
        bp = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...i
          } = e, [a, l] = V.useState(null), [d, c] = V.useState(null), [u, f] = V.useState(null), [p, h] = V.useState(null), [v, m] = V.useState(null), [y, g] = V.useState(0), [b, w] = V.useState(0), [_, C] = V.useState(!1), [j, P] = V.useState(!1), O = (0, ae.s)(t, e => l(e)), S = (0, gd.jH)(o);
          return (0, x.jsx)(yp, {
            scope: r,
            type: n,
            dir: S,
            scrollHideDelay: s,
            scrollArea: a,
            viewport: d,
            onViewportChange: c,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: h,
            scrollbarXEnabled: _,
            onScrollbarXEnabledChange: C,
            scrollbarY: v,
            onScrollbarYChange: m,
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: P,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, x.jsx)(Pa.sG.div, {
              dir: S,
              ...i,
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
      bp.displayName = hp;
      var wp = "ScrollAreaViewport",
        _p = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...s
          } = e, i = gp(wp, r), a = V.useRef(null), l = (0, ae.s)(t, a, i.onViewportChange);
          return (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, x.jsx)(Pa.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: l,
              style: {
                overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, x.jsx)("div", {
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
      _p.displayName = wp;
      var xp = "ScrollAreaScrollbar",
        Cp = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = gp(xp, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: i
          } = o, a = "horizontal" === e.orientation;
          return V.useEffect(() => (a ? s(!0) : i(!0), () => {
            a ? s(!1) : i(!1)
          }), [a, s, i]), "hover" === o.type ? (0, x.jsx)(jp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, x.jsx)(Pp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, x.jsx)(Op, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, x.jsx)(Sp, {
            ...n,
            ref: t
          }) : null
        });
      Cp.displayName = xp;
      var jp = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = gp(xp, e.__scopeScrollArea), [s, i] = V.useState(!1);
          return V.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, x.jsx)(jl.C, {
            present: r || s,
            children: (0, x.jsx)(Op, {
              "data-state": s ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Pp = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = gp(xp, e.__scopeScrollArea), s = "horizontal" === e.orientation, i = Wp(() => l("SCROLL_END"), 100), [a, l] = (d = {
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
            if ("idle" === a) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [a, o.scrollHideDelay, l]), V.useEffect(() => {
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
          }, [o.viewport, s, l, i]), (0, x.jsx)(jl.C, {
            present: r || "hidden" !== a,
            children: (0, x.jsx)(Sp, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, Ca.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, Ca.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        Op = V.forwardRef((e, t) => {
          const r = gp(xp, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [s, i] = V.useState(!1),
            a = "horizontal" === e.orientation,
            l = Wp(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                i(a ? e : t)
              }
            }, 10);
          return Xp(r.viewport, l), Xp(r.content, l), (0, x.jsx)(jl.C, {
            present: n || s,
            children: (0, x.jsx)(Sp, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Sp = V.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = gp(xp, e.__scopeScrollArea), s = V.useRef(null), i = V.useRef(0), [a, l] = V.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = Vp(a.viewport, a.content), c = {
            ...n,
            sizes: a,
            onSizesChange: l,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => s.current = e,
            onThumbPointerUp: () => i.current = 0,
            onThumbPointerDown: e => i.current = e
          };

          function u(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = Fp(r),
                s = t || o / 2,
                i = o - s,
                a = r.scrollbar.paddingStart + s,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - i,
                d = r.content - r.viewport;
              return Bp([a, l], "ltr" === n ? [0, d] : [-1 * d, 0])(e)
            }(e, i.current, a, t)
          }
          return "horizontal" === r ? (0, x.jsx)(kp, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = qp(o.viewport.scrollLeft, a, o.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, x.jsx)(Ep, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = qp(o.viewport.scrollTop, a);
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
        kp = V.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = gp(xp, e.__scopeScrollArea), [i, a] = V.useState(), l = V.useRef(null), d = (0, ae.s)(t, l, s.onScrollbarXChange);
          return V.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, x.jsx)(Tp, {
            "data-orientation": "horizontal",
            ...o,
            ref: d,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Fp(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Kp(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && s.viewport && i && n({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Ap(i.paddingLeft),
                  paddingEnd: Ap(i.paddingRight)
                }
              })
            }
          })
        }),
        Ep = V.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = gp(xp, e.__scopeScrollArea), [i, a] = V.useState(), l = V.useRef(null), d = (0, ae.s)(t, l, s.onScrollbarYChange);
          return V.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, x.jsx)(Tp, {
            "data-orientation": "vertical",
            ...o,
            ref: d,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Fp(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Kp(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && s.viewport && i && n({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Ap(i.paddingTop),
                  paddingEnd: Ap(i.paddingBottom)
                }
              })
            }
          })
        }),
        [Rp, Dp] = vp(xp),
        Tp = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: s,
            onThumbPointerUp: i,
            onThumbPointerDown: a,
            onThumbPositionChange: l,
            onDragScroll: d,
            onWheelScroll: c,
            onResize: u,
            ...f
          } = e, p = gp(xp, r), [h, v] = V.useState(null), m = (0, ae.s)(t, e => v(e)), y = V.useRef(null), g = V.useRef(""), b = p.viewport, w = n.content - n.viewport, _ = (0, Oa.c)(c), C = (0, Oa.c)(l), j = Wp(u, 10);

          function P(e) {
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
          }, [b, h, w, _]), V.useEffect(C, [n, C]), Xp(h, j), Xp(p.content, j), (0, x.jsx)(Rp, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, Oa.c)(s),
            onThumbPointerUp: (0, Oa.c)(i),
            onThumbPositionChange: C,
            onThumbPointerDown: (0, Oa.c)(a),
            children: (0, x.jsx)(Pa.sG.div, {
              ...f,
              ref: m,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Ca.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), P(e))
              }),
              onPointerMove: (0, Ca.mK)(e.onPointerMove, P),
              onPointerUp: (0, Ca.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        Np = "ScrollAreaThumb",
        Ip = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Dp(Np, e.__scopeScrollArea);
          return (0, x.jsx)(jl.C, {
            present: r || o.hasThumb,
            children: (0, x.jsx)(Lp, {
              ref: t,
              ...n
            })
          })
        }),
        Lp = V.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, s = gp(Np, r), i = Dp(Np, r), {
            onThumbPositionChange: a
          } = i, l = (0, ae.s)(t, e => i.onThumbChange(e)), d = V.useRef(void 0), c = Wp(() => {
            d.current && (d.current(), d.current = void 0)
          }, 100);
          return V.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const t = () => {
                if (c(), !d.current) {
                  const t = Hp(e, a);
                  d.current = t, a()
                }
              };
              return a(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [s.viewport, c, a]), (0, x.jsx)(Pa.sG.div, {
            "data-state": i.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, Ca.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              i.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, Ca.mK)(e.onPointerUp, i.onThumbPointerUp)
          })
        });
      Ip.displayName = Np;
      var zp = "ScrollAreaCorner";
      V.forwardRef((e, t) => {
        const r = gp(zp, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, x.jsx)(Mp, {
          ...e,
          ref: t
        }) : null
      }).displayName = zp;
      var Mp = V.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = gp(zp, r), [s, i] = V.useState(0), [a, l] = V.useState(0), d = Boolean(s && a);
        return Xp(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), Xp(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), i(e)
        }), d ? (0, x.jsx)(Pa.sG.div, {
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

      function Ap(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Vp(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Fp(e) {
        const t = Vp(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function qp(e, t, r = "ltr") {
        const n = Fp(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          s = t.scrollbar.size - o,
          i = t.content - t.viewport,
          a = s - n,
          l = yd(e, "ltr" === r ? [0, i] : [-1 * i, 0]);
        return Bp([0, i], [0, a])(l)
      }

      function Bp(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Kp(e, t) {
        return e > 0 && e < t
      }
      var Hp = (e, t = () => {}) => {
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

      function Wp(e, t) {
        const r = (0, Oa.c)(e),
          n = V.useRef(0);
        return V.useEffect(() => () => window.clearTimeout(n.current), []), V.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Xp(e, t) {
        const r = (0, Oa.c)(t);
        (0, Ja.N)(() => {
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
      var Gp = bp,
        Up = _p,
        Zp = Cp,
        $p = Ip,
        Qp = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Yp = [" ", "Enter"],
        Jp = "Select",
        [eh, th, rh] = (0, wd.N)(Jp),
        [nh, oh] = (0, ja.A)(Jp, [rh, nl]),
        sh = nl(),
        [ih, ah] = nh(Jp),
        [lh, dh] = nh(Jp),
        ch = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            value: i,
            defaultValue: a,
            onValueChange: l,
            dir: d,
            name: c,
            autoComplete: u,
            disabled: f,
            required: p,
            form: h
          } = e, v = sh(t), [m, y] = V.useState(null), [g, b] = V.useState(null), [w, _] = V.useState(!1), C = (0, gd.jH)(d), [j, P] = (0, Ol.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Jp
          }), [O, S] = (0, Ol.i)({
            prop: i,
            defaultProp: a,
            onChange: l,
            caller: Jp
          }), k = V.useRef(null), E = !m || h || !!m.closest("form"), [R, D] = V.useState(new Set), T = Array.from(R).map(e => e.props.value).join(";");
          return (0, x.jsx)(bl, {
            ...v,
            children: (0, x.jsxs)(ih, {
              required: p,
              scope: t,
              trigger: m,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: _,
              contentId: (0, za.B)(),
              value: O,
              onValueChange: S,
              open: j,
              onOpenChange: P,
              dir: C,
              triggerPointerDownPosRef: k,
              disabled: f,
              children: [(0, x.jsx)(eh.Provider, {
                scope: t,
                children: (0, x.jsx)(lh, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: V.useCallback(e => {
                    D(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: V.useCallback(e => {
                    D(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), E ? (0, x.jsxs)(Wh, {
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
              }, T) : null]
            })
          })
        };
      ch.displayName = Jp;
      var uh = "SelectTrigger",
        fh = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, s = sh(r), i = ah(uh, r), a = i.disabled || n, l = (0, ae.s)(t, i.onTriggerChange), d = th(r), c = V.useRef("touch"), [u, f, p] = Gh(e => {
            const t = d().filter(e => !e.disabled),
              r = t.find(e => e.value === i.value),
              n = Uh(t, e, r);
            void 0 !== n && i.onValueChange(n.value)
          }), h = e => {
            a || (i.onOpenChange(!0), p()), e && (i.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, x.jsx)(wl, {
            asChild: !0,
            ...s,
            children: (0, x.jsx)(Pa.sG.button, {
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
              "data-placeholder": Xh(i.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, Ca.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && h(e)
              }),
              onPointerDown: (0, Ca.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: (0, Ca.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Qp.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      fh.displayName = uh;
      var ph = "SelectValue",
        hh = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: s,
            placeholder: i = "",
            ...a
          } = e, l = ah(ph, r), {
            onValueNodeHasChildrenChange: d
          } = l, c = void 0 !== s, u = (0, ae.s)(t, l.onValueNodeChange);
          return (0, Ja.N)(() => {
            d(c)
          }, [d, c]), (0, x.jsx)(Pa.sG.span, {
            ...a,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: Xh(l.value) ? (0, x.jsx)(x.Fragment, {
              children: i
            }) : s
          })
        });
      hh.displayName = ph;
      var vh = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, x.jsx)(Pa.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      vh.displayName = "SelectIcon";
      var mh = e => (0, x.jsx)(Cl, {
        asChild: !0,
        ...e
      });
      mh.displayName = "SelectPortal";
      var yh = "SelectContent",
        gh = V.forwardRef((e, t) => {
          const r = ah(yh, e.__scopeSelect),
            [n, o] = V.useState();
          if ((0, Ja.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? ie.createPortal((0, x.jsx)(wh, {
              scope: e.__scopeSelect,
              children: (0, x.jsx)(eh.Slot, {
                scope: e.__scopeSelect,
                children: (0, x.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, x.jsx)(Ch, {
            ...e,
            ref: t
          })
        });
      gh.displayName = yh;
      var bh = 10,
        [wh, _h] = nh(yh),
        xh = (0, Pl.TL)("SelectContent.RemoveScroll"),
        Ch = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            side: a,
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
          } = e, g = ah(yh, r), [b, w] = V.useState(null), [_, C] = V.useState(null), j = (0, ae.s)(t, e => w(e)), [P, O] = V.useState(null), [S, k] = V.useState(null), E = th(r), [R, D] = V.useState(!1), T = V.useRef(!1);
          V.useEffect(() => {
            if (b) return (0, fc.Eq)(b)
          }, [b]), dc();
          const N = V.useCallback(e => {
              const [t, ...r] = E().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && _ && (_.scrollTop = 0), r === n && _ && (_.scrollTop = _.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [E, _]),
            I = V.useCallback(() => N([P, b]), [N, P, b]);
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
          const [M, A] = Gh(e => {
            const t = E().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Uh(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), F = V.useCallback((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== g.value && g.value === t || n) && (O(e), n && (T.current = !0))
          }, [g.value]), q = V.useCallback(() => b?.focus(), [b]), B = V.useCallback((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== g.value && g.value === t || n) && k(e)
          }, [g.value]), K = "popper" === n ? Ph : jh, H = K === Ph ? {
            side: a,
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
          return (0, x.jsx)(wh, {
            scope: r,
            content: b,
            viewport: _,
            onViewportChange: C,
            itemRefCallback: F,
            selectedItem: P,
            onItemLeave: q,
            itemTextRefCallback: B,
            focusSelectedItem: I,
            selectedItemText: S,
            position: n,
            isPositioned: R,
            searchRef: M,
            children: (0, x.jsx)(uc.A, {
              as: xh,
              allowPinchZoom: !0,
              children: (0, x.jsx)(tc, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Ca.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, x.jsx)(Ra, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: i,
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
                    onPlaced: () => D(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, Ca.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || A(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = E().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => N(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      Ch.displayName = "SelectContentImpl";
      var jh = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, s = ah(yh, r), i = _h(yh, r), [a, l] = V.useState(null), [d, c] = V.useState(null), u = (0, ae.s)(t, e => c(e)), f = th(r), p = V.useRef(!1), h = V.useRef(!0), {
          viewport: v,
          selectedItem: m,
          selectedItemText: y,
          focusSelectedItem: g
        } = i, b = V.useCallback(() => {
          if (s.trigger && s.valueNode && a && d && v && m && y) {
            const e = s.trigger.getBoundingClientRect(),
              t = d.getBoundingClientRect(),
              r = s.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== s.dir) {
              const n = o.left - t.left,
                s = r.left - n,
                i = e.left - s,
                l = e.width + i,
                d = Math.max(l, t.width),
                c = window.innerWidth - bh,
                u = yd(s, [bh, Math.max(bh, c - d)]);
              a.style.minWidth = l + "px", a.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                s = window.innerWidth - r.right - n,
                i = window.innerWidth - e.right - s,
                l = e.width + i,
                d = Math.max(l, t.width),
                c = window.innerWidth - bh,
                u = yd(s, [bh, Math.max(bh, c - d)]);
              a.style.minWidth = l + "px", a.style.right = u + "px"
            }
            const i = f(),
              l = window.innerHeight - 2 * bh,
              c = v.scrollHeight,
              u = window.getComputedStyle(d),
              h = parseInt(u.borderTopWidth, 10),
              g = parseInt(u.paddingTop, 10),
              b = parseInt(u.borderBottomWidth, 10),
              w = h + g + c + parseInt(u.paddingBottom, 10) + b,
              _ = Math.min(5 * m.offsetHeight, w),
              x = window.getComputedStyle(v),
              C = parseInt(x.paddingTop, 10),
              j = parseInt(x.paddingBottom, 10),
              P = e.top + e.height / 2 - bh,
              O = l - P,
              S = m.offsetHeight / 2,
              k = h + g + (m.offsetTop + S),
              E = w - k;
            if (k <= P) {
              const e = i.length > 0 && m === i[i.length - 1].ref.current;
              a.style.bottom = "0px";
              const t = d.clientHeight - v.offsetTop - v.offsetHeight,
                r = k + Math.max(O, S + (e ? j : 0) + t + b);
              a.style.height = r + "px"
            } else {
              const e = i.length > 0 && m === i[0].ref.current;
              a.style.top = "0px";
              const t = Math.max(P, h + v.offsetTop + (e ? C : 0) + S) + E;
              a.style.height = t + "px", v.scrollTop = k - P + v.offsetTop
            }
            a.style.margin = `${bh}px 0`, a.style.minHeight = _ + "px", a.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, s.trigger, s.valueNode, a, d, v, m, y, s.dir, n]);
        (0, Ja.N)(() => b(), [b]);
        const [w, _] = V.useState();
        (0, Ja.N)(() => {
          d && _(window.getComputedStyle(d).zIndex)
        }, [d]);
        const C = V.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, x.jsx)(Oh, {
          scope: r,
          contentWrapper: a,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: C,
          children: (0, x.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, x.jsx)(Pa.sG.div, {
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
      jh.displayName = "SelectItemAlignedPosition";
      var Ph = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = bh,
          ...s
        } = e, i = sh(r);
        return (0, x.jsx)(_l, {
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
      Ph.displayName = "SelectPopperPosition";
      var [Oh, Sh] = nh(yh, {}), kh = "SelectViewport", Eh = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, s = _h(kh, r), i = Sh(kh, r), a = (0, ae.s)(t, s.onViewportChange), l = V.useRef(0);
        return (0, x.jsxs)(x.Fragment, {
          children: [(0, x.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, x.jsx)(eh.Slot, {
            scope: r,
            children: (0, x.jsx)(Pa.sG.div, {
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
              onScroll: (0, Ca.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = i;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * bh,
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
      Eh.displayName = kh;
      var Rh = "SelectGroup",
        [Dh, Th] = nh(Rh);
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, za.B)();
        return (0, x.jsx)(Dh, {
          scope: r,
          id: o,
          children: (0, x.jsx)(Pa.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Rh;
      var Nh = "SelectLabel";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Th(Nh, r);
        return (0, x.jsx)(Pa.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Nh;
      var Ih = "SelectItem",
        [Lh, zh] = nh(Ih),
        Mh = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: s,
            ...i
          } = e, a = ah(Ih, r), l = _h(Ih, r), d = a.value === n, [c, u] = V.useState(s ?? ""), [f, p] = V.useState(!1), h = (0, ae.s)(t, e => l.itemRefCallback?.(e, n, o)), v = (0, za.B)(), m = V.useRef("touch"), y = () => {
            o || (a.onValueChange(n), a.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, x.jsx)(Lh, {
            scope: r,
            value: n,
            disabled: o,
            textId: v,
            isSelected: d,
            onItemTextChange: V.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, x.jsx)(eh.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, x.jsx)(Pa.sG.div, {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": d && f,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: h,
                onFocus: (0, Ca.mK)(i.onFocus, () => p(!0)),
                onBlur: (0, Ca.mK)(i.onBlur, () => p(!1)),
                onClick: (0, Ca.mK)(i.onClick, () => {
                  "mouse" !== m.current && y()
                }),
                onPointerUp: (0, Ca.mK)(i.onPointerUp, () => {
                  "mouse" === m.current && y()
                }),
                onPointerDown: (0, Ca.mK)(i.onPointerDown, e => {
                  m.current = e.pointerType
                }),
                onPointerMove: (0, Ca.mK)(i.onPointerMove, e => {
                  m.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === m.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Ca.mK)(i.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, Ca.mK)(i.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (Yp.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Mh.displayName = Ih;
      var Ah = "SelectItemText",
        Vh = V.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...s
          } = e, i = ah(Ah, r), a = _h(Ah, r), l = zh(Ah, r), d = dh(Ah, r), [c, u] = V.useState(null), f = (0, ae.s)(t, e => u(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), p = c?.textContent, h = V.useMemo(() => (0, x.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: p
          }, l.value), [l.disabled, l.value, p]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: m
          } = d;
          return (0, Ja.N)(() => (v(h), () => m(h)), [v, m, h]), (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(Pa.sG.span, {
              id: l.textId,
              ...s,
              ref: f
            }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? ie.createPortal(s.children, i.valueNode) : null]
          })
        });
      Vh.displayName = Ah;
      var Fh = "SelectItemIndicator";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return zh(Fh, r).isSelected ? (0, x.jsx)(Pa.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = Fh;
      var qh = "SelectScrollUpButton";
      V.forwardRef((e, t) => {
        const r = _h(qh, e.__scopeSelect),
          n = Sh(qh, e.__scopeSelect),
          [o, s] = V.useState(!1),
          i = (0, ae.s)(t, n.onScrollButtonChange);
        return (0, Ja.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              s(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, x.jsx)(Kh, {
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
      }).displayName = qh;
      var Bh = "SelectScrollDownButton";
      V.forwardRef((e, t) => {
        const r = _h(Bh, e.__scopeSelect),
          n = Sh(Bh, e.__scopeSelect),
          [o, s] = V.useState(!1),
          i = (0, ae.s)(t, n.onScrollButtonChange);
        return (0, Ja.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              s(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, x.jsx)(Kh, {
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
      }).displayName = Bh;
      var Kh = V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, s = _h("SelectScrollButton", r), i = V.useRef(null), a = th(r), l = V.useCallback(() => {
          null !== i.current && (window.clearInterval(i.current), i.current = null)
        }, []);
        return V.useEffect(() => () => l(), [l]), (0, Ja.N)(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, x.jsx)(Pa.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, Ca.mK)(o.onPointerDown, () => {
            null === i.current && (i.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, Ca.mK)(o.onPointerMove, () => {
            s.onItemLeave?.(), null === i.current && (i.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, Ca.mK)(o.onPointerLeave, () => {
            l()
          })
        })
      });
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, x.jsx)(Pa.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Hh = "SelectArrow";
      V.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = sh(r), s = ah(Hh, r), i = _h(Hh, r);
        return s.open && "popper" === i.position ? (0, x.jsx)(xl, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Hh;
      var Wh = V.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = V.useRef(null),
          s = (0, ae.s)(n, o),
          i = bd(t);
        return V.useEffect(() => {
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
        }, [i, t]), (0, x.jsx)(Pa.sG.select, {
          ...r,
          style: {
            ...Sl,
            ...r.style
          },
          ref: s,
          defaultValue: t
        })
      });

      function Xh(e) {
        return "" === e || void 0 === e
      }

      function Gh(e) {
        const t = (0, Oa.c)(e),
          r = V.useRef(""),
          n = V.useRef(0),
          o = V.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          s = V.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return V.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s]
      }

      function Uh(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let s = (i = e, a = Math.max(o, 0), i.map((e, t) => i[(a + t) % i.length]));
        var i, a;
        1 === n.length && (s = s.filter(e => e !== r));
        const l = s.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      Wh.displayName = "SelectBubbleInput";
      var Zh = ch,
        $h = fh,
        Qh = hh,
        Yh = vh,
        Jh = mh,
        ev = gh,
        tv = Eh,
        rv = Mh,
        nv = Vh;

      function ov(e) {
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

      function sv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function iv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sv(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ov(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sv(Object(r)).forEach(function(t) {
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
      var lv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = iv(iv({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) lv(d, n, e.defaultVariants) && (r += " " + c);
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
        },
        cv = dv({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        uv = dv({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        fv = dv({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pv = dv({
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
        hv = dv({
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
        vv = dv({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const mv = (0, V.createContext)(null);

      function yv() {
        const e = (0, V.useContext)(mv);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const gv = (0, V.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: s,
          onValueChange: i,
          name: a,
          value: l,
          defaultOpen: d,
          onOpenChange: c,
          isOpen: u,
          size: f = "MD",
          status: p = "neutral",
          ...h
        }, v) => {
          const m = (0, V.useRef)(null),
            y = (0, G.UP)(m, v),
            g = (0, V.useId)(),
            b = (0, V.useId)(),
            w = (0, V.useId)(),
            _ = (0, V.useId)(),
            C = (0, V.useId)(),
            j = (0, V.useId)(),
            [P = !1, O] = (0, G.ic)({
              prop: u,
              defaultProp: d,
              onChange: c
            }),
            S = (0, H.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, x.jsx)(mv.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: j,
              hintId: _,
              popoverId: C,
              defaultValue: s,
              onValueChange: i,
              value: l,
              isOpen: P,
              setIsOpen: O,
              defaultOpen: d,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, x.jsx)(Zh, {
              required: r,
              disabled: n,
              open: P,
              onOpenChange: () => O(!o && !P),
              value: l,
              defaultValue: s,
              onValueChange: i,
              name: a,
              children: (0, x.jsx)("div", {
                ref: y,
                ...S,
                children: e
              })
            })
          })
        }),
        bv = (0, V.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: s
          } = yv(), i = (0, H.v6)({
            id: s,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: cv({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, x.jsx)(ev, {
            ...i,
            ref: o,
            children: (0, x.jsx)(tv, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        wv = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, x.jsxs)(Gp, {
            ...o,
            ref: n,
            children: [(0, x.jsx)(tv, {
              asChild: !0,
              children: (0, x.jsx)(Up, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                children: e
              })
            }), (0, x.jsx)(Zp, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, x.jsx)($p, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        _v = (0, V.forwardRef)(({
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
            isDisabled: d,
            labelId: c,
            hintId: u,
            triggerId: f,
            popoverId: p,
            descriptionId: h,
            isOpen: v,
            value: m,
            size: y
          } = yv(), {
            isPressed: g,
            pressProps: b
          } = $f({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, H.v6)({
            id: f,
            className: hv({
              size: y,
              isReadOnly: !!a,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!d
            }),
            "aria-labelledby": (0, H.VW)(r, c, u),
            "aria-describedby": (0, H.VW)(n, h),
            "aria-activedescendant": m,
            "aria-controls": p,
            "aria-invalid": "invalid" === l,
            "data-state": v ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, H.cJ)(b, "onKeyDown"), s), _ = o ? U.DX : $h;
          return (0, x.jsx)(_, {
            ...w,
            ref: i,
            children: e
          })
        }),
        xv = (0, V.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: s
          } = yv(), i = (0, H.v6)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), a = t ? U.DX : "span";
          return (0, x.jsx)(a, {
            ...i,
            ref: o,
            children: (0, x.jsx)(Qh, {
              placeholder: e,
              "aria-label": s
            })
          })
        }),
        Cv = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: s,
            isOpen: i
          } = yv(), a = i ? Ee.ChevronUp : Ee.ChevronDown, l = (0, H.v6)({
            asChild: !0,
            className: vv({
              isDisabled: s || o
            }),
            "data-testid": t
          }, r);
          return (0, x.jsx)(Yh, {
            ...l,
            ref: n,
            children: e || (0, x.jsx)(a, {
              size: "LG",
              label: ""
            })
          })
        }),
        jv = (0, V.forwardRef)(({
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
            labelId: d,
            triggerId: c
          } = yv(), u = a && !o, f = (0, H.v6)({
            id: s.id || d,
            htmlFor: c,
            "data-testid": e,
            className: pv({
              showAsterisk: u,
              isDisabled: l
            })
          }, s), p = t ? U.DX : "label";
          return (0, x.jsx)(U.s6, {
            enabled: n,
            children: (0, x.jsx)(p, {
              ...f,
              ref: i,
              children: r
            })
          })
        }),
        Pv = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: i
          } = yv(), a = (0, H.v6)({
            className: uv({
              isDisabled: s
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? U.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Ov = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: i
          } = yv(), a = (0, H.v6)({
            className: fv({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), l = t ? U.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Sv = (0, V.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, s) => {
          const i = (0, V.useRef)(null),
            a = (0, G.UP)(i, s),
            l = (0, H.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, x.jsx)(rv, {
            ref: a,
            ...l,
            children: e
          })
        }),
        kv = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, x.jsx)(nv, {
            ref: n,
            asChild: !0,
            children: (0, x.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        Ev = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, x.jsx)(Yh, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        Rv = Jh,
        Dv = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: i
          } = yv(), a = (0, H.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: s,
            status: i
          }, n), l = r ? U.DX : up;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Tv = fp,
        Nv = pp,
        Iv = new Set(["id"]),
        Lv = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        zv = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Mv = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        Av = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        Vv = /^(data-.*)$/;

      function Fv(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          global: o,
          events: s = o,
          propNames: i
        } = t, a = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (Iv.has(t) || r && Lv.has(t) || n && zv.has(t) || o && Mv.has(t) || s && (Av.has(t) || t.endsWith("Capture") && Av.has(t.slice(0, -7))) || (null == i ? void 0 : i.has(t)) || Vv.test(t)) && (a[t] = e[t]);
        return a
      }

      function qv(e, t, r) {
        let n = If(() => {
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
      let Bv = null,
        Kv = "keyboard";
      const Hv = new Set;
      let Wv = new Map,
        Xv = !1,
        Gv = !1;

      function Uv(e, t) {
        for (let r of Hv) r(e, t)
      }

      function Zv(e) {
        Xv = !0, !qf.isOpening && function(e) {
          return !(e.metaKey || !Hu() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (Bv = "keyboard", Kv = "keyboard", Uv("keyboard", e))
      }

      function $v(e) {
        Bv = "pointer", Kv = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (Xv = !0, Uv("pointer", e))
      }

      function Qv(e) {
        !qf.isOpening && Hf(e) && (Xv = !0, Bv = "virtual", Kv = "virtual")
      }

      function Yv(e) {
        e.target !== window && e.target !== document && !Fu && e.isTrusted && (Xv || Gv || (Bv = "virtual", Kv = "virtual", Uv("virtual", e)), Xv = !1, Gv = !1)
      }

      function Jv() {
        Fu || (Xv = !1, Gv = !0)
      }

      function em(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || Wv.get(Pu(e))) return;
        const t = Pu(e),
          r = ju(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Xv = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", Zv, !0), r.addEventListener("keyup", Zv, !0), r.addEventListener("click", Qv, !0), t.addEventListener("focus", Yv, !0), t.addEventListener("blur", Jv, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", $v, !0), r.addEventListener("pointermove", $v, !0), r.addEventListener("pointerup", $v, !0)), t.addEventListener("beforeunload", () => {
          tm(e)
        }, {
          once: !0
        }), Wv.set(t, {
          focus: n
        })
      }
      const tm = (e, t) => {
        const r = Pu(e),
          n = ju(e);
        t && n.removeEventListener("DOMContentLoaded", t), Wv.has(r) && (r.HTMLElement.prototype.focus = Wv.get(r).focus, n.removeEventListener("keydown", Zv, !0), n.removeEventListener("keyup", Zv, !0), n.removeEventListener("click", Qv, !0), r.removeEventListener("focus", Yv, !0), r.removeEventListener("blur", Jv, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", $v, !0), n.removeEventListener("pointermove", $v, !0), n.removeEventListener("pointerup", $v, !0)), Wv.delete(r))
      };

      function rm(e) {
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
        const t = ju(e);
        let r;
        "loading" !== t.readyState ? em(e) : (r = () => {
          em(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let nm = V.createContext(null);

      function om(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: n,
            onFocusChange: o
          } = e;
          const s = (0, V.useCallback)(e => {
              if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
            }, [n, o]),
            i = Vu(s),
            a = (0, V.useCallback)(e => {
              const t = ju(e.target),
                n = t ? Mf(t) : Mf();
              e.target === e.currentTarget && n === Af(e.nativeEvent) && (r && r(e), o && o(!0), i(e))
            }, [o, r, i]);
          return {
            focusProps: {
              onFocus: !t && (r || o || n) ? a : void 0,
              onBlur: t || !n && !o ? void 0 : s
            }
          }
        }(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: rm(e.onKeyDown),
              onKeyUp: rm(e.onKeyUp)
            }
          }
        }(e), o = Ef(r, n), s = function(e) {
          let t = (0, V.useContext)(nm) || {};
          Rf(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), i = e.isDisabled ? {} : s, a = (0, V.useRef)(e.autoFocus);
        (0, V.useEffect)(() => {
          a.current && t.current && function(e) {
            const t = ju(e);
            if ("virtual" === Bv) {
              let r = Mf(t);
              tf(() => {
                const n = Mf(t);
                n !== r && n !== t.body || !e.isConnected || Lu(e)
              })
            } else Lu(e)
          }(t.current), a.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Ef({
            ...o,
            tabIndex: l
          }, i)
        }
      }

      function sm(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: s,
          name: i,
          form: a,
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
        } = $f({
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
        } = $f({
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
          focusableProps: C
        } = om(e, r), j = Ef(b, C), P = Fv(e, {
          labelable: !0
        });
        return qv(r, t.defaultSelected, t.setSelected), {
          labelProps: Ef(_, {
            onClick: e => e.preventDefault()
          }),
          inputProps: Ef(P, {
            "aria-invalid": f || "invalid" === u || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: n,
            ...null == s ? {} : {
              value: s
            },
            name: i,
            form: a,
            type: "checkbox",
            ...j
          }),
          isSelected: t.isSelected,
          isPressed: w || x,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === u
        }
      }
      var im;
      const am = "undefined" != typeof document ? null !== (im = V.useInsertionEffect) && void 0 !== im ? im : V.useLayoutEffect : () => {};

      function lm(e, t, r) {
        let [n, o] = (0, V.useState)(e || t), s = (0, V.useRef)(n), i = (0, V.useRef)(void 0 !== e), a = void 0 !== e;
        (0, V.useEffect)(() => {
          i.current, i.current = a
        }, [a]);
        let l = a ? e : n;
        am(() => {
          s.current = l
        });
        let [, d] = (0, V.useReducer)(() => ({}), {}), c = (0, V.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(s.current) : e;
          Object.is(s.current, n) || (s.current = n, o(n), d(), null == r || r(n, ...t))
        }, [r]);
        return [l, c]
      }

      function dm(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = lm(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, V.useState)(r);
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

      function cm(e) {
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

      function um(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function fm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? um(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = cm(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : um(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function pm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fm(fm({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) hm(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pm(e.variantClassNames, e => pm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        mm = vm({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ym = vm({
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
        gm = vm({
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
        bm = vm({
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
        wm = vm({
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
      const _m = (0, V.createContext)(null);

      function xm() {
        const e = (0, V.useContext)(_m);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Cm = (0, V.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: s = !1,
          isReadOnly: i = !1,
          ...a
        }, l) => {
          const d = (0, H.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, a),
            c = n ? U.DX : "div",
            u = (0, V.useId)(),
            f = (0, V.useId)(),
            p = (0, V.useId)();
          return (0, x.jsx)(_m.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: f,
              inputId: p,
              isDisabled: s,
              isReadOnly: i,
              ...a
            },
            children: (0, x.jsx)(c, {
              ...d,
              ref: l,
              children: o
            })
          })
        }),
        jm = (0, V.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: s,
          isSelected: i,
          defaultSelected: a,
          onSelectedChange: l,
          name: d,
          value: c,
          ...u
        }, f) => {
          const p = (0, V.useRef)(null),
            h = (0, G.UP)(p, f),
            {
              size: v,
              appearance: m,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: _
            } = xm(),
            C = dm({
              isDisabled: w,
              isReadOnly: _,
              isSelected: i,
              defaultSelected: a,
              onChange: l
            }),
            {
              inputProps: j
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: s,
                isPressed: i,
                isDisabled: a,
                isReadOnly: l
              } = sm(e, t, r);
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
              "aria-labelledby": (0, H.VW)(n, g),
              "aria-describedby": (0, H.VW)(o, b),
              name: d,
              value: c,
              isDisabled: w,
              isReadOnly: _
            }, C, p),
            P = (0, H.v6)({
              className: wm({
                appearance: m
              }),
              "data-state": C.isSelected ? "selected" : "unselected",
              "data-disabled": w || _,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || _ || C.toggle()
              }
            }, u);
          return (0, x.jsxs)("div", {
            ...P,
            children: [(0, x.jsx)(U.s6, {
              children: (0, x.jsx)("input", {
                ...j,
                ref: h
              })
            }), (0, x.jsx)("div", {
              className: bm({
                size: v
              }),
              "aria-hidden": "true",
              children: (0, x.jsx)("div", {
                className: ym({
                  size: v,
                  isSelected: C.isSelected
                })
              })
            })]
          })
        }),
        Pm = (0, V.forwardRef)(({
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
            size: d
          } = xm(), c = (0, H.v6)({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: gm({
              isDisabled: i,
              size: d
            })
          }, o), u = t ? U.DX : "label";
          return (0, x.jsx)(U.s6, {
            enabled: n,
            children: (0, x.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Om = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: i
          } = xm(), a = n.id || i, l = (0, H.v6)({
            className: mm({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? U.DX : "div";
          return (0, x.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Sm = {
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
        km = {
          ...Sm,
          customError: !0,
          valid: !1
        },
        Em = {
          isInvalid: !1,
          validationDetails: Sm,
          validationErrors: []
        },
        Rm = (0, V.createContext)({}),
        Dm = "__formValidationState" + Date.now();

      function Tm(e) {
        if (e[Dm]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: s
          } = e[Dm];
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
              validationDetails: km
            } : null,
            d = (0, V.useMemo)(() => {
              if (!i || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return Nm(r)
                }
                return []
              }(i, o);
              return Im(e)
            }, [i, o]);
          (null == s ? void 0 : s.validationDetails.valid) && (s = void 0);
          let c = (0, V.useContext)(Rm),
            u = (0, V.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => Nm(c[e])) : Nm(c[n]) : [], [c, n]),
            [f, p] = (0, V.useState)(c),
            [h, v] = (0, V.useState)(!1);
          c !== f && (p(c), v(!1));
          let m = (0, V.useMemo)(() => Im(h ? [] : u), [h, u]),
            y = (0, V.useRef)(Em),
            [g, b] = (0, V.useState)(Em),
            w = (0, V.useRef)(Em),
            [_, x] = (0, V.useState)(!1);
          return (0, V.useEffect)(() => {
            if (!_) return;
            x(!1);
            let e = d || s || y.current;
            Lm(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: l || m || d || s || Em,
            displayValidation: "native" === a ? l || m || g : l || m || d || s || g,
            updateValidation(e) {
              "aria" !== a || Lm(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = Em;
              Lm(e, w.current) || (w.current = e, b(e)), "native" === a && x(!1), v(!0)
            },
            commitValidation() {
              "native" === a && x(!0), v(!0)
            }
          }
        }(e)
      }

      function Nm(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Im(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: km
        } : null
      }

      function Lm(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }

      function zm(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        Cu(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: Mm(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let s = (0, V.useRef)(!1),
          i = If(() => {
            s.current || t.resetValidation()
          }),
          a = If(e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let s = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var i, a;
            !e.defaultPrevented && r && s && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!r.validity.valid) return r
              }
              return null
            }(s) === r.current && (o ? o() : null === (i = r.current) || void 0 === i || i.focus(), Bv = a = "keyboard", Kv = a, Uv(a, null)), e.preventDefault()
          }),
          l = If(() => {
            t.commitValidation()
          });
        (0, V.useEffect)(() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form,
            n = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            s.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort, null == n || n.call(t), s.current = !1
          }), e.addEventListener("invalid", a), e.addEventListener("change", l), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", i), t && (t.reset = n)
          }
        }, [r, n])
      }

      function Mm(e) {
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
      const Am = ({
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
        Vm = ({
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
        Fm = ({
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
        qm = ({
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
        Bm = ({
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
        Km = ({
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

      function Hm(e) {
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

      function Xm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Wm(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Hm(o)) in n ? Object.defineProperty(n, o, {
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

      function Gm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Um = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Zm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Xm(Xm({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Um(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gm(e.variantClassNames, e => Gm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        $m = Zm({
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
        Qm = Zm({
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
        Ym = Zm({
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
        Jm = Zm({
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
      const ey = (0, V.createContext)(null);

      function ty() {
        const e = (0, V.useContext)(ey);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const ry = (0, V.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...s
        }, i) => {
          const a = (0, H.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, H.cJ)(s, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? U.DX : "div",
            d = (0, V.useId)(),
            c = (0, V.useId)(),
            u = (0, V.useId)();
          return (0, x.jsx)(ey.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: c,
              inputId: u,
              ...s
            },
            children: (0, x.jsx)(l, {
              ...a,
              ref: i,
              children: o
            })
          })
        }),
        ny = (0, V.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: s,
          onClick: i,
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
          } = ty(), _ = (0, V.useRef)(null), C = u.id || b, {
            isPressed: j,
            pressProps: P
          } = $f({
            ref: _
          }), {
            setSelected: O,
            toggle: S,
            ...k
          } = dm({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: E,
            isSelected: R,
            isDisabled: D,
            isReadOnly: T
          } = function(e, t, r) {
            let n = Tm({
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
                isSelected: d,
                isPressed: c,
                isDisabled: u,
                isReadOnly: f
              } = sm({
                ...e,
                isInvalid: o
              }, t, r);
            zm(e, n, r);
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
            } = $f({
              isDisabled: u || f,
              onPress() {
                let {
                  [Dm]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: Ef(a, m, (0, V.useMemo)(() => ({
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
              validationErrors: s,
              validationDetails: i
            }
          }({
            "aria-label": "",
            id: C,
            name: o,
            ...w
          }, {
            ...k,
            toggle: S,
            setSelected: w.isReadOnly ? () => !1 : O
          }, _), N = (0, H.v6)({
            className: Qm({
              size: p
            }),
            onClick: e => {
              s?.(e) ?? i?.(e), e.defaultPrevented || D || T || S()
            }
          }, P, u), I = (0, H.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, H.VW)(c, g),
            "aria-describedby": (0, H.VW)(l, y),
            "aria-errormessage": (0, H.VW)(d, w.isInvalid ? y : void 0),
            "aria-required": m,
            required: m
          }, E), L = v ? a[`Dash${p}`] : a[`Check${p}`];
          return (0, x.jsxs)("div", {
            ...N,
            children: [(0, x.jsx)(U.s6, {
              children: (0, x.jsx)("input", {
                ...I,
                ref: f
              })
            }), (0, x.jsx)("div", {
              className: $m({
                size: p,
                appearance: h
              }),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : R ? "checked" : "unchecked",
              "data-disabled": D || T,
              "data-testid": e,
              "data-pressed": j,
              children: (0, x.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (R || v) && (0, x.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        oy = (0, V.forwardRef)(({
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
            inputId: d,
            isRequired: c
          } = ty(), u = s.id || l, f = c && !o, p = (0, H.v6)({
            className: Jm({
              size: a,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: s.htmlFor || d
          }, s), h = t ? U.DX : "label";
          return (0, x.jsx)(U.s6, {
            enabled: n,
            children: (0, x.jsx)(h, {
              ...p,
              ref: i,
              children: e
            })
          })
        }),
        sy = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: i
          } = ty(), a = n.id || i, l = (0, H.v6)({
            className: Ym({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? U.DX : "div";
          return (0, x.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        }),
        iy = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = ty(), i = n.id || s, a = (0, H.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: i
          }, n), l = t ? U.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });

      function ay(e) {
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

      function ly(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function dy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ly(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ay(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ly(Object(r)).forEach(function(t) {
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
        fy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = dy(dy({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) uy(d, n, e.defaultVariants) && (r += " " + c);
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
        py = fy({
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
        hy = fy({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vy = fy({
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
        my = fy({
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
      const yy = (0, V.createContext)(null);

      function gy() {
        const e = (0, V.useContext)(yy);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const by = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: i = "neutral",
          ...a
        }, l) => {
          const d = (0, H.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, a),
            c = e ? U.DX : "div",
            u = (0, V.useId)(),
            f = (0, V.useId)(),
            p = (0, V.useId)(),
            h = (0, V.useId)();
          return (0, x.jsx)(yy.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: h,
              isDisabled: n,
              isReadOnly: o,
              isRequired: s,
              status: i,
              ...a
            },
            children: (0, x.jsx)(c, {
              ref: l,
              ...d,
              children: t
            })
          })
        }),
        wy = (0, V.forwardRef)(({
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
            isDisabled: d,
            isRequired: c
          } = gy(), u = (0, H.v6)({
            className: vy({
              isDisabled: d,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: a,
            htmlFor: l
          }, s), f = t ? U.DX : "label";
          return (0, x.jsx)(U.s6, {
            enabled: n,
            children: (0, x.jsx)(f, {
              ...u,
              ref: i,
              children: e
            })
          })
        }),
        _y = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: s,
          placeholder: i = " ",
          "aria-labelledby": a,
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
          } = gy(), b = (0, V.useRef)(null), w = (0, G.UP)(b, c), _ = (0, H.v6)({
            className: my({
              isInvalid: "invalid" === g,
              isDisabled: v,
              isReadOnly: y,
              isSuccess: "success" === g
            }),
            name: s,
            id: d.id || p,
            rows: n,
            defaultValue: o,
            disabled: v,
            required: m,
            readOnly: y,
            placeholder: i,
            "aria-labelledby": (0, H.VW)(d.id, f, h, a),
            "aria-describedby": (0, H.VW)(u, l),
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
          }, d), C = e ? U.DX : "textarea";
          return (0, x.jsx)(C, {
            ref: w,
            ..._,
            children: t
          })
        }),
        xy = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: i
          } = gy(), a = (0, H.v6)({
            className: py({
              isDisabled: s
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? U.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Cy = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: i
          } = gy(), a = (0, H.v6)({
            className: hy({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), l = t ? U.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        jy = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: i
          } = gy(), a = (0, H.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: s,
            status: i
          }, n), l = r ? U.DX : up;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Py = fp,
        Oy = pp;
      let Sy = Math.round(1e10 * Math.random()),
        ky = 0;
      const Ey = new WeakMap;
      class Ry {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!zf(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return zf(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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

      function Dy(e, t) {
        return !!e && !!t && t.some(t => zf(t, e))
      }

      function Ty(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? Nu : Tu,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          s = ju(o),
          i = function(e, t, r, n) {
            return (0, Lf.Nf)() ? new Ry(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(s, e || s, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if (zf(null == t ? void 0 : t.from, e)) return NodeFilter.FILTER_REJECT;
              if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    let t = [];
                    if (e.form) {
                      var r, n;
                      let o = null === (n = e.form) || void 0 === n || null === (r = n.elements) || void 0 === r ? void 0 : r.namedItem(e.name);
                      t = [...null != o ? o : []]
                    } else t = [...ju(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                    return !!t && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === i.currentNode.tagName && "radio" === i.currentNode.type && i.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !Dy(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (i.currentNode = t.from), i
      }
      class Ny {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new Iy({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Dy(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Ny;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new Iy({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class Iy {
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

      function Ly(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = jf(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function zy(e) {
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
          t = jf(t);
          let i = jf(),
            a = {};
          return r && (n = n ? `${i} ${n}` : i, a = {
            id: i,
            htmlFor: "label" === s ? t : void 0
          }), {
            labelProps: a,
            fieldProps: Ly({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), a = Of([Boolean(t), Boolean(r), n, o]), l = Of([Boolean(t), Boolean(r), n, o]);
        return i = Ef(i, {
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
      new Ny;
      const My = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Ay = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Vy(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return My.has(t.script)
        }
        let t = e.split("-")[0];
        return Ay.has(t)
      }
      const Fy = Symbol.for("react-aria.i18n.locale");

      function qy() {
        let e = "undefined" != typeof window && window[Fy] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Vy(e) ? "rtl" : "ltr"
        }
      }
      let By = qy(),
        Ky = new Set;

      function Hy() {
        By = qy();
        for (let e of Ky) e(By)
      }
      const Wy = V.createContext(null);

      function Xy() {
        let e = function() {
          let e = wf(),
            [t, r] = (0, V.useState)(By);
          return (0, V.useEffect)(() => (0 === Ky.size && window.addEventListener("languagechange", Hy), Ky.add(r), () => {
            Ky.delete(r), 0 === Ky.size && window.removeEventListener("languagechange", Hy)
          }), []), e ? {
            locale: "undefined" != typeof window && window[Fy] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, V.useContext)(Wy) || e
      }

      function Gy(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: s,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: d
        } = Xy(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: v,
          errorMessageProps: m
        } = zy({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), y = Fv(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, s = (0, V.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: i,
            removeAllGlobalListeners: a
          } = Df(), l = (0, V.useCallback)(e => {
            zf(e.currentTarget, e.target) && s.current.isFocusWithin && !zf(e.currentTarget, e.relatedTarget) && (s.current.isFocusWithin = !1, a(), r && r(e), o && o(!1))
          }, [r, o, s, a]), d = Vu(l), c = (0, V.useCallback)(e => {
            if (!zf(e.currentTarget, e.target)) return;
            const t = ju(e.target),
              r = Mf(t);
            if (!s.current.isFocusWithin && r === Af(e.nativeEvent)) {
              n && n(e), o && o(!0), s.current.isFocusWithin = !0, d(e);
              let r = e.currentTarget;
              i(t, "focus", e => {
                if (s.current.isFocusWithin && !zf(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Au(n, r);
                  let o = Mu(n);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [n, o, d, i, l]);
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
        }), b = jf(r);
        return Ey.set(t, {
          name: b,
          form: n,
          descriptionId: v.id,
          errorMessageId: m.id,
          validationBehavior: l
        }), {
          radioGroupProps: Ef(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === d && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === d && "vertical" !== a ? "next" : "prev";
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
              let n, o = Ty(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof Pu(e).HTMLInputElement && "radio" === e.type
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": s || void 0,
            "aria-disabled": i || void 0,
            "aria-orientation": a,
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

      function Uy(e) {
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

      function Zy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zy(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Uy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Qy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Yy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $y($y({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Yy(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qy(e.variantClassNames, e => Qy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        eg = Jy({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        tg = Jy({
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
      const rg = (0, V.createContext)(null);

      function ng() {
        const e = (0, V.useContext)(rg);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const og = (0, V.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: s,
          "aria-labelledby": i,
          "aria-describedby": a,
          "aria-errormessage": l,
          status: d = "neutral",
          ...c
        }, u) => {
          const f = (0, V.useRef)(null),
            p = (0, G.UP)(f, u),
            h = (0, V.useId)(),
            v = (0, V.useId)(),
            m = (0, V.useId)(),
            y = function(e) {
              let t = (0, V.useMemo)(() => e.name || `radio-group-${Sy}-${++ky}`, [e.name]);
              var r;
              let [n, o] = lm(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [s] = (0, V.useState)(n), [i, a] = (0, V.useState)(null), l = Tm({
                ...e,
                value: n
              }), d = l.displayValidation.isInvalid;
              var c;
              return {
                ...l,
                name: t,
                selectedValue: n,
                defaultSelectedValue: void 0 !== e.value ? s : null !== (c = e.defaultValue) && void 0 !== c ? c : null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
                },
                lastFocusedValue: i,
                setLastFocusedValue: a,
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
            } = Gy({
              ...c,
              orientation: r,
              "aria-labelledby": (0, H.VW)(h, i),
              "aria-describedby": (0, H.VW)(v, m, a),
              "aria-errormessage": (0, H.VW)(m, l)
            }, y),
            b = (0, H.v6)({
              className: "foundry_njguqn0"
            }, g, (0, H.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = s ? U.DX : "div";
          return (0, x.jsx)(rg.Provider, {
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
        sg = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: s,
            orientation: i
          } = ng(), a = (0, H.v6)({
            "data-testid": e,
            className: tg({
              size: s,
              orientation: i
            })
          }, n), l = t ? U.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: r
          })
        }),
        ig = (0, V.forwardRef)(({
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
          } = ng(), d = a && !o, c = (0, H.v6)({
            id: s.id || l,
            "data-testid": e,
            className: eg({
              showAsterisk: d
            })
          }, s), u = t ? U.DX : "div";
          return (0, x.jsx)(U.s6, {
            enabled: n,
            children: (0, x.jsx)(u, {
              ...c,
              ref: i,
              children: r
            })
          })
        }),
        ag = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = ng(), i = (0, H.v6)({
            id: s,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), a = t ? U.DX : "div";
          return (0, x.jsx)(a, {
            ...i,
            ref: o,
            children: r
          })
        }),
        lg = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: s,
            status: i
          } = ng(), a = (0, H.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: s,
            status: i
          }, n), l = r ? U.DX : up;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        dg = fp,
        cg = pp;
      var ug = Jy({
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
        fg = Jy({
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
        pg = Jy({
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
        hg = Jy({
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
      const vg = ({
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
        mg = ({
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
        yg = ({
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
        gg = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            i = e ? U.DX : "label";
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        bg = (0, V.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, V.useRef)(null),
            s = (0, G.UP)(o, n),
            i = (0, V.useId)(),
            {
              state: a,
              appearance: l,
              size: d,
              isReadOnly: u,
              isRequired: f
            } = ng(),
            {
              isPressed: p,
              pressProps: h
            } = $f({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: v
            } = function(e, t, r) {
              let {
                value: n,
                children: o,
                "aria-label": s,
                "aria-labelledby": i,
                onPressStart: a,
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
                } = $f({
                  onPressStart: a,
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
                } = $f({
                  onPressStart: a,
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
                } = om(Ef(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                w = Ef(v, b),
                _ = Fv(e, {
                  labelable: !0
                }),
                x = -1;
              null != t.selectedValue ? t.selectedValue === n && (x = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (x = 0), p && (x = void 0);
              let {
                name: C,
                form: j,
                descriptionId: P,
                errorMessageId: O,
                validationBehavior: S
              } = Ey.get(t);
              return qv(r, t.defaultSelectedValue, t.setSelectedValue), zm({
                validationBehavior: S
              }, t, r), {
                labelProps: Ef(y, (0, V.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: Ef(_, {
                  ...w,
                  type: "radio",
                  name: C,
                  form: j,
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
                isPressed: m || g
              }
            }({
              ...r,
              id: i,
              value: t,
              "aria-label": ""
            }, a, o),
            m = v.checked,
            y = v.disabled || a?.isReadOnly,
            g = (0, H.v6)(v, {
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
            className: hg({
              size: d
            }),
            children: [(0, x.jsx)(U.s6, {
              children: (0, x.jsx)("input", {
                type: "radio",
                ...g,
                ref: s,
                className: "foundry_1pfduet1"
              })
            }), (0, x.jsx)("div", {
              className: pg({
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
        wg = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            size: i,
            state: a
          } = ng(), l = (0, V.useId)(), d = (0, H.v6)({
            id: l,
            "data-testid": e,
            className: fg({
              size: i,
              isDisabled: a?.isDisabled
            })
          }, o), c = t ? U.DX : "div";
          return (0, x.jsx)(U.s6, {
            enabled: n,
            children: (0, x.jsx)(c, {
              ...d,
              ref: s,
              children: r
            })
          })
        }),
        _g = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = ng(), i = (0, H.v6)({
            "data-testid": e,
            className: ug({
              isDisabled: s
            })
          }, n), a = t ? U.DX : "span";
          return (0, x.jsx)(a, {
            ref: o,
            ...i,
            children: r
          })
        });

      function xg(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Cg(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return xg(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? xg(e, t) : void 0
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

      function jg(e, t, r) {
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

      function Pg(e) {
        return Pg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Pg(e)
      }

      function Og() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (Og = function() {
          return !!e
        })()
      }

      function Sg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sg(Object(r), !0).forEach(function(t) {
            jg(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Eg(e, t) {
        return Eg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Eg(e, t)
      }

      function Rg(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          s = t.separate,
          i = n,
          a = "",
          l = Cg(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var d, c = r.value,
              u = !Object.prototype.hasOwnProperty.call(o, c) && (null === (d = o[i[0]]) || void 0 === d ? void 0 : d.test(c));
            (s && c === i[0] || u) && (i = i.slice(1), a += c)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return a
      }

      function Dg(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          s = t.separate,
          i = t.showMask,
          a = 0,
          l = "",
          d = Cg(n);
        try {
          for (d.s(); !(r = d.n()).done;) {
            var c = r.value;
            if (!i && void 0 === e[a]) break;
            Object.prototype.hasOwnProperty.call(o, c) && void 0 !== e[a] ? l += e[a++] : l += c
          }
        } catch (e) {
          d.e(e)
        } finally {
          d.f()
        }
        if (s && !i) {
          for (var u = n.length - 1; u >= 0 && l[u] === n[u]; u--);
          l = l.slice(0, u + 1)
        }
        return l
      }

      function Tg(e, t) {
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

      function Ng(e) {
        return e.length > 0 ? jg({}, e, /./) : {}
      }

      function Ig(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, s = t.mask, i = t.replacement, a = t.separate, l = e.slice(n, o), d = s.slice(n, o), c = "", u = 0; u < d.length; u++) {
          var f = Object.prototype.hasOwnProperty.call(i, d[u]);
          f && void 0 !== l[u] && l[u] !== d[u] ? c += l[u] : f && a && (c += d[u])
        }
        return c
      }

      function Lg(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? Ng(n) : n,
          s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return Dg(Rg(e, {
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
      var zg = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Mg(e) {
        return zg.includes(e) ? "\\".concat(e) : e
      }

      function Ag(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Vg(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Fg(e, t, r) {
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

      function qg(e) {
        return qg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, qg(e)
      }

      function Bg() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (Bg = function() {
          return !!e
        })()
      }

      function Kg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Hg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Kg(Object(r), !0).forEach(function(t) {
            Fg(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Wg(e, t) {
        return Wg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Wg(e, t)
      }

      function Xg(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Xg = function(e) {
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
              if (Bg()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && Wg(o, r.prototype), o
            }(e, arguments, qg(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Wg(r, e)
        }, Xg(e)
      }
      var Gg, Ug = function(e) {
          function t(e) {
            var r;
            return Ag(this, t), (r = function(e, t, r) {
              return t = qg(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, Bg() ? Reflect.construct(t, r || [], qg(e).constructor) : t.apply(e, r))
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
            }), t && Wg(e, t)
          }(t, e), Vg(t)
        }(Xg(Error)),
        Zg = ["options"],
        $g = ["text", "email", "tel", "search", "url"],
        Qg = Vg(function e(t) {
          var r = t.init,
            n = t.tracking;
          Ag(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if ($g.includes(e.type)) {
              var s = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                i = s.initialValue,
                a = void 0 === i ? "" : i,
                l = s.controlled,
                d = void 0 !== l && l,
                c = r({
                  initialValue: e.value || a,
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
              Object.defineProperty(e, "value", Hg(Hg({}, m), {}, {
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
                    if (h.cachedId === h.id) throw new Ug("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var s = e.value,
                      i = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === i || null === a) throw new Ug("The selection attributes have not been initialized.");
                    var l, d = v.value;
                    if (void 0 === t.inputType && (v.selectionStart = 0, v.selectionEnd = d.length), i > v.selectionStart ? l = "insert" : i <= v.selectionStart && i < v.selectionEnd ? l = "deleteBackward" : i === v.selectionEnd && s.length < d.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && s.length > d.length) throw new Ug("Input type detection error.");
                    var c = "",
                      u = v.selectionStart,
                      f = v.selectionEnd;
                    if ("insert" === l) c = s.slice(v.selectionStart, i);
                    else {
                      var m = d.length - s.length;
                      u = i, f = i + m
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
                        selectionStart: i,
                        selectionEnd: a
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
                      }(g, Zg);
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
      Gg = Qg, Object.defineProperty(Gg.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Yg, Jg = ["track", "modify"];

      function eb(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? Ng(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var tb = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = Pg(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, Og() ? Reflect.construct(t, r || [], Pg(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = eb(r),
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
                l = eb(r),
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
                }(l, Jg),
                f = u.mask,
                p = u.replacement,
                h = u.showMask,
                v = u.separate,
                m = kg(kg({}, "insert" === t ? {
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
                y = null == d ? void 0 : d(m);
              if (!1 === y) throw new Ug("Custom tracking stop.");
              null === y ? s = "" : !0 !== y && void 0 !== y && (s = y);
              var g = null == c ? void 0 : c(m);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? Ng(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (v = g.separate);
              var b = Ig(n, kg({
                  end: i
                }, o)),
                w = Ig(n, kg({
                  start: a
                }, o)),
                _ = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                x = f.replace(_, "");
              if (b && (b = Rg(b, {
                  replacementChars: x,
                  replacement: p,
                  separate: v
                }), x = x.slice(b.length)), s && (s = Rg(s, {
                  replacementChars: x,
                  replacement: p,
                  separate: !1
                }), x = x.slice(s.length)), "insert" === t && "" === s) throw new Ug("The character does not match the key value of the `replacement` object.");
              if (v) {
                var C = f.slice(i, a).replace(_, ""),
                  j = C.length - s.length;
                j < 0 ? w = w.slice(-j) : j > 0 && (w = C.slice(-j) + w)
              }
              w && (w = Rg(w, {
                replacementChars: x,
                replacement: p,
                separate: v
              }));
              var P = Dg(b + s + w, {
                  mask: f,
                  replacement: p,
                  separate: v,
                  showMask: h
                }),
                O = function(e) {
                  var t, r, n, o = e.inputType,
                    s = e.value,
                    i = e.addedValue,
                    a = e.beforeChangeValue,
                    l = e.replacement,
                    d = e.separate,
                    c = Tg(s, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || d && "replacement" === t
                    }),
                    u = null === (t = c[a.length + i.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = c[a.length - 1]) || void 0 === r ? void 0 : r.index,
                    p = null === (n = c[a.length + i.length]) || void 0 === n ? void 0 : n.index;
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
                  separate: v
                });
              return {
                value: P,
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
            return Lg(e, eb(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Ng(n) : n;
              return Tg(Lg(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, eb(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Ng(n) : n,
                s = Ig(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return Rg(s, {
                replacementChars: r.replace(i, ""),
                replacement: o,
                separate: !1
              })
            }(e, eb(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? Ng(n) : n, s = "partial" === e || "partial-inexact" === e, i = "full" === e || "partial" === e, a = "", l = 0; l < r.length; l++) {
                var d = r[l];
                0 === l && (a = "^"), s && (a += "("), a += Object.prototype.hasOwnProperty.call(o, d) ? "".concat(i ? "(?!".concat(Mg(d), ")") : "", "(").concat(o[d].source, ")") : Mg(d), l === r.length - 1 && (s && (a += ")?".repeat(r.length)), a += "$")
              }
              return a
            }(e, eb(r))
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
            }), t && Eg(e, t)
          }(e, Qg),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function rb(e) {
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

      function nb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ob(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nb(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = rb(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Yg = tb, Object.defineProperty(Yg.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var ib = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ab = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ob(ob({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) ib(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sb(e.variantClassNames, e => sb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        lb = ab({
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
        db = ab({
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
        cb = ab({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ub = ab({
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
        fb = ab({
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
        pb = ab({
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
      const hb = (0, V.createContext)(null);

      function vb() {
        const e = (0, V.useContext)(hb);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const mb = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: i = "neutral",
          ...a
        }, l) => {
          const [d, c] = (0, V.useState)("text"), u = (0, V.useId)(), f = (0, V.useId)(), p = (0, V.useId)(), h = (0, H.v6)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, a), v = e ? U.DX : "div";
          return (0, x.jsx)(hb.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: s,
              status: i,
              labelId: u,
              inputId: f,
              descriptionId: p,
              type: d,
              setType: c,
              ...a
            },
            children: (0, x.jsx)(v, {
              ref: l,
              ...h,
              children: t
            })
          })
        }),
        yb = (0, V.forwardRef)(({
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
            inputId: d,
            labelId: c
          } = vb(), u = l && !o, f = (0, H.v6)({
            id: s.id || c,
            htmlFor: s.htmlFor || d,
            "data-testid": e,
            className: pb({
              showAsterisk: u,
              isDisabled: a
            })
          }, s), p = t ? U.DX : "label";
          return (0, x.jsx)(U.s6, {
            enabled: n,
            children: (0, x.jsx)(p, {
              ref: i,
              ...f,
              children: r
            })
          })
        }),
        gb = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = vb(), i = (0, H.v6)({
            "data-testid": e,
            className: cb({
              isDisabled: s
            })
          }, n), a = t ? U.DX : "span";
          return (0, x.jsx)(a, {
            ref: o,
            ...i,
            children: r
          })
        }),
        bb = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            isReadOnly: i,
            status: a
          } = vb(), l = (0, H.v6)({
            "data-testid": e,
            className: (0, ke.clsx)(lb({
              isDisabled: s,
              isReadOnly: i,
              isInvalid: "invalid" === a,
              isSuccess: "success" === a
            }), "foundry_8oytzo1")
          }, n), d = t ? U.DX : "div";
          return (0, x.jsx)(d, {
            ref: o,
            ...l,
            children: r
          })
        }),
        wb = (0, V.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: s,
          placeholder: i = " ",
          "aria-labelledby": a,
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
          } = vb();
          (0, V.useEffect)(() => b(d), []);
          const _ = "invalid" === v,
            C = (0, H.v6)({
              disabled: f,
              readOnly: p,
              required: h,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: i,
              "aria-labelledby": (0, H.VW)(m, a),
              "aria-describedby": (0, H.VW)(g, l),
              "data-testid": e,
              className: (0, ke.clsx)(fb({
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
            j = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                s = e.track,
                i = e.modify,
                a = (0, V.useRef)(null),
                l = (0, V.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: s,
                  modify: i
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = s, l.current.modify = i, (0, V.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(a, new tb(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: s
            }),
            P = (0, G.UP)(r && n ? j : null, u),
            O = t ? U.DX : "input";
          return (0, x.jsx)(O, {
            ref: P,
            ...C
          })
        }),
        _b = (0, V.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, s) => {
          const {
            isDisabled: i
          } = vb(), a = (0, H.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, ke.clsx)(ub({
              side: n,
              isDisabled: i
            }), "foundry_8oytzo0")
          }, o), l = t ? U.DX : Ee[e];
          return (0, x.jsx)(l, {
            ref: s,
            ...a
          })
        }),
        xb = (0, V.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = vb(), n = (0, H.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzow"
          }, e);
          return (0, x.jsx)($e, {
            ref: t,
            ...n
          })
        }),
        Cb = (0, V.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: s
          } = vb(), i = "password" === o, a = i ? e : t, l = (0, H.v6)({
            label: a,
            icon: i ? "Eye" : "EyeOff",
            onPress: () => {
              s(i ? "text" : "password")
            }
          }, r);
          return (0, x.jsxs)(fd, {
            children: [(0, x.jsx)(pd, {
              children: (0, x.jsx)(xb, {
                ref: n,
                ...l
              })
            }), (0, x.jsxs)(hd, {
              side: "bottom",
              align: "end",
              children: [a, (0, x.jsx)(vd, {})]
            })]
          })
        }),
        jb = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: i
          } = vb(), a = (0, H.v6)({
            className: db({
              isDisabled: s
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? U.DX : "div";
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Pb = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: i
          } = vb(), a = (0, H.v6)({
            className: "foundry_8oytzo12",
            "data-testid": t,
            descriptionId: s,
            status: i
          }, n), l = r ? U.DX : up;
          return (0, x.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Ob = fp,
        Sb = pp;

      function kb(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: s,
          onClick: i,
          isDisabled: a,
          ...l
        } = e, d = {};
        "a" !== r && (d = {
          role: "link",
          tabIndex: a ? void 0 : 0
        });
        let {
          focusableProps: c
        } = om(e, t), {
          pressProps: u,
          isPressed: f
        } = $f({
          onPress: n,
          onPressStart: o,
          onPressEnd: s,
          onClick: i,
          isDisabled: a,
          ref: t
        }), p = Fv(l, {
          labelable: !0
        }), h = Ef(c, u), v = Ff();
        return {
          isPressed: f,
          linkProps: Ef(p, Bf(e), {
            ...h,
            ...d,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = u.onClick) || void 0 === r || r.call(u, t), Kf(t, v, e.href, e.routerOptions)
            }
          })
        }
      }

      function Eb(e) {
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

      function Db(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rb(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Eb(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Tb(e, t) {
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
        Ib = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Db(Db({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Nb(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tb(e.variantClassNames, e => Tb(e, e => e.split(" ")[0]))
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
      const Lb = (0, V.forwardRef)(({
        children: e,
        ...t
      }, r) => {
        const n = Q(),
          o = "string" == typeof t.size ? t.size : t.size?.[n] ?? "LG",
          s = (0, H.v6)({
            className: Ib({
              size: o
            })
          }, t);
        return (0, x.jsx)($e, {
          appearance: "ghost",
          icon: "X",
          ...s,
          ref: r,
          children: e
        })
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

      function Mb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ab(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mb(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = zb(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mb(Object(r)).forEach(function(t) {
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
      var Fb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ab(Ab({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Fb(d, n, e.defaultVariants) && (r += " " + c);
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
        },
        Bb = qb({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Kb = qb({
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
        Hb = qb({
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
      const Wb = (0, V.createContext)(null);

      function Xb() {
        const e = (0, V.useContext)(Wb);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Gb = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, s) => {
          const i = e ? U.DX : "div",
            a = (0, H.v6)({
              className: Hb({
                status: r,
                background: n
              })
            }, o);
          return (0, x.jsx)(Wb.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, x.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...a
            })
          })
        }),
        Ub = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? U.DX : "div",
            s = (0, H.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Zb = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? U.DX : "div",
            s = (0, H.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        $b = {
          danger: Ee.CircleX,
          information: Ee.Info,
          success: Ee.CircleCheck,
          warning: Ee.TriangleAlert
        },
        Qb = (0, V.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Xb(), s = e ? U.DX : $b[o], i = (0, H.v6)({
            className: Kb({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, x.jsx)(s, {
            label: "",
            ref: n,
            ...i
          })
        }),
        Yb = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? U.DX : "div",
            s = (0, H.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Jb = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? U.DX : "div",
            s = (0, H.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        ew = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, V.useRef)(null),
            i = (0, G.UP)(s, o),
            a = e ? U.DX : "a",
            {
              linkProps: l,
              isPressed: d
            } = kb(n, s),
            c = (0, H.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, x.jsx)(a, {
            "data-pressed": d,
            "data-testid": r,
            ref: i,
            ...c,
            children: t
          })
        }),
        tw = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? U.DX : "div",
            i = (0, H.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, x.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        rw = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const s = e ? U.DX : "div";
          return (0, x.jsx)(s, {
            ref: o,
            "data-testid": t,
            className: (0, ke.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        nw = (0, V.forwardRef)((e, t) => {
          const {
            background: r
          } = Xb(), n = "none" !== r, o = (0, H.v6)({
            className: Bb({
              hasBackground: n
            })
          }, e);
          return (0, x.jsx)(Lb, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function ow(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function sw(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : ow(n) && ow(o) ? sw(n, o) : n === o
        }))
      }

      function iw(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function aw(e) {
        return "number" == typeof e
      }

      function lw(e) {
        return "string" == typeof e
      }

      function dw(e) {
        return "boolean" == typeof e
      }

      function cw(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function uw(e) {
        return Math.abs(e)
      }

      function fw(e) {
        return Math.sign(e)
      }

      function pw(e, t) {
        return uw(e - t)
      }

      function hw(e) {
        return bw(e).map(Number)
      }

      function vw(e) {
        return e[mw(e)]
      }

      function mw(e) {
        return Math.max(0, e.length - 1)
      }

      function yw(e, t) {
        return t === mw(e)
      }

      function gw(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function bw(e) {
        return Object.keys(e)
      }

      function ww(e, t) {
        return [e, t].reduce((e, t) => (bw(t).forEach(r => {
          const n = e[r],
            o = t[r],
            s = cw(n) && cw(o);
          e[r] = s ? ww(n, o) : o
        }), e), {})
      }

      function _w(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function xw() {
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

      function Cw(e = 0, t = 0) {
        const r = uw(e - t);

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

      function jw(e, t, r) {
        const {
          constrain: n
        } = Cw(0, e), o = e + 1;
        let s = i(t);

        function i(e) {
          return r ? uw((o + e) % o) : n(e)
        }

        function a() {
          return s
        }

        function l() {
          return jw(e, a(), r)
        }
        const d = {
          get: a,
          set: function(e) {
            return s = i(e), d
          },
          add: function(e) {
            return l().set(a() + e)
          },
          clone: l
        };
        return d
      }

      function Pw(e, t, r, n, o, s, i, a, l, d, c, u, f, p, h, v, m, y, g) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, C = xw(), j = xw(), P = Cw(50, 225).constrain(p.measure(20)), O = {
          mouse: 300,
          touch: 400
        }, S = {
          mouse: 500,
          touch: 600
        }, k = h ? 43 : 25;
        let E = !1,
          R = 0,
          D = 0,
          T = !1,
          N = !1,
          I = !1,
          L = !1;

        function z(e) {
          if (!_w(e, n) && e.touches.length >= 2) return M(e);
          const t = s.readPoint(e),
            r = s.readPoint(e, b),
            i = pw(t, R),
            l = pw(r, D);
          if (!N && !L) {
            if (!e.cancelable) return M(e);
            if (N = i > l, !N) return M(e)
          }
          const c = s.pointerMove(e);
          i > v && (I = !0), d.useFriction(.3).useDuration(.75), a.start(), o.add(w(c)), e.preventDefault()
        }

        function M(e) {
          const t = c.byDistance(0, !1).index !== u.get(),
            r = s.pointerUp(e) * (h ? S : O)[L ? "mouse" : "touch"],
            n = function(e, t) {
              const r = u.add(-1 * fw(e)),
                n = c.byDistance(e, !h).distance;
              return h || uw(e) < P ? n : m && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(w(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (uw(e) <= uw(t)) return 0;
              const r = pw(uw(e), uw(t));
              return uw(r / e)
            }(r, n),
            i = k - 10 * o,
            a = y + o / 50;
          N = !1, T = !1, j.clear(), d.useDuration(i).useFriction(a), l.distance(n, !h), L = !1, f.emit("pointerUp")
        }

        function A(e) {
          I && (e.stopPropagation(), e.preventDefault(), I = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function a(a) {
              (dw(g) || g(e, a)) && function(e) {
                const a = _w(e, n);
                L = a, I = h && a && !e.buttons && E, E = pw(o.get(), i.get()) >= 2, a && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (T = !0, s.pointerDown(e), d.useFriction(0).useDuration(0), o.set(i), function() {
                  const e = L ? r : t;
                  j.add(e, "touchmove", z, x).add(e, "touchend", M).add(e, "mousemove", z, x).add(e, "mouseup", M)
                }(), R = s.readPoint(e), D = s.readPoint(e, b), f.emit("pointerDown"))
              }(a)
            }
            const l = t;
            C.add(l, "dragstart", e => e.preventDefault(), x).add(l, "touchmove", () => {}, x).add(l, "touchend", () => {}).add(l, "touchstart", a).add(l, "mousedown", a).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", A, !0)
          },
          destroy: function() {
            C.clear(), j.clear()
          },
          pointerDown: function() {
            return T
          }
        }
      }

      function Ow(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function s(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (_w(r, t) ? r : r.touches[0])[o]
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
            return i && !a && uw(l) > .1 ? l : 0
          },
          readPoint: s
        }
      }

      function Sw(e, t, r, n, o, s, i) {
        const a = [e].concat(n);
        let l, d, c = [],
          u = !1;

        function f(e) {
          return o.measureSize(i.measure(e))
        }
        return {
          init: function(o) {
            s && (d = f(e), c = n.map(f), l = new ResizeObserver(r => {
              (dw(s) || s(o, r)) && function(r) {
                for (const s of r) {
                  if (u) return;
                  const r = s.target === e,
                    i = n.indexOf(s.target),
                    a = r ? d : c[i];
                  if (uw(f(r ? e : n[i]) - a) >= .5) {
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
            u = !0, l && l.disconnect()
          }
        }
      }

      function kw(e, t, r, n, o) {
        const s = o.measure(10),
          i = o.measure(50),
          a = Cw(.1, .99);
        let l = !1;

        function d() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: d,
          constrain: function(o) {
            if (!d()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = uw(e[l] - t.get()),
              u = r.get() - t.get(),
              f = a.constrain(c / i);
            r.subtract(u * f), !o && uw(u) < s && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function Ew(e, t, r, n) {
        const o = t.min + .1,
          s = t.max + .1,
          {
            reachedMin: i,
            reachedMax: a
          } = Cw(o, s),
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

      function Rw(e) {
        let t = e;

        function r(e) {
          return aw(e) ? e : e.get()
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

      function Dw(e, t) {
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

      function Tw(e, t, r, n, o, s, i, a, l) {
        const d = hw(o),
          c = hw(o).reverse(),
          u = function() {
            const e = i[0];
            return h(p(c, e), r, !1)
          }().concat(function() {
            const e = t - i[0] - 1;
            return h(p(d, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function p(e, t) {
          return e.reduce((e, r) => f(e, t) > 0 ? e.concat([r]) : e, [])
        }

        function h(o, i, d) {
          const c = function(e) {
            return s.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(i);
          return o.map(t => {
            const n = d ? 0 : -r,
              o = d ? r : 0,
              s = d ? "end" : "start",
              i = c[t][s];
            return {
              index: t,
              loopPoint: i,
              slideLocation: Rw(-1),
              translate: Dw(e, l[t]),
              target: () => a.get() > i ? n : o
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

      function Nw(e, t, r) {
        let n, o = !1;
        return {
          init: function(s) {
            r && (n = new MutationObserver(e => {
              o || (dw(r) || r(s, e)) && function(e) {
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

      function Iw(e, t, r, n, o, s, i) {
        const {
          align: a,
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
        } = s, C = {
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
        }, j = C.measure(t), P = r.map(C.measure), O = function(e, t) {
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
        }(l, d), S = O.measureSize(j), k = function(e) {
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
              return lw(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(a, S), R = !u && !!g, D = u || !!g, {
          slideSizes: T,
          slideSizesWithGaps: N,
          startGap: I,
          endGap: L
        } = function(e, t, r, n, o, s) {
          const {
            measureSize: i,
            startEdge: a,
            endEdge: l
          } = e, d = r[0] && o, c = function() {
            if (!d) return 0;
            const e = r[0];
            return uw(t[a] - e[a])
          }(), u = function() {
            if (!d) return 0;
            const e = s.getComputedStyle(vw(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(i), p = r.map((e, t, r) => {
            const n = !t,
              o = yw(r, t);
            return n ? f[t] + c : o ? f[t] + u : r[t + 1][a] - e[a]
          }).map(uw);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: c,
            endGap: u
          }
        }(O, j, P, r, D, o), z = function(e, t, r, n, o, s, i, a, l) {
          const {
            startEdge: d,
            endEdge: c,
            direction: u
          } = e, f = aw(r), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return hw(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? hw(e).reduce((r, f, p) => {
                  const h = vw(r) || 0,
                    v = 0 === h,
                    m = f === mw(e),
                    y = o[d] - s[h][d],
                    g = o[d] - s[f][c],
                    b = !n && v ? u(i) : 0,
                    w = uw(g - (!n && m ? u(a) : 0) - (y + b));
                  return p && w > t + l && r.push(f), m && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(O, S, m, u, j, P, I, L, 2), {
          snaps: M,
          snapsAligned: A
        } = function(e, t, r, n, o) {
          const {
            startEdge: s,
            endEdge: i
          } = e, {
            groupSlides: a
          } = o, l = a(n).map(e => vw(e)[i] - e[0][s]).map(uw).map(t.measure), d = n.map(e => r[s] - e[s]).map(e => -uw(e)), c = a(d).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: d,
            snapsAligned: c
          }
        }(O, E, j, P, z), V = -vw(M) + vw(N), {
          snapsContained: F,
          scrollContainLimit: q
        } = function(e, t, r, n) {
          const o = Cw(-t + e, 0),
            s = r.map((e, t) => {
              const {
                min: n,
                max: s
              } = o, i = o.constrain(e), l = !t, d = yw(r, t);
              return l ? s : d || a(n, i) ? n : a(s, i) ? s : i
            }).map(e => parseFloat(e.toFixed(3))),
            i = function() {
              const e = s[0],
                t = vw(s);
              return Cw(s.lastIndexOf(e), s.indexOf(t) + 1)
            }();

          function a(e, t) {
            return pw(e, t) <= 1
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
        }(S, V, A, g), B = R ? F : A, {
          limit: K
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: Cw(r ? n - e : vw(t), n)
          }
        }(V, B, u), H = jw(mw(B), c, u), W = H.clone(), X = hw(r), G = function(e, t, r, n) {
          const o = xw(),
            s = 1e3 / 60;
          let i = null,
            a = 0,
            l = 0;

          function d(e) {
            if (!l) return;
            i || (i = e, r(), r());
            const o = e - i;
            for (i = e, a += o; a >= s;) r(), a -= s;
            n(a / s), l && (l = t.requestAnimationFrame(d))
          }

          function c() {
            t.cancelAnimationFrame(l), i = null, a = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", () => {
                e.hidden && (i = null, a = 0)
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
          eventHandler: d,
          scrollBounds: c,
          options: {
            loop: u
          }
        }, f) => {
          const p = e.settled(),
            h = !c.shouldConstrain(),
            v = u ? p : p && h,
            m = v && !a.pointerDown();
          m && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), u && (s.loop(e.direction()), i.loop()), t.to(n.get()), m && d.emit("settle"), v || d.emit("scroll")
        })(ae, e)), U = B[H.get()], Z = Rw(U), $ = Rw(U), Q = Rw(U), Y = Rw(U), J = function(e, t, r, n, o) {
          let s = 0,
            i = 0,
            a = o,
            l = .68,
            d = e.get(),
            c = 0;

          function u(e) {
            return a = e, p
          }

          function f(e) {
            return l = e, p
          }
          const p = {
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
              return a ? (r.set(e), s += t / a, s *= l, d += s, e.add(s), o = d - c) : (s = 0, r.set(n), e.set(n), o = t), i = fw(o), c = d, p
            },
            settled: function() {
              return uw(n.get() - t.get()) < .001
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
            reachedAny: s,
            removeOffset: i,
            constrain: a
          } = n;

          function l(e) {
            return e.concat().sort((e, t) => uw(e) - uw(t))[0]
          }

          function d(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const s = o.filter(e => fw(e) === n);
            return s.length ? l(s) : vw(o) - r
          }
          const c = {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: c,
                  distance: u
                } = function(r) {
                  const n = e ? i(r) : a(r),
                    o = t.map((e, t) => ({
                      diff: d(e - n, 0),
                      index: t
                    })).sort((e, t) => uw(e.diff) - uw(t.diff)),
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
          };
          return c
        }(u, B, V, K, Y), te = function(e, t, r, n, o, s, i) {
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
        }(G, H, W, J, ee, Y, i), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(K), ne = xw(), oe = function(e, t, r, n) {
          const o = {};
          let s, i = null,
            a = null,
            l = !1;
          const d = {
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
                return bw(o).reduce((t, r) => {
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
          return d
        }(t, r, i, v), {
          slideRegistry: se
        } = function(e, t, r, n, o, s) {
          const {
            groupSlides: i
          } = o, {
            min: a,
            max: l
          } = n, d = function() {
            const n = i(s),
              o = !e || "keepSnaps" === t;
            return 1 === r.length ? [s] : o ? n : n.slice(a, l).map((e, t, r) => {
              const n = !t,
                o = yw(r, t);
              return n ? gw(vw(r[0]) + 1) : o ? gw(mw(s) - vw(r)[0] + 1, vw(r)[0]) : e
            })
          }();
          return {
            slideRegistry: d
          }
        }(R, g, B, q, z, X), ie = function(e, t, r, n, o, s, i, a) {
          const l = {
            passive: !0,
            capture: !0
          };
          let d = 0;

          function c(e) {
            "Tab" === e.code && (d = (new Date).getTime())
          }
          const u = {
            init: function(u) {
              a && (s.add(document, "keydown", c, !1), t.forEach((t, c) => {
                s.add(t, "focus", t => {
                  (dw(a) || a(u, t)) && function(t) {
                    if ((new Date).getTime() - d > 10) return;
                    i.emit("slideFocusStart"), e.scrollLeft = 0;
                    const s = r.findIndex(e => e.includes(t));
                    aw(s) && (o.useDuration(0), n.index(s, 0), i.emit("slideFocus"))
                  }(c)
                }, l)
              }))
            }
          };
          return u
        }(e, r, se, te, J, ne, i, x), ae = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: i,
          containerRect: j,
          slideRects: P,
          animation: G,
          axis: O,
          dragHandler: Pw(O, e, n, o, Y, Ow(O, o), Z, G, te, J, ee, H, i, k, p, h, y, .68, _),
          eventStore: ne,
          percentOfView: k,
          index: H,
          indexPrevious: W,
          limit: K,
          location: Z,
          offsetLocation: Q,
          previousLocation: $,
          options: s,
          resizeHandler: Sw(t, i, o, r, O, b, C),
          scrollBody: J,
          scrollBounds: kw(K, Q, Y, J, k),
          scrollLooper: Ew(V, K, Q, [Z, Q, $, Y]),
          scrollProgress: re,
          scrollSnapList: B.map(re.get),
          scrollSnaps: B,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: Tw(O, S, V, T, N, M, B, Q, r),
          slideFocus: ie,
          slidesHandler: Nw(t, i, w),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: se,
          slidesToScroll: z,
          target: Y,
          translate: Dw(O, t)
        };
        return ae
      }
      const Lw = {
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

      function zw(e) {
        function t(e, t) {
          return ww(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = bw(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => bw(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function Mw(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          s = zw(o),
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
          a = xw(),
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
          v = O;
        let m, y, g, b, w = !1,
          _ = d(Lw, Mw.globalOptions),
          x = d(_),
          C = [];

        function j(t) {
          const r = Iw(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? j(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function P(t, r) {
          w || (_ = d(_, t), x = c(_), C = r || C, function() {
            const {
              container: t,
              slides: r
            } = x, n = lw(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = lw(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), m = j(x), u([_, ...C.map(({
            options: e
          }) => e)]).forEach(e => a.add(e, "change", O)), x.active && (m.translate.to(m.location.get()), m.animation.init(), m.slidesInView.init(), m.slideFocus.init(R), m.eventHandler.init(R), m.resizeHandler.init(R), m.slidesHandler.init(R), m.options.loop && m.slideLooper.loop(), g.offsetParent && b.length && m.dragHandler.init(R), y = i.init(R, C)))
        }

        function O(e, t) {
          const r = E();
          S(), P(d({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function S() {
          m.dragHandler.destroy(), m.eventStore.clear(), m.translate.clear(), m.slideLooper.clear(), m.resizeHandler.destroy(), m.slidesHandler.destroy(), m.slidesInView.destroy(), m.animation.destroy(), i.destroy(), a.clear()
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
            w || (w = !0, a.clear(), S(), l.emit("destroy"), l.clear())
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
        return P(t, r), setTimeout(() => l.emit("init"), 0), R
      }

      function Aw(e = {}, t = []) {
        const r = (0, V.useRef)(e),
          n = (0, V.useRef)(t),
          [o, s] = (0, V.useState)(),
          [i, a] = (0, V.useState)(),
          l = (0, V.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, V.useEffect)(() => {
          sw(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, V.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = iw(e),
              n = iw(t);
            return r.every((e, t) => sw(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, V.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && i) {
            Mw.globalOptions = Aw.globalOptions;
            const e = Mw(i, r.current, n.current);
            return s(e), () => e.destroy()
          }
          s(void 0)
        }, [i, s]), [a, o]
      }

      function Vw(e = {}) {
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
      Mw.globalOptions = void 0, Aw.globalOptions = void 0, Vw.globalOptions = void 0;
      const Fw = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function qw(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function Bw(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Kw(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Hw(e = {}) {
        let t, r, n, o, s = [],
          i = [];
        const a = ["select"],
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
          ("pointerDown" === t ? Kw : Bw)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            s = e.map(e => o[e]);
          return n.forEach(e => Bw(e, r)), s.forEach(e => Kw(e, r)), e
        }

        function p() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          s = f(t, s, c.snapped)
        }

        function h() {
          const e = r.slidesInView();
          i = f(e, i, c.inView)
        }
        const v = {
          name: "classNames",
          options: e,
          init: function(s, i) {
            r = s;
            const {
              mergeOptions: f,
              optionsAtMedia: v
            } = i, m = f(Fw, Hw.globalOptions), y = f(m, e);
            t = v(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, w = !!g;
            t.loop && b && (c.loop = qw(t.loop), Kw(n, c.loop)), t.draggable && w && (c.draggable = qw(t.draggable), Kw(n, c.draggable)), t.dragging && (c.dragging = qw(t.dragging), l.forEach(e => r.on(e, u))), t.snapped && (c.snapped = qw(t.snapped), a.forEach(e => r.on(e, p)), p()), t.inView && (c.inView = qw(t.inView), d.forEach(e => r.on(e, h)), h())
          },
          destroy: function() {
            l.forEach(e => r.off(e, u)), a.forEach(e => r.off(e, p)), d.forEach(e => r.off(e, h)), Bw(n, c.loop), Bw(n, c.draggable), Bw(n, c.dragging), f([], s, c.snapped), f([], i, c.inView), Object.keys(c).forEach(e => {
              c[e] = []
            })
          }
        };
        return v
      }
      Hw.globalOptions = void 0;

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

      function Xw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Gw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xw(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ww(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Uw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Zw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $w = "foundry_qmpv6yv",
        Qw = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gw(Gw({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Zw(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Uw(e.variantClassNames, e => Uw(e, e => e.split(" ")[0]))
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
      const Yw = (0, V.createContext)(null);

      function Jw() {
        const e = (0, V.useContext)(Yw);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const e_ = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: s,
          align: i = "left",
          ...a
        }, l) => {
          const d = (({
              loopPagination: e = !0
            }) => {
              const t = (0, G.rl)(),
                r = (0, G.jt)(),
                [n, o] = (0, V.useState)([]),
                s = n.length,
                [i, a] = (0, V.useState)(0),
                [l, d] = Aw({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && s > 1
                }, [Vw(), Hw()]),
                c = (0, V.useRef)(0),
                u = (0, V.useRef)(!1),
                f = n[i],
                p = (0, V.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), a(t), u.current = !0
                }, [d]),
                h = (0, V.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                v = (0, V.useCallback)((e, t) => {
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
                      const l = (d = 1 - Math.abs(a * c.current), Math.min(Math.max(d, 0), 1)).toString();
                      var d;
                      e.slideNodes()[i].style.opacity = l
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
                numAlerts: s,
                emblaRef: l,
                prevAlert: () => d?.scrollPrev(r),
                nextAlert: () => d?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: i,
                setCurrentAlertIndex: a,
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
            o && s && f([{
              status: o,
              background: s,
              align: i
            }])
          }, []);
          const h = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            v = (0, H.v6)({
              className: Qw(c)
            }, h, a),
            m = e ? U.DX : "div";
          return (0, x.jsx)(Yw.Provider, {
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
        t_ = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        r_ = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Jw();
          if (!e && !n || !n?.status) return null;
          const o = e || t_[n.status],
            s = Ee[o],
            i = (0, H.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, x.jsx)(s, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...i
          })
        }),
        n_ = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? U.DX : "div",
            s = (0, H.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, x.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        o_ = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...s
        }, i) => {
          const a = e ? U.DX : "div",
            l = (0, H.v6)({
              className: "foundry_qmpv6yo"
            }, s);
          return (0, x.jsx)(a, {
            ref: i,
            "data-testid": t,
            ...l
          })
        }),
        s_ = (0, V.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: s
          } = Jw(), i = (0, H.v6)({
            className: "foundry_qmpv6ym"
          }, r), a = (0, G.UP)(s, n), l = V.Children.map(t, e => {
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
            ref: a,
            "data-testid": e,
            ...i,
            children: (0, x.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        i_ = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, V.useRef)(null),
            i = (0, G.UP)(s, o),
            a = e ? U.DX : "a",
            {
              linkProps: l,
              isPressed: d
            } = kb(n, s),
            c = (0, H.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, x.jsx)(a, {
            "data-pressed": d,
            "data-testid": r,
            ref: i,
            ...l,
            ...c,
            children: t
          })
        }),
        a_ = (0, V.forwardRef)((e, t) => {
          const r = (0, H.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, x.jsx)(Lb, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        l_ = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const s = e ? U.DX : "div",
            i = (0, H.v6)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, x.jsx)(s, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...i,
            children: r
          })
        }),
        d_ = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Jw(), s = (0, H.v6)({
            className: $w
          }, t);
          return (0, x.jsx)($e, {
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
        c_ = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Jw(), s = (0, H.v6)({
            className: $w
          }, t);
          return (0, x.jsx)($e, {
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
        u_ = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Jw(), s = (0, H.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn foundry_tdsdcdq"
          }, t);
          return (0, x.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...s,
            children: [n + 1, "/", o]
          })
        });

      function f_(e) {
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

      function p_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function h_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p_(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = f_(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function v_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var m_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        y_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = h_(h_({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) m_(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return v_(e.variantClassNames, e => v_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        g_ = y_({
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
        b_ = y_({
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
        w_ = y_({
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
      const __ = (0, V.createContext)(null);

      function x_() {
        const e = (0, V.useContext)(__);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const C_ = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: s,
          hasBorder: i,
          isDisabled: a,
          ...l
        }, d) => {
          const c = {
              size: n,
              background: o,
              color: s,
              hasBorder: i,
              isDisabled: a
            },
            u = (0, H.v6)({
              className: b_(c)
            }, l),
            f = e ? U.DX : "div";
          return (0, x.jsx)(__.Provider, {
            value: c,
            children: (0, x.jsx)(f, {
              ref: d,
              "data-testid": r,
              "aria-disabled": a,
              ...u,
              children: t
            })
          })
        }),
        j_ = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = x_(), i = e ? U.DX : "div", a = (0, H.v6)({
            className: w_({
              size: s
            })
          }, n);
          return (0, x.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        P_ = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = Ee[e],
            o = (0, H.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, x.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        O_ = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = x_(), s = (0, H.v6)({
            className: g_({
              background: n
            })
          }, t);
          return (0, x.jsx)($e, {
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
      var S_ = "ToastProvider",
        [k_, E_, R_] = (0, wd.N)("Toast"),
        [D_, T_] = (0, ja.A)("Toast", [R_]),
        [N_, I_] = D_(S_),
        L_ = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            children: i
          } = e, [a, l] = V.useState(null), [d, c] = V.useState(0), u = V.useRef(!1), f = V.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${S_}\`. Expected non-empty \`string\`.`), (0, x.jsx)(k_.Provider, {
            scope: t,
            children: (0, x.jsx)(N_, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: s,
              toastCount: d,
              viewport: a,
              onViewportChange: l,
              onToastAdd: V.useCallback(() => c(e => e + 1), []),
              onToastRemove: V.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: u,
              isClosePausedRef: f,
              children: i
            })
          })
        };
      L_.displayName = S_;
      var z_ = "ToastViewport",
        M_ = ["F8"],
        A_ = "toast.viewportPause",
        V_ = "toast.viewportResume",
        F_ = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = M_,
            label: o = "Notifications ({hotkey})",
            ...s
          } = e, i = I_(z_, r), a = E_(r), l = V.useRef(null), d = V.useRef(null), c = V.useRef(null), u = V.useRef(null), f = (0, ae.s)(t, u, i.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = i.toastCount > 0;
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
                  if (!i.isClosePausedRef.current) {
                    const e = new CustomEvent(A_);
                    t.dispatchEvent(e), i.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (i.isClosePausedRef.current) {
                    const e = new CustomEvent(V_);
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
          }, [h, i.isClosePausedRef]);
          const v = V.useCallback(({
            tabbingDirection: e
          }) => {
            const t = a().map(t => {
              const r = t.ref.current,
                n = [r, ...ox(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [a]);
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
                    s = o.findIndex(e => e === r);
                  sx(o.slice(s + 1)) ? t.preventDefault() : n ? d.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, v]), (0, x.jsxs)(La, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, x.jsx)(B_, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                sx(v({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, x.jsx)(k_.Slot, {
              scope: r,
              children: (0, x.jsx)(Pa.sG.ol, {
                tabIndex: -1,
                ...s,
                ref: f
              })
            }), h && (0, x.jsx)(B_, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                sx(v({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      F_.displayName = z_;
      var q_ = "ToastFocusProxy",
        B_ = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, s = I_(q_, r);
          return (0, x.jsx)(kl, {
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
      B_.displayName = q_;
      var K_ = "Toast",
        H_ = V.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            ...i
          } = e, [a, l] = (0, Ol.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: s,
            caller: K_
          });
          return (0, x.jsx)(jl.C, {
            present: r || a,
            children: (0, x.jsx)(G_, {
              open: a,
              ...i,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Oa.c)(e.onPause),
              onResume: (0, Oa.c)(e.onResume),
              onSwipeStart: (0, Ca.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Ca.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, Ca.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Ca.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      H_.displayName = K_;
      var [W_, X_] = D_(K_, {
        onClose() {}
      }), G_ = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: s,
          onClose: i,
          onEscapeKeyDown: a,
          onPause: l,
          onResume: d,
          onSwipeStart: c,
          onSwipeMove: u,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...h
        } = e, v = I_(K_, r), [m, y] = V.useState(null), g = (0, ae.s)(t, e => y(e)), b = V.useRef(null), w = V.useRef(null), _ = o || v.duration, C = V.useRef(0), j = V.useRef(_), P = V.useRef(0), {
          onToastAdd: O,
          onToastRemove: S
        } = v, k = (0, Oa.c)(() => {
          const e = m?.contains(document.activeElement);
          e && v.viewport?.focus(), i()
        }), E = V.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(P.current), C.current = (new Date).getTime(), P.current = window.setTimeout(k, e))
        }, [k]);
        V.useEffect(() => {
          const e = v.viewport;
          if (e) {
            const t = () => {
                E(j.current), d?.()
              },
              r = () => {
                const e = (new Date).getTime() - C.current;
                j.current = j.current - e, window.clearTimeout(P.current), l?.()
              };
            return e.addEventListener(A_, r), e.addEventListener(V_, t), () => {
              e.removeEventListener(A_, r), e.removeEventListener(V_, t)
            }
          }
        }, [v.viewport, _, l, d, E]), V.useEffect(() => {
          s && !v.isClosePausedRef.current && E(_)
        }, [s, _, v.isClosePausedRef, E]), V.useEffect(() => (O(), () => S()), [O, S]);
        const R = V.useMemo(() => m ? tx(m) : null, [m]);
        return v.viewport ? (0, x.jsxs)(x.Fragment, {
          children: [R && (0, x.jsx)(U_, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: R
          }), (0, x.jsx)(W_, {
            scope: r,
            onClose: k,
            children: ie.createPortal((0, x.jsx)(k_.ItemSlot, {
              scope: r,
              children: (0, x.jsx)(Ia, {
                asChild: !0,
                onEscapeKeyDown: (0, Ca.mK)(a, () => {
                  v.isFocusedToastEscapeKeyDownRef.current || k(), v.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, x.jsx)(Pa.sG.li, {
                  tabIndex: 0,
                  "data-state": s ? "open" : "closed",
                  "data-swipe-direction": v.swipeDirection,
                  ...h,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, Ca.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (a?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, k()))
                  }),
                  onPointerDown: (0, Ca.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, Ca.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(v.swipeDirection),
                      s = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
                      i = o ? s(0, t) : 0,
                      a = o ? 0 : s(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      d = {
                        x: i,
                        y: a
                      },
                      f = {
                        originalEvent: e,
                        delta: d
                      };
                    n ? (w.current = d, rx("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : nx(d, v.swipeDirection, l) ? (w.current = d, rx("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: (0, Ca.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      nx(t, v.swipeDirection, v.swipeThreshold) ? rx("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : rx("toast.swipeCancel", f, n, {
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
      }), U_ = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = I_(K_, t), [s, i] = V.useState(!1), [a, l] = V.useState(!1);
        return function(e = () => {}) {
          const t = (0, Oa.c)(e);
          (0, Ja.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => i(!0)), V.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, x.jsx)(Cl, {
          asChild: !0,
          children: (0, x.jsx)(kl, {
            ...n,
            children: s && (0, x.jsxs)(x.Fragment, {
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
        return (0, x.jsx)(Pa.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Z_ = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, x.jsx)(Pa.sG.div, {
          ...n,
          ref: t
        })
      });
      Z_.displayName = "ToastDescription";
      var $_ = "ToastAction",
        Q_ = V.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, x.jsx)(ex, {
            altText: r,
            asChild: !0,
            children: (0, x.jsx)(J_, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${$_}\`. Expected non-empty \`string\`.`), null)
        });
      Q_.displayName = $_;
      var Y_ = "ToastClose",
        J_ = V.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = X_(Y_, r);
          return (0, x.jsx)(ex, {
            asChild: !0,
            children: (0, x.jsx)(Pa.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, Ca.mK)(e.onClick, o.onClose)
            })
          })
        });
      J_.displayName = Y_;
      var ex = V.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, x.jsx)(Pa.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function tx(e) {
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
              } else t.push(...tx(e))
          }
        }), t
      }

      function rx(e, t, r, {
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
        }), n ? (0, Pa.hO)(o, s) : o.dispatchEvent(s)
      }
      var nx = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          s = n > o;
        return "left" === t || "right" === t ? s && n > r : !s && o > r
      };

      function ox(e) {
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

      function sx(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var ix = L_,
        ax = F_,
        lx = H_,
        dx = Z_,
        cx = Q_,
        ux = J_;

      function fx(e) {
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

      function px(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? px(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = fx(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : px(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var mx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        yx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hx(hx({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) mx(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vx(e.variantClassNames, e => vx(e, e => e.split(" ")[0]))
            }
          }, t
        },
        gx = yx({
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
        bx = yx({
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
        wx = yx({
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
      const _x = ({
          testId: e,
          ...t
        }) => (0, x.jsx)(ix, {
          "data-testid": e,
          ...t
        }),
        xx = (0, V.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const s = (0, H.v6)({
            className: wx({
              position: r
            })
          }, n);
          return (0, x.jsx)(ax, {
            ref: o,
            "data-testid": t,
            ...s,
            children: e
          })
        }),
        Cx = (0, V.createContext)(null);

      function jx() {
        const e = (0, V.useContext)(Cx);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Px = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, s) => {
          const i = e ? U.DX : lx,
            a = (0, H.v6)({
              className: bx({
                appearance: n
              })
            }, o);
          return (0, x.jsx)(Cx.Provider, {
            value: {
              appearance: n
            },
            children: (0, x.jsx)(i, {
              ref: s,
              "data-testid": r,
              ...a,
              children: t
            })
          })
        }),
        Ox = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? U.DX : dx,
            i = (0, H.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, x.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        Sx = {
          danger: Ee.CircleX,
          information: Ee.Info,
          success: Ee.CircleCheck,
          warning: Ee.TriangleAlert,
          avocado: Ee.CircleCheck
        },
        kx = (0, V.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = jx(), o = e ? U.DX : Sx[n], s = (0, H.v6)({
            className: gx({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, x.jsx)(o, {
            ref: r,
            ...s
          })
        }),
        Ex = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, x.jsx)(cx, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, x.jsx)(U.DX, {
              children: t
            }) : (0, x.jsx)(Fe, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Rx = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, s) => {
          const i = (0, H.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, x.jsx)(ux, {
            ref: s,
            "data-testid": r,
            ...i,
            children: e ? (0, x.jsx)(U.DX, {
              children: t
            }) : (0, x.jsx)(Lb, {
              size: "SM",
              label: n
            })
          })
        });

      function Dx(e) {
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

      function Nx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tx(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Dx(o)) in n ? Object.defineProperty(n, o, {
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

      function Ix(e, t) {
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
        zx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Nx(Nx({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Lx(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ix(e.variantClassNames, e => Ix(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Mx = zx({
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
        Ax = zx({
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
        Vx = zx({
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

      function Fx() {
        const e = (0, V.useContext)(qx);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const qx = (0, V.createContext)(null),
        Bx = (0, V.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, s) => {
          const i = (0, H.v6)({
              className: Vx({
                size: n
              })
            }, o),
            a = r ? U.DX : "ol";
          return (0, x.jsx)(qx.Provider, {
            value: {
              size: n
            },
            children: (0, x.jsx)(a, {
              ref: s,
              "data-testid": t,
              ...i,
              children: e
            })
          })
        }),
        Kx = (0, V.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, s) => {
          const i = (0, V.useRef)(null),
            {
              size: a
            } = Fx(),
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
              } = kb({
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
            d = r ? U.DX : "a",
            c = (0, H.v6)({
              className: (0, ke.clsx)(Mx({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, x.jsx)("li", {
            className: Ax({
              size: a
            }),
            ref: s,
            children: (0, x.jsx)(d, {
              ref: i,
              ...c,
              children: t
            })
          })
        }),
        Hx = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = Ee[e];
          return (0, x.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        Wx = (0, V.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, s) => {
          const [i, a] = (0, V.useState)(r), {
            size: l
          } = Fx(), d = (0, H.v6)({
            className: Ax({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, x.jsx)("li", {
            ref: s,
            ...d,
            children: (0, x.jsxs)(Zh, {
              open: i,
              onOpenChange: () => a(!i),
              children: [(0, x.jsx)($h, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, x.jsx)(Jh, {
                children: (0, x.jsx)(ev, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, x.jsx)(tv, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Xx = (0, V.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = t ? U.DX : rv,
            i = (0, H.v6)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, x.jsx)(s, {
            ref: o,
            ...i,
            children: e
          })
        });

      function Gx(e) {
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

      function Ux(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Zx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ux(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Gx(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ux(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $x(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Yx = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Zx(Zx({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Qx(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $x(e.variantClassNames, e => $x(e, e => e.split(" ")[0]))
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
      const Jx = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          ...n
        }, o) => {
          const s = e ? U.DX : "div",
            i = (0, H.v6)({
              className: Yx({
                appearance: r
              })
            }, n);
          return (0, x.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...i
          })
        }),
        eC = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? U.DX : "div",
            i = (0, H.v6)({
              className: "foundry_18omk9t4 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo"
            }, n);
          return (0, x.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        tC = (0, V.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = Ee[e],
            o = (0, H.v6)({
              size: "SM",
              className: "foundry_18omk9t3",
              label: ""
            }, t);
          return (0, x.jsx)(n, {
            ref: r,
            ...o
          })
        });
      var rC = /^--/;

      function nC(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || rC.test(e) || sC.hasOwnProperty(e) && sC[e] ? ("" + t).trim() : t + "px"
      }
      var oC = {},
        sC = {
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
        iC = ["Webkit", "Ms", "Moz", "O"];
      sC = Object.keys(sC).reduce((e, t) => (iC.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), sC);
      var aC = /^(matrix|translate|scale|rotate|skew)/,
        lC = /^(translate)/,
        dC = /^(rotate|skew)/,
        cC = (e, t) => uo.num(e) && 0 !== e ? e + t : e,
        uC = (e, t) => uo.arr(e) ? e.every(e => uC(e, t)) : uo.num(e) ? e === t : parseFloat(e) === t,
        fC = class extends Ws {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              s = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), s.push(e => [`translate3d(${e.map(e=>cC(e,"px")).join(",")})`, uC(e, 0)])), ho(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), s.push(e => [e, "" === e]);
              else if (aC.test(t)) {
                if (delete n[t], uo.und(e)) return;
                const r = lC.test(t) ? "px" : dC.test(t) ? "deg" : "";
                o.push(vo(e)), s.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${cC(o,r)})`, uC(o, 0)] : e => [`${t}(${e.map(e=>cC(e,r)).join(",")})`, uC(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new pC(o, s)), super(n)
          }
        },
        pC = class extends ps {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return po(this.inputs, (r, n) => {
              const o = cs(r[0]),
                [s, i] = this.transforms[n](uo.arr(o) ? o : r.map(cs));
              e += " " + s, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && po(this.inputs, e => po(e, e => ds(e) && vs(e, this)))
          }
          observerRemoved(e) {
            0 == e && po(this.inputs, e => po(e, e => ds(e) && ms(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), fs(this, e)
          }
        };
      lo.assign({
        batchedUpdates: ie.unstable_batchedUpdates,
        createStringInterpolator: Ss,
        colors: Io
      });
      var hC = Ys(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
                ...d
              } = t,
              c = Object.values(d),
              u = Object.keys(d).map(t => r || e.hasAttribute(t) ? t : oC[t] || (oC[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== s && (e.textContent = s);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = nC(t, o[t]);
                rC.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new fC(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        vC = hC.animated,
        mC = "Dialog",
        [yC, gC] = (0, ja.A)(mC),
        [bC, wC] = yC(mC),
        _C = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: i = !0
          } = e, a = V.useRef(null), l = V.useRef(null), [d, c] = (0, Ol.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: mC
          });
          return (0, x.jsx)(bC, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: (0, za.B)(),
            titleId: (0, za.B)(),
            descriptionId: (0, za.B)(),
            open: d,
            onOpenChange: c,
            onOpenToggle: V.useCallback(() => c(e => !e), [c]),
            modal: i,
            children: r
          })
        };
      _C.displayName = mC;
      var xC = "DialogTrigger",
        CC = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = wC(xC, r), s = (0, ae.s)(t, o.triggerRef);
          return (0, x.jsx)(Pa.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": BC(o.open),
            ...n,
            ref: s,
            onClick: (0, Ca.mK)(e.onClick, o.onOpenToggle)
          })
        });
      CC.displayName = xC;
      var jC = "DialogPortal",
        [PC, OC] = yC(jC, {
          forceMount: void 0
        }),
        SC = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = wC(jC, t);
          return (0, x.jsx)(PC, {
            scope: t,
            forceMount: r,
            children: V.Children.map(n, e => (0, x.jsx)(jl.C, {
              present: r || s.open,
              children: (0, x.jsx)(Cl, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      SC.displayName = jC;
      var kC = "DialogOverlay",
        EC = V.forwardRef((e, t) => {
          const r = OC(kC, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = wC(kC, e.__scopeDialog);
          return s.modal ? (0, x.jsx)(jl.C, {
            present: n || s.open,
            children: (0, x.jsx)(DC, {
              ...o,
              ref: t
            })
          }) : null
        });
      EC.displayName = kC;
      var RC = (0, Pl.TL)("DialogOverlay.RemoveScroll"),
        DC = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = wC(kC, r);
          return (0, x.jsx)(uc.A, {
            as: RC,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, x.jsx)(Pa.sG.div, {
              "data-state": BC(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        TC = "DialogContent",
        NC = V.forwardRef((e, t) => {
          const r = OC(TC, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = wC(TC, e.__scopeDialog);
          return (0, x.jsx)(jl.C, {
            present: n || s.open,
            children: s.modal ? (0, x.jsx)(IC, {
              ...o,
              ref: t
            }) : (0, x.jsx)(LC, {
              ...o,
              ref: t
            })
          })
        });
      NC.displayName = TC;
      var IC = V.forwardRef((e, t) => {
          const r = wC(TC, e.__scopeDialog),
            n = V.useRef(null),
            o = (0, ae.s)(t, r.contentRef, n);
          return V.useEffect(() => {
            const e = n.current;
            if (e) return (0, fc.Eq)(e)
          }, []), (0, x.jsx)(zC, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, Ca.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, Ca.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, Ca.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        LC = V.forwardRef((e, t) => {
          const r = wC(TC, e.__scopeDialog),
            n = V.useRef(!1),
            o = V.useRef(!1);
          return (0, x.jsx)(zC, {
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
        zC = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            ...i
          } = e, a = wC(TC, r), l = V.useRef(null), d = (0, ae.s)(t, l);
          return dc(), (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(tc, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: s,
              children: (0, x.jsx)(Ra, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": BC(a.open),
                ...i,
                ref: d,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, x.jsxs)(x.Fragment, {
              children: [(0, x.jsx)(XC, {
                titleId: a.titleId
              }), (0, x.jsx)(GC, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        MC = "DialogTitle",
        AC = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = wC(MC, r);
          return (0, x.jsx)(Pa.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      AC.displayName = MC;
      var VC = "DialogDescription",
        FC = V.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = wC(VC, r);
          return (0, x.jsx)(Pa.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      FC.displayName = VC;
      var qC = "DialogClose";

      function BC(e) {
        return e ? "open" : "closed"
      }
      V.forwardRef((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, o = wC(qC, r);
        return (0, x.jsx)(Pa.sG.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: (0, Ca.mK)(e.onClick, () => o.onOpenChange(!1))
        })
      }).displayName = qC;
      var KC = "DialogTitleWarning",
        [HC, WC] = (0, ja.q)(KC, {
          contentName: TC,
          titleName: MC,
          docsSlug: "dialog"
        }),
        XC = ({
          titleId: e
        }) => {
          const t = WC(KC),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return V.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        GC = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${WC("DialogDescriptionWarning").contentName}}.`;
          return V.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        UC = _C,
        ZC = CC,
        $C = SC,
        QC = EC,
        YC = NC,
        JC = AC,
        ej = FC;
      const tj = () => {
          const e = (0, G.Ub)(H.fi.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        rj = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function nj(e) {
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

      function oj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function sj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? oj(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = nj(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ij(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var aj = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        lj = "foundry_8kowh41",
        dj = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sj(sj({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) aj(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ij(e.variantClassNames, e => ij(e, e => e.split(" ")[0]))
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
      const cj = (0, V.createContext)(null);

      function uj() {
        const e = (0, V.useContext)(cj);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const fj = ({
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
          const d = (0, H.v6)({
              "data-testid": e
            }, l),
            [c, u] = (0, G.ic)({
              prop: n,
              defaultProp: t ?? !1,
              onChange: r
            }),
            f = (0, G.ZC)(c);
          return (0, x.jsx)(cj.Provider, {
            value: {
              isOpen: c,
              isControlled: void 0 !== n,
              openImmediately: !(void 0 !== f || !t),
              setIsOpen: u,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: s,
              onCloseTransitionStart: i,
              onCloseTransitionComplete: a,
              contentId: (0, V.useId)(),
              descriptionId: (0, V.useId)(),
              triggerRef: (0, V.useRef)(null),
              dialogSpringRef: ta(),
              overlaySpringRef: ta()
            },
            children: (0, x.jsx)(UC, {
              open: c,
              onOpenChange: u,
              ...d
            })
          })
        },
        pj = (0, V.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: s
          } = uj(), i = rj(), a = (0, G.jt)(), l = ra(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: i(0),
            enter: i(100),
            leave: i(0),
            config: fi.stiff,
            immediate: a || s
          }), d = (0, H.v6)({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), c = vC(QC);
          return (0, V.useEffect)(() => {
            o.start()
          }, [n]), l((e, t) => t ? (0, x.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...d,
            style: e
          }) : null)
        }),
        hj = (0, V.forwardRef)(({
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
            contentId: d,
            triggerRef: c,
            onOpenTransitionStart: u,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: h,
            dialogSpringRef: v,
            overlaySpringRef: m
          } = uj(), y = (0, G.rl)(), g = (0, G.jt)(), b = (0, V.useRef)(null), w = tj(), {
            bindDrag: _
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const s = rj(),
              i = tj(),
              a = (0, V.useRef)();
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
                if (p && (a.current = function(e, t) {
                    for (; e;) {
                      if (e.scrollHeight > e.clientHeight) {
                        if (0 !== e.scrollTop) return !1;
                        if (t < 0) return !1;
                        if ("dialog" === e.getAttribute("role")) return !0
                      }
                      e = e.parentNode
                    }
                  }(h, c)), (!a.current || d < -70) && u(), a.current) {
                  const e = 100 * (v - d) / v;
                  r.start({
                    ...s(e),
                    immediate: !0
                  }), t.start({
                    ...i(e),
                    immediate: !0
                  })
                }
                f && (d > .5 * v || l > .5 && c > 0 ? (t.start({
                  ...i(0),
                  immediate: !1,
                  config: fi.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...s(0),
                  immediate: !1,
                  config: fi.stiff
                })) : (t.start({
                  ...i(100),
                  immediate: !1,
                  config: fi.stiff
                }), r.start({
                  ...s(100),
                  immediate: !1,
                  config: fi.stiff
                })))
              }, Cr(jr), Fr({
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
              a(!1), p?.()
            },
            onCloseTransitionComplete: h
          }), C = ra(i, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: i ? 100 : 0,
            config: fi.stiff,
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
          }, [i]);
          const j = (0, G.UP)(b, s),
            P = y && !g && !n && _(),
            O = (0, H.v6)({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: d
            }, P || {}, o),
            S = vC(YC);
          return C((t, r) => r ? (0, x.jsx)(S, {
            forceMount: !0,
            ref: j,
            ...O,
            style: t,
            children: e
          }) : null)
        }),
        vj = ({
          testId: e,
          ...t
        }) => {
          const r = (0, H.v6)({
            "data-testid": e
          }, t);
          return (0, x.jsx)($C, {
            forceMount: !0,
            ...r
          })
        },
        mj = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, x.jsx)(JC, {
            ref: n,
            ...o,
            children: e
          })
        }),
        yj = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            "data-testid": t
          }, r);
          return (0, x.jsx)(ej, {
            ref: n,
            ...o,
            children: e
          })
        }),
        gj = (0, V.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, r);
          return (0, x.jsxs)(Gp, {
            ref: n,
            ...o,
            children: [(0, x.jsx)(Up, {
              className: "foundry_xov33ne",
              children: e
            }), (0, x.jsx)(Zp, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, x.jsx)($p, {
                className: "foundry_xov33ng"
              })
            })]
          })
        }),
        bj = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.v6)({
              "data-testid": r,
              className: "foundry_xov33n2"
            }, n),
            i = e ? U.DX : "div";
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        wj = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.v6)({
              "data-testid": r,
              className: "foundry_xov33n3"
            }, n),
            i = e ? U.DX : "div";
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        _j = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.v6)({
              "data-testid": r,
              className: "foundry_xov33n8"
            }, n),
            i = e ? U.DX : "header";
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        xj = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.v6)({
              "data-testid": r,
              className: "foundry_xov33nc"
            }, n),
            i = e ? U.DX : "footer";
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Cj = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n,
          ...o
        }, s) => {
          const i = (0, H.v6)({
              "data-testid": r,
              className: dj({
                align: n
              })
            }, o),
            a = e ? U.DX : JC;
          return (0, x.jsx)(a, {
            ref: s,
            ...i,
            children: t
          })
        }),
        jj = (0, V.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: s,
            setIsOpen: i
          } = uj(), a = (0, H.v6)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? r?.(e), !s && i(!1)
            }
          }, n);
          return (0, x.jsx)(Lb, {
            ...a,
            size: "MD",
            ref: o,
            children: e
          })
        }),
        Pj = (0, V.forwardRef)((e, t) => {
          const r = (0, H.v6)({
            className: "foundry_xov33n5"
          }, e);
          return (0, x.jsx)($e, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "SM"
          })
        }),
        Oj = (0, V.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: s,
            setIsOpen: i
          } = uj(), a = (0, H.v6)({
            className: lj,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !s && i(!1)
            }
          }, n);
          return (0, x.jsx)(Fe, {
            ref: o,
            ...a,
            children: e
          })
        }),
        Sj = (0, V.forwardRef)(({
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
            contentId: d,
            triggerRef: c
          } = uj(), u = (0, G.UP)(c, s), f = (0, H.v6)({
            className: lj,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": d,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !i && a(!0)
            }
          }, o), p = e ? U.DX : ZC;
          return (0, x.jsx)(p, {
            ...f,
            ref: u,
            children: t
          })
        });

      function kj(...e) {
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
      var Ej = Symbol.for("react.lazy"),
        Rj = F[" use ".trim().toString()];

      function Dj(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === Ej && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function Tj(e) {
        const t = V.forwardRef((e, t) => {
          let {
            children: r,
            ...n
          } = e;
          if (Dj(r) && "function" == typeof Rj && (r = Rj(r._payload)), V.isValidElement(r)) {
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
            return r.type !== V.Fragment && (o.ref = t ? (0, ae.t)(t, e) : e), V.cloneElement(r, o)
          }
          return V.Children.count(r) > 1 ? V.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Nj = Symbol("radix.slottable");

      function Ij(e) {
        return V.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Nj
      }
      var Lj = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = function(e) {
              const t = Tj(e),
                r = V.forwardRef((e, r) => {
                  let {
                    children: n,
                    ...o
                  } = e;
                  Dj(n) && "function" == typeof Rj && (n = Rj(n._payload));
                  const s = V.Children.toArray(n),
                    i = s.find(Ij);
                  if (i) {
                    const e = i.props.children,
                      n = s.map(t => t === i ? V.Children.count(e) > 1 ? V.Children.only(null) : V.isValidElement(e) ? e.props.children : null : t);
                    return (0, x.jsx)(t, {
                      ...o,
                      ref: r,
                      children: V.isValidElement(e) ? V.cloneElement(e, void 0, n) : null
                    })
                  }
                  return (0, x.jsx)(t, {
                    ...o,
                    ref: r,
                    children: n
                  })
                });
              return r.displayName = `${e}.Slot`, r
            }(`Primitive.${t}`),
            n = V.forwardRef((e, n) => {
              const {
                asChild: o,
                ...s
              } = e, i = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, x.jsx)(i, {
                ...s,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {}),
        zj = r(36553);

      function Mj() {
        return () => {}
      }
      var Aj = "Avatar",
        [Vj, Fj] = function(e, t = []) {
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
            const s = r.length;
            r = [...r, n];
            const i = t => {
              const {
                scope: r,
                children: n,
                ...i
              } = t, a = r?.[e]?.[s] || o, l = V.useMemo(() => i, Object.values(i));
              return (0, x.jsx)(a.Provider, {
                value: l,
                children: n
              })
            };
            return i.displayName = t + "Provider", [i, function(r, i) {
              const a = i?.[e]?.[s] || o,
                l = V.useContext(a);
              if (l) return l;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, kj(n, ...t)]
        }(Aj),
        [qj, Bj] = Vj(Aj),
        Kj = V.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, s] = V.useState("idle");
          return (0, x.jsx)(qj, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: s,
            children: (0, x.jsx)(Lj.span, {
              ...n,
              ref: t
            })
          })
        });
      Kj.displayName = Aj;
      var Hj = "AvatarImage",
        Wj = V.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...s
          } = e, i = Bj(Hj, r), a = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, zj.useSyncExternalStore)(Mj, () => !0, () => !1),
              o = V.useRef(null),
              s = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [i, a] = V.useState(() => Gj(s, e));
            return (0, Ja.N)(() => {
              a(Gj(s, e))
            }, [s, e]), (0, Ja.N)(() => {
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
          }(n, s), l = (0, Oa.c)(e => {
            o(e), i.onImageLoadingStatusChange(e)
          });
          return (0, Ja.N)(() => {
            "idle" !== a && l(a)
          }, [a, l]), "loaded" === a ? (0, x.jsx)(Lj.img, {
            ...s,
            ref: t,
            src: n
          }) : null
        });
      Wj.displayName = Hj;
      var Xj = "AvatarFallback";

      function Gj(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      V.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, s = Bj(Xj, r), [i, a] = V.useState(void 0 === n);
        return V.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => a(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), i && "loaded" !== s.imageLoadingStatus ? (0, x.jsx)(Lj.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Xj;
      var Uj = Kj,
        Zj = Wj;

      function $j(e) {
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

      function Qj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Yj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qj(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = $j(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Jj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var eP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tP = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Yj(Yj({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) eP(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jj(e.variantClassNames, e => Jj(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rP = tP({
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
        nP = "var(--foundry_v912w22)",
        oP = "var(--foundry_v912w23)",
        sP = tP({
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
        iP = tP({
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
        aP = "var(--foundry_v912w21)",
        lP = "var(--foundry_v912w20)",
        dP = tP({
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
      const cP = (0, V.createContext)(null);

      function uP() {
        const e = (0, V.useContext)(cP);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const fP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: s = !1,
          ...i
        }, a) => {
          const l = (0, H.v6)({
            "data-testid": r,
            "aria-disabled": s,
            className: rP({
              isDisabled: s
            }),
            asChild: e
          }, i);
          return (0, x.jsx)(cP.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: s
            },
            children: (0, x.jsx)(Uj, {
              ref: a,
              ...l,
              children: t
            })
          })
        }),
        pP = (0, V.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: s,
            isDisabled: i
          } = uP(), [a, l] = (0, V.useState)(!1);
          (0, V.useEffect)(() => {
            l(!1)
          }, [r]);
          const d = a || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, H.v6)({
              className: sP({
                isDisabled: i
              }),
              src: d,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, n);
          return (0, x.jsx)("span", {
            className: iP({
              size: s,
              isDisabled: i,
              isFallback: a
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, x.jsx)(Zj, {
              ref: o,
              ...c
            })
          })
        }),
        hP = (0, V.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, V.useRef)(null),
            {
              size: s,
              status: i,
              isDisabled: a
            } = uP(),
            l = (0, G.UP)(o, n),
            d = (0, H.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: dP({
                status: i,
                size: s,
                isDisabled: a
              }),
              style: (0, B.DI)({
                [lP]: t?.online,
                [aP]: t?.offline,
                [nP]: t?.away,
                [oP]: t?.busy
              })
            }, r);
          return (0, x.jsx)("span", {
            ref: l,
            ...d
          })
        });

      function vP(e) {
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

      function mP(e, t) {
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
          t % 2 ? mP(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = vP(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mP(Object(r)).forEach(function(t) {
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
        wP = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yP(yP({}, e.defaultVariants), t);
            for (var o in n) {
              var s, i = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != i) {
                var a = i;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) bP(d, n, e.defaultVariants) && (r += " " + c);
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
      const _P = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            i = e ? U.DX : "nav";
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        xP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            i = e ? U.DX : "div";
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        CP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, s) => {
          const i = (0, V.useRef)(null),
            a = (0, G.UP)(i, s),
            {
              linkProps: l,
              isPressed: d
            } = kb(o, i),
            c = (0, H.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": d,
              "data-active": r,
              className: (0, ke.clsx)(wP({
                isActive: r
              }))
            }, l),
            u = e ? U.DX : "a";
          return (0, x.jsx)(u, {
            ref: a,
            ...c,
            children: t
          })
        }),
        jP = (0, V.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, x.jsx)(CP, {
            ref: n,
            ...o,
            children: (0, x.jsx)(Ee.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        PP = (0, V.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, H.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, x.jsx)(CP, {
            ref: n,
            ...o,
            children: (0, x.jsx)(Ee.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        OP = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, H.v6)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            }, n),
            s = e ? U.DX : "span";
          return (0, x.jsx)(s, {
            ...o,
            children: t || "..."
          })
        },
        SP = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, H.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            s = e ? U.DX : "div";
          return (0, x.jsx)(s, {
            ...o,
            children: t
          })
        },
        kP = (0, V.createContext)(null);

      function EP() {
        const e = (0, V.useContext)(kP);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const RP = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, V.useId)(),
            s = (0, H.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            i = e ? U.DX : "div";
          return (0, x.jsx)(kP.Provider, {
            value: {
              labelId: o
            },
            children: (0, x.jsx)(i, {
              ...s,
              children: t
            })
          })
        },
        DP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = EP(), i = (0, H.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, n), a = e ? U.DX : "label";
          return (0, x.jsx)(a, {
            ref: o,
            id: s,
            ...i,
            children: t
          })
        }),
        TP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = EP(), i = (0, H.v6)({
            "aria-labelledby": s,
            className: "foundry_2jlbztc"
          }, n), a = e ? U.DX : gv;
          return (0, x.jsxs)(a, {
            ...i,
            children: [(0, x.jsxs)(_v, {
              ref: o,
              children: [(0, x.jsx)(xv, {
                placeholder: r
              }), (0, x.jsx)(Cv, {})]
            }), (0, x.jsx)(Rv, {
              children: (0, x.jsx)(bv, {
                children: (0, x.jsx)(wv, {
                  children: t
                })
              })
            })]
          })
        }),
        NP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.v6)({
              "data-testid": r
            }, n),
            i = e ? U.DX : Sv;
          return (0, x.jsx)(i, {
            ...s,
            ref: o,
            children: (0, x.jsx)(kv, {
              children: t
            })
          })
        }),
        IP = (0, V.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, H.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, n),
            i = e ? U.DX : "p";
          return (0, x.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        })
    },
    36553: (e, t, r) => {
      e.exports = r(44622)
    },
    44622: (e, t, r) => {
      var n = r(71127),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        s = n.useState,
        i = n.useEffect,
        a = n.useLayoutEffect,
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
          n = s({
            inst: {
              value: r,
              getSnapshot: t
            }
          }),
          o = n[0].inst,
          c = n[1];
        return a(function() {
          o.value = r, o.getSnapshot = t, d(o) && c({
            inst: o
          })
        }, [e, r, t]), i(function() {
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
    }
  }
]);